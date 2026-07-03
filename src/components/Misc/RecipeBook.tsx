import { useState, useEffect, useRef } from "react";

const RECIPES = [
  {
    id:1, emoji:"☁️", cat:"Coffee", time:"5 min",
    title:"Whipped Black — No Milk Dalgona",
    tagline:"Dalgona-style whipped coffee. Looks fancy, takes 5 minutes, actually good.",
    baseServings:1,
    ingredients:[
      {id:"a",amount:4,unit:"g",name:"Nescafé Gold / BRU Gold",note:"~2g per tsp"},
      {id:"b",amount:8,unit:"g",name:"sugar",note:"~4g per tsp"},
      {id:"c",amount:29.574,unit:"ml",name:"hot water for whipping",note:"~30ml per 2 tbsp"},
      {id:"d",amount:200,unit:"ml",name:"cold water",note:"~¾ cup per 200ml"},
    ],
    steps:[
      {text:"Combine Nescafé Gold / BRU Gold, sugar, and hot water for whipping in a small bowl or cup.",timer:null},
      {text:"Whisk vigorously by hand for 3–4 minutes until thick, pale, foamy cream forms.",timer:240},
      {text:"Pour cold water into a glass with ice if available. Spoon whipped coffee on top. Stir before drinking.",timer:null},
    ],
    notes:"Works without milk entirely. The whipped foam on cold water is surprisingly satisfying. Skip sugar if you want pure caffeine hit — texture changes slightly but still works.",
  },
  {
    id:2, emoji:"🧊", cat:"Coffee", time:"6 min",
    title:"Iced Dalgona — Surat Summer Mode",
    tagline:"Surat summer special. Cold, strong, hits fast.",
    baseServings:1,
    ingredients:[
      {id:"a",amount:4,unit:"g",name:"Nescafé Gold / BRU Gold",note:"~2g per tsp"},
      {id:"b",amount:8,unit:"g",name:"sugar",note:"~4g per tsp"},
      {id:"c",amount:44.333,unit:"ml",name:"hot water for whipping",note:"~45ml per 3 tbsp"},
      {id:"d",amount:150,unit:"ml",name:"cold milk",note:"~¾ cup per 150ml"},
      {id:"e",amount:4,unit:"",name:"ice cubes",note:null},
    ],
    steps:[
      {text:"Whip Nescafé Gold / BRU Gold, sugar, and hot water for whipping until thick and creamy — 3–4 minutes by hand.",timer:240},
      {text:"Fill glass with ice cubes, pour cold milk over ice.",timer:null},
      {text:"Spoon whipped coffee on top. Let it sit for a minute before stirring — looks and tastes better.",timer:60},
    ],
    notes:"Your summer go-to. Surat June heat + iced coffee = actually functional afternoon. Don't skip the whipping step — it makes the whole thing taste 3× better. 1 cup = 240ml for reference.",
  },
  {
    id:3, emoji:"🫖", cat:"Coffee", time:"7 min",
    title:"Hot Milk Coffee — Evening Wind Down",
    tagline:"Closest to café latte you can get with instant. Warm, smooth, good for evenings.",
    baseServings:1,
    ingredients:[
      {id:"a",amount:4,unit:"g",name:"Nescafé Gold / BRU Gold",note:"~2g per tsp"},
      {id:"b",amount:44.333,unit:"ml",name:"hot water concentrate",note:"~45ml per 3 tbsp"},
      {id:"c",amount:150,unit:"ml",name:"full cream milk",note:"~¾ cup per 150ml"},
      {id:"d",amount:4,unit:"g",name:"sugar",note:"~4g per tsp, optional"},
    ],
    steps:[
      {text:"Dissolve Nescafé Gold / BRU Gold and sugar (optional) in hot water concentrate. Stir into a paste first, then add all the tbsp water.",timer:null},
      {text:"Heat full cream milk on stove until steaming but not boiling.",timer:90},
      {text:"Optional but worth it — pour hot milk into a jar, seal tight, shake hard for 30 seconds.",timer:30},
      {text:"Pour coffee concentrate into cup, add hot milk slowly. Foam goes on top if you made it.",timer:null},
    ],
    notes:"Heat milk properly — hot but not boiling. If you have a jar with a lid, shake the hot milk for 30 seconds to froth it before pouring. Instant frothed latte. 1 cup = 240ml for reference.",
  },
  {
    id:4, emoji:"📚", cat:"Coffee", time:"3 min",
    title:"Classic Black — Study Mode",
    tagline:"Strong, no fuss. Maximum caffeine, minimum effort.",
    baseServings:1,
    ingredients:[
      {id:"a",amount:4,unit:"g",name:"Nescafé Gold / BRU Gold",note:"~2g per tsp"},
      {id:"b",amount:200,unit:"ml",name:"hot water",note:"~¾ cup per 200ml"},
      {id:"c",amount:4,unit:"g",name:"sugar",note:"~4g per tsp, optional"},
    ],
    steps:[
      {text:"Add Nescafé Gold / BRU Gold and sugar (if using) to your cup.",timer:null},
      {text:"Pour hot water — not boiling, slightly cooled. Stir well.",timer:30},
      {text:"Drink as is. Optional: let sit for a minute if too hot.",timer:null},
    ],
    notes:"The baseline. When you just need coffee, not an experience. Use less water (~150ml) for a stronger, espresso-adjacent cup. 1 cup = 240ml for reference.",
  },
];

const FRAC=[[1/8,"⅛",.015],[1/4,"¼",.015],[1/3,"⅓",.04],[3/8,"⅜",.015],[1/2,"½",.015],[5/8,"⅝",.015],[2/3,"⅔",.04],[3/4,"¾",.015],[7/8,"⅞",.012]] as const;
function toFrac(n:number){if(!n)return"0";const w=Math.floor(n),f=n-w;if(f<.01)return String(w);if(f>.99)return String(w+1);let best:string|null=null,bd=Infinity;for(const[v,s,t]of FRAC){const d=Math.abs(f-v);if(d<t&&d<bd){bd=d;best=s;}}return best?(w>0?`${w} ${best}`:best):n.toFixed(1);}
const sc=(a:number,sv:number,b:number)=>toFrac((a*sv)/b);
const ft=(s:number)=>`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;

const STYLE_ID = "recipebook-scoped-reset";

export default function RecipeBook() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState("index");
  const [rId, setRId] = useState<number | null>(null);
  const [svs, setSvs] = useState<Record<number, number>>({});
  const [timers, setTimers] = useState<Record<string, { rem: number; running: boolean }>>({});
  const [cook, setCook] = useState(false);
  const [cStep, setCStep] = useState(0);
  const [catF, setCatF] = useState("All");

  // Scoped font + reset — does NOT touch document.body (previous version leaked
  // a global body background override across the whole SPA since routes don't
  // full-reload). Font link persists (harmless, dedup-checked); style tag is
  // scoped under .rb-scope and cleaned up on unmount.
  useEffect(() => {
    if (!document.querySelector('link[data-recipebook-font]')) {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap";
      l.setAttribute("data-recipebook-font", "true");
      document.head.appendChild(l);
    }
    let styleTag = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = STYLE_ID;
      styleTag.textContent = ".rb-scope,.rb-scope *,.rb-scope *::before,.rb-scope *::after{box-sizing:border-box;}.rb-scope button{font-family:inherit;}";
      document.head.appendChild(styleTag);
    }
    return () => {
      document.getElementById(STYLE_ID)?.remove();
    };
  }, []);

  useEffect(() => { scrollRef.current?.scrollTo({top:0}); }, [view, rId]);

  useEffect(() => {
    const iv = setInterval(() => {
      setTimers(p => {
        const n={...p}; let ch=false;
        for(const k in n){if(n[k].running&&n[k].rem>0){n[k]={rem:n[k].rem-1,running:n[k].rem-1>0};ch=true;}}
        return ch?n:p;
      });
    }, 1000);
    return ()=>clearInterval(iv);
  }, []);

  const recipe = RECIPES.find(r=>r.id===rId);
  const sv = rId ? (svs[rId]??1) : 1;
  const cats = ["All",...new Set(RECIPES.map(r=>r.cat))];
  const vis = catF==="All" ? RECIPES : RECIPES.filter(r=>r.cat===catF);

  const open = (id: number) => { setRId(id); setView("recipe"); setCook(false); setCStep(0); setSvs(p=>({[id]:1,...p})); };
  const back = () => { setView("index"); setRId(null); setCook(false); };
  const togT = (key: string, total: number) => setTimers(p=>{const c=p[key];if(!c||c.rem<=0)return{...p,[key]:{rem:total,running:true}};return{...p,[key]:{...c,running:!c.running}};});

  const BG="#F5F0E8", WH="#FFF", DK="#1A1008",
        TX="#231B12", MU="#6B5D4E", SB="#8A7A66",
        BO="#E8E0D4", PL="#EDEBE5", NT="#EDE9E0";
  const FF="'Inter',system-ui,sans-serif";
  const SF="'Playfair Display',Georgia,serif";

  if (view==="index") return (
    <div ref={scrollRef} className="rb-scope" style={{fontFamily:FF,background:BG,minHeight:"100vh",maxWidth:480,margin:"0 auto",overflowY:"auto"}}>
      <div style={{padding:"52px 24px 16px"}}>
        <p style={{fontSize:12,fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:SB,marginBottom:6}}>Miscellany</p>
        <h1 style={{fontFamily:SF,fontSize:30,fontWeight:900,color:DK,lineHeight:1.1}}>Recipes</h1>
        <p style={{fontSize:14,color:MU,marginTop:8,lineHeight:1.5}}>Not a project. Just things I actually make.</p>
      </div>
      <div style={{display:"flex",gap:8,overflowX:"auto",padding:"4px 24px 20px"}}>
        {cats.map(c=>(
          <button key={c} onClick={()=>setCatF(c)} style={{padding:"6px 18px",borderRadius:999,border:`1.5px solid ${c===catF?DK:BO}`,background:c===catF?DK:"transparent",color:c===catF?"#FFF":MU,fontSize:13,fontWeight:500,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}}>{c}</button>
        ))}
      </div>
      <div style={{padding:"0 16px 48px",display:"flex",flexDirection:"column",gap:12}}>
        {vis.map(r=>(
          <div key={r.id} onClick={()=>open(r.id)} style={{background:WH,borderRadius:18,padding:"20px 22px",cursor:"pointer",boxShadow:"0 1px 4px rgba(0,0,0,0.07),0 4px 16px rgba(0,0,0,0.04)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:11}}>
              <div style={{flex:1}}>
                <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:SB,marginBottom:5}}>{r.cat} · {r.time}</p>
                <h2 style={{fontFamily:SF,fontSize:21,fontWeight:800,color:DK,lineHeight:1.2}}>{r.title}</h2>
              </div>
              <span style={{fontSize:34,marginLeft:14,flexShrink:0,lineHeight:1}}>{r.emoji}</span>
            </div>
            <p style={{fontSize:13.5,color:MU,lineHeight:1.55}}>{r.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (view==="recipe"&&recipe) {
    const tKey=(i:number)=>`${rId}-${i}`;
    const gT=(i:number)=>timers[tKey(i)];

    return (
      <div ref={scrollRef} className="rb-scope" style={{fontFamily:FF,background:BG,minHeight:"100vh",maxWidth:480,margin:"0 auto",overflowY:"auto",position:"relative"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 22px 0"}}>
          <button onClick={back} style={{background:"none",border:"none",cursor:"pointer",fontSize:15,fontWeight:500,color:MU,padding:0}}>← Back</button>
          <span style={{fontSize:22,color:MU,lineHeight:1}}>⋯</span>
        </div>

        <div style={{padding:"14px 22px 64px"}}>
          <h1 style={{fontFamily:SF,fontSize:34,fontWeight:900,color:DK,lineHeight:1.08,marginBottom:10}}>{recipe.title}</h1>
          <p style={{fontSize:15,color:MU,lineHeight:1.62,marginBottom:26}}>{recipe.tagline}</p>

          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
            <span style={{fontSize:15,fontWeight:500,color:TX}}>Servings</span>
            <div style={{display:"flex",alignItems:"center",border:`1.5px solid ${BO}`,borderRadius:999,overflow:"hidden"}}>
              <button onClick={()=>setSvs(p=>({...p,[rId as number]:Math.max(1,sv-1)}))} style={{width:38,height:38,border:"none",background:"none",cursor:"pointer",fontSize:22,fontWeight:300,color:DK}}>−</button>
              <span style={{minWidth:30,textAlign:"center",fontSize:15,fontWeight:600,color:DK}}>{sv}</span>
              <button onClick={()=>setSvs(p=>({...p,[rId as number]:sv+1}))} style={{width:38,height:38,border:"none",background:"none",cursor:"pointer",fontSize:22,fontWeight:300,color:DK}}>+</button>
            </div>
          </div>

          <button onClick={()=>{setCook(true);setCStep(0);}} style={{width:"100%",background:DK,color:"#FFF",border:"none",borderRadius:14,padding:"16px 0",fontSize:16,fontWeight:600,cursor:"pointer",marginBottom:30,letterSpacing:"0.01em"}}>
            Cooking mode
          </button>

          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:SB,marginBottom:14}}>Ingredients</p>
          <div style={{marginBottom:28}}>
            {recipe.ingredients.map((ing,i)=>{
              const amt=sc(ing.amount,sv,recipe.baseServings);
              const unit=ing.unit?` ${ing.unit}`:"";
              const last=i===recipe.ingredients.length-1;
              return(
                <div key={ing.id} style={{fontSize:15,color:TX,lineHeight:1.65,paddingBottom:last?0:11,marginBottom:last?0:11,borderBottom:last?"none":`1px solid ${BO}`}}>
                  <b style={{fontWeight:600}}>{amt}{unit}</b> {ing.name}
                  {ing.note&&<span style={{color:SB,fontSize:13.5}}> ({ing.note})</span>}
                </div>
              );
            })}
          </div>

          <div style={{borderTop:`1px solid ${BO}`,marginBottom:26}}/>

          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:SB,marginBottom:18}}>Steps</p>
          <div style={{marginBottom:28}}>
            {recipe.steps.map((s,i)=>{
              const tk=tKey(i),t=gT(i);
              const rem=t?t.rem:s.timer;
              const running=t?.running||false;
              return(
                <div key={i} style={{display:"flex",gap:14,marginBottom:i<recipe.steps.length-1?22:0}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:DK,color:"#FFF",fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>{i+1}</div>
                  <div style={{flex:1,fontSize:15,color:TX,lineHeight:1.65}}>
                    {s.text}
                    {s.timer&&(
                      <div style={{marginTop:8}}>
                        <button onClick={()=>togT(tk,s.timer as number)} style={{display:"inline-flex",alignItems:"center",gap:8,background:running?DK:PL,color:running?"#FFF":MU,border:"none",borderRadius:999,padding:"7px 16px",fontSize:14,fontWeight:500,cursor:"pointer"}}>
                          <span style={{fontSize:11}}>{running?"⏸":"▷"}</span>
                          {ft(rem??s.timer as number)}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{borderTop:`1px solid ${BO}`,marginBottom:26}}/>

          <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:SB,marginBottom:14}}>Notes</p>
          <div style={{background:NT,borderRadius:13,padding:18,fontSize:14.5,color:MU,lineHeight:1.72}}>{recipe.notes}</div>
        </div>

        {cook&&(
          <div style={{position:"fixed",inset:0,background:DK,display:"flex",flexDirection:"column",padding:"44px 28px 36px",zIndex:99}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <span style={{fontSize:12,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"#5A4A38"}}>Step {cStep+1} / {recipe.steps.length}</span>
              <button onClick={()=>setCook(false)} style={{background:"none",border:"none",color:"#5A4A38",fontSize:22,cursor:"pointer",lineHeight:1}}>✕</button>
            </div>
            <div style={{height:2,background:"#2A1E12",borderRadius:1,marginBottom:44}}>
              <div style={{height:2,background:"#6A5A48",borderRadius:1,transition:"width 0.3s",width:`${((cStep+1)/recipe.steps.length)*100}%`}}/>
            </div>
            <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <p style={{fontFamily:SF,fontSize:28,fontWeight:700,color:"#FFF",lineHeight:1.35,marginBottom:32}}>{recipe.steps[cStep].text}</p>
              {recipe.steps[cStep].timer&&(()=>{
                const tk=tKey(cStep),t=gT(cStep);
                const rem=t?t.rem:recipe.steps[cStep].timer;
                const running=t?.running||false;
                return(
                  <button onClick={()=>togT(tk,recipe.steps[cStep].timer as number)} style={{display:"inline-flex",alignItems:"center",gap:10,background:"rgba(255,255,255,0.1)",color:"#FFF",border:"1.5px solid rgba(255,255,255,0.2)",borderRadius:999,padding:"12px 24px",fontSize:22,fontWeight:600,cursor:"pointer",width:"fit-content"}}>
                    {running?"⏸":"▷"} {ft(rem??recipe.steps[cStep].timer as number)}
                  </button>
                );
              })()}
            </div>
            <div style={{display:"flex",gap:12}}>
              <button onClick={()=>setCStep(Math.max(0,cStep-1))} disabled={cStep===0} style={{flex:1,padding:"15px 0",borderRadius:12,border:"1.5px solid rgba(255,255,255,0.12)",background:"transparent",color:cStep===0?"#3A2A1A":"#FFF",fontSize:15,fontWeight:500,cursor:cStep===0?"default":"pointer"}}>← Prev</button>
              <button onClick={()=>cStep<recipe.steps.length-1?setCStep(cStep+1):setCook(false)} style={{flex:2,padding:"15px 0",borderRadius:12,border:"none",background:"#FFF",color:DK,fontSize:15,fontWeight:700,cursor:"pointer"}}>
                {cStep<recipe.steps.length-1?"Next Step →":"Done ✓"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
