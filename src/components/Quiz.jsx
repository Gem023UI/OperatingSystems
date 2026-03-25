import React, { useState } from 'react';
const mc = [
  {q:'What was the main characteristic of early computers in the 1940s–1950s?',opts:['They used graphical interfaces','They operated without an operating system','They supported multitasking'],a:1},
  {q:'Which OS era used punch cards to process jobs sequentially?',opts:['Time-sharing systems','Batch processing systems','Mobile operating systems'],a:1},
  {q:'What improvement did multiprogramming OS introduce?',opts:['Touchscreen support','Multiple users at once','Multiple programs in memory simultaneously'],a:2},
  {q:'Time-sharing operating systems mainly allowed users to:',opts:['Use computers offline','Interact with computers simultaneously','Run only one program'],a:1},
  {q:'Which feature made personal computers more accessible in the 1990s?',opts:['Command-line interfaces','Graphical User Interfaces (GUI)','Batch processing'],a:1},
  {q:'Which of the following is an example of a mobile operating system?',opts:['Windows Server','Linux Ubuntu','Android'],a:2},
  {q:'Which OS function manages CPU time and multitasking?',opts:['File management','Process management','Device management'],a:1},
  {q:'What is a major challenge in OS development related to different devices?',opts:['Scalability','Hardware diversity','User experience'],a:1},
  {q:'Which modern OS trend focuses on running applications online?',opts:['Embedded systems','Cloud-based operating systems','Batch operating systems'],a:1},
  {q:'Which future technology requires new types of operating systems?',opts:['Desktop computing','Quantum computing','Word processing'],a:1},
];
const tf = [
  {q:'An operating system acts as a bridge between the user and computer hardware.',a:true},
  {q:'Batch processing systems allowed users to interact with programs in real time.',a:false},
  {q:'Time-sharing systems improved efficiency by allowing multiple users to access one computer.',a:true},
  {q:'Graphical User Interfaces replaced text-based command lines for ease of use.',a:true},
  {q:'Security is not a major concern in modern operating system development.',a:false},
  {q:'Performance optimization ensures efficient use of CPU, memory, and storage.',a:true},
  {q:'Internet of Things operating systems are designed for lightweight and embedded devices.',a:true},
  {q:'Energy efficiency is unimportant in mobile operating systems.',a:false},
  {q:'Cloud-based operating systems allow access to data from anywhere with internet connection.',a:true},
  {q:'Research on future operating systems includes support for quantum and edge computing.',a:true},
];
const labels = ['A','B','C'];
export default function Quiz() {
  const [phase, setPhase] = useState('idle');
  const [mcA, setMcA] = useState({});
  const [tfA, setTfA] = useState({});
  const [q, setQ] = useState(0);
  const [score, setScore] = useState(null);
  const start = () => { setPhase('mc'); setQ(0); setMcA({}); setTfA({}); setScore(null); };
  const nextMc = () => { if (q < mc.length-1) setQ(q+1); else { setPhase('tf'); setQ(0); } };
  const nextTf = () => {
    if (q < tf.length-1) setQ(q+1);
    else {
      let s = 0;
      mc.forEach((_,i) => { if (mcA[i]===mc[i].a) s++; });
      tf.forEach((_,i) => { if (tfA[i]===tf[i].a) s++; });
      setScore(s); setPhase('result');
    }
  };
  const grade = (s) => {
    const p = s/20;
    if (p>=0.9) return {label:'EXCELLENT',color:'var(--accent-green)',msg:'Outstanding. You have mastered OS fundamentals.'};
    if (p>=0.75) return {label:'PROFICIENT',color:'var(--accent-cyan)',msg:'Solid understanding. Review a few topics to reinforce your foundation.'};
    if (p>=0.5) return {label:'DEVELOPING',color:'var(--accent-orange)',msg:'Keep studying! Focus on the history and types sections.'};
    return {label:'NEEDS REVIEW',color:'#ff4d6d',msg:'Go back and revisit the material carefully. You can do it!'};
  };
  const progBar = (val,max,color) => (
    <div style={{height:3,background:'var(--border-dim)',marginBottom:'2rem'}}>
      <div style={{height:'100%',width:`${(val/max)*100}%`,background:color,transition:'width 0.3s'}}/>
    </div>
  );
  return (
    <section id="quiz" style={{padding:'6rem 2rem',maxWidth:860,margin:'0 auto'}}>
      <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.3em',marginBottom:'0.75rem'}}>// SECTION_07 — KNOWLEDGE_CHECK</div>
      <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'var(--text-primary)',letterSpacing:'0.05em',marginBottom:'2.5rem'}}>
        Interactive <span style={{color:'var(--accent-cyan)'}}>Quiz</span>
      </h2>
      {phase==='idle'&&(
        <div style={{border:'1px solid var(--border-dim)',padding:'3rem',textAlign:'center',background:'var(--bg-card)'}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-muted)',letterSpacing:'0.2em',marginBottom:'1.5rem'}}>20 QUESTIONS · MULTIPLE CHOICE + TRUE/FALSE</div>
          <p style={{color:'var(--text-secondary)',marginBottom:'2rem',maxWidth:480,margin:'0 auto 2rem',lineHeight:1.7}}>
            Test your knowledge of Operating Systems with this 20-question assessment covering OS history, functions, types, and modern trends.
          </p>
          <button onClick={start} style={{fontFamily:'var(--font-display)',fontSize:13,fontWeight:600,letterSpacing:'0.15em',color:'var(--bg-primary)',background:'var(--accent-cyan)',border:'none',padding:'1rem 2.5rem',cursor:'pointer',textTransform:'uppercase'}}
            onMouseEnter={e=>e.target.style.opacity='0.85'}
            onMouseLeave={e=>e.target.style.opacity='1'}
          >INITIALIZE QUIZ</button>
        </div>
      )}
      {phase==='mc'&&(
        <div style={{animation:'fadeSlideUp 0.35s ease'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'1.25rem'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-cyan)',letterSpacing:'0.2em'}}>MULTIPLE CHOICE · Q{q+1} of {mc.length}</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>{Object.keys(mcA).length} answered</div>
          </div>
          {progBar(q,mc.length,'var(--accent-cyan)')}
          <div style={{border:'1px solid var(--border-dim)',padding:'2rem',background:'var(--bg-card)',marginBottom:'1.5rem'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.2em',marginBottom:'1rem'}}>QUESTION {q+1}</div>
            <p style={{fontSize:'1.05rem',color:'var(--text-primary)',lineHeight:1.65,marginBottom:'2rem'}}>{mc[q].q}</p>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {mc[q].opts.map((opt,i)=>{
                const sel=mcA[q]===i;
                return (
                  <button key={i} onClick={()=>setMcA(p=>({...p,[q]:i}))} style={{display:'flex',alignItems:'center',gap:14,padding:'1rem 1.25rem',background:sel?'rgba(0,212,255,0.08)':'transparent',cursor:'pointer',border:sel?'1px solid var(--accent-cyan)':'1px solid var(--border-dim)',textAlign:'left',transition:'all 0.2s'}}
                    onMouseEnter={e=>{if(!sel)e.currentTarget.style.borderColor='rgba(0,212,255,0.35)'}}
                    onMouseLeave={e=>{if(!sel)e.currentTarget.style.borderColor='var(--border-dim)'}}
                  >
                    <span style={{fontFamily:'var(--font-mono)',fontSize:12,fontWeight:600,color:sel?'var(--accent-cyan)':'var(--text-muted)',width:20,flexShrink:0}}>{labels[i]}</span>
                    <span style={{color:sel?'var(--text-primary)':'var(--text-secondary)',fontSize:'0.9rem'}}>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button onClick={nextMc} disabled={mcA[q]===undefined} style={{fontFamily:'var(--font-display)',fontSize:12,fontWeight:600,letterSpacing:'0.15em',color:mcA[q]!==undefined?'var(--bg-primary)':'var(--text-muted)',background:mcA[q]!==undefined?'var(--accent-cyan)':'var(--border-dim)',border:'none',padding:'0.75rem 2rem',cursor:mcA[q]!==undefined?'pointer':'not-allowed',textTransform:'uppercase'}}>
              {q<mc.length-1?'NEXT →':'TRUE/FALSE →'}
            </button>
          </div>
        </div>
      )}
      {phase==='tf'&&(
        <div style={{animation:'fadeSlideUp 0.35s ease'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'1.25rem'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent-green)',letterSpacing:'0.2em'}}>TRUE / FALSE · Q{q+1} of {tf.length}</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>MC complete ✓</div>
          </div>
          {progBar(q,tf.length,'var(--accent-green)')}
          <div style={{border:'1px solid var(--border-dim)',padding:'2rem',background:'var(--bg-card)',marginBottom:'1.5rem'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.2em',marginBottom:'1rem'}}>STATEMENT {q+11}</div>
            <p style={{fontSize:'1.05rem',color:'var(--text-primary)',lineHeight:1.65,marginBottom:'2rem'}}>{tf[q].q}</p>
            <div style={{display:'flex',gap:12}}>
              {[true,false].map(v=>{
                const sel=tfA[q]===v;
                return (
                  <button key={String(v)} onClick={()=>setTfA(p=>({...p,[q]:v}))} style={{flex:1,padding:'1rem',fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:700,letterSpacing:'0.15em',cursor:'pointer',transition:'all 0.2s',border:sel?`1px solid ${v?'var(--accent-green)':'#ff4d6d'}`:'1px solid var(--border-dim)',background:sel?(v?'rgba(0,255,136,0.1)':'rgba(255,77,109,0.1)'):'transparent',color:sel?(v?'var(--accent-green)':'#ff4d6d'):'var(--text-secondary)'}}>
                    {v?'TRUE':'FALSE'}
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button onClick={nextTf} disabled={tfA[q]===undefined} style={{fontFamily:'var(--font-display)',fontSize:12,fontWeight:600,letterSpacing:'0.15em',color:tfA[q]!==undefined?'var(--bg-primary)':'var(--text-muted)',background:tfA[q]!==undefined?'var(--accent-green)':'var(--border-dim)',border:'none',padding:'0.75rem 2rem',cursor:tfA[q]!==undefined?'pointer':'not-allowed',textTransform:'uppercase'}}>
              {q<tf.length-1?'NEXT →':'SUBMIT →'}
            </button>
          </div>
        </div>
      )}
      {phase==='result'&&score!==null&&(()=>{
        const g=grade(score);
        const mcScore = mc.filter((_,i)=>mcA[i]===mc[i].a).length;
        const tfScore = tf.filter((_,i)=>tfA[i]===tf[i].a).length;
        return (
          <div style={{border:`1px solid ${g.color}44`,padding:'3rem',background:'var(--bg-card)',textAlign:'center',animation:'fadeSlideUp 0.4s ease'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)',letterSpacing:'0.3em',marginBottom:'1rem'}}>ASSESSMENT COMPLETE</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'5rem',fontWeight:700,color:g.color,lineHeight:1}}>{score}</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-muted)',letterSpacing:'0.2em',marginBottom:'1.5rem'}}>OUT OF 20</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:700,color:g.color,letterSpacing:'0.1em',marginBottom:'1rem'}}>{g.label}</div>
            <p style={{color:'var(--text-secondary)',maxWidth:480,margin:'0 auto 2rem',lineHeight:1.7,fontSize:'0.9rem'}}>{g.msg}</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'2rem',textAlign:'left'}}>
              {[{label:'Multiple Choice',correct:mcScore,total:10,color:'var(--accent-cyan)'},{label:'True / False',correct:tfScore,total:10,color:'var(--accent-green)'}].map(b=>(
                <div key={b.label} style={{border:'1px solid var(--border-dim)',padding:'1.25rem'}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.2em',marginBottom:'0.5rem'}}>{b.label.toUpperCase()}</div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'1.75rem',fontWeight:700,color:b.color}}>{b.correct}<span style={{fontSize:'1rem',color:'var(--text-muted)'}}>/{b.total}</span></div>
                </div>
              ))}
            </div>
            <button onClick={start} style={{fontFamily:'var(--font-display)',fontSize:12,fontWeight:600,letterSpacing:'0.15em',color:'var(--bg-primary)',background:g.color,border:'none',padding:'0.75rem 2rem',cursor:'pointer',textTransform:'uppercase'}}>RETRY QUIZ</button>
          </div>
        );
      })()}
    </section>
  );
}
