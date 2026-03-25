import React, { useState } from 'react';
const types = [
  { type:'General-Purpose OS', sub:'Everyday Computing', color:'var(--accent-cyan)', icon:'◈',
    desc:'Designed for a wide range of tasks from word processing to gaming. The most common OS for modern computers.',
    subtypes:[
      { name:'Time-Sharing (Multitasking) OS', desc:'Allows multiple concurrent tasks to share the CPU, switching so rapidly it creates the illusion of simultaneous execution.', ex:['Windows 11','macOS','Linux Desktop'] },
      { name:'Mobile OS', desc:'Optimized for touchscreens, battery efficiency, and cellular connectivity on handheld devices.', ex:['Android','iOS'] },
    ]},
  { type:'Real-Time OS (RTOS)', sub:'Deadline-Critical Systems', color:'#ff4d6d', icon:'⬡',
    desc:'Must process data and produce output within strict time constraints. Timing is the most critical factor.',
    subtypes:[
      { name:'Hard Real-Time', desc:'Missing a deadline results in total system failure. Used in safety-critical environments.', ex:['Airbag Control','Heart Pacemakers','Flight Control Computers'] },
      { name:'Soft Real-Time', desc:'Missing a deadline degrades quality but does not cause failure.', ex:['Live Video Streaming','Online Gaming Servers'] },
    ]},
  { type:'Network & Distributed OS', sub:'Connected Infrastructure', color:'var(--accent-green)', icon:'◆',
    desc:'Manages resources across networked machines, enabling resource sharing and distributed computation.',
    subtypes:[
      { name:'Network OS (NOS)', desc:'Runs on a server, managing data, users, security, and networking across a LAN.', ex:['Windows Server','Red Hat Enterprise Linux'] },
      { name:'Distributed OS', desc:'Connects multiple independent computers into one powerful system the user sees as a single machine.', ex:['Apache Hadoop','LOCUS','Google Fuchsia'] },
    ]},
  { type:'Batch OS', sub:'Sequential Job Processing', color:'var(--accent-orange)', icon:'▣',
    desc:'Users did not interact with the computer directly. Jobs were collected and processed in bulk batches.',
    subtypes:[
      { name:'Batch Processing', desc:'Jobs punched onto cards, submitted to an operator, and executed sequentially. No real-time user interaction.', ex:['Payroll Systems (1970s)','Early Mainframe Jobs'] },
    ]},
  { type:'Embedded OS', sub:'Dedicated Device Functions', color:'#7b2fff', icon:'◉',
    desc:'Built directly into larger devices to perform dedicated functions with extremely limited hardware resources.',
    subtypes:[
      { name:'Embedded Systems', desc:'Found in appliances, cars, elevators, ATMs — devices with a single, specific purpose and tight constraints.', ex:['Smart Washing Machine OS','ATM Software','Car ECU'] },
    ]},
];
const market = [
  { label:'Windows', share:70, color:'var(--accent-cyan)', platform:'Desktop' },
  { label:'macOS', share:13, color:'var(--accent-green)', platform:'Desktop' },
  { label:'Linux', share:4, color:'var(--accent-orange)', platform:'Desktop/Server' },
  { label:'Android', share:72, color:'#00c853', platform:'Mobile' },
  { label:'iOS', share:27, color:'#8e8e93', platform:'Mobile' },
];
export default function OsTypes() {
  const [active, setActive] = useState(0);
  const cur = types[active];
  return (
    <section id="types" style={{padding:'6rem 2rem',maxWidth:1200,margin:'0 auto'}}>
      <div style={{marginBottom:'3rem'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_04 — OS_TAXONOMY</div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em'}}>
          Types of <span style={{color:'var(--accent-cyan)'}}>Operating Systems</span>
        </h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'260px 1fr',gap:1,background:'rgba(0,212,255,0.08)',marginBottom:'4rem'}}>
        <div style={{background:'var(--bg-card)'}}>
          {types.map((t,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{display:'block',width:'100%',textAlign:'left',padding:'1.2rem 1.4rem',background:active===i?'var(--bg-card-hover)':'none',border:'none',cursor:'pointer',borderLeft:active===i?`3px solid ${t.color}`:'3px solid transparent',transition:'all 0.2s'}}
              onMouseEnter={e=>{if(active!==i)e.currentTarget.style.background='rgba(255,255,255,0.02)'}}
              onMouseLeave={e=>{if(active!==i)e.currentTarget.style.background='none'}}
            >
              <div style={{display:'flex',alignItems:'center',gap:9,marginBottom:3}}>
                <span style={{color:t.color,fontSize:14}}>{t.icon}</span>
                <span style={{fontFamily:'var(--font-display)',fontSize:12,fontWeight:600,color:active===i?t.color:'var(--text-secondary)'}}>{t.type}</span>
              </div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--text-muted)',paddingLeft:23,letterSpacing:'0.1em'}}>{t.sub}</div>
            </button>
          ))}
        </div>
        <div style={{background:'var(--bg-card)',padding:'2rem'}} key={active}>
          <div style={{animation:'fadeSlideUp 0.35s ease'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:cur.color,letterSpacing:'0.25em',marginBottom:'0.5rem'}}>{cur.sub.toUpperCase()}</div>
            <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.7rem',fontWeight:700,color:'var(--text-primary)',marginBottom:'0.75rem'}}>{cur.type}</h3>
            <p style={{color:'var(--text-secondary)',fontSize:'0.9rem',lineHeight:1.8,marginBottom:'2rem',maxWidth:560}}>{cur.desc}</p>
            <div style={{display:'grid',gridTemplateColumns:cur.subtypes.length>1?'1fr 1fr':'1fr',gap:'1rem'}}>
              {cur.subtypes.map((s,i)=>(
                <div key={i} style={{border:`1px solid ${cur.color}22`,padding:'1.25rem',background:`${cur.color}06`}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:13,fontWeight:600,color:cur.color,marginBottom:'0.5rem'}}>{s.name}</div>
                  <p style={{fontSize:'0.825rem',color:'var(--text-secondary)',lineHeight:1.75,marginBottom:'1rem'}}>{s.desc}</p>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.15em',marginBottom:6}}>EXAMPLES</div>
                  <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                    {s.ex.map(e=>(
                      <span key={e} style={{fontFamily:'var(--font-mono)',fontSize:10,color:cur.color,border:`1px solid ${cur.color}33`,padding:'2px 8px'}}>{e}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.3em',marginBottom:'1.5rem'}}>// MARKET_SHARE — POPULAR_OS</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(195px,1fr))',gap:'1rem'}}>
          {market.map(d=>(
            <div key={d.label} style={{border:'1px solid var(--border-dim)',padding:'1.5rem',background:'var(--bg-card)'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'0.75rem'}}>
                <div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:600,color:'var(--text-primary)'}}>{d.label}</div>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.15em'}}>{d.platform.toUpperCase()}</div>
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:700,color:d.color}}>{d.share}%</div>
              </div>
              <div style={{height:3,background:'var(--border-dim)',borderRadius:2}}>
                <div style={{height:'100%',width:`${d.share}%`,background:d.color,borderRadius:2}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
