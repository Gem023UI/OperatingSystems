import React from 'react';
// Replace YOUTUBE_EMBED_URL with your actual embed link:
// e.g. "https://www.youtube.com/embed/YOUR_VIDEO_ID"
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/Iwa3jRDMMBg";
export default function VideoSection() {
  return (
    <section style={{padding:'5rem 2rem',maxWidth:1000,margin:'0 auto'}}>
      <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-orange)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_08 — VIDEO_LECTURE</div>
      <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.75rem,3.5vw,2.5rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em',marginBottom:'2rem'}}>
        Lecture <span style={{color:'var(--accent-orange)'}}>Recording</span>
      </h2>
      <div style={{position:'relative',paddingBottom:'56.25%',height:0,border:'1px solid var(--border-dim)',background:'var(--bg-card)',overflow:'hidden'}}>
        {YOUTUBE_EMBED_URL?(
          <iframe src={YOUTUBE_EMBED_URL} title="Operating Systems Lecture" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:'none'}}/>
        ):(
          <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'var(--bg-card)'}}>
            {['tl','tr','bl','br'].map(p=>(
              <div key={p} style={{position:'absolute',top:p[0]==='t'?'1rem':'auto',bottom:p[0]==='b'?'1rem':'auto',left:p[1]==='l'?'1rem':'auto',right:p[1]==='r'?'1rem':'auto',width:16,height:16,borderTop:p[0]==='t'?'1px solid rgba(255,107,53,0.3)':'none',borderBottom:p[0]==='b'?'1px solid rgba(255,107,53,0.3)':'none',borderLeft:p[1]==='l'?'1px solid rgba(255,107,53,0.3)':'none',borderRight:p[1]==='r'?'1px solid rgba(255,107,53,0.3)':'none'}}/>
            ))}
            <div style={{width:80,height:80,borderRadius:'50%',border:'2px solid rgba(255,107,53,0.35)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.5rem',position:'relative'}}>
              <div style={{position:'absolute',inset:-8,borderRadius:'50%',border:'1px solid rgba(255,107,53,0.15)'}}/>
              <div style={{width:0,height:0,borderTop:'13px solid transparent',borderBottom:'13px solid transparent',borderLeft:'21px solid rgba(255,107,53,0.5)',marginLeft:6}}/>
            </div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:600,color:'var(--text-secondary)',marginBottom:'0.5rem'}}>Video Coming Soon</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)',letterSpacing:'0.15em',marginBottom:'1.5rem'}}>LECTURE RECORDING WILL BE EMBEDDED HERE</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'rgba(255,107,53,0.5)',border:'1px solid rgba(255,107,53,0.2)',padding:'6px 16px',letterSpacing:'0.15em'}}>
              SET YOUTUBE_EMBED_URL in VideoSection.jsx
            </div>
          </div>
        )}
      </div>
      <div style={{display:'flex',gap:'2rem',marginTop:'1rem',flexWrap:'wrap'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.15em'}}>SUBJECT: Computer Systems and Platform Technologies</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.15em'}}>TOPIC: Operating Systems · BSIT S-3A-T</div>
      </div>
    </section>
  );
}
