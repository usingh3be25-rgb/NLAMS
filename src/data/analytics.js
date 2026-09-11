// National Land Acquisition & Management System (NLAMS) - AI Risk Engine Dataset

export const AI_RISK_DATA = {
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
