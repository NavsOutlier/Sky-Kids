import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { AISecretary } from './components/AISecretary';
import { Finance } from './components/Finance';
import { Appointments } from './components/Appointments';

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
      default:
        return (
          <div className="flex items-center justify-center h-full text-slate-500">
            Módulo em desenvolvimento
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
