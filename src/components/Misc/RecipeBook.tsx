import { useState, useEffect, useRef } from "react";
import "./RecipeBook.css";

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

export default function RecipeBook() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState("index");
  const [rId, setRId] = useState<number | null>(null);
  const [svs, setSvs] = useState<Record<number, number>>({});
  const [timers, setTimers] = useState<Record<string, { rem: number; running: boolean }>>({});
  const [cook, setCook] = useState(false);
  const [cStep, setCStep] = useState(0);
  const [catF, setCatF] = useState("All");

  useEffect(() => {
    if (!document.querySelector('link[data-recipebook-font]')) {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap";
      l.setAttribute("data-recipebook-font", "true");
      document.head.appendChild(l);
    }
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

  if (view==="index") return (
    <div ref={scrollRef} className="rb-scope">
      <div className="rb-index">
        <div className="rb-index-head">
          <p className="rb-eyebrow">Miscellany</p>
          <h1 className="rb-h1">Recipes</h1>
          <p className="rb-lede">Not a project. Just things I actually make.</p>
        </div>
        <div className="rb-cats">
          {cats.map(c=>(
            <button key={c} onClick={()=>setCatF(c)} className={`rb-cat-btn${c===catF?" active":""}`}>{c}</button>
          ))}
        </div>
        <div className="rb-cards">
          {vis.map(r=>(
            <div key={r.id} onClick={()=>open(r.id)} className="rb-card">
              <div className="rb-card-top">
                <div>
                  <p className="rb-card-meta">{r.cat} · {r.time}</p>
                  <h2 className="rb-card-title">{r.title}</h2>
                </div>
                <span className="rb-card-emoji">{r.emoji}</span>
              </div>
              <p className="rb-card-tag">{r.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (view==="recipe"&&recipe) {
    const tKey=(i:number)=>`${rId}-${i}`;
    const gT=(i:number)=>timers[tKey(i)];

    return (
      <div ref={scrollRef} className="rb-scope">
        <div className="rb-detail-wrap">
          <div className="rb-detail-nav">
            <button onClick={back} className="rb-back-btn">← Back</button>
          </div>

          <div className="rb-detail-body">
            <h1 className="rb-detail-title">{recipe.title}</h1>
            <p className="rb-detail-tagline">{recipe.tagline}</p>

            <div className="rb-servings-row">
              <span className="rb-servings-label">Servings</span>
              <div className="rb-servings-ctrl">
                <button onClick={()=>setSvs(p=>({...p,[rId as number]:Math.max(1,sv-1)}))} className="rb-servings-btn">−</button>
                <span className="rb-servings-val">{sv}</span>
                <button onClick={()=>setSvs(p=>({...p,[rId as number]:sv+1}))} className="rb-servings-btn">+</button>
              </div>
            </div>

            <button onClick={()=>{setCook(true);setCStep(0);}} className="rb-cook-btn">
              Cooking mode
            </button>

            <p className="rb-section-label">Ingredients</p>
            <div className="rb-ing-list">
              {recipe.ingredients.map((ing,i)=>{
                const amt=sc(ing.amount,sv,recipe.baseServings);
                const unit=ing.unit?` ${ing.unit}`:"";
                const last=i===recipe.ingredients.length-1;
                return(
                  <div key={ing.id} className={`rb-ing-row${last?" last":""}`}>
                    <b>{amt}{unit}</b> {ing.name}
                    {ing.note&&<span className="rb-ing-note"> ({ing.note})</span>}
                  </div>
                );
              })}
            </div>

            <div className="rb-divider"/>

            <p className="rb-section-label">Steps</p>
            <div className="rb-steps">
              {recipe.steps.map((s,i)=>{
                const tk=tKey(i),t=gT(i);
                const rem=t?t.rem:s.timer;
                const running=t?.running||false;
                return(
                  <div key={i} className="rb-step">
                    <div className="rb-step-num">{i+1}</div>
                    <div className="rb-step-text">
                      {s.text}
                      {s.timer&&(
                        <div>
                          <button onClick={()=>togT(tk,s.timer as number)} className={`rb-timer-btn${running?" running":""}`}>
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

            <div className="rb-divider"/>

            <p className="rb-section-label">Notes</p>
            <div className="rb-notes-box">{recipe.notes}</div>
          </div>
        </div>

        {cook&&(
          <div className="rb-cooking">
            <div className="rb-cooking-inner">
              <div className="rb-cooking-head">
                <span className="rb-cooking-step-label">Step {cStep+1} / {recipe.steps.length}</span>
                <button onClick={()=>setCook(false)} className="rb-cooking-close">✕</button>
              </div>
              <div className="rb-cooking-progress-track">
                <div className="rb-cooking-progress-fill" style={{width:`${((cStep+1)/recipe.steps.length)*100}%`}}/>
              </div>
              <div className="rb-cooking-body">
                <p className="rb-cooking-text">{recipe.steps[cStep].text}</p>
                {recipe.steps[cStep].timer&&(()=>{
                  const tk=tKey(cStep),t=gT(cStep);
                  const rem=t?t.rem:recipe.steps[cStep].timer;
                  const running=t?.running||false;
                  return(
                    <button onClick={()=>togT(tk,recipe.steps[cStep].timer as number)} className="rb-cooking-timer">
                      {running?"⏸":"▷"} {ft(rem??recipe.steps[cStep].timer as number)}
                    </button>
                  );
                })()}
              </div>
              <div className="rb-cooking-actions">
                <button onClick={()=>setCStep(Math.max(0,cStep-1))} disabled={cStep===0} className="rb-cooking-prev">← Prev</button>
                <button onClick={()=>cStep<recipe.steps.length-1?setCStep(cStep+1):setCook(false)} className="rb-cooking-next">
                  {cStep<recipe.steps.length-1?"Next Step →":"Done ✓"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
