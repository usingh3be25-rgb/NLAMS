// NLAMS 15-Stage Project Lifecycle Timeline Component
import { Icon } from "./Icons.js";

export function ProjectTimeline({ stages = [] }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-slate-900 text-base">Integrated Project Lifecycle Timeline</h3>
          <p className="text-xs text-slate-500 mt-0.5">Tracking 15 statutory milestones from Proposal to Final Project Commissioning</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Completed</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> In Progress</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span> Dispute/Delayed</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span> Pending</span>
        </div>
      </div>

      <div className="relative mt-6">
        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {stages.map((stage, idx) => {
            const isDone = stage.status === "Completed";
            const isWarn = stage.status === "In Progress";
            const isDispute = stage.status === "Delayed" || stage.name.includes("Objections") || (stage.remarks && stage.remarks.includes("dispute"));
            const isPending = stage.status === "Pending";

            let borderClass = "border-slate-200 bg-white";
            let iconBg = "bg-slate-100 text-slate-400";
            let badgeBg = "bg-slate-100 text-slate-600";

            if (isDone) {
              borderClass = "border-emerald-200 bg-emerald-50/40";
              iconBg = "bg-emerald-600 text-white";
              badgeBg = "bg-emerald-100 text-emerald-800";
            } else if (isDispute || (stage.name === "Objections" && stage.status === "In Progress")) {
              borderClass = "border-rose-300 bg-rose-50/40 ring-1 ring-rose-300";
              iconBg = "bg-rose-600 text-white";
              badgeBg = "bg-rose-100 text-rose-800 font-semibold";
            } else if (isWarn) {
              borderClass = "border-amber-200 bg-amber-50/40";
              iconBg = "bg-amber-500 text-white";
              badgeBg = "bg-amber-100 text-amber-800";
            }

            const cardClass = "relative rounded-lg p-3 border transition-all duration-200 hover:shadow-sm flex flex-col justify-between " + borderClass;
            const badgeClass = "text-[10px] px-1.5 py-0.5 rounded font-medium " + badgeBg;
            const circleClass = "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold " + iconBg;

            return (
              <div 
                key={stage.id || idx}
                className={cardClass}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400">STAGE {String(idx + 1).padStart(2, "0")}</span>
                    <span className={badgeClass}>
                      {stage.status === "In Progress" && stage.name === "Objections" ? "⚠ In Progress" : stage.status}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className={circleClass}>
                      {isDone ? "✓" : isDispute ? "!" : isWarn ? "⚠" : idx + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-800 leading-snug truncate" title={stage.name}>
                        {stage.name}
                      </div>
                      {stage.department && (
                        <div className="text-[10px] text-slate-500 truncate mt-0.5">
                          {stage.department}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {stage.remarks && (
                  <div className="mt-2.5 pt-1.5 border-t border-slate-100/80 text-[10px] text-slate-600 line-clamp-2" title={stage.remarks}>
                    {stage.remarks}
                  </div>
                )}
                
                {stage.date && (
                  <div className="mt-1 text-[9px] text-slate-400 flex items-center gap-1 font-mono">
                    <span>📅</span> {stage.date}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
