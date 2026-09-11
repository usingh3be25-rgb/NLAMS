// NLAMS Utility Helpers

export function formatINR(val) {
  if (typeof val === 'number') {
    return '₹' + val.toLocaleString('en-IN');
  }
  return val;
}

export function getStatusBadgeInfo(status) {
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

export function computeRiskScore(metrics) {
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

export function triggerDownload(filename, content, type = 'text/plain') {
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
