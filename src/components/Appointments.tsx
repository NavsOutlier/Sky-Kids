import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Filter,
  Bot,
  Phone,
  Plus,
  Search,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Smile,
  CalendarDays,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  isToday
} from "date-fns";
import { ptBR } from "date-fns/locale";

const appointments = [
  // 10 FOR TODAY
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    patient: ["Pedrinho Santos", "Aninha Oliveira", "Lucas Lima", "Maria Eduarda", "Gabriel Souza", "Beatriz Rocha", "Mateus Costa", "Isabela Lima", "Davi Silva", "Sophia Mendes"][i],
    doctor: ["Dr. Carlos Eduardo", "Dra. Julia Souza", "Dr. Roberto Silva", "Dra. Patrícia Lima", "Dr. André Santos", "Dra. Fernanda Rocha", "Dr. Bruno Menezes", "Dra. Camila Alves", "Dr. Tiago Oliveira", "Dra. Beatriz Costa"][i],
    date: new Date(),
    dateLabel: "Hoje",
    time: `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`,
    status: i % 3 === 0 ? "Pendente" : "Confirmado",
    source: i % 2 === 0 ? "IA" : "Humano",
    avatarColor: ["bg-blue-100", "bg-yellow-100", "bg-purple-100", "bg-rose-100", "bg-emerald-100", "bg-orange-100", "bg-indigo-100", "bg-pink-100", "bg-teal-100", "bg-lime-100"][i],
  })),
  // 40 SPREAD ACROSS THE MONTH
  ...Array.from({ length: 40 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + (i - 20)); // Spread -20 to +20 days
    if (isToday(date)) date.setDate(date.getDate() + 1); // Avoid overlap with "today" set if accidental
    return {
      id: i + 11,
      patient: `Amiguinho ${i + 1}`,
      doctor: ["Dr. Carlos Eduardo", "Dra. Julia Souza", "Dr. Roberto Silva"][i % 3],
      date: date,
      dateLabel: format(date, "dd/MM"),
      time: "10:00",
      status: "Confirmado",
      source: "IA",
      avatarColor: "bg-sky-50",
    };
  }),
];

export function Appointments() {
  const [filter, setFilter] = useState("Todos");
  const [dateFilter, setDateFilter] = useState<"all" | "today">("all");
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const filteredAppointments = useMemo(() => {
    return appointments.filter((apt) => {
      const matchesDoctor = filter === "Todos" || apt.doctor.includes(filter);
      const matchesDate = dateFilter === "today" ? isToday(apt.date) : true;
      return matchesDoctor && matchesDate;
    });
  }, [filter, dateFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-black tracking-tight text-sky-dark">
            Agenda <span className="text-sun-yellow">Mágica</span> 📅
          </h2>
          <p className="text-slate-500 font-bold text-lg">
            {dateFilter === "today" ? "Amiguinhos que vêm nos visitar hoje!" : "Acompanhe as visitas dos nossos amiguinhos."}
          </p>
        </motion.div>
        <Button variant="sun" className="text-lg py-7 px-8 shadow-lg shadow-amber-200 group">
          <Plus className="w-6 h-6 mr-2 group-hover:rotate-90 transition-transform" />
          Novo Encontro
        </Button>
      </div>

      <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden bg-white/80 backdrop-blur-sm">
        <CardHeader className="border-b border-sky-50 pb-6 px-8 bg-sky-50/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Procurar amiguinho..."
                  className="w-full pl-11 pr-4 py-3 bg-white border-2 border-sky-100 rounded-full focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all font-bold text-sm shadow-sm"
                />
                <Search className="absolute left-4 top-3 h-5 w-5 text-sky-light" />
              </div>

              <div className="flex items-center gap-2 bg-white/80 p-1 rounded-full border-2 border-sky-100 shadow-sm">
                <button
                  onClick={() => setDateFilter("all")}
                  className={cn(
                    "px-4 py-2 text-xs font-black rounded-full transition-all",
                    dateFilter === "all" ? "bg-sky-medium text-white shadow-md shadow-sky-200" : "text-slate-400 hover:text-sky-dark"
                  )}
                >
                  Tudo
                </button>
                <button
                  onClick={() => setDateFilter("today")}
                  className={cn(
                    "px-4 py-2 text-xs font-black rounded-full transition-all",
                    dateFilter === "today" ? "bg-sun-yellow text-slate-800 shadow-md shadow-amber-200" : "text-slate-400 hover:text-sky-dark"
                  )}
                >
                  Só Hoje ✨
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 bg-white/80 p-1 rounded-[1.5rem] border-2 border-sky-100 shadow-sm max-w-2xl">
                {["Todos", ...Array.from(new Set(appointments.map(a => a.doctor)))].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "px-3 py-1.5 text-[10px] font-black rounded-full transition-all whitespace-nowrap",
                      filter === f ? "bg-sky-medium text-white shadow-md shadow-sky-200" : "text-slate-400 hover:text-sky-dark hover:bg-sky-50"
                    )}
                  >
                    {f === "Todos" ? "Heróis" : f.split(' ')[0] + ' ' + (f.split(' ').length > 1 ? f.split(' ')[f.split(' ').length - 1] : '')}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex bg-white/50 p-1.5 rounded-full border-2 border-sky-100 w-fit shadow-sm">
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "px-5 py-2 text-xs font-black rounded-full transition-all duration-300",
                  viewMode === "list" ? "bg-sky-medium text-white shadow-md shadow-sky-200" : "text-slate-400 hover:text-sky-dark"
                )}
              >
                Lista
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={cn(
                  "px-5 py-2 text-xs font-black rounded-full transition-all duration-300",
                  viewMode === "calendar" ? "bg-sky-medium text-white shadow-md shadow-sky-200" : "text-slate-400 hover:text-sky-dark"
                )}
              >
                Calendário
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <AnimatePresence mode="wait">
            {viewMode === "list" ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="overflow-x-auto"
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-sky-50/20">
                      <th className="px-8 py-4 font-black text-sky-dark/70 uppercase tracking-widest text-[10px]">Amiguinho</th>
                      <th className="px-8 py-4 font-black text-sky-dark/70 uppercase tracking-widest text-[10px]">Herói que Atende</th>
                      <th className="px-8 py-4 font-black text-sky-dark/70 uppercase tracking-widest text-[10px]">Quando?</th>
                      <th className="px-8 py-4 font-black text-sky-dark/70 uppercase tracking-widest text-[10px]">Quem Marcou?</th>
                      <th className="px-8 py-4 font-black text-sky-dark/70 uppercase tracking-widest text-[10px]">Estado Atual</th>
                      <th className="px-8 py-4 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-50">
                    {filteredAppointments.map((apt, i) => (
                      <motion.tr
                        key={apt.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="hover:bg-sky-50/40 group transition-all duration-300"
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform", apt.avatarColor)}>
                              <Smile className="w-6 h-6 text-slate-600" />
                            </div>
                            <span className="font-black text-slate-800 text-lg">
                              {apt.patient}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-6 font-bold text-slate-600">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-sun-yellow" />
                            {apt.doctor}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="flex items-center text-sky-dark font-black">
                              <CalendarIcon className="w-4 h-4 mr-2 text-sky-medium" />
                              {apt.dateLabel}
                            </span>
                            <span className="flex items-center text-slate-400 font-bold text-xs mt-1 italic">
                              <Clock className="w-3.5 h-3.5 mr-2" />
                              {apt.time}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          {apt.source === "IA" ? (
                            <span className="inline-flex items-center text-[10px] font-black tracking-widest uppercase text-sky-medium bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                              <Bot className="w-3.5 h-3.5 mr-1.5" /> Estrela IA
                            </span>
                          ) : (
                            <span className="inline-flex items-center text-[10px] font-black tracking-widest uppercase text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                              <Phone className="w-3.5 h-3.5 mr-1.5" /> Equipe Sky
                            </span>
                          )}
                        </td>
                        <td className="px-8 py-6">
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black tracking-wide shadow-sm",
                              apt.status === "Confirmado"
                                ? "bg-emerald-100 text-emerald-600 border border-emerald-200"
                                : apt.status === "Pendente"
                                  ? "bg-amber-100 text-amber-600 border border-amber-200"
                                  : "bg-rose-100 text-rose-500 border border-rose-200",
                            )}
                          >
                            {apt.status === "Confirmado" ? "✨ Confirmado" : apt.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-sky-100 text-sky-medium hover:text-sky-dark"
                          >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ) : (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                <CalendarView
                  currentMonth={currentMonth}
                  setCurrentMonth={setCurrentMonth}
                  appointments={filteredAppointments}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-8 bg-sky-50/10 flex items-center justify-between border-t border-sky-50">
            <p className="text-sm font-bold text-slate-400">
              Mostrando {filteredAppointments.length} encontros mágicos.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="opacity-50" disabled>Anterior</Button>
              <Button size="sm" variant="outline" className="opacity-50" disabled>Próxima</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CalendarView({ currentMonth, setCurrentMonth, appointments: data }: {
  currentMonth: Date,
  setCurrentMonth: (d: Date) => void,
  appointments: any[]
}) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-sky-50/50 p-4 rounded-[2rem] border-2 border-sky-100/50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="rounded-full hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6 text-sky-medium" />
        </Button>
        <h3 className="text-2xl font-black text-sky-dark capitalize">
          {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
        </h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="rounded-full hover:bg-white"
        >
          <ChevronRight className="w-6 h-6 text-sky-medium" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
          <div key={day} className="text-center py-2 text-[10px] font-black uppercase tracking-widest text-sky-dark/50">
            {day}
          </div>
        ))}
        {calendarDays.map((date, i) => {
          const dayApts = data.filter(apt => isSameDay(apt.date, date));
          const isCurrentMonth = isSameMonth(date, monthStart);
          const isTodayDate = isToday(date);

          return (
            <motion.div
              key={date.toString()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.01 }}
              className={cn(
                "min-h-[100px] p-2 rounded-3xl border-2 transition-all group cursor-pointer",
                isCurrentMonth ? "bg-white border-sky-50" : "bg-slate-50/50 border-transparent opacity-40",
                isTodayDate && "ring-4 ring-sun-yellow/30 border-sun-yellow shadow-lg shadow-amber-100",
                dayApts.length > 0 && isCurrentMonth && "border-sky-100 shadow-sm hover:shadow-md hover:-translate-y-1"
              )}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-full text-sm font-black transition-colors",
                  isTodayDate ? "bg-sun-yellow text-slate-800" : "text-slate-400 group-hover:text-sky-medium"
                )}>
                  {format(date, 'd')}
                </span>
                {dayApts.length > 0 && isCurrentMonth && (
                  <Sparkles className="w-4 h-4 text-sun-yellow animate-pulse" />
                )}
              </div>

              <div className="space-y-1 mt-2">
                {dayApts.map((apt) => (
                  <div
                    key={apt.id}
                    className={cn(
                      "text-[10px] font-black px-2 py-1 rounded-lg truncate shadow-sm",
                      apt.status === "Confirmado" ? "bg-sky-100 text-sky-dark" : "bg-amber-100 text-amber-700"
                    )}
                  >
                    {apt.time} - {apt.patient.split(' ')[0]}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
