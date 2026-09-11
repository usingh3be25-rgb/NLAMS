// National Land Acquisition & Management System (NLAMS) - Unified Bundle

const { useState, useEffect, useRef, useMemo } = React;



// ===== FILE: src\data\projects.js =====

// National Land Acquisition & Management System (NLAMS) - Projects Dataset

const PROJECTS = [
  {
    id: 'PARK-001',
    name: 'Green City Government Park',
    location: 'Delhi, India',
    state: 'Delhi NCT',
    district: 'North West Delhi (Rohini - Yamuna Corridor)',
    department: 'Central / State Government (Joint Steering Committee)',
    implementingAgency: 'Delhi Development Authority (DDA) / Urban Infrastructure Wing',
    totalArea: 100, // Acres
    govtLand: 40,   // Acres
    reqAcquisition: 60, // Acres
    acquiredArea: 82, // Acres (40 Govt + 25 Acquired P-102 + 17 Partial P-104)
    budget: '₹150 Crore',
    budgetNumeric: 150,
    spentBudget: '₹96.5 Crore',
    durationMonths: 24,
    elapsedMonths: 14,
    startDate: '2025-07-01',
    targetCompletionDate: '2027-06-30',
    status: 'At Risk',
    riskLevel: 'HIGH',
    riskScore: 3,
    overallProgress: 68,
    acquisitionProgress: 82,
    compensationProgress: 75,
    rnrProgress: 83,
    possessionProgress: 70,
    constructionProgress: 45,
    description: 'Multi-functional ecological urban forest and government recreation complex spanning 100 acres in Delhi NCT to enhance groundwater recharge, green canopy, and civic amenities.',
    keyHoldUp: 'Parcel P-103 (15 Acres) under Section 15 acquisition dispute regarding circle rate valuation and demarcation, halting contiguous possession and structural work.',
    lifecycleStages: [
      { id: 1, name: 'Project Proposal', status: 'Completed', date: '2025-07-15', department: 'Central Ministry / State Govt', remarks: 'Administrative approval & DPR clearance granted' },
      { id: 2, name: 'Land Identification', status: 'Completed', date: '2025-08-10', department: 'Project Implementing Agency', remarks: '100 acres demarcated; 40A Govt, 60A Private' },
      { id: 3, name: 'GIS Survey', status: 'Completed', date: '2025-09-02', department: 'Survey & Revenue Dept', remarks: 'Drone photogrammetry & DGPS boundary validation' },
      { id: 4, name: 'Ownership Verification', status: 'Completed', date: '2025-09-28', department: 'Revenue Department', remarks: 'Jamabandi & RoR cross-referenced for 4 key parcels' },
      { id: 5, name: 'Approval', status: 'Completed', date: '2025-10-15', department: 'State Land Acquisition Committee', remarks: 'Competent Authority approval under Section 2(1)' },
      { id: 6, name: 'Notification', status: 'Completed', date: '2025-11-05', department: 'District Land Acquisition Authority', remarks: 'Official Gazette notification published under Section 11' },
      { id: 7, name: 'Objections', status: 'In Progress', date: '2025-12-20', department: 'District Land Acquisition Authority', remarks: 'Objection raised by Owner C on Parcel P-103 under Section 15' },
      { id: 8, name: 'Compensation Assessment', status: 'In Progress', date: '2026-01-18', department: 'DLAA / Finance Dept', remarks: '75% overall valuation completed (₹120 Cr assessed)' },
      { id: 9, name: 'Compensation Approval', status: 'In Progress', date: '2026-02-10', department: 'Finance Department', remarks: '₹100 Cr approved; P-103 ₹25 Cr held in abeyance' },
      { id: 10, name: 'Compensation Payment', status: 'In Progress', date: '2026-03-05', department: 'Finance Department', remarks: '₹90 Cr disbursed digitally via PFMS/e-Kuber' },
      { id: 11, name: 'Rehabilitation & Resettlement', status: 'In Progress', date: '2026-04-12', department: 'R&R Department', remarks: '83% benefits distributed to eligible families (RF-001 done, RF-002 pending)' },
      { id: 12, name: 'Possession', status: 'In Progress', date: '2026-05-20', department: 'Possession Authority', remarks: '70% physical land taken over; P-103 pending due to dispute' },
      { id: 13, name: 'Contractor/EPC Contract', status: 'Completed', date: '2026-06-01', department: 'Implementing Agency', remarks: 'EPC contract awarded to National Infra Corp JV' },
      { id: 14, name: 'Construction Monitoring', status: 'In Progress', date: '2026-07-15', department: 'Construction Agency / DDA', remarks: 'Overall 45%; Structural works stalled at Parcel P-103 boundary' },
      { id: 15, name: 'Project Completion', status: 'Pending', date: '2027-06-30', department: 'Joint Committee', remarks: 'Final commissioning scheduled for June 2027' }
    ]
  },
  {
    id: 'NH-001',
    name: 'National Highway Development',
    location: 'Punjab, India',
    state: 'Punjab',
    district: 'Ludhiana - Jalandhar Section',
    department: 'MoRTH',
    implementingAgency: 'National Highways Authority of India (NHAI)',
    totalArea: 250,
    govtLand: 80,
    reqAcquisition: 170,
    acquiredArea: 210,
    budget: '₹650 Crore',
    budgetNumeric: 650,
    spentBudget: '₹490 Crore',
    durationMonths: 36,
    elapsedMonths: 20,
    startDate: '2025-01-10',
    targetCompletionDate: '2027-12-31',
    status: 'In Progress',
    riskLevel: 'MEDIUM',
    riskScore: 2,
    overallProgress: 78,
    acquisitionProgress: 88,
    compensationProgress: 91,
    rnrProgress: 91,
    possessionProgress: 82,
    constructionProgress: 72,
    description: '6-lane access-controlled highway widening and bypass corridor to relieve commercial freight choke points across GT Road.',
    keyHoldUp: 'Minor utility shifting and environmental compensatory afforestation handovers in 2 rural blocks.'
  },
  {
    id: 'RAIL-002',
    name: 'Railway Expansion Project',
    location: 'Haryana, India',
    state: 'Haryana',
    district: 'Rewari - Palwal Freight Link',
    department: 'Railways',
    implementingAgency: 'Dedicated Freight Corridor Corp (DFCCIL)',
    totalArea: 180,
    govtLand: 60,
    reqAcquisition: 120,
    acquiredArea: 165,
    budget: '₹420 Crore',
    budgetNumeric: 420,
    spentBudget: '₹360 Crore',
    durationMonths: 30,
    elapsedMonths: 18,
    startDate: '2025-03-01',
    targetCompletionDate: '2027-08-31',
    status: 'On Track',
    riskLevel: 'LOW',
    riskScore: 1,
    overallProgress: 88,
    acquisitionProgress: 92,
    compensationProgress: 95,
    rnrProgress: 95,
    possessionProgress: 90,
    constructionProgress: 80,
    description: 'Dedicated electric dual-line freight corridor segment enabling seamless freight transit bypassing national capital congestion.',
    keyHoldUp: 'None significant; finishing last culvert crossing.'
  }
];

const NATIONAL_KPIS = {
  totalProjects: 24,
  projectsInProgress: 14,
  projectsDelayed: 5,
  projectsOnTrack: 5,
  landProposedAcres: 12450,
  landAcquiredAcres: 9820,
  compensationPaidCr: 1245,
  totalCompensationAssessedCr: 1620,
  affectedFamilies: 8420,
  rnrCompletedPercent: 76
};


// ===== FILE: src\data\parcels.js =====

// National Land Acquisition & Management System (NLAMS) - Parcels Dataset

const PARCELS = [
  {
    id: 'P-101',
    projectId: 'PARK-001',
    projectName: 'Green City Government Park',
    areaAcres: 20,
    ownerType: 'Government Land',
    ownerName: 'Delhi Development Authority (DDA) / Forest Dept',
    khasraNo: 'K-88/1, 88/2, 89',
    village: 'Shahpur Garhi, Alipur Tehsil',
    location: 'Delhi',
    lat: 28.7845,
    lng: 77.1320,
    acquisitionStatus: 'Not Required',
    acquisitionStatusClass: 'verified',
    compensationStatus: 'N/A',
    rnrStatus: 'N/A',
    possessionStatus: 'Available',
    status: 'Verified',
    statusBadge: 'Verified',
    surveyStatus: 'Completed',
    ownershipVerification: 'Completed',
    mutationStatus: 'Completed',
    remarks: 'Pre-existing institutional & compensatory green belt reserved by state govt.'
  },
  {
    id: 'P-102',
    projectId: 'PARK-001',
    projectName: 'Green City Government Park',
    areaAcres: 25,
    ownerType: 'Private Owner',
    ownerName: 'Rajesh Kumar & Legal Heirs',
    khasraNo: 'K-92, 93/1, 94',
    village: 'Shahpur Garhi, Alipur Tehsil',
    location: 'Delhi',
    lat: 28.7880,
    lng: 77.1365,
    acquisitionStatus: 'Acquired',
    acquisitionStatusClass: 'acquired',
    compensationStatus: 'Paid',
    rnrStatus: 'Completed',
    possessionStatus: 'Possession Obtained',
    possessionDate: '12/06/2026',
    status: 'Acquired',
    statusBadge: 'Acquired',
    surveyStatus: 'Completed',
    ownershipVerification: 'Completed',
    mutationStatus: 'In Progress',
    remarks: 'Full settlement under RFCTLARR Section 23; compensation credited via PFMS.'
  },
  {
    id: 'P-103',
    projectId: 'PARK-001',
    projectName: 'Green City Government Park',
    areaAcres: 15,
    ownerType: 'Private Owner',
    ownerName: 'Owner C (Smt. Ram Devi & Legal Heirs)',
    khasraNo: 'K-95/2, 96, 97/1',
    village: 'Shahpur Garhi, Alipur Tehsil',
    location: 'Delhi',
    lat: 28.7815,
    lng: 77.1410,
    acquisitionStatus: 'Dispute',
    acquisitionStatusClass: 'dispute',
    compensationStatus: 'Pending',
    rnrStatus: 'Pending',
    possessionStatus: 'Pending',
    possessionDate: '-',
    status: 'Disputed',
    statusBadge: 'Disputed',
    surveyStatus: 'Completed',
    ownershipVerification: 'Completed',
    mutationStatus: 'Pending',
    disputeType: 'Section 15 Objection (Valuation & Demarcation)',
    hearingDate: '2026-09-24',
    objectionSummary: 'Owner claims commercial circle rate applicable due to proximity to Outer Ring Road road frontage, plus dispute regarding 1.2 acre access road easement.',
    assessedCompensation: '₹25 Cr',
    approvedCompensation: '₹0',
    paidCompensation: '₹0',
    remarks: 'Acquisition dispute directly blocks contiguous access for EPC structural foundation work.',
    timeline: [
      { step: 'Survey Completed', date: '2025-09-02', status: 'Completed', detail: 'Cadastral mapping & drone boundary demarcation completed by Survey Wing.' },
      { step: 'Ownership Verified', date: '2025-09-28', status: 'Completed', detail: 'Revenue Dept verified Jamabandi Khewat No. 412/189 in name of Smt. Ram Devi.' },
      { step: 'Notification Issued', date: '2025-11-05', status: 'Completed', detail: 'Preliminary Gazette Notification issued under Section 11(1).' },
      { step: 'Objection Raised', date: '2025-12-20', status: 'Warning', detail: 'Section 15 objection formally lodged regarding circle rate valuation and 1.2 acre accessway.' },
      { step: 'Acquisition Dispute', date: '2026-01-10', status: 'Dispute', detail: 'Matter referred to District Land Acquisition Collector for statutory hearing.' },
      { step: 'Compensation Pending', date: '2026-02-15', status: 'Pending', detail: 'Assessed ₹25 Cr compensation placed in abeyance pending settlement.' },
      { step: 'Possession Pending', date: '2026-05-20', status: 'Pending', detail: 'Site handover deferred; physical barricading and foundation work halted.' }
    ]
  },
  {
    id: 'P-104',
    projectId: 'PARK-001',
    projectName: 'Green City Government Park',
    areaAcres: 40,
    ownerType: 'Multiple Owners',
    ownerName: 'Multiple Owners (Village Shahpur Joint Khata - 18 Co-sharers)',
    khasraNo: 'K-98, 99, 100/1, 101, 102',
    village: 'Shahpur Garhi, Alipur Tehsil',
    location: 'Delhi',
    lat: 28.7790,
    lng: 77.1350,
    acquisitionStatus: 'Under Process',
    acquisitionStatusClass: 'process',
    compensationStatus: '75% Paid',
    rnrStatus: '83%',
    possessionStatus: '70% Partial',
    possessionDate: '25/07/2026',
    status: 'In Progress',
    statusBadge: 'In Progress',
    surveyStatus: 'Completed',
    ownershipVerification: 'Completed',
    mutationStatus: 'Partial',
    assessedCompensation: '₹65 Cr',
    approvedCompensation: '₹60 Cr',
    paidCompensation: '₹45 Cr',
    remarks: '14 of 18 co-sharers have accepted awards; balance 4 undergoing consent documentation.'
  }
];


// ===== FILE: src\data\compensation.js =====

// National Land Acquisition & Management System (NLAMS) - Compensation Dataset

const COMPENSATION_SUMMARY = {
  projectId: 'PARK-001',
  projectName: 'Green City Government Park',
  totalAssessedCr: 120,
  totalApprovedCr: 100,
  totalPaidCr: 90,
  totalPendingCr: 30, // 10 Cr pending from approved + 20 Cr unapproved (includes P-103)
  breakdown: {
    assessed: 120,
    approved: 100,
    paid: 90,
    pending: 30
  },
  disclaimer: 'Digital assessment, approval, and payment-status tracking integrated with PFMS and e-Kuber. Banking settlement executed through scheduled government treasury rails.'
};

const COMPENSATION_PARCELS = [
  {
    parcelId: 'P-101',
    owner: 'Government Land (DDA)',
    areaAcres: 20,
    assessedAmount: '₹0',
    assessedNumeric: 0,
    approvedAmount: '₹0',
    approvedNumeric: 0,
    paidAmount: '₹0',
    paidNumeric: 0,
    paymentStatus: 'Not Required',
    statusClass: 'verified',
    disbursementDate: 'N/A',
    utrNo: 'N/A',
    bankAccount: 'Government Transfer Protocol',
    remarks: 'Inter-departmental land vesting without financial acquisition liability.'
  },
  {
    parcelId: 'P-102',
    owner: 'Private Owner (Rajesh Kumar & Sons)',
    areaAcres: 25,
    assessedAmount: '₹30 Cr',
    assessedNumeric: 30,
    approvedAmount: '₹28 Cr',
    approvedNumeric: 28,
    paidAmount: '₹28 Cr',
    paidNumeric: 28,
    paymentStatus: 'Paid',
    statusClass: 'acquired',
    disbursementDate: '2026-03-02',
    utrNo: 'SBIN002938102948',
    bankAccount: 'State Bank of India (***4920)',
    remarks: '100% award cleared under Section 23; solatium (100%) and 12% additional interest included.'
  },
  {
    parcelId: 'P-103',
    owner: 'Owner C (Smt. Ram Devi & Legal Heirs)',
    areaAcres: 15,
    assessedAmount: '₹25 Cr',
    assessedNumeric: 25,
    approvedAmount: '₹0',
    approvedNumeric: 0,
    paidAmount: '₹0',
    paidNumeric: 0,
    paymentStatus: 'Pending',
    statusClass: 'dispute',
    alertMessage: 'Compensation Pending due to acquisition dispute under Section 15.',
    disbursementDate: '-',
    utrNo: 'HELD_IN_ESCROW',
    bankAccount: 'Punjab National Bank (Verification on hold)',
    remarks: 'Valuation contested: Claimant seeks revised circle rate (₹4.2 Cr/Acre vs assessed ₹1.66 Cr/Acre).'
  },
  {
    parcelId: 'P-104',
    owner: 'Multiple Owners (Village Shahpur 18 Co-sharers)',
    areaAcres: 40,
    assessedAmount: '₹65 Cr',
    assessedNumeric: 65,
    approvedAmount: '₹60 Cr',
    approvedNumeric: 60,
    paidAmount: '₹45 Cr',
    paidNumeric: 45,
    paymentStatus: 'Partial',
    statusClass: 'process',
    disbursementDate: '2026-04-18',
    utrNo: 'SBIN009182746192',
    bankAccount: 'PFMS Direct Benefit Transfer (14/18 beneficiaries cleared)',
    remarks: '₹15 Cr pending clearance for 4 legal heirs awaiting succession certificate verification.'
  }
];

const COMPENSATION_TRANSACTIONS = [
  { id: 'TXN-9021', parcelId: 'P-102', date: '2026-03-02', beneficiary: 'Rajesh Kumar & Sons', amount: '₹28,00,00,000', type: 'Final Award', mode: 'PFMS / e-Kuber', status: 'Success' },
  { id: 'TXN-9044', parcelId: 'P-104', date: '2026-04-18', beneficiary: 'Shahpur Khata Beneficiaries (Batch 1)', amount: '₹30,00,00,000', type: 'Interim Award', mode: 'DBT Treasury', status: 'Success' },
  { id: 'TXN-9058', parcelId: 'P-104', date: '2026-06-12', beneficiary: 'Shahpur Khata Beneficiaries (Batch 2)', amount: '₹15,00,00,000', type: 'Interim Award', mode: 'DBT Treasury', status: 'Success' },
  { id: 'TXN-9069', parcelId: 'P-103', date: '2026-02-15', beneficiary: 'Owner C Escrow Sub-account', amount: '₹25,00,00,000', type: 'Statutory Allocation', mode: 'Escrow Ledger', status: 'Held in Abeyance' }
];


// ===== FILE: src\data\rr.js =====

// National Land Acquisition & Management System (NLAMS) - R&R Dataset

const RR_SUMMARY = {
  projectId: 'PARK-001',
  definition: 'Rehabilitation & Resettlement tracks affected families, eligibility, housing entitlements and livelihood compensation benefits under RFCTLARR Schedule II.',
  affectedFamilies: 120,
  eligibleFamilies: 100,
  benefitsProvided: 83,
  pendingFamilies: 17,
  percentCompleted: 83,
  housingUnitsAllocated: 68,
  oneTimeGrantPaidCr: 8.4,
  skillDevelopmentEnrolled: 42
};

const RR_FAMILIES = [
  {
    familyId: 'RF-001',
    parcelId: 'P-102',
    headOfFamily: 'Shri Ramesh Kumar',
    affectedMembers: 4,
    eligibility: 'Eligible',
    benefits: 'Provided',
    status: 'Completed',
    entitlements: ['Housing Allotment (Pocket 4, Rohini)', 'One-time Livelihood Grant ₹5.00 Lakh', 'Job Training Certificate'],
    statusClass: 'acquired',
    disbursedDate: '2026-03-15'
  },
  {
    familyId: 'RF-002',
    parcelId: 'P-103',
    headOfFamily: 'Smt. Ram Devi & Legal Heirs',
    affectedMembers: 6,
    eligibility: 'Under Review',
    benefits: 'Pending',
    status: 'Pending',
    entitlements: ['Commercial Resettlement Shop Allotment (Contested)', 'Livelihood Assistance', 'Relocation Allowance'],
    statusClass: 'dispute',
    remarks: 'Family contested categorization as agricultural tenants vs commercial shop tenants; hearing tagged with Section 15 objection.'
  },
  {
    familyId: 'RF-003',
    parcelId: 'P-104',
    headOfFamily: 'Shri Baljit Singh',
    affectedMembers: 5,
    eligibility: 'Eligible',
    benefits: 'Provided',
    status: 'Completed',
    entitlements: ['Housing Allotment', 'One-time Grant ₹5.00 Lakh'],
    statusClass: 'acquired',
    disbursedDate: '2026-04-20'
  },
  {
    familyId: 'RF-004',
    parcelId: 'P-104',
    headOfFamily: 'Shri Mahender Pal',
    affectedMembers: 3,
    eligibility: 'Eligible',
    benefits: 'Partial',
    status: 'In Progress',
    entitlements: ['Housing Allotment (Allotted)', 'Subsistence Allowance (2 instalments disbursed)'],
    statusClass: 'process',
    disbursedDate: '2026-05-10'
  },
  {
    familyId: 'RF-005',
    parcelId: 'P-104',
    headOfFamily: 'Smt. Kamlesh Sharma',
    affectedMembers: 4,
    eligibility: 'Eligible',
    benefits: 'Provided',
    status: 'Completed',
    entitlements: ['Housing Allotment', 'One-time Livelihood Grant'],
    statusClass: 'acquired',
    disbursedDate: '2026-04-25'
  }
];


// ===== FILE: src\data\possession.js =====

// National Land Acquisition & Management System (NLAMS) - Possession Dataset

const POSSESSION_SUMMARY = {
  projectId: 'PARK-001',
  totalParcels: 4,
  possessionObtained: 2, // P-101 (Available Govt) + P-102 (Obtained)
  pending: 1,           // P-104 (Partial)
  disputed: 1,          // P-103 (Dispute)
  totalAcresPossessed: 70, // 40 Govt + 25 (P-102) + 5 partial of P-104 -> 70%
  percentPossession: 70,
  keyBottleneck: 'Contiguous access to central spine road and structural pavilion blocked due to lack of possession on Parcel P-103 (15 acres).'
};

const POSSESSION_TABLE = [
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


// ===== FILE: src\data\construction.js =====

// National Land Acquisition & Management System (NLAMS) - Construction Monitoring Dataset

const CONSTRUCTION_DATA = {
  projectId: 'PARK-001',
  overallProgress: 45,
  epcContractor: 'National Infrastructure Construction Corp (JV with EcoGreen Infra)',
  contractAwardDate: '2026-06-01',
  contractValue: '₹88.4 Crore',
  warning: 'Construction progress is affected by pending land possession on Parcel P-103.',
  milestones: [
    { id: 'M-1', name: 'Site Preparation & Grading', progress: 100, status: 'Completed', targetDate: '2026-07-31', actualDate: '2026-07-28', dependency: 'Available on Parcels P-101 & P-102' },
    { id: 'M-2', name: 'Foundation & Earthworks', progress: 75, status: 'In Progress', targetDate: '2026-09-30', actualDate: 'Ongoing', dependency: 'Stalled at eastern edge abutting Parcel P-103' },
    { id: 'M-3', name: 'Structural Work & Pavilions', progress: 40, status: 'At Risk', targetDate: '2026-12-15', actualDate: 'Delayed', dependency: 'Directly waiting for contiguous access through P-103' },
    { id: 'M-4', name: 'Landscaping & Water Bodies', progress: 20, status: 'In Progress', targetDate: '2027-03-31', actualDate: 'Commenced', dependency: 'Commenced on 40A Government parcel P-101' },
    { id: 'M-5', name: 'Final Works & Commissioning', progress: 0, status: 'Pending', targetDate: '2027-06-30', actualDate: '-', dependency: 'Dependent on complete project possession handover' }
  ],
  siteLog: [
    { date: '2026-09-08', author: 'Chief Engineer (DDA)', entry: 'EPC contractor issued formal delay notice citing inability to cast structural raft for the visitor pavilion due to unpossessed Parcel P-103.' },
    { date: '2026-08-25', author: 'Project Director', entry: 'Lake excavation on P-101 advancing ahead of schedule; water table recharge wells drilled.' },
    { date: '2026-08-10', author: 'Site Incharge', entry: 'Boundary wall completed across P-101 and P-102 perimeter.' }
  ]
};


// ===== FILE: src\data\departments.js =====

// National Land Acquisition & Management System (NLAMS) - Departments Dataset

const DEPARTMENTS = [
  { id: 'CM', name: 'Central Ministry', role: 'Policy & National Sanction', icon: 'Landmark', code: 'MOHUA / MOEFCC' },
  { id: 'SG', name: 'State Government', role: 'State Land Allocation & Gazette', icon: 'Building2', code: 'GNCTD' },
  { id: 'PIA', name: 'Project Implementing Agency', role: 'Executing Agency & DPR Owner', icon: 'Briefcase', code: 'DDA Infrastructure' },
  { id: 'DLAA', name: 'District Land Acquisition Authority', role: 'Collector, Notifications & Hearings', icon: 'Scale', code: 'DLAA / DM North West' },
  { id: 'REV', name: 'Revenue Department', role: 'Jamabandi, RoR & Mutations', icon: 'FileSpreadsheet', code: 'Revenue Sub-Div Alipur' },
  { id: 'FIN', name: 'Finance Department', role: 'Compensation Assessment & PFMS', icon: 'IndianRupee', code: 'Finance & Treasury' },
  { id: 'RNR', name: 'R&R Department', role: 'Family Resettlement & Benefits', icon: 'Users', code: 'State R&R Directorate' },
  { id: 'POSS', name: 'Possession Authority', role: 'Panchnama & Physical Handover', icon: 'ShieldCheck', code: 'Tehsil Land Enforcement' },
  { id: 'CONST', name: 'Construction Agency', role: 'EPC Contractor & Engineering', icon: 'HardHat', code: 'National Infra Corp' }
];

const WORKFLOW_DATA = {
  projectId: 'PARK-001',
  parcelId: 'P-103',
  syncDescription: 'How common Project ID (PARK-001) and Parcel ID (P-103) synchronize data across independent departmental silos.',
  departmentsStatus: [
    {
      deptId: 'REV',
      deptName: 'Revenue Department',
      status: 'Ownership Verified',
      statusType: 'success',
      actionTitle: 'Record of Rights (RoR) Validated',
      details: 'Khasra K-95/2, 96, 97/1 verified in Jamabandi. Khewat 412. Mutation pending statutory award.',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      deptId: 'DLAA',
      deptName: 'District Land Acquisition Authority',
      status: 'Dispute',
      statusType: 'error',
      actionTitle: 'Section 15 Objection Filed',
      details: 'Claimant Owner C contested circle rate valuation and access corridor demarcation. Statutory hearing ongoing.',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      deptId: 'FIN',
      deptName: 'Finance Department',
      status: 'Compensation Pending',
      statusType: 'warning',
      actionTitle: '₹25 Cr Award Held in Abeyance',
      details: 'Assessment prepared but disbursement withheld pending DLAA Collector dispute order.',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      deptId: 'RNR',
      deptName: 'R&R Department',
      status: 'Pending',
      statusType: 'warning',
      actionTitle: 'Family RF-002 Under Review',
      details: '6 family members seeking commercial resettlement shop entitlement; eligibility verification queued.',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      deptId: 'POSS',
      deptName: 'Possession Authority',
      status: 'Pending',
      statusType: 'warning',
      actionTitle: 'Site Handover Blocked',
      details: 'Cannot issue Panchnama or erect fencing until Section 15 dispute is legally settled.',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      deptId: 'CONST',
      deptName: 'Construction Agency',
      status: 'Affected',
      statusType: 'error',
      actionTitle: 'Structural Foundation Work Halted',
      details: 'EPC contractor unable to pour concrete raft foundation for central pavilion due to lack of contiguous land.',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ]
};


// ===== FILE: src\data\documents.js =====

// National Land Acquisition & Management System (NLAMS) - Documents Dataset

const DOCUMENTS = [
  {
    id: 'DOC-1001',
    projectId: 'PARK-001',
    parcelId: 'P-101',
    title: 'DDA Inter-departmental Land Reservation Order',
    category: 'Land Records',
    department: 'Revenue / DDA',
    uploadDate: '2025-08-12',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    status: 'Verified',
    verifiedBy: 'Collector North West',
    summary: 'Executive order transferring 40 acres of institutional greens to Green City Project.'
  },
  {
    id: 'DOC-1002',
    projectId: 'PARK-001',
    parcelId: 'ALL',
    title: 'Drone Photogrammetry & DGPS Cadastral Survey Report',
    category: 'Survey Reports',
    department: 'Survey of India / DLAA',
    uploadDate: '2025-09-05',
    fileType: 'PDF / GeoTIFF',
    fileSize: '14.8 MB',
    status: 'Verified',
    verifiedBy: 'Chief Geomatics Officer',
    summary: 'High-resolution orthomosaic cadastral overlay establishing georeferenced coordinates for 100 acres.'
  },
  {
    id: 'DOC-1003',
    projectId: 'PARK-001',
    parcelId: 'P-103',
    title: 'Jamabandi Record of Rights (RoR) - Khewat 412',
    category: 'Ownership Documents',
    department: 'Revenue Department',
    uploadDate: '2025-09-29',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    status: 'Verified',
    verifiedBy: 'Tehsildar Alipur',
    summary: 'Certified copy of land ledger confirming title deed and pedigree of Smt. Ram Devi.'
  },
  {
    id: 'DOC-1004',
    projectId: 'PARK-001',
    parcelId: 'ALL',
    title: 'Gazette Preliminary Notification (RFCTLARR Section 11)',
    category: 'Notifications',
    department: 'DLAA',
    uploadDate: '2025-11-06',
    fileType: 'PDF',
    fileSize: '3.1 MB',
    status: 'Verified',
    verifiedBy: 'Special Secretary (Land & Building)',
    summary: 'Statutory public notification declaring public purpose acquisition for Green City Government Park.'
  },
  {
    id: 'DOC-1005',
    projectId: 'PARK-001',
    parcelId: 'P-103',
    title: 'Section 15 Formal Objection Petition by Owner C',
    category: 'Objection Documents',
    department: 'DLAA Hearings',
    uploadDate: '2025-12-21',
    fileType: 'PDF',
    fileSize: '4.6 MB',
    status: 'Pending Hearing',
    verifiedBy: 'Court Reader, DLAA Collector',
    summary: 'Legal representation alleging undervaluation and demanding commercial circle rate and easement realignment.'
  },
  {
    id: 'DOC-1006',
    projectId: 'PARK-001',
    parcelId: 'P-102',
    title: 'Compensation Award & Digital PFMS Mandate',
    category: 'Compensation Documents',
    department: 'Finance Department',
    uploadDate: '2026-03-03',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    status: 'Verified',
    verifiedBy: 'Finance Controller',
    summary: 'Statutory award of ₹28 Cr disbursed to Rajesh Kumar; signed vouchers and PFMS receipt attached.'
  },
  {
    id: 'DOC-1007',
    projectId: 'PARK-001',
    parcelId: 'P-102',
    title: 'Joint Panchnama & Physical Handover Certificate',
    category: 'Possession Documents',
    department: 'Possession Authority',
    uploadDate: '2026-06-13',
    fileType: 'PDF',
    fileSize: '1.9 MB',
    status: 'Verified',
    verifiedBy: 'Naib Tehsildar',
    summary: 'Formal taking over of physical possession of 25 acres with 5 independent village panch witnesses.'
  },
  {
    id: 'DOC-1008',
    projectId: 'PARK-001',
    parcelId: 'P-103',
    title: 'EPC Contractor Delay Notice & Commercial Claim',
    category: 'Construction Documents',
    department: 'Construction Agency',
    uploadDate: '2026-09-08',
    fileType: 'PDF',
    fileSize: '3.5 MB',
    status: 'Under Review',
    verifiedBy: 'Superintending Engineer DDA',
    summary: 'Contractor notice notifying idle machinery charges and milestone delay on account of disputed parcel P-103.'
  }
];


// ===== FILE: src\data\notifications.js =====

// National Land Acquisition & Management System (NLAMS) - Notifications Dataset

const NOTIFICATIONS = [
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
    unread: true
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
    unread: true
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
    unread: true
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
    unread: false
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
    unread: false
  }
];


// ===== FILE: src\data\analytics.js =====

// National Land Acquisition & Management System (NLAMS) - AI Risk Engine Dataset

const AI_RISK_DATA = {
  projectId: 'PARK-001',
  projectName: 'Green City Government Park',
  methodology: 'Explainable AI / Rule-Based Risk Prediction Prototype',
  explanation: 'The prototype calculates project delay risk using quantifiable project progress indicators such as land acquisition, compensation, R&R, possession and construction progress against standard statutory benchmark thresholds.',
  indicators: {
    landAcquired: 82,
    compensationPaid: 75,
    rnrCompleted: 83,
    possession: 70,
    construction: 45
  },
  rules: [
    {
      ruleId: 'R-01',
      description: 'If possession < 80% → +1 Risk Point',
      metricName: 'Possession Progress',
      currentValue: '70%',
      threshold: '< 80%',
      triggered: true,
      pointsAdded: 1,
      impact: 'Physical handover delayed; restricts EPC contractor access'
    },
    {
      ruleId: 'R-02',
      description: 'If compensation < 80% → +1 Risk Point',
      metricName: 'Compensation Paid',
      currentValue: '75%',
      threshold: '< 80%',
      triggered: true,
      pointsAdded: 1,
      impact: 'Pending awards create legal exposure and landowner resistance'
    },
    {
      ruleId: 'R-03',
      description: 'If R&R < 80% → +1 Risk Point',
      metricName: 'R&R Progress',
      currentValue: '83%',
      threshold: '< 80%',
      triggered: false,
      pointsAdded: 0,
      impact: 'Resettlement is tracking satisfactorily (83% completed)'
    },
    {
      ruleId: 'R-04',
      description: 'If construction < 50% → +1 Risk Point',
      metricName: 'Construction Progress',
      currentValue: '45%',
      threshold: '< 50%',
      triggered: true,
      pointsAdded: 1,
      impact: 'Civil works lagging behind 24-month linear milestone schedule'
    }
  ],
  riskScore: 3,
  maxScore: 4,
  riskLevel: 'HIGH', // 3 or more = HIGH, 2 = MEDIUM, 0-1 = LOW
  riskLevelColor: 'rose',
  reasons: [
    'Possession is only 70% (Below the 80% statutory safety threshold)',
    'Compensation is only 75% (Blocked by pending ₹25 Cr award on Parcel P-103)',
    'Construction is only 45% (Elapsed 14 months out of 24 months duration)'
  ],
  recommendedActions: [
    { priority: 'Immediate', title: 'Resolve P-103 acquisition dispute', detail: 'Convene expedited District Collector conciliation hearing on 24-Sep-2026 to settle circle rate gap or deposit disputed sum in statutory court escrow.' },
    { priority: 'High', title: 'Complete pending compensation', detail: 'Release remaining ₹15 Cr interim payment for 4 co-sharers in Parcel P-104 and prepare escrow mandate for P-103.' },
    { priority: 'High', title: 'Accelerate possession process', detail: 'Execute phased partial possession protocol with EPC contractor for unencumbered portions of P-104.' },
    { priority: 'Medium', title: 'Monitor construction dependencies', detail: 'Re-sequence EPC contractor milestones to prioritize horticultural lake excavation on Government parcel P-101 while dispute settles.' }
  ],
  futureAICapability: {
    title: 'Future AI / Machine Learning Roadmap',
    description: 'When connected to production historical datasets across states and ministries, machine learning models will enhance this rule-based baseline:',
    capabilities: [
      { name: 'Delay Prediction (Random Forest / Gradient Boosted Trees)', desc: 'Predict projected completion date slippage based on rainfall, procurement cycle times, and contractor throughput.' },
      { name: 'Compensation Delay Prediction (Survival Analysis)', desc: 'Estimate probability of award litigation based on historical land valuation differentials and circle rate variance.' },
      { name: 'Dispute Risk Classifier (NLP on Objection Petitions)', desc: 'Automatically classify landowner objection severity and flag high-litigation parcels before gazette finalization.' },
      { name: 'R&R Resettlement Sentiment Analysis', desc: 'Monitor beneficiary grievance resolution rates to preempt community agitation.' }
    ]
  }
};


// ===== FILE: src\utils\helpers.js =====

// NLAMS Utility Helpers

function formatINR(val) {
  if (typeof val === 'number') {
    return '₹' + val.toLocaleString('en-IN');
  }
  return val;
}

function getStatusBadgeInfo(status) {
  const s = (status || '').toLowerCase();
  if (s.includes('verified') || s.includes('available') || s.includes('completed') || s.includes('acquired') || s.includes('paid')) {
    return {
      label: status,
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-300 ring-1 ring-emerald-600/20',
      dot: 'bg-emerald-500'
    };
  }
  if (s.includes('dispute') || s.includes('high') || s.includes('risk') || s.includes('delayed')) {
    return {
      label: status,
      bg: 'bg-rose-50 text-rose-800 border-rose-300 ring-1 ring-rose-600/20',
      dot: 'bg-rose-500'
    };
  }
  if (s.includes('process') || s.includes('progress') || s.includes('partial') || s.includes('review') || s.includes('medium')) {
    return {
      label: status,
      bg: 'bg-amber-50 text-amber-800 border-amber-300 ring-1 ring-amber-600/20',
      dot: 'bg-amber-500'
    };
  }
  return {
    label: status,
    bg: 'bg-slate-100 text-slate-700 border-slate-300 ring-1 ring-slate-400/20',
    dot: 'bg-slate-400'
  };
}

function computeRiskScore(metrics) {
  let score = 0;
  const reasons = [];
  
  if (metrics.possession < 80) {
    score += 1;
    reasons.push('Possession is only ' + metrics.possession + '% (< 80% threshold)');
  }
  if (metrics.compensation < 80) {
    score += 1;
    reasons.push('Compensation is only ' + metrics.compensation + '% (< 80% threshold)');
  }
  if (metrics.rnr < 80) {
    score += 1;
    reasons.push('R&R is only ' + metrics.rnr + '% (< 80% threshold)');
  }
  if (metrics.construction < 50) {
    score += 1;
    reasons.push('Construction is only ' + metrics.construction + '% (< 50% threshold)');
  }

  let level = 'LOW';
  let color = 'emerald';
  if (score >= 3) {
    level = 'HIGH';
    color = 'rose';
  } else if (score === 2) {
    level = 'MEDIUM';
    color = 'amber';
  }

  return { score, level, color, reasons };
}

function triggerDownload(filename, content, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


// ===== FILE: src\components\Icons.js =====

// NLAMS Professional Government SVG Icon Library
function Icon({ name, className = 'w-5 h-5', style = {} }) {
  const iconMap = {
    LayoutDashboard: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <rect x='3' y='3' width='7' height='7' rx='1'/>
        <rect x='14' y='3' width='7' height='7' rx='1'/>
        <rect x='14' y='14' width='7' height='7' rx='1'/>
        <rect x='3' y='14' width='7' height='7' rx='1'/>
      </svg>
    ),
    FolderGit2: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'/>
        <circle cx='8' cy='13' r='2'/>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 13h4'/>
        <circle cx='16' cy='13' r='2'/>
      </svg>
    ),
    MapPin: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'/>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/>
      </svg>
    ),
    Map: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'/>
      </svg>
    ),
    Scale: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 6l9-4 9 4m-9-4v20m0-20l-7 14h14L12 2zM5 16h4m6 0h4'/>
      </svg>
    ),
    IndianRupee: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6 3h12M6 8h12M6 13l7.5 8M6 13h3a4 4 0 000-8'/>
      </svg>
    ),
    Users: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'/>
      </svg>
    ),
    ShieldCheck: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/>
      </svg>
    ),
    HardHat: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2 18h20M4 18v-4a8 8 0 0116 0v4M10 6V4a2 2 0 014 0v2'/>
      </svg>
    ),
    BrainCircuit: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'/>
      </svg>
    ),
    Network: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <rect x='16' y='16' width='6' height='6' rx='1'/>
        <rect x='2' y='16' width='6' height='6' rx='1'/>
        <rect x='9' y='2' width='6' height='6' rx='1'/>
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 16v-3a1 1 0 011-1h12a1 1 0 011 1v3M12 12V8'/>
      </svg>
    ),
    FileText: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/>
      </svg>
    ),
    Bell: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'/>
      </svg>
    ),
    FileSpreadsheet: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/>
      </svg>
    ),
    Settings: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'/>
        <circle cx='12' cy='12' r='3'/>
      </svg>
    ),
    Search: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/>
      </svg>
    ),
    ChevronRight: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7'/>
      </svg>
    ),
    CheckCircle2: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
      </svg>
    ),
    AlertTriangle: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'/>
      </svg>
    ),
    Info: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/>
      </svg>
    ),
    Download: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'/>
      </svg>
    ),
    ExternalLink: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'/>
      </svg>
    ),
    Play: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'/>
        <circle cx='12' cy='12' r='9'/>
      </svg>
    ),
    X: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
      </svg>
    ),
    Eye: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'/>
      </svg>
    ),
    Plus: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4'/>
      </svg>
    ),
    Filter: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'/>
      </svg>
    ),
    ArrowRight: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3'/>
      </svg>
    ),
    ArrowLeft: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 19l-7-7m0 0l7-7m-7 7h18'/>
      </svg>
    ),
    Clock: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <circle cx='12' cy='12' r='9'/>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 7v5l3 3'/>
      </svg>
    ),
    Building2: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/>
      </svg>
    ),
    Landmark: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z'/>
      </svg>
    ),
    Briefcase: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <rect x='2' y='7' width='20' height='14' rx='2' ry='2'/>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'/>
      </svg>
    ),
    Layers: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/>
      </svg>
    ),
    LogOut: (
      <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'/>
      </svg>
    )
  };

  return iconMap[name] || (
    <svg className={className} style={style} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
      <circle cx='12' cy='12' r='10'/>
    </svg>
  );
}


// ===== FILE: src\components\StatusBadge.js =====

// NLAMS Status Badge Component
function StatusBadge({ status, className = "" }) {
  const s = (status || "").toLowerCase();
  
  let bg = "bg-slate-100 text-slate-700 border-slate-300 ring-slate-400/20";
  let dot = "bg-slate-400";
  
  if (s.includes("verified") || s.includes("available") || s.includes("completed") || s.includes("acquired") || s.includes("paid") || s.includes("on track") || s.includes("success")) {
    bg = "bg-emerald-50 text-emerald-800 border-emerald-300 ring-emerald-600/20";
    dot = "bg-emerald-500";
  } else if (s.includes("dispute") || s.includes("high") || s.includes("delayed") || s.includes("error") || s.includes("at risk")) {
    bg = "bg-rose-50 text-rose-800 border-rose-300 ring-rose-600/20";
    dot = "bg-rose-500 animate-pulse";
  } else if (s.includes("process") || s.includes("progress") || s.includes("partial") || s.includes("review") || s.includes("medium") || s.includes("warning") || s.includes("pending")) {
    bg = "bg-amber-50 text-amber-800 border-amber-300 ring-amber-600/20";
    dot = "bg-amber-500";
  }

  const fullClass = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ring-1 " + bg + " " + className;
  const dotClass = "w-1.5 h-1.5 rounded-full " + dot;

  return (
    <span className={fullClass}>
      <span className={dotClass}></span>
      {status}
    </span>
  );
}


// ===== FILE: src\components\ProgressBar.js =====

// NLAMS Progress Bar Component
function ProgressBar({ value = 0, max = 100, label, color = "navy", threshold, height = "h-2.5", showText = true }) {
  const percent = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);
  
  let barColor = "bg-indigo-700";
  if (color === "emerald" || percent >= 80) barColor = "bg-emerald-600";
  if (color === "rose" || (threshold && percent < threshold && color !== "emerald")) barColor = "bg-rose-600";
  if (color === "amber") barColor = "bg-amber-500";
  if (color === "blue") barColor = "bg-blue-600";

  const containerClass = "w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 relative " + height;
  const innerClass = "h-full rounded-full transition-all duration-500 " + barColor;

  return (
    <div className="w-full">
      {(label || showText) && (
        <div className="flex justify-between items-center text-xs mb-1 font-medium text-slate-700">
          {label && <span>{label}</span>}
          {showText && <span className="font-bold text-slate-900">{percent}%</span>}
        </div>
      )}
      <div className={containerClass}>
        {threshold && (
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10" 
            style={{ left: percent + "%" }} 
            title={"Threshold: " + threshold + "%"}
          />
        )}
        <div 
          className={innerClass} 
          style={{ width: percent + "%" }}
        />
      </div>
    </div>
  );
}


// ===== FILE: src\components\KPICard.js =====

// NLAMS KPI Card Component

function KPICard({ title, value, subtext, icon, trend, trendColor = "emerald", onClick, active = false }) {
  const activeClass = active ? "ring-2 ring-indigo-600 border-indigo-600 shadow-md" : "border-slate-200 hover:border-slate-300 hover:shadow-sm";
  const cursorClass = onClick ? "cursor-pointer" : "";
  const cardClass = "bg-white rounded-xl p-4 border transition-all duration-200 " + activeClass + " " + cursorClass;
  const trendClass = "font-medium " + (trendColor === "rose" ? "text-rose-600" : "text-emerald-600");

  return (
    <div 
      onClick={onClick}
      className={cardClass}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</span>
        {icon && (
          <div className="p-2 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
            <Icon name={icon} className="w-5 h-5 text-slate-700" />
          </div>
        )}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight text-slate-900">{value}</span>
      </div>
      {(subtext || trend) && (
        <div className="mt-2 flex items-center justify-between text-xs">
          {subtext && <span className="text-slate-500">{subtext}</span>}
          {trend && (
            <span className={trendClass}>
              {trend}
            </span>
          )}
        </div>
      )}
    </div>
  );
}


// ===== FILE: src\components\ProjectTimeline.js =====

// NLAMS 15-Stage Project Lifecycle Timeline Component

function ProjectTimeline({ stages = [] }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-slate-900 text-base">Integrated Project Lifecycle Timeline</h3>
          <p className="text-xs text-slate-500 mt-0.5">Tracking 15 statutory milestones from Proposal to Final Project Commissioning</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Completed</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> In Progress</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span> Dispute/Delayed</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span> Pending</span>
        </div>
      </div>

      <div className="relative mt-6">
        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {stages.map((stage, idx) => {
            const isDone = stage.status === "Completed";
            const isWarn = stage.status === "In Progress";
            const isDispute = stage.status === "Delayed" || stage.name.includes("Objections") || (stage.remarks && stage.remarks.includes("dispute"));
            const isPending = stage.status === "Pending";

            let borderClass = "border-slate-200 bg-white";
            let iconBg = "bg-slate-100 text-slate-400";
            let badgeBg = "bg-slate-100 text-slate-600";

            if (isDone) {
              borderClass = "border-emerald-200 bg-emerald-50/40";
              iconBg = "bg-emerald-600 text-white";
              badgeBg = "bg-emerald-100 text-emerald-800";
            } else if (isDispute || (stage.name === "Objections" && stage.status === "In Progress")) {
              borderClass = "border-rose-300 bg-rose-50/40 ring-1 ring-rose-300";
              iconBg = "bg-rose-600 text-white";
              badgeBg = "bg-rose-100 text-rose-800 font-semibold";
            } else if (isWarn) {
              borderClass = "border-amber-200 bg-amber-50/40";
              iconBg = "bg-amber-500 text-white";
              badgeBg = "bg-amber-100 text-amber-800";
            }

            const cardClass = "relative rounded-lg p-3 border transition-all duration-200 hover:shadow-sm flex flex-col justify-between " + borderClass;
            const badgeClass = "text-[10px] px-1.5 py-0.5 rounded font-medium " + badgeBg;
            const circleClass = "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold " + iconBg;

            return (
              <div 
                key={stage.id || idx}
                className={cardClass}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400">STAGE {String(idx + 1).padStart(2, "0")}</span>
                    <span className={badgeClass}>
                      {stage.status === "In Progress" && stage.name === "Objections" ? "⚠ In Progress" : stage.status}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className={circleClass}>
                      {isDone ? "✓" : isDispute ? "!" : isWarn ? "⚠" : idx + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-800 leading-snug truncate" title={stage.name}>
                        {stage.name}
                      </div>
                      {stage.department && (
                        <div className="text-[10px] text-slate-500 truncate mt-0.5">
                          {stage.department}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {stage.remarks && (
                  <div className="mt-2.5 pt-1.5 border-t border-slate-100/80 text-[10px] text-slate-600 line-clamp-2" title={stage.remarks}>
                    {stage.remarks}
                  </div>
                )}
                
                {stage.date && (
                  <div className="mt-1 text-[9px] text-slate-400 flex items-center gap-1 font-mono">
                    <span>📅</span> {stage.date}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// ===== FILE: src\components\Modal.js =====

// NLAMS Universal Action Modal Component

function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-2xl", footer }) {
  if (!isOpen) return null;

  const boxClass = "bg-white rounded-2xl shadow-2xl border border-slate-200 w-full overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 " + maxWidth;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className={boxClass}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Icon name="X" className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto custom-scrollbar text-xs text-slate-700">
          {children}
        </div>

        {/* Modal Footer */}
        {footer && (
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}


// ===== FILE: src\components\JudgeTourBar.js =====

// NLAMS Judge Demonstration Controller Component
// Provides a 14-step structured narrative walking judges through the 5-minute case study.

const JUDGE_STEPS = [
  {
    step: 1,
    title: 'Platform Architecture & Login',
    route: 'dashboard',
    badge: 'Overview',
    narrative: 'Welcome the judges: NLAMS is a unified digital platform connecting Central, State, and District departments using common Project IDs and Parcel IDs rather than replacing existing databases.'
  },
  {
    step: 2,
    title: 'Executive Dashboard & Problem/Solution',
    route: 'dashboard',
    badge: 'National KPIs',
    narrative: 'Show national metrics (24 projects, ₹1,245 Cr paid) and explain THE PROBLEM (fragmented siloed tracking) vs THE SOLUTION (unified cross-department visibility).'
  },
  {
    step: 3,
    title: 'Projects Directory (Select PARK-001)',
    route: 'projects',
    badge: 'Directory',
    narrative: 'Show the searchable project register. Note that PARK-001 (Green City Government Park, Delhi, 100 acres) is flagged as HIGH RISK / At Risk.'
  },
  {
    step: 4,
    title: 'Project PARK-001 Details & 15-Stage Lifecycle',
    route: 'project-details',
    badge: 'PARK-001',
    narrative: 'Demonstrate the 15-stage lifecycle from Proposal to Commissioning. Highlight that Objections, Compensation, Possession, and Construction are currently bottlenecked.'
  },
  {
    step: 5,
    title: 'Land Parcels Inventory (Focus on P-103)',
    route: 'parcels',
    badge: 'Parcels',
    narrative: 'Inspect the 4 constituent parcels (P-101 to P-104). Point out Parcel P-103 (15 acres, Owner C) which is in Acquisition Dispute status.'
  },
  {
    step: 6,
    title: 'GIS Command Map (Delhi Geo-Location)',
    route: 'gis',
    badge: 'GIS Visualizer',
    narrative: 'Show the GIS map centered on Delhi. Point to the red pulsing polygon of P-103 right in the project boundary, blocking contiguous park connectivity.'
  },
  {
    step: 7,
    title: 'Acquisition Authority (Section 15 Dispute)',
    route: 'acquisition',
    badge: 'DLAA',
    narrative: 'District Land Acquisition Authority view: Owner C has filed a Section 15 objection regarding circle rates and accessway demarcation, triggering a statutory conciliation.'
  },
  {
    step: 8,
    title: 'Revenue Department (RoR & Jamabandi)',
    route: 'revenue',
    badge: 'Revenue',
    narrative: 'Show how Revenue has already verified ownership (Khewat 412) and survey records, but land mutation cannot conclude until the statutory award is issued.'
  },
  {
    step: 9,
    title: 'Compensation Flow (Finance Blocked)',
    route: 'compensation',
    badge: 'Finance',
    narrative: 'Explain the digital compensation tracking (Assessed ₹120 Cr -> Approved ₹100 Cr -> Paid ₹90 Cr). Show that ₹25 Cr for P-103 is held in abeyance because of the dispute.'
  },
  {
    step: 10,
    title: 'R&R Tracking (Family RF-002)',
    route: 'rnr',
    badge: 'R&R',
    narrative: 'Show how R&R tracks 120 affected families. Family RF-002 on Parcel P-103 is under review pending commercial tenancy determination.'
  },
  {
    step: 11,
    title: 'Possession Status (Site Handover Held Up)',
    route: 'possession',
    badge: 'Possession',
    narrative: 'Panchnama records show 2 parcels possessed, but P-103 possession is pending. The EPC contractor cannot obtain full physical access.'
  },
  {
    step: 12,
    title: 'Construction Monitoring (Stalled at 45%)',
    route: 'construction',
    badge: 'EPC Works',
    narrative: 'EPC civil works are at 45%. Milestone M-3 (Structural works) is halted at the boundary of unpossessed Parcel P-103.'
  },
  {
    step: 13,
    title: 'Inter-Department Workflow (The Core Innovation)',
    route: 'departments',
    badge: 'Cross-Sync',
    narrative: 'This is the crown jewel: Common Project ID (PARK-001) + Parcel ID (P-103) connects Revenue, DLAA, Finance, R&R, Possession, and Construction in real-time!'
  },
  {
    step: 14,
    title: 'Explainable AI Risk Engine & Recommended Interventions',
    route: 'analytics',
    badge: 'AI Engine',
    narrative: 'Conclude with the transparent rule-based risk prediction: Score 3 (HIGH RISK) because Possession < 80%, Comp < 80%, Constr < 50%. Review the actionable recommendations!'
  }
];

function JudgeTourBar({ currentStepIndex = 0, onStepChange, onCloseTour }) {
  const currentStep = JUDGE_STEPS[currentStepIndex] || JUDGE_STEPS[0];
  const totalSteps = JUDGE_STEPS.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <div className='bg-slate-950 text-white border-b-2 border-amber-500 shadow-2xl px-6 py-2.5 z-40 sticky top-0 animate-in slide-in-from-top-2'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3'>
        {/* Left: Step Indicator & Title */}
        <div className='flex items-center gap-3 min-w-0'>
          <div className='flex items-center gap-1.5 shrink-0 bg-amber-500/20 text-amber-400 border border-amber-500/40 px-2.5 py-1 rounded-full text-xs font-bold font-mono'>
            <span>STEP {currentStep.step} OF {totalSteps}</span>
          </div>
          <div className='min-w-0'>
            <div className='flex items-center gap-2'>
              <h4 className='text-xs md:text-sm font-black text-amber-300 tracking-tight truncate'>
                {currentStep.title}
              </h4>
              <span className='hidden sm:inline text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono'>
                {currentStep.badge}
              </span>
            </div>
            <p className='text-[11px] text-slate-300 leading-snug line-clamp-1 mt-0.5 max-w-2xl'>
              <span className='text-amber-400 font-semibold'>Presenter Note:</span> {currentStep.narrative}
            </p>
          </div>
        </div>

        {/* Right: Controls & Progress */}
        <div className='flex items-center gap-2 shrink-0 self-end md:self-center'>
          <button
            onClick={() => onStepChange(Math.max(0, currentStepIndex - 1))}
            disabled={currentStepIndex === 0}
            className='px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition-colors'
          >
            ← Prev
          </button>
          
          <button
            onClick={() => onStepChange(Math.min(totalSteps - 1, currentStepIndex + 1))}
            disabled={currentStepIndex === totalSteps - 1}
            className='px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 text-xs font-bold flex items-center gap-1 shadow-sm transition-colors'
          >
            Next Step →
          </button>

          <button
            onClick={onCloseTour}
            className='p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2'
            title='Exit Tour Mode'
          >
            ✕
          </button>
        </div>
      </div>

      {/* Thin Progress line */}
      <div className='w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden'>
        <div 
          className='bg-amber-500 h-full transition-all duration-300'
          style={{ width: progressPercent + "%" }}
        />
      </div>
    </div>
  );
}


// ===== FILE: src\components\Sidebar.js =====

// NLAMS Persistent Desktop Sidebar Component (15 Core Navigation Sections)

function Sidebar({ currentRoute, onNavigate, selectedProject, onSelectProject }) {
  const navSections = [
    { id: "dashboard", name: "Dashboard", icon: "LayoutDashboard", badge: null },
    { id: "projects", name: "Projects", icon: "FolderGit2", badge: "24" },
    { id: "parcels", name: "Land Parcels", icon: "MapPin", badge: "4" },
    { id: "gis", name: "GIS Map", icon: "Map", badge: "GIS" },
    { id: "acquisition", name: "Acquisition", icon: "Scale", badge: "1 Alert", badgeColor: "bg-rose-100 text-rose-800" },
    { id: "revenue", name: "Revenue Dept", icon: "FileSpreadsheet", badge: null },
    { id: "compensation", name: "Compensation", icon: "IndianRupee", badge: "₹120 Cr" },
    { id: "rnr", name: "Rehabilitation & Resettlement", icon: "Users", badge: "83%" },
    { id: "possession", name: "Possession", icon: "ShieldCheck", badge: "70%" },
    { id: "construction", name: "Construction", icon: "HardHat", badge: "45%", badgeColor: "bg-amber-100 text-amber-800" },
    { id: "analytics", name: "AI Risk & Analytics", icon: "BrainCircuit", badge: "HIGH RISK", badgeColor: "bg-rose-600 text-white font-bold animate-pulse" },
    { id: "departments", name: "Department Workflows", icon: "Network", badge: "9 Nodes", badgeColor: "bg-indigo-100 text-indigo-800 font-semibold" },
    { id: "documents", name: "Documents", icon: "FileText", badge: "8" },
    { id: "notifications", name: "Notifications", icon: "Bell", badge: "3", badgeColor: "bg-rose-500 text-white" },
    { id: "reports", name: "Reports", icon: "FileSpreadsheet", badge: null },
    { id: "settings", name: "Settings", icon: "Settings", badge: null }
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800 h-screen sticky top-0 overflow-y-auto select-none font-sans z-30 shadow-xl">
      {/* Brand & Portal Identity */}
      <div className="p-4 border-b border-slate-800/80 bg-slate-950 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-base shadow-md border border-amber-400/30">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l6 3.75v7.85L12 19.6l-6-3.8V7.95L12 4.2z"/>
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-xs font-black tracking-widest text-amber-400 uppercase leading-none">NLAMS</div>
          <div className="text-sm font-bold text-white tracking-tight truncate leading-tight mt-0.5">National Land Portal</div>
          <div className="text-[10px] text-slate-400 truncate leading-none mt-0.5">Govt. of India Interoperable Platform</div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1">
          Primary Navigation
        </div>
        {navSections.map((item) => {
          const isActive = currentRoute === item.id;
          const activeClass = isActive 
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold" 
            : "text-slate-300 hover:bg-slate-800 hover:text-white";
          const iconColorClass = isActive ? "text-white" : "text-slate-400 group-hover:text-amber-400";
          const badgeClass = item.badgeColor || (isActive ? "bg-indigo-800 text-indigo-100" : "bg-slate-800 text-slate-300");

          const btnClass = "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group cursor-pointer " + activeClass;
          const iconClass = "w-4 h-4 transition-colors " + iconColorClass;
          const badgeSpanClass = "text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ml-1 " + badgeClass;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={btnClass}
            >
              <div className="flex items-center gap-2.5 truncate">
                <Icon 
                  name={item.icon} 
                  className={iconClass} 
                />
                <span className="truncate">{item.name}</span>
              </div>
              {item.badge && (
                <span 
                  className={badgeSpanClass}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Active Case Study Snapshot Widget */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/60">
        <div className="rounded-lg bg-slate-900/90 p-2.5 border border-slate-800 text-xs">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>ACTIVE CASE STUDY</span>
            <span className="text-amber-400 font-bold">PARK-001</span>
          </div>
          <div className="font-bold text-white text-xs truncate mt-1">
            Green City Government Park
          </div>
          <div className="text-[10px] text-slate-400 flex items-center justify-between mt-1">
            <span>Delhi (100 Acres)</span>
            <span className="text-rose-400 font-bold uppercase">At Risk</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                onNavigate("project-details");
              }}
              className="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              Inspect PARK-001 →
            </button>
            <button
              onClick={() => {
                onNavigate("parcel-details");
              }}
              className="text-[10px] text-rose-400 hover:text-rose-300 font-mono underline cursor-pointer"
              title="Inspect disputed parcel P-103"
            >
              Parcel P-103
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}


// ===== FILE: src\components\Navbar.js =====

// NLAMS Top Navigation Bar Component

function Navbar({ 
  currentRoute,
  onNavigate, 
  projects = [], 
  selectedProjectId, 
  onSelectProject, 
  departments = [], 
  selectedDepartment, 
  onSelectDepartment,
  onStartJudgeTour,
  judgeTourActive,
  onOpenModal,
  onLogout,
  notificationsCount = 3
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  const searchableCatalog = [
    { type: "Project", id: "PARK-001", title: "PARK-001: Green City Government Park (Delhi, 100A)", route: "project-details", desc: "At Risk • Section 15 Dispute on P-103" },
    { type: "Project", id: "NH-001", title: "NH-001: National Highway Development (Punjab, 250A)", route: "projects", desc: "In Progress • GT Road Corridor" },
    { type: "Project", id: "RAIL-002", title: "RAIL-002: Railway Expansion Project (Haryana, 180A)", route: "projects", desc: "On Track • Freight Corridor" },
    { type: "Parcel", id: "P-103", title: "Parcel P-103 (15 Acres) - Owner C", route: "parcel-details", desc: "Acquisition Dispute • Compensation Pending • Blocks Structural Works" },
    { type: "Parcel", id: "P-102", title: "Parcel P-102 (25 Acres) - Rajesh Kumar", route: "parcels", desc: "Acquired • Paid ₹28 Cr • Possession Handed Over" },
    { type: "Parcel", id: "P-101", title: "Parcel P-101 (20 Acres) - Government Land", route: "parcels", desc: "Available • Institutional Greens Reserved" },
    { type: "Department", id: "DLAA", title: "District Land Acquisition Authority (DLAA)", route: "acquisition", desc: "Section 15 Hearings & Statutory Notifications" },
    { type: "Module", id: "GIS", title: "GIS Command Center (Delhi Map)", route: "gis", desc: "Interactive Cadastral Overlay & Parcel Inspection" },
    { type: "Module", id: "AI", title: "AI Delay Risk Prediction Engine", route: "analytics", desc: "Rule-Based Delay Risk Score (Score: 3 / HIGH RISK)" }
  ];

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : searchableCatalog.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const judgeTourBtnClass = "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer " + 
    (judgeTourActive ? "bg-amber-500 text-slate-950 ring-2 ring-amber-400 animate-pulse" : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950");

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
      {/* Official Government Strip */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-6 py-1 flex items-center justify-between border-b border-slate-800 select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-amber-300 font-bold">भारत सरकार</span>
            <span className="text-slate-500">|</span>
            <span className="font-semibold text-slate-200">Government of India</span>
          </div>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">Ministry of Housing &amp; Urban Affairs / Department of Land Resources</span>
        </div>

        <div className="flex items-center gap-4 text-[10px] text-slate-400">
          <span className="hidden lg:inline bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
            NIC Unified Interoperability Protocol v2.4
          </span>
          <div className="flex items-center gap-2">
            <button className="hover:text-white">English</button>
            <span>|</span>
            <button className="hover:text-white">हिन्दी</button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <div className="px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Global Search with Live Typeahead */}
        <div className="relative flex-1 max-w-md">
          <div className="relative flex items-center">
            <Icon name="Search" className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchDropdown(true);
              }}
              onFocus={() => setShowSearchDropdown(true)}
              placeholder="Universal Search: Project ID, Parcel ID (e.g. P-103), Owner, Location..."
              className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-800 text-xs pl-9 pr-8 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-400 font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {showSearchDropdown && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1">
              <div className="p-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Matching Records ({searchResults.length})</span>
                <span className="font-mono text-[10px]">Press ESC to close</span>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                {searchResults.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setShowSearchDropdown(false);
                      setSearchQuery("");
                      onNavigate(item.route);
                    }}
                    className="w-full text-left p-2.5 hover:bg-indigo-50/60 transition-colors flex items-start justify-between gap-2 group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-indigo-100 group-hover:text-indigo-800">
                          {item.type}
                        </span>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-900">
                          {item.title}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {item.desc}
                      </div>
                    </div>
                    <span className="text-xs text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Center & Right Controls */}
        <div className="flex items-center gap-3">
          {/* Project Selector */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] font-semibold uppercase">Project:</span>
            <select
              value={selectedProjectId}
              onChange={(e) => onSelectProject(e.target.value)}
              className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer text-xs pr-2"
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.id}: {p.name} ({p.location})
                </option>
              ))}
            </select>
          </div>

          {/* Department Role Switcher */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] font-semibold uppercase">Role View:</span>
            <select
              value={selectedDepartment}
              onChange={(e) => onSelectDepartment(e.target.value)}
              className="bg-transparent font-semibold text-indigo-900 focus:outline-none cursor-pointer text-xs pr-2"
            >
              <option value="Central Ministry">Central Ministry</option>
              <option value="State Government">State Government</option>
              <option value="District Land Acquisition Authority">District Land Acquisition Authority</option>
              <option value="Project Implementing Agency">Project Implementing Agency</option>
              <option value="Revenue Department">Revenue Department</option>
              <option value="Finance Department">Finance Department</option>
              <option value="R&amp;R Department">R&amp;R Department</option>
              <option value="Possession Authority">Possession Authority</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>

          {/* Judge Demo Tour Launch Button */}
          <button
            onClick={onStartJudgeTour}
            className={judgeTourBtnClass}
            title="Start 5-Minute Guided Presentation for Judges"
          >
            <Icon name="Play" className="w-3.5 h-3.5 fill-current" />
            <span>Judge Demo Tour</span>
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotificationsDropdown(!showNotificationsDropdown)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 relative transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
              title="Alerts &amp; Notifications"
            >
              <Icon name="Bell" className="w-4 h-4" />
              {notificationsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  {notificationsCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown Drawer */}
            {showNotificationsDropdown && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">High Priority Alerts</span>
                  <button 
                    onClick={() => {
                      setShowNotificationsDropdown(false);
                      onNavigate("notifications");
                    }}
                    className="text-[10px] text-indigo-600 font-semibold hover:underline cursor-pointer"
                  >
                    View All (5)
                  </button>
                </div>
                <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto text-xs">
                  <div 
                    onClick={() => {
                      setShowNotificationsDropdown(false);
                      onNavigate("acquisition");
                    }}
                    className="p-3 hover:bg-rose-50/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">HIGH PRIORITY</span>
                      <span className="text-[10px] text-slate-400">10m ago</span>
                    </div>
                    <div className="font-bold text-slate-900 mt-1">P-103 acquisition dispute requires action</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">Section 15 objection filed by Owner C for Parcel P-103. Hearing on 24-Sep-2026.</div>
                  </div>
                  <div 
                    onClick={() => {
                      setShowNotificationsDropdown(false);
                      onNavigate("compensation");
                    }}
                    className="p-3 hover:bg-amber-50/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">WARNING</span>
                      <span className="text-[10px] text-slate-400">2h ago</span>
                    </div>
                    <div className="font-bold text-slate-900 mt-1">Compensation payment pending for P-103</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">₹25 Cr assessment held in abeyance pending statutory dispute clearance.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center border border-slate-700">
              VK
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-slate-900 leading-tight">Shri V.K. Sharma</div>
              <div className="text-[10px] text-slate-500 truncate max-w-[130px]">{selectedDepartment}</div>
            </div>
            <button
              onClick={onLogout}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors ml-1 cursor-pointer"
              title="Logout"
            >
              <Icon name="LogOut" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


// ===== FILE: src\pages\Login.js =====

// NLAMS Login Page Component

function Login({ onLogin }) {
  const [empId, setEmpId] = useState('NIC-GOV-9821');
  const [password, setPassword] = useState('••••••••••••');
  const [department, setDepartment] = useState('District Land Acquisition Authority');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ empId, department });
  };

  const departmentsList = [
    'Central Ministry',
    'State Government',
    'District Land Acquisition Authority',
    'Project Implementing Agency',
    'Revenue Department',
    'Finance Department',
    'R&R Department',
    'Administrator'
  ];

  return (
    <div className='min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans select-none'>
      {/* Background Subtle Geometric Pattern */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='absolute w-96 h-96 rounded-full bg-indigo-500 blur-3xl -top-20 -left-20'></div>
        <div className='absolute w-96 h-96 rounded-full bg-amber-500 blur-3xl -bottom-20 -right-20'></div>
      </div>

      {/* Top Header Strip */}
      <div className='bg-slate-950/80 border-b border-slate-800 px-6 py-2.5 flex items-center justify-between text-xs'>
        <div className='flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-emerald-400'></span>
          <span className='text-amber-400 font-bold'>भारत सरकार</span>
          <span className='text-slate-600'>|</span>
          <span className='text-slate-300 font-medium'>Government of India</span>
        </div>
        <div className='text-[11px] text-slate-400 font-mono'>
          NIC National Infrastructure Portal • Prototype Demonstration
        </div>
      </div>

      {/* Main Login Card */}
      <div className='flex-1 flex items-center justify-center p-6 z-10'>
        <div className='w-full max-w-md bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 p-8 shadow-2xl'>
          {/* Logo & Headings */}
          <div className='text-center mb-6'>
            <div className='w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 border border-amber-400/40'>
              <svg className='w-8 h-8 text-white' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l6 3.75v7.85L12 19.6l-6-3.8V7.95L12 4.2z'/>
              </svg>
            </div>
            <h1 className='text-xl font-black text-white tracking-tight'>
              National Land Acquisition & Management System
            </h1>
            <div className='text-xs font-mono font-bold text-amber-400 tracking-widest mt-1'>
              NLAMS PORTAL
            </div>
            <p className='text-xs text-slate-300 mt-2 leading-relaxed'>
              Unified Digital Platform for Land Acquisition, Compensation, R&R and Project Monitoring
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-4 text-xs'>
            <div>
              <label className='block font-semibold text-slate-300 mb-1'>Department / Authority</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className='w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors'
              >
                {departmentsList.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className='block font-semibold text-slate-300 mb-1'>Government Employee ID</label>
              <input
                type='text'
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                placeholder='e.g. NIC-GOV-9821'
                className='w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-mono transition-colors'
                required
              />
            </div>

            <div>
              <label className='block font-semibold text-slate-300 mb-1'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••••••'
                className='w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-mono transition-colors'
                required
              />
            </div>

            <div className='pt-2 space-y-2'>
              <button
                type='submit'
                className='w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer'
              >
                <span>Login to Demo</span>
                <Icon name='ArrowRight' className='w-4 h-4' />
              </button>

              <div className='text-center'>
                <span className='text-[10px] text-slate-400'>
                  Prototype demonstration — any credentials permit immediate access.
                </span>
              </div>
            </div>
          </form>

          {/* Interoperability note */}
          <div className='mt-6 pt-4 border-t border-slate-700/60 flex items-start gap-2 text-[10px] text-slate-400 leading-relaxed'>
            <Icon name='Info' className='w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5' />
            <span>
              NLAMS connects existing departmental databases using common <strong>Project IDs</strong> and <strong>Parcel IDs</strong> for end-to-end digital lifecycle traceability.
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-slate-950/80 border-t border-slate-800 px-6 py-3 text-center text-[10px] text-slate-500'>
        National Land Acquisition & Management System (NLAMS) Prototype • Government of India Digital Showcase
      </div>
    </div>
  );
}


// ===== FILE: src\pages\Dashboard.js =====

// NLAMS Main Executive Dashboard Component

function Dashboard({ onNavigate, onSelectProject }) {
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


// ===== FILE: src\pages\Projects.js =====

// NLAMS Projects Directory Page Component

function Projects({ onNavigate, onSelectProject }) {
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
function ProjectDetails({ onNavigate, onSelectProject, onSelectParcel }) {
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


// ===== FILE: src\pages\Parcels.js =====

// NLAMS Land Parcels & Parcel Details Page Components

function Parcels({ onNavigate, onSelectParcel }) {
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
function ParcelDetails({ onNavigate, parcelId = 'P-103', onSelectParcel }) {
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


// ===== FILE: src\pages\GIS.js =====

// NLAMS GIS Command Center Component (Leaflet.js Delhi Map)

function GIS({ onNavigate, onSelectParcel }) {
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
function Acquisition({ onNavigate, onSelectParcel }) {
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

// ===== FILE: src\pages\Revenue.js =====

// NLAMS Revenue Department Page Component

function Revenue({ onNavigate, onSelectParcel }) {
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
function Compensation({ onNavigate, onSelectParcel }) {
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


// ===== FILE: src\pages\RnR.js =====

// NLAMS Rehabilitation & Resettlement (R&R) Page Component

function RnR({ onNavigate, onSelectParcel }) {
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
function Possession({ onNavigate, onSelectParcel }) {
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


// ===== FILE: src\pages\Construction.js =====

// NLAMS Construction Monitoring Page Component

function Construction({ onNavigate, onSelectParcel }) {
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
function Departments({ onNavigate, onSelectParcel }) {
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


// ===== FILE: src\pages\Documents.js =====

// NLAMS Document Management Page Component

function Documents({ onNavigate }) {
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
function Notifications({ onNavigate }) {
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


// ===== FILE: src\pages\Analytics.js =====

// NLAMS AI Risk & Analytics Page Component

function Analytics({ onNavigate, onSelectParcel }) {
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
function Reports({ onNavigate }) {
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
function Settings({ onNavigate, selectedDepartment }) {
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


// ===== FILE: src\App.js =====

// NLAMS Root React Application Component

// Pages


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('dashboard');
  const [selectedProjectId, setSelectedProjectId] = useState('PARK-001');
  const [selectedParcelId, setSelectedParcelId] = useState('P-103');
  const [selectedDepartment, setSelectedDepartment] = useState('District Land Acquisition Authority');
  const [judgeTourActive, setJudgeTourActive] = useState(false);
  const [judgeTourStepIndex, setJudgeTourStepIndex] = useState(0);

  // Synchronize Judge Tour step with current view
  const handleJudgeStepChange = (index) => {
    setJudgeTourStepIndex(index);
    const stepObj = JUDGE_STEPS[index];
    if (stepObj) {
      if (stepObj.step === 1 && !isLoggedIn) {
        // stay on login or go to dashboard
      } else {
        if (!isLoggedIn) setIsLoggedIn(true);
        setCurrentRoute(stepObj.route);
        if (stepObj.route === 'project-details') setSelectedProjectId('PARK-001');
        if (stepObj.route === 'parcel-details') setSelectedParcelId('P-103');
      }
    }
  };

  const startJudgeTour = () => {
    setJudgeTourActive(true);
    handleJudgeStepChange(0);
  };

  const handleLogin = (credentials) => {
    if (credentials.department) setSelectedDepartment(credentials.department);
    setIsLoggedIn(true);
    setCurrentRoute('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setJudgeTourActive(false);
    setCurrentRoute('login');
  };

  // Breadcrumbs generator
  const getBreadcrumbs = () => {
    const crumbs = [{ label: 'Dashboard', route: 'dashboard' }];
    if (currentRoute === 'dashboard') return crumbs;

    if (currentRoute === 'projects') {
      crumbs.push({ label: 'Projects Directory', route: 'projects' });
    } else if (currentRoute === 'project-details') {
      crumbs.push({ label: 'Projects', route: 'projects' });
      crumbs.push({ label: selectedProjectId, route: 'project-details' });
    } else if (currentRoute === 'parcels') {
      crumbs.push({ label: 'Land Parcels', route: 'parcels' });
    } else if (currentRoute === 'parcel-details') {
      crumbs.push({ label: 'Land Parcels', route: 'parcels' });
      crumbs.push({ label: `Parcel ${selectedParcelId}`, route: 'parcel-details' });
    } else {
      crumbs.push({ label: currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1), route: currentRoute });
    }
    return crumbs;
  };

  // If logged out, render Login screen
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none antialiased">
      {/* Judge Tour Floating Banner (Active when tour is running) */}
      {judgeTourActive && (
        <JudgeTourBar
          currentStepIndex={judgeTourStepIndex}
          onStepChange={handleJudgeStepChange}
          onCloseTour={() => setJudgeTourActive(false)}
        />
      )}

      {/* Main Layout: Persistent Sidebar + Top Navbar + Dynamic View Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar (15 main sections) */}
        <Sidebar
          currentRoute={currentRoute}
          onNavigate={(route) => {
            setCurrentRoute(route);
            // If navigating manually, check if tour should exit or sync
          }}
          selectedProject={selectedProjectId}
          onSelectProject={setSelectedProjectId}
        />

        {/* Right Main Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto h-screen">
          {/* Top Navbar */}
          <Navbar
            currentRoute={currentRoute}
            onNavigate={setCurrentRoute}
            projects={PROJECTS}
            selectedProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
            selectedDepartment={selectedDepartment}
            onSelectDepartment={setSelectedDepartment}
            onStartJudgeTour={startJudgeTour}
            judgeTourActive={judgeTourActive}
            onLogout={handleLogout}
            notificationsCount={3}
          />

          {/* Breadcrumb Navigation Strip */}
          <div className="bg-white px-6 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <div className="flex items-center gap-1.5 flex-wrap font-medium">
              <span className="text-slate-400">Location:</span>
              {getBreadcrumbs().map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <span className="text-slate-300">/</span>}
                  <button
                    onClick={() => setCurrentRoute(crumb.route)}
                    className={`hover:text-indigo-600 transition-colors ${
                      idx === getBreadcrumbs().length - 1 
                        ? 'font-bold text-slate-900 pointer-events-none' 
                        : 'text-slate-600'
                    }`}
                  >
                    {crumb.label}
                  </button>
                </div>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>PFMS Sync: LIVE</span>
              </span>
              <span>•</span>
              <span>Common Key: PARK-001 / P-103</span>
            </div>
          </div>

          {/* Dynamic Content View Router */}
          <main className="flex-1 bg-slate-50 overflow-y-auto">
            {currentRoute === 'dashboard' && (
              <Dashboard
                onNavigate={setCurrentRoute}
                onSelectProject={setSelectedProjectId}
              />
            )}

            {currentRoute === 'projects' && (
              <Projects
                onNavigate={setCurrentRoute}
                onSelectProject={setSelectedProjectId}
              />
            )}

            {currentRoute === 'project-details' && (
              <ProjectDetails
                onNavigate={setCurrentRoute}
                onSelectProject={setSelectedProjectId}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'parcels' && (
              <Parcels
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'parcel-details' && (
              <ParcelDetails
                parcelId={selectedParcelId}
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'gis' && (
              <GIS
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'acquisition' && (
              <Acquisition
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'revenue' && (
              <Revenue
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'compensation' && (
              <Compensation
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'rnr' && (
              <RnR
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'possession' && (
              <Possession
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'construction' && (
              <Construction
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'departments' && (
              <Departments
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'documents' && (
              <Documents
                onNavigate={setCurrentRoute}
              />
            )}

            {currentRoute === 'notifications' && (
              <Notifications
                onNavigate={setCurrentRoute}
              />
            )}

            {currentRoute === 'analytics' && (
              <Analytics
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'reports' && (
              <Reports
                onNavigate={setCurrentRoute}
              />
            )}

            {currentRoute === 'settings' && (
              <Settings
                onNavigate={setCurrentRoute}
                selectedDepartment={selectedDepartment}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}



// ===== Mount Application Root =====


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
console.log('NLAMS Application initialized successfully!');
