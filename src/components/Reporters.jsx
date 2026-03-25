import React from 'react';
const reporters = [
  {
    name: 'Malaga, Jemuel',
    role: 'Reporter',
    sections: ['Evolution of OS', 'Modern & Future Trends', 'OS Challenges'],
    color: 'var(--accent-cyan)',
    initial: 'JM',
    // Replace with actual Cloudinary URL for Jemuel Malaga
    image: 'https://res.cloudinary.com/dxnb2ozgw/image/upload/v1759649430/user_icon_ze74ys.jpg',
  },
  {
    name: 'Piad, Carl Evan',
    role: 'Reporter',
    sections: ['Introduction to OS', 'Core Functions', 'History: Text-Based Era', 'Wrapping Up'],
    color: 'var(--accent-green)',
    initial: 'CE',
    // Replace with actual Cloudinary URL for Carl Evan Piad
    image: 'https://res.cloudinary.com/dxnb2ozgw/image/upload/v1759649430/user_icon_ze74ys.jpg',
  },
  {
    name: 'Marbella, Sharwin',
    role: 'Reporter',
    sections: ['Types of OS', 'Popular OS & Market Share', 'History: Modern Era'],
    color: 'var(--accent-orange)',
    initial: 'SW',
    // Replace with actual Cloudinary URL for Sharwin Marbella
    image: 'https://res.cloudinary.com/dxnb2ozgw/image/upload/v1759649430/user_icon_ze74ys.jpg',
  },
];
export default function Reporters() {
  return (
    <section id="reporters" style={{padding:'5rem 2rem',background:'rgba(0,0,0,0.5)',borderTop:'1px solid var(--border-dim)'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_09 — REPORTERS</div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.75rem,3.5vw,2.5rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em',marginBottom:'0.5rem'}}>
          Meet the <span style={{color:'var(--accent-cyan)'}}>Team</span>
        </h2>
        <p style={{color:'var(--text-secondary)',marginBottom:'3rem',fontWeight:300,fontSize:'0.9rem'}}>
          Computer Systems and Platform Technologies &middot; BSIT S-3A-T &middot; TUP Taguig
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'rgba(0,212,255,0.08)'}}>
          {reporters.map((r,i)=>(
            <div key={i} style={{background:'var(--bg-card)',padding:'2.5rem 2rem',position:'relative',overflow:'hidden',transition:'background 0.3s'}}
              onMouseEnter={e=>e.currentTarget.style.background='var(--bg-card-hover)'}
              onMouseLeave={e=>e.currentTarget.style.background='var(--bg-card)'}
            >
              <div style={{position:'absolute',top:'-0.5rem',right:'1rem',fontFamily:'var(--font-mono)',fontSize:'6rem',fontWeight:700,color:'rgba(255,255,255,0.02)',lineHeight:1,userSelect:'none'}}>{String(i+1).padStart(2,'0')}</div>
              <div style={{height:2,background:r.color,marginBottom:'1.75rem',width:40}}/>
              <div style={{position:'relative',marginBottom:'1.5rem',display:'inline-block'}}>
                <div style={{width:88,height:88,border:`2px solid ${r.color}55`,position:'relative',overflow:'hidden'}}>
                  <img src={r.image} alt={r.name}
                    style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                    onError={e=>{e.target.style.display='none';}}
                  />
                  <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:`${r.color}18`,fontFamily:'var(--font-display)',fontSize:'1.6rem',fontWeight:700,color:r.color}}>
                    {r.initial}
                  </div>
                </div>
                <div style={{position:'absolute',bottom:4,right:-7,width:11,height:11,borderRadius:'50%',background:r.color,border:'2px solid var(--bg-card)'}}/>
              </div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'1.1rem',fontWeight:700,color:'var(--text-primary)',marginBottom:3}}>{r.name}</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:r.color,letterSpacing:'0.2em',marginBottom:'1.25rem'}}>{r.role.toUpperCase()}</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.15em',marginBottom:'0.6rem'}}>SECTIONS COVERED</div>
              <div style={{display:'flex',flexDirection:'column',gap:5}}>
                {r.sections.map(s=>(
                  <div key={s} style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:4,height:4,borderRadius:'50%',background:r.color,flexShrink:0}}/>
                    <span style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--text-secondary)'}}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'1rem',padding:'0.75rem 1.25rem',border:'1px solid rgba(0,212,255,0.1)',background:'rgba(0,212,255,0.03)',fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.1em'}}>
          // CUSTOMIZE: Replace image URLs in Reporters.jsx with actual Cloudinary profile photo links per reporter.
        </div>
      </div>
    </section>
  );
}
