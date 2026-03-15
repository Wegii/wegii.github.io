'use client';
import React from 'react';
import { 
  Github, Linkedin, Mail, Terminal, MapPin, Cpu, BookOpen, 
  Mountain, Music, FileText, Code, GraduationCap, ScrollText,
  Binary, Layers, ExternalLink, Zap
} from 'lucide-react';

// --- Data Types & Mock Data ---
interface Publication {
  title: string;
  venue: string;
  year: string;
  type: string;
  links: { paper?: string; arxiv?: string; github?: string; };
}

interface Thesis {
  degree: string;
  title: string;
  focus: string;
  tag: string;
}

const SITE_DATA = {
  profile: {
    name: "Peter Wegmann",
    role: "Quantum Systems & QEC Researcher",
    location: "Munich, Germany",
    bio: "Researcher at TUM specializing in Fault-Tolerant Quantum Compilers and Silicon Nitride Photonics. Bridging the gap between abstract QEC protocols and physical chiplet architectures.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter&backgroundColor=0a0a0a",
  },
  stats: [
    { label: "Publications", value: "4", icon: <FileText size={18}/>, color: "from-blue-500/20" },
    { label: "Projects", value: "24+", icon: <Binary size={18}/>, color: "from-purple-500/20" }
  ],
  expertise: [
    { category: "Quantum Error Correction", skills: ["Surface Codes", "Lattice Surgery", "tQEC", "Decoders"], color: "text-blue-400", bg: "bg-blue-400/5" },
    { category: "Quantum Compilers", skills: ["Mapping", "Photonic Synthesis", "LOCI IR"], color: "text-purple-400", bg: "bg-purple-400/5" },
    { category: "HPC & Systems", skills: ["CUDA", "MPI/OpenMP", "GDSII Mask"], color: "text-emerald-400", bg: "bg-emerald-400/5" },
  ],
  publications: [
    { title: "Crumbling Mountains: Pre-failure analysis", venue: "EGU 2025", year: "2025", type: "Presentation", links: { arxiv: "#" } },
    { title: "Efficient Silicon Nitride Waveguide Crossings", venue: "Optics Letters", year: "2023", type: "Journal", links: { github: "#", paper: "#" } },
  ],
  theses: [
    { degree: "Master's", title: "Scalable Fault-Tolerant Compiler", focus: "QEC, Lattice Surgery", tag: "Active" },
    { degree: "Bachelor's", title: "Photonic Quantum Compiler", focus: "Hardware Aware Mapping", tag: "Archive" }
  ]
};

// --- Sub-Components for the Bento Grid ---

const BentoCard = ({ children, className = "", spotlight = false }) => (
  <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/60 group ${className}`}>
    {spotlight && (
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
    )}
    <div className="relative z-10 h-full p-8 md:p-10">
      {children}
    </div>
  </div>
);

export default function App() {
  const d = SITE_DATA;

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-200 p-6 md:p-12 font-sans selection:bg-blue-500/30">
      {/* BENTO GRID CONFIGURATION:
         - 4 Column layout for desktop (md:grid-cols-4)
         - Auto rows with 1.5rem gap
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
        
        {/* 1. Primary Identity Card (Large 2x2 Span) */}
        <BentoCard spotlight className="md:col-span-2 md:row-span-2 flex flex-col justify-between border-blue-500/20">
          <div>
            <div className="flex justify-between items-start mb-10">
              <img src={d.profile.avatar} className="w-24 h-24 rounded-3xl bg-zinc-800 p-1 border border-white/5" alt="Profile" />
              <div className="flex gap-2">
                 {['Github', 'Linkedin', 'Mail'].map(s => (
                   <div key={s} className="p-3 bg-white/5 rounded-2xl hover:bg-white hover:text-black transition-all cursor-pointer">
                     {s === 'Github' ? <Github size={20}/> : s === 'Linkedin' ? <Linkedin size={20}/> : <Mail size={20}/>}
                   </div>
                 ))}
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-white mb-2 leading-none">
              {d.profile.name}
            </h1>
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm mb-6 uppercase tracking-widest">
              <Zap size={14} fill="currentColor" /> {d.profile.role}
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              {d.profile.bio}
            </p>
          </div>
          <div className="pt-8 border-t border-white/5 flex items-center justify-between text-zinc-500 text-xs font-mono">
            <div className="flex items-center gap-2"><MapPin size={14}/> {d.profile.location}</div>
            <div className="flex gap-4"><Mountain size={18}/> <Music size={18}/></div>
          </div>
        </BentoCard>

        {/* 2. Stats Section (Individual Small Cards) */}
        {d.stats.map((stat, i) => (
          <BentoCard key={i} className="flex flex-col items-center justify-center text-center">
            <div className={`mb-4 p-4 rounded-3xl bg-gradient-to-br ${stat.color} to-transparent border border-white/5 text-white`}>
              {stat.icon}
            </div>
            <div className="text-4xl font-bold text-white tabular-nums">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-500 mt-2">{stat.label}</div>
          </BentoCard>
        ))}

        {/* 3. Expertise Stack (Wide Card 2x1) */}
        <BentoCard className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="text-blue-500" size={20} />
            <h2 className="text-xl font-bold text-white">System Stack</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {d.expertise.map((exp, i) => (
              <div key={i} className="space-y-3">
                <span className={`text-[10px] font-black uppercase tracking-widest ${exp.color}`}>{exp.category}</span>
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map(s => (
                    <span key={s} className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-zinc-400 border border-white/5 whitespace-nowrap">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 4. Publications (Long Horizontal Span 4x1) */}
        <BentoCard className="md:col-span-4">
          <div className="flex justify-between items-center mb-8">
             <div className="flex items-center gap-3">
                <BookOpen className="text-purple-500" size={20} />
                <h2 className="text-xl font-bold text-white">Selected Publications</h2>
             </div>
             <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden md:block">Research // Archivum</div>
          </div>
          <div className="space-y-4">
            {d.publications.map((pub, i) => (
              <div key={i} className="group/item flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[9px] font-black bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded uppercase tracking-tighter">{pub.type}</span>
                    <span className="text-xs font-bold text-purple-400 font-mono">{pub.venue}</span>
                  </div>
                  <h3 className="text-white font-semibold group-hover/item:text-blue-400 transition-colors">{pub.title}</h3>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  {Object.keys(pub.links).map(link => (
                    <div key={link} className="p-2 bg-black/40 rounded-lg text-zinc-500 hover:text-white transition-colors cursor-pointer border border-white/5">
                      <ExternalLink size={14} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 5. Theses (Tall Vertical Span 1x2) */}
        <BentoCard className="md:row-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="text-emerald-500" size={20} />
            <h2 className="text-xl font-bold text-white">Academic Deep Dive</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {d.theses.map((t, i) => (
              <div key={i} className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded mb-2 inline-block ${t.tag === 'Active' ? 'bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-500'}`}>{t.tag}</span>
                <h4 className="text-white font-bold leading-tight mb-2">{t.title}</h4>
                <p className="text-xs text-zinc-500 italic">{t.focus}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 6. Contact/CTA (Small square) */}
        <BentoCard className="flex flex-col justify-center items-center bg-blue-600/10 border-blue-500/30 group/cta cursor-pointer">
           <Terminal className="text-blue-400 mb-4 group-hover/cta:scale-110 transition-transform" size={32} />
           <span className="text-white font-bold text-sm">Open Terminal</span>
           <span className="text-[9px] text-blue-400/60 font-mono mt-1">v2.0_stable</span>
        </BentoCard>

        <BentoCard className="flex flex-col justify-center items-center">
           <GraduationCap className="text-zinc-500 mb-4" size={32} />
           <span className="text-white font-bold text-sm">Resume.pdf</span>
           <FileText className="text-zinc-700 mt-2" size={16} />
        </BentoCard>

      </div>

      <footer className="mt-20 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
           <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" /> 
           Last Sync: {new Date().toLocaleDateString()}
        </div>
      </footer>
    </main>
  );
}