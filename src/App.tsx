import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { AISecretary } from './components/AISecretary';
import { Finance } from './components/Finance';
import { Appointments } from './components/Appointments';
import { MedicalRecords } from './components/MedicalRecords';
import { DoctorsManagement } from './components/DoctorsManagement';
import { Settings } from './components/Settings';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'ai-secretary':
        return <AISecretary />;
      case 'finance':
        return <Finance />;
      case 'appointments':
        return <Appointments />;
      case 'medical-records':
        return <MedicalRecords />;
      case 'doctors':
        return <DoctorsManagement />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-sky-dark/60 font-medium italic">
            Módulo em desenvolvimento... 🚀
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#f0f9ff] font-sans text-slate-700 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-y-auto relative">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sun-yellow/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto h-full p-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
