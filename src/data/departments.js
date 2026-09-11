// National Land Acquisition & Management System (NLAMS) - Departments Dataset

export const DEPARTMENTS = [
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

export const WORKFLOW_DATA = {
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
