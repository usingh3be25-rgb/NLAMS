import os

pages_dir = r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\pages"

# 1. Construction.js
construction_js = """// NLAMS Construction Monitoring Page Component
import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar.js';
import { StatusBadge } from '../components/StatusBadge.js';
import { Icon } from '../components/Icons.js';
import { CONSTRUCTION_DATA } from '../data/construction.js';

export function Construction({ onNavigate, onSelectParcel }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Engineering &amp; EPC Execution</span>
            <span>•</span>
            <span>PARK-001 Monitoring</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Construction Progress &amp; Milestone Monitoring
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Tracking physical execution, milestone dependencies, site handover blockers, and contractor engineering logs
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Overall Progress</div>
            <div className="text-2xl font-black text-amber-600 font-mono">
              {CONSTRUCTION_DATA.overallProgress}%
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Mandatory Warning Banner */}
      <div className="bg-rose-50 border-l-4 border-rose-600 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <Icon name="AlertTriangle" className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-black text-rose-900 uppercase tracking-wide">
              Critical Warning: Construction progress is affected by pending land possession.
            </h3>
            <p className="text-xs text-rose-800 mt-1 leading-relaxed max-w-3xl">
              EPC Contractor (National Infra Corp JV) has formally logged milestone disruption. Foundation and structural works for the central spine and visitor pavilion are blocked because contiguous physical possession of Parcel P-103 (15 acres) has not been handed over.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            onSelectParcel('P-103');
            onNavigate('parcel-details');
          }}
          className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shrink-0 transition-colors shadow-xs cursor-pointer"
        >
          View Blocked Parcel P-103 →
        </button>
      </div>

      {/* EPC Milestones Breakdown (The 5 Milestones) */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="font-bold text-sm text-slate-900">Engineering Work Breakdown Structure (WBS)</h3>
            <p className="text-xs text-slate-500">Contractor: {CONSTRUCTION_DATA.epcContractor} (Award: {CONSTRUCTION_DATA.contractValue})</p>
          </div>
          <span className="font-mono text-xs font-bold text-slate-600">Contract Date: {CONSTRUCTION_DATA.contractAwardDate}</span>
        </div>

        <div className="space-y-4 pt-2">
          {CONSTRUCTION_DATA.milestones.map((m) => (
            <div key={m.id} className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all bg-slate-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    {m.id}
                  </span>
                  <span className="font-bold text-sm text-slate-900">{m.name}</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate-500">Target: {m.targetDate}</span>
                  <StatusBadge status={m.status} />
                  <span className="font-mono font-black text-slate-900 text-sm">{m.progress}%</span>
                </div>
              </div>

              <ProgressBar 
                value={m.progress} 
                color={m.progress === 100 ? 'emerald' : m.progress >= 70 ? 'blue' : m.progress >= 40 ? 'amber' : 'rose'} 
                showText={false} 
              />

              <div className="mt-2.5 text-[11px] text-slate-600 flex items-center justify-between">
                <span><strong>Dependency:</strong> {m.dependency}</span>
                <span className="font-mono text-slate-500">Status: {m.actualDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Field Engineer Site Logs */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-3">
        <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider pb-2 border-b">
          EPC Site Engineer Incident Log (Land Handover Dependencies)
        </h3>
        <div className="space-y-2 text-xs">
          {CONSTRUCTION_DATA.siteLog.map((log, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-lg border flex items-start gap-3">
              <span className="font-mono text-indigo-700 font-bold shrink-0">{log.date}</span>
              <div>
                <span className="font-bold text-slate-900">{log.author}: </span>
                <span className="text-slate-700">{log.entry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. Departments.js (Inter-Department Workflow - The Core Innovation)
export function Departments({ onNavigate, onSelectParcel }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] font-mono font-bold uppercase mb-1">
            <span>★ The Core Innovation</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Inter-Department Connected Digital Workflow
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Visualizing how 9 independent departmental authorities synchronize data in real-time using common <strong>Project IDs</strong> and <strong>Parcel IDs</strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('analytics')}
            className="px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Icon name="BrainCircuit" className="w-4 h-4" />
            <span>Delay Risk Prediction</span>
          </button>
        </div>
      </div>

      {/* The Core Interoperability Model Explanation Box */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 border border-slate-800 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase text-amber-400">
              Unified Data Spine
            </div>
            <h2 className="text-xl font-black text-white mt-1">
              Common Key: [ Project ID: PARK-001 ] + [ Parcel ID: P-103 ]
            </h2>
            <p className="text-xs text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Instead of replacing legacy government software, NLAMS integrates siloed systems through common geospatial and administrative keys. A single objection filed in DLAA immediately reflects on Finance escrow, R&amp;R verification, physical possession delivery, and EPC construction schedules.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center shrink-0">
            <div className="text-[10px] uppercase font-bold text-slate-400">Target Case</div>
            <div className="text-lg font-black text-rose-400 font-mono mt-0.5">P-103 (15 Acres)</div>
            <div className="text-[11px] text-amber-300 font-semibold mt-1">Cascading Bottleneck</div>
          </div>
        </div>
      </div>

      {/* Visual Inter-Department Node Graph */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="font-bold text-sm text-slate-900">
            Connected Department Flow (9 Administrative Nodes)
          </h3>
          <span className="text-xs text-slate-500 font-mono">Live Interoperability Pipeline</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-2 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-slate-400">NODE 1</div>
            <div className="font-bold text-slate-900 my-1">Central Ministry</div>
            <div className="text-[10px] text-emerald-700 font-semibold">Sanction Approved</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-slate-400">NODE 2</div>
            <div className="font-bold text-slate-900 my-1">State Govt</div>
            <div className="text-[10px] text-emerald-700 font-semibold">Gazette Sanctioned</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-slate-400">NODE 3</div>
            <div className="font-bold text-slate-900 my-1">Implementing Agency</div>
            <div className="text-[10px] text-emerald-700 font-semibold">DPR Formulated</div>
          </div>

          <div className="p-3 rounded-xl bg-rose-50 border-2 border-rose-400 shadow-sm flex flex-col justify-between ring-2 ring-rose-200">
            <div className="text-[10px] font-mono font-bold text-rose-500">NODE 4</div>
            <div className="font-bold text-rose-950 my-1">DLAA Authority</div>
            <div className="text-[10px] text-rose-700 font-black animate-pulse">DISPUTE (Sec 15)</div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-emerald-600">NODE 5</div>
            <div className="font-bold text-slate-900 my-1">Revenue Dept</div>
            <div className="text-[10px] text-emerald-700 font-bold">Ownership Verified</div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-amber-600">NODE 6</div>
            <div className="font-bold text-slate-900 my-1">Finance Dept</div>
            <div className="text-[10px] text-amber-700 font-bold">Comp. Pending</div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-amber-600">NODE 7</div>
            <div className="font-bold text-slate-900 my-1">R&amp;R Dept</div>
            <div className="text-[10px] text-amber-700 font-bold">RF-002 Pending</div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-amber-600">NODE 8</div>
            <div className="font-bold text-slate-900 my-1">Possession Authority</div>
            <div className="text-[10px] text-amber-700 font-bold">Site Handover Pending</div>
          </div>

          <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold text-rose-500">NODE 9</div>
            <div className="font-bold text-rose-950 my-1">Construction Agency</div>
            <div className="text-[10px] text-rose-700 font-bold">Affected / Halted</div>
          </div>
        </div>
      </div>

      {/* Live Synced Information Display for P-103 */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="font-bold text-sm text-slate-900">
              Live Synchronized State Across Departments for Parcel P-103
            </h3>
            <p className="text-xs text-slate-500">
              Illustrating the exact ripple effect caused by a single acquisition objection
            </p>
          </div>
          <button
            onClick={() => {
              onSelectParcel('P-103');
              onNavigate('parcel-details');
            }}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
          >
            Inspect P-103 Record →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-emerald-900 uppercase text-[11px]">Revenue Department</span>
              <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">VERIFIED</span>
            </div>
            <div className="font-bold text-slate-900">Ownership Verified</div>
            <p className="text-slate-600 mt-1">RoR &amp; title confirmed for Smt. Ram Devi; cadastral bounds mapped.</p>
          </div>

          <div className="p-4 rounded-xl border border-rose-300 bg-rose-50/60 ring-1 ring-rose-200">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-rose-900 uppercase text-[11px]">Acquisition (DLAA)</span>
              <span className="text-[10px] font-bold bg-rose-200 text-rose-900 px-2 py-0.5 rounded">DISPUTE</span>
            </div>
            <div className="font-bold text-rose-900">Section 15 Dispute Active</div>
            <p className="text-rose-800 mt-1">Owner C filed valuation &amp; accessway objection. Hearing 24-Sep-2026.</p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-amber-900 uppercase text-[11px]">Finance Department</span>
              <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded">PENDING</span>
            </div>
            <div className="font-bold text-amber-950">Compensation Pending</div>
            <p className="text-amber-800 mt-1">₹25 Cr assessed award held in escrow abeyance until dispute concludes.</p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-amber-900 uppercase text-[11px]">R&amp;R Department</span>
              <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded">PENDING</span>
            </div>
            <div className="font-bold text-amber-950">Family RF-002 Under Review</div>
            <p className="text-amber-800 mt-1">6 members seeking commercial resettlement shop; decision queued.</p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-amber-900 uppercase text-[11px]">Possession Authority</span>
              <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded">PENDING</span>
            </div>
            <div className="font-bold text-amber-950">Physical Handover Blocked</div>
            <p className="text-amber-800 mt-1">No Panchnama issued. Contractor cannot take possession of the 15A strip.</p>
          </div>

          <div className="p-4 rounded-xl border border-rose-300 bg-rose-50/60 ring-1 ring-rose-200">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-rose-900 uppercase text-[11px]">Construction Agency</span>
              <span className="text-[10px] font-bold bg-rose-200 text-rose-900 px-2 py-0.5 rounded">AFFECTED</span>
            </div>
            <div className="font-bold text-rose-900">Structural Works Halted</div>
            <p className="text-rose-800 mt-1">EPC machinery idled; contractor submitted notice for commercial delay claim.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

with open(os.path.join(pages_dir, "Construction.js"), "w", encoding="utf-8") as f:
    f.write(construction_js)

print("Written Construction.js and Departments.js")
