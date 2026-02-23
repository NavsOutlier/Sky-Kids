import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
    Users,
    Plus,
    Star,
    Clock,
    Settings,
    ShieldCheck,
    Stethoscope,
    Heart,
    Sparkles,
    ChevronRight,
    Smile,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

const doctors = [
    {
        id: 1,
        name: "Dr. Carlos Eduardo",
        specialty: "Super Pediatria",
        crm: "CRM 12345-SP",
        status: "Atendendo",
        rating: 5.0,
        avatarColor: "bg-blue-100",
        icon: Stethoscope,
        tags: ["Favorito", "Mestre"],
    },
    {
        id: 2,
        name: "Dra. Julia Souza",
        specialty: "Fada dos Dentes",
        crm: "CRO 98765-SP",
        status: "Em Pausa",
        rating: 4.9,
        avatarColor: "bg-yellow-100",
        icon: Smile,
        tags: ["Gentil"],
    },
    {
        id: 3,
        name: "Dr. Roberto Silva",
        specialty: "Mestre dos Ossos",
        crm: "CRM 54321-SP",
        status: "Atendendo",
        rating: 5.0,
        avatarColor: "bg-purple-100",
        icon: Heart,
        tags: ["Calmo"],
    },
    {
        id: 4,
        name: "Dra. Patrícia Lima",
        specialty: "Dra. Coraçãozinho",
        crm: "CRM 24680-SP",
        status: "Atendendo",
        rating: 5.0,
        avatarColor: "bg-rose-100",
        icon: Heart,
        tags: ["Amorosa"],
    },
    {
        id: 5,
        name: "Dr. André Santos",
        specialty: "Herói da Visão",
        crm: "CRM 13579-SP",
        status: "Atendendo",
        rating: 4.8,
        avatarColor: "bg-emerald-100",
        icon: Star,
        tags: ["Brincalhão"],
    },
    {
        id: 6,
        name: "Dra. Fernanda Rocha",
        specialty: "Mestra das Vitaminas",
        crm: "CRM 97531-SP",
        status: "Em Pausa",
        rating: 4.9,
        avatarColor: "bg-orange-100",
        icon: Sparkles,
        tags: ["Atenciosa"],
    },
    {
        id: 7,
        name: "Dr. Bruno Menezes",
        specialty: "Corretor de Passinhos",
        crm: "CRM 86420-SP",
        status: "Atendendo",
        rating: 4.7,
        avatarColor: "bg-indigo-100",
        icon: Stethoscope,
        tags: ["Paciente"],
    },
    {
        id: 8,
        name: "Dra. Camila Alves",
        specialty: "Protetora da Pele",
        crm: "CRM 10293-SP",
        status: "Atendendo",
        rating: 5.0,
        avatarColor: "bg-pink-100",
        icon: Sparkles,
        tags: ["Doce"],
    },
    {
        id: 9,
        name: "Dr. Tiago Oliveira",
        specialty: "Mestre da Audição",
        crm: "CRM 45678-SP",
        status: "Em Pausa",
        rating: 4.6,
        avatarColor: "bg-teal-100",
        icon: Smile,
        tags: ["Atento"],
    },
    {
        id: 10,
        name: "Dra. Beatriz Costa",
        specialty: "Fada da Nutrição",
        crm: "CRN 78901-SP",
        status: "Atendendo",
        rating: 4.9,
        avatarColor: "bg-lime-100",
        icon: Star,
        tags: ["Criativa"],
    },
];

export function DoctorsManagement() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-4xl font-black tracking-tight text-sky-dark">
                        Nossos <span className="text-sun-yellow">Heróis</span> 🦸‍♂️
                    </h2>
                    <p className="text-slate-500 font-bold text-lg">
                        O time que transforma visitas em aventuras incríveis.
                    </p>
                </motion.div>
                <Button variant="sun" className="text-lg py-7 px-8 shadow-lg shadow-amber-200 group">
                    <Plus className="w-6 h-6 mr-2 group-hover:rotate-90 transition-transform" />
                    Convidar Novo Herói
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doc, i) => (
                    <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="border-none shadow-xl shadow-sky-100/50 overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                            <div className={cn("h-2 w-full", doc.status === "Atendendo" ? "bg-emerald-400" : "bg-amber-400")} />
                            <CardContent className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500", doc.avatarColor)}>
                                        <doc.icon className="w-10 h-10 text-slate-600" />
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                                            <Star className="w-3.5 h-3.5 text-sun-yellow fill-sun-yellow" />
                                            <span className="text-xs font-black text-amber-700">{doc.rating}</span>
                                        </div>
                                        <span className={cn(
                                            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border",
                                            doc.status === "Atendendo"
                                                ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                                : "bg-amber-50 text-amber-600 border-amber-100"
                                        )}>
                                            {doc.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-1 mb-6">
                                    <h3 className="text-2xl font-black text-sky-dark group-hover:text-sky-medium transition-colors">
                                        {doc.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-400 font-bold">
                                        <Sparkles className="w-4 h-4 text-sun-yellow" />
                                        <span>{doc.specialty}</span>
                                    </div>
                                    <p className="text-xs font-medium text-slate-300 italic">{doc.crm}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {doc.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black text-sky-medium bg-sky-50 px-4 py-1 rounded-full border border-sky-100">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="outline" className="w-full rounded-2xl h-12 flex gap-2">
                                        <Clock className="w-4 h-4" />
                                        Agenda
                                    </Button>
                                    <Button variant="secondary" className="w-full rounded-2xl h-12 flex gap-2">
                                        <Settings className="w-4 h-4" />
                                        Ajustes
                                    </Button>
                                </div>
                            </CardContent>

                            <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between group-hover:bg-sky-50 transition-colors">
                                <span className="text-xs font-bold text-slate-400">Total de atendimentos: <span className="text-sky-dark">1.2k+</span></span>
                                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-sky-medium group-hover:translate-x-1 transition-all" />
                            </div>
                        </Card>
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: doctors.length * 0.1 }}
                >
                    <button className="w-full h-full min-h-[400px] border-4 border-dashed border-sky-100 rounded-[3rem] flex flex-col items-center justify-center p-8 group hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-500">
                        <div className="w-20 h-20 bg-sky-100 rounded-[2.5rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-sky-200 transition-all">
                            <Plus className="w-10 h-10 text-sky-medium" />
                        </div>
                        <h4 className="text-xl font-black text-sky-dark mb-2">Novo Membro</h4>
                        <p className="text-center text-slate-400 font-bold max-w-[200px]">
                            Expanda seu time de heróis mágicos.
                        </p>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
