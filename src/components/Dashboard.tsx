import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, CalendarCheck, TrendingUp, MessageSquare, Sun, Star } from "lucide-react";
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
import { motion } from "framer-motion";

const data = [
  { name: "Seg", agendamentos: 24 },
  { name: "Ter", agendamentos: 32 },
  { name: "Qua", agendamentos: 28 },
  { name: "Qui", agendamentos: 41 },
  { name: "Sex", agendamentos: 39 },
  { name: "Sáb", agendamentos: 15 },
  { name: "Dom", agendamentos: 8 },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-sky-dark">
            Olá, <span className="text-sun-yellow">Equipe Sky!</span> 👋
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Aqui está o que está acontecendo na clínica este mês.
          </p>
        </motion.div>

        <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-sky-100 shadow-sm text-sky-dark font-bold">
          <Sun className="w-5 h-5 text-sun-yellow animate-spin-slow" />
          <span>Lindo dia para cuidar!</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Agendamentos", value: "152", trend: "+18%", icon: CalendarCheck, color: "bg-sky-100 text-sky-500" },
          { title: "Faturamento Estimado", value: "R$ 38.200", trend: "+15%", icon: TrendingUp, color: "bg-emerald-100 text-emerald-500" },
          { title: "Conversas IA", value: "142", trend: "92% resolvidos", icon: MessageSquare, color: "bg-sun-yellow/20 text-sun-yellow" },
          { title: "Novos Pacientes", value: "+31", trend: "Via IA", icon: Users, color: "bg-violet-100 text-violet-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="overflow-hidden border-none shadow-lg shadow-sky-100/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.title}
                </CardTitle>
                <div className={cn("p-2 rounded-2xl", stat.color)}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black text-slate-800">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-sun-yellow fill-sun-yellow" />
                  <p className="text-xs font-bold text-sky-dark/60">
                    {stat.trend}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-none shadow-lg shadow-sky-100/50">
          <CardHeader>
            <CardTitle className="text-xl font-black text-sky-dark flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-sky-medium" />
              Agendamentos por Dia
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#79C2D9" />
                      <stop offset="100%" stopColor="#A3D8F4" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="8 8"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={14}
                    fontWeight="bold"
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={14}
                    fontWeight="bold"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip
                    cursor={{ fill: "#f0f9ff", radius: 10 }}
                    contentStyle={{
                      borderRadius: "20px",
                      border: "2px solid #e0f2fe",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      fontWeight: "bold",
                    }}
                  />
                  <Bar
                    dataKey="agendamentos"
                    fill="url(#barGradient)"
                    radius={[15, 15, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 border-none shadow-lg shadow-sky-100/50">
          <CardHeader>
            <CardTitle className="text-xl font-black text-sky-dark flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-sun-yellow" />
              Últimas Conversas IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Maria Silva",
                  status: "Agendado",
                  time: "Há 5 min",
                  doctor: "Dr. Carlos",
                  initials: "MS",
                  color: "bg-blue-100"
                },
                {
                  name: "João Pedro",
                  status: "Dúvida",
                  time: "Há 12 min",
                  doctor: "-",
                  initials: "JP",
                  color: "bg-yellow-100"
                },
                {
                  name: "Ana Costa",
                  status: "Agendado",
                  time: "Há 25 min",
                  doctor: "Dra. Julia",
                  initials: "AC",
                  color: "bg-pink-100"
                },
                {
                  name: "Roberto Alves",
                  status: "Humano",
                  time: "Há 1 hora",
                  doctor: "-",
                  initials: "RA",
                  color: "bg-purple-100"
                },
              ].map((chat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-sky-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-slate-700 shadow-sm", chat.color)}>
                      {chat.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-none">
                        {chat.name}
                      </p>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        {chat.doctor !== "-"
                          ? `Para: ${chat.doctor}`
                          : "Atendimento Geral"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider",
                        chat.status === "Agendado"
                          ? "bg-emerald-100 text-emerald-700"
                          : chat.status === "Humano"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-sky-100 text-sky-700",
                      )}
                    >
                      {chat.status}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">{chat.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
