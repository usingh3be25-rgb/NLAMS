// NLAMS GIS Command Center Component (Leaflet.js Delhi Map)
import { useState, useEffect, useRef } from 'react';
import { StatusBadge } from '../components/StatusBadge.js';
import { Icon } from '../components/Icons.js';
import { PARCELS } from '../data/parcels.js';

export function GIS({ onNavigate, onSelectParcel }) {
  const [selectedParcelId, setSelectedParcelId] = useState('P-103');
  const [layerBoundary, setLayerBoundary] = useState(true);
  const [layerParcels, setLayerParcels] = useState(true);
  const [layerRisk, setLayerRisk] = useState(true);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const selectedParcel = PARCELS.find(p => p.id === selectedParcelId) || PARCELS[2];

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // already initialized

    // Check if Leaflet L is loaded
    if (typeof window.L === 'undefined') {
      console.warn('Leaflet not loaded yet');
      return;
    }

    const L = window.L;

    // Centered around North West Delhi (Rohini - Yamuna Green corridor)
    const map = L.map(mapContainerRef.current, {
      center: [28.7830, 77.1360],
      zoom: 14,
      zoomControl: false
    });

    L.control.zoom({ position: 'topleft' }).addTo(map);

    // OpenStreetMap standard tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors • Survey of India'
    }).addTo(map);

    mapInstanceRef.current = map;

    // Project Boundary (Purple outline - 100 acres)
    const boundaryCoords = [
      [28.7905, 77.1280],
      [28.7915, 77.1430],
      [28.7750, 77.1450],
      [28.7740, 77.1290]
    ];
    const boundaryPolygon = L.polygon(boundaryCoords, {
      color: '#8B5CF6',
      weight: 3,
      dashArray: '6, 6',
      fillColor: '#8B5CF6',
      fillOpacity: 0.08
    }).addTo(map);
    boundaryPolygon.bindTooltip('PARK-001: Green City Govt Park Boundary (100 Acres)', { sticky: true });

    // Parcel Polygons: P-101 (Green), P-102 (Blue), P-103 (Red dispute), P-104 (Amber)
    const parcelPolygons = [
      {
        id: 'P-101',
        coords: [
          [28.7840, 77.1290],
          [28.7900, 77.1285],
          [28.7895, 77.1350],
          [28.7835, 77.1345]
        ],
        color: '#10B981',
        name: 'P-101 (Govt Land - 20A)'
      },
      {
        id: 'P-102',
        coords: [
          [28.7895, 77.1350],
          [28.7910, 77.1425],
          [28.7850, 77.1420],
          [28.7840, 77.1350]
        ],
        color: '#3B82F6',
        name: 'P-102 (Acquired - 25A)'
      },
      {
        id: 'P-103',
        coords: [
          [28.7835, 77.1370],
          [28.7848, 77.1430],
          [28.7790, 77.1440],
          [28.7780, 77.1375]
        ],
        color: '#EF4444',
        name: 'P-103 (DISPUTE - 15A)'
      },
      {
        id: 'P-104',
        coords: [
          [28.7745, 77.1300],
          [28.7835, 77.1295],
          [28.7835, 77.1370],
          [28.7780, 77.1375],
          [28.7750, 77.1440]
        ],
        color: '#F59E0B',
        name: 'P-104 (In Progress - 40A)'
      }
    ];

    parcelPolygons.forEach((poly) => {
      const isDispute = poly.id === 'P-103';
      const pg = L.polygon(poly.coords, {
        color: poly.color,
        weight: isDispute ? 3 : 2,
        dashArray: isDispute ? '4, 4' : null,
        fillColor: poly.color,
        fillOpacity: isDispute ? 0.45 : 0.3
      }).addTo(map);

      // Rich Popup
      const pData = PARCELS.find(p => p.id === poly.id) || {};
      const popupHtml = '<div style="font-family: sans-serif; font-size: 11px; line-height: 1.4; min-width: 180px;">' +
        '<div style="font-weight: bold; font-size: 13px; color: #1E293B; margin-bottom: 4px; display: flex; align-items: center; justify-content: space-between;">' +
        '<span>Parcel ' + poly.id + '</span>' +
        '<span style="font-size: 10px; padding: 2px 6px; border-radius: 4px; background: ' + poly.color + '22; color: ' + poly.color + '; font-weight: bold;">' +
        (pData.acquisitionStatus || 'Status') + '</span></div>' +
        '<div><strong>Area:</strong> ' + (pData.areaAcres || '') + ' Acres</div>' +
        '<div><strong>Owner:</strong> ' + (pData.ownerName || '') + '</div>' +
        '<div><strong>Acquisition:</strong> ' + (pData.acquisitionStatus || '') + '</div>' +
        '<div><strong>Compensation:</strong> ' + (pData.compensationStatus || '') + '</div>' +
        '<div><strong>Possession:</strong> ' + (pData.possessionStatus || '') + '</div>' +
        '<div style="margin-top: 8px; text-align: right;">' +
        '<a href="javascript:void(0)" id="popup-btn-' + poly.id + '" style="color: #4F46E5; font-weight: bold; text-decoration: underline;">View Details ?</a>' +
        '</div></div>';
      pg.bindPopup(popupHtml);

      pg.on('click', () => {
        setSelectedParcelId(poly.id);
        setTimeout(() => {
          const btn = document.getElementById(`' + poly.id`);
          if (btn) {
            btn.onclick = () => {
              onSelectParcel(poly.id);
              onNavigate('parcel-details');
            };
          }
        }, 100);
      });

      // Marker at centroid
      const centroid = poly.coords[0];
      const marker = L.circleMarker(centroid, {
        radius: 6,
        fillColor: poly.color,
        color: '#FFFFFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(map);

      marker.bindTooltip(`<b>${poly.id}</b>: ${poly.name}`, { permanent: false });
      marker.on('click', () => {
        setSelectedParcelId(poly.id);
        pg.openPopup();
      });
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="p-6 space-y-4 max-w-7xl mx-auto h-[calc(100vh-110px)] flex flex-col">
      {/* Top Controls Header */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>GIS Command Center</span>
            <span>•</span>
            <span>Delhi NCT Cadastral Layer</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            Geospatial Land Demarcation &amp; Parcel Boundaries
          </h1>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-500"></span> Verified / Available (P-101)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-blue-500"></span> Acquired (P-102)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-rose-500 animate-pulse"></span> Dispute (P-103)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500"></span> Under Process (P-104)
          </span>
          <span className="flex items-center gap-1.5 border-l pl-3">
            <span className="w-3 h-3 border-2 border-dashed border-purple-500 rounded"></span> Project Area
          </span>
        </div>
      </div>

      {/* Main Map + Right Inspector Panel */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-0">
        {/* Left: Leaflet Interactive Map Container */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200 overflow-hidden relative shadow-sm flex flex-col">
          <div ref={mapContainerRef} className="w-full h-full min-h-[400px] z-10" />

          {/* Map Overlay Quick Layer Controls */}
          <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-xs rounded-lg p-2.5 border border-slate-200 shadow-lg text-xs space-y-1.5">
            <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">
              Cadastral Overlays
            </div>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700">
              <input type="checkbox" checked={layerBoundary} onChange={() => setLayerBoundary(!layerBoundary)} className="rounded" />
              <span>Project Boundary (100A)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700">
              <input type="checkbox" checked={layerParcels} onChange={() => setLayerParcels(!layerParcels)} className="rounded" />
              <span>Parcel Polygons (P101-P104)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700">
              <input type="checkbox" checked={layerRisk} onChange={() => setLayerRisk(!layerRisk)} className="rounded" />
              <span>Dispute Highlight (P-103)</span>
            </label>
          </div>
        </div>

        {/* Right: Selected Parcel Inspector Drawer */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-slate-200 p-4 shadow-sm overflow-y-auto space-y-4 text-xs">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-500 font-mono">
              Selected Parcel
            </span>
            <StatusBadge status={selectedParcel.status} />
          </div>

          <div>
            <div className="text-xl font-black text-slate-900 font-mono">
              {selectedParcel.id}
            </div>
            <div className="font-bold text-slate-800 mt-0.5">
              {selectedParcel.ownerName}
            </div>
            <div className="text-[11px] text-slate-500">
              {selectedParcel.ownerType} • {selectedParcel.village}
            </div>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Total Area:</span>
              <span className="font-bold text-slate-900 font-mono">{selectedParcel.areaAcres} Acres</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Khasra No:</span>
              <span className="font-mono font-semibold text-slate-800">{selectedParcel.khasraNo}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Acquisition:</span>
              <span className={`font-bold ${selectedParcel.acquisitionStatus === 'Dispute' ? 'text-rose-600' : 'text-slate-800'}`}>
                {selectedParcel.acquisitionStatus}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Compensation:</span>
              <span className="font-semibold text-slate-800">{selectedParcel.compensationStatus}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">R&amp;R Status:</span>
              <span className="font-semibold text-slate-800">{selectedParcel.rnrStatus}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Possession:</span>
              <span className="font-semibold text-rose-600">{selectedParcel.possessionStatus}</span>
            </div>
          </div>

          {selectedParcel.id === 'P-103' && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 space-y-1">
              <div className="font-bold flex items-center gap-1 text-[11px] text-rose-800">
                <Icon name="AlertTriangle" className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                ACQUISITION DISPUTE
              </div>
              <p className="text-[10px] text-rose-800 leading-tight">
                Contested valuation and access easement under Section 15. Directly halts contiguous site delivery for EPC contractor.
              </p>
            </div>
          )}

          <div className="pt-3 space-y-2">
            <button
              onClick={() => {
                onSelectParcel(selectedParcel.id);
                onNavigate('parcel-details');
              }}
              className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>View Full Parcel Details</span>
              <Icon name="ArrowRight" className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('acquisition')}
              className="w-full py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              Examine DLAA Hearing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Acquisition.js (District Land Acquisition Authority)
export function Acquisition({ onNavigate, onSelectParcel }) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
            <span>Competent Authority Dashboard</span>
            <span>•</span>
            <span>RFCTLARR 2013</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
            District Land Acquisition Authority (DLAA)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Statutory acquisition proceedings, Section 11/19 notifications, Section 15 objections and conciliation hearings
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onSelectParcel('P-103');
              onNavigate('parcel-details');
            }}
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Icon name="AlertTriangle" className="w-4 h-4" />
            <span>Open P-103 Dispute</span>
          </button>
        </div>
      </div>

      {/* Case Load Metrics for PARK-001 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Total Project Parcels</div>
          <div className="text-2xl font-black text-slate-900 font-mono mt-1">4</div>
          <div className="text-[11px] text-slate-400">100.00 Acres</div>
        </div>
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 shadow-xs">
          <div className="text-[10px] font-bold text-emerald-800 uppercase">Parcels Acquired</div>
          <div className="text-2xl font-black text-emerald-900 font-mono mt-1">2</div>
          <div className="text-[11px] text-emerald-700">P-101 (Govt) &amp; P-102 (Settled)</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 shadow-xs">
          <div className="text-[10px] font-bold text-amber-800 uppercase">Under Process</div>
          <div className="text-2xl font-black text-amber-900 font-mono mt-1">1</div>
          <div className="text-[11px] text-amber-700">P-104 (Joint Khata)</div>
        </div>
        <div className="bg-rose-50 rounded-xl p-4 border border-rose-200 shadow-xs">
          <div className="text-[10px] font-bold text-rose-800 uppercase">Disputed Parcels</div>
          <div className="text-2xl font-black text-rose-900 font-mono mt-1">1</div>
          <div className="text-[11px] text-rose-700 font-bold">P-103 (Section 15 Objection)</div>
        </div>
      </div>

      {/* Statutory Acquisition Workflow Stages */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-slate-900">
          Statutory Land Acquisition Workflow (RFCTLARR Act)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-2 text-center text-xs">
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
            <div className="text-[10px] text-emerald-600 font-mono">STEP 1</div>
            <div>Land Identification</div>
            <span className="text-[9px] text-emerald-700 font-bold">✓ DONE</span>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
            <div className="text-[10px] text-emerald-600 font-mono">STEP 2</div>
            <div>Cadastral Survey</div>
            <span className="text-[9px] text-emerald-700 font-bold">✓ DONE</span>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
            <div className="text-[10px] text-emerald-600 font-mono">STEP 3</div>
            <div>Ownership Verif.</div>
            <span className="text-[9px] text-emerald-700 font-bold">✓ DONE</span>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
            <div className="text-[10px] text-emerald-600 font-mono">STEP 4</div>
            <div>Gazette Notif. (Sec 11)</div>
            <span className="text-[9px] text-emerald-700 font-bold">✓ DONE</span>
          </div>
          <div className="p-3 rounded-lg bg-rose-50 border-2 border-rose-400 text-rose-900 font-bold ring-2 ring-rose-200">
            <div className="text-[10px] text-rose-600 font-mono">STEP 5</div>
            <div>Objections (Sec 15)</div>
            <span className="text-[9px] text-rose-700 animate-pulse">⚠ ACTIVE DISPUTE</span>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-semibold">
            <div className="text-[10px] text-amber-600 font-mono">STEP 6</div>
            <div>Hearing &amp; Conciliation</div>
            <span className="text-[9px] text-amber-700 font-bold">24-Sep-2026</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-500">
            <div className="text-[10px] font-mono">STEP 7</div>
            <div>Acquisition Decision</div>
            <span className="text-[9px] text-slate-400">Pending Award</span>
          </div>
        </div>
      </div>

      {/* Highlighted Objection File: P-103 */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs font-mono">
              CASE: DLAA/OBJ/2026/049
            </span>
            <h3 className="font-bold text-sm text-slate-900">
              Acquisition Dispute: Parcel P-103 (15.00 Acres)
            </h3>
          </div>
          <StatusBadge status="Disputed" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <div>
              <span className="text-slate-500 font-semibold">Claimant / Landowner:</span>
              <p className="font-bold text-slate-900">Owner C (Smt. Ram Devi &amp; Legal Heirs)</p>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Affected Khasra Numbers:</span>
              <p className="font-mono text-slate-800">Khasra 95/2, 96, 97/1 (Village Shahpur Garhi)</p>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Grounds of Objection:</span>
              <p className="text-slate-700 bg-slate-50 p-2.5 rounded border leading-relaxed">
                1. Contesting agricultural circle rate evaluation (₹1.66 Cr/Acre assessed vs ₹4.2 Cr/Acre claimed due to Outer Ring Road road frontage).
                <br/>
                2. Disputing 1.2 acre access road easement slicing remainder agricultural plot.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-slate-500 font-semibold">Statutory Authority:</span>
              <p className="font-bold text-slate-900">District Land Acquisition Collector (North West Delhi)</p>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Scheduled Conciliation Hearing:</span>
              <p className="font-bold text-indigo-700">24-Sep-2026 at 11:00 AM (Collector Courtroom 3)</p>
            </div>
            <div className="pt-3 flex flex-wrap gap-2">
              <button 
                onClick={() => {
                  onSelectParcel('P-103');
                  onNavigate('parcel-details');
                }}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded font-bold text-xs"
              >
                View Parcel Details
              </button>
              <button 
                onClick={() => onNavigate('documents')}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold text-xs"
              >
                View Objection Petition (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}