'use client';
import React from 'react';
import { 
  Github, Linkedin, Mail, Terminal, MapPin, Cpu, BookOpen, 
  Mountain, Music, FileText, Code, GraduationCap, ScrollText 
} from 'lucide-react';

const SITE_DATA = {
  profile: {
    name: "Peter Wegmann",
    role: "Quantum Computing & QEC Researcher",
    location: "Munich, Germany",
    bio: "Specializing in Quantum Error Correction (QEC) and Fault-Tolerant Compiler design. Researching scalable chiplet architectures and photonic quantum systems at the Technical University of Munich.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter",
  },
  stats: [
    { label: "Publications", value: "4" },
    { label: "Total Projects", value: "24+" }
  ],
  education: {
    theses: [
      {
        degree: "Master's Thesis",
        title: "Scalable Fault-Tolerant Quantum Compiler for Chiplet Architectures",
        focus: "QEC, Compiler Design, Chiplet Interconnects"
      },
      {
        degree: "Bachelor's Thesis",
        title: "Hardware Aware Compiler for Photonic Quantum Computing",
        focus: "Photonic Circuits, Hardware Mapping"
      }
    ],
    studies: [
      {
        degree: "M.Sc. Informatics",
        institution: "Technical University of Munich",
        specialization: "Quantum Computing and Machine Learning"
      },
      {
        degree: "B.Sc. Informatics",
        institution: "Technical University of Munich",
        specialization: "Applied Mathematics, Quantum Computing, and HPC"
      }
    ]
  },
  quantumExpertise: [
    {
      category: "Quantum Error Correction",
      skills: ["Surface Codes", "Lattice Surgery", "tQEC", "Fault-Tolerant Thresholds", "Decoders"]
    },
    {
      category: "Quantum Compilers",
      skills: ["Logical-to-Physical Mapping", "Photonic Circuit Synthesis", "LOCI IR", "Chiplet Interconnects"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Qiskit", "Cirq", "PennyLane", "Stim", "PyMatching"]
    },
    {
      category: "HPC & Hardware",
      skills: ["CUDA", "FPGA Interfacing", "GDSII Mask Generation", "FDTD Simulation"]
    }
  ],
  allPublications: [
    { 
      title: "Crumbling Mountains: Pre-failure and failure analysis of the 2024 Permafrost Rock Slide", 
      venue: "EGU General Assembly 2025", 
      year: "2025",
      links: { paper: "#", arxiv: "#", github: "#" }
    },
    { 
      title: "Efficient adiabatic-coupler-based silicon nitride waveguide crossings for photonic quantum computing", 
      venue: "Optics Letters", 
      year: "2023",
      links: { paper: "#", arxiv: "#", github: "https://github.com/wegil/TQC" }
    },
    { 
      title: "Silicon Nitride Waveguide Crossings for Photonic Quantum Computing based on an Adiabatic Coupler Design", 
      venue: "CLEO", 
      year: "2023",
      links: { paper: "#", arxiv: "#", github: "#" }
    },
    { 
      title: "On-chip Quantum Optics", 
      venue: "OST-MCOST (Poster)", 
      year: "2020",
      links: { paper: "#" }
    }
  ],
  socials: [
    { icon: <Github size={20} />, link: "https://github.com/peterwegii", label: "GitHub" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/peterwegmann", label: "LinkedIn" },
    { icon: <Mail size={20} />, link: "mailto:peterwegii@gmail.com", label: "Email" }
  ]
};

export default function App() {
  const data = SITE_DATA;
  return (
    <div className="min-h-screen bg-[#070707] text-zinc-100 p-4 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Profile Header */}
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm rounded-[2rem] p-10 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500">
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="relative">
                <img src={data.profile.avatar} alt="Avatar" className="w-24 h-24 rounded-3xl bg-zinc-800 p-2 border border-zinc-700" />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-xl border-4 border-[#070707]">
                  <Cpu size={16} className="text-white" />
                </div>
              </div>
              <div className="flex gap-3">
                {data.socials.map((social, i) => (
                  <a key={i} href={social.link} className="p-3 bg-zinc-800/50 rounded-2xl hover:bg-white hover:text-black transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-3 tracking-tighter bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">{data.profile.name}</h1>
            <p className="text-blue-400 text-xl mb-6 font-medium tracking-tight">{data.profile.role}</p>
            <p className="text-zinc-400 leading-relaxed text-lg max-w-md">{data.profile.bio}</p>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-zinc-800 pt-6">
            <div className="flex items-center text-zinc-500 text-sm gap-2">
              <MapPin size={16} className="text-blue-500" />
              {data.profile.location}
            </div>
            <div className="flex gap-3 text-zinc-400">
               <Mountain size={18} />
               <Music size={18} />
            </div>
          </div>
        </div>

        {/* Stats */}
        {data.stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-8 flex flex-col items-center justify-center hover:bg-zinc-800/30 transition-all">
            <span className="text-4xl font-bold text-white">{stat.value}</span>
            <span className="text-zinc-500 text-[11px] uppercase tracking-[0.25em] mt-2 font-semibold">{stat.label}</span>
          </div>
        ))}

        {/* Expertise */}
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-10">
          <div className="flex items-center gap-3 mb-8">
            <Terminal size={24} className="text-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight">Quantum Specialization</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.quantumExpertise.map((block, i) => (
              <div key={i}>
                <h3 className="text-[10px] uppercase text-blue-500 font-black mb-3 tracking-widest">{block.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {block.skills.map(skill => (
                    <span key={skill} className="text-xs text-zinc-300 bg-zinc-800/30 px-3 py-1 rounded-lg border border-zinc-700/50">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="md:col-span-4 bg-zinc-900/40 border border-zinc-800/50 rounded-[2.5rem] p-10">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen size={24} className="text-purple-500" />
            <h2 className="text-2xl font-bold tracking-tight">Publications & Research</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {data.allPublications.map((pub, i) => (
              <div key={i} className="group bg-zinc-800/20 border border-zinc-800/50 p-6 rounded-2xl hover:bg-zinc-800/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded uppercase">{pub.year}</span>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase">{pub.venue}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors leading-snug">{pub.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {pub.links.paper && <a href={pub.links.paper} className="px-4 py-2 bg-zinc-800 rounded-xl text-xs hover:bg-white hover:text-black transition-all">Paper</a>}
                  {pub.links.arxiv && <a href={pub.links.arxiv} className="px-4 py-2 bg-zinc-800 rounded-xl text-xs hover:bg-orange-500 hover:text-white transition-all">arXiv</a>}
                  {pub.links.github && <a href={pub.links.github} className="px-4 py-2 bg-zinc-800 rounded-xl text-xs hover:bg-zinc-100 hover:text-black transition-all">Code</a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic */}
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-10">
          <div className="flex items-center gap-3 mb-8">
            <ScrollText size={24} className="text-emerald-500" />
            <h2 className="text-2xl font-bold tracking-tight">Academic Theses</h2>
          </div>
          <div className="space-y-6">
            {data.education.theses.map((thesis, i) => (
              <div key={i} className="pl-6 border-l border-zinc-800">
                <p className="text-[10px] font-black uppercase text-zinc-500 mb-1">{thesis.degree}</p>
                <h3 className="text-base font-bold text-zinc-100">{thesis.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-10">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={24} className="text-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight">Studies</h2>
          </div>
          <div className="space-y-6">
            {data.education.studies.map((study, i) => (
              <div key={i}>
                <h3 className="text-base font-bold text-zinc-100">{study.degree}</h3>
                <p className="text-xs text-zinc-500">{study.specialization}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <footer className="mt-16 text-center text-[10px] text-zinc-500 uppercase tracking-[0.4em]">
        Peter Wegmann • 2026 • Munich, Germany
      </footer>
    </div>
  );
}