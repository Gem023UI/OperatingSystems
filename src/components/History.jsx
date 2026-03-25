import React, { useState } from 'react';
const eras = [
  { period:'1940s–50s', label:'Pre-OS Era', color:'#7b2fff', tagline:'No OS. Pure hardware.',
    points:['No operating systems — programs manually loaded one at a time via punch cards or switches.','Only one user could operate the computer at a time.','Process was extremely slow and highly prone to human error.','Binary language was the only means of communicating with hardware.'],
    tech:['Punch Cards','Manual Wiring','Sequential Execution'],
    metrics:[0,0,0,5,0] },
  { period:'1950s–60s', label:'Batch Processing', color:'#0077ff', tagline:'Group jobs. Run them. No interaction.',
    points:['Jobs grouped into "batches" and executed sequentially without user interaction.','Operators collected jobs on punch cards and submitted them as a batch.','Better CPU utilization, especially on large mainframe computers.','No real-time feedback — users waited hours for results.'],
    tech:['Batch Jobs','Mainframes','Sequential Processing'],
    metrics:[0,5,0,10,0] },
  { period:'1960s–70s', label:'Time-Sharing & Multiprogramming', color:'var(--accent-cyan)', tagline:'Multiple programs. Multiple users. One machine.',
    points:['Multiple programs could reside in memory simultaneously.','CPU switched between programs rapidly, reducing idle time.','Time-sharing systems allowed multiple users to access one mainframe simultaneously.','UNIX developed — a landmark OS influencing virtually every modern system.'],
    tech:['UNIX','Time-Sharing','Multiprogramming','CLI'],
    metrics:[80,30,20,40,5] },
  { period:'1980s–90s', label:'GUI & Personal Computing', color:'var(--accent-green)', tagline:'Windows, icons, menus, and the mouse.',
    points:['GUIs replaced command-line interfaces for everyday users.','Apple Macintosh (1984) and Microsoft Windows popularized WIMP.','Shift from shared mainframes to individual desktops and laptops.','Linux emerged as an open-source alternative to proprietary systems.'],
    tech:['macOS','Windows','Linux','GUI','WIMP'],
    metrics:[90,65,60,70,20] },
  { period:'2000s–Present', label:'Mobile, Cloud & Beyond', color:'var(--accent-orange)', tagline:'Touch. Cloud. AI. Everywhere.',
    points:['Android and iOS optimized for touchscreens, battery, and app ecosystems.','Cloud computing integration — Chrome OS runs primarily online.','Distributed systems and server OSes power the modern internet.','AI integration, IoT support, and quantum computing research define the future.'],
    tech:['Android','iOS','Chrome OS','Cloud','AI','IoT'],
    metrics:[100,95,100,100,80] },
];
const metricLabels = ['Multi-User Support','GUI Sophistication','Security Depth','Hardware Diversity','Network Integration'];
export default function History() {
  const [active, setActive] = useState(2);
  const era = eras[active];
  return (
    <section id="history" style={{padding:'6rem 2rem',background:'rgba(0,0,0,0.4)',borderTop:'1px solid var(--border-dim)',borderBottom:'1px solid var(--border-dim)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{marginBottom:'3rem'}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_03 — EVOLUTION_TIMELINE</div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em'}}>
            Evolution of <span style={{color:'var(--accent-cyan)'}}>Operating Systems</span>
          </h2>
        </div>
        <div style={{display:'flex',borderBottom:'1px solid var(--border-dim)',marginBottom:'3rem',overflowX:'auto'}}>
          {eras.map((e,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{background:'none',border:'none',cursor:'pointer',padding:'1rem 1.4rem',fontFamily:'var(--font-display)',fontSize:11,fontWeight:600,letterSpacing:'0.1em',color:active===i?e.color:'var(--text-muted)',borderBottom:active===i?`2px solid ${e.color}`:'2px solid transparent',transition:'all 0.2s',whiteSpace:'nowrap',textTransform:'uppercase',marginBottom:-1}}>{e.period}</button>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'start'}} key={active}>
          <div style={{animation:'fadeSlideUp 0.4s ease'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:era.color,letterSpacing:'0.25em',marginBottom:'0.5rem'}}>{era.period.toUpperCase()}</div>
            <h3 style={{fontFamily:'var(--font-display)',fontSize:'2rem',fontWeight:700,color:'var(--text-primary)',marginBottom:'0.5rem'}}>{era.label}</h3>
            <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:era.color,marginBottom:'2rem',opacity:0.8}}>&gt; {era.tagline}</div>
            {era.points.map((pt,i)=>(
              <div key={i} style={{display:'flex',gap:12,marginBottom:'1rem',alignItems:'flex-start'}}>
                <div style={{width:6,height:6,borderRadius:'50%',marginTop:8,flexShrink:0,background:era.color}}/>
                <p style={{color:'var(--text-secondary)',fontSize:'0.9rem',lineHeight:1.75}}>{pt}</p>
              </div>
            ))}
            <div style={{marginTop:'1.5rem'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.2em',marginBottom:'0.75rem'}}>KEY TECHNOLOGIES</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:7}}>
                {era.tech.map(t=>(
                  <span key={t} style={{fontFamily:'var(--font-mono)',fontSize:11,color:era.color,border:`1px solid ${era.color}44`,padding:'3px 10px',background:`${era.color}0a`,letterSpacing:'0.1em'}}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{animation:'fadeSlideUp 0.4s ease 0.1s both'}}>
            <div style={{border:'1px solid var(--border-dim)',padding:'1.75rem',background:'var(--bg-card)'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.2em',marginBottom:'1.5rem'}}>CAPABILITY METRICS</div>
              {metricLabels.map((ml,i)=>(
                <div key={ml} style={{marginBottom:'1.1rem'}}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-secondary)'}}>{ml}</span>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:10,color:era.color}}>{era.metrics[i]}%</span>
                  </div>
                  <div style={{height:3,background:'var(--border-dim)'}}>
                    <div style={{height:'100%',width:`${era.metrics[i]}%`,background:era.color,transition:'width 0.7s ease'}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
