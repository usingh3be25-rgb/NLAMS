// NLAMS Rehabilitation & Resettlement (R&R) Page Component
import { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar.js';
import { StatusBadge } from '../components/StatusBadge.js';
import { Icon } from '../components/Icons.js';
import { RR_SUMMARY, RR_FAMILIES } from '../data/rr.js';

export function RnR({ onNavigate, onSelectParcel }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Social Impact &amp; Resettlement</span>
            <span>•</span>
            <span>RFCTLARR Schedule II</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Rehabilitation &amp; Resettlement (R&amp;R) Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Tracking affected families, rehabilitation eligibility, housing allotments, and livelihood subsistence allowances
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('documents')}
            className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Icon name="FileText" className="w-4 h-4" />
            <span>R&amp;R Entitlement Cards</span>
          </button>
        </div>
      </div>

      {/* R&R In-UI Explanation Callout */}
      <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-4 flex items-start gap-3 text-xs text-indigo-950">
        <Icon name="Info" className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold uppercase tracking-wider text-[11px] text-indigo-800">Department Purpose:</span>
          <p className="mt-0.5 font-medium leading-relaxed">
            &quot;Rehabilitation &amp; Resettlement tracks affected families, eligibility and benefits.&quot;
            Under RFCTLARR provisions, every project-affected family receives rehabilitation awards including alternative housing, one-time resettlement grants, and skill empowerment.
          </p>
        </div>
      </div>

      {/* 4 Primary R&R KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Affected Families</div>
          <div className="text-2xl font-black text-slate-900 font-mono mt-1">120</div>
          <div className="text-[11px] text-slate-400">Enumerated in SIA Survey</div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-xs">
          <div className="text-[10px] font-bold text-blue-800 uppercase">Eligible Families</div>
          <div className="text-2xl font-black text-blue-900 font-mono mt-1">100</div>
          <div className="text-[11px] text-blue-700">Verified by R&amp;R Administrator</div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 shadow-xs">
          <div className="text-[10px] font-bold text-emerald-800 uppercase">Benefits Provided</div>
          <div className="text-2xl font-black text-emerald-900 font-mono mt-1">83</div>
          <div className="text-[11px] text-emerald-700 font-bold">83% Conferred (RF-001 Done)</div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 shadow-xs">
          <div className="text-[10px] font-bold text-amber-800 uppercase">Pending Families</div>
          <div className="text-2xl font-black text-amber-900 font-mono mt-1">17</div>
          <div className="text-[11px] text-amber-700 font-bold">Includes Family RF-002 on P-103</div>
        </div>
      </div>

      {/* R&R Implementation Progress */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">
          Rehabilitation Delivery Progress (83% Complete)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-slate-700">Housing Units Handed Over (68 / 82 Units)</span>
              <span className="font-bold text-slate-900">83%</span>
            </div>
            <ProgressBar value={83} color="emerald" showText={false} />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-slate-700">One-time Grants Paid (₹8.4 Cr / ₹10.2 Cr)</span>
              <span className="font-bold text-slate-900">82%</span>
            </div>
            <ProgressBar value={82} color="blue" showText={false} />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-slate-700">Skill Development Enrolled (42 Families)</span>
              <span className="font-bold text-slate-900">78%</span>
            </div>
            <ProgressBar value={78} color="amber" showText={false} />
          </div>
        </div>
      </div>

      {/* Affected Families Registry Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
            Affected Family Registry &amp; Benefits Ledger
          </h3>
          <span className="text-[11px] text-slate-500 font-mono">PARK-001 • R&amp;R Directorate</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-100/50 border-b border-slate-200">
                <th className="py-3 px-4">Family ID</th>
                <th className="py-3 px-4">Parcel ID</th>
                <th className="py-3 px-4">Head of Family</th>
                <th className="py-3 px-4 text-center">Affected Members</th>
                <th className="py-3 px-4 text-center">Eligibility</th>
                <th className="py-3 px-4 text-center">Benefits</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RR_FAMILIES.map((f) => {
                const isRF002 = f.familyId === 'RF-002';
                return (
                  <tr 
                    key={f.familyId}
                    className={`transition-colors ${isRF002 ? 'bg-amber-50/60 font-semibold ring-1 ring-amber-200' : 'hover:bg-slate-50'}`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">{f.familyId}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{f.parcelId}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{f.headOfFamily}</td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-800">{f.affectedMembers}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        f.eligibility === 'Eligible' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {f.eligibility}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold text-slate-800">{f.benefits}</td>
                    <td className="py-3.5 px-4 text-center">
                      <StatusBadge status={f.status} />
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => {
                          onSelectParcel(f.parcelId);
                          onNavigate('parcel-details');
                        }}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-bold"
                      >
                        Inspect Parcel →
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

// 2. Possession.js (Possession Authority)
export function Possession({ onNavigate, onSelectParcel }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Land Possession &amp; Handover Authority</span>
            <span>•</span>
            <span>Sub-Division Alipur</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Land Possession &amp; Site Handover Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Physical possession taking, Panchnama execution, boundary demarcation, and site delivery to EPC contractor
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('construction')}
            className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Icon name="HardHat" className="w-4 h-4" />
            <span>EPC Construction Status</span>
          </button>
        </div>
      </div>

      {/* 4 Possession KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Total Parcels</div>
          <div className="text-2xl font-black text-slate-900 font-mono mt-1">4</div>
          <div className="text-[11px] text-slate-400">100 Acres Requisition</div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 shadow-xs">
          <div className="text-[10px] font-bold text-emerald-800 uppercase">Possession Obtained</div>
          <div className="text-2xl font-black text-emerald-900 font-mono mt-1">2</div>
          <div className="text-[11px] text-emerald-700">P-101 (Govt) &amp; P-102 (Panchnama)</div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 shadow-xs">
          <div className="text-[10px] font-bold text-amber-800 uppercase">Partial Possession</div>
          <div className="text-2xl font-black text-amber-900 font-mono mt-1">1</div>
          <div className="text-[11px] text-amber-700">P-104 (28 of 40 Acres fenced)</div>
        </div>

        <div className="bg-rose-50 rounded-xl p-4 border border-rose-200 shadow-xs">
          <div className="text-[10px] font-bold text-rose-800 uppercase">Disputed / Blocked</div>
          <div className="text-2xl font-black text-rose-900 font-mono mt-1">1</div>
          <div className="text-[11px] text-rose-700 font-bold">P-103 (Acquisition Dispute)</div>
        </div>
      </div>

      {/* Key Bottleneck Alert */}
      <div className="bg-rose-50 border-l-4 border-rose-600 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <Icon name="AlertTriangle" className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wide">
              Contiguous Site Delivery Blocked by Parcel P-103
            </h4>
            <p className="text-xs text-rose-800 mt-0.5 leading-relaxed">
              EPC contractor cannot cast central pavilion foundation or lay central arterial spine road because physical possession of 15 acres in Parcel P-103 is stalled pending Section 15 dispute settlement.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            onSelectParcel('P-103');
            onNavigate('parcel-details');
          }}
          className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shrink-0 transition-colors"
        >
          Inspect P-103 →
        </button>
      </div>

      {/* Possession Tracking Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4">Parcel ID</th>
                <th className="py-3 px-4">Possession Status</th>
                <th className="py-3 px-4">Possession Date</th>
                <th className="py-3 px-4">Remarks</th>
                <th className="py-3 px-4 text-right">Panchnama Record</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">P-101</td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Available
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-400 font-mono">-</td>
                <td className="py-3.5 px-4 font-medium text-slate-800">Government Land</td>
                <td className="py-3.5 px-4 text-right font-mono text-slate-500">GOV-DDA-2025-V12</td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">P-102</td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Obtained
                  </span>
                </td>
                <td className="py-3.5 px-4 font-mono font-bold text-slate-900">12/06/2026</td>
                <td className="py-3.5 px-4 font-medium text-slate-800">Complete</td>
                <td className="py-3.5 px-4 text-right font-mono text-emerald-700 font-semibold">DLAA/PN-2026/089</td>
              </tr>

              <tr className="bg-rose-50/60 hover:bg-rose-100/70 font-semibold ring-1 ring-rose-200">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                  P-103
                </td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 ring-1 ring-rose-300">
                    Pending
                  </span>
                </td>
                <td className="py-3.5 px-4 font-mono text-rose-600">-</td>
                <td className="py-3.5 px-4 font-bold text-rose-800">Acquisition dispute</td>
                <td className="py-3.5 px-4 text-right font-mono text-rose-600">HELD_PENDING_DISPUTE</td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">P-104</td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                    Partial
                  </span>
                </td>
                <td className="py-3.5 px-4 font-mono font-bold text-slate-900">25/07/2026</td>
                <td className="py-3.5 px-4 font-medium text-slate-800">Under process</td>
                <td className="py-3.5 px-4 text-right font-mono text-amber-700 font-semibold">DLAA/PN-2026/112</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
