import os

pages_dir = r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\pages"

# 1. Projects.js
projects_js = """// NLAMS Projects Directory Page Component
import { useState } from 'react';
import { StatusBadge } from '../components/StatusBadge.js';
import { ProgressBar } from '../components/ProgressBar.js';
import { Icon } from '../components/Icons.js';
import { PROJECTS } from '../data/projects.js';

export function Projects({ onNavigate, onSelectProject }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesSearch = 
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRisk = riskFilter === 'ALL' || p.riskLevel === riskFilter;
    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;

    return matchesSearch && matchesRisk && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Master Infrastructure Directory
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            National Infrastructure Projects Registry
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Centralized register tracking land acquisition, funding disbursements, and execution across Ministries
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onSelectProject('PARK-001');
              onNavigate('project-details');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Demo: Open PARK-001</span>
            <Icon name="ArrowRight" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Icon name="Search" className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Project ID, Name, Location or Ministry..."
            className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span className="text-slate-500 font-semibold">Risk:</span>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL">All Risk Levels</option>
              <option value="HIGH">High Risk</option>
              <option value="MEDIUM">Medium Risk</option>
              <option value="LOW">Low Risk</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span className="text-slate-500 font-semibold">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL">All Statuses</option>
              <option value="At Risk">At Risk</option>
              <option value="In Progress">In Progress</option>
              <option value="On Track">On Track</option>
              <option value="Delayed">Delayed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4">Project ID</th>
                <th className="py-3 px-4">Project Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Department / Ministry</th>
                <th className="py-3 px-4 text-right">Total Area</th>
                <th className="py-3 px-4 text-right">Acquired</th>
                <th className="py-3 px-4 text-center">Acquisition</th>
                <th className="py-3 px-4 text-center">Compensation</th>
                <th className="py-3 px-4 text-center">R&amp;R</th>
                <th className="py-3 px-4 text-center">Construction</th>
                <th className="py-3 px-4 text-center">Risk</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProjects.map((p) => {
                const isPark = p.id === 'PARK-001';
                return (
                  <tr
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p.id);
                      onNavigate('project-details');
                    }}
                    className={`cursor-pointer transition-colors ${
                      isPark 
                        ? 'bg-rose-50/50 hover:bg-rose-100/60 font-semibold ring-1 ring-rose-200/60' 
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-700 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        {isPark && <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>}
                        {p.id}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                      {p.name}
                      {isPark && (
                        <span className="ml-2 text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">
                          PRIMARY DEMO
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">{p.location}</td>
                    <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">{p.department}</td>
                    <td className="py-3.5 px-4 text-right font-mono text-slate-800">{p.totalArea} Acres</td>
                    <td className="py-3.5 px-4 text-right font-mono font-semibold text-slate-900">{p.acquiredArea} Acres</td>
                    <td className="py-3.5 px-4 text-center font-bold text-slate-800">{p.acquisitionProgress}%</td>
                    <td className="py-3.5 px-4 text-center font-bold text-slate-800">{p.compensationProgress}%</td>
                    <td className="py-3.5 px-4 text-center font-bold text-slate-800">{p.rnrProgress}%</td>
                    <td className="py-3.5 px-4 text-center font-bold text-slate-800">{p.constructionProgress}%</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.riskLevel === 'HIGH' ? 'bg-rose-100 text-rose-800 ring-1 ring-rose-300' :
                        p.riskLevel === 'MEDIUM' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {p.riskLevel}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(p.id);
                          onNavigate('project-details');
                        }}
                        className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold text-xs transition-colors"
                      >
                        Inspect Details →
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 2. ProjectDetails.js
export function ProjectDetails({ onNavigate, onSelectProject, onSelectParcel }) {
  const park = PROJECTS.find(p => p.id === 'PARK-001') || PROJECTS[0];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                PROJECT ID: {park.id}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-600">{park.location}</span>
              <span className="text-slate-400">•</span>
              <StatusBadge status={park.status} />
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-rose-100 text-rose-800 ring-1 ring-rose-300">
                RISK: {park.riskLevel}
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {park.name}
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
              {park.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('parcels')}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
            >
              <Icon name="MapPin" className="w-4 h-4 text-amber-400" />
              <span>View Land Parcels (4)</span>
            </button>
            <button
              onClick={() => onNavigate('gis')}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
            >
              <Icon name="Map" className="w-4 h-4 text-indigo-200" />
              <span>GIS Command Map</span>
            </button>
            <button
              onClick={() => onNavigate('analytics')}
              className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
            >
              <Icon name="BrainCircuit" className="w-4 h-4 text-white" />
              <span>AI Risk Engine</span>
            </button>
          </div>
        </div>

        {/* Core Land & Budget Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6 pt-5 border-t border-slate-100">
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Total Area</div>
            <div className="text-base font-bold text-slate-900 font-mono mt-0.5">{park.totalArea} Acres</div>
            <div className="text-[10px] text-slate-400">100% Requisition</div>
          </div>
          <div className="bg-emerald-50/60 rounded-lg p-3 border border-emerald-100">
            <div className="text-[10px] font-bold text-emerald-800 uppercase">Government Land</div>
            <div className="text-base font-bold text-emerald-900 font-mono mt-0.5">{park.govtLand} Acres</div>
            <div className="text-[10px] text-emerald-700">Pre-existing reserve</div>
          </div>
          <div className="bg-amber-50/60 rounded-lg p-3 border border-amber-100">
            <div className="text-[10px] font-bold text-amber-800 uppercase">Req. Acquisition</div>
            <div className="text-base font-bold text-amber-900 font-mono mt-0.5">{park.reqAcquisition} Acres</div>
            <div className="text-[10px] text-amber-700">Private parcels</div>
          </div>
          <div className="bg-blue-50/60 rounded-lg p-3 border border-blue-100">
            <div className="text-[10px] font-bold text-blue-800 uppercase">Land Acquired</div>
            <div className="text-base font-bold text-blue-900 font-mono mt-0.5">{park.acquiredArea} Acres</div>
            <div className="text-[10px] text-blue-700">82% Total acquired</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Estimated Budget</div>
            <div className="text-base font-bold text-slate-900 font-mono mt-0.5">{park.budget}</div>
            <div className="text-[10px] text-slate-400">Spent: {park.spentBudget}</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Project Duration</div>
            <div className="text-base font-bold text-slate-900 font-mono mt-0.5">{park.durationMonths} Months</div>
            <div className="text-[10px] text-rose-600 font-bold">Elapsed: {park.elapsedMonths} M</div>
          </div>
        </div>
      </div>

      {/* Critical Hold-up Alert Banner */}
      <div className="bg-rose-50 border-l-4 border-rose-600 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <Icon name="AlertTriangle" className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wide">
              Critical Project Bottleneck: Section 15 Dispute on Parcel P-103
            </h4>
            <p className="text-xs text-rose-800 mt-0.5 leading-relaxed">
              {park.keyHoldUp}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            onSelectParcel('P-103');
            onNavigate('parcel-details');
          }}
          className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shrink-0 transition-colors shadow-xs"
        >
          Inspect Disputed Parcel P-103 →
        </button>
      </div>

      {/* Project Overview Cards & Progress Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Land Acquisition</div>
          <div className="text-xl font-black text-slate-900 mt-1">{park.acquisitionProgress}%</div>
          <div className="mt-2">
            <ProgressBar value={park.acquisitionProgress} color="emerald" showText={false} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Compensation</div>
          <div className="text-xl font-black text-slate-900 mt-1">{park.compensationProgress}%</div>
          <div className="mt-2">
            <ProgressBar value={park.compensationProgress} color="amber" showText={false} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">R&amp;R Resettlement</div>
          <div className="text-xl font-black text-slate-900 mt-1">{park.rnrProgress}%</div>
          <div className="mt-2">
            <ProgressBar value={park.rnrProgress} color="emerald" showText={false} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Possession</div>
          <div className="text-xl font-black text-rose-700 mt-1">{park.possessionProgress}%</div>
          <div className="mt-2">
            <ProgressBar value={park.possessionProgress} color="rose" showText={false} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Construction</div>
          <div className="text-xl font-black text-amber-600 mt-1">{park.constructionProgress}%</div>
          <div className="mt-2">
            <ProgressBar value={park.constructionProgress} color="amber" showText={false} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Overall Progress</div>
          <div className="text-xl font-black text-indigo-700 mt-1">{park.overallProgress}%</div>
          <div className="mt-2">
            <ProgressBar value={park.overallProgress} color="blue" showText={false} />
          </div>
        </div>

        <div className="bg-rose-50/70 rounded-xl p-4 border border-rose-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold text-rose-800 uppercase">Project Risk Level</div>
            <div className="text-xl font-black text-rose-700 mt-1 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
              {park.riskLevel}
            </div>
          </div>
          <div className="text-[10px] font-bold text-rose-800">
            Score: {park.riskScore}/4 (Explainable AI)
          </div>
        </div>
      </div>

      {/* Visual 15-Stage Project Lifecycle Timeline */}
      <ProjectTimeline stages={park.lifecycleStages || []} />
    </div>
  );
}
"""

with open(os.path.join(pages_dir, "Projects.js"), "w", encoding="utf-8") as f:
    f.write(projects_js)

print("Written Projects.js and ProjectDetails.js")
