import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  MapPin,
  Cpu,
  BookOpen,
  Mountain,
  Music,
  FileText,
  Code,
  GraduationCap,
  ScrollText,
  Binary,
  Layers
} from 'lucide-react';

/**
 * CONFIGURATION BLOCK - Derived from Peter Wegmann's Research Focus
 */
const SITE_DATA = {
  profile: {
    name: "Peter Wegmann",
    role: "Quantum Systems & QEC Researcher",
    location: "Munich, Germany",
    bio: "Researcher at TUM specializing in Fault-Tolerant Quantum Compilers and Silicon Nitride Photonics. Bridging the gap between abstract QEC protocols and physical chiplet architectures.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter&backgroundColor=070707",
  },
  stats: [
    { label: "Publications", value: "4", icon: <FileText size={16}/> },
    { label: "Total Projects", value: "24+", icon: <Binary size={16}/> }
  ],
  education: {
    theses: [
      {
        degree: "Master's Thesis",
        title: "Scalable Fault-Tolerant Quantum Compiler for Chiplet Architectures",
        focus: "QEC, Lattice Surgery, Chiplet Interconnects",
        tag: "Active"
      },
      {
        degree: "Bachelor's Thesis",
        title: "Hardware Aware Compiler for Photonic Quantum Computing",
        focus: "Photonic Circuits, Waveguide Crossings, Mapping",
        tag: "Archive"
      }
    ],
    studies: [
      {
        degree: "M.Sc. Informatics",
        institution: "Technical University of Munich",
        specialization: "Quantum Computing & ML",
        period: "2023 — Present"
      },
      {
        degree: "B.Sc. Informatics",
        institution: "Technical University of Munich",
        specialization: "Applied Math, QC & HPC",
        period: "2019 — 2023"
      }
    ]
  },
  expertise: [
    {
      category: "Quantum Error Correction",
      skills: ["Surface Codes", "Lattice Surgery", "tQEC", "Decoders"],
      color: "text-blue-400"
    },
    {
      category: "Quantum Compilers",
      skills: ["Logical-to-Physical Mapping", "Photonic Synthesis", "LOCI IR"],
      color: "text-purple-400"
    },
    {
      category: "HPC & Systems",
      skills: ["CUDA", "MPI/OpenMP", "GDSII Mask Gen"],
      color: "text-emerald-400"
    },
    {
      category: "Frameworks",
      skills: ["Stim", "PyMatching", "Qiskit", "JAX/Optax"],
      color: "text-orange-400"
    }
  ],
  publications: [
    { 
      title: "Crumbling Mountains: Pre-failure analysis of the 2024 Permafrost Rock Slide", 
      venue: "EGU General Assembly 2025", 
      year: "2025",
      type: "Presentation",
      links: { paper: "#", arxiv: "#" }
    },
    { 
      title: "Efficient adiabatic-coupler-based silicon nitride waveguide crossings for photonic quantum computing", 
      venue: "Optics Letters", 
      year: "2023",
      type: "Journal",
      links: { paper: "#", github: "https://github.com/wegil/TQC" }
    },
    { 
      title: "Silicon Nitride Waveguide Crossings for Photonic Quantum Computing based on an Adiabatic Coupler Design", 
      venue: "CLEO", 
      year: "2023",
      type: "Conference",
      links: { paper: "#" }
    },
    { 
      title: "On-chip Quantum Optics", 
      venue: "OST-MCOST", 
      year: "2020",
      type: "Poster",
      links: { paper: "#" }
    }
  ],
  socials: [
    { icon: <Github size={20} />, link: "https://github.com/wegil", label: "GitHub" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/peterwegmann", label: "LinkedIn" },
    { icon: <Mail size={20} />, link: "mailto:peterwegii@gmail.com", label: "Email" }
  ]
};

export default function App() {
  const data = SITE_DATA;

  return (
    <div className="min-h-screen bg-[#070707] text-zinc-100 p-4 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Profile Header Block */}
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-700">
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src={data.profile.avatar} 
                  alt={data.profile.name} 
                  className="w-24 h-24 rounded-3xl bg-zinc-800 p-2 border border-zinc-700 relative z-10"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-xl border-4 border-[#070707] z-20">
                  <Cpu size={16} className="text-white" />
                </div>
              </div>
              <div className="flex gap-2">
                {data.socials.map((social, i) => (
                  <a key={i} href={social.link} className="p-3 bg-zinc-800/50 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-3 tracking-tighter bg-gradient-to-br from-white via-white to-zinc-600 bg-clip-text text-transparent">
              {data.profile.name}
            </h1>
            <p className="text-blue-400 text-xl mb-6 font-medium tracking-tight flex items-center gap-2">
              <Binary size={20} className="opacity-70" />
              {data.profile.role}
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg max-w-md">
              {data.profile.bio}
            </p>
          </div>
          
          <div className="mt-10 flex items-center justify-between border-t border-zinc-800/50 pt-6">
            <div className="flex items-center text-zinc-500 text-sm gap-2">
              <MapPin size={16} className="text-blue-500" />
              {data.profile.location}
            </div>
            <div className="flex gap-4">
               <span title="Mountain Rescue" className="text-zinc-500 hover:text-white transition-colors cursor-help"><Mountain size={20}/></span>
               <span title="Musician" className="text-zinc-500 hover:text-white transition-colors cursor-help"><Music size={20}/></span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        {data.stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-8 flex flex-col items-center justify-center hover:bg-zinc-800/40 transition-all group relative overflow-hidden">
            <div className="absolute -right-2 -bottom-2 text-white/5 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
               {stat.icon && React.cloneElement(stat.icon as React.ReactElement, { size: 80 })}
            </div>
            <span className="text-5xl font-bold text-white relative z-10 group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mt-3 font-black relative z-10">{stat.label}</span>
          </div>
        ))}

        {/* Technical Domain Matrix */}
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-10 overflow-hidden relative">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <Layers size={20} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">System Architecture Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {data.expertise.map((block, i) => (
              <div key={i} className="space-y-3">
                <h3 className={`text-[10px] uppercase font-black tracking-widest ${block.color}`}>{block.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {block.skills.map(skill => (
                    <span key={skill} className="text-[11px] font-medium text-zinc-400 bg-zinc-800/40 px-2 py-1 rounded-md border border-zinc-700/30 hover:border-zinc-500 hover:text-zinc-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Publication List */}
        <div className="md:col-span-4 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-10">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                <BookOpen size={20} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Publications & Dissemination</h2>
            </div>
            <span className="hidden md:block text-[10px] font-bold text-zinc-600 tracking-widest uppercase italic">Select any item to view repository</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {data.publications.map((pub, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between bg-zinc-800/20 border border-zinc-800/50 p-6 rounded-2xl hover:bg-zinc-800/40 hover:border-zinc-600/50 transition-all duration-300">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-zinc-800 rounded text-[9px] font-black text-zinc-500 uppercase tracking-tighter">{pub.type}</span>
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">{pub.venue}</span>
                    <span className="text-[10px] font-medium text-zinc-600">{pub.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-purple-400 transition-colors leading-snug">
                    {pub.title}
                  </h3>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  {pub.links.arxiv && <a href={pub.links.arxiv} className="p-2.5 bg-zinc-900 rounded-xl text-zinc-500 hover:text-white hover:bg-orange-600 transition-all text-xs font-bold uppercase tracking-tighter">arXiv</a>}
                  {pub.links.paper && <a href={pub.links.paper} className="p-2.5 bg-zinc-900 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-700 transition-all"><FileText size={16}/></a>}
                  {pub.links.github && <a href={pub.links.github} className="p-2.5 bg-zinc-900 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-700 transition-all"><Code size={16}/></a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Deep Dive */}
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <ScrollText size={20} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Theses & Research</h2>
            </div>
            <div className="space-y-10">
              {data.education.theses.map((thesis, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-zinc-800 group/thesis">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 group-hover/thesis:bg-emerald-500 group-hover/thesis:scale-125 transition-all" />
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{thesis.degree}</span>
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${thesis.tag === 'Active' ? 'border-emerald-500/50 text-emerald-400' : 'border-zinc-700 text-zinc-600'}`}>{thesis.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 group-hover/thesis:text-emerald-400 transition-colors mb-2 leading-tight">{thesis.title}</h3>
                  <p className="text-sm text-zinc-500 italic leading-snug">{thesis.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institutional Background */}
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Academic History</h2>
          </div>
          <div className="space-y-8">
            {data.education.studies.map((study, i) => (
              <div key={i} className="group/study">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-lg font-bold text-zinc-100 group-hover/study:text-blue-400 transition-colors">{study.degree}</h3>
                   <span className="text-[10px] font-bold text-zinc-600">{study.period}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <img src="https://www.tum.de/favicon.ico" alt="TUM" className="w-3 h-3 grayscale opacity-50 group-hover/study:grayscale-0 group-hover/study:opacity-100 transition-all" />
                  <span className="text-xs font-medium uppercase tracking-wider">{study.institution}</span>
                </div>
                <div className="flex items-start gap-2 bg-zinc-800/20 p-3 rounded-xl border border-zinc-800/50">
                   <Terminal size={14} className="mt-0.5 text-blue-500 opacity-50" />
                   <p className="text-xs text-zinc-500 leading-normal">{study.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Dynamic Terminal Footer */}
      <footer className="mt-20 py-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 px-5 py-2.5 bg-zinc-900/50 border border-zinc-800/80 rounded-full text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          Quantum Hardware-Software Interface • 2026
        </div>
        <p className="text-zinc-700 text-[10px] tracking-tight">Handcrafted with React & Tailwind • Built for Fault-Tolerance</p>
      </footer>
    </div>
  );
}