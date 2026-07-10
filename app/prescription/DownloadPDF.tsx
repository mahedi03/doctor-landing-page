"use client";

import { useState, type RefObject } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// html2canvas দিয়ে <input>/<textarea>/<select> এর ভিতরের ভ্যালু আঁকতে গেলে প্রায়ই
// টেক্সট উপর থেকে অর্ধেক কেটে (clipped) render হয় — কারণ canvas element-এর
// প্রকৃত height আর ফন্টের line-height এর হিসাব ঠিকমতো মেলে না।
// এই ফাংশনটা ক্লোন করা DOM-এর সব ফর্ম এলিমেন্টকে তাদের বর্তমান value/checked
// state সহ সাধারণ <div>/<span> দিয়ে replace করে দেয়, যাতে html2canvas এগুলোকে
// প্লেইন টেক্সট হিসেবে সঠিকভাবে আঁকতে পারে।
function convertFormElementsToText(root: HTMLElement) {
  const elements = root.querySelectorAll("input, textarea, select");

  elements.forEach((el) => {
    if (el instanceof HTMLInputElement && el.type === "checkbox") {
      const box = document.createElement("div");
      box.style.width = "16px";
      box.style.height = "16px";
      box.style.margin = "0 auto";
      box.style.display = "flex";
      box.style.alignItems = "center";
      box.style.justifyContent = "center";
      box.style.border = "1.5px solid #1e2a4a";
      box.style.borderRadius = "3px";
      box.style.boxSizing = "border-box";
      if (el.checked) {
        box.style.backgroundColor = "#1e2a4a";
        // ইউনিকোড ✓ ক্যারেক্টার html2canvas-এ ফন্ট গ্লিফ হিসেবে ভুলভাবে/কাত হয়ে render হচ্ছিল,
        // তাই এর বদলে vector SVG দিয়ে checkmark আঁকা হলো — এটা নির্ভরযোগ্যভাবে সোজা ও center হয়ে আসে
        box.innerHTML =
          '<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">' +
          '<path d="M1 4L3.5 6.5L9 1" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
          "</svg>";
      }
      el.replaceWith(box);
      return;
    }

    let text = "";
    if (el instanceof HTMLSelectElement) {
      text = el.options[el.selectedIndex]?.text ?? "";
    } else if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      text = el.value;
    }

    const replacement = document.createElement("div");
    replacement.className = el.className;
    replacement.textContent = text;
    replacement.style.whiteSpace = "pre-wrap";
    replacement.style.wordBreak = "break-word";
    replacement.style.lineHeight = "1.5";
    replacement.style.display = "block";
    replacement.style.boxSizing = "border-box";
    if (el.tagName === "TEXTAREA") {
      replacement.style.minHeight = "2.6em";
    }

    el.replaceWith(replacement);
  });
}

export function DownloadPDF({ targetRef }: { targetRef: RefObject<HTMLDivElement> }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!targetRef.current) return;
    setLoading(true);
    
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const originalElement = targetRef.current;

      // ১. ট্রিক এবং ফিক্স: ক্লোন করা আইফ্রেম এরর দূর করতে এলিমেন্টের একটি ডিপ-ক্লোন তৈরি করা হলো
      const clonedElement = originalElement.cloneNode(true) as HTMLDivElement;
      
      // ২. ক্লোন করা এলিমেন্টে ডেস্কটপ উইডথ এবং স্টাইল পুশ করা (মূল স্ক্রিনে কোনো প্রভাব পড়বে না)
      clonedElement.style.width = "1024px";
      clonedElement.style.minWidth = "1024px";
      clonedElement.style.height = "auto";
      clonedElement.style.overflow = "visible";
      clonedElement.style.position = "absolute";
      clonedElement.style.left = "-9999px"; // স্ক্রিনের বাইরে পাঠিয়ে হিডেন রাখা হলো
      clonedElement.style.top = "0px";

      // ক্লোন এলিমেন্টের ভেতরের টেবিল/গ্রিড সোজা করার জন্য উইডথ ফিক্স
      const tables = clonedElement.querySelectorAll("table, .grid");
      tables.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.width = "100%";
        }
      });

      // বাটন এবং প্লাস আইকনগুলো ক্লোন থেকেই সরাসরি রিমুভ করে দেওয়া হলো (বাটন হাইড করার ১০০% গ্যারান্টি)
      const buttonsAndElements = clonedElement.querySelectorAll("button, [data-html2canvas-ignore]");
      buttonsAndElements.forEach((el) => el.remove());

      // অতিরিক্ত সেফটি হিসেবে যেগুলোতে "+" বা "Add Medicine" টেক্সট আছে সেগুলোও রিমুভ করা হচ্ছে
      const allElements = clonedElement.getElementsByTagName("*");
      for (let i = allElements.length - 1; i >= 0; i--) {
        const el = allElements[i];
        if (el.textContent?.trim() === "+" || el.textContent?.includes("Add Medicine")) {
          el.remove();
        }
      }

      // ৩.৫. inputs/textarea/select গুলোকে plain div দিয়ে replace করা হলো —
      // html2canvas ফর্ম এলিমেন্টের টেক্সট প্রায়ই অর্ধেক কেটে (clip হয়ে) render করে,
      // তাই আসল ভ্যালু বসিয়ে সাধারণ div/text হিসেবে আঁকা হচ্ছে যাতে PDF-এ টেক্সট পুরোপুরি দেখা যায়
      convertFormElementsToText(clonedElement);

      // ৩. ক্লোনটিকে সাময়িকভাবে ডকুমেণ্টের বডিতে যুক্ত করা হচ্ছে যেন html2canvas এটি খুঁজে পায়
      document.body.appendChild(clonedElement);

      // ৪. ক্যানভাস জেনারেট করা
      const canvas = await html2canvas(clonedElement, {
        scale: 2, // ক্রিস্প এবং ক্লিয়ার প্রিন্টের জন্য
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
        width: 1024,
        windowWidth: 1024,
      });

      // ৫. ক্যানভাস নেওয়া শেষ, বডি থেকে ক্লোন করা ডিভটি ডিলিট করে দেওয়া হলো
      document.body.removeChild(clonedElement);

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      const margin = 10; 
      const usableWidth = pageWidth - margin * 2;
      const usableHeight = pageHeight - margin * 2;
      const imgHeight = (canvas.height * usableWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = margin;

      // ১ম পেজ ডাটা ইমেজ যোগ করা
      pdf.addImage(imgData, "PNG", margin, position, usableWidth, imgHeight);
      heightLeft -= usableHeight;

      // মাল্টি-পেজ হ্যান্ডলিং লুপ
      while (heightLeft > 0) {
        const currentPosition = margin - (imgHeight - heightLeft - margin);
        pdf.addPage();
        pdf.addImage(imgData, "PNG", margin, currentPosition, usableWidth, imgHeight);
        heightLeft -= usableHeight;
      }

      const today = new Date().toISOString().split('T')[0];
      pdf.save(`Prescription-${today}.pdf`);
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      size="lg"
      className="w-full sm:w-auto"
    >
      {loading ? <Loader2 className="h-[18px] w-[18px] animate-spin" /> : <Download className="h-[18px] w-[18px]" />}
      {loading ? "Preparing PDF..." : "Download Prescription PDF"}
    </Button>
  );
}