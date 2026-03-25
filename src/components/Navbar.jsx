import React, { useState, useEffect } from 'react';
const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Functions', href: '#functions' },
  { label: 'History', href: '#history' },
  { label: 'Types', href: '#types' },
  { label: 'Trends', href: '#trends' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Reporters', href: '#reporters' },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:1000,
      padding:'0 2rem',height:64,display:'flex',alignItems:'center',justifyContent:'space-between',
      background: scrolled ? 'rgba(5,10,15,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.12)' : '1px solid transparent',
      transition:'all 0.35s ease',
    }}>
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <div style={{width:36,height:36,border:'2px solid var(--accent-cyan)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:13,color:'var(--accent-cyan)'}}>OS</span>
        </div>
        <div>
          <div style={{fontFamily:'var(--font-display)',fontSize:13,fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.1em'}}>OPERATING SYSTEMS</div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.2em'}}>TUP TAGUIG · BSIT S-3A-T</div>
        </div>
      </div>
      <div style={{display:'flex',gap:2}}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontFamily:'var(--font-display)',fontSize:11,fontWeight:500,color:'var(--text-secondary)',
            textDecoration:'none',padding:'6px 11px',letterSpacing:'0.12em',textTransform:'uppercase',
            transition:'color 0.2s',
          }}
          onMouseEnter={e=>e.target.style.color='var(--accent-cyan)'}
          onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}
          >{l.label}</a>
        ))}
      </div>
      <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--accent-green)',border:'1px solid rgba(0,255,136,0.3)',padding:'4px 10px',letterSpacing:'0.15em'}}>CSPT</div>
    </nav>
  );
}
