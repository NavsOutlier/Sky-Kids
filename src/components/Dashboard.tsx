import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, CalendarCheck, TrendingUp, MessageSquare } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/src/lib/utils";

const data = [
  { name: "Seg", agendamentos: 12 },
  { name: "Ter", agendamentos: 19 },
  { name: "Qua", agendamentos: 15 },
  { name: "Qui", agendamentos: 22 },
  { name: "Sex", agendamentos: 28 },
  { name: "Sáb", agendamentos: 10 },
  { name: "Dom", agendamentos: 4 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h2>
        <p className="text-slate-500">
          Visão geral do desempenho da clínica e da IA.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Agendamentos
            </CardTitle>
            <CalendarCheck className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">110</div>
            <p className="text-xs text-slate-500">
              +12% em relação à semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Faturamento Estimado
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 24.500</div>
            <p className="text-xs text-slate-500">
              +8% em relação à semana passada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversas IA</CardTitle>
            <MessageSquare className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-slate-500">85% resolvidos sem humano</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Novos Pacientes
            </CardTitle>
            <Users className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24</div>
            <p className="text-xs text-slate-500">Agendados via IA</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Agendamentos por Dia (IA)</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip
                    cursor={{ fill: "#f1f5f9" }}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar
                    dataKey="agendamentos"
                    fill="#6366f1"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Últimas Conversas IA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Maria Silva",
                  status: "Agendado",
                  time: "Há 5 min",
                  doctor: "Dr. Carlos",
                },
                {
                  name: "João Pedro",
                  status: "Dúvida",
                  time: "Há 12 min",
                  doctor: "-",
                },
                {
                  name: "Ana Costa",
                  status: "Agendado",
                  time: "Há 25 min",
                  doctor: "Dra. Julia",
                },
                {
                  name: "Roberto Alves",
                  status: "Humano",
                  time: "Há 1 hora",
                  doctor: "-",
                },
              ].map((chat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {chat.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {chat.doctor !== "-"
                        ? `Para: ${chat.doctor}`
                        : "Atendimento Geral"}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                        chat.status === "Agendado"
                          ? "bg-green-100 text-green-700"
                          : chat.status === "Humano"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-blue-100 text-blue-700",
                      )}
                    >
                      {chat.status}
                    </span>
                    <span className="text-xs text-slate-400">{chat.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
