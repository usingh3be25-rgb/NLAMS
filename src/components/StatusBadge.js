// NLAMS Status Badge Component
export function StatusBadge({ status, className = "" }) {
  const s = (status || "").toLowerCase();
  
  let bg = "bg-slate-100 text-slate-700 border-slate-300 ring-slate-400/20";
  let dot = "bg-slate-400";
  
  if (s.includes("verified") || s.includes("available") || s.includes("completed") || s.includes("acquired") || s.includes("paid") || s.includes("on track") || s.includes("success")) {
    bg = "bg-emerald-50 text-emerald-800 border-emerald-300 ring-emerald-600/20";
    dot = "bg-emerald-500";
  } else if (s.includes("dispute") || s.includes("high") || s.includes("delayed") || s.includes("error") || s.includes("at risk")) {
    bg = "bg-rose-50 text-rose-800 border-rose-300 ring-rose-600/20";
    dot = "bg-rose-500 animate-pulse";
  } else if (s.includes("process") || s.includes("progress") || s.includes("partial") || s.includes("review") || s.includes("medium") || s.includes("warning") || s.includes("pending")) {
    bg = "bg-amber-50 text-amber-800 border-amber-300 ring-amber-600/20";
    dot = "bg-amber-500";
  }

  const fullClass = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ring-1 " + bg + " " + className;
  const dotClass = "w-1.5 h-1.5 rounded-full " + dot;

  return (
    <span className={fullClass}>
      <span className={dotClass}></span>
      {status}
    </span>
  );
}
