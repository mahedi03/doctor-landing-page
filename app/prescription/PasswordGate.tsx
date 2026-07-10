"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { PRESCRIPTION_PASSWORD } from "@/lib/auth";

const STORAGE_KEY = "prescription_unlocked";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  // null = এখনো sessionStorage চেক করা হয়নি (প্রথম রেন্ডারে flash এড়াতে)
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === PRESCRIPTION_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  // চেক শেষ না হওয়া পর্যন্ত কিছু দেখানো হচ্ছে না, যাতে ফর্ম এক সেকেন্ডের জন্যও flash না করে
  if (unlocked === null) {
    return null;
  }

  if (!unlocked) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-2xl border border-navy-900/10 bg-white p-8 shadow-card"
        >
          <div className="mb-5 flex flex-col items-center gap-2 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sapphire-600/10 text-sapphire-600">
              <Lock className="h-5 w-5" />
            </div>
            <h2 className="font-display text-lg font-semibold text-navy-900">
              Protected Page
            </h2>
            <p className="text-xs text-navy-900/50">
              Enter password to create a prescription
            </p>
          </div>

          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            className="w-full rounded-md border border-navy-900/15 bg-white px-3 py-2 text-sm text-navy-900 outline-none focus:border-sapphire-600"
          />

          {error && (
            <p className="mt-2 text-xs text-red-500">
              Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-sapphire-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sapphire-700"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
