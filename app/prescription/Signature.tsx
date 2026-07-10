"use client";

import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { doctor } from "@/lib/doctor";

export function Signature() {
  const [signature, setSignature] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setSignature(reader.result as string);
    reader.readAsDataURL(file);

    // একই ফাইল আবার সিলেক্ট করলেও যেন onChange ট্রিগার হয়
    e.target.value = "";
  };

  const handleRemove = () => setSignature(null);

  return (
    <div className="flex items-end justify-between pt-8">
      <p className="max-w-[260px] text-[11px] leading-relaxed text-navy-900/45">
        This prescription is generated electronically and is valid without a
        physical stamp. For queries, contact the chamber directly.
      </p>
      <div className="flex flex-col items-center gap-1">
        <div className="relative flex h-12 w-40 items-end justify-center border-b-2 border-navy-900/70">
          {signature ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={signature}
                alt="Doctor's signature"
                className="max-h-11 max-w-full object-contain"
              />
              <button
                type="button"
                onClick={handleRemove}
                aria-label="Remove signature"
                className="absolute -right-1 -top-2 rounded-full bg-white p-0.5 text-navy-900/40 shadow-sm ring-1 ring-navy-900/10 transition-colors hover:text-red-500 print:hidden"
              >
                <X className="h-3 w-3" />
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex h-full w-full flex-col items-center justify-center gap-1 pb-1 text-navy-900/30 transition-colors hover:text-sapphire-600 print:hidden"
            >
              <Upload className="h-4 w-4" />
              <span className="font-mono text-[9px] uppercase tracking-wider">
                Upload signature
              </span>
            </button>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden print:hidden"
        />

        <p className="font-display text-sm font-semibold text-navy-900">{doctor.shortName}</p>
        <p className="font-mono text-[10px] text-navy-900/50">{doctor.registrationNumber}</p>
      </div>
    </div>
  );
}