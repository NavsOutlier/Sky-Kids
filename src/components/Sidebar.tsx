import React from "react";
import {
  LayoutDashboard,
  Bot,
  CircleDollarSign,
  CalendarDays,
  ClipboardList,
  Users,
  Settings,
  Sun,
  CloudSun,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

import logo from "../assets/logo/logo-skykids.png";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, color: "text-sky-500" },
    { id: "ai-secretary", label: "Secretária IA", icon: Bot, color: "text-sun-yellow" },
    { id: "finance", label: "Financeiro", icon: CircleDollarSign, color: "text-emerald-400" },
    { id: "appointments", label: "Agendamentos", icon: CalendarDays, color: "text-rose-400" },
    { id: "medical-records", label: "Prontuário", icon: ClipboardList, color: "text-indigo-400" },
    { id: "doctors", label: "Médicos", icon: Users, color: "text-violet-400" },
    { id: "settings", label: "Configurações", icon: Settings, color: "text-slate-400" },
  ];

  return (
    <div className="w-72 bg-white flex flex-col h-full border-r border-sky-100 shadow-xl z-10 transition-all duration-300">
      <div className="p-6 pb-2">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-full h-24 flex items-center justify-center p-2"
          >
            <img
              src={logo}
              alt="Sky Kids Logo"
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </motion.div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1.5 mt-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-[1.2rem] text-sm font-bold transition-all duration-300",
                isActive
                  ? "bg-sky-light/20 text-sky-dark shadow-sm"
                  : "text-slate-400 hover:bg-sky-50 hover:text-sky-dark"
              )}
            >
              <div className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                isActive ? "bg-white shadow-md shadow-sky-100/50" : "bg-slate-50"
              )}>
                <Icon className={cn("w-5 h-5", isActive ? item.color : "text-slate-300")} />
              </div>
              <span className="truncate">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <div className="p-6 mt-auto">
        <div className="p-4 bg-sky-light/10 rounded-[2rem] border border-sky-100/50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-4 border-white bg-sun-yellow flex items-center justify-center text-white font-bold text-lg shadow-lg">
              AD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-700">Admin</span>
              <span className="text-[10px] font-medium text-sky-dark/60 italic">Online agora</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
