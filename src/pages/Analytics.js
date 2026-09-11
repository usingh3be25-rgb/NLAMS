// NLAMS AI Risk & Analytics Page Component
import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar.js';
import { Icon } from '../components/Icons.js';
import { AI_RISK_DATA } from '../data/analytics.js';

export function Analytics({ onNavigate, onSelectParcel }) {
  const data = AI_RISK_DATA;

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Predictive Intelligence</span>
            <span>•</span>
            <span>Early Warning Engine</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            AI-Powered Project Delay Risk Prediction
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Explainable delay risk scoring model benchmarking multi-department execution against statutory thresholds
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-mono font-bold">
            Method: Rule-Based Evaluation Model
          </span>
        </div>
      </div>

      {/* Transparent Label & Methodology Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-mono font-bold uppercase">
              <span>Explainable AI / Rule-Based Risk Prediction Prototype</span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Honest, Transparent &amp; Explainable Risk Modeling
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              &quot;{data.explanation}&quot;
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-1">
              Evaluated for: <strong>{data.projectName}</strong> (Project ID: <strong>{data.projectId}</strong>)
            </div>
          </div>

          {/* Risk Gauge Visual Card */}
          <div className="bg-slate-800/90 rounded-xl p-5 border border-slate-700 text-center shrink-0 min-w-[220px]">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              Computed Project Risk
            </div>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500 animate-ping"></span>
              <span className="text-3xl font-black text-rose-400 tracking-tight">
                {data.riskLevel}
              </span>
            </div>
            <div className="mt-2 font-mono text-xs font-bold text-amber-300">
              Risk Score: {data.riskScore} / {data.maxScore}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-700 text-[10px] text-slate-400">
              Scale: 0–1 Low • 2 Medium • 3+ High
            </div>
          </div>
        </div>
      </div>

      {/* Input Indicators & Decision Rule Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Progress Indicators */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-bold text-sm text-slate-900">Project Execution Input Indicators</h3>
            <p className="text-xs text-slate-500">Live indicators extracted from departmental databases for PARK-001</p>
          </div>

          <div className="space-y-3.5 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-700">Land Acquired (82 Acres / 100 Acres)</span>
                <span className="font-bold text-slate-900 font-mono">82%</span>
              </div>
              <ProgressBar value={82} color="emerald" showText={false} />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-700">Compensation Paid (₹90 Cr / ₹120 Cr)</span>
                <span className="font-bold text-slate-900 font-mono">75%</span>
              </div>
              <ProgressBar value={75} color="amber" showText={false} threshold={80} />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-700">R&amp;R Resettlement Completed</span>
                <span className="font-bold text-slate-900 font-mono">83%</span>
              </div>
              <ProgressBar value={83} color="emerald" showText={false} threshold={80} />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-700">Possession Handed Over</span>
                <span className="font-bold text-rose-700 font-mono">70%</span>
              </div>
              <ProgressBar value={70} color="rose" showText={false} threshold={80} />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-700">Overall Construction Progress</span>
                <span className="font-bold text-rose-700 font-mono">45%</span>
              </div>
              <ProgressBar value={45} color="rose" showText={false} threshold={50} />
            </div>
          </div>
        </div>

        {/* Right: The Rule Engine Trigger Evaluation */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-bold text-sm text-slate-900">Risk Rule Trigger Evaluation</h3>
            <p className="text-xs text-slate-500">Mathematical rules calculating the Risk Score = 3</p>
          </div>

          <div className="space-y-2.5 text-xs">
            {data.rules.map((r) => (
              <div 
                key={r.ruleId}
                className={`p-3 rounded-lg border flex items-start justify-between gap-3 ${
                  r.triggered 
                    ? 'bg-rose-50/60 border-rose-200' 
                    : 'bg-emerald-50/40 border-emerald-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[10px] text-slate-500">{r.ruleId}</span>
                    <span className="font-bold text-slate-900">{r.description}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1">
                    Current: <strong>{r.currentValue}</strong> • Impact: {r.impact}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    r.triggered ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'
                  }`}>
                    {r.triggered ? '+1 Point' : '0 Points'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Root Cause Summary */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <div className="font-bold text-slate-900 mb-1">Key Delay Reasons Identified:</div>
            <ol className="list-decimal list-inside space-y-0.5 text-slate-700 font-medium">
              {data.reasons.map((reason, idx) => (
                <li key={idx}>{reason}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="border-b pb-3 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm text-slate-900">Recommended Executive Interventions</h3>
            <p className="text-xs text-slate-500">System-generated action plan to mitigate project delay</p>
          </div>
          <span className="text-xs font-mono font-bold text-rose-700">Urgency: Critical</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {data.recommendedActions.map((act, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors bg-slate-50/50 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">{act.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  act.priority === 'Immediate' ? 'bg-rose-100 text-rose-800' :
                  act.priority === 'High' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {act.priority}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">{act.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future AI Capability Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-slate-50 rounded-2xl p-6 border border-indigo-100 space-y-3">
        <div className="flex items-center gap-2">
          <Icon name="BrainCircuit" className="w-5 h-5 text-indigo-700" />
          <h3 className="font-bold text-slate-900 text-sm">{data.futureAICapability.title}</h3>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
          {data.futureAICapability.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {data.futureAICapability.capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white rounded-xl p-3.5 border border-indigo-100/80 shadow-xs space-y-1">
              <div className="font-bold text-slate-900 text-xs">{cap.name}</div>
              <p className="text-[11px] text-slate-500 leading-snug">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. Reports.js
export function Reports({ onNavigate }) {
  const [toastMessage, setToastMessage] = useState('');
  const [activeReportModal, setActiveReportModal] = useState(null);

  const reportsList = [
    { id: 'REP-01', title: 'Comprehensive Project Progress Report', desc: 'Holistic cross-departmental DPR & physical milestone progress summary', period: 'August 2026', pages: '14 Pages' },
    { id: 'REP-02', title: 'Land Acquisition & Gazette Audit Report', desc: 'Cadastral parcel boundary audit, Section 11/19 Gazette log and Section 15 objection file', period: 'Q2 2026', pages: '8 Pages' },
    { id: 'REP-03', title: 'Statutory Compensation & PFMS Ledger', desc: 'PFMS transaction audit, UTR records, award approvals and escrow holdings', period: 'August 2026', pages: '12 Pages' },
    { id: 'REP-04', title: 'R&R Resettlement & Entitlement Register', desc: 'Enumeration of 120 families, Schedule II benefits, and grievance log', period: 'July 2026', pages: '10 Pages' },
    { id: 'REP-05', title: 'Physical Possession & Panchnama Dossier', desc: 'Site handover certificates, boundary survey coordinates, and unencumbered tracts', period: 'June 2026', pages: '6 Pages' },
    { id: 'REP-06', title: 'EPC Construction Progress & Milestone Monitoring', desc: 'Civil engineering progress, foundation milestones, and idle claim documentation', period: 'September 2026', pages: '18 Pages' },
    { id: 'REP-07', title: 'Explainable Delay Risk & Bottleneck Report', desc: 'Rule-based early warning risk scores, casualty analysis, and Collector intervention roadmap', period: 'Current', pages: '5 Pages' }
  ];

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2 animate-in slide-in-from-bottom-2">
          <Icon name="CheckCircle2" className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Executive Reporting</span>
            <span>•</span>
            <span>NIC Interoperable MIS</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Statutory Reports &amp; Executive Dossiers
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Export certified official reports in PDF, Excel, and GeoJSON formats for State &amp; Central Committees
          </p>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportsList.map((r) => (
          <div key={r.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all space-y-4">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{r.id}</span>
                <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-semibold">{r.period}</span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 mt-1 leading-snug">{r.title}</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{r.desc}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => triggerToast(`Generating live report: ${r.title}...`)}
                className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Generate
              </button>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => triggerToast(`Exporting ${r.id} as official PDF...`)}
                  className="px-2.5 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px]"
                >
                  PDF
                </button>
                <button
                  onClick={() => triggerToast(`Exporting ${r.id} data ledger to Excel (XLSX)...`)}
                  className="px-2.5 py-1.5 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px]"
                >
                  Excel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Settings.js
export function Settings({ onNavigate, selectedDepartment }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto text-xs">
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
        <h1 className="text-xl font-black text-slate-900 tracking-tight">System Configuration &amp; Interoperability Settings</h1>
        <p className="text-xs text-slate-500 mt-1">National Land Acquisition &amp; Management System (NLAMS) Platform Architecture</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 border-b pb-2">Connected Government Endpoints (APIs)</h3>
          <div className="space-y-2">
            <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">PFMS / e-Kuber Treasury API</div>
                <div className="text-[10px] text-slate-500">Public Financial Management System Direct Credit</div>
              </div>
              <span className="text-emerald-700 font-bold">CONNECTED</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">DILRMP / Bhoomi Cadastral Service</div>
                <div className="text-[10px] text-slate-500">Digital India Land Record Modernization Gateway</div>
              </div>
              <span className="text-emerald-700 font-bold">CONNECTED</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">BharatMaps GIS WMS/WFS Services</div>
                <div className="text-[10px] text-slate-500">National Informatics Centre Geospatial Cloud</div>
              </div>
              <span className="text-emerald-700 font-bold">CONNECTED</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 border-b pb-2">Active Session &amp; Authority Context</h3>
          <div className="space-y-2">
            <div className="flex justify-between py-1 border-b">
              <span className="text-slate-500">Active Department View:</span>
              <span className="font-bold text-indigo-900">{selectedDepartment}</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span className="text-slate-500">Primary Case Study:</span>
              <span className="font-bold font-mono text-slate-900">PARK-001 (Delhi, 100 Acres)</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span className="text-slate-500">Demo Mode:</span>
              <span className="font-bold text-amber-700">Judge Showcase / Evaluation Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
