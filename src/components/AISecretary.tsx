import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Bot,
  Settings,
  MessageSquare,
  Activity,
  User,
  Send,
  Star,
  Sparkles,
  Cloud,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function AISecretary() {
  const [activeTab, setActiveTab] = useState<"chats" | "config">("chats");

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-sky-dark">
            Secretária <span className="text-sun-yellow">IA</span> ✨
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Sua assistente mágica está cuidando de tudo.
          </p>
        </div>
        <div className="flex bg-white p-2 rounded-[2rem] w-fit shadow-lg shadow-sky-100 border-2 border-sky-50">
          <button
            onClick={() => setActiveTab("chats")}
            className={cn(
              "px-6 py-2.5 text-sm font-black rounded-full transition-all duration-300",
              activeTab === "chats"
                ? "bg-sky-medium text-white shadow-md shadow-sky-200"
                : "text-slate-400 hover:text-sky-dark hover:bg-sky-50",
            )}
          >
            Conversas Ativas
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={cn(
              "px-6 py-2.5 text-sm font-black rounded-full transition-all duration-300",
              activeTab === "config"
                ? "bg-sun-yellow text-slate-800 shadow-md shadow-amber-200"
                : "text-slate-400 hover:text-sky-dark hover:bg-sky-50",
            )}
          >
            Configurar Magia
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="flex-1 min-h-0"
        >
          {activeTab === "chats" ? <ChatsView /> : <ConfigView />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ChatsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full min-h-[600px]">
      <Card className="col-span-1 flex flex-col border-none shadow-xl shadow-sky-100/50 bg-white/80 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-sky-50/50 pb-6 rounded-b-[2.5rem]">
          <CardTitle className="text-xl font-black text-sky-dark flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            Bate-papo
          </CardTitle>
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Encontrar amiguinho..."
              className="w-full pl-11 pr-4 py-3 text-sm border-2 border-sky-100 rounded-full focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all font-bold placeholder:text-slate-300"
            />
            <User className="absolute left-4 top-3.5 h-5 w-5 text-sky-light" />
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 mt-4">
          {[
            { name: "Maria Silva", msg: "Gostaria de agendar...", time: "10:42", unread: true, initials: "MS", color: "bg-blue-100" },
            { name: "João Pedro", msg: "Qual o valor da consulta?", time: "10:15", unread: false, initials: "JP", color: "bg-yellow-100" },
            { name: "Ana Costa", msg: "Obrigada, confirmado.", time: "09:30", unread: false, initials: "AC", color: "bg-pink-100" },
            { name: "Lucas Ferreira", msg: "Pode ser na terça?", time: "Ontem", unread: false, initials: "LF", color: "bg-indigo-100" },
            { name: "Carla Souza", msg: "Obrigada Clara!", time: "Ontem", unread: false, initials: "CS", color: "bg-emerald-100" },
            { name: "Bia Ramos", msg: "Documento enviado.", time: "2 dias", unread: false, initials: "BR", color: "bg-orange-100" },
            { name: "Mário Lima", msg: "Como chego aí?", time: "3 dias", unread: false, initials: "ML", color: "bg-purple-100" },
            { name: "Juliana Mércia", msg: "Consulta cancelada.", time: "4 dias", unread: false, initials: "JM", color: "bg-rose-100" },
            { name: "Fernanda Luz", msg: "Pode me ajudar?", time: "Uma semana", unread: false, initials: "FL", color: "bg-teal-100" },
            { name: "Ricardo Paz", msg: "Confirmado!", time: "10/02", unread: false, initials: "RP", color: "bg-lime-100" },
          ].map((chat, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5 }}
              className={cn(
                "p-4 rounded-[1.5rem] cursor-pointer transition-all duration-300 border-2",
                i === 0
                  ? "bg-sky-50 border-sky-100 shadow-sm"
                  : "border-transparent hover:bg-slate-50"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-slate-700 shadow-sm", chat.color)}>
                  {chat.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-black text-sm text-slate-800 truncate">
                      {chat.name}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-slate-500 truncate pr-4 italic">
                      {chat.msg}
                    </p>
                    {chat.unread && (
                      <span className="w-2.5 h-2.5 rounded-full bg-sun-yellow shadow-sm animate-pulse"></span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card className="col-span-2 flex flex-col border-none shadow-xl shadow-sky-100/50 bg-white/90 overflow-hidden relative">
        {/* Background Clouds decoration */}
        <Cloud className="absolute top-10 right-10 w-32 h-32 text-sky-50 opacity-40 pointer-events-none" />

        <CardHeader className="border-b border-sky-50 py-6 flex flex-row items-center justify-between px-8 relative z-10 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shadow-md shadow-sky-50">
              <User className="w-7 h-7 text-sky-dark" />
            </div>
            <div>
              <CardTitle className="text-xl font-black text-slate-800">Maria Silva</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-200"></span>
                <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">
                  IA Atendendo
                </span>
              </div>
            </div>
          </div>
          <Button variant="sun" size="sm" className="hidden sm:flex">
            Intervir Agora
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30 relative z-10">
          <div className="flex justify-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/80 px-4 py-1.5 rounded-full shadow-sm">
              Hoje • 10:40
            </span>
          </div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4 max-w-[85%]">
            <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex-shrink-0 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            <div className="bg-white border-2 border-sky-50 p-4 rounded-[2rem] rounded-tl-sm shadow-sm">
              <p className="text-sm font-bold text-slate-700 leading-relaxed text-balance">
                Olá! Gostaria de agendar uma consulta com o Dr. Carlos para a
                próxima semana. 👧
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4 max-w-[85%] ml-auto flex-row-reverse">
            <div className="w-10 h-10 rounded-2xl bg-sun-yellow shadow-md flex items-center justify-center flex-shrink-0 animate-bounce-slow">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="bg-sky-medium text-white p-5 rounded-[2rem] rounded-tr-sm shadow-lg shadow-sky-100 relative">
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-sun-yellow fill-sun-yellow drop-shadow-sm" />
              <p className="text-sm font-black leading-relaxed">
                Olá, Maria! Com certeza, será um prazer receber vocês! ✨ O Dr. Carlos tem
                os seguintes horários mágicos disponíveis:
                <br /><br />
                📅 Terça-feira (14/05) às 14h
                <br />
                📅 Quinta-feira (16/05) às 10h
                <br /><br />
                Qual desses momentos fica melhor para vocês?
              </p>
            </div>
          </motion.div>
        </CardContent>

        <div className="p-6 border-t border-sky-50 bg-white/80 backdrop-blur-sm relative z-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Conversa desativada (IA no comando)..."
              className="w-full pl-6 pr-14 py-4 text-sm border-2 border-slate-100 rounded-full bg-slate-50 italic font-medium cursor-not-allowed opacity-50"
              disabled
            />
            <Button
              size="icon"
              className="absolute right-2 top-2 h-10 w-10 bg-slate-200"
              disabled
            >
              <Send className="w-5 h-5 text-slate-400" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ConfigView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <Card className="border-none shadow-xl shadow-sky-100/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-black text-sky-dark flex items-center gap-3">
            <Bot className="w-8 h-8 text-sun-yellow" />
            Personalidade
          </CardTitle>
          <CardDescription className="text-slate-500 font-bold">
            Dê vida e uma voz amigável para sua IA.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
              Nome da Estrela
            </label>
            <input
              type="text"
              defaultValue="Clara Sky"
              className="w-full p-4 border-2 border-sky-50 rounded-2xl font-bold bg-slate-50/30 focus:bg-white focus:border-sky-medium focus:outline-none transition-all shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
              Estilo de Conversa
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["Super Amiga", "Educativa", "Divertida", "Carinhosa"].map(tone => (
                <button
                  key={tone}
                  className={cn(
                    "p-3 rounded-2xl border-2 font-black text-xs transition-all",
                    tone === "Super Amiga" ? "bg-sky-50 border-sky-medium text-sky-dark" : "border-slate-100 text-slate-400 hover:border-sky-100"
                  )}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-1">
              Instruções Mágicas
            </label>
            <textarea
              rows={4}
              className="w-full p-4 border-2 border-sky-50 rounded-[2rem] font-bold bg-slate-50/30 focus:bg-white focus:border-sky-medium focus:outline-none transition-all shadow-sm resize-none"
              defaultValue="Você é a Clara Sky, a guardiã oficial da Clínica Sky Kids. Seu dever é espalhar alegria e organização! Agende consultas com carinho, explique os procedimentos de forma lúdica e sempre termine com um brilho."
            />
          </div>
          <Button variant="sun" className="w-full text-lg py-7 mt-4">
            Brilhar no Mundo! ✨
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden">
          <div className="h-2 bg-sun-yellow" />
          <CardHeader>
            <CardTitle className="text-xl font-black text-sky-dark">Regras de Ouro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-[2rem] bg-sky-50/50 border border-sky-100">
              <div className="pr-4">
                <p className="text-sm font-black text-slate-800">
                  Magia Automática
                </p>
                <p className="text-[10px] font-bold text-sky-dark/70 uppercase pt-1">
                  IA agenda consultas sozinha
                </p>
              </div>
              <div className="w-14 h-8 bg-sky-medium rounded-full relative cursor-pointer ring-4 ring-sky-100">
                <div className="w-6 h-6 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-[2rem] bg-emerald-50/50 border border-emerald-100">
              <div className="pr-4">
                <p className="text-sm font-black text-slate-800">
                  Pedir Ajuda Humana
                </p>
                <p className="text-[10px] font-bold text-emerald-600/70 uppercase pt-1">
                  IA chama você em dúvidas
                </p>
              </div>
              <div className="w-14 h-8 bg-emerald-400 rounded-full relative cursor-pointer ring-4 ring-emerald-100">
                <div className="w-6 h-6 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl shadow-sky-100/50">
          <CardHeader>
            <CardTitle className="text-xl font-black text-sky-dark flex items-center gap-2">
              <Activity className="w-6 h-6 text-rose-400" />
              Poder da Estrela
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="flex justify-between items-end mb-2 px-1">
                <span className="text-xs font-black text-slate-500 uppercase">Resolução Mágica</span>
                <span className="text-xl font-black text-sky-dark">92%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1, type: "spring" }}
                  className="bg-gradient-to-r from-sky-medium to-sky-light h-full rounded-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-sky-100/30 rounded-3xl text-center">
                <div className="text-xs font-black text-sky-dark/60 uppercase">Impacto</div>
                <div className="text-2xl font-black text-sky-dark">100+</div>
                <div className="text-[10px] font-bold text-sky-medium uppercase">Conversas</div>
              </div>
              <div className="p-4 bg-sun-yellow/10 rounded-3xl text-center">
                <div className="text-xs font-black text-sun-yellow uppercase">Aclamação</div>
                <div className="text-2xl font-black text-amber-600">4.9/5</div>
                <div className="text-[10px] font-bold text-amber-400 uppercase">Estrelinhas</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
