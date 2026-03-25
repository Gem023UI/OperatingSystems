import React, { useState } from 'react';
const fns = [
  { id:'01', title:'Process Management', cat:'CPU & Memory', color:'var(--accent-cyan)', icon:'⬡',
    desc:"Handles multitasking by allocating CPU time to different programs. Allows you to listen to music while browsing the web — managing the computer's \"brain\" efficiently.",
    detail:'The OS scheduler decides which process runs at any given microsecond using Round Robin, Priority Scheduling, or FCFS. Modern OSes use preemptive multitasking, forcibly switching between tasks to ensure responsiveness and fairness.' },
  { id:'02', title:'Memory Management', cat:'CPU & Memory', color:'var(--accent-green)', icon:'◈',
    desc:'Tracks every byte of memory used, ensuring that one app does not overwrite the memory space of another. Prevents system crashes from memory collisions.',
    detail:'Implements virtual memory, paging, and segmentation. Uses page tables to map virtual addresses to physical RAM. Swap space extends memory to disk. Memory protection prevents unauthorized access between processes.' },
  { id:'03', title:'File Management', cat:'Storage & I/O', color:'var(--accent-orange)', icon:'▣',
    desc:'Organizes data into a structured hierarchy of directories and folders for easy retrieval and storage. Controls who can read, write, or execute files.',
    detail:'The OS manages file systems like NTFS, ext4, APFS. Handles metadata (permissions, timestamps, size). Implements journaling to prevent corruption on power loss. Provides APIs for reading, writing, seeking, and locking files.' },
  { id:'04', title:'Device Management (I/O)', cat:'Storage & I/O', color:'var(--accent-purple)', icon:'⬟',
    desc:'Uses specific software called "drivers" to communicate with peripheral devices like printers, mice, webcams, and other hardware components.',
    detail:'Device drivers abstract hardware differences. The I/O subsystem manages interrupts, DMA transfers, and buffering. Plug-and-play systems detect new hardware automatically. The HAL allows OS portability across hardware.' },
  { id:'05', title:'Security & Access Control', cat:'Protection', color:'#ff4d6d', icon:'◆',
    desc:'Manages user accounts, passwords, and permissions to prevent data theft and unauthorized system access. Acts as the system security guard.',
    detail:'Implements DAC, MAC, and RBAC models. Uses ACLs (Access Control Lists) for file permissions. Provides authentication, authorization, and audit logging. Modern OSes include sandboxing, SELinux, and secure boot.' },
  { id:'06', title:'Error Handling', cat:'CPU & Memory', color:'#ffd60a', icon:'◉',
    desc:'Detects errors in the CPU or memory and helps the system recover without shutting down completely. Minimizes crashes and data loss during failures.',
    detail:'Traps hardware exceptions (divide-by-zero, segfaults). Implements kernel panic recovery. Watchdog timers reset hung processes. Core dumps capture system state for post-mortem debugging and analysis.' },
];
export default function Functions() {
  const [active, setActive] = useState(null);
  return (
    <section id="functions" style={{padding:'6rem 2rem',maxWidth:1200,margin:'0 auto'}}>
      <div style={{marginBottom:'4rem'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_02 — CORE_FUNCTIONS</div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em'}}>
          What an OS <span style={{color:'var(--accent-cyan)'}}>Actually Does</span>
        </h2>
        <p style={{color:'var(--text-secondary)',maxWidth:560,marginTop:'1rem',fontWeight:300}}>
          Beyond being an intermediary, the OS actively manages every resource your computer has. Click any card to dive deeper.
        </p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:1,background:'rgba(0,212,255,0.08)'}}>
        {fns.map(fn=>(
          <div key={fn.id}
            onClick={()=>setActive(active===fn.id?null:fn.id)}
            style={{background:active===fn.id?'var(--bg-card-hover)':'var(--bg-card)',padding:'2rem',cursor:'pointer',transition:'background 0.25s',borderLeft:active===fn.id?`3px solid ${fn.color}`:'3px solid transparent',position:'relative',overflow:'hidden'}}
            onMouseEnter={e=>e.currentTarget.style.background='var(--bg-card-hover)'}
            onMouseLeave={e=>e.currentTarget.style.background=active===fn.id?'var(--bg-card-hover)':'var(--bg-card)'}
          >
            <div style={{position:'absolute',top:'0.75rem',right:'1.25rem',fontFamily:'var(--font-mono)',fontSize:'3.5rem',fontWeight:700,color:'rgba(255,255,255,0.025)',lineHeight:1,userSelect:'none'}}>{fn.id}</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:9,letterSpacing:'0.25em',color:fn.color,marginBottom:'1rem',opacity:0.8}}>{fn.cat.toUpperCase()}</div>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:'0.75rem'}}>
              <span style={{fontSize:'1.3rem',color:fn.color}}>{fn.icon}</span>
              <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:600,color:'var(--text-primary)'}}>{fn.title}</h3>
            </div>
            <p style={{fontSize:'0.875rem',color:'var(--text-secondary)',lineHeight:1.75,marginBottom:active===fn.id?'1.25rem':0}}>{fn.desc}</p>
            {active===fn.id&&(
              <div style={{borderTop:`1px solid ${fn.color}33`,paddingTop:'1rem',animation:'fadeSlideUp 0.3s ease'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:fn.color,letterSpacing:'0.2em',marginBottom:'0.5rem'}}>DEEP DIVE</div>
                <p style={{fontSize:'0.825rem',color:'var(--text-secondary)',lineHeight:1.8}}>{fn.detail}</p>
              </div>
            )}
            <div style={{position:'absolute',bottom:'1rem',right:'1.25rem',fontFamily:'var(--font-mono)',fontSize:10,color:fn.color,opacity:0.45}}>
              {active===fn.id?'[ − ]':'[ + ]'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
