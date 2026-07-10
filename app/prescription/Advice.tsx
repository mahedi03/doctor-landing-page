"use client";

export function Advice({
  advice,
  nextVisit,
  onAdviceChange,
  onNextVisitChange,
}: {
  advice: string;
  nextVisit: string;
  onAdviceChange: (v: string) => void;
  onNextVisitChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-4 border-b border-navy-900/15 py-4 sm:grid-cols-[1fr_220px]">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45">
          Advice
        </span>
        <textarea
          value={advice}
          onChange={(e) => onAdviceChange(e.target.value)}
          placeholder="e.g. Low-salt diet, 30 min walk daily, avoid stress"
          rows={2}
          className="w-full resize-none rounded-md border border-navy-900/15 bg-white/60 px-2 py-1.5 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-wider text-navy-900/45">
          Next Visit
        </span>
        <input
          type="date"
          value={nextVisit}
          onChange={(e) => onNextVisitChange(e.target.value)}
          className="w-full rounded-md border border-navy-900/15 bg-white/60 px-2 py-1.5 text-sm text-navy-900 outline-none focus:border-sapphire-600"
        />
      </div>
    </div>
  );
}
