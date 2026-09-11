// National Land Acquisition & Management System (NLAMS) - Construction Monitoring Dataset

export const CONSTRUCTION_DATA = {
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
