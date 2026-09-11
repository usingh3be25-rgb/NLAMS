// NLAMS Document Management Page Component
import { useState } from 'react';
import { StatusBadge } from '../components/StatusBadge.js';
import { Icon } from '../components/Icons.js';
import { Modal } from '../components/Modal.js';
import { DOCUMENTS } from '../data/documents.js';

export function Documents({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDoc, setActiveDoc] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const categories = [
    'ALL',
    'Land Records',
    'Survey Reports',
    'Ownership Documents',
    'Notifications',
    'Objection Documents',
    'Compensation Documents',
    'Possession Documents',
    'Construction Documents'
  ];

  const filteredDocs = DOCUMENTS.filter((doc) => {
    const matchesCat = selectedCategory === 'ALL' || doc.category === selectedCategory;
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.parcelId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Toast Notification */}
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
            <span>Digital Repository</span>
            <span>•</span>
            <span>NIC e-Office Compliant</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Document Management &amp; Legal Archives
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Certified Gazette notifications, Jamabandi RoR records, Section 15 petitions, and Panchnama certificates
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsUploadOpen(true)}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Icon name="Plus" className="w-4 h-4" />
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      {/* Categories Horizontal Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-xs flex items-center gap-3">
        <div className="relative flex-1">
          <Icon name="Search" className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search documents by Title, Document ID (e.g. DOC-1005), Parcel ID, or Department..."
            className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
          />
        </div>
      </div>

      {/* Documents Grid Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4">Doc ID</th>
                <th className="py-3 px-4">Document Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Target Parcel</th>
                <th className="py-3 px-4">Department / Authority</th>
                <th className="py-3 px-4">Upload Date</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDocs.map((doc) => {
                const isP103 = doc.parcelId === 'P-103';
                return (
                  <tr 
                    key={doc.id}
                    className={`hover:bg-slate-50 transition-colors ${isP103 ? 'bg-amber-50/30' : ''}`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-indigo-700">{doc.id}</td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{doc.title}</div>
                      <div className="text-[10px] text-slate-500">{doc.fileType} • {doc.fileSize}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{doc.category}</td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-800">
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        doc.parcelId === 'P-103' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {doc.parcelId}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{doc.department}</td>
                    <td className="py-3 px-4 font-mono text-slate-500">{doc.uploadDate}</td>
                    <td className="py-3 px-4 text-center">
                      <StatusBadge status={doc.status} />
                    </td>
                    <td className="py-3 px-4 text-right space-x-1 whitespace-nowrap">
                      <button
                        onClick={() => setActiveDoc(doc)}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px]"
                      >
                        View
                      </button>
                      <button
                        onClick={() => showToast(`Downloading ${doc.id} (${doc.title})...`)}
                        className="px-2.5 py-1 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px]"
                      >
                        Download
                      </button>
                      <button
                        onClick={() => showToast(`Document ${doc.id} forwarded to Central Ministry repository.`)}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px]"
                      >
                        Forward
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document View Modal */}
      {activeDoc && (
        <Modal
          isOpen={true}
          onClose={() => setActiveDoc(null)}
          title={`Official Document: ${activeDoc.id}`}
          maxWidth="max-w-3xl"
          footer={
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  showToast(`Document ${activeDoc.id} marked as digitally verified.`);
                  setActiveDoc(null);
                }}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
              >
                Verify Document
              </button>
              <button
                onClick={() => {
                  showToast(`Downloading official PDF for ${activeDoc.id}...`);
                  setActiveDoc(null);
                }}
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs"
              >
                Download PDF
              </button>
              <button
                onClick={() => setActiveDoc(null)}
                className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs"
              >
                Close
              </button>
            </div>
          }
        >
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{activeDoc.title}</h4>
                  <div className="text-[11px] text-slate-500 font-mono">Category: {activeDoc.category} • Target Parcel: {activeDoc.parcelId}</div>
                </div>
                <StatusBadge status={activeDoc.status} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs pt-1">
                <div><span className="text-slate-500">Department:</span> <strong>{activeDoc.department}</strong></div>
                <div><span className="text-slate-500">File Size:</span> <strong>{activeDoc.fileSize}</strong></div>
                <div><span className="text-slate-500">Verified By:</span> <strong>{activeDoc.verifiedBy}</strong></div>
              </div>
            </div>

            {/* Document Content Simulation */}
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 bg-slate-50/50 text-center space-y-3 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none text-6xl font-black text-slate-900 rotate-12">
                GOVERNMENT OF INDIA
              </div>
              <div className="w-12 h-12 mx-auto rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
                <Icon name="FileText" className="w-6 h-6" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm">
                Certified Digital Document Preview
              </h5>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {activeDoc.summary}
              </p>
              <div className="pt-2 text-[10px] font-mono text-slate-400">
                Digitally Signed &amp; Timestamped: {activeDoc.uploadDate} • Hash: SHA256-9F81...A2B0
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Upload Modal */}
      {isUploadOpen && (
        <Modal
          isOpen={true}
          onClose={() => setIsUploadOpen(false)}
          title="Upload Official Document to Project Repository"
          maxWidth="max-w-lg"
          footer={
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  showToast('Document uploaded and queued for digital verification.');
                  setIsUploadOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs"
              >
                Upload File
              </button>
              <button
                onClick={() => setIsUploadOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-200 text-slate-800 font-semibold text-xs"
              >
                Cancel
              </button>
            </div>
          }
        >
          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Document Category</label>
              <select className="w-full bg-slate-50 border rounded-lg p-2 font-sans">
                {categories.filter(c => c !== 'ALL').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Document Title</label>
              <input type="text" placeholder="e.g. Supplementary Valuation Report" className="w-full bg-slate-50 border rounded-lg p-2 font-sans" />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Associated Parcel ID</label>
              <select className="w-full bg-slate-50 border rounded-lg p-2 font-sans">
                <option value="P-103">P-103 (Owner C - 15 Acres)</option>
                <option value="P-102">P-102 (Rajesh Kumar - 25 Acres)</option>
                <option value="P-101">P-101 (Govt Land - 20 Acres)</option>
                <option value="P-104">P-104 (Multiple - 40 Acres)</option>
                <option value="ALL">ALL (Project-wide)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Select File (PDF / GeoTIFF / DWG)</label>
              <input type="file" className="w-full bg-slate-50 border rounded-lg p-2 text-slate-500 font-sans" />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// 2. Notifications.js (Alert Center)
export function Notifications({ onNavigate }) {
  const [filter, setFilter] = useState('ALL');
  const [toastMessage, setToastMessage] = useState('');

  const notifs = [
    {
      id: 'NOTIF-1',
      type: 'HIGH PRIORITY',
      priority: 'high',
      title: 'P-103 acquisition dispute requires action.',
      message: 'Section 15 objection filed by Owner C for Parcel P-103. Statutory hearing scheduled for 24-Sep-2026. Delay impacts EPC contractor schedule.',
      projectId: 'PARK-001',
      parcelId: 'P-103',
      department: 'DLAA',
      timestamp: '10 minutes ago',
      unread: true,
      route: 'acquisition'
    },
    {
      id: 'NOTIF-2',
      type: 'WARNING',
      priority: 'warning',
      title: 'Compensation payment pending for P-103.',
      message: 'Assessment of ₹25 Cr held in abeyance. Finance department cannot disburse funds until DLAA Collector resolves dispute.',
      projectId: 'PARK-001',
      parcelId: 'P-103',
      department: 'Finance',
      timestamp: '2 hours ago',
      unread: true,
      route: 'compensation'
    },
    {
      id: 'NOTIF-3',
      type: 'WARNING',
      priority: 'warning',
      title: 'Possession delayed for P-103.',
      message: 'Contiguous possession for structural foundation works cannot be completed. EPC contractor milestone M-3 at critical risk.',
      projectId: 'PARK-001',
      parcelId: 'P-103',
      department: 'Possession',
      timestamp: '1 day ago',
      unread: true,
      route: 'possession'
    },
    {
      id: 'NOTIF-4',
      type: 'INFO',
      priority: 'info',
      title: 'GIS survey completed for PARK-001.',
      message: 'High-resolution drone photogrammetry and DGPS cadastral boundary layer successfully committed to National Geo-Portal.',
      projectId: 'PARK-001',
      parcelId: 'ALL',
      department: 'GIS & Survey',
      timestamp: '3 days ago',
      unread: false,
      route: 'gis'
    },
    {
      id: 'NOTIF-5',
      type: 'SUCCESS',
      priority: 'success',
      title: 'Compensation successfully recorded for P-102.',
      message: 'Digital treasury disbursement of ₹28 Cr successfully credited to Rajesh Kumar & Sons via PFMS UTR: SBIN002938102948.',
      projectId: 'PARK-001',
      parcelId: 'P-102',
      department: 'Finance',
      timestamp: '5 days ago',
      unread: false,
      route: 'compensation'
    }
  ];

  const filteredNotifs = notifs.filter(n => filter === 'ALL' || n.priority === filter);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2">
          <Icon name="CheckCircle2" className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Inter-Agency Alerts</span>
            <span>•</span>
            <span>Real-time Dispatch</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Notifications &amp; Early Warning Dispatch
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Automated alerts dispatched across Revenue, DLAA, Finance, and Possession authorities
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setToastMessage('All notifications marked as read.')}
            className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
          >
            Mark All as Read
          </button>
        </div>
      </div>

      {/* Priority Filters */}
      <div className="flex items-center gap-2 text-xs">
        {['ALL', 'high', 'warning', 'info', 'success'].map((p) => (
          <button
            key={p}
            onClick={() => setFilter(p)}
            className={`px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider transition-colors ${
              filter === p 
                ? 'bg-slate-900 text-white' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {p === 'ALL' ? 'All Alerts (5)' : p}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifs.map((n) => {
          let badgeBg = 'bg-slate-100 text-slate-700';
          let borderClass = 'border-slate-200 bg-white';
          if (n.priority === 'high') {
            badgeBg = 'bg-rose-100 text-rose-800';
            borderClass = 'border-rose-300 bg-rose-50/40 ring-1 ring-rose-200';
          } else if (n.priority === 'warning') {
            badgeBg = 'bg-amber-100 text-amber-800';
            borderClass = 'border-amber-200 bg-amber-50/40';
          } else if (n.priority === 'success') {
            badgeBg = 'bg-emerald-100 text-emerald-800';
            borderClass = 'border-emerald-200 bg-emerald-50/40';
          } else if (n.priority === 'info') {
            badgeBg = 'bg-blue-100 text-blue-800';
            borderClass = 'border-blue-200 bg-blue-50/40';
          }

          return (
            <div 
              key={n.id}
              onClick={() => onNavigate(n.route)}
              className={`p-4 rounded-xl border transition-all cursor-pointer hover:shadow-sm ${borderClass}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${badgeBg}`}>
                    {n.type}
                  </span>
                  <span className="font-bold text-sm text-slate-900">{n.title}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <span>{n.department}</span>
                  <span>•</span>
                  <span>{n.timestamp}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {n.message}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <span>Project: <strong>{n.projectId}</strong></span>
                  <span>•</span>
                  <span>Parcel: <strong>{n.parcelId}</strong></span>
                </div>
                <span className="text-indigo-600 font-bold hover:underline flex items-center gap-1">
                  Open Action Module →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
