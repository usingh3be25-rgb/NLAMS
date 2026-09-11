# Script part 1
import os

comp_dir = r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components"
print("Comp dir:", comp_dir)
with open(r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components\StatusBadge.js", "w", encoding="utf-8") as f:
    f.write('''// NLAMS Status Badge Component
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
''')

with open(r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components\ProgressBar.js", "w", encoding="utf-8") as f:
    f.write('''// NLAMS Progress Bar Component
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
''')

with open(r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components\KPICard.js", "w", encoding="utf-8") as f:
    f.write('''// NLAMS KPI Card Component
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
''')

with open(r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components\Modal.js", "w", encoding="utf-8") as f:
    f.write('''// NLAMS Universal Action Modal Component
import { Icon } from "./Icons.js";

export function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-2xl", footer }) {
  if (!isOpen) return null;

  const boxClass = "bg-white rounded-2xl shadow-2xl border border-slate-200 w-full overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 " + maxWidth;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className={boxClass}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Icon name="X" className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto custom-scrollbar text-xs text-slate-700">
          {children}
        </div>

        {/* Modal Footer */}
        {footer && (
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
''')

print("Part 1 fixed: StatusBadge, ProgressBar, KPICard, Modal")
with open(r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components\Navbar.js", "w", encoding="utf-8") as f:
    f.write('''// NLAMS Top Navigation Bar Component
import { Icon } from "./Icons.js";
import { useState } from "react";

export function Navbar({ 
  currentRoute,
  onNavigate, 
  projects = [], 
  selectedProjectId, 
  onSelectProject, 
  departments = [], 
  selectedDepartment, 
  onSelectDepartment,
  onStartJudgeTour,
  judgeTourActive,
  onOpenModal,
  onLogout,
  notificationsCount = 3
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  const searchableCatalog = [
    { type: "Project", id: "PARK-001", title: "PARK-001: Green City Government Park (Delhi, 100A)", route: "project-details", desc: "At Risk • Section 15 Dispute on P-103" },
    { type: "Project", id: "NH-001", title: "NH-001: National Highway Development (Punjab, 250A)", route: "projects", desc: "In Progress • GT Road Corridor" },
    { type: "Project", id: "RAIL-002", title: "RAIL-002: Railway Expansion Project (Haryana, 180A)", route: "projects", desc: "On Track • Freight Corridor" },
    { type: "Parcel", id: "P-103", title: "Parcel P-103 (15 Acres) - Owner C", route: "parcel-details", desc: "Acquisition Dispute • Compensation Pending • Blocks Structural Works" },
    { type: "Parcel", id: "P-102", title: "Parcel P-102 (25 Acres) - Rajesh Kumar", route: "parcels", desc: "Acquired • Paid ₹28 Cr • Possession Handed Over" },
    { type: "Parcel", id: "P-101", title: "Parcel P-101 (20 Acres) - Government Land", route: "parcels", desc: "Available • Institutional Greens Reserved" },
    { type: "Department", id: "DLAA", title: "District Land Acquisition Authority (DLAA)", route: "acquisition", desc: "Section 15 Hearings & Statutory Notifications" },
    { type: "Module", id: "GIS", title: "GIS Command Center (Delhi Map)", route: "gis", desc: "Interactive Cadastral Overlay & Parcel Inspection" },
    { type: "Module", id: "AI", title: "AI Delay Risk Prediction Engine", route: "analytics", desc: "Rule-Based Delay Risk Score (Score: 3 / HIGH RISK)" }
  ];

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : searchableCatalog.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const judgeTourBtnClass = "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer " + 
    (judgeTourActive ? "bg-amber-500 text-slate-950 ring-2 ring-amber-400 animate-pulse" : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950");

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
      {/* Official Government Strip */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-6 py-1 flex items-center justify-between border-b border-slate-800 select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-amber-300 font-bold">भारत सरकार</span>
            <span className="text-slate-500">|</span>
            <span className="font-semibold text-slate-200">Government of India</span>
          </div>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">Ministry of Housing &amp; Urban Affairs / Department of Land Resources</span>
        </div>

        <div className="flex items-center gap-4 text-[10px] text-slate-400">
          <span className="hidden lg:inline bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
            NIC Unified Interoperability Protocol v2.4
          </span>
          <div className="flex items-center gap-2">
            <button className="hover:text-white">English</button>
            <span>|</span>
            <button className="hover:text-white">हिन्दी</button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <div className="px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Global Search with Live Typeahead */}
        <div className="relative flex-1 max-w-md">
          <div className="relative flex items-center">
            <Icon name="Search" className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchDropdown(true);
              }}
              onFocus={() => setShowSearchDropdown(true)}
              placeholder="Universal Search: Project ID, Parcel ID (e.g. P-103), Owner, Location..."
              className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-800 text-xs pl-9 pr-8 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-400 font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {showSearchDropdown && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1">
              <div className="p-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Matching Records ({searchResults.length})</span>
                <span className="font-mono text-[10px]">Press ESC to close</span>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                {searchResults.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setShowSearchDropdown(false);
                      setSearchQuery("");
                      onNavigate(item.route);
                    }}
                    className="w-full text-left p-2.5 hover:bg-indigo-50/60 transition-colors flex items-start justify-between gap-2 group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-indigo-100 group-hover:text-indigo-800">
                          {item.type}
                        </span>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-900">
                          {item.title}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {item.desc}
                      </div>
                    </div>
                    <span className="text-xs text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Center & Right Controls */}
        <div className="flex items-center gap-3">
          {/* Project Selector */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] font-semibold uppercase">Project:</span>
            <select
              value={selectedProjectId}
              onChange={(e) => onSelectProject(e.target.value)}
              className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer text-xs pr-2"
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.id}: {p.name} ({p.location})
                </option>
              ))}
            </select>
          </div>

          {/* Department Role Switcher */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] font-semibold uppercase">Role View:</span>
            <select
              value={selectedDepartment}
              onChange={(e) => onSelectDepartment(e.target.value)}
              className="bg-transparent font-semibold text-indigo-900 focus:outline-none cursor-pointer text-xs pr-2"
            >
              <option value="Central Ministry">Central Ministry</option>
              <option value="State Government">State Government</option>
              <option value="District Land Acquisition Authority">District Land Acquisition Authority</option>
              <option value="Project Implementing Agency">Project Implementing Agency</option>
              <option value="Revenue Department">Revenue Department</option>
              <option value="Finance Department">Finance Department</option>
              <option value="R&amp;R Department">R&amp;R Department</option>
              <option value="Possession Authority">Possession Authority</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>

          {/* Judge Demo Tour Launch Button */}
          <button
            onClick={onStartJudgeTour}
            className={judgeTourBtnClass}
            title="Start 5-Minute Guided Presentation for Judges"
          >
            <Icon name="Play" className="w-3.5 h-3.5 fill-current" />
            <span>Judge Demo Tour</span>
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotificationsDropdown(!showNotificationsDropdown)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 relative transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
              title="Alerts &amp; Notifications"
            >
              <Icon name="Bell" className="w-4 h-4" />
              {notificationsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  {notificationsCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown Drawer */}
            {showNotificationsDropdown && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">High Priority Alerts</span>
                  <button 
                    onClick={() => {
                      setShowNotificationsDropdown(false);
                      onNavigate("notifications");
                    }}
                    className="text-[10px] text-indigo-600 font-semibold hover:underline cursor-pointer"
                  >
                    View All (5)
                  </button>
                </div>
                <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto text-xs">
                  <div 
                    onClick={() => {
                      setShowNotificationsDropdown(false);
                      onNavigate("acquisition");
                    }}
                    className="p-3 hover:bg-rose-50/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">HIGH PRIORITY</span>
                      <span className="text-[10px] text-slate-400">10m ago</span>
                    </div>
                    <div className="font-bold text-slate-900 mt-1">P-103 acquisition dispute requires action</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">Section 15 objection filed by Owner C for Parcel P-103. Hearing on 24-Sep-2026.</div>
                  </div>
                  <div 
                    onClick={() => {
                      setShowNotificationsDropdown(false);
                      onNavigate("compensation");
                    }}
                    className="p-3 hover:bg-amber-50/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">WARNING</span>
                      <span className="text-[10px] text-slate-400">2h ago</span>
                    </div>
                    <div className="font-bold text-slate-900 mt-1">Compensation payment pending for P-103</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">₹25 Cr assessment held in abeyance pending statutory dispute clearance.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center border border-slate-700">
              VK
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-slate-900 leading-tight">Shri V.K. Sharma</div>
              <div className="text-[10px] text-slate-500 truncate max-w-[130px]">{selectedDepartment}</div>
            </div>
            <button
              onClick={onLogout}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors ml-1 cursor-pointer"
              title="Logout"
            >
              <Icon name="LogOut" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
''')

with open(r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components\ProjectTimeline.js", "w", encoding="utf-8") as f:
    f.write('''// NLAMS 15-Stage Project Lifecycle Timeline Component
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
''')

with open(r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\components\Sidebar.js", "w", encoding="utf-8") as f:
    f.write('''// NLAMS Persistent Desktop Sidebar Component (15 Core Navigation Sections)
import { Icon } from "./Icons.js";

export function Sidebar({ currentRoute, onNavigate, selectedProject, onSelectProject }) {
  const navSections = [
    { id: "dashboard", name: "Dashboard", icon: "LayoutDashboard", badge: null },
    { id: "projects", name: "Projects", icon: "FolderGit2", badge: "24" },
    { id: "parcels", name: "Land Parcels", icon: "MapPin", badge: "4" },
    { id: "gis", name: "GIS Map", icon: "Map", badge: "GIS" },
    { id: "acquisition", name: "Acquisition", icon: "Scale", badge: "1 Alert", badgeColor: "bg-rose-100 text-rose-800" },
    { id: "revenue", name: "Revenue Dept", icon: "FileSpreadsheet", badge: null },
    { id: "compensation", name: "Compensation", icon: "IndianRupee", badge: "₹120 Cr" },
    { id: "rnr", name: "Rehabilitation & Resettlement", icon: "Users", badge: "83%" },
    { id: "possession", name: "Possession", icon: "ShieldCheck", badge: "70%" },
    { id: "construction", name: "Construction", icon: "HardHat", badge: "45%", badgeColor: "bg-amber-100 text-amber-800" },
    { id: "analytics", name: "AI Risk & Analytics", icon: "BrainCircuit", badge: "HIGH RISK", badgeColor: "bg-rose-600 text-white font-bold animate-pulse" },
    { id: "departments", name: "Department Workflows", icon: "Network", badge: "9 Nodes", badgeColor: "bg-indigo-100 text-indigo-800 font-semibold" },
    { id: "documents", name: "Documents", icon: "FileText", badge: "8" },
    { id: "notifications", name: "Notifications", icon: "Bell", badge: "3", badgeColor: "bg-rose-500 text-white" },
    { id: "reports", name: "Reports", icon: "FileSpreadsheet", badge: null },
    { id: "settings", name: "Settings", icon: "Settings", badge: null }
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800 h-screen sticky top-0 overflow-y-auto select-none font-sans z-30 shadow-xl">
      {/* Brand & Portal Identity */}
      <div className="p-4 border-b border-slate-800/80 bg-slate-950 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-base shadow-md border border-amber-400/30">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l6 3.75v7.85L12 19.6l-6-3.8V7.95L12 4.2z"/>
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-xs font-black tracking-widest text-amber-400 uppercase leading-none">NLAMS</div>
          <div className="text-sm font-bold text-white tracking-tight truncate leading-tight mt-0.5">National Land Portal</div>
          <div className="text-[10px] text-slate-400 truncate leading-none mt-0.5">Govt. of India Interoperable Platform</div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1">
          Primary Navigation
        </div>
        {navSections.map((item) => {
          const isActive = currentRoute === item.id;
          const activeClass = isActive 
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold" 
            : "text-slate-300 hover:bg-slate-800 hover:text-white";
          const iconColorClass = isActive ? "text-white" : "text-slate-400 group-hover:text-amber-400";
          const badgeClass = item.badgeColor || (isActive ? "bg-indigo-800 text-indigo-100" : "bg-slate-800 text-slate-300");

          const btnClass = "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group cursor-pointer " + activeClass;
          const iconClass = "w-4 h-4 transition-colors " + iconColorClass;
          const badgeSpanClass = "text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ml-1 " + badgeClass;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={btnClass}
            >
              <div className="flex items-center gap-2.5 truncate">
                <Icon 
                  name={item.icon} 
                  className={iconClass} 
                />
                <span className="truncate">{item.name}</span>
              </div>
              {item.badge && (
                <span 
                  className={badgeSpanClass}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Active Case Study Snapshot Widget */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/60">
        <div className="rounded-lg bg-slate-900/90 p-2.5 border border-slate-800 text-xs">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>ACTIVE CASE STUDY</span>
            <span className="text-amber-400 font-bold">PARK-001</span>
          </div>
          <div className="font-bold text-white text-xs truncate mt-1">
            Green City Government Park
          </div>
          <div className="text-[10px] text-slate-400 flex items-center justify-between mt-1">
            <span>Delhi (100 Acres)</span>
            <span className="text-rose-400 font-bold uppercase">At Risk</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                onNavigate("project-details");
              }}
              className="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              Inspect PARK-001 →
            </button>
            <button
              onClick={() => {
                onNavigate("parcel-details");
              }}
              className="text-[10px] text-rose-400 hover:text-rose-300 font-mono underline cursor-pointer"
              title="Inspect disputed parcel P-103"
            >
              Parcel P-103
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
''')

print("Part 2 fixed: Navbar, ProjectTimeline, Sidebar")
