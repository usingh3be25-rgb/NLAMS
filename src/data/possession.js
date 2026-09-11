// National Land Acquisition & Management System (NLAMS) - Possession Dataset

export const POSSESSION_SUMMARY = {
  projectId: 'PARK-001',
  totalParcels: 4,
  possessionObtained: 2, // P-101 (Available Govt) + P-102 (Obtained)
  pending: 1,           // P-104 (Partial)
  disputed: 1,          // P-103 (Dispute)
  totalAcresPossessed: 70, // 40 Govt + 25 (P-102) + 5 partial of P-104 -> 70%
  percentPossession: 70,
  keyBottleneck: 'Contiguous access to central spine road and structural pavilion blocked due to lack of possession on Parcel P-103 (15 acres).'
};

export const POSSESSION_TABLE = [
  {
    parcelId: 'P-101',
    areaAcres: 20,
    owner: 'Government Land (DDA)',
    possessionStatus: 'Available',
    possessionDate: '-',
    statusClass: 'verified',
    panchnamaNo: 'GOV-DDA-2025-V12',
    officer: 'Assistant Collector Grade-I, Alipur',
    remarks: 'Government Land - already under DDA horticultural maintenance.'
  },
  {
    parcelId: 'P-102',
    areaAcres: 25,
    owner: 'Private Owner (Rajesh Kumar)',
    possessionStatus: 'Obtained',
    possessionDate: '12/06/2026',
    statusClass: 'acquired',
    panchnamaNo: 'DLAA/PN-2026/089',
    officer: 'Naib Tehsildar & Kanungo, Sub-Division Alipur',
    remarks: 'Complete. Physical boundary pegs fixed, handed over to EPC contractor with formal Panchnama.'
  },
  {
    parcelId: 'P-103',
    areaAcres: 15,
    owner: 'Owner C (Smt. Ram Devi)',
    possessionStatus: 'Pending',
    possessionDate: '-',
    statusClass: 'dispute',
    panchnamaNo: 'HELD_PENDING_DISPUTE',
    officer: 'District Land Acquisition Collector (Assigned)',
    remarks: 'Acquisition dispute under Section 15. Contested boundary prevents physical demarcating.'
  },
  {
    parcelId: 'P-104',
    areaAcres: 40,
    owner: 'Multiple Owners (Shahpur Khata)',
    possessionStatus: 'Partial',
    possessionDate: '25/07/2026',
    statusClass: 'process',
    panchnamaNo: 'DLAA/PN-2026/112 (Interim)',
    officer: 'Tehsildar & Patwari Circle Alipur',
    remarks: 'Under process. 28 acres handed over; remaining 12 acres undergoing boundary fencing.'
  }
];
