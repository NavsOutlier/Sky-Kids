import React from "react";
import {
  LayoutDashboard,
  Bot,
  CircleDollarSign,
  CalendarDays,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "ai-secretary", label: "Secretária IA", icon: Bot },
    { id: "finance", label: "Financeiro", icon: CircleDollarSign },
    { id: "appointments", label: "Agendamentos", icon: CalendarDays },
    { id: "doctors", label: "Médicos", icon: Users },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-950 text-slate-300 flex flex-col h-full border-r border-slate-800">
      <div className="p-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          CliniSync <span className="text-indigo-400">AI</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "hover:bg-slate-900 hover:text-white",
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Admin</span>
            <span className="text-xs text-slate-500">admin@clinica.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
