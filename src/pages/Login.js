// NLAMS Login Page Component
import { useState } from 'react';
import { Icon } from '../components/Icons.js';

export function Login({ onLogin }) {
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
