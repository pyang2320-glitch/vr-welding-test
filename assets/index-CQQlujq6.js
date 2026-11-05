(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Qh="modulepreload",td=function(i,t){return new URL(i,t).href},ul={},ed=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=td(c,n),c in ul)return;ul[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let m=o.length-1;m>=0;m--){const x=o[m];if(x.href===c&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Qh,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((m,x)=>{f.addEventListener("load",m),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Fc={title:"Seabery VR Immersive Welding Worksites",kicker:"Pre-weld safety training",lead:"Step into a real-scale worksite. Find the hazards, choose the right PPE and get the workplace ready before the arc is struck.",draftNote:"Prototype v0.1. Safety content is a draft based on public guidance (ANSI Z49.1, OSHA, HSE, INSST, DGUV, ISO/EN) and is pending review by a qualified welding expert.",loading:"Loading worksite…",chooseEnv:"Choose a worksite",comingSoon:"Coming soon",available:"Available",howtoPc:"PC",howtoPcText:"Drag to look · WASD to move · click the floor to walk · click objects",howtoTablet:"Tablet",howtoTabletText:"Drag to look · tap the floor to walk · tap objects",howtoVr:"VR headset",howtoVrText:"Point and pull the trigger · aim at the floor to teleport · thumbstick to turn",enterVr:"Enter VR",vrUnsupported:"VR not available on this device",start:"Start",back:"Back",close:"Close",continue:"Continue",menu:"Menu",worksites:"Worksites",myResults:"My results",best:"Best {score}%"},zc={factory:{name:"Factory",desc:"Metal fabrication workshop with MAG/MMA welding bays, extraction and gas supply.",brief:"You are about to weld in Bay 2 of the fabrication workshop. Before you strike an arc, walk around the welding area and find everything that is not safe. There are {count} hazards. Then visit the PPE locker and dress for the job.",ppeLabel:"PPE locker",sources:"ANSI Z49.1:2021 Safety in Welding, Cutting and Allied Processes (AWS) · OSHA 29 CFR 1910 Subpart Q · UK HSE welding fume guidance (STSU1-2019) · INSST NTP 494 · DGUV Regel 100-500 Kap. 2.26 · EN ISO 11611, EN 12477, ISO 16321-2, EN ISO 15012-1 (scope).",job:"Your job is at the bench in Bay 2."},construction:{name:"Construction site",desc:"Steel frame under construction, outdoors after rain: work at height, falling sparks, wet conditions.",brief:"You are about to weld a beam connection on the first floor of a steel frame under construction. It rained this morning. Before you strike an arc, check the edge, what is below you, the equipment and the permit. There are {count} hazards. Then visit the PPE box and dress for the job.",ppeLabel:"PPE box",sources:"ANSI Z49.1:2021 Safety in Welding, Cutting and Allied Processes (AWS) · OSHA 29 CFR 1926 Subparts J and M (construction) · OSHA 29 CFR 1910.254 · EN ISO 11611, EN 12477, ISO 16321-2 (scope).",job:"Your job is at the work stand next to the beam connection."},shipyard:{name:"Shipyard",desc:"Double-bottom tank in a hull block: confined space, air testing, gas supply and fire watch.",brief:"You are about to weld inside double-bottom tank 4P of a hull block. A glass training window in the deck lets you see into the tank and the next compartment. Before anyone enters or strikes an arc, check the entry, the air, the gas supply, the ventilation and the paperwork. There are {count} hazards. Then visit the PPE locker.",ppeLabel:"PPE locker",sources:"ANSI Z49.1:2021 §6 and §7 (confined spaces) · OSHA 29 CFR 1915.12, 1915.14, 1915.504 (shipyards) · OSHA 29 CFR 1910.252 · UK HSE Asphyxiation hazards in welding · INSST BASEQUIM 007 · EN ISO 11611, EN 12477, ISO 16321-2 (scope).",job:"Your job is the repair on the bottom of tank 4P. You work kneeling inside the tank."},underwater:{name:"Underwater",desc:"Wet welding on a pier pile from a dive barge: electrical safety, trapped gas, dive team and diver PPE.",brief:"A diver is about to wet weld a repair on a pier pile, supplied from the dive station on the barge. You are on the barge deck; the side of the water is shown as a training cutaway so you can see the work below. Check the dive station, the welding circuit and the work site. There are {count} hazards. Then check the diver's equipment at the dive rack.",ppeLabel:"Diver equipment rack",sources:"US Navy Underwater Cutting & Welding Manual S0300-BB-MAN-010 (App. D) · OSHA 29 CFR 1910 Subpart T (commercial diving) · UK HSE Diving at Work Regulations 1997, ACoP L104 · IMCA D 045 · AWS D3.6M, EN ISO 15618-1 (scope).",job:"Your job: weld the repair plate on the pile bracket, 4 m below the surface. You are now the diver."}},Bc={title:"Your task: the pre-weld check",body:"Before you strike an arc, find everything that is not safe. There are {count} hazards. Then visit the PPE station and dress for the job.",tip:"Objects you can inspect light up orange when you point at them."},Hc={hazards:"Hazards",ppe:"PPE",hint:"Hint",finish:"Finish check",hintText:"Look around the booth, the bench, the gas supply and the walkway.",hintShown:"Orange markers show where to look.",inspect:"Inspect",allFound:"All hazards found. Visit the PPE station, then finish the check.",ppeDone:"PPE check complete.",fixed:"Fixed: {name}"},Vc={whatsWrong:"What is the problem here?",correct:"Correct",notQuite:"Not quite",why:"Why it matters",fix:"Fix it",basedOn:"Based on",question:"Question {n} of {total}"},Gc={title:"Finish the check?",body:"You have found {found} of {total} hazards and completed {ppe} of {ppeTotal} PPE checks. Anything you have not found will count as missed.",keep:"Keep looking",finish:"Finish"},Wc={title:"Final questions",body:"Answer {count} short questions to complete the module."},Xc={title:"Safety check results",passed:"Ready to weld",notPassed:"Not ready to weld yet",passText:"You prepared the workplace safely. Keep these checks as a routine before every job.",failText:"Review the items below and try again. In a real workshop, missing one of these can cause an injury or a fire.",score:"Overall score",hazardsFound:"Hazards found",ppeCorrect:"PPE correct",quizCorrect:"Quiz correct",stOk:"Correct",stPart:"Found, wrong answer",stMiss:"Missed",retry:"Try again",menu:"Main menu",sourcesTitle:"Sources",seeResults:"See full results",checkDone:"Safety check complete"},qc=JSON.parse(`{"AREA-01":{"name":"Combustibles in the spark zone","label":"Box under the bench","options":["Nothing. It is normal storage under the bench.","Oily rags and cardboard are inside the spark zone and can catch fire.","The box is too heavy to lift safely."],"why":"Sparks and spatter travel far and can start fires that smoulder unseen. Move combustibles away from the work, or cover them with fire-resistant material. If they cannot be moved or protected, do not weld.","fixText":"Rags moved to a closed metal bin outside the spark zone.","source":"ANSI Z49.1:2021 §6.1; OSHA 1910.252(a)(1)"},"VEN-01":{"name":"Fume extraction off and out of position","label":"Fume extraction arm","options":["It is fine. General ventilation in the hall is enough.","The arm should point at the ceiling to remove hot air.","Extraction is switched off and parked away from the work. Position the hood close to the arc and switch it on."],"why":"All welding fume, including mild steel fume, can cause lung cancer. Capturing fume at the source with local exhaust ventilation (LEV) is the expected control; general ventilation alone is not enough. Keep your head out of the plume.","fixText":"Extraction on and the hood positioned close to the work.","source":"ANSI Z49.1:2021 §5.3–5.4; HSE Safety Alert STSU1-2019"},"RAD-01":{"name":"Curtain open to the walkway","label":"Booth curtain","options":["The curtain is open to the walkway, so arc radiation can reach people passing by.","Curtains should stay open so the supervisor can watch.","The curtain colour is wrong."],"why":"Arc radiation can injure the eyes of people nearby (\\"arc eye\\"), not just the welder. Screens and curtains also stop spatter from reaching others. Close the curtain and make sure nobody nearby is unprotected before you strike the arc.","fixText":"Curtain closed. The walkway is protected.","source":"ANSI Z49.1:2021 §4.1.3; OSHA 1910.252(b)(2)(iii)"},"GAS-01":{"name":"Gas cylinder not secured","label":"Shielding gas cylinder","options":["The cylinder is standing free. It must be chained upright so it cannot fall.","The cylinder should be laid on the floor to be more stable.","Nothing. Shielding gas is not flammable, so it is safe."],"why":"A falling cylinder can break its valve and turn into a projectile. Keep cylinders chained upright, away from sparks, and never let them become part of the welding circuit.","fixText":"Cylinder chained upright to the trolley.","source":"ANSI Z49.1:2021 §10.8.2.1, §10.8.4.12–14; OSHA 1910.253(b)(5)"},"ELE-02":{"name":"Live electrode holder left on the table","label":"Electrode holder","options":["It is fine as long as the welder comes back soon.","Cool the holder in a bucket of water before you put it down.","A live holder with an electrode is lying on the steel table. Remove the electrode, hang the holder on an insulated hook and switch the output off."],"why":"A live electrode holder can give an electric shock or strike an arc on anything it touches. When you stop welding, remove the electrode and place the holder where it cannot touch people, metal or cylinders. Never cool a holder in water.","fixText":"Electrode removed and holder hung on the insulated hook.","source":"ANSI Z49.1:2021 §11.4.6, §11.4.8, §11.4.9.5; OSHA 1926.351(d)"},"AREA-02":{"name":"Fire extinguisher blocked","label":"Fire extinguisher","options":["The extinguisher is blocked by pallets. Clear the access so it can be reached in seconds.","The extinguisher is in the wrong colour.","Nothing. Somebody can move the pallets if there is a fire."],"why":"A small fire must be put out in seconds. Suitable fire-extinguishing equipment must be ready and within reach before you start welding.","fixText":"Pallets moved. The extinguisher is accessible.","source":"ANSI Z49.1:2021 §6.2.1.1"},"FAC-05":{"name":"Open solvent can at the bench","label":"Solvent can","options":["It is useful to keep degreaser at hand while welding.","An open can of chlorinated degreaser is next to the arc. Close it and take it out of the welding area.","The can is only a problem if it is full."],"why":"Arc UV and heat can turn chlorinated solvent vapour into phosgene, a highly toxic gas. Open flammable liquids are also a fire risk. Keep degreasing away from the welding area.","fixText":"Solvent can closed and removed from the welding area.","source":"ANSI Z49.1:2021 §5.5.4.1"},"CON-01":{"name":"Open edge without fall protection","label":"Open edge at the welding point","options":["Nothing. Just be careful near the edge.","The edge has no guardrail and there is no fall-arrest system. Fall protection must be in place before welding at height.","A warning sign on the edge is enough."],"why":"An electric shock or a flash from the arc can startle you and cause a fall. Edge protection such as a guardrail, or a fall-arrest system, must be in place before you start.","fixText":"Guardrail installed along the open edge.","source":"OSHA 29 CFR 1926.501(b)(1); ANSI Z49.1:2021 §11.4.9.8, E11.4.9.2"},"CON-02":{"name":"Sparks falling on people and materials below","label":"Area below the welding point","options":["Barricade the area below, move the timber and keep people out before welding.","Sparks cool down before they reach the ground.","Ask the worker below to wear a hard hat."],"why":"Sparks and slag fall to lower levels and can set fire to materials or burn people below. Clear and barricade the area underneath and cover any openings.","fixText":"Area below barricaded, timber moved away.","source":"ANSI Z49.1:2021 §6.1.4.2, E6.2.2; OSHA 29 CFR 1926.352(f)"},"CON-03":{"name":"Welding machine standing in water","label":"Welding machine","options":["It is fine. Welding machines are built for outdoor use.","Move it to a dry, raised place and protect it from rain without blocking its vents. If it got wet, have it dried and tested first.","Put sand on the puddle and carry on."],"why":"Water greatly increases the risk of electric shock. A machine that has been wet must be dried and tested before it is used.","fixText":"Machine moved onto a pallet under a rain cover.","source":"ANSI Z49.1:2021 §11.4.9.2, §11.5.2.2, §11.5.3; OSHA 29 CFR 1910.254(d)(9)(ii)"},"CON-04":{"name":"Work clamp on a gas pipe","label":"Work clamp","options":["Attach the work clamp to the work, close to the joint. Never use a gas pipe as the return.","It is fine. The pipe is steel and conducts well.","Wrap the clamp in tape first."],"why":"Welding current that flows through other parts can heat them. Pipelines carrying gas or flammable liquids must never carry the return current.","fixText":"Work clamp moved onto the work, next to the joint.","source":"OSHA 29 CFR 1926.351(c); OSHA 29 CFR 1910.254(c)(2)(iii)"},"CON-05":{"name":"No hot-work permit or fire watch","label":"Permit board","options":["A permit is only needed indoors.","Start now. The permit can be signed afterwards.","Get the hot-work permit and assign a fire watch with an extinguisher, who stays on after welding stops."],"why":"Many site fires start after the welder has left, from smouldering material. A fire watch checks hidden areas and stays for the time set in the permit.","fixText":"Permit issued and fire watch assigned.","source":"ANSI Z49.1:2021 §6.2.2, §6.2.4, §6.3; OSHA 29 CFR 1926.352(e)"},"CON-06":{"name":"Gas cylinder lifted with a sling","label":"Gas cylinder on the crane hook","options":["Lift cylinders only in a cylinder cradle or on a suitable pallet, never with a sling or a magnet.","Fine if the sling is pulled tight.","Fine if the cylinder is nearly empty."],"why":"Cylinders lifted with slings or magnets can slip out and fall, and a falling cylinder can kill. Remove the regulator and fit the valve cap before lifting.","fixText":"Cylinder lifted in a cradle and set down on the deck.","source":"OSHA 29 CFR 1926.350(a)(2), (a)(6)"},"SHP-01":{"name":"No attendant or entry permit","label":"Manhole and entry board","options":["Go in anyway. It is a short job.","Stop. A valid entry permit and a trained attendant outside, with an agreed signal and rescue plan, are needed before anyone enters.","Leave the cover half closed so nobody falls in."],"why":"In a tank or double bottom, gas or fume can make you unconscious without warning. Someone outside must be able to raise the alarm and start the planned rescue.","fixText":"Entry permit valid, attendant on duty at the manhole.","source":"ANSI Z49.1:2021 §7.4, §7.5; INSST BASEQUIM 007"},"SHP-02":{"name":"Air in the tank not tested","label":"Gas detector","options":["Test the air for oxygen, flammable and toxic gases before entry, at all levels, and keep testing during the work.","No test is needed if you cannot smell anything.","Testing at the manhole opening is enough."],"why":"Argon and CO2 are heavier than air and collect in the lowest areas, while oxygen from a leak raises the fire risk. Test the whole space, especially the bottom.","fixText":"Atmosphere tested and recorded.","source":"ANSI Z49.1:2021 §7.1.1, §7.1.2; UK HSE Asphyxiation hazards in welding"},"SHP-03":{"name":"Gas cylinder inside the tank","label":"Argon cylinder","options":["Fine if it is chained.","Fine. Argon is not flammable.","Cylinders and power sources stay outside the space. Only hoses and cables go in."],"why":"A leaking cylinder inside a tank can quickly create an atmosphere you cannot breathe.","fixText":"Cylinder taken out and chained in the rack on deck.","source":"ANSI Z49.1:2021 §7.2.1; OSHA 29 CFR 1910.252(b)(4)(iii)"},"SHP-04":{"name":"Ventilation does not reach the work","label":"Ventilation fan and duct","options":["It is fine at the manhole. The air will spread.","Extend the duct to the welding position so fume and gas are removed where they are produced.","Switch the fan off to reduce noise."],"why":"Fume and shielding gas build up quickly in small spaces and affect everyone inside. Ventilation or extraction must work at the welding position.","fixText":"Duct extended to the welding position.","source":"ANSI Z49.1:2021 §7.1, §7.1.3; OSHA 29 CFR 1910.252(c)(4)"},"SHP-05":{"name":"No fire watch on the other side","label":"Compartment on the other side","options":["Nothing is needed. Steel does not burn.","Wet the weld area instead.","Post a fire watch with an extinguisher on the other side of the bulkhead."],"why":"Heat travels through steel plating and can ignite cables or insulation in the next compartment, out of the welder's view.","fixText":"Fire watch with an extinguisher posted in the next compartment.","source":"ANSI Z49.1:2021 §6.2.2, §6.2.3; OSHA 29 CFR 1915.504"},"SHP-06":{"name":"Certificate for the wrong tank","label":"Hot-work certificate","options":["Stop. Get the space tested and a certificate for this tank (4P) before any hot work.","Fine. Tank 3P is next door.","Fine if the certificate was issued today."],"why":"Spaces that held fuel must be tested and certified before hot work, and a certificate only covers the space and time written on it.","fixText":"Certificate issued for tank 4P.","source":"OSHA 29 CFR 1915.14(a)"},"SHP-07":{"name":"Oxygen used to \\"freshen the air\\"","label":"Hose into the tank","options":["Shut it off now. Never use oxygen for ventilation.","Fine if it is done slowly.","Fine if an extinguisher is ready."],"why":"Extra oxygen makes clothing and other materials burn fiercely. Use proper forced ventilation, then leave and re-test the air.","fixText":"Oxygen hose removed.","source":"ANSI Z49.1:2021 §7.1.5; OSHA 29 CFR 1910.252(c)(4)(v); UK HSE Asphyxiation hazards in welding"},"UW-01":{"name":"Safety switch closed while the diver changes the electrode","label":"Knife switch","options":["Nothing. Leaving the switch closed saves time between electrodes.","The switch is closed during an electrode change. Open it until the diver calls \\"switch on\\".","The switch only matters when the machine is above full power."],"why":"With the safety switch open, the diver is fully isolated from the welding current. The tender closes it only when the diver calls for it and confirms every change by voice.","fixText":"Switch open. The tender stands at the switch with the comms headset on.","source":"US Navy S0300-BB-MAN-010 App. D §D-9; OSHA 1910.422(g)(1); IMCA D 045 §8.5.5"},"UW-02":{"name":"AC welding machine connected","label":"Welding machine","options":["The machine is set to AC. Underwater welding needs a DC power source.","Nothing. AC and DC are equally safe in water.","AC is fine if the diver wears thicker gloves."],"why":"An AC shock can lock the hand muscles, so the diver may not be able to let go. AC is much more dangerous underwater than DC.","fixText":"DC welding machine connected. The machine frame is earthed to the barge.","source":"US Navy S0300-BB-MAN-010 §D-4, §D-6; IMCA D 045 §8.5.5"},"UW-03":{"name":"Work clamp far from the weld, diver in the current path","label":"Work (ground) clamp","options":["Nothing. Any point on the structure is a good return.","The clamp should be on the barge so it stays dry.","The clamp is far away, with the diver between electrode and clamp. Fix it close to the weld."],"why":"If your body or equipment is between the electrode and the work clamp, you can become part of the welding circuit. Fix the clamp close to the work, in front of you, and face it.","fixText":"Clamp fixed on the pile close to the weld. The diver faces the clamp.","source":"US Navy S0300-BB-MAN-010 §D-7(e), §D-8(h); IMCA D 045 §8.5.5"},"UW-04":{"name":"Welding under a space where gas can be trapped","label":"Closed space above the weld","options":["Nothing. Gas bubbles always escape to the surface.","Gas from the arc is collecting in the closed space above. Vent or flood the space before welding.","Weld faster so less gas is produced."],"why":"The arc splits water into hydrogen and oxygen, which rise and collect in pockets above the work and can explode. Vent or flood any space where gas could be trapped, and stop if you hear a \\"pop\\".","fixText":"Vent hose fitted from the high point to above the waterline. No gas pocket left.","source":"US Navy S0300-BB-MAN-010 §D-3.1–D-3.2; OSHA 1910.422(g)(5); IMCA D 045 §8.5.5"},"UW-05":{"name":"Comms not tested and no standby diver ready","label":"Dive control station","options":["Comms can be tested once the diver reaches the work.","A standby diver is only needed for deep dives, so this is fine.","Comms are off and the standby diver is not dressed. Test comms and ready the standby diver."],"why":"The safety switch depends on clear voice commands between diver and tender. If the diver gets into trouble, a standby diver must be ready to go in at once.","fixText":"Comms on and tested. Standby diver dressed, helmet to hand.","source":"OSHA 1910.422(c), (g)(1)(i); HSE L104 paras 78, 83–85, 105–106"},"UW-06":{"name":"Electrode holder not insulated for underwater use","label":"Electrode holder","options":["This is a topside holder with bare metal and damaged insulation. Use a fully insulated underwater holder.","Nothing. Seawater cools the holder, so insulation is not needed.","Wrap the bare parts in a cloth and start welding."],"why":"Any bare metal on the holder or a damaged cable joint lets current leak into the water around your hand. Holders made for topside use are not suitable underwater.","fixText":"Fully insulated underwater holder fitted. Cable joint re-insulated, no bubbles.","source":"US Navy S0300-BB-MAN-010 §D-7(a)–(d), §D-8(c); OSHA 1910.422(g)(3); IMCA D 045 §8.5.5"}}`),Yc={title:"Dress for the job",intro:"Choose the right protection for MAG welding at this bay.",items:{"PPE-01":{q:"Which eye and face protection do you take?",options:["A helmet with a cracked cover lens. It still works.","A helmet with intact lenses and the filter shade suited to the process and current, with safety glasses underneath.","Safety glasses only. The arc is short."],why:"Arc radiation burns eyes and skin within seconds. The filter must suit the process and current, with no gaps that let light through. Safety glasses protect you from slag and grinding particles when the helmet is raised.",source:"ANSI Z49.1:2021 §4.2; ISO 16321-2 (scope)"},"PPE-02":{q:"Which clothing is correct?",options:["Polyester hoodie. It is warm.","Cotton t-shirt with rolled-up sleeves.","Flame-resistant welding jacket and trousers: collar and sleeves closed, no turn-ups, pockets empty."],why:"Sparks lodge in turn-ups, open pockets and rolled sleeves. Synthetic fabrics can melt onto the skin.",source:"ANSI Z49.1:2021 §4.3; EN ISO 11611 (scope)"},"PPE-03":{q:"Which gloves and footwear do you choose?",options:["Dry, undamaged welding gloves and safety boots, with the trousers over the boot tops.","Wet welding gloves. They keep your hands cool.","Torn gloves and trainers. It is a short job."],why:"Gloves protect against burns and are part of your insulation from electric shock, so wet or torn gloves increase the risk. Spatter can enter low or open shoes.",source:"ANSI Z49.1:2021 §4.3.2, §4.3.6, §11.4.9.3; EN 12477 (scope)"},"UPPE-01":{q:"Which diving helmet do you take for wet welding?",options:["A helmet with no welding lens. The water filters the arc light.","A helmet with a welding lens fitted and voice comms tested.","A helmet with the comms cable unplugged. You can use hand signals."],why:"The arc can injure your eyes underwater just as it does topside, so the helmet needs a welding lens suited to the water conditions. Voice comms are how you call the switch on and off.",source:"US Navy S0300-BB-MAN-010 §D-12.1(c); OSHA 1910.422(c); HSE L104 para 105"},"UPPE-02":{q:"Which hand and body protection is correct?",options:["Leather welding gloves only. They work topside.","Rubber gloves with a small tear. The suit covers the rest.","Heavy rubber gloves over thin rubber gloves, cuffs over the wrists, and a suit with no tears."],why:"Rubber gloves give the most protection where the voltage is highest, at your hands. Tears in gloves or suit reduce your insulation from the welding current.",source:"US Navy S0300-BB-MAN-010 §D-12.1(a)–(b); OSHA 1910.422(g)(4); IMCA D 045 §8.5.2"},"UPPE-03":{q:"What about your emergency breathing gas?",options:["Bail-out cylinder carried, charged and checked before the dive.","No bail-out needed. The surface supply has a backup.","Take the bail-out cylinder even if the gauge reads empty."],why:"If the surface gas supply fails, the bail-out cylinder gives you enough gas to reach safety. Check it before every dive.",source:"HSE L104 paras 43(b), 101; OSHA 1910.421(g)"}}},$c=JSON.parse('{"kicker":"Welding","cta":"Practise welding","unlockTitle":"Ready for the job","unlockText":"The workplace is safe. Now lay a bead with MIG/MAG, stick or TIG.","chooseTitle":"Choose the process","chooseBody":"Arc welding, gas welding and brazing, plasma cutting or resistance welding. Each one is a hands-on taster, not a technique assessment.","processes":{"GMAW":{"name":"GMAW · MIG/MAG","short":"wire-fed gun with shielding gas","desc":"A wire electrode is fed continuously through the gun while shielding gas protects the weld pool. Wire and gas start when you pull the trigger."},"SMAW":{"name":"SMAW · Stick (MMA)","short":"coated electrode that melts as you weld","desc":"A flux-coated electrode carries the current and melts into the joint. It gets shorter as you weld, so keep bringing your hand closer. The flux leaves slag on the bead, which you chip off afterwards."},"GTAW":{"name":"GTAW · TIG","short":"tungsten electrode, filler rod in the other hand","desc":"A non-consumable tungsten electrode makes the arc under shielding gas. Filler rod is added by hand into the front of the weld pool. Keep the tungsten out of the pool."},"OAW":{"name":"OAW · Oxy-acetylene welding","short":"oxygen and acetylene flame, filler rod by hand","desc":"A flame of oxygen and acetylene melts the edges of the joint. You add filler rod by hand into the front of the weld pool. There is no arc and no current: the heat comes from the flame alone."},"TB":{"name":"TB · Torch brazing","short":"flame heats the joint, filler flows in, base metal does not melt","desc":"In brazing the base metal does not melt. The flame heats the joint and a filler metal with a lower melting point flows into the gap between the parts. Here you braze a lap joint along the edge of the top sheet."},"PAC":{"name":"PAC · Plasma arc cutting","short":"constricted arc and gas jet cut through the metal","desc":"A narrow, very hot plasma arc melts the metal and the gas jet blows it out of the cut. Follow the soapstone line at an even speed. When the cut goes through, the sparks come out underneath the plate."},"RSW":{"name":"RSW · Resistance spot welding","short":"two electrodes clamp the sheets, current welds a spot","desc":"Two copper electrodes clamp the overlapping sheets. Current flows through the clamped point and melts a small nugget between the sheets. No filler and no arc. The gun runs its weld cycle: keep it still until the cycle ends."},"RSEW":{"name":"RSEW · Resistance seam welding","short":"rotating wheel electrodes make a continuous seam","desc":"Wheel-shaped electrodes roll along the overlapping sheets and weld a row of overlapping spots, giving a continuous, tight seam. In industry this is usually done on a machine; here you guide the wheels by hand."}},"howScreen":"Press and hold on the joint at the left mark, then move steadily to the right mark. Release to stop.","howVr":"Bring the tip close to the joint at the left mark and hold the trigger to strike the arc. Move steadily to the right mark. Release to stop.","helmet":"Your helmet is down. The auto-darkening filter darkens when the arc strikes.","joint":"Joint welded","finishPass":"Finish pass","change":"Change process","exit":"Exit welding","soundOn":"Sound on","soundOff":"Sound off","weldFirst":"Weld along the joint first.","electrodeUsed":"Electrode used up. A new one is fitted: carry on from where you stopped.","stuck":"The electrode stuck to the plate. Release the trigger and strike again, keeping a short gap.","tungsten":"The tungsten touched the plate. In real work you would stop and regrind it. Release the trigger and start again.","lost":"Arc lost: you moved too far from the plate. Release the trigger and strike again.","slagTitle":"Remove the slag","slagBody":"Stick welding leaves a layer of slag on the bead. Chip and brush it off before you inspect the weld. Keep your eye protection on: hot slag can fly.","chip":"Chip the slag","resultTitle":{"great":"Great pass","good":"Good start","keep":"Keep practising"},"fb":{"coverage":{"good":"Joint welded from mark to mark.","bad":"Part of the joint was not welded. Weld from the left mark to the right mark."},"line":{"good":"You stayed on the joint.","bad":"The bead wandered off the joint. Watch the front edge of the weld pool and follow the joint line."},"pace":{"good":"Good travel speed.","slow":"Too slow: the bead got wide and heaped up. Move a little faster.","fast":"Too fast: the bead is thin and narrow. Slow down so the metal can fuse."},"steady":{"good":"Smooth, steady movement.","bad":"Your speed kept changing. Try to move at an even pace."},"distance":{"good":"Good distance to the work.","far":"Often too far from the work: the arc becomes unstable and spatters.","close":"Often too close to the work. Keep a short, constant gap."}},"markGood":"OK","markTip":"TIP","note":"Practice feedback is indicative only and is not a technique assessment.","soldamatic":"To train real welding technique with measured feedback, use the Soldamatic augmented-reality welding simulator.","again":"Weld again","done":"Done","wetNote":"Wet welding uses waterproofed stick electrodes, and real underwater technique differs from welding in air. This practice shows the basic movement only.","startWelding":"Start welding","startJob":"The workplace is safe. Now do the job.","startJobReview":"Some items were missed. Check them in the full results later. Now do the job.","materials":{"MS":{"name":"Mild steel (MS)","note":"low-carbon steel, the most common material for welding practice."},"AL":{"name":"Aluminium (Al)","note":"light and conducts heat quickly. A tough oxide layer forms on the surface, so it is cleaned just before welding."},"SS":{"name":"Stainless steel (SS)","note":"keep it clean and use tools reserved for stainless to avoid contamination. The weld shows heat-tint colours."},"CI":{"name":"Cast iron (CI)","note":"brittle and prone to cracking. It is often preheated and cooled slowly."},"BRASS":{"name":"Brass","note":"a copper–zinc alloy. Heating it gives off zinc fume: use good fume extraction."},"CU":{"name":"Copper (Cu)","note":"conducts heat very quickly, so the heat spreads away from the joint fast."}},"materialTitle":"Choose the material","materialBody":"In real work, the welding procedure (WPS) states which process, consumables and settings suit each material. In this practice the material changes how the plate looks and how quickly it heats up, not real settings.","material":"Material","current":"current","changeMaterial":"Change material","progress":{"weld":"Joint done","cut":"Cut done","spot":"Spots done"},"how":{"arc":"Press and hold on the joint at the left mark, then move steadily to the right mark. Release to stop.","arcVr":"Bring the tip close to the joint at the left mark and hold the trigger to strike the arc. Move steadily to the right mark. Release to stop.","flame":"Press and hold on the joint at the left mark. Keep the flame there until the metal glows and melts, then move steadily to the right mark. Release to lift the torch.","flameVr":"Hold the inner cone of the flame just above the joint at the left mark and hold the trigger. When the metal glows and melts, move steadily to the right mark.","TB":"Press and hold on the edge of the top sheet at the left mark. Heat until the filler flows into the joint, then move steadily to the right mark.","TBVr":"Hold the flame just above the edge of the top sheet at the left mark and hold the trigger. When the filler flows, move steadily to the right mark.","cut":"Press and hold on the cut line at the left mark, then move steadily along the line to the right mark. Release to stop.","cutVr":"Bring the torch close to the cut line at the left mark and hold the trigger. Move steadily along the line to the right mark.","spot":"Press and hold on a cross until the weld cycle ends, then release and go to the next cross. Weld all six.","spotVr":"Put the electrode on a cross and hold the trigger until the weld cycle ends. Release and go to the next cross.","seam":"Press and hold at the left mark and roll the wheels steadily along the line to the right mark.","seamVr":"Put the wheels on the line at the left mark, hold the trigger and roll steadily to the right mark."},"eyes":{"arc":"Your helmet is down. The auto-darkening filter darkens when the arc strikes.","cut":"Your helmet is down. Plasma cutting makes a bright arc: the filter darkens when the arc starts.","flame":"You wear gas welding goggles with a filter lens. They do not darken automatically, so the view stays tinted while you work.","spot":"There is no arc, but hot metal can spray out of the joint. You wear safety glasses or a face shield, and gloves.","seam":"There is no arc, but hot metal can spray out of the joint. You wear safety glasses or a face shield, and gloves."},"walking":"Going to the job…","skip":"Skip","cutFirst":"Cut along the line first.","lostFlame":"The flame moved too far from the work. Release the trigger and bring it back.","lostContact":"The wheels lost contact with the sheets. Release the trigger and start again.","spotShort":"Released before the weld cycle ended: that spot is weak.","fbKind":{"flame":{"coverage":{"good":"Joint fused from mark to mark.","bad":"Part of the joint did not melt. Keep the flame on the joint until the pool forms, then move on."},"pace":{"good":"Good travel speed.","slow":"Too slow: too much heat went in and the bead got wide.","fast":"Too fast: the metal did not melt everywhere. Slow down."},"distance":{"good":"Good flame distance.","far":"The flame was often too far from the work, so the joint heated slowly.","close":"The flame was often too close to the work. Keep the inner cone just above the pool."}},"TB":{"coverage":{"good":"Filler flowed along the whole joint.","bad":"The filler did not flow along the whole joint. Heat the joint until the filler flows, then move on."},"line":{"good":"You stayed on the joint.","bad":"The filler wandered off the joint. Keep it on the edge of the top sheet."},"pace":{"good":"Good travel speed.","slow":"Too slow: the joint got hotter than needed. Move on as soon as the filler flows.","fast":"Too fast: the joint was not hot enough for the filler to flow everywhere."}},"cut":{"coverage":{"good":"Cut through from mark to mark.","bad":"Part of the line was not cut through."},"line":{"good":"You followed the cut line.","bad":"The cut wandered off the line. Watch the line just in front of the torch."},"pace":{"good":"Good cutting speed: the sparks came out underneath.","slow":"Too slow: the cut got wide and dross can build up underneath.","fast":"Too fast: the arc did not cut through and the sparks sprayed back up."},"distance":{"good":"Good torch height.","far":"The torch was often too high: the cut gets wider and less clean.","close":"The torch was often too close. Keep an even, short distance."}},"seam":{"coverage":{"good":"Seam welded from mark to mark.","bad":"Part of the seam was not welded."},"line":{"good":"The wheels stayed on the line.","bad":"The seam wandered off the line. Keep the wheels on the middle of the overlap."},"pace":{"good":"Good, even speed.","slow":"Too slow: too much heat went into the sheets.","fast":"Too fast: the spots may not overlap into a tight seam."}},"spot":{"count":{"good":"All six spots welded.","bad":"Some crosses have no spot. Weld one spot on each cross."},"place":{"good":"Spots on the crosses.","bad":"Some spots are off the crosses. Line the electrode up with the cross before you start."},"hold":{"good":"You held the gun until each weld cycle ended.","bad":"You released too early on some spots, so the weld did not finish. Keep the trigger pressed until the cycle ends."},"still":{"good":"You kept the gun still.","bad":"The gun moved during the weld and metal sprayed out. Keep it still until the cycle ends."}}}}'),Zc={factory:[{q:"Combustible materials near the work cannot be moved. What should you do?",options:["Weld quickly to reduce the risk.","Protect them with fire-resistant covers or guards. If they cannot be protected, do not weld.","Spray them with water and start."],why:"If combustibles cannot be moved or protected, the work must not start.",source:"ANSI Z49.1:2021 §6.1.4"},{q:"Why must you never cool a hot electrode holder by dipping it in water?",options:["It damages the electrode.","It makes the fume worse.","It can expose you to electric shock."],why:"Water greatly increases the risk of electric shock.",source:"OSHA 1926.351(d)(2); ANSI Z49.1:2021 §11.4.9.5"},{q:"According to UK HSE, is general room ventilation enough to control mild steel welding fume indoors?",options:["No. Engineering controls such as LEV are expected, with respiratory protection if exposure remains.","Yes, if the doors are open.","Only for TIG welding."],why:"HSE treats all welding fume, including mild steel fume, as a carcinogen and expects fume to be controlled at the source.",source:"HSE Safety Alert STSU1-2019"},{q:"Why must chlorinated degreasing be kept away from the welding arc?",options:["It makes the weld look dull.","Arc UV and heat can turn its vapour into phosgene, a highly toxic gas.","It is only a problem in winter."],why:"Phosgene can form from chlorinated hydrocarbon vapours exposed to the arc.",source:"ANSI Z49.1:2021 §5.5.4.1"},{q:"Why must a gas cylinder never become part of the welding circuit?",options:["An arc struck on a cylinder can weaken it.","It wastes shielding gas.","It changes the gas mixture."],why:"Arc strikes damage the cylinder wall and can lead to failure. Keep the work clamp and electrode away from cylinders.",source:"ANSI Z49.1:2021 §10.8.4.12–14"}],construction:[{q:"Why is an electric shock more dangerous when you weld at height?",options:["It is not. Height makes no difference.","The shock, or just the surprise, can make you fall. Fall protection must be in place first.","Because the cables are longer."],why:"Even a mild shock can cause a fall from height.",source:"ANSI Z49.1:2021 §11.4.9.8, E11.4.9.2"},{q:"It is raining and the steel is wet. What lowers your risk of electric shock?",options:["Dry gloves and boots, an insulating mat, and a machine protected from the rain.","Welding faster.","Wet gloves for a better grip."],why:"Water and sweat make electric shock more likely. Keep yourself insulated from the wet work.",source:"ANSI Z49.1:2021 §11.4.9.2, §11.4.9.3"},{q:"Where must the work (return) clamp be attached?",options:["On a nearby gas pipe.","On the crane hook.","On the work, close to the joint."],why:"Current must not flow through pipelines, chains, ropes, cranes or hoists.",source:"OSHA 29 CFR 1926.351(c); OSHA 29 CFR 1910.254(c)(2)(iii)"},{q:"What does the fire watch do after welding stops?",options:["Leaves together with the welder.","Stays for the time set in the permit and checks for smouldering fires, also below and behind.","Switches off the welding machine."],why:"Many fires start after the work has finished, from material that smoulders unseen.",source:"ANSI Z49.1:2021 §6.2.4; OSHA 29 CFR 1926.352(e)"},{q:"How should a gas cylinder be lifted to an upper level?",options:["With a choker sling.","With a lifting magnet.","In a cylinder cradle or on a suitable pallet."],why:"Slings and magnets can let the cylinder slip and fall.",source:"OSHA 29 CFR 1926.350(a)(6)"}],shipyard:[{q:"Where do gas cylinders and welding power sources go when you weld inside a double bottom?",options:["Next to the welder for easy adjustment.","Outside the confined space.","At the bottom of the space, chained."],why:"A leak inside the space can create an atmosphere you cannot breathe.",source:"ANSI Z49.1:2021 §7.2.1; OSHA 29 CFR 1910.252(b)(4)(iii)"},{q:"Why is argon especially dangerous in tanks and double bottoms?",options:["It is flammable.","It is heavier than air, collects in low areas and pushes out the oxygen.","It is toxic in small amounts."],why:"You cannot see or smell it, and it collects at the bottom of the space.",source:"UK HSE Asphyxiation hazards in welding; ANSI Z49.1:2021 E7.1.2"},{q:'A co-worker wants to blow oxygen into a tank to "freshen the air". What is correct?',options:["Good idea if done slowly.","Fine if a fire extinguisher is present.","Never. Oxygen enrichment greatly increases the fire risk."],why:"In air with extra oxygen, clothing and other materials catch fire easily and burn fiercely.",source:"ANSI Z49.1:2021 §7.1.5; OSHA 29 CFR 1910.252(c)(4)(v)"},{q:"You weld on a bulkhead. What extra precaution may be needed?",options:["A fire watch on the other side, because heat can ignite materials in the next compartment.","Nothing. Steel does not burn.","A darker filter shade."],why:"Heat conducts through the plate to areas the welder cannot see.",source:"ANSI Z49.1:2021 §6.2.2; OSHA 29 CFR 1915.504"},{q:"What does the attendant outside a confined space do?",options:["Goes in to help at the first sign of trouble, without a plan.","Stays outside, keeps contact with the people inside and raises the alarm to start the planned rescue.","Leaves once the welder is inside."],why:"Unplanned rescues often add more victims. The attendant raises the alarm and starts the planned rescue.",source:"ANSI Z49.1:2021 §7.4, §7.5"}],underwater:[{q:"Why is AC power never used for underwater welding?",options:["It gives poorer weld quality.","It uses more power from the generator.","An AC shock can lock your hand muscles so you cannot let go."],why:"AC shock stops you from relaxing the muscles that control your hand. This is why only DC is used underwater.",source:"US Navy S0300-BB-MAN-010 §D-4"},{q:'While welding, you hear a "pop" near the work. What do you do?',options:["Stop welding and investigate. Gas is collecting above the work.","Keep welding. Pops are normal underwater.","Weld faster to finish before more gas forms."],why:"A pop means explosive gas is collecting above the work area. Stop and find the cause before you continue.",source:"US Navy S0300-BB-MAN-010 §D-3.2"},{q:"Your electrode is nearly used up. What is the correct sequence?",options:["Change it quickly while the current is still on.",'Call "switch off", wait for the tender to confirm, then change the electrode.',"Ask the tender to lower the current, then change it."],why:"Never change an electrode with the current on. Wait until the tender confirms the switch is off.",source:"US Navy S0300-BB-MAN-010 §3-12.3, §D-5(f); IMCA D 045 §8.5.5"},{q:"Where is a diver at greatest risk of severe electric shock when welding?",options:["At the seabed.","Inside a dry habitat.","In the splash zone, only partly in the water."],why:"When you are only partly in the water, current can pass through your body more easily. The splash zone is the most hazardous place to weld.",source:"US Navy S0300-BB-MAN-010 App. D (warning, §D-3)"},{q:"Voice comms are lost during welding and cannot be quickly restored. What happens?",options:["The tender keeps the switch closed so the diver can finish.","The switch stays open, welding stops and the working dive is ended.","The diver carries on using hand signals to the camera."],why:"The switch may only be operated on the diver's voice command. Without comms the working dive must end.",source:"OSHA 1910.422(g)(1), (i); US Navy S0300-BB-MAN-010 §E-6"}]},jc={title:"Change worksite?",body:"Your progress in this worksite will be lost. Finished results are kept in My results.",stay:"Stay here",change:"Change worksite"},Kc={title:"My results",note:"Saved only in this browser on this device. Clearing the browser data removes them.",empty:"No results yet. Complete a safety check to see it here.",date:"Date",worksite:"Worksite",activity:"Activity",result:"Result",check:"Safety check",weld:"Weld practice",ready:"Ready to weld",notReady:"Not ready",clear:"Clear history",clearConfirm:"Delete all saved results on this device?",back:"Back"},Jc={title:"Start welding now?",body:"Your safety check is not finished. You can do the job now and come back to the check afterwards: what you have found so far is kept.",stay:"Keep checking",back:"Back at the worksite. Carry on with the safety check."},za={app:Fc,env:zc,brief:Bc,hud:Hc,panel:Vc,finishConfirm:Gc,quizIntro:Wc,results:Xc,hazards:qc,ppe:Yc,practice:$c,quizzes:Zc,changeConfirm:jc,records:Kc,weldNow:Jc},nd=Object.freeze(Object.defineProperty({__proto__:null,app:Fc,brief:Bc,changeConfirm:jc,default:za,env:zc,finishConfirm:Gc,hazards:qc,hud:Hc,panel:Vc,ppe:Yc,practice:$c,quizIntro:Wc,quizzes:Zc,records:Kc,results:Xc,weldNow:Jc},Symbol.toStringTag,{value:"Module"})),fl=Object.assign({"./locales/en.json":()=>ed(()=>Promise.resolve().then(()=>nd),void 0,import.meta.url).then(i=>i.default)});let Qc=za,$s="en";async function id(){const t=[new URLSearchParams(location.search).get("lang"),...navigator.languages||[navigator.language]].filter(Boolean).map(e=>e.toLowerCase());for(const e of t){const n=[e,e.split("-")[0]].find(s=>fl[`./locales/${s}.json`]);if(n){$s=n;break}}$s!=="en"&&(Qc=await fl[`./locales/${$s}.json`]()),document.documentElement.lang=$s}const pl=(i,t)=>t.split(".").reduce((e,n)=>e==null?void 0:e[n],i);function I(i,t){let e=pl(Qc,i);return e===void 0&&(e=pl(za,i)),e===void 0?i:(typeof e=="string"&&t&&(e=e.replace(/\{(\w+)\}/g,(n,s)=>t[s]??n)),e)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="170",sd=0,ml=1,rd=2,th=1,eh=2,Hn=3,hi=0,tn=1,Qe=2,li=0,ts=1,os=2,gl=3,vl=4,od=5,yi=100,ad=101,ld=102,cd=103,hd=104,dd=200,ud=201,fd=202,pd=203,Xo=204,qo=205,md=206,gd=207,vd=208,xd=209,_d=210,yd=211,wd=212,Md=213,Sd=214,Yo=0,$o=1,Zo=2,as=3,jo=4,Ko=5,Jo=6,Qo=7,nh=0,bd=1,Ed=2,ci=0,Td=1,Ad=2,Cd=3,ih=4,Rd=5,Pd=6,Ld=7,sh=300,ls=301,cs=302,ta=303,ea=304,qr=306,Fr=1e3,Mi=1001,na=1002,mn=1003,Dd=1004,Zs=1005,Ln=1006,oo=1007,Si=1008,jn=1009,rh=1010,oh=1011,Vs=1012,Ha=1013,bi=1014,Dn=1015,Ys=1016,Va=1017,Ga=1018,hs=1020,ah=35902,lh=1021,ch=1022,Cn=1023,hh=1024,dh=1025,es=1026,ds=1027,Wa=1028,Xa=1029,uh=1030,qa=1031,Ya=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,da=37809,ua=37810,fa=37811,pa=37812,ma=37813,ga=37814,va=37815,xa=37816,_a=37817,ya=37818,wa=37819,Ma=37820,Sa=37821,Nr=36492,ba=36494,Ea=36495,fh=36283,Ta=36284,Aa=36285,Ca=36286,Id=3200,Ud=3201,ph=0,Nd=1,ai="",Je="srgb",ps="srgb-linear",Yr="linear",Ie="srgb",Pi=7680,xl=519,kd=512,Od=513,Fd=514,mh=515,zd=516,Bd=517,Hd=518,Vd=519,Ra=35044,_l="300 es",Wn=2e3,zr=2001;class ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const Us=Math.PI/180,us=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function $a(i,t){return(i%t+t)%t}function Gd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ns(i,t,e){return(1-e)*i+e*t}function Xd(i,t,e,n){return Ns(i,t,1-Math.exp(-e*n))}function qd(i,t=1){return t-Math.abs($a(i,t*2)-t)}function Yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jd(i,t){return i+Math.random()*(t-i)}function Kd(i){return i*(.5-Math.random())}function Jd(i){i!==void 0&&(yl=i);let t=yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qd(i){return i*Us}function tu(i){return i*us}function eu(i){return(i&i-1)===0&&i!==0}function nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function iu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function su(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vn={DEG2RAD:Us,RAD2DEG:us,generateUUID:In,clamp:je,euclideanModulo:$a,mapLinear:Gd,inverseLerp:Wd,lerp:Ns,damp:Xd,pingpong:qd,smoothstep:Yd,smootherstep:$d,randInt:Zd,randFloat:jd,randFloatSpread:Kd,seededRandom:Jd,degToRad:Qd,radToDeg:tu,isPowerOfTwo:eu,ceilPowerOfTwo:nu,floorPowerOfTwo:iu,setQuaternionFromProperEuler:su,normalize:Le,denormalize:An};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,o,a,l,c){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],b=s[1],_=s[4],v=s[7],U=s[2],A=s[5],R=s[8];return r[0]=o*x+a*b+l*U,r[3]=o*g+a*_+l*A,r[6]=o*p+a*v+l*R,r[1]=c*x+h*b+d*U,r[4]=c*g+h*_+d*A,r[7]=c*p+h*v+d*R,r[2]=u*x+f*b+m*U,r[5]=u*g+f*_+m*A,r[8]=u*p+f*v+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new he;function gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=Gs("canvas");return i.style.display="block",i}const wl={};function Ds(i){i in wl||(wl[i]=!0,console.warn(i))}function ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function au(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Te={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ie&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ie&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?Yr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ml=[.64,.33,.3,.6,.15,.06],Sl=[.2126,.7152,.0722],bl=[.3127,.329],El=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[ps]:{primaries:Ml,whitePoint:bl,transfer:Yr,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:Sl,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Ml,whitePoint:bl,transfer:Ie,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:Sl,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let Li;class cu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Gs("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hu=0;class vh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lo(s[o].image)):r.push(lo(s[o]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;class en extends ms{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Mi,s=Mi,r=Ln,o=Si,a=Cn,l=jn,c=en.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=In(),this.name="",this.source=new vh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=sh;en.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(f+1)/2,U=(p+1)/2,A=(h+u)/4,R=(d+x)/4,C=(m+g)/4;return _>v&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=C/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uu extends ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends uu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fu extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==m){let g=1-a;const p=l*u+c*f+h*m+d*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const U=Math.sqrt(_),A=Math.atan2(U,p*b);g=Math.sin(g*A)/U,a=Math.sin(a*A)/U}const v=a*b;if(l=l*g+u*v,c=c*g+f*v,h=h*g+m*v,d=d*g+x*v,g===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return co.copy(this).projectOnVector(t),this.sub(co)}reflect(t){return this.sub(co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new S,Al=new Kn;class Ai{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Ks.subVectors(this.max,_s),Di.subVectors(t.a,_s),Ii.subVectors(t.b,_s),Ui.subVectors(t.c,_s),ti.subVectors(Ii,Di),ei.subVectors(Ui,Ii),fi.subVectors(Di,Ui);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-fi.z,fi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,fi.z,0,-fi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-fi.y,fi.x,0];return!ho(e,Di,Ii,Ui,Ks)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,Di,Ii,Ui,Ks))?!1:(Js.crossVectors(ti,ei),e=[Js.x,Js.y,Js.z],ho(e,Di,Ii,Ui,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new S,new S,new S,new S,new S,new S,new S,new S],Mn=new S,js=new Ai,Di=new S,Ii=new S,Ui=new S,ti=new S,ei=new S,fi=new S,_s=new S,Ks=new S,Js=new S,pi=new S;function ho(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pu=new Ai,ys=new S,uo=new S;class Ci{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(uo)),this.expandByPoint(ys.copy(t.center).sub(uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new S,fo=new S,Qs=new S,ni=new S,po=new S,tr=new S,mo=new S;class $r{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fo.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(fo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qs),a=ni.dot(this.direction),l=-ni.dot(Qs),c=ni.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fo).addScaledVector(Qs,u),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){po.subVectors(e,t),tr.subVectors(n,t),mo.crossVectors(po,tr);let o=this.direction.dot(mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const l=a*this.direction.dot(tr.crossVectors(ni,tr));if(l<0)return null;const c=a*this.direction.dot(po.cross(ni));if(c<0||l+c>o)return null;const h=-a*ni.dot(mo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,x,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,gu)}lookAt(t,e,n){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ii.crossVectors(n,fn),ii.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ii.crossVectors(n,fn)),ii.normalize(),er.crossVectors(fn,ii),s[0]=ii.x,s[4]=er.x,s[8]=fn.x,s[1]=ii.y,s[5]=er.y,s[9]=fn.y,s[2]=ii.z,s[6]=er.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],_=n[7],v=n[11],U=n[15],A=s[0],R=s[4],C=s[8],y=s[12],w=s[1],L=s[5],B=s[9],F=s[13],X=s[2],nt=s[6],W=s[10],at=s[14],G=s[3],mt=s[7],bt=s[11],Et=s[15];return r[0]=o*A+a*w+l*X+c*G,r[4]=o*R+a*L+l*nt+c*mt,r[8]=o*C+a*B+l*W+c*bt,r[12]=o*y+a*F+l*at+c*Et,r[1]=h*A+d*w+u*X+f*G,r[5]=h*R+d*L+u*nt+f*mt,r[9]=h*C+d*B+u*W+f*bt,r[13]=h*y+d*F+u*at+f*Et,r[2]=m*A+x*w+g*X+p*G,r[6]=m*R+x*L+g*nt+p*mt,r[10]=m*C+x*B+g*W+p*bt,r[14]=m*y+x*F+g*at+p*Et,r[3]=b*A+_*w+v*X+U*G,r[7]=b*R+_*L+v*nt+U*mt,r[11]=b*C+_*B+v*W+U*bt,r[15]=b*y+_*F+v*at+U*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+x*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+g*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],b=d*g*c-x*u*c+x*l*f-a*g*f-d*l*p+a*u*p,_=m*u*c-h*g*c-m*l*f+o*g*f+h*l*p-o*u*p,v=h*x*c-m*d*c+m*a*f-o*x*f-h*a*p+o*d*p,U=m*d*l-h*x*l-m*a*u+o*x*u+h*a*g-o*d*g,A=e*b+n*_+s*v+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=b*R,t[1]=(x*u*r-d*g*r-x*s*f+n*g*f+d*s*p-n*u*p)*R,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*R,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*R,t[4]=_*R,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*R,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*R,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*R,t[8]=v*R,t[9]=(m*d*r-h*x*r-m*n*f+e*x*f+h*n*p-e*d*p)*R,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*R,t[12]=U*R,t[13]=(h*x*s-m*d*s+m*n*u-e*x*u-h*n*g+e*d*g)*R,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*R,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,b=l*c,_=l*h,v=l*d,U=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*U,s[1]=(f+v)*U,s[2]=(m-_)*U,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(u+p))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(m+_)*R,s[9]=(g-b)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const c=1/r,h=1/o,d=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,m;if(a===Wn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===zr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,f=(n+s)*h;let m,x;if(a===Wn)m=(o+r)*d,x=-2*d;else if(a===zr)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new S,Sn=new Ce,mu=new S(0,0,0),gu=new S(1,1,1),ii=new S,er=new S,fn=new S,Cl=new Ce,Rl=new Kn;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const Pl=new S,ki=new Kn,Fn=new Ce,nr=new S,ws=new S,xu=new S,_u=new Kn,Ll=new S(1,0,0),Dl=new S(0,1,0),Il=new S(0,0,1),Ul={type:"added"},yu={type:"removed"},Oi={type:"childadded",child:null},go={type:"childremoved",child:null};class Ge extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new S,e=new yn,n=new Kn,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new he}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ws,nr,this.up):Fn.lookAt(nr,ws,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Fn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,_u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new S(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new S,zn=new S,vo=new S,Bn=new S,Fi=new S,zi=new S,Nl=new S,xo=new S,_o=new S,yo=new S,wo=new Ue,Mo=new Ue,So=new Ue;class _n{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),zn.subVectors(n,e),vo.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(zn),l=bn.dot(vo),c=zn.dot(zn),h=zn.dot(vo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return wo.setScalar(0),Mo.setScalar(0),So.setScalar(0),wo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,n),So.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wo,r.x),o.addScaledVector(Mo,r.y),o.addScaledVector(So,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),zn.subVectors(t,e),bn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),bn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Fi.subVectors(s,n),zi.subVectors(r,n),xo.subVectors(t,n);const l=Fi.dot(xo),c=zi.dot(xo);if(l<=0&&c<=0)return e.copy(n);_o.subVectors(t,s);const h=Fi.dot(_o),d=zi.dot(_o);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fi,o);yo.subVectors(t,r);const f=Fi.dot(yo),m=zi.dot(yo);if(m>=0&&f<=m)return e.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(zi,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Nl.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Nl,a);const p=1/(g+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Fi,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ir={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=$a(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bo(o,r,t+1/3),this.g=bo(o,r,t),this.b=bo(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Te.fromWorkingColorSpace(sn.copy(this),t),Math.round(je(sn.r*255,0,255))*65536+Math.round(je(sn.g*255,0,255))*256+Math.round(je(sn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Je){Te.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,s=sn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(ir);const n=Ns(si.h,ir.h,e),s=Ns(si.s,ir.s,e),r=Ns(si.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new le;le.NAMES=_h;let wu=0;class ui extends ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=In(),this.name="",this.blending=ts,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new S,sr=new xt;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}}class yh extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wh extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mu=0;const xn=new Ce,Eo=new Ge,Bi=new S,pn=new Ai,Ms=new Ai,Ze=new S;class We extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?wh:yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(pn.min,Ms.min),pn.expandByPoint(Ze),Ze.addVectors(pn.max,Ms.max),pn.expandByPoint(Ze)):(pn.expandByPoint(Ms.min),pn.expandByPoint(Ms.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),Ze.add(Bi)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new S,l[C]=new S;const c=new S,h=new S,d=new S,u=new xt,f=new xt,m=new xt,x=new S,g=new S;function p(C,y,w){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,w),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,w),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[C].add(x),a[y].add(x),a[w].add(x),l[C].add(g),l[y].add(g),l[w].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,y=b.length;C<y;++C){const w=b[C],L=w.start,B=w.count;for(let F=L,X=L+B;F<X;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new S,v=new S,U=new S,A=new S;function R(C){U.fromBufferAttribute(s,C),A.copy(U);const y=a[C];_.copy(y),_.sub(U.multiplyScalar(U.dot(y))).normalize(),v.crossVectors(A,y);const L=v.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,L)}for(let C=0,y=b.length;C<y;++C){const w=b[C],L=w.start,B=w.count;for(let F=L,X=L+B;F<X;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,d=new S;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new hn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new Ce,mi=new $r,rr=new Ci,Ol=new S,or=new S,ar=new S,lr=new S,To=new S,cr=new S,Fl=new S,hr=new S;class Y extends Ge{constructor(t=new We,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(To.fromBufferAttribute(d,t),o?cr.addScaledVector(To,h):cr.addScaledVector(To.sub(e),h))}e.add(cr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(rr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(rr,Ol)===null||mi.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(kl.copy(r).invert(),mi.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,U=_;v<U;v+=3){const A=a.getX(v),R=a.getX(v+1),C=a.getX(v+2);s=dr(this,p,t,n,c,h,d,A,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const b=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=dr(this,o,t,n,c,h,d,b,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,U=_;v<U;v+=3){const A=v,R=v+1,C=v+2;s=dr(this,p,t,n,c,h,d,A,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const b=g,_=g+1,v=g+2;s=dr(this,o,t,n,c,h,d,b,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Su(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===hi,a),l===null)return null;hr.copy(a),hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function dr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,or),i.getVertexPosition(l,ar),i.getVertexPosition(c,lr);const h=Su(i,t,e,n,or,ar,lr,Fl);if(h){const d=new S;_n.getBarycoord(Fl,or,ar,lr,d),s&&(h.uv=_n.getInterpolatedAttribute(s,a,l,c,d,new xt)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,l,c,d,new xt)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,l,c,d,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new S,materialIndex:0};_n.getNormal(or,ar,lr,u.normal),h.face=u,h.barycoord=d}return h}class De extends We{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function m(x,g,p,b,_,v,U,A,R,C,y){const w=v/R,L=U/C,B=v/2,F=U/2,X=A/2,nt=R+1,W=C+1;let at=0,G=0;const mt=new S;for(let bt=0;bt<W;bt++){const Et=bt*L-F;for(let Bt=0;Bt<nt;Bt++){const ie=Bt*w-B;mt[x]=ie*b,mt[g]=Et*_,mt[p]=X,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[g]=0,mt[p]=A>0?1:-1,h.push(mt.x,mt.y,mt.z),d.push(Bt/R),d.push(1-bt/C),at+=1}}for(let bt=0;bt<C;bt++)for(let Et=0;Et<R;Et++){const Bt=u+Et+nt*bt,ie=u+Et+nt*(bt+1),Q=u+(Et+1)+nt*(bt+1),ft=u+(Et+1)+nt*bt;l.push(Bt,ie,ft),l.push(ie,Q,ft),G+=6}a.addGroup(f,G,y),f+=G,u+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=fs(i[e]);for(const s in n)t[s]=n[s]}return t}function bu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Eu={clone:fs,merge:an};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new S,zl=new xt,Bl=new xt;class ln extends Sh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,zl,Bl),e.subVectors(Bl,zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class Cu extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const r=new ln(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const o=new ln(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const a=new ln(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const l=new ln(Hi,Vi,t,e);l.layers=this.layers,this.add(l);const c=new ln(Hi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bh extends en{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ru extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new De(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:li});r.uniforms.tEquirect.value=e;const o=new Y(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Ln),new Cu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ao=new S,Pu=new S,Lu=new he;class oi{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ao.subVectors(n,e).cross(Pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lu.getNormalMatrix(t),s=this.coplanarPoint(Ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Ci,ur=new S;class ja{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],b=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,g-f,v-p).normalize(),n[1].setComponents(l+r,u+c,g+f,v+p).normalize(),n[2].setComponents(l+o,u+h,g+m,v+b).normalize(),n[3].setComponents(l-o,u-h,g-m,v-b).normalize(),n[4].setComponents(l-a,u-d,g-x,v-_).normalize(),e===Wn)n[5].setComponents(l+a,u+d,g+x,v+_).normalize();else if(e===zr)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Du(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class se extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const b=p*u-o;for(let _=0;_<c;_++){const v=_*d-r;m.push(v,-b,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const _=b+c*p,v=b+c*(p+1),U=b+1+c*(p+1),A=b+1+c*p;f.push(_,v,A),f.push(v,U,A)}this.setIndex(f),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.widthSegments,t.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
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
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,If=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Vp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Zp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,t0=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,n0=`#define PHONG
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
}`,i0=`#define STANDARD
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
}`,s0=`#define STANDARD
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
}`,r0=`#define TOON
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
}`,o0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 color;
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
}`,d0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Iu,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:ku,alphatest_fragment:Ou,alphatest_pars_fragment:Fu,aomap_fragment:zu,aomap_pars_fragment:Bu,batching_pars_vertex:Hu,batching_vertex:Vu,begin_vertex:Gu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Ku,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:hf,colorspace_pars_fragment:df,envmap_fragment:uf,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Tf,envmap_vertex:gf,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:_f,fog_pars_fragment:yf,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Mf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:bf,lights_pars_begin:Ef,lights_toon_fragment:Af,lights_toon_pars_fragment:Cf,lights_phong_fragment:Rf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Df,lights_fragment_begin:If,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:zf,map_fragment:Bf,map_pars_fragment:Hf,map_particle_fragment:Vf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:$f,morphtarget_pars_vertex:Zf,morphtarget_vertex:jf,normal_fragment_begin:Kf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:hp,dithering_fragment:dp,dithering_pars_fragment:up,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:vp,shadowmask_pars_fragment:xp,skinbase_vertex:_p,skinning_pars_vertex:yp,skinning_vertex:wp,skinnormal_vertex:Mp,specularmap_fragment:Sp,specularmap_pars_fragment:bp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:Cp,uv_pars_fragment:Rp,uv_pars_vertex:Pp,uv_vertex:Lp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:kp,cube_vert:Op,cube_frag:Fp,depth_vert:zp,depth_frag:Bp,distanceRGBA_vert:Hp,distanceRGBA_frag:Vp,equirect_vert:Gp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Zp,meshlambert_frag:jp,meshmatcap_vert:Kp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:t0,meshphong_vert:e0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:s0,meshtoon_vert:r0,meshtoon_frag:o0,points_vert:a0,points_frag:l0,shadow_vert:c0,shadow_frag:h0,sprite_vert:d0,sprite_frag:u0},Ot={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Pn={basic:{uniforms:an([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:an([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:an([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:an([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:an([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:an([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:an([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:an([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:an([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:an([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:an([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:an([Ot.common,Ot.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:an([Ot.lights,Ot.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Pn.physical={uniforms:an([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const fr={r:0,b:0,g:0},vi=new yn,f0=new Ce;function p0(i,t,e,n,s,r,o){const a=new le(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1;const v=m(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,_){const v=m(_);v&&(v.isCubeTexture||v.mapping===qr)?(h===void 0&&(h=new Y(new De(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:fs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(_.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(vi)),h.material.toneMapped=Te.getTransfer(v.colorSpace)!==Ie,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Y(new se(2,2),new di({name:"BackgroundMaterial",uniforms:fs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Te.getTransfer(v.colorSpace)!==Ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,_){b.getRGB(fr,Mh(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:g}}function m0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(w,L,B,F,X){let nt=!1;const W=d(F,B,L);r!==W&&(r=W,c(r.object)),nt=f(w,F,B,X),nt&&m(w,F,B,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,v(w,L,B,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function d(w,L,B){const F=B.wireframe===!0;let X=n[w.id];X===void 0&&(X={},n[w.id]=X);let nt=X[L.id];nt===void 0&&(nt={},X[L.id]=nt);let W=nt[F];return W===void 0&&(W=u(l()),nt[F]=W),W}function u(w){const L=[],B=[],F=[];for(let X=0;X<e;X++)L[X]=0,B[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:F,object:w,attributes:{},index:null}}function f(w,L,B,F){const X=r.attributes,nt=L.attributes;let W=0;const at=B.getAttributes();for(const G in at)if(at[G].location>=0){const bt=X[G];let Et=nt[G];if(Et===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),bt===void 0||bt.attribute!==Et||Et&&bt.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function m(w,L,B,F){const X={},nt=L.attributes;let W=0;const at=B.getAttributes();for(const G in at)if(at[G].location>=0){let bt=nt[G];bt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor));const Et={};Et.attribute=bt,bt&&bt.data&&(Et.data=bt.data),X[G]=Et,W++}r.attributes=X,r.attributesNum=W,r.index=F}function x(){const w=r.newAttributes;for(let L=0,B=w.length;L<B;L++)w[L]=0}function g(w){p(w,0)}function p(w,L){const B=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;B[w]=1,F[w]===0&&(i.enableVertexAttribArray(w),F[w]=1),X[w]!==L&&(i.vertexAttribDivisor(w,L),X[w]=L)}function b(){const w=r.newAttributes,L=r.enabledAttributes;for(let B=0,F=L.length;B<F;B++)L[B]!==w[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function _(w,L,B,F,X,nt,W){W===!0?i.vertexAttribIPointer(w,L,B,X,nt):i.vertexAttribPointer(w,L,B,F,X,nt)}function v(w,L,B,F){x();const X=F.attributes,nt=B.getAttributes(),W=L.defaultAttributeValues;for(const at in nt){const G=nt[at];if(G.location>=0){let mt=X[at];if(mt===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(mt=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(mt=w.instanceColor)),mt!==void 0){const bt=mt.normalized,Et=mt.itemSize,Bt=t.get(mt);if(Bt===void 0)continue;const ie=Bt.buffer,Q=Bt.type,ft=Bt.bytesPerElement,pt=Q===i.INT||Q===i.UNSIGNED_INT||mt.gpuType===Ha;if(mt.isInterleavedBufferAttribute){const gt=mt.data,Pt=gt.stride,jt=mt.offset;if(gt.isInstancedInterleavedBuffer){for(let $t=0;$t<G.locationSize;$t++)p(G.location+$t,gt.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let $t=0;$t<G.locationSize;$t++)g(G.location+$t);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let $t=0;$t<G.locationSize;$t++)_(G.location+$t,Et/G.locationSize,Q,bt,Pt*ft,(jt+Et/G.locationSize*$t)*ft,pt)}else{if(mt.isInstancedBufferAttribute){for(let gt=0;gt<G.locationSize;gt++)p(G.location+gt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<G.locationSize;gt++)g(G.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let gt=0;gt<G.locationSize;gt++)_(G.location+gt,Et/G.locationSize,Q,bt,Et*ft,Et/G.locationSize*gt*ft,pt)}}else if(W!==void 0){const bt=W[at];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(G.location,bt);break;case 3:i.vertexAttrib3fv(G.location,bt);break;case 4:i.vertexAttrib4fv(G.location,bt);break;default:i.vertexAttrib1fv(G.location,bt)}}}}b()}function U(){C();for(const w in n){const L=n[w];for(const B in L){const F=L[B];for(const X in F)h(F[X].object),delete F[X];delete L[B]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const B in L){const F=L[B];for(const X in F)h(F[X].object),delete F[X];delete L[B]}delete n[w.id]}function R(w){for(const L in n){const B=n[L];if(B[w.id]===void 0)continue;const F=B[w.id];for(const X in F)h(F[X].object),delete F[X];delete B[w.id]}}function C(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function g0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==jn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:U,maxSamples:A}}function x0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new oi,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const b=r?0:n,_=b*4;let v=p.clippingState||null;l.value=v,v=h(m,u,_,f);for(let U=0;U!==_;++U)v[U]=e[U];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)o.copy(d[_]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function _0(i){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=ls:a===ea&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===ea)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ru(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Th extends Sh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,Hl=[.125,.215,.35,.446,.526,.582],wi=20,Co=new Th,Vl=new le;let Ro=null,Po=0,Lo=0,Do=!1;const _i=(1+Math.sqrt(5))/2,Gi=1/_i,Gl=[new S(-_i,Gi,0),new S(_i,Gi,0),new S(-Gi,0,_i),new S(Gi,0,_i),new S(0,_i,-Gi),new S(0,_i,Gi),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)];class Pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ro=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Po,Lo),this._renderer.xr.enabled=Do,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ys,format:Cn,colorSpace:ps,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(r)),this._blurMaterial=w0(r,t,e)}return s}_compileMaterial(t){const e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,s){const a=new ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Vl),h.toneMapping=ci,h.autoClear=!1;const f=new me({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new Y(new De,f);let x=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Vl),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;pr(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gl[(s-r-1)%Gl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Y(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):wi;g>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);const p=[];let b=0;for(let R=0;R<wi;++R){const C=R/x,y=Math.exp(-C*C/2);p.push(y),R===0?b+=y:R<g&&(b+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;const v=this._sizeLods[s],U=3*v*(s>_-Ji?s-_+Ji:0),A=4*(this._cubeSize-v);pr(e,U,A,3*v,2*v),l.setRenderTarget(e),l.render(d,Co)}}function y0(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+Hl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ji?l=Hl[o-i+Ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*f),_=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,C=A>2?0:-1,y=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];b.set(y,x*m*A),_.set(u,g*m*A);const w=[A,A,A,A,A,A];v.set(w,p*m*A)}const U=new We;U.setAttribute("position",new hn(b,x)),U.setAttribute("uv",new hn(_,g)),U.setAttribute("faceIndex",new hn(v,p)),t.push(U),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wl(i,t,e){const n=new Ei(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function w0(i,t,e){const n=new Float32Array(wi),s=new S(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Xl(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function ql(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function M0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ta||l===ea,h=l===ls||l===cs;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Pa(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pa(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function S0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function b0(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,m=d.attributes.position;let x=0;if(f!==null){const b=f.array;x=f.version;for(let _=0,v=b.length;_<v;_+=3){const U=b[_+0],A=b[_+1],R=b[_+2];u.push(U,A,A,R,R,U)}}else if(m!==void 0){const b=m.array;x=m.version;for(let _=0,v=b.length/3-1;_<v;_+=3){const U=_+0,A=_+1,R=_+2;u.push(U,A,A,R,R,U)}}else return;const g=new(gh(u)?wh:yh)(u,1);g.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function E0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*o,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*x[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function T0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A0(i,t,e){const n=new WeakMap,s=new Ue;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*U*4*d),R=new xh(A,v,U,d);R.type=Dn,R.needsUpdate=!0;const C=_*4;for(let w=0;w<d;w++){const L=g[w],B=p[w],F=b[w],X=v*U*4*w;for(let nt=0;nt<L.count;nt++){const W=nt*C;f===!0&&(s.fromBufferAttribute(L,nt),A[X+W+0]=s.x,A[X+W+1]=s.y,A[X+W+2]=s.z,A[X+W+3]=0),m===!0&&(s.fromBufferAttribute(B,nt),A[X+W+4]=s.x,A[X+W+5]=s.y,A[X+W+6]=s.z,A[X+W+7]=0),x===!0&&(s.fromBufferAttribute(F,nt),A[X+W+8]=s.x,A[X+W+9]=s.y,A[X+W+10]=s.z,A[X+W+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new xt(v,U)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function C0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ah extends en{constructor(t,e,n,s,r,o,a,l,c,h=es){if(h!==es&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=bi),n===void 0&&h===ds&&(n=hs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ch=new en,Yl=new Ah(1,1),Rh=new xh,Ph=new fu,Lh=new bh,$l=[],Zl=[],jl=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),$e(e,n)}}function U0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),$e(e,n)}}function N0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;jl.set(n),i.uniformMatrix4fv(this.addr,!1,jl),$e(e,n)}}function k0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=mh,r=Yl):r=Ch,e.setTexture2D(t||r,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ph,s)}function q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lh,s)}function Y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rh,s)}function $0(i){switch(i){case 5126:return R0;case 35664:return P0;case 35665:return L0;case 35666:return D0;case 35674:return I0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return k0;case 35667:case 35671:return O0;case 35668:case 35672:return F0;case 35669:case 35673:return z0;case 5125:return B0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function Z0(i,t){i.uniform1fv(this.addr,t)}function j0(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function J0(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Q0(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function sm(i,t){i.uniform3iv(this.addr,t)}function rm(i,t){i.uniform4iv(this.addr,t)}function om(i,t){i.uniform1uiv(this.addr,t)}function am(i,t){i.uniform2uiv(this.addr,t)}function lm(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function hm(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ch,r[o])}function dm(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ph,r[o])}function um(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lh,r[o])}function fm(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rh,r[o])}function pm(i){switch(i){case 5126:return Z0;case 35664:return j0;case 35665:return K0;case 35666:return J0;case 35674:return Q0;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}}class gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}}class vm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function xm(i,t,e){const n=i.name,s=n.length;for(Io.lastIndex=0;;){const r=Io.exec(n),o=Io.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ql(e,c===void 0?new mm(a,i,t):new gm(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new vm(a),Ql(e,d)),e=d}}}class kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);xm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _m=37297;let ym=0;function wm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ec=new he;function Mm(i){Te._getMatrix(ec,Te.workingColorSpace,i);const t=`mat3( ${ec.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wm(i.getShaderSource(t),o)}else return s}function Sm(i,t){const e=Mm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bm(i,t){let e;switch(t){case Td:e="Linear";break;case Ad:e="Reinhard";break;case Cd:e="Cineon";break;case ih:e="ACESFilmic";break;case Pd:e="AgX";break;case Ld:e="Neutral";break;case Rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mr=new S;function Em(){Te.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Is(i){return i!==""}function ic(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Rm,Lm)}const Pm=new Map;function Lm(i,t){let e=ue[t];if(e===void 0){const n=Pm.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(Dm,Im)}function Im(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Um(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function km(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Om(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nh:t="ENVMAP_BLENDING_MULTIPLY";break;case bd:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function Fm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Um(e),c=Nm(e),h=km(e),d=Om(e),u=Fm(e),f=Tm(e),m=Am(r),x=s.createProgram();let g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Is).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(g=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?ue.tonemapping_pars_fragment:"",e.toneMapping!==ci?bm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Sm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=La(o),o=ic(o,e),o=sc(o,e),a=La(a),a=ic(a,e),a=sc(a,e),o=rc(o),a=rc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=b+g+o,v=b+p+a,U=tc(s,s.VERTEX_SHADER,_),A=tc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,U),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(U).trim(),X=s.getShaderInfoLog(A).trim();let nt=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,A);else{const at=nc(s,U,"vertex"),G=nc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+at+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:nt,programLog:B,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(U),s.deleteShader(A),C=new kr(s,x),y=Cm(s,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,_m)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ym++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=A,this}let Bm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vm(t),e.set(t,n)),n}}class Vm{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}}function Gm(i,t,e,n,s,r,o){const a=new Za,l=new Hm,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,w,L,B,F){const X=B.fog,nt=F.geometry,W=y.isMeshStandardMaterial?B.environment:null,at=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),G=at&&at.mapping===qr?at.image.height:null,mt=m[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const bt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Et=bt!==void 0?bt.length:0;let Bt=0;nt.morphAttributes.position!==void 0&&(Bt=1),nt.morphAttributes.normal!==void 0&&(Bt=2),nt.morphAttributes.color!==void 0&&(Bt=3);let ie,Q,ft,pt;if(mt){const q=Pn[mt];ie=q.vertexShader,Q=q.fragmentShader}else ie=y.vertexShader,Q=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),pt=l.getFragmentShaderID(y);const gt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),jt=F.isInstancedMesh===!0,$t=F.isBatchedMesh===!0,Jt=!!y.map,st=!!y.matcap,dt=!!at,P=!!y.aoMap,It=!!y.lightMap,ht=!!y.bumpMap,ot=!!y.normalMap,vt=!!y.displacementMap,Yt=!!y.emissiveMap,Dt=!!y.metalnessMap,T=!!y.roughnessMap,M=y.anisotropy>0,H=y.clearcoat>0,K=y.dispersion>0,rt=y.iridescence>0,et=y.sheen>0,Tt=y.transmission>0,lt=M&&!!y.anisotropyMap,Ut=H&&!!y.clearcoatMap,Kt=H&&!!y.clearcoatNormalMap,ut=H&&!!y.clearcoatRoughnessMap,At=rt&&!!y.iridescenceMap,Gt=rt&&!!y.iridescenceThicknessMap,Zt=et&&!!y.sheenColorMap,Nt=et&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Ht=!!y.specularColorMap,ee=!!y.specularIntensityMap,N=Tt&&!!y.transmissionMap,St=Tt&&!!y.thicknessMap,J=!!y.gradientMap,tt=!!y.alphaMap,_t=y.alphaTest>0,yt=!!y.alphaHash,Wt=!!y.extensions;let fe=ci;y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(fe=i.toneMapping);const oe={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:Q,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:pt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:$t,batchingColor:$t&&F._colorsTexture!==null,instancing:jt,instancingColor:jt&&F.instanceColor!==null,instancingMorph:jt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ps,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:st,envMap:dt,envMapMode:dt&&at.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:It,bumpMap:ht,normalMap:ot,displacementMap:u&&vt,emissiveMap:Yt,normalMapObjectSpace:ot&&y.normalMapType===Nd,normalMapTangentSpace:ot&&y.normalMapType===ph,metalnessMap:Dt,roughnessMap:T,anisotropy:M,anisotropyMap:lt,clearcoat:H,clearcoatMap:Ut,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ut,dispersion:K,iridescence:rt,iridescenceMap:At,iridescenceThicknessMap:Gt,sheen:et,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:Qt,specularColorMap:Ht,specularIntensityMap:ee,transmission:Tt,transmissionMap:N,thicknessMap:St,gradientMap:J,opaque:y.transparent===!1&&y.blending===ts&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:yt,combine:y.combine,mapUv:Jt&&x(y.map.channel),aoMapUv:P&&x(y.aoMap.channel),lightMapUv:It&&x(y.lightMap.channel),bumpMapUv:ht&&x(y.bumpMap.channel),normalMapUv:ot&&x(y.normalMap.channel),displacementMapUv:vt&&x(y.displacementMap.channel),emissiveMapUv:Yt&&x(y.emissiveMap.channel),metalnessMapUv:Dt&&x(y.metalnessMap.channel),roughnessMapUv:T&&x(y.roughnessMap.channel),anisotropyMapUv:lt&&x(y.anisotropyMap.channel),clearcoatMapUv:Ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(y.sheenRoughnessMap.channel),specularMapUv:Qt&&x(y.specularMap.channel),specularColorMapUv:Ht&&x(y.specularColorMap.channel),specularIntensityMapUv:ee&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:St&&x(y.thicknessMap.channel),alphaMapUv:tt&&x(y.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ot||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!nt.attributes.uv&&(Jt||tt),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:F.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Bt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&Te.getTransfer(y.map.colorSpace)===Ie,decodeVideoTextureEmissive:Yt&&y.emissiveMap.isVideoTexture===!0&&Te.getTransfer(y.emissiveMap.colorSpace)===Ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&y.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(b(w,y),_(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const w=m[y.type];let L;if(w){const B=Pn[w];L=Eu.clone(B.uniforms)}else L=y.uniforms;return L}function U(y,w){let L;for(let B=0,F=h.length;B<F;B++){const X=h[B];if(X.cacheKey===w){L=X,++L.usedTimes;break}}return L===void 0&&(L=new zm(i,w,y,r),h.push(L)),L}function A(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:U,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:C}}function Wm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,m,x,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function a(d,u,f,m,x,g){const p=o(d,u,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,m,x,g){const p=o(d,u,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Xm),n.length>1&&n.sort(u||ac),s.length>1&&s.sort(u||ac)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function qm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new lc,i.set(n,[o])):s>=r.length?(o=new lc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new le};break;case"SpotLight":e={position:new S,direction:new S,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function $m(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zm=0;function jm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Km(i){const t=new Ym,e=$m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const s=new S,r=new Ce,o=new Ce;function a(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,_=0,v=0,U=0,A=0,R=0;c.sort(jm);for(let y=0,w=c.length;y<w;y++){const L=c[y],B=L.color,F=L.intensity,X=L.distance,nt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*F,d+=B.g*F,u+=B.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],F);R++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const at=L.shadow,G=e.get(L);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=nt,n.directionalShadowMatrix[f]=L.shadow.matrix,b++}n.directional[f]=W,f++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(B).multiplyScalar(F),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[x]=W;const at=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,at.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=at.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=nt,v++}x++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(B).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=W,g++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const at=L.shadow,G=e.get(L);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,G.shadowCameraNear=at.camera.near,G.shadowCameraFar=at.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=W,m++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==U||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=U,C.numLightProbes=R,n.version=Zm++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function cc(i){const t=new Km(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Jm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cc(i),t.set(s,[a])):r>=o.length?(a=new cc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qm extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
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
}`;function ig(i,t,e){let n=new ja;const s=new xt,r=new xt,o=new Ue,a=new Qm({depthPacking:Ud}),l=new tg,c={},h=e.maxTextureSize,d={[hi]:tn,[tn]:hi,[Qe]:Qe},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new We;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Y(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let p=this.type;this.render=function(A,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(li),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==Hn&&this.type===Hn,X=p===Hn&&this.type!==Hn;for(let nt=0,W=A.length;nt<W;nt++){const at=A[nt],G=at.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const mt=G.getFrameExtents();if(s.multiply(mt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,G.mapSize.y=r.y)),G.map===null||F===!0||X===!0){const Et=this.type!==Hn?{minFilter:mn,magFilter:mn}:{};G.map!==null&&G.map.dispose(),G.map=new Ei(s.x,s.y,Et),G.map.texture.name=at.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const bt=G.getViewportCount();for(let Et=0;Et<bt;Et++){const Bt=G.getViewport(Et);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),B.viewport(o),G.updateMatrices(at,Et),n=G.getFrustum(),v(R,C,G.camera,at,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&b(G,C),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,w,L)};function b(A,R){const C=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ei(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,C,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,C,f,x,null)}function _(A,R,C,y){let w=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=C.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=w.uuid,F=R.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let nt=X[F];nt===void 0&&(nt=w.clone(),X[F]=nt,R.addEventListener("dispose",U)),w=nt}if(w.visible=R.visible,w.wireframe=R.wireframe,y===Hn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=i.properties.get(w);B.light=C}return w}function v(A,R,C,y,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=t.update(A),X=A.material;if(Array.isArray(X)){const nt=F.groups;for(let W=0,at=nt.length;W<at;W++){const G=nt[W],mt=X[G.materialIndex];if(mt&&mt.visible){const bt=_(A,mt,y,w);A.onBeforeShadow(i,A,R,C,F,bt,G),i.renderBufferDirect(C,null,F,bt,A,G),A.onAfterShadow(i,A,R,C,F,bt,G)}}}else if(X.visible){const nt=_(A,X,y,w);A.onBeforeShadow(i,A,R,C,F,nt,null),i.renderBufferDirect(C,null,F,nt,A,null),A.onAfterShadow(i,A,R,C,F,nt,null)}}const B=A.children;for(let F=0,X=B.length;F<X;F++)v(B[F],R,C,y,w)}function U(A){A.target.removeEventListener("dispose",U);for(const C in c){const y=c[C],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const sg={[Yo]:$o,[Zo]:Jo,[jo]:Qo,[as]:Ko,[$o]:Yo,[Jo]:Zo,[Qo]:jo,[Ko]:as};function rg(i,t){function e(){let N=!1;const St=new Ue;let J=null;const tt=new Ue(0,0,0,0);return{setMask:function(_t){J!==_t&&!N&&(i.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){N=_t},setClear:function(_t,yt,Wt,fe,oe){oe===!0&&(_t*=fe,yt*=fe,Wt*=fe),St.set(_t,yt,Wt,fe),tt.equals(St)===!1&&(i.clearColor(_t,yt,Wt,fe),tt.copy(St))},reset:function(){N=!1,J=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,St=!1,J=null,tt=null,_t=null;return{setReversed:function(yt){if(St!==yt){const Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const fe=_t;_t=null,this.setClear(fe)}St=yt},getReversed:function(){return St},setTest:function(yt){yt?gt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(yt){J!==yt&&!N&&(i.depthMask(yt),J=yt)},setFunc:function(yt){if(St&&(yt=sg[yt]),tt!==yt){switch(yt){case Yo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=yt}},setLocked:function(yt){N=yt},setClear:function(yt){_t!==yt&&(St&&(yt=1-yt),i.clearDepth(yt),_t=yt)},reset:function(){N=!1,J=null,tt=null,_t=null,St=!1}}}function s(){let N=!1,St=null,J=null,tt=null,_t=null,yt=null,Wt=null,fe=null,oe=null;return{setTest:function(q){N||(q?gt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(q){St!==q&&!N&&(i.stencilMask(q),St=q)},setFunc:function(q,wt,ne){(J!==q||tt!==wt||_t!==ne)&&(i.stencilFunc(q,wt,ne),J=q,tt=wt,_t=ne)},setOp:function(q,wt,ne){(yt!==q||Wt!==wt||fe!==ne)&&(i.stencilOp(q,wt,ne),yt=q,Wt=wt,fe=ne)},setLocked:function(q){N=q},setClear:function(q){oe!==q&&(i.clearStencil(q),oe=q)},reset:function(){N=!1,St=null,J=null,tt=null,_t=null,yt=null,Wt=null,fe=null,oe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,_=null,v=null,U=null,A=null,R=new le(0,0,0),C=0,y=!1,w=null,L=null,B=null,F=null,X=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,at=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=at>=1):G.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=at>=2);let mt=null,bt={};const Et=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ie=new Ue().fromArray(Et),Q=new Ue().fromArray(Bt);function ft(N,St,J,tt){const _t=new Uint8Array(4),yt=i.createTexture();i.bindTexture(N,yt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<J;Wt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(St+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return yt}const pt={};pt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(as),ht(!1),ot(ml),gt(i.CULL_FACE),P(li);function gt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Pt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function jt(N,St){return d[N]!==St?(i.bindFramebuffer(N,St),d[N]=St,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=St),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=St),!0):!1}function $t(N,St){let J=f,tt=!1;if(N){J=u.get(St),J===void 0&&(J=[],u.set(St,J));const _t=N.textures;if(J.length!==_t.length||J[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Wt=_t.length;yt<Wt;yt++)J[yt]=i.COLOR_ATTACHMENT0+yt;J.length=_t.length,tt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,tt=!0);tt&&i.drawBuffers(J)}function Jt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const st={[yi]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};st[cd]=i.MIN,st[hd]=i.MAX;const dt={[dd]:i.ZERO,[ud]:i.ONE,[fd]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[vd]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(N,St,J,tt,_t,yt,Wt,fe,oe,q){if(N===li){x===!0&&(Pt(i.BLEND),x=!1);return}if(x===!1&&(gt(i.BLEND),x=!0),N!==od){if(N!==g||q!==y){if((p!==yi||v!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,v=yi),q)switch(N){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,_=null,U=null,A=null,R.set(0,0,0),C=0,g=N,y=q}return}_t=_t||St,yt=yt||J,Wt=Wt||tt,(St!==p||_t!==v)&&(i.blendEquationSeparate(st[St],st[_t]),p=St,v=_t),(J!==b||tt!==_||yt!==U||Wt!==A)&&(i.blendFuncSeparate(dt[J],dt[tt],dt[yt],dt[Wt]),b=J,_=tt,U=yt,A=Wt),(fe.equals(R)===!1||oe!==C)&&(i.blendColor(fe.r,fe.g,fe.b,oe),R.copy(fe),C=oe),g=N,y=!1}function It(N,St){N.side===Qe?Pt(i.CULL_FACE):gt(i.CULL_FACE);let J=N.side===tn;St&&(J=!J),ht(J),N.blending===ts&&N.transparent===!1?P(li):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const tt=N.stencilWrite;a.setTest(tt),tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(N){w!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),w=N)}function ot(N){N!==sd?(gt(i.CULL_FACE),N!==L&&(N===ml?i.cullFace(i.BACK):N===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=N}function vt(N){N!==B&&(W&&i.lineWidth(N),B=N)}function Yt(N,St,J){N?(gt(i.POLYGON_OFFSET_FILL),(F!==St||X!==J)&&(i.polygonOffset(St,J),F=St,X=J)):Pt(i.POLYGON_OFFSET_FILL)}function Dt(N){N?gt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+nt-1),mt!==N&&(i.activeTexture(N),mt=N)}function M(N,St,J){J===void 0&&(mt===null?J=i.TEXTURE0+nt-1:J=mt);let tt=bt[J];tt===void 0&&(tt={type:void 0,texture:void 0},bt[J]=tt),(tt.type!==N||tt.texture!==St)&&(mt!==J&&(i.activeTexture(J),mt=J),i.bindTexture(N,St||pt[N]),tt.type=N,tt.texture=St)}function H(){const N=bt[mt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(N){ie.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function Nt(N){Q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function Qt(N,St){let J=c.get(St);J===void 0&&(J=new WeakMap,c.set(St,J));let tt=J.get(N);tt===void 0&&(tt=i.getUniformBlockIndex(St,N.name),J.set(N,tt))}function Ht(N,St){const tt=c.get(St).get(N);l.get(St)!==tt&&(i.uniformBlockBinding(St,tt,N.__bindingPointIndex),l.set(St,tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,bt={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,_=null,v=null,U=null,A=null,R=new le(0,0,0),C=0,y=!1,w=null,L=null,B=null,F=null,X=null,ie.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Pt,bindFramebuffer:jt,drawBuffers:$t,useProgram:Jt,setBlending:P,setMaterial:It,setFlipSided:ht,setCullFace:ot,setLineWidth:vt,setPolygonOffset:Yt,setScissorTest:Dt,activeTexture:T,bindTexture:M,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:rt,texImage2D:At,texImage3D:Gt,updateUBOMapping:Qt,uniformBlockBinding:Ht,texStorage2D:Kt,texStorage3D:ut,texSubImage2D:et,texSubImage3D:Tt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ut,scissor:Zt,viewport:Nt,reset:ee}}function hc(i,t,e,n){const s=og(n);switch(e){case lh:return i*t;case hh:return i*t;case dh:return i*t*2;case Wa:return i*t/s.components*s.byteLength;case Xa:return i*t/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case ch:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Ya:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case aa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nr:case ba:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fh:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Aa:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(i){switch(i){case jn:case rh:return{byteLength:1,components:1};case Vs:case oh:case Ys:return{byteLength:2,components:1};case Va:case Ga:return{byteLength:2,components:4};case bi:case Ha:case Dn:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ag(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,M){return f?new OffscreenCanvas(T,M):Gs("canvas")}function x(T,M,H){let K=1;const rt=Dt(T);if((rt.width>H||rt.height>H)&&(K=H/Math.max(rt.width,rt.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const et=Math.floor(K*rt.width),Tt=Math.floor(K*rt.height);d===void 0&&(d=m(et,Tt));const lt=M?m(et,Tt):d;return lt.width=et,lt.height=Tt,lt.getContext("2d").drawImage(T,0,0,et,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+Tt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,M,H,K,rt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=M;if(M===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),M===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),M===i.RGBA){const Tt=rt?Yr:Te.getTransfer(K);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=Tt===Ie?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(T,M){let H;return T?M===null||M===bi||M===hs?H=i.DEPTH24_STENCIL8:M===Dn?H=i.DEPTH32F_STENCIL8:M===Vs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===hs?H=i.DEPTH_COMPONENT24:M===Dn?H=i.DEPTH_COMPONENT32F:M===Vs&&(H=i.DEPTH_COMPONENT16),H}function U(T,M){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==mn&&T.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),w(M)}function C(T){const M=n.get(T);if(M.__webglInit===void 0)return;const H=T.source,K=u.get(H);if(K){const rt=K[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(T),Object.keys(K).length===0&&u.delete(H)}n.remove(T)}function y(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const H=T.source,K=u.get(H);delete K[M.__cacheKey],o.memory.textures--}function w(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let rt=0;rt<M.__webglFramebuffer[K].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[K][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=T.textures;for(let K=0,rt=H.length;K<rt;K++){const et=n.get(H[K]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(T)}let L=0;function B(){L=0}function F(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function X(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function nt(T,M){const H=n.get(T);if(T.isVideoTexture&&vt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,T,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function W(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){Q(H,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function at(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){Q(H,T,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function G(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ft(H,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const mt={[Fr]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},bt={[mn]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Et={[kd]:i.NEVER,[Vd]:i.ALWAYS,[Od]:i.LESS,[mh]:i.LEQUAL,[Fd]:i.EQUAL,[Hd]:i.GEQUAL,[zd]:i.GREATER,[Bd]:i.NOTEQUAL};function Bt(T,M){if(M.type===Dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===oo||M.magFilter===Zs||M.magFilter===Si||M.minFilter===Ln||M.minFilter===oo||M.minFilter===Zs||M.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,mt[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,mt[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,mt[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,bt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===mn||M.minFilter!==Zs&&M.minFilter!==Si||M.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ie(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const K=M.source;let rt=u.get(K);rt===void 0&&(rt={},u.set(K,rt));const et=X(M);if(et!==T.__cacheKey){rt[et]===void 0&&(rt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),rt[et].usedTimes++;const Tt=rt[T.__cacheKey];Tt!==void 0&&(rt[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&y(M)),T.__cacheKey=et,T.__webglTexture=rt[et].texture}return H}function Q(T,M,H){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const rt=ie(T,M),et=M.source;e.bindTexture(K,T.__webglTexture,i.TEXTURE0+H);const Tt=n.get(et);if(et.version!==Tt.__version||rt===!0){e.activeTexture(i.TEXTURE0+H);const lt=Te.getPrimaries(Te.workingColorSpace),Ut=M.colorSpace===ai?null:Te.getPrimaries(M.colorSpace),Kt=M.colorSpace===ai||lt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ut=x(M.image,!1,s.maxTextureSize);ut=Yt(M,ut);const At=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let Zt=_(M.internalFormat,At,Gt,M.colorSpace,M.isVideoTexture);Bt(K,M);let Nt;const Qt=M.mipmaps,Ht=M.isVideoTexture!==!0,ee=Tt.__version===void 0||rt===!0,N=et.dataReady,St=U(M,ut);if(M.isDepthTexture)Zt=v(M.format===ds,M.type),ee&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Zt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Zt,ut.width,ut.height,0,At,Gt,null));else if(M.isDataTexture)if(Qt.length>0){Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,St,Zt,Qt[0].width,Qt[0].height);for(let J=0,tt=Qt.length;J<tt;J++)Nt=Qt[J],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Nt.width,Nt.height,At,Gt,Nt.data):e.texImage2D(i.TEXTURE_2D,J,Zt,Nt.width,Nt.height,0,At,Gt,Nt.data);M.generateMipmaps=!1}else Ht?(ee&&e.texStorage2D(i.TEXTURE_2D,St,Zt,ut.width,ut.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,At,Gt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,ut.width,ut.height,0,At,Gt,ut.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Zt,Qt[0].width,Qt[0].height,ut.depth);for(let J=0,tt=Qt.length;J<tt;J++)if(Nt=Qt[J],M.format!==Cn)if(At!==null)if(Ht){if(N)if(M.layerUpdates.size>0){const _t=hc(Nt.width,Nt.height,M.format,M.type);for(const yt of M.layerUpdates){const Wt=Nt.data.subarray(yt*_t/Nt.data.BYTES_PER_ELEMENT,(yt+1)*_t/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,yt,Nt.width,Nt.height,1,At,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Nt.width,Nt.height,ut.depth,At,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Zt,Nt.width,Nt.height,ut.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Nt.width,Nt.height,ut.depth,At,Gt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Zt,Nt.width,Nt.height,ut.depth,0,At,Gt,Nt.data)}else{Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,St,Zt,Qt[0].width,Qt[0].height);for(let J=0,tt=Qt.length;J<tt;J++)Nt=Qt[J],M.format!==Cn?At!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Nt.width,Nt.height,At,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Nt.width,Nt.height,At,Gt,Nt.data):e.texImage2D(i.TEXTURE_2D,J,Zt,Nt.width,Nt.height,0,At,Gt,Nt.data)}else if(M.isDataArrayTexture)if(Ht){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Zt,ut.width,ut.height,ut.depth),N)if(M.layerUpdates.size>0){const J=hc(ut.width,ut.height,M.format,M.type);for(const tt of M.layerUpdates){const _t=ut.data.subarray(tt*J/ut.data.BYTES_PER_ELEMENT,(tt+1)*J/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ut.width,ut.height,1,At,Gt,_t)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,At,Gt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,ut.width,ut.height,ut.depth,0,At,Gt,ut.data);else if(M.isData3DTexture)Ht?(ee&&e.texStorage3D(i.TEXTURE_3D,St,Zt,ut.width,ut.height,ut.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,At,Gt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,ut.width,ut.height,ut.depth,0,At,Gt,ut.data);else if(M.isFramebufferTexture){if(ee)if(Ht)e.texStorage2D(i.TEXTURE_2D,St,Zt,ut.width,ut.height);else{let J=ut.width,tt=ut.height;for(let _t=0;_t<St;_t++)e.texImage2D(i.TEXTURE_2D,_t,Zt,J,tt,0,At,Gt,null),J>>=1,tt>>=1}}else if(Qt.length>0){if(Ht&&ee){const J=Dt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,St,Zt,J.width,J.height)}for(let J=0,tt=Qt.length;J<tt;J++)Nt=Qt[J],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,At,Gt,Nt):e.texImage2D(i.TEXTURE_2D,J,Zt,At,Gt,Nt);M.generateMipmaps=!1}else if(Ht){if(ee){const J=Dt(ut);e.texStorage2D(i.TEXTURE_2D,St,Zt,J.width,J.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Zt,At,Gt,ut);g(M)&&p(K),Tt.__version=et.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ft(T,M,H){if(M.image.length!==6)return;const K=ie(T,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);const et=n.get(rt);if(rt.version!==et.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const Tt=Te.getPrimaries(Te.workingColorSpace),lt=M.colorSpace===ai?null:Te.getPrimaries(M.colorSpace),Ut=M.colorSpace===ai||Tt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,ut=M.image[0]&&M.image[0].isDataTexture,At=[];for(let tt=0;tt<6;tt++)!Kt&&!ut?At[tt]=x(M.image[tt],!0,s.maxCubemapSize):At[tt]=ut?M.image[tt].image:M.image[tt],At[tt]=Yt(M,At[tt]);const Gt=At[0],Zt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),Qt=_(M.internalFormat,Zt,Nt,M.colorSpace),Ht=M.isVideoTexture!==!0,ee=et.__version===void 0||K===!0,N=rt.dataReady;let St=U(M,Gt);Bt(i.TEXTURE_CUBE_MAP,M);let J;if(Kt){Ht&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){J=At[tt].mipmaps;for(let _t=0;_t<J.length;_t++){const yt=J[_t];M.format!==Cn?Zt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,yt.width,yt.height,Zt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Qt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,yt.width,yt.height,Zt,Nt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Qt,yt.width,yt.height,0,Zt,Nt,yt.data)}}}else{if(J=M.mipmaps,Ht&&ee){J.length>0&&St++;const tt=Dt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ut){Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,At[tt].width,At[tt].height,Zt,Nt,At[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,At[tt].width,At[tt].height,0,Zt,Nt,At[tt].data);for(let _t=0;_t<J.length;_t++){const Wt=J[_t].image[tt].image;Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Wt.width,Wt.height,Zt,Nt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Qt,Wt.width,Wt.height,0,Zt,Nt,Wt.data)}}else{Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Zt,Nt,At[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Zt,Nt,At[tt]);for(let _t=0;_t<J.length;_t++){const yt=J[_t];Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Zt,Nt,yt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Qt,Zt,Nt,yt.image[tt])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),et.__version=rt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function pt(T,M,H,K,rt,et){const Tt=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),Ut=_(H.internalFormat,Tt,lt,H.colorSpace),Kt=n.get(M),ut=n.get(H);if(ut.__renderTarget=M,!Kt.__hasExternalTextures){const At=Math.max(1,M.width>>et),Gt=Math.max(1,M.height>>et);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,Ut,At,Gt,M.depth,0,Tt,lt,null):e.texImage2D(rt,et,Ut,At,Gt,0,Tt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ot(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,rt,ut.__webglTexture,0,ht(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,rt,ut.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(T,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const K=M.depthTexture,rt=K&&K.isDepthTexture?K.type:null,et=v(M.stencilBuffer,rt),Tt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=ht(M);ot(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,et,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,T)}else{const K=M.textures;for(let rt=0;rt<K.length;rt++){const et=K[rt],Tt=r.convert(et.format,et.colorSpace),lt=r.convert(et.type),Ut=_(et.internalFormat,Tt,lt,et.colorSpace),Kt=ht(M);H&&ot(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ut,M.width,M.height):ot(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt(M.depthTexture,0);const rt=K.__webglTexture,et=ht(M);if(M.depthTexture.format===es)ot(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(M.depthTexture.format===ds)ot(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function jt(T){const M=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",rt)};K.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=K}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),gt(M.__webglDepthbuffer[K],T,!1);else{const rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),gt(M.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(T,M,H){const K=n.get(T);M!==void 0&&pt(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&jt(T)}function Jt(T){const M=T.texture,H=n.get(T),K=n.get(M);T.addEventListener("dispose",R);const rt=T.textures,et=T.isWebGLCubeRenderTarget===!0,Tt=rt.length>1;if(Tt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),et){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let Ut=0;Ut<M.mipmaps.length;Ut++)H.__webglFramebuffer[lt][Ut]=i.createFramebuffer()}else H.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)H.__webglFramebuffer[lt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let lt=0,Ut=rt.length;lt<Ut;lt++){const Kt=n.get(rt[lt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ot(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<rt.length;lt++){const Ut=rt[lt];H.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);const Kt=r.convert(Ut.format,Ut.colorSpace),ut=r.convert(Ut.type),At=_(Ut.internalFormat,Kt,ut,Ut.colorSpace,T.isXRRenderTarget===!0),Gt=ht(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)pt(H.__webglFramebuffer[lt][Ut],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut);else pt(H.__webglFramebuffer[lt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,Ut=rt.length;lt<Ut;lt++){const Kt=rt[lt],ut=n.get(Kt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),Bt(i.TEXTURE_2D,Kt),pt(H.__webglFramebuffer,T,Kt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),g(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),Bt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)pt(H.__webglFramebuffer[Ut],T,M,i.COLOR_ATTACHMENT0,lt,Ut);else pt(H.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,lt,0);g(M)&&p(lt),e.unbindTexture()}T.depthBuffer&&jt(T)}function st(T){const M=T.textures;for(let H=0,K=M.length;H<K;H++){const rt=M[H];if(g(rt)){const et=b(T),Tt=n.get(rt).__webglTexture;e.bindTexture(et,Tt),p(et),e.unbindTexture()}}}const dt=[],P=[];function It(T){if(T.samples>0){if(ot(T)===!1){const M=T.textures,H=T.width,K=T.height;let rt=i.COLOR_BUFFER_BIT;const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(T),lt=M.length>1;if(lt)for(let Ut=0;Ut<M.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ut=0;Ut<M.length;Ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const Kt=n.get(M[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,rt,i.NEAREST),l===!0&&(dt.length=0,P.length=0,dt.push(i.COLOR_ATTACHMENT0+Ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(et),P.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Ut=0;Ut<M.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const Kt=n.get(M[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ht(T){return Math.min(s.maxSamples,T.samples)}function ot(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Yt(T,M){const H=T.colorSpace,K=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==ps&&H!==ai&&(Te.getTransfer(H)===Ie?(K!==Cn||rt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Dt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=nt,this.setTexture2DArray=W,this.setTexture3D=at,this.setTextureCube=G,this.rebindTextures=$t,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ot}function lg(i,t){function e(n,s=ai){let r;const o=Te.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.BYTE;if(n===oh)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Ys)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===ch)return i.RGB;if(n===Cn)return i.RGBA;if(n===hh)return i.LUMINANCE;if(n===dh)return i.LUMINANCE_ALPHA;if(n===es)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===Wa)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ir||n===Ur)if(o===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===la)return o===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===da||n===ua||n===fa||n===pa||n===ma||n===ga||n===va||n===xa||n===_a||n===ya||n===wa||n===Ma||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===ba||n===Ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nr)return o===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===Ta||n===Aa||n===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class cg extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ft extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new di({vertexShader:dg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends ms{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const x=new fg,g=e.getContextAttributes();let p=null,b=null;const _=[],v=[],U=new xt;let A=null;const R=new ln;R.viewport=new Ue;const C=new ln;C.viewport=new Ue;const y=[R,C],w=new cg;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=_[Q];return ft===void 0&&(ft=new Uo,_[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=_[Q];return ft===void 0&&(ft=new Uo,_[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=_[Q];return ft===void 0&&(ft=new Uo,_[Q]=ft),ft.getHandSpace()};function F(Q){const ft=v.indexOf(Q.inputSource);if(ft===-1)return;const pt=_[ft];pt!==void 0&&(pt.update(Q.inputSource,Q.frame,c||o),pt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<_.length;Q++){const ft=v[Q];ft!==null&&(v[Q]=null,_[Q].disconnect(ft))}L=null,B=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,b=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const ft={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ei(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ft=null,pt=null,gt=null;g.depth&&(gt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=g.stencil?ds:es,pt=g.stencil?hs:bi);const Pt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Ei(u.textureWidth,u.textureHeight,{format:Cn,type:jn,depthTexture:new Ah(u.textureWidth,u.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(Q){for(let ft=0;ft<Q.removed.length;ft++){const pt=Q.removed[ft],gt=v.indexOf(pt);gt>=0&&(v[gt]=null,_[gt].disconnect(pt))}for(let ft=0;ft<Q.added.length;ft++){const pt=Q.added[ft];let gt=v.indexOf(pt);if(gt===-1){for(let jt=0;jt<_.length;jt++)if(jt>=v.length){v.push(pt),gt=jt;break}else if(v[jt]===null){v[jt]=pt,gt=jt;break}if(gt===-1)break}const Pt=_[gt];Pt&&Pt.connect(pt)}}const W=new S,at=new S;function G(Q,ft,pt){W.setFromMatrixPosition(ft.matrixWorld),at.setFromMatrixPosition(pt.matrixWorld);const gt=W.distanceTo(at),Pt=ft.projectionMatrix.elements,jt=pt.projectionMatrix.elements,$t=Pt[14]/(Pt[10]-1),Jt=Pt[14]/(Pt[10]+1),st=(Pt[9]+1)/Pt[5],dt=(Pt[9]-1)/Pt[5],P=(Pt[8]-1)/Pt[0],It=(jt[8]+1)/jt[0],ht=$t*P,ot=$t*It,vt=gt/(-P+It),Yt=vt*-P;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Yt),Q.translateZ(vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pt[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Dt=$t+vt,T=Jt+vt,M=ht-Yt,H=ot+(gt-Yt),K=st*Jt/T*Dt,rt=dt*Jt/T*Dt;Q.projectionMatrix.makePerspective(M,H,K,rt,Dt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function mt(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ft=Q.near,pt=Q.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),w.near=C.near=R.near=ft,w.far=C.far=R.far=pt,(L!==w.near||B!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,B=w.far),R.layers.mask=Q.layers.mask|2,C.layers.mask=Q.layers.mask|4,w.layers.mask=R.layers.mask|C.layers.mask;const gt=Q.parent,Pt=w.cameras;mt(w,gt);for(let jt=0;jt<Pt.length;jt++)mt(Pt[jt],gt);Pt.length===2?G(w,R,C):w.projectionMatrix.copy(R.projectionMatrix),bt(Q,w,gt)};function bt(Q,ft,pt){pt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(pt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=us*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Et=null;function Bt(Q,ft){if(h=ft.getViewerPose(c||o),m=ft,h!==null){const pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let gt=!1;pt.length!==w.cameras.length&&(w.cameras.length=0,gt=!0);for(let jt=0;jt<pt.length;jt++){const $t=pt[jt];let Jt=null;if(f!==null)Jt=f.getViewport($t);else{const dt=d.getViewSubImage(u,$t);Jt=dt.viewport,jt===0&&(t.setRenderTargetTextures(b,dt.colorTexture,u.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(b))}let st=y[jt];st===void 0&&(st=new ln,st.layers.enable(jt),st.viewport=new Ue,y[jt]=st),st.matrix.fromArray($t.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray($t.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),jt===0&&(w.matrix.copy(st.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),gt===!0&&w.cameras.push(st)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const jt=d.getDepthInformation(pt[0]);jt&&jt.isValid&&jt.texture&&x.init(t,jt,s.renderState)}}for(let pt=0;pt<_.length;pt++){const gt=v[pt],Pt=_[pt];gt!==null&&Pt!==void 0&&Pt.update(gt,ft,c||o)}Et&&Et(Q,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),m=null}const ie=new Eh;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(Q){Et=Q},this.dispose=function(){}}}const xi=new yn,mg=new Ce;function gg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Mh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p),_=b.envMap,v=b.envMapRotation;_&&(g.envMap.value=_,xi.copy(v),xi.x*=-1,xi.y*=-1,xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),g.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(xi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const v=_.program;n.uniformBlockBinding(b,v)}function c(b,_){let v=s[b.id];v===void 0&&(m(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));const U=_.program;n.updateUBOMapping(b,U);const A=t.render.frame;r[b.id]!==A&&(u(b),r[b.id]=A)}function h(b){const _=d();b.__bindingPointIndex=_;const v=i.createBuffer(),U=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const _=s[b.id],v=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=v.length;A<R;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,w=C.length;y<w;y++){const L=C[y];if(f(L,A,y,U)===!0){const B=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let nt=0;nt<F.length;nt++){const W=F[nt],at=x(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,v,U){const A=b.value,R=_+"_"+v;if(U[R]===void 0)return typeof A=="number"||typeof A=="boolean"?U[R]=A:U[R]=A.clone(),!0;{const C=U[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return U[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function m(b){const _=b.uniforms;let v=0;const U=16;for(let R=0,C=_.length;R<C;R++){const y=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,L=y.length;w<L;w++){const B=y[w],F=Array.isArray(B.value)?B.value:[B.value];for(let X=0,nt=F.length;X<nt;X++){const W=F[X],at=x(W),G=v%U,mt=G%at.boundary,bt=G+mt;v+=mt,bt!==0&&U-bt<at.storage&&(v+=U-bt),B.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=at.storage}}}const A=v%U;return A>0&&(v+=U-A),b.__size=v,b.__cache={},this}function x(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function g(b){const _=b.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class xg{constructor(t={}){const{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=ci,this.toneMappingExposure=1;const v=this;let U=!1,A=0,R=0,C=null,y=-1,w=null;const L=new Ue,B=new Ue;let F=null;const X=new le(0);let nt=0,W=e.width,at=e.height,G=1,mt=null,bt=null;const Et=new Ue(0,0,W,at),Bt=new Ue(0,0,W,at);let ie=!1;const Q=new ja;let ft=!1,pt=!1;const gt=new Ce,Pt=new Ce,jt=new S,$t=new Ue,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function dt(){return C===null?G:1}let P=n;function It(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",yt,!1),P===null){const k="webgl2";if(P=It(k,E),P===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ht,ot,vt,Yt,Dt,T,M,H,K,rt,et,Tt,lt,Ut,Kt,ut,At,Gt,Zt,Nt,Qt,Ht,ee,N;function St(){ht=new S0(P),ht.init(),Ht=new lg(P,ht),ot=new v0(P,ht,t,Ht),vt=new rg(P,ht),ot.reverseDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),Yt=new T0(P),Dt=new Wm,T=new ag(P,ht,vt,Dt,ot,Ht,Yt),M=new _0(v),H=new M0(v),K=new Du(P),ee=new m0(P,K),rt=new b0(P,K,Yt,ee),et=new C0(P,rt,K,Yt),Zt=new A0(P,ot,T),ut=new x0(Dt),Tt=new Gm(v,M,H,ht,ot,ee,ut),lt=new gg(v,Dt),Ut=new qm,Kt=new Jm(ht),Gt=new p0(v,M,H,vt,et,f,l),At=new ig(v,et,ot),N=new vg(P,Yt,ot,vt),Nt=new g0(P,ht,Yt),Qt=new E0(P,ht,Yt),Yt.programs=Tt.programs,v.capabilities=ot,v.extensions=ht,v.properties=Dt,v.renderLists=Ut,v.shadowMap=At,v.state=vt,v.info=Yt}St();const J=new pg(v,P);this.xr=J,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(W,at,!1))},this.getSize=function(E){return E.set(W,at)},this.setSize=function(E,k,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,at=k,e.width=Math.floor(E*G),e.height=Math.floor(k*G),j===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(W*G,at*G).floor()},this.setDrawingBufferSize=function(E,k,j){W=E,at=k,G=j,e.width=Math.floor(E*j),e.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,k,j,Z){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,k,j,Z),vt.viewport(L.copy(Et).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Bt)},this.setScissor=function(E,k,j,Z){E.isVector4?Bt.set(E.x,E.y,E.z,E.w):Bt.set(E,k,j,Z),vt.scissor(B.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){vt.setScissorTest(ie=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){bt=E},this.getClearColor=function(E){return E.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(E=!0,k=!0,j=!0){let Z=0;if(E){let z=!1;if(C!==null){const D=C.texture.format;z=D===Ya||D===qa||D===Xa}if(z){const D=C.texture.type,O=D===jn||D===bi||D===Vs||D===hs||D===Va||D===Ga,it=Gt.getClearColor(),Ct=Gt.getClearAlpha(),Vt=it.r,qt=it.g,kt=it.b;O?(m[0]=Vt,m[1]=qt,m[2]=kt,m[3]=Ct,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Vt,x[1]=qt,x[2]=kt,x[3]=Ct,P.clearBufferiv(P.COLOR,0,x))}else Z|=P.COLOR_BUFFER_BIT}k&&(Z|=P.DEPTH_BUFFER_BIT),j&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Ut.dispose(),Kt.dispose(),Dt.dispose(),M.dispose(),H.dispose(),et.dispose(),ee.dispose(),N.dispose(),Tt.dispose(),J.dispose(),J.removeEventListener("sessionstart",_e),J.removeEventListener("sessionend",Me),Pe.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const E=Yt.autoReset,k=At.enabled,j=At.autoUpdate,Z=At.needsUpdate,z=At.type;St(),Yt.autoReset=E,At.enabled=k,At.autoUpdate=j,At.needsUpdate=Z,At.type=z}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){const k=E.target;k.removeEventListener("dispose",Wt),fe(k)}function fe(E){oe(E),Dt.remove(E)}function oe(E){const k=Dt.get(E).programs;k!==void 0&&(k.forEach(function(j){Tt.releaseProgram(j)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,Z,z,D){k===null&&(k=Jt);const O=z.isMesh&&z.matrixWorld.determinant()<0,it=ve(E,k,j,Z,z);vt.setMaterial(Z,O);let Ct=j.index,Vt=1;if(Z.wireframe===!0){if(Ct=rt.getWireframeAttribute(j),Ct===void 0)return;Vt=2}const qt=j.drawRange,kt=j.attributes.position;let ce=qt.start*Vt,ae=(qt.start+qt.count)*Vt;D!==null&&(ce=Math.max(ce,D.start*Vt),ae=Math.min(ae,(D.start+D.count)*Vt)),Ct!==null?(ce=Math.max(ce,0),ae=Math.min(ae,Ct.count)):kt!=null&&(ce=Math.max(ce,0),ae=Math.min(ae,kt.count));const pe=ae-ce;if(pe<0||pe===1/0)return;ee.setup(z,Z,it,j,Ct);let ye,de=Nt;if(Ct!==null&&(ye=K.get(Ct),de=Qt,de.setIndex(ye)),z.isMesh)Z.wireframe===!0?(vt.setLineWidth(Z.wireframeLinewidth*dt()),de.setMode(P.LINES)):de.setMode(P.TRIANGLES);else if(z.isLine){let Xt=Z.linewidth;Xt===void 0&&(Xt=1),vt.setLineWidth(Xt*dt()),z.isLineSegments?de.setMode(P.LINES):z.isLineLoop?de.setMode(P.LINE_LOOP):de.setMode(P.LINE_STRIP)}else z.isPoints?de.setMode(P.POINTS):z.isSprite&&de.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)de.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Xt=z._multiDrawStarts,Ke=z._multiDrawCounts,Ae=z._multiDrawCount,wn=Ct?K.get(Ct).bytesPerElement:1,Ri=Dt.get(Z).currentProgram.getUniforms();for(let un=0;un<Ae;un++)Ri.setValue(P,"_gl_DrawID",un),de.render(Xt[un]/wn,Ke[un])}else if(z.isInstancedMesh)de.renderInstances(ce,pe,z.count);else if(j.isInstancedBufferGeometry){const Xt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ke=Math.min(j.instanceCount,Xt);de.renderInstances(ce,pe,Ke)}else de.render(ce,pe)};function q(E,k,j){E.transparent===!0&&E.side===Qe&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,ct(E,k,j),E.side=hi,E.needsUpdate=!0,ct(E,k,j),E.side=Qe):ct(E,k,j)}this.compile=function(E,k,j=null){j===null&&(j=E),p=Kt.get(j),p.init(k),_.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==j&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Z=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const D=z.material;if(D)if(Array.isArray(D))for(let O=0;O<D.length;O++){const it=D[O];q(it,j,z),Z.add(it)}else q(D,j,z),Z.add(D)}),_.pop(),p=null,Z},this.compileAsync=function(E,k,j=null){const Z=this.compile(E,k,j);return new Promise(z=>{function D(){if(Z.forEach(function(O){Dt.get(O).currentProgram.isReady()&&Z.delete(O)}),Z.size===0){z(E);return}setTimeout(D,10)}ht.get("KHR_parallel_shader_compile")!==null?D():setTimeout(D,10)})};let wt=null;function ne(E){wt&&wt(E)}function _e(){Pe.stop()}function Me(){Pe.start()}const Pe=new Eh;Pe.setAnimationLoop(ne),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(E){wt=E,J.setAnimationLoop(E),E===null?Pe.stop():Pe.start()},J.addEventListener("sessionstart",_e),J.addEventListener("sessionend",Me),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,C),p=Kt.get(E,_.length),p.init(k),_.push(p),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(Pt),pt=this.localClippingEnabled,ft=ut.init(this.clippingPlanes,pt),g=Ut.get(E,b.length),g.init(),b.push(g),J.enabled===!0&&J.isPresenting===!0){const D=v.xr.getDepthSensingMesh();D!==null&&Mt(D,k,-1/0,v.sortObjects)}Mt(E,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(mt,bt),st=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,st&&Gt.addToRenderList(g,E),this.info.render.frame++,ft===!0&&ut.beginShadows();const j=p.state.shadowsArray;At.render(j,E,k),ft===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,z=g.transmissive;if(p.setupLights(),k.isArrayCamera){const D=k.cameras;if(z.length>0)for(let O=0,it=D.length;O<it;O++){const Ct=D[O];be(Z,z,E,Ct)}st&&Gt.render(E);for(let O=0,it=D.length;O<it;O++){const Ct=D[O];re(g,E,Ct,Ct.viewport)}}else z.length>0&&be(Z,z,E,k),st&&Gt.render(E),re(g,E,k);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,k),ee.resetDefaultState(),y=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],ft===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Mt(E,k,j,Z){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){Z&&$t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const O=et.update(E),it=E.material;it.visible&&g.push(E,O,it,j,$t.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){const O=et.update(E),it=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$t.copy(E.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),$t.copy(O.boundingSphere.center)),$t.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(it)){const Ct=O.groups;for(let Vt=0,qt=Ct.length;Vt<qt;Vt++){const kt=Ct[Vt],ce=it[kt.materialIndex];ce&&ce.visible&&g.push(E,O,ce,j,$t.z,kt)}}else it.visible&&g.push(E,O,it,j,$t.z,null)}}const D=E.children;for(let O=0,it=D.length;O<it;O++)Mt(D[O],k,j,Z)}function re(E,k,j,Z){const z=E.opaque,D=E.transmissive,O=E.transparent;p.setupLightsView(j),ft===!0&&ut.setGlobalState(v.clippingPlanes,j),Z&&vt.viewport(L.copy(Z)),z.length>0&&ge(z,k,j),D.length>0&&ge(D,k,j),O.length>0&&ge(O,k,j),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function be(E,k,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Ei(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ys:jn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const D=p.state.transmissionRenderTarget[Z.id],O=Z.viewport||L;D.setSize(O.z,O.w);const it=v.getRenderTarget();v.setRenderTarget(D),v.getClearColor(X),nt=v.getClearAlpha(),nt<1&&v.setClearColor(16777215,.5),v.clear(),st&&Gt.render(j);const Ct=v.toneMapping;v.toneMapping=ci;const Vt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ft===!0&&ut.setGlobalState(v.clippingPlanes,Z),ge(E,j,Z),T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D),ht.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let kt=0,ce=k.length;kt<ce;kt++){const ae=k[kt],pe=ae.object,ye=ae.geometry,de=ae.material,Xt=ae.group;if(de.side===Qe&&pe.layers.test(Z.layers)){const Ke=de.side;de.side=tn,de.needsUpdate=!0,Fe(pe,j,Z,ye,de,Xt),de.side=Ke,de.needsUpdate=!0,qt=!0}}qt===!0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D))}v.setRenderTarget(it),v.setClearColor(X,nt),Vt!==void 0&&(Z.viewport=Vt),v.toneMapping=Ct}function ge(E,k,j){const Z=k.isScene===!0?k.overrideMaterial:null;for(let z=0,D=E.length;z<D;z++){const O=E[z],it=O.object,Ct=O.geometry,Vt=Z===null?O.material:Z,qt=O.group;it.layers.test(j.layers)&&Fe(it,k,j,Ct,Vt,qt)}}function Fe(E,k,j,Z,z,D){E.onBeforeRender(v,k,j,Z,z,D),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,k,j,Z,E,D),z.transparent===!0&&z.side===Qe&&z.forceSinglePass===!1?(z.side=tn,z.needsUpdate=!0,v.renderBufferDirect(j,k,Z,z,E,D),z.side=hi,z.needsUpdate=!0,v.renderBufferDirect(j,k,Z,z,E,D),z.side=Qe):v.renderBufferDirect(j,k,Z,z,E,D),E.onAfterRender(v,k,j,Z,z,D)}function ct(E,k,j){k.isScene!==!0&&(k=Jt);const Z=Dt.get(E),z=p.state.lights,D=p.state.shadowsArray,O=z.state.version,it=Tt.getParameters(E,z.state,D,k,j),Ct=Tt.getProgramCacheKey(it);let Vt=Z.programs;Z.environment=E.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(E.isMeshStandardMaterial?H:M).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Vt===void 0&&(E.addEventListener("dispose",Wt),Vt=new Map,Z.programs=Vt);let qt=Vt.get(Ct);if(qt!==void 0){if(Z.currentProgram===qt&&Z.lightsStateVersion===O)return zt(E,it),qt}else it.uniforms=Tt.getUniforms(E),E.onBeforeCompile(it,v),qt=Tt.acquireProgram(it,Ct),Vt.set(Ct,qt),Z.uniforms=it.uniforms;const kt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=ut.uniform),zt(E,it),Z.needsLights=dn(E),Z.lightsStateVersion=O,Z.needsLights&&(kt.ambientLightColor.value=z.state.ambient,kt.lightProbe.value=z.state.probe,kt.directionalLights.value=z.state.directional,kt.directionalLightShadows.value=z.state.directionalShadow,kt.spotLights.value=z.state.spot,kt.spotLightShadows.value=z.state.spotShadow,kt.rectAreaLights.value=z.state.rectArea,kt.ltc_1.value=z.state.rectAreaLTC1,kt.ltc_2.value=z.state.rectAreaLTC2,kt.pointLights.value=z.state.point,kt.pointLightShadows.value=z.state.pointShadow,kt.hemisphereLights.value=z.state.hemi,kt.directionalShadowMap.value=z.state.directionalShadowMap,kt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,kt.spotShadowMap.value=z.state.spotShadowMap,kt.spotLightMatrix.value=z.state.spotLightMatrix,kt.spotLightMap.value=z.state.spotLightMap,kt.pointShadowMap.value=z.state.pointShadowMap,kt.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=qt,Z.uniformsList=null,qt}function te(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=kr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function zt(E,k){const j=Dt.get(E);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function ve(E,k,j,Z,z){k.isScene!==!0&&(k=Jt),T.resetTextureUnits();const D=k.fog,O=Z.isMeshStandardMaterial?k.environment:null,it=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ps,Ct=(Z.isMeshStandardMaterial?H:M).get(Z.envMap||O),Vt=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),kt=!!j.morphAttributes.position,ce=!!j.morphAttributes.normal,ae=!!j.morphAttributes.color;let pe=ci;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=v.toneMapping);const ye=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,de=ye!==void 0?ye.length:0,Xt=Dt.get(Z),Ke=p.state.lights;if(ft===!0&&(pt===!0||E!==w)){const vn=E===w&&Z.id===y;ut.setState(Z,E,vn)}let Ae=!1;Z.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ke.state.version||Xt.outputColorSpace!==it||z.isBatchedMesh&&Xt.batching===!1||!z.isBatchedMesh&&Xt.batching===!0||z.isBatchedMesh&&Xt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Xt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Xt.instancing===!1||!z.isInstancedMesh&&Xt.instancing===!0||z.isSkinnedMesh&&Xt.skinning===!1||!z.isSkinnedMesh&&Xt.skinning===!0||z.isInstancedMesh&&Xt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Xt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Xt.instancingMorph===!1&&z.morphTexture!==null||Xt.envMap!==Ct||Z.fog===!0&&Xt.fog!==D||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ut.numPlanes||Xt.numIntersection!==ut.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==qt||Xt.morphTargets!==kt||Xt.morphNormals!==ce||Xt.morphColors!==ae||Xt.toneMapping!==pe||Xt.morphTargetsCount!==de)&&(Ae=!0):(Ae=!0,Xt.__version=Z.version);let wn=Xt.currentProgram;Ae===!0&&(wn=ct(Z,k,z));let Ri=!1,un=!1,vs=!1;const ke=wn.getUniforms(),Rn=Xt.uniforms;if(vt.useProgram(wn.program)&&(Ri=!0,un=!0,vs=!0),Z.id!==y&&(y=Z.id,un=!0),Ri||w!==E){vt.buffers.depth.getReversed()?(gt.copy(E.projectionMatrix),au(gt),lu(gt),ke.setValue(P,"projectionMatrix",gt)):ke.setValue(P,"projectionMatrix",E.projectionMatrix),ke.setValue(P,"viewMatrix",E.matrixWorldInverse);const Jn=ke.map.cameraPosition;Jn!==void 0&&Jn.setValue(P,jt.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&ke.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ke.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,un=!0,vs=!0)}if(z.isSkinnedMesh){ke.setOptional(P,z,"bindMatrix"),ke.setOptional(P,z,"bindMatrixInverse");const vn=z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),ke.setValue(P,"boneTexture",vn.boneTexture,T))}z.isBatchedMesh&&(ke.setOptional(P,z,"batchingTexture"),ke.setValue(P,"batchingTexture",z._matricesTexture,T),ke.setOptional(P,z,"batchingIdTexture"),ke.setValue(P,"batchingIdTexture",z._indirectTexture,T),ke.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&ke.setValue(P,"batchingColorTexture",z._colorsTexture,T));const xs=j.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Zt.update(z,j,wn),(un||Xt.receiveShadow!==z.receiveShadow)&&(Xt.receiveShadow=z.receiveShadow,ke.setValue(P,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Rn.envMap.value=Ct,Rn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(Rn.envMapIntensity.value=k.environmentIntensity),un&&(ke.setValue(P,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&Re(Rn,vs),D&&Z.fog===!0&&lt.refreshFogUniforms(Rn,D),lt.refreshMaterialUniforms(Rn,Z,G,at,p.state.transmissionRenderTarget[E.id]),kr.upload(P,te(Xt),Rn,T)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(kr.upload(P,te(Xt),Rn,T),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ke.setValue(P,"center",z.center),ke.setValue(P,"modelViewMatrix",z.modelViewMatrix),ke.setValue(P,"normalMatrix",z.normalMatrix),ke.setValue(P,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const vn=Z.uniformsGroups;for(let Jn=0,Qn=vn.length;Jn<Qn;Jn++){const dl=vn[Jn];N.update(dl,wn),N.bind(dl,wn)}}return wn}function Re(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function dn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,k,j){Dt.get(E.texture).__webglTexture=k,Dt.get(E.depthTexture).__webglTexture=j;const Z=Dt.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const j=Dt.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,j=0){C=E,A=k,R=j;let Z=!0,z=null,D=!1,O=!1;if(E){const Ct=Dt.get(E);if(Ct.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(P.FRAMEBUFFER,null),Z=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Ct.__hasExternalTextures)T.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const kt=E.depthTexture;if(Ct.__boundDepthTexture!==kt){if(kt!==null&&Dt.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Vt=E.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(O=!0);const qt=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[k])?z=qt[k][j]:z=qt[k],D=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?z=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?z=qt[j]:z=qt,L.copy(E.viewport),B.copy(E.scissor),F=E.scissorTest}else L.copy(Et).multiplyScalar(G).floor(),B.copy(Bt).multiplyScalar(G).floor(),F=ie;if(vt.bindFramebuffer(P.FRAMEBUFFER,z)&&Z&&vt.drawBuffers(E,z),vt.viewport(L),vt.scissor(B),vt.setScissorTest(F),D){const Ct=Dt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,j)}else if(O){const Ct=Dt.get(E.texture),Vt=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.__webglTexture,j||0,Vt)}y=-1},this.readRenderTargetPixels=function(E,k,j,Z,z,D,O){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&O!==void 0&&(it=it[O]),it){vt.bindFramebuffer(P.FRAMEBUFFER,it);try{const Ct=E.texture,Vt=Ct.format,qt=Ct.type;if(!ot.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Z&&j>=0&&j<=E.height-z&&P.readPixels(k,j,Z,z,Ht.convert(Vt),Ht.convert(qt),D)}finally{const Ct=C!==null?Dt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(E,k,j,Z,z,D,O){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&O!==void 0&&(it=it[O]),it){const Ct=E.texture,Vt=Ct.format,qt=Ct.type;if(!ot.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-Z&&j>=0&&j<=E.height-z){vt.bindFramebuffer(P.FRAMEBUFFER,it);const kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.bufferData(P.PIXEL_PACK_BUFFER,D.byteLength,P.STREAM_READ),P.readPixels(k,j,Z,z,Ht.convert(Vt),Ht.convert(qt),0);const ce=C!==null?Dt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,ce);const ae=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ou(P,ae,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,D),P.deleteBuffer(kt),P.deleteSync(ae),D}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,j=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const Z=Math.pow(2,-j),z=Math.floor(E.image.width*Z),D=Math.floor(E.image.height*Z),O=k!==null?k.x:0,it=k!==null?k.y:0;T.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,O,it,z,D),vt.unbindTexture()},this.copyTextureToTexture=function(E,k,j=null,Z=null,z=0){E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],k=arguments[2],z=arguments[3]||0,j=null);let D,O,it,Ct,Vt,qt,kt,ce,ae;const pe=E.isCompressedTexture?E.mipmaps[z]:E.image;j!==null?(D=j.max.x-j.min.x,O=j.max.y-j.min.y,it=j.isBox3?j.max.z-j.min.z:1,Ct=j.min.x,Vt=j.min.y,qt=j.isBox3?j.min.z:0):(D=pe.width,O=pe.height,it=pe.depth||1,Ct=0,Vt=0,qt=0),Z!==null?(kt=Z.x,ce=Z.y,ae=Z.z):(kt=0,ce=0,ae=0);const ye=Ht.convert(k.format),de=Ht.convert(k.type);let Xt;k.isData3DTexture?(T.setTexture3D(k,0),Xt=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Xt=P.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Xt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),Ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ri=P.getParameter(P.UNPACK_SKIP_ROWS),un=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ct),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qt);const vs=E.isDataArrayTexture||E.isData3DTexture,ke=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Rn=Dt.get(E),xs=Dt.get(k),vn=Dt.get(Rn.__renderTarget),Jn=Dt.get(xs.__renderTarget);vt.bindFramebuffer(P.READ_FRAMEBUFFER,vn.__webglFramebuffer),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Qn=0;Qn<it;Qn++)vs&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.get(E).__webglTexture,z,qt+Qn),E.isDepthTexture?(ke&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.get(k).__webglTexture,z,ae+Qn),P.blitFramebuffer(Ct,Vt,D,O,kt,ce,D,O,P.DEPTH_BUFFER_BIT,P.NEAREST)):ke?P.copyTexSubImage3D(Xt,z,kt,ce,ae+Qn,Ct,Vt,D,O):P.copyTexSubImage2D(Xt,z,kt,ce,ae+Qn,Ct,Vt,D,O);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ke?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Xt,z,kt,ce,ae,D,O,it,ye,de,pe.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Xt,z,kt,ce,ae,D,O,it,ye,pe.data):P.texSubImage3D(Xt,z,kt,ce,ae,D,O,it,ye,de,pe):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,kt,ce,D,O,ye,de,pe.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,kt,ce,pe.width,pe.height,ye,pe.data):P.texSubImage2D(P.TEXTURE_2D,z,kt,ce,D,O,ye,de,pe);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ri),P.pixelStorei(P.UNPACK_SKIP_IMAGES,un),z===0&&k.generateMipmaps&&P.generateMipmap(Xt),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,k,j=null,Z=null,z=0){return E.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,j,Z,z)},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,vt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}class jr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new jr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dh extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _g{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new S;class Br{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kr extends ui{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const Ss=new S,Xi=new S,qi=new S,Yi=new xt,bs=new xt,Ih=new Ce,gr=new S,Es=new S,vr=new S,dc=new xt,No=new xt,uc=new xt;class is extends Ge{constructor(t=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _g(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Br(n,3,0,!1)),Wi.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Ih.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;xr(gr.set(-.5,-.5,0),qi,o,Xi,s,r),xr(Es.set(.5,-.5,0),qi,o,Xi,s,r),xr(vr.set(.5,.5,0),qi,o,Xi,s,r),dc.set(0,0),No.set(1,0),uc.set(1,1);let a=t.ray.intersectTriangle(gr,Es,vr,!1,Ss);if(a===null&&(xr(Es.set(-.5,.5,0),qi,o,Xi,s,r),No.set(0,1),a=t.ray.intersectTriangle(gr,vr,Es,!1,Ss),a===null))return;const l=t.ray.origin.distanceTo(Ss);l<t.near||l>t.far||e.push({distance:l,point:Ss.clone(),uv:_n.getInterpolation(Ss,gr,Es,vr,dc,No,uc,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xr(i,t,e,n,s,r){Yi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(bs.x=r*Yi.x-s*Yi.y,bs.y=s*Yi.x+r*Yi.y):bs.copy(Yi),i.copy(t),i.x+=bs.x,i.y+=bs.y,i.applyMatrix4(Ih)}class yg extends en{constructor(t=null,e=1,n=1,s,r,o,a,l,c=mn,h=mn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new Ce,pc=new Ce,_r=[],mc=new Ai,wg=new Ce,Ts=new Y,As=new Ci;class ko extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),mc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),As.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),pc.multiplyMatrices(n,$i),Ts.matrixWorld=pc,Ts.raycast(t,_r);for(let o=0,a=_r.length;o<a;o++){const l=_r[o];l.instanceId=r,l.object=this,e.push(l)}_r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yg(new Float32Array(s*this.count),s,this.count,Wa,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Uh extends ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new S,Vr=new S,gc=new Ce,Cs=new $r,yr=new Ci,Oo=new S,vc=new S;class Mg extends Ge{constructor(t=new We,e=new Uh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Vr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;gc.copy(s).invert(),Cs.copy(t.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),b=h.getX(x+1),_=wr(this,t,Cs,l,p,b);_&&e.push(_)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=wr(this,t,Cs,l,x,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=wr(this,t,Cs,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=wr(this,t,Cs,l,m-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Vr,Oo,vc)>n)return;Oo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Oo);if(!(l<t.near||l>t.far))return{distance:l,point:vc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Nh extends ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xc=new Ce,Da=new $r,Mr=new Ci,Sr=new S;class Sg extends Ge{constructor(t=new We,e=new Nh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;xc.copy(s).invert(),Da.copy(t.ray).applyMatrix4(xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){const g=c.getX(m);Sr.fromBufferAttribute(d,g),_c(Sr,g,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Sr.fromBufferAttribute(d,m),_c(Sr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _c(i,t,e,n,s,r,o){const a=Da.distanceSqToPoint(i);if(a<e){const l=new S;Da.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ja extends en{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new S,s=[],r=[],o=[],a=new S,l=new Ce;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qa extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bg extends Qa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const br=new S,Fo=new tl,zo=new tl,Bo=new tl;class kh extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(br.subVectors(s[0],s[1]).add(s[0]),c=br);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(br.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=br),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Fo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,g),zo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,g),Bo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Bo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Fo.calc(l),zo.calc(l),Bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Eg(i,t){const e=1-i;return e*e*t}function Tg(i,t){return 2*(1-i)*i*t}function Ag(i,t){return i*i*t}function ks(i,t,e,n){return Eg(i,t)+Tg(i,e)+Ag(i,n)}function Cg(i,t){const e=1-i;return e*e*e*t}function Rg(i,t){const e=1-i;return 3*e*e*i*t}function Pg(i,t){return 3*(1-i)*i*i*t}function Lg(i,t){return i*i*i*t}function Os(i,t,e,n,s){return Cg(i,t)+Rg(i,e)+Pg(i,n)+Lg(i,s)}class Oh extends Nn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dg extends Nn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y),Os(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fh extends Nn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends Nn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends Nn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Nn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y),ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(yc(a,l.x,c.x,h.x,d.x),yc(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var Gr=Object.freeze({__proto__:null,ArcCurve:bg,CatmullRomCurve3:kh,CubicBezierCurve:Oh,CubicBezierCurve3:Dg,EllipseCurve:Qa,LineCurve:Fh,LineCurve3:Ig,QuadraticBezierCurve:zh,QuadraticBezierCurve3:Bh,SplineCurve:Hh});class Ug extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Gr[s.type]().fromJSON(s))}return this}}class Ia extends Ug{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fh(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zh(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Oh(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Qa(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class el extends We{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=je(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new S,u=new xt,f=new S,m=new S,x=new S;let g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let b=0;b<=e;b++){const _=n+b*h*s,v=Math.sin(_),U=Math.cos(_);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*v,d.y=t[A].y,d.z=t[A].x*U,o.push(d.x,d.y,d.z),u.x=b/e,u.y=A/(t.length-1),a.push(u.x,u.y);const R=l[3*A+0]*v,C=l[3*A+1],y=l[3*A+0]*U;c.push(R,C,y)}}for(let b=0;b<e;b++)for(let _=0;_<t.length-1;_++){const v=_+b*t.length,U=v,A=v+t.length,R=v+t.length+1,C=v+1;r.push(U,A,C),r.push(R,C,A)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.points,t.segments,t.phiStart,t.phiLength)}}class Fs extends el{constructor(t=1,e=1,n=4,s=8){const r=new Ia;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Fs(t.radius,t.length,t.capSegments,t.radialSegments)}}class Yn extends We{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new S,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qe extends We{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const x=[],g=n/2;let p=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function b(){const v=new S,U=new S;let A=0;const R=(e-t)/n;for(let C=0;C<=r;C++){const y=[],w=C/r,L=w*(e-t)+t;for(let B=0;B<=s;B++){const F=B/s,X=F*l+a,nt=Math.sin(X),W=Math.cos(X);U.x=L*nt,U.y=-w*n+g,U.z=L*W,d.push(U.x,U.y,U.z),v.set(nt,R,W).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-w),y.push(m++)}x.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const w=x[y][C],L=x[y+1][C],B=x[y+1][C+1],F=x[y][C+1];(t>0||y!==0)&&(h.push(w,L,F),A+=3),(e>0||y!==r-1)&&(h.push(L,B,F),A+=3)}c.addGroup(p,A,0),p+=A}function _(v){const U=m,A=new xt,R=new S;let C=0;const y=v===!0?t:e,w=v===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,g*w,0),u.push(0,w,0),f.push(.5,.5),m++;const L=m;for(let B=0;B<=s;B++){const X=B/s*l+a,nt=Math.cos(X),W=Math.sin(X);R.x=y*W,R.y=g*w,R.z=y*nt,d.push(R.x,R.y,R.z),u.push(0,w,0),A.x=nt*.5+.5,A.y=W*.5*w+.5,f.push(A.x,A.y),m++}for(let B=0;B<s;B++){const F=U+B,X=L+B;v===!0?h.push(X,X+1,F):h.push(X+1,X,F),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zs extends qe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jr extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const _=new S,v=new S,U=new S;for(let A=0;A<e.length;A+=3)f(e[A+0],_),f(e[A+1],v),f(e[A+2],U),l(_,v,U,b)}function l(b,_,v,U){const A=U+1,R=[];for(let C=0;C<=A;C++){R[C]=[];const y=b.clone().lerp(v,C/A),w=_.clone().lerp(v,C/A),L=A-C;for(let B=0;B<=L;B++)B===0&&C===A?R[C][B]=y:R[C][B]=y.clone().lerp(w,B/L)}for(let C=0;C<A;C++)for(let y=0;y<2*(A-C)-1;y++){const w=Math.floor(y/2);y%2===0?(u(R[C][w+1]),u(R[C+1][w]),u(R[C][w])):(u(R[C][w+1]),u(R[C+1][w+1]),u(R[C+1][w]))}}function c(b){const _=new S;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(b),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const b=new S;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];const v=g(b)/2/Math.PI+.5,U=p(b)/Math.PI+.5;o.push(v,1-U)}m(),d()}function d(){for(let b=0;b<o.length;b+=6){const _=o[b+0],v=o[b+2],U=o[b+4],A=Math.max(_,v,U),R=Math.min(_,v,U);A>.9&&R<.1&&(_<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,_){const v=b*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){const b=new S,_=new S,v=new S,U=new S,A=new xt,R=new xt,C=new xt;for(let y=0,w=0;y<r.length;y+=9,w+=6){b.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),A.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),C.set(o[w+4],o[w+5]),U.copy(b).add(_).add(v).divideScalar(3);const L=g(U);x(A,w+0,b,L),x(R,w+2,_,L),x(C,w+4,v,L)}}function x(b,_,v,U){U<0&&b.x===1&&(o[_]=b.x-1),v.x===0&&v.z===0&&(o[_]=U/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.vertices,t.indices,t.radius,t.details)}}class nl extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nl(t.radius,t.detail)}}class Vh extends Ia{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ia().fromJSON(s))}return this}}const Ng={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Gh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=Bg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)d=i[m],u=i[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ws(r,o,e,a,l,f,0),o}};function Gh(i,t,e,n,s){let r,o;if(s===Kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=wc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=wc(r,i[r],i[r+1],o);return o&&Qr(o,o.next)&&(qs(o),o=o.next),o}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qr(e,e.next)||He(e.prev,e,e.next)===0)){if(qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Og(i,n,s,r):kg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),qs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Fg(Ti(i),t,e),Ws(i,t,e,n,s,r,2)):o===2&&zg(i,t,e,n,s,r):Ws(Ti(i),t,e,n,s,r,1);break}}}function kg(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Qi(s,a,r,l,o,c,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Og(i,t,e,n){const s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,x=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,p=Ua(f,m,t,e,n),b=Ua(x,g,t,e,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Qi(a,h,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Qi(a,h,l,d,c,u,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Qi(a,h,l,d,c,u,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Qi(a,h,l,d,c,u,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Fg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Qr(s,r)&&Wh(s,n,n.next,r)&&Xs(s,r)&&Xs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qs(n),qs(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function zg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$g(o,a)){let l=Xh(o,a);o=Ti(o,o.next),l=Ti(l,l.next),Ws(o,t,e,n,s,r,0),Ws(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bg(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Gh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Yg(c));for(s.sort(Hg),r=0;r<s.length;r++)e=Vg(s[r],e);return e}function Hg(i,t){return i.x-t.x}function Vg(i,t){const e=Gg(i,t);if(!e)return t;const n=Xh(e,i);return Ti(n,n.next),Ti(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Qi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Xs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Wg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Wg(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function Xg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ua(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qg(s)}function qg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ua(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $g(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zg(i,t)&&(Xs(i,t)&&Xs(t,i)&&jg(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Qr(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qr(i,t){return i.x===t.x&&i.y===t.y}function Wh(i,t,e,n){const s=Tr(He(i,t,e)),r=Tr(He(i,t,n)),o=Tr(He(e,n,i)),a=Tr(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Er(i,e,t)||r===0&&Er(i,n,t)||o===0&&Er(e,i,n)||a===0&&Er(e,t,n))}function Er(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Tr(i){return i>0?1:i<0?-1:0}function Zg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xs(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function jg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xh(i,t){const e=new Na(i.i,i.x,i.y),n=new Na(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wc(i,t,e,n){const s=new Na(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Na(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Bs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Bs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Mc(t),Sc(n,t);let o=t.length;e.forEach(Mc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sc(n,e[l]);const a=Ng.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Mc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class il extends We{constructor(t=new Vh([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Jg;let _,v=!1,U,A,R,C;p&&(_=p.getSpacedPoints(h),v=!0,u=!1,U=p.computeFrenetFrames(h,!1),A=new S,R=new S,C=new S),u||(g=0,f=0,m=0,x=0);const y=a.extractPoints(c);let w=y.shape;const L=y.holes;if(!Bs.isClockWise(w)){w=w.reverse();for(let st=0,dt=L.length;st<dt;st++){const P=L[st];Bs.isClockWise(P)&&(L[st]=P.reverse())}}const F=Bs.triangulateShape(w,L),X=w;for(let st=0,dt=L.length;st<dt;st++){const P=L[st];w=w.concat(P)}function nt(st,dt,P){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(dt,P)}const W=w.length,at=F.length;function G(st,dt,P){let It,ht,ot;const vt=st.x-dt.x,Yt=st.y-dt.y,Dt=P.x-st.x,T=P.y-st.y,M=vt*vt+Yt*Yt,H=vt*T-Yt*Dt;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(M),rt=Math.sqrt(Dt*Dt+T*T),et=dt.x-Yt/K,Tt=dt.y+vt/K,lt=P.x-T/rt,Ut=P.y+Dt/rt,Kt=((lt-et)*T-(Ut-Tt)*Dt)/(vt*T-Yt*Dt);It=et+vt*Kt-st.x,ht=Tt+Yt*Kt-st.y;const ut=It*It+ht*ht;if(ut<=2)return new xt(It,ht);ot=Math.sqrt(ut/2)}else{let K=!1;vt>Number.EPSILON?Dt>Number.EPSILON&&(K=!0):vt<-Number.EPSILON?Dt<-Number.EPSILON&&(K=!0):Math.sign(Yt)===Math.sign(T)&&(K=!0),K?(It=-Yt,ht=vt,ot=Math.sqrt(M)):(It=vt,ht=Yt,ot=Math.sqrt(M/2))}return new xt(It/ot,ht/ot)}const mt=[];for(let st=0,dt=X.length,P=dt-1,It=st+1;st<dt;st++,P++,It++)P===dt&&(P=0),It===dt&&(It=0),mt[st]=G(X[st],X[P],X[It]);const bt=[];let Et,Bt=mt.concat();for(let st=0,dt=L.length;st<dt;st++){const P=L[st];Et=[];for(let It=0,ht=P.length,ot=ht-1,vt=It+1;It<ht;It++,ot++,vt++)ot===ht&&(ot=0),vt===ht&&(vt=0),Et[It]=G(P[It],P[ot],P[vt]);bt.push(Et),Bt=Bt.concat(Et)}for(let st=0;st<g;st++){const dt=st/g,P=f*Math.cos(dt*Math.PI/2),It=m*Math.sin(dt*Math.PI/2)+x;for(let ht=0,ot=X.length;ht<ot;ht++){const vt=nt(X[ht],mt[ht],It);gt(vt.x,vt.y,-P)}for(let ht=0,ot=L.length;ht<ot;ht++){const vt=L[ht];Et=bt[ht];for(let Yt=0,Dt=vt.length;Yt<Dt;Yt++){const T=nt(vt[Yt],Et[Yt],It);gt(T.x,T.y,-P)}}}const ie=m+x;for(let st=0;st<W;st++){const dt=u?nt(w[st],Bt[st],ie):w[st];v?(R.copy(U.normals[0]).multiplyScalar(dt.x),A.copy(U.binormals[0]).multiplyScalar(dt.y),C.copy(_[0]).add(R).add(A),gt(C.x,C.y,C.z)):gt(dt.x,dt.y,0)}for(let st=1;st<=h;st++)for(let dt=0;dt<W;dt++){const P=u?nt(w[dt],Bt[dt],ie):w[dt];v?(R.copy(U.normals[st]).multiplyScalar(P.x),A.copy(U.binormals[st]).multiplyScalar(P.y),C.copy(_[st]).add(R).add(A),gt(C.x,C.y,C.z)):gt(P.x,P.y,d/h*st)}for(let st=g-1;st>=0;st--){const dt=st/g,P=f*Math.cos(dt*Math.PI/2),It=m*Math.sin(dt*Math.PI/2)+x;for(let ht=0,ot=X.length;ht<ot;ht++){const vt=nt(X[ht],mt[ht],It);gt(vt.x,vt.y,d+P)}for(let ht=0,ot=L.length;ht<ot;ht++){const vt=L[ht];Et=bt[ht];for(let Yt=0,Dt=vt.length;Yt<Dt;Yt++){const T=nt(vt[Yt],Et[Yt],It);v?gt(T.x,T.y+_[h-1].y,_[h-1].x+P):gt(T.x,T.y,d+P)}}}Q(),ft();function Q(){const st=s.length/3;if(u){let dt=0,P=W*dt;for(let It=0;It<at;It++){const ht=F[It];Pt(ht[2]+P,ht[1]+P,ht[0]+P)}dt=h+g*2,P=W*dt;for(let It=0;It<at;It++){const ht=F[It];Pt(ht[0]+P,ht[1]+P,ht[2]+P)}}else{for(let dt=0;dt<at;dt++){const P=F[dt];Pt(P[2],P[1],P[0])}for(let dt=0;dt<at;dt++){const P=F[dt];Pt(P[0]+W*h,P[1]+W*h,P[2]+W*h)}}n.addGroup(st,s.length/3-st,0)}function ft(){const st=s.length/3;let dt=0;pt(X,dt),dt+=X.length;for(let P=0,It=L.length;P<It;P++){const ht=L[P];pt(ht,dt),dt+=ht.length}n.addGroup(st,s.length/3-st,1)}function pt(st,dt){let P=st.length;for(;--P>=0;){const It=P;let ht=P-1;ht<0&&(ht=st.length-1);for(let ot=0,vt=h+g*2;ot<vt;ot++){const Yt=W*ot,Dt=W*(ot+1),T=dt+It+Yt,M=dt+ht+Yt,H=dt+ht+Dt,K=dt+It+Dt;jt(T,M,H,K)}}}function gt(st,dt,P){l.push(st),l.push(dt),l.push(P)}function Pt(st,dt,P){$t(st),$t(dt),$t(P);const It=s.length/3,ht=b.generateTopUV(n,s,It-3,It-2,It-1);Jt(ht[0]),Jt(ht[1]),Jt(ht[2])}function jt(st,dt,P,It){$t(st),$t(dt),$t(It),$t(dt),$t(P),$t(It);const ht=s.length/3,ot=b.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);Jt(ot[0]),Jt(ot[1]),Jt(ot[3]),Jt(ot[1]),Jt(ot[2]),Jt(ot[3])}function $t(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Jt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gr[s.type]().fromJSON(s)),new il(n,t.options)}}const Jg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-d),new xt(u,1-m),new xt(x,1-p)]:[new xt(a,1-l),new xt(h,1-d),new xt(f,1-m),new xt(g,1-p)]}};function Qg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sl extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sl(t.radius,t.detail)}}class to extends We{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new S,m=new xt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<s;x++){const g=x*(n+1);for(let p=0;p<n;p++){const b=p+g,_=b,v=b+n+1,U=b+n+2,A=b+1;a.push(_,v,A),a.push(v,U,A)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Be extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new S,u=new S,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const b=[],_=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const A=U/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(A+v,1-_),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const _=h[p][b+1],v=h[p][b],U=h[p+1][b],A=h[p+1][b+1];(p!==0||o>0)&&f.push(_,v,A),(p!==n-1||l<Math.PI)&&f.push(v,U,A)}this.setIndex(f),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $n extends We{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new S,d=new S,u=new S;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const x=m/s*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,b=(s+1)*f+m;o.push(x,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rl extends We{constructor(t=new Bh(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new xt;let h=new S;const d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function x(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),b(),p()}function g(_){h=t.getPointAt(_/e,h);const v=o.normals[_],U=o.binormals[_];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,C=Math.sin(R),y=-Math.cos(R);l.x=y*v.x+C*U.x,l.y=y*v.y+C*U.y,l.z=y*v.z+C*U.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){const U=(s+1)*(_-1)+(v-1),A=(s+1)*_+(v-1),R=(s+1)*_+v,C=(s+1)*(_-1)+v;m.push(U,A,C),m.push(A,R,C)}}function b(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new rl(new Gr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Rt extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const bc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class tv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const ev=new tv;class ol{constructor(t){this.manager=t!==void 0?t:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ol.DEFAULT_MATERIAL_NAME="__DEFAULT";class nv extends ol{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=bc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Gs("img");function l(){h(),bc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class iv extends ol{constructor(t){super(t)}load(t,e,n,s){const r=new en,o=new nv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class eo extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class no extends eo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ho=new Ce,Ec=new S,Tc=new S;class al{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ec),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sv extends al{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=us*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class rv extends eo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ac=new Ce,Rs=new S,Vo=new S;class ov extends al{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rs),Vo.copy(n.position),Vo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vo),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac)}}class Zn extends eo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ov}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class av extends al{constructor(){super(new Th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class io extends eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new av}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cc(){return performance.now()}const Rc=new Ce;class qh{constructor(t,e,n=0,s=1/0){this.ray=new $r(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rc),this}intersectObject(t,e=!0,n=[]){return ka(t,this,n,e),n.sort(Pc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ka(t[s],this,n,e);return n.sort(Pc),n}}function Pc(i,t){return i.distance-t.distance}function ka(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ka(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);class cv extends Dh{constructor(){super();const t=new De;t.deleteAttribute("uv");const e=new Rt({side:tn}),n=new Rt,s=new Zn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Y(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Y(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Y(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Y(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Y(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Y(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new Y(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const u=new Y(t,Zi(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const f=new Y(t,Zi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const m=new Y(t,Zi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const x=new Y(t,Zi(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new Y(t,Zi(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new Y(t,Zi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Zi(i){const t=new me;return t.color.setScalar(i),t}const Gn=1.65;class Lc extends EventTarget{constructor(t){super();const e=this.renderer=new xg({canvas:t,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=Je,e.toneMapping=ih,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=eh,e.shadowMap.autoUpdate=!1,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),this.scene=new Dh,this.scene.background=new le(1713459),this.scene.fog=new jr(2766146,22,48);const n=new Pa(e);this.scene.environment=n.fromScene(new cv,.04).texture,this.scene.environmentIntensity=.35,this.camera=new ln(70,window.innerWidth/window.innerHeight,.05,120),this.rig=new Ft,this.rig.add(this.camera),this.camera.position.set(0,Gn,0),this.scene.add(this.rig),this.clock=new lv,this.time=0,this.updaters=new Set,this.tweens=new Set,window.addEventListener("resize",()=>this.resize()),e.xr.addEventListener("sessionstart",()=>this.dispatchEvent(new Event("vrstart"))),e.xr.addEventListener("sessionend",()=>{this.camera.position.set(0,Gn,0),this.dispatchEvent(new Event("vrend"))}),e.setAnimationLoop(()=>this.frame())}get isVR(){return this.renderer.xr.isPresenting}resize(){this.isVR||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight,!1))}shadowsDirty(){this.renderer.shadowMap.needsUpdate=!0}tween(t,e){return new Promise(n=>{const s={t:0,duration:t,fn:e,resolve:n};this.tweens.add(s)})}frame(){const t=Math.min(this.clock.getDelta(),.1);this.time+=t;for(const e of this.tweens){e.t+=t;const n=Math.min(1,e.t/e.duration);e.fn(n),n>=1&&(this.tweens.delete(e),e.resolve())}for(const e of this.updaters)e(t,this.time);this.renderer.render(this.scene,this.camera)}static async vrSupported(){try{return!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr"))}catch{return!1}}async enterVR(){const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});return await this.renderer.xr.setSession(t),t}exitVR(){const t=this.renderer.xr.getSession();t&&t.end()}}const hv=new S(0,1,0);class dv extends EventTarget{constructor(t){super(),this.engine=t,this.canvas=t.renderer.domElement,this.raycaster=new qh,this.raycaster.far=40,this.world=null,this.uiMeshes=new Set,this.modal=!1,this.locked=!0,this.yaw=0,this.pitch=-.08,this.keys=new Set,this.walkTarget=null,this.hovered=new Map,this.onSelect=null,this._bindPointer(),this._bindKeys(),this._setupXR(),t.updaters.add(e=>this._update(e)),t.addEventListener("vrend",()=>this._applyLook())}setWorld(t){this.world=t,this.yaw=t.spawn.yaw,this.pitch=-.08,this.engine.rig.position.copy(t.spawn.position),this.engine.rig.rotation.set(0,this.yaw,0),this._applyLook(),this.walkTarget=null}_targets(){const t=[...this.uiMeshes].filter(e=>e.visible&&e.parent);if(this.modal||!this.world)return t;for(const e of Object.values(this.world.interactables))e.done||t.push(e.hit);return t.push(...this.world.floors,...this.world.blockers),t}_pick(){const t=this.raycaster.intersectObjects(this._targets(),!0);for(const e of t){let n=e.object;return n.userData.panel?{kind:"ui",panel:n.userData.panel,uv:e.uv,point:e.point,distance:e.distance}:n.userData.interactable?{kind:"item",item:n.userData.interactable,point:e.point,distance:e.distance}:this.world&&this.world.floors.includes(n)?{kind:"floor",point:e.point,distance:e.distance}:{kind:"block",point:e.point,distance:e.distance}}return null}_setHover(t,e){const n=this.hovered.get(t)||null;if(n===e)return;this.hovered.set(t,e);const s=new Set(this.hovered.values());n&&!s.has(n)&&n.setHighlight(!1),e&&e.setHighlight(!0),t==="mouse"&&(this.canvas.style.cursor=e?"pointer":"grab")}clearHover(){for(const t of this.hovered.values())t&&t.setHighlight(!1);this.hovered.clear(),this.dispatchEvent(new CustomEvent("hover",{detail:null}))}_bindPointer(){const t=this.canvas,e=new xt;let n=null;const s=o=>{const a=t.getBoundingClientRect();return e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-a.top)/a.height)*2+1),e};t.addEventListener("pointerdown",o=>{this.engine.isVR||n||(n={id:o.pointerId,x:o.clientX,y:o.clientY,lx:o.clientX,ly:o.clientY,moved:!1,type:o.pointerType},t.setPointerCapture(o.pointerId),o.pointerType==="mouse"&&(t.style.cursor="grabbing"))}),t.addEventListener("pointermove",o=>{if(this.engine.isVR)return;if(n&&o.pointerId===n.id){const c=o.clientX-n.lx,h=o.clientY-n.ly;if(n.lx=o.clientX,n.ly=o.clientY,Math.hypot(o.clientX-n.x,o.clientY-n.y)>7&&(n.moved=!0),n.moved&&!this.locked&&!this.modal){const d=n.type==="touch"?.006:.004;this.yaw+=c*d,this.pitch=Vn.clamp(this.pitch+h*d,-1.25,1.25),this._applyLook()}return}if(o.pointerType!=="mouse"||this.locked||this.modal)return;this.raycaster.setFromCamera(s(o),this.engine.camera);const a=this._pick(),l=a&&a.kind==="item"?a.item:null;this._setHover("mouse",l),this.dispatchEvent(new CustomEvent("hover",{detail:l?{item:l,x:o.clientX,y:o.clientY}:null}))});const r=o=>{if(!n||o.pointerId!==n.id)return;const a=!n.moved;n=null,t.style.cursor="grab",!(!a||this.locked||this.modal||o.type==="pointercancel")&&(this.raycaster.setFromCamera(s(o),this.engine.camera),this._activate(this._pick(),"mouse"))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("contextmenu",o=>o.preventDefault())}_bindKeys(){window.addEventListener("keydown",t=>{t.target&&/input|textarea/i.test(t.target.tagName)||this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear())}_applyLook(){this.engine.isVR||(this.engine.rig.rotation.set(0,this.yaw,0),this.engine.camera.position.set(0,Gn,0),this.engine.camera.rotation.set(this.pitch,0,0))}_activate(t,e){if(t){if(t.kind==="ui"){t.panel.click(t.uv);return}if(!(this.modal||this.locked)){if(t.kind==="item"){this.walkTarget=null,this.onSelect&&this.onSelect(t.item);return}t.kind==="floor"&&(this.engine.isVR?this.teleport(t.point):this.walkTarget=this._clamp(t.point.clone()))}}}_clamp(t){const e=this.world.bounds;return t.x=Vn.clamp(t.x,e.minX,e.maxX),t.z=Vn.clamp(t.z,e.minZ,e.maxZ),t.y=this.world.floorY||0,t}teleport(t){const e=this.engine.rig,n=new S;this.engine.camera.getWorldPosition(n),e.position.x+=t.x-n.x,e.position.z+=t.z-n.z,this._clamp(e.position)}snapTurn(t){const e=this.engine.rig,n=new S;this.engine.camera.getWorldPosition(n),e.position.sub(n).applyAxisAngle(hv,t).add(n),e.rotation.y+=t}_setupXR(){const t=this.engine.renderer.xr;this.controllers=[];const e=new We().setFromPoints([new S(0,0,0),new S(0,0,-1)]),n=new Uh({color:16739072,transparent:!0,opacity:.9}),s=new Be(.012,10,8),r=new me({color:16777215});for(let a=0;a<2;a++){const l=t.getController(a),c=new Mg(e,n);c.scale.z=3;const h=new Y(s,r);h.position.z=-3,l.add(c,h),l.userData={line:c,dot:h,source:null,turnLatched:!1},l.addEventListener("connected",d=>{l.userData.source=d.data,l.userData.handedness=d.data.handedness,l.visible=d.data.targetRayMode!=="gaze",this.dispatchEvent(new CustomEvent("controller",{detail:{controller:l,grip:o[a],handedness:d.data.handedness}}))}),l.addEventListener("disconnected",()=>{l.userData.source=null,this._setHover(l,null)}),l.addEventListener("select",()=>{this.raycaster.setFromXRController(l),this._activate(this._pick(),l)}),this.engine.rig.add(l),this.controllers.push(l)}const o=[0,1].map(a=>{const l=t.getControllerGrip(a),c=new Y(new qe(.018,.024,.12,12),new Rt({color:9552,roughness:.5}));return c.rotation.x=Math.PI/2,c.position.z=.03,l.add(c),this.engine.rig.add(l),l});this.controllers.forEach((a,l)=>{a.userData.grip=o[l]}),this.reticle=new Y(new to(.16,.22,32).rotateX(-Math.PI/2),new me({color:16739072,transparent:!0,opacity:.85,depthWrite:!1})),this.reticle.visible=!1,this.engine.scene.add(this.reticle)}_updateXR(){let t=!1;for(const e of this.controllers){if(!e.userData.source)continue;this.raycaster.setFromXRController(e);const n=this._pick(),s=n?n.distance:3;if(e.userData.line.scale.z=s,e.userData.dot.position.z=-s,this._setHover(e,n&&n.kind==="item"?n.item:null),n&&n.kind==="ui")n.panel.hover(n.uv,e);else for(const o of this.uiMeshes)o.userData.panel.hover(null,e);n&&n.kind==="floor"&&!this.modal&&!this.locked&&!t&&(this.reticle.position.set(n.point.x,.01,n.point.z),t=!0);const r=e.userData.source.gamepad;if(r&&!this.locked){const o=r.axes.length>=4?r.axes[2]:r.axes[0]||0;Math.abs(o)>.7&&!e.userData.turnLatched?(this.snapTurn(-Math.sign(o)*(Math.PI/6)),e.userData.turnLatched=!0):Math.abs(o)<.3&&(e.userData.turnLatched=!1)}}this.reticle.visible=t}_update(t){if(this.engine.isVR){this._updateXR();return}if(this.reticle.visible=!1,this.locked||this.modal||!this.world)return;const e=this.keys,n=(e.has("ArrowLeft")?1:0)-(e.has("ArrowRight")?1:0);n&&(this.yaw+=n*1.8*t,this._applyLook());const s=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),r=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),o=this.engine.rig;if(s||r){this.walkTarget=null;const a=(e.has("ShiftLeft")?3.2:1.8)*t,l=Math.sin(this.yaw),c=Math.cos(this.yaw);o.position.x+=(-l*s+c*r)*a,o.position.z+=(-c*s-l*r)*a,this._clamp(o.position)}else if(this.walkTarget){const a=new S().subVectors(this.walkTarget,o.position);a.y=0;const l=a.length();l<.05?this.walkTarget=null:o.position.addScaledVector(a.normalize(),Math.min(l,2.6*t))}}}const Oe={navy:"#002550",orange:"#ff6b00",grey:"#e4ebef",ok:"#1f9d55",bad:"#c0392b",okBg:"#e7f6ee",badBg:"#fbeceb",softOrange:"#fff3ec"},En={head:i=>`900 ${i}px Gilroy, Arial, sans-serif`,body:i=>`500 ${i}px Gilroy, Arial, sans-serif`,mono:i=>`400 ${i}px "PP Supply Mono", "Courier New", monospace`};function Ps(i,t,e){const n=String(t).split(/\s+/),s=[];let r="";for(const o of n){const a=r?r+" "+o:o;i.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Ls(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}class Yh{constructor({widthM:t=1,px:e=1024,maxH:n=1800,compact:s=!1}={}){this.px=e,this.maxH=n,this.widthM=t,this.compact=s,this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=n,this.ctx=this.canvas.getContext("2d"),this.texture=new Ja(this.canvas),this.texture.colorSpace=Je,this.texture.anisotropy=4,this.mesh=new Y(new se(1,1),new me({map:this.texture,transparent:!0,depthTest:!1,toneMapped:!1})),this.mesh.renderOrder=1e3,this.mesh.userData.panel=this,this.rects=[],this.hoverBy=new Map,this.spec=null,this.usedH=100}render(t){this.spec=t,this._draw()}_draw(){const t=this.spec;if(!t)return;const e=this.ctx,n=this.px,s=this.compact?36:56,r=n-s*2,o=this.compact?1.25:1,a=new Set(this.hoverBy.values());e.clearRect(0,0,n,this.maxH),this.rects=[];const l=c=>{let h=0;if(c&&(e.fillStyle="#ffffff",Ls(e,0,0,n,this.usedH,36),e.fill(),e.save(),Ls(e,0,0,n,this.usedH,36),e.clip(),e.fillStyle=Oe.orange,e.fillRect(0,0,n,16),e.restore()),h=16+(this.compact?26:44),e.textBaseline="top",t.kicker&&(e.font=En.mono(24*o),e.fillStyle=Oe.orange,c&&e.fillText(String(t.kicker).toUpperCase(),s,h),h+=40*o),t.title){e.font=En.head(46*o),e.fillStyle=Oe.navy;for(const u of Ps(e,String(t.title).toUpperCase(),r))c&&e.fillText(u,s,h),h+=52*o;h+=12}const d=[].concat(t.body||[]);e.font=En.body(30*o),e.fillStyle=Oe.navy;for(const u of d){for(const f of Ps(e,u,r))c&&e.fillText(f,s,h),h+=40*o;h+=14}if(t.options&&(h+=6,t.options.forEach((u,f)=>{e.font=En.body(28);const m=Ps(e,u.text,r-110),x=Math.max(84,m.length*36+44),g="opt"+f;if(c){const p=a.has(g)&&!u.disabled;e.fillStyle=u.state==="correct"?Oe.okBg:u.state==="wrong"?Oe.badBg:p?Oe.softOrange:Oe.grey,Ls(e,s,h,r,x,22),e.fill();const b=u.state==="correct"?Oe.ok:u.state==="wrong"?Oe.bad:p?Oe.orange:null;b&&(e.lineWidth=5,e.strokeStyle=b,e.stroke()),e.font=En.mono(u.mark?22:30),e.fillStyle=u.state==="correct"?Oe.ok:Oe.orange,e.fillText(u.mark??String.fromCharCode(65+f),s+(u.mark?18:30),h+(u.mark?28:24)),e.font=En.body(28),e.fillStyle=Oe.navy,m.forEach((_,v)=>e.fillText(_,s+84,h+24+v*36))}!u.disabled&&t.onOption&&this.rects.push({id:g,x:s,y:h,w:r,h:x,fn:()=>t.onOption(f)}),h+=x+14})),t.feedback){const u=t.feedback;e.font=En.body(27);const f=Ps(e,u.text,r-60),m=70+f.length*35+24;c&&(e.fillStyle=u.ok?Oe.okBg:Oe.badBg,Ls(e,s,h,r,m,20),e.fill(),e.fillStyle=u.ok?Oe.ok:Oe.bad,e.fillRect(s,h,10,m),e.font=En.head(30),e.fillStyle=Oe.navy,e.fillText(String(u.title).toUpperCase(),s+34,h+22),e.font=En.body(27),f.forEach((x,g)=>e.fillText(x,s+34,h+66+g*35))),h+=m+16}if(t.source){e.font=En.body(21),e.fillStyle="#4a5d73";for(const u of Ps(e,t.source,r))c&&e.fillText(u,s,h),h+=28;h+=10}if(t.buttons&&t.buttons.length){h+=8,e.font=En.mono(26*o);const u=80*(this.compact?1.1:1),f=16,m=t.buttons.map(p=>e.measureText(String(p.label).toUpperCase()).width+70),x=m.reduce((p,b)=>p+b,0)+f*(m.length-1);let g=this.compact?s:Math.max(s,n-s-x);x>r&&(g=s),t.buttons.forEach((p,b)=>{const _=x>r?(r-f*(m.length-1))/m.length:m[b],v="btn"+b;if(c){const U=a.has(v),A=p.style!=="secondary";Ls(e,g,h,_,u,u/2),e.fillStyle=A?U?"#ff8a33":Oe.orange:U?Oe.grey:"#ffffff",e.fill(),e.lineWidth=4,e.strokeStyle=A?Oe.orange:Oe.navy,e.stroke(),e.fillStyle=Oe.navy,e.textAlign="center",e.fillText(String(p.label).toUpperCase(),g+_/2,h+u/2-13*o),e.textAlign="left"}p.disabled||this.rects.push({id:v,x:g,y:h,w:_,h:u,fn:p.onClick}),g+=_+f}),h+=u}return h+s*.8};this.usedH=Math.min(this.maxH,Math.ceil(l(!1))),this.rects=[],l(!0),this.texture.repeat.set(1,this.usedH/this.maxH),this.texture.offset.set(0,1-this.usedH/this.maxH),this.texture.needsUpdate=!0,this.mesh.scale.set(this.widthM,this.widthM*(this.usedH/this.px),1)}_rectAt(t){if(!t)return null;const e=t.x*this.px,n=(1-t.y)*this.usedH;return this.rects.find(s=>e>=s.x&&e<=s.x+s.w&&n>=s.y&&n<=s.y+s.h)||null}hover(t,e){const n=this._rectAt(t),s=n?n.id:null;this.hoverBy.get(e)!==s&&(s?this.hoverBy.set(e,s):this.hoverBy.delete(e),this._draw())}click(t){const e=this._rectAt(t);e&&e.fn&&e.fn()}}function $(i,t={},...e){const[n,...s]=i.split("."),r=document.createElement(n||"div");s.length&&(r.className=s.join(" "));for(const[o,a]of Object.entries(t||{}))a==null||a===!1||(o.startsWith("on")?r.addEventListener(o.slice(2).toLowerCase(),a):o==="text"?r.textContent=a:r.setAttribute(o,a===!0?"":a));for(const o of e.flat())o!=null&&o!==!1&&r.append(o instanceof Node?o:document.createTextNode(String(o)));return r}function uv(i){const t=[].concat(i.body||[]).map(l=>$("p",{text:l})),e=i.options?$("div.options",{},i.options.map((l,c)=>$(`button.option${l.state?"."+l.state:""}`,{disabled:l.disabled,onclick:()=>i.onOption&&i.onOption(c)},$("span.letter",{text:l.mark??String.fromCharCode(65+c)}),$("span",{text:l.text})))):null,n=i.feedback?$(`div.feedback.${i.feedback.ok?"ok":"no"}`,{},$("strong",{text:i.feedback.title}),$("span",{text:i.feedback.text})):null,s=i.source?$("div.src",{text:i.source}):null,r=(i.buttons||[]).map(l=>$(`button.btn${l.style==="secondary"?".secondary":""}`,{disabled:l.disabled,onclick:l.onClick,text:l.label})),o=$("div.modal",{role:"dialog","aria-modal":"true"},$("div.modal-head",{},i.kicker?$("div.kicker",{text:i.kicker}):null,i.title?$("h2",{text:i.title}):null),$("div.modal-body",{},t,e,n,s),r.length?$("div.modal-foot",{},r):null),a=$("div.modal-wrap",{},o);return queueMicrotask(()=>{const l=o.querySelector(".option:not([disabled]), .btn");l&&matchMedia("(pointer:fine)").matches&&l.focus({preventScroll:!0})}),a}function fv(i,t){const e=$("div.toast",{text:t});i.append(e),setTimeout(()=>e.remove(),3300)}const Ar={factory:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 42V22l11 7v-7l11 7v-7l11 7V8h5v34z"/><path d="M5 42h38"/></svg>',construction:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 42V10h32"/><path d="M8 10l10 10M40 10v8"/><path d="M36 18h8v6h-8z"/><path d="M4 42h40M16 42V28h12v14"/></svg>',underwater:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2"/><circle cx="20" cy="27" r="6"/><path d="M26 27h8M14 33l-4 6M30 21l6-5"/><circle cx="38" cy="36" r="2"/><circle cx="34" cy="41" r="1.5"/></svg>',shipyard:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30h36l-5 10H11z"/><path d="M12 30V20h18v10M30 24h6v6"/><path d="M4 44c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2"/></svg>'};class pv{constructor(t,e,n){this.engine=t,this.input=e,this.uiRoot=n,this.spec=null,this.htmlNode=null,this.vr=new Yh({widthM:.95}),this.vr.mesh.visible=!1,t.scene.add(this.vr.mesh),e.uiMeshes.add(this.vr.mesh),t.addEventListener("vrstart",()=>this.spec&&this._render(!0)),t.addEventListener("vrend",()=>this.spec&&this._render(!0))}get isOpen(){return!!this.spec}show(t){const e=!this.spec;this.spec=t,this.input.modal=!0,this.input.clearHover(),this._render(e)}hide(){this.spec=null,this.input.modal=!1,this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.vr.mesh.visible=!1}_render(t){this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.engine.isVR?(this.vr.render(this.spec),this.vr.mesh.visible=!0,t&&this._placeInFront()):(this.vr.mesh.visible=!1,this.htmlNode=uv(this.spec),this.uiRoot.append(this.htmlNode))}_placeInFront(){const t=this.engine.camera,e=new S,n=new S;t.getWorldPosition(e),t.getWorldDirection(n),n.y=0,n.lengthSq()<1e-4&&n.set(0,0,-1),n.normalize();const s=this.vr.mesh;s.position.copy(e).addScaledVector(n,1.25),s.position.y=e.y-.12,s.lookAt(e.x,s.position.y,e.z)}}function so(i=1){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function gn(i,t,e,{repeat:n=[1,1],srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t;const o=r.getContext("2d");e(o,i,t);const a=new Ja(r);return s&&(a.colorSpace=Je),a.wrapS=a.wrapT=Fr,a.repeat.set(n[0],n[1]),a.anisotropy=8,a}function $h(i=[8,6]){return gn(512,512,(t,e,n)=>{const s=so(7);t.fillStyle="#8d9196",t.fillRect(0,0,e,n);for(let r=0;r<40;r++){const o=s()*e,a=s()*n,l=30+s()*110,c=t.createRadialGradient(o,a,0,o,a,l),h=s()>.5;c.addColorStop(0,h?"rgba(60,62,66,0.16)":"rgba(190,194,198,0.14)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,l*2,l*2)}for(let r=0;r<9e3;r++){const o=90+s()*90;t.fillStyle=`rgba(${o},${o},${o+4},${.08+s()*.12})`,t.fillRect(s()*e,s()*n,1+s()*2,1+s()*2)}t.strokeStyle="rgba(40,42,46,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,1),t.lineTo(e,1),t.moveTo(1,0),t.lineTo(1,n),t.stroke()},{repeat:i})}function Wr(i="#c9d1d8",t=[12,1]){return gn(256,256,(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s);for(let o=0;o<n;o+=32){const a=e.createLinearGradient(o,0,o+32,0);a.addColorStop(0,"rgba(0,0,0,0.10)"),a.addColorStop(.5,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(0,0,0,0.10)"),e.fillStyle=a,e.fillRect(o,0,32,s)}const r=so(3);for(let o=0;o<800;o++)e.fillStyle=`rgba(80,80,80,${r()*.05})`,e.fillRect(r()*n,r()*s,2,6)},{repeat:t})}function Zh(){return gn(256,64,(i,t,e)=>{const n=so(11);i.fillStyle="#b58a57",i.fillRect(0,0,t,e);for(let s=0;s<60;s++){i.strokeStyle=`rgba(90,60,30,${.1+n()*.2})`,i.lineWidth=1+n()*2;const r=n()*e;i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(t*.3,r+(n()-.5)*8,t*.6,r+(n()-.5)*8,t,r+(n()-.5)*6),i.stroke()}})}function mv(){return gn(128,128,(i,t,e)=>{const n=so(5);i.fillStyle="#b8895a",i.fillRect(0,0,t,e);for(let s=0;s<400;s++)i.fillStyle=`rgba(120,80,40,${n()*.15})`,i.fillRect(n()*t,n()*e,2,2);i.fillStyle="rgba(150,110,70,0.6)",i.fillRect(0,e*.45,t,10)})}function Ne({header:i,lines:t=[],headerBg:e="#006ce9",bg:n="#ffffff",fg:s="#002550",w:r=512,h:o=256}){return gn(r,o,a=>{a.fillStyle=n,a.fillRect(0,0,r,o);const l=i?o*.34:0;i&&(a.fillStyle=e,a.fillRect(0,0,r,l),a.fillStyle="#ffffff",a.font=`900 ${Math.round(l*.5)}px Gilroy, Arial, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(i.toUpperCase(),r/2,l/2+2)),a.fillStyle=s,a.textAlign="center",a.textBaseline="middle";const c=(o-l)/(t.length+1);a.font=`900 ${Math.round(Math.min(c*.75,o*.22))}px Gilroy, Arial, sans-serif`,t.forEach((h,d)=>a.fillText(h.toUpperCase(),r/2,l+c*(d+1))),a.strokeStyle=s,a.lineWidth=6,a.strokeRect(3,3,r-6,o-6)},{repeat:[1,1]})}function gv(){return gn(128,128,(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,t*.44,0,Math.PI*2),i.fillStyle="#ff6b00",i.fill(),i.lineWidth=8,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#002550",i.font="900 78px Gilroy, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("!",t/2,e/2+4)})}function jh(i){const t=new iv().load(i);return t.colorSpace=Je,t.anisotropy=8,t}const Ve=(i,t=.7,e=0,n={})=>new Rt({color:i,roughness:t,metalness:e,...n});function ro(){return{steel:Ve(9080982,.42,.85),darkSteel:Ve(3883078,.5,.8),galv:Ve(12041666,.35,.9),columnBlue:Ve(2841228,.55,.3),navy:Ve(9552,.6,.2),orange:Ve(16739072,.5,.1),yellow:Ve(15906565,.55,.1),red:Ve(12721951,.45,.2),black:Ve(1711135,.8,.1),rubber:Ve(2237222,.9,0),machine:Ve(2703966,.5,.4),white:Ve(15922422,.6,0),panelGrey:Ve(8358543,.75,.2),lockerGrey:Ve(7307926,.5,.5),cylinder:Ve(10134442,.4,.6),copper:Ve(12088115,.35,.9),wood:Ve(16777215,.85,0,{map:Zh()}),cardboard:Ve(16777215,.9,0,{map:mv()}),rag:Ve(5918533,.95,0),ragBlue:Ve(4086394,.95,0),skin:Ve(13803644,.7,0),hivis:Ve(14217770,.6,0,{emissive:2765568}),curtain:new Rt({color:16734738,roughness:.4,metalness:0,transparent:!0,opacity:.72,side:Qe,depthWrite:!1}),glassBlue:new Rt({color:12572911,emissive:10274026,emissiveIntensity:.9,roughness:.2}),lamp:new Rt({color:16777215,emissive:16774108,emissiveIntensity:2.2})}}function V(i,t,e,n,s=0,r=0,o=0,{base:a=!0,cast:l=!0,receive:c=!0}={}){const h=new Y(new De(i,t,e),n);return h.position.set(s,a?r+t/2:r,o),h.castShadow=l,h.receiveShadow=c,h}function xe(i,t,e,n,s=0,r=0,o=0,a=20,{base:l=!0,cast:c=!0}={}){const h=new Y(new qe(i,t,e,a),n);return h.position.set(s,l?r+e/2:r,o),h.castShadow=c,h.receiveShadow=!0,h}function Xr(i,t,e=.3){const n=new Ft,s=.02;return n.add(V(e,i,s*1.4,t,0,0,-e/2+s/2)),n.add(V(e,i,s*1.4,t,0,0,e/2-s/2)),n.add(V(s,i,e,t)),n}function Xn(i,t,e=.3,n=.16){const s=new Ft,r=.018;return s.add(V(i,r,n,t,0,e/2-r/2,0,{base:!1})),s.add(V(i,r,n,t,0,-e/2+r/2,0,{base:!1})),s.add(V(i,e,r,t,0,0,0,{base:!1})),s}function Oa(i){const t=new Ft,e=1.2,n=.8;for(let s=0;s<7;s++)t.add(V(e,.022,.1,i.wood,0,.122,-n/2+.05+s*((n-.1)/6)));for(const s of[-n/2+.05,0,n/2-.05])t.add(V(e,.1,.1,i.wood,0,0,s));for(const s of[-e/2+.05,e/2-.05])t.add(V(.1,.022,n,i.wood,s,.1,0));return t}function cn(i,t,e,n=40){const s=new kh(i),r=new Y(new rl(s,n,t,8,!1),e);return r.castShadow=!0,r}function Un(i){const t=new Ft,e=new Ft,n=new Ft,s=()=>{const d=new Y(new Fs(.075,.72,4,10),i.navy);return d.position.y=-.43,d.castShadow=!0,d};e.add(s()),n.add(s()),e.position.set(-.1,.92,0),n.position.set(.1,.92,0);const r=new Y(new Fs(.19,.45,4,12),i.navy);r.position.y=1.25,r.castShadow=!0;const o=new Y(new qe(.205,.2,.42,14),i.hivis);o.position.y=1.27;const a=new Y(new Be(.11,16,12),i.skin);a.position.y=1.68;const l=new Y(new Be(.125,16,10,0,Math.PI*2,0,Math.PI/2),i.white);l.position.y=1.71;const c=new Y(new Fs(.06,.5,4,8),i.navy);c.position.set(-.26,1.2,0);const h=c.clone();return h.position.x=.26,t.add(e,n,r,o,a,l,c,h),t.userData.legs=[e,n],t.userData.arms=[c,h],t}const ss=""+new URL("logo-white-D3oA5qhY.png",import.meta.url).href,Ee=Math.PI,vv=new me({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),xv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Tn=(i,t,e)=>i+(t-i)*e;function _v(i){const t=ro(),e=new Ft;e.name="factory";const n=[],s=[],r={},o=[],a=(D,O)=>i.tween(D,it=>{O(xv(it)),i.shadowsDirty()}),l=(D,O=!1)=>(e.add(D),O&&s.push(D),D);function c(D,O,it,Ct,Vt,qt){const kt=[];for(const pe of[].concat(it))pe.traverse(ye=>{ye.isMesh&&ye.material.emissive&&(ye.material=ye.material.clone(),kt.push({m:ye.material,e:ye.material.emissive.clone(),i:ye.material.emissiveIntensity}))});const ce=new Y(new De(...Ct),vv);ce.position.set(...Vt),e.add(ce);const ae={id:D,kind:O,group:it,hit:ce,anchor:new S(...qt),done:!1,setHighlight(pe){for(const{m:ye,e:de,i:Xt}of kt)pe?(ye.emissive.set(16739072),ye.emissiveIntensity=.55):(ye.emissive.copy(de),ye.emissiveIntensity=Xt)},fix:async()=>{}};return ce.userData.interactable=ae,r[D]=ae,ae}const h={w:32,d:24,h:8},d=new Rt({map:$h([8,6]),roughness:.82,metalness:.05}),u=new Y(new se(h.w,h.d),d);u.rotation.x=-Ee/2,u.receiveShadow=!0,l(u),n.push(u);const f=new Rt({map:Wr("#c4ccd4",[16,1]),roughness:.6,metalness:.3}),m=new Rt({map:Wr("#c4ccd4",[12,1]),roughness:.6,metalness:.3}),x=(D,O,it,Ct,Vt)=>{const qt=new Y(new se(D,h.h),Vt);qt.position.set(O,h.h/2,it),qt.rotation.y=Ct,qt.receiveShadow=!0,l(qt,!0);const kt=new Y(new se(D,1.2),t.navy);return kt.position.set(O,.6,it),kt.rotation.y=Ct,kt.translateZ(.02),l(kt),qt};x(h.w,0,-24/2,0,f),x(h.w,0,h.d/2,Ee,f),x(h.d,-32/2,0,Ee/2,m),x(h.d,h.w/2,0,-Ee/2,m);for(const D of[-1,1])for(let O=-9;O<=9;O+=4.5){const it=new Y(new se(3.2,1.3),t.glassBlue);it.position.set(D*(h.w/2-.03),6.3,O),it.rotation.y=-D*Ee/2,l(it)}const g=new Y(new se(h.w,h.d),new Rt({color:4080973,roughness:.9}));g.rotation.x=Ee/2,g.position.y=h.h,l(g);for(let D=-9;D<=9;D+=6){const O=Xn(h.w,t.columnBlue,.45,.2);O.position.set(0,7.5,D),l(O)}for(let D=-12;D<=12;D+=4){const O=V(.12,.18,h.d,t.darkSteel,D,7.75,0,{base:!1,cast:!1});l(O)}for(const D of[-12.5,12.5]){for(const it of[-9,-3,3,9]){const Ct=Xr(7.5,t.columnBlue,.34);Ct.position.set(D,0,it),l(Ct,!0)}const O=Xn(h.d-1,t.yellow,.5,.25);O.rotation.y=Ee/2,O.position.set(D,6.3,0),l(O)}const p=V(25.4,.7,.5,t.yellow,0,6.6,-6.5);l(p),l(V(25.4,.7,.5,t.yellow,0,6.6,-5.6));const b=V(.9,.6,1.3,t.darkSteel,4,6.2,-6.05);l(b),l(xe(.012,.012,3.2,t.darkSteel,4,3,-6.05,6)),l(V(.25,.35,.12,t.yellow,4,2.7,-6.05));for(const D of[-8,0,8])for(const O of[-8,-2,4,10]){l(xe(.32,.4,.3,t.darkSteel,D,7,O,16,{cast:!1}));const it=new Y(new Yn(.34,20),t.lamp);it.rotation.x=Ee/2,it.position.set(D,6.99,O),l(it)}const _=new Y(new se(8.4,2.2),t.navy);_.position.set(0,4.8,-24/2+.05),l(_);const v=new Y(new se(6.6,6.6*381/1867),new me({map:jh(ss),transparent:!0}));v.position.set(0,4.8,-24/2+.07),l(v);const U=new Rt({color:15906565,roughness:.6}),A=(D,O,it,Ct)=>{const Vt=new Y(new se(D,O),U);Vt.rotation.x=-Ee/2,Vt.position.set(it,.004,Ct),Vt.receiveShadow=!0,l(Vt)};A(.1,22,2.6,0),A(.1,22,4.8,0);for(let D=-10;D<=10;D+=2.5){const O=new Y(new Yn(.18,3),U);O.rotation.set(-Ee/2,0,Ee/2),O.position.set(3.7,.005,D),l(O)}A(4.4,.08,0,-.95);function R(D,O,it){const Ct=new Ft,Vt=[],qt=O/D*1.15;for(let ae=0;ae<D;ae++){const pe=new Y(new se(qt,1.9),t.curtain);pe.position.y=1.1,Ct.add(pe),Vt.push(pe)}const kt=ae=>-O/2+O/D*(ae+.5),ce=(ae,pe=-O/2)=>{Vt.forEach((ye,de)=>{const Xt=Tn(kt(de),pe+.08+de*.055,ae),Ke=Tn(0,de%2?.55:-.55,ae);it?(ye.position.x=Xt,ye.rotation.y=Ke):(ye.position.z=Xt,ye.rotation.y=Ee/2+Ke)})};return ce(0),{group:Ct,strips:Vt,setOpen:ce}}function C(D,O,{label:it,frontFull:Ct=!0,rightCurtain:Vt=!1}){const qt=new Ft;qt.position.set(D,0,O);const kt=4,ce=3.5,ae=2.1;for(const[Ke,Ae]of[[-2,-1.75],[2,-1.75],[-2,1.75],[2,1.75]])qt.add(V(.06,ae+.1,.06,t.yellow,Ke,0,Ae));qt.add(V(kt,.05,.05,t.yellow,0,ae,-1.75),V(kt,.05,.05,t.yellow,0,ae,1.75)),qt.add(V(.05,.05,ce,t.yellow,-2,ae,0),V(.05,.05,ce,t.yellow,2,ae,0));const pe=V(kt-.06,2,.04,t.panelGrey,0,.02,-1.72),ye=V(.04,2,ce-.06,t.panelGrey,-1.97,.02,0);qt.add(pe,ye),s.push(pe,ye);let de=null;Vt||(de=V(.04,2,ce-.06,t.panelGrey,1.97,.02,0),qt.add(de),s.push(de));const Xt=R(Ct?12:6,Ct?kt:kt/2,!0);if(Xt.group.position.set(Ct?0:-kt/4,0,1.75),qt.add(Xt.group),it){const Ke=new Y(new se(1,.36),new me({map:Ne({lines:[it],bg:"#002550",fg:"#ffffff",w:512,h:184})}));Ke.position.set(0,ae+.3,1.785),qt.add(Ke),qt.add(V(1.04,.4,.02,t.darkSteel,0,ae+.1,1.76))}return l(qt),qt}C(-5,-3.25,{label:"Bay 1"}),C(8,-3.25,{label:"Bay 3"}),C(0,-3.25,{label:"Bay 2",frontFull:!1,rightCurtain:!0});const y=Un(t);y.position.set(8,0,-3.8),y.rotation.y=Ee,l(y),l(V(1.6,.85,.8,t.darkSteel,8,0,-4.3));const w=new Zn(13623551,0,7,2);w.position.set(8,1.05,-4),l(w);const L=new Y(new Be(.03,8,8),new me({color:15397631}));L.position.copy(w.position),l(L);let B=0,F=!0;o.push(D=>{B-=D,B<=0&&(F=!F,B=F?2.5+Math.random()*3:1.5+Math.random()*2);const O=F?4+Math.random()*5:0;w.intensity=O,L.visible=F});const X=new Y(new se(.7,.35),new me({map:Ne({header:"Warning",lines:["Welding in progress"],headerBg:"#f2b705",w:512,h:256})}));X.position.set(10.08,1.6,-2.2),X.rotation.y=Ee/2,l(X);const nt=new Y(new se(.62,.31),new me({map:Ne({header:"Mandatory",lines:["Eye protection","in this area"],w:512,h:256})}));nt.position.set(-1,1.65,-1.47),l(nt),l(V(.66,.35,.015,t.darkSteel,-1,1.475,-1.485,{cast:!1}));const W=-.3,at=-3.8,G=.82,mt=V(1.8,.03,.9,t.darkSteel,W,G,at);l(mt,!0);for(const[D,O]of[[-.85,-.4],[.85,-.4],[-.85,.4],[.85,.4]])l(V(.05,G,.05,t.steel,W+D,0,at+O));l(V(1.7,.05,.03,t.steel,W,.25,at-.4)),l(V(.42,.012,.26,t.galv,0,G+.03,at-.05)),l(V(.42,.14,.012,t.galv,0,G+.042,at-.05)),l(V(.05,.05,.08,t.copper,.25,G+.03,at-.05));const bt=1.15,Et=-4.55,Bt=new Ft;Bt.add(V(.45,.72,.58,t.machine,0,.08,0)),Bt.add(V(.36,.34,.5,t.machine,0,.8,0)),Bt.add(V(.37,.05,.51,t.orange,0,.8,0));for(const[D,O]of[[-.18,-.24],[.18,-.24],[-.18,.24],[.18,.24]])Bt.add(xe(.04,.04,.03,t.rubber,D,.04,O,10,{base:!1}));const ie=new Y(new se(.16,.08),new Rt({color:731666,emissive:3342186,emissiveIntensity:1.4}));ie.position.set(0,.62,.292),Bt.add(ie),Bt.add(xe(.025,.025,.04,t.black,-.1,.3,.3,10,{base:!1})),Bt.children.at(-1).rotation.x=Ee/2,Bt.position.set(bt,0,Et),l(Bt,!0),l(xe(.05,.05,2.6,t.galv,-.3,0,-5.08,12)),l(xe(.11,.11,4.9,t.galv,-.3,2.6,-5.08,16));const Q=new Y(new Be(.035,12,10),new Rt({color:4194304,emissive:16722458,emissiveIntensity:2}));Q.position.set(-.62,1.55,-4.96),l(Q),l(V(.18,.22,.08,t.machine,-.62,1.35,-4.97));const ft=new Ft;ft.position.set(-.3,2.45,-4.98);const pt=1,gt=1.45,Pt=new Ft;ft.add(Pt),Pt.add(new Y(new Be(.1,14,10),t.darkSteel)),Pt.add(xe(.075,.075,pt,t.galv,0,0,0,14));const jt=new Ft;jt.position.y=pt,Pt.add(jt),jt.add(new Y(new Be(.09,14,10),t.darkSteel)),jt.add(xe(.068,.068,gt,t.galv,0,0,0,14));const $t=t.yellow.clone();$t.side=Qe;const Jt=new Y(new qe(.25,.07,.32,24,1,!0),$t);Jt.position.y=gt+.16,Jt.castShadow=!0,jt.add(Jt);const st=[.12,.5],dt=[1,1.95];Pt.rotation.x=st[0],jt.rotation.x=st[1],l(ft);const P=c("VEN-01","hazard",ft,[.9,2.8,1.5],[-.3,3.7,-4.4],[-.3,5.3,-3.9]);P.label="VEN-01",P.fix=()=>(Q.material.emissive.set(2883434),Q.material.color.set(13056),a(1.8,D=>{Pt.rotation.x=Tn(st[0],dt[0],D),jt.rotation.x=Tn(st[1],dt[1],D)}));const It=R(11,3.5,!1);It.group.position.set(2,0,-3.25),It.setOpen(1,-1.75),l(It.group);const ht=c("RAD-01","hazard",It.group,[.35,2,1.2],[2,1.1,-4.45],[2,2.5,-4.4]);ht.fix=()=>a(1.6,D=>It.setOpen(1-D,-1.75));const ot=new Ft;ot.add(xe(.115,.115,1.25,t.cylinder,0,0,0,24));const vt=new Y(new Be(.115,24,12,0,Ee*2,0,Ee/2),t.cylinder);vt.position.y=1.25,vt.castShadow=!0,ot.add(vt);const Yt=new Y(new qe(.117,.117,.22,24,1,!0),new Rt({map:gn(512,96,(D,O,it)=>{D.fillStyle="#ffffff",D.fillRect(0,0,O,it),D.fillStyle="#002550",D.font="900 44px Gilroy, Arial, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText("SHIELDING GAS",O/2,it/2+2)}),roughness:.6}));Yt.position.y=.85,ot.add(Yt),ot.add(xe(.025,.03,.12,t.copper,0,1.33,0,12));const Dt=V(.07,.08,.07,t.copper,.06,1.38,0);ot.add(Dt);for(const D of[-.04,.04]){const O=xe(.035,.035,.025,t.white,.1,1.46,D,16,{base:!1});O.rotation.z=Ee/2,ot.add(O)}const T={p:new S(1.45,0,-3),rz:.07},M={p:new S(1.72,0,-4.66)};ot.position.copy(T.p),ot.rotation.z=T.rz,l(ot),l(V(.3,.06,.08,t.darkSteel,1.72,.9,-4.92)),l(V(.3,.06,.08,t.darkSteel,1.72,.5,-4.92));const H=new Ft;for(let D=0;D<7;D++){const O=new Y(new $n(.018,.005,6,10),t.darkSteel);O.position.set(1.72,.88-D*.03,-4.86),O.rotation.y=D%2?Ee/2:0,H.add(O)}l(H);const K=new Ft;for(const D of[.92,.52]){const O=new Y(new $n(.13,.009,6,32),t.darkSteel);O.rotation.x=Ee/2,O.position.set(M.p.x,D,M.p.z),K.add(O)}K.visible=!1,l(K);let rt=null;const et=()=>{rt&&(e.remove(rt),rt.geometry.dispose()),ot.updateMatrixWorld(!0);const D=new S(.1,1.38,0).applyMatrix4(ot.matrixWorld),O=new S(bt+.18,.95,Et+.1),it=D.clone().lerp(O,.5);it.y=Math.min(D.y,O.y)-.35,rt=cn([D,it,O],.008,t.black,24),e.add(rt)};et();const Tt=c("GAS-01","hazard",ot,[.42,1.6,.42],[T.p.x,.8,T.p.z],[T.p.x,1.9,T.p.z]);Tt.fix=async()=>{await a(1.4,D=>{ot.position.lerpVectors(T.p,M.p,D),ot.position.y=Math.sin(D*Ee)*.03,ot.rotation.z=Tn(T.rz,0,D),et()}),H.visible=!1,K.visible=!0,i.shadowsDirty()};const lt=new Ft,Ut=xe(.024,.02,.17,t.black,0,0,0,12,{base:!1});Ut.rotation.z=Ee/2,lt.add(Ut);const Kt=V(.07,.03,.035,t.copper,.11,-.012,0,{base:!1});lt.add(Kt);const ut=xe(.0035,.0035,.3,t.steel,.16,-.012,.13,6,{base:!1});ut.rotation.x=Ee/2,lt.add(ut);const At={p:new S(.4,G+.05,-3.55),r:new yn(0,.4,0)},Gt={p:new S(-1.86,1.25,-3.05),r:new yn(0,0,-Ee/2)};lt.position.copy(At.p),lt.rotation.copy(At.r),l(lt),l(V(.05,.12,.05,t.black,-1.92,1.32,-3.05)),l(V(.09,.025,.04,t.black,-1.89,1.27,-3.05));let Zt=null;const Nt=()=>{Zt&&(e.remove(Zt),Zt.geometry.dispose()),lt.updateMatrixWorld(!0);const D=new S(-.085,0,0).applyMatrix4(lt.matrixWorld),O=new S(bt-.1,.3,Et+.3),it=[D,new S(D.x-.05,G+.05,D.z+.15),new S((D.x+O.x)/2,.03,-3.2),new S(O.x-.1,.03,O.z+.3),O];lt.position.x<-1&&it.splice(1,1,new S(D.x+.1,.6,D.z+.2)),Zt=cn(it,.012,t.rubber,48),e.add(Zt)};Nt();const Qt=c("ELE-02","hazard",lt,[.6,.25,.45],[At.p.x,At.p.y,At.p.z],[At.p.x,1.35,At.p.z]);Qt.fix=async()=>{ut.visible=!1;const D=new Kn().setFromEuler(At.r),O=new Kn().setFromEuler(Gt.r);await a(1.4,it=>{lt.position.lerpVectors(At.p,Gt.p,it),lt.position.y+=Math.sin(it*Ee)*.25,lt.quaternion.slerpQuaternions(D,O,it),Nt()}),ie.material.emissive.set(0),ie.material.color.set(1118481)};const Ht=new Ft,ee=new Rt({map:gn(256,128,(D,O,it)=>{D.fillStyle="#c21f1f",D.fillRect(0,0,O,it),D.fillStyle="#ffffff",D.fillRect(0,it*.3,O,it*.4),D.fillStyle="#c21f1f",D.font="900 30px Gilroy, Arial, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText("DEGREASER",O/4,it/2+1),D.fillText("DEGREASER",3*O/4,it/2+1)}),roughness:.4,metalness:.5}),N=new Y(new qe(.065,.065,.2,20),ee);N.position.y=.1,N.castShadow=!0,Ht.add(N);const St=xe(.03,.03,.02,t.darkSteel,.11,.01,.05,12,{base:!1});St.rotation.x=Ee/2,Ht.add(St),Ht.position.set(-.95,G+.015,-3.55),l(Ht);const J=c("FAC-05","hazard",Ht,[.36,.32,.36],[-.92,G+.13,-3.52],[-.95,1.4,-3.55]);J.fix=async()=>{await a(.5,O=>{St.position.set(Tn(.11,0,O),Tn(.01,.21,O),Tn(.05,0,O)),St.rotation.x=Tn(Ee/2,0,O)});const D=Ht.position.clone();await a(1,O=>{Ht.position.set(D.x,D.y+O*.5,D.z+O*.8),Ht.scale.setScalar(1-O)}),Ht.visible=!1};const tt=new Ft,_t=.5,yt=.32,Wt=.4;tt.add(V(_t,.01,Wt,t.cardboard,0,0,0)),tt.add(V(_t,yt,.01,t.cardboard,0,0,-Wt/2),V(_t,yt,.01,t.cardboard,0,0,Wt/2)),tt.add(V(.01,yt,Wt,t.cardboard,-_t/2,0,0),V(.01,yt,Wt,t.cardboard,_t/2,0,0));const fe=V(_t,.01,.18,t.cardboard,0,yt,Wt/2+.07,{base:!1});fe.rotation.x=.5,tt.add(fe);for(let D=0;D<6;D++){const O=new Y(new sl(.09,0),D%2?t.rag:t.ragBlue);O.position.set(-.15+D%3*.15,yt-.02+(D>2?.04:0),-.08+(D>2?.12:0)),O.scale.set(1.2,.6,1),O.rotation.set(D,D*2,D*.5),O.castShadow=!0,tt.add(O)}const oe=new S(-.8,0,-3.6);tt.position.copy(oe),l(tt);const q=new S(1.4,0,-.85);l(xe(.24,.22,.7,t.red,q.x,0,q.z,20));const wt=new Ft;wt.add(xe(.25,.25,.04,t.darkSteel,0,0,0,20)),wt.position.set(q.x-.25,.7,q.z),wt.children[0].position.x=.25,wt.rotation.z=1.2,l(wt);const ne=new Y(new se(.34,.17),new me({map:Ne({lines:["Oily waste"],bg:"#ffffff",w:256,h:128})}));ne.position.set(q.x,.45,q.z+.235),l(ne);const _e=c("AREA-01","hazard",tt,[.7,.55,.6],[oe.x,.25,oe.z],[oe.x,1.15,oe.z+.1]);_e.fix=async()=>{const D=tt.position.clone(),O=new S(q.x,.75,q.z);await a(1.6,it=>{tt.position.lerpVectors(D,O,it),tt.position.y+=Math.sin(it*Ee)*.9,tt.scale.setScalar(Tn(1,.35,it))}),tt.visible=!1,await a(.4,it=>{wt.rotation.z=Tn(1.2,0,it)})};const Me=new Ft;Me.add(V(.08,1.3,.08,t.darkSteel,0,0,-.1)),Me.add(xe(.095,.095,.5,t.red,0,.62,0,20)),Me.add(xe(.03,.03,.1,t.black,0,1.12,0,10)),Me.add(V(.12,.02,.03,t.black,.04,1.22,0));const Pe=cn([new S(.03,1.18,.02),new S(.12,1,.08),new S(.1,.75,.1)],.01,t.black,12);Me.add(Pe);const Mt=new Y(new se(.4,.2),new me({map:Ne({lines:["Fire","extinguisher"],bg:"#c21f1f",fg:"#ffffff",w:256,h:128})}));Mt.position.set(0,1.55,-.055),Me.add(Mt),Me.position.set(-2.5,0,-1.3),l(Me);const re=new Ft;for(let D=0;D<3;D++){const O=Oa(t);O.position.y=D*.145,O.rotation.y=(D-1)*.04,re.add(O)}re.add(V(.5,.4,.4,t.cardboard,-.25,.435,.05),V(.4,.3,.35,t.cardboard,.3,.435,-.05));const be=new S(-2.5,0,-.62),ge=new S(-9.5,0,1.5);re.position.copy(be),l(re);const Fe=c("AREA-02","hazard",[Me,re],[1.3,1.6,1.3],[-2.5,.8,-.95],[-2.5,2,-1]);Fe.fix=()=>a(2,D=>{re.position.lerpVectors(be,ge,D),re.rotation.y=D*.6});const ct=new Ft;ct.add(V(.9,1.9,.5,t.lockerGrey,0,0,0)),ct.add(V(.005,1.8,.01,t.darkSteel,0,.05,.255));for(const D of[-.22,.22]){for(let O=0;O<5;O++)ct.add(V(.2,.012,.01,t.darkSteel,D,1.55+O*.04,.256));ct.add(V(.02,.12,.03,t.darkSteel,D>0?.05:-.05,1,.26))}const te=new Y(new se(.8,.3),new me({map:Ne({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));te.position.set(0,2.15,.02),ct.add(te);const zt=new Ft,ve=new Y(new Be(.15,18,12,0,Ee*2,0,Ee/1.6),t.navy);ve.scale.set(1,1.15,1.1),ve.rotation.x=Ee/2.4,zt.add(ve);const Re=V(.1,.05,.01,new Rt({color:793100,roughness:.1,metalness:.6}),0,.04,.16,{base:!1});zt.add(Re),zt.position.set(-.2,2,0),ct.add(zt);const dn=V(.08,.7,.5,new Rt({color:7031339,roughness:.9}),.5,.9,0);ct.add(dn),ct.position.set(-3.4,0,1.8),ct.rotation.y=Ee/2,l(ct,!0),c("PPE","ppe",ct,[.7,2.2,1.2],[-3.35,1.05,1.8],[-3.4,2.6,1.8]);for(const D of[-12,-9,-6]){const O=Xr(3.2,t.navy,.22);O.position.set(D,0,-10.9),l(O);for(let it=.8;it<3.2;it+=.8)l(V(.12,.08,1,t.navy,D,it,-10.4))}for(let D=.88;D<3.2;D+=.8)for(let O=0;O<3;O++){const it=Xn(7.5,t.darkSteel,.14,.08);it.position.set(-9,D+.07,-10.1-O*.22),l(it)}for(const[D,O,it]of[[-9.5,4.5,8],[-11.5,7.5,5],[11.5,7,6]]){const Ct=Oa(t);Ct.position.set(D,0,O),l(Ct);for(let Vt=0;Vt<it;Vt++)l(V(1.15,.02,.78,t.steel,D,.145+Vt*.022,O))}for(const D of[6.5,10.5])l(V(.08,.7,.08,t.navy,D,0,4.6),V(.08,.7,.08,t.navy,D,0,5.4)),l(V(.1,.08,.9,t.navy,D,.7,5));const E=Xn(5.5,t.columnBlue,.6,.3);E.position.set(8.5,1.08,5),l(E),l(V(1.6,.85,.7,t.darkSteel,7.5,0,9.5),V(.2,.25,.2,t.machine,7.2,.85,9.5));const k=Un(t);k.position.set(3.7,0,0),l(k),o.push((D,O)=>{const it=-3+5*Math.sin(O*.18),Ct=5*.18*Math.cos(O*.18);k.position.z=it,k.rotation.y=Ct>0?0:Ee;const Vt=Math.sin(O*6)*.45*Math.min(1,Math.abs(Ct));k.userData.legs[0].rotation.x=Vt,k.userData.legs[1].rotation.x=-Vt,k.userData.arms[0].rotation.x=-Vt*.6,k.userData.arms[1].rotation.x=Vt*.6}),k.traverse(D=>{D.castShadow=!1});const j=new no(15331576,7038560,1.4);l(j);const Z=new io(16774890,1.8);Z.position.set(7,14,8),Z.target.position.set(0,0,-3),Z.castShadow=!0,Z.shadow.mapSize.set(2048,2048),Object.assign(Z.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:1,far:40}),Z.shadow.bias=-4e-4,Z.shadow.normalBias=.02,l(Z),l(Z.target);for(const[D,O]of[[-6,-6],[6,-6],[-6,4],[6,4]]){const it=new Zn(16773596,30,18,1.6);it.position.set(D,6.6,O),l(it)}const z=new rv(16777215,25,8,.9,.5,1.5);return z.position.set(0,4.5,-2.5),z.target.position.set(0,0,-3.6),l(z),l(z.target),{root:e,floors:n,blockers:s,interactables:r,spawn:{position:new S(0,0,3.6),yaw:0},weldSpot:{center:new S(-.45,G+.03,-3.52),standAt:new S(-.45,0,-3.02),approach:[{p:new S(.8,0,-.8)},{p:new S(.6,0,-2.5)}],bench:{y:G+.03,minX:W-.9,maxX:W+.9,minZ:at-.45,maxZ:at+.45}},bounds:{minX:-15.4,maxX:15.4,minZ:-11.4,maxZ:11.4},update(D,O){for(const it of o)it(D,O)}}}const Lt=Math.PI,ze=(i,t,e)=>i+(t-i)*e,Fa=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,yv=new me({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function ll(i,t){const e=new Ft;e.name=t;const n=[],s=[],r={},o=[],a=(h,d)=>i.tween(h,u=>{d(Fa(u)),i.shadowsDirty()}),l=(h,d=!1)=>(e.add(h),d&&s.push(h),h);function c(h,d,u,f,m,x){const g=[];for(const _ of[].concat(u))_.traverse(v=>{v.isMesh&&v.material.emissive&&(v.material=v.material.clone(),g.push({m:v.material,e:v.material.emissive.clone(),i:v.material.emissiveIntensity}))});const p=new Y(new De(...f),yv);p.position.set(...m),e.add(p);const b={id:h,kind:d,group:u,hit:p,anchor:new S(...x),done:!1,setHighlight(_){for(const{m:v,e:U,i:A}of g)_?(v.emissive.set(16739072),v.emissiveIntensity=.55):(v.emissive.copy(U),v.emissiveIntensity=A)},fix:async()=>{}};return p.userData.interactable=b,r[h]=b,b}return{root:e,floors:n,blockers:s,interactables:r,updaters:o,tween:a,add:l,makeInteractive:c}}function wv(i=1){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function rs(i,t,{repeat:e=[1,1],seed:n=3,count:s=9e3,blotches:r=30,size:o=2}={}){return gn(512,512,(a,l,c)=>{const h=wv(n);a.fillStyle=i,a.fillRect(0,0,l,c);for(let d=0;d<r;d++){const u=h()*l,f=h()*c,m=30+h()*120,x=a.createRadialGradient(u,f,0,u,f,m);x.addColorStop(0,t[Math.floor(h()*t.length)]+"33"),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.fillRect(u-m,f-m,m*2,m*2)}for(let d=0;d<s;d++){a.fillStyle=t[Math.floor(h()*t.length)],a.globalAlpha=.15+h()*.5;const u=1+h()*o;a.fillRect(h()*l,h()*c,u,u)}a.globalAlpha=1},{repeat:e})}function Dc(i,{color:t="#f2f4f6",w:e=512,h:n=256,font:s=900}={}){return gn(e,n,r=>{r.clearRect(0,0,e,n),r.fillStyle=t;let o=Math.floor(n*.6);for(r.font=`${s} ${o}px Gilroy, Arial, sans-serif`;r.measureText(i).width>e*.92&&o>10;)o-=4,r.font=`${s} ${o}px Gilroy, Arial, sans-serif`;r.textAlign="center",r.textBaseline="middle",r.fillText(i,e/2,n/2+4)})}function Kh(i){const t=new Ft,e=new Y(new qe(.09,.09,.48,18),i.red);e.position.y=.24,e.castShadow=!0,t.add(e);const n=new Y(new qe(.03,.03,.08,10),i.black);n.position.y=.52,t.add(n);const s=new Y(new De(.12,.02,.03),i.black);return s.position.set(.04,.58,0),t.add(s),t}function Mv(i,t,e){const n=new Ft,s=gn(256,32,(o,a,l)=>{for(let c=0;c<8;c++)o.fillStyle=c%2?"#c21f1f":"#ffffff",o.beginPath(),o.moveTo(c*32,0),o.lineTo(c*32+32,0),o.lineTo(c*32+16,l),o.lineTo(c*32-16,l),o.fill()},{repeat:[4,1]}),r=new Rt({map:s,side:Qe,roughness:.6});for(let o=0;o<i.length;o++){const[a,l]=i[o],c=new Y(new qe(.025,.025,1,8),e.orange);c.position.set(a,t+.5,l),c.castShadow=!0,n.add(c);const h=new Y(new qe(.12,.14,.05,12),e.black);if(h.position.set(a,t+.025,l),n.add(h),o>0){const[d,u]=i[o-1],f=Math.hypot(a-d,l-u),m=new Y(new se(f,.07),r);m.position.set((a+d)/2,t+.9,(l+u)/2),m.rotation.y=-Math.atan2(l-u,a-d),n.add(m)}}return n}function Sv(i){const t=ro(),e=ll(i,"construction"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:l,add:c,makeInteractive:h}=e,d=4,u=new Y(new se(140,140),new Rt({map:rs("#7d766b",["#5b554c","#9a9284","#4a463f","#a8a294"],{repeat:[28,28],seed:11}),roughness:.95}));u.rotation.x=-Lt/2,u.receiveShadow=!0,c(u,!0);const f=new Rt({color:4016727,roughness:.06,metalness:.4,transparent:!0,opacity:.85}),m=(q,wt,ne,_e,Me=.01)=>{const Pe=new Y(new Yn(1,28),f);return Pe.rotation.x=-Lt/2,Pe.scale.set(ne,_e,1),Pe.position.set(q,Me,wt),Pe.receiveShadow=!0,c(Pe),Pe};m(-6,-10,2.2,1.2),m(9,-9,1.4,.9),m(-12,6,2.6,1.5),m(4,12,1.8,1.1);const x=new Rt({color:10134442,roughness:.6,metalness:.6,transparent:!0,opacity:.55,side:Qe});for(const[q,wt,ne,_e]of[[0,-22,50,0],[0,22,50,0],[-25,0,44,Lt/2],[25,0,44,Lt/2]]){const Me=new Y(new se(ne,2),x);Me.position.set(q,1,wt),Me.rotation.y=_e,c(Me);const Pe=new Y(new se(ne*.6,.9),t.navy);Pe.position.set(q,1.1,wt),Pe.rotation.y=_e,Pe.translateZ(.02),c(Pe)}const g=[8885409,10135218,8095894,11055804].map(q=>new Rt({color:q,roughness:.9}));for(let q=0;q<22;q++){const wt=q/22*Lt*2,ne=46+q%3*9,_e=10+q*37%24;c(V(8+q%4*3,_e,8,g[q%4],Math.cos(wt)*ne,0,Math.sin(wt)*ne,{cast:!1}))}const p=new Rt({map:Wr("#8f989f",[20,1]),roughness:.55,metalness:.55});p.map.rotation=Lt/2;const b=new Y(new De(16,.12,12),p);b.position.set(0,d-.06,0),b.receiveShadow=!0,b.castShadow=!0,c(b),s.push(b),m(2.6,-3.4,.9,.6,d+.005),m(-4.5,1.5,.7,.45,d+.005),m(5.8,3.2,.5,.35,d+.005);for(const q of[-8,0,8])for(const wt of[-6,6]){const ne=Xr(8.6,t.columnBlue,.36);ne.position.set(q,0,wt),c(ne,!0)}for(const q of[d-.3,8.2]){for(const wt of[-6,6]){const ne=Xn(16.4,t.columnBlue,.45,.2);ne.position.set(0,q,wt),c(ne)}for(const wt of[-8,0,8]){const ne=Xn(12.4,t.columnBlue,.45,.2);ne.rotation.y=Lt/2,ne.position.set(wt,q,0),c(ne)}}for(const q of[-3,0,3]){const wt=Xn(16,t.columnBlue,.3,.15);wt.position.set(0,8.1,q),c(wt)}function _(q,wt,ne,_e){const Me=new Ft,Pe=Math.hypot(ne-q,_e-wt),Mt=Math.max(1,Math.round(Pe/1.5)),re=-Math.atan2(_e-wt,ne-q);for(let be=0;be<=Mt;be++){const ge=be/Mt;Me.add(V(.05,1.05,.05,t.yellow,ze(q,ne,ge),0,ze(wt,_e,ge)))}for(const[be,ge]of[[1,.04],[.5,.04],[0,.15]]){const Fe=V(Pe,ge,.03,be===0?t.wood:t.yellow,(q+ne)/2,be,(wt+_e)/2);Fe.rotation.y=re,Me.add(Fe)}return Me.position.y=d,Me}c(_(-8,-6,-2.2,-6),!0),c(_(2.2,-6,8,-6),!0),c(_(-8,6,8,6),!0),c(_(-8,-6,-8,6),!0),c(_(8,-6,8,6),!0);const v=new Y(new se(4.4,.12),new Rt({color:15906565,roughness:.6}));v.rotation.x=-Lt/2,v.position.set(0,d+.004,-5.9),c(v);const U=new Ft;for(let q=0;q<14;q++)U.add(V(1,.04,.3,t.galv,0,q*.29,-q*.28));U.add(V(.05,4.2,.05,t.yellow,-.5,0,0),V(.05,4.2,.05,t.yellow,.5,0,0)),U.position.set(-9.2,0,5.2),c(U);for(let q=0;q<6;q++)c(V(2.4,.03,.9,p,5.2,d+q*.032,3.8,{cast:q===5}));for(let q=0;q<9;q++){const wt=xe(.012,.012,3.2,t.rubber,-5.6+q%3*.04,d+.08+Math.floor(q/3)*.04,4.6,6,{base:!1});wt.rotation.z=Lt/2,c(wt)}const A=new Ft;A.add(V(1.2,.7,.6,t.orange,0,0,0)),A.add(V(1.22,.04,.62,t.darkSteel,0,.7,0)),A.position.set(3.8,d,4.8),c(A,!0);const R=-.6,C=-4.4,y=.85,w=new Ft;w.add(V(1.2,.04,.6,t.darkSteel,0,y-.04,0));for(const[q,wt]of[[-.55,-.25],[.55,-.25],[-.55,.25],[.55,.25]])w.add(V(.05,y-.04,.05,t.steel,q,0,wt));w.position.set(R,d,C),c(w,!0);const L=Xn(1.4,t.columnBlue,.3,.15);L.position.set(0,d+1.1,-5.95),c(L),c(V(.32,.32,.02,t.galv,.7,d+.95,-5.95));const B=new Ft;B.add(V(.36,.42,.62,t.machine,0,.06,0)),B.add(V(.37,.04,.63,t.orange,0,.48,0)),B.add(V(.06,.12,.2,t.black,0,.52,0));for(const[q,wt]of[[-.14,-.26],[.14,-.26],[-.14,.26],[.14,.26]])B.add(xe(.035,.035,.06,t.rubber,q,0,wt,10));const F=new S(2.6,d,-3.4),X=new S(3.4,d+.145,-1.8);B.position.copy(F),B.rotation.y=.3,c(B);const nt=Oa(t);nt.position.set(3.4,d,-1.8),c(nt);const W=new Ft;for(const[q,wt]of[[-.7,-.5],[.7,-.5],[-.7,.5],[.7,.5]])W.add(V(.04,1.4,.04,t.galv,q,0,wt));const at=new Y(new se(1.6,1.2),new Rt({color:27881,roughness:.7,side:Qe}));at.rotation.x=-Lt/2+.12,at.position.y=1.42,W.add(at),W.position.set(3.4,d,-1.8),c(W);const G=h("CON-03","hazard",B,[.8,.9,1],[F.x,d+.4,F.z],[F.x,d+1.3,F.z]);G.fix=()=>l(1.6,q=>{B.position.lerpVectors(F,X,q),B.position.y+=Math.sin(q*Lt)*.25,B.rotation.y=ze(.3,0,q),pt()});const mt=new Rt({color:15909376,roughness:.45,metalness:.3}),bt=xe(.05,.05,9,mt,1.2,d+.32,-5.45,16,{base:!1});bt.rotation.z=Lt/2,c(bt);for(const q of[-3,0,3,5.5])c(V(.06,.28,.12,t.darkSteel,q,d,-5.45));const Et=new Y(new se(.42,.14),new me({map:Ne({lines:["GAS"],bg:"#f2c200",fg:"#002550",w:256,h:86})}));Et.position.set(-1.6,d+.32,-5.39),c(Et);const Bt=new Ft;Bt.add(V(.08,.06,.05,t.copper,0,-.03,0,{base:!1})),Bt.add(V(.02,.1,.05,t.black,.05,.02,0,{base:!1}));const ie=new S(-.9,d+.38,-5.45),Q=new S(-.05,d+y+.03,-4.62);Bt.position.copy(ie),Bt.scale.setScalar(1.7),c(Bt);let ft=null;const pt=()=>{ft&&(n.remove(ft),ft.geometry.dispose()),B.updateMatrixWorld(!0);const q=new S(0,.3,-.31).applyMatrix4(B.matrixWorld),wt=Bt.position.clone(),ne=new S(q.x-.2,d+.03,q.z-.5),_e=new S((q.x+wt.x)/2,d+.03,(q.z+wt.z)/2);ft=cn([q,ne,_e,new S(wt.x+.1,Math.max(d+.03,wt.y-.3),wt.z+.1),wt],.012,t.rubber,48),n.add(ft)};pt();const gt=h("CON-04","hazard",[Bt,bt],[.7,.4,.4],[ie.x,ie.y,ie.z],[ie.x,d+1,ie.z]);gt.fix=()=>l(1.4,q=>{Bt.position.lerpVectors(ie,Q,q),Bt.position.y+=Math.sin(q*Lt)*.3,pt()});const Pt=_(-2.2,-6,2.2,-6),jt=d-1.3;Pt.position.y=jt,Pt.visible=!1,c(Pt);const $t=new Ft,Jt=h("CON-01","hazard",[$t],[4.4,1.2,.5],[0,d+.6,-5.85],[0,d+1.6,-5.9]),st=v.material;Jt.setHighlight=q=>{st.emissive.set(q?16739072:0),st.emissiveIntensity=q?.8:0},Jt.fix=async()=>{Pt.visible=!0,await l(1.4,q=>{Pt.position.y=ze(jt,d,q)}),r.push(Pt)};const dt=new Ft,P=new Rt({map:Zh(),roughness:.85});for(let q=0;q<4;q++)for(let wt=0;wt<5;wt++)dt.add(V(2.4,.1,.15,P,0,q*.11,-.4+wt*.2));const It=new S(.6,0,-7.6),ht=new S(-14,0,-12);dt.position.copy(It),c(dt);const ot=Un(t);ot.position.set(-6,0,-7.2),c(ot);let vt=!0;a.push((q,wt)=>{if(!vt)return;const ne=5*Math.sin(wt*.22),_e=Math.cos(wt*.22);ot.position.x=ne,ot.rotation.y=_e>0?Lt/2:-Lt/2;const Me=Math.sin(wt*6)*.45*Math.min(1,Math.abs(_e)*1.5);ot.userData.legs[0].rotation.x=Me,ot.userData.legs[1].rotation.x=-Me,ot.userData.arms[0].rotation.x=-Me*.6,ot.userData.arms[1].rotation.x=Me*.6});const Yt=Mv([[-3,-6.4],[-3,-9.6],[3.2,-9.6],[3.2,-6.4]],0,t);Yt.visible=!1,c(Yt);const Dt=h("CON-02","hazard",[dt,ot],[6.5,2.2,3.4],[0,1,-8],[0,2.6,-7.8]);Dt.fix=async()=>{vt=!1;const q=ot.position.clone(),wt=dt.position.clone();ot.rotation.y=-Lt/2,await l(2,ne=>{ot.position.set(ze(q.x,-16,ne),0,ze(q.z,-10,ne)),dt.position.lerpVectors(wt,ht,ne);const _e=Math.sin(ne*30)*.45;ot.userData.legs[0].rotation.x=_e,ot.userData.legs[1].rotation.x=-_e}),ot.visible=!1,Yt.visible=!0,i.shadowsDirty()};const T=new Ft;T.add(V(.05,1.5,.05,t.galv,-.35,0,0),V(.05,1.5,.05,t.galv,.35,0,0));const M=new Rt({map:Ne({header:"Hot work permit",lines:["NOT ISSUED","Fire watch: —"],headerBg:"#c21f1f",w:512,h:384}),roughness:.7}),H=new Y(new De(.8,.6,.02),[t.white,t.white,t.white,t.white,M,t.white]);H.position.y=1.35,H.castShadow=!0,T.add(H),T.position.set(-2.6,d,-4.2),T.rotation.y=.35,c(T,!0);const K=Un(t),rt=Kh(t);rt.position.set(.3,0,.15),K.add(rt),K.position.set(-2,d,-2.6),K.rotation.y=Lt+.4,K.visible=!1,c(K);const et=h("CON-05","hazard",T,[1,1.8,.5],[-2.6,d+.95,-4.2],[-2.6,d+2.25,-4.2]);et.fix=async()=>{M.map=Ne({header:"Hot work permit",lines:["ISSUED","Fire watch: assigned"],headerBg:"#1f9d55",w:512,h:384}),M.needsUpdate=!0,K.visible=!0;const q=K.position.clone();await l(1,wt=>{K.position.set(q.x,d+(1-wt)*.3,q.z)})};const Tt=new Rt({color:15906565,roughness:.5,metalness:.3,wireframe:!1}),lt=new Ft;for(const[q,wt]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])lt.add(V(.12,26,.12,Tt,q,0,wt,{cast:!1}));for(let q=0;q<26;q+=1.6)lt.add(V(1.7,.08,.08,Tt,0,q,-.8,{cast:!1})),lt.add(V(1.7,.08,.08,Tt,0,q,.8,{cast:!1})),lt.add(V(.08,.08,1.7,Tt,-.8,q,0,{cast:!1})),lt.add(V(.08,.08,1.7,Tt,.8,q,0,{cast:!1}));lt.position.set(16,0,-14),c(lt);const Ut=V(34,.9,.9,Tt,6,26,-14,{cast:!1});c(Ut),c(V(2.4,2,2.4,t.navy,16,26.9,-14,{cast:!1}));const Kt=5.5,ut=xe(.012,.012,1,t.darkSteel,Kt,0,-7.2,6,{base:!1});c(ut);const At=V(.25,.35,.15,t.yellow,Kt,0,-7.2,{base:!1});c(At);const Gt=new Ft;Gt.add(xe(.115,.115,1.25,t.cylinder,0,0,0,20)),Gt.add(xe(.025,.03,.12,t.copper,0,1.28,0,10)),Gt.add(V(.08,.08,.08,t.copper,.06,1.36,0));const Zt=new Rt({color:2976991,roughness:.8}),Nt=cn([new S(0,1.75,0),new S(.13,.95,0),new S(0,.82,.13),new S(-.13,.82,0),new S(0,1.75,0)],.012,Zt,30);Gt.add(Nt);const Qt=new Ft;for(const[q,wt]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]])Qt.add(V(.04,1.5,.04,t.orange,q,0,wt));for(const q of[.02,.75,1.48])Qt.add(V(.54,.04,.04,t.orange,0,q,-.25),V(.54,.04,.04,t.orange,0,q,.25),V(.04,.04,.54,t.orange,-.25,q,0),V(.04,.04,.54,t.orange,.25,q,0));Qt.visible=!1;const Ht=new Ft;Ht.add(Gt,Qt);const ee=new S(Kt,d+1.6,-7.3),N=new S(5.6,d,-4.6);Ht.position.copy(ee),c(Ht);let St=!0;const J=()=>{const wt=Ht.position.y+(Qt.visible?1.6:1.9);At.position.set(Ht.position.x,wt,Ht.position.z),ut.scale.y=25.5-wt,ut.position.set(Ht.position.x,(25.5+wt)/2,Ht.position.z)};a.push((q,wt)=>{St&&(Ht.rotation.z=Math.sin(wt*.9)*.04,Ht.rotation.y=wt*.15),J()});const tt=h("CON-06","hazard",Ht,[.8,2.2,.8],[ee.x,ee.y+.8,ee.z],[ee.x,ee.y+2.6,ee.z]);tt.fix=async()=>{St=!1,Ht.rotation.set(0,0,0),Nt.visible=!1,Qt.visible=!0,Gt.position.y=.06,await l(2.2,q=>{Ht.position.set(ze(ee.x,N.x,q),ze(ee.y,N.y,q)+Math.sin(q*Lt)*.6,ze(ee.z,N.z,q))}),r.push(Qt)};const _t=new Ft;_t.add(V(1,.9,.6,t.lockerGrey,0,0,0)),_t.add(V(1.02,.05,.62,t.orange,0,.9,0));const yt=new Y(new se(.7,.26),new me({map:Ne({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));yt.position.set(0,.55,.305),_t.add(yt);const Wt=new Y(new Be(.15,18,12,0,Lt*2,0,Lt/1.6),t.navy);Wt.position.set(-.2,1,0),Wt.scale.set(1,1.1,1.1),_t.add(Wt);const fe=V(.25,.06,.15,new Rt({color:9067059,roughness:.9}),.25,.95,0);_t.add(fe),_t.position.set(-4.6,d,1.6),_t.rotation.y=Lt/2,c(_t,!0),h("PPE","ppe",_t,[.8,1.4,1.2],[-4.6,d+.6,1.6],[-4.6,d+1.8,1.6]),c(new no(14674162,7169628,1.7));const oe=new io(15987178,1.6);return oe.position.set(-10,22,12),oe.target.position.set(0,d,-2),oe.castShadow=!0,oe.shadow.mapSize.set(2048,2048),Object.assign(oe.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:60}),oe.shadow.bias=-4e-4,oe.shadow.normalBias=.02,c(oe),c(oe.target),{root:n,floors:s,blockers:r,interactables:o,floorY:d,spawn:{position:new S(0,d,3.4),yaw:0},bounds:{minX:-7.4,maxX:7.4,minZ:-5.4,maxZ:5.4},atmosphere:{background:12175574,fog:[12175574,30,110],envIntensity:.5,exposure:1},weldSpot:{center:new S(R+.05,d+y,C+.12),standAt:new S(R+.05,d,C+.62),approach:[{p:new S(-.4,d,-2.4)}],bench:{y:d+y,minX:R-.6,maxX:R+.6,minZ:C-.3,maxZ:C+.3}},update(q,wt){for(const ne of a)ne(q,wt)}}}function bv(i){const t=ro(),e=ll(i,"shipyard"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:l,add:c,makeInteractive:h}=e,d=-1.35,u={w:40,d:30,h:14},f=new Y(new se(u.w,u.d),new Rt({map:$h([10,8]),roughness:.85}));f.rotation.x=-Lt/2,f.position.y=d-.3,f.receiveShadow=!0,c(f,!0);const m=new Rt({map:Wr("#b9c2ca",[20,1]),roughness:.6,metalness:.3});for(const[ct,te,zt,ve]of[[u.w,0,-30/2,0],[u.w,0,u.d/2,Lt],[u.d,-40/2,0,Lt/2],[u.d,u.w/2,0,-Lt/2]]){const Re=new Y(new se(ct,u.h),m);Re.position.set(te,d-.3+u.h/2,zt),Re.rotation.y=ve,c(Re,!0)}const x=new Y(new se(u.w,u.d),new Rt({color:4080973,roughness:.9}));x.rotation.x=Lt/2,x.position.y=d-.3+u.h,c(x);for(const ct of[-18,-9,0,9,18])for(const te of[-14,14]){const zt=Xr(u.h,t.columnBlue,.5);zt.position.set(ct,d-.3,te),c(zt,!0)}for(const ct of[-11,-10])c(V(u.w-2,.9,.5,t.yellow,0,10,ct,{cast:!1}));c(V(1.6,1,2.2,t.darkSteel,-5,9.4,-10.5,{cast:!1}));for(const ct of[-12,0,12])for(const te of[-8,2,10]){const zt=new Y(new Yn(.45,20),t.lamp);zt.rotation.x=Lt/2,zt.position.set(ct,12.5,te),c(zt)}const g=new Y(new se(9,2.3),t.navy);g.position.set(0,8.5,u.d/2-.05),g.rotation.y=Lt,c(g);const p=new Y(new se(7,7*381/1867),new me({map:jh(ss),transparent:!0}));p.position.set(0,8.5,u.d/2-.07),p.rotation.y=Lt,c(p);const b=new Rt({map:rs("#7b4a3a",["#5e3529","#8f5b48","#6b4436","#4a2a20"],{repeat:[6,2],seed:5}),roughness:.7,metalness:.3}),_=new Vh;_.moveTo(-7,6),_.lineTo(7,6),_.lineTo(7,2.5),_.quadraticCurveTo(7,0,4,0),_.lineTo(-4,0),_.quadraticCurveTo(-7,0,-7,2.5),_.closePath();const v=new Y(new il(_,{depth:4.5,bevelEnabled:!1}),b);v.position.set(0,d+.6,-14.6),v.castShadow=!0,v.receiveShadow=!0,c(v,!0);const U=new Rt({color:9147547,roughness:.6,metalness:.3}),A=V(6,2.6,3.5,U,-2,d+6.6,-12.4);c(A);for(let ct=-4;ct<=4;ct+=2)c(V(1.2,.9,1.2,t.wood,ct,d-.3,-12.4));const R=new Rt({map:rs("#8a9298",["#6d757b","#a0a8ad","#7a6a5e","#5b6369"],{repeat:[6,5],seed:9}),roughness:.55,metalness:.55}),C={minX:-9.5,maxX:9.5,minZ:-8,maxZ:6},y={minX:-3.2,maxX:4.2,minZ:-5,maxZ:-.8},w=(ct,te,zt,ve)=>{const Re=new Y(new De(te-ct,.04,ve-zt),R);return Re.position.set((ct+te)/2,-.02,(zt+ve)/2),Re.receiveShadow=!0,Re.castShadow=!0,c(Re),s.push(Re),Re};w(C.minX,C.maxX,y.maxZ,C.maxZ),w(C.minX,C.maxX,C.minZ,y.minZ),w(C.minX,y.minX,y.minZ,y.maxZ),w(y.maxX,C.maxX,y.minZ,y.maxZ);const L=new Rt({color:7305344,roughness:.6,metalness:.5});c(V(C.maxX-C.minX,-d+.3,.04,L,0,d-.3,C.maxZ),!0),c(V(C.maxX-C.minX,-d+.3,.04,L,0,d-.3,C.minZ),!0),c(V(.04,-d+.3,C.maxZ-C.minZ,L,C.minX,d-.3,0),!0),c(V(.04,-d+.3,C.maxZ-C.minZ,L,C.maxX,d-.3,0),!0);for(const[ct,te,zt,ve]of[[C.minX,C.minZ,C.maxX,C.minZ],[C.minX,C.maxZ,C.maxX,C.maxZ],[C.minX,C.minZ,C.minX,C.maxZ],[C.maxX,C.minZ,C.maxX,C.maxZ]]){const Re=Math.hypot(zt-ct,ve-te),dn=-Math.atan2(ve-te,zt-ct),E=V(Re,.04,.04,t.yellow,(ct+zt)/2,1,(te+ve)/2);E.rotation.y=dn,c(E);const k=Math.round(Re/1.8);for(let j=0;j<=k;j++)c(V(.05,1.02,.05,t.yellow,ze(ct,zt,j/k),0,ze(te,ve,j/k)))}const B=new Y(new De(y.maxX-y.minX,.02,y.maxZ-y.minZ),new Rt({color:13624309,roughness:.05,metalness:.1,transparent:!0,opacity:.12,depthWrite:!1}));B.position.set((y.minX+y.maxX)/2,-.01,(y.minZ+y.maxZ)/2),c(B),s.push(B);const F=gn(256,32,(ct,te,zt)=>{ct.fillStyle="#f2b705",ct.fillRect(0,0,te,zt),ct.fillStyle="#1a1c1f";for(let ve=-1;ve<9;ve++)ct.beginPath(),ct.moveTo(ve*32,zt),ct.lineTo(ve*32+16,zt),ct.lineTo(ve*32+32,0),ct.lineTo(ve*32+16,0),ct.fill()},{repeat:[8,1]}),X=new Rt({map:F,roughness:.6});for(const[ct,te,zt,ve]of[[(y.minX+y.maxX)/2,y.minZ,y.maxX-y.minX+.2,.1],[(y.minX+y.maxX)/2,y.maxZ,y.maxX-y.minX+.2,.1],[y.minX,(y.minZ+y.maxZ)/2,.1,y.maxZ-y.minZ],[y.maxX,(y.minZ+y.maxZ)/2,.1,y.maxZ-y.minZ]]){const Re=V(zt,.012,ve,X,ct,0,te,{cast:!1});c(Re)}const nt=new Y(new se(1.6,.4),new me({map:Ne({lines:["Training view: tank 4P below"],bg:"#002550",fg:"#ffffff",w:768,h:192}),transparent:!0}));nt.rotation.x=-Lt/2,nt.position.set(-1.6,.008,-.55),c(nt);const W=new Rt({color:12107688,roughness:.7,metalness:.3}),at=new Y(new De(y.maxX-y.minX+1,.04,6.2),W);at.position.set((y.minX+y.maxX)/2,d-.02,-2.2),at.receiveShadow=!0,c(at);const G=(ct,te,zt,ve)=>{const Re=V(zt,-d,ve,W,ct,d,te);return Re.receiveShadow=!0,c(Re),Re};G((y.minX+y.maxX)/2,-5.3,y.maxX-y.minX+1,.04),G((y.minX+y.maxX)/2,.85,y.maxX-y.minX+1,.04),G(y.minX-.4,-2.2,.04,6.2),G(y.maxX+.4,-2.2,.04,6.2);const mt=1;G(mt,-2.2,.04,6.2);for(let ct=-4.6;ct<.6;ct+=.7)c(V(y.maxX-y.minX+1,.12,.012,W,(y.minX+y.maxX)/2,d+.02,ct));const bt=new Y(new se(.05,1),new me({color:16777215}));bt.position.set(mt-.025,d+.65,-3),bt.rotation.y=-Lt/2,c(bt);const Et=new Zn(16773590,6,7,1.6);Et.position.set(-1,-.25,-2.6),c(Et),c(xe(.08,.06,.18,t.yellow,-1,-.45,-2.6,12)),c(cn([new S(-1,-.05,.2),new S(-1,d+.05,0),new S(.2,d+.03,-2.4),new S(.7,d+.03,-2.9)],.015,t.rubber,40));const Bt=new Y(new se(1.1,.55),new me({map:Dc("TANK 4P"),transparent:!0}));Bt.rotation.x=-Lt/2,Bt.position.set(-1,.006,1.2),c(Bt);const ie=new Rt({color:10134442,roughness:.4,metalness:.8}),Q=new Rt({color:15258474,roughness:.95});for(const ct of[-4.2,-3,-1.8]){c(V(2.6,.04,.4,ie,2.6,d+.7,ct));for(let te=0;te<5;te++){const zt=xe(.018,.018,2.6,[t.black,t.red,t.navy][te%3],2.6,d+.76,ct-.15+te*.07,8,{base:!1});zt.rotation.z=Lt/2,c(zt)}}for(let ct=-4.8;ct<.4;ct+=1)c(V(.08,.9,.95,Q,mt+.07,d+.15,ct+.48));const ft=new Zn(14673663,2.5,5,1.6);ft.position.set(2.8,-.3,-2.6),c(ft);const pt=new S(-1,0,.2),gt=new Y(new Yn(1,28),new me({color:724240}));gt.rotation.x=-Lt/2,gt.scale.set(.42,.28,1),gt.position.set(pt.x,.004,pt.z),c(gt);const Pt=new Y(new $n(1,.08,8,28),t.darkSteel);Pt.rotation.x=Lt/2,Pt.scale.set(.44,.3,.4),Pt.position.set(pt.x,.03,pt.z),c(Pt);const jt=V(.9,.03,.62,t.darkSteel,pt.x-1,0,pt.z+.1);c(jt);const $t=new Ft;$t.add(V(.05,1.4,.05,t.galv,-.33,0,0),V(.05,1.4,.05,t.galv,.33,0,0));const Jt=new Rt({map:Ne({header:"Confined space entry",lines:["Permit: —","Attendant: —"],headerBg:"#c21f1f",w:512,h:384}),roughness:.7}),st=new Y(new De(.76,.57,.02),[t.white,t.white,t.white,t.white,Jt,t.white]);st.position.y=1.25,$t.add(st),$t.position.set(-2.4,0,1),$t.rotation.y=.5,c($t,!0);const dt=Un(t),P=V(.05,.12,.03,t.black,.22,1.25,.12);dt.add(P),dt.position.set(-1.7,0,.95),dt.rotation.y=Lt+.6,dt.visible=!1,c(dt);const It=h("SHP-01","hazard",[$t,Pt],[2.2,1.6,1.2],[-1.8,.8,.6],[-2,2.2,.7]);It.fix=async()=>{Jt.map=Ne({header:"Confined space entry",lines:["Permit: valid","Attendant: on duty"],headerBg:"#1f9d55",w:512,h:384}),Jt.needsUpdate=!0,dt.visible=!0,await l(.8,ct=>{dt.position.y=(1-ct)*.3})};const ht=new Ft;ht.add(V(.04,.95,.04,t.galv,0,0,0));const ot=new Ft;ot.add(V(.14,.22,.06,t.yellow,0,0,0));const vt=new me({map:Ne({lines:["– – –"],bg:"#1a1c1f",fg:"#9aa3aa",w:256,h:160})}),Yt=new Y(new se(.1,.065),vt);Yt.position.set(0,.16,.031),ot.add(Yt),ot.position.y=.95,ht.add(ot);const Dt=cn([new S(0,1,.03),new S(.1,.6,.15),new S(.2,.02,.2),new S(.7,.02,-.1)],.006,t.black,24);ht.add(Dt);const T=new Y(new se(.3,.12),new me({map:Ne({lines:["NOT TESTED"],bg:"#c21f1f",fg:"#ffffff",w:256,h:102})}));T.position.set(0,.75,.03),ht.add(T),ht.position.set(.3,0,1.1),ht.rotation.y=-.3,c(ht);const M=h("SHP-02","hazard",ht,[.5,1.3,.5],[.3,.65,1.1],[.3,1.7,1.1]);M.fix=async()=>{vt.map=Ne({lines:["OK"],bg:"#0b2a12",fg:"#32ff6a",w:256,h:160}),vt.needsUpdate=!0,T.material.map=Ne({lines:["TESTED"],bg:"#1f9d55",fg:"#ffffff",w:256,h:102}),T.material.needsUpdate=!0,await l(1.2,ct=>{ot.rotation.y=Math.sin(ct*Lt*2)*.3})};const H=(ct,te=t.cylinder)=>{const zt=new Ft;zt.add(xe(.115,.115,1.25,te,0,0,0,20));const ve=new Y(new Be(.115,20,10,0,Lt*2,0,Lt/2),te);ve.position.y=1.25,zt.add(ve),zt.add(xe(.025,.03,.12,t.copper,0,1.33,0,10));const Re=new Y(new qe(.117,.117,.2,20,1,!0),new Rt({map:gn(512,96,(dn,E,k)=>{dn.fillStyle="#ffffff",dn.fillRect(0,0,E,k),dn.fillStyle="#002550",dn.font="900 46px Gilroy, Arial, sans-serif",dn.textAlign="center",dn.textBaseline="middle",dn.fillText(ct,E/2,k/2+2)}),roughness:.6}));return Re.position.y=.85,zt.add(Re),zt},K=H("ARGON"),rt=new S(-2.4,d,-3.9),et=new S(-4.6,0,1.9);K.position.copy(rt),K.rotation.z=.05,c(K);const Tt=new Ft;Tt.add(V(.6,.05,.4,t.darkSteel,0,0,0),V(.05,1.1,.05,t.darkSteel,-.28,0,-.18),V(.05,1.1,.05,t.darkSteel,.28,0,-.18),V(.6,.05,.05,t.darkSteel,0,1.05,-.18));const lt=new Y(new $n(.13,.009,6,32),t.darkSteel);lt.rotation.x=Lt/2,lt.position.set(0,.95,0),lt.visible=!1,Tt.add(lt),Tt.position.set(et.x,0,et.z),c(Tt);const Ut=h("SHP-03","hazard",K,[.5,1.75,.5],[rt.x,d+.85,rt.z],[rt.x,.6,rt.z]);Ut.fix=async()=>{const ct=new S(pt.x,d,pt.z-.1);await l(1,zt=>{K.position.lerpVectors(rt,ct,zt),K.rotation.z=ze(.05,0,zt)}),await l(1,zt=>{K.position.set(pt.x,ze(d,.1,zt),pt.z)});const te=K.position.clone();await l(1.2,zt=>{K.position.lerpVectors(te,et,zt),K.position.y=Math.sin(zt*Lt)*.15}),lt.visible=!0};const Kt=new Ft;Kt.add(xe(.32,.32,.45,t.yellow,0,.2,0,24,{base:!1}).rotateZ(Lt/2)),Kt.add(V(.5,.2,.5,t.darkSteel,0,0,0));const ut=new Y(new Yn(.3,24),t.black);ut.position.set(-.23,.42,0),ut.rotation.y=-Lt/2,Kt.add(ut),Kt.position.set(-3.6,0,1.4),Kt.rotation.y=.3,c(Kt,!0);const At=new Rt({color:15906565,roughness:.75,side:Qe});let Gt=null;const Zt=ct=>{const te=new S(ze(pt.x,.55,ct),ze(-.25,d+.75,ct),ze(pt.z,-2.95,ct)),zt=[new S(-3.3,.42,1.25),new S(-2.3,.18,.7),new S(pt.x-.2,.25,pt.z+.1),new S(pt.x,-.1,pt.z)];return ct>.02&&zt.push(new S(ze(pt.x,-.3,ct),ze(-.2,d+.6,ct),ze(pt.z,-1.2,ct))),zt.push(te),zt},Nt=ct=>{Gt&&(n.remove(Gt),Gt.geometry.dispose()),Gt=cn(Zt(ct),.13,At,48),n.add(Gt)};Nt(0);const Qt=h("SHP-04","hazard",Kt,[1.6,.9,1],[-3,.4,1.1],[-3.2,1.4,1.2]),Ht=Qt.setHighlight;Qt.setHighlight=ct=>{Ht(ct),At.emissive.set(ct?16739072:0),At.emissiveIntensity=ct?.5:0},Qt.fix=()=>l(1.8,ct=>Nt(ct));const ee=H("OXYGEN",new Rt({color:15199471,roughness:.4,metalness:.5}));ee.position.set(1.6,0,1.6),c(ee);const N=Un(t);N.position.set(0,0,.55),N.rotation.y=-Lt/2-.4,N.userData.arms[0].rotation.x=-.9,N.userData.arms[1].rotation.x=-.9,c(N);const St=cn([new S(1.6,1.4,1.6),new S(1,.4,1.2),new S(.2,.9,.5),new S(-.5,.5,.3),new S(pt.x+.1,-.2,pt.z-.05)],.012,new Rt({color:3104691,roughness:.6}),40);c(St);const J=new Ft,tt=new me({color:14674175,transparent:!0,opacity:.35,depthWrite:!1});for(let ct=0;ct<6;ct++){const te=new Y(new Be(.03,8,6),tt);J.add(te)}J.position.set(pt.x+.1,-.25,pt.z-.05),c(J),a.push((ct,te)=>{J.children.forEach((zt,ve)=>{const Re=(te*.8+ve/6)%1;zt.position.set(Math.sin(ve*2)*Re*.2,-Re*.6,Math.cos(ve*3)*Re*.2),zt.scale.setScalar(.5+Re*2)})});const _t=h("SHP-07","hazard",[N,ee],[1.9,1.9,1.3],[.7,.95,1],[.6,2.2,.9]);_t.fix=async()=>{St.visible=!1,J.visible=!1,N.userData.arms[0].rotation.x=0,N.userData.arms[1].rotation.x=0;const ct=N.position.clone();N.rotation.y=0,await l(1.6,te=>{N.position.set(ze(ct.x,3.2,te),0,ze(ct.z,4.4,te));const zt=Math.sin(te*24)*.4;N.userData.legs[0].rotation.x=zt,N.userData.legs[1].rotation.x=-zt})};const yt=Un(t);yt.scale.setScalar(.72);const Wt=Kh(t);Wt.position.set(.32,0,.1),Wt.scale.setScalar(1/.72*.8),yt.add(Wt),yt.position.set(2.7,d,-2.4),yt.rotation.y=-Lt/2,yt.visible=!1,c(yt);const fe=h("SHP-05","hazard",[],[2.8,1.8,3.6],[2.6,d+.85,-3],[2.6,.6,-3]);fe.setHighlight=ct=>{Q.emissive.set(ct?16739072:0),Q.emissiveIntensity=ct?.4:0,ie.emissive.set(ct?16739072:0),ie.emissiveIntensity=ct?.4:0},fe.fix=async()=>{yt.visible=!0,await l(.8,ct=>{yt.position.y=d+(1-ct)*.2})};const oe=new Ft;oe.add(V(.05,1.5,.05,t.galv,-.33,0,0),V(.05,1.5,.05,t.galv,.33,0,0));const q=new Rt({map:Ne({header:"Hot work certificate",lines:["Space: TANK 3P","Gas free: yes"],headerBg:"#006ce9",w:512,h:384}),roughness:.7}),wt=new Y(new De(.76,.57,.02),[t.white,t.white,t.white,t.white,q,t.white]);wt.position.y=1.32,oe.add(wt),oe.position.set(-4.4,0,-.2),oe.rotation.y=.6,c(oe,!0);const ne=h("SHP-06","hazard",oe,[.9,1.8,.5],[-4.4,.95,-.2],[-4.4,2.3,-.2]);ne.fix=async()=>{await l(.4,ct=>{wt.rotation.y=ct*Lt/2}),q.map=Ne({header:"Hot work certificate",lines:["Space: TANK 4P","Gas free: yes · valid today"],headerBg:"#1f9d55",w:512,h:384}),q.needsUpdate=!0,await l(.4,ct=>{wt.rotation.y=(1-ct)*Lt/2})};const _e=new Ft;_e.add(V(.9,1.9,.5,t.lockerGrey,0,0,0));const Me=new Y(new se(.8,.3),new me({map:Ne({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));Me.position.set(0,2.15,.02),_e.add(Me);const Pe=new Y(new Be(.15,18,12,0,Lt*2,0,Lt/1.6),t.navy);Pe.position.set(-.2,2,0),_e.add(Pe),_e.position.set(6.4,0,2.6),_e.rotation.y=-Lt/2,c(_e,!0),h("PPE","ppe",_e,[.7,2.2,1.2],[6.45,1.05,2.6],[6.4,2.6,2.6]);const Mt=-1.4,re=-3.3,be=d+.32;c(V(.7,be-d,.45,W,Mt,d,re),!0);const ge=new Y(new se(.5,.18),new me({map:Dc("WELD HERE",{color:"#ff6b00"}),transparent:!0}));ge.position.set(Mt,d+.005,re+.45),ge.rotation.x=-Lt/2,c(ge),c(new no(15331576,7038560,1.3));const Fe=new io(16774890,1.6);Fe.position.set(8,16,10),Fe.target.position.set(0,0,-2),Fe.castShadow=!0,Fe.shadow.mapSize.set(2048,2048),Object.assign(Fe.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:50}),Fe.shadow.bias=-4e-4,Fe.shadow.normalBias=.02,c(Fe),c(Fe.target);for(const[ct,te]of[[-8,-4],[8,-4],[-8,6],[8,6]]){const zt=new Zn(16773596,40,22,1.6);zt.position.set(ct,9,te),c(zt)}return{root:n,floors:s,blockers:r,interactables:o,floorY:0,spawn:{position:new S(.5,0,4.4),yaw:0},bounds:{minX:-9,maxX:9,minZ:-7.5,maxZ:5.5},weldSpot:{center:new S(Mt,be,re+.05),standAt:new S(Mt,d,re+.55),eye:.95,approach:[{p:new S(-1,0,.95)},{p:new S(-1,0,.25)},{p:new S(-1,d,.2),eye:1},{p:new S(-1.35,d,-1.9),eye:1}],bench:{y:be,minX:Mt-.35,maxX:Mt+.35,minZ:re-.22,maxZ:re+.22}},update(ct,te){for(const zt of a)zt(ct,te)}}}function Ev(i){const t=ro(),e=ll(i,"underwater"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:l,add:c,makeInteractive:h}=e,d=1,u=-6.5,f=new S(.6,0,-6.2),m=-4,x=new Rt({color:1927802,roughness:.15,metalness:.2,transparent:!0,opacity:.42,side:Qe,depthWrite:!1}),g=new Y(new se(160,160,1,1),x);g.rotation.x=-Lt/2,g.position.y=0,g.renderOrder=5,c(g);const p=new Y(new se(80,80),new Rt({map:rs("#6f6a52",["#5a553f","#857e63","#4a4635","#9a9276"],{repeat:[16,16],seed:21}),roughness:1}));p.rotation.x=-Lt/2,p.position.y=u,p.receiveShadow=!0,c(p,!0);const b=new Rt({color:5069394,roughness:1});for(let Mt=0;Mt<30;Mt++){const re=new Y(new nl(.2+Mt*7%5*.12,0),b);re.position.set(-12+Mt*53%24,u+.05,-14+Mt*31%12),re.rotation.set(Mt,Mt*2,Mt*3),c(re)}const _=new Rt({map:rs("#6b5a4a",["#4b3f33","#7d6a57","#3f5a4a","#8a7a62"],{repeat:[1,6],seed:17}),roughness:.85,metalness:.3}),v=3.4;for(const Mt of[-11.4,-5.4,f.x,6.6,12.6])for(const re of[-6.2,-11.2])c(xe(.38,.38,v-u,_,Mt,u,re,24),!0);c(V(26,.5,6.4,new Rt({color:9147032,roughness:.8}),.6,v,-8.7),!0);for(const Mt of[-6.2,-11.2]){const re=Xn(26,t.darkSteel,.5,.25);re.position.set(.6,v-.25,Mt),c(re)}for(const Mt of[-11.4,-5.4,f.x,6.6,12.6])c(xe(.4,.4,.8,new Rt({color:3099187,roughness:1}),Mt,-.9,-6.2,24));c(V(160,3,20,new Rt({color:8161898,roughness:1}),0,-1,-70,{cast:!1}));for(let Mt=0;Mt<10;Mt++)c(V(6+Mt%3*3,6+Mt*5%10,6,new Rt({color:[12107976,10135218,13685976][Mt%3]}),-40+Mt*9,2,-64,{cast:!1}));const U=V(12,2.2,9,new Rt({color:599e4,roughness:.7,metalness:.4}),-2,d-2.2,2.5);c(U,!0);const A=new Y(new De(12,.06,9),new Rt({map:rs("#7c858c",["#5f676d","#949ca2","#6b5a4a"],{repeat:[6,4],seed:4}),roughness:.7,metalness:.4}));A.position.set(-2,d-.03,2.5),A.receiveShadow=!0,c(A),s.push(A);const R=(Mt,re,be,ge)=>{const Fe=Math.hypot(be-Mt,ge-re),ct=-Math.atan2(ge-re,be-Mt);for(const zt of[.55,1.05]){const ve=V(Fe,.04,.04,t.yellow,(Mt+be)/2,d+zt,(re+ge)/2);ve.rotation.y=ct,c(ve)}const te=Math.max(1,Math.round(Fe/1.5));for(let zt=0;zt<=te;zt++)c(V(.05,1.07,.05,t.yellow,ze(Mt,be,zt/te),d,ze(re,ge,zt/te)))};R(-8,-2,-1.4,-2),R(-.2,-2,4,-2),R(-8,7,4,7),R(-8,-2,-8,7),R(4,-2,4,7),r.push();const C=new Ft;C.add(V(.05,4.2,.05,t.galv,-.3,-3.2,0),V(.05,4.2,.05,t.galv,.3,-3.2,0));for(let Mt=-3;Mt<1;Mt+=.3)C.add(V(.6,.03,.04,t.galv,0,Mt,0));C.position.set(-.8,d-.2,-2.1),c(C),c(V(.12,2.6,.12,t.orange,-2.4,d,-1.7),V(.12,2.6,.12,t.orange,.8,d,-1.7),V(3.3,.12,.12,t.orange,-.8,d+2.6,-1.7));const y=V(3,2.4,2.2,new Rt({color:9552,roughness:.6,metalness:.3}),-5.8,d,5.4);c(y,!0);const w=new Y(new se(2,.5),new me({map:Ne({lines:["DIVE CONTROL"],bg:"#002550",fg:"#ffffff",w:512,h:128})}));w.position.set(-5.8,d+1.9,4.29),w.rotation.y=Lt,c(w);const L=w.clone();L.position.set(-5.8,d+1.9,4.29),L.rotation.y=0,L.position.z=4.29,c(L);const B=new Ft;B.add(V(1.6,.8,.7,t.lockerGrey,0,0,0));const F=new Ft;F.add(V(.5,.28,.32,t.black,0,0,0));const X=new me({map:Ne({lines:["COMMS OFF"],bg:"#1a1c1f",fg:"#5b6369",w:256,h:96})}),nt=new Y(new se(.3,.11),X);nt.position.set(0,.16,.162),F.add(nt);const W=new Y(new Be(.025,10,8),new Rt({color:2236962,emissive:0}));W.position.set(.19,.06,.165),F.add(W),F.position.set(-.3,.8,0),B.add(F);const at=new Y(new $n(.09,.015,8,20,Lt),t.black);at.position.set(.45,.84,.1),B.add(at),B.position.set(-3.6,d,.6),B.rotation.y=.2,c(B,!0),c(V(1.4,.45,.45,t.wood,-5.6,d,1.2));const G=Un(t);G.traverse(Mt=>{Mt.material===t.hivis&&(Mt.visible=!1)}),G.position.set(-5.6,d-.42,1.2),G.rotation.y=Lt/2,G.userData.legs.forEach(Mt=>{Mt.rotation.x=-Lt/2}),c(G);const mt=Ic(t,!1);mt.position.set(-1.9,d,-1.3),mt.rotation.y=Lt,mt.visible=!1,c(mt);const bt=h("UW-05","hazard",[B,G],[3.2,1.6,1.8],[-4.4,d+.7,.9],[-4,d+1.9,.8]);bt.fix=async()=>{X.map=Ne({lines:["COMMS OK"],bg:"#0b2a12",fg:"#32ff6a",w:256,h:96}),X.needsUpdate=!0,W.material.emissive.set(2883434),W.material.emissiveIntensity=2,await l(.5,Mt=>{G.position.y=d-.42+Mt*.3}),G.visible=!1,mt.visible=!0};const Et=new Ft;Et.add(V(.8,.9,.6,t.machine,0,0,0)),Et.add(V(.82,.05,.62,t.orange,0,.9,0));const Bt=new me({map:Ne({lines:["AC"],bg:"#c21f1f",fg:"#ffffff",w:256,h:160})}),ie=new Y(new se(.32,.2),Bt);ie.position.set(0,.6,.302),Et.add(ie),Et.position.set(2.4,d,2.2),Et.rotation.y=-.3,c(Et,!0);const Q=cn([new S(2.75,d+.1,2.3),new S(3.1,d+.02,2.6),new S(3.4,d+.02,3.2)],.012,new Rt({color:3120708,roughness:.6}),16);Q.visible=!1,c(Q);const ft=h("UW-02","hazard",Et,[1.1,1.2,.9],[2.4,d+.55,2.2],[2.4,d+1.7,2.2]);ft.fix=async()=>{await l(.4,Mt=>{Et.scale.setScalar(1-Mt*.15)}),Bt.map=Ne({lines:["DC"],bg:"#1f9d55",fg:"#ffffff",w:256,h:160}),Bt.needsUpdate=!0,Q.visible=!0,await l(.4,Mt=>{Et.scale.setScalar(.85+Mt*.15)})};const pt=new Ft;pt.add(V(.06,1.1,.06,t.darkSteel,0,0,0)),pt.add(V(.42,.5,.12,t.navy,0,1.05,0));const gt=new Y(new se(.34,.1),new me({map:Ne({lines:["SAFETY SWITCH"],bg:"#f2b705",fg:"#002550",w:384,h:112})}));gt.position.set(0,1.42,.061),pt.add(gt);for(const Mt of[-.1,.1])pt.add(V(.04,.08,.05,t.copper,Mt,1.08,.08));const Pt=new Ft;Pt.position.set(0,1.12,.1);const jt=V(.28,.03,.025,t.copper,0,-.015,0,{base:!1});Pt.add(jt);const $t=V(.05,.1,.05,t.red,.15,.04,0,{base:!1});Pt.add($t),Pt.rotation.z=0,pt.add(Pt),pt.position.set(.9,d,-1.2),pt.rotation.y=-.4,c(pt,!0);const Jt=Un(t);Jt.position.set(-6.8,d,3.4),Jt.rotation.y=Lt/2;const st=new Y(new $n(.12,.018,8,20,Lt),t.black);st.position.set(0,1.72,0),st.visible=!1,Jt.add(st),c(Jt);const dt=h("UW-01","hazard",pt,[.7,1.6,.6],[.9,d+.85,-1.2],[.9,d+2,-1.2]);dt.fix=async()=>{await l(.6,be=>{Pt.rotation.z=be*1.2});const Mt=Jt.position.clone(),re=new S(.5,d,-.4);Jt.rotation.y=Math.atan2(re.x-Mt.x,re.z-Mt.z),await l(2,be=>{Jt.position.lerpVectors(Mt,re,be);const ge=Math.sin(be*30)*.4;Jt.userData.legs[0].rotation.x=ge,Jt.userData.legs[1].rotation.x=-ge}),Jt.rotation.y=Lt*.85,st.visible=!0};const P=Ic(t,!0);P.position.set(f.x,m-1,f.z+1.4),P.rotation.y=Lt,c(P),c(cn([new S(f.x,m+.75,f.z+1.6),new S(.2,-2.2,-3.6),new S(-.6,-.3,-2.4),new S(-.8,d+.2,-1.9)],.025,new Rt({color:15906565,roughness:.7}),40));const It=new S(f.x+.18,m+.05,f.z+1);c(cn([new S(2.4,d+.5,1.9),new S(2,-.4,-1.8),new S(1.4,-2.6,-4.6),It.clone().add(new S(.1,-.2,.25)),It],.02,t.rubber,48));const ht=new Y(new se(.35,.25),new Rt({color:11581114,roughness:.4,metalness:.8}));ht.position.set(f.x,m,f.z+.385),c(ht);const ot=new Ft,vt=V(.08,.035,.04,t.copper,.1,0,0,{base:!1});ot.add(vt);const Yt=xe(.025,.022,.18,new Rt({color:3811872,roughness:.9}),0,0,0,10,{base:!1});Yt.rotation.z=Lt/2,ot.add(Yt);const Dt=xe(.03,.03,.26,t.black,.03,0,0,12,{base:!1});Dt.rotation.z=Lt/2,Dt.visible=!1,ot.add(Dt);const T=xe(.003,.003,.3,t.steel,.24,0,0,6,{base:!1});T.rotation.z=Lt/2-.3,ot.add(T),ot.position.copy(It),ot.rotation.y=Lt/2+.3,c(ot);const M=new Ft,H=new Rt({color:15267583,roughness:.05,metalness:.4,transparent:!0,opacity:.7});for(let Mt=0;Mt<10;Mt++)M.add(new Y(new Be(.018,8,6),H));const K=new S(1.4,-2.6,-4.6);M.position.copy(K),c(M);const rt=xe(.035,.035,.12,new Rt({color:2829099,roughness:.6}),K.x,K.y,K.z,10,{base:!1});c(rt),a.push((Mt,re)=>{M.visible&&M.children.forEach((be,ge)=>{const Fe=(re*.35+ge/10)%1;be.position.set(Math.sin(ge*3+re)*.05,Fe*2.6,Math.cos(ge*2)*.05),be.visible=K.y+Fe*2.6<-.05})});const et=h("UW-06","hazard",[ot],[.9,.7,.9],[It.x,It.y,It.z+.1],[It.x+.3,m+.9,It.z+.2]);et.fix=async()=>{await l(.5,Mt=>{ot.scale.setScalar(1-Mt*.5)}),vt.visible=!1,Yt.visible=!1,Dt.visible=!0,M.visible=!1,rt.material.color.set(1118481),await l(.5,Mt=>{ot.scale.setScalar(.5+Mt*.5)})};const Tt=new Ft;Tt.add(V(.12,.08,.08,t.copper,0,0,0,{base:!1}),V(.03,.14,.06,t.black,.07,.05,0,{base:!1})),Tt.scale.setScalar(1.8),c(V(.12,1.6,.12,t.darkSteel,1.2,-2.3,-2.75));const lt=new S(1.2,-1.5,-2.7),Ut=new S(f.x+.32,m-.28,f.z+.3);Tt.position.copy(lt),c(Tt);let Kt=null;const ut=()=>{Kt&&(n.remove(Kt),Kt.geometry.dispose());const Mt=new S(2.6,d+.3,1.9),re=Tt.position.clone();Kt=cn([Mt,new S(2.4,-.3,-1.6),new S((Mt.x+re.x)/2+.6,(re.y-.3)/1.4,(Mt.z+re.z)/2-.6),re],.018,new Rt({color:1776928,roughness:.7}),40),n.add(Kt)};ut();const At=h("UW-03","hazard",Tt,[.8,.8,.8],[lt.x,lt.y,lt.z],[lt.x,lt.y+.9,lt.z]);At.fix=()=>l(2,Mt=>{Tt.position.lerpVectors(lt,Ut,Mt),Tt.position.z+=Math.sin(Mt*Lt)*.5,ut()});const Gt=new Rt({color:5595242,roughness:.6,metalness:.6,side:Qe}),Zt=new Ft,Nt=new Y(new qe(.62,.62,.9,32,1,!0,Lt*.15,Lt*1.7),Gt);Nt.rotation.y=Lt,Zt.add(Nt);const Qt=new Y(new to(.38,.62,32,1,Lt*.15,Lt*1.7),Gt);Qt.rotation.x=-Lt/2,Qt.rotation.z=Lt,Qt.position.y=.45,Zt.add(Qt),Zt.position.set(f.x,m+.75,f.z),c(Zt);const Ht=new Rt({color:14676735,emissive:10471654,emissiveIntensity:.7,roughness:.02,metalness:.9,transparent:!0,opacity:.9}),ee=new Y(new $n(.5,.1,10,32,Lt*1.6),Ht);ee.rotation.x=Lt/2,ee.rotation.z=Lt*.2,ee.scale.set(1,1,.6),ee.position.set(f.x,m+1.12,f.z),c(ee);const N=cn([new S(f.x+.5,m+1.2,f.z+.2),new S(f.x+.75,m+2.4,f.z+.35),new S(f.x+.6,.2,f.z+.4),new S(f.x+.55,.9,f.z+.4)],.03,new Rt({color:16739072,roughness:.6}),40);N.visible=!1,c(N);const St=h("UW-04","hazard",[Zt,ee],[1.5,1.2,1.5],[f.x,m+.85,f.z+.2],[f.x-.8,m+1.6,f.z+.5]);St.fix=async()=>{N.visible=!0,await l(1.6,Mt=>{ee.scale.set(1-Mt*.9,1-Mt*.9,.6*(1-Mt))}),ee.visible=!1};const J=new Ft;J.add(V(1.4,1.8,.5,t.lockerGrey,0,0,0));const tt=new Y(new se(1.1,.28),new me({map:Ne({lines:["DIVER PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:130})}));tt.position.set(0,2.05,.02),J.add(tt);const _t=new Y(new Be(.17,18,14),t.yellow);_t.position.set(-.35,1.95,0),J.add(_t);const yt=xe(.08,.08,.55,t.yellow,.35,1.8,0,14);J.add(yt),J.position.set(-7.2,d,2.6),J.rotation.y=Lt/2,c(J,!0),h("PPE","ppe",J,[.8,2.3,1.6],[-7.15,d+1.05,2.6],[-7.2,d+2.7,2.6]);const Wt=f.x,fe=f.z+.75,oe=m-.32;c(V(.6,.03,.5,t.darkSteel,Wt,oe-.03,fe),!0),c(V(.08,.5,.08,t.darkSteel,Wt-.2,oe-.5,fe-.22),V(.08,.5,.08,t.darkSteel,Wt+.2,oe-.5,fe-.22)),c(new no(14675706,4020826,1.6));const q=new io(16774370,1.8);q.position.set(8,20,10),q.target.position.set(-1,0,0),q.castShadow=!0,q.shadow.mapSize.set(2048,2048),Object.assign(q.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:60}),q.shadow.bias=-4e-4,q.shadow.normalBias=.02,c(q),c(q.target);const wt=new Zn(13626111,6,6,1.5);wt.position.set(f.x+.4,m+.6,f.z+1.2),c(wt);const ne=new Zn(12575743,4,7,1.5);ne.position.set(f.x-.6,m+.4,f.z+1.4),c(ne);const _e={bg:new le(12375011),fog:new le(12375011)},Me=new le(1791328),Pe=new S;return a.push((Mt,re)=>{g.position.y=Math.sin(re*.6)*.02,i.camera.getWorldPosition(Pe);const be=Pe.y<g.position.y,ge=i.scene;ge.fog&&(be?(ge.background=Me,ge.fog.color.copy(Me),ge.fog.near=.5,ge.fog.far=13):(ge.background=_e.bg,ge.fog.color.copy(_e.fog),ge.fog.near=40,ge.fog.far=140))}),{root:n,floors:s,blockers:r,interactables:o,floorY:d,spawn:{position:new S(-1.2,d,4.6),yaw:0},bounds:{minX:-7.4,maxX:3.6,minZ:-1.6,maxZ:6.6},atmosphere:{background:12375011,fog:[12375011,40,140],envIntensity:.5,exposure:1},underwater:!0,weldSpot:{center:new S(Wt,oe,fe+.05),standAt:new S(Wt,oe-.85,fe+.55),bench:{y:oe,minX:Wt-.3,maxX:Wt+.3,minZ:fe-.25,maxZ:fe+.25},hide:[P,ot],approach:[{p:new S(-.8,d,-1.45)},{p:new S(-.8,d,-2)},{p:new S(-.8,-1.6,-2.35)},{p:new S(-.1,-3.9,-3.8)}]},update(Mt,re){for(const be of a)be(Mt,re)}}}function Ic(i,t){const e=Un(i),n=new Rt({color:1776928,roughness:.6});e.traverse(a=>{a.isMesh&&(a.material===i.hivis||a.material===i.white?a.visible=!1:a.material===i.navy&&(a.material=n))});const s=new Y(new Be(.19,20,16),i.yellow);s.position.y=1.7,s.castShadow=!0,e.add(s);const r=new Y(new Yn(.09,20),new Rt({color:793100,roughness:.1,metalness:.6}));r.position.set(0,1.7,.185),e.add(r);const o=new Y(new qe(.07,.07,.45,12),i.yellow);o.position.set(0,1.25,-.24),e.add(o);for(const a of[-.1,.1]){const l=new Y(new De(.12,.02,.3),i.black);l.position.set(a,.03,.12),e.add(l)}return t&&e.userData.arms.forEach(a=>{a.rotation.x=-1.2,a.position.z=.15}),e}const Tv={id:"factory",hazards:[{id:"AREA-01",correct:1},{id:"VEN-01",correct:2},{id:"RAD-01",correct:0},{id:"GAS-01",correct:0},{id:"ELE-02",correct:2},{id:"AREA-02",correct:0},{id:"FAC-05",correct:1}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,2,0,1,0],passScore:.8},Av={id:"construction",hazards:[{id:"CON-01",correct:1},{id:"CON-02",correct:0},{id:"CON-03",correct:1},{id:"CON-04",correct:0},{id:"CON-05",correct:2},{id:"CON-06",correct:0}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,0,2,1,2],passScore:.8},Cv={id:"shipyard",hazards:[{id:"SHP-01",correct:1},{id:"SHP-02",correct:0},{id:"SHP-03",correct:2},{id:"SHP-04",correct:1},{id:"SHP-05",correct:2},{id:"SHP-06",correct:0},{id:"SHP-07",correct:0}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,1,2,0,1],passScore:.8},Rv={id:"underwater",hazards:[{id:"UW-01",correct:1},{id:"UW-02",correct:0},{id:"UW-03",correct:2},{id:"UW-04",correct:1},{id:"UW-05",correct:2},{id:"UW-06",correct:0}],ppe:[{id:"UPPE-01",correct:1},{id:"UPPE-02",correct:2},{id:"UPPE-03",correct:0}],quiz:[2,0,1,2,1],passScore:.8,practiceProcesses:["SMAW"]},cl="seabery-vrw-records-v1";function hl(){try{return JSON.parse(localStorage.getItem(cl))||[]}catch{return[]}}function Jh(i){try{const t=hl();t.unshift({...i,at:new Date().toISOString()}),localStorage.setItem(cl,JSON.stringify(t.slice(0,200)))}catch{}}function Pv(){try{localStorage.removeItem(cl)}catch{}}function Uc(){const i={};for(const t of hl()){if(t.type!=="check")continue;const e=i[t.env];(!e||t.score>e.score||t.score===e.score&&t.pass&&!e.pass)&&(i[t.env]={score:t.score,pass:t.pass})}return i}function Lv(i){const t=new Date(i),e=n=>String(n).padStart(2,"0");return`${e(t.getDate())}/${e(t.getMonth()+1)}/${t.getFullYear()} ${e(t.getHours())}:${e(t.getMinutes())}`}const rn=(i,t=.5,e=.3)=>new Rt({color:i,roughness:t,metalness:e});function we(i,t,e,n,s,r=16){const o=new Y(new qe(t,i,n-e,r),s);return o.position.y=(e+n)/2,o.castShadow=!1,o}function Dv(i){const t=new Ft;t.name=`torch-${i}`;const e=rn(1776928,.7,.1),n=rn(9552,.55,.2),s=rn(16739072,.5,.1),r=rn(12088115,.35,.9),o=rn(10133670,.4,.85),a={group:t,process:i,length:0,handY:()=>.17,setLength(){}};if(i==="GMAW"){t.add(we(9e-4,9e-4,0,.013,o,6)),t.add(we(.0035,.004,.011,.016,r,10)),t.add(we(.0085,.0095,.013,.048,r,18)),t.add(we(.0075,.0075,.048,.115,e,14)),t.add(we(.016,.018,.115,.245,n,16));const l=new Y(new De(.008,.035,.014),s);l.position.set(0,.15,-.019),t.add(l),t.add(we(.009,.009,.245,.31,e,10)),a.handY=()=>.17}else if(i==="SMAW"){const l=we(.0022,.0022,0,1,rn(9210496,.9,.05),8),c=we(.0014,.0014,0,.022,o,6),h=new Ft;h.add(we(.009,.009,0,.03,r,12)),h.add(we(.016,.018,.03,.16,e,16)),h.add(we(.011,.011,.16,.22,e,10)),t.add(l,c,h),a.setLength=d=>{a.length=d,l.scale.y=Math.max(.001,d),l.position.y=d/2,c.position.y=d+.002,h.position.y=d+.012},a.handY=()=>a.length+.09,a.setLength(.3)}else if(i==="OAW"||i==="TB"){const l=rn(13214026,.35,.85);t.add(we(.0016,.0022,.012,.022,r,10));const c=we(.0028,.0028,.022,.11,r,10);t.add(c),t.add(we(.006,.006,.11,.13,l,12)),t.add(we(.011,.012,.13,.26,rn(9278362,.35,.85),16));for(const[h,d]of[[2056120,.013],[12721951,-.013]]){const u=new Y(new qe(.008,.008,.008,14),rn(h,.5,.1));u.rotation.x=Math.PI/2,u.position.set(0,.24,d*1.6),t.add(u)}for(const[h,d]of[[2056120,.004],[12721951,-.004]]){const u=we(.0045,.0045,.26,.34,rn(h,.7,.05),10);u.position.x=d,t.add(u)}a.flame=Uv(),t.add(a.flame.group),a.handY=()=>.19}else if(i==="PAC"){t.add(we(.0035,.0055,0,.012,r,16)),t.add(we(.0075,.009,.012,.03,rn(3816770,.6,.3),16)),t.add(we(.012,.012,.03,.07,e,16)),t.add(we(.015,.017,.07,.2,n,16));const l=new Y(new De(.008,.032,.012),s);l.position.set(0,.12,-.018),t.add(l),t.add(we(.009,.009,.2,.27,e,10)),a.handY=()=>.14}else if(i==="RSW"){const l=rn(3159098,.6,.5);t.add(we(.0035,.006,0,.012,r,14)),t.add(we(.006,.006,.012,.05,r,12)),t.add(we(.012,.012,.05,.1,l,14));const c=new Y(new De(.018,.018,.12),l);c.position.set(0,.11,.06),t.add(c);const h=new Y(new De(.018,.2,.018),l);h.position.set(0,.02,.115),t.add(h);const d=new Y(new De(.018,.018,.12),l);d.position.set(0,-.07,.06),t.add(d);const u=we(.006,.0035,-.07,-.0035,r,14);t.add(u),t.add(we(.016,.017,.12,.24,n,16));const f=new Y(new De(.008,.03,.012),s);f.position.set(0,.17,-.019),t.add(f),a.handY=()=>.18}else if(i==="RSEW"){const l=rn(3159098,.6,.5),c=.026,h=new qe(c,c,.006,32),d=new Y(h,r);d.rotation.x=Math.PI/2,d.position.y=c,t.add(d);const u=new Y(h,r);u.rotation.x=Math.PI/2,u.position.y=-c-.0035,t.add(u);for(const x of[.008,-.008]){const g=new Y(new De(.01,.06,.003),l);g.position.set(0,c+.02,x),t.add(g)}const f=new Y(new De(.014,.014,.1),l);f.position.set(0,-c-.0035,.05),t.add(f);const m=new Y(new De(.014,.12,.014),l);m.position.set(0,0,.1),t.add(m),t.add(we(.012,.012,.05,.08,l,14)),t.add(we(.016,.017,.08,.2,n,16)),a.wheels=[d,u],a.roll=x=>{d.rotation.y-=x/c,u.rotation.y+=x/c},a.handY=()=>.14}else t.add(we(2e-4,.0012,0,.006,rn(7238522,.3,.9),8)),t.add(we(.0055,.008,.005,.025,rn(15193030,.8,0),18)),t.add(we(.011,.011,.025,.06,e,16)),t.add(we(.007,.007,.06,.1,e,12)),t.add(we(.012,.013,.06,.19,n,16)),t.add(we(.008,.008,.19,.25,e,10)),a.handY=()=>.13;return a}function Iv(i=12946778){const t=new Ft;return t.add(we(.0012,.0012,0,.5,rn(i,.35,.9),8)),{group:t,handY:()=>.3}}function Uv(){const i=new Ft,t=(r,o)=>new me({color:r,transparent:!0,opacity:o,blending:os,depthWrite:!1,toneMapped:!1}),e=new Y(new zs(.0021,.012,14,1,!0),t(14676223,.95));e.rotation.x=Math.PI,e.position.y=.006;const n=new Y(new zs(.0034,.02,14,1,!0),t(7183615,.5));n.rotation.x=Math.PI,n.position.y=.002;const s=new Y(new zs(.0065,.055,16,1,!0),t(3825624,.22));s.rotation.x=Math.PI,s.position.y=-.016;for(const r of[e,n,s])r.renderOrder=962,i.add(r);return i.visible=!1,{group:i,update(r,o){if(i.visible=o,!o)return;const a=1+Math.sin(r*37)*.05+(Math.random()-.5)*.08;s.scale.set(a,1+(Math.random()-.5)*.12,a),n.scale.setScalar(1+(Math.random()-.5)*.06)}}}function Hs(i,t=128){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(const[o,a]of i)s.addColorStop(o,a);n.fillStyle=s,n.fillRect(0,0,t,t);const r=new Ja(e);return r.colorSpace=Je,r}const Or=(i,t)=>new Kr({map:i,color:t,blending:os,transparent:!0,depthWrite:!1,toneMapped:!1});class Nv{constructor(t,e=2e3){const n=new Be(1,14,8);this.cap=e,this.metal=new ko(n,new Rt({color:16777215,roughness:.32,metalness:.85}),e),this.slag=new ko(n,new Rt({color:16777215,roughness:.95,metalness:.05}),e),this.glow=new ko(n,new me({color:16777215,blending:os,transparent:!0,depthWrite:!1,toneMapped:!1}),e),this.glow.renderOrder=961;const s=new le(1,1,1);for(const r of[this.metal,this.slag,this.glow]){for(let o=0;o<e;o++)r.setColorAt(o,s);r.count=0,r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!0,t.add(r)}this.items=[],this._m=new Ce,this._q=new Kn,this._s=new S,this._c=new le,this.useSlag=!1}clear(){this.items=[];for(const t of[this.metal,this.slag,this.glow])t.count=0}get last(){return this.items[this.items.length-1]||null}add(t,e,n,s,r,o){if(this.items.length>=this.cap)return null;const a={p:t.clone(),w:e,h:n,len:Math.max(e*.55,.0022),yaw:s,born:o,grow:1,i:this.items.length};this.items.push(a),this.metal.setColorAt(a.i,this._c.set(r)),this.slag.setColorAt(a.i,this._c.set(3880497)),this._write(a);for(const l of[this.metal,this.slag,this.glow])l.count=this.items.length,l.instanceColor.needsUpdate=!0;return a}_write(t,e=1){this._q.setFromAxisAngle(new S(0,1,0),t.yaw);const n=t.len*t.grow,s=t.h*t.grow,r=t.w/2*t.grow;this._m.compose(t.p,this._q,this._s.set(n,s,r)),this.metal.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.05,s*1.18,r*1.08).multiplyScalar(this.useSlag?e:0)),this.slag.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.1,s*1.25,r*1.14)),this.glow.setMatrixAt(t.i,this._m);for(const o of[this.metal,this.slag,this.glow])o.instanceMatrix.needsUpdate=!0}growLast(t){const e=this.last;!e||e.grow>=1.9||(e.grow=Math.min(1.9,e.grow+t*.9),this._write(e))}update(t){let e=!1;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n],r=t-s.born;if(r>4.5){s.cold||(s.cold=!0,this.glow.setColorAt(s.i,this._c.setRGB(0,0,0)),e=!0);continue}const o=Math.exp(-r/.8);this.glow.setColorAt(s.i,this._c.setRGB(1.6*Math.sqrt(o),.55*o,.12*o*o)),e=!0}e&&(this.glow.instanceColor.needsUpdate=!0)}setSlagVisibleFrom(t){const e=Math.floor(this.items.length*t);for(let n=0;n<this.items.length;n++)this._write(this.items[n],n<e?0:1)}}class kv{constructor(t){this.core=new is(Or(Hs([[0,"rgba(255,255,255,1)"],[.18,"rgba(235,245,255,0.95)"],[.45,"rgba(160,200,255,0.35)"],[1,"rgba(120,170,255,0)"]]),16777215)),this.halo=new is(Or(Hs([[0,"rgba(255,255,255,0.6)"],[.3,"rgba(200,220,255,0.18)"],[1,"rgba(150,190,255,0)"]]),16777215)),this.pool=new is(Or(Hs([[0,"rgba(255,250,220,1)"],[.35,"rgba(255,170,60,0.8)"],[1,"rgba(255,90,0,0)"]]),16777215)),this.core.renderOrder=963,this.halo.renderOrder=962,this.pool.renderOrder=962,this.light=new Zn(14214911,0,3.5,2),t.add(this.core,this.halo,this.pool,this.light),this.set(!1)}setColor(t){this.light.color.set(t),this.core.material.color.set(t),this.halo.material.color.set(t)}set(t){this.on=t;const e=this.style!=="contact";this.core.visible=this.halo.visible=t&&e,this.pool.visible=t,t||(this.light.intensity=0)}setStyle(t){this.style=t,this.set(this.on)}update(t,e,n,s){if(!this.on)return;const r=.75+Math.random()*.5+(s?(Math.random()-.5)*.9:0),o=t.clone().lerp(e,.5);this.core.position.copy(o),this.core.scale.setScalar(.028*r),this.halo.position.copy(o),this.halo.scale.setScalar(.11*(.85+Math.random()*.3)),this.pool.position.copy(e).y+=.0015,this.pool.scale.setScalar((this.poolSize||.016)*(.9+Math.random()*.2)),this.light.position.copy(o).y+=.12,this.light.intensity=n*r}}class Ov{constructor(t,e=600){this.max=e,this.pos=new Float32Array(e*3).fill(-100),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.age=new Float32Array(e),this.next=0;const n=new We;n.setAttribute("position",new hn(this.pos,3)),n.setAttribute("color",new hn(this.col,3)),this.points=new Sg(n,new Nh({size:.0055,vertexColors:!0,blending:os,transparent:!0,depthWrite:!1,toneMapped:!1})),this.points.frustumCulled=!1,this.points.renderOrder=964,t.add(this.points),this.ground=()=>0}emit(t,e,n="splash"){for(let s=0;s<t;s++){const r=this.next;this.next=(this.next+1)%this.max;const o=Math.random()*Math.PI*2;let a=.25+Math.random()*.75,l=.5+Math.random()*1.9;n==="down"&&(a=-(.85+Math.random()*.15),l=1.2+Math.random()*1.6),n==="up"&&(a=.75+Math.random()*.25,l=.9+Math.random()*1.6);const c=Math.sqrt(1-a*a);this.pos.set([e.x,e.y+(n==="down"?-.002:.002),e.z],r*3),this.vel.set([Math.cos(o)*c*l,a*l,Math.sin(o)*c*l],r*3),this.life[r]=.35+Math.random()*.8,this.age[r]=0}}update(t){const e=this.pos,n=this.vel,s=this.col;for(let r=0;r<this.max;r++){if(this.life[r]<=0)continue;this.age[r]+=t;const o=this.age[r]/this.life[r];if(o>=1){this.life[r]=0,e[r*3+1]=-100;continue}const a=r*3;n[a+1]-=9.8*t,e[a]+=n[a]*t,e[a+1]+=n[a+1]*t,e[a+2]+=n[a+2]*t;const l=this.ground(e[a],e[a+2],e[a+1]-n[a+1]*t);e[a+1]<l&&(e[a+1]=l,n[a+1]*=-.3,n[a]*=.6,n[a+2]*=.6);const c=1-o;s[a]=1.4*c+.2,s[a+1]=.9*c*c+.1*c,s[a+2]=.35*c*c*c}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}}class Fv{constructor(t,e=40){const n=Hs([[0,"rgba(200,200,200,0.55)"],[.6,"rgba(170,170,170,0.18)"],[1,"rgba(160,160,160,0)"]],64);this.list=[];for(let s=0;s<e;s++){const r=new is(new Kr({map:n,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,t.add(r),this.list.push({s:r,age:0,life:0})}this.acc=0,this.drift=new S(0,.22,-.06)}emit(t,e,n){for(this.acc+=t*e;this.acc>=1;){this.acc-=1;const s=this.list.find(r=>r.life<=0);if(!s)return;s.age=0,s.life=2.2+Math.random(),s.s.position.copy(n).add(new S((Math.random()-.5)*.01,.01,(Math.random()-.5)*.01)),s.s.visible=!0}}update(t){for(const e of this.list){if(e.life<=0)continue;e.age+=t;const n=e.age/e.life;if(n>=1){e.life=0,e.s.visible=!1;continue}e.s.position.addScaledVector(this.drift,t),e.s.position.x+=Math.sin(e.age*3+e.life*7)*.01*t,e.s.scale.setScalar(.02+n*.22),e.s.material.opacity=.4*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}}clear(){for(const t of this.list)t.life=0,t.s.visible=!1}}class zv{constructor(t){this.mesh=new Y(new Be(.2,24,16),new me({color:795664,side:tn,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=950,this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.level=0}update(t,e){const n=e>this.level?40:6;this.level+=(e-this.level)*Math.min(1,n*t),this.mesh.material.opacity=this.level,this.mesh.visible=this.level>.01}dispose(){this.mesh.removeFromParent()}}class Bv{constructor(t,e){const n=Hs([[0,"rgba(255,190,90,0.9)"],[.4,"rgba(255,90,20,0.45)"],[1,"rgba(160,20,0,0)"]],64);this.list=e.map(s=>{const r=new is(Or(n,16777215));return r.position.copy(s),r.scale.setScalar(.022),r.renderOrder=961,r.visible=!1,t.add(r),r})}update(t){for(let e=0;e<this.list.length;e++){const n=Math.min(1.2,t[e]||0),s=this.list[e];s.visible=n>.12,s.visible&&(s.material.opacity=Math.min(1,(n-.1)*.9),s.scale.setScalar(.014+n*.012))}}}const Go={GMAW:{pops:260,decay:.003,base:.22,freq:2400,q:.8,vol:.55},SMAW:{pops:120,decay:.007,base:.18,freq:1600,q:.6,vol:.6},GTAW:{pops:0,decay:.004,base:.6,freq:5200,q:.35,vol:.22},OAW:{pops:0,decay:.004,base:.7,freq:650,q:.45,vol:.4},TB:{pops:0,decay:.004,base:.7,freq:650,q:.45,vol:.4},PAC:{pops:70,decay:.002,base:.55,freq:3400,q:.5,vol:.45},RSW:{pops:0,decay:.004,base:.8,freq:140,q:3,vol:.9},RSEW:{pops:0,decay:.004,base:.8,freq:140,q:3,vol:.9}};class Hv{constructor(){this.ctx=null,this.muted=!1,this.buffers={},this.process=null,this.src=null}ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.filter=this.ctx.createBiquadFilter(),this.filter.type="bandpass",this.gain=this.ctx.createGain(),this.gain.gain.value=0,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:1,this.filter.connect(this.gain).connect(this.master).connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0}_buffer(t){if(this.buffers[t])return this.buffers[t];const e=Go[t],n=this.ctx.sampleRate,s=Math.floor(n*3),r=this.ctx.createBuffer(1,s,n),o=r.getChannelData(0),a=new Float32Array(s).fill(e.base),l=Math.floor(e.pops*3),c=Math.floor(e.decay*n);for(let h=0;h<l;h++){const d=Math.floor(Math.random()*s),u=.3+Math.random()*.9;for(let f=0;f<c*4&&d+f<s;f++)a[d+f]+=u*Math.exp(-f/c)}for(let h=0;h<s;h++)o[h]=(Math.random()*2-1)*Math.min(1.4,a[h]);for(let h=0;h<256;h++)o[h]*=h/256,o[s-1-h]*=h/256;return this.buffers[t]=r}setProcess(t){if(!this.ctx||this.process===t)return;if(this.process=t,this.src){try{this.src.stop()}catch{}this.src.disconnect()}const e=Go[t];this.filter.frequency.value=e.freq,this.filter.Q.value=e.q,this.src=this.ctx.createBufferSource(),this.src.buffer=this._buffer(t),this.src.loop=!0,this.src.connect(this.filter),this.src.start()}update(t,e=0,n=1){if(!this.ctx||!this.process)return;const s=Go[this.process],r=t?s.vol*n*(.85+Math.random()*.3)*(1+e*.5):0;this.gain.gain.setTargetAtTime(r,this.ctx.currentTime,t?.015:.04)}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:1,this.ctx.currentTime,.02)}stop(){this.ctx&&this.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.03)}}const Vv=["GMAW","SMAW","GTAW","OAW","TB","PAC","RSW","RSEW"],Gv=["GMAW","SMAW","GTAW","OAW","TB","PAC"],Wv=["MS","AL","SS","CI","BRASS","CU"],Xv={GMAW:"arc",SMAW:"arc",GTAW:"arc",OAW:"flame",TB:"flame",PAC:"cut",RSW:"spot",RSEW:"seam"},qv={GMAW:"butt",SMAW:"butt",GTAW:"butt",OAW:"butt",TB:"lap",PAC:"plate",RSW:"thin",RSEW:"thin"},Yv={arc:[.42,.86],cut:[.42,.8],flame:[.5,.5],spot:[.08,.08],seam:[.08,.08]},Nc={GMAW:{pace:[.01,.028],w:.008,hr:.38,sparks:90,fume:6,arc:2.6,color:14477567,metal:[10788243,10130571],win:[-.004,.02],strike:.02,lose:.035,touch:null,pcAxis:[-.15,.9,.35]},SMAW:{pace:[.007,.02],w:.009,hr:.42,sparks:140,fume:10,arc:3,color:16773596,metal:[9343896,8751759],win:[-.002,.012],strike:.012,lose:.022,touch:-.004,pcAxis:[.3,.85,.35],burn:.0125,L0:.3,Lmin:.05},GTAW:{pace:[.004,.014],w:.006,hr:.3,sparks:0,fume:1.2,arc:2,color:13228287,metal:[12830925,11449530],win:[-.002,.01],strike:.01,lose:.02,touch:-.004,pcAxis:[-.3,.85,.35]},OAW:{pace:[.004,.013],w:.0075,hr:.32,sparks:8,fume:2,arc:1.3,color:16754784,metal:[10656658,9867400],win:[-.003,.014],strike:.014,lose:.03,touch:null,pcAxis:[-.35,.8,.35],heatRate:2.4,heatR:.008,filler:12946778},TB:{pace:[.005,.015],w:.0065,hr:.2,sparks:0,fume:3,arc:1.2,color:16754784,metal:[14465118,13609295],win:[-.003,.016],strike:.016,lose:.03,touch:null,pcAxis:[-.35,.8,.35],heatRate:2.8,heatR:.009,filler:14201434,fixedMetal:!0},PAC:{pace:[.012,.034],w:.0032,hr:.12,sparks:160,fume:5,arc:2.4,color:14865663,metal:[1184274,1710618],win:[-.003,.012],strike:.012,lose:.024,touch:null,pcAxis:[0,.9,.4],pool:.01,fixedMetal:!0},RSW:{cycle:.9,w:.0095,hr:.07,arc:.6,color:16752704,strike:.006,gap:0,pcAxis:[0,1,1e-4],flip:!0,spots:6,spotTol:.0045,moveTol:.0035,pool:.012},RSEW:{pace:[.008,.022],w:.0085,hr:.07,sparks:0,fume:.5,arc:.45,color:16752704,metal:null,win:[-.003,.006],strike:.006,lose:.012,touch:null,gap:0,pcAxis:[0,1,1e-4],flip:!0,spacing:.003,pool:.012}},Cr={MS:{plate:9410462,rough:.5,metal:.75,bead:null,heat:1},AL:{plate:12896718,rough:.42,metal:.7,bead:[14080733,13423061],heat:.7},SS:{plate:11449272,rough:.28,metal:.9,bead:[12887144,9408436],heat:1.1},CI:{plate:5658973,rough:.85,metal:.45,bead:[7698555,6974832],heat:.9},BRASS:{plate:13017164,rough:.35,metal:.9,bead:[13938264,13082957],heat:.8},CU:{plate:12088650,rough:.35,metal:.9,bead:[12877388,11956547],heat:.55}},$v=.003,kc=.025,ji=.005,Oc=.006,Zv=.003,jv=.006,Kv=.35,Jv=.6,Wo=.06,Ki=new S(0,1,0),Rr=new S(0,.5,1).normalize();class Qv{constructor(t){this.game=t,this.engine=t.engine,this.input=t.input,this.panels=t.panels,this.active=!1,this.state="off",this.process="GMAW",this.material="MS",this.audio=new Hv,this.pointer={down:!1,valid:!1,id:null,point:new S},this.trigger=!1,this.needRelease=!1,this.arcOn=!1,this.anims=[],this.runId=0,this.raycaster=new qh,this.plane=new oi,this._bindPointer(),this._bindXR(),this.engine.updaters.add((e,n)=>{this.active&&this._update(e,n)})}get T(){return Nc[this.process]}get kind(){return Xv[this.process]}start({from:t="results"}={}){const e=this.game.world;this.spot=e.weldSpot,this.from=t,this.active=!0,this.root=new Ft,this.root.name="weld-practice",e.root.add(this.root);const n=this._processes(),s=this._materials();if(n.includes(this.process)||(this.process=n[0]),s.includes(this.material)||(this.material=s[0]),this.bead=new Nv(this.root),this.arc=new kv(this.root),this.sparks=new Ov(this.root),this.sparks.ground=(l,c,h)=>this._ground(l,c,h),this.fume=new Fv(this.root),this.wet=!!e.underwater,this.wet){this.fume.drift.set(0,.7,0);for(const l of this.fume.list)l.s.material.color.set(15398655)}this._buildCoupon();const r=this.engine.camera,o=this.engine.rig;this.helmet=new zv(r),this.fader=new Y(new Be(.15,16,10),new me({color:0,side:tn,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.fader.renderOrder=1e3,this.fader.frustumCulled=!1,this.fader.visible=!1,r.add(this.fader),this.saved={fov:r.fov,pos:o.position.clone(),rotY:o.rotation.y,yaw:this.input.yaw,pitch:this.input.pitch,vr:this.engine.isVR},this.torch=this.filler=this.torchCtrl=null,this.pointer.point.set(this.seam.x0-.01,this.top,this.seam.z+.02),this.pointer.valid=!0,this.pcLift=kc,this.m=null,this.input.locked=!0,this.input.clearHover(),this.audio.ensure(),this._buildHud();for(const l of this.spot.hide||[])l.visible=!1;const a=++this.runId;this._walkIn().then(()=>{!this.active||a!==this.runId||(this._fade(0),this._placeUser(),this._choose())})}exit(){const t=this.from;this.stop(),this.game._afterPractice(t)}stop(){var s,r,o,a;if(!this.active)return;this._setArc(!1),this.active=!1,this.state="off",this.runId++;for(const l of this.anims)l.res();this.anims=[],this.audio.stop(),this.panels.hide(),this._restoreRays(),(s=this.torch)==null||s.group.removeFromParent(),(r=this.filler)==null||r.group.removeFromParent(),this.torch=this.filler=this.torchCtrl=null,this.root.removeFromParent(),this.root=null,this.helmet.dispose(),this.fader.removeFromParent();for(const l of this.spot.hide||[])l.visible=!0;(o=this.hud)==null||o.remove(),this.hud=null;const t=this.engine.camera,e=this.engine.rig,n=this.saved;t.fov=n.fov,t.updateProjectionMatrix(),n.vr===this.engine.isVR?(e.position.copy(n.pos),e.rotation.y=n.rotY):e.position.y=((a=this.game.world)==null?void 0:a.floorY)||0,this.input.yaw=n.yaw,this.input.pitch=n.pitch,this.input._applyLook(),this.game.world&&(this.input.world=this.game.world,this.input.walkTarget=null),this.game.vrHud.mesh.visible=!1}onModeChange(){if(this.active){if(this._setArc(!1),this.state==="walk"){this._skipWalk();return}this.engine.isVR||(this.engine.camera.fov=38,this.engine.camera.updateProjectionMatrix()),this._placeUser(),this._mountTorch(),this.renderHud(!0)}}_anim(t,e){return new Promise(n=>this.anims.push({t:0,dur:t,fn:e,res:n}))}_fade(t){this.fader&&(this.fader.material.opacity=t,this.fader.visible=t>.01)}_skipWalk(){this.skipWalk=!0;for(const t of this.anims)t.res();this.anims=[]}async _walkIn(){const t=this.engine,e=this.spot,n=this.input,s=t.rig,r=[...e.approach||[],{p:e.standAt,eye:e.eye,last:!0}];if(this.state="walk",this.skipWalk=!1,this.renderHud(!0),t.isVR){for(const o of r){if(this.skipWalk||!this.active||(await this._anim(.3,a=>this._fade(a)),this.skipWalk||!this.active))break;this._vrMoveTo(o,r[r.indexOf(o)+1]),await this._anim(.3,a=>this._fade(1-a)),await this._anim(.3,()=>{})}return}for(const o of r){if(this.skipWalk||!this.active)break;const a=s.position.clone(),l=o.last?o.eye??1.4:o.eye??Gn,c=new S(o.p.x,o.p.y+l-Gn,o.p.z),h=Math.hypot(c.x-a.x,c.z-a.z),d=Math.abs(c.y-a.y),u=Math.max(.4,h/1.3,d/.7),f=n.yaw,m=n.pitch,x=t.camera.fov,g=o.last?0:h>.1?Math.atan2(-(c.x-a.x),-(c.z-a.z)):f,p=Vn.euclideanModulo(g-f+Math.PI,Math.PI*2)-Math.PI,b=o.last?-Math.atan2(c.y+Gn-this.top,o.p.z-this.seam.z):c.y<a.y-.3?-.55:-.12,_=o.last?38:x;await this._anim(u,(v,U)=>{const A=Fa(v);s.position.lerpVectors(a,c,A),h>.3&&(s.position.y+=Math.abs(Math.sin(U*6.5))*.022*Math.sin(Math.PI*v)),n.yaw=f+p*(o.last?A:Fa(Math.min(1,v*2.5))),n.pitch=m+(b-m)*A,n._applyLook(),_!==x&&(t.camera.fov=x+(_-x)*A,t.camera.updateProjectionMatrix())})}}_vrMoveTo(t,e){const n=this.engine,s=new S,r=new S,o=e?e.p:this.spot.center,a=Math.atan2(-(o.x-t.p.x),-(o.z-t.p.z));n.camera.getWorldDirection(r),this.input.snapTurn(a-Math.atan2(-r.x,-r.z)),n.camera.getWorldPosition(s),n.rig.position.x+=t.p.x-s.x,n.rig.position.z+=t.p.z-s.z,n.rig.position.y=t.p.y+(t.eye!=null?t.eye-Gn:0)}_buildCoupon(){var p;(p=this.coupon)==null||p.removeFromParent();const t=this.coupon=new Ft;this.root.add(t);const e=this.spot.center,n=qv[this.process],s=Cr[this.material],r=new Rt({color:s.plate,roughness:s.rough,metalness:s.metal}),o=(b,_,v,U,A,R,C=r)=>{const y=new Y(new De(b,_,v),C);return y.position.set(U,A,R),y.receiveShadow=!0,y.castShadow=!1,t.add(y),y},a=.26,l=n==="plate"||n==="thin",c=e.y+(l?Wo:0);if(l){const b=new Rt({color:3817285,roughness:.7,metalness:.5});for(const _ of[-1,1])o(.03,Wo,.1,e.x+_*(a/2-.025),e.y+Wo/2,e.z,b)}let h,d,u,f;if(n==="butt"){for(const U of[-1,1])o(a,.006,.06,e.x,c+.006/2,e.z+U*(.06/2+.0015/2));h=c+.006,f=.006,d=e.z-.06-.0015/2,u=e.z+.06+.0015/2}else n==="lap"?(o(a,.003,.06,e.x,c+.003/2,e.z+.015),o(a,.003,.045,e.x,c+.003*1.5,e.z-.0225),h=c+.003,f=.003,d=e.z-.045,u=e.z+.045):n==="thin"?(o(a,.0015,.06,e.x,c+.0015/2,e.z-.015),o(a,.0015,.06,e.x,c+.0015*1.5,e.z+.015),h=c+2*.0015,f=2*.0015,d=e.z-.045,u=e.z+.045):(o(a,.006,.12,e.x,c+.006/2,e.z),h=c+.006,f=.006,d=e.z-.06,u=e.z+.06);this.top=h,this.thick=f,this.seam={x0:e.x-.11,x1:e.x+.11,z:e.z,minX:e.x-a/2,maxX:e.x+a/2,minZ:d,maxZ:u};const m=this.seam,x=new me({color:16777215,transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1}),g=(b,_,v,U,A=0)=>{const R=new Y(new se(b,_),x);R.rotation.set(-Math.PI/2,0,A),R.position.set(v,h+4e-4,U),R.renderOrder=958,t.add(R)};if(this.marks=null,this.kind==="spot"){const b=this.T.spots;this.marks=[];for(let _=0;_<b;_++){const v=m.x0+.01+_*(m.x1-m.x0-.02)/(b-1);this.marks.push({x:v,z:m.z}),g(.0018,.014,v,m.z),g(.0018,.014,v,m.z,Math.PI/2)}}else{for(const b of[m.x0,m.x1])for(const _ of[-1,1])g(.0022,.018,b,m.z+_*.017);n==="plate"&&g(m.x1-m.x0,.0012,(m.x0+m.x1)/2,m.z),n==="thin"&&g(m.x1-m.x0,8e-4,(m.x0+m.x1)/2,m.z+.006)}if(n==="butt"){const b=new Rt({color:s.plate,roughness:.4,metalness:.8});for(const _ of[m.minX+.008,m.maxX-.008]){const v=new Y(new Be(1,10,6),b);v.scale.set(.004,.002,.003),v.position.set(_,h,e.z),t.add(v)}}if((this.kind==="arc"||this.kind==="cut")&&o(.018,.016,.024,m.maxX-.012,h+.008,e.z+(u-e.z)*.8,new Rt({color:12088115,roughness:.4,metalness:.8})),this.heat=null,this.heatGlow=null,this.kind==="flame"){const b=Math.ceil((m.maxX-m.minX)/ji);this.heat=new Float32Array(b);const _=[];for(let v=0;v<b;v++)_.push(new S(m.minX+(v+.5)*ji,h+8e-4,m.z));this.heatGlow=new Bv(t,_)}}_ground(t,e,n){const s=this.seam,r=this.spot.bench;return t>s.minX&&t<s.maxX&&e>s.minZ&&e<s.maxZ&&n>=this.top-this.thick-.002?this.top:t>r.minX&&t<r.maxX&&e>r.minZ&&e<r.maxZ?r.y:this.spot.standAt.y}_placeUser(){const t=this.engine,e=this.spot.standAt;if(t.isVR){const n=new S;t.camera.getWorldDirection(n),this.input.snapTurn(-Math.atan2(-n.x,-n.z));const s=new S;t.camera.getWorldPosition(s),t.rig.position.x+=e.x-s.x,t.rig.position.z+=e.z-s.z,t.rig.position.y=e.y+(this.spot.eye!=null?this.spot.eye-Gn:0)}else{const n=this.spot.eye??1.4;t.rig.position.set(e.x,e.y+n-Gn,e.z),this.input.yaw=0,this.input.pitch=-Math.atan2(e.y+n-this.top,e.z-this.seam.z),this.input._applyLook(),t.camera.fov=38,t.camera.updateProjectionMatrix()}}_setup(t,e){var n,s;this.process=t,this.material=e,this._buildCoupon(),this.bead.clear(),this.fume.clear(),this.m=null,(n=this.torch)==null||n.group.removeFromParent(),(s=this.filler)==null||s.group.removeFromParent(),this.torch=Dv(t),this.filler=this.T.filler||t==="GTAW"?Iv(this.T.filler||12946778):null,this._mountTorch(),this.arc.setColor(this.T.color),this.arc.setStyle(this.kind==="arc"||this.kind==="cut"?"arc":"contact"),this.arc.poolSize=this.T.pool||.016,this.audio.ensure(),this.audio.setProcess(t)}_mountTorch(){const t=this.torch;if(t)if(this._restoreRays(),this.torchCtrl=null,this.engine.isVR){const e=this.input.controllers.filter(s=>s.userData.source&&s.userData.grip),n=e.find(s=>s.userData.handedness==="right")||e[0];if(!n){this.root.add(t.group);return}if(this.torchCtrl=n,n.userData.grip.add(t.group),t.group.quaternion.setFromUnitVectors(Ki,Rr),this.filler){const s=e.find(r=>r!==n);s?(s.userData.grip.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(Ki,Rr),this.filler.group.position.copy(Rr).multiplyScalar(-this.filler.handY())):this.filler.group.removeFromParent()}}else this.root.add(t.group),t.group.quaternion.setFromUnitVectors(Ki,new S(...this.T.pcAxis).normalize()),this.T.flip&&t.group.quaternion.multiply(new Kn().setFromAxisAngle(Ki,Math.PI)),this.filler&&(this.root.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(Ki,new S(.75,.42,.5).normalize()))}_pName(t=this.process){return I(`practice.processes.${t}.name`)}_mName(t=this.material){return I(`practice.materials.${t}.name`)}_kicker(){return this.torch?`${I("practice.kicker")} · ${this._pName()} · ${this._mName()}`:I("practice.kicker")}_fb(t,e){for(const n of[`practice.fbKind.${this.process}.${t}.${e}`,`practice.fbKind.${this.kind}.${t}.${e}`]){const s=I(n);if(s!==n)return s}return I(`practice.fb.${t}.${e}`)}_how(){const t=this.engine.isVR?"Vr":"",e=`practice.how.${this.process}${t}`,n=I(e);return n!==e?n:I(`practice.how.${this.kind}${t}`)}_processes(){var e,n;const t=(e=this.game.env)==null?void 0:e.content;return t!=null&&t.practiceProcesses?t.practiceProcesses:((n=this.game.env)==null?void 0:n.id)==="factory"?Vv:Gv}_materials(){var t,e;return((t=this.game.env)==null?void 0:t.content.practiceMaterials)||((e=this.game.world)!=null&&e.underwater?["MS"]:Wv)}_choose(){this._setArc(!1);const t=this._processes();if(t.length===1){this._chooseMaterial(t[0]);return}this.state="select",this.panels.show({kicker:I("practice.kicker"),title:I("practice.chooseTitle"),body:[I(`env.${this.game.env.id}.job`),I("practice.chooseBody")],options:t.map(e=>({text:`${this._pName(e)}: ${I(`practice.processes.${e}.short`)}`})),onOption:e=>this._chooseMaterial(t[e]),buttons:[{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}),this.renderHud(!0)}_chooseMaterial(t){this._setArc(!1);const e=this._materials();if(e.length===1){this._intro(t,e[0]);return}this.state="select";const n=this._processes().length>1;this.panels.show({kicker:`${I("practice.kicker")} · ${this._pName(t)}`,title:I("practice.materialTitle"),body:I("practice.materialBody"),options:e.map(s=>({text:`${this._mName(s)}${s===this.material?` · ${I("practice.current")}`:""}`})),onOption:s=>this._intro(t,e[s]),buttons:[n?{label:I("app.back"),style:"secondary",onClick:()=>this._choose()}:{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}),this.renderHud(!0)}_intro(t,e){this._setup(t,e),this.state="intro";const n=this._materials().length>1?()=>this._chooseMaterial(t):this._processes().length>1?()=>this._choose():null;this.panels.show({kicker:this._kicker(),title:this._pName(t),body:[I(`practice.processes.${t}.desc`),`${this._mName()}: ${I(`practice.materials.${e}.note`)}`,...this.wet?[I("practice.wetNote")]:[],this._how(),I(`practice.eyes.${this.kind}`)],buttons:[n?{label:I("app.back"),style:"secondary",onClick:n}:{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()},{label:I("app.start"),onClick:()=>{this.panels.hide(),this._beginPass()}}]}),this.renderHud(!0)}_beginPass(){this.state="weld",this.bead.clear(),this.fume.clear(),this.bead.useSlag=this.process==="SMAW",this.m={bins:new Array(Math.ceil((this.seam.x1-this.seam.x0)/ji)).fill(!1),lat2:0,latN:0,samples:[],win:null,dGood:0,dFar:0,dClose:0,dN:0,spots:[]},this.heat&&this.heat.fill(0),this.cycle=null,this.vs=0,this.lastDep=null,this.prevPool=null,this.prevTipX=null,this.idle=0,this.swapAt=0,this.needRelease=this.trigger||this.pointer.down,this.process==="SMAW"&&this.torch.setLength(Nc.SMAW.L0),this.renderHud(!0)}_finishPass(){if(this.state==="weld"){if(this._coverage()<.15&&!(this.kind==="spot"&&this.m.spots.length)){this.game._notify(I(this.kind==="cut"?"practice.cutFirst":"practice.weldFirst"));return}this._setArc(!1),this.cycle&&this._endSpot(!1,this.engine.time),this.state="review",this.renderHud(!0),this.process==="SMAW"?this._slag():this._results()}}_slag(){this.panels.show({kicker:this._kicker(),title:I("practice.slagTitle"),body:I("practice.slagBody"),buttons:[{label:I("practice.chip"),onClick:async()=>{this.panels.hide(),await this.engine.tween(1.6,t=>this.bead.setSlagVisibleFrom(t)),this.active&&this._results()}}]})}_evaluate(){if(this.kind==="spot")return this._evaluateSpots();const t=this.m;this.T;const e=[],n=this._coverage();e.push({key:"coverage",level:n>=.92?"good":"bad",text:n>=.92?"good":"bad"});const s=t.latN?Math.sqrt(t.lat2/t.latN):1,r=s<=Zv?"good":s<=jv?"ok":"bad";e.push({key:"line",level:r,text:r==="good"?"good":"bad"});const o=t.samples,a=o.length?o.reduce((m,x)=>m+x,0)/o.length:0,l=o.length?Math.sqrt(o.reduce((m,x)=>m+(x-a)**2,0)/o.length):0,[c,h]=this._pace(),d=a<c?"slow":a>h?"fast":"good";e.push({key:"pace",level:d==="good"?"good":"bad",text:d});const u=a>0?l/a:1,f=u<=Kv?"good":u<=Jv?"ok":"bad";if(e.push({key:"steady",level:f,text:f==="good"?"good":"bad"}),t.dN>20&&this.kind!=="seam"){const m=t.dGood/t.dN,x=m>=.75?"good":m>=.5?"ok":"bad";e.push({key:"distance",level:x,text:x==="good"?"good":t.dFar>=t.dClose?"far":"close"})}return this._rate(e)}_evaluateSpots(){const t=this.T,e=this.m.spots,n=this.marks,s=d=>Math.min(...n.map(u=>Math.hypot(d.x-u.x,d.z-u.z))),r=n.filter(d=>e.some(u=>Math.hypot(u.x-d.x,u.z-d.z)<t.spotTol*2.2)).length,o=[];o.push({key:"count",level:r===n.length?"good":"bad",text:r===n.length?"good":"bad"});const a=e.length?e.reduce((d,u)=>d+s(u),0)/e.length:1,l=a<=t.spotTol?"good":a<=t.spotTol*2?"ok":"bad";o.push({key:"place",level:l,text:l==="good"?"good":"bad"});const c=e.every(d=>d.full);o.push({key:"hold",level:c?"good":"bad",text:c?"good":"bad"});const h=e.every(d=>d.moved<t.moveTol);return o.push({key:"still",level:h?"good":"bad",text:h?"good":"bad"}),this._rate(o)}_rate(t){const e=t.filter(s=>s.level==="bad").length,n=t.filter(s=>s.level==="good").length;return{rows:t,title:n===t.length?"great":e===0?"good":"keep"}}_pace(){const t=this.T.pace,e=this.kind==="flame"?Cr[this.material].heat:1;return[t[0]*e,t[1]*e]}_results(){const t=this._evaluate();Jh({type:"weld",env:this.game.env.id,process:this.process,material:this.material,rating:t.title}),this.game.lastWeld={process:this.process,material:this.material,rating:t.title},this.state="review";const e=this._materials().length>1;this.panels.show({kicker:this._kicker(),title:I(`practice.resultTitle.${t.title}`),options:t.rows.map(n=>({text:this._fb(n.key,n.text),mark:n.level==="good"?I("practice.markGood"):I("practice.markTip"),state:n.level==="good"?"correct":n.level==="bad"?"wrong":null,disabled:!0})),source:`${I("practice.soldamatic")} ${I("practice.note")}`,buttons:[...this._processes().length>1?[{label:I("practice.change"),style:"secondary",onClick:()=>this._choose()}]:[],...e?[{label:I("practice.changeMaterial"),style:"secondary",onClick:()=>this._chooseMaterial(this.process)}]:[],{label:I("practice.done"),style:"secondary",onClick:()=>this.exit()},{label:I("practice.again"),onClick:()=>{this.panels.hide(),this._beginPass()}}]})}_buildHud(){this.hudCov=$("div.value",{text:"0%"}),this.hudBar=$("div"),this.hudProc=$("div.value",{text:"–"}),this.hudMat=$("div.value",{text:"–"}),this.hudCovLabel=$("div.label",{text:I("practice.progress.weld")}),this.hudHint=$("div.hint-text",{text:""});const t=$("button.btn.secondary",{text:I("practice.soundOn"),onclick:()=>{this.audio.ensure(),this.audio.setMuted(!this.audio.muted),t.textContent=this.audio.muted?I("practice.soundOff"):I("practice.soundOn")}}),e=()=>this.state==="weld"||this.state==="review";this.hudActions=$("div.hud-actions",{},t,this._processes().length>1?$("button.btn.secondary",{text:I("practice.change"),onclick:()=>{e()&&this._choose()}}):null,this._materials().length>1?$("button.btn.secondary",{text:I("practice.changeMaterial"),onclick:()=>{e()&&this._chooseMaterial(this.process)}}):null,$("button.btn.secondary",{text:I("practice.exit"),onclick:()=>this.exit()}),$("button.btn",{text:I("practice.finishPass"),onclick:()=>this._finishPass()})),this.game.vrSupported&&this.hudActions.prepend($("button.btn.secondary",{text:I("app.enterVr"),onclick:()=>this.game._enterVR()})),this.hudWalk=$("div.hud-actions",{},$("button.btn",{text:I("practice.skip"),onclick:()=>this._skipWalk()})),this.hudChips=$("div",{style:"display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end"},$("div.hud-chip",{},$("div",{},$("div.label",{text:I("practice.kicker")}),this.hudProc)),$("div.hud-chip",{},$("div",{},$("div.label",{text:I("practice.material")}),this.hudMat)),$("div.hud-chip",{},$("div",{},this.hudCovLabel,this.hudCov),$("div.cov-bar",{},this.hudBar))),this.hud=$("div",{},$("div.hud-top",{},$("div.hud-chip",{},$("img.hud-logo",{src:ss,alt:"Seabery"})),this.hudChips),$("div.hud-bottom",{},this.hudHint,this.hudActions,this.hudWalk)),this.game.uiRoot.prepend(this.hud)}_progress(){if(this.kind==="spot"&&this.m&&this.marks){const e=this.marks.filter(n=>this.m.spots.some(s=>s.full&&Math.hypot(s.x-n.x,s.z-n.z)<this.T.spotTol*2.2)).length;return{pct:Math.round(e/this.marks.length*100),text:`${e}/${this.marks.length}`}}const t=Math.round(this._coverage()*100);return{pct:t,text:`${t}%`}}renderHud(t=!1){if(!this.active)return;const e=this.state==="walk",n=this._progress(),s=this.torch?this._pName():"–",r=I(`practice.progress.${this.kind==="cut"?"cut":this.kind==="spot"?"spot":"weld"}`);this.hud&&(this.hudCov.textContent=n.text,this.hudBar.style.width=`${n.pct}%`,this.hudProc.textContent=s,this.hudMat.textContent=this.torch?this._mName():"–",this.hudCovLabel.textContent=r,this.hudHint.textContent=e?I("practice.walking"):this.torch?this._how():"",this.hudHint.style.visibility=this.hudHint.textContent?"":"hidden",this.hudActions.style.display=e?"none":"",this.hudWalk.style.display=e?"":"none",this.hudChips.style.visibility=e?"hidden":"",this.hud.style.display=this.engine.isVR?"none":"");const o=this.game.vrHud,a=this.engine.isVR&&(this.state==="weld"||e),l=`${n.text}|${s}|${this.game.lastMsg}|${a}|${this.state}`;if(!(!t&&l===this._hudKey)&&(this._hudKey=l,o.mesh.visible=a,!!a)){if(e){o.render({kicker:I(`env.${this.game.env.id}.name`),title:I("practice.walking"),buttons:[{label:I("practice.skip"),onClick:()=>this._skipWalk()}]});return}o.render({kicker:`${I("practice.kicker")} · ${this._mName()}`,title:s,body:[`${r} ${n.text}`,this.game.lastMsg].filter(Boolean),buttons:[{label:I("practice.finishPass"),onClick:()=>this._finishPass()},{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()}]})}}_coverage(){return this.m?this.kind==="spot"?this._progress().pct/100:this.m.bins.filter(Boolean).length/this.m.bins.length:0}_bindPointer(){const t=this.engine.renderer.domElement,e=new xt,n=new S,s=o=>{const a=t.getBoundingClientRect(),l=o.pointerType==="touch"?70:0;if(e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-l-a.top)/a.height)*2+1),this.raycaster.setFromCamera(e,this.engine.camera),this.plane.set(Ki,-this.top),!this.raycaster.ray.intersectPlane(this.plane,n))return;const c=this.seam;n.x=Vn.clamp(n.x,c.minX-.12,c.maxX+.12),n.z=Vn.clamp(n.z,c.minZ-.08,c.maxZ+.12),this.pointer.point.copy(n),this.pointer.valid=!0};t.addEventListener("pointerdown",o=>{!this.active||this.engine.isVR||this.state!=="weld"||this.panels.isOpen||this.pointer.down||(s(o),this.pointer.down=!0,this.pointer.id=o.pointerId,this.audio.ensure())}),t.addEventListener("pointermove",o=>{!this.active||this.engine.isVR||this.state==="walk"||this.pointer.down&&o.pointerId!==this.pointer.id||s(o)});const r=o=>{o.pointerId===this.pointer.id&&(this.pointer.down=!1,this.pointer.id=null,this.needRelease=!1)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}_bindXR(){for(const t of this.input.controllers)t.addEventListener("selectstart",()=>{!this.active||t!==this.torchCtrl||(this.trigger=!0,this.audio.ensure())}),t.addEventListener("selectend",()=>{t===this.torchCtrl&&(this.trigger=!1,this.needRelease=!1)})}_rays(t,e){const n=this.torchCtrl;if(!n)return;const s=!t||e&&e.distanceTo(this.spot.center)>.35;n.userData.line.visible=n.userData.dot.visible=s}_restoreRays(){for(const t of this.input.controllers)t.userData.line.visible=t.userData.dot.visible=!0}_haptic(t,e){var s,r,o,a,l;const n=(r=(s=this.torchCtrl)==null?void 0:s.userData.source)==null?void 0:r.gamepad;try{(l=(a=(o=n==null?void 0:n.hapticActuators)==null?void 0:o[0])==null?void 0:a.pulse)==null||l.call(a,t,e)}catch{}}_setArc(t){var e;t!==this.arcOn&&(this.arcOn=t,(e=this.arc)==null||e.set(t),this.lastDep=null,this.prevPool=null,this.m&&(this.m.win=null),t||this.audio.update(!1))}_update(t,e){var d,u;for(const f of[...this.anims]){f.t+=t;const m=Math.min(1,f.t/f.dur);f.fn(m,f.t),m>=1&&(this.anims.splice(this.anims.indexOf(f),1),f.res())}if(this.state==="walk"||!this.active){this.helmet.update(t,0);return}const n=this.T,s=this.engine.isVR,r=this.state==="weld"&&!this.panels.isOpen;let o=null;if(this.torch){const f=this.torch.group;if(s)this.torchCtrl||this._mountTorch(),this.torchCtrl&&f.position.copy(Rr).multiplyScalar(-this.torch.handY());else{const m=this.pointer.down&&r?n.gap??$v:kc;this.pcLift+=(m-this.pcLift)*Math.min(1,t*18),f.position.set(this.pointer.point.x,this.top+this.pcLift,this.pointer.point.z)}f.updateWorldMatrix(!0,!1),o=new S().setFromMatrixPosition(f.matrixWorld),s&&this._rays(r,o)}const a=this.seam,l=o?o.y-this.top:1,c=!!o&&o.x>a.minX&&o.x<a.maxX&&o.z>a.minZ&&o.z<a.maxZ;if(this.kind==="spot"?this._updateSpot(t,e,o,l,c,r,s):this._updateLine(t,e,o,l,c,r,s),(u=(d=this.torch)==null?void 0:d.flame)==null||u.update(e,this.state==="weld"),this.heat){for(let f=0;f<this.heat.length;f++)this.heat[f]=Math.max(0,this.heat[f]-t*.22);this.heatGlow.update(this.heat)}if(this.kind==="flame"&&this.state==="weld"&&!this.arcOn&&this.audio.update(!0,0,.35),this.filler&&!s&&o){const f=this.arcOn&&Math.sin(e*5)>.2?0:.005;this.filler.group.position.set(o.x+.007,this.top+.0015+f+(this.arcOn?0:.015),o.z+.002)}this.sparks.update(t),this.fume.update(t),this.bead.update(e);const h=Yv[this.kind];this.helmet.update(t,this.state==="weld"&&!this.panels.isOpen?h[this.arcOn?1:0]:0),this.state==="weld"&&!this.arcOn&&this._coverage()>=.95&&(this.idle+=t,this.idle>.8&&this._finishPass()),(this._hudT=(this._hudT||0)+t)>.2&&(this._hudT=0,this.renderHud())}_updateLine(t,e,n,s,r,o,a){var w,L;const l=this.T,c=this.seam,h=this.kind;this.swapAt&&e>=this.swapAt&&(this.torch.setLength(l.L0),this.swapAt=0);let d=!1;if(o&&r&&!this.needRelease&&!this.swapAt&&(a?d=this.trigger&&(this.arcOn?s<l.lose:s<l.strike):d=this.pointer.down),d&&a&&l.touch!=null&&s<l.touch&&(d=!1,this.needRelease=!0,this._haptic(1,180),this.game._notify(I(this.process==="SMAW"?"practice.stuck":"practice.tungsten"))),this.arcOn&&!d&&a&&o&&this.trigger&&!this.needRelease&&s>=l.lose&&(this.needRelease=!0,this.game._notify(I(h==="flame"?"practice.lostFlame":h==="seam"?"practice.lostContact":"practice.lost"))),this._setArc(d),!this.arcOn){this.prevTipX=n?n.x:null;return}const u=this.m,f=new S(n.x,this.top,n.z);let m=0;a&&h!=="seam"&&(u.dN++,s>l.win[1]?(u.dFar++,m=Math.min(1,(s-l.win[1])/(l.lose-l.win[1]))):s<l.win[0]?u.dClose++:u.dGood++),this.arc.update(n,f,l.arc,m>.3),h==="seam"&&this.prevTipX!=null&&((L=(w=this.torch).roll)==null||L.call(w,n.x-this.prevTipX)),this.prevTipX=n.x;const x=this.prevPool?Math.hypot(f.x-this.prevPool.x,f.z-this.prevPool.z):0;this.vs+=(x/Math.max(t,1e-4)-this.vs)*(1-Math.exp(-t/.3)),this.prevPool=f.clone();const[g,p]=this._pace(),b=(g+p)/2,_=Vn.clamp(Math.sqrt(b/Math.max(this.vs,.002)),.55,1.8);let v=!0;if(h==="flame"){const B=l.heatRate*Cr[this.material].heat*(Math.abs(f.z-c.z)<Oc*2?1:.4);for(let X=0;X<this.heat.length;X++){const nt=c.minX+(X+.5)*ji,W=Math.abs(nt-f.x);W<l.heatR&&(this.heat[X]=Math.min(1.4,this.heat[X]+B*t*(1-W/l.heatR)))}const F=Math.floor((f.x-c.minX)/ji);v=(this.heat[Vn.clamp(F,0,this.heat.length-1)]||0)>=1}const U=h!=="cut"||this.vs<=p*1.3,A=l.spacing||.0012;v||(this.lastDep=null),this.lastDep||(this.lastDep=f.clone().addScaledVector(new S(1,0,0),-A*1.01));let R=Math.hypot(f.x-this.lastDep.x,f.z-this.lastDep.z);R<A&&v&&h!=="cut"&&h!=="seam"&&this.bead.growLast(t);const C=this._beadColors();let y=0;for(;v&&R>=A&&y++<200;){const B=new S(f.x-this.lastDep.x,0,f.z-this.lastDep.z).normalize(),F=this.lastDep.clone().addScaledVector(B,A),X=F.clone(),nt=m*.0016;X.x+=(Math.random()-.5)*nt,X.z+=(Math.random()-.5)*nt;const W=Math.atan2(-B.z,B.x),at=this.bead.items.length;if(h==="seam")this.bead.add(X,l.w,l.w*l.hr,W,C[at%2],e);else if(h==="cut"){const mt=l.w*Vn.clamp(_,.8,1.7);this.bead.add(X,mt,U?l.w*l.hr:l.w*.05,W,U?C[at%2]:5593180,e)}else{const mt=at%4<2?1:.92;this.bead.add(X,l.w*_*(1+m*.3)*mt,l.w*l.hr*Math.sqrt(_)*(1-m*.3),W,C[at%4<2?0:1],e)}this.lastDep=F;const G=F.z-c.z;u.lat2+=G*G,u.latN++,U&&Math.abs(G)<Oc&&F.x>=c.x0&&F.x<=c.x1&&(u.bins[Math.min(u.bins.length-1,Math.floor((F.x-c.x0)/ji))]=!0),R-=A}if(u.win||(u.win={t:0,x:f.x,first:!0}),u.win.t+=t,u.win.t>=.25&&(u.win.first||u.samples.push(Math.abs(f.x-u.win.x)/u.win.t),u.win={t:0,x:f.x,first:!1}),!this.wet&&l.sparks){const B=l.sparks*(1+m*2),F=Math.floor(B*t+Math.random());h==="cut"?U?this.sparks.emit(F,new S(f.x,this.top-this.thick,f.z),"down"):this.sparks.emit(F,f,"up"):this.sparks.emit(F,f)}this.fume.emit(this.wet?18:l.fume,t,f),this.audio.update(!0,m),a&&(this._hapT=(this._hapT||0)+t)>.05&&(this._hapT=0,this._haptic(.12+Math.random()*.15+m*.3,45)),this.process==="SMAW"&&(this.torch.setLength(this.torch.length-l.burn*t),this.torch.length<=l.Lmin&&(this._setArc(!1),this.needRelease=!0,this.swapAt=e+1.2,this.game._notify(I("practice.electrodeUsed")))),this.idle=0}_updateSpot(t,e,n,s,r,o,a){const l=this.T,c=o&&r&&!this.needRelease&&(a?this.trigger&&s<l.strike:this.pointer.down);c&&!this.cycle&&(this.cycle={t:0,at:new S(n.x,this.top,n.z),moved:0,burst:!1},this._setArc(!0));const h=this.cycle;if(!h)return;if(!c){this._endSpot(!1,e);return}h.t+=t,h.moved=Math.max(h.moved,Math.hypot(n.x-h.at.x,n.z-h.at.z));const d=Math.min(1,h.t/l.cycle);this.arc.update(n,h.at,l.arc*(.3+.7*d),!1),this.audio.update(!0,0,.5+.5*d),a&&(this._hapT=(this._hapT||0)+t)>.06&&(this._hapT=0,this._haptic(.2+.3*d,50)),h.moved>l.moveTol&&!h.burst&&!this.wet&&(h.burst=!0,this.sparks.emit(40,h.at)),h.t>=l.cycle&&this._endSpot(!0,e),this.idle=0}_endSpot(t,e){const n=this.cycle;if(!n)return;const s=this.T,r=this._beadColors();this.bead.add(n.at,s.w*(t?1:.6),s.w*s.hr,0,r[0],e),this.m.spots.push({x:n.at.x,z:n.at.z,full:t,moved:n.moved}),this.cycle=null,this._setArc(!1),t?(this.needRelease=!0,this._haptic(.6,60)):this.game._notify(I("practice.spotShort"))}_beadColors(){const t=this.T,e=Cr[this.material];if(this.kind==="spot"||this.kind==="seam"){const n=new le(e.plate).multiplyScalar(.45).lerp(new le(3878953),.3).getHex();return[n,new le(n).multiplyScalar(.92).getHex()]}return t.fixedMetal||!e.bead?t.metal:e.bead}}const Pr=[{id:"factory",icon:Ar.factory,build:_v,content:Tv,available:!0},{id:"construction",icon:Ar.construction,build:Sv,content:Av,available:!0},{id:"shipyard",icon:Ar.shipyard,build:bv,content:Cv,available:!0},{id:"underwater",icon:Ar.underwater,build:Ev,content:Rv,available:!0}],tx=i=>{const t=[...Array(i).keys()];for(let e=i-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};class ex{constructor({engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}){Object.assign(this,{engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}),this.world=null,this.env=null,this.layer=$("div"),this.hud=null,s.append(this.layer),e.onSelect=o=>this._onSelect(o),e.addEventListener("hover",o=>this._onHover(o.detail)),t.updaters.add((o,a)=>this._update(o,a)),t.addEventListener("vrstart",()=>{this._renderHud(),this.phase==="practice"&&this.practice.onModeChange()}),t.addEventListener("vrend",()=>{this._renderHud(),this.phase==="results"&&(this.panels.hide(),this._resultsScreen()),this.phase==="practice"&&this.practice.onModeChange()}),this.vrHud=new Yh({widthM:.26,px:640,maxH:700,compact:!0}),this.vrHud.mesh.position.set(0,.09,.02),this.vrHud.mesh.rotation.set(-1,0,0),this.vrHud.mesh.visible=!1,e.uiMeshes.add(this.vrHud.mesh),e.addEventListener("controller",o=>{const{grip:a,handedness:l}=o.detail;(l==="left"||!this.vrHud.mesh.parent)&&a.add(this.vrHud.mesh)}),this.markerTex=gv(),this.markers=[],this.practice=new Qv(this)}showMenu(){const t=Uc();this.phase="menu",this._clearWorld(),this.panels.hide(),this._hideHud(),this.layer.replaceChildren($("div.screen",{},$("img.logo",{src:ss,alt:"Seabery"}),$("div.kicker",{text:I("app.kicker")}),$("h1",{text:I("app.title")}),$("p.lead",{text:I("app.lead")}),$("div.env-grid",{},Pr.map(e=>{const n=$("button.env-card",{disabled:!e.available,onclick:()=>this.startEnv(e.id)});n.innerHTML=`<span class="env-icon">${e.icon}</span>`;const s=t[e.id];return n.append($("span.tag",{text:e.available?s?`${I("app.best",{score:Math.round(s.score*100)})}${s.pass?" · ✓":""}`:I("app.available"):I("app.comingSoon")}),$("h3",{text:I(`env.${e.id}.name`)}),$("p",{text:I(`env.${e.id}.desc`)})),n})),$("button.btn.secondary.menu-records",{text:I("app.myResults"),onclick:()=>this.showRecords()}),$("div.howto",{},$("div",{},$("b",{text:I("app.howtoPc")}),I("app.howtoPcText")),$("div",{},$("b",{text:I("app.howtoTablet")}),I("app.howtoTabletText")),$("div",{},$("b",{text:I("app.howtoVr")}),I("app.howtoVrText"))),$("p.draft-note",{text:I("app.draftNote")})))}async startEnv(t){const e=Pr.find(n=>n.id===t);this.env=e,this.layer.replaceChildren($("div.screen",{},$("img.logo",{src:ss,alt:"Seabery"}),$("p.lead",{text:I("app.loading")}),$("div.loader",{},$("div")))),await new Promise(n=>setTimeout(n,60)),this._clearWorld(),this.world=e.build(this.engine),this._applyAtmosphere(this.world.atmosphere),this.engine.scene.add(this.world.root),this.engine.shadowsDirty(),this.input.setWorld(this.world),this.state={hazards:{},ppe:{},quiz:[],hints:0},this.lastWeld=null,this.hintOn=!1,this._buildMarkers(),this.layer.replaceChildren(),this.phase="explore",this._showHud(),this.input.locked=!1,this._brief()}_applyAtmosphere(t={}){const e=this.engine.scene;e.background=new le(t.background??1713459);const[n,s,r]=t.fog||[2766146,22,48];e.fog=new jr(n,s,r),e.environmentIntensity=t.envIntensity??.35,this.engine.renderer.toneMappingExposure=t.exposure??1}_brief(){const t=[{label:I("app.start"),onClick:()=>this.panels.hide()}];this.vrSupported&&!this.engine.isVR&&t.unshift({label:I("app.enterVr"),style:"secondary",onClick:()=>this._enterVR()}),this.panels.show({kicker:I(`env.${this.env.id}.name`),title:I("brief.title"),body:[I(`env.${this.env.id}.brief`,{count:this.env.content.hazards.length}),I("brief.tip")],buttons:t})}async _enterVR(){try{await this.engine.enterVR()}catch(t){console.warn(t),this._notify(I("app.vrUnsupported"))}}_clearWorld(){this.practice.active&&this.practice.stop(),this.world&&(this.engine.scene.remove(this.world.root),this.world=null),this.input.world=null,this.input.locked=!0;for(const t of this.markers)t.removeFromParent();this.markers=[]}_showHud(){var n;this._hideHud();const t=this.hud=$("div");this.hoverLabel=$("div.hover-label"),this.hudHazards=$("div.value"),this.hudDots=$("div.progress-dots"),this.hudPpe=$("div.value");const e=$("div.hud-actions",{},$("button.btn.secondary",{text:I("hud.hint"),onclick:()=>this._toggleHint()}),(n=this.world)!=null&&n.weldSpot?$("button.btn.secondary",{text:I("practice.startWelding"),onclick:()=>this._weldNow()}):null,$("button.btn",{text:I("hud.finish"),onclick:()=>this._finish()}));e.prepend($("button.btn.secondary",{text:I("app.worksites"),onclick:()=>this._changeWorksite()})),this.vrSupported&&e.prepend($("button.btn.secondary",{text:I("app.enterVr"),onclick:()=>this._enterVR()})),t.append($("div.hud-top",{},$("div.hud-chip",{},$("img.hud-logo",{src:ss,alt:"Seabery"})),$("div",{style:"display:flex;gap:10px"},$("div.hud-chip",{},$("div",{},$("div.label",{text:I("hud.hazards")}),this.hudHazards),this.hudDots),$("div.hud-chip",{},$("div",{},$("div.label",{text:I("hud.ppe")}),this.hudPpe)))),$("div.hud-bottom",{},$("div.hint-text",{text:matchMedia("(pointer:coarse)").matches?I("app.howtoTabletText"):I("app.howtoPcText")}),e),this.hoverLabel),this.uiRoot.prepend(t),this._renderHud()}_hideHud(){this.hud&&(this.hud.remove(),this.hud=null),this.vrHud.mesh.visible=!1}_counts(){const t=this.env.content,e=t.hazards.filter(s=>{var r;return(r=this.state.hazards[s.id])==null?void 0:r.found}).length,n=t.ppe.filter(s=>this.state.ppe[s.id]).length;return{found:e,total:t.hazards.length,ppe:n,ppeTotal:t.ppe.length}}_renderHud(){var e;if(this.phase==="practice"){this.practice.renderHud(!0);return}if(!this.env||!this.state||this.phase!=="explore"){this.vrHud.mesh.visible=!1;return}const t=this._counts();this.hud&&(this.hudHazards.textContent=`${t.found}/${t.total}`,this.hudDots.replaceChildren(...this.env.content.hazards.map(n=>{var s;return $(`span${(s=this.state.hazards[n.id])!=null&&s.found?".done":""}`)})),this.hudPpe.textContent=`${t.ppe}/${t.ppeTotal}`,this.hud.style.display=this.engine.isVR?"none":""),this.vrHud.mesh.visible=this.engine.isVR,this.vrHud.render({kicker:I(`env.${this.env.id}.name`),title:`${I("hud.hazards")} ${t.found}/${t.total}`,body:[`${I("hud.ppe")} ${t.ppe}/${t.ppeTotal}`,this.lastMsg].filter(Boolean),buttons:[{label:I("hud.hint"),style:"secondary",onClick:()=>this._toggleHint()},{label:I("app.worksites"),style:"secondary",onClick:()=>this._changeWorksite()},...(e=this.world)!=null&&e.weldSpot?[{label:I("practice.startWelding"),style:"secondary",onClick:()=>this._weldNow()}]:[],{label:I("hud.finish"),onClick:()=>this._finish()}]})}_notify(t){fv(this.uiRoot,t),this.lastMsg=t,this._renderHud(),clearTimeout(this._msgTimer),this._msgTimer=setTimeout(()=>{this.lastMsg=null,this._renderHud()},6e3)}_onHover(t){if(!this.hoverLabel)return;if(!t){this.hoverLabel.style.display="none";return}const e=t.item.id;this.hoverLabel.textContent=I(e==="PPE"?`env.${this.env.id}.ppeLabel`:`hazards.${e}.label`),this.hoverLabel.style.left=t.x+"px",this.hoverLabel.style.top=t.y+"px",this.hoverLabel.style.display="block"}_buildMarkers(){for(const t of Object.values(this.world.interactables)){const e=new is(new Kr({map:this.markerTex,depthTest:!1,transparent:!0}));e.scale.setScalar(.32),e.position.copy(t.anchor),e.renderOrder=900,e.visible=!1,e.userData.item=t,this.engine.scene.add(e),this.markers.push(e)}}_toggleHint(){this.hintOn=!this.hintOn,this.hintOn&&(this.state.hints++,this._notify(I("hud.hintShown")))}_update(t,e){this.world&&this.world.update(t,e);for(const n of this.markers)n.visible=this.hintOn&&!n.userData.item.done&&this.phase==="explore",n.visible&&(n.position.y=n.userData.item.anchor.y+Math.sin(e*3)*.05,n.scale.setScalar(.3+Math.sin(e*6)*.02))}_onSelect(t){this.phase==="explore"&&(t.kind==="hazard"?this._hazardPanel(t):t.kind==="ppe"&&this._ppePanel(t))}_mcq(t,{onAnswer:e,actionLabel:n,onAction:s,closable:r=!0}){const o=tx(t.options.length),a=l=>{const c=l!=null,h=l===t.correct;this.panels.show({kicker:t.kicker,title:c&&t.answeredTitle?t.answeredTitle:t.question,options:o.map(d=>({text:t.options[d],state:c?d===t.correct?"correct":d===l?"wrong":null:null,disabled:c})),onOption:c?null:d=>{const u=o[d];e&&e(u===t.correct),a(u)},feedback:c?{ok:h,title:I(h?"panel.correct":"panel.notQuite"),text:t.why}:null,source:c&&t.source?`${I("panel.basedOn")}: ${t.source}`:null,buttons:c?[{label:n,onClick:s}]:r?[{label:I("app.close"),style:"secondary",onClick:()=>this.panels.hide()}]:[]})};a(null)}_hazardPanel(t){const e=this.env.content.hazards.find(s=>s.id===t.id),n=I(`hazards.${t.id}`);this._mcq({kicker:`${I("hud.inspect")} · ${n.label}`,question:I("panel.whatsWrong"),answeredTitle:n.name,options:n.options,correct:e.correct,why:n.why,source:n.source},{onAnswer:s=>{this.state.hazards[t.id]={found:!0,firstTry:s},this._renderHud()},actionLabel:I("panel.fix"),onAction:async()=>{this.panels.hide(),t.done=!0,t.setHighlight(!1),await t.fix(),this._notify(I("hud.fixed",{name:n.name}));const s=this._counts();s.found===s.total&&setTimeout(()=>this._notify(I("hud.allFound")),1200)}})}_ppePanel(t){const e=this.env.content.ppe,n=e.find(o=>this.state.ppe[o.id]===void 0);if(!n)return;const s=I(`ppe.items.${n.id}`),r=e.indexOf(n);this._mcq({kicker:`${I("ppe.title")} · ${r+1}/${e.length}`,question:s.q,options:s.options,correct:n.correct,why:s.why,source:s.source},{onAnswer:o=>{this.state.ppe[n.id]=o,this._renderHud()},actionLabel:r<e.length-1?I("app.continue"):I("app.close"),onAction:()=>{if(r<e.length-1){this._ppePanel(t);return}this.panels.hide(),t.done=!0,t.setHighlight(!1),this._notify(I("hud.ppeDone"))}})}_finish(){if(this.phase!=="explore")return;const t=this._counts();t.found<t.total||t.ppe<t.ppeTotal?this.panels.show({title:I("finishConfirm.title"),body:I("finishConfirm.body",t),buttons:[{label:I("finishConfirm.keep"),style:"secondary",onClick:()=>this.panels.hide()},{label:I("finishConfirm.finish"),onClick:()=>this._quizIntro()}]}):this._quizIntro()}_quizIntro(){this.phase="quiz",this.hintOn=!1,this._renderHud(),this.panels.show({title:I("quizIntro.title"),body:I("quizIntro.body",{count:this.env.content.quiz.length}),buttons:[{label:I("app.start"),onClick:()=>this._quizQuestion(0)}]})}_quizQuestion(t){const e=I(`quizzes.${this.env.id}`)[t],n=this.env.content.quiz.length;this._mcq({kicker:I("panel.question",{n:t+1,total:n}),question:e.q,options:e.options,correct:this.env.content.quiz[t],why:e.why,source:e.source},{closable:!1,onAnswer:s=>{this.state.quiz[t]=s},actionLabel:t<n-1?I("app.continue"):I("results.title"),onAction:()=>t<n-1?this._quizQuestion(t+1):this._results()})}_score(){const t=this.env.content,e=this.state,n=t.hazards.map(d=>{const u=e.hazards[d.id];return{id:d.id,name:I(`hazards.${d.id}.name`),status:u?u.firstTry?"ok":"part":"miss"}}),s=t.ppe.map(d=>({id:d.id,name:I(`ppe.items.${d.id}.q`),status:e.ppe[d.id]===void 0?"miss":e.ppe[d.id]?"ok":"part"})),r=e.quiz.filter(Boolean).length,o=n.reduce((d,u)=>d+(u.status==="ok"?1:u.status==="part"?.5:0),0)+s.filter(d=>d.status==="ok").length+r,a=n.length+s.length+t.quiz.length,l=o/a,c=n.every(d=>d.status!=="miss")&&s.every(d=>d.status!=="miss"),h=s.every(d=>d.status==="ok");return{hz:n,pp:s,quizOk:r,quizTotal:t.quiz.length,score:l,pass:c&&h&&l>=t.passScore}}_results({record:t=!0}={}){this.phase="results",this.input.locked=!0,this._renderHud();const e=this.result=t||!this.result?this._score():this.result;if(t){const n=this._counts();if(Jh({type:"check",env:this.env.id,score:e.score,pass:e.pass,found:n.found,total:n.total,ppeOk:e.pp.filter(s=>s.status==="ok").length,ppeTotal:e.pp.length,quizOk:e.quizOk,quizTotal:e.quizTotal}),this.world.weldSpot){this._readyToWeld(e);return}}this.engine.isVR?this.panels.show({kicker:I("results.title"),title:e.pass?I("results.passed"):I("results.notPassed"),body:[`${I("results.score")}: ${Math.round(e.score*100)}%`,e.pass?I("results.passText"):I("results.failText"),...this.lastWeld?[`${I("practice.kicker")}: ${I(`practice.processes.${this.lastWeld.process}.name`)} · ${I(`practice.resultTitle.${this.lastWeld.rating}`)}`]:[]],buttons:[{label:I("results.retry"),style:e.pass?"secondary":void 0,onClick:()=>{this.panels.hide(),this.startEnv(this.env.id)}},{label:I("app.worksites"),style:"secondary",onClick:()=>this._vrMenu()},{label:I("app.close")+" VR",style:"secondary",onClick:()=>this.engine.exitVR()},{label:this.lastWeld?I("practice.again"):I("practice.startWelding"),onClick:()=>this.startPractice()}]}):(this.panels.hide(),this._resultsScreen())}_readyToWeld(t){this.panels.show({kicker:`${I("results.title")} · ${I(`env.${this.env.id}.name`)}`,title:t.pass?I("results.passed"):I("results.checkDone"),body:[`${I("results.score")}: ${Math.round(t.score*100)}%`,t.pass?I("practice.startJob"):I("practice.startJobReview"),I(`env.${this.env.id}.job`)],buttons:[{label:I("results.seeResults"),style:"secondary",onClick:()=>{this.panels.hide(),this._results({record:!1})}},{label:I("practice.startWelding"),onClick:()=>this.startPractice()}]})}startPractice({from:t="results"}={}){!this.world||!this.world.weldSpot||(this.panels.hide(),this.layer.replaceChildren(),this._hideHud(),this.hintOn=!1,this.phase="practice",this.practice.start({from:t}))}_weldNow(){this.phase==="explore"&&this.panels.show({kicker:I(`env.${this.env.id}.name`),title:I("weldNow.title"),body:[I("weldNow.body"),I(`env.${this.env.id}.job`)],buttons:[{label:I("weldNow.stay"),style:"secondary",onClick:()=>this.panels.hide()},{label:I("practice.startWelding"),onClick:()=>this.startPractice({from:"explore"})}]})}_afterPractice(t){if(t==="explore"){this.phase="explore",this._showHud(),this.input.locked=!1,this._notify(I("weldNow.back"));return}this.phase="results",this.input.locked=!0,this._results({record:!1})}_changeWorksite(){this.phase==="explore"&&this.panels.show({title:I("changeConfirm.title"),body:I("changeConfirm.body"),buttons:[{label:I("changeConfirm.stay"),style:"secondary",onClick:()=>this.panels.hide()},{label:I("changeConfirm.change"),onClick:()=>this.engine.isVR?this._vrMenu():this.showMenu()}]})}_vrMenu(){const t=Pr.filter(n=>n.available),e=Uc();this.panels.show({kicker:I("app.title"),title:I("app.chooseEnv"),options:t.map(n=>({text:`${I(`env.${n.id}.name`)}${e[n.id]?" · "+I("app.best",{score:Math.round(e[n.id].score*100)}):""}`})),onOption:n=>{this.panels.hide(),this.startEnv(t[n].id)},buttons:[{label:I("app.close")+" VR",style:"secondary",onClick:()=>{this.panels.hide(),this.engine.exitVR(),this.showMenu()}}]})}showRecords(){this.phase="records",this._clearWorld(),this.panels.hide(),this._hideHud();const t=hl(),e=r=>I(`env.${r}.name`),n=r=>$("tr",{},$("td",{text:Lv(r.at)}),$("td",{text:e(r.env)}),$("td",{text:r.type==="check"?I("records.check"):`${I("records.weld")} · ${I(`practice.processes.${r.process}.name`)}${r.material?` · ${I(`practice.materials.${r.material}.name`)}`:""}`}),$("td",{},r.type==="check"?$(`span.st.${r.pass?"ok":"miss"}`,{text:`${Math.round(r.score*100)}% · ${r.pass?I("records.ready"):I("records.notReady")}`}):$(`span.st.${r.rating==="great"?"ok":r.rating==="good"?"part":"miss"}`,{text:I(`practice.resultTitle.${r.rating}`)}))),s=t.length?$("div.table-wrap",{},$("table.records",{},$("thead",{},$("tr",{},["date","worksite","activity","result"].map(r=>$("th",{text:I(`records.${r}`)})))),$("tbody",{},t.map(n)))):$("p",{text:I("records.empty")});this.layer.replaceChildren($("div.screen",{},$("div.results",{},$("div.kicker",{text:I("app.title")}),$("h1",{text:I("records.title")}),$("p.draft-note",{style:"text-align:left;color:#4a5d73;margin:0 0 14px",text:I("records.note")}),s,$("div.actions",{style:"margin-top:18px"},$("button.btn",{text:I("records.back"),onclick:()=>this.showMenu()}),t.length?$("button.btn.secondary",{text:I("records.clear"),onclick:()=>{confirm(I("records.clearConfirm"))&&(Pv(),this.showRecords())}}):null))))}async debugPractice(t="factory",e=!1){if(await this.startEnv(Pr.some(s=>s.id===t)?t:"factory"),e){this.panels.hide(),this.startPractice({from:"explore"});return}this.panels.hide();const n=this.env.content;await Promise.all(Object.values(this.world.interactables).map(s=>(s.done=!0,s.kind==="hazard"?s.fix():null)));for(const s of n.hazards)this.state.hazards[s.id]={found:!0,firstTry:!0};for(const s of n.ppe)this.state.ppe[s.id]=!0;this.state.quiz=n.quiz.map(()=>!0),this.result=this._score(),this.startPractice()}_resultsScreen(){const t=this.result;this._hideHud();const e=this._counts(),n={ok:I("results.stOk"),part:I("results.stPart"),miss:I("results.stMiss")},s=r=>$("li",{},$(`span.st.${r.status}`,{text:n[r.status]}),$("span",{text:`${r.name}`}));this.layer.replaceChildren($("div.screen",{},$("div.results",{},$("div.kicker",{text:`${I("results.title")} · ${I(`env.${this.env.id}.name`)}`}),$("h1",{text:t.pass?I("results.passed"):I("results.notPassed")}),$("p",{text:t.pass?I("results.passText"):I("results.failText")}),$("div.score-row",{},$("div.score-tile",{},$("div.n",{text:`${Math.round(t.score*100)}%`}),$("div.l",{text:I("results.score")})),$("div.score-tile",{},$("div.n",{text:`${e.found}/${e.total}`}),$("div.l",{text:I("results.hazardsFound")})),$("div.score-tile",{},$("div.n",{text:`${t.pp.filter(r=>r.status==="ok").length}/${t.pp.length}`}),$("div.l",{text:I("results.ppeCorrect")})),$("div.score-tile",{},$("div.n",{text:`${t.quizOk}/${t.quizTotal}`}),$("div.l",{text:I("results.quizCorrect")}))),$("ul.item-list",{},t.hz.map(s),t.pp.map(s)),$("div.practice-unlock",{},$("div",{},$("strong",{text:this.lastWeld?`${I("practice.kicker")}: ${I(`practice.resultTitle.${this.lastWeld.rating}`)}`:I("practice.unlockTitle")}),$("span",{text:this.lastWeld?`${I(`practice.processes.${this.lastWeld.process}.name`)}${this.lastWeld.material?` · ${I(`practice.materials.${this.lastWeld.material}.name`)}`:""}`:I(`env.${this.env.id}.job`)})),$("button.btn",{text:this.lastWeld?I("practice.again"):I("practice.startWelding"),onclick:()=>this.startPractice()})),$("div.actions",{},$(`button.btn${t.pass?".secondary":""}`,{text:I("results.retry"),onclick:()=>this.startEnv(this.env.id)}),$("button.btn.secondary",{text:I("app.myResults"),onclick:()=>this.showRecords()}),$("button.btn.secondary",{text:I("results.menu"),onclick:()=>this.showMenu()})),$("p.draft-note",{style:"text-align:left;color:#4a5d73",text:`${I("results.sourcesTitle")}: ${I(`env.${this.env.id}.sources`)}`}),$("p.draft-note",{style:"text-align:left;color:#4a5d73;margin-top:4px",text:I("app.draftNote")}))))}}async function nx(){await id();try{await Promise.all([document.fonts.load("900 40px Gilroy"),document.fonts.load("500 40px Gilroy"),document.fonts.load('400 40px "PP Supply Mono"')])}catch{}const i=new Lc(document.getElementById("scene")),t=new dv(i),e=document.getElementById("ui"),n=new pv(i,t,e),s=await Lc.vrSupported(),r=new ex({engine:i,input:t,panels:n,uiRoot:e,vrSupported:s});r.showMenu();const o=new URLSearchParams(location.search);o.has("practice")?r.debugPractice(o.get("practice")||"factory"):o.has("weld")&&r.debugPractice(o.get("weld")||"factory",!0),window.__game=r}nx();
