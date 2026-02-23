import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Filter,
  Bot,
  Phone,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const appointments = [
  {
    id: 1,
    patient: "Maria Silva",
    doctor: "Dr. Carlos (Cardiologia)",
    date: "Hoje",
    time: "14:00",
    status: "Confirmado",
    source: "IA",
  },
  {
    id: 2,
    patient: "João Pedro",
    doctor: "Dra. Julia (Dermatologia)",
    date: "Hoje",
    time: "15:30",
    status: "Pendente",
    source: "Humano",
  },
  {
    id: 3,
    patient: "Ana Costa",
    doctor: "Dr. Carlos (Cardiologia)",
    date: "Amanhã",
    time: "09:00",
    status: "Confirmado",
    source: "IA",
  },
  {
    id: 4,
    patient: "Roberto Alves",
    doctor: "Dr. Roberto (Ortopedia)",
    date: "Amanhã",
    time: "11:15",
    status: "Cancelado",
    source: "IA",
  },
  {
    id: 5,
    patient: "Fernanda Lima",
    doctor: "Dra. Julia (Dermatologia)",
    date: "16/05",
    time: "10:00",
    status: "Confirmado",
    source: "Humano",
  },
];

export function Appointments() {
  const [filter, setFilter] = useState("Todos");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Agendamentos
          </h2>
          <p className="text-slate-500">
            Gerencie as consultas agendadas pela IA e pela equipe.
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <CalendarIcon className="w-4 h-4 mr-2" />
          Novo Agendamento
        </Button>
      </div>

      <Card>
        <CardHeader className="border-b border-slate-100 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <select
                className="h-8 text-sm border border-slate-200 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="Todos">Todos os Médicos</option>
                <option value="Dr. Carlos">Dr. Carlos</option>
                <option value="Dra. Julia">Dra. Julia</option>
                <option value="Dr. Roberto">Dr. Roberto</option>
              </select>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-lg w-fit">
              <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-white text-slate-900 shadow-sm">
                Lista
              </button>
              <button className="px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 hover:text-slate-900">
                Calendário
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3 font-medium">Paciente</th>
                  <th className="px-6 py-3 font-medium">
                    Médico / Especialidade
                  </th>
                  <th className="px-6 py-3 font-medium">Data / Hora</th>
                  <th className="px-6 py-3 font-medium">Origem</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {appointments
                  .filter(
                    (apt) => filter === "Todos" || apt.doctor.includes(filter),
                  )
                  .map((apt) => (
                    <tr
                      key={apt.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                            <User className="w-4 h-4 text-slate-500" />
                          </div>
                          <span className="font-medium text-slate-900">
                            {apt.patient}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{apt.doctor}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="flex items-center text-slate-900 font-medium">
                            <CalendarIcon className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                            {apt.date}
                          </span>
                          <span className="flex items-center text-slate-500 text-xs">
                            <Clock className="w-3.5 h-3.5 mr-1.5" />
                            {apt.time}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {apt.source === "IA" ? (
                          <span className="inline-flex items-center text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                            <Bot className="w-3 h-3 mr-1" /> IA
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                            <Phone className="w-3 h-3 mr-1" /> Humano
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                            apt.status === "Confirmado"
                              ? "bg-green-100 text-green-700"
                              : apt.status === "Pendente"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-700",
                          )}
                        >
                          {apt.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-500 hover:text-indigo-600"
                        >
                          Detalhes
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
