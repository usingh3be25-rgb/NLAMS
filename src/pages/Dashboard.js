// NLAMS Main Executive Dashboard Component
import { KPICard } from '../components/KPICard.js';
import { StatusBadge } from '../components/StatusBadge.js';
import { ProgressBar } from '../components/ProgressBar.js';
import { Icon } from '../components/Icons.js';
import { PROJECTS, NATIONAL_KPIS } from '../data/projects.js';

export function Dashboard({ onNavigate, onSelectProject }) {
  const parkProject = PROJECTS.find(p => p.id === 'PARK-001') || PROJECTS[0];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner with Government Title & Value Proposition */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-bold uppercase mb-2">
                <span>National Land Acquisition & Management System</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white">
                National Land Acquisition & Management Dashboard
              </h1>
              <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
                Unified Interoperable Platform connecting Revenue, DLAA, Finance, R&R, Possession, and Construction authorities via common Project IDs and Parcel IDs.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onSelectProject('PARK-001');
                  onNavigate('project-details');
                }}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Inspect PARK-001 Case Study</span>
                <Icon name="ArrowRight" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slogan strip */}
          <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="font-semibold text-amber-400 flex items-center gap-2">
              <Icon name="CheckCircle2" className="w-4 h-4 text-emerald-400" />
              <span>&quot;From Land Identification to Project Completion — One Integrated Digital Workflow.&quot;</span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Last Synchronized: 11-Sep-2026 • 9 Departmental Nodes Connected
            </div>
          </div>
        </div>
      </div>

      {/* 8 Primary Executive KPI Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
            National Program Health (At a Glance)
          </h2>
          <span className="text-[11px] text-slate-400">Aggregated across 24 Central & State Mega-Projects</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KPICard
            title="Total Projects"
            value="24"
            subtext="National Infrastructure Pipeline"
            icon="FolderGit2"
            trend="Active"
            onClick={() => onNavigate('projects')}
          />
          <KPICard
            title="Projects In Progress"
            value="14"
            subtext="On Schedule / Active Works"
            icon="Clock"
            trend="58% Active"
            onClick={() => onNavigate('projects')}
          />
          <KPICard
            title="Projects Delayed"
            value="5"
            subtext="Bottlenecked by Land Disputes"
            icon="AlertTriangle"
            trend="21% Delayed"
            trendColor="rose"
            onClick={() => onNavigate('projects')}
          />
          <KPICard
            title="Land Proposed"
            value="12,450"
            subtext="Acres under DPR requisition"
            icon="Map"
            trend="Total Requisition"
            onClick={() => onNavigate('projects')}
          />
          <KPICard
            title="Land Acquired"
            value="9,820"
            subtext="Acres vested with possession"
            icon="ShieldCheck"
            trend="79% Vesting"
            onClick={() => onNavigate('parcels')}
          />
          <KPICard
            title="Compensation Paid"
            value="₹1,245 Cr"
            subtext="Disbursed digitally via PFMS"
            icon="IndianRupee"
            trend="77% Disbursed"
            onClick={() => onNavigate('compensation')}
          />
          <KPICard
            title="Affected Families"
            value="8,420"
            subtext="Enumerated in Social Impact Assessment"
            icon="Users"
            trend="RFCTLARR Reg"
            onClick={() => onNavigate('rnr')}
          />
          <KPICard
            title="R&R Completed"
            value="76%"
            subtext="Resettlement benefits conferred"
            icon="CheckCircle2"
            trend="+4% this month"
            onClick={() => onNavigate('rnr')}
          />
        </div>
      </div>

      {/* Key Value Proposition Section: THE PROBLEM / THE SOLUTION / THE BENEFIT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            THE PROBLEM
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1">Fragmented Silos & Delayed Projects</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Land acquisition involves multiple independent departments (Revenue, DLAA, Finance, R&R, EPC Contractor) relying on disconnected paper records, resulting in untracked disputes, delayed possession, and costly construction claims.
          </p>
        </div>

        <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-800 font-bold text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            THE SOLUTION
          </div>
          <h3 className="font-bold text-slate-900 text-sm mb-1">One Interoperable Digital Thread</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            A unified interoperable platform that connects project, parcel, acquisition status, compensation awards, R&R entitlements, physical possession, GIS boundaries, and predictive analytics using common <strong>Project IDs</strong> and <strong>Parcel IDs</strong>.
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            THE BENEFIT
          </div>
          <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed font-medium">
            <li className="flex items-center gap-1.5">✓ <strong>Better visibility</strong> across administrative tiers</li>
            <li className="flex items-center gap-1.5">✓ <strong>Faster coordination</strong> between Revenue & DLAA</li>
            <li className="flex items-center gap-1.5">✓ <strong>Reduced manual tracking</strong> & duplicate paperwork</li>
            <li className="flex items-center gap-1.5">✓ <strong>Transparent status monitoring</strong> for citizens</li>
            <li className="flex items-center gap-1.5">✓ <strong>Early identification of delays</strong> via explainable AI</li>
          </ul>
        </div>
      </div>

      {/* Project Status Overview & Progress Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Project Status Distribution & Key Stage Progress */}
        <div className="lg:col-span-1 bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Project Status Overview</h3>
            <p className="text-xs text-slate-500">24 Central & State Monitored Projects</p>
          </div>

          {/* Status Breakdown Chips */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <span className="font-semibold text-emerald-800">On Track</span>
              <span className="font-mono font-bold text-emerald-900 text-sm">5</span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-between">
              <span className="font-semibold text-amber-800">In Progress</span>
              <span className="font-mono font-bold text-amber-900 text-sm">14</span>
            </div>
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-between">
              <span className="font-semibold text-rose-800">Delayed / At Risk</span>
              <span className="font-mono font-bold text-rose-900 text-sm">5</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="font-semibold text-slate-700">Completed</span>
              <span className="font-mono font-bold text-slate-900 text-sm">0</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-3 text-xs">
            <div className="font-bold text-slate-800">National Progress Benchmarks</div>
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Land Acquisition (9,820 / 12,450 Acres)</span>
                <span className="font-bold text-slate-900">79%</span>
              </div>
              <ProgressBar value={79} color="emerald" showText={false} />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Compensation Disbursed (₹1,245 / ₹1,620 Cr)</span>
                <span className="font-bold text-slate-900">77%</span>
              </div>
              <ProgressBar value={77} color="blue" showText={false} />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>R&R Families Resettled (6,400 / 8,420)</span>
                <span className="font-bold text-slate-900">76%</span>
              </div>
              <ProgressBar value={76} color="amber" showText={false} />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Overall Construction Progress</span>
                <span className="font-bold text-slate-900">58%</span>
              </div>
              <ProgressBar value={58} color="navy" showText={false} />
            </div>
          </div>
        </div>

        {/* Right: High Risk Projects Table (Featuring PARK-001) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
                High Risk Projects Requiring Intervention
              </h3>
              <p className="text-xs text-slate-500">Click PARK-001 to inspect full inter-departmental case study</p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
            >
              All Projects ({PROJECTS.length}) →
            </button>
          </div>

          <div className="overflow-x-auto mt-3">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200">
                  <th className="py-2.5 px-3">Project ID</th>
                  <th className="py-2.5 px-3">Project Name</th>
                  <th className="py-2.5 px-3">Location</th>
                  <th className="py-2.5 px-3 text-center">Acquisition</th>
                  <th className="py-2.5 px-3 text-center">Compensation</th>
                  <th className="py-2.5 px-3 text-center">Risk</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PROJECTS.map((proj) => {
                  const isPark = proj.id === 'PARK-001';
                  return (
                    <tr 
                      key={proj.id}
                      onClick={() => {
                        onSelectProject(proj.id);
                        onNavigate('project-details');
                      }}
                      className={`cursor-pointer transition-colors ${
                        isPark ? 'bg-rose-50/60 hover:bg-rose-100/70 font-semibold ring-1 ring-rose-200' : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="py-3 px-3 font-mono font-bold text-indigo-700 flex items-center gap-1.5">
                        {isPark && <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>}
                        {proj.id}
                      </td>
                      <td className="py-3 px-3 font-bold text-slate-900">{proj.name}</td>
                      <td className="py-3 px-3 text-slate-600">{proj.location}</td>
                      <td className="py-3 px-3 text-center font-semibold text-slate-800">
                        {proj.acquisitionProgress}%
                      </td>
                      <td className="py-3 px-3 text-center font-semibold text-slate-800">
                        {proj.compensationProgress}%
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          proj.riskLevel === 'HIGH' ? 'bg-rose-100 text-rose-800 ring-1 ring-rose-300' :
                          proj.riskLevel === 'MEDIUM' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {proj.riskLevel}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <StatusBadge status={proj.status} />
                      </td>
                      <td className="py-3 px-3 text-right">
                        <span className="text-indigo-600 hover:text-indigo-900 font-bold flex items-center justify-end gap-1">
                          Inspect <Icon name="ArrowRight" className="w-3.5 h-3.5" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-amber-50/70 rounded-lg border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <Icon name="AlertTriangle" className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong>Primary Demonstration Project:</strong> PARK-001 (Green City Government Park, Delhi). Risk level is HIGH due to acquisition dispute on Parcel P-103.</span>
            </div>
            <button
              onClick={() => {
                onSelectProject('PARK-001');
                onNavigate('parcel-details');
              }}
              className="text-xs font-bold text-rose-700 hover:text-rose-900 hover:underline shrink-0 flex items-center gap-1"
            >
              Examine Disputed Parcel P-103 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
