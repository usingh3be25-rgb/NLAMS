// National Land Acquisition & Management System (NLAMS) - R&R Dataset

export const RR_SUMMARY = {
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

export const RR_FAMILIES = [
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
