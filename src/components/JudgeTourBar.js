// NLAMS Judge Demonstration Controller Component
// Provides a 14-step structured narrative walking judges through the 5-minute case study.
import { Icon } from './Icons.js';

export const JUDGE_STEPS = [
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

export function JudgeTourBar({ currentStepIndex = 0, onStepChange, onCloseTour }) {
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
