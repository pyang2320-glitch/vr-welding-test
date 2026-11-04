(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ah="modulepreload",ch=function(i,t){return new URL(i,t).href},Ia={},lh=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=ch(l,n),l in Ia)return;Ia[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":ah,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},sl={title:"Seabery VR Immersive Welding Worksites",kicker:"Pre-weld safety training",lead:"Step into a real-scale worksite. Find the hazards, choose the right PPE and get the workplace ready before the arc is struck.",draftNote:"Prototype v0.1. Safety content is a draft based on public guidance (ANSI Z49.1, OSHA, HSE, INSST, DGUV, ISO/EN) and is pending review by a qualified welding expert.",loading:"Loading worksite…",chooseEnv:"Choose a worksite",comingSoon:"Coming soon",available:"Available",howtoPc:"PC",howtoPcText:"Drag to look · WASD to move · click the floor to walk · click objects",howtoTablet:"Tablet",howtoTabletText:"Drag to look · tap the floor to walk · tap objects",howtoVr:"VR headset",howtoVrText:"Point and pull the trigger · aim at the floor to teleport · thumbstick to turn",enterVr:"Enter VR",vrUnsupported:"VR not available on this device",start:"Start",back:"Back",close:"Close",continue:"Continue",menu:"Menu"},rl={factory:{name:"Factory",desc:"Metal fabrication workshop with MAG/MMA welding bays, extraction and gas supply."},construction:{name:"Construction site",desc:"Steel structure erection outdoors, work at height and changing weather."},shipyard:{name:"Shipyard",desc:"Hull blocks, double bottoms and confined-space hot work."}},ol={title:"Your task: the pre-weld check",body:"You are about to weld in Bay 2 of the fabrication workshop. Before you strike an arc, walk around the welding area and find everything that is not safe. There are {count} hazards. Then visit the PPE locker and dress for the job.",tip:"Objects you can inspect light up orange when you point at them."},al={hazards:"Hazards",ppe:"PPE",hint:"Hint",finish:"Finish check",hintText:"Look around the booth, the bench, the gas supply and the walkway.",hintShown:"Orange markers show where to look.",inspect:"Inspect",allFound:"All hazards found. Go to the PPE locker, then finish the check.",ppeDone:"PPE check complete.",fixed:"Fixed: {name}"},cl={whatsWrong:"What is the problem here?",correct:"Correct",notQuite:"Not quite",why:"Why it matters",fix:"Fix it",basedOn:"Based on",question:"Question {n} of {total}"},ll={title:"Finish the check?",body:"You have found {found} of {total} hazards and completed {ppe} of {ppeTotal} PPE checks. Anything you have not found will count as missed.",keep:"Keep looking",finish:"Finish"},hl={title:"Final questions",body:"Answer {count} short questions to complete the module."},ul={title:"Safety check results",passed:"Ready to weld",notPassed:"Not ready to weld yet",passText:"You prepared the workplace safely. Keep these checks as a routine before every job.",failText:"Review the items below and try again. In a real workshop, missing one of these can cause an injury or a fire.",score:"Overall score",hazardsFound:"Hazards found",ppeCorrect:"PPE correct",quizCorrect:"Quiz correct",stOk:"Correct",stPart:"Found, wrong answer",stMiss:"Missed",retry:"Try again",menu:"Main menu",sourcesTitle:"Sources",sources:"ANSI Z49.1:2021 Safety in Welding, Cutting and Allied Processes (AWS) · OSHA 29 CFR 1910 Subpart Q · UK HSE welding fume guidance (STSU1-2019) · INSST NTP 494 · DGUV Regel 100-500 Kap. 2.26 · EN ISO 11611, EN 12477, ISO 16321-2, EN ISO 15012-1 (scope)."},dl={"AREA-01":{name:"Combustibles in the spark zone",label:"Box under the bench",options:["Nothing. It is normal storage under the bench.","Oily rags and cardboard are inside the spark zone and can catch fire.","The box is too heavy to lift safely."],why:"Sparks and spatter travel far and can start fires that smoulder unseen. Move combustibles away from the work, or cover them with fire-resistant material. If they cannot be moved or protected, do not weld.",fixText:"Rags moved to a closed metal bin outside the spark zone.",source:"ANSI Z49.1:2021 §6.1; OSHA 1910.252(a)(1)"},"VEN-01":{name:"Fume extraction off and out of position",label:"Fume extraction arm",options:["It is fine. General ventilation in the hall is enough.","The arm should point at the ceiling to remove hot air.","Extraction is switched off and parked away from the work. Position the hood close to the arc and switch it on."],why:"All welding fume, including mild steel fume, can cause lung cancer. Capturing fume at the source with local exhaust ventilation (LEV) is the expected control; general ventilation alone is not enough. Keep your head out of the plume.",fixText:"Extraction on and the hood positioned close to the work.",source:"ANSI Z49.1:2021 §5.3–5.4; HSE Safety Alert STSU1-2019"},"RAD-01":{name:"Curtain open to the walkway",label:"Booth curtain",options:["The curtain is open to the walkway, so arc radiation can reach people passing by.","Curtains should stay open so the supervisor can watch.","The curtain colour is wrong."],why:'Arc radiation can injure the eyes of people nearby ("arc eye"), not just the welder. Screens and curtains also stop spatter from reaching others. Close the curtain and make sure nobody nearby is unprotected before you strike the arc.',fixText:"Curtain closed. The walkway is protected.",source:"ANSI Z49.1:2021 §4.1.3; OSHA 1910.252(b)(2)(iii)"},"GAS-01":{name:"Gas cylinder not secured",label:"Shielding gas cylinder",options:["The cylinder is standing free. It must be chained upright so it cannot fall.","The cylinder should be laid on the floor to be more stable.","Nothing. Shielding gas is not flammable, so it is safe."],why:"A falling cylinder can break its valve and turn into a projectile. Keep cylinders chained upright, away from sparks, and never let them become part of the welding circuit.",fixText:"Cylinder chained upright to the trolley.",source:"ANSI Z49.1:2021 §10.8.2.1, §10.8.4.12–14; OSHA 1910.253(b)(5)"},"ELE-02":{name:"Live electrode holder left on the table",label:"Electrode holder",options:["It is fine as long as the welder comes back soon.","Cool the holder in a bucket of water before you put it down.","A live holder with an electrode is lying on the steel table. Remove the electrode, hang the holder on an insulated hook and switch the output off."],why:"A live electrode holder can give an electric shock or strike an arc on anything it touches. When you stop welding, remove the electrode and place the holder where it cannot touch people, metal or cylinders. Never cool a holder in water.",fixText:"Electrode removed and holder hung on the insulated hook.",source:"ANSI Z49.1:2021 §11.4.6, §11.4.8, §11.4.9.5; OSHA 1926.351(d)"},"AREA-02":{name:"Fire extinguisher blocked",label:"Fire extinguisher",options:["The extinguisher is blocked by pallets. Clear the access so it can be reached in seconds.","The extinguisher is in the wrong colour.","Nothing. Somebody can move the pallets if there is a fire."],why:"A small fire must be put out in seconds. Suitable fire-extinguishing equipment must be ready and within reach before you start welding.",fixText:"Pallets moved. The extinguisher is accessible.",source:"ANSI Z49.1:2021 §6.2.1.1"},"FAC-05":{name:"Open solvent can at the bench",label:"Solvent can",options:["It is useful to keep degreaser at hand while welding.","An open can of chlorinated degreaser is next to the arc. Close it and take it out of the welding area.","The can is only a problem if it is full."],why:"Arc UV and heat can turn chlorinated solvent vapour into phosgene, a highly toxic gas. Open flammable liquids are also a fire risk. Keep degreasing away from the welding area.",fixText:"Solvent can closed and removed from the welding area.",source:"ANSI Z49.1:2021 §5.5.4.1"}},fl={label:"PPE locker",title:"Dress for the job",intro:"Choose the right protection for MAG welding at this bay.",items:{"PPE-01":{q:"Which eye and face protection do you take?",options:["A helmet with a cracked cover lens. It still works.","A helmet with intact lenses and the filter shade suited to the process and current, with safety glasses underneath.","Safety glasses only. The arc is short."],why:"Arc radiation burns eyes and skin within seconds. The filter must suit the process and current, with no gaps that let light through. Safety glasses protect you from slag and grinding particles when the helmet is raised.",source:"ANSI Z49.1:2021 §4.2; ISO 16321-2 (scope)"},"PPE-02":{q:"Which clothing is correct?",options:["Polyester hoodie. It is warm.","Cotton t-shirt with rolled-up sleeves.","Flame-resistant welding jacket and trousers: collar and sleeves closed, no turn-ups, pockets empty."],why:"Sparks lodge in turn-ups, open pockets and rolled sleeves. Synthetic fabrics can melt onto the skin.",source:"ANSI Z49.1:2021 §4.3; EN ISO 11611 (scope)"},"PPE-03":{q:"Which gloves and footwear do you choose?",options:["Dry, undamaged welding gloves and safety boots, with the trousers over the boot tops.","Wet welding gloves. They keep your hands cool.","Torn gloves and trainers. It is a short job."],why:"Gloves protect against burns and are part of your insulation from electric shock, so wet or torn gloves increase the risk. Spatter can enter low or open shoes.",source:"ANSI Z49.1:2021 §4.3.2, §4.3.6, §11.4.9.3; EN 12477 (scope)"}}},pl=[{q:"Combustible materials near the work cannot be moved. What should you do?",options:["Weld quickly to reduce the risk.","Protect them with fire-resistant covers or guards. If they cannot be protected, do not weld.","Spray them with water and start."],why:"If combustibles cannot be moved or protected, the work must not start.",source:"ANSI Z49.1:2021 §6.1.4"},{q:"Why must you never cool a hot electrode holder by dipping it in water?",options:["It damages the electrode.","It makes the fume worse.","It can expose you to electric shock."],why:"Water greatly increases the risk of electric shock.",source:"OSHA 1926.351(d)(2); ANSI Z49.1:2021 §11.4.9.5"},{q:"According to UK HSE, is general room ventilation enough to control mild steel welding fume indoors?",options:["No. Engineering controls such as LEV are expected, with respiratory protection if exposure remains.","Yes, if the doors are open.","Only for TIG welding."],why:"HSE treats all welding fume, including mild steel fume, as a carcinogen and expects fume to be controlled at the source.",source:"HSE Safety Alert STSU1-2019"},{q:"Why must chlorinated degreasing be kept away from the welding arc?",options:["It makes the weld look dull.","Arc UV and heat can turn its vapour into phosgene, a highly toxic gas.","It is only a problem in winter."],why:"Phosgene can form from chlorinated hydrocarbon vapours exposed to the arc.",source:"ANSI Z49.1:2021 §5.5.4.1"},{q:"Why must a gas cylinder never become part of the welding circuit?",options:["An arc struck on a cylinder can weaken it.","It wastes shielding gas.","It changes the gas mixture."],why:"Arc strikes damage the cylinder wall and can lead to failure. Keep the work clamp and electrode away from cylinders.",source:"ANSI Z49.1:2021 §10.8.4.12–14"}],ml={kicker:"Weld practice",cta:"Practise welding",unlockTitle:"Weld practice unlocked",unlockText:"The workplace is safe. Now lay a bead with MIG/MAG, stick or TIG.",chooseTitle:"Choose a welding process",chooseBody:"Lay one bead along a butt joint on a steel plate. This is a short hands-on taster, not a technique assessment.",processes:{GMAW:{name:"GMAW · MIG/MAG",short:"wire-fed gun with shielding gas",desc:"A wire electrode is fed continuously through the gun while shielding gas protects the weld pool. Wire and gas start when you pull the trigger."},SMAW:{name:"SMAW · Stick (MMA)",short:"coated electrode that melts as you weld",desc:"A flux-coated electrode carries the current and melts into the joint. It gets shorter as you weld, so keep bringing your hand closer. The flux leaves slag on the bead, which you chip off afterwards."},GTAW:{name:"GTAW · TIG",short:"tungsten electrode, filler rod in the other hand",desc:"A non-consumable tungsten electrode makes the arc under shielding gas. Filler rod is added by hand into the front of the weld pool. Keep the tungsten out of the pool."}},howScreen:"Press and hold on the joint at the left mark, then move steadily to the right mark. Release to stop.",howVr:"Bring the tip close to the joint at the left mark and hold the trigger to strike the arc. Move steadily to the right mark. Release to stop.",helmet:"Your helmet is down. The auto-darkening filter darkens when the arc strikes.",joint:"Joint welded",finishPass:"Finish pass",change:"Change process",exit:"Exit practice",soundOn:"Sound on",soundOff:"Sound off",weldFirst:"Weld along the joint first.",electrodeUsed:"Electrode used up. A new one is fitted: carry on from where you stopped.",stuck:"The electrode stuck to the plate. Release the trigger and strike again, keeping a short gap.",tungsten:"The tungsten touched the plate. In real work you would stop and regrind it. Release the trigger and start again.",lost:"Arc lost: you moved too far from the plate. Release the trigger and strike again.",slagTitle:"Remove the slag",slagBody:"Stick welding leaves a layer of slag on the bead. Chip and brush it off before you inspect the weld. Keep your eye protection on: hot slag can fly.",chip:"Chip the slag",resultTitle:{great:"Great pass",good:"Good start",keep:"Keep practising"},fb:{coverage:{good:"Joint welded from mark to mark.",bad:"Part of the joint was not welded. Weld from the left mark to the right mark."},line:{good:"You stayed on the joint.",bad:"The bead wandered off the joint. Watch the front edge of the weld pool and follow the joint line."},pace:{good:"Good travel speed.",slow:"Too slow: the bead got wide and heaped up. Move a little faster.",fast:"Too fast: the bead is thin and narrow. Slow down so the metal can fuse."},steady:{good:"Smooth, steady movement.",bad:"Your speed kept changing. Try to move at an even pace."},distance:{good:"Good distance to the work.",far:"Often too far from the work: the arc becomes unstable and spatters.",close:"Often too close to the work. Keep a short, constant gap."}},markGood:"OK",markTip:"TIP",note:"Practice feedback is indicative only and is not a technique assessment.",soldamatic:"To train real welding technique with measured feedback, use the Soldamatic augmented-reality welding simulator.",again:"Weld again",done:"Done"},ca={app:sl,env:rl,brief:ol,hud:al,panel:cl,finishConfirm:ll,quizIntro:hl,results:ul,hazards:dl,ppe:fl,quiz:pl,practice:ml},hh=Object.freeze(Object.defineProperty({__proto__:null,app:sl,brief:ol,default:ca,env:rl,finishConfirm:ll,hazards:dl,hud:al,panel:cl,ppe:fl,practice:ml,quiz:pl,quizIntro:hl,results:ul},Symbol.toStringTag,{value:"Module"})),Ua=Object.assign({"./locales/en.json":()=>lh(()=>Promise.resolve().then(()=>hh),void 0,import.meta.url).then(i=>i.default)});let gl=ca,As="en";async function uh(){const t=[new URLSearchParams(location.search).get("lang"),...navigator.languages||[navigator.language]].filter(Boolean).map(e=>e.toLowerCase());for(const e of t){const n=[e,e.split("-")[0]].find(s=>Ua[`./locales/${s}.json`]);if(n){As=n;break}}As!=="en"&&(gl=await Ua[`./locales/${As}.json`]()),document.documentElement.lang=As}const Na=(i,t)=>t.split(".").reduce((e,n)=>e==null?void 0:e[n],i);function G(i,t){let e=Na(gl,i);return e===void 0&&(e=Na(ca,i)),e===void 0?i:(typeof e=="string"&&t&&(e=e.replace(/\{(\w+)\}/g,(n,s)=>t[s]??n)),e)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="170",dh=0,Fa=1,fh=2,_l=1,vl=2,Mn=3,kn=0,Fe=1,rn=2,Bn=0,Di=1,Ms=2,Oa=3,Ba=4,ph=5,Qn=100,mh=101,gh=102,_h=103,vh=104,xh=200,yh=201,Mh=202,Sh=203,_o=204,vo=205,wh=206,Eh=207,bh=208,Th=209,Ah=210,Rh=211,Ch=212,Ph=213,Lh=214,xo=0,yo=1,Mo=2,Fi=3,So=4,wo=5,Eo=6,bo=7,xl=0,Dh=1,Ih=2,zn=0,Uh=1,Nh=2,Fh=3,yl=4,Oh=5,Bh=6,zh=7,Ml=300,Oi=301,Bi=302,To=303,Ao=304,Mr=306,fr=1e3,ei=1001,Ro=1002,Xe=1003,kh=1004,Rs=1005,dn=1006,Pr=1007,ni=1008,An=1009,Sl=1010,wl=1011,Ss=1012,ha=1013,ii=1014,fn=1015,Es=1016,ua=1017,da=1018,zi=1020,El=35902,bl=1021,Tl=1022,an=1023,Al=1024,Rl=1025,Ii=1026,ki=1027,fa=1028,pa=1029,Cl=1030,ma=1031,ga=1033,or=33776,ar=33777,cr=33778,lr=33779,Co=35840,Po=35841,Lo=35842,Do=35843,Io=36196,Uo=37492,No=37496,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Ho=37813,Vo=37814,Go=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,$o=37820,Zo=37821,hr=36492,Ko=36494,jo=36495,Pl=36283,Jo=36284,Qo=36285,ta=36286,Hh=3200,Vh=3201,Ll=0,Gh=1,On="",Le="srgb",Gi="srgb-linear",Sr="linear",ae="srgb",hi=7680,za=519,Wh=512,Xh=513,qh=514,Dl=515,Yh=516,$h=517,Zh=518,Kh=519,ea=35044,ka="300 es",wn=2e3,pr=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ha=1234567;const ps=Math.PI/180,Hi=180/Math.PI;function En(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function _a(i,t){return(i%t+t)%t}function jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jh(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function Qh(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function tu(i,t=1){return t-Math.abs(_a(i,t*2)-t)}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function iu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function su(i,t){return i+Math.random()*(t-i)}function ru(i){return i*(.5-Math.random())}function ou(i){i!==void 0&&(Ha=i);let t=Ha+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function au(i){return i*ps}function cu(i){return i*Hi}function lu(i){return(i&i-1)===0&&i!==0}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function du(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ui={DEG2RAD:ps,RAD2DEG:Hi,generateUUID:En,clamp:Ce,euclideanModulo:_a,mapLinear:jh,inverseLerp:Jh,lerp:ms,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:ou,degToRad:au,radToDeg:cu,isPowerOfTwo:lu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:se,denormalize:on};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],S=s[4],x=s[7],N=s[2],A=s[5],C=s[8];return r[0]=o*_+a*E+c*N,r[3]=o*m+a*S+c*A,r[6]=o*p+a*x+c*C,r[1]=l*_+h*E+u*N,r[4]=l*m+h*S+u*A,r[7]=l*p+h*x+u*C,r[2]=d*_+f*E+g*N,r[5]=d*m+f*S+g*A,r[8]=d*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lr.makeScale(t,e)),this}rotate(t){return this.premultiply(Lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new zt;function Il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=ws("canvas");return i.style.display="block",i}const Va={};function ds(i){i in Va||(Va[i]=!0,console.warn(i))}function pu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=bn(i.r),i.g=bn(i.g),i.b=bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?Sr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ga=[.64,.33,.3,.6,.15,.06],Wa=[.2126,.7152,.0722],Xa=[.3127,.329],qa=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Gi]:{primaries:Ga,whitePoint:Xa,transfer:Sr,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:Wa,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:Ga,whitePoint:Xa,transfer:ae,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:Wa,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});let ui;class _u{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=ws("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vu=0;class Ul{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dr(s[o].image)):r.push(Dr(s[o]))}else r=Dr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xu=0;class De extends Wi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ei,s=ei,r=dn,o=ni,a=an,c=An,l=De.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=En(),this.name="",this.source=new Ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Ml;De.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,N=(p+1)/2,A=(h+d)/4,C=(u+_)/4,P=(g+m)/4;return S>x&&S>N?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=C/n):x>N?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=C/r,s=P/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yu extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nl extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const N=Math.sqrt(S),A=Math.atan2(N,p*E);m=Math.sin(m*A)/N,a=Math.sin(a*A)/N}const x=a*E;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ir.copy(this).projectOnVector(t),this.sub(Ir)}reflect(t){return this.sub(Ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new T,$a=new Hn;class ri{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ps.subVectors(this.max,ji),di.subVectors(t.a,ji),fi.subVectors(t.b,ji),pi.subVectors(t.c,ji),Pn.subVectors(fi,di),Ln.subVectors(pi,fi),qn.subVectors(di,pi);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-qn.z,qn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,qn.z,0,-qn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-qn.y,qn.x,0];return!Ur(e,di,fi,pi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,di,fi,pi,Ps))?!1:(Ls.crossVectors(Pn,Ln),e=[Ls.x,Ls.y,Ls.z],Ur(e,di,fi,pi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new T,new T,new T,new T,new T,new T,new T,new T],Qe=new T,Cs=new ri,di=new T,fi=new T,pi=new T,Pn=new T,Ln=new T,qn=new T,ji=new T,Ps=new T,Ls=new T,Yn=new T;function Ur(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);const a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),c=t.dot(Yn),l=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Su=new ri,Ji=new T,Nr=new T;class oi{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Nr)),this.expandByPoint(Ji.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new T,Fr=new T,Ds=new T,Dn=new T,Or=new T,Is=new T,Br=new T;class wr{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fr.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=Dn.dot(this.direction),c=-Dn.dot(Ds),l=Dn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fr).addScaledVector(Ds,d),f}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Or.subVectors(e,t),Is.subVectors(n,t),Br.crossVectors(Or,Is);let o=this.direction.dot(Br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);const c=a*this.direction.dot(Is.crossVectors(Dn,Is));if(c<0)return null;const l=a*this.direction.dot(Or.cross(Dn));if(l<0||c+l>o)return null;const h=-a*Dn.dot(Br);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),o=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Eu)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),In.crossVectors(n,Ge),In.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),In.crossVectors(n,Ge)),In.normalize(),Us.crossVectors(Ge,In),s[0]=In.x,s[4]=Us.x,s[8]=Ge.x,s[1]=In.y,s[5]=Us.y,s[9]=Ge.y,s[2]=In.z,s[6]=Us.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],S=n[7],x=n[11],N=n[15],A=s[0],C=s[4],P=s[8],w=s[12],y=s[1],L=s[5],V=s[9],k=s[13],q=s[2],et=s[6],Y=s[10],nt=s[14],W=s[3],mt=s[7],_t=s[11],Tt=s[15];return r[0]=o*A+a*y+c*q+l*W,r[4]=o*C+a*L+c*et+l*mt,r[8]=o*P+a*V+c*Y+l*_t,r[12]=o*w+a*k+c*nt+l*Tt,r[1]=h*A+u*y+d*q+f*W,r[5]=h*C+u*L+d*et+f*mt,r[9]=h*P+u*V+d*Y+f*_t,r[13]=h*w+u*k+d*nt+f*Tt,r[2]=g*A+_*y+m*q+p*W,r[6]=g*C+_*L+m*et+p*mt,r[10]=g*P+_*V+m*Y+p*_t,r[14]=g*w+_*k+m*nt+p*Tt,r[3]=E*A+S*y+x*q+N*W,r[7]=E*C+S*L+x*et+N*mt,r[11]=E*P+S*V+x*Y+N*_t,r[15]=E*w+S*k+x*nt+N*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,S=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,N=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=e*E+n*S+s*x+r*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=E*C,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=S*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*C,t[8]=x*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=N*C,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=c*l,S=c*h,x=c*u,N=n.x,A=n.y,C=n.z;return s[0]=(1-(_+p))*N,s[1]=(f+x)*N,s[2]=(g-S)*N,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+S)*C,s[9]=(m-E)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=mi.set(s[0],s[1],s[2]).length();const o=mi.set(s[4],s[5],s[6]).length(),a=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const l=1/r,h=1/o,u=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===wn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===wn)g=(o+r)*u,_=-2*u;else if(a===pr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new T,tn=new ne,wu=new T(0,0,0),Eu=new T(1,1,1),In=new T,Us=new T,Ge=new T,Za=new ne,Ka=new Hn;class je{constructor(t=0,e=0,n=0,s=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bu=0;const ja=new T,gi=new Hn,vn=new ne,Ns=new T,Qi=new T,Tu=new T,Au=new Hn,Ja=new T(1,0,0),Qa=new T(0,1,0),tc=new T(0,0,1),ec={type:"added"},Ru={type:"removed"},_i={type:"childadded",child:null},zr={type:"childremoved",child:null};class ve extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new T,e=new je,n=new Hn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new zt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(tc,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Qi,Ns,this.up):vn.lookAt(Ns,Qi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(vn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ec),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ec),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new T(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new T,xn=new T,kr=new T,yn=new T,vi=new T,xi=new T,nc=new T,Hr=new T,Vr=new T,Gr=new T,Wr=new ce,Xr=new ce,qr=new ce;class Ke{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),xn.subVectors(n,e),kr.subVectors(t,e);const o=en.dot(en),a=en.dot(xn),c=en.dot(kr),l=xn.dot(xn),h=xn.dot(kr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(o,yn.y),c.addScaledVector(a,yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,n),qr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wr,r.x),o.addScaledVector(Xr,r.y),o.addScaledVector(qr,r.z),o}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),xn.subVectors(t,e),en.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),en.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;vi.subVectors(s,n),xi.subVectors(r,n),Hr.subVectors(t,n);const c=vi.dot(Hr),l=xi.dot(Hr);if(c<=0&&l<=0)return e.copy(n);Vr.subVectors(t,s);const h=vi.dot(Vr),u=xi.dot(Vr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(vi,o);Gr.subVectors(t,r);const f=vi.dot(Gr),g=xi.dot(Gr);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(xi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return nc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(nc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(vi,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Yr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=_a(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yr(o,r,t+1/3),this.g=Yr(o,r,t),this.b=Yr(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Qt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ce(Ne.r*255,0,255))*65536+Math.round(Ce(Ne.g*255,0,255))*256+Math.round(Ce(Ne.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Le){Qt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Fs);const n=ms(Un.h,Fs.h,e),s=ms(Un.s,Fs.s,e),r=ms(Un.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Gt;Gt.NAMES=Fl;let Cu=0;class Wn extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=En(),this.name="",this.blending=Di,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=vo,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Re extends Wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new T,Os=new ft;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ea,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ea&&(t.usage=this.usage),t}}class Ol extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bl extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pu=0;const Ze=new ne,$r=new ve,yi=new T,We=new ri,ts=new ri,be=new T;class ye extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?Bl:Ol)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(We.min,ts.min),We.expandByPoint(be),be.addVectors(We.max,ts.max),We.expandByPoint(be)):(We.expandByPoint(ts.min),We.expandByPoint(ts.max))}We.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(yi.fromBufferAttribute(t,l),be.add(yi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new T,c[P]=new T;const l=new T,h=new T,u=new T,d=new ft,f=new ft,g=new ft,_=new T,m=new T;function p(P,w,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(_),a[w].add(_),a[y].add(_),c[P].add(m),c[w].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,w=E.length;P<w;++P){const y=E[P],L=y.start,V=y.count;for(let k=L,q=L+V;k<q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new T,x=new T,N=new T,A=new T;function C(P){N.fromBufferAttribute(s,P),A.copy(N);const w=a[P];S.copy(w),S.sub(N.multiplyScalar(N.dot(w))).normalize(),x.crossVectors(A,w);const L=x.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,w=E.length;P<w;++P){const y=E[P],L=y.start,V=y.count;for(let k=L,q=L+V;k<q;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new ne,$n=new wr,Bs=new oi,sc=new T,zs=new T,ks=new T,Hs=new T,Zr=new T,Vs=new T,rc=new T,Gs=new T;class dt extends ve{constructor(t=new ye,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Zr.fromBufferAttribute(u,t),o?Vs.addScaledVector(Zr,h):Vs.addScaledVector(Zr.sub(e),h))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Bs.containsPoint($n.origin)===!1&&($n.intersectSphere(Bs,sc)===null||$n.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(ic.copy(r).invert(),$n.copy(t.ray).applyMatrix4(ic),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,N=S;x<N;x+=3){const A=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=Ws(this,p,t,n,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Ws(this,o,t,n,l,h,u,E,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,N=S;x<N;x+=3){const A=x,C=x+1,P=x+2;s=Ws(this,p,t,n,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,x=m+2;s=Ws(this,o,t,n,l,h,u,E,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Lu(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===kn,a),c===null)return null;Gs.copy(a),Gs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gs);return l<e.near||l>e.far?null:{distance:l,point:Gs.clone(),object:i}}function Ws(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,zs),i.getVertexPosition(c,ks),i.getVertexPosition(l,Hs);const h=Lu(i,t,e,n,zs,ks,Hs,rc);if(h){const u=new T;Ke.getBarycoord(rc,zs,ks,Hs,u),s&&(h.uv=Ke.getInterpolatedAttribute(s,a,c,l,u,new ft)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,a,c,l,u,new ft)),o&&(h.normal=Ke.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new T,materialIndex:0};Ke.getNormal(zs,ks,Hs,d.normal),h.face=d,h.barycoord=u}return h}class cn extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,m,p,E,S,x,N,A,C,P,w){const y=x/C,L=N/P,V=x/2,k=N/2,q=A/2,et=C+1,Y=P+1;let nt=0,W=0;const mt=new T;for(let _t=0;_t<Y;_t++){const Tt=_t*L-k;for(let Ft=0;Ft<et;Ft++){const te=Ft*y-V;mt[_]=te*E,mt[m]=Tt*S,mt[p]=q,l.push(mt.x,mt.y,mt.z),mt[_]=0,mt[m]=0,mt[p]=A>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Ft/C),u.push(1-_t/P),nt+=1}}for(let _t=0;_t<P;_t++)for(let Tt=0;Tt<C;Tt++){const Ft=d+Tt+et*_t,te=d+Tt+et*(_t+1),j=d+(Tt+1)+et*(_t+1),st=d+(Tt+1)+et*_t;c.push(Ft,te,st),c.push(te,j,st),W+=6}a.addGroup(f,W,w),f+=W,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const s in n)t[s]=n[s]}return t}function Du(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Iu={clone:Vi,merge:Be};var Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kl extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new T,oc=new ft,ac=new ft;class ze extends kl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,oc,ac),e.subVectors(ac,oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class Fu extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(Mi,Si,t,e);s.layers=this.layers,this.add(s);const r=new ze(Mi,Si,t,e);r.layers=this.layers,this.add(r);const o=new ze(Mi,Si,t,e);o.layers=this.layers,this.add(o);const a=new ze(Mi,Si,t,e);a.layers=this.layers,this.add(a);const c=new ze(Mi,Si,t,e);c.layers=this.layers,this.add(c);const l=new ze(Mi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hl extends De{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ou extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cn(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Bn});r.uniforms.tEquirect.value=e;const o=new dt(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=dn),new Fu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Kr=new T,Bu=new T,zu=new zt;class Fn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Kr.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zu.getNormalMatrix(t),s=this.coplanarPoint(Kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new oi,Xs=new T;class xa{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],S=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+E).normalize(),n[3].setComponents(c-o,d-h,m-g,x-E).normalize(),n[4].setComponents(c-a,d-u,m-_,x-S).normalize(),e===wn)n[5].setComponents(c+a,d+u,m+_,x+S).normalize();else if(e===pr)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xs.x=s.normal.x>0?t.max.x:t.min.x,Xs.y=s.normal.y>0?t.max.y:t.min.y,Xs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ku(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class _e extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let S=0;S<l;S++){const x=S*u-r;g.push(x,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const S=E+l*p,x=E+l*(p+1),N=E+1+l*(p+1),A=E+1+l*p;f.push(S,x,A),f.push(x,N,A)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Hu,alphahash_pars_fragment:Vu,alphamap_fragment:Gu,alphamap_pars_fragment:Wu,alphatest_fragment:Xu,alphatest_pars_fragment:qu,aomap_fragment:Yu,aomap_pars_fragment:$u,batching_pars_vertex:Zu,batching_vertex:Ku,begin_vertex:ju,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:cd,color_vertex:ld,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:vd,envmap_fragment:xd,envmap_common_pars_fragment:yd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Id,envmap_vertex:wd,fog_vertex:Ed,fog_pars_vertex:bd,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Dd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Nd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:kd,lights_fragment_maps:Hd,lights_fragment_end:Vd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:Yd,map_pars_fragment:$d,map_particle_fragment:Zd,map_particle_pars_fragment:Kd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:tf,morphnormal_vertex:ef,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:rf,normal_fragment_maps:of,normal_pars_fragment:af,normal_pars_vertex:cf,normal_vertex:lf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:gf,premultiplied_alpha_fragment:_f,project_vertex:vf,dithering_fragment:xf,dithering_pars_fragment:yf,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Ef,shadowmap_vertex:bf,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:Rf,skinning_vertex:Cf,skinnormal_vertex:Pf,specularmap_fragment:Lf,specularmap_pars_fragment:Df,tonemapping_fragment:If,tonemapping_pars_fragment:Uf,transmission_fragment:Nf,transmission_pars_fragment:Ff,uv_pars_fragment:Of,uv_pars_vertex:Bf,uv_vertex:zf,worldpos_vertex:kf,background_vert:Hf,background_frag:Vf,backgroundCube_vert:Gf,backgroundCube_frag:Wf,cube_vert:Xf,cube_frag:qf,depth_vert:Yf,depth_frag:$f,distanceRGBA_vert:Zf,distanceRGBA_frag:Kf,equirect_vert:jf,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:cp,meshphong_vert:lp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:_p,shadow_frag:vp,sprite_vert:xp,sprite_frag:yp},ut={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},un={basic:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Be([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Be([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Be([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Be([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Be([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Be([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Be([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Be([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Be([ut.common,ut.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Be([ut.lights,ut.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};un.physical={uniforms:Be([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const qs={r:0,b:0,g:0},Kn=new je,Mp=new ne;function Sp(i,t,e,n,s,r,o){const a=new Gt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1;const x=g(E);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Mr)?(h===void 0&&(h=new dt(new cn(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Vi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Kn.copy(S.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mp.makeRotationFromEuler(Kn)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new dt(new _e(2,2),new Vn({name:"BackgroundMaterial",uniforms:Vi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(qs,zl(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m}}function wp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,L,V,k,q){let et=!1;const Y=u(k,V,L);r!==Y&&(r=Y,l(r.object)),et=f(y,k,V,q),et&&g(y,k,V,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,x(y,L,V,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,V){const k=V.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let et=q[L.id];et===void 0&&(et={},q[L.id]=et);let Y=et[k];return Y===void 0&&(Y=d(c()),et[k]=Y),Y}function d(y){const L=[],V=[],k=[];for(let q=0;q<e;q++)L[q]=0,V[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,L,V,k){const q=r.attributes,et=L.attributes;let Y=0;const nt=V.getAttributes();for(const W in nt)if(nt[W].location>=0){const _t=q[W];let Tt=et[W];if(Tt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),_t===void 0||_t.attribute!==Tt||Tt&&_t.data!==Tt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(y,L,V,k){const q={},et=L.attributes;let Y=0;const nt=V.getAttributes();for(const W in nt)if(nt[W].location>=0){let _t=et[W];_t===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor));const Tt={};Tt.attribute=_t,_t&&_t.data&&(Tt.data=_t.data),q[W]=Tt,Y++}r.attributes=q,r.attributesNum=Y,r.index=k}function _(){const y=r.newAttributes;for(let L=0,V=y.length;L<V;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const V=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;V[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),q[y]!==L&&(i.vertexAttribDivisor(y,L),q[y]=L)}function E(){const y=r.newAttributes,L=r.enabledAttributes;for(let V=0,k=L.length;V<k;V++)L[V]!==y[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function S(y,L,V,k,q,et,Y){Y===!0?i.vertexAttribIPointer(y,L,V,q,et):i.vertexAttribPointer(y,L,V,k,q,et)}function x(y,L,V,k){_();const q=k.attributes,et=V.getAttributes(),Y=L.defaultAttributeValues;for(const nt in et){const W=et[nt];if(W.location>=0){let mt=q[nt];if(mt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const _t=mt.normalized,Tt=mt.itemSize,Ft=t.get(mt);if(Ft===void 0)continue;const te=Ft.buffer,j=Ft.type,st=Ft.bytesPerElement,Et=j===i.INT||j===i.UNSIGNED_INT||mt.gpuType===ha;if(mt.isInterleavedBufferAttribute){const pt=mt.data,At=pt.stride,Dt=mt.offset;if(pt.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)p(W.location+kt,pt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let kt=0;kt<W.locationSize;kt++)m(W.location+kt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let kt=0;kt<W.locationSize;kt++)S(W.location+kt,Tt/W.locationSize,j,_t,At*st,(Dt+Tt/W.locationSize*kt)*st,Et)}else{if(mt.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt,mt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let pt=0;pt<W.locationSize;pt++)S(W.location+pt,Tt/W.locationSize,j,_t,Tt*st,Tt/W.locationSize*pt*st,Et)}}else if(Y!==void 0){const _t=Y[nt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(W.location,_t);break;case 3:i.vertexAttrib3fv(W.location,_t);break;case 4:i.vertexAttrib4fv(W.location,_t);break;default:i.vertexAttrib1fv(W.location,_t)}}}}E()}function N(){P();for(const y in n){const L=n[y];for(const V in L){const k=L[V];for(const q in k)h(k[q].object),delete k[q];delete L[V]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const V in L){const k=L[V];for(const q in k)h(k[q].object),delete k[q];delete L[V]}delete n[y.id]}function C(y){for(const L in n){const V=n[L];if(V[y.id]===void 0)continue;const k=V[y.id];for(const q in k)h(k[q].object),delete k[q];delete V[y.id]}}function P(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Ep(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function bp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==An&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:N,maxSamples:A}}function Tp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Fn,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,S=E*4;let x=p.clippingState||null;c.value=x,x=h(g,d,S,f);for(let N=0;N!==S;++N)x[N]=e[N];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ap(i){let t=new WeakMap;function e(o,a){return a===To?o.mapping=Oi:a===Ao&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===Ao)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ou(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gl extends kl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,cc=[.125,.215,.35,.446,.526,.582],ti=20,jr=new Gl,lc=new Gt;let Jr=null,Qr=0,to=0,eo=!1;const Jn=(1+Math.sqrt(5))/2,wi=1/Jn,hc=[new T(-Jn,wi,0),new T(Jn,wi,0),new T(-wi,0,Jn),new T(wi,0,Jn),new T(0,Jn,-wi),new T(0,Jn,wi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,Qr,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Es,format:an,colorSpace:Gi,depthBuffer:!1},s=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(r)),this._blurMaterial=Cp(r,t,e)}return s}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,s){const a=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lc),h.toneMapping=zn,h.autoClear=!1;const f=new Re({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new dt(new cn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(lc),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Ys(s,E*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hc[(s-r-1)%hc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ti-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const p=[];let E=0;for(let C=0;C<ti;++C){const P=C/_,w=Math.exp(-P*P/2);p.push(w),C===0?E+=w:C<m&&(E+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[s],N=3*x*(s>S-Li?s-S+Li:0),A=4*(this._cubeSize-x);Ys(e,N,A,3*x,2*x),c.setRenderTarget(e),c.render(u,jr)}}function Rp(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+cc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Li?c=cc[o-i+Li-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(w,_*g*A),S.set(d,m*g*A);const y=[A,A,A,A,A,A];x.set(y,p*g*A)}const N=new ye;N.setAttribute("position",new He(E,_)),N.setAttribute("uv",new He(S,m)),N.setAttribute("faceIndex",new He(x,p)),t.push(N),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uc(i,t,e){const n=new si(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cp(i,t,e){const n=new Float32Array(ti),s=new T(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function dc(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function fc(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===To||c===Ao,h=c===Oi||c===Bi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new na(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new na(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dp(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let S=0,x=E.length;S<x;S+=3){const N=E[S+0],A=E[S+1],C=E[S+2];d.push(N,A,A,C,C,N)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,x=E.length/3-1;S<x;S+=3){const N=S+0,A=S+1,C=S+2;d.push(N,A,A,C,C,N)}}else return;const m=new(Il(d)?Bl:Ol)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ip(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Up(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,N=1;x>t.maxTextureSize&&(N=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*N*4*u),C=new Nl(A,x,N,u);C.type=fn,C.needsUpdate=!0;const P=S*4;for(let y=0;y<u;y++){const L=m[y],V=p[y],k=E[y],q=x*N*4*y;for(let et=0;et<L.count;et++){const Y=et*P;f===!0&&(s.fromBufferAttribute(L,et),A[q+Y+0]=s.x,A[q+Y+1]=s.y,A[q+Y+2]=s.z,A[q+Y+3]=0),g===!0&&(s.fromBufferAttribute(V,et),A[q+Y+4]=s.x,A[q+Y+5]=s.y,A[q+Y+6]=s.z,A[q+Y+7]=0),_===!0&&(s.fromBufferAttribute(k,et),A[q+Y+8]=s.x,A[q+Y+9]=s.y,A[q+Y+10]=s.z,A[q+Y+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ft(x,N)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Wl extends De{constructor(t,e,n,s,r,o,a,c,l,h=Ii){if(h!==Ii&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ii),n===void 0&&h===ki&&(n=zi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xl=new De,pc=new Wl(1,1),ql=new Nl,Yl=new Mu,$l=new Hl,mc=[],gc=[],_c=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function Xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Er(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Se(e,n)}}function Vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),Se(e,n)}}function Gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),Se(e,n)}}function Wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function $p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Jp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=Dl,r=pc):r=Xl,e.setTexture2D(t||r,s)}function Qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yl,s)}function tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$l,s)}function em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ql,s)}function nm(i){switch(i){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return kp;case 35674:return Hp;case 35675:return Vp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return $p;case 36294:return Zp;case 36295:return Kp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){const e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){const e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){const e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){const e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){const e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){const e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function vm(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xl,r[o])}function xm(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yl,r[o])}function ym(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$l,r[o])}function Mm(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ql,r[o])}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}}class Em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}}class bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function yc(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){const n=i.name,s=n.length;for(no.lastIndex=0;;){const r=no.exec(n),o=no.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yc(e,l===void 0?new wm(a,i,t):new Em(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new bm(a),yc(e,u)),e=u}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Am=37297;let Rm=0;function Cm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Sc=new zt;function Pm(i){Qt._getMatrix(Sc,Qt.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(t),o)}else return s}function Lm(i,t){const e=Pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dm(i,t){let e;switch(t){case Uh:e="Linear";break;case Nh:e="Reinhard";break;case Fh:e="Cineon";break;case yl:e="ACESFilmic";break;case Bh:e="AgX";break;case zh:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new T;function Im(){Qt.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Nm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fs(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(i){return i.replace(Om,zm)}const Bm=new Map;function zm(i,t){let e=Vt[t];if(e===void 0){const n=Bm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(km,Hm)}function Hm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ac(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Dh:t="ENVMAP_BLENDING_MIX";break;case Ih:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ym(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Vm(e),l=Gm(e),h=Wm(e),u=Xm(e),d=qm(e),f=Um(e),g=Nm(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Lm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=ia(o),o=Ec(o,e),o=bc(o,e),a=ia(a),a=Ec(a,e),a=bc(a,e),o=Tc(o),a=Tc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,x=E+p+a,N=Mc(s,s.VERTEX_SHADER,S),A=Mc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,N),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(N).trim(),q=s.getShaderInfoLog(A).trim();let et=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,A);else{const nt=wc(s,N,"vertex"),W=wc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+nt+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||q==="")&&(Y=!1);Y&&(L.diagnostics={runnable:et,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(N),s.deleteShader(A),P=new ur(s,_),w=Fm(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Am)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=A,this}let $m=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}}function jm(i,t,e,n,s,r,o){const a=new va,c=new Zm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,y,L,V,k){const q=V.fog,et=k.geometry,Y=w.isMeshStandardMaterial?V.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),W=nt&&nt.mapping===Mr?nt.image.height:null,mt=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const _t=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Tt=_t!==void 0?_t.length:0;let Ft=0;et.morphAttributes.position!==void 0&&(Ft=1),et.morphAttributes.normal!==void 0&&(Ft=2),et.morphAttributes.color!==void 0&&(Ft=3);let te,j,st,Et;if(mt){const Xt=un[mt];te=Xt.vertexShader,j=Xt.fragmentShader}else te=w.vertexShader,j=w.fragmentShader,c.update(w),st=c.getVertexShaderID(w),Et=c.getFragmentShaderID(w);const pt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,le=!!w.map,Wt=!!w.matcap,de=!!nt,O=!!w.aoMap,we=!!w.lightMap,Yt=!!w.bumpMap,It=!!w.normalMap,Rt=!!w.displacementMap,re=!!w.emissiveMap,Ct=!!w.metalnessMap,b=!!w.roughnessMap,v=w.anisotropy>0,B=w.clearcoat>0,Q=w.dispersion>0,tt=w.iridescence>0,J=w.sheen>0,bt=w.transmission>0,rt=v&&!!w.anisotropyMap,xt=B&&!!w.clearcoatMap,Zt=B&&!!w.clearcoatNormalMap,it=B&&!!w.clearcoatRoughnessMap,gt=tt&&!!w.iridescenceMap,Pt=tt&&!!w.iridescenceThicknessMap,Lt=J&&!!w.sheenColorMap,yt=J&&!!w.sheenRoughnessMap,$t=!!w.specularMap,Ut=!!w.specularColorMap,oe=!!w.specularIntensityMap,I=bt&&!!w.transmissionMap,at=bt&&!!w.thicknessMap,X=!!w.gradientMap,Z=!!w.alphaMap,lt=w.alphaTest>0,ct=!!w.alphaHash,Nt=!!w.extensions;let he=zn;w.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(he=i.toneMapping);const me={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:j,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Gi,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:Wt,envMap:de,envMapMode:de&&nt.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:we,bumpMap:Yt,normalMap:It,displacementMap:d&&Rt,emissiveMap:re,normalMapObjectSpace:It&&w.normalMapType===Gh,normalMapTangentSpace:It&&w.normalMapType===Ll,metalnessMap:Ct,roughnessMap:b,anisotropy:v,anisotropyMap:rt,clearcoat:B,clearcoatMap:xt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:J,sheenColorMap:Lt,sheenRoughnessMap:yt,specularMap:$t,specularColorMap:Ut,specularIntensityMap:oe,transmission:bt,transmissionMap:I,thicknessMap:at,gradientMap:X,opaque:w.transparent===!1&&w.blending===Di&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:ct,combine:w.combine,mapUv:le&&_(w.map.channel),aoMapUv:O&&_(w.aoMap.channel),lightMapUv:we&&_(w.lightMap.channel),bumpMapUv:Yt&&_(w.bumpMap.channel),normalMapUv:It&&_(w.normalMap.channel),displacementMapUv:Rt&&_(w.displacementMap.channel),emissiveMapUv:re&&_(w.emissiveMap.channel),metalnessMapUv:Ct&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:rt&&_(w.anisotropyMap.channel),clearcoatMapUv:xt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(w.sheenRoughnessMap.channel),specularMapUv:$t&&_(w.specularMap.channel),specularColorMapUv:Ut&&_(w.specularColorMap.channel),specularIntensityMapUv:oe&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:at&&_(w.thicknessMap.channel),alphaMapUv:Z&&_(w.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(It||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!et.attributes.uv&&(le||Z),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:k.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===ae,decodeVideoTextureEmissive:re&&w.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(w.emissiveMap.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===rn,flipSided:w.side===Fe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)y.push(L),y.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(E(y,w),S(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function S(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const y=g[w.type];let L;if(y){const V=un[y];L=Iu.clone(V.uniforms)}else L=w.uniforms;return L}function N(w,y){let L;for(let V=0,k=h.length;V<k;V++){const q=h[V];if(q.cacheKey===y){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Ym(i,y,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:N,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function Jm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Qm),n.length>1&&n.sort(d||Rc),s.length>1&&s.sort(d||Rc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function t0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Cc,i.set(n,[o])):s>=r.length?(o=new Cc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Gt};break;case"SpotLight":e={position:new T,direction:new T,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function n0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i0=0;function s0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r0(i){const t=new e0,e=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,r=new ne,o=new ne;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,S=0,x=0,N=0,A=0,C=0;l.sort(s0);for(let w=0,y=l.length;w<y;w++){const L=l[w],V=L.color,k=L.intensity,q=L.distance,et=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*k,u+=V.g*k,d+=V.b*k;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],k);C++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,W=e.get(L);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=L.shadow.matrix,E++}n.directional[f]=Y,f++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(V).multiplyScalar(k),Y.distance=q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[_]=Y;const nt=L.shadow;if(L.map&&(n.spotLightMap[N]=L.map,N++,nt.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=nt.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=et,x++}_++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(V).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const nt=L.shadow,W=e.get(L);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(k),Y.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==N||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+N-A,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=N,P.numLightProbes=C,n.version=i0++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Pc(i){const t=new r0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function o0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Pc(i),t.set(s,[a])):r>=o.length?(a=new Pc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class a0 extends Wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c0 extends Wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u0(i,t,e){let n=new xa;const s=new ft,r=new ft,o=new ce,a=new a0({depthPacking:Vh}),c=new c0,l={},h=e.maxTextureSize,u={[kn]:Fe,[Fe]:kn,[rn]:rn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:l0,fragmentShader:h0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Bn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=p!==Mn&&this.type===Mn,q=p===Mn&&this.type!==Mn;for(let et=0,Y=A.length;et<Y;et++){const nt=A[et],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const mt=W.getFrameExtents();if(s.multiply(mt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,W.mapSize.y=r.y)),W.map===null||k===!0||q===!0){const Tt=this.type!==Mn?{minFilter:Xe,magFilter:Xe}:{};W.map!==null&&W.map.dispose(),W.map=new si(s.x,s.y,Tt),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const _t=W.getViewportCount();for(let Tt=0;Tt<_t;Tt++){const Ft=W.getViewport(Tt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),V.viewport(o),W.updateMatrices(nt,Tt),n=W.getFrustum(),x(C,P,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===Mn&&E(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,L)};function E(A,C){const P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function S(A,C,P,w){let y=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=y.uuid,k=C.uuid;let q=l[V];q===void 0&&(q={},l[V]=q);let et=q[k];et===void 0&&(et=y.clone(),q[k]=et,C.addEventListener("dispose",N)),y=et}if(y.visible=C.visible,y.wireframe=C.wireframe,w===Mn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=P}return y}function x(A,C,P,w,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Mn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=t.update(A),q=A.material;if(Array.isArray(q)){const et=k.groups;for(let Y=0,nt=et.length;Y<nt;Y++){const W=et[Y],mt=q[W.materialIndex];if(mt&&mt.visible){const _t=S(A,mt,w,y);A.onBeforeShadow(i,A,C,P,k,_t,W),i.renderBufferDirect(P,null,k,_t,A,W),A.onAfterShadow(i,A,C,P,k,_t,W)}}}else if(q.visible){const et=S(A,q,w,y);A.onBeforeShadow(i,A,C,P,k,et,null),i.renderBufferDirect(P,null,k,et,A,null),A.onAfterShadow(i,A,C,P,k,et,null)}}const V=A.children;for(let k=0,q=V.length;k<q;k++)x(V[k],C,P,w,y)}function N(A){A.target.removeEventListener("dispose",N);for(const P in l){const w=l[P],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const d0={[xo]:yo,[Mo]:Eo,[So]:bo,[Fi]:wo,[yo]:xo,[Eo]:Mo,[bo]:So,[wo]:Fi};function f0(i,t){function e(){let I=!1;const at=new ce;let X=null;const Z=new ce(0,0,0,0);return{setMask:function(lt){X!==lt&&!I&&(i.colorMask(lt,lt,lt,lt),X=lt)},setLocked:function(lt){I=lt},setClear:function(lt,ct,Nt,he,me){me===!0&&(lt*=he,ct*=he,Nt*=he),at.set(lt,ct,Nt,he),Z.equals(at)===!1&&(i.clearColor(lt,ct,Nt,he),Z.copy(at))},reset:function(){I=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,X=null,Z=null,lt=null;return{setReversed:function(ct){if(at!==ct){const Nt=t.get("EXT_clip_control");at?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const he=lt;lt=null,this.setClear(he)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?pt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ct){X!==ct&&!I&&(i.depthMask(ct),X=ct)},setFunc:function(ct){if(at&&(ct=d0[ct]),Z!==ct){switch(ct){case xo:i.depthFunc(i.NEVER);break;case yo:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ct}},setLocked:function(ct){I=ct},setClear:function(ct){lt!==ct&&(at&&(ct=1-ct),i.clearDepth(ct),lt=ct)},reset:function(){I=!1,X=null,Z=null,lt=null,at=!1}}}function s(){let I=!1,at=null,X=null,Z=null,lt=null,ct=null,Nt=null,he=null,me=null;return{setTest:function(Xt){I||(Xt?pt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Xt){at!==Xt&&!I&&(i.stencilMask(Xt),at=Xt)},setFunc:function(Xt,Ee,qe){(X!==Xt||Z!==Ee||lt!==qe)&&(i.stencilFunc(Xt,Ee,qe),X=Xt,Z=Ee,lt=qe)},setOp:function(Xt,Ee,qe){(ct!==Xt||Nt!==Ee||he!==qe)&&(i.stencilOp(Xt,Ee,qe),ct=Xt,Nt=Ee,he=qe)},setLocked:function(Xt){I=Xt},setClear:function(Xt){me!==Xt&&(i.clearStencil(Xt),me=Xt)},reset:function(){I=!1,at=null,X=null,Z=null,lt=null,ct=null,Nt=null,he=null,me=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,S=null,x=null,N=null,A=null,C=new Gt(0,0,0),P=0,w=!1,y=null,L=null,V=null,k=null,q=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,nt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=nt>=2);let mt=null,_t={};const Tt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),te=new ce().fromArray(Tt),j=new ce().fromArray(Ft);function st(I,at,X,Z){const lt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(I,ct),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<X;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(at+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ct}const Et={};Et[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(Fi),Yt(!1),It(Fa),pt(i.CULL_FACE),O(Bn);function pt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function At(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Dt(I,at){return u[I]!==at?(i.bindFramebuffer(I,at),u[I]=at,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function kt(I,at){let X=f,Z=!1;if(I){X=d.get(at),X===void 0&&(X=[],d.set(at,X));const lt=I.textures;if(X.length!==lt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Nt=lt.length;ct<Nt;ct++)X[ct]=i.COLOR_ATTACHMENT0+ct;X.length=lt.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function le(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Wt={[Qn]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};Wt[_h]=i.MIN,Wt[vh]=i.MAX;const de={[xh]:i.ZERO,[yh]:i.ONE,[Mh]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[Ah]:i.SRC_ALPHA_SATURATE,[bh]:i.DST_COLOR,[wh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[vo]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[Eh]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Lh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,at,X,Z,lt,ct,Nt,he,me,Xt){if(I===Bn){_===!0&&(At(i.BLEND),_=!1);return}if(_===!1&&(pt(i.BLEND),_=!0),I!==ph){if(I!==m||Xt!==w){if((p!==Qn||x!==Qn)&&(i.blendEquation(i.FUNC_ADD),p=Qn,x=Qn),Xt)switch(I){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,S=null,N=null,A=null,C.set(0,0,0),P=0,m=I,w=Xt}return}lt=lt||at,ct=ct||X,Nt=Nt||Z,(at!==p||lt!==x)&&(i.blendEquationSeparate(Wt[at],Wt[lt]),p=at,x=lt),(X!==E||Z!==S||ct!==N||Nt!==A)&&(i.blendFuncSeparate(de[X],de[Z],de[ct],de[Nt]),E=X,S=Z,N=ct,A=Nt),(he.equals(C)===!1||me!==P)&&(i.blendColor(he.r,he.g,he.b,me),C.copy(he),P=me),m=I,w=!1}function we(I,at){I.side===rn?At(i.CULL_FACE):pt(i.CULL_FACE);let X=I.side===Fe;at&&(X=!X),Yt(X),I.blending===Di&&I.transparent===!1?O(Bn):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function It(I){I!==dh?(pt(i.CULL_FACE),I!==L&&(I===Fa?i.cullFace(i.BACK):I===fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),L=I}function Rt(I){I!==V&&(Y&&i.lineWidth(I),V=I)}function re(I,at,X){I?(pt(i.POLYGON_OFFSET_FILL),(k!==at||q!==X)&&(i.polygonOffset(at,X),k=at,q=X)):At(i.POLYGON_OFFSET_FILL)}function Ct(I){I?pt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+et-1),mt!==I&&(i.activeTexture(I),mt=I)}function v(I,at,X){X===void 0&&(mt===null?X=i.TEXTURE0+et-1:X=mt);let Z=_t[X];Z===void 0&&(Z={type:void 0,texture:void 0},_t[X]=Z),(Z.type!==I||Z.texture!==at)&&(mt!==X&&(i.activeTexture(X),mt=X),i.bindTexture(I,at||Et[I]),Z.type=I,Z.texture=at)}function B(){const I=_t[mt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(I){te.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function yt(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function $t(I,at){let X=l.get(at);X===void 0&&(X=new WeakMap,l.set(at,X));let Z=X.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(at,I.name),X.set(I,Z))}function Ut(I,at){const Z=l.get(at).get(I);c.get(at)!==Z&&(i.uniformBlockBinding(at,Z,I.__bindingPointIndex),c.set(at,Z))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,_t={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,S=null,x=null,N=null,A=null,C=new Gt(0,0,0),P=0,w=!1,y=null,L=null,V=null,k=null,q=null,te.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:At,bindFramebuffer:Dt,drawBuffers:kt,useProgram:le,setBlending:O,setMaterial:we,setFlipSided:Yt,setCullFace:It,setLineWidth:Rt,setPolygonOffset:re,setScissorTest:Ct,activeTexture:b,bindTexture:v,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Pt,updateUBOMapping:$t,uniformBlockBinding:Ut,texStorage2D:Zt,texStorage3D:it,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:rt,compressedTexSubImage3D:xt,scissor:Lt,viewport:yt,reset:oe}}function Lc(i,t,e,n){const s=p0(n);switch(e){case bl:return i*t;case Al:return i*t;case Rl:return i*t*2;case fa:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case Cl:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case Tl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case or:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(t,8)/4;case Co:case Lo:return Math.max(i,8)*Math.max(t,8)/2;case Io:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hr:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pl:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(i){switch(i){case An:case Sl:return{byteLength:1,components:1};case Ss:case wl:case Es:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case ii:case ha:case fn:return{byteLength:4,components:1};case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function m0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):ws("canvas")}function _(b,v,B){let Q=1;const tt=Ct(b);if((tt.width>B||tt.height>B)&&(Q=B/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(Q*tt.width),bt=Math.floor(Q*tt.height);u===void 0&&(u=g(J,bt));const rt=v?g(J,bt):u;return rt.width=J,rt.height=bt,rt.getContext("2d").drawImage(b,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+bt+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,v,B,Q,tt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=v;if(v===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),v===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){const bt=tt?Sr:Qt.getTransfer(Q);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=bt===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(b,v){let B;return b?v===null||v===ii||v===zi?B=i.DEPTH24_STENCIL8:v===fn?B=i.DEPTH32F_STENCIL8:v===Ss&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ii||v===zi?B=i.DEPTH_COMPONENT24:v===fn?B=i.DEPTH_COMPONENT32F:v===Ss&&(B=i.DEPTH_COMPONENT16),B}function N(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xe&&b.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function A(b){const v=b.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),y(v)}function P(b){const v=n.get(b);if(v.__webglInit===void 0)return;const B=b.source,Q=d.get(B);if(Q){const tt=Q[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(b),Object.keys(Q).length===0&&d.delete(B)}n.remove(b)}function w(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const B=b.source,Q=d.get(B);delete Q[v.__cacheKey],o.memory.textures--}function y(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let tt=0;tt<v.__webglFramebuffer[Q].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[Q][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=b.textures;for(let Q=0,tt=B.length;Q<tt;Q++){const J=n.get(B[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[Q])}n.remove(b)}let L=0;function V(){L=0}function k(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function et(b,v){const B=n.get(b);if(b.isVideoTexture&&Rt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,b,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function Y(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){j(B,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function nt(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){j(B,b,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function W(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){st(B,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const mt={[fr]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},_t={[Xe]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Tt={[Wh]:i.NEVER,[Kh]:i.ALWAYS,[Xh]:i.LESS,[Dl]:i.LEQUAL,[qh]:i.EQUAL,[Zh]:i.GEQUAL,[Yh]:i.GREATER,[$h]:i.NOTEQUAL};function Ft(b,v){if(v.type===fn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===Pr||v.magFilter===Rs||v.magFilter===ni||v.minFilter===dn||v.minFilter===Pr||v.minFilter===Rs||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,mt[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,mt[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,mt[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,_t[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,_t[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xe||v.minFilter!==Rs&&v.minFilter!==ni||v.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function te(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",A));const Q=v.source;let tt=d.get(Q);tt===void 0&&(tt={},d.set(Q,tt));const J=q(v);if(J!==b.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[J].usedTimes++;const bt=tt[b.__cacheKey];bt!==void 0&&(tt[b.__cacheKey].usedTimes--,bt.usedTimes===0&&w(v)),b.__cacheKey=J,b.__webglTexture=tt[J].texture}return B}function j(b,v,B){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);const tt=te(b,v),J=v.source;e.bindTexture(Q,b.__webglTexture,i.TEXTURE0+B);const bt=n.get(J);if(J.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const rt=Qt.getPrimaries(Qt.workingColorSpace),xt=v.colorSpace===On?null:Qt.getPrimaries(v.colorSpace),Zt=v.colorSpace===On||rt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let it=_(v.image,!1,s.maxTextureSize);it=re(v,it);const gt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let Lt=S(v.internalFormat,gt,Pt,v.colorSpace,v.isVideoTexture);Ft(Q,v);let yt;const $t=v.mipmaps,Ut=v.isVideoTexture!==!0,oe=bt.__version===void 0||tt===!0,I=J.dataReady,at=N(v,it);if(v.isDepthTexture)Lt=x(v.format===ki,v.type),oe&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,gt,Pt,null));else if(v.isDataTexture)if($t.length>0){Ut&&oe&&e.texStorage2D(i.TEXTURE_2D,at,Lt,$t[0].width,$t[0].height);for(let X=0,Z=$t.length;X<Z;X++)yt=$t[X],Ut?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,gt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,yt.width,yt.height,0,gt,Pt,yt.data);v.generateMipmaps=!1}else Ut?(oe&&e.texStorage2D(i.TEXTURE_2D,at,Lt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,gt,Pt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,gt,Pt,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Lt,$t[0].width,$t[0].height,it.depth);for(let X=0,Z=$t.length;X<Z;X++)if(yt=$t[X],v.format!==an)if(gt!==null)if(Ut){if(I)if(v.layerUpdates.size>0){const lt=Lc(yt.width,yt.height,v.format,v.type);for(const ct of v.layerUpdates){const Nt=yt.data.subarray(ct*lt/yt.data.BYTES_PER_ELEMENT,(ct+1)*lt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ct,yt.width,yt.height,1,gt,Nt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,it.depth,gt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Lt,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,it.depth,gt,Pt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Lt,yt.width,yt.height,it.depth,0,gt,Pt,yt.data)}else{Ut&&oe&&e.texStorage2D(i.TEXTURE_2D,at,Lt,$t[0].width,$t[0].height);for(let X=0,Z=$t.length;X<Z;X++)yt=$t[X],v.format!==an?gt!==null?Ut?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,gt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,gt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,yt.width,yt.height,0,gt,Pt,yt.data)}else if(v.isDataArrayTexture)if(Ut){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Lt,it.width,it.height,it.depth),I)if(v.layerUpdates.size>0){const X=Lc(it.width,it.height,v.format,v.type);for(const Z of v.layerUpdates){const lt=it.data.subarray(Z*X/it.data.BYTES_PER_ELEMENT,(Z+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,gt,Pt,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(v.isData3DTexture)Ut?(oe&&e.texStorage3D(i.TEXTURE_3D,at,Lt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(v.isFramebufferTexture){if(oe)if(Ut)e.texStorage2D(i.TEXTURE_2D,at,Lt,it.width,it.height);else{let X=it.width,Z=it.height;for(let lt=0;lt<at;lt++)e.texImage2D(i.TEXTURE_2D,lt,Lt,X,Z,0,gt,Pt,null),X>>=1,Z>>=1}}else if($t.length>0){if(Ut&&oe){const X=Ct($t[0]);e.texStorage2D(i.TEXTURE_2D,at,Lt,X.width,X.height)}for(let X=0,Z=$t.length;X<Z;X++)yt=$t[X],Ut?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Pt,yt):e.texImage2D(i.TEXTURE_2D,X,Lt,gt,Pt,yt);v.generateMipmaps=!1}else if(Ut){if(oe){const X=Ct(it);e.texStorage2D(i.TEXTURE_2D,at,Lt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Pt,it)}else e.texImage2D(i.TEXTURE_2D,0,Lt,gt,Pt,it);m(v)&&p(Q),bt.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function st(b,v,B){if(v.image.length!==6)return;const Q=te(b,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const J=n.get(tt);if(tt.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const bt=Qt.getPrimaries(Qt.workingColorSpace),rt=v.colorSpace===On?null:Qt.getPrimaries(v.colorSpace),xt=v.colorSpace===On||bt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Zt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!Zt&&!it?gt[Z]=_(v.image[Z],!0,s.maxCubemapSize):gt[Z]=it?v.image[Z].image:v.image[Z],gt[Z]=re(v,gt[Z]);const Pt=gt[0],Lt=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),$t=S(v.internalFormat,Lt,yt,v.colorSpace),Ut=v.isVideoTexture!==!0,oe=J.__version===void 0||Q===!0,I=tt.dataReady;let at=N(v,Pt);Ft(i.TEXTURE_CUBE_MAP,v);let X;if(Zt){Ut&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,$t,Pt.width,Pt.height);for(let Z=0;Z<6;Z++){X=gt[Z].mipmaps;for(let lt=0;lt<X.length;lt++){const ct=X[lt];v.format!==an?Lt!==null?Ut?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ct.width,ct.height,Lt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,$t,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ct.width,ct.height,Lt,yt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,$t,ct.width,ct.height,0,Lt,yt,ct.data)}}}else{if(X=v.mipmaps,Ut&&oe){X.length>0&&at++;const Z=Ct(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,$t,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Lt,yt,gt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,gt[Z].width,gt[Z].height,0,Lt,yt,gt[Z].data);for(let lt=0;lt<X.length;lt++){const Nt=X[lt].image[Z].image;Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Nt.width,Nt.height,Lt,yt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,$t,Nt.width,Nt.height,0,Lt,yt,Nt.data)}}else{Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,yt,gt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,Lt,yt,gt[Z]);for(let lt=0;lt<X.length;lt++){const ct=X[lt];Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Lt,yt,ct.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,$t,Lt,yt,ct.image[Z])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),J.__version=tt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Et(b,v,B,Q,tt,J){const bt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),xt=S(B.internalFormat,bt,rt,B.colorSpace),Zt=n.get(v),it=n.get(B);if(it.__renderTarget=v,!Zt.__hasExternalTextures){const gt=Math.max(1,v.width>>J),Pt=Math.max(1,v.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,xt,gt,Pt,v.depth,0,bt,rt,null):e.texImage2D(tt,J,xt,gt,Pt,0,bt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),It(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,it.__webglTexture,0,Yt(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,it.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(b,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const Q=v.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,J=x(v.stencilBuffer,tt),bt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Yt(v);It(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,J,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,b)}else{const Q=v.textures;for(let tt=0;tt<Q.length;tt++){const J=Q[tt],bt=r.convert(J.format,J.colorSpace),rt=r.convert(J.type),xt=S(J.internalFormat,bt,rt,J.colorSpace),Zt=Yt(v);B&&It(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,xt,v.width,v.height):It(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(v.depthTexture);Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et(v.depthTexture,0);const tt=Q.__webglTexture,J=Yt(v);if(v.depthTexture.format===Ii)It(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===ki)It(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(b){const v=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const Q=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",tt)};Q.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=Q}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=i.createRenderbuffer(),pt(v.__webglDepthbuffer[Q],b,!1);else{const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),pt(v.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,v,B){const Q=n.get(b);v!==void 0&&Et(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(b)}function le(b){const v=b.texture,B=n.get(b),Q=n.get(v);b.addEventListener("dispose",C);const tt=b.textures,J=b.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let xt=0;xt<v.mipmaps.length;xt++)B.__webglFramebuffer[rt][xt]=i.createFramebuffer()}else B.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)B.__webglFramebuffer[rt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(bt)for(let rt=0,xt=tt.length;rt<xt;rt++){const Zt=n.get(tt[rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&It(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<tt.length;rt++){const xt=tt[rt];B.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const Zt=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),gt=S(xt.internalFormat,Zt,it,xt.colorSpace,b.isXRRenderTarget===!0),Pt=Yt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,gt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Et(B.__webglFramebuffer[rt][xt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt);else Et(B.__webglFramebuffer[rt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,xt=tt.length;rt<xt;rt++){const Zt=tt[rt],it=n.get(Zt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Ft(i.TEXTURE_2D,Zt),Et(B.__webglFramebuffer,b,Zt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Q.__webglTexture),Ft(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Et(B.__webglFramebuffer[xt],b,v,i.COLOR_ATTACHMENT0,rt,xt);else Et(B.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,rt,0);m(v)&&p(rt),e.unbindTexture()}b.depthBuffer&&Dt(b)}function Wt(b){const v=b.textures;for(let B=0,Q=v.length;B<Q;B++){const tt=v[B];if(m(tt)){const J=E(b),bt=n.get(tt).__webglTexture;e.bindTexture(J,bt),p(J),e.unbindTexture()}}}const de=[],O=[];function we(b){if(b.samples>0){if(It(b)===!1){const v=b.textures,B=b.width,Q=b.height;let tt=i.COLOR_BUFFER_BIT;const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(b),rt=v.length>1;if(rt)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);const Zt=n.get(v[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,tt,i.NEAREST),c===!0&&(de.length=0,O.length=0,de.push(i.COLOR_ATTACHMENT0+xt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(de.push(J),O.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);const Zt=n.get(v[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Yt(b){return Math.min(s.maxSamples,b.samples)}function It(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function re(b,v){const B=b.colorSpace,Q=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Gi&&B!==On&&(Qt.getTransfer(B)===ae?(Q!==an||tt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Ct(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=kt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=It}function g0(i,t){function e(n,s=On){let r;const o=Qt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.BYTE;if(n===wl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Es)return i.HALF_FLOAT;if(n===bl)return i.ALPHA;if(n===Tl)return i.RGB;if(n===an)return i.RGBA;if(n===Al)return i.LUMINANCE;if(n===Rl)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===fa)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===or||n===ar||n===cr||n===lr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Uo)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Jo||n===Qo||n===ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class _0 extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v0={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:x0,fragmentShader:y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new _e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends Wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new M0,m=e.getContextAttributes();let p=null,E=null;const S=[],x=[],N=new ft;let A=null;const C=new ze;C.viewport=new ce;const P=new ze;P.viewport=new ce;const w=[C,P],y=new _0;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=S[j];return st===void 0&&(st=new io,S[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=S[j];return st===void 0&&(st=new io,S[j]=st),st.getGripSpace()},this.getHand=function(j){let st=S[j];return st===void 0&&(st=new io,S[j]=st),st.getHandSpace()};function k(j){const st=x.indexOf(j.inputSource);if(st===-1)return;const Et=S[st];Et!==void 0&&(Et.update(j.inputSource,j.frame,l||o),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",et);for(let j=0;j<S.length;j++){const st=x[j];st!==null&&(x[j]=null,S[j].disconnect(st))}L=null,V=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new si(f.framebufferWidth,f.framebufferHeight,{format:an,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Et=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ki:Ii,Et=m.stencil?zi:ii);const At={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new si(d.textureWidth,d.textureHeight,{format:an,type:An,depthTexture:new Wl(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et(j){for(let st=0;st<j.removed.length;st++){const Et=j.removed[st],pt=x.indexOf(Et);pt>=0&&(x[pt]=null,S[pt].disconnect(Et))}for(let st=0;st<j.added.length;st++){const Et=j.added[st];let pt=x.indexOf(Et);if(pt===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=x.length){x.push(Et),pt=Dt;break}else if(x[Dt]===null){x[Dt]=Et,pt=Dt;break}if(pt===-1)break}const At=S[pt];At&&At.connect(Et)}}const Y=new T,nt=new T;function W(j,st,Et){Y.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(Et.matrixWorld);const pt=Y.distanceTo(nt),At=st.projectionMatrix.elements,Dt=Et.projectionMatrix.elements,kt=At[14]/(At[10]-1),le=At[14]/(At[10]+1),Wt=(At[9]+1)/At[5],de=(At[9]-1)/At[5],O=(At[8]-1)/At[0],we=(Dt[8]+1)/Dt[0],Yt=kt*O,It=kt*we,Rt=pt/(-O+we),re=Rt*-O;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(re),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ct=kt+Rt,b=le+Rt,v=Yt-re,B=It+(pt-re),Q=Wt*le/b*Ct,tt=de*le/b*Ct;j.projectionMatrix.makePerspective(v,B,Q,tt,Ct,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function mt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Et=j.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),y.near=P.near=C.near=st,y.far=P.far=C.far=Et,(L!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,V=y.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,y.layers.mask=C.layers.mask|P.layers.mask;const pt=j.parent,At=y.cameras;mt(y,pt);for(let Dt=0;Dt<At.length;Dt++)mt(At[Dt],pt);At.length===2?W(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),_t(j,y,pt)};function _t(j,st,Et){Et===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Tt=null;function Ft(j,st){if(h=st.getViewerPose(l||o),g=st,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let pt=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,pt=!0);for(let Dt=0;Dt<Et.length;Dt++){const kt=Et[Dt];let le=null;if(f!==null)le=f.getViewport(kt);else{const de=u.getViewSubImage(d,kt);le=de.viewport,Dt===0&&(t.setRenderTargetTextures(E,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(E))}let Wt=w[Dt];Wt===void 0&&(Wt=new ze,Wt.layers.enable(Dt),Wt.viewport=new ce,w[Dt]=Wt),Wt.matrix.fromArray(kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),Dt===0&&(y.matrix.copy(Wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pt===!0&&y.cameras.push(Wt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Dt=u.getDepthInformation(Et[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let Et=0;Et<S.length;Et++){const pt=x[Et],At=S[Et];pt!==null&&At!==void 0&&At.update(pt,st,l||o)}Tt&&Tt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const te=new Vl;te.setAnimationLoop(Ft),this.setAnimationLoop=function(j){Tt=j},this.dispose=function(){}}}const jn=new je,w0=new ne;function E0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),S=E.envMap,x=E.envMapRotation;S&&(m.envMap.value=S,jn.copy(x),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(w0.makeRotationFromEuler(jn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const x=S.program;n.uniformBlockBinding(E,x)}function l(E,S){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));const N=S.program;n.updateUBOMapping(E,N);const A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){const S=u();E.__bindingPointIndex=S;const x=i.createBuffer(),N=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,N,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=s[E.id],x=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,C=x.length;A<C;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,y=P.length;w<y;w++){const L=P[w];if(f(L,A,w,N)===!0){const V=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let et=0;et<k.length;et++){const Y=k[et],nt=_(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,V+q,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,q),q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,x,N){const A=E.value,C=S+"_"+x;if(N[C]===void 0)return typeof A=="number"||typeof A=="boolean"?N[C]=A:N[C]=A.clone(),!0;{const P=N[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return N[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){const S=E.uniforms;let x=0;const N=16;for(let C=0,P=S.length;C<P;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,L=w.length;y<L;y++){const V=w[y],k=Array.isArray(V.value)?V.value:[V.value];for(let q=0,et=k.length;q<et;q++){const Y=k[q],nt=_(Y),W=x%N,mt=W%nt.boundary,_t=W+mt;x+=mt,_t!==0&&N-_t<nt.storage&&(x+=N-_t),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=nt.storage}}}const A=x%N;return A>0&&(x+=N-A),E.__size=x,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class T0{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let N=!1,A=0,C=0,P=null,w=-1,y=null;const L=new ce,V=new ce;let k=null;const q=new Gt(0);let et=0,Y=e.width,nt=e.height,W=1,mt=null,_t=null;const Tt=new ce(0,0,Y,nt),Ft=new ce(0,0,Y,nt);let te=!1;const j=new xa;let st=!1,Et=!1;const pt=new ne,At=new ne,Dt=new T,kt=new ce,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function de(){return P===null?W:1}let O=n;function we(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){const U="webgl2";if(O=we(U,M),O===null)throw we(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Yt,It,Rt,re,Ct,b,v,B,Q,tt,J,bt,rt,xt,Zt,it,gt,Pt,Lt,yt,$t,Ut,oe,I;function at(){Yt=new Lp(O),Yt.init(),Ut=new g0(O,Yt),It=new bp(O,Yt,t,Ut),Rt=new f0(O,Yt),It.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),re=new Up(O),Ct=new Jm,b=new m0(O,Yt,Rt,Ct,It,Ut,re),v=new Ap(x),B=new Pp(x),Q=new ku(O),oe=new wp(O,Q),tt=new Dp(O,Q,re,oe),J=new Fp(O,tt,Q,re),Lt=new Np(O,It,b),it=new Tp(Ct),bt=new jm(x,v,B,Yt,It,oe,it),rt=new E0(x,Ct),xt=new t0,Zt=new o0(Yt),Pt=new Sp(x,v,B,Rt,J,f,c),gt=new u0(x,J,It),I=new b0(O,re,It,Rt),yt=new Ep(O,Yt,re),$t=new Ip(O,Yt,re),re.programs=bt.programs,x.capabilities=It,x.extensions=Yt,x.properties=Ct,x.renderLists=xt,x.shadowMap=gt,x.state=Rt,x.info=re}at();const X=new S0(x,O);this.xr=X,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=Yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(Y,nt,!1))},this.getSize=function(M){return M.set(Y,nt)},this.setSize=function(M,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,nt=U,e.width=Math.floor(M*W),e.height=Math.floor(U*W),H===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Y*W,nt*W).floor()},this.setDrawingBufferSize=function(M,U,H){Y=M,nt=U,W=H,e.width=Math.floor(M*H),e.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,U,H,z){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,U,H,z),Rt.viewport(L.copy(Tt).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(Ft)},this.setScissor=function(M,U,H,z){M.isVector4?Ft.set(M.x,M.y,M.z,M.w):Ft.set(M,U,H,z),Rt.scissor(V.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){Rt.setScissorTest(te=M)},this.setOpaqueSort=function(M){mt=M},this.setTransparentSort=function(M){_t=M},this.getClearColor=function(M){return M.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(M=!0,U=!0,H=!0){let z=0;if(M){let F=!1;if(P!==null){const R=P.texture.format;F=R===ga||R===ma||R===pa}if(F){const R=P.texture.type,D=R===An||R===ii||R===Ss||R===zi||R===ua||R===da,$=Pt.getClearColor(),ot=Pt.getClearAlpha(),vt=$.r,wt=$.g,ht=$.b;D?(g[0]=vt,g[1]=wt,g[2]=ht,g[3]=ot,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=vt,_[1]=wt,_[2]=ht,_[3]=ot,O.clearBufferiv(O.COLOR,0,_))}else z|=O.COLOR_BUFFER_BIT}U&&(z|=O.DEPTH_BUFFER_BIT),H&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),xt.dispose(),Zt.dispose(),Ct.dispose(),v.dispose(),B.dispose(),J.dispose(),oe.dispose(),I.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",bs),X.removeEventListener("sessionend",Ye),mn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=re.autoReset,U=gt.enabled,H=gt.autoUpdate,z=gt.needsUpdate,F=gt.type;at(),re.autoReset=M,gt.enabled=U,gt.autoUpdate=H,gt.needsUpdate=z,gt.type=F}function ct(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Nt(M){const U=M.target;U.removeEventListener("dispose",Nt),he(U)}function he(M){me(M),Ct.remove(M)}function me(M){const U=Ct.get(M).programs;U!==void 0&&(U.forEach(function(H){bt.releaseProgram(H)}),M.isShaderMaterial&&bt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,z,F,R){U===null&&(U=le);const D=F.isMesh&&F.matrixWorld.determinant()<0,$=$i(M,U,H,z,F);Rt.setMaterial(z,D);let ot=H.index,vt=1;if(z.wireframe===!0){if(ot=tt.getWireframeAttribute(H),ot===void 0)return;vt=2}const wt=H.drawRange,ht=H.attributes.position;let Bt=wt.start*vt,Ot=(wt.start+wt.count)*vt;R!==null&&(Bt=Math.max(Bt,R.start*vt),Ot=Math.min(Ot,(R.start+R.count)*vt)),ot!==null?(Bt=Math.max(Bt,0),Ot=Math.min(Ot,ot.count)):ht!=null&&(Bt=Math.max(Bt,0),Ot=Math.min(Ot,ht.count));const qt=Ot-Bt;if(qt<0||qt===1/0)return;oe.setup(F,z,$,H,ot);let Kt,Ht=yt;if(ot!==null&&(Kt=Q.get(ot),Ht=$t,Ht.setIndex(Kt)),F.isMesh)z.wireframe===!0?(Rt.setLineWidth(z.wireframeLinewidth*de()),Ht.setMode(O.LINES)):Ht.setMode(O.TRIANGLES);else if(F.isLine){let Mt=z.linewidth;Mt===void 0&&(Mt=1),Rt.setLineWidth(Mt*de()),F.isLineSegments?Ht.setMode(O.LINES):F.isLineLoop?Ht.setMode(O.LINE_LOOP):Ht.setMode(O.LINE_STRIP)}else F.isPoints?Ht.setMode(O.POINTS):F.isSprite&&Ht.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Mt=F._multiDrawStarts,Pe=F._multiDrawCounts,ee=F._multiDrawCount,Je=ot?Q.get(ot).bytesPerElement:1,li=Ct.get(z).currentProgram.getUniforms();for(let Ve=0;Ve<ee;Ve++)li.setValue(O,"_gl_DrawID",Ve),Ht.render(Mt[Ve]/Je,Pe[Ve])}else if(F.isInstancedMesh)Ht.renderInstances(Bt,qt,F.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Pe=Math.min(H.instanceCount,Mt);Ht.renderInstances(Bt,qt,Pe)}else Ht.render(Bt,qt)};function Xt(M,U,H){M.transparent===!0&&M.side===rn&&M.forceSinglePass===!1?(M.side=Fe,M.needsUpdate=!0,Ie(M,U,H),M.side=kn,M.needsUpdate=!0,Ie(M,U,H),M.side=rn):Ie(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),p=Zt.get(H),p.init(U),S.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const z=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const R=F.material;if(R)if(Array.isArray(R))for(let D=0;D<R.length;D++){const $=R[D];Xt($,H,F),z.add($)}else Xt(R,H,F),z.add(R)}),S.pop(),p=null,z},this.compileAsync=function(M,U,H=null){const z=this.compile(M,U,H);return new Promise(F=>{function R(){if(z.forEach(function(D){Ct.get(D).currentProgram.isReady()&&z.delete(D)}),z.size===0){F(M);return}setTimeout(R,10)}Yt.get("KHR_parallel_shader_compile")!==null?R():setTimeout(R,10)})};let Ee=null;function qe(M){Ee&&Ee(M)}function bs(){mn.stop()}function Ye(){mn.start()}const mn=new Vl;mn.setAnimationLoop(qe),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(M){Ee=M,X.setAnimationLoop(M),M===null?mn.stop():mn.start()},X.addEventListener("sessionstart",bs),X.addEventListener("sessionend",Ye),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,P),p=Zt.get(M,S.length),p.init(U),S.push(p),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(At),Et=this.localClippingEnabled,st=it.init(this.clippingPlanes,Et),m=xt.get(M,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){const R=x.xr.getDepthSensingMesh();R!==null&&ai(R,U,-1/0,x.sortObjects)}ai(M,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(mt,_t),Wt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Wt&&Pt.addToRenderList(m,M),this.info.render.frame++,st===!0&&it.beginShadows();const H=p.state.shadowsArray;gt.render(H,M,U),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const R=U.cameras;if(F.length>0)for(let D=0,$=R.length;D<$;D++){const ot=R[D];qi(z,F,M,ot)}Wt&&Pt.render(M);for(let D=0,$=R.length;D<$;D++){const ot=R[D];ln(m,M,ot,ot.viewport)}}else F.length>0&&qi(z,F,M,U),Wt&&Pt.render(M),ln(m,M,U);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(x,M,U),oe.resetDefaultState(),w=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],st===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ai(M,U,H,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){z&&kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(At);const D=J.update(M),$=M.material;$.visible&&m.push(M,D,$,H,kt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const D=J.update(M),$=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),kt.copy(M.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),kt.copy(D.boundingSphere.center)),kt.applyMatrix4(M.matrixWorld).applyMatrix4(At)),Array.isArray($)){const ot=D.groups;for(let vt=0,wt=ot.length;vt<wt;vt++){const ht=ot[vt],Bt=$[ht.materialIndex];Bt&&Bt.visible&&m.push(M,D,Bt,H,kt.z,ht)}}else $.visible&&m.push(M,D,$,H,kt.z,null)}}const R=M.children;for(let D=0,$=R.length;D<$;D++)ai(R[D],U,H,z)}function ln(M,U,H,z){const F=M.opaque,R=M.transmissive,D=M.transparent;p.setupLightsView(H),st===!0&&it.setGlobalState(x.clippingPlanes,H),z&&Rt.viewport(L.copy(z)),F.length>0&&ci(F,U,H),R.length>0&&ci(R,U,H),D.length>0&&ci(D,U,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function qi(M,U,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new si(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Es:An,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const R=p.state.transmissionRenderTarget[z.id],D=z.viewport||L;R.setSize(D.z,D.w);const $=x.getRenderTarget();x.setRenderTarget(R),x.getClearColor(q),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&Pt.render(H);const ot=x.toneMapping;x.toneMapping=zn;const vt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),st===!0&&it.setGlobalState(x.clippingPlanes,z),ci(M,H,z),b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ht=0,Bt=U.length;ht<Bt;ht++){const Ot=U[ht],qt=Ot.object,Kt=Ot.geometry,Ht=Ot.material,Mt=Ot.group;if(Ht.side===rn&&qt.layers.test(z.layers)){const Pe=Ht.side;Ht.side=Fe,Ht.needsUpdate=!0,Ts(qt,H,z,Kt,Ht,Mt),Ht.side=Pe,Ht.needsUpdate=!0,wt=!0}}wt===!0&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R))}x.setRenderTarget($),x.setClearColor(q,et),vt!==void 0&&(z.viewport=vt),x.toneMapping=ot}function ci(M,U,H){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,R=M.length;F<R;F++){const D=M[F],$=D.object,ot=D.geometry,vt=z===null?D.material:z,wt=D.group;$.layers.test(H.layers)&&Ts($,U,H,ot,vt,wt)}}function Ts(M,U,H,z,F,R){M.onBeforeRender(x,U,H,z,F,R),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,U,H,z,M,R),F.transparent===!0&&F.side===rn&&F.forceSinglePass===!1?(F.side=Fe,F.needsUpdate=!0,x.renderBufferDirect(H,U,z,F,M,R),F.side=kn,F.needsUpdate=!0,x.renderBufferDirect(H,U,z,F,M,R),F.side=rn):x.renderBufferDirect(H,U,z,F,M,R),M.onAfterRender(x,U,H,z,F,R)}function Ie(M,U,H){U.isScene!==!0&&(U=le);const z=Ct.get(M),F=p.state.lights,R=p.state.shadowsArray,D=F.state.version,$=bt.getParameters(M,F.state,R,U,H),ot=bt.getProgramCacheKey($);let vt=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?B:v).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,vt===void 0&&(M.addEventListener("dispose",Nt),vt=new Map,z.programs=vt);let wt=vt.get(ot);if(wt!==void 0){if(z.currentProgram===wt&&z.lightsStateVersion===D)return Xn(M,$),wt}else $.uniforms=bt.getUniforms(M),M.onBeforeCompile($,x),wt=bt.acquireProgram($,ot),vt.set(ot,wt),z.uniforms=$.uniforms;const ht=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ht.clippingPlanes=it.uniform),Xn(M,$),z.needsLights=Cr(M),z.lightsStateVersion=D,z.needsLights&&(ht.ambientLightColor.value=F.state.ambient,ht.lightProbe.value=F.state.probe,ht.directionalLights.value=F.state.directional,ht.directionalLightShadows.value=F.state.directionalShadow,ht.spotLights.value=F.state.spot,ht.spotLightShadows.value=F.state.spotShadow,ht.rectAreaLights.value=F.state.rectArea,ht.ltc_1.value=F.state.rectAreaLTC1,ht.ltc_2.value=F.state.rectAreaLTC2,ht.pointLights.value=F.state.point,ht.pointLightShadows.value=F.state.pointShadow,ht.hemisphereLights.value=F.state.hemi,ht.directionalShadowMap.value=F.state.directionalShadowMap,ht.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ht.spotShadowMap.value=F.state.spotShadowMap,ht.spotLightMatrix.value=F.state.spotLightMatrix,ht.spotLightMap.value=F.state.spotLightMap,ht.pointShadowMap.value=F.state.pointShadowMap,ht.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=wt,z.uniformsList=null,wt}function Yi(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=ur.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Xn(M,U){const H=Ct.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function $i(M,U,H,z,F){U.isScene!==!0&&(U=le),b.resetTextureUnits();const R=U.fog,D=z.isMeshStandardMaterial?U.environment:null,$=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gi,ot=(z.isMeshStandardMaterial?B:v).get(z.envMap||D),vt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,wt=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ht=!!H.morphAttributes.position,Bt=!!H.morphAttributes.normal,Ot=!!H.morphAttributes.color;let qt=zn;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(qt=x.toneMapping);const Kt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ht=Kt!==void 0?Kt.length:0,Mt=Ct.get(z),Pe=p.state.lights;if(st===!0&&(Et===!0||M!==y)){const $e=M===y&&z.id===w;it.setState(z,M,$e)}let ee=!1;z.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Pe.state.version||Mt.outputColorSpace!==$||F.isBatchedMesh&&Mt.batching===!1||!F.isBatchedMesh&&Mt.batching===!0||F.isBatchedMesh&&Mt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Mt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Mt.instancing===!1||!F.isInstancedMesh&&Mt.instancing===!0||F.isSkinnedMesh&&Mt.skinning===!1||!F.isSkinnedMesh&&Mt.skinning===!0||F.isInstancedMesh&&Mt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Mt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Mt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Mt.instancingMorph===!1&&F.morphTexture!==null||Mt.envMap!==ot||z.fog===!0&&Mt.fog!==R||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==it.numPlanes||Mt.numIntersection!==it.numIntersection)||Mt.vertexAlphas!==vt||Mt.vertexTangents!==wt||Mt.morphTargets!==ht||Mt.morphNormals!==Bt||Mt.morphColors!==Ot||Mt.toneMapping!==qt||Mt.morphTargetsCount!==Ht)&&(ee=!0):(ee=!0,Mt.__version=z.version);let Je=Mt.currentProgram;ee===!0&&(Je=Ie(z,U,F));let li=!1,Ve=!1,Zi=!1;const ue=Je.getUniforms(),hn=Mt.uniforms;if(Rt.useProgram(Je.program)&&(li=!0,Ve=!0,Zi=!0),z.id!==w&&(w=z.id,Ve=!0),li||y!==M){Rt.buffers.depth.getReversed()?(pt.copy(M.projectionMatrix),mu(pt),gu(pt),ue.setValue(O,"projectionMatrix",pt)):ue.setValue(O,"projectionMatrix",M.projectionMatrix),ue.setValue(O,"viewMatrix",M.matrixWorldInverse);const Rn=ue.map.cameraPosition;Rn!==void 0&&Rn.setValue(O,Dt.setFromMatrixPosition(M.matrixWorld)),It.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ve=!0,Zi=!0)}if(F.isSkinnedMesh){ue.setOptional(O,F,"bindMatrix"),ue.setOptional(O,F,"bindMatrixInverse");const $e=F.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ue.setValue(O,"boneTexture",$e.boneTexture,b))}F.isBatchedMesh&&(ue.setOptional(O,F,"batchingTexture"),ue.setValue(O,"batchingTexture",F._matricesTexture,b),ue.setOptional(O,F,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",F._indirectTexture,b),ue.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",F._colorsTexture,b));const Ki=H.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Lt.update(F,H,Je),(Ve||Mt.receiveShadow!==F.receiveShadow)&&(Mt.receiveShadow=F.receiveShadow,ue.setValue(O,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hn.envMap.value=ot,hn.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Ve&&(ue.setValue(O,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&Rr(hn,Zi),R&&z.fog===!0&&rt.refreshFogUniforms(hn,R),rt.refreshMaterialUniforms(hn,z,W,nt,p.state.transmissionRenderTarget[M.id]),ur.upload(O,Yi(Mt),hn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ur.upload(O,Yi(Mt),hn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(O,"center",F.center),ue.setValue(O,"modelViewMatrix",F.modelViewMatrix),ue.setValue(O,"normalMatrix",F.normalMatrix),ue.setValue(O,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const $e=z.uniformsGroups;for(let Rn=0,Cn=$e.length;Rn<Cn;Rn++){const Da=$e[Rn];I.update(Da,Je),I.bind(Da,Je)}}return Je}function Rr(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Cr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,H){Ct.get(M.texture).__webglTexture=U,Ct.get(M.depthTexture).__webglTexture=H;const z=Ct.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=H===void 0,z.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const H=Ct.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){P=M,A=U,C=H;let z=!0,F=null,R=!1,D=!1;if(M){const ot=Ct.get(M);if(ot.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(O.FRAMEBUFFER,null),z=!1;else if(ot.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(ot.__hasExternalTextures)b.rebindTextures(M,Ct.get(M.texture).__webglTexture,Ct.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ht=M.depthTexture;if(ot.__boundDepthTexture!==ht){if(ht!==null&&Ct.has(ht)&&(M.width!==ht.image.width||M.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const vt=M.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(D=!0);const wt=Ct.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?F=wt[U][H]:F=wt[U],R=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?F=Ct.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?F=wt[H]:F=wt,L.copy(M.viewport),V.copy(M.scissor),k=M.scissorTest}else L.copy(Tt).multiplyScalar(W).floor(),V.copy(Ft).multiplyScalar(W).floor(),k=te;if(Rt.bindFramebuffer(O.FRAMEBUFFER,F)&&z&&Rt.drawBuffers(M,F),Rt.viewport(L),Rt.scissor(V),Rt.setScissorTest(k),R){const ot=Ct.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ot.__webglTexture,H)}else if(D){const ot=Ct.get(M.texture),vt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ot.__webglTexture,H||0,vt)}w=-1},this.readRenderTargetPixels=function(M,U,H,z,F,R,D){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&D!==void 0&&($=$[D]),$){Rt.bindFramebuffer(O.FRAMEBUFFER,$);try{const ot=M.texture,vt=ot.format,wt=ot.type;if(!It.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&H>=0&&H<=M.height-F&&O.readPixels(U,H,z,F,Ut.convert(vt),Ut.convert(wt),R)}finally{const ot=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,z,F,R,D){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&D!==void 0&&($=$[D]),$){const ot=M.texture,vt=ot.format,wt=ot.type;if(!It.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-z&&H>=0&&H<=M.height-F){Rt.bindFramebuffer(O.FRAMEBUFFER,$);const ht=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.bufferData(O.PIXEL_PACK_BUFFER,R.byteLength,O.STREAM_READ),O.readPixels(U,H,z,F,Ut.convert(vt),Ut.convert(wt),0);const Bt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Bt);const Ot=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pu(O,Ot,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,R),O.deleteBuffer(ht),O.deleteSync(Ot),R}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,H=0){M.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-H),F=Math.floor(M.image.width*z),R=Math.floor(M.image.height*z),D=U!==null?U.x:0,$=U!==null?U.y:0;b.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,D,$,F,R),Rt.unbindTexture()},this.copyTextureToTexture=function(M,U,H=null,z=null,F=0){M.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let R,D,$,ot,vt,wt,ht,Bt,Ot;const qt=M.isCompressedTexture?M.mipmaps[F]:M.image;H!==null?(R=H.max.x-H.min.x,D=H.max.y-H.min.y,$=H.isBox3?H.max.z-H.min.z:1,ot=H.min.x,vt=H.min.y,wt=H.isBox3?H.min.z:0):(R=qt.width,D=qt.height,$=qt.depth||1,ot=0,vt=0,wt=0),z!==null?(ht=z.x,Bt=z.y,Ot=z.z):(ht=0,Bt=0,Ot=0);const Kt=Ut.convert(U.format),Ht=Ut.convert(U.type);let Mt;U.isData3DTexture?(b.setTexture3D(U,0),Mt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Mt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Mt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const Pe=O.getParameter(O.UNPACK_ROW_LENGTH),ee=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Je=O.getParameter(O.UNPACK_SKIP_PIXELS),li=O.getParameter(O.UNPACK_SKIP_ROWS),Ve=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,qt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,qt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,wt);const Zi=M.isDataArrayTexture||M.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const hn=Ct.get(M),Ki=Ct.get(U),$e=Ct.get(hn.__renderTarget),Rn=Ct.get(Ki.__renderTarget);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,$e.__webglFramebuffer),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Cn=0;Cn<$;Cn++)Zi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(M).__webglTexture,F,wt+Cn),M.isDepthTexture?(ue&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,F,Ot+Cn),O.blitFramebuffer(ot,vt,R,D,ht,Bt,R,D,O.DEPTH_BUFFER_BIT,O.NEAREST)):ue?O.copyTexSubImage3D(Mt,F,ht,Bt,Ot+Cn,ot,vt,R,D):O.copyTexSubImage2D(Mt,F,ht,Bt,Ot+Cn,ot,vt,R,D);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Mt,F,ht,Bt,Ot,R,D,$,Kt,Ht,qt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,F,ht,Bt,Ot,R,D,$,Kt,qt.data):O.texSubImage3D(Mt,F,ht,Bt,Ot,R,D,$,Kt,Ht,qt):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,ht,Bt,R,D,Kt,Ht,qt.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,ht,Bt,qt.width,qt.height,Kt,qt.data):O.texSubImage2D(O.TEXTURE_2D,F,ht,Bt,R,D,Kt,Ht,qt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ee),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,li),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve),F===0&&U.generateMipmaps&&O.generateMipmap(Mt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H=null,z=null,F=0){return M.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,z=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,H,z,F)},this.initRenderTarget=function(M){Ct.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),Rt.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Rt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Ma{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zl extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class A0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ea,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new T;class mr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class br extends Wn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ei;const es=new T,bi=new T,Ti=new T,Ai=new ft,ns=new ft,Kl=new ne,Zs=new T,is=new T,Ks=new T,Dc=new ft,so=new ft,Ic=new ft;class gs extends ve{constructor(t=new br){if(super(),this.isSprite=!0,this.type="Sprite",Ei===void 0){Ei=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new A0(e,5);Ei.setIndex([0,1,2,0,2,3]),Ei.setAttribute("position",new mr(n,3,0,!1)),Ei.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Ei,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Kl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ti.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;js(Zs.set(-.5,-.5,0),Ti,o,bi,s,r),js(is.set(.5,-.5,0),Ti,o,bi,s,r),js(Ks.set(.5,.5,0),Ti,o,bi,s,r),Dc.set(0,0),so.set(1,0),Ic.set(1,1);let a=t.ray.intersectTriangle(Zs,is,Ks,!1,es);if(a===null&&(js(is.set(-.5,.5,0),Ti,o,bi,s,r),so.set(0,1),a=t.ray.intersectTriangle(Zs,Ks,is,!1,es),a===null))return;const c=t.ray.origin.distanceTo(es);c<t.near||c>t.far||e.push({distance:c,point:es.clone(),uv:Ke.getInterpolation(es,Zs,is,Ks,Dc,so,Ic,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(i,t,e,n,s,r){Ai.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ns.x=r*Ai.x-s*Ai.y,ns.y=s*Ai.x+r*Ai.y):ns.copy(Ai),i.copy(t),i.x+=ns.x,i.y+=ns.y,i.applyMatrix4(Kl)}class R0 extends De{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Xe,h=Xe,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends He{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ri=new ne,Nc=new ne,Js=[],Fc=new ri,C0=new ne,ss=new dt,rs=new oi;class ro extends dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,C0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),Fc.copy(t.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Fc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),rs.copy(t.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),t.ray.intersectsSphere(rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ri),Nc.multiplyMatrices(n,Ri),ss.matrixWorld=Nc,ss.raycast(t,Js);for(let o=0,a=Js.length;o<a;o++){const c=Js[o];c.instanceId=r,c.object=this,e.push(c)}Js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new R0(new Float32Array(s*this.count),s,this.count,fa,fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jl extends Wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new T,_r=new T,Oc=new ne,os=new wr,Qs=new oi,oo=new T,Bc=new T;class P0 extends ve{constructor(t=new ye,e=new jl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;Oc.copy(s).invert(),os.copy(t.ray).applyMatrix4(Oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),E=h.getX(_+1),S=tr(this,t,os,c,p,E);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=tr(this,t,os,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=tr(this,t,os,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=tr(this,t,os,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(gr.fromBufferAttribute(o,s),_r.fromBufferAttribute(o,r),e.distanceSqToSegment(gr,_r,oo,Bc)>n)return;oo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(oo);if(!(c<t.near||c>t.far))return{distance:c,point:Bc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Jl extends Wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zc=new ne,sa=new wr,er=new oi,nr=new T;class L0 extends ve{constructor(t=new ye,e=new Jl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;zc.copy(s).invert(),sa.copy(t.ray).applyMatrix4(zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);nr.fromBufferAttribute(u,m),kc(nr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)nr.fromBufferAttribute(u,g),kc(nr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kc(i,t,e,n,s,r,o){const a=sa.distanceSqToPoint(i);if(a<e){const c=new T;sa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Sa extends De{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],o=[],a=new T,c=new ne;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wa extends pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class D0 extends wa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ea(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ir=new T,ao=new Ea,co=new Ea,lo=new Ea;class Ql extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),l=ir);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ao.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),co.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),lo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),co.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),lo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ao.calc(c),co.calc(c),lo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function I0(i,t){const e=1-i;return e*e*t}function U0(i,t){return 2*(1-i)*i*t}function N0(i,t){return i*i*t}function _s(i,t,e,n){return I0(i,t)+U0(i,e)+N0(i,n)}function F0(i,t){const e=1-i;return e*e*e*t}function O0(i,t){const e=1-i;return 3*e*e*i*t}function B0(i,t){return 3*(1-i)*i*i*t}function z0(i,t){return i*i*i*t}function vs(i,t,e,n,s){return F0(i,t)+O0(i,e)+B0(i,n)+z0(i,s)}class th extends pn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class k0 extends pn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y),vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eh extends pn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H0 extends pn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nh extends pn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ih extends pn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y),_s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sh extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hc(a,c.x,l.x,h.x,u.x),Hc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var ra=Object.freeze({__proto__:null,ArcCurve:D0,CatmullRomCurve3:Ql,CubicBezierCurve:th,CubicBezierCurve3:k0,EllipseCurve:wa,LineCurve:eh,LineCurve3:H0,QuadraticBezierCurve:nh,QuadraticBezierCurve3:ih,SplineCurve:sh});class V0 extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ra[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ra[s.type]().fromJSON(s))}return this}}class G0 extends V0{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new eh(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new nh(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new th(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new sh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new wa(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ba extends ye{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ce(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new T,d=new ft,f=new T,g=new T,_=new T;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=e;E++){const S=n+E*h*s,x=Math.sin(S),N=Math.cos(S);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*x,u.y=t[A].y,u.z=t[A].x*N,o.push(u.x,u.y,u.z),d.x=E/e,d.y=A/(t.length-1),a.push(d.x,d.y);const C=c[3*A+0]*x,P=c[3*A+1],w=c[3*A+0]*N;l.push(C,P,w)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const x=S+E*t.length,N=x,A=x+t.length,C=x+t.length+1,P=x+1;r.push(N,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.points,t.segments,t.phiStart,t.phiLength)}}class xs extends ba{constructor(t=1,e=1,n=4,s=8){const r=new G0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new xs(t.radius,t.length,t.capSegments,t.radialSegments)}}class vr extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new T,h=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Tn extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function E(){const x=new T,N=new T;let A=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const w=[],y=P/r,L=y*(e-t)+t;for(let V=0;V<=s;V++){const k=V/s,q=k*c+a,et=Math.sin(q),Y=Math.cos(q);N.x=L*et,N.y=-y*n+m,N.z=L*Y,u.push(N.x,N.y,N.z),x.set(et,C,Y).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-y),w.push(g++)}_.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const y=_[w][P],L=_[w+1][P],V=_[w+1][P+1],k=_[w][P+1];(t>0||w!==0)&&(h.push(y,L,k),A+=3),(e>0||w!==r-1)&&(h.push(L,V,k),A+=3)}l.addGroup(p,A,0),p+=A}function S(x){const N=g,A=new ft,C=new T;let P=0;const w=x===!0?t:e,y=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const L=g;for(let V=0;V<=s;V++){const q=V/s*c+a,et=Math.cos(q),Y=Math.sin(q);C.x=w*Y,C.y=m*y,C.z=w*et,u.push(C.x,C.y,C.z),d.push(0,y,0),A.x=et*.5+.5,A.y=Y*.5*y+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){const k=N+V,q=L+V;x===!0?h.push(q,q+1,k):h.push(q+1,q,k),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ta extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new T,x=new T,N=new T;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],x),f(e[A+2],N),c(S,x,N,E)}function c(E,S,x,N){const A=N+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const w=E.clone().lerp(x,P/A),y=S.clone().lerp(x,P/A),L=A-P;for(let V=0;V<=L;V++)V===0&&P===A?C[P][V]=w:C[P][V]=w.clone().lerp(y,V/L)}for(let P=0;P<A;P++)for(let w=0;w<2*(A-P)-1;w++){const y=Math.floor(w/2);w%2===0?(d(C[P][y+1]),d(C[P+1][y]),d(C[P][y])):(d(C[P][y+1]),d(C[P+1][y+1]),d(C[P+1][y]))}}function l(E){const S=new T;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(E),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const E=new T;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];const x=m(E)/2/Math.PI+.5,N=p(E)/Math.PI+.5;o.push(x,1-N)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const S=o[E+0],x=o[E+2],N=o[E+4],A=Math.max(S,x,N),C=Math.min(S,x,N);A>.9&&C<.1&&(S<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),N<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,S){const x=E*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const E=new T,S=new T,x=new T,N=new T,A=new ft,C=new ft,P=new ft;for(let w=0,y=0;w<r.length;w+=9,y+=6){E.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),N.copy(E).add(S).add(x).divideScalar(3);const L=m(N);_(A,y+0,E,L),_(C,y+2,S,L),_(P,y+4,x,L)}}function _(E,S,x,N){N<0&&E.x===1&&(o[S]=E.x-1),x.x===0&&x.z===0&&(o[S]=N/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.vertices,t.indices,t.radius,t.details)}}class Aa extends Ta{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Aa(t.radius,t.detail)}}class Ra extends ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new T,g=new ft;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,S=E,x=E+n+1,N=E+n+2,A=E+1;a.push(S,x,A),a.push(x,N,A)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ke extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let N=0;N<=e;N++){const A=N/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-S),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const S=h[p][E+1],x=h[p][E],N=h[p+1][E],A=h[p+1][E+1];(p!==0||o>0)&&f.push(S,x,A),(p!==n-1||c<Math.PI)&&f.push(x,N,A)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xr extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ca extends ye{constructor(t=new ih(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,c=new T,l=new ft;let h=new T;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),E(),p()}function m(S){h=t.getPointAt(S/e,h);const x=o.normals[S],N=o.binormals[S];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,P=Math.sin(C),w=-Math.cos(C);c.x=w*x.x+P*N.x,c.y=w*x.y+P*N.y,c.z=w*x.z+P*N.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let x=1;x<=s;x++){const N=(s+1)*(S-1)+(x-1),A=(s+1)*S+(x-1),C=(s+1)*S+x,P=(s+1)*(S-1)+x;g.push(N,A,P),g.push(A,C,P)}}function E(){for(let S=0;S<=e;S++)for(let x=0;x<=s;x++)l.x=S/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ca(new ra[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pe extends Wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Vc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class W0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const X0=new W0;class Pa{constructor(t){this.manager=t!==void 0?t:X0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";class q0 extends Pa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Vc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ws("img");function c(){h(),Vc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Y0 extends Pa{constructor(t){super(t)}load(t,e,n,s){const r=new De,o=new q0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Tr extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $0 extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ho=new ne,Gc=new T,Wc=new T;class La{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Z0 extends La{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Hi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class K0 extends Tr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Z0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Xc=new ne,as=new T,uo=new T;class j0 extends La{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),as.setFromMatrixPosition(t.matrixWorld),n.position.copy(as),uo.copy(n.position),uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uo),n.updateMatrixWorld(),s.makeTranslation(-as.x,-as.y,-as.z),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc)}}class yr extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new j0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class J0 extends La{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q0 extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new J0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qc(){return performance.now()}const Yc=new ne;class rh{constructor(t,e,n=0,s=1/0){this.ray=new wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(t,e=!0,n=[]){return oa(t,this,n,e),n.sort($c),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oa(t[s],this,n,e);return n.sort($c),n}}function $c(i,t){return i.distance-t.distance}function oa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)oa(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);class eg extends Zl{constructor(){super();const t=new cn;t.deleteAttribute("uv");const e=new pe({side:Fe}),n=new pe,s=new yr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new dt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new dt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new dt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new dt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new dt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new dt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new dt(t,Ci(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new dt(t,Ci(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new dt(t,Ci(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new dt(t,Ci(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new dt(t,Ci(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new dt(t,Ci(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ci(i){const t=new Re;return t.color.setScalar(i),t}const aa=1.65;class Zc extends EventTarget{constructor(t){super();const e=this.renderer=new T0({canvas:t,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=Le,e.toneMapping=yl,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=vl,e.shadowMap.autoUpdate=!1,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),this.scene=new Zl,this.scene.background=new Gt(1713459),this.scene.fog=new Ma(2766146,22,48);const n=new na(e);this.scene.environment=n.fromScene(new eg,.04).texture,this.scene.environmentIntensity=.35,this.camera=new ze(70,window.innerWidth/window.innerHeight,.05,120),this.rig=new Jt,this.rig.add(this.camera),this.camera.position.set(0,aa,0),this.scene.add(this.rig),this.clock=new tg,this.time=0,this.updaters=new Set,this.tweens=new Set,window.addEventListener("resize",()=>this.resize()),e.xr.addEventListener("sessionstart",()=>this.dispatchEvent(new Event("vrstart"))),e.xr.addEventListener("sessionend",()=>{this.camera.position.set(0,aa,0),this.dispatchEvent(new Event("vrend"))}),e.setAnimationLoop(()=>this.frame())}get isVR(){return this.renderer.xr.isPresenting}resize(){this.isVR||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight,!1))}shadowsDirty(){this.renderer.shadowMap.needsUpdate=!0}tween(t,e){return new Promise(n=>{const s={t:0,duration:t,fn:e,resolve:n};this.tweens.add(s)})}frame(){const t=Math.min(this.clock.getDelta(),.1);this.time+=t;for(const e of this.tweens){e.t+=t;const n=Math.min(1,e.t/e.duration);e.fn(n),n>=1&&(this.tweens.delete(e),e.resolve())}for(const e of this.updaters)e(t,this.time);this.renderer.render(this.scene,this.camera)}static async vrSupported(){try{return!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr"))}catch{return!1}}async enterVR(){const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});return await this.renderer.xr.setSession(t),t}exitVR(){const t=this.renderer.xr.getSession();t&&t.end()}}const ng=new T(0,1,0);class ig extends EventTarget{constructor(t){super(),this.engine=t,this.canvas=t.renderer.domElement,this.raycaster=new rh,this.raycaster.far=40,this.world=null,this.uiMeshes=new Set,this.modal=!1,this.locked=!0,this.yaw=0,this.pitch=-.08,this.keys=new Set,this.walkTarget=null,this.hovered=new Map,this.onSelect=null,this._bindPointer(),this._bindKeys(),this._setupXR(),t.updaters.add(e=>this._update(e)),t.addEventListener("vrend",()=>this._applyLook())}setWorld(t){this.world=t,this.yaw=t.spawn.yaw,this.pitch=-.08,this.engine.rig.position.copy(t.spawn.position),this.engine.rig.rotation.set(0,this.yaw,0),this._applyLook(),this.walkTarget=null}_targets(){const t=[...this.uiMeshes].filter(e=>e.visible&&e.parent);if(this.modal||!this.world)return t;for(const e of Object.values(this.world.interactables))e.done||t.push(e.hit);return t.push(...this.world.floors,...this.world.blockers),t}_pick(){const t=this.raycaster.intersectObjects(this._targets(),!0);for(const e of t){let n=e.object;return n.userData.panel?{kind:"ui",panel:n.userData.panel,uv:e.uv,point:e.point,distance:e.distance}:n.userData.interactable?{kind:"item",item:n.userData.interactable,point:e.point,distance:e.distance}:this.world&&this.world.floors.includes(n)?{kind:"floor",point:e.point,distance:e.distance}:{kind:"block",point:e.point,distance:e.distance}}return null}_setHover(t,e){const n=this.hovered.get(t)||null;if(n===e)return;this.hovered.set(t,e);const s=new Set(this.hovered.values());n&&!s.has(n)&&n.setHighlight(!1),e&&e.setHighlight(!0),t==="mouse"&&(this.canvas.style.cursor=e?"pointer":"grab")}clearHover(){for(const t of this.hovered.values())t&&t.setHighlight(!1);this.hovered.clear(),this.dispatchEvent(new CustomEvent("hover",{detail:null}))}_bindPointer(){const t=this.canvas,e=new ft;let n=null;const s=o=>{const a=t.getBoundingClientRect();return e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-a.top)/a.height)*2+1),e};t.addEventListener("pointerdown",o=>{this.engine.isVR||n||(n={id:o.pointerId,x:o.clientX,y:o.clientY,lx:o.clientX,ly:o.clientY,moved:!1,type:o.pointerType},t.setPointerCapture(o.pointerId),o.pointerType==="mouse"&&(t.style.cursor="grabbing"))}),t.addEventListener("pointermove",o=>{if(this.engine.isVR)return;if(n&&o.pointerId===n.id){const l=o.clientX-n.lx,h=o.clientY-n.ly;if(n.lx=o.clientX,n.ly=o.clientY,Math.hypot(o.clientX-n.x,o.clientY-n.y)>7&&(n.moved=!0),n.moved&&!this.locked&&!this.modal){const u=n.type==="touch"?.006:.004;this.yaw+=l*u,this.pitch=Ui.clamp(this.pitch+h*u,-1.25,1.25),this._applyLook()}return}if(o.pointerType!=="mouse"||this.locked||this.modal)return;this.raycaster.setFromCamera(s(o),this.engine.camera);const a=this._pick(),c=a&&a.kind==="item"?a.item:null;this._setHover("mouse",c),this.dispatchEvent(new CustomEvent("hover",{detail:c?{item:c,x:o.clientX,y:o.clientY}:null}))});const r=o=>{if(!n||o.pointerId!==n.id)return;const a=!n.moved;n=null,t.style.cursor="grab",!(!a||this.locked||this.modal||o.type==="pointercancel")&&(this.raycaster.setFromCamera(s(o),this.engine.camera),this._activate(this._pick(),"mouse"))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("contextmenu",o=>o.preventDefault())}_bindKeys(){window.addEventListener("keydown",t=>{t.target&&/input|textarea/i.test(t.target.tagName)||this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear())}_applyLook(){this.engine.isVR||(this.engine.rig.rotation.set(0,this.yaw,0),this.engine.camera.position.set(0,aa,0),this.engine.camera.rotation.set(this.pitch,0,0))}_activate(t,e){if(t){if(t.kind==="ui"){t.panel.click(t.uv);return}if(!(this.modal||this.locked)){if(t.kind==="item"){this.walkTarget=null,this.onSelect&&this.onSelect(t.item);return}t.kind==="floor"&&(this.engine.isVR?this.teleport(t.point):this.walkTarget=this._clamp(t.point.clone()))}}}_clamp(t){const e=this.world.bounds;return t.x=Ui.clamp(t.x,e.minX,e.maxX),t.z=Ui.clamp(t.z,e.minZ,e.maxZ),t.y=0,t}teleport(t){const e=this.engine.rig,n=new T;this.engine.camera.getWorldPosition(n),e.position.x+=t.x-n.x,e.position.z+=t.z-n.z,this._clamp(e.position)}snapTurn(t){const e=this.engine.rig,n=new T;this.engine.camera.getWorldPosition(n),e.position.sub(n).applyAxisAngle(ng,t).add(n),e.rotation.y+=t}_setupXR(){const t=this.engine.renderer.xr;this.controllers=[];const e=new ye().setFromPoints([new T(0,0,0),new T(0,0,-1)]),n=new jl({color:16739072,transparent:!0,opacity:.9}),s=new ke(.012,10,8),r=new Re({color:16777215});for(let a=0;a<2;a++){const c=t.getController(a),l=new P0(e,n);l.scale.z=3;const h=new dt(s,r);h.position.z=-3,c.add(l,h),c.userData={line:l,dot:h,source:null,turnLatched:!1},c.addEventListener("connected",u=>{c.userData.source=u.data,c.userData.handedness=u.data.handedness,c.visible=u.data.targetRayMode!=="gaze",this.dispatchEvent(new CustomEvent("controller",{detail:{controller:c,grip:o[a],handedness:u.data.handedness}}))}),c.addEventListener("disconnected",()=>{c.userData.source=null,this._setHover(c,null)}),c.addEventListener("select",()=>{this.raycaster.setFromXRController(c),this._activate(this._pick(),c)}),this.engine.rig.add(c),this.controllers.push(c)}const o=[0,1].map(a=>{const c=t.getControllerGrip(a),l=new dt(new Tn(.018,.024,.12,12),new pe({color:9552,roughness:.5}));return l.rotation.x=Math.PI/2,l.position.z=.03,c.add(l),this.engine.rig.add(c),c});this.controllers.forEach((a,c)=>{a.userData.grip=o[c]}),this.reticle=new dt(new Ra(.16,.22,32).rotateX(-Math.PI/2),new Re({color:16739072,transparent:!0,opacity:.85,depthWrite:!1})),this.reticle.visible=!1,this.engine.scene.add(this.reticle)}_updateXR(){let t=!1;for(const e of this.controllers){if(!e.userData.source)continue;this.raycaster.setFromXRController(e);const n=this._pick(),s=n?n.distance:3;if(e.userData.line.scale.z=s,e.userData.dot.position.z=-s,this._setHover(e,n&&n.kind==="item"?n.item:null),n&&n.kind==="ui")n.panel.hover(n.uv,e);else for(const o of this.uiMeshes)o.userData.panel.hover(null,e);n&&n.kind==="floor"&&!this.modal&&!this.locked&&!t&&(this.reticle.position.set(n.point.x,.01,n.point.z),t=!0);const r=e.userData.source.gamepad;if(r&&!this.locked){const o=r.axes.length>=4?r.axes[2]:r.axes[0]||0;Math.abs(o)>.7&&!e.userData.turnLatched?(this.snapTurn(-Math.sign(o)*(Math.PI/6)),e.userData.turnLatched=!0):Math.abs(o)<.3&&(e.userData.turnLatched=!1)}}this.reticle.visible=t}_update(t){if(this.engine.isVR){this._updateXR();return}if(this.reticle.visible=!1,this.locked||this.modal||!this.world)return;const e=this.keys,n=(e.has("ArrowLeft")?1:0)-(e.has("ArrowRight")?1:0);n&&(this.yaw+=n*1.8*t,this._applyLook());const s=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),r=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),o=this.engine.rig;if(s||r){this.walkTarget=null;const a=(e.has("ShiftLeft")?3.2:1.8)*t,c=Math.sin(this.yaw),l=Math.cos(this.yaw);o.position.x+=(-c*s+l*r)*a,o.position.z+=(-l*s-c*r)*a,this._clamp(o.position)}else if(this.walkTarget){const a=new T().subVectors(this.walkTarget,o.position);a.y=0;const c=a.length();c<.05?this.walkTarget=null:o.position.addScaledVector(a.normalize(),Math.min(c,2.6*t))}}}const fe={navy:"#002550",orange:"#ff6b00",grey:"#e4ebef",ok:"#1f9d55",bad:"#c0392b",okBg:"#e7f6ee",badBg:"#fbeceb",softOrange:"#fff3ec"},nn={head:i=>`900 ${i}px Gilroy, Arial, sans-serif`,body:i=>`500 ${i}px Gilroy, Arial, sans-serif`,mono:i=>`400 ${i}px "PP Supply Mono", "Courier New", monospace`};function cs(i,t,e){const n=String(t).split(/\s+/),s=[];let r="";for(const o of n){const a=r?r+" "+o:o;i.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function ls(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}class oh{constructor({widthM:t=1,px:e=1024,maxH:n=1800,compact:s=!1}={}){this.px=e,this.maxH=n,this.widthM=t,this.compact=s,this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=n,this.ctx=this.canvas.getContext("2d"),this.texture=new Sa(this.canvas),this.texture.colorSpace=Le,this.texture.anisotropy=4,this.mesh=new dt(new _e(1,1),new Re({map:this.texture,transparent:!0,depthTest:!1,toneMapped:!1})),this.mesh.renderOrder=1e3,this.mesh.userData.panel=this,this.rects=[],this.hoverBy=new Map,this.spec=null,this.usedH=100}render(t){this.spec=t,this._draw()}_draw(){const t=this.spec;if(!t)return;const e=this.ctx,n=this.px,s=this.compact?36:56,r=n-s*2,o=this.compact?1.25:1,a=new Set(this.hoverBy.values());e.clearRect(0,0,n,this.maxH),this.rects=[];const c=l=>{let h=0;if(l&&(e.fillStyle="#ffffff",ls(e,0,0,n,this.usedH,36),e.fill(),e.save(),ls(e,0,0,n,this.usedH,36),e.clip(),e.fillStyle=fe.orange,e.fillRect(0,0,n,16),e.restore()),h=16+(this.compact?26:44),e.textBaseline="top",t.kicker&&(e.font=nn.mono(24*o),e.fillStyle=fe.orange,l&&e.fillText(String(t.kicker).toUpperCase(),s,h),h+=40*o),t.title){e.font=nn.head(46*o),e.fillStyle=fe.navy;for(const d of cs(e,String(t.title).toUpperCase(),r))l&&e.fillText(d,s,h),h+=52*o;h+=12}const u=[].concat(t.body||[]);e.font=nn.body(30*o),e.fillStyle=fe.navy;for(const d of u){for(const f of cs(e,d,r))l&&e.fillText(f,s,h),h+=40*o;h+=14}if(t.options&&(h+=6,t.options.forEach((d,f)=>{e.font=nn.body(28);const g=cs(e,d.text,r-110),_=Math.max(84,g.length*36+44),m="opt"+f;if(l){const p=a.has(m)&&!d.disabled;e.fillStyle=d.state==="correct"?fe.okBg:d.state==="wrong"?fe.badBg:p?fe.softOrange:fe.grey,ls(e,s,h,r,_,22),e.fill();const E=d.state==="correct"?fe.ok:d.state==="wrong"?fe.bad:p?fe.orange:null;E&&(e.lineWidth=5,e.strokeStyle=E,e.stroke()),e.font=nn.mono(d.mark?22:30),e.fillStyle=d.state==="correct"?fe.ok:fe.orange,e.fillText(d.mark??String.fromCharCode(65+f),s+(d.mark?18:30),h+(d.mark?28:24)),e.font=nn.body(28),e.fillStyle=fe.navy,g.forEach((S,x)=>e.fillText(S,s+84,h+24+x*36))}!d.disabled&&t.onOption&&this.rects.push({id:m,x:s,y:h,w:r,h:_,fn:()=>t.onOption(f)}),h+=_+14})),t.feedback){const d=t.feedback;e.font=nn.body(27);const f=cs(e,d.text,r-60),g=70+f.length*35+24;l&&(e.fillStyle=d.ok?fe.okBg:fe.badBg,ls(e,s,h,r,g,20),e.fill(),e.fillStyle=d.ok?fe.ok:fe.bad,e.fillRect(s,h,10,g),e.font=nn.head(30),e.fillStyle=fe.navy,e.fillText(String(d.title).toUpperCase(),s+34,h+22),e.font=nn.body(27),f.forEach((_,m)=>e.fillText(_,s+34,h+66+m*35))),h+=g+16}if(t.source){e.font=nn.body(21),e.fillStyle="#4a5d73";for(const d of cs(e,t.source,r))l&&e.fillText(d,s,h),h+=28;h+=10}if(t.buttons&&t.buttons.length){h+=8,e.font=nn.mono(26*o);const d=80*(this.compact?1.1:1),f=16,g=t.buttons.map(p=>e.measureText(String(p.label).toUpperCase()).width+70),_=g.reduce((p,E)=>p+E,0)+f*(g.length-1);let m=this.compact?s:Math.max(s,n-s-_);_>r&&(m=s),t.buttons.forEach((p,E)=>{const S=_>r?(r-f*(g.length-1))/g.length:g[E],x="btn"+E;if(l){const N=a.has(x),A=p.style!=="secondary";ls(e,m,h,S,d,d/2),e.fillStyle=A?N?"#ff8a33":fe.orange:N?fe.grey:"#ffffff",e.fill(),e.lineWidth=4,e.strokeStyle=A?fe.orange:fe.navy,e.stroke(),e.fillStyle=fe.navy,e.textAlign="center",e.fillText(String(p.label).toUpperCase(),m+S/2,h+d/2-13*o),e.textAlign="left"}p.disabled||this.rects.push({id:x,x:m,y:h,w:S,h:d,fn:p.onClick}),m+=S+f}),h+=d}return h+s*.8};this.usedH=Math.min(this.maxH,Math.ceil(c(!1))),this.rects=[],c(!0),this.texture.repeat.set(1,this.usedH/this.maxH),this.texture.offset.set(0,1-this.usedH/this.maxH),this.texture.needsUpdate=!0,this.mesh.scale.set(this.widthM,this.widthM*(this.usedH/this.px),1)}_rectAt(t){if(!t)return null;const e=t.x*this.px,n=(1-t.y)*this.usedH;return this.rects.find(s=>e>=s.x&&e<=s.x+s.w&&n>=s.y&&n<=s.y+s.h)||null}hover(t,e){const n=this._rectAt(t),s=n?n.id:null;this.hoverBy.get(e)!==s&&(s?this.hoverBy.set(e,s):this.hoverBy.delete(e),this._draw())}click(t){const e=this._rectAt(t);e&&e.fn&&e.fn()}}function K(i,t={},...e){const[n,...s]=i.split("."),r=document.createElement(n||"div");s.length&&(r.className=s.join(" "));for(const[o,a]of Object.entries(t||{}))a==null||a===!1||(o.startsWith("on")?r.addEventListener(o.slice(2).toLowerCase(),a):o==="text"?r.textContent=a:r.setAttribute(o,a===!0?"":a));for(const o of e.flat())o!=null&&o!==!1&&r.append(o instanceof Node?o:document.createTextNode(String(o)));return r}function sg(i){const t=[].concat(i.body||[]).map(c=>K("p",{text:c})),e=i.options?K("div.options",{},i.options.map((c,l)=>K(`button.option${c.state?"."+c.state:""}`,{disabled:c.disabled,onclick:()=>i.onOption&&i.onOption(l)},K("span.letter",{text:c.mark??String.fromCharCode(65+l)}),K("span",{text:c.text})))):null,n=i.feedback?K(`div.feedback.${i.feedback.ok?"ok":"no"}`,{},K("strong",{text:i.feedback.title}),K("span",{text:i.feedback.text})):null,s=i.source?K("div.src",{text:i.source}):null,r=(i.buttons||[]).map(c=>K(`button.btn${c.style==="secondary"?".secondary":""}`,{disabled:c.disabled,onclick:c.onClick,text:c.label})),o=K("div.modal",{role:"dialog","aria-modal":"true"},K("div.modal-head",{},i.kicker?K("div.kicker",{text:i.kicker}):null,i.title?K("h2",{text:i.title}):null),K("div.modal-body",{},t,e,n,s),r.length?K("div.modal-foot",{},r):null),a=K("div.modal-wrap",{},o);return queueMicrotask(()=>{const c=o.querySelector(".option:not([disabled]), .btn");c&&matchMedia("(pointer:fine)").matches&&c.focus({preventScroll:!0})}),a}function rg(i,t){const e=K("div.toast",{text:t});i.append(e),setTimeout(()=>e.remove(),3300)}const fo={factory:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 42V22l11 7v-7l11 7v-7l11 7V8h5v34z"/><path d="M5 42h38"/></svg>',construction:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 42V10h32"/><path d="M8 10l10 10M40 10v8"/><path d="M36 18h8v6h-8z"/><path d="M4 42h40M16 42V28h12v14"/></svg>',shipyard:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30h36l-5 10H11z"/><path d="M12 30V20h18v10M30 24h6v6"/><path d="M4 44c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2"/></svg>'};class og{constructor(t,e,n){this.engine=t,this.input=e,this.uiRoot=n,this.spec=null,this.htmlNode=null,this.vr=new oh({widthM:.95}),this.vr.mesh.visible=!1,t.scene.add(this.vr.mesh),e.uiMeshes.add(this.vr.mesh),t.addEventListener("vrstart",()=>this.spec&&this._render(!0)),t.addEventListener("vrend",()=>this.spec&&this._render(!0))}get isOpen(){return!!this.spec}show(t){const e=!this.spec;this.spec=t,this.input.modal=!0,this.input.clearHover(),this._render(e)}hide(){this.spec=null,this.input.modal=!1,this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.vr.mesh.visible=!1}_render(t){this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.engine.isVR?(this.vr.render(this.spec),this.vr.mesh.visible=!0,t&&this._placeInFront()):(this.vr.mesh.visible=!1,this.htmlNode=sg(this.spec),this.uiRoot.append(this.htmlNode))}_placeInFront(){const t=this.engine.camera,e=new T,n=new T;t.getWorldPosition(e),t.getWorldDirection(n),n.y=0,n.lengthSq()<1e-4&&n.set(0,0,-1),n.normalize();const s=this.vr.mesh;s.position.copy(e).addScaledVector(n,1.25),s.position.y=e.y-.12,s.lookAt(e.x,s.position.y,e.z)}}function Ar(i=1){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Gn(i,t,e,{repeat:n=[1,1],srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t;const o=r.getContext("2d");e(o,i,t);const a=new Sa(r);return s&&(a.colorSpace=Le),a.wrapS=a.wrapT=fr,a.repeat.set(n[0],n[1]),a.anisotropy=8,a}function ag(i=[8,6]){return Gn(512,512,(t,e,n)=>{const s=Ar(7);t.fillStyle="#8d9196",t.fillRect(0,0,e,n);for(let r=0;r<40;r++){const o=s()*e,a=s()*n,c=30+s()*110,l=t.createRadialGradient(o,a,0,o,a,c),h=s()>.5;l.addColorStop(0,h?"rgba(60,62,66,0.16)":"rgba(190,194,198,0.14)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(o-c,a-c,c*2,c*2)}for(let r=0;r<9e3;r++){const o=90+s()*90;t.fillStyle=`rgba(${o},${o},${o+4},${.08+s()*.12})`,t.fillRect(s()*e,s()*n,1+s()*2,1+s()*2)}t.strokeStyle="rgba(40,42,46,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,1),t.lineTo(e,1),t.moveTo(1,0),t.lineTo(1,n),t.stroke()},{repeat:i})}function Kc(i="#c9d1d8",t=[12,1]){return Gn(256,256,(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s);for(let o=0;o<n;o+=32){const a=e.createLinearGradient(o,0,o+32,0);a.addColorStop(0,"rgba(0,0,0,0.10)"),a.addColorStop(.5,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(0,0,0,0.10)"),e.fillStyle=a,e.fillRect(o,0,32,s)}const r=Ar(3);for(let o=0;o<800;o++)e.fillStyle=`rgba(80,80,80,${r()*.05})`,e.fillRect(r()*n,r()*s,2,6)},{repeat:t})}function cg(){return Gn(256,64,(i,t,e)=>{const n=Ar(11);i.fillStyle="#b58a57",i.fillRect(0,0,t,e);for(let s=0;s<60;s++){i.strokeStyle=`rgba(90,60,30,${.1+n()*.2})`,i.lineWidth=1+n()*2;const r=n()*e;i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(t*.3,r+(n()-.5)*8,t*.6,r+(n()-.5)*8,t,r+(n()-.5)*6),i.stroke()}})}function lg(){return Gn(128,128,(i,t,e)=>{const n=Ar(5);i.fillStyle="#b8895a",i.fillRect(0,0,t,e);for(let s=0;s<400;s++)i.fillStyle=`rgba(120,80,40,${n()*.15})`,i.fillRect(n()*t,n()*e,2,2);i.fillStyle="rgba(150,110,70,0.6)",i.fillRect(0,e*.45,t,10)})}function Pi({header:i,lines:t=[],headerBg:e="#006ce9",bg:n="#ffffff",fg:s="#002550",w:r=512,h:o=256}){return Gn(r,o,a=>{a.fillStyle=n,a.fillRect(0,0,r,o);const c=i?o*.34:0;i&&(a.fillStyle=e,a.fillRect(0,0,r,c),a.fillStyle="#ffffff",a.font=`900 ${Math.round(c*.5)}px Gilroy, Arial, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(i.toUpperCase(),r/2,c/2+2)),a.fillStyle=s,a.textAlign="center",a.textBaseline="middle";const l=(o-c)/(t.length+1);a.font=`900 ${Math.round(Math.min(l*.75,o*.22))}px Gilroy, Arial, sans-serif`,t.forEach((h,u)=>a.fillText(h.toUpperCase(),r/2,c+l*(u+1))),a.strokeStyle=s,a.lineWidth=6,a.strokeRect(3,3,r-6,o-6)},{repeat:[1,1]})}function hg(){return Gn(128,128,(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,t*.44,0,Math.PI*2),i.fillStyle="#ff6b00",i.fill(),i.lineWidth=8,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#002550",i.font="900 78px Gilroy, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("!",t/2,e/2+4)})}function ug(i){const t=new Y0().load(i);return t.colorSpace=Le,t.anisotropy=8,t}const ge=(i,t=.7,e=0,n={})=>new pe({color:i,roughness:t,metalness:e,...n});function dg(){return{steel:ge(9080982,.42,.85),darkSteel:ge(3883078,.5,.8),galv:ge(12041666,.35,.9),columnBlue:ge(2841228,.55,.3),navy:ge(9552,.6,.2),orange:ge(16739072,.5,.1),yellow:ge(15906565,.55,.1),red:ge(12721951,.45,.2),black:ge(1711135,.8,.1),rubber:ge(2237222,.9,0),machine:ge(2703966,.5,.4),white:ge(15922422,.6,0),panelGrey:ge(8358543,.75,.2),lockerGrey:ge(7307926,.5,.5),cylinder:ge(10134442,.4,.6),copper:ge(12088115,.35,.9),wood:ge(16777215,.85,0,{map:cg()}),cardboard:ge(16777215,.9,0,{map:lg()}),rag:ge(5918533,.95,0),ragBlue:ge(4086394,.95,0),skin:ge(13803644,.7,0),hivis:ge(14217770,.6,0,{emissive:2765568}),curtain:new pe({color:16734738,roughness:.4,metalness:0,transparent:!0,opacity:.72,side:rn,depthWrite:!1}),glassBlue:new pe({color:12572911,emissive:10274026,emissiveIntensity:.9,roughness:.2}),lamp:new pe({color:16777215,emissive:16774108,emissiveIntensity:2.2})}}function St(i,t,e,n,s=0,r=0,o=0,{base:a=!0,cast:c=!0,receive:l=!0}={}){const h=new dt(new cn(i,t,e),n);return h.position.set(s,a?r+t/2:r,o),h.castShadow=c,h.receiveShadow=l,h}function Te(i,t,e,n,s=0,r=0,o=0,a=20,{base:c=!0,cast:l=!0}={}){const h=new dt(new Tn(i,t,e,a),n);return h.position.set(s,c?r+e/2:r,o),h.castShadow=l,h.receiveShadow=!0,h}function jc(i,t,e=.3){const n=new Jt,s=.02;return n.add(St(e,i,s*1.4,t,0,0,-e/2+s/2)),n.add(St(e,i,s*1.4,t,0,0,e/2-s/2)),n.add(St(s,i,e,t)),n}function sr(i,t,e=.3,n=.16){const s=new Jt,r=.018;return s.add(St(i,r,n,t,0,e/2-r/2,0,{base:!1})),s.add(St(i,r,n,t,0,-e/2+r/2,0,{base:!1})),s.add(St(i,e,r,t,0,0,0,{base:!1})),s}function Jc(i){const t=new Jt,e=1.2,n=.8;for(let s=0;s<7;s++)t.add(St(e,.022,.1,i.wood,0,.122,-n/2+.05+s*((n-.1)/6)));for(const s of[-n/2+.05,0,n/2-.05])t.add(St(e,.1,.1,i.wood,0,0,s));for(const s of[-e/2+.05,e/2-.05])t.add(St(.1,.022,n,i.wood,s,.1,0));return t}function po(i,t,e,n=40){const s=new Ql(i),r=new dt(new Ca(s,n,t,8,!1),e);return r.castShadow=!0,r}function Qc(i){const t=new Jt,e=new Jt,n=new Jt,s=()=>{const u=new dt(new xs(.075,.72,4,10),i.navy);return u.position.y=-.43,u.castShadow=!0,u};e.add(s()),n.add(s()),e.position.set(-.1,.92,0),n.position.set(.1,.92,0);const r=new dt(new xs(.19,.45,4,12),i.navy);r.position.y=1.25,r.castShadow=!0;const o=new dt(new Tn(.205,.2,.42,14),i.hivis);o.position.y=1.27;const a=new dt(new ke(.11,16,12),i.skin);a.position.y=1.68;const c=new dt(new ke(.125,16,10,0,Math.PI*2,0,Math.PI/2),i.white);c.position.y=1.71;const l=new dt(new xs(.06,.5,4,8),i.navy);l.position.set(-.26,1.2,0);const h=l.clone();return h.position.x=.26,t.add(e,n,r,o,a,c,l,h),t.userData.legs=[e,n],t.userData.arms=[l,h],t}const ys=""+new URL("logo-white-D3oA5qhY.png",import.meta.url).href,jt=Math.PI,fg=new Re({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),pg=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,sn=(i,t,e)=>i+(t-i)*e;function mg(i){const t=dg(),e=new Jt;e.name="factory";const n=[],s=[],r={},o=[],a=(R,D)=>i.tween(R,$=>{D(pg($)),i.shadowsDirty()}),c=(R,D=!1)=>(e.add(R),D&&s.push(R),R);function l(R,D,$,ot,vt,wt){const ht=[];for(const qt of[].concat($))qt.traverse(Kt=>{Kt.isMesh&&Kt.material.emissive&&(Kt.material=Kt.material.clone(),ht.push({m:Kt.material,e:Kt.material.emissive.clone(),i:Kt.material.emissiveIntensity}))});const Bt=new dt(new cn(...ot),fg);Bt.position.set(...vt),e.add(Bt);const Ot={id:R,kind:D,group:$,hit:Bt,anchor:new T(...wt),done:!1,setHighlight(qt){for(const{m:Kt,e:Ht,i:Mt}of ht)qt?(Kt.emissive.set(16739072),Kt.emissiveIntensity=.55):(Kt.emissive.copy(Ht),Kt.emissiveIntensity=Mt)},fix:async()=>{}};return Bt.userData.interactable=Ot,r[R]=Ot,Ot}const h={w:32,d:24,h:8},u=new pe({map:ag([8,6]),roughness:.82,metalness:.05}),d=new dt(new _e(h.w,h.d),u);d.rotation.x=-jt/2,d.receiveShadow=!0,c(d),n.push(d);const f=new pe({map:Kc("#c4ccd4",[16,1]),roughness:.6,metalness:.3}),g=new pe({map:Kc("#c4ccd4",[12,1]),roughness:.6,metalness:.3}),_=(R,D,$,ot,vt)=>{const wt=new dt(new _e(R,h.h),vt);wt.position.set(D,h.h/2,$),wt.rotation.y=ot,wt.receiveShadow=!0,c(wt,!0);const ht=new dt(new _e(R,1.2),t.navy);return ht.position.set(D,.6,$),ht.rotation.y=ot,ht.translateZ(.02),c(ht),wt};_(h.w,0,-24/2,0,f),_(h.w,0,h.d/2,jt,f),_(h.d,-32/2,0,jt/2,g),_(h.d,h.w/2,0,-jt/2,g);for(const R of[-1,1])for(let D=-9;D<=9;D+=4.5){const $=new dt(new _e(3.2,1.3),t.glassBlue);$.position.set(R*(h.w/2-.03),6.3,D),$.rotation.y=-R*jt/2,c($)}const m=new dt(new _e(h.w,h.d),new pe({color:4080973,roughness:.9}));m.rotation.x=jt/2,m.position.y=h.h,c(m);for(let R=-9;R<=9;R+=6){const D=sr(h.w,t.columnBlue,.45,.2);D.position.set(0,7.5,R),c(D)}for(let R=-12;R<=12;R+=4){const D=St(.12,.18,h.d,t.darkSteel,R,7.75,0,{base:!1,cast:!1});c(D)}for(const R of[-12.5,12.5]){for(const $ of[-9,-3,3,9]){const ot=jc(7.5,t.columnBlue,.34);ot.position.set(R,0,$),c(ot,!0)}const D=sr(h.d-1,t.yellow,.5,.25);D.rotation.y=jt/2,D.position.set(R,6.3,0),c(D)}const p=St(25.4,.7,.5,t.yellow,0,6.6,-6.5);c(p),c(St(25.4,.7,.5,t.yellow,0,6.6,-5.6));const E=St(.9,.6,1.3,t.darkSteel,4,6.2,-6.05);c(E),c(Te(.012,.012,3.2,t.darkSteel,4,3,-6.05,6)),c(St(.25,.35,.12,t.yellow,4,2.7,-6.05));for(const R of[-8,0,8])for(const D of[-8,-2,4,10]){c(Te(.32,.4,.3,t.darkSteel,R,7,D,16,{cast:!1}));const $=new dt(new vr(.34,20),t.lamp);$.rotation.x=jt/2,$.position.set(R,6.99,D),c($)}const S=new dt(new _e(8.4,2.2),t.navy);S.position.set(0,4.8,-24/2+.05),c(S);const x=new dt(new _e(6.6,6.6*381/1867),new Re({map:ug(ys),transparent:!0}));x.position.set(0,4.8,-24/2+.07),c(x);const N=new pe({color:15906565,roughness:.6}),A=(R,D,$,ot)=>{const vt=new dt(new _e(R,D),N);vt.rotation.x=-jt/2,vt.position.set($,.004,ot),vt.receiveShadow=!0,c(vt)};A(.1,22,2.6,0),A(.1,22,4.8,0);for(let R=-10;R<=10;R+=2.5){const D=new dt(new vr(.18,3),N);D.rotation.set(-jt/2,0,jt/2),D.position.set(3.7,.005,R),c(D)}A(4.4,.08,0,-.95);function C(R,D,$){const ot=new Jt,vt=[],wt=D/R*1.15;for(let Ot=0;Ot<R;Ot++){const qt=new dt(new _e(wt,1.9),t.curtain);qt.position.y=1.1,ot.add(qt),vt.push(qt)}const ht=Ot=>-D/2+D/R*(Ot+.5),Bt=(Ot,qt=-D/2)=>{vt.forEach((Kt,Ht)=>{const Mt=sn(ht(Ht),qt+.08+Ht*.055,Ot),Pe=sn(0,Ht%2?.55:-.55,Ot);$?(Kt.position.x=Mt,Kt.rotation.y=Pe):(Kt.position.z=Mt,Kt.rotation.y=jt/2+Pe)})};return Bt(0),{group:ot,strips:vt,setOpen:Bt}}function P(R,D,{label:$,frontFull:ot=!0,rightCurtain:vt=!1}){const wt=new Jt;wt.position.set(R,0,D);const ht=4,Bt=3.5,Ot=2.1;for(const[Pe,ee]of[[-2,-1.75],[2,-1.75],[-2,1.75],[2,1.75]])wt.add(St(.06,Ot+.1,.06,t.yellow,Pe,0,ee));wt.add(St(ht,.05,.05,t.yellow,0,Ot,-1.75),St(ht,.05,.05,t.yellow,0,Ot,1.75)),wt.add(St(.05,.05,Bt,t.yellow,-2,Ot,0),St(.05,.05,Bt,t.yellow,2,Ot,0));const qt=St(ht-.06,2,.04,t.panelGrey,0,.02,-1.72),Kt=St(.04,2,Bt-.06,t.panelGrey,-1.97,.02,0);wt.add(qt,Kt),s.push(qt,Kt);let Ht=null;vt||(Ht=St(.04,2,Bt-.06,t.panelGrey,1.97,.02,0),wt.add(Ht),s.push(Ht));const Mt=C(ot?12:6,ot?ht:ht/2,!0);if(Mt.group.position.set(ot?0:-ht/4,0,1.75),wt.add(Mt.group),$){const Pe=new dt(new _e(1,.36),new Re({map:Pi({lines:[$],bg:"#002550",fg:"#ffffff",w:512,h:184})}));Pe.position.set(0,Ot+.3,1.785),wt.add(Pe),wt.add(St(1.04,.4,.02,t.darkSteel,0,Ot+.1,1.76))}return c(wt),wt}P(-5,-3.25,{label:"Bay 1"}),P(8,-3.25,{label:"Bay 3"}),P(0,-3.25,{label:"Bay 2",frontFull:!1,rightCurtain:!0});const w=Qc(t);w.position.set(8,0,-3.8),w.rotation.y=jt,c(w),c(St(1.6,.85,.8,t.darkSteel,8,0,-4.3));const y=new yr(13623551,0,7,2);y.position.set(8,1.05,-4),c(y);const L=new dt(new ke(.03,8,8),new Re({color:15397631}));L.position.copy(y.position),c(L);let V=0,k=!0;o.push(R=>{V-=R,V<=0&&(k=!k,V=k?2.5+Math.random()*3:1.5+Math.random()*2);const D=k?4+Math.random()*5:0;y.intensity=D,L.visible=k});const q=new dt(new _e(.7,.35),new Re({map:Pi({header:"Warning",lines:["Welding in progress"],headerBg:"#f2b705",w:512,h:256})}));q.position.set(10.08,1.6,-2.2),q.rotation.y=jt/2,c(q);const et=new dt(new _e(.62,.31),new Re({map:Pi({header:"Mandatory",lines:["Eye protection","in this area"],w:512,h:256})}));et.position.set(-1,1.65,-1.47),c(et),c(St(.66,.35,.015,t.darkSteel,-1,1.475,-1.485,{cast:!1}));const Y=-.3,nt=-3.8,W=.82,mt=St(1.8,.03,.9,t.darkSteel,Y,W,nt);c(mt,!0);for(const[R,D]of[[-.85,-.4],[.85,-.4],[-.85,.4],[.85,.4]])c(St(.05,W,.05,t.steel,Y+R,0,nt+D));c(St(1.7,.05,.03,t.steel,Y,.25,nt-.4)),c(St(.42,.012,.26,t.galv,0,W+.03,nt-.05)),c(St(.42,.14,.012,t.galv,0,W+.042,nt-.05)),c(St(.05,.05,.08,t.copper,.25,W+.03,nt-.05));const _t=1.15,Tt=-4.55,Ft=new Jt;Ft.add(St(.45,.72,.58,t.machine,0,.08,0)),Ft.add(St(.36,.34,.5,t.machine,0,.8,0)),Ft.add(St(.37,.05,.51,t.orange,0,.8,0));for(const[R,D]of[[-.18,-.24],[.18,-.24],[-.18,.24],[.18,.24]])Ft.add(Te(.04,.04,.03,t.rubber,R,.04,D,10,{base:!1}));const te=new dt(new _e(.16,.08),new pe({color:731666,emissive:3342186,emissiveIntensity:1.4}));te.position.set(0,.62,.292),Ft.add(te),Ft.add(Te(.025,.025,.04,t.black,-.1,.3,.3,10,{base:!1})),Ft.children.at(-1).rotation.x=jt/2,Ft.position.set(_t,0,Tt),c(Ft,!0),c(Te(.05,.05,2.6,t.galv,-.3,0,-5.08,12)),c(Te(.11,.11,4.9,t.galv,-.3,2.6,-5.08,16));const j=new dt(new ke(.035,12,10),new pe({color:4194304,emissive:16722458,emissiveIntensity:2}));j.position.set(-.62,1.55,-4.96),c(j),c(St(.18,.22,.08,t.machine,-.62,1.35,-4.97));const st=new Jt;st.position.set(-.3,2.45,-4.98);const Et=1,pt=1.45,At=new Jt;st.add(At),At.add(new dt(new ke(.1,14,10),t.darkSteel)),At.add(Te(.075,.075,Et,t.galv,0,0,0,14));const Dt=new Jt;Dt.position.y=Et,At.add(Dt),Dt.add(new dt(new ke(.09,14,10),t.darkSteel)),Dt.add(Te(.068,.068,pt,t.galv,0,0,0,14));const kt=t.yellow.clone();kt.side=rn;const le=new dt(new Tn(.25,.07,.32,24,1,!0),kt);le.position.y=pt+.16,le.castShadow=!0,Dt.add(le);const Wt=[.12,.5],de=[1,1.95];At.rotation.x=Wt[0],Dt.rotation.x=Wt[1],c(st);const O=l("VEN-01","hazard",st,[.9,2.8,1.5],[-.3,3.7,-4.4],[-.3,5.3,-3.9]);O.label="VEN-01",O.fix=()=>(j.material.emissive.set(2883434),j.material.color.set(13056),a(1.8,R=>{At.rotation.x=sn(Wt[0],de[0],R),Dt.rotation.x=sn(Wt[1],de[1],R)}));const we=C(11,3.5,!1);we.group.position.set(2,0,-3.25),we.setOpen(1,-1.75),c(we.group);const Yt=l("RAD-01","hazard",we.group,[.35,2,1.2],[2,1.1,-4.45],[2,2.5,-4.4]);Yt.fix=()=>a(1.6,R=>we.setOpen(1-R,-1.75));const It=new Jt;It.add(Te(.115,.115,1.25,t.cylinder,0,0,0,24));const Rt=new dt(new ke(.115,24,12,0,jt*2,0,jt/2),t.cylinder);Rt.position.y=1.25,Rt.castShadow=!0,It.add(Rt);const re=new dt(new Tn(.117,.117,.22,24,1,!0),new pe({map:Gn(512,96,(R,D,$)=>{R.fillStyle="#ffffff",R.fillRect(0,0,D,$),R.fillStyle="#002550",R.font="900 44px Gilroy, Arial, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("SHIELDING GAS",D/2,$/2+2)}),roughness:.6}));re.position.y=.85,It.add(re),It.add(Te(.025,.03,.12,t.copper,0,1.33,0,12));const Ct=St(.07,.08,.07,t.copper,.06,1.38,0);It.add(Ct);for(const R of[-.04,.04]){const D=Te(.035,.035,.025,t.white,.1,1.46,R,16,{base:!1});D.rotation.z=jt/2,It.add(D)}const b={p:new T(1.45,0,-3),rz:.07},v={p:new T(1.72,0,-4.66)};It.position.copy(b.p),It.rotation.z=b.rz,c(It),c(St(.3,.06,.08,t.darkSteel,1.72,.9,-4.92)),c(St(.3,.06,.08,t.darkSteel,1.72,.5,-4.92));const B=new Jt;for(let R=0;R<7;R++){const D=new dt(new xr(.018,.005,6,10),t.darkSteel);D.position.set(1.72,.88-R*.03,-4.86),D.rotation.y=R%2?jt/2:0,B.add(D)}c(B);const Q=new Jt;for(const R of[.92,.52]){const D=new dt(new xr(.13,.009,6,32),t.darkSteel);D.rotation.x=jt/2,D.position.set(v.p.x,R,v.p.z),Q.add(D)}Q.visible=!1,c(Q);let tt=null;const J=()=>{tt&&(e.remove(tt),tt.geometry.dispose()),It.updateMatrixWorld(!0);const R=new T(.1,1.38,0).applyMatrix4(It.matrixWorld),D=new T(_t+.18,.95,Tt+.1),$=R.clone().lerp(D,.5);$.y=Math.min(R.y,D.y)-.35,tt=po([R,$,D],.008,t.black,24),e.add(tt)};J();const bt=l("GAS-01","hazard",It,[.42,1.6,.42],[b.p.x,.8,b.p.z],[b.p.x,1.9,b.p.z]);bt.fix=async()=>{await a(1.4,R=>{It.position.lerpVectors(b.p,v.p,R),It.position.y=Math.sin(R*jt)*.03,It.rotation.z=sn(b.rz,0,R),J()}),B.visible=!1,Q.visible=!0,i.shadowsDirty()};const rt=new Jt,xt=Te(.024,.02,.17,t.black,0,0,0,12,{base:!1});xt.rotation.z=jt/2,rt.add(xt);const Zt=St(.07,.03,.035,t.copper,.11,-.012,0,{base:!1});rt.add(Zt);const it=Te(.0035,.0035,.3,t.steel,.16,-.012,.13,6,{base:!1});it.rotation.x=jt/2,rt.add(it);const gt={p:new T(.4,W+.05,-3.55),r:new je(0,.4,0)},Pt={p:new T(-1.86,1.25,-3.05),r:new je(0,0,-jt/2)};rt.position.copy(gt.p),rt.rotation.copy(gt.r),c(rt),c(St(.05,.12,.05,t.black,-1.92,1.32,-3.05)),c(St(.09,.025,.04,t.black,-1.89,1.27,-3.05));let Lt=null;const yt=()=>{Lt&&(e.remove(Lt),Lt.geometry.dispose()),rt.updateMatrixWorld(!0);const R=new T(-.085,0,0).applyMatrix4(rt.matrixWorld),D=new T(_t-.1,.3,Tt+.3),$=[R,new T(R.x-.05,W+.05,R.z+.15),new T((R.x+D.x)/2,.03,-3.2),new T(D.x-.1,.03,D.z+.3),D];rt.position.x<-1&&$.splice(1,1,new T(R.x+.1,.6,R.z+.2)),Lt=po($,.012,t.rubber,48),e.add(Lt)};yt();const $t=l("ELE-02","hazard",rt,[.6,.25,.45],[gt.p.x,gt.p.y,gt.p.z],[gt.p.x,1.35,gt.p.z]);$t.fix=async()=>{it.visible=!1;const R=new Hn().setFromEuler(gt.r),D=new Hn().setFromEuler(Pt.r);await a(1.4,$=>{rt.position.lerpVectors(gt.p,Pt.p,$),rt.position.y+=Math.sin($*jt)*.25,rt.quaternion.slerpQuaternions(R,D,$),yt()}),te.material.emissive.set(0),te.material.color.set(1118481)};const Ut=new Jt,oe=new pe({map:Gn(256,128,(R,D,$)=>{R.fillStyle="#c21f1f",R.fillRect(0,0,D,$),R.fillStyle="#ffffff",R.fillRect(0,$*.3,D,$*.4),R.fillStyle="#c21f1f",R.font="900 30px Gilroy, Arial, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("DEGREASER",D/4,$/2+1),R.fillText("DEGREASER",3*D/4,$/2+1)}),roughness:.4,metalness:.5}),I=new dt(new Tn(.065,.065,.2,20),oe);I.position.y=.1,I.castShadow=!0,Ut.add(I);const at=Te(.03,.03,.02,t.darkSteel,.11,.01,.05,12,{base:!1});at.rotation.x=jt/2,Ut.add(at),Ut.position.set(-.95,W+.015,-3.55),c(Ut);const X=l("FAC-05","hazard",Ut,[.36,.32,.36],[-.92,W+.13,-3.52],[-.95,1.4,-3.55]);X.fix=async()=>{await a(.5,D=>{at.position.set(sn(.11,0,D),sn(.01,.21,D),sn(.05,0,D)),at.rotation.x=sn(jt/2,0,D)});const R=Ut.position.clone();await a(1,D=>{Ut.position.set(R.x,R.y+D*.5,R.z+D*.8),Ut.scale.setScalar(1-D)}),Ut.visible=!1};const Z=new Jt,lt=.5,ct=.32,Nt=.4;Z.add(St(lt,.01,Nt,t.cardboard,0,0,0)),Z.add(St(lt,ct,.01,t.cardboard,0,0,-Nt/2),St(lt,ct,.01,t.cardboard,0,0,Nt/2)),Z.add(St(.01,ct,Nt,t.cardboard,-lt/2,0,0),St(.01,ct,Nt,t.cardboard,lt/2,0,0));const he=St(lt,.01,.18,t.cardboard,0,ct,Nt/2+.07,{base:!1});he.rotation.x=.5,Z.add(he);for(let R=0;R<6;R++){const D=new dt(new Aa(.09,0),R%2?t.rag:t.ragBlue);D.position.set(-.15+R%3*.15,ct-.02+(R>2?.04:0),-.08+(R>2?.12:0)),D.scale.set(1.2,.6,1),D.rotation.set(R,R*2,R*.5),D.castShadow=!0,Z.add(D)}const me=new T(-.8,0,-3.6);Z.position.copy(me),c(Z);const Xt=new T(1.4,0,-.85);c(Te(.24,.22,.7,t.red,Xt.x,0,Xt.z,20));const Ee=new Jt;Ee.add(Te(.25,.25,.04,t.darkSteel,0,0,0,20)),Ee.position.set(Xt.x-.25,.7,Xt.z),Ee.children[0].position.x=.25,Ee.rotation.z=1.2,c(Ee);const qe=new dt(new _e(.34,.17),new Re({map:Pi({lines:["Oily waste"],bg:"#ffffff",w:256,h:128})}));qe.position.set(Xt.x,.45,Xt.z+.235),c(qe);const bs=l("AREA-01","hazard",Z,[.7,.55,.6],[me.x,.25,me.z],[me.x,1.15,me.z+.1]);bs.fix=async()=>{const R=Z.position.clone(),D=new T(Xt.x,.75,Xt.z);await a(1.6,$=>{Z.position.lerpVectors(R,D,$),Z.position.y+=Math.sin($*jt)*.9,Z.scale.setScalar(sn(1,.35,$))}),Z.visible=!1,await a(.4,$=>{Ee.rotation.z=sn(1.2,0,$)})};const Ye=new Jt;Ye.add(St(.08,1.3,.08,t.darkSteel,0,0,-.1)),Ye.add(Te(.095,.095,.5,t.red,0,.62,0,20)),Ye.add(Te(.03,.03,.1,t.black,0,1.12,0,10)),Ye.add(St(.12,.02,.03,t.black,.04,1.22,0));const mn=po([new T(.03,1.18,.02),new T(.12,1,.08),new T(.1,.75,.1)],.01,t.black,12);Ye.add(mn);const ai=new dt(new _e(.4,.2),new Re({map:Pi({lines:["Fire","extinguisher"],bg:"#c21f1f",fg:"#ffffff",w:256,h:128})}));ai.position.set(0,1.55,-.055),Ye.add(ai),Ye.position.set(-2.5,0,-1.3),c(Ye);const ln=new Jt;for(let R=0;R<3;R++){const D=Jc(t);D.position.y=R*.145,D.rotation.y=(R-1)*.04,ln.add(D)}ln.add(St(.5,.4,.4,t.cardboard,-.25,.435,.05),St(.4,.3,.35,t.cardboard,.3,.435,-.05));const qi=new T(-2.5,0,-.62),ci=new T(-9.5,0,1.5);ln.position.copy(qi),c(ln);const Ts=l("AREA-02","hazard",[Ye,ln],[1.3,1.6,1.3],[-2.5,.8,-.95],[-2.5,2,-1]);Ts.fix=()=>a(2,R=>{ln.position.lerpVectors(qi,ci,R),ln.rotation.y=R*.6});const Ie=new Jt;Ie.add(St(.9,1.9,.5,t.lockerGrey,0,0,0)),Ie.add(St(.005,1.8,.01,t.darkSteel,0,.05,.255));for(const R of[-.22,.22]){for(let D=0;D<5;D++)Ie.add(St(.2,.012,.01,t.darkSteel,R,1.55+D*.04,.256));Ie.add(St(.02,.12,.03,t.darkSteel,R>0?.05:-.05,1,.26))}const Yi=new dt(new _e(.8,.3),new Re({map:Pi({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));Yi.position.set(0,2.15,.02),Ie.add(Yi);const Xn=new Jt,$i=new dt(new ke(.15,18,12,0,jt*2,0,jt/1.6),t.navy);$i.scale.set(1,1.15,1.1),$i.rotation.x=jt/2.4,Xn.add($i);const Rr=St(.1,.05,.01,new pe({color:793100,roughness:.1,metalness:.6}),0,.04,.16,{base:!1});Xn.add(Rr),Xn.position.set(-.2,2,0),Ie.add(Xn);const Cr=St(.08,.7,.5,new pe({color:7031339,roughness:.9}),.5,.9,0);Ie.add(Cr),Ie.position.set(-3.4,0,1.8),Ie.rotation.y=jt/2,c(Ie,!0),l("PPE","ppe",Ie,[.7,2.2,1.2],[-3.35,1.05,1.8],[-3.4,2.6,1.8]);for(const R of[-12,-9,-6]){const D=jc(3.2,t.navy,.22);D.position.set(R,0,-10.9),c(D);for(let $=.8;$<3.2;$+=.8)c(St(.12,.08,1,t.navy,R,$,-10.4))}for(let R=.88;R<3.2;R+=.8)for(let D=0;D<3;D++){const $=sr(7.5,t.darkSteel,.14,.08);$.position.set(-9,R+.07,-10.1-D*.22),c($)}for(const[R,D,$]of[[-9.5,4.5,8],[-11.5,7.5,5],[11.5,7,6]]){const ot=Jc(t);ot.position.set(R,0,D),c(ot);for(let vt=0;vt<$;vt++)c(St(1.15,.02,.78,t.steel,R,.145+vt*.022,D))}for(const R of[6.5,10.5])c(St(.08,.7,.08,t.navy,R,0,4.6),St(.08,.7,.08,t.navy,R,0,5.4)),c(St(.1,.08,.9,t.navy,R,.7,5));const M=sr(5.5,t.columnBlue,.6,.3);M.position.set(8.5,1.08,5),c(M),c(St(1.6,.85,.7,t.darkSteel,7.5,0,9.5),St(.2,.25,.2,t.machine,7.2,.85,9.5));const U=Qc(t);U.position.set(3.7,0,0),c(U),o.push((R,D)=>{const $=-3+5*Math.sin(D*.18),ot=5*.18*Math.cos(D*.18);U.position.z=$,U.rotation.y=ot>0?0:jt;const vt=Math.sin(D*6)*.45*Math.min(1,Math.abs(ot));U.userData.legs[0].rotation.x=vt,U.userData.legs[1].rotation.x=-vt,U.userData.arms[0].rotation.x=-vt*.6,U.userData.arms[1].rotation.x=vt*.6}),U.traverse(R=>{R.castShadow=!1});const H=new $0(15331576,7038560,1.4);c(H);const z=new Q0(16774890,1.8);z.position.set(7,14,8),z.target.position.set(0,0,-3),z.castShadow=!0,z.shadow.mapSize.set(2048,2048),Object.assign(z.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:1,far:40}),z.shadow.bias=-4e-4,z.shadow.normalBias=.02,c(z),c(z.target);for(const[R,D]of[[-6,-6],[6,-6],[-6,4],[6,4]]){const $=new yr(16773596,30,18,1.6);$.position.set(R,6.6,D),c($)}const F=new K0(16777215,25,8,.9,.5,1.5);return F.position.set(0,4.5,-2.5),F.target.position.set(0,0,-3.6),c(F),c(F.target),{root:e,floors:n,blockers:s,interactables:r,spawn:{position:new T(0,0,3.6),yaw:0},weldSpot:{center:new T(-.45,W+.03,-3.52),standAt:new T(-.45,0,-3.02),bench:{y:W+.03,minX:Y-.9,maxX:Y+.9,minZ:nt-.45,maxZ:nt+.45}},bounds:{minX:-15.4,maxX:15.4,minZ:-11.4,maxZ:11.4},update(R,D){for(const $ of o)$(R,D)}}}const gg={id:"factory",hazards:[{id:"AREA-01",correct:1},{id:"VEN-01",correct:2},{id:"RAD-01",correct:0},{id:"GAS-01",correct:0},{id:"ELE-02",correct:2},{id:"AREA-02",correct:0},{id:"FAC-05",correct:1}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,2,0,1,0],passScore:.8},Sn=(i,t=.5,e=.3)=>new pe({color:i,roughness:t,metalness:e});function Ae(i,t,e,n,s,r=16){const o=new dt(new Tn(t,i,n-e,r),s);return o.position.y=(e+n)/2,o.castShadow=!1,o}function _g(i){const t=new Jt;t.name=`torch-${i}`;const e=Sn(1776928,.7,.1),n=Sn(9552,.55,.2),s=Sn(16739072,.5,.1),r=Sn(12088115,.35,.9),o=Sn(10133670,.4,.85),a={group:t,process:i,length:0,handY:()=>.17,setLength(){}};if(i==="GMAW"){t.add(Ae(9e-4,9e-4,0,.013,o,6)),t.add(Ae(.0035,.004,.011,.016,r,10)),t.add(Ae(.0085,.0095,.013,.048,r,18)),t.add(Ae(.0075,.0075,.048,.115,e,14)),t.add(Ae(.016,.018,.115,.245,n,16));const c=new dt(new cn(.008,.035,.014),s);c.position.set(0,.15,-.019),t.add(c),t.add(Ae(.009,.009,.245,.31,e,10)),a.handY=()=>.17}else if(i==="SMAW"){const c=Ae(.0022,.0022,0,1,Sn(9210496,.9,.05),8),l=Ae(.0014,.0014,0,.022,o,6),h=new Jt;h.add(Ae(.009,.009,0,.03,r,12)),h.add(Ae(.016,.018,.03,.16,e,16)),h.add(Ae(.011,.011,.16,.22,e,10)),t.add(c,l,h),a.setLength=u=>{a.length=u,c.scale.y=Math.max(.001,u),c.position.y=u/2,l.position.y=u+.002,h.position.y=u+.012},a.handY=()=>a.length+.09,a.setLength(.3)}else t.add(Ae(2e-4,.0012,0,.006,Sn(7238522,.3,.9),8)),t.add(Ae(.0055,.008,.005,.025,Sn(15193030,.8,0),18)),t.add(Ae(.011,.011,.025,.06,e,16)),t.add(Ae(.007,.007,.06,.1,e,12)),t.add(Ae(.012,.013,.06,.19,n,16)),t.add(Ae(.008,.008,.19,.25,e,10)),a.handY=()=>.13;return a}function vg(){const i=new Jt;return i.add(Ae(.0012,.0012,0,.5,Sn(12946778,.35,.9),8)),{group:i,handY:()=>.3}}function dr(i,t=128){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(const[o,a]of i)s.addColorStop(o,a);n.fillStyle=s,n.fillRect(0,0,t,t);const r=new Sa(e);return r.colorSpace=Le,r}const mo=(i,t)=>new br({map:i,color:t,blending:Ms,transparent:!0,depthWrite:!1,toneMapped:!1});class xg{constructor(t,e=2e3){const n=new ke(1,14,8);this.cap=e,this.metal=new ro(n,new pe({color:16777215,roughness:.32,metalness:.85}),e),this.slag=new ro(n,new pe({color:16777215,roughness:.95,metalness:.05}),e),this.glow=new ro(n,new Re({color:16777215,blending:Ms,transparent:!0,depthWrite:!1,toneMapped:!1}),e),this.glow.renderOrder=961;const s=new Gt(1,1,1);for(const r of[this.metal,this.slag,this.glow]){for(let o=0;o<e;o++)r.setColorAt(o,s);r.count=0,r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!0,t.add(r)}this.items=[],this._m=new ne,this._q=new Hn,this._s=new T,this._c=new Gt,this.useSlag=!1}clear(){this.items=[];for(const t of[this.metal,this.slag,this.glow])t.count=0}get last(){return this.items[this.items.length-1]||null}add(t,e,n,s,r,o){if(this.items.length>=this.cap)return null;const a={p:t.clone(),w:e,h:n,len:Math.max(e*.55,.0022),yaw:s,born:o,grow:1,i:this.items.length};this.items.push(a),this.metal.setColorAt(a.i,this._c.set(r)),this.slag.setColorAt(a.i,this._c.set(3880497)),this._write(a);for(const c of[this.metal,this.slag,this.glow])c.count=this.items.length,c.instanceColor.needsUpdate=!0;return a}_write(t,e=1){this._q.setFromAxisAngle(new T(0,1,0),t.yaw);const n=t.len*t.grow,s=t.h*t.grow,r=t.w/2*t.grow;this._m.compose(t.p,this._q,this._s.set(n,s,r)),this.metal.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.05,s*1.18,r*1.08).multiplyScalar(this.useSlag?e:0)),this.slag.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.1,s*1.25,r*1.14)),this.glow.setMatrixAt(t.i,this._m);for(const o of[this.metal,this.slag,this.glow])o.instanceMatrix.needsUpdate=!0}growLast(t){const e=this.last;!e||e.grow>=1.9||(e.grow=Math.min(1.9,e.grow+t*.9),this._write(e))}update(t){let e=!1;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n],r=t-s.born;if(r>4.5){s.cold||(s.cold=!0,this.glow.setColorAt(s.i,this._c.setRGB(0,0,0)),e=!0);continue}const o=Math.exp(-r/.8);this.glow.setColorAt(s.i,this._c.setRGB(1.6*Math.sqrt(o),.55*o,.12*o*o)),e=!0}e&&(this.glow.instanceColor.needsUpdate=!0)}setSlagVisibleFrom(t){const e=Math.floor(this.items.length*t);for(let n=0;n<this.items.length;n++)this._write(this.items[n],n<e?0:1)}}class yg{constructor(t){this.core=new gs(mo(dr([[0,"rgba(255,255,255,1)"],[.18,"rgba(235,245,255,0.95)"],[.45,"rgba(160,200,255,0.35)"],[1,"rgba(120,170,255,0)"]]),16777215)),this.halo=new gs(mo(dr([[0,"rgba(255,255,255,0.6)"],[.3,"rgba(200,220,255,0.18)"],[1,"rgba(150,190,255,0)"]]),16777215)),this.pool=new gs(mo(dr([[0,"rgba(255,250,220,1)"],[.35,"rgba(255,170,60,0.8)"],[1,"rgba(255,90,0,0)"]]),16777215)),this.core.renderOrder=963,this.halo.renderOrder=962,this.pool.renderOrder=962,this.light=new yr(14214911,0,3.5,2),t.add(this.core,this.halo,this.pool,this.light),this.set(!1)}setColor(t){this.light.color.set(t),this.core.material.color.set(t),this.halo.material.color.set(t)}set(t){this.on=t,this.core.visible=this.halo.visible=this.pool.visible=t,t||(this.light.intensity=0)}update(t,e,n,s){if(!this.on)return;const r=.75+Math.random()*.5+(s?(Math.random()-.5)*.9:0),o=t.clone().lerp(e,.5);this.core.position.copy(o),this.core.scale.setScalar(.028*r),this.halo.position.copy(o),this.halo.scale.setScalar(.11*(.85+Math.random()*.3)),this.pool.position.copy(e).y+=.0015,this.pool.scale.setScalar(.016*(.9+Math.random()*.2)),this.light.position.copy(o).y+=.12,this.light.intensity=n*r}}class Mg{constructor(t,e=600){this.max=e,this.pos=new Float32Array(e*3).fill(-100),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.age=new Float32Array(e),this.next=0;const n=new ye;n.setAttribute("position",new He(this.pos,3)),n.setAttribute("color",new He(this.col,3)),this.points=new L0(n,new Jl({size:.0055,vertexColors:!0,blending:Ms,transparent:!0,depthWrite:!1,toneMapped:!1})),this.points.frustumCulled=!1,this.points.renderOrder=964,t.add(this.points),this.ground=()=>0}emit(t,e){for(let n=0;n<t;n++){const s=this.next;this.next=(this.next+1)%this.max;const r=Math.random()*Math.PI*2,o=.25+Math.random()*.75,a=.5+Math.random()*1.9,c=Math.sqrt(1-o*o);this.pos.set([e.x,e.y+.002,e.z],s*3),this.vel.set([Math.cos(r)*c*a,o*a,Math.sin(r)*c*a],s*3),this.life[s]=.35+Math.random()*.8,this.age[s]=0}}update(t){const e=this.pos,n=this.vel,s=this.col;for(let r=0;r<this.max;r++){if(this.life[r]<=0)continue;this.age[r]+=t;const o=this.age[r]/this.life[r];if(o>=1){this.life[r]=0,e[r*3+1]=-100;continue}const a=r*3;n[a+1]-=9.8*t,e[a]+=n[a]*t,e[a+1]+=n[a+1]*t,e[a+2]+=n[a+2]*t;const c=this.ground(e[a],e[a+2]);e[a+1]<c&&(e[a+1]=c,n[a+1]*=-.3,n[a]*=.6,n[a+2]*=.6);const l=1-o;s[a]=1.4*l+.2,s[a+1]=.9*l*l+.1*l,s[a+2]=.35*l*l*l}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}}class Sg{constructor(t,e=40){const n=dr([[0,"rgba(200,200,200,0.55)"],[.6,"rgba(170,170,170,0.18)"],[1,"rgba(160,160,160,0)"]],64);this.list=[];for(let s=0;s<e;s++){const r=new gs(new br({map:n,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,t.add(r),this.list.push({s:r,age:0,life:0})}this.acc=0,this.drift=new T(0,.22,-.06)}emit(t,e,n){for(this.acc+=t*e;this.acc>=1;){this.acc-=1;const s=this.list.find(r=>r.life<=0);if(!s)return;s.age=0,s.life=2.2+Math.random(),s.s.position.copy(n).add(new T((Math.random()-.5)*.01,.01,(Math.random()-.5)*.01)),s.s.visible=!0}}update(t){for(const e of this.list){if(e.life<=0)continue;e.age+=t;const n=e.age/e.life;if(n>=1){e.life=0,e.s.visible=!1;continue}e.s.position.addScaledVector(this.drift,t),e.s.position.x+=Math.sin(e.age*3+e.life*7)*.01*t,e.s.scale.setScalar(.02+n*.22),e.s.material.opacity=.4*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}}clear(){for(const t of this.list)t.life=0,t.s.visible=!1}}class wg{constructor(t){this.mesh=new dt(new ke(.2,24,16),new Re({color:795664,side:Fe,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=950,this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.level=0}update(t,e){const n=e===2?.86:e===1?.42:0,s=n>this.level?40:6;this.level+=(n-this.level)*Math.min(1,s*t),this.mesh.material.opacity=this.level,this.mesh.visible=this.level>.01}dispose(){this.mesh.removeFromParent()}}const go={GMAW:{pops:260,decay:.003,base:.22,freq:2400,q:.8,vol:.55},SMAW:{pops:120,decay:.007,base:.18,freq:1600,q:.6,vol:.6},GTAW:{pops:0,decay:.004,base:.6,freq:5200,q:.35,vol:.22}};class Eg{constructor(){this.ctx=null,this.muted=!1,this.buffers={},this.process=null,this.src=null}ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.filter=this.ctx.createBiquadFilter(),this.filter.type="bandpass",this.gain=this.ctx.createGain(),this.gain.gain.value=0,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:1,this.filter.connect(this.gain).connect(this.master).connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0}_buffer(t){if(this.buffers[t])return this.buffers[t];const e=go[t],n=this.ctx.sampleRate,s=Math.floor(n*3),r=this.ctx.createBuffer(1,s,n),o=r.getChannelData(0),a=new Float32Array(s).fill(e.base),c=Math.floor(e.pops*3),l=Math.floor(e.decay*n);for(let h=0;h<c;h++){const u=Math.floor(Math.random()*s),d=.3+Math.random()*.9;for(let f=0;f<l*4&&u+f<s;f++)a[u+f]+=d*Math.exp(-f/l)}for(let h=0;h<s;h++)o[h]=(Math.random()*2-1)*Math.min(1.4,a[h]);for(let h=0;h<256;h++)o[h]*=h/256,o[s-1-h]*=h/256;return this.buffers[t]=r}setProcess(t){if(!this.ctx||this.process===t)return;if(this.process=t,this.src){try{this.src.stop()}catch{}this.src.disconnect()}const e=go[t];this.filter.frequency.value=e.freq,this.filter.Q.value=e.q,this.src=this.ctx.createBufferSource(),this.src.buffer=this._buffer(t),this.src.loop=!0,this.src.connect(this.filter),this.src.start()}update(t,e=0){if(!this.ctx||!this.process)return;const n=go[this.process],s=t?n.vol*(.85+Math.random()*.3)*(1+e*.5):0;this.gain.gain.setTargetAtTime(s,this.ctx.currentTime,t?.015:.04)}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:1,this.ctx.currentTime,.02)}stop(){this.ctx&&this.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.03)}}const tl=["GMAW","SMAW","GTAW"],hs={GMAW:{pace:[.01,.028],w:.008,hr:.38,sparks:90,fume:6,arc:2.6,color:14477567,metal:[10788243,10130571],win:[-.004,.02],strike:.02,lose:.035,touch:null,pcAxis:[-.15,.9,.35]},SMAW:{pace:[.007,.02],w:.009,hr:.42,sparks:140,fume:10,arc:3,color:16773596,metal:[9343896,8751759],win:[-.002,.012],strike:.012,lose:.022,touch:-.004,pcAxis:[.3,.85,.35],burn:.0125,L0:.3,Lmin:.05},GTAW:{pace:[.004,.014],w:.006,hr:.3,sparks:0,fume:1.2,arc:2,color:13228287,metal:[12830925,11449530],win:[-.002,.01],strike:.01,lose:.02,touch:-.004,pcAxis:[-.3,.85,.35]}},bg=.003,el=.025,nl=.005,Tg=.006,Ag=.003,Rg=.006,Cg=.35,Pg=.6,us=new T(0,1,0),rr=new T(0,.5,1).normalize();class Lg{constructor(t){this.game=t,this.engine=t.engine,this.input=t.input,this.panels=t.panels,this.active=!1,this.state="off",this.process="GMAW",this.audio=new Eg,this.pointer={down:!1,valid:!1,id:null,point:new T},this.trigger=!1,this.needRelease=!1,this.arcOn=!1,this.raycaster=new rh,this.plane=new Fn,this._bindPointer(),this._bindXR(),this.engine.updaters.add((e,n)=>{this.active&&this._update(e,n)})}start(){const t=this.game.world;this.spot=t.weldSpot,this.active=!0,this.root=new Jt,this.root.name="weld-practice",t.root.add(this.root),this._buildCoupon(),this.bead=new xg(this.root),this.arc=new yg(this.root),this.sparks=new Mg(this.root);const e=this.spot.bench,n=this.seam;this.sparks.ground=(s,r)=>s>n.minX&&s<n.maxX&&r>n.minZ&&r<n.maxZ?this.top:s>e.minX&&s<e.maxX&&r>e.minZ&&r<e.maxZ?e.y:0,this.fume=new Sg(this.root),this.helmet=new wg(this.engine.camera),this.saved={fov:this.engine.camera.fov},this.pointer.point.set(n.x0-.01,this.top,n.z+.02),this.pointer.valid=!0,this.pcLift=el,this.m=null,this.input.locked=!0,this.input.clearHover(),this.audio.ensure(),this._buildHud(),this._placeUser(),this._choose()}exit(){this.stop(),this.game._afterPractice()}stop(){var e,n,s;if(!this.active)return;this._setArc(!1),this.active=!1,this.state="off",this.audio.stop(),this.panels.hide(),this._restoreRays(),(e=this.torch)==null||e.group.removeFromParent(),(n=this.filler)==null||n.group.removeFromParent(),this.torch=this.filler=this.torchCtrl=null,this.root.removeFromParent(),this.root=null,this.helmet.dispose(),(s=this.hud)==null||s.remove(),this.hud=null;const t=this.engine.camera;t.fov=this.saved.fov,t.updateProjectionMatrix(),this.engine.rig.position.y=0,this.game.world&&this.input.setWorld(this.game.world),this.game.vrHud.mesh.visible=!1}onModeChange(){this.active&&(this._setArc(!1),this.engine.isVR||(this.engine.camera.fov=38,this.engine.camera.updateProjectionMatrix()),this._placeUser(),this._mountTorch(),this.renderHud(!0))}_buildCoupon(){const t=this.spot.center,e=.006,n=.26,s=.06,r=.0015,o=new pe({color:9410462,roughness:.5,metalness:.75});for(const h of[-1,1]){const u=new dt(new cn(n,e,s),o);u.position.set(t.x,t.y+e/2,t.z+h*(s/2+r/2)),u.receiveShadow=!0,this.root.add(u)}this.top=t.y+e,this.seam={x0:t.x-.11,x1:t.x+.11,z:t.z,minX:t.x-n/2,maxX:t.x+n/2,minZ:t.z-s-r/2,maxZ:t.z+s+r/2};const a=new Re({color:16777215,transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1});for(const h of[this.seam.x0,this.seam.x1])for(const u of[-1,1]){const d=new dt(new _e(.0022,.018),a);d.rotation.x=-Math.PI/2,d.position.set(h,this.top+4e-4,t.z+u*.017),d.renderOrder=958,this.root.add(d)}const c=new pe({color:9080724,roughness:.4,metalness:.8});for(const h of[t.x-n/2+.008,t.x+n/2-.008]){const u=new dt(new ke(1,10,6),c);u.scale.set(.004,.002,.003),u.position.set(h,this.top,t.z),this.root.add(u)}const l=new dt(new cn(.018,.016,.024),new pe({color:12088115,roughness:.4,metalness:.8}));l.position.set(t.x+n/2-.012,this.top+.008,t.z+s*.8),this.root.add(l)}_placeUser(){const t=this.engine,e=this.spot.standAt;if(t.isVR){t.rig.position.y=0;const n=new T;t.camera.getWorldDirection(n),this.input.snapTurn(-Math.atan2(-n.x,-n.z)),this.input.teleport(e)}else t.rig.position.set(e.x,-.25,e.z),this.input.yaw=0,this.input.pitch=-.83,this.input._applyLook(),t.camera.fov=38,t.camera.updateProjectionMatrix()}_setProcess(t){var e,n;this.process=t,(e=this.torch)==null||e.group.removeFromParent(),(n=this.filler)==null||n.group.removeFromParent(),this.torch=_g(t),this.filler=t==="GTAW"?vg():null,this._mountTorch(),this.arc.setColor(hs[t].color),this.audio.ensure(),this.audio.setProcess(t)}_mountTorch(){const t=this.torch;if(t)if(this._restoreRays(),this.torchCtrl=null,this.engine.isVR){const e=this.input.controllers.filter(s=>s.userData.source&&s.userData.grip),n=e.find(s=>s.userData.handedness==="right")||e[0];if(!n){this.root.add(t.group);return}if(this.torchCtrl=n,n.userData.grip.add(t.group),t.group.quaternion.setFromUnitVectors(us,rr),this.filler){const s=e.find(r=>r!==n);s?(s.userData.grip.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(us,rr),this.filler.group.position.copy(rr).multiplyScalar(-this.filler.handY())):this.filler.group.removeFromParent()}}else this.root.add(t.group),t.group.quaternion.setFromUnitVectors(us,new T(...hs[this.process].pcAxis).normalize()),this.filler&&(this.root.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(us,new T(.75,.42,.5).normalize()))}_kicker(){return this.torch?`${G("practice.kicker")} · ${G(`practice.processes.${this.process}.name`)}`:G("practice.kicker")}_choose(){this._setArc(!1),this.state="select",this.panels.show({kicker:G("practice.kicker"),title:G("practice.chooseTitle"),body:G("practice.chooseBody"),options:tl.map(t=>({text:`${G(`practice.processes.${t}.name`)}: ${G(`practice.processes.${t}.short`)}`})),onOption:t=>this._intro(tl[t]),buttons:[{label:G("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}),this.renderHud(!0)}_intro(t){this._setProcess(t),this.state="intro",this.panels.show({kicker:this._kicker(),title:G(`practice.processes.${t}.name`),body:[G(`practice.processes.${t}.desc`),this.engine.isVR?G("practice.howVr"):G("practice.howScreen"),G("practice.helmet")],buttons:[{label:G("app.back"),style:"secondary",onClick:()=>this._choose()},{label:G("app.start"),onClick:()=>{this.panels.hide(),this._beginPass()}}]}),this.renderHud(!0)}_beginPass(){this.state="weld",this.bead.clear(),this.fume.clear(),this.bead.useSlag=this.process==="SMAW",this.m={bins:new Array(Math.ceil((this.seam.x1-this.seam.x0)/nl)).fill(!1),lat2:0,latN:0,samples:[],win:null,dGood:0,dFar:0,dClose:0,dN:0},this.vs=0,this.lastDep=null,this.prevPool=null,this.idle=0,this.swapAt=0,this.needRelease=this.trigger||this.pointer.down,this.process==="SMAW"&&this.torch.setLength(hs.SMAW.L0),this.renderHud(!0)}_finishPass(){if(this.state==="weld"){if(this._coverage()<.15){this.game._notify(G("practice.weldFirst"));return}this._setArc(!1),this.state="review",this.renderHud(!0),this.process==="SMAW"?this._slag():this._results()}}_slag(){this.panels.show({kicker:this._kicker(),title:G("practice.slagTitle"),body:G("practice.slagBody"),buttons:[{label:G("practice.chip"),onClick:async()=>{this.panels.hide(),await this.engine.tween(1.6,t=>this.bead.setSlagVisibleFrom(t)),this.active&&this._results()}}]})}_evaluate(){const t=this.m,e=hs[this.process],n=[],s=this._coverage();n.push({key:"coverage",level:s>=.92?"good":"bad",text:s>=.92?"good":"bad"});const r=t.latN?Math.sqrt(t.lat2/t.latN):1,o=r<=Ag?"good":r<=Rg?"ok":"bad";n.push({key:"line",level:o,text:o==="good"?"good":"bad"});const a=t.samples,c=a.length?a.reduce((_,m)=>_+m,0)/a.length:0,l=a.length?Math.sqrt(a.reduce((_,m)=>_+(m-c)**2,0)/a.length):0,h=c<e.pace[0]?"slow":c>e.pace[1]?"fast":"good";n.push({key:"pace",level:h==="good"?"good":"bad",text:h});const u=c>0?l/c:1,d=u<=Cg?"good":u<=Pg?"ok":"bad";if(n.push({key:"steady",level:d,text:d==="good"?"good":"bad"}),t.dN>20){const _=t.dGood/t.dN,m=_>=.75?"good":_>=.5?"ok":"bad";n.push({key:"distance",level:m,text:m==="good"?"good":t.dFar>=t.dClose?"far":"close"})}const f=n.filter(_=>_.level==="bad").length,g=n.filter(_=>_.level==="good").length;return{rows:n,title:g===n.length?"great":f===0?"good":"keep"}}_results(){const t=this._evaluate();this.state="review",this.panels.show({kicker:this._kicker(),title:G(`practice.resultTitle.${t.title}`),options:t.rows.map(e=>({text:G(`practice.fb.${e.key}.${e.text}`),mark:e.level==="good"?G("practice.markGood"):G("practice.markTip"),state:e.level==="good"?"correct":e.level==="bad"?"wrong":null,disabled:!0})),source:`${G("practice.soldamatic")} ${G("practice.note")}`,buttons:[{label:G("practice.change"),style:"secondary",onClick:()=>this._choose()},{label:G("practice.done"),style:"secondary",onClick:()=>this.exit()},{label:G("practice.again"),onClick:()=>{this.panels.hide(),this._beginPass()}}]})}_buildHud(){this.hudCov=K("div.value",{text:"0%"}),this.hudBar=K("div"),this.hudProc=K("div.value",{text:"–"});const t=K("button.btn.secondary",{text:G("practice.soundOn"),onclick:()=>{this.audio.ensure(),this.audio.setMuted(!this.audio.muted),t.textContent=this.audio.muted?G("practice.soundOff"):G("practice.soundOn")}}),e=K("div.hud-actions",{},t,K("button.btn.secondary",{text:G("practice.change"),onclick:()=>{(this.state==="weld"||this.state==="review")&&this._choose()}}),K("button.btn.secondary",{text:G("practice.exit"),onclick:()=>this.exit()}),K("button.btn",{text:G("practice.finishPass"),onclick:()=>this._finishPass()}));this.game.vrSupported&&e.prepend(K("button.btn.secondary",{text:G("app.enterVr"),onclick:()=>this.game._enterVR()})),this.hud=K("div",{},K("div.hud-top",{},K("div.hud-chip",{},K("img.hud-logo",{src:ys,alt:"Seabery"})),K("div",{style:"display:flex;gap:10px"},K("div.hud-chip",{},K("div",{},K("div.label",{text:G("practice.kicker")}),this.hudProc)),K("div.hud-chip",{},K("div",{},K("div.label",{text:G("practice.joint")}),this.hudCov),K("div.cov-bar",{},this.hudBar)))),K("div.hud-bottom",{},K("div.hint-text",{text:G("practice.howScreen")}),e)),this.game.uiRoot.prepend(this.hud)}renderHud(t=!1){if(!this.active)return;const e=Math.round(this._coverage()*100),n=this.torch?G(`practice.processes.${this.process}.name`):"–";this.hud&&(this.hudCov.textContent=`${e}%`,this.hudBar.style.width=`${e}%`,this.hudProc.textContent=n,this.hud.style.display=this.engine.isVR?"none":"");const s=this.game.vrHud,r=this.engine.isVR&&this.state==="weld",o=`${e}|${n}|${this.game.lastMsg}|${r}`;!t&&o===this._hudKey||(this._hudKey=o,s.mesh.visible=r,r&&s.render({kicker:G("practice.kicker"),title:n,body:[`${G("practice.joint")} ${e}%`,this.game.lastMsg].filter(Boolean),buttons:[{label:G("practice.finishPass"),onClick:()=>this._finishPass()},{label:G("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}))}_coverage(){return this.m?this.m.bins.filter(Boolean).length/this.m.bins.length:0}_bindPointer(){const t=this.engine.renderer.domElement,e=new ft,n=new T,s=o=>{const a=t.getBoundingClientRect(),c=o.pointerType==="touch"?70:0;if(e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-c-a.top)/a.height)*2+1),this.raycaster.setFromCamera(e,this.engine.camera),this.plane.set(us,-this.top),!this.raycaster.ray.intersectPlane(this.plane,n))return;const l=this.seam;n.x=Ui.clamp(n.x,l.minX-.12,l.maxX+.12),n.z=Ui.clamp(n.z,l.minZ-.08,l.maxZ+.12),this.pointer.point.copy(n),this.pointer.valid=!0};t.addEventListener("pointerdown",o=>{!this.active||this.engine.isVR||this.state!=="weld"||this.panels.isOpen||this.pointer.down||(s(o),this.pointer.down=!0,this.pointer.id=o.pointerId,this.audio.ensure())}),t.addEventListener("pointermove",o=>{!this.active||this.engine.isVR||this.pointer.down&&o.pointerId!==this.pointer.id||s(o)});const r=o=>{o.pointerId===this.pointer.id&&(this.pointer.down=!1,this.pointer.id=null,this.needRelease=!1)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}_bindXR(){for(const t of this.input.controllers)t.addEventListener("selectstart",()=>{!this.active||t!==this.torchCtrl||(this.trigger=!0,this.audio.ensure())}),t.addEventListener("selectend",()=>{t===this.torchCtrl&&(this.trigger=!1,this.needRelease=!1)})}_rays(t,e){const n=this.torchCtrl;if(!n)return;const s=!t||e&&e.distanceTo(this.spot.center)>.35;n.userData.line.visible=n.userData.dot.visible=s}_restoreRays(){for(const t of this.input.controllers)t.userData.line.visible=t.userData.dot.visible=!0}_haptic(t,e){var s,r,o,a,c;const n=(r=(s=this.torchCtrl)==null?void 0:s.userData.source)==null?void 0:r.gamepad;try{(c=(a=(o=n==null?void 0:n.hapticActuators)==null?void 0:o[0])==null?void 0:a.pulse)==null||c.call(a,t,e)}catch{}}_setArc(t){var e;t!==this.arcOn&&(this.arcOn=t,(e=this.arc)==null||e.set(t),this.lastDep=null,this.prevPool=null,this.m&&(this.m.win=null),t||this.audio.update(!1))}_update(t,e){const n=hs[this.process],s=this.engine.isVR,r=this.state==="weld"&&!this.panels.isOpen;let o=null;if(this.torch){const d=this.torch.group;if(s)this.torchCtrl||this._mountTorch(),this.torchCtrl&&d.position.copy(rr).multiplyScalar(-this.torch.handY());else{const f=this.pointer.down&&r?bg:el;this.pcLift+=(f-this.pcLift)*Math.min(1,t*18),d.position.set(this.pointer.point.x,this.top+this.pcLift,this.pointer.point.z)}d.updateWorldMatrix(!0,!1),o=new T().setFromMatrixPosition(d.matrixWorld),s&&this._rays(r,o)}const a=this.seam,c=o?o.y-this.top:1,l=!!o&&o.x>a.minX&&o.x<a.maxX&&o.z>a.minZ&&o.z<a.maxZ;this.swapAt&&e>=this.swapAt&&(this.torch.setLength(n.L0),this.swapAt=0);let h=!1;r&&l&&!this.needRelease&&!this.swapAt&&(s?h=this.trigger&&(this.arcOn?c<n.lose:c<n.strike):h=this.pointer.down),h&&s&&n.touch!=null&&c<n.touch&&(h=!1,this.needRelease=!0,this._haptic(1,180),this.game._notify(G(this.process==="SMAW"?"practice.stuck":"practice.tungsten"))),this.arcOn&&!h&&s&&r&&this.trigger&&!this.needRelease&&c>=n.lose&&(this.needRelease=!0,this.game._notify(G("practice.lost"))),this._setArc(h);let u=0;if(this.arcOn){const d=this.m,f=new T(o.x,this.top,o.z);s&&(d.dN++,c>n.win[1]?(d.dFar++,u=Math.min(1,(c-n.win[1])/(n.lose-n.win[1]))):c<n.win[0]?d.dClose++:d.dGood++),this.arc.update(o,f,n.arc,u>.3);const g=this.prevPool?Math.hypot(f.x-this.prevPool.x,f.z-this.prevPool.z):0;this.vs+=(g/Math.max(t,1e-4)-this.vs)*(1-Math.exp(-t/.3)),this.prevPool=f.clone();const _=(n.pace[0]+n.pace[1])/2,m=Ui.clamp(Math.sqrt(_/Math.max(this.vs,.002)),.55,1.8),p=.0012;this.lastDep||(this.lastDep=f.clone().addScaledVector(new T(1,0,0),-p));let E=Math.hypot(f.x-this.lastDep.x,f.z-this.lastDep.z);E<p&&this.bead.growLast(t);let S=0;for(;E>=p&&S++<200;){const N=new T(f.x-this.lastDep.x,0,f.z-this.lastDep.z).normalize(),A=this.lastDep.clone().addScaledVector(N,p),C=A.clone(),P=u*.0016;C.x+=(Math.random()-.5)*P,C.z+=(Math.random()-.5)*P;const w=Math.atan2(-N.z,N.x),y=this.bead.items.length,L=y%4<2?1:.92;this.bead.add(C,n.w*m*(1+u*.3)*L,n.w*n.hr*Math.sqrt(m)*(1-u*.3),w,n.metal[y%4<2?0:1],e),this.lastDep=A;const V=A.z-a.z;d.lat2+=V*V,d.latN++,Math.abs(V)<Tg&&A.x>=a.x0&&A.x<=a.x1&&(d.bins[Math.min(d.bins.length-1,Math.floor((A.x-a.x0)/nl))]=!0),E-=p}d.win||(d.win={t:0,x:f.x,first:!0}),d.win.t+=t,d.win.t>=.25&&(d.win.first||d.samples.push(Math.abs(f.x-d.win.x)/d.win.t),d.win={t:0,x:f.x,first:!1});const x=n.sparks*(1+u*2);this.sparks.emit(Math.floor(x*t+Math.random()),f),this.fume.emit(n.fume,t,f),this.audio.update(!0,u),s&&(this._hapT=(this._hapT||0)+t)>.05&&(this._hapT=0,this._haptic(.12+Math.random()*.15+u*.3,45)),this.process==="SMAW"&&(this.torch.setLength(this.torch.length-n.burn*t),this.torch.length<=n.Lmin&&(this._setArc(!1),this.needRelease=!0,this.swapAt=e+1.2,this.game._notify(G("practice.electrodeUsed")))),this.idle=0}if(this.filler&&!s&&o){const d=this.arcOn&&Math.sin(e*5)>.2?0:.005;this.filler.group.position.set(o.x+.007,this.top+.0015+d+(this.arcOn?0:.015),o.z+.002)}this.sparks.update(t),this.fume.update(t),this.bead.update(e),this.helmet.update(t,this.state==="weld"&&!this.panels.isOpen?this.arcOn?2:1:0),this.state==="weld"&&!this.arcOn&&this._coverage()>=.95&&(this.idle+=t,this.idle>.8&&this._finishPass()),(this._hudT=(this._hudT||0)+t)>.2&&(this._hudT=0,this.renderHud())}}const il=[{id:"factory",icon:fo.factory,build:mg,content:gg,available:!0},{id:"construction",icon:fo.construction,available:!1},{id:"shipyard",icon:fo.shipyard,available:!1}],Dg=i=>{const t=[...Array(i).keys()];for(let e=i-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};class Ig{constructor({engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}){Object.assign(this,{engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}),this.world=null,this.env=null,this.layer=K("div"),this.hud=null,s.append(this.layer),e.onSelect=o=>this._onSelect(o),e.addEventListener("hover",o=>this._onHover(o.detail)),t.updaters.add((o,a)=>this._update(o,a)),t.addEventListener("vrstart",()=>{this._renderHud(),this.phase==="practice"&&this.practice.onModeChange()}),t.addEventListener("vrend",()=>{this._renderHud(),this.phase==="results"&&(this.panels.hide(),this._resultsScreen()),this.phase==="practice"&&this.practice.onModeChange()}),this.vrHud=new oh({widthM:.26,px:640,maxH:700,compact:!0}),this.vrHud.mesh.position.set(0,.09,.02),this.vrHud.mesh.rotation.set(-1,0,0),this.vrHud.mesh.visible=!1,e.uiMeshes.add(this.vrHud.mesh),e.addEventListener("controller",o=>{const{grip:a,handedness:c}=o.detail;(c==="left"||!this.vrHud.mesh.parent)&&a.add(this.vrHud.mesh)}),this.markerTex=hg(),this.markers=[],this.practice=new Lg(this)}showMenu(){this.phase="menu",this._clearWorld(),this.panels.hide(),this._hideHud(),this.layer.replaceChildren(K("div.screen",{},K("img.logo",{src:ys,alt:"Seabery"}),K("div.kicker",{text:G("app.kicker")}),K("h1",{text:G("app.title")}),K("p.lead",{text:G("app.lead")}),K("div.env-grid",{},il.map(t=>{const e=K("button.env-card",{disabled:!t.available,onclick:()=>this.startEnv(t.id)});return e.innerHTML=`<span class="env-icon">${t.icon}</span>`,e.append(K("span.tag",{text:t.available?G("app.available"):G("app.comingSoon")}),K("h3",{text:G(`env.${t.id}.name`)}),K("p",{text:G(`env.${t.id}.desc`)})),e})),K("div.howto",{},K("div",{},K("b",{text:G("app.howtoPc")}),G("app.howtoPcText")),K("div",{},K("b",{text:G("app.howtoTablet")}),G("app.howtoTabletText")),K("div",{},K("b",{text:G("app.howtoVr")}),G("app.howtoVrText"))),K("p.draft-note",{text:G("app.draftNote")})))}async startEnv(t){const e=il.find(n=>n.id===t);this.env=e,this.layer.replaceChildren(K("div.screen",{},K("img.logo",{src:ys,alt:"Seabery"}),K("p.lead",{text:G("app.loading")}),K("div.loader",{},K("div")))),await new Promise(n=>setTimeout(n,60)),this._clearWorld(),this.world=e.build(this.engine),this.engine.scene.add(this.world.root),this.engine.shadowsDirty(),this.input.setWorld(this.world),this.state={hazards:{},ppe:{},quiz:[],hints:0},this.hintOn=!1,this._buildMarkers(),this.layer.replaceChildren(),this.phase="explore",this._showHud(),this.input.locked=!1,this._brief()}_brief(){const t=[{label:G("app.start"),onClick:()=>this.panels.hide()}];this.vrSupported&&!this.engine.isVR&&t.unshift({label:G("app.enterVr"),style:"secondary",onClick:()=>this._enterVR()}),this.panels.show({kicker:G(`env.${this.env.id}.name`),title:G("brief.title"),body:[G("brief.body",{count:this.env.content.hazards.length}),G("brief.tip")],buttons:t})}async _enterVR(){try{await this.engine.enterVR()}catch(t){console.warn(t),this._notify(G("app.vrUnsupported"))}}_clearWorld(){this.practice.active&&this.practice.stop(),this.world&&(this.engine.scene.remove(this.world.root),this.world=null),this.input.world=null,this.input.locked=!0;for(const t of this.markers)t.removeFromParent();this.markers=[]}_showHud(){this._hideHud();const t=this.hud=K("div");this.hoverLabel=K("div.hover-label"),this.hudHazards=K("div.value"),this.hudDots=K("div.progress-dots"),this.hudPpe=K("div.value");const e=K("div.hud-actions",{},K("button.btn.secondary",{text:G("hud.hint"),onclick:()=>this._toggleHint()}),K("button.btn",{text:G("hud.finish"),onclick:()=>this._finish()}));this.vrSupported&&e.prepend(K("button.btn.secondary",{text:G("app.enterVr"),onclick:()=>this._enterVR()})),t.append(K("div.hud-top",{},K("div.hud-chip",{},K("img.hud-logo",{src:ys,alt:"Seabery"})),K("div",{style:"display:flex;gap:10px"},K("div.hud-chip",{},K("div",{},K("div.label",{text:G("hud.hazards")}),this.hudHazards),this.hudDots),K("div.hud-chip",{},K("div",{},K("div.label",{text:G("hud.ppe")}),this.hudPpe)))),K("div.hud-bottom",{},K("div.hint-text",{text:matchMedia("(pointer:coarse)").matches?G("app.howtoTabletText"):G("app.howtoPcText")}),e),this.hoverLabel),this.uiRoot.prepend(t),this._renderHud()}_hideHud(){this.hud&&(this.hud.remove(),this.hud=null),this.vrHud.mesh.visible=!1}_counts(){const t=this.env.content,e=t.hazards.filter(s=>{var r;return(r=this.state.hazards[s.id])==null?void 0:r.found}).length,n=t.ppe.filter(s=>this.state.ppe[s.id]).length;return{found:e,total:t.hazards.length,ppe:n,ppeTotal:t.ppe.length}}_renderHud(){if(this.phase==="practice"){this.practice.renderHud(!0);return}if(!this.env||!this.state||this.phase!=="explore"){this.vrHud.mesh.visible=!1;return}const t=this._counts();this.hud&&(this.hudHazards.textContent=`${t.found}/${t.total}`,this.hudDots.replaceChildren(...this.env.content.hazards.map(e=>{var n;return K(`span${(n=this.state.hazards[e.id])!=null&&n.found?".done":""}`)})),this.hudPpe.textContent=`${t.ppe}/${t.ppeTotal}`,this.hud.style.display=this.engine.isVR?"none":""),this.vrHud.mesh.visible=this.engine.isVR,this.vrHud.render({kicker:G(`env.${this.env.id}.name`),title:`${G("hud.hazards")} ${t.found}/${t.total}`,body:[`${G("hud.ppe")} ${t.ppe}/${t.ppeTotal}`,this.lastMsg].filter(Boolean),buttons:[{label:G("hud.hint"),style:"secondary",onClick:()=>this._toggleHint()},{label:G("hud.finish"),onClick:()=>this._finish()}]})}_notify(t){rg(this.uiRoot,t),this.lastMsg=t,this._renderHud(),clearTimeout(this._msgTimer),this._msgTimer=setTimeout(()=>{this.lastMsg=null,this._renderHud()},6e3)}_onHover(t){if(!this.hoverLabel)return;if(!t){this.hoverLabel.style.display="none";return}const e=t.item.id;this.hoverLabel.textContent=G(e==="PPE"?"ppe.label":`hazards.${e}.label`),this.hoverLabel.style.left=t.x+"px",this.hoverLabel.style.top=t.y+"px",this.hoverLabel.style.display="block"}_buildMarkers(){for(const t of Object.values(this.world.interactables)){const e=new gs(new br({map:this.markerTex,depthTest:!1,transparent:!0}));e.scale.setScalar(.32),e.position.copy(t.anchor),e.renderOrder=900,e.visible=!1,e.userData.item=t,this.engine.scene.add(e),this.markers.push(e)}}_toggleHint(){this.hintOn=!this.hintOn,this.hintOn&&(this.state.hints++,this._notify(G("hud.hintShown")))}_update(t,e){this.world&&this.world.update(t,e);for(const n of this.markers)n.visible=this.hintOn&&!n.userData.item.done&&this.phase==="explore",n.visible&&(n.position.y=n.userData.item.anchor.y+Math.sin(e*3)*.05,n.scale.setScalar(.3+Math.sin(e*6)*.02))}_onSelect(t){this.phase==="explore"&&(t.kind==="hazard"?this._hazardPanel(t):t.kind==="ppe"&&this._ppePanel(t))}_mcq(t,{onAnswer:e,actionLabel:n,onAction:s,closable:r=!0}){const o=Dg(t.options.length),a=c=>{const l=c!=null,h=c===t.correct;this.panels.show({kicker:t.kicker,title:l&&t.answeredTitle?t.answeredTitle:t.question,options:o.map(u=>({text:t.options[u],state:l?u===t.correct?"correct":u===c?"wrong":null:null,disabled:l})),onOption:l?null:u=>{const d=o[u];e&&e(d===t.correct),a(d)},feedback:l?{ok:h,title:G(h?"panel.correct":"panel.notQuite"),text:t.why}:null,source:l&&t.source?`${G("panel.basedOn")}: ${t.source}`:null,buttons:l?[{label:n,onClick:s}]:r?[{label:G("app.close"),style:"secondary",onClick:()=>this.panels.hide()}]:[]})};a(null)}_hazardPanel(t){const e=this.env.content.hazards.find(s=>s.id===t.id),n=G(`hazards.${t.id}`);this._mcq({kicker:`${G("hud.inspect")} · ${n.label}`,question:G("panel.whatsWrong"),answeredTitle:n.name,options:n.options,correct:e.correct,why:n.why,source:n.source},{onAnswer:s=>{this.state.hazards[t.id]={found:!0,firstTry:s},this._renderHud()},actionLabel:G("panel.fix"),onAction:async()=>{this.panels.hide(),t.done=!0,t.setHighlight(!1),await t.fix(),this._notify(G("hud.fixed",{name:n.name}));const s=this._counts();s.found===s.total&&setTimeout(()=>this._notify(G("hud.allFound")),1200)}})}_ppePanel(t){const e=this.env.content.ppe,n=e.find(o=>this.state.ppe[o.id]===void 0);if(!n)return;const s=G(`ppe.items.${n.id}`),r=e.indexOf(n);this._mcq({kicker:`${G("ppe.title")} · ${r+1}/${e.length}`,question:s.q,options:s.options,correct:n.correct,why:s.why,source:s.source},{onAnswer:o=>{this.state.ppe[n.id]=o,this._renderHud()},actionLabel:r<e.length-1?G("app.continue"):G("app.close"),onAction:()=>{if(r<e.length-1){this._ppePanel(t);return}this.panels.hide(),t.done=!0,t.setHighlight(!1),this._notify(G("hud.ppeDone"))}})}_finish(){if(this.phase!=="explore")return;const t=this._counts();t.found<t.total||t.ppe<t.ppeTotal?this.panels.show({title:G("finishConfirm.title"),body:G("finishConfirm.body",t),buttons:[{label:G("finishConfirm.keep"),style:"secondary",onClick:()=>this.panels.hide()},{label:G("finishConfirm.finish"),onClick:()=>this._quizIntro()}]}):this._quizIntro()}_quizIntro(){this.phase="quiz",this.hintOn=!1,this._renderHud(),this.panels.show({title:G("quizIntro.title"),body:G("quizIntro.body",{count:this.env.content.quiz.length}),buttons:[{label:G("app.start"),onClick:()=>this._quizQuestion(0)}]})}_quizQuestion(t){const e=G("quiz")[t],n=this.env.content.quiz.length;this._mcq({kicker:G("panel.question",{n:t+1,total:n}),question:e.q,options:e.options,correct:this.env.content.quiz[t],why:e.why,source:e.source},{closable:!1,onAnswer:s=>{this.state.quiz[t]=s},actionLabel:t<n-1?G("app.continue"):G("results.title"),onAction:()=>t<n-1?this._quizQuestion(t+1):this._results()})}_score(){const t=this.env.content,e=this.state,n=t.hazards.map(u=>{const d=e.hazards[u.id];return{id:u.id,name:G(`hazards.${u.id}.name`),status:d?d.firstTry?"ok":"part":"miss"}}),s=t.ppe.map(u=>({id:u.id,name:G(`ppe.items.${u.id}.q`),status:e.ppe[u.id]===void 0?"miss":e.ppe[u.id]?"ok":"part"})),r=e.quiz.filter(Boolean).length,o=n.reduce((u,d)=>u+(d.status==="ok"?1:d.status==="part"?.5:0),0)+s.filter(u=>u.status==="ok").length+r,a=n.length+s.length+t.quiz.length,c=o/a,l=n.every(u=>u.status!=="miss")&&s.every(u=>u.status!=="miss"),h=s.every(u=>u.status==="ok");return{hz:n,pp:s,quizOk:r,quizTotal:t.quiz.length,score:c,pass:l&&h&&c>=t.passScore}}_results(){this.phase="results",this.input.locked=!0,this._renderHud();const t=this.result=this._score();this.engine.isVR?this.panels.show({kicker:G("results.title"),title:t.pass?G("results.passed"):G("results.notPassed"),body:[`${G("results.score")}: ${Math.round(t.score*100)}%`,t.pass?G("results.passText"):G("results.failText")],buttons:[{label:G("results.retry"),style:t.pass?"secondary":void 0,onClick:()=>{this.panels.hide(),this.startEnv(this.env.id)}},{label:G("app.close")+" VR",style:"secondary",onClick:()=>this.engine.exitVR()},...t.pass?[{label:G("practice.cta"),onClick:()=>this.startPractice()}]:[]]}):(this.panels.hide(),this._resultsScreen())}startPractice(){!this.world||!this.world.weldSpot||(this.panels.hide(),this.layer.replaceChildren(),this._hideHud(),this.phase="practice",this.practice.start())}_afterPractice(){this.phase="results",this.input.locked=!0,this._results()}async debugPractice(){await this.startEnv("factory"),this.panels.hide();const t=this.env.content;await Promise.all(Object.values(this.world.interactables).map(e=>(e.done=!0,e.kind==="hazard"?e.fix():null)));for(const e of t.hazards)this.state.hazards[e.id]={found:!0,firstTry:!0};for(const e of t.ppe)this.state.ppe[e.id]=!0;this.state.quiz=t.quiz.map(()=>!0),this.result=this._score(),this.startPractice()}_resultsScreen(){const t=this.result;this._hideHud();const e=this._counts(),n={ok:G("results.stOk"),part:G("results.stPart"),miss:G("results.stMiss")},s=r=>K("li",{},K(`span.st.${r.status}`,{text:n[r.status]}),K("span",{text:`${r.name}`}));this.layer.replaceChildren(K("div.screen",{},K("div.results",{},K("div.kicker",{text:`${G("results.title")} · ${G(`env.${this.env.id}.name`)}`}),K("h1",{text:t.pass?G("results.passed"):G("results.notPassed")}),K("p",{text:t.pass?G("results.passText"):G("results.failText")}),K("div.score-row",{},K("div.score-tile",{},K("div.n",{text:`${Math.round(t.score*100)}%`}),K("div.l",{text:G("results.score")})),K("div.score-tile",{},K("div.n",{text:`${e.found}/${e.total}`}),K("div.l",{text:G("results.hazardsFound")})),K("div.score-tile",{},K("div.n",{text:`${t.pp.filter(r=>r.status==="ok").length}/${t.pp.length}`}),K("div.l",{text:G("results.ppeCorrect")})),K("div.score-tile",{},K("div.n",{text:`${t.quizOk}/${t.quizTotal}`}),K("div.l",{text:G("results.quizCorrect")}))),K("ul.item-list",{},t.hz.map(s),t.pp.map(s)),t.pass?K("div.practice-unlock",{},K("div",{},K("strong",{text:G("practice.unlockTitle")}),K("span",{text:G("practice.unlockText")})),K("button.btn",{text:G("practice.cta"),onclick:()=>this.startPractice()})):null,K("div.actions",{},K(`button.btn${t.pass?".secondary":""}`,{text:G("results.retry"),onclick:()=>this.startEnv(this.env.id)}),K("button.btn.secondary",{text:G("results.menu"),onclick:()=>this.showMenu()})),K("p.draft-note",{style:"text-align:left;color:#4a5d73",text:`${G("results.sourcesTitle")}: ${G("results.sources")}`}),K("p.draft-note",{style:"text-align:left;color:#4a5d73;margin-top:4px",text:G("app.draftNote")}))))}}async function Ug(){await uh();try{await Promise.all([document.fonts.load("900 40px Gilroy"),document.fonts.load("500 40px Gilroy"),document.fonts.load('400 40px "PP Supply Mono"')])}catch{}const i=new Zc(document.getElementById("scene")),t=new ig(i),e=document.getElementById("ui"),n=new og(i,t,e),s=await Zc.vrSupported(),r=new Ig({engine:i,input:t,panels:n,uiRoot:e,vrSupported:s});r.showMenu(),new URLSearchParams(location.search).has("practice")&&r.debugPractice(),window.__game=r}Ug();
