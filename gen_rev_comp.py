import os

pages_dir = r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\pages"

# 1. Revenue.js
revenue_js = """// NLAMS Revenue Department Page Component
import { useState } from 'react';
import { StatusBadge } from '../components/StatusBadge.js';
import { Icon } from '../components/Icons.js';
import { PARCELS } from '../data/parcels.js';

export function Revenue({ onNavigate, onSelectParcel }) {
  const p103 = PARCELS.find(p => p.id === 'P-103') || PARCELS[2];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Land Records Authority</span>
            <span>•</span>
            <span>Sub-Division Alipur (North West Delhi)</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Revenue Department: Land Records &amp; Title Verification
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Verification of Jamabandi, Khatauni, RoR (Record of Rights), cadastral survey bounds, and Mutation entries
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('documents')}
            className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs"
          >
            <Icon name="FileText" className="w-4 h-4" />
            <span>Certified Land Records (PDF)</span>
          </button>
        </div>
      </div>

      {/* Case Focus Card: P-103 Revenue Standing */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
              PARCEL P-103
            </span>
            <h3 className="font-bold text-sm text-slate-900">
              Revenue Verification Summary for Smt. Ram Devi &amp; Legal Heirs
            </h3>
          </div>
          <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">
            MUTATION PENDING
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-emerald-50/60 p-3.5 rounded-lg border border-emerald-200">
            <div className="text-[10px] font-bold uppercase text-emerald-800">Ownership Status</div>
            <div className="text-sm font-bold text-emerald-900 mt-1 flex items-center gap-1">
              <span>✓ Verified</span>
            </div>
            <div className="text-[11px] text-emerald-700 mt-1">Clear title confirmed in RoR ledger</div>
          </div>

          <div className="bg-emerald-50/60 p-3.5 rounded-lg border border-emerald-200">
            <div className="text-[10px] font-bold uppercase text-emerald-800">Land Record (RoR)</div>
            <div className="text-sm font-bold text-emerald-900 mt-1 flex items-center gap-1">
              <span>✓ Available</span>
            </div>
            <div className="text-[11px] text-emerald-700 mt-1">Khewat No. 412, Khatoni No. 608</div>
          </div>

          <div className="bg-emerald-50/60 p-3.5 rounded-lg border border-emerald-200">
            <div className="text-[10px] font-bold uppercase text-emerald-800">Cadastral Survey</div>
            <div className="text-sm font-bold text-emerald-900 mt-1 flex items-center gap-1">
              <span>✓ Completed</span>
            </div>
            <div className="text-[11px] text-emerald-700 mt-1">DGPS survey boundary geo-tagged</div>
          </div>

          <div className="bg-amber-50/60 p-3.5 rounded-lg border border-amber-200">
            <div className="text-[10px] font-bold uppercase text-amber-800">Land Mutation</div>
            <div className="text-sm font-bold text-amber-900 mt-1 flex items-center gap-1">
              <span>⏳ Pending</span>
            </div>
            <div className="text-[11px] text-amber-700 mt-1">Waiting for statutory Section 23 Award</div>
          </div>
        </div>

        <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
          <div className="font-bold text-slate-900">Tehsildar Verification Note:</div>
          <p className="leading-relaxed">
            Title deed and genealogical tree (shajra nasab) for Smt. Ram Devi cross-referenced against historical revenue registers of 1985–86. Ownership is non-disputed. However, government mutation (Form-35) in favor of Project Implementing Agency is legally stayed until DLAA Collector resolves the compensation circle rate dispute.
          </p>
        </div>
      </div>

      {/* Complete Revenue Records Table for PARK-001 */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
            Jamabandi &amp; Mutation Ledger (All 4 Parcels)
          </h3>
          <span className="text-[11px] text-slate-500 font-mono">Tehsil Alipur, District North West</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-100/50 border-b border-slate-200">
                <th className="py-3 px-4">Parcel ID</th>
                <th className="py-3 px-4">Khasra Numbers</th>
                <th className="py-3 px-4">Area</th>
                <th className="py-3 px-4">Recorded Tenure Holder</th>
                <th className="py-3 px-4 text-center">RoR Status</th>
                <th className="py-3 px-4 text-center">Survey</th>
                <th className="py-3 px-4 text-center">Mutation</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {PARCELS.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">{p.id}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-800">{p.khasraNo}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{p.areaAcres} Acres</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{p.ownerName}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Verified
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Completed
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      p.mutationStatus === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                      p.mutationStatus === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      p.mutationStatus === 'Partial' ? 'bg-amber-100 text-amber-800' :
                      'bg-rose-100 text-rose-800 ring-1 ring-rose-200'
                    }`}>
                      {p.mutationStatus}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => {
                        onSelectParcel(p.id);
                        onNavigate('parcel-details');
                      }}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-bold"
                    >
                      View Details →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 2. Compensation.js (Finance Department)
export function Compensation({ onNavigate, onSelectParcel }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Finance &amp; Accounts Wing</span>
            <span>•</span>
            <span>PFMS &amp; e-Kuber Digital Rails</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Compensation Assessment &amp; Disbursement Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Statutory award calculation, competent approval, and electronic direct benefit transfer tracking
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('documents')}
            className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Icon name="FileText" className="w-4 h-4" />
            <span>PFMS Award Receipts</span>
          </button>
        </div>
      </div>

      {/* 4 Key Compensation Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Total Assessed</div>
          <div className="text-2xl font-black text-slate-900 font-mono mt-1">₹120 Cr</div>
          <div className="text-[11px] text-slate-400">Section 26 Evaluation</div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-xs">
          <div className="text-[10px] font-bold text-blue-800 uppercase">Approved Amount</div>
          <div className="text-2xl font-black text-blue-900 font-mono mt-1">₹100 Cr</div>
          <div className="text-[11px] text-blue-700">Competent Committee Sanction</div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 shadow-xs">
          <div className="text-[10px] font-bold text-emerald-800 uppercase">Disbursed / Paid</div>
          <div className="text-2xl font-black text-emerald-900 font-mono mt-1">₹90 Cr</div>
          <div className="text-[11px] text-emerald-700">Digital PFMS Credit</div>
        </div>

        <div className="bg-rose-50 rounded-xl p-4 border border-rose-200 shadow-xs">
          <div className="text-[10px] font-bold text-rose-800 uppercase">Pending / Abeyance</div>
          <div className="text-2xl font-black text-rose-900 font-mono mt-1">₹30 Cr</div>
          <div className="text-[11px] text-rose-700 font-bold">Includes ₹25 Cr for P-103</div>
        </div>
      </div>

      {/* Visual Flow: Assessed -> Approved -> Paid */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
        <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">
          Digital Compensation Progression Flow (PARK-001)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 relative">
            <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
              <span>1. Valuation Assessed</span>
              <span className="font-mono text-sm">₹120 Cr</span>
            </div>
            <p className="text-slate-500 text-[11px]">100% of requisitioned area valued under RFCTLARR Section 26</p>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-3">
              <div className="bg-slate-700 h-full w-full"></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 relative">
            <div className="flex items-center justify-between font-bold text-blue-900 mb-1">
              <span>2. Award Sanctioned</span>
              <span className="font-mono text-sm">₹100 Cr</span>
            </div>
            <p className="text-blue-700 text-[11px]">Sanctioned for P-102 (₹28 Cr) and P-104 (₹60 Cr)</p>
            <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden mt-3">
              <div className="bg-blue-600 h-full w-[83%]"></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 relative">
            <div className="flex items-center justify-between font-bold text-emerald-900 mb-1">
              <span>3. Treasury Paid (PFMS)</span>
              <span className="font-mono text-sm">₹90 Cr</span>
            </div>
            <p className="text-emerald-700 text-[11px]">Successfully credited to beneficiaries' Aadhaar-linked accounts</p>
            <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden mt-3">
              <div className="bg-emerald-600 h-full w-[75%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Alert for P-103 */}
      <div className="bg-rose-50 border-l-4 border-rose-600 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <Icon name="AlertTriangle" className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wide">
              Compensation Pending due to acquisition dispute
            </h4>
            <p className="text-xs text-rose-800 mt-0.5 leading-relaxed">
              Assessed award of ₹25 Cr for Parcel P-103 (Owner C) held in statutory escrow. Finance Department cannot release payment until Section 15 objection is resolved by DLAA Collector.
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
          View P-103 Assessment →
        </button>
      </div>

      {/* Compensation Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4">Parcel ID</th>
                <th className="py-3 px-4">Owner Name</th>
                <th className="py-3 px-4 text-right">Assessed Amount</th>
                <th className="py-3 px-4 text-right">Approved Amount</th>
                <th className="py-3 px-4 text-right">Paid Amount</th>
                <th className="py-3 px-4 text-center">Payment Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">P-101</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Government (DDA)</td>
                <td className="py-3.5 px-4 text-right font-mono">₹0</td>
                <td className="py-3.5 px-4 text-right font-mono">₹0</td>
                <td className="py-3.5 px-4 text-right font-mono">₹0</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                    Not Required
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right text-slate-400">N/A</td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">P-102</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Private Owner (Rajesh Kumar)</td>
                <td className="py-3.5 px-4 text-right font-mono font-semibold">₹30 Cr</td>
                <td className="py-3.5 px-4 text-right font-mono font-bold text-blue-900">₹28 Cr</td>
                <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700">₹28 Cr</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Paid
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <span className="text-emerald-700 font-mono text-[11px] font-semibold">UTR: SBIN00293810</span>
                </td>
              </tr>

              <tr className="bg-rose-50/60 hover:bg-rose-100/70 font-semibold ring-1 ring-rose-200">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                  P-103
                </td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Owner C (Smt. Ram Devi)</td>
                <td className="py-3.5 px-4 text-right font-mono font-semibold text-rose-800">₹25 Cr</td>
                <td className="py-3.5 px-4 text-right font-mono font-semibold text-rose-800">₹0</td>
                <td className="py-3.5 px-4 text-right font-mono font-semibold text-rose-800">₹0</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 ring-1 ring-rose-300">
                    Pending
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    onClick={() => {
                      onSelectParcel('P-103');
                      onNavigate('parcel-details');
                    }}
                    className="text-xs text-rose-700 hover:text-rose-900 font-bold underline"
                  >
                    View Dispute →
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">P-104</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">Multiple Owners (18 Co-sharers)</td>
                <td className="py-3.5 px-4 text-right font-mono font-semibold">₹65 Cr</td>
                <td className="py-3.5 px-4 text-right font-mono font-bold text-blue-900">₹60 Cr</td>
                <td className="py-3.5 px-4 text-right font-mono font-bold text-amber-700">₹45 Cr</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                    Partial (75%)
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <span className="text-slate-600 text-[11px]">14/18 Disbursed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Treasury Disclaimer */}
      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-[11px] text-slate-500">
        <Icon name="Info" className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong>Treasury Integration Note:</strong> Online compensation tracking functions as an integrated digital assessment, approval, and payment-status monitoring interface integrated with PFMS/e-Kuber, without replacing statutory RBI/Treasury fund clearing mechanisms.
        </div>
      </div>
    </div>
  );
}
"""

with open(os.path.join(pages_dir, "Revenue.js"), "w", encoding="utf-8") as f:
    f.write(revenue_js)

print("Written Revenue.js and Compensation.js")
