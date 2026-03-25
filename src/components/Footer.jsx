import React from 'react';
export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid var(--border-dim)',padding:'2.5rem 2rem',background:'var(--bg-secondary)'}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
        <div>
          <div style={{fontFamily:'var(--font-display)',fontSize:13,fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.1em',marginBottom:4}}>OPERATING SYSTEMS</div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.2em'}}>BSIT S-3A-T · TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES — TAGUIG</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.15em',marginBottom:4}}>COMPUTER SYSTEMS AND PLATFORM TECHNOLOGIES</div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.15em'}}>Malaga · Piad · Marbella</div>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'1.5rem auto 0',borderTop:'1px solid var(--border-dim)',paddingTop:'1.5rem',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.2em'}}>CSPT · Academic Presentation · TUP Taguig</div>
      </div>
    </footer>
  );
}
