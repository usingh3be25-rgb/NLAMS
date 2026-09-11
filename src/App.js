// NLAMS Root React Application Component
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { Sidebar } from './components/Sidebar.js';
import { JudgeTourBar, JUDGE_STEPS } from './components/JudgeTourBar.js';
import { Icon } from './components/Icons.js';

// Pages
import { Login } from './pages/Login.js';
import { Dashboard } from './pages/Dashboard.js';
import { Projects, ProjectDetails } from './pages/Projects.js';
import { Parcels, ParcelDetails } from './pages/Parcels.js';
import { GIS, Acquisition } from './pages/GIS.js';
import { Revenue, Compensation } from './pages/Revenue.js';
import { RnR, Possession } from './pages/RnR.js';
import { Construction, Departments } from './pages/Construction.js';
import { Documents, Notifications } from './pages/Documents.js';
import { Analytics, Reports, Settings } from './pages/Analytics.js';

import { PROJECTS } from './data/projects.js';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('dashboard');
  const [selectedProjectId, setSelectedProjectId] = useState('PARK-001');
  const [selectedParcelId, setSelectedParcelId] = useState('P-103');
  const [selectedDepartment, setSelectedDepartment] = useState('District Land Acquisition Authority');
  const [judgeTourActive, setJudgeTourActive] = useState(false);
  const [judgeTourStepIndex, setJudgeTourStepIndex] = useState(0);

  // Synchronize Judge Tour step with current view
  const handleJudgeStepChange = (index) => {
    setJudgeTourStepIndex(index);
    const stepObj = JUDGE_STEPS[index];
    if (stepObj) {
      if (stepObj.step === 1 && !isLoggedIn) {
        // stay on login or go to dashboard
      } else {
        if (!isLoggedIn) setIsLoggedIn(true);
        setCurrentRoute(stepObj.route);
        if (stepObj.route === 'project-details') setSelectedProjectId('PARK-001');
        if (stepObj.route === 'parcel-details') setSelectedParcelId('P-103');
      }
    }
  };

  const startJudgeTour = () => {
    setJudgeTourActive(true);
    handleJudgeStepChange(0);
  };

  const handleLogin = (credentials) => {
    if (credentials.department) setSelectedDepartment(credentials.department);
    setIsLoggedIn(true);
    setCurrentRoute('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setJudgeTourActive(false);
    setCurrentRoute('login');
  };

  // Breadcrumbs generator
  const getBreadcrumbs = () => {
    const crumbs = [{ label: 'Dashboard', route: 'dashboard' }];
    if (currentRoute === 'dashboard') return crumbs;

    if (currentRoute === 'projects') {
      crumbs.push({ label: 'Projects Directory', route: 'projects' });
    } else if (currentRoute === 'project-details') {
      crumbs.push({ label: 'Projects', route: 'projects' });
      crumbs.push({ label: selectedProjectId, route: 'project-details' });
    } else if (currentRoute === 'parcels') {
      crumbs.push({ label: 'Land Parcels', route: 'parcels' });
    } else if (currentRoute === 'parcel-details') {
      crumbs.push({ label: 'Land Parcels', route: 'parcels' });
      crumbs.push({ label: `Parcel ${selectedParcelId}`, route: 'parcel-details' });
    } else {
      crumbs.push({ label: currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1), route: currentRoute });
    }
    return crumbs;
  };

  // If logged out, render Login screen
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none antialiased">
      {/* Judge Tour Floating Banner (Active when tour is running) */}
      {judgeTourActive && (
        <JudgeTourBar
          currentStepIndex={judgeTourStepIndex}
          onStepChange={handleJudgeStepChange}
          onCloseTour={() => setJudgeTourActive(false)}
        />
      )}

      {/* Main Layout: Persistent Sidebar + Top Navbar + Dynamic View Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar (15 main sections) */}
        <Sidebar
          currentRoute={currentRoute}
          onNavigate={(route) => {
            setCurrentRoute(route);
            // If navigating manually, check if tour should exit or sync
          }}
          selectedProject={selectedProjectId}
          onSelectProject={setSelectedProjectId}
        />

        {/* Right Main Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto h-screen">
          {/* Top Navbar */}
          <Navbar
            currentRoute={currentRoute}
            onNavigate={setCurrentRoute}
            projects={PROJECTS}
            selectedProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
            selectedDepartment={selectedDepartment}
            onSelectDepartment={setSelectedDepartment}
            onStartJudgeTour={startJudgeTour}
            judgeTourActive={judgeTourActive}
            onLogout={handleLogout}
            notificationsCount={3}
          />

          {/* Breadcrumb Navigation Strip */}
          <div className="bg-white px-6 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <div className="flex items-center gap-1.5 flex-wrap font-medium">
              <span className="text-slate-400">Location:</span>
              {getBreadcrumbs().map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <span className="text-slate-300">/</span>}
                  <button
                    onClick={() => setCurrentRoute(crumb.route)}
                    className={`hover:text-indigo-600 transition-colors ${
                      idx === getBreadcrumbs().length - 1 
                        ? 'font-bold text-slate-900 pointer-events-none' 
                        : 'text-slate-600'
                    }`}
                  >
                    {crumb.label}
                  </button>
                </div>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>PFMS Sync: LIVE</span>
              </span>
              <span>•</span>
              <span>Common Key: PARK-001 / P-103</span>
            </div>
          </div>

          {/* Dynamic Content View Router */}
          <main className="flex-1 bg-slate-50 overflow-y-auto">
            {currentRoute === 'dashboard' && (
              <Dashboard
                onNavigate={setCurrentRoute}
                onSelectProject={setSelectedProjectId}
              />
            )}

            {currentRoute === 'projects' && (
              <Projects
                onNavigate={setCurrentRoute}
                onSelectProject={setSelectedProjectId}
              />
            )}

            {currentRoute === 'project-details' && (
              <ProjectDetails
                onNavigate={setCurrentRoute}
                onSelectProject={setSelectedProjectId}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'parcels' && (
              <Parcels
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'parcel-details' && (
              <ParcelDetails
                parcelId={selectedParcelId}
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'gis' && (
              <GIS
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'acquisition' && (
              <Acquisition
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'revenue' && (
              <Revenue
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'compensation' && (
              <Compensation
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'rnr' && (
              <RnR
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'possession' && (
              <Possession
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'construction' && (
              <Construction
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'departments' && (
              <Departments
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'documents' && (
              <Documents
                onNavigate={setCurrentRoute}
              />
            )}

            {currentRoute === 'notifications' && (
              <Notifications
                onNavigate={setCurrentRoute}
              />
            )}

            {currentRoute === 'analytics' && (
              <Analytics
                onNavigate={setCurrentRoute}
                onSelectParcel={setSelectedParcelId}
              />
            )}

            {currentRoute === 'reports' && (
              <Reports
                onNavigate={setCurrentRoute}
              />
            )}

            {currentRoute === 'settings' && (
              <Settings
                onNavigate={setCurrentRoute}
                selectedDepartment={selectedDepartment}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
