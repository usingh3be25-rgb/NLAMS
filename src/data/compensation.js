// National Land Acquisition & Management System (NLAMS) - Compensation Dataset

export const COMPENSATION_SUMMARY = {
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

export const COMPENSATION_PARCELS = [
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

export const COMPENSATION_TRANSACTIONS = [
  { id: 'TXN-9021', parcelId: 'P-102', date: '2026-03-02', beneficiary: 'Rajesh Kumar & Sons', amount: '₹28,00,00,000', type: 'Final Award', mode: 'PFMS / e-Kuber', status: 'Success' },
  { id: 'TXN-9044', parcelId: 'P-104', date: '2026-04-18', beneficiary: 'Shahpur Khata Beneficiaries (Batch 1)', amount: '₹30,00,00,000', type: 'Interim Award', mode: 'DBT Treasury', status: 'Success' },
  { id: 'TXN-9058', parcelId: 'P-104', date: '2026-06-12', beneficiary: 'Shahpur Khata Beneficiaries (Batch 2)', amount: '₹15,00,00,000', type: 'Interim Award', mode: 'DBT Treasury', status: 'Success' },
  { id: 'TXN-9069', parcelId: 'P-103', date: '2026-02-15', beneficiary: 'Owner C Escrow Sub-account', amount: '₹25,00,00,000', type: 'Statutory Allocation', mode: 'Escrow Ledger', status: 'Held in Abeyance' }
];
