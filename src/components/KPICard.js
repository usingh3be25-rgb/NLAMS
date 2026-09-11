// NLAMS KPI Card Component
import { Icon } from "./Icons.js";

export function KPICard({ title, value, subtext, icon, trend, trendColor = "emerald", onClick, active = false }) {
  const activeClass = active ? "ring-2 ring-indigo-600 border-indigo-600 shadow-md" : "border-slate-200 hover:border-slate-300 hover:shadow-sm";
  const cursorClass = onClick ? "cursor-pointer" : "";
  const cardClass = "bg-white rounded-xl p-4 border transition-all duration-200 " + activeClass + " " + cursorClass;
  const trendClass = "font-medium " + (trendColor === "rose" ? "text-rose-600" : "text-emerald-600");

  return (
    <div 
      onClick={onClick}
      className={cardClass}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</span>
        {icon && (
          <div className="p-2 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
            <Icon name={icon} className="w-5 h-5 text-slate-700" />
          </div>
        )}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight text-slate-900">{value}</span>
      </div>
      {(subtext || trend) && (
        <div className="mt-2 flex items-center justify-between text-xs">
          {subtext && <span className="text-slate-500">{subtext}</span>}
          {trend && (
            <span className={trendClass}>
              {trend}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
