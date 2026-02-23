import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
    Palette,
    Bot,
    Building2,
    Bell,
    Lock,
    Globe,
    Camera,
    Check,
    Sparkles,
    Volume2,
    Trash2,
    CloudUpload,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Settings() {
    const [activeTab, setActiveTab] = useState<"branding" | "ai" | "clinic">("branding");

    const tabs = [
        { id: "branding", label: "Branding", icon: Palette, color: "text-sky-500" },
        { id: "ai", label: "Clara Sky IA", icon: Bot, color: "text-sun-yellow" },
        { id: "clinic", label: "Dados da Clínica", icon: Building2, color: "text-emerald-400" },
    ];

    return (
        <div className="space-y-8 h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-4xl font-black tracking-tight text-sky-dark">
                        Configurações <span className="text-sun-yellow">Globais</span> ⚙️
                    </h2>
                    <p className="text-slate-500 font-bold text-lg">
                        Personalize a magia do seu ambiente.
                    </p>
                </motion.div>

                <div className="flex bg-white p-1.5 rounded-[2rem] w-fit shadow-xl shadow-sky-100 border-2 border-sky-50">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={cn(
                                    "flex items-center gap-2 px-6 py-2.5 text-sm font-black rounded-full transition-all duration-300",
                                    isActive
                                        ? "bg-sky-medium text-white shadow-md shadow-sky-200"
                                        : "text-slate-400 hover:text-sky-dark hover:bg-sky-50"
                                )}
                            >
                                <Icon className={cn("w-4 h-4", isActive ? "text-white" : tab.color)} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 pb-8 custom-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        {activeTab === "branding" && <BrandingSettings />}
                        {activeTab === "ai" && <AISettings />}
                        {activeTab === "clinic" && <ClinicSettings />}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-sky-100 flex justify-end gap-3 bg-[#f0f9ff]/80 backdrop-blur-md sticky bottom-0 z-20">
                <Button variant="outline" className="px-10 h-12 rounded-full font-black text-slate-400">
                    Descartar
                </Button>
                <Button variant="sun" className="px-10 h-12 rounded-full font-black shadow-lg shadow-amber-200">
                    Salvar Alterações ✨
                </Button>
            </div>
        </div>
    );
}

function BrandingSettings() {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden bg-white/90 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-xl font-black text-sky-dark flex items-center gap-2">
                        <Palette className="w-5 h-5 text-sky-medium" />
                        Paleta de Cores Mágica
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="space-y-4">
                        <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Cor Principal (Céu)</label>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-sky-medium shadow-lg shadow-sky-100 border-4 border-white" />
                            <input type="text" value="#79C2D9" className="flex-1 px-4 py-3 border-2 border-sky-100 rounded-2xl font-black text-slate-700" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Cor Secundária (Sol)</label>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-sun-yellow shadow-lg shadow-amber-100 border-4 border-white" />
                            <input type="text" value="#FFD93D" className="flex-1 px-4 py-3 border-2 border-sky-100 rounded-2xl font-black text-slate-700" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden bg-white/90 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-xl font-black text-sky-dark flex items-center gap-2">
                        <Camera className="w-5 h-5 text-sky-medium" />
                        Identidade Visual
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="p-8 border-4 border-dashed border-sky-100 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:bg-sky-50 transition-colors group">
                        <div className="w-20 h-20 bg-sky-light/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CloudUpload className="w-10 h-10 text-sky-medium" />
                        </div>
                        <div className="text-center">
                            <p className="font-black text-sky-dark">Clique para subir seu Logo</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">PNG ou SVG (Máx 2MB)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-2xl border-2 border-sky-100">
                        <div className="p-2 bg-white rounded-xl shadow-sm">
                            <Sparkles className="w-5 h-5 text-sun-yellow" />
                        </div>
                        <p className="text-xs font-black text-sky-dark italic">O logo aparecerá no topo da barra lateral e em todos os relatórios.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function AISettings() {
    return (
        <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden bg-white/90 backdrop-blur-sm max-w-3xl mx-auto">
            <CardHeader className="bg-sky-50/50 border-b border-sky-100 pb-8 px-8">
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-sun-yellow rounded-[2rem] flex items-center justify-center shadow-lg shadow-amber-100 relative overflow-hidden group">
                        <Bot className="w-12 h-12 text-slate-700 relative z-10" />
                        <div className="absolute inset-0 bg-white/20 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                    </div>
                    <div>
                        <CardTitle className="text-3xl font-black text-sky-dark">Clara Sky</CardTitle>
                        <p className="text-slate-400 font-bold">Configure a personalidade da sua secretária IA.</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-8 space-y-10">
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <label className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <Volume2 className="w-4 h-4" /> Tom de Voz
                        </label>
                        <span className="text-sky-medium font-black italic">Mágico & Amigável</span>
                    </div>
                    <input type="range" className="w-full accent-sky-medium h-3 rounded-full bg-sky-50" min="0" max="100" defaultValue="80" />
                    <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase tracking-tighter">
                        <span>Corporativo</span>
                        <span>Mágico</span>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                        <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Estilo de Resposta</label>
                        <select className="w-full p-4 border-2 border-sky-100 rounded-2xl font-black text-slate-700 appearance-none bg-white">
                            <option>Aventureira (Storytelling)</option>
                            <option>Técnica & Precisa</option>
                            <option>Sempre Alegre</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Velocidade da Magia</label>
                        <select className="w-full p-4 border-2 border-sky-100 rounded-2xl font-black text-slate-700 appearance-none bg-white">
                            <option>Instantânea</option>
                            <option>Cadenciada (Humana)</option>
                        </select>
                    </div>
                </div>

                <div className="p-6 bg-sun-yellow/5 rounded-3xl border-2 border-sun-yellow/20 flex gap-4">
                    <Sparkles className="w-6 h-6 text-sun-yellow shrink-0" />
                    <div>
                        <p className="font-black text-sky-dark text-sm">Preview da Bio da Clara:</p>
                        <p className="text-slate-500 font-medium text-sm mt-1 italic">
                            "Olá! Sou a Clara Sky, sua assistente mágica. Estou aqui para cuidar dos nossos amiguinhos e garantir que cada visita seja uma festa!"
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function ClinicSettings() {
    return (
        <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden bg-white/90 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-10">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Nome da Clínica</label>
                            <input type="text" value="Sky Kids Clínica Pediátrica" className="w-full p-4 border-2 border-sky-100 rounded-2xl font-black text-slate-700" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-black text-slate-500 uppercase tracking-widest">CNPJ</label>
                            <input type="text" value="12.345.678/0001-99" className="w-full p-4 border-2 border-sky-100 rounded-2xl font-black text-slate-700" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Telefone de Contato</label>
                            <input type="text" value="(11) 98765-4321" className="w-full p-4 border-2 border-sky-100 rounded-2xl font-black text-slate-700" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Endereço Mágico</label>
                            <textarea className="w-full p-4 border-2 border-sky-100 rounded-2xl font-black text-slate-700 h-[210px]" defaultValue="Rua das Nuves, 123 - Bairro do Sol, São Paulo - SP" />
                        </div>
                    </div>
                </div>

                <div className="mt-10 p-6 bg-rose-50 rounded-3xl border-2 border-rose-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-2xl text-rose-500 shadow-sm">
                            <Trash2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-black text-slate-700">Zona de Perigo</p>
                            <p className="text-xs font-bold text-slate-400">Apagar todos os dados da clínica permanentemente.</p>
                        </div>
                    </div>
                    <Button variant="outline" className="text-rose-400 hover:bg-rose-100 border-rose-200">Apagar Clínica</Button>
                </div>
            </CardContent>
        </Card>
    );
}
