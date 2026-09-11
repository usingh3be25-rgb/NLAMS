// NLAMS Persistent Desktop Sidebar Component (15 Core Navigation Sections)
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
