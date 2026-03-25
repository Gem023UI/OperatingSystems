import React, { useState } from 'react';
const challenges = [
  { id:'hw', label:'Hardware Diversity', icon:'⬡', color:'var(--accent-cyan)', desc:'Operating systems must support various processors, storage devices, and peripherals from countless manufacturers — requiring continuous updates, driver maintenance, and compatibility testing across devices.' },
  { id:'sec', label:'Security', icon:'◆', color:'#ff4d6d', desc:'With the rise of cyber threats, OSes must protect user data from malware, unauthorized access, and vulnerabilities through constant security patches, access control mechanisms, and advanced encryption.' },
  { id:'perf', label:'Performance', icon:'◈', color:'var(--accent-green)', desc:'The OS must efficiently manage CPU time, memory, and storage to ensure smooth operation. Poor optimization leads to slow performance, system crashes, or excessive battery and power consumption.' },
  { id:'scale', label:'Scalability', icon:'▣', color:'var(--accent-orange)', desc:'Modern OSes in server and cloud environments must handle ever-increasing users, apps, and data volumes without degrading performance — one of the hardest engineering challenges in computer science.' },
  { id:'rel', label:'Reliability', icon:'◉', color:'#7b2fff', desc:'Operating systems must minimize system failures and recover quickly from errors to ensure continuous availability, particularly in mission-critical, always-on, and safety-critical systems.' },
];
const trends = [
  { label:'Cloud Engineering', color:'var(--accent-cyan)', icon:'☁', tagline:'Run anywhere. Store everywhere.', desc:'Modern OSes increasingly integrate cloud technologies. Cloud-based systems like Chrome OS allow users to store data and run applications online from anywhere with an internet connection.' },
  { label:'Artificial Intelligence', color:'var(--accent-green)', icon:'◈', tagline:'Smarter resource management.', desc:'AI is embedded into OS design to optimize resource allocation, improve threat detection, and predict potential failures before they occur — resulting in smarter, self-managing systems.' },
  { label:'Internet of Things (IoT)', color:'var(--accent-orange)', icon:'⬡', tagline:'OS for embedded, always-on devices.', desc:'Operating systems now run on lightweight embedded devices — sensors, smart appliances, and wearables — with a focus on real-time processing and ultra-low power consumption.' },
  { label:'Encryption & Zero-Trust', color:'#ff4d6d', icon:'◆', tagline:'Trust nothing. Verify everything.', desc:'Future OSes will adopt zero-trust security models, advanced encryption, and biometric authentication as defaults — responding to increasingly sophisticated cyber threats.' },
  { label:'Quantum Computing', color:'#7b2fff', icon:'◉', tagline:'The next frontier of computation.', desc:'Research is underway on OS architectures for quantum and edge computing — systems aimed at handling complex computations and real-time distributed processing at unprecedented scale.' },
];
export default function Trends() {
  const [activeC, setActiveC] = useState(null);
  return (
    <section id="trends" style={{padding:'6rem 2rem',background:'rgba(0,0,0,0.3)',borderTop:'1px solid var(--border-dim)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{marginBottom:'5rem'}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_05 — OS_CHALLENGES</div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em',marginBottom:'2.5rem'}}>
            Challenges in <span style={{color:'var(--accent-cyan)'}}>OS Development</span>
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:1,background:'rgba(0,212,255,0.08)'}}>
            {challenges.map(c=>(
              <div key={c.id} onClick={()=>setActiveC(activeC===c.id?null:c.id)}
                style={{background:activeC===c.id?'var(--bg-card-hover)':'var(--bg-card)',padding:'1.75rem 1.25rem',cursor:'pointer',transition:'background 0.2s',borderBottom:activeC===c.id?`3px solid ${c.color}`:'3px solid transparent'}}
                onMouseEnter={e=>e.currentTarget.style.background='var(--bg-card-hover)'}
                onMouseLeave={e=>e.currentTarget.style.background=activeC===c.id?'var(--bg-card-hover)':'var(--bg-card)'}
              >
                <div style={{fontSize:'1.4rem',color:c.color,marginBottom:'0.85rem'}}>{c.icon}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:13,fontWeight:600,color:'var(--text-primary)',marginBottom:'0.4rem'}}>{c.label}</div>
                <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:c.color,opacity:0.65}}>{activeC===c.id?'[ collapse ]':'[ explore ]'}</div>
              </div>
            ))}
          </div>
          {activeC&&(
            <div style={{padding:'1.75rem 2rem',background:'var(--bg-card-hover)',borderLeft:`3px solid ${challenges.find(c=>c.id===activeC)?.color}`,animation:'fadeSlideUp 0.3s ease'}}>
              <p style={{color:'var(--text-secondary)',fontSize:'0.925rem',lineHeight:1.85,maxWidth:760}}>{challenges.find(c=>c.id===activeC)?.desc}</p>
            </div>
          )}
        </div>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-green)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_06 — MODERN_FUTURE_TRENDS</div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em',marginBottom:'2.5rem'}}>
            Modern & Future <span style={{color:'var(--accent-green)'}}>Trends</span>
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:1,background:'rgba(0,255,136,0.05)'}}>
            {trends.map((t,i)=>(
              <div key={i} style={{background:'var(--bg-card)',padding:'2rem',transition:'background 0.2s'}}
                onMouseEnter={e=>e.currentTarget.style.background='var(--bg-card-hover)'}
                onMouseLeave={e=>e.currentTarget.style.background='var(--bg-card)'}
              >
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1rem'}}>
                  <span style={{fontSize:'1.6rem',color:t.color}}>{t.icon}</span>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:10,color:t.color,border:`1px solid ${t.color}33`,padding:'2px 8px'}}>{String(i+1).padStart(2,'0')}</span>
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:600,color:t.color,marginBottom:4}}>{t.label}</div>
                <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.1em',marginBottom:'1rem'}}>&gt; {t.tagline}</div>
                <p style={{fontSize:'0.85rem',color:'var(--text-secondary)',lineHeight:1.8}}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
