import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
    Search,
    FileText,
    History,
    Plus,
    Upload,
    Download,
    ExternalLink,
    Baby,
    Calendar,
    Scale,
    Ruler,
    AlertCircle,
    Stethoscope,
    Sparkles,
    ChevronRight,
    MoreVertical,
    Filter
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const patients = [
    { id: 1, name: "Pedrinho Santos", age: "5 anos", weight: "20kg", height: "110cm", lastVisit: "2024-02-15", avatar: "👦" },
    { id: 2, name: "Aninha Oliveira", age: "3 anos", weight: "15kg", height: "95cm", lastVisit: "2024-02-20", avatar: "👧" },
    { id: 3, name: "Lucas Lima", age: "7 anos", weight: "25kg", height: "125cm", lastVisit: "2024-02-10", avatar: "👦" },
];

const medicalHistory = [
    {
        id: 101,
        date: "2024-02-15",
        type: "Consulta de Rotina",
        doctor: "Dr. Carlos Eduardo",
        note: "Paciente apresenta bom desenvolvimento global. Recomentei manter a dieta rica em frutas e verduras. Vacinação em dia.",
        status: "Finalizado"
    },
    {
        id: 102,
        date: "2024-01-10",
        type: "Gripe Comum",
        doctor: "Dra. Julia Souza",
        note: "Febre baixa e tosse persistente. Prescrito antitérmico e nebulização com soro fisiológico.",
        status: "Finalizado"
    },
    {
        id: 103,
        date: "2023-11-05",
        type: "Check-up Semestral",
        doctor: "Dr. Carlos Eduardo",
        note: "Crescimento dentro da curva esperada. Audição e visão normais.",
        status: "Finalizado"
    },
];

export function MedicalRecords() {
    const [selectedPatient, setSelectedPatient] = useState(patients[0]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-full gap-8 overflow-hidden">
            {/* Sidebar - Patient List */}
            <div className="w-80 flex flex-col gap-6 h-full shrink-0">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-sky-medium transition-colors" />
                    <input
                        type="text"
                        placeholder="Buscar amiguinho..."
                        className="w-full pl-12 pr-4 py-4 bg-white rounded-[2rem] border-2 border-sky-50 shadow-lg shadow-sky-100/50 focus:border-sky-200 outline-none font-bold text-slate-700 placeholder:text-slate-300 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3">
                    {filteredPatients.map((patient) => (
                        <motion.button
                            key={patient.id}
                            whileHover={{ x: 5 }}
                            onClick={() => setSelectedPatient(patient)}
                            className={cn(
                                "w-full flex items-center gap-4 p-4 rounded-[2.5rem] transition-all border-2",
                                selectedPatient.id === patient.id
                                    ? "bg-white border-sun-yellow shadow-xl shadow-amber-100/50"
                                    : "bg-white/50 border-transparent hover:bg-white hover:border-sky-100"
                            )}
                        >
                            <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                                {patient.avatar}
                            </div>
                            <div className="text-left">
                                <p className="font-black text-slate-700 leading-tight">{patient.name}</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{patient.id.toString().padStart(4, '0')}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <Button variant="sun" className="w-full py-8 rounded-[2rem] shadow-lg shadow-amber-200 text-lg font-black gap-2">
                    <Plus className="w-6 h-6" />
                    Novo Registro
                </Button>
            </div>

            {/* Main Content - Patient Detail */}
            <div className="flex-1 overflow-y-auto pr-2 pb-8 custom-scrollbar space-y-8">
                {/* Patient Profile Header */}
                <Card className="border-none shadow-2xl shadow-sky-100/30 overflow-hidden bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-32 h-32 bg-sun-yellow/10 rounded-[3rem] flex items-center justify-center text-6xl shadow-inner border-4 border-white">
                                {selectedPatient.avatar}
                            </div>
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h2 className="text-4xl font-black text-sky-dark leading-tight">{selectedPatient.name}</h2>
                                    <div className="flex flex-wrap gap-3 mt-3">
                                        <span className="bg-sky-50 text-sky-medium px-4 py-1 rounded-full text-xs font-black border border-sky-100">ID: {selectedPatient.id.toString().padStart(4, '0')}</span>
                                        <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-black border border-emerald-100">Doador de Sorrisos ✨</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 bg-slate-50/50 rounded-3xl border border-slate-100 text-center">
                                        <Baby className="w-5 h-5 text-sky-medium mx-auto mb-2" />
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Idade</p>
                                        <p className="text-lg font-black text-sky-dark">{selectedPatient.age}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50/50 rounded-3xl border border-slate-100 text-center">
                                        <Scale className="w-5 h-5 text-sun-yellow mx-auto mb-2" />
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Peso</p>
                                        <p className="text-lg font-black text-sky-dark">{selectedPatient.weight}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50/50 rounded-3xl border border-slate-100 text-center">
                                        <Ruler className="w-5 h-5 text-rose-400 mx-auto mb-2" />
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Altura</p>
                                        <p className="text-lg font-black text-sky-dark">{selectedPatient.height}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50/50 rounded-3xl border border-slate-100 text-center">
                                        <Calendar className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Última Visita</p>
                                        <p className="text-lg font-black text-sky-dark">{format(new Date(selectedPatient.lastVisit), 'dd/MM/yy')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="rounded-2xl w-14 h-14">
                                    <ExternalLink className="w-6 h-6 text-slate-400" />
                                </Button>
                                <Button variant="secondary" size="icon" className="rounded-2xl w-14 h-14">
                                    <MoreVertical className="w-6 h-6 text-slate-400" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Timeline & Notes */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-black text-sky-dark flex items-center gap-3">
                                <History className="w-6 h-6 text-sun-yellow" />
                                Linha do Tempo Mágica
                            </h3>
                            <Button variant="ghost" className="text-sky-medium font-black gap-2 hover:bg-sky-50 rounded-full px-6">
                                <Filter className="w-4 h-4" />
                                Filtrar
                            </Button>
                        </div>

                        <div className="space-y-6 relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-sky-100 before:rounded-full">
                            {medicalHistory.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group pb-2"
                                >
                                    <div className="absolute -left-[29px] top-2 w-6 h-6 rounded-full bg-white border-4 border-sky-medium shadow-md transition-transform group-hover:scale-125 z-10" />
                                    <Card className="border-none shadow-xl shadow-sky-100/50 bg-white/80 group-hover:shadow-2xl transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{format(new Date(item.date), 'dd MMMM yyyy', { locale: ptBR })}</p>
                                                    <h4 className="text-xl font-black text-sky-dark mt-1">{item.type}</h4>
                                                </div>
                                                <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-[10px] font-black border border-emerald-100 uppercase tracking-widest">{item.status}</span>
                                            </div>
                                            <p className="text-slate-500 font-medium leading-relaxed mb-4">
                                                {item.note}
                                            </p>
                                            <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                                                <div className="w-8 h-8 rounded-full bg-sky-light/20 flex items-center justify-center text-sky-medium">
                                                    <Stethoscope className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-bold text-slate-400">Atendido por: <span className="text-sky-dark">{item.doctor}</span></span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Secondary Actions */}
                    <div className="space-y-8">
                        <Card className="border-none shadow-xl shadow-sky-100/50 bg-gradient-to-br from-sky-medium to-sky-dark p-8 overflow-hidden relative">
                            <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-white/10 rotate-12" />
                            <div className="relative z-10 space-y-6">
                                <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md">
                                    <AlertCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white leading-tight">Alergias & Alertas</h4>
                                    <p className="text-white/70 font-bold mt-2">Nenhuma alergia mágica detectada hoje! ✨</p>
                                </div>
                                <Button className="w-full bg-white text-sky-dark hover:bg-white/90 font-black rounded-2xl h-12 shadow-lg shadow-sky-900/20">
                                    Adicionar Alerta
                                </Button>
                            </div>
                        </Card>

                        <Card className="border-none shadow-xl shadow-sky-100/50 bg-white/90 backdrop-blur-sm">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xl font-black text-sky-dark">Baú de Exames</h4>
                                    <Button variant="ghost" size="icon" className="rounded-full bg-sky-50 hover:bg-sky-100">
                                        <Plus className="w-5 h-5 text-sky-medium" />
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { name: "Exame de Sangue.pdf", size: "1.2 MB", date: "15/02" },
                                        { name: "Raio-X Tórax.png", size: "3.5 MB", date: "10/01" }
                                    ].map((doc, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-sky-50">
                                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-rose-400 shadow-sm transition-transform group-hover:rotate-6">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-black text-slate-700 truncate text-sm">{doc.name}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{doc.size} • {doc.date}</p>
                                            </div>
                                            <Button variant="ghost" size="icon" className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Download className="w-4 h-4 text-sky-medium" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Button variant="outline" className="w-full border-2 border-dashed border-sky-100 hover:border-sky-200 bg-sky-50/20 hover:bg-sky-50 rounded-2xl py-8 flex flex-col gap-2 h-auto text-sky-medium font-black">
                                        <Upload className="w-6 h-6" />
                                        Soltar arquivos aqui
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
