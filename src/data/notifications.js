// National Land Acquisition & Management System (NLAMS) - Notifications Dataset

export const NOTIFICATIONS = [
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
