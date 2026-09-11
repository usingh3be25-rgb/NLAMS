// NLAMS Progress Bar Component
export function ProgressBar({ value = 0, max = 100, label, color = "navy", threshold, height = "h-2.5", showText = true }) {
  const percent = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);
  
  let barColor = "bg-indigo-700";
  if (color === "emerald" || percent >= 80) barColor = "bg-emerald-600";
  if (color === "rose" || (threshold && percent < threshold && color !== "emerald")) barColor = "bg-rose-600";
  if (color === "amber") barColor = "bg-amber-500";
  if (color === "blue") barColor = "bg-blue-600";

  const containerClass = "w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 relative " + height;
  const innerClass = "h-full rounded-full transition-all duration-500 " + barColor;

  return (
    <div className="w-full">
      {(label || showText) && (
        <div className="flex justify-between items-center text-xs mb-1 font-medium text-slate-700">
          {label && <span>{label}</span>}
          {showText && <span className="font-bold text-slate-900">{percent}%</span>}
        </div>
      )}
      <div className={containerClass}>
        {threshold && (
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10" 
            style={{ left: percent + "%" }} 
            title={"Threshold: " + threshold + "%"}
          />
        )}
        <div 
          className={innerClass} 
          style={{ width: percent + "%" }}
        />
      </div>
    </div>
  );
}
