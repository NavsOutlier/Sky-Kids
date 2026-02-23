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
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export function AISecretary() {
  const [activeTab, setActiveTab] = useState<"chats" | "config">("chats");

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Secretária IA
          </h2>
          <p className="text-slate-500">
            Gerencie as conversas e configure o comportamento da IA.
          </p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("chats")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-all",
              activeTab === "chats"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            Conversas ao Vivo
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-all",
              activeTab === "config"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            Configurações
          </button>
        </div>
      </div>

      {activeTab === "chats" ? <ChatsView /> : <ConfigView />}
    </div>
  );
}

function ChatsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0">
      <Card className="col-span-1 flex flex-col h-[600px]">
        <CardHeader className="border-b border-slate-100 pb-4">
          <CardTitle className="text-lg">Conversas Ativas</CardTitle>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Buscar paciente..."
              className="w-full pl-8 pr-4 py-2 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <User className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-0">
          {[
            {
              name: "Maria Silva",
              msg: "Gostaria de agendar...",
              time: "10:42",
              unread: true,
            },
            {
              name: "João Pedro",
              msg: "Qual o valor da consulta?",
              time: "10:15",
              unread: false,
            },
            {
              name: "Ana Costa",
              msg: "Obrigada, confirmado.",
              time: "09:30",
              unread: false,
            },
          ].map((chat, i) => (
            <div
              key={i}
              className={cn(
                "p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors",
                i === 0 ? "bg-indigo-50/50" : "",
              )}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm text-slate-900">
                  {chat.name}
                </span>
                <span className="text-xs text-slate-500">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500 truncate pr-4">
                  {chat.msg}
                </p>
                {chat.unread && (
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="col-span-2 flex flex-col h-[600px]">
        <CardHeader className="border-b border-slate-100 py-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <CardTitle className="text-base">Maria Silva</CardTitle>
              <CardDescription className="text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                IA Atendendo
              </CardDescription>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Assumir Atendimento
          </Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
          <div className="flex justify-center">
            <span className="text-xs text-slate-400 bg-white px-2 py-1 rounded-full border border-slate-100">
              Hoje
            </span>
          </div>

          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
              <p className="text-sm text-slate-700">
                Olá! Gostaria de agendar uma consulta com o Dr. Carlos para a
                próxima semana.
              </p>
              <span className="text-[10px] text-slate-400 mt-1 block">
                10:40
              </span>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm">
              <p className="text-sm">
                Olá, Maria! Claro, posso ajudar com isso. O Dr. Carlos tem
                horários disponíveis na terça-feira (14/05) às 14h ou na
                quinta-feira (16/05) às 10h. Qual horário fica melhor para você?
              </p>
              <span className="text-[10px] text-indigo-200 mt-1 block text-right">
                10:41
              </span>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
              <p className="text-sm text-slate-700">
                Terça às 14h seria ótimo.
              </p>
              <span className="text-[10px] text-slate-400 mt-1 block">
                10:42
              </span>
            </div>
          </div>
        </CardContent>
        <div className="p-4 border-t border-slate-100 bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="Digite uma mensagem para assumir..."
              className="w-full pl-4 pr-12 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled
            />
            <Button
              size="icon"
              className="absolute right-1.5 top-1.5 h-8 w-8 bg-indigo-600 hover:bg-indigo-700"
              disabled
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ConfigView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Comportamento da IA</CardTitle>
          <CardDescription>
            Defina como a IA deve se portar com os pacientes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Nome da Assistente
            </label>
            <input
              type="text"
              defaultValue="Clara"
              className="w-full p-2 border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Tom de Voz
            </label>
            <select className="w-full p-2 border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <option>Profissional e Empático</option>
              <option>Casual e Amigável</option>
              <option>Direto e Objetivo</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Prompt Base (Instruções)
            </label>
            <textarea
              rows={5}
              className="w-full p-2 border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              defaultValue="Você é a Clara, assistente virtual da Clínica Saúde. Seu objetivo é agendar consultas, tirar dúvidas sobre horários e especialidades. Seja sempre educada e empática. Nunca dê diagnósticos médicos."
            />
          </div>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
            Salvar Configurações
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Regras de Agendamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Permitir agendamento automático
                </p>
                <p className="text-xs text-slate-500">
                  IA pode confirmar horários no sistema
                </p>
              </div>
              <div className="w-10 h-5 bg-indigo-600 rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Transferir para humano
                </p>
                <p className="text-xs text-slate-500">
                  Quando não souber responder
                </p>
              </div>
              <div className="w-10 h-5 bg-indigo-600 rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métricas da IA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">
                    Taxa de Resolução (Sem Humano)
                  </span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">
                    Tempo Médio de Resposta
                  </span>
                  <span className="font-medium">2.4s</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
