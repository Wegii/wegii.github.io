'use client';
import React from 'react';
import { 
  Github, Linkedin, Mail, MapPin, BookOpen, 
  Mountain, Music, FileText, GraduationCap, ScrollText,
  Binary, Layers, ExternalLink, Zap, Milestone, Globe
} from 'lucide-react';

// --- Interfaces for TypeScript type safety ---
interface Publication {
  title: string;
  venue: string;
  year: string;
  type: string;
  links: { pdf?: string; arxiv?: string; github?: string; paper?: string; };
}

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization: string;
}

interface Thesis {
  type: string;
  title: string;
  focus: string;
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
}

const SITE_DATA = {
  profile: {
    name: "Peter Wegmann",
    role: "PhD Student @ Technical University of Munich",
    location: "Munich, Germany",
    bio: "PhD at TUM specializing in Fault-Tolerant Quantum Compilers and bridging the gap between abstract QEC protocols and physical architectures.",
    avatar: "/cover_image.jpeg",
  },
  publications: [
    { 
      title: "How ice apron loss and permafrost degradation promote the Platteikogel rock slide: A thermo-mechanical reconstruction", 
      venue: "EGUsphere 2025", 
      year: "2025", 
      type: "Preprint", 
      links: {pdf: "#", github: "https://github.com/Wegii/rock-temperature-cryogrid", paper: "https://egusphere.copernicus.org/preprints/2025/egusphere-2025-5985/"} 
    },
    { 
      title: "Efficient Silicon Nitride Waveguide Crossings", 
      venue: "Optics Letters", 
      year: "2023", 
      type: "Journal", 
      links: {pdf: "#", paper: "https://opg.optica.org/ol/abstract.cfm?uri=ol-48-11-2981"} 
    },
    { 
      title: "Silicon Nitride Waveguide Crossings for Photonic Quantum Computing based on an Adiabatic Coupler Design", 
      venue: "CLEO", 
      year: "2023", 
      type: "Conference", 
      links: {pdf: "#", paper: "https://opg.optica.org/abstract.cfm?uri=CLEO_SI-2023-JW2A.113"} 
    },
  ],
  education: [
    { 
      degree: "M.Sc. Informatics", 
      institution: "Technical University of Munich", 
      location: "Munich, GER", 
      period: "2023 — 2026",
      specialization: "Quantum Computing and Machine Learning"
    },
    { 
      degree: "B.Sc. Informatics", 
      institution: "Technical University of Munich", 
      location: "Munich, GER", 
      period: "2018 — 2023",
      specialization: "High Performance Computing and Quantum Computing"
    },
    { 
      degree: "Erasmus+ Research", 
      institution: "Universitetet i Bergen", 
      location: "Bergen, NOR", 
      period: "2021 — 2022",
      specialization: "Climate Science: Ice Sheet & Climate Modeling"
    }
  ],
  theses: [
    { 
      type: "Master's Thesis", 
      title: "Scalable Fault-Tolerant Quantum Compiler for Chiplet Architectures", 
      focus: "Quantum Error Correction, Lattice Surgery, System Design" 
    },
    { 
      type: "Bachelor's Thesis", 
      title: "Hardware Aware Compiler for Photonic Quantum Computing", 
      focus: "Mapping, Photonic Synthesis, LOCI IR" 
    }
  ]
};

// --- Sub-Components for the Bento Grid ---

const BentoCard = ({ children, className = "", spotlight = false }: BentoCardProps) => (
  <div className={`bento-card-base group ${className}`}>
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

   const getLinkIcon = (key: string) => {
    switch (key) {
      case 'arxiv': return <ExternalLink size={14} />;
      case 'github': return <Github size={14} />;
      case 'website': return <Globe size={14} />;
      case 'paper': return <FileText size={14} />;
      default: return <ExternalLink size={14} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-200 p-6 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
        
        {/* 1. Primary Identity Card */}
        <BentoCard spotlight className="md:col-span-4 md:row-span-1 flex flex-col justify-between border-blue-500/20">
          <div>
            <div className="flex justify-between items-start mb-10">
              <img src={d.profile.avatar} className="w-24 h-24 rounded-3xl bg-zinc-800 p-1 border border-white/5" alt="Profile" />
              <div className="flex gap-2">
                {/*
                 {['Github', 'Linkedin', 'Mail'].map(s => (
                   <div key={s} className="p-3 bg-white/5 rounded-2xl hover:bg-white hover:text-black transition-all cursor-pointer">
                     {s === 'Github' ? <Github size={20}/> : s === 'Linkedin' ? <Linkedin size={20}/> : <Mail size={20}/>}
                   </div>
                 ))}
                */}

                  <a href="https://github.com/wegii" target="_blank" className="p-3 bg-white/5 rounded-2xl hover:bg-white hover:text-black transition-all cursor-pointer">
                   <Github size={20}/>
                 </a>
                 <a href="https://linkedin.com/in/wegii" target="_blank" className="p-3 bg-white/5 rounded-2xl hover:bg-white hover:text-black transition-all cursor-pointer">
                   <Linkedin size={20}/>
                 </a>
                 <a href="https://scholar.google.com/citations?hl=en&user=aPmT8iQAAAAJ" target="_blank" className="p-3 bg-white/5 rounded-2xl hover:bg-white hover:text-black transition-all cursor-pointer" title="Google Scholar">
                   <GraduationCap size={20}/>
                 </a>
                 <a href="mailto:wegmannp@in.tum.de" className="p-3 bg-white/5 rounded-2xl hover:bg-white hover:text-black transition-all cursor-pointer">
                   <Mail size={20}/>
                 </a>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-white mb-2 leading-none">
              {d.profile.name}
            </h1>
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm mb-6 uppercase tracking-widest">
              <Zap size={14} fill="currentColor" /> {d.profile.role}
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-4xl">
              {d.profile.bio}
            </p>
          </div>
          <div className="pt-8 border-t border-white/5 flex items-center justify-between text-zinc-500 text-xs font-mono">
            <div className="flex items-center gap-2"><MapPin size={14}/> {d.profile.location}</div>
            <div className="flex gap-4"><Mountain size={18}/> <Music size={18}/></div>
          </div>
        </BentoCard>


        {/* 2. Publications */}
        <BentoCard className="md:col-span-4 border-white/10">
          <div className="flex justify-between items-center mb-8">
             <div className="flex items-center gap-3">
                <BookOpen className="text-purple-500" size={20} />
                <h2 className="text-xl font-bold text-white">Selected Publications</h2>
             </div>
             <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden md:block">Selected Works</div>
          </div>
          <div className="space-y-4">
            {d.publications.map((pub, i) => (
              <div key={i} className="group/item flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] font-black bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase tracking-tighter border border-white/5">{pub.type}</span>
                    <span className="text-xs font-bold text-purple-400 font-mono tracking-tight">{pub.venue}</span>
                    <span className="text-[10px] text-zinc-600 font-mono">{pub.year}</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold group-hover/item:text-purple-300 transition-colors">{pub.title}</h3>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  {/*
                  {Object.keys(pub.links).map(([key, url]) => ( 
                    <div key={url} className="p-2.5 bg-black/40 rounded-xl text-zinc-500 hover:text-white hover:border-white/20 transition-all cursor-pointer border border-white/10 group-hover/item:border-white/20">
                      {getLinkIcon(key)}
                    </div>
                  ))}
                  */}
                  {Object.entries(pub.links).map(([key, url]) => (
                    url !== "#" && (
                      <a 
                        key={key} 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 bg-black/40 rounded-xl text-zinc-500 hover:text-white hover:border-white/40 transition-all border border-white/10 text-[10px] font-mono uppercase tracking-tighter group-hover/item:border-white/20"
                      >
                        {getLinkIcon(key)}
                        <span>{key}</span>
                      </a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 3. Combined Education Row (Replacing Terminal/Resume) */}
        
        {/* Thesis Column */}
        <BentoCard className="md:col-span-2 md:row-span-1">
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="text-emerald-500" size={20} />
            <h2 className="text-xl font-bold text-white">Thesis Research</h2>
          </div>
          <div className="space-y-4">
            {d.theses.map((t, i) => (
              <div key={i} className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors group/thesis">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded mb-3 inline-block bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">
                  {t.type}
                </span>
                <h4 className="text-white font-bold leading-tight mb-2 group-hover/thesis:text-emerald-400 transition-colors">{t.title}</h4>
                <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono uppercase tracking-tighter">
                  <Milestone size={12} /> {t.focus}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Academic Journey Column */}
        <BentoCard className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-500" size={20} />
            <h2 className="text-xl font-bold text-white">Academic Journey</h2>
          </div>
          <div className="space-y-4">
            {d.education.map((edu, i) => (
              <div key={i} className="relative pl-6 border-l border-white/10 group/edu">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-blue-500/40 group-hover/edu:bg-blue-500 transition-colors" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-bold text-sm">{edu.degree}</h4>
                  <span className="text-[10px] font-mono text-zinc-600">{edu.period}</span>
                </div>
                <div className="text-xs text-blue-400 mb-1 flex items-center gap-1">
                  <Globe size={10} /> {edu.institution}
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-wider">{edu.specialization}</p>
                
              </div>
            ))}
          </div>
        </BentoCard>

      </div>

      <footer className="mt-20 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest shadow-xl">
           <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" /> 
           Last Sync: {new Date().toLocaleDateString()}
        </div>
      </footer>
    </main>
  );
}