import React, { useEffect, useRef, useState } from 'react';
const FULL = 'OPERATING SYSTEMS';
export default function Hero() {
  const [typed, setTyped] = useState('');
  const [cur, setCur] = useState(true);
  const idx = useRef(0);
  useEffect(() => {
    const t = setInterval(() => {
      if (idx.current < FULL.length) { setTyped(FULL.slice(0, ++idx.current)); }
      else clearInterval(t);
    }, 80);
    return () => clearInterval(t);
  }, []);
  useEffect(() => { const t = setInterval(() => setCur(v => !v), 530); return () => clearInterval(t); }, []);
  const stats = [
    {v:'7',l:'OS Types'},{v:'8+',l:'Decades'},{v:'5',l:'Core Functions'},{v:'5',l:'Future Trends'}
  ];
  return (
    <section id="overview" style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',padding:'6rem 2rem 4rem'}}>
      <div style={{position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',width:700,height:700,borderRadius:'50%',background:'radial-gradient(ellipse,rgba(0,212,255,0.06) 0%,transparent 70%)',pointerEvents:'none'}}/>
      {[600,820].map(s=>(
        <div key={s} style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:s,height:s,borderRadius:'50%',border:'1px solid rgba(0,212,255,0.05)',pointerEvents:'none'}}/>
      ))}
      {['tl','tr','bl','br'].map(p=>(
        <div key={p} style={{position:'absolute',top:p[0]==='t'?'2rem':'auto',bottom:p[0]==='b'?'2rem':'auto',left:p[1]==='l'?'2rem':'auto',right:p[1]==='r'?'2rem':'auto',width:22,height:22,borderTop:p[0]==='t'?'2px solid var(--accent-cyan)':'none',borderBottom:p[0]==='b'?'2px solid var(--accent-cyan)':'none',borderLeft:p[1]==='l'?'2px solid var(--accent-cyan)':'none',borderRight:p[1]==='r'?'2px solid var(--accent-cyan)':'none',opacity:0.35}}/>
      ))}
      <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.3em',color:'var(--accent-green)',marginBottom:'1.5rem',border:'1px solid rgba(0,255,136,0.2)',padding:'4px 16px',animation:'fadeIn 1s ease both'}}>
        BSIT S-3A-T · COMPUTER SYSTEMS AND PLATFORM TECHNOLOGIES
      </div>
      <h1 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'clamp(2.8rem,7vw,6.2rem)',letterSpacing:'0.08em',textAlign:'center',color:'transparent',background:'linear-gradient(135deg,#e8f4fd 0%,var(--accent-cyan) 50%,#7b2fff 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1.05,marginBottom:'0.5rem',animation:'fadeSlideUp 0.8s ease 0.3s both'}}>
        {typed}<span style={{opacity:cur?1:0,WebkitTextFillColor:'var(--accent-cyan)'}}>|</span>
      </h1>
      <div style={{fontFamily:'var(--font-mono)',fontSize:13,color:'var(--text-muted)',letterSpacing:'0.35em',textTransform:'uppercase',marginTop:'0.5rem',marginBottom:'3rem',animation:'fadeSlideUp 0.8s ease 0.6s both'}}>
        Technological University of the Philippines — Taguig
      </div>
      <div style={{display:'flex',gap:0,border:'1px solid rgba(0,212,255,0.15)',marginBottom:'3rem',animation:'fadeSlideUp 0.8s ease 0.9s both'}}>
        {stats.map((s,i)=>(
          <div key={i} style={{padding:'1rem 2rem',textAlign:'center',borderRight:i<3?'1px solid rgba(0,212,255,0.15)':'none'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'1.8rem',fontWeight:700,color:'var(--accent-cyan)'}}>{s.v}</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.2em',marginTop:2}}>{s.l.toUpperCase()}</div>
          </div>
        ))}
      </div>
      <p style={{maxWidth:680,textAlign:'center',fontSize:'1rem',color:'var(--text-secondary)',lineHeight:1.85,animation:'fadeSlideUp 0.8s ease 1.1s both',fontWeight:300}}>
        An <strong style={{color:'var(--text-primary)',fontWeight:500}}>Operating System (OS)</strong> is the most critical software that acts as the fundamental bridge between the computer user and the hardware components. Without an OS, a user would need to speak the computer&apos;s binary language to operate even the simplest device.
      </p>
      <div style={{position:'absolute',bottom:'2rem',left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:6,animation:'fadeIn 1.5s ease 2s both'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.3em'}}>SCROLL TO EXPLORE</div>
        <div style={{width:1,height:40,background:'linear-gradient(to bottom,var(--accent-cyan),transparent)'}}/>
      </div>
    </section>
  );
}
