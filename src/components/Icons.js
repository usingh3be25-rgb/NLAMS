// NLAMS Professional Government SVG Icon Library
export function Icon({ name, className = 'w-5 h-5', style = {} }) {
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
