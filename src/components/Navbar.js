// NLAMS Top Navigation Bar Component
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
