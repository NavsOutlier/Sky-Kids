import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  Wallet,
  TrendingUp,
  PieChart,
  Target,
  Sparkles,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

const revenueData = [
  { name: "Jan", revenue: 45000, expenses: 28000 },
  { name: "Fev", revenue: 52000, expenses: 30000 },
  { name: "Mar", revenue: 48000, expenses: 29000 },
  { name: "Abr", revenue: 61000, expenses: 32000 },
  { name: "Mai", revenue: 59000, expenses: 31000 },
  { name: "Jun", revenue: 68000, expenses: 34000 },
];

export function Finance() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-black tracking-tight text-sky-dark">
            Cofre <span className="text-sun-yellow">Mágico</span> 💰
          </h2>
          <p className="text-slate-500 font-bold text-lg">
            Acompanhe o crescimento e a saúde da clínica.
          </p>
        </motion.div>

        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg shadow-sky-100 border-2 border-sky-50">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          <span className="font-black text-slate-700 text-sm italic">Faturamento em alta!</span>
          <Sparkles className="w-4 h-4 text-sun-yellow animate-pulse" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Faturamento Mensal",
            value: "R$ 68.000",
            trend: "+15.2%",
            positive: true,
            icon: DollarSign,
            color: "text-emerald-500",
            bg: "bg-emerald-50"
          },
          {
            title: "Despesas Totais",
            value: "R$ 34.000",
            trend: "+9.6%",
            positive: false,
            icon: CreditCard,
            color: "text-rose-400",
            bg: "bg-rose-50"
          },
          {
            title: "Lucro Brilhante",
            value: "R$ 34.000",
            trend: "+21.4%",
            positive: true,
            icon: Wallet,
            color: "text-sun-yellow",
            bg: "bg-amber-50"
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden group">
              <div className={cn("h-1.5 w-full", stat.positive ? "bg-emerald-400" : "bg-rose-400")} />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">
                  {stat.title}
                </CardTitle>
                <div className={cn("p-2 rounded-2xl transition-transform group-hover:scale-110 group-hover:rotate-6", stat.bg)}>
                  <stat.icon className={cn("h-5 w-5", stat.color)} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black text-slate-800">{stat.value}</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <div className={cn(
                    "flex items-center text-xs font-black px-2 py-0.5 rounded-full",
                    stat.positive ? "text-emerald-600 bg-emerald-100/50" : "text-rose-500 bg-rose-100/50"
                  )}>
                    {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                    {stat.trend}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 italic">vês anterior</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="col-span-2 border-none shadow-xl shadow-sky-100/50 bg-white/80 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-black text-sky-dark flex items-center gap-2">
              <Target className="w-6 h-6 text-sky-medium" />
              Fluxo de Sonhos Realizados
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[350px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#79C2D9" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#79C2D9" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFD93D" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#FFD93D" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="#E2E8F0" />
                  <XAxis
                    dataKey="name"
                    stroke="#94A3B8"
                    fontSize={12}
                    fontWeight="bold"
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke="#94A3B8"
                    fontSize={12}
                    fontWeight="bold"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `R$${value / 1000}k`}
                    dx={-10}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "1.5rem",
                      border: "2px solid #F0F9FF",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.05)",
                      padding: "1rem",
                      fontWeight: "bold"
                    }}
                    cursor={{ stroke: '#A3D8F4', strokeWidth: 2, strokeDasharray: '5 5' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    name="Receita"
                    stroke="#79C2D9"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    animationBegin={300}
                    animationDuration={1500}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    name="Despesas"
                    stroke="#FFD93D"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorExpenses)"
                    animationBegin={500}
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl shadow-sky-100/50 bg-sky-dark text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-light/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <CardHeader className="relative z-10">
            <CardTitle className="text-xl font-black flex items-center gap-2">
              <PieChart className="w-6 h-6 text-sun-yellow" />
              Time de Ouro
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-8 mt-2">
              {[
                { name: "Dr. Carlos (Pediatra)", value: 28000, percent: 41, color: "bg-sun-yellow" },
                { name: "Dra. Julia (Odonto)", value: 22000, percent: 32, color: "bg-sky-light" },
                { name: "Dr. Roberto (Psico)", value: 18000, percent: 27, color: "bg-rose-300" },
              ].map((doctor, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-black text-sm opacity-90 truncate pr-2">
                      {doctor.name}
                    </span>
                    <span className="text-xs font-bold whitespace-nowrap">
                      R$ {doctor.value.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${doctor.percent}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={cn("h-full rounded-full shadow-sm", doctor.color)}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -5 }}
              className="mt-10 p-5 bg-white/10 rounded-[2rem] border border-white/10 text-center cursor-pointer hover:bg-white/20 transition-all"
            >
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">
                Total Acumulado
              </div>
              <div className="text-3xl font-black">R$ 412.500</div>
              <div className="text-xs font-bold text-sun-yellow mt-1 italic">Recorde da clínica! 🏆</div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
