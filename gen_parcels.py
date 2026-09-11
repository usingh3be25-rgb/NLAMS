import os

pages_dir = r"C:\Users\asus\.gemini\antigravity\scratch\nlams\src\pages"

parcels_js = """// NLAMS Land Parcels & Parcel Details Page Components
import { useState } from 'react';
import { StatusBadge } from '../components/StatusBadge.js';
import { Icon } from '../components/Icons.js';
import { PARCELS } from '../data/parcels.js';

export function Parcels({ onNavigate, onSelectParcel }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredParcels = PARCELS.filter((p) => {
    const matchesSearch = 
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.khasraNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.village.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-slate-500">
            <span>Project: PARK-001</span>
            <span>•</span>
            <span>Cadastral Registry</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Land Parcels Management (Green City Government Park)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Total 4 constituent parcels spanning 100 acres in Delhi NCT (Khasra boundary demarcated)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onSelectParcel('P-103');
              onNavigate('parcel-details');
            }}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <Icon name="AlertTriangle" className="w-4 h-4 text-white" />
            <span>Open Problematic Parcel P-103</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Icon name="Search" className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Parcel ID (e.g. P-103), Owner Name, Khasra Number..."
            className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span className="text-slate-500 font-semibold">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL">All Statuses</option>
              <option value="Verified">Verified</option>
              <option value="Acquired">Acquired</option>
              <option value="Disputed">Disputed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
        </div>
      </div>

      {/* Parcels Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4">Parcel ID</th>
                <th className="py-3 px-4">Area (Acres)</th>
                <th className="py-3 px-4">Owner Name &amp; Classification</th>
                <th className="py-3 px-4">Location / Khasra</th>
                <th className="py-3 px-4 text-center">Acquisition</th>
                <th className="py-3 px-4 text-center">Compensation</th>
                <th className="py-3 px-4 text-center">R&amp;R</th>
                <th className="py-3 px-4 text-center">Possession</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredParcels.map((p) => {
                const isP103 = p.id === 'P-103';
                return (
                  <tr
                    key={p.id}
                    onClick={() => {
                      onSelectParcel(p.id);
                      onNavigate('parcel-details');
                    }}
                    className={`cursor-pointer transition-colors ${
                      isP103 
                        ? 'bg-rose-50/60 hover:bg-rose-100/70 font-semibold ring-1 ring-rose-200' 
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-700 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        {isP103 && <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>}
                        {p.id}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                      {p.areaAcres} Acres
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{p.ownerName}</div>
                      <div className="text-[10px] text-slate-500">{p.ownerType}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-800 font-medium">{p.location}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{p.khasraNo}</div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.acquisitionStatus === 'Dispute' ? 'bg-rose-100 text-rose-800 ring-1 ring-rose-300' :
                        p.acquisitionStatus === 'Acquired' ? 'bg-emerald-100 text-emerald-800' :
                        p.acquisitionStatus === 'Not Required' ? 'bg-slate-100 text-slate-700' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {p.acquisitionStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-medium text-slate-800">
                      {p.compensationStatus}
                    </td>
                    <td className="py-3.5 px-4 text-center font-medium text-slate-800">
                      {p.rnrStatus}
                    </td>
                    <td className="py-3.5 px-4 text-center font-medium text-slate-800">
                      {p.possessionStatus}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectParcel(p.id);
                          onNavigate('parcel-details');
                        }}
                        className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                          isP103 
                            ? 'bg-rose-600 text-white hover:bg-rose-700' 
                            : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white'
                        }`}
                      >
                        {isP103 ? 'Inspect Dispute →' : 'View Details →'}
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

// 2. ParcelDetails.js
export function ParcelDetails({ onNavigate, parcelId = 'P-103', onSelectParcel }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const parcel = PARCELS.find(p => p.id === parcelId) || PARCELS.find(p => p.id === 'P-103') || PARCELS[0];

  const tabs = ['Overview', 'Acquisition', 'Compensation', 'R&R', 'Possession', 'Documents', 'GIS Location'];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                PARCEL ID: {parcel.id}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-mono text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                PROJECT: {parcel.projectId}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs text-slate-600">{parcel.location}</span>
              <span className="text-slate-400">•</span>
              <StatusBadge status={parcel.status} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Parcel {parcel.id}: {parcel.ownerName}
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
              {parcel.remarks}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigate('gis')}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
            >
              <Icon name="Map" className="w-4 h-4 text-indigo-200" />
              <span>Locate on GIS Map</span>
            </button>
            <button
              onClick={() => onNavigate('acquisition')}
              className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
            >
              <Icon name="Scale" className="w-4 h-4 text-white" />
              <span>DLAA Dispute File</span>
            </button>
          </div>
        </div>

        {/* Parcel Quick Facts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-6 pt-5 border-t border-slate-100">
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Parcel Area</div>
            <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">{parcel.areaAcres} Acres</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Owner</div>
            <div className="text-xs font-bold text-slate-900 truncate mt-0.5">{parcel.ownerName}</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Location</div>
            <div className="text-xs font-bold text-slate-900 mt-0.5">{parcel.location}</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Survey Status</div>
            <div className="text-xs font-bold text-emerald-700 mt-0.5">{parcel.surveyStatus}</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Ownership Verif.</div>
            <div className="text-xs font-bold text-emerald-700 mt-0.5">{parcel.ownershipVerification}</div>
          </div>
          <div className="bg-rose-50/70 rounded-lg p-2.5 border border-rose-200">
            <div className="text-[10px] font-bold text-rose-800 uppercase">Acquisition</div>
            <div className="text-xs font-bold text-rose-700 mt-0.5">{parcel.acquisitionStatus}</div>
          </div>
          <div className="bg-amber-50/70 rounded-lg p-2.5 border border-amber-200">
            <div className="text-[10px] font-bold text-amber-800 uppercase">Compensation</div>
            <div className="text-xs font-bold text-amber-700 mt-0.5">{parcel.compensationStatus}</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Possession</div>
            <div className="text-xs font-bold text-rose-700 mt-0.5">{parcel.possessionStatus}</div>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex border-b border-slate-200 gap-2 overflow-x-auto text-xs font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 border-b-2 font-bold whitespace-nowrap transition-colors ${
              activeTab === tab 
                ? 'border-indigo-600 text-indigo-600' 
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content Panes */}
      {activeTab === 'Overview' && (
        <div className="space-y-6">
          {/* Dispute Warning Callout */}
          <div className="bg-rose-50 border-l-4 border-rose-600 rounded-xl p-5 shadow-xs">
            <div className="flex items-start gap-3">
              <Icon name="AlertTriangle" className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-rose-900 uppercase tracking-wide">
                  Active Section 15 Dispute: {parcel.disputeType}
                </h3>
                <p className="text-xs text-rose-800 leading-relaxed">
                  {parcel.objectionSummary}
                </p>
                <div className="pt-2 text-xs font-semibold text-rose-900 flex items-center gap-4">
                  <span>Assessed Compensation: <strong>{parcel.assessedCompensation}</strong></span>
                  <span>Approved: <strong>{parcel.approvedCompensation}</strong></span>
                  <span>Disbursed: <strong>{parcel.paidCompensation}</strong></span>
                  <span>Hearing Date: <strong>{parcel.hearingDate}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Parcel Lifecycle Progression Timeline */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Parcel P-103 Statutory Lifecycle Progression
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Tracing the legal progression from cadastral survey to the present acquisition dispute
            </p>

            <div className="relative border-l-2 border-slate-200 ml-4 space-y-6 pb-2">
              {(parcel.timeline || []).map((t, idx) => {
                const isDispute = t.status === 'Dispute' || t.status === 'Warning';
                const isPending = t.status === 'Pending';
                return (
                  <div key={idx} className="relative pl-6">
                    <div className={`absolute -left-[9px] top-0.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                      isDispute ? 'border-rose-600 bg-rose-500 text-white' :
                      isPending ? 'border-amber-400 bg-amber-50' : 'border-emerald-600 bg-emerald-500 text-white'
                    }`}>
                      <span className="text-[8px] font-bold">
                        {isDispute ? '!' : isPending ? '⏳' : '✓'}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="font-bold text-xs text-slate-900">
                        {t.step}
                        <span className={`ml-2 text-[10px] font-mono px-2 py-0.5 rounded ${
                          isDispute ? 'bg-rose-100 text-rose-800' :
                          isPending ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {t.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {t.date}
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {t.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Acquisition' && (
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-bold text-sm text-slate-900">District Land Acquisition Authority (DLAA) Status</h3>
            <span className="px-2 py-1 rounded bg-rose-100 text-rose-800 font-bold">CASE STATUS: UNDER DISPUTE</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-slate-500 font-semibold">Notification Section:</span>
              <p className="font-bold text-slate-800 mt-0.5">Section 11(1) Gazette Notification No. DLAA/DEL/2025/112</p>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Statutory Objection:</span>
              <p className="font-bold text-rose-700 mt-0.5">Section 15 (Valuation &amp; Access Demarcation)</p>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Next Collector Conciliation Hearing:</span>
              <p className="font-bold text-slate-900 mt-0.5">24-September-2026 at 11:00 AM (Court of DM North West)</p>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Claimant Representation:</span>
              <p className="font-bold text-slate-800 mt-0.5">Advocate S. P. Gupta on behalf of Smt. Ram Devi &amp; Legal Heirs</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Compensation' && (
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-bold text-sm text-slate-900">Finance &amp; Compensation Status</h3>
            <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold">₹25 Cr HELD IN ABEYANCE</span>
          </div>
          <p className="text-slate-600">
            Valuation has been assessed at ₹25 Crore by the District Evaluation Committee. However, payment disbursement via PFMS/e-Kuber cannot be triggered until the Collector issues the formal Section 23 Award order.
          </p>
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 font-semibold">
            Alert: Compensation Pending due to acquisition dispute. Treasury sub-account reserved in escrow.
          </div>
        </div>
      )}

      {activeTab === 'R&R' && (
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-bold text-sm text-slate-900">R&amp;R Resettlement Status (Family RF-002)</h3>
            <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold">UNDER REVIEW</span>
          </div>
          <p className="text-slate-600">
            Affected Family RF-002 consists of 6 members under Smt. Ram Devi. Family has filed claim for Commercial Resettlement Shop Allotment in addition to statutory housing unit. Eligibility verification is tagged with the Section 15 hearing.
          </p>
        </div>
      )}

      {activeTab === 'Possession' && (
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-bold text-sm text-slate-900">Physical Possession &amp; Panchnama Status</h3>
            <span className="px-2 py-1 rounded bg-rose-100 text-rose-800 font-bold">POSSESSION PENDING</span>
          </div>
          <p className="text-slate-600">
            No physical boundary pegs or security barricades have been erected on Parcel P-103. Panchnama certificate cannot be executed under Section 38 until dispute resolution concludes. This directly prevents contiguous access for EPC structural foundation work.
          </p>
        </div>
      )}

      {activeTab === 'Documents' && (
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3 text-xs">
          <h3 className="font-bold text-sm text-slate-900 pb-2 border-b">Legal &amp; Survey Documents for P-103</h3>
          <div className="space-y-2">
            <div className="p-3 bg-slate-50 rounded-lg border flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">DOC-1003: Jamabandi Record of Rights (RoR) - Khewat 412</div>
                <div className="text-[10px] text-slate-500">Revenue Dept • Verified Title Deed</div>
              </div>
              <span className="text-emerald-700 font-bold">✓ Verified</span>
            </div>
            <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">DOC-1005: Section 15 Formal Objection Petition by Owner C</div>
                <div className="text-[10px] text-slate-500">DLAA Hearings • 4.6 MB PDF</div>
              </div>
              <span className="text-rose-700 font-bold">⚠ Pending Hearing</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'GIS Location' && (
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900">Geospatial Coordinates for Parcel P-103</h3>
            <button 
              onClick={() => onNavigate('gis')}
              className="px-3 py-1 bg-indigo-600 text-white rounded font-bold"
            >
              Open Full GIS Map →
            </button>
          </div>
          <p className="text-slate-600">
            Centroid: Lat 28.7815° N, Lng 77.1410° E • Khasra K-95/2, 96, 97/1 • Area: 15.00 Acres.
          </p>
          <div className="p-4 bg-slate-100 rounded-lg text-center font-mono text-slate-500 border border-slate-200">
            [Cadastral Polygon P-103 (Red Dispute Polygon) Centered in GIS Command View]
          </div>
        </div>
      )}
    </div>
  );
}
"""

with open(os.path.join(pages_dir, "Parcels.js"), "w", encoding="utf-8") as f:
    f.write(parcels_js)

print("Written Parcels.js and ParcelDetails.js")
