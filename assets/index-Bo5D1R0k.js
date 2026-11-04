(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Yh="modulepreload",Zh=function(i,t){return new URL(i,t).href},cc={},$h=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Zh(l,n),l in cc)return;cc[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===l&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Yh,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Il={title:"Seabery VR Immersive Welding Worksites",kicker:"Pre-weld safety training",lead:"Step into a real-scale worksite. Find the hazards, choose the right PPE and get the workplace ready before the arc is struck.",draftNote:"Prototype v0.1. Safety content is a draft based on public guidance (ANSI Z49.1, OSHA, HSE, INSST, DGUV, ISO/EN) and is pending review by a qualified welding expert.",loading:"Loading worksite…",chooseEnv:"Choose a worksite",comingSoon:"Coming soon",available:"Available",howtoPc:"PC",howtoPcText:"Drag to look · WASD to move · click the floor to walk · click objects",howtoTablet:"Tablet",howtoTabletText:"Drag to look · tap the floor to walk · tap objects",howtoVr:"VR headset",howtoVrText:"Point and pull the trigger · aim at the floor to teleport · thumbstick to turn",enterVr:"Enter VR",vrUnsupported:"VR not available on this device",start:"Start",back:"Back",close:"Close",continue:"Continue",menu:"Menu",worksites:"Worksites",myResults:"My results",best:"Best {score}%"},Ul={factory:{name:"Factory",desc:"Metal fabrication workshop with MAG/MMA welding bays, extraction and gas supply.",brief:"You are about to weld in Bay 2 of the fabrication workshop. Before you strike an arc, walk around the welding area and find everything that is not safe. There are {count} hazards. Then visit the PPE locker and dress for the job.",ppeLabel:"PPE locker",sources:"ANSI Z49.1:2021 Safety in Welding, Cutting and Allied Processes (AWS) · OSHA 29 CFR 1910 Subpart Q · UK HSE welding fume guidance (STSU1-2019) · INSST NTP 494 · DGUV Regel 100-500 Kap. 2.26 · EN ISO 11611, EN 12477, ISO 16321-2, EN ISO 15012-1 (scope).",job:"Your job: weld the butt joint on the bench in Bay 2."},construction:{name:"Construction site",desc:"Steel frame under construction, outdoors after rain: work at height, falling sparks, wet conditions.",brief:"You are about to weld a beam connection on the first floor of a steel frame under construction. It rained this morning. Before you strike an arc, check the edge, what is below you, the equipment and the permit. There are {count} hazards. Then visit the PPE box and dress for the job.",ppeLabel:"PPE box",sources:"ANSI Z49.1:2021 Safety in Welding, Cutting and Allied Processes (AWS) · OSHA 29 CFR 1926 Subparts J and M (construction) · OSHA 29 CFR 1910.254 · EN ISO 11611, EN 12477, ISO 16321-2 (scope).",job:"Your job: weld the plate at the work stand next to the beam connection."},shipyard:{name:"Shipyard",desc:"Double-bottom tank in a hull block: confined space, air testing, gas supply and fire watch.",brief:"You are about to weld inside double-bottom tank 4P of a hull block. A glass training window in the deck lets you see into the tank and the next compartment. Before anyone enters or strikes an arc, check the entry, the air, the gas supply, the ventilation and the paperwork. There are {count} hazards. Then visit the PPE locker.",ppeLabel:"PPE locker",sources:"ANSI Z49.1:2021 §6 and §7 (confined spaces) · OSHA 29 CFR 1915.12, 1915.14, 1915.504 (shipyards) · OSHA 29 CFR 1910.252 · UK HSE Asphyxiation hazards in welding · INSST BASEQUIM 007 · EN ISO 11611, EN 12477, ISO 16321-2 (scope).",job:"Your job: weld the repair plate on the bottom of tank 4P. You work kneeling inside the tank."},underwater:{name:"Underwater",desc:"Wet welding on a pier pile from a dive barge: electrical safety, trapped gas, dive team and diver PPE.",brief:"A diver is about to wet weld a repair on a pier pile, supplied from the dive station on the barge. You are on the barge deck; the side of the water is shown as a training cutaway so you can see the work below. Check the dive station, the welding circuit and the work site. There are {count} hazards. Then check the diver's equipment at the dive rack.",ppeLabel:"Diver equipment rack",sources:"US Navy Underwater Cutting & Welding Manual S0300-BB-MAN-010 (App. D) · OSHA 29 CFR 1910 Subpart T (commercial diving) · UK HSE Diving at Work Regulations 1997, ACoP L104 · IMCA D 045 · AWS D3.6M, EN ISO 15618-1 (scope).",job:"Your job: weld the repair plate on the pile bracket, 4 m below the surface. You are now the diver."}},Nl={title:"Your task: the pre-weld check",body:"Before you strike an arc, find everything that is not safe. There are {count} hazards. Then visit the PPE station and dress for the job.",tip:"Objects you can inspect light up orange when you point at them."},Ol={hazards:"Hazards",ppe:"PPE",hint:"Hint",finish:"Finish check",hintText:"Look around the booth, the bench, the gas supply and the walkway.",hintShown:"Orange markers show where to look.",inspect:"Inspect",allFound:"All hazards found. Visit the PPE station, then finish the check.",ppeDone:"PPE check complete.",fixed:"Fixed: {name}"},Fl={whatsWrong:"What is the problem here?",correct:"Correct",notQuite:"Not quite",why:"Why it matters",fix:"Fix it",basedOn:"Based on",question:"Question {n} of {total}"},kl={title:"Finish the check?",body:"You have found {found} of {total} hazards and completed {ppe} of {ppeTotal} PPE checks. Anything you have not found will count as missed.",keep:"Keep looking",finish:"Finish"},zl={title:"Final questions",body:"Answer {count} short questions to complete the module."},Bl={title:"Safety check results",passed:"Ready to weld",notPassed:"Not ready to weld yet",passText:"You prepared the workplace safely. Keep these checks as a routine before every job.",failText:"Review the items below and try again. In a real workshop, missing one of these can cause an injury or a fire.",score:"Overall score",hazardsFound:"Hazards found",ppeCorrect:"PPE correct",quizCorrect:"Quiz correct",stOk:"Correct",stPart:"Found, wrong answer",stMiss:"Missed",retry:"Try again",menu:"Main menu",sourcesTitle:"Sources",seeResults:"See full results",checkDone:"Safety check complete"},Hl=JSON.parse(`{"AREA-01":{"name":"Combustibles in the spark zone","label":"Box under the bench","options":["Nothing. It is normal storage under the bench.","Oily rags and cardboard are inside the spark zone and can catch fire.","The box is too heavy to lift safely."],"why":"Sparks and spatter travel far and can start fires that smoulder unseen. Move combustibles away from the work, or cover them with fire-resistant material. If they cannot be moved or protected, do not weld.","fixText":"Rags moved to a closed metal bin outside the spark zone.","source":"ANSI Z49.1:2021 §6.1; OSHA 1910.252(a)(1)"},"VEN-01":{"name":"Fume extraction off and out of position","label":"Fume extraction arm","options":["It is fine. General ventilation in the hall is enough.","The arm should point at the ceiling to remove hot air.","Extraction is switched off and parked away from the work. Position the hood close to the arc and switch it on."],"why":"All welding fume, including mild steel fume, can cause lung cancer. Capturing fume at the source with local exhaust ventilation (LEV) is the expected control; general ventilation alone is not enough. Keep your head out of the plume.","fixText":"Extraction on and the hood positioned close to the work.","source":"ANSI Z49.1:2021 §5.3–5.4; HSE Safety Alert STSU1-2019"},"RAD-01":{"name":"Curtain open to the walkway","label":"Booth curtain","options":["The curtain is open to the walkway, so arc radiation can reach people passing by.","Curtains should stay open so the supervisor can watch.","The curtain colour is wrong."],"why":"Arc radiation can injure the eyes of people nearby (\\"arc eye\\"), not just the welder. Screens and curtains also stop spatter from reaching others. Close the curtain and make sure nobody nearby is unprotected before you strike the arc.","fixText":"Curtain closed. The walkway is protected.","source":"ANSI Z49.1:2021 §4.1.3; OSHA 1910.252(b)(2)(iii)"},"GAS-01":{"name":"Gas cylinder not secured","label":"Shielding gas cylinder","options":["The cylinder is standing free. It must be chained upright so it cannot fall.","The cylinder should be laid on the floor to be more stable.","Nothing. Shielding gas is not flammable, so it is safe."],"why":"A falling cylinder can break its valve and turn into a projectile. Keep cylinders chained upright, away from sparks, and never let them become part of the welding circuit.","fixText":"Cylinder chained upright to the trolley.","source":"ANSI Z49.1:2021 §10.8.2.1, §10.8.4.12–14; OSHA 1910.253(b)(5)"},"ELE-02":{"name":"Live electrode holder left on the table","label":"Electrode holder","options":["It is fine as long as the welder comes back soon.","Cool the holder in a bucket of water before you put it down.","A live holder with an electrode is lying on the steel table. Remove the electrode, hang the holder on an insulated hook and switch the output off."],"why":"A live electrode holder can give an electric shock or strike an arc on anything it touches. When you stop welding, remove the electrode and place the holder where it cannot touch people, metal or cylinders. Never cool a holder in water.","fixText":"Electrode removed and holder hung on the insulated hook.","source":"ANSI Z49.1:2021 §11.4.6, §11.4.8, §11.4.9.5; OSHA 1926.351(d)"},"AREA-02":{"name":"Fire extinguisher blocked","label":"Fire extinguisher","options":["The extinguisher is blocked by pallets. Clear the access so it can be reached in seconds.","The extinguisher is in the wrong colour.","Nothing. Somebody can move the pallets if there is a fire."],"why":"A small fire must be put out in seconds. Suitable fire-extinguishing equipment must be ready and within reach before you start welding.","fixText":"Pallets moved. The extinguisher is accessible.","source":"ANSI Z49.1:2021 §6.2.1.1"},"FAC-05":{"name":"Open solvent can at the bench","label":"Solvent can","options":["It is useful to keep degreaser at hand while welding.","An open can of chlorinated degreaser is next to the arc. Close it and take it out of the welding area.","The can is only a problem if it is full."],"why":"Arc UV and heat can turn chlorinated solvent vapour into phosgene, a highly toxic gas. Open flammable liquids are also a fire risk. Keep degreasing away from the welding area.","fixText":"Solvent can closed and removed from the welding area.","source":"ANSI Z49.1:2021 §5.5.4.1"},"CON-01":{"name":"Open edge without fall protection","label":"Open edge at the welding point","options":["Nothing. Just be careful near the edge.","The edge has no guardrail and there is no fall-arrest system. Fall protection must be in place before welding at height.","A warning sign on the edge is enough."],"why":"An electric shock or a flash from the arc can startle you and cause a fall. Edge protection such as a guardrail, or a fall-arrest system, must be in place before you start.","fixText":"Guardrail installed along the open edge.","source":"OSHA 29 CFR 1926.501(b)(1); ANSI Z49.1:2021 §11.4.9.8, E11.4.9.2"},"CON-02":{"name":"Sparks falling on people and materials below","label":"Area below the welding point","options":["Barricade the area below, move the timber and keep people out before welding.","Sparks cool down before they reach the ground.","Ask the worker below to wear a hard hat."],"why":"Sparks and slag fall to lower levels and can set fire to materials or burn people below. Clear and barricade the area underneath and cover any openings.","fixText":"Area below barricaded, timber moved away.","source":"ANSI Z49.1:2021 §6.1.4.2, E6.2.2; OSHA 29 CFR 1926.352(f)"},"CON-03":{"name":"Welding machine standing in water","label":"Welding machine","options":["It is fine. Welding machines are built for outdoor use.","Move it to a dry, raised place and protect it from rain without blocking its vents. If it got wet, have it dried and tested first.","Put sand on the puddle and carry on."],"why":"Water greatly increases the risk of electric shock. A machine that has been wet must be dried and tested before it is used.","fixText":"Machine moved onto a pallet under a rain cover.","source":"ANSI Z49.1:2021 §11.4.9.2, §11.5.2.2, §11.5.3; OSHA 29 CFR 1910.254(d)(9)(ii)"},"CON-04":{"name":"Work clamp on a gas pipe","label":"Work clamp","options":["Attach the work clamp to the work, close to the joint. Never use a gas pipe as the return.","It is fine. The pipe is steel and conducts well.","Wrap the clamp in tape first."],"why":"Welding current that flows through other parts can heat them. Pipelines carrying gas or flammable liquids must never carry the return current.","fixText":"Work clamp moved onto the work, next to the joint.","source":"OSHA 29 CFR 1926.351(c); OSHA 29 CFR 1910.254(c)(2)(iii)"},"CON-05":{"name":"No hot-work permit or fire watch","label":"Permit board","options":["A permit is only needed indoors.","Start now. The permit can be signed afterwards.","Get the hot-work permit and assign a fire watch with an extinguisher, who stays on after welding stops."],"why":"Many site fires start after the welder has left, from smouldering material. A fire watch checks hidden areas and stays for the time set in the permit.","fixText":"Permit issued and fire watch assigned.","source":"ANSI Z49.1:2021 §6.2.2, §6.2.4, §6.3; OSHA 29 CFR 1926.352(e)"},"CON-06":{"name":"Gas cylinder lifted with a sling","label":"Gas cylinder on the crane hook","options":["Lift cylinders only in a cylinder cradle or on a suitable pallet, never with a sling or a magnet.","Fine if the sling is pulled tight.","Fine if the cylinder is nearly empty."],"why":"Cylinders lifted with slings or magnets can slip out and fall, and a falling cylinder can kill. Remove the regulator and fit the valve cap before lifting.","fixText":"Cylinder lifted in a cradle and set down on the deck.","source":"OSHA 29 CFR 1926.350(a)(2), (a)(6)"},"SHP-01":{"name":"No attendant or entry permit","label":"Manhole and entry board","options":["Go in anyway. It is a short job.","Stop. A valid entry permit and a trained attendant outside, with an agreed signal and rescue plan, are needed before anyone enters.","Leave the cover half closed so nobody falls in."],"why":"In a tank or double bottom, gas or fume can make you unconscious without warning. Someone outside must be able to raise the alarm and start the planned rescue.","fixText":"Entry permit valid, attendant on duty at the manhole.","source":"ANSI Z49.1:2021 §7.4, §7.5; INSST BASEQUIM 007"},"SHP-02":{"name":"Air in the tank not tested","label":"Gas detector","options":["Test the air for oxygen, flammable and toxic gases before entry, at all levels, and keep testing during the work.","No test is needed if you cannot smell anything.","Testing at the manhole opening is enough."],"why":"Argon and CO2 are heavier than air and collect in the lowest areas, while oxygen from a leak raises the fire risk. Test the whole space, especially the bottom.","fixText":"Atmosphere tested and recorded.","source":"ANSI Z49.1:2021 §7.1.1, §7.1.2; UK HSE Asphyxiation hazards in welding"},"SHP-03":{"name":"Gas cylinder inside the tank","label":"Argon cylinder","options":["Fine if it is chained.","Fine. Argon is not flammable.","Cylinders and power sources stay outside the space. Only hoses and cables go in."],"why":"A leaking cylinder inside a tank can quickly create an atmosphere you cannot breathe.","fixText":"Cylinder taken out and chained in the rack on deck.","source":"ANSI Z49.1:2021 §7.2.1; OSHA 29 CFR 1910.252(b)(4)(iii)"},"SHP-04":{"name":"Ventilation does not reach the work","label":"Ventilation fan and duct","options":["It is fine at the manhole. The air will spread.","Extend the duct to the welding position so fume and gas are removed where they are produced.","Switch the fan off to reduce noise."],"why":"Fume and shielding gas build up quickly in small spaces and affect everyone inside. Ventilation or extraction must work at the welding position.","fixText":"Duct extended to the welding position.","source":"ANSI Z49.1:2021 §7.1, §7.1.3; OSHA 29 CFR 1910.252(c)(4)"},"SHP-05":{"name":"No fire watch on the other side","label":"Compartment on the other side","options":["Nothing is needed. Steel does not burn.","Wet the weld area instead.","Post a fire watch with an extinguisher on the other side of the bulkhead."],"why":"Heat travels through steel plating and can ignite cables or insulation in the next compartment, out of the welder's view.","fixText":"Fire watch with an extinguisher posted in the next compartment.","source":"ANSI Z49.1:2021 §6.2.2, §6.2.3; OSHA 29 CFR 1915.504"},"SHP-06":{"name":"Certificate for the wrong tank","label":"Hot-work certificate","options":["Stop. Get the space tested and a certificate for this tank (4P) before any hot work.","Fine. Tank 3P is next door.","Fine if the certificate was issued today."],"why":"Spaces that held fuel must be tested and certified before hot work, and a certificate only covers the space and time written on it.","fixText":"Certificate issued for tank 4P.","source":"OSHA 29 CFR 1915.14(a)"},"SHP-07":{"name":"Oxygen used to \\"freshen the air\\"","label":"Hose into the tank","options":["Shut it off now. Never use oxygen for ventilation.","Fine if it is done slowly.","Fine if an extinguisher is ready."],"why":"Extra oxygen makes clothing and other materials burn fiercely. Use proper forced ventilation, then leave and re-test the air.","fixText":"Oxygen hose removed.","source":"ANSI Z49.1:2021 §7.1.5; OSHA 29 CFR 1910.252(c)(4)(v); UK HSE Asphyxiation hazards in welding"},"UW-01":{"name":"Safety switch closed while the diver changes the electrode","label":"Knife switch","options":["Nothing. Leaving the switch closed saves time between electrodes.","The switch is closed during an electrode change. Open it until the diver calls \\"switch on\\".","The switch only matters when the machine is above full power."],"why":"With the safety switch open, the diver is fully isolated from the welding current. The tender closes it only when the diver calls for it and confirms every change by voice.","fixText":"Switch open. The tender stands at the switch with the comms headset on.","source":"US Navy S0300-BB-MAN-010 App. D §D-9; OSHA 1910.422(g)(1); IMCA D 045 §8.5.5"},"UW-02":{"name":"AC welding machine connected","label":"Welding machine","options":["The machine is set to AC. Underwater welding needs a DC power source.","Nothing. AC and DC are equally safe in water.","AC is fine if the diver wears thicker gloves."],"why":"An AC shock can lock the hand muscles, so the diver may not be able to let go. AC is much more dangerous underwater than DC.","fixText":"DC welding machine connected. The machine frame is earthed to the barge.","source":"US Navy S0300-BB-MAN-010 §D-4, §D-6; IMCA D 045 §8.5.5"},"UW-03":{"name":"Work clamp far from the weld, diver in the current path","label":"Work (ground) clamp","options":["Nothing. Any point on the structure is a good return.","The clamp should be on the barge so it stays dry.","The clamp is far away, with the diver between electrode and clamp. Fix it close to the weld."],"why":"If your body or equipment is between the electrode and the work clamp, you can become part of the welding circuit. Fix the clamp close to the work, in front of you, and face it.","fixText":"Clamp fixed on the pile close to the weld. The diver faces the clamp.","source":"US Navy S0300-BB-MAN-010 §D-7(e), §D-8(h); IMCA D 045 §8.5.5"},"UW-04":{"name":"Welding under a space where gas can be trapped","label":"Closed space above the weld","options":["Nothing. Gas bubbles always escape to the surface.","Gas from the arc is collecting in the closed space above. Vent or flood the space before welding.","Weld faster so less gas is produced."],"why":"The arc splits water into hydrogen and oxygen, which rise and collect in pockets above the work and can explode. Vent or flood any space where gas could be trapped, and stop if you hear a \\"pop\\".","fixText":"Vent hose fitted from the high point to above the waterline. No gas pocket left.","source":"US Navy S0300-BB-MAN-010 §D-3.1–D-3.2; OSHA 1910.422(g)(5); IMCA D 045 §8.5.5"},"UW-05":{"name":"Comms not tested and no standby diver ready","label":"Dive control station","options":["Comms can be tested once the diver reaches the work.","A standby diver is only needed for deep dives, so this is fine.","Comms are off and the standby diver is not dressed. Test comms and ready the standby diver."],"why":"The safety switch depends on clear voice commands between diver and tender. If the diver gets into trouble, a standby diver must be ready to go in at once.","fixText":"Comms on and tested. Standby diver dressed, helmet to hand.","source":"OSHA 1910.422(c), (g)(1)(i); HSE L104 paras 78, 83–85, 105–106"},"UW-06":{"name":"Electrode holder not insulated for underwater use","label":"Electrode holder","options":["This is a topside holder with bare metal and damaged insulation. Use a fully insulated underwater holder.","Nothing. Seawater cools the holder, so insulation is not needed.","Wrap the bare parts in a cloth and start welding."],"why":"Any bare metal on the holder or a damaged cable joint lets current leak into the water around your hand. Holders made for topside use are not suitable underwater.","fixText":"Fully insulated underwater holder fitted. Cable joint re-insulated, no bubbles.","source":"US Navy S0300-BB-MAN-010 §D-7(a)–(d), §D-8(c); OSHA 1910.422(g)(3); IMCA D 045 §8.5.5"}}`),Vl={title:"Dress for the job",intro:"Choose the right protection for MAG welding at this bay.",items:{"PPE-01":{q:"Which eye and face protection do you take?",options:["A helmet with a cracked cover lens. It still works.","A helmet with intact lenses and the filter shade suited to the process and current, with safety glasses underneath.","Safety glasses only. The arc is short."],why:"Arc radiation burns eyes and skin within seconds. The filter must suit the process and current, with no gaps that let light through. Safety glasses protect you from slag and grinding particles when the helmet is raised.",source:"ANSI Z49.1:2021 §4.2; ISO 16321-2 (scope)"},"PPE-02":{q:"Which clothing is correct?",options:["Polyester hoodie. It is warm.","Cotton t-shirt with rolled-up sleeves.","Flame-resistant welding jacket and trousers: collar and sleeves closed, no turn-ups, pockets empty."],why:"Sparks lodge in turn-ups, open pockets and rolled sleeves. Synthetic fabrics can melt onto the skin.",source:"ANSI Z49.1:2021 §4.3; EN ISO 11611 (scope)"},"PPE-03":{q:"Which gloves and footwear do you choose?",options:["Dry, undamaged welding gloves and safety boots, with the trousers over the boot tops.","Wet welding gloves. They keep your hands cool.","Torn gloves and trainers. It is a short job."],why:"Gloves protect against burns and are part of your insulation from electric shock, so wet or torn gloves increase the risk. Spatter can enter low or open shoes.",source:"ANSI Z49.1:2021 §4.3.2, §4.3.6, §11.4.9.3; EN 12477 (scope)"},"UPPE-01":{q:"Which diving helmet do you take for wet welding?",options:["A helmet with no welding lens. The water filters the arc light.","A helmet with a welding lens fitted and voice comms tested.","A helmet with the comms cable unplugged. You can use hand signals."],why:"The arc can injure your eyes underwater just as it does topside, so the helmet needs a welding lens suited to the water conditions. Voice comms are how you call the switch on and off.",source:"US Navy S0300-BB-MAN-010 §D-12.1(c); OSHA 1910.422(c); HSE L104 para 105"},"UPPE-02":{q:"Which hand and body protection is correct?",options:["Leather welding gloves only. They work topside.","Rubber gloves with a small tear. The suit covers the rest.","Heavy rubber gloves over thin rubber gloves, cuffs over the wrists, and a suit with no tears."],why:"Rubber gloves give the most protection where the voltage is highest, at your hands. Tears in gloves or suit reduce your insulation from the welding current.",source:"US Navy S0300-BB-MAN-010 §D-12.1(a)–(b); OSHA 1910.422(g)(4); IMCA D 045 §8.5.2"},"UPPE-03":{q:"What about your emergency breathing gas?",options:["Bail-out cylinder carried, charged and checked before the dive.","No bail-out needed. The surface supply has a backup.","Take the bail-out cylinder even if the gauge reads empty."],why:"If the surface gas supply fails, the bail-out cylinder gives you enough gas to reach safety. Check it before every dive.",source:"HSE L104 paras 43(b), 101; OSHA 1910.421(g)"}}},Gl={kicker:"Welding",cta:"Practise welding",unlockTitle:"Ready for the job",unlockText:"The workplace is safe. Now lay a bead with MIG/MAG, stick or TIG.",chooseTitle:"Choose your welding process",chooseBody:"Lay one bead along the joint. This is a hands-on taster, not a technique assessment.",processes:{GMAW:{name:"GMAW · MIG/MAG",short:"wire-fed gun with shielding gas",desc:"A wire electrode is fed continuously through the gun while shielding gas protects the weld pool. Wire and gas start when you pull the trigger."},SMAW:{name:"SMAW · Stick (MMA)",short:"coated electrode that melts as you weld",desc:"A flux-coated electrode carries the current and melts into the joint. It gets shorter as you weld, so keep bringing your hand closer. The flux leaves slag on the bead, which you chip off afterwards."},GTAW:{name:"GTAW · TIG",short:"tungsten electrode, filler rod in the other hand",desc:"A non-consumable tungsten electrode makes the arc under shielding gas. Filler rod is added by hand into the front of the weld pool. Keep the tungsten out of the pool."}},howScreen:"Press and hold on the joint at the left mark, then move steadily to the right mark. Release to stop.",howVr:"Bring the tip close to the joint at the left mark and hold the trigger to strike the arc. Move steadily to the right mark. Release to stop.",helmet:"Your helmet is down. The auto-darkening filter darkens when the arc strikes.",joint:"Joint welded",finishPass:"Finish pass",change:"Change process",exit:"Exit welding",soundOn:"Sound on",soundOff:"Sound off",weldFirst:"Weld along the joint first.",electrodeUsed:"Electrode used up. A new one is fitted: carry on from where you stopped.",stuck:"The electrode stuck to the plate. Release the trigger and strike again, keeping a short gap.",tungsten:"The tungsten touched the plate. In real work you would stop and regrind it. Release the trigger and start again.",lost:"Arc lost: you moved too far from the plate. Release the trigger and strike again.",slagTitle:"Remove the slag",slagBody:"Stick welding leaves a layer of slag on the bead. Chip and brush it off before you inspect the weld. Keep your eye protection on: hot slag can fly.",chip:"Chip the slag",resultTitle:{great:"Great pass",good:"Good start",keep:"Keep practising"},fb:{coverage:{good:"Joint welded from mark to mark.",bad:"Part of the joint was not welded. Weld from the left mark to the right mark."},line:{good:"You stayed on the joint.",bad:"The bead wandered off the joint. Watch the front edge of the weld pool and follow the joint line."},pace:{good:"Good travel speed.",slow:"Too slow: the bead got wide and heaped up. Move a little faster.",fast:"Too fast: the bead is thin and narrow. Slow down so the metal can fuse."},steady:{good:"Smooth, steady movement.",bad:"Your speed kept changing. Try to move at an even pace."},distance:{good:"Good distance to the work.",far:"Often too far from the work: the arc becomes unstable and spatters.",close:"Often too close to the work. Keep a short, constant gap."}},markGood:"OK",markTip:"TIP",note:"Practice feedback is indicative only and is not a technique assessment.",soldamatic:"To train real welding technique with measured feedback, use the Soldamatic augmented-reality welding simulator.",again:"Weld again",done:"Done",wetNote:"Wet welding uses waterproofed stick electrodes, and real underwater technique differs from welding in air. This practice shows the basic movement only.",startWelding:"Start welding",startJob:"The workplace is safe. Now do the job.",startJobReview:"Some items were missed. Check them in the full results later. Now do the job."},Wl={factory:[{q:"Combustible materials near the work cannot be moved. What should you do?",options:["Weld quickly to reduce the risk.","Protect them with fire-resistant covers or guards. If they cannot be protected, do not weld.","Spray them with water and start."],why:"If combustibles cannot be moved or protected, the work must not start.",source:"ANSI Z49.1:2021 §6.1.4"},{q:"Why must you never cool a hot electrode holder by dipping it in water?",options:["It damages the electrode.","It makes the fume worse.","It can expose you to electric shock."],why:"Water greatly increases the risk of electric shock.",source:"OSHA 1926.351(d)(2); ANSI Z49.1:2021 §11.4.9.5"},{q:"According to UK HSE, is general room ventilation enough to control mild steel welding fume indoors?",options:["No. Engineering controls such as LEV are expected, with respiratory protection if exposure remains.","Yes, if the doors are open.","Only for TIG welding."],why:"HSE treats all welding fume, including mild steel fume, as a carcinogen and expects fume to be controlled at the source.",source:"HSE Safety Alert STSU1-2019"},{q:"Why must chlorinated degreasing be kept away from the welding arc?",options:["It makes the weld look dull.","Arc UV and heat can turn its vapour into phosgene, a highly toxic gas.","It is only a problem in winter."],why:"Phosgene can form from chlorinated hydrocarbon vapours exposed to the arc.",source:"ANSI Z49.1:2021 §5.5.4.1"},{q:"Why must a gas cylinder never become part of the welding circuit?",options:["An arc struck on a cylinder can weaken it.","It wastes shielding gas.","It changes the gas mixture."],why:"Arc strikes damage the cylinder wall and can lead to failure. Keep the work clamp and electrode away from cylinders.",source:"ANSI Z49.1:2021 §10.8.4.12–14"}],construction:[{q:"Why is an electric shock more dangerous when you weld at height?",options:["It is not. Height makes no difference.","The shock, or just the surprise, can make you fall. Fall protection must be in place first.","Because the cables are longer."],why:"Even a mild shock can cause a fall from height.",source:"ANSI Z49.1:2021 §11.4.9.8, E11.4.9.2"},{q:"It is raining and the steel is wet. What lowers your risk of electric shock?",options:["Dry gloves and boots, an insulating mat, and a machine protected from the rain.","Welding faster.","Wet gloves for a better grip."],why:"Water and sweat make electric shock more likely. Keep yourself insulated from the wet work.",source:"ANSI Z49.1:2021 §11.4.9.2, §11.4.9.3"},{q:"Where must the work (return) clamp be attached?",options:["On a nearby gas pipe.","On the crane hook.","On the work, close to the joint."],why:"Current must not flow through pipelines, chains, ropes, cranes or hoists.",source:"OSHA 29 CFR 1926.351(c); OSHA 29 CFR 1910.254(c)(2)(iii)"},{q:"What does the fire watch do after welding stops?",options:["Leaves together with the welder.","Stays for the time set in the permit and checks for smouldering fires, also below and behind.","Switches off the welding machine."],why:"Many fires start after the work has finished, from material that smoulders unseen.",source:"ANSI Z49.1:2021 §6.2.4; OSHA 29 CFR 1926.352(e)"},{q:"How should a gas cylinder be lifted to an upper level?",options:["With a choker sling.","With a lifting magnet.","In a cylinder cradle or on a suitable pallet."],why:"Slings and magnets can let the cylinder slip and fall.",source:"OSHA 29 CFR 1926.350(a)(6)"}],shipyard:[{q:"Where do gas cylinders and welding power sources go when you weld inside a double bottom?",options:["Next to the welder for easy adjustment.","Outside the confined space.","At the bottom of the space, chained."],why:"A leak inside the space can create an atmosphere you cannot breathe.",source:"ANSI Z49.1:2021 §7.2.1; OSHA 29 CFR 1910.252(b)(4)(iii)"},{q:"Why is argon especially dangerous in tanks and double bottoms?",options:["It is flammable.","It is heavier than air, collects in low areas and pushes out the oxygen.","It is toxic in small amounts."],why:"You cannot see or smell it, and it collects at the bottom of the space.",source:"UK HSE Asphyxiation hazards in welding; ANSI Z49.1:2021 E7.1.2"},{q:'A co-worker wants to blow oxygen into a tank to "freshen the air". What is correct?',options:["Good idea if done slowly.","Fine if a fire extinguisher is present.","Never. Oxygen enrichment greatly increases the fire risk."],why:"In air with extra oxygen, clothing and other materials catch fire easily and burn fiercely.",source:"ANSI Z49.1:2021 §7.1.5; OSHA 29 CFR 1910.252(c)(4)(v)"},{q:"You weld on a bulkhead. What extra precaution may be needed?",options:["A fire watch on the other side, because heat can ignite materials in the next compartment.","Nothing. Steel does not burn.","A darker filter shade."],why:"Heat conducts through the plate to areas the welder cannot see.",source:"ANSI Z49.1:2021 §6.2.2; OSHA 29 CFR 1915.504"},{q:"What does the attendant outside a confined space do?",options:["Goes in to help at the first sign of trouble, without a plan.","Stays outside, keeps contact with the people inside and raises the alarm to start the planned rescue.","Leaves once the welder is inside."],why:"Unplanned rescues often add more victims. The attendant raises the alarm and starts the planned rescue.",source:"ANSI Z49.1:2021 §7.4, §7.5"}],underwater:[{q:"Why is AC power never used for underwater welding?",options:["It gives poorer weld quality.","It uses more power from the generator.","An AC shock can lock your hand muscles so you cannot let go."],why:"AC shock stops you from relaxing the muscles that control your hand. This is why only DC is used underwater.",source:"US Navy S0300-BB-MAN-010 §D-4"},{q:'While welding, you hear a "pop" near the work. What do you do?',options:["Stop welding and investigate. Gas is collecting above the work.","Keep welding. Pops are normal underwater.","Weld faster to finish before more gas forms."],why:"A pop means explosive gas is collecting above the work area. Stop and find the cause before you continue.",source:"US Navy S0300-BB-MAN-010 §D-3.2"},{q:"Your electrode is nearly used up. What is the correct sequence?",options:["Change it quickly while the current is still on.",'Call "switch off", wait for the tender to confirm, then change the electrode.',"Ask the tender to lower the current, then change it."],why:"Never change an electrode with the current on. Wait until the tender confirms the switch is off.",source:"US Navy S0300-BB-MAN-010 §3-12.3, §D-5(f); IMCA D 045 §8.5.5"},{q:"Where is a diver at greatest risk of severe electric shock when welding?",options:["At the seabed.","Inside a dry habitat.","In the splash zone, only partly in the water."],why:"When you are only partly in the water, current can pass through your body more easily. The splash zone is the most hazardous place to weld.",source:"US Navy S0300-BB-MAN-010 App. D (warning, §D-3)"},{q:"Voice comms are lost during welding and cannot be quickly restored. What happens?",options:["The tender keeps the switch closed so the diver can finish.","The switch stays open, welding stops and the working dive is ended.","The diver carries on using hand signals to the camera."],why:"The switch may only be operated on the diver's voice command. Without comms the working dive must end.",source:"OSHA 1910.422(g)(1), (i); US Navy S0300-BB-MAN-010 §E-6"}]},Xl={title:"Change worksite?",body:"Your progress in this worksite will be lost. Finished results are kept in My results.",stay:"Stay here",change:"Change worksite"},ql={title:"My results",note:"Saved only in this browser on this device. Clearing the browser data removes them.",empty:"No results yet. Complete a safety check to see it here.",date:"Date",worksite:"Worksite",activity:"Activity",result:"Result",check:"Safety check",weld:"Weld practice",ready:"Ready to weld",notReady:"Not ready",clear:"Clear history",clearConfirm:"Delete all saved results on this device?",back:"Back"},Na={app:Il,env:Ul,brief:Nl,hud:Ol,panel:Fl,finishConfirm:kl,quizIntro:zl,results:Bl,hazards:Hl,ppe:Vl,practice:Gl,quizzes:Wl,changeConfirm:Xl,records:ql},jh=Object.freeze(Object.defineProperty({__proto__:null,app:Il,brief:Nl,changeConfirm:Xl,default:Na,env:Ul,finishConfirm:kl,hazards:Hl,hud:Ol,panel:Fl,ppe:Vl,practice:Gl,quizIntro:zl,quizzes:Wl,records:ql,results:Bl},Symbol.toStringTag,{value:"Module"})),lc=Object.assign({"./locales/en.json":()=>$h(()=>Promise.resolve().then(()=>jh),void 0,import.meta.url).then(i=>i.default)});let Yl=Na,qs="en";async function Kh(){const t=[new URLSearchParams(location.search).get("lang"),...navigator.languages||[navigator.language]].filter(Boolean).map(e=>e.toLowerCase());for(const e of t){const n=[e,e.split("-")[0]].find(s=>lc[`./locales/${s}.json`]);if(n){qs=n;break}}qs!=="en"&&(Yl=await lc[`./locales/${qs}.json`]()),document.documentElement.lang=qs}const hc=(i,t)=>t.split(".").reduce((e,n)=>e==null?void 0:e[n],i);function O(i,t){let e=hc(Yl,i);return e===void 0&&(e=hc(Na,i)),e===void 0?i:(typeof e=="string"&&t&&(e=e.replace(/\{(\w+)\}/g,(n,s)=>t[s]??n)),e)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oa="170",Jh=0,uc=1,Qh=2,Zl=1,$l=2,Bn=3,ai=0,nn=1,Je=2,ri=0,ji=1,zs=2,dc=3,fc=4,tu=5,_i=100,eu=101,nu=102,iu=103,su=104,ru=200,ou=201,au=202,cu=203,Vo=204,Go=205,lu=206,hu=207,uu=208,du=209,fu=210,pu=211,mu=212,gu=213,vu=214,Wo=0,Xo=1,qo=2,is=3,Yo=4,Zo=5,$o=6,jo=7,jl=0,_u=1,xu=2,oi=0,yu=1,wu=2,Mu=3,Kl=4,Su=5,bu=6,Eu=7,Jl=300,ss=301,rs=302,Ko=303,Jo=304,Vr=306,Ur=1e3,yi=1001,Qo=1002,pn=1003,Tu=1004,Ys=1005,Pn=1006,no=1007,wi=1008,Zn=1009,Ql=1010,th=1011,Bs=1012,Fa=1013,Mi=1014,Ln=1015,Xs=1016,ka=1017,za=1018,os=1020,eh=35902,nh=1021,ih=1022,An=1023,sh=1024,rh=1025,Ki=1026,as=1027,Ba=1028,Ha=1029,oh=1030,Va=1031,Ga=1033,Ar=33776,Cr=33777,Rr=33778,Pr=33779,ta=35840,ea=35841,na=35842,ia=35843,sa=36196,ra=37492,oa=37496,aa=37808,ca=37809,la=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,va=37818,_a=37819,xa=37820,ya=37821,Lr=36492,wa=36494,Ma=36495,ah=36283,Sa=36284,ba=36285,Ea=36286,Au=3200,Cu=3201,ch=0,Ru=1,si="",Ke="srgb",hs="srgb-linear",Gr="linear",Le="srgb",Ci=7680,pc=519,Pu=512,Lu=513,Du=514,lh=515,Iu=516,Uu=517,Nu=518,Ou=519,Ta=35044,mc="300 es",Vn=2e3,Nr=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gc=1234567;const Ds=Math.PI/180,cs=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function Wa(i,t){return(i%t+t)%t}function Fu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ku(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function zu(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function Bu(i,t=1){return t-Math.abs(Wa(i,t*2)-t)}function Hu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wu(i,t){return i+Math.random()*(t-i)}function Xu(i){return i*(.5-Math.random())}function qu(i){i!==void 0&&(gc=i);let t=gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yu(i){return i*Ds}function Zu(i){return i*cs}function $u(i){return(i&i-1)===0&&i!==0}function ju(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ju(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ji={DEG2RAD:Ds,RAD2DEG:cs,generateUUID:Dn,clamp:$e,euclideanModulo:Wa,mapLinear:Fu,inverseLerp:ku,lerp:Is,damp:zu,pingpong:Bu,smoothstep:Hu,smootherstep:Vu,randInt:Gu,randFloat:Wu,randFloatSpread:Xu,seededRandom:qu,degToRad:Yu,radToDeg:Zu,isPowerOfTwo:$u,ceilPowerOfTwo:ju,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:Ju,normalize:Pe,denormalize:Tn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,o,a,c,l){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],E=s[1],y=s[4],_=s[7],U=s[2],A=s[5],P=s[8];return r[0]=o*v+a*E+c*U,r[3]=o*m+a*y+c*A,r[6]=o*p+a*_+c*P,r[1]=l*v+u*E+h*U,r[4]=l*m+u*y+h*A,r[7]=l*p+u*_+h*P,r[2]=d*v+f*E+g*U,r[5]=d*m+f*y+g*A,r[8]=d*p+f*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(io.makeScale(t,e)),this}rotate(t){return this.premultiply(io.makeRotation(-t)),this}translate(t,e){return this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const io=new he;function hh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){const i=Hs("canvas");return i.style.display="block",i}const vc={};function Ps(i){i in vc||(vc[i]=!0,console.warn(i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ed(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ee={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Le&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Le&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const _c=[.64,.33,.3,.6,.15,.06],xc=[.2126,.7152,.0722],yc=[.3127,.329],wc=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[hs]:{primaries:_c,whitePoint:yc,transfer:Gr,toXYZ:wc,fromXYZ:Mc,luminanceCoefficients:xc,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:_c,whitePoint:yc,transfer:Le,toXYZ:wc,fromXYZ:Mc,luminanceCoefficients:xc,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});let Ri;class id{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Hs("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sd=0;class uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(so(s[o].image)):r.push(so(s[o]))}else r=so(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?id.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rd=0;class Qe extends us{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=yi,s=yi,r=Pn,o=wi,a=An,c=Zn,l=Qe.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Dn(),this.name="",this.source=new uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Jl;Qe.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(f+1)/2,U=(p+1)/2,A=(u+d)/4,P=(h+v)/4,C=(g+m)/4;return y>_&&y>U?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=P/n):_>U?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=C/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=P/r,s=C/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class od extends us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dh extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ad extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*v,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const U=Math.sqrt(y),A=Math.atan2(U,p*E);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}const _=a*E;if(c=c*m+d*_,l=l*m+f*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ro.copy(this).projectOnVector(t),this.sub(ro)}reflect(t){return this.sub(ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new S,Sc=new ci;class Ei{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),$s.subVectors(this.max,ms),Pi.subVectors(t.a,ms),Li.subVectors(t.b,ms),Di.subVectors(t.c,ms),Kn.subVectors(Li,Pi),Jn.subVectors(Di,Li),ui.subVectors(Pi,Di);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-ui.z,ui.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,ui.z,0,-ui.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-ui.y,ui.x,0];return!oo(e,Pi,Li,Di,$s)||(e=[1,0,0,0,1,0,0,0,1],!oo(e,Pi,Li,Di,$s))?!1:(js.crossVectors(Kn,Jn),e=[js.x,js.y,js.z],oo(e,Pi,Li,Di,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new S,new S,new S,new S,new S,new S,new S,new S],wn=new S,Zs=new Ei,Pi=new S,Li=new S,Di=new S,Kn=new S,Jn=new S,ui=new S,ms=new S,$s=new S,js=new S,di=new S;function oo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){di.fromArray(i,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),u=n.dot(di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const cd=new Ei,gs=new S,ao=new S;class Ti{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(ao)),this.expandByPoint(gs.copy(t.center).sub(ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new S,co=new S,Ks=new S,Qn=new S,lo=new S,Js=new S,ho=new S;class Wr{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){co.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(co);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=Qn.dot(this.direction),c=-Qn.dot(Ks),l=Qn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(co).addScaledVector(Ks,d),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){lo.subVectors(e,t),Js.subVectors(n,t),ho.crossVectors(lo,Js);let o=this.direction.dot(ho),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors(Qn,Js));if(c<0)return null;const l=a*this.direction.dot(lo.cross(Qn));if(l<0||c+l>o)return null;const u=-a*Qn.dot(ho);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,g,v,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,v,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,hd)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ti.crossVectors(n,dn),ti.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ti.crossVectors(n,dn)),ti.normalize(),Qs.crossVectors(dn,ti),s[0]=ti.x,s[4]=Qs.x,s[8]=dn.x,s[1]=ti.y,s[5]=Qs.y,s[9]=dn.y,s[2]=ti.z,s[6]=Qs.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],y=n[7],_=n[11],U=n[15],A=s[0],P=s[4],C=s[8],x=s[12],w=s[1],L=s[5],z=s[9],B=s[13],$=s[2],rt=s[6],X=s[10],lt=s[14],G=s[3],yt=s[7],bt=s[11],Et=s[15];return r[0]=o*A+a*w+c*$+l*G,r[4]=o*P+a*L+c*rt+l*yt,r[8]=o*C+a*z+c*X+l*bt,r[12]=o*x+a*B+c*lt+l*Et,r[1]=u*A+h*w+d*$+f*G,r[5]=u*P+h*L+d*rt+f*yt,r[9]=u*C+h*z+d*X+f*bt,r[13]=u*x+h*B+d*lt+f*Et,r[2]=g*A+v*w+m*$+p*G,r[6]=g*P+v*L+m*rt+p*yt,r[10]=g*C+v*z+m*X+p*bt,r[14]=g*x+v*B+m*lt+p*Et,r[3]=E*A+y*w+_*$+U*G,r[7]=E*P+y*L+_*rt+U*yt,r[11]=E*C+y*z+_*X+U*bt,r[15]=E*x+y*B+_*lt+U*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=h*m*l-v*d*l+v*c*f-a*m*f-h*c*p+a*d*p,y=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,_=u*v*l-g*h*l+g*a*f-o*v*f-u*a*p+o*h*p,U=g*h*c-u*v*c-g*a*d+o*v*d+u*a*m-o*h*m,A=e*E+n*y+s*_+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=E*P,t[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*P,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*P,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*P,t[4]=y*P,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*P,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*P,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*P,t[8]=_*P,t[9]=(g*h*r-u*v*r-g*n*f+e*v*f+u*n*p-e*h*p)*P,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*P,t[12]=U*P,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*m+e*h*m)*P,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,E=c*l,y=c*u,_=c*h,U=n.x,A=n.y,P=n.z;return s[0]=(1-(v+p))*U,s[1]=(f+_)*U,s[2]=(g-y)*U,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+y)*P,s[9]=(m-E)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const l=1/r,u=1/o,h=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Vn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Nr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let g,v;if(a===Vn)g=(o+r)*h,v=-2*h;else if(a===Nr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new S,Mn=new Ae,ld=new S(0,0,0),hd=new S(1,1,1),ti=new S,Qs=new S,dn=new S,bc=new Ae,Ec=new ci;class xn{constructor(t=0,e=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ud=0;const Tc=new S,Ui=new ci,Fn=new Ae,tr=new S,vs=new S,dd=new S,fd=new ci,Ac=new S(1,0,0),Cc=new S(0,1,0),Rc=new S(0,0,1),Pc={type:"added"},pd={type:"removed"},Ni={type:"childadded",child:null},uo={type:"childremoved",child:null};class Ve extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new S,e=new xn,n=new ci,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new he}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return Tc.copy(t).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(vs,tr,this.up):Fn.lookAt(tr,vs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new S(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new S,kn=new S,fo=new S,zn=new S,Oi=new S,Fi=new S,Lc=new S,po=new S,mo=new S,go=new S,vo=new De,_o=new De,xo=new De;class _n{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),kn.subVectors(n,e),fo.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(kn),c=Sn.dot(fo),l=kn.dot(kn),u=kn.dot(fo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return vo.setScalar(0),_o.setScalar(0),xo.setScalar(0),vo.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vo,r.x),o.addScaledVector(_o,r.y),o.addScaledVector(xo,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),kn.subVectors(t,e),Sn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Sn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Oi.subVectors(s,n),Fi.subVectors(r,n),po.subVectors(t,n);const c=Oi.dot(po),l=Fi.dot(po);if(c<=0&&l<=0)return e.copy(n);mo.subVectors(t,s);const u=Oi.dot(mo),h=Fi.dot(mo);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Oi,o);go.subVectors(t,r);const f=Oi.dot(go),g=Fi.dot(go);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Fi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Lc.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Lc,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Oi,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},er={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=Wa(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=yo(o,r,t+1/3),this.g=yo(o,r,t),this.b=yo(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Ee.fromWorkingColorSpace(en.copy(this),t),Math.round($e(en.r*255,0,255))*65536+Math.round($e(en.g*255,0,255))*256+Math.round($e(en.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ke){Ee.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(er);const n=Is(ei.h,er.h,e),s=Is(ei.s,er.s,e),r=Is(ei.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new le;le.NAMES=fh;let md=0;class hi extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Dn(),this.name="",this.blending=ji,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _e extends hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new S,nr=new vt;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ta&&(t.usage=this.usage),t}}class ph extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mh extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gd=0;const vn=new Ae,wo=new Ve,ki=new S,fn=new Ei,_s=new Ei,Ye=new S;class Ge extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hh(t)?mh:ph)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(fn.min,_s.min),fn.expandByPoint(Ye),Ye.addVectors(fn.max,_s.max),fn.expandByPoint(Ye)):(fn.expandByPoint(_s.min),fn.expandByPoint(_s.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ye.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(t,l),Ye.add(ki)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new S,c[C]=new S;const l=new S,u=new S,h=new S,d=new vt,f=new vt,g=new vt,v=new S,m=new S;function p(C,x,w){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,w),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(v),a[x].add(v),a[w].add(v),c[C].add(m),c[x].add(m),c[w].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,x=E.length;C<x;++C){const w=E[C],L=w.start,z=w.count;for(let B=L,$=L+z;B<$;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new S,_=new S,U=new S,A=new S;function P(C){U.fromBufferAttribute(s,C),A.copy(U);const x=a[C];y.copy(x),y.sub(U.multiplyScalar(U.dot(x))).normalize(),_.crossVectors(A,x);const L=_.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,x=E.length;C<x;++C){const w=E[C],L=w.start,z=w.count;for(let B=L,$=L+z;B<$;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new S,r=new S,o=new S,a=new S,c=new S,l=new S,u=new S,h=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new Ae,fi=new Wr,ir=new Ti,Ic=new S,sr=new S,rr=new S,or=new S,Mo=new S,ar=new S,Uc=new S,cr=new S;class J extends Ve{constructor(t=new Ge,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Mo.fromBufferAttribute(h,t),o?ar.addScaledVector(Mo,u):ar.addScaledVector(Mo.sub(e),u))}e.add(ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(ir.containsPoint(fi.origin)===!1&&(fi.intersectSphere(ir,Ic)===null||fi.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,U=y;_<U;_+=3){const A=a.getX(_),P=a.getX(_+1),C=a.getX(_+2);s=lr(this,p,t,n,l,u,h,A,P,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=lr(this,o,t,n,l,u,h,E,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,U=y;_<U;_+=3){const A=_,P=_+1,C=_+2;s=lr(this,p,t,n,l,u,h,A,P,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=m,y=m+1,_=m+2;s=lr(this,o,t,n,l,u,h,E,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vd(i,t,e,n,s,r,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ai,a),c===null)return null;cr.copy(a),cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cr);return l<e.near||l>e.far?null:{distance:l,point:cr.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,sr),i.getVertexPosition(c,rr),i.getVertexPosition(l,or);const u=vd(i,t,e,n,sr,rr,or,Uc);if(u){const h=new S;_n.getBarycoord(Uc,sr,rr,or,h),s&&(u.uv=_n.getInterpolatedAttribute(s,a,c,l,h,new vt)),r&&(u.uv1=_n.getInterpolatedAttribute(r,a,c,l,h,new vt)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,c,l,h,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new S,materialIndex:0};_n.getNormal(sr,rr,or,d.normal),u.face=d,u.barycoord=h}return u}class He extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function g(v,m,p,E,y,_,U,A,P,C,x){const w=_/P,L=U/C,z=_/2,B=U/2,$=A/2,rt=P+1,X=C+1;let lt=0,G=0;const yt=new S;for(let bt=0;bt<X;bt++){const Et=bt*L-B;for(let Bt=0;Bt<rt;Bt++){const ie=Bt*w-z;yt[v]=ie*E,yt[m]=Et*y,yt[p]=$,l.push(yt.x,yt.y,yt.z),yt[v]=0,yt[m]=0,yt[p]=A>0?1:-1,u.push(yt.x,yt.y,yt.z),h.push(Bt/P),h.push(1-bt/C),lt+=1}}for(let bt=0;bt<C;bt++)for(let Et=0;Et<P;Et++){const Bt=d+Et+rt*bt,ie=d+Et+rt*(bt+1),Q=d+(Et+1)+rt*(bt+1),ft=d+(Et+1)+rt*bt;c.push(Bt,ie,ft),c.push(ie,Q,ft),G+=6}a.addGroup(f,G,x),f+=G,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function _d(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const xd={clone:ls,merge:on};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vh extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new S,Nc=new vt,Oc=new vt;class an extends vh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Nc,Oc),e.subVectors(Oc,Nc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Bi=1;class Md extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(zi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new an(zi,Bi,t,e);r.layers=this.layers,this.add(r);const o=new an(zi,Bi,t,e);o.layers=this.layers,this.add(o);const a=new an(zi,Bi,t,e);a.layers=this.layers,this.add(a);const c=new an(zi,Bi,t,e);c.layers=this.layers,this.add(c);const l=new an(zi,Bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _h extends Qe{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sd extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _h(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ri});r.uniforms.tEquirect.value=e;const o=new J(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Pn),new Md(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const So=new S,bd=new S,Ed=new he;class ii{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=So.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ed.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ti,hr=new S;class qa{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],E=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+u,m+g,_+E).normalize(),n[3].setComponents(c-o,d-u,m-g,_-E).normalize(),n[4].setComponents(c-a,d-h,m-v,_-y).normalize(),e===Vn)n[5].setComponents(c+a,d+h,m+v,_+y).normalize();else if(e===Nr)n[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Td(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class se extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let y=0;y<l;y++){const _=y*h-r;g.push(_,-E,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const y=E+l*p,_=E+l*(p+1),U=E+1+l*(p+1),A=E+1+l*p;f.push(y,_,A),f.push(_,U,A)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jd=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jd=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
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
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
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
#endif`,Tf=`struct PhysicalMaterial {
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
}`,Af=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ff=`#if defined( USE_POINTS_UV )
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
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Np=`#define DISTANCE
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
}`,Op=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,$p=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define TOON
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
}`,t0=`#define TOON
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
}`,e0=`uniform float size;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,s0=`uniform vec3 color;
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
}`,r0=`uniform float rotation;
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
}`,o0=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Ad,alphahash_pars_fragment:Cd,alphamap_fragment:Rd,alphamap_pars_fragment:Pd,alphatest_fragment:Ld,alphatest_pars_fragment:Dd,aomap_fragment:Id,aomap_pars_fragment:Ud,batching_pars_vertex:Nd,batching_vertex:Od,begin_vertex:Fd,beginnormal_vertex:kd,bsdfs:zd,iridescence_fragment:Bd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:qd,color_pars_fragment:Yd,color_pars_vertex:Zd,color_vertex:$d,common:jd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:rf,envmap_fragment:of,envmap_common_pars_fragment:af,envmap_pars_fragment:cf,envmap_pars_vertex:lf,envmap_physical_pars_fragment:yf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:_f,lights_pars_begin:xf,lights_toon_fragment:wf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:bf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Tf,lights_fragment_begin:Af,lights_fragment_maps:Cf,lights_fragment_end:Rf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:If,map_fragment:Uf,map_pars_fragment:Nf,map_particle_fragment:Of,map_particle_pars_fragment:Ff,metalnessmap_fragment:kf,metalnessmap_pars_fragment:zf,morphinstance_vertex:Bf,morphcolor_vertex:Hf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:Zf,normal_vertex:$f,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:tp,opaque_fragment:ep,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:rp,dithering_pars_fragment:op,roughnessmap_fragment:ap,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:hp,shadowmap_vertex:up,shadowmask_pars_fragment:dp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:vp,specularmap_pars_fragment:_p,tonemapping_fragment:xp,tonemapping_pars_fragment:yp,transmission_fragment:wp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:bp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:Ap,background_frag:Cp,backgroundCube_vert:Rp,backgroundCube_frag:Pp,cube_vert:Lp,cube_frag:Dp,depth_vert:Ip,depth_frag:Up,distanceRGBA_vert:Np,distanceRGBA_frag:Op,equirect_vert:Fp,equirect_frag:kp,linedashed_vert:zp,linedashed_frag:Bp,meshbasic_vert:Hp,meshbasic_frag:Vp,meshlambert_vert:Gp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:qp,meshnormal_vert:Yp,meshnormal_frag:Zp,meshphong_vert:$p,meshphong_frag:jp,meshphysical_vert:Kp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:t0,points_vert:e0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:o0},Ft={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Rn={basic:{uniforms:on([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:on([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:on([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:on([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:on([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:on([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:on([Ft.points,Ft.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:on([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:on([Ft.common,Ft.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:on([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:on([Ft.sprite,Ft.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:on([Ft.common,Ft.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:on([Ft.lights,Ft.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Rn.physical={uniforms:on([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const ur={r:0,b:0,g:0},mi=new xn,a0=new Ae;function c0(i,t,e,n,s,r,o){const a=new le(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function v(E){let y=!1;const _=g(E);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===Vr)?(u===void 0&&(u=new J(new He(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ls(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(mi)),u.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Le,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new J(new se(2,2),new li({name:"BackgroundMaterial",uniforms:ls(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Le,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,y){E.getRGB(ur,gh(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:v,addToRenderList:m}}function l0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(w,L,z,B,$){let rt=!1;const X=h(B,z,L);r!==X&&(r=X,l(r.object)),rt=f(w,B,z,$),rt&&g(w,B,z,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,_(w,L,z,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,L,z){const B=z.wireframe===!0;let $=n[w.id];$===void 0&&($={},n[w.id]=$);let rt=$[L.id];rt===void 0&&(rt={},$[L.id]=rt);let X=rt[B];return X===void 0&&(X=d(c()),rt[B]=X),X}function d(w){const L=[],z=[],B=[];for(let $=0;$<e;$++)L[$]=0,z[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:B,object:w,attributes:{},index:null}}function f(w,L,z,B){const $=r.attributes,rt=L.attributes;let X=0;const lt=z.getAttributes();for(const G in lt)if(lt[G].location>=0){const bt=$[G];let Et=rt[G];if(Et===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),bt===void 0||bt.attribute!==Et||Et&&bt.data!==Et.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(w,L,z,B){const $={},rt=L.attributes;let X=0;const lt=z.getAttributes();for(const G in lt)if(lt[G].location>=0){let bt=rt[G];bt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor));const Et={};Et.attribute=bt,bt&&bt.data&&(Et.data=bt.data),$[G]=Et,X++}r.attributes=$,r.attributesNum=X,r.index=B}function v(){const w=r.newAttributes;for(let L=0,z=w.length;L<z;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const z=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;z[w]=1,B[w]===0&&(i.enableVertexAttribArray(w),B[w]=1),$[w]!==L&&(i.vertexAttribDivisor(w,L),$[w]=L)}function E(){const w=r.newAttributes,L=r.enabledAttributes;for(let z=0,B=L.length;z<B;z++)L[z]!==w[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function y(w,L,z,B,$,rt,X){X===!0?i.vertexAttribIPointer(w,L,z,$,rt):i.vertexAttribPointer(w,L,z,B,$,rt)}function _(w,L,z,B){v();const $=B.attributes,rt=z.getAttributes(),X=L.defaultAttributeValues;for(const lt in rt){const G=rt[lt];if(G.location>=0){let yt=$[lt];if(yt===void 0&&(lt==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),lt==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const bt=yt.normalized,Et=yt.itemSize,Bt=t.get(yt);if(Bt===void 0)continue;const ie=Bt.buffer,Q=Bt.type,ft=Bt.bytesPerElement,pt=Q===i.INT||Q===i.UNSIGNED_INT||yt.gpuType===Fa;if(yt.isInterleavedBufferAttribute){const mt=yt.data,Pt=mt.stride,jt=yt.offset;if(mt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<G.locationSize;Zt++)p(G.location+Zt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Zt=0;Zt<G.locationSize;Zt++)m(G.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Zt=0;Zt<G.locationSize;Zt++)y(G.location+Zt,Et/G.locationSize,Q,bt,Pt*ft,(jt+Et/G.locationSize*Zt)*ft,pt)}else{if(yt.isInstancedBufferAttribute){for(let mt=0;mt<G.locationSize;mt++)p(G.location+mt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let mt=0;mt<G.locationSize;mt++)m(G.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let mt=0;mt<G.locationSize;mt++)y(G.location+mt,Et/G.locationSize,Q,bt,Et*ft,Et/G.locationSize*mt*ft,pt)}}else if(X!==void 0){const bt=X[lt];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(G.location,bt);break;case 3:i.vertexAttrib3fv(G.location,bt);break;case 4:i.vertexAttrib4fv(G.location,bt);break;default:i.vertexAttrib1fv(G.location,bt)}}}}E()}function U(){C();for(const w in n){const L=n[w];for(const z in L){const B=L[z];for(const $ in B)u(B[$].object),delete B[$];delete L[z]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const z in L){const B=L[z];for(const $ in B)u(B[$].object),delete B[$];delete L[z]}delete n[w.id]}function P(w){for(const L in n){const z=n[L];if(z[w.id]===void 0)continue;const B=z[w.id];for(const $ in B)u(B[$].object),delete B[$];delete z[w.id]}}function C(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:x,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function h0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function u0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const C=P===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Zn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!C)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:U,maxSamples:A}}function d0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ii,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,y=E*4;let _=p.clippingState||null;c.value=_,_=u(g,d,y,f);for(let U=0;U!==y;++U)_[U]=e[U];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(h[y]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function f0(i){let t=new WeakMap;function e(o,a){return a===Ko?o.mapping=ss:a===Jo&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ko||a===Jo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yh extends vh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Fc=[.125,.215,.35,.446,.526,.582],xi=20,bo=new yh,kc=new le;let Eo=null,To=0,Ao=0,Co=!1;const vi=(1+Math.sqrt(5))/2,Hi=1/vi,zc=[new S(-vi,Hi,0),new S(vi,Hi,0),new S(-Hi,0,vi),new S(Hi,0,vi),new S(0,vi,-Hi),new S(0,vi,Hi),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)];class Aa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,To,Ao),this._renderer.xr.enabled=Co,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Xs,format:An,colorSpace:hs,depthBuffer:!1},s=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p0(r)),this._blurMaterial=m0(r,t,e)}return s}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s){const a=new an(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(kc),u.toneMapping=oi,u.autoClear=!1;const f=new _e({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new J(new He,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(kc),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;dr(s,E*y,p>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;dr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zc[(s-r-1)%zc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new J(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let E=0;for(let P=0;P<xi;++P){const C=P/v,x=Math.exp(-C*C/2);p.push(x),P===0?E+=x:P<m&&(E+=2*x)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[s],U=3*_*(s>y-Zi?s-y+Zi:0),A=4*(this._cubeSize-_);dr(e,U,A,3*_,2*_),c.setRenderTarget(e),c.render(h,bo)}}function p0(i){const t=[],e=[],n=[];let s=i;const r=i-Zi+1+Fc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zi?c=Fc[o-i+Zi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,C=A>2?0:-1,x=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];E.set(x,v*g*A),y.set(d,m*g*A);const w=[A,A,A,A,A,A];_.set(w,p*g*A)}const U=new Ge;U.setAttribute("position",new ln(E,v)),U.setAttribute("uv",new ln(y,m)),U.setAttribute("faceIndex",new ln(_,p)),t.push(U),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bc(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function m0(i,t,e){const n=new Float32Array(xi),s=new S(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Hc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ya(){return`

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
	`}function g0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ko||c===Jo,u=c===ss||c===rs;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Aa(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Aa(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function v0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let y=0,_=E.length;y<_;y+=3){const U=E[y+0],A=E[y+1],P=E[y+2];d.push(U,A,A,P,P,U)}}else if(g!==void 0){const E=g.array;v=g.version;for(let y=0,_=E.length/3-1;y<_;y+=3){const U=y+0,A=y+1,P=y+2;d.push(U,A,A,P,P,U)}}else return;const m=new(hh(d)?mh:ph)(d,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function x0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*v[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function y0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function w0(i,t,e){const n=new WeakMap,s=new De;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=a.attributes.position.count*y,U=1;_>t.maxTextureSize&&(U=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const A=new Float32Array(_*U*4*h),P=new dh(A,_,U,h);P.type=Ln,P.needsUpdate=!0;const C=y*4;for(let w=0;w<h;w++){const L=m[w],z=p[w],B=E[w],$=_*U*4*w;for(let rt=0;rt<L.count;rt++){const X=rt*C;f===!0&&(s.fromBufferAttribute(L,rt),A[$+X+0]=s.x,A[$+X+1]=s.y,A[$+X+2]=s.z,A[$+X+3]=0),g===!0&&(s.fromBufferAttribute(z,rt),A[$+X+4]=s.x,A[$+X+5]=s.y,A[$+X+6]=s.z,A[$+X+7]=0),v===!0&&(s.fromBufferAttribute(B,rt),A[$+X+8]=s.x,A[$+X+9]=s.y,A[$+X+10]=s.z,A[$+X+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new vt(_,U)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function M0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class wh extends Qe{constructor(t,e,n,s,r,o,a,c,l,u=Ki){if(u!==Ki&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=Mi),n===void 0&&u===as&&(n=os),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mh=new Qe,Gc=new wh(1,1),Sh=new dh,bh=new ad,Eh=new _h,Wc=[],Xc=[],qc=new Float32Array(16),Yc=new Float32Array(9),Zc=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Wc[s];if(r===void 0&&(r=new Float32Array(s),Wc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Xc[t];e===void 0&&(e=new Int32Array(t),Xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Zc.set(n),i.uniformMatrix2fv(this.addr,!1,Zc),qe(e,n)}}function C0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Yc.set(n),i.uniformMatrix3fv(this.addr,!1,Yc),qe(e,n)}}function R0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;qc.set(n),i.uniformMatrix4fv(this.addr,!1,qc),qe(e,n)}}function P0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function U0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=lh,r=Gc):r=Mh,e.setTexture2D(t||r,s)}function z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bh,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eh,s)}function H0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sh,s)}function V0(i){switch(i){case 5126:return S0;case 35664:return b0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return U0;case 36294:return N0;case 36295:return O0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return H0}}function G0(i,t){i.uniform1fv(this.addr,t)}function W0(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function X0(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function q0(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Y0(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Z0(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $0(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function j0(i,t){i.uniform1iv(this.addr,t)}function K0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function Q0(i,t){i.uniform4iv(this.addr,t)}function tm(i,t){i.uniform1uiv(this.addr,t)}function em(i,t){i.uniform2uiv(this.addr,t)}function nm(i,t){i.uniform3uiv(this.addr,t)}function im(i,t){i.uniform4uiv(this.addr,t)}function sm(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Mh,r[o])}function rm(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bh,r[o])}function om(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Eh,r[o])}function am(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sh,r[o])}function cm(i){switch(i){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return $0;case 5124:case 35670:return j0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V0(e.type)}}class hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cm(e.type)}}class um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ro=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function dm(i,t,e){const n=i.name,s=n.length;for(Ro.lastIndex=0;;){const r=Ro.exec(n),o=Ro.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$c(e,l===void 0?new lm(a,i,t):new hm(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new um(a),$c(e,h)),e=h}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fm=37297;let pm=0;function mm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Kc=new he;function gm(i){Ee._getMatrix(Kc,Ee.workingColorSpace,i);const t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case Gr:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mm(i.getShaderSource(t),o)}else return s}function vm(i,t){const e=gm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _m(i,t){let e;switch(t){case yu:e="Linear";break;case wu:e="Reinhard";break;case Mu:e="Cineon";break;case Kl:e="ACESFilmic";break;case bu:e="AgX";break;case Eu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fr=new S;function xm(){Ee.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function wm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ls(i){return i!==""}function Qc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(i){return i.replace(Sm,Em)}const bm=new Map;function Em(i,t){let e=de[t];if(e===void 0){const n=bm.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ca(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(i){return i.replace(Tm,Am)}function Am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function Lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jl:t="ENVMAP_BLENDING_MULTIPLY";break;case _u:t="ENVMAP_BLENDING_MIX";break;case xu:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Im(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Cm(e),l=Rm(e),u=Pm(e),h=Lm(e),d=Dm(e),f=ym(e),g=wm(r),v=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(m=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?de.tonemapping_pars_fragment:"",e.toneMapping!==oi?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,vm("linearToOutputTexel",e.outputColorSpace),xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Ca(o),o=Qc(o,e),o=tl(o,e),a=Ca(a),a=Qc(a,e),a=tl(a,e),o=el(o),a=el(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+o,_=E+p+a,U=jc(s,s.VERTEX_SHADER,y),A=jc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,U),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(L){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(U).trim(),$=s.getShaderInfoLog(A).trim();let rt=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,A);else{const lt=Jc(s,U,"vertex"),G=Jc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+lt+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||$==="")&&(X=!1);X&&(L.diagnostics={runnable:rt,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(U),s.deleteShader(A),C=new Dr(s,v),x=Mm(s,v)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,fm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=A,this}let Um=0;class Nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Om(t),e.set(t,n)),n}}class Om{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}}function Fm(i,t,e,n,s,r,o){const a=new Xa,c=new Nm,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,L,z,B){const $=z.fog,rt=B.geometry,X=x.isMeshStandardMaterial?z.environment:null,lt=(x.isMeshStandardMaterial?e:t).get(x.envMap||X),G=lt&&lt.mapping===Vr?lt.image.height:null,yt=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const bt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Et=bt!==void 0?bt.length:0;let Bt=0;rt.morphAttributes.position!==void 0&&(Bt=1),rt.morphAttributes.normal!==void 0&&(Bt=2),rt.morphAttributes.color!==void 0&&(Bt=3);let ie,Q,ft,pt;if(yt){const W=Rn[yt];ie=W.vertexShader,Q=W.fragmentShader}else ie=x.vertexShader,Q=x.fragmentShader,c.update(x),ft=c.getVertexShaderID(x),pt=c.getFragmentShaderID(x);const mt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),jt=B.isInstancedMesh===!0,Zt=B.isBatchedMesh===!0,Jt=!!x.map,it=!!x.matcap,ut=!!lt,R=!!x.aoMap,It=!!x.lightMap,ht=!!x.bumpMap,ot=!!x.normalMap,gt=!!x.displacementMap,Yt=!!x.emissiveMap,Dt=!!x.metalnessMap,T=!!x.roughnessMap,M=x.anisotropy>0,H=x.clearcoat>0,Z=x.dispersion>0,st=x.iridescence>0,et=x.sheen>0,Tt=x.transmission>0,at=M&&!!x.anisotropyMap,Ut=H&&!!x.clearcoatMap,Kt=H&&!!x.clearcoatNormalMap,dt=H&&!!x.clearcoatRoughnessMap,At=st&&!!x.iridescenceMap,Gt=st&&!!x.iridescenceThicknessMap,$t=et&&!!x.sheenColorMap,Nt=et&&!!x.sheenRoughnessMap,Qt=!!x.specularMap,Ht=!!x.specularColorMap,ee=!!x.specularIntensityMap,I=Tt&&!!x.transmissionMap,St=Tt&&!!x.thicknessMap,j=!!x.gradientMap,tt=!!x.alphaMap,_t=x.alphaTest>0,xt=!!x.alphaHash,Wt=!!x.extensions;let fe=oi;x.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(fe=i.toneMapping);const oe={shaderID:yt,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:Q,defines:x.defines,customVertexShaderID:ft,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Zt,batchingColor:Zt&&B._colorsTexture!==null,instancing:jt,instancingColor:jt&&B.instanceColor!==null,instancingMorph:jt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:hs,alphaToCoverage:!!x.alphaToCoverage,map:Jt,matcap:it,envMap:ut,envMapMode:ut&&lt.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:It,bumpMap:ht,normalMap:ot,displacementMap:d&&gt,emissiveMap:Yt,normalMapObjectSpace:ot&&x.normalMapType===Ru,normalMapTangentSpace:ot&&x.normalMapType===ch,metalnessMap:Dt,roughnessMap:T,anisotropy:M,anisotropyMap:at,clearcoat:H,clearcoatMap:Ut,clearcoatNormalMap:Kt,clearcoatRoughnessMap:dt,dispersion:Z,iridescence:st,iridescenceMap:At,iridescenceThicknessMap:Gt,sheen:et,sheenColorMap:$t,sheenRoughnessMap:Nt,specularMap:Qt,specularColorMap:Ht,specularIntensityMap:ee,transmission:Tt,transmissionMap:I,thicknessMap:St,gradientMap:j,opaque:x.transparent===!1&&x.blending===ji&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:xt,combine:x.combine,mapUv:Jt&&v(x.map.channel),aoMapUv:R&&v(x.aoMap.channel),lightMapUv:It&&v(x.lightMap.channel),bumpMapUv:ht&&v(x.bumpMap.channel),normalMapUv:ot&&v(x.normalMap.channel),displacementMapUv:gt&&v(x.displacementMap.channel),emissiveMapUv:Yt&&v(x.emissiveMap.channel),metalnessMapUv:Dt&&v(x.metalnessMap.channel),roughnessMapUv:T&&v(x.roughnessMap.channel),anisotropyMapUv:at&&v(x.anisotropyMap.channel),clearcoatMapUv:Ut&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(x.sheenRoughnessMap.channel),specularMapUv:Qt&&v(x.specularMap.channel),specularColorMapUv:Ht&&v(x.specularColorMap.channel),specularIntensityMapUv:ee&&v(x.specularIntensityMap.channel),transmissionMapUv:I&&v(x.transmissionMap.channel),thicknessMapUv:St&&v(x.thicknessMap.channel),alphaMapUv:tt&&v(x.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(ot||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!rt.attributes.uv&&(Jt||tt),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pt,skinning:B.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Bt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:Jt&&x.map.isVideoTexture===!0&&Ee.getTransfer(x.map.colorSpace)===Le,decodeVideoTextureEmissive:Yt&&x.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(x.emissiveMap.colorSpace)===Le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Je,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(E(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function E(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const w=g[x.type];let L;if(w){const z=Rn[w];L=xd.clone(z.uniforms)}else L=x.uniforms;return L}function U(x,w){let L;for(let z=0,B=u.length;z<B;z++){const $=u[z];if($.cacheKey===w){L=$,++L.usedTimes;break}}return L===void 0&&(L=new Im(i,w,x,r),u.push(L)),L}function A(x){if(--x.usedTimes===0){const w=u.indexOf(x);u[w]=u[u.length-1],u.pop(),x.destroy()}}function P(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:U,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:C}}function km(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function il(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||zm),n.length>1&&n.sort(d||il),s.length>1&&s.sort(d||il)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Bm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new sl,i.set(n,[o])):s>=r.length?(o=new sl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new le};break;case"SpotLight":e={position:new S,direction:new S,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function Vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gm=0;function Wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xm(i){const t=new Hm,e=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);const s=new S,r=new Ae,o=new Ae;function a(l){let u=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,E=0,y=0,_=0,U=0,A=0,P=0;l.sort(Wm);for(let x=0,w=l.length;x<w;x++){const L=l[x],z=L.color,B=L.intensity,$=L.distance,rt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*B,h+=z.g*B,d+=z.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],B);P++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const lt=L.shadow,G=e.get(L);G.shadowIntensity=lt.intensity,G.shadowBias=lt.bias,G.shadowNormalBias=lt.normalBias,G.shadowRadius=lt.radius,G.shadowMapSize=lt.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=rt,n.directionalShadowMatrix[f]=L.shadow.matrix,E++}n.directional[f]=X,f++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(B),X.distance=$,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[v]=X;const lt=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,lt.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=lt.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=lt.intensity,G.shadowBias=lt.bias,G.shadowNormalBias=lt.normalBias,G.shadowRadius=lt.radius,G.shadowMapSize=lt.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=rt,_++}v++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(z).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const lt=L.shadow,G=e.get(L);G.shadowIntensity=lt.intensity,G.shadowBias=lt.bias,G.shadowNormalBias=lt.normalBias,G.shadowRadius=lt.radius,G.shadowMapSize=lt.mapSize,G.shadowCameraNear=lt.camera.near,G.shadowCameraFar=lt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=X,g++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==U||C.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=U,C.numLightProbes=P,n.version=Gm++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function rl(i){const t=new Xm(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rl(i),t.set(s,[a])):r>=o.length?(a=new rl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ym extends hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zm extends hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function Km(i,t,e){let n=new qa;const s=new vt,r=new vt,o=new De,a=new Ym({depthPacking:Cu}),c=new Zm,l={},u=e.maxTextureSize,h={[ai]:nn,[nn]:ai,[Je]:Je},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:$m,fragmentShader:jm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new J(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let p=this.type;this.render=function(A,P,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==Bn&&this.type===Bn,$=p===Bn&&this.type!==Bn;for(let rt=0,X=A.length;rt<X;rt++){const lt=A[rt],G=lt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const yt=G.getFrameExtents();if(s.multiply(yt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/yt.x),s.x=r.x*yt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/yt.y),s.y=r.y*yt.y,G.mapSize.y=r.y)),G.map===null||B===!0||$===!0){const Et=this.type!==Bn?{minFilter:pn,magFilter:pn}:{};G.map!==null&&G.map.dispose(),G.map=new Si(s.x,s.y,Et),G.map.texture.name=lt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const bt=G.getViewportCount();for(let Et=0;Et<bt;Et++){const Bt=G.getViewport(Et);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(o),G.updateMatrices(lt,Et),n=G.getFrustum(),_(P,C,G.camera,lt,this.type)}G.isPointLightShadow!==!0&&this.type===Bn&&E(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,w,L)};function E(A,P){const C=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Si(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,C,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,C,f,v,null)}function y(A,P,C,x){let w=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=C.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=w.uuid,B=P.uuid;let $=l[z];$===void 0&&($={},l[z]=$);let rt=$[B];rt===void 0&&(rt=w.clone(),$[B]=rt,P.addEventListener("dispose",U)),w=rt}if(w.visible=P.visible,w.wireframe=P.wireframe,x===Bn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:h[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=i.properties.get(w);z.light=C}return w}function _(A,P,C,x,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=t.update(A),$=A.material;if(Array.isArray($)){const rt=B.groups;for(let X=0,lt=rt.length;X<lt;X++){const G=rt[X],yt=$[G.materialIndex];if(yt&&yt.visible){const bt=y(A,yt,x,w);A.onBeforeShadow(i,A,P,C,B,bt,G),i.renderBufferDirect(C,null,B,bt,A,G),A.onAfterShadow(i,A,P,C,B,bt,G)}}}else if($.visible){const rt=y(A,$,x,w);A.onBeforeShadow(i,A,P,C,B,rt,null),i.renderBufferDirect(C,null,B,rt,A,null),A.onAfterShadow(i,A,P,C,B,rt,null)}}const z=A.children;for(let B=0,$=z.length;B<$;B++)_(z[B],P,C,x,w)}function U(A){A.target.removeEventListener("dispose",U);for(const C in l){const x=l[C],w=A.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}const Jm={[Wo]:Xo,[qo]:$o,[Yo]:jo,[is]:Zo,[Xo]:Wo,[$o]:qo,[jo]:Yo,[Zo]:is};function Qm(i,t){function e(){let I=!1;const St=new De;let j=null;const tt=new De(0,0,0,0);return{setMask:function(_t){j!==_t&&!I&&(i.colorMask(_t,_t,_t,_t),j=_t)},setLocked:function(_t){I=_t},setClear:function(_t,xt,Wt,fe,oe){oe===!0&&(_t*=fe,xt*=fe,Wt*=fe),St.set(_t,xt,Wt,fe),tt.equals(St)===!1&&(i.clearColor(_t,xt,Wt,fe),tt.copy(St))},reset:function(){I=!1,j=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,St=!1,j=null,tt=null,_t=null;return{setReversed:function(xt){if(St!==xt){const Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const fe=_t;_t=null,this.setClear(fe)}St=xt},getReversed:function(){return St},setTest:function(xt){xt?mt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(xt){j!==xt&&!I&&(i.depthMask(xt),j=xt)},setFunc:function(xt){if(St&&(xt=Jm[xt]),tt!==xt){switch(xt){case Wo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=xt}},setLocked:function(xt){I=xt},setClear:function(xt){_t!==xt&&(St&&(xt=1-xt),i.clearDepth(xt),_t=xt)},reset:function(){I=!1,j=null,tt=null,_t=null,St=!1}}}function s(){let I=!1,St=null,j=null,tt=null,_t=null,xt=null,Wt=null,fe=null,oe=null;return{setTest:function(W){I||(W?mt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(W){St!==W&&!I&&(i.stencilMask(W),St=W)},setFunc:function(W,wt,ne){(j!==W||tt!==wt||_t!==ne)&&(i.stencilFunc(W,wt,ne),j=W,tt=wt,_t=ne)},setOp:function(W,wt,ne){(xt!==W||Wt!==wt||fe!==ne)&&(i.stencilOp(W,wt,ne),xt=W,Wt=wt,fe=ne)},setLocked:function(W){I=W},setClear:function(W){oe!==W&&(i.clearStencil(W),oe=W)},reset:function(){I=!1,St=null,j=null,tt=null,_t=null,xt=null,Wt=null,fe=null,oe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,E=null,y=null,_=null,U=null,A=null,P=new le(0,0,0),C=0,x=!1,w=null,L=null,z=null,B=null,$=null;const rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,lt=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=lt>=1):G.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=lt>=2);let yt=null,bt={};const Et=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ie=new De().fromArray(Et),Q=new De().fromArray(Bt);function ft(I,St,j,tt){const _t=new Uint8Array(4),xt=i.createTexture();i.bindTexture(I,xt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<j;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(St+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return xt}const pt={};pt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(is),ht(!1),ot(uc),mt(i.CULL_FACE),R(ri);function mt(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Pt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function jt(I,St){return h[I]!==St?(i.bindFramebuffer(I,St),h[I]=St,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Zt(I,St){let j=f,tt=!1;if(I){j=d.get(St),j===void 0&&(j=[],d.set(St,j));const _t=I.textures;if(j.length!==_t.length||j[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Wt=_t.length;xt<Wt;xt++)j[xt]=i.COLOR_ATTACHMENT0+xt;j.length=_t.length,tt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,tt=!0);tt&&i.drawBuffers(j)}function Jt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const it={[_i]:i.FUNC_ADD,[eu]:i.FUNC_SUBTRACT,[nu]:i.FUNC_REVERSE_SUBTRACT};it[iu]=i.MIN,it[su]=i.MAX;const ut={[ru]:i.ZERO,[ou]:i.ONE,[au]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[du]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[pu]:i.CONSTANT_COLOR,[mu]:i.ONE_MINUS_CONSTANT_COLOR,[gu]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(I,St,j,tt,_t,xt,Wt,fe,oe,W){if(I===ri){v===!0&&(Pt(i.BLEND),v=!1);return}if(v===!1&&(mt(i.BLEND),v=!0),I!==tu){if(I!==m||W!==x){if((p!==_i||_!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,_=_i),W)switch(I){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,y=null,U=null,A=null,P.set(0,0,0),C=0,m=I,x=W}return}_t=_t||St,xt=xt||j,Wt=Wt||tt,(St!==p||_t!==_)&&(i.blendEquationSeparate(it[St],it[_t]),p=St,_=_t),(j!==E||tt!==y||xt!==U||Wt!==A)&&(i.blendFuncSeparate(ut[j],ut[tt],ut[xt],ut[Wt]),E=j,y=tt,U=xt,A=Wt),(fe.equals(P)===!1||oe!==C)&&(i.blendColor(fe.r,fe.g,fe.b,oe),P.copy(fe),C=oe),m=I,x=!1}function It(I,St){I.side===Je?Pt(i.CULL_FACE):mt(i.CULL_FACE);let j=I.side===nn;St&&(j=!j),ht(j),I.blending===ji&&I.transparent===!1?R(ri):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const tt=I.stencilWrite;a.setTest(tt),tt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Yt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function ot(I){I!==Jh?(mt(i.CULL_FACE),I!==L&&(I===uc?i.cullFace(i.BACK):I===Qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=I}function gt(I){I!==z&&(X&&i.lineWidth(I),z=I)}function Yt(I,St,j){I?(mt(i.POLYGON_OFFSET_FILL),(B!==St||$!==j)&&(i.polygonOffset(St,j),B=St,$=j)):Pt(i.POLYGON_OFFSET_FILL)}function Dt(I){I?mt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+rt-1),yt!==I&&(i.activeTexture(I),yt=I)}function M(I,St,j){j===void 0&&(yt===null?j=i.TEXTURE0+rt-1:j=yt);let tt=bt[j];tt===void 0&&(tt={type:void 0,texture:void 0},bt[j]=tt),(tt.type!==I||tt.texture!==St)&&(yt!==j&&(i.activeTexture(j),yt=j),i.bindTexture(I,St||pt[I]),tt.type=I,tt.texture=St)}function H(){const I=bt[yt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(I){ie.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function Nt(I){Q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function Qt(I,St){let j=l.get(St);j===void 0&&(j=new WeakMap,l.set(St,j));let tt=j.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(St,I.name),j.set(I,tt))}function Ht(I,St){const tt=l.get(St).get(I);c.get(St)!==tt&&(i.uniformBlockBinding(St,tt,I.__bindingPointIndex),c.set(St,tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},yt=null,bt={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,E=null,y=null,_=null,U=null,A=null,P=new le(0,0,0),C=0,x=!1,w=null,L=null,z=null,B=null,$=null,ie.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Pt,bindFramebuffer:jt,drawBuffers:Zt,useProgram:Jt,setBlending:R,setMaterial:It,setFlipSided:ht,setCullFace:ot,setLineWidth:gt,setPolygonOffset:Yt,setScissorTest:Dt,activeTexture:T,bindTexture:M,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:st,texImage2D:At,texImage3D:Gt,updateUBOMapping:Qt,uniformBlockBinding:Ht,texStorage2D:Kt,texStorage3D:dt,texSubImage2D:et,texSubImage3D:Tt,compressedTexSubImage2D:at,compressedTexSubImage3D:Ut,scissor:$t,viewport:Nt,reset:ee}}function ol(i,t,e,n){const s=tg(n);switch(e){case nh:return i*t;case sh:return i*t;case rh:return i*t*2;case Ba:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case oh:return i*t*2/s.components*s.byteLength;case Va:return i*t*2/s.components*s.byteLength;case ih:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Ga:return i*t*4/s.components*s.byteLength;case Ar:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:case ia:return Math.max(i,16)*Math.max(t,8)/4;case ta:case na:return Math.max(i,8)*Math.max(t,8)/2;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case wa:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ah:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ba:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tg(i){switch(i){case Zn:case Ql:return{byteLength:1,components:1};case Bs:case th:case Xs:return{byteLength:2,components:1};case ka:case za:return{byteLength:2,components:4};case Mi:case Fa:case Ln:return{byteLength:4,components:1};case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function eg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Hs("canvas")}function v(T,M,H){let Z=1;const st=Dt(T);if((st.width>H||st.height>H)&&(Z=H/Math.max(st.width,st.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const et=Math.floor(Z*st.width),Tt=Math.floor(Z*st.height);h===void 0&&(h=g(et,Tt));const at=M?g(et,Tt):h;return at.width=et,at.height=Tt,at.getContext("2d").drawImage(T,0,0,et,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+Tt+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,M,H,Z,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=M;if(M===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),M===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),M===i.RGBA){const Tt=st?Gr:Ee.getTransfer(Z);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=Tt===Le?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(T,M){let H;return T?M===null||M===Mi||M===os?H=i.DEPTH24_STENCIL8:M===Ln?H=i.DEPTH32F_STENCIL8:M===Bs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===os?H=i.DEPTH_COMPONENT24:M===Ln?H=i.DEPTH_COMPONENT32F:M===Bs&&(H=i.DEPTH_COMPONENT16),H}function U(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==pn&&T.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&u.delete(M)}function P(T){const M=T.target;M.removeEventListener("dispose",P),w(M)}function C(T){const M=n.get(T);if(M.__webglInit===void 0)return;const H=T.source,Z=d.get(H);if(Z){const st=Z[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&x(T),Object.keys(Z).length===0&&d.delete(H)}n.remove(T)}function x(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const H=T.source,Z=d.get(H);delete Z[M.__cacheKey],o.memory.textures--}function w(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let st=0;st<M.__webglFramebuffer[Z].length;st++)i.deleteFramebuffer(M.__webglFramebuffer[Z][st]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=T.textures;for(let Z=0,st=H.length;Z<st;Z++){const et=n.get(H[Z]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(T)}let L=0;function z(){L=0}function B(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function $(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function rt(T,M){const H=n.get(T);if(T.isVideoTexture&&gt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,T,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function X(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){Q(H,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function lt(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){Q(H,T,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function G(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ft(H,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const yt={[Ur]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},bt={[pn]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},Et={[Pu]:i.NEVER,[Ou]:i.ALWAYS,[Lu]:i.LESS,[lh]:i.LEQUAL,[Du]:i.EQUAL,[Nu]:i.GEQUAL,[Iu]:i.GREATER,[Uu]:i.NOTEQUAL};function Bt(T,M){if(M.type===Ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===no||M.magFilter===Ys||M.magFilter===wi||M.minFilter===Pn||M.minFilter===no||M.minFilter===Ys||M.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,yt[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,yt[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,yt[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,bt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==Ys&&M.minFilter!==wi||M.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ie(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const Z=M.source;let st=d.get(Z);st===void 0&&(st={},d.set(Z,st));const et=$(M);if(et!==T.__cacheKey){st[et]===void 0&&(st[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),st[et].usedTimes++;const Tt=st[T.__cacheKey];Tt!==void 0&&(st[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&x(M)),T.__cacheKey=et,T.__webglTexture=st[et].texture}return H}function Q(T,M,H){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const st=ie(T,M),et=M.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+H);const Tt=n.get(et);if(et.version!==Tt.__version||st===!0){e.activeTexture(i.TEXTURE0+H);const at=Ee.getPrimaries(Ee.workingColorSpace),Ut=M.colorSpace===si?null:Ee.getPrimaries(M.colorSpace),Kt=M.colorSpace===si||at===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let dt=v(M.image,!1,s.maxTextureSize);dt=Yt(M,dt);const At=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let $t=y(M.internalFormat,At,Gt,M.colorSpace,M.isVideoTexture);Bt(Z,M);let Nt;const Qt=M.mipmaps,Ht=M.isVideoTexture!==!0,ee=Tt.__version===void 0||st===!0,I=et.dataReady,St=U(M,dt);if(M.isDepthTexture)$t=_(M.format===as,M.type),ee&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,$t,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,$t,dt.width,dt.height,0,At,Gt,null));else if(M.isDataTexture)if(Qt.length>0){Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,St,$t,Qt[0].width,Qt[0].height);for(let j=0,tt=Qt.length;j<tt;j++)Nt=Qt[j],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Nt.width,Nt.height,At,Gt,Nt.data):e.texImage2D(i.TEXTURE_2D,j,$t,Nt.width,Nt.height,0,At,Gt,Nt.data);M.generateMipmaps=!1}else Ht?(ee&&e.texStorage2D(i.TEXTURE_2D,St,$t,dt.width,dt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,At,Gt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,dt.width,dt.height,0,At,Gt,dt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,$t,Qt[0].width,Qt[0].height,dt.depth);for(let j=0,tt=Qt.length;j<tt;j++)if(Nt=Qt[j],M.format!==An)if(At!==null)if(Ht){if(I)if(M.layerUpdates.size>0){const _t=ol(Nt.width,Nt.height,M.format,M.type);for(const xt of M.layerUpdates){const Wt=Nt.data.subarray(xt*_t/Nt.data.BYTES_PER_ELEMENT,(xt+1)*_t/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,xt,Nt.width,Nt.height,1,At,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Nt.width,Nt.height,dt.depth,At,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,$t,Nt.width,Nt.height,dt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Nt.width,Nt.height,dt.depth,At,Gt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,$t,Nt.width,Nt.height,dt.depth,0,At,Gt,Nt.data)}else{Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,St,$t,Qt[0].width,Qt[0].height);for(let j=0,tt=Qt.length;j<tt;j++)Nt=Qt[j],M.format!==An?At!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Nt.width,Nt.height,At,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,$t,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?I&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Nt.width,Nt.height,At,Gt,Nt.data):e.texImage2D(i.TEXTURE_2D,j,$t,Nt.width,Nt.height,0,At,Gt,Nt.data)}else if(M.isDataArrayTexture)if(Ht){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,$t,dt.width,dt.height,dt.depth),I)if(M.layerUpdates.size>0){const j=ol(dt.width,dt.height,M.format,M.type);for(const tt of M.layerUpdates){const _t=dt.data.subarray(tt*j/dt.data.BYTES_PER_ELEMENT,(tt+1)*j/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,dt.width,dt.height,1,At,Gt,_t)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Gt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,dt.width,dt.height,dt.depth,0,At,Gt,dt.data);else if(M.isData3DTexture)Ht?(ee&&e.texStorage3D(i.TEXTURE_3D,St,$t,dt.width,dt.height,dt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Gt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,dt.width,dt.height,dt.depth,0,At,Gt,dt.data);else if(M.isFramebufferTexture){if(ee)if(Ht)e.texStorage2D(i.TEXTURE_2D,St,$t,dt.width,dt.height);else{let j=dt.width,tt=dt.height;for(let _t=0;_t<St;_t++)e.texImage2D(i.TEXTURE_2D,_t,$t,j,tt,0,At,Gt,null),j>>=1,tt>>=1}}else if(Qt.length>0){if(Ht&&ee){const j=Dt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,St,$t,j.width,j.height)}for(let j=0,tt=Qt.length;j<tt;j++)Nt=Qt[j],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,At,Gt,Nt):e.texImage2D(i.TEXTURE_2D,j,$t,At,Gt,Nt);M.generateMipmaps=!1}else if(Ht){if(ee){const j=Dt(dt);e.texStorage2D(i.TEXTURE_2D,St,$t,j.width,j.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,dt)}else e.texImage2D(i.TEXTURE_2D,0,$t,At,Gt,dt);m(M)&&p(Z),Tt.__version=et.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ft(T,M,H){if(M.image.length!==6)return;const Z=ie(T,M),st=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);const et=n.get(st);if(st.version!==et.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const Tt=Ee.getPrimaries(Ee.workingColorSpace),at=M.colorSpace===si?null:Ee.getPrimaries(M.colorSpace),Ut=M.colorSpace===si||Tt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,dt=M.image[0]&&M.image[0].isDataTexture,At=[];for(let tt=0;tt<6;tt++)!Kt&&!dt?At[tt]=v(M.image[tt],!0,s.maxCubemapSize):At[tt]=dt?M.image[tt].image:M.image[tt],At[tt]=Yt(M,At[tt]);const Gt=At[0],$t=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),Qt=y(M.internalFormat,$t,Nt,M.colorSpace),Ht=M.isVideoTexture!==!0,ee=et.__version===void 0||Z===!0,I=st.dataReady;let St=U(M,Gt);Bt(i.TEXTURE_CUBE_MAP,M);let j;if(Kt){Ht&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){j=At[tt].mipmaps;for(let _t=0;_t<j.length;_t++){const xt=j[_t];M.format!==An?$t!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,xt.width,xt.height,$t,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Qt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,xt.width,xt.height,$t,Nt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,Qt,xt.width,xt.height,0,$t,Nt,xt.data)}}}else{if(j=M.mipmaps,Ht&&ee){j.length>0&&St++;const tt=Dt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(dt){Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,At[tt].width,At[tt].height,$t,Nt,At[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,At[tt].width,At[tt].height,0,$t,Nt,At[tt].data);for(let _t=0;_t<j.length;_t++){const Wt=j[_t].image[tt].image;Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Wt.width,Wt.height,$t,Nt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Qt,Wt.width,Wt.height,0,$t,Nt,Wt.data)}}else{Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,$t,Nt,At[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,$t,Nt,At[tt]);for(let _t=0;_t<j.length;_t++){const xt=j[_t];Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,$t,Nt,xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,Qt,$t,Nt,xt.image[tt])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),et.__version=st.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function pt(T,M,H,Z,st,et){const Tt=r.convert(H.format,H.colorSpace),at=r.convert(H.type),Ut=y(H.internalFormat,Tt,at,H.colorSpace),Kt=n.get(M),dt=n.get(H);if(dt.__renderTarget=M,!Kt.__hasExternalTextures){const At=Math.max(1,M.width>>et),Gt=Math.max(1,M.height>>et);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,et,Ut,At,Gt,M.depth,0,Tt,at,null):e.texImage2D(st,et,Ut,At,Gt,0,Tt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ot(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,st,dt.__webglTexture,0,ht(M)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,st,dt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(T,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const Z=M.depthTexture,st=Z&&Z.isDepthTexture?Z.type:null,et=_(M.stencilBuffer,st),Tt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=ht(M);ot(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,et,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,T)}else{const Z=M.textures;for(let st=0;st<Z.length;st++){const et=Z[st],Tt=r.convert(et.format,et.colorSpace),at=r.convert(et.type),Ut=y(et.internalFormat,Tt,at,et.colorSpace),Kt=ht(M);H&&ot(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ut,M.width,M.height):ot(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),rt(M.depthTexture,0);const st=Z.__webglTexture,et=ht(M);if(M.depthTexture.format===Ki)ot(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(M.depthTexture.format===as)ot(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function jt(T){const M=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",st)};Z.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=Z}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),mt(M.__webglDepthbuffer[Z],T,!1);else{const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),mt(M.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(T,M,H){const Z=n.get(T);M!==void 0&&pt(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&jt(T)}function Jt(T){const M=T.texture,H=n.get(T),Z=n.get(M);T.addEventListener("dispose",P);const st=T.textures,et=T.isWebGLCubeRenderTarget===!0,Tt=st.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),et){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let Ut=0;Ut<M.mipmaps.length;Ut++)H.__webglFramebuffer[at][Ut]=i.createFramebuffer()}else H.__webglFramebuffer[at]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)H.__webglFramebuffer[at]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let at=0,Ut=st.length;at<Ut;at++){const Kt=n.get(st[at]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ot(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<st.length;at++){const Ut=st[at];H.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Kt=r.convert(Ut.format,Ut.colorSpace),dt=r.convert(Ut.type),At=y(Ut.internalFormat,Kt,dt,Ut.colorSpace,T.isXRRenderTarget===!0),Gt=ht(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,H.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)pt(H.__webglFramebuffer[at][Ut],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut);else pt(H.__webglFramebuffer[at],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let at=0,Ut=st.length;at<Ut;at++){const Kt=st[at],dt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Bt(i.TEXTURE_2D,Kt),pt(H.__webglFramebuffer,T,Kt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Bt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)pt(H.__webglFramebuffer[Ut],T,M,i.COLOR_ATTACHMENT0,at,Ut);else pt(H.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,at,0);m(M)&&p(at),e.unbindTexture()}T.depthBuffer&&jt(T)}function it(T){const M=T.textures;for(let H=0,Z=M.length;H<Z;H++){const st=M[H];if(m(st)){const et=E(T),Tt=n.get(st).__webglTexture;e.bindTexture(et,Tt),p(et),e.unbindTexture()}}}const ut=[],R=[];function It(T){if(T.samples>0){if(ot(T)===!1){const M=T.textures,H=T.width,Z=T.height;let st=i.COLOR_BUFFER_BIT;const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(T),at=M.length>1;if(at)for(let Ut=0;Ut<M.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ut=0;Ut<M.length;Ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const Kt=n.get(M[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,st,i.NEAREST),c===!0&&(ut.length=0,R.length=0,ut.push(i.COLOR_ATTACHMENT0+Ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ut.push(et),R.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Ut=0;Ut<M.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const Kt=n.get(M[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ht(T){return Math.min(s.maxSamples,T.samples)}function ot(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Yt(T,M){const H=T.colorSpace,Z=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==hs&&H!==si&&(Ee.getTransfer(H)===Le?(Z!==An||st!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Dt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=rt,this.setTexture2DArray=X,this.setTexture3D=lt,this.setTextureCube=G,this.rebindTextures=Zt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ot}function ng(i,t){function e(n,s=si){let r;const o=Ee.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.BYTE;if(n===th)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===An)return i.RGBA;if(n===sh)return i.LUMINANCE;if(n===rh)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===oh)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===Ar||n===Cr||n===Rr||n===Pr)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sa||n===ra)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ga)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ya)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===wa||n===Ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===Sa||n===ba||n===Ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ig extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zt extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:rg,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cg extends us{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new ag,m=e.getContextAttributes();let p=null,E=null;const y=[],_=[],U=new vt;let A=null;const P=new an;P.viewport=new De;const C=new an;C.viewport=new De;const x=[P,C],w=new ig;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=y[Q];return ft===void 0&&(ft=new Po,y[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=y[Q];return ft===void 0&&(ft=new Po,y[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=y[Q];return ft===void 0&&(ft=new Po,y[Q]=ft),ft.getHandSpace()};function B(Q){const ft=_.indexOf(Q.inputSource);if(ft===-1)return;const pt=y[ft];pt!==void 0&&(pt.update(Q.inputSource,Q.frame,l||o),pt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",rt);for(let Q=0;Q<y.length;Q++){const ft=_[Q];ft!==null&&(_[Q]=null,y[Q].disconnect(ft))}L=null,z=null,v.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,E=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Si(f.framebufferWidth,f.framebufferHeight,{format:An,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,pt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?as:Ki,pt=m.stencil?os:Mi);const Pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Si(d.textureWidth,d.textureHeight,{format:An,type:Zn,depthTexture:new wh(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function rt(Q){for(let ft=0;ft<Q.removed.length;ft++){const pt=Q.removed[ft],mt=_.indexOf(pt);mt>=0&&(_[mt]=null,y[mt].disconnect(pt))}for(let ft=0;ft<Q.added.length;ft++){const pt=Q.added[ft];let mt=_.indexOf(pt);if(mt===-1){for(let jt=0;jt<y.length;jt++)if(jt>=_.length){_.push(pt),mt=jt;break}else if(_[jt]===null){_[jt]=pt,mt=jt;break}if(mt===-1)break}const Pt=y[mt];Pt&&Pt.connect(pt)}}const X=new S,lt=new S;function G(Q,ft,pt){X.setFromMatrixPosition(ft.matrixWorld),lt.setFromMatrixPosition(pt.matrixWorld);const mt=X.distanceTo(lt),Pt=ft.projectionMatrix.elements,jt=pt.projectionMatrix.elements,Zt=Pt[14]/(Pt[10]-1),Jt=Pt[14]/(Pt[10]+1),it=(Pt[9]+1)/Pt[5],ut=(Pt[9]-1)/Pt[5],R=(Pt[8]-1)/Pt[0],It=(jt[8]+1)/jt[0],ht=Zt*R,ot=Zt*It,gt=mt/(-R+It),Yt=gt*-R;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Yt),Q.translateZ(gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pt[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Dt=Zt+gt,T=Jt+gt,M=ht-Yt,H=ot+(mt-Yt),Z=it*Jt/T*Dt,st=ut*Jt/T*Dt;Q.projectionMatrix.makePerspective(M,H,Z,st,Dt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ft=Q.near,pt=Q.far;v.texture!==null&&(v.depthNear>0&&(ft=v.depthNear),v.depthFar>0&&(pt=v.depthFar)),w.near=C.near=P.near=ft,w.far=C.far=P.far=pt,(L!==w.near||z!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,z=w.far),P.layers.mask=Q.layers.mask|2,C.layers.mask=Q.layers.mask|4,w.layers.mask=P.layers.mask|C.layers.mask;const mt=Q.parent,Pt=w.cameras;yt(w,mt);for(let jt=0;jt<Pt.length;jt++)yt(Pt[jt],mt);Pt.length===2?G(w,P,C):w.projectionMatrix.copy(P.projectionMatrix),bt(Q,w,mt)};function bt(Q,ft,pt){pt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(pt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let Et=null;function Bt(Q,ft){if(u=ft.getViewerPose(l||o),g=ft,u!==null){const pt=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let mt=!1;pt.length!==w.cameras.length&&(w.cameras.length=0,mt=!0);for(let jt=0;jt<pt.length;jt++){const Zt=pt[jt];let Jt=null;if(f!==null)Jt=f.getViewport(Zt);else{const ut=h.getViewSubImage(d,Zt);Jt=ut.viewport,jt===0&&(t.setRenderTargetTextures(E,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(E))}let it=x[jt];it===void 0&&(it=new an,it.layers.enable(jt),it.viewport=new De,x[jt]=it),it.matrix.fromArray(Zt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Zt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),jt===0&&(w.matrix.copy(it.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),mt===!0&&w.cameras.push(it)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const jt=h.getDepthInformation(pt[0]);jt&&jt.isValid&&jt.texture&&v.init(t,jt,s.renderState)}}for(let pt=0;pt<y.length;pt++){const mt=_[pt],Pt=y[pt];mt!==null&&Pt!==void 0&&Pt.update(mt,ft,l||o)}Et&&Et(Q,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}const ie=new xh;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(Q){Et=Q},this.dispose=function(){}}}const gi=new xn,lg=new Ae;function hg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),y=E.envMap,_=E.envMapRotation;y&&(m.envMap.value=y,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ug(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const _=y.program;n.uniformBlockBinding(E,_)}function l(E,y){let _=s[E.id];_===void 0&&(g(E),_=u(E),s[E.id]=_,E.addEventListener("dispose",m));const U=y.program;n.updateUBOMapping(E,U);const A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function u(E){const y=h();E.__bindingPointIndex=y;const _=i.createBuffer(),U=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],_=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,P=_.length;A<P;A++){const C=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,w=C.length;x<w;x++){const L=C[x];if(f(L,A,x,U)===!0){const z=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let rt=0;rt<B.length;rt++){const X=B[rt],lt=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,z+$,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,$),$+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,_,U){const A=E.value,P=y+"_"+_;if(U[P]===void 0)return typeof A=="number"||typeof A=="boolean"?U[P]=A:U[P]=A.clone(),!0;{const C=U[P];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return U[P]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(E){const y=E.uniforms;let _=0;const U=16;for(let P=0,C=y.length;P<C;P++){const x=Array.isArray(y[P])?y[P]:[y[P]];for(let w=0,L=x.length;w<L;w++){const z=x[w],B=Array.isArray(z.value)?z.value:[z.value];for(let $=0,rt=B.length;$<rt;$++){const X=B[$],lt=v(X),G=_%U,yt=G%lt.boundary,bt=G+yt;_+=yt,bt!==0&&U-bt<lt.storage&&(_+=U-bt),z.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=lt.storage}}}const A=_%U;return A>0&&(_+=U-A),E.__size=_,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class dg{constructor(t={}){const{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=oi,this.toneMappingExposure=1;const _=this;let U=!1,A=0,P=0,C=null,x=-1,w=null;const L=new De,z=new De;let B=null;const $=new le(0);let rt=0,X=e.width,lt=e.height,G=1,yt=null,bt=null;const Et=new De(0,0,X,lt),Bt=new De(0,0,X,lt);let ie=!1;const Q=new qa;let ft=!1,pt=!1;const mt=new Ae,Pt=new Ae,jt=new S,Zt=new De,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ut(){return C===null?G:1}let R=n;function It(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oa}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",xt,!1),R===null){const N="webgl2";if(R=It(N,b),R===null)throw It(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,ot,gt,Yt,Dt,T,M,H,Z,st,et,Tt,at,Ut,Kt,dt,At,Gt,$t,Nt,Qt,Ht,ee,I;function St(){ht=new v0(R),ht.init(),Ht=new ng(R,ht),ot=new u0(R,ht,t,Ht),gt=new Qm(R,ht),ot.reverseDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),Yt=new y0(R),Dt=new km,T=new eg(R,ht,gt,Dt,ot,Ht,Yt),M=new f0(_),H=new g0(_),Z=new Td(R),ee=new l0(R,Z),st=new _0(R,Z,Yt,ee),et=new M0(R,st,Z,Yt),$t=new w0(R,ot,T),dt=new d0(Dt),Tt=new Fm(_,M,H,ht,ot,ee,dt),at=new hg(_,Dt),Ut=new Bm,Kt=new qm(ht),Gt=new c0(_,M,H,gt,et,f,c),At=new Km(_,et,ot),I=new ug(R,Yt,ot,gt),Nt=new h0(R,ht,Yt),Qt=new x0(R,ht,Yt),Yt.programs=Tt.programs,_.capabilities=ot,_.extensions=ht,_.properties=Dt,_.renderLists=Ut,_.shadowMap=At,_.state=gt,_.info=Yt}St();const j=new cg(_,R);this.xr=j,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(X,lt,!1))},this.getSize=function(b){return b.set(X,lt)},this.setSize=function(b,N,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,lt=N,e.width=Math.floor(b*G),e.height=Math.floor(N*G),Y===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*G,lt*G).floor()},this.setDrawingBufferSize=function(b,N,Y){X=b,lt=N,G=Y,e.width=Math.floor(b*Y),e.height=Math.floor(N*Y),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,N,Y,q){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,N,Y,q),gt.viewport(L.copy(Et).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,N,Y,q){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,N,Y,q),gt.scissor(z.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){gt.setScissorTest(ie=b)},this.setOpaqueSort=function(b){yt=b},this.setTransparentSort=function(b){bt=b},this.getClearColor=function(b){return b.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(b=!0,N=!0,Y=!0){let q=0;if(b){let k=!1;if(C!==null){const D=C.texture.format;k=D===Ga||D===Va||D===Ha}if(k){const D=C.texture.type,F=D===Zn||D===Mi||D===Bs||D===os||D===ka||D===za,nt=Gt.getClearColor(),Ct=Gt.getClearAlpha(),Vt=nt.r,qt=nt.g,Ot=nt.b;F?(g[0]=Vt,g[1]=qt,g[2]=Ot,g[3]=Ct,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Vt,v[1]=qt,v[2]=Ot,v[3]=Ct,R.clearBufferiv(R.COLOR,0,v))}else q|=R.COLOR_BUFFER_BIT}N&&(q|=R.DEPTH_BUFFER_BIT),Y&&(q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Ut.dispose(),Kt.dispose(),Dt.dispose(),M.dispose(),H.dispose(),et.dispose(),ee.dispose(),I.dispose(),Tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",xe),j.removeEventListener("sessionend",we),Re.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const b=Yt.autoReset,N=At.enabled,Y=At.autoUpdate,q=At.needsUpdate,k=At.type;St(),Yt.autoReset=b,At.enabled=N,At.autoUpdate=Y,At.needsUpdate=q,At.type=k}function xt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Wt(b){const N=b.target;N.removeEventListener("dispose",Wt),fe(N)}function fe(b){oe(b),Dt.remove(b)}function oe(b){const N=Dt.get(b).programs;N!==void 0&&(N.forEach(function(Y){Tt.releaseProgram(Y)}),b.isShaderMaterial&&Tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,Y,q,k,D){N===null&&(N=Jt);const F=k.isMesh&&k.matrixWorld.determinant()<0,nt=ge(b,N,Y,q,k);gt.setMaterial(q,F);let Ct=Y.index,Vt=1;if(q.wireframe===!0){if(Ct=st.getWireframeAttribute(Y),Ct===void 0)return;Vt=2}const qt=Y.drawRange,Ot=Y.attributes.position;let ce=qt.start*Vt,ae=(qt.start+qt.count)*Vt;D!==null&&(ce=Math.max(ce,D.start*Vt),ae=Math.min(ae,(D.start+D.count)*Vt)),Ct!==null?(ce=Math.max(ce,0),ae=Math.min(ae,Ct.count)):Ot!=null&&(ce=Math.max(ce,0),ae=Math.min(ae,Ot.count));const pe=ae-ce;if(pe<0||pe===1/0)return;ee.setup(k,q,nt,Y,Ct);let ye,ue=Nt;if(Ct!==null&&(ye=Z.get(Ct),ue=Qt,ue.setIndex(ye)),k.isMesh)q.wireframe===!0?(gt.setLineWidth(q.wireframeLinewidth*ut()),ue.setMode(R.LINES)):ue.setMode(R.TRIANGLES);else if(k.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),gt.setLineWidth(Xt*ut()),k.isLineSegments?ue.setMode(R.LINES):k.isLineLoop?ue.setMode(R.LINE_LOOP):ue.setMode(R.LINE_STRIP)}else k.isPoints?ue.setMode(R.POINTS):k.isSprite&&ue.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ue.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Xt=k._multiDrawStarts,je=k._multiDrawCounts,Te=k._multiDrawCount,yn=Ct?Z.get(Ct).bytesPerElement:1,Ai=Dt.get(q).currentProgram.getUniforms();for(let un=0;un<Te;un++)Ai.setValue(R,"_gl_DrawID",un),ue.render(Xt[un]/yn,je[un])}else if(k.isInstancedMesh)ue.renderInstances(ce,pe,k.count);else if(Y.isInstancedBufferGeometry){const Xt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,je=Math.min(Y.instanceCount,Xt);ue.renderInstances(ce,pe,je)}else ue.render(ce,pe)};function W(b,N,Y){b.transparent===!0&&b.side===Je&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,ct(b,N,Y),b.side=ai,b.needsUpdate=!0,ct(b,N,Y),b.side=Je):ct(b,N,Y)}this.compile=function(b,N,Y=null){Y===null&&(Y=b),p=Kt.get(Y),p.init(N),y.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==Y&&b.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const D=k.material;if(D)if(Array.isArray(D))for(let F=0;F<D.length;F++){const nt=D[F];W(nt,Y,k),q.add(nt)}else W(D,Y,k),q.add(D)}),y.pop(),p=null,q},this.compileAsync=function(b,N,Y=null){const q=this.compile(b,N,Y);return new Promise(k=>{function D(){if(q.forEach(function(F){Dt.get(F).currentProgram.isReady()&&q.delete(F)}),q.size===0){k(b);return}setTimeout(D,10)}ht.get("KHR_parallel_shader_compile")!==null?D():setTimeout(D,10)})};let wt=null;function ne(b){wt&&wt(b)}function xe(){Re.stop()}function we(){Re.start()}const Re=new xh;Re.setAnimationLoop(ne),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(b){wt=b,j.setAnimationLoop(b),b===null?Re.stop():Re.start()},j.addEventListener("sessionstart",xe),j.addEventListener("sessionend",we),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,N,C),p=Kt.get(b,y.length),p.init(N),y.push(p),Pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(Pt),pt=this.localClippingEnabled,ft=dt.init(this.clippingPlanes,pt),m=Ut.get(b,E.length),m.init(),E.push(m),j.enabled===!0&&j.isPresenting===!0){const D=_.xr.getDepthSensingMesh();D!==null&&Mt(D,N,-1/0,_.sortObjects)}Mt(b,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(yt,bt),it=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,it&&Gt.addToRenderList(m,b),this.info.render.frame++,ft===!0&&dt.beginShadows();const Y=p.state.shadowsArray;At.render(Y,b,N),ft===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(p.setupLights(),N.isArrayCamera){const D=N.cameras;if(k.length>0)for(let F=0,nt=D.length;F<nt;F++){const Ct=D[F];Se(q,k,b,Ct)}it&&Gt.render(b);for(let F=0,nt=D.length;F<nt;F++){const Ct=D[F];re(m,b,Ct,Ct.viewport)}}else k.length>0&&Se(q,k,b,N),it&&Gt.render(b),re(m,b,N);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,N),ee.resetDefaultState(),x=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],ft===!0&&dt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Mt(b,N,Y,q){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){q&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pt);const F=et.update(b),nt=b.material;nt.visible&&m.push(b,F,nt,Y,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const F=et.update(b),nt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(F.boundingSphere===null&&F.computeBoundingSphere(),Zt.copy(F.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(Pt)),Array.isArray(nt)){const Ct=F.groups;for(let Vt=0,qt=Ct.length;Vt<qt;Vt++){const Ot=Ct[Vt],ce=nt[Ot.materialIndex];ce&&ce.visible&&m.push(b,F,ce,Y,Zt.z,Ot)}}else nt.visible&&m.push(b,F,nt,Y,Zt.z,null)}}const D=b.children;for(let F=0,nt=D.length;F<nt;F++)Mt(D[F],N,Y,q)}function re(b,N,Y,q){const k=b.opaque,D=b.transmissive,F=b.transparent;p.setupLightsView(Y),ft===!0&&dt.setGlobalState(_.clippingPlanes,Y),q&&gt.viewport(L.copy(q)),k.length>0&&me(k,N,Y),D.length>0&&me(D,N,Y),F.length>0&&me(F,N,Y),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Se(b,N,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Si(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Xs:Zn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const D=p.state.transmissionRenderTarget[q.id],F=q.viewport||L;D.setSize(F.z,F.w);const nt=_.getRenderTarget();_.setRenderTarget(D),_.getClearColor($),rt=_.getClearAlpha(),rt<1&&_.setClearColor(16777215,.5),_.clear(),it&&Gt.render(Y);const Ct=_.toneMapping;_.toneMapping=oi;const Vt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ft===!0&&dt.setGlobalState(_.clippingPlanes,q),me(b,Y,q),T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D),ht.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ot=0,ce=N.length;Ot<ce;Ot++){const ae=N[Ot],pe=ae.object,ye=ae.geometry,ue=ae.material,Xt=ae.group;if(ue.side===Je&&pe.layers.test(q.layers)){const je=ue.side;ue.side=nn,ue.needsUpdate=!0,Oe(pe,Y,q,ye,ue,Xt),ue.side=je,ue.needsUpdate=!0,qt=!0}}qt===!0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D))}_.setRenderTarget(nt),_.setClearColor($,rt),Vt!==void 0&&(q.viewport=Vt),_.toneMapping=Ct}function me(b,N,Y){const q=N.isScene===!0?N.overrideMaterial:null;for(let k=0,D=b.length;k<D;k++){const F=b[k],nt=F.object,Ct=F.geometry,Vt=q===null?F.material:q,qt=F.group;nt.layers.test(Y.layers)&&Oe(nt,N,Y,Ct,Vt,qt)}}function Oe(b,N,Y,q,k,D){b.onBeforeRender(_,N,Y,q,k,D),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(_,N,Y,q,b,D),k.transparent===!0&&k.side===Je&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,_.renderBufferDirect(Y,N,q,k,b,D),k.side=ai,k.needsUpdate=!0,_.renderBufferDirect(Y,N,q,k,b,D),k.side=Je):_.renderBufferDirect(Y,N,q,k,b,D),b.onAfterRender(_,N,Y,q,k,D)}function ct(b,N,Y){N.isScene!==!0&&(N=Jt);const q=Dt.get(b),k=p.state.lights,D=p.state.shadowsArray,F=k.state.version,nt=Tt.getParameters(b,k.state,D,N,Y),Ct=Tt.getProgramCacheKey(nt);let Vt=q.programs;q.environment=b.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(b.isMeshStandardMaterial?H:M).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",Wt),Vt=new Map,q.programs=Vt);let qt=Vt.get(Ct);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===F)return kt(b,nt),qt}else nt.uniforms=Tt.getUniforms(b),b.onBeforeCompile(nt,_),qt=Tt.acquireProgram(nt,Ct),Vt.set(Ct,qt),q.uniforms=nt.uniforms;const Ot=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=dt.uniform),kt(b,nt),q.needsLights=hn(b),q.lightsStateVersion=F,q.needsLights&&(Ot.ambientLightColor.value=k.state.ambient,Ot.lightProbe.value=k.state.probe,Ot.directionalLights.value=k.state.directional,Ot.directionalLightShadows.value=k.state.directionalShadow,Ot.spotLights.value=k.state.spot,Ot.spotLightShadows.value=k.state.spotShadow,Ot.rectAreaLights.value=k.state.rectArea,Ot.ltc_1.value=k.state.rectAreaLTC1,Ot.ltc_2.value=k.state.rectAreaLTC2,Ot.pointLights.value=k.state.point,Ot.pointLightShadows.value=k.state.pointShadow,Ot.hemisphereLights.value=k.state.hemi,Ot.directionalShadowMap.value=k.state.directionalShadowMap,Ot.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ot.spotShadowMap.value=k.state.spotShadowMap,Ot.spotLightMatrix.value=k.state.spotLightMatrix,Ot.spotLightMap.value=k.state.spotLightMap,Ot.pointShadowMap.value=k.state.pointShadowMap,Ot.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function te(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Dr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function kt(b,N){const Y=Dt.get(b);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function ge(b,N,Y,q,k){N.isScene!==!0&&(N=Jt),T.resetTextureUnits();const D=N.fog,F=q.isMeshStandardMaterial?N.environment:null,nt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hs,Ct=(q.isMeshStandardMaterial?H:M).get(q.envMap||F),Vt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!Y.morphAttributes.position,ce=!!Y.morphAttributes.normal,ae=!!Y.morphAttributes.color;let pe=oi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=_.toneMapping);const ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=ye!==void 0?ye.length:0,Xt=Dt.get(q),je=p.state.lights;if(ft===!0&&(pt===!0||b!==w)){const gn=b===w&&q.id===x;dt.setState(q,b,gn)}let Te=!1;q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==je.state.version||Xt.outputColorSpace!==nt||k.isBatchedMesh&&Xt.batching===!1||!k.isBatchedMesh&&Xt.batching===!0||k.isBatchedMesh&&Xt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Xt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Xt.instancing===!1||!k.isInstancedMesh&&Xt.instancing===!0||k.isSkinnedMesh&&Xt.skinning===!1||!k.isSkinnedMesh&&Xt.skinning===!0||k.isInstancedMesh&&Xt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Xt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Xt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Xt.instancingMorph===!1&&k.morphTexture!==null||Xt.envMap!==Ct||q.fog===!0&&Xt.fog!==D||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==dt.numPlanes||Xt.numIntersection!==dt.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==qt||Xt.morphTargets!==Ot||Xt.morphNormals!==ce||Xt.morphColors!==ae||Xt.toneMapping!==pe||Xt.morphTargetsCount!==ue)&&(Te=!0):(Te=!0,Xt.__version=q.version);let yn=Xt.currentProgram;Te===!0&&(yn=ct(q,N,k));let Ai=!1,un=!1,fs=!1;const Ue=yn.getUniforms(),Cn=Xt.uniforms;if(gt.useProgram(yn.program)&&(Ai=!0,un=!0,fs=!0),q.id!==x&&(x=q.id,un=!0),Ai||w!==b){gt.buffers.depth.getReversed()?(mt.copy(b.projectionMatrix),ed(mt),nd(mt),Ue.setValue(R,"projectionMatrix",mt)):Ue.setValue(R,"projectionMatrix",b.projectionMatrix),Ue.setValue(R,"viewMatrix",b.matrixWorldInverse);const $n=Ue.map.cameraPosition;$n!==void 0&&$n.setValue(R,jt.setFromMatrixPosition(b.matrixWorld)),ot.logarithmicDepthBuffer&&Ue.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ue.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,un=!0,fs=!0)}if(k.isSkinnedMesh){Ue.setOptional(R,k,"bindMatrix"),Ue.setOptional(R,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ue.setValue(R,"boneTexture",gn.boneTexture,T))}k.isBatchedMesh&&(Ue.setOptional(R,k,"batchingTexture"),Ue.setValue(R,"batchingTexture",k._matricesTexture,T),Ue.setOptional(R,k,"batchingIdTexture"),Ue.setValue(R,"batchingIdTexture",k._indirectTexture,T),Ue.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&Ue.setValue(R,"batchingColorTexture",k._colorsTexture,T));const ps=Y.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&$t.update(k,Y,yn),(un||Xt.receiveShadow!==k.receiveShadow)&&(Xt.receiveShadow=k.receiveShadow,Ue.setValue(R,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Cn.envMap.value=Ct,Cn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(Cn.envMapIntensity.value=N.environmentIntensity),un&&(Ue.setValue(R,"toneMappingExposure",_.toneMappingExposure),Xt.needsLights&&Ce(Cn,fs),D&&q.fog===!0&&at.refreshFogUniforms(Cn,D),at.refreshMaterialUniforms(Cn,q,G,lt,p.state.transmissionRenderTarget[b.id]),Dr.upload(R,te(Xt),Cn,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Dr.upload(R,te(Xt),Cn,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ue.setValue(R,"center",k.center),Ue.setValue(R,"modelViewMatrix",k.modelViewMatrix),Ue.setValue(R,"normalMatrix",k.normalMatrix),Ue.setValue(R,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const gn=q.uniformsGroups;for(let $n=0,jn=gn.length;$n<jn;$n++){const ac=gn[$n];I.update(ac,yn),I.bind(ac,yn)}}return yn}function Ce(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function hn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,Y){Dt.get(b.texture).__webglTexture=N,Dt.get(b.depthTexture).__webglTexture=Y;const q=Dt.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const Y=Dt.get(b);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,Y=0){C=b,A=N,P=Y;let q=!0,k=null,D=!1,F=!1;if(b){const Ct=Dt.get(b);if(Ct.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(R.FRAMEBUFFER,null),q=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Ct.__hasExternalTextures)T.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ot=b.depthTexture;if(Ct.__boundDepthTexture!==Ot){if(Ot!==null&&Dt.has(Ot)&&(b.width!==Ot.image.width||b.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(F=!0);const qt=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?k=qt[N][Y]:k=qt[N],D=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?k=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[Y]:k=qt,L.copy(b.viewport),z.copy(b.scissor),B=b.scissorTest}else L.copy(Et).multiplyScalar(G).floor(),z.copy(Bt).multiplyScalar(G).floor(),B=ie;if(gt.bindFramebuffer(R.FRAMEBUFFER,k)&&q&&gt.drawBuffers(b,k),gt.viewport(L),gt.scissor(z),gt.setScissorTest(B),D){const Ct=Dt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,Y)}else if(F){const Ct=Dt.get(b.texture),Vt=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,Y||0,Vt)}x=-1},this.readRenderTargetPixels=function(b,N,Y,q,k,D,F){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&F!==void 0&&(nt=nt[F]),nt){gt.bindFramebuffer(R.FRAMEBUFFER,nt);try{const Ct=b.texture,Vt=Ct.format,qt=Ct.type;if(!ot.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-q&&Y>=0&&Y<=b.height-k&&R.readPixels(N,Y,q,k,Ht.convert(Vt),Ht.convert(qt),D)}finally{const Ct=C!==null?Dt.get(C).__webglFramebuffer:null;gt.bindFramebuffer(R.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,N,Y,q,k,D,F){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&F!==void 0&&(nt=nt[F]),nt){const Ct=b.texture,Vt=Ct.format,qt=Ct.type;if(!ot.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-q&&Y>=0&&Y<=b.height-k){gt.bindFramebuffer(R.FRAMEBUFFER,nt);const Ot=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ot),R.bufferData(R.PIXEL_PACK_BUFFER,D.byteLength,R.STREAM_READ),R.readPixels(N,Y,q,k,Ht.convert(Vt),Ht.convert(qt),0);const ce=C!==null?Dt.get(C).__webglFramebuffer:null;gt.bindFramebuffer(R.FRAMEBUFFER,ce);const ae=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await td(R,ae,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ot),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,D),R.deleteBuffer(Ot),R.deleteSync(ae),D}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,Y=0){b.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-Y),k=Math.floor(b.image.width*q),D=Math.floor(b.image.height*q),F=N!==null?N.x:0,nt=N!==null?N.y:0;T.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,Y,0,0,F,nt,k,D),gt.unbindTexture()},this.copyTextureToTexture=function(b,N,Y=null,q=null,k=0){b.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],N=arguments[2],k=arguments[3]||0,Y=null);let D,F,nt,Ct,Vt,qt,Ot,ce,ae;const pe=b.isCompressedTexture?b.mipmaps[k]:b.image;Y!==null?(D=Y.max.x-Y.min.x,F=Y.max.y-Y.min.y,nt=Y.isBox3?Y.max.z-Y.min.z:1,Ct=Y.min.x,Vt=Y.min.y,qt=Y.isBox3?Y.min.z:0):(D=pe.width,F=pe.height,nt=pe.depth||1,Ct=0,Vt=0,qt=0),q!==null?(Ot=q.x,ce=q.y,ae=q.z):(Ot=0,ce=0,ae=0);const ye=Ht.convert(N.format),ue=Ht.convert(N.type);let Xt;N.isData3DTexture?(T.setTexture3D(N,0),Xt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Xt=R.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Xt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const je=R.getParameter(R.UNPACK_ROW_LENGTH),Te=R.getParameter(R.UNPACK_IMAGE_HEIGHT),yn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ai=R.getParameter(R.UNPACK_SKIP_ROWS),un=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,pe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qt);const fs=b.isDataArrayTexture||b.isData3DTexture,Ue=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Cn=Dt.get(b),ps=Dt.get(N),gn=Dt.get(Cn.__renderTarget),$n=Dt.get(ps.__renderTarget);gt.bindFramebuffer(R.READ_FRAMEBUFFER,gn.__webglFramebuffer),gt.bindFramebuffer(R.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let jn=0;jn<nt;jn++)fs&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.get(b).__webglTexture,k,qt+jn),b.isDepthTexture?(Ue&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.get(N).__webglTexture,k,ae+jn),R.blitFramebuffer(Ct,Vt,D,F,Ot,ce,D,F,R.DEPTH_BUFFER_BIT,R.NEAREST)):Ue?R.copyTexSubImage3D(Xt,k,Ot,ce,ae+jn,Ct,Vt,D,F):R.copyTexSubImage2D(Xt,k,Ot,ce,ae+jn,Ct,Vt,D,F);gt.bindFramebuffer(R.READ_FRAMEBUFFER,null),gt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ue?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Xt,k,Ot,ce,ae,D,F,nt,ye,ue,pe.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Xt,k,Ot,ce,ae,D,F,nt,ye,pe.data):R.texSubImage3D(Xt,k,Ot,ce,ae,D,F,nt,ye,ue,pe):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,Ot,ce,D,F,ye,ue,pe.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,Ot,ce,pe.width,pe.height,ye,pe.data):R.texSubImage2D(R.TEXTURE_2D,k,Ot,ce,D,F,ye,ue,pe);R.pixelStorei(R.UNPACK_ROW_LENGTH,je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Te),R.pixelStorei(R.UNPACK_SKIP_PIXELS,yn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ai),R.pixelStorei(R.UNPACK_SKIP_IMAGES,un),k===0&&N.generateMipmaps&&R.generateMipmap(Xt),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,Y=null,q=null,k=0){return b.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,b=arguments[2],N=arguments[3],k=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,Y,q,k)},this.initRenderTarget=function(b){Dt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){A=0,P=0,C=null,gt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}class qr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new qr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Th extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ta,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new S;class Or{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Or(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yr extends hi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const xs=new S,Gi=new S,Wi=new S,Xi=new vt,ys=new vt,Ah=new Ae,pr=new S,ws=new S,mr=new S,al=new vt,Lo=new vt,cl=new vt;class Us extends Ve{constructor(t=new Yr){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fg(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Or(n,3,0,!1)),Vi.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Ah.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;gr(pr.set(-.5,-.5,0),Wi,o,Gi,s,r),gr(ws.set(.5,-.5,0),Wi,o,Gi,s,r),gr(mr.set(.5,.5,0),Wi,o,Gi,s,r),al.set(0,0),Lo.set(1,0),cl.set(1,1);let a=t.ray.intersectTriangle(pr,ws,mr,!1,xs);if(a===null&&(gr(ws.set(-.5,.5,0),Wi,o,Gi,s,r),Lo.set(0,1),a=t.ray.intersectTriangle(pr,mr,ws,!1,xs),a===null))return;const c=t.ray.origin.distanceTo(xs);c<t.near||c>t.far||e.push({distance:c,point:xs.clone(),uv:_n.getInterpolation(xs,pr,ws,mr,al,Lo,cl,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gr(i,t,e,n,s,r){Xi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Xi.x-s*Xi.y,ys.y=s*Xi.x+r*Xi.y):ys.copy(Xi),i.copy(t),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(Ah)}class pg extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=pn,u=pn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll extends ln{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new Ae,hl=new Ae,vr=[],ul=new Ei,mg=new Ae,Ms=new J,Ss=new Ti;class Do extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),ul.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(ul)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Ss.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),hl.multiplyMatrices(n,qi),Ms.matrixWorld=hl,Ms.raycast(t,vr);for(let o=0,a=vr.length;o<a;o++){const c=vr[o];c.instanceId=r,c.object=this,e.push(c)}vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pg(new Float32Array(s*this.count),s,this.count,Ba,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ch extends hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fr=new S,kr=new S,dl=new Ae,bs=new Wr,_r=new Ti,Io=new S,fl=new S;class gg extends Ve{constructor(t=new Ge,e=new Ch){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fr.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fr.distanceTo(kr);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;dl.copy(s).invert(),bs.copy(t.ray).applyMatrix4(dl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),E=u.getX(v+1),y=xr(this,t,bs,c,p,E);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=xr(this,t,bs,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=xr(this,t,bs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=xr(this,t,bs,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Fr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Fr,kr,Io,fl)>n)return;Io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Io);if(!(c<t.near||c>t.far))return{distance:c,point:fl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Rh extends hi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pl=new Ae,Ra=new Wr,yr=new Ti,wr=new S;class vg extends Ve{constructor(t=new Ge,e=new Rh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;pl.copy(s).invert(),Ra.copy(t.ray).applyMatrix4(pl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);wr.fromBufferAttribute(h,m),ml(wr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)wr.fromBufferAttribute(h,g),ml(wr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ml(i,t,e,n,s,r,o){const a=Ra.distanceSqToPoint(i);if(a<e){const c=new S;Ra.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Za extends Qe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new vt:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new S,s=[],r=[],o=[],a=new S,c=new Ae;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $a extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _g extends $a{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ja(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Mr=new S,Uo=new ja,No=new ja,Oo=new ja;class Ph extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Mr.subVectors(s[0],s[1]).add(s[0]),l=Mr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Uo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),No.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),Oo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),No.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Oo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Uo.calc(c),No.calc(c),Oo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function xg(i,t){const e=1-i;return e*e*t}function yg(i,t){return 2*(1-i)*i*t}function wg(i,t){return i*i*t}function Ns(i,t,e,n){return xg(i,t)+yg(i,e)+wg(i,n)}function Mg(i,t){const e=1-i;return e*e*e*t}function Sg(i,t){const e=1-i;return 3*e*e*i*t}function bg(i,t){return 3*(1-i)*i*i*t}function Eg(i,t){return i*i*i*t}function Os(i,t,e,n,s){return Mg(i,t)+Sg(i,e)+bg(i,n)+Eg(i,s)}class Lh extends Un{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tg extends Un{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y),Os(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dh extends Un{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ag extends Un{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends Un{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends Un{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y),Ns(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(gl(a,c.x,l.x,u.x,h.x),gl(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var zr=Object.freeze({__proto__:null,ArcCurve:_g,CatmullRomCurve3:Ph,CubicBezierCurve:Lh,CubicBezierCurve3:Tg,EllipseCurve:$a,LineCurve:Dh,LineCurve3:Ag,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:Uh,SplineCurve:Nh});class Cg extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new zr[s.type]().fromJSON(s))}return this}}class Pa extends Cg{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dh(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ih(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Lh(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Nh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new $a(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ka extends Ge{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$e(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new S,d=new vt,f=new S,g=new S,v=new S;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let E=0;E<=e;E++){const y=n+E*u*s,_=Math.sin(y),U=Math.cos(y);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*_,h.y=t[A].y,h.z=t[A].x*U,o.push(h.x,h.y,h.z),d.x=E/e,d.y=A/(t.length-1),a.push(d.x,d.y);const P=c[3*A+0]*_,C=c[3*A+1],x=c[3*A+0]*U;l.push(P,C,x)}}for(let E=0;E<e;E++)for(let y=0;y<t.length-1;y++){const _=y+E*t.length,U=_,A=_+t.length,P=_+t.length+1,C=_+1;r.push(U,A,C),r.push(P,C,A)}this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("uv",new Me(a,2)),this.setAttribute("normal",new Me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.points,t.segments,t.phiStart,t.phiLength)}}class Fs extends Ka{constructor(t=1,e=1,n=4,s=8){const r=new Pa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Fs(t.radius,t.length,t.capSegments,t.radialSegments)}}class Xn extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new S,u=new vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class sn extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function E(){const _=new S,U=new S;let A=0;const P=(e-t)/n;for(let C=0;C<=r;C++){const x=[],w=C/r,L=w*(e-t)+t;for(let z=0;z<=s;z++){const B=z/s,$=B*c+a,rt=Math.sin($),X=Math.cos($);U.x=L*rt,U.y=-w*n+m,U.z=L*X,h.push(U.x,U.y,U.z),_.set(rt,P,X).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-w),x.push(g++)}v.push(x)}for(let C=0;C<s;C++)for(let x=0;x<r;x++){const w=v[x][C],L=v[x+1][C],z=v[x+1][C+1],B=v[x][C+1];(t>0||x!==0)&&(u.push(w,L,B),A+=3),(e>0||x!==r-1)&&(u.push(L,z,B),A+=3)}l.addGroup(p,A,0),p+=A}function y(_){const U=g,A=new vt,P=new S;let C=0;const x=_===!0?t:e,w=_===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const $=z/s*c+a,rt=Math.cos($),X=Math.sin($);P.x=x*X,P.y=m*w,P.z=x*rt,h.push(P.x,P.y,P.z),d.push(0,w,0),A.x=rt*.5+.5,A.y=X*.5*w+.5,f.push(A.x,A.y),g++}for(let z=0;z<s;z++){const B=U+z,$=L+z;_===!0?u.push($,$+1,B):u.push($+1,$,B),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zr extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new S,_=new S,U=new S;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],_),f(e[A+2],U),c(y,_,U,E)}function c(E,y,_,U){const A=U+1,P=[];for(let C=0;C<=A;C++){P[C]=[];const x=E.clone().lerp(_,C/A),w=y.clone().lerp(_,C/A),L=A-C;for(let z=0;z<=L;z++)z===0&&C===A?P[C][z]=x:P[C][z]=x.clone().lerp(w,z/L)}for(let C=0;C<A;C++)for(let x=0;x<2*(A-C)-1;x++){const w=Math.floor(x/2);x%2===0?(d(P[C][w+1]),d(P[C+1][w]),d(P[C][w])):(d(P[C][w+1]),d(P[C+1][w+1]),d(P[C+1][w]))}}function l(E){const y=new S;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(E),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const E=new S;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];const _=m(E)/2/Math.PI+.5,U=p(E)/Math.PI+.5;o.push(_,1-U)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const y=o[E+0],_=o[E+2],U=o[E+4],A=Math.max(y,_,U),P=Math.min(y,_,U);A>.9&&P<.1&&(y<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),U<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,y){const _=E*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const E=new S,y=new S,_=new S,U=new S,A=new vt,P=new vt,C=new vt;for(let x=0,w=0;x<r.length;x+=9,w+=6){E.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),_.set(r[x+6],r[x+7],r[x+8]),A.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),C.set(o[w+4],o[w+5]),U.copy(E).add(y).add(_).divideScalar(3);const L=m(U);v(A,w+0,E,L),v(P,w+2,y,L),v(C,w+4,_,L)}}function v(E,y,_,U){U<0&&E.x===1&&(o[y]=E.x-1),_.x===0&&_.z===0&&(o[y]=U/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.vertices,t.indices,t.radius,t.details)}}class Ja extends Zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ja(t.radius,t.detail)}}class Oh extends Pa{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Pa().fromJSON(s))}return this}}const Rg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Fh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=Ug(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Vs(r,o,e,a,c,f,0),o}};function Fh(i,t,e,n,s){let r,o;if(s===Xg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=vl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=vl(r,i[r],i[r+1],o);return o&&$r(o,o.next)&&(Ws(o),o=o.next),o}function bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||ke(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&zg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Lg(i,n,s,r):Pg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ws(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Dg(bi(i),t,e),Vs(i,t,e,n,s,r,2)):o===2&&Ig(i,t,e,n,s,r):Vs(bi(i),t,e,n,s,r,1);break}}}function Pg(i){const t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&$i(s,a,r,c,o,l,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ke(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=La(f,g,t,e,n),E=La(v,m,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=E;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$i(a,u,c,h,l,d,y.x,y.y)&&ke(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&$i(a,u,c,h,l,d,_.x,_.y)&&ke(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$i(a,u,c,h,l,d,y.x,y.y)&&ke(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&$i(a,u,c,h,l,d,_.x,_.y)&&ke(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Dg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!$r(s,r)&&kh(s,n,n.next,r)&&Gs(s,r)&&Gs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ws(n),Ws(n.next),n=i=r),n=n.next}while(n!==i);return bi(n)}function Ig(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vg(o,a)){let c=zh(o,a);o=bi(o,o.next),c=bi(c,c.next),Vs(o,t,e,n,s,r,0),Vs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ug(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Fh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Hg(l));for(s.sort(Ng),r=0;r<s.length;r++)e=Og(s[r],e);return e}function Ng(i,t){return i.x-t.x}function Og(i,t){const e=Fg(i,t);if(!e)return t;const n=zh(e,i);return bi(n,n.next),bi(e,e.next)}function Fg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&$i(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Gs(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&kg(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function kg(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function zg(i,t,e,n){let s=i;do s.z===0&&(s.z=La(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bg(s)}function Bg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function La(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $i(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Vg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gg(i,t)&&(Gs(i,t)&&Gs(t,i)&&Wg(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||$r(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function kh(i,t,e,n){const s=br(ke(i,t,e)),r=br(ke(i,t,n)),o=br(ke(e,n,i)),a=br(ke(e,n,t));return!!(s!==r&&o!==a||s===0&&Sr(i,e,t)||r===0&&Sr(i,n,t)||o===0&&Sr(e,i,n)||a===0&&Sr(e,t,n))}function Sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function br(i){return i>0?1:i<0?-1:0}function Gg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gs(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function Wg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zh(i,t){const e=new Da(i.i,i.x,i.y),n=new Da(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vl(i,t,e,n){const s=new Da(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Da(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ks{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];_l(t),xl(n,t);let o=t.length;e.forEach(_l);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,xl(n,e[c]);const a=Rg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function _l(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qa extends Ge{constructor(t=new Oh([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:qg;let y,_=!1,U,A,P,C;p&&(y=p.getSpacedPoints(u),_=!0,d=!1,U=p.computeFrenetFrames(u,!1),A=new S,P=new S,C=new S),d||(m=0,f=0,g=0,v=0);const x=a.extractPoints(l);let w=x.shape;const L=x.holes;if(!ks.isClockWise(w)){w=w.reverse();for(let it=0,ut=L.length;it<ut;it++){const R=L[it];ks.isClockWise(R)&&(L[it]=R.reverse())}}const B=ks.triangulateShape(w,L),$=w;for(let it=0,ut=L.length;it<ut;it++){const R=L[it];w=w.concat(R)}function rt(it,ut,R){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ut,R)}const X=w.length,lt=B.length;function G(it,ut,R){let It,ht,ot;const gt=it.x-ut.x,Yt=it.y-ut.y,Dt=R.x-it.x,T=R.y-it.y,M=gt*gt+Yt*Yt,H=gt*T-Yt*Dt;if(Math.abs(H)>Number.EPSILON){const Z=Math.sqrt(M),st=Math.sqrt(Dt*Dt+T*T),et=ut.x-Yt/Z,Tt=ut.y+gt/Z,at=R.x-T/st,Ut=R.y+Dt/st,Kt=((at-et)*T-(Ut-Tt)*Dt)/(gt*T-Yt*Dt);It=et+gt*Kt-it.x,ht=Tt+Yt*Kt-it.y;const dt=It*It+ht*ht;if(dt<=2)return new vt(It,ht);ot=Math.sqrt(dt/2)}else{let Z=!1;gt>Number.EPSILON?Dt>Number.EPSILON&&(Z=!0):gt<-Number.EPSILON?Dt<-Number.EPSILON&&(Z=!0):Math.sign(Yt)===Math.sign(T)&&(Z=!0),Z?(It=-Yt,ht=gt,ot=Math.sqrt(M)):(It=gt,ht=Yt,ot=Math.sqrt(M/2))}return new vt(It/ot,ht/ot)}const yt=[];for(let it=0,ut=$.length,R=ut-1,It=it+1;it<ut;it++,R++,It++)R===ut&&(R=0),It===ut&&(It=0),yt[it]=G($[it],$[R],$[It]);const bt=[];let Et,Bt=yt.concat();for(let it=0,ut=L.length;it<ut;it++){const R=L[it];Et=[];for(let It=0,ht=R.length,ot=ht-1,gt=It+1;It<ht;It++,ot++,gt++)ot===ht&&(ot=0),gt===ht&&(gt=0),Et[It]=G(R[It],R[ot],R[gt]);bt.push(Et),Bt=Bt.concat(Et)}for(let it=0;it<m;it++){const ut=it/m,R=f*Math.cos(ut*Math.PI/2),It=g*Math.sin(ut*Math.PI/2)+v;for(let ht=0,ot=$.length;ht<ot;ht++){const gt=rt($[ht],yt[ht],It);mt(gt.x,gt.y,-R)}for(let ht=0,ot=L.length;ht<ot;ht++){const gt=L[ht];Et=bt[ht];for(let Yt=0,Dt=gt.length;Yt<Dt;Yt++){const T=rt(gt[Yt],Et[Yt],It);mt(T.x,T.y,-R)}}}const ie=g+v;for(let it=0;it<X;it++){const ut=d?rt(w[it],Bt[it],ie):w[it];_?(P.copy(U.normals[0]).multiplyScalar(ut.x),A.copy(U.binormals[0]).multiplyScalar(ut.y),C.copy(y[0]).add(P).add(A),mt(C.x,C.y,C.z)):mt(ut.x,ut.y,0)}for(let it=1;it<=u;it++)for(let ut=0;ut<X;ut++){const R=d?rt(w[ut],Bt[ut],ie):w[ut];_?(P.copy(U.normals[it]).multiplyScalar(R.x),A.copy(U.binormals[it]).multiplyScalar(R.y),C.copy(y[it]).add(P).add(A),mt(C.x,C.y,C.z)):mt(R.x,R.y,h/u*it)}for(let it=m-1;it>=0;it--){const ut=it/m,R=f*Math.cos(ut*Math.PI/2),It=g*Math.sin(ut*Math.PI/2)+v;for(let ht=0,ot=$.length;ht<ot;ht++){const gt=rt($[ht],yt[ht],It);mt(gt.x,gt.y,h+R)}for(let ht=0,ot=L.length;ht<ot;ht++){const gt=L[ht];Et=bt[ht];for(let Yt=0,Dt=gt.length;Yt<Dt;Yt++){const T=rt(gt[Yt],Et[Yt],It);_?mt(T.x,T.y+y[u-1].y,y[u-1].x+R):mt(T.x,T.y,h+R)}}}Q(),ft();function Q(){const it=s.length/3;if(d){let ut=0,R=X*ut;for(let It=0;It<lt;It++){const ht=B[It];Pt(ht[2]+R,ht[1]+R,ht[0]+R)}ut=u+m*2,R=X*ut;for(let It=0;It<lt;It++){const ht=B[It];Pt(ht[0]+R,ht[1]+R,ht[2]+R)}}else{for(let ut=0;ut<lt;ut++){const R=B[ut];Pt(R[2],R[1],R[0])}for(let ut=0;ut<lt;ut++){const R=B[ut];Pt(R[0]+X*u,R[1]+X*u,R[2]+X*u)}}n.addGroup(it,s.length/3-it,0)}function ft(){const it=s.length/3;let ut=0;pt($,ut),ut+=$.length;for(let R=0,It=L.length;R<It;R++){const ht=L[R];pt(ht,ut),ut+=ht.length}n.addGroup(it,s.length/3-it,1)}function pt(it,ut){let R=it.length;for(;--R>=0;){const It=R;let ht=R-1;ht<0&&(ht=it.length-1);for(let ot=0,gt=u+m*2;ot<gt;ot++){const Yt=X*ot,Dt=X*(ot+1),T=ut+It+Yt,M=ut+ht+Yt,H=ut+ht+Dt,Z=ut+It+Dt;jt(T,M,H,Z)}}}function mt(it,ut,R){c.push(it),c.push(ut),c.push(R)}function Pt(it,ut,R){Zt(it),Zt(ut),Zt(R);const It=s.length/3,ht=E.generateTopUV(n,s,It-3,It-2,It-1);Jt(ht[0]),Jt(ht[1]),Jt(ht[2])}function jt(it,ut,R,It){Zt(it),Zt(ut),Zt(It),Zt(ut),Zt(R),Zt(It);const ht=s.length/3,ot=E.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);Jt(ot[0]),Jt(ot[1]),Jt(ot[3]),Jt(ot[1]),Jt(ot[2]),Jt(ot[3])}function Zt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Jt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zr[s.type]().fromJSON(s)),new Qa(n,t.options)}}const qg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new vt(r,o),new vt(a,c),new vt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new vt(o,1-c),new vt(l,1-h),new vt(d,1-g),new vt(v,1-p)]:[new vt(a,1-c),new vt(u,1-h),new vt(f,1-g),new vt(m,1-p)]}};function Yg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class tc extends Zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}class jr extends Ge{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new S,g=new vt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const E=p+m,y=E,_=E+n+1,U=E+n+2,A=E+1;a.push(y,_,A),a.push(_,U,A)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Be extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new S,d=new S,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],y=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let U=0;U<=e;U++){const A=U/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(A+_,1-y),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const y=u[p][E+1],_=u[p][E],U=u[p+1][E],A=u[p+1][E+1];(p!==0||o>0)&&f.push(y,_,A),(p!==n-1||c<Math.PI)&&f.push(_,U,A)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qn extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new S,h=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(v,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ec extends Ge{constructor(t=new Uh(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,c=new S,l=new vt;let u=new S;const h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),E(),p()}function m(y){u=t.getPointAt(y/e,u);const _=o.normals[y],U=o.binormals[y];for(let A=0;A<=s;A++){const P=A/s*Math.PI*2,C=Math.sin(P),x=-Math.cos(P);c.x=x*_.x+C*U.x,c.y=x*_.y+C*U.y,c.z=x*_.z+C*U.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){const U=(s+1)*(y-1)+(_-1),A=(s+1)*y+(_-1),P=(s+1)*y+_,C=(s+1)*(y-1)+_;g.push(U,A,C),g.push(A,P,C)}}function E(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)l.x=y/e,l.y=_/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ec(new zr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Rt extends hi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const yl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zg{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const $g=new Zg;class nc{constructor(t){this.manager=t!==void 0?t:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nc.DEFAULT_MATERIAL_NAME="__DEFAULT";class jg extends nc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=yl.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Hs("img");function c(){u(),yl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Kg extends nc{constructor(t){super(t)}load(t,e,n,s){const r=new Qe,o=new jg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Kr extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jr extends Kr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fo=new Ae,wl=new S,Ml=new S;class ic{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jg extends ic{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Qg extends Kr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Sl=new Ae,Es=new S,ko=new S;class tv extends ic{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(t.matrixWorld),n.position.copy(Es),ko.copy(n.position),ko.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ko),n.updateMatrixWorld(),s.makeTranslation(-Es.x,-Es.y,-Es.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class Yn extends Kr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ev extends ic{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qr extends Kr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new ev}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=bl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function bl(){return performance.now()}const El=new Ae;class Bh{constructor(t,e,n=0,s=1/0){this.ray=new Wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return El.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(El),this}intersectObject(t,e=!0,n=[]){return Ia(t,this,n,e),n.sort(Tl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ia(t[s],this,n,e);return n.sort(Tl),n}}function Tl(i,t){return i.distance-t.distance}function Ia(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ia(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);class iv extends Th{constructor(){super();const t=new He;t.deleteAttribute("uv");const e=new Rt({side:nn}),n=new Rt,s=new Yn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new J(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new J(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new J(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new J(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new J(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new J(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new J(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new J(t,Yi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new J(t,Yi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new J(t,Yi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new J(t,Yi(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new J(t,Yi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new J(t,Yi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Yi(i){const t=new _e;return t.color.setScalar(i),t}const ts=1.65;class Al extends EventTarget{constructor(t){super();const e=this.renderer=new dg({canvas:t,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=Ke,e.toneMapping=Kl,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=$l,e.shadowMap.autoUpdate=!1,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),this.scene=new Th,this.scene.background=new le(1713459),this.scene.fog=new qr(2766146,22,48);const n=new Aa(e);this.scene.environment=n.fromScene(new iv,.04).texture,this.scene.environmentIntensity=.35,this.camera=new an(70,window.innerWidth/window.innerHeight,.05,120),this.rig=new zt,this.rig.add(this.camera),this.camera.position.set(0,ts,0),this.scene.add(this.rig),this.clock=new nv,this.time=0,this.updaters=new Set,this.tweens=new Set,window.addEventListener("resize",()=>this.resize()),e.xr.addEventListener("sessionstart",()=>this.dispatchEvent(new Event("vrstart"))),e.xr.addEventListener("sessionend",()=>{this.camera.position.set(0,ts,0),this.dispatchEvent(new Event("vrend"))}),e.setAnimationLoop(()=>this.frame())}get isVR(){return this.renderer.xr.isPresenting}resize(){this.isVR||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight,!1))}shadowsDirty(){this.renderer.shadowMap.needsUpdate=!0}tween(t,e){return new Promise(n=>{const s={t:0,duration:t,fn:e,resolve:n};this.tweens.add(s)})}frame(){const t=Math.min(this.clock.getDelta(),.1);this.time+=t;for(const e of this.tweens){e.t+=t;const n=Math.min(1,e.t/e.duration);e.fn(n),n>=1&&(this.tweens.delete(e),e.resolve())}for(const e of this.updaters)e(t,this.time);this.renderer.render(this.scene,this.camera)}static async vrSupported(){try{return!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr"))}catch{return!1}}async enterVR(){const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});return await this.renderer.xr.setSession(t),t}exitVR(){const t=this.renderer.xr.getSession();t&&t.end()}}const sv=new S(0,1,0);class rv extends EventTarget{constructor(t){super(),this.engine=t,this.canvas=t.renderer.domElement,this.raycaster=new Bh,this.raycaster.far=40,this.world=null,this.uiMeshes=new Set,this.modal=!1,this.locked=!0,this.yaw=0,this.pitch=-.08,this.keys=new Set,this.walkTarget=null,this.hovered=new Map,this.onSelect=null,this._bindPointer(),this._bindKeys(),this._setupXR(),t.updaters.add(e=>this._update(e)),t.addEventListener("vrend",()=>this._applyLook())}setWorld(t){this.world=t,this.yaw=t.spawn.yaw,this.pitch=-.08,this.engine.rig.position.copy(t.spawn.position),this.engine.rig.rotation.set(0,this.yaw,0),this._applyLook(),this.walkTarget=null}_targets(){const t=[...this.uiMeshes].filter(e=>e.visible&&e.parent);if(this.modal||!this.world)return t;for(const e of Object.values(this.world.interactables))e.done||t.push(e.hit);return t.push(...this.world.floors,...this.world.blockers),t}_pick(){const t=this.raycaster.intersectObjects(this._targets(),!0);for(const e of t){let n=e.object;return n.userData.panel?{kind:"ui",panel:n.userData.panel,uv:e.uv,point:e.point,distance:e.distance}:n.userData.interactable?{kind:"item",item:n.userData.interactable,point:e.point,distance:e.distance}:this.world&&this.world.floors.includes(n)?{kind:"floor",point:e.point,distance:e.distance}:{kind:"block",point:e.point,distance:e.distance}}return null}_setHover(t,e){const n=this.hovered.get(t)||null;if(n===e)return;this.hovered.set(t,e);const s=new Set(this.hovered.values());n&&!s.has(n)&&n.setHighlight(!1),e&&e.setHighlight(!0),t==="mouse"&&(this.canvas.style.cursor=e?"pointer":"grab")}clearHover(){for(const t of this.hovered.values())t&&t.setHighlight(!1);this.hovered.clear(),this.dispatchEvent(new CustomEvent("hover",{detail:null}))}_bindPointer(){const t=this.canvas,e=new vt;let n=null;const s=o=>{const a=t.getBoundingClientRect();return e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-a.top)/a.height)*2+1),e};t.addEventListener("pointerdown",o=>{this.engine.isVR||n||(n={id:o.pointerId,x:o.clientX,y:o.clientY,lx:o.clientX,ly:o.clientY,moved:!1,type:o.pointerType},t.setPointerCapture(o.pointerId),o.pointerType==="mouse"&&(t.style.cursor="grabbing"))}),t.addEventListener("pointermove",o=>{if(this.engine.isVR)return;if(n&&o.pointerId===n.id){const l=o.clientX-n.lx,u=o.clientY-n.ly;if(n.lx=o.clientX,n.ly=o.clientY,Math.hypot(o.clientX-n.x,o.clientY-n.y)>7&&(n.moved=!0),n.moved&&!this.locked&&!this.modal){const h=n.type==="touch"?.006:.004;this.yaw+=l*h,this.pitch=Ji.clamp(this.pitch+u*h,-1.25,1.25),this._applyLook()}return}if(o.pointerType!=="mouse"||this.locked||this.modal)return;this.raycaster.setFromCamera(s(o),this.engine.camera);const a=this._pick(),c=a&&a.kind==="item"?a.item:null;this._setHover("mouse",c),this.dispatchEvent(new CustomEvent("hover",{detail:c?{item:c,x:o.clientX,y:o.clientY}:null}))});const r=o=>{if(!n||o.pointerId!==n.id)return;const a=!n.moved;n=null,t.style.cursor="grab",!(!a||this.locked||this.modal||o.type==="pointercancel")&&(this.raycaster.setFromCamera(s(o),this.engine.camera),this._activate(this._pick(),"mouse"))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("contextmenu",o=>o.preventDefault())}_bindKeys(){window.addEventListener("keydown",t=>{t.target&&/input|textarea/i.test(t.target.tagName)||this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear())}_applyLook(){this.engine.isVR||(this.engine.rig.rotation.set(0,this.yaw,0),this.engine.camera.position.set(0,ts,0),this.engine.camera.rotation.set(this.pitch,0,0))}_activate(t,e){if(t){if(t.kind==="ui"){t.panel.click(t.uv);return}if(!(this.modal||this.locked)){if(t.kind==="item"){this.walkTarget=null,this.onSelect&&this.onSelect(t.item);return}t.kind==="floor"&&(this.engine.isVR?this.teleport(t.point):this.walkTarget=this._clamp(t.point.clone()))}}}_clamp(t){const e=this.world.bounds;return t.x=Ji.clamp(t.x,e.minX,e.maxX),t.z=Ji.clamp(t.z,e.minZ,e.maxZ),t.y=this.world.floorY||0,t}teleport(t){const e=this.engine.rig,n=new S;this.engine.camera.getWorldPosition(n),e.position.x+=t.x-n.x,e.position.z+=t.z-n.z,this._clamp(e.position)}snapTurn(t){const e=this.engine.rig,n=new S;this.engine.camera.getWorldPosition(n),e.position.sub(n).applyAxisAngle(sv,t).add(n),e.rotation.y+=t}_setupXR(){const t=this.engine.renderer.xr;this.controllers=[];const e=new Ge().setFromPoints([new S(0,0,0),new S(0,0,-1)]),n=new Ch({color:16739072,transparent:!0,opacity:.9}),s=new Be(.012,10,8),r=new _e({color:16777215});for(let a=0;a<2;a++){const c=t.getController(a),l=new gg(e,n);l.scale.z=3;const u=new J(s,r);u.position.z=-3,c.add(l,u),c.userData={line:l,dot:u,source:null,turnLatched:!1},c.addEventListener("connected",h=>{c.userData.source=h.data,c.userData.handedness=h.data.handedness,c.visible=h.data.targetRayMode!=="gaze",this.dispatchEvent(new CustomEvent("controller",{detail:{controller:c,grip:o[a],handedness:h.data.handedness}}))}),c.addEventListener("disconnected",()=>{c.userData.source=null,this._setHover(c,null)}),c.addEventListener("select",()=>{this.raycaster.setFromXRController(c),this._activate(this._pick(),c)}),this.engine.rig.add(c),this.controllers.push(c)}const o=[0,1].map(a=>{const c=t.getControllerGrip(a),l=new J(new sn(.018,.024,.12,12),new Rt({color:9552,roughness:.5}));return l.rotation.x=Math.PI/2,l.position.z=.03,c.add(l),this.engine.rig.add(c),c});this.controllers.forEach((a,c)=>{a.userData.grip=o[c]}),this.reticle=new J(new jr(.16,.22,32).rotateX(-Math.PI/2),new _e({color:16739072,transparent:!0,opacity:.85,depthWrite:!1})),this.reticle.visible=!1,this.engine.scene.add(this.reticle)}_updateXR(){let t=!1;for(const e of this.controllers){if(!e.userData.source)continue;this.raycaster.setFromXRController(e);const n=this._pick(),s=n?n.distance:3;if(e.userData.line.scale.z=s,e.userData.dot.position.z=-s,this._setHover(e,n&&n.kind==="item"?n.item:null),n&&n.kind==="ui")n.panel.hover(n.uv,e);else for(const o of this.uiMeshes)o.userData.panel.hover(null,e);n&&n.kind==="floor"&&!this.modal&&!this.locked&&!t&&(this.reticle.position.set(n.point.x,.01,n.point.z),t=!0);const r=e.userData.source.gamepad;if(r&&!this.locked){const o=r.axes.length>=4?r.axes[2]:r.axes[0]||0;Math.abs(o)>.7&&!e.userData.turnLatched?(this.snapTurn(-Math.sign(o)*(Math.PI/6)),e.userData.turnLatched=!0):Math.abs(o)<.3&&(e.userData.turnLatched=!1)}}this.reticle.visible=t}_update(t){if(this.engine.isVR){this._updateXR();return}if(this.reticle.visible=!1,this.locked||this.modal||!this.world)return;const e=this.keys,n=(e.has("ArrowLeft")?1:0)-(e.has("ArrowRight")?1:0);n&&(this.yaw+=n*1.8*t,this._applyLook());const s=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),r=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),o=this.engine.rig;if(s||r){this.walkTarget=null;const a=(e.has("ShiftLeft")?3.2:1.8)*t,c=Math.sin(this.yaw),l=Math.cos(this.yaw);o.position.x+=(-c*s+l*r)*a,o.position.z+=(-l*s-c*r)*a,this._clamp(o.position)}else if(this.walkTarget){const a=new S().subVectors(this.walkTarget,o.position);a.y=0;const c=a.length();c<.05?this.walkTarget=null:o.position.addScaledVector(a.normalize(),Math.min(c,2.6*t))}}}const Ne={navy:"#002550",orange:"#ff6b00",grey:"#e4ebef",ok:"#1f9d55",bad:"#c0392b",okBg:"#e7f6ee",badBg:"#fbeceb",softOrange:"#fff3ec"},bn={head:i=>`900 ${i}px Gilroy, Arial, sans-serif`,body:i=>`500 ${i}px Gilroy, Arial, sans-serif`,mono:i=>`400 ${i}px "PP Supply Mono", "Courier New", monospace`};function Ts(i,t,e){const n=String(t).split(/\s+/),s=[];let r="";for(const o of n){const a=r?r+" "+o:o;i.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function As(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}class Hh{constructor({widthM:t=1,px:e=1024,maxH:n=1800,compact:s=!1}={}){this.px=e,this.maxH=n,this.widthM=t,this.compact=s,this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=n,this.ctx=this.canvas.getContext("2d"),this.texture=new Za(this.canvas),this.texture.colorSpace=Ke,this.texture.anisotropy=4,this.mesh=new J(new se(1,1),new _e({map:this.texture,transparent:!0,depthTest:!1,toneMapped:!1})),this.mesh.renderOrder=1e3,this.mesh.userData.panel=this,this.rects=[],this.hoverBy=new Map,this.spec=null,this.usedH=100}render(t){this.spec=t,this._draw()}_draw(){const t=this.spec;if(!t)return;const e=this.ctx,n=this.px,s=this.compact?36:56,r=n-s*2,o=this.compact?1.25:1,a=new Set(this.hoverBy.values());e.clearRect(0,0,n,this.maxH),this.rects=[];const c=l=>{let u=0;if(l&&(e.fillStyle="#ffffff",As(e,0,0,n,this.usedH,36),e.fill(),e.save(),As(e,0,0,n,this.usedH,36),e.clip(),e.fillStyle=Ne.orange,e.fillRect(0,0,n,16),e.restore()),u=16+(this.compact?26:44),e.textBaseline="top",t.kicker&&(e.font=bn.mono(24*o),e.fillStyle=Ne.orange,l&&e.fillText(String(t.kicker).toUpperCase(),s,u),u+=40*o),t.title){e.font=bn.head(46*o),e.fillStyle=Ne.navy;for(const d of Ts(e,String(t.title).toUpperCase(),r))l&&e.fillText(d,s,u),u+=52*o;u+=12}const h=[].concat(t.body||[]);e.font=bn.body(30*o),e.fillStyle=Ne.navy;for(const d of h){for(const f of Ts(e,d,r))l&&e.fillText(f,s,u),u+=40*o;u+=14}if(t.options&&(u+=6,t.options.forEach((d,f)=>{e.font=bn.body(28);const g=Ts(e,d.text,r-110),v=Math.max(84,g.length*36+44),m="opt"+f;if(l){const p=a.has(m)&&!d.disabled;e.fillStyle=d.state==="correct"?Ne.okBg:d.state==="wrong"?Ne.badBg:p?Ne.softOrange:Ne.grey,As(e,s,u,r,v,22),e.fill();const E=d.state==="correct"?Ne.ok:d.state==="wrong"?Ne.bad:p?Ne.orange:null;E&&(e.lineWidth=5,e.strokeStyle=E,e.stroke()),e.font=bn.mono(d.mark?22:30),e.fillStyle=d.state==="correct"?Ne.ok:Ne.orange,e.fillText(d.mark??String.fromCharCode(65+f),s+(d.mark?18:30),u+(d.mark?28:24)),e.font=bn.body(28),e.fillStyle=Ne.navy,g.forEach((y,_)=>e.fillText(y,s+84,u+24+_*36))}!d.disabled&&t.onOption&&this.rects.push({id:m,x:s,y:u,w:r,h:v,fn:()=>t.onOption(f)}),u+=v+14})),t.feedback){const d=t.feedback;e.font=bn.body(27);const f=Ts(e,d.text,r-60),g=70+f.length*35+24;l&&(e.fillStyle=d.ok?Ne.okBg:Ne.badBg,As(e,s,u,r,g,20),e.fill(),e.fillStyle=d.ok?Ne.ok:Ne.bad,e.fillRect(s,u,10,g),e.font=bn.head(30),e.fillStyle=Ne.navy,e.fillText(String(d.title).toUpperCase(),s+34,u+22),e.font=bn.body(27),f.forEach((v,m)=>e.fillText(v,s+34,u+66+m*35))),u+=g+16}if(t.source){e.font=bn.body(21),e.fillStyle="#4a5d73";for(const d of Ts(e,t.source,r))l&&e.fillText(d,s,u),u+=28;u+=10}if(t.buttons&&t.buttons.length){u+=8,e.font=bn.mono(26*o);const d=80*(this.compact?1.1:1),f=16,g=t.buttons.map(p=>e.measureText(String(p.label).toUpperCase()).width+70),v=g.reduce((p,E)=>p+E,0)+f*(g.length-1);let m=this.compact?s:Math.max(s,n-s-v);v>r&&(m=s),t.buttons.forEach((p,E)=>{const y=v>r?(r-f*(g.length-1))/g.length:g[E],_="btn"+E;if(l){const U=a.has(_),A=p.style!=="secondary";As(e,m,u,y,d,d/2),e.fillStyle=A?U?"#ff8a33":Ne.orange:U?Ne.grey:"#ffffff",e.fill(),e.lineWidth=4,e.strokeStyle=A?Ne.orange:Ne.navy,e.stroke(),e.fillStyle=Ne.navy,e.textAlign="center",e.fillText(String(p.label).toUpperCase(),m+y/2,u+d/2-13*o),e.textAlign="left"}p.disabled||this.rects.push({id:_,x:m,y:u,w:y,h:d,fn:p.onClick}),m+=y+f}),u+=d}return u+s*.8};this.usedH=Math.min(this.maxH,Math.ceil(c(!1))),this.rects=[],c(!0),this.texture.repeat.set(1,this.usedH/this.maxH),this.texture.offset.set(0,1-this.usedH/this.maxH),this.texture.needsUpdate=!0,this.mesh.scale.set(this.widthM,this.widthM*(this.usedH/this.px),1)}_rectAt(t){if(!t)return null;const e=t.x*this.px,n=(1-t.y)*this.usedH;return this.rects.find(s=>e>=s.x&&e<=s.x+s.w&&n>=s.y&&n<=s.y+s.h)||null}hover(t,e){const n=this._rectAt(t),s=n?n.id:null;this.hoverBy.get(e)!==s&&(s?this.hoverBy.set(e,s):this.hoverBy.delete(e),this._draw())}click(t){const e=this._rectAt(t);e&&e.fn&&e.fn()}}function K(i,t={},...e){const[n,...s]=i.split("."),r=document.createElement(n||"div");s.length&&(r.className=s.join(" "));for(const[o,a]of Object.entries(t||{}))a==null||a===!1||(o.startsWith("on")?r.addEventListener(o.slice(2).toLowerCase(),a):o==="text"?r.textContent=a:r.setAttribute(o,a===!0?"":a));for(const o of e.flat())o!=null&&o!==!1&&r.append(o instanceof Node?o:document.createTextNode(String(o)));return r}function ov(i){const t=[].concat(i.body||[]).map(c=>K("p",{text:c})),e=i.options?K("div.options",{},i.options.map((c,l)=>K(`button.option${c.state?"."+c.state:""}`,{disabled:c.disabled,onclick:()=>i.onOption&&i.onOption(l)},K("span.letter",{text:c.mark??String.fromCharCode(65+l)}),K("span",{text:c.text})))):null,n=i.feedback?K(`div.feedback.${i.feedback.ok?"ok":"no"}`,{},K("strong",{text:i.feedback.title}),K("span",{text:i.feedback.text})):null,s=i.source?K("div.src",{text:i.source}):null,r=(i.buttons||[]).map(c=>K(`button.btn${c.style==="secondary"?".secondary":""}`,{disabled:c.disabled,onclick:c.onClick,text:c.label})),o=K("div.modal",{role:"dialog","aria-modal":"true"},K("div.modal-head",{},i.kicker?K("div.kicker",{text:i.kicker}):null,i.title?K("h2",{text:i.title}):null),K("div.modal-body",{},t,e,n,s),r.length?K("div.modal-foot",{},r):null),a=K("div.modal-wrap",{},o);return queueMicrotask(()=>{const c=o.querySelector(".option:not([disabled]), .btn");c&&matchMedia("(pointer:fine)").matches&&c.focus({preventScroll:!0})}),a}function av(i,t){const e=K("div.toast",{text:t});i.append(e),setTimeout(()=>e.remove(),3300)}const Er={factory:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 42V22l11 7v-7l11 7v-7l11 7V8h5v34z"/><path d="M5 42h38"/></svg>',construction:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 42V10h32"/><path d="M8 10l10 10M40 10v8"/><path d="M36 18h8v6h-8z"/><path d="M4 42h40M16 42V28h12v14"/></svg>',underwater:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2"/><circle cx="20" cy="27" r="6"/><path d="M26 27h8M14 33l-4 6M30 21l6-5"/><circle cx="38" cy="36" r="2"/><circle cx="34" cy="41" r="1.5"/></svg>',shipyard:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30h36l-5 10H11z"/><path d="M12 30V20h18v10M30 24h6v6"/><path d="M4 44c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2"/></svg>'};class cv{constructor(t,e,n){this.engine=t,this.input=e,this.uiRoot=n,this.spec=null,this.htmlNode=null,this.vr=new Hh({widthM:.95}),this.vr.mesh.visible=!1,t.scene.add(this.vr.mesh),e.uiMeshes.add(this.vr.mesh),t.addEventListener("vrstart",()=>this.spec&&this._render(!0)),t.addEventListener("vrend",()=>this.spec&&this._render(!0))}get isOpen(){return!!this.spec}show(t){const e=!this.spec;this.spec=t,this.input.modal=!0,this.input.clearHover(),this._render(e)}hide(){this.spec=null,this.input.modal=!1,this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.vr.mesh.visible=!1}_render(t){this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.engine.isVR?(this.vr.render(this.spec),this.vr.mesh.visible=!0,t&&this._placeInFront()):(this.vr.mesh.visible=!1,this.htmlNode=ov(this.spec),this.uiRoot.append(this.htmlNode))}_placeInFront(){const t=this.engine.camera,e=new S,n=new S;t.getWorldPosition(e),t.getWorldDirection(n),n.y=0,n.lengthSq()<1e-4&&n.set(0,0,-1),n.normalize();const s=this.vr.mesh;s.position.copy(e).addScaledVector(n,1.25),s.position.y=e.y-.12,s.lookAt(e.x,s.position.y,e.z)}}function to(i=1){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function mn(i,t,e,{repeat:n=[1,1],srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t;const o=r.getContext("2d");e(o,i,t);const a=new Za(r);return s&&(a.colorSpace=Ke),a.wrapS=a.wrapT=Ur,a.repeat.set(n[0],n[1]),a.anisotropy=8,a}function Vh(i=[8,6]){return mn(512,512,(t,e,n)=>{const s=to(7);t.fillStyle="#8d9196",t.fillRect(0,0,e,n);for(let r=0;r<40;r++){const o=s()*e,a=s()*n,c=30+s()*110,l=t.createRadialGradient(o,a,0,o,a,c),u=s()>.5;l.addColorStop(0,u?"rgba(60,62,66,0.16)":"rgba(190,194,198,0.14)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(o-c,a-c,c*2,c*2)}for(let r=0;r<9e3;r++){const o=90+s()*90;t.fillStyle=`rgba(${o},${o},${o+4},${.08+s()*.12})`,t.fillRect(s()*e,s()*n,1+s()*2,1+s()*2)}t.strokeStyle="rgba(40,42,46,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,1),t.lineTo(e,1),t.moveTo(1,0),t.lineTo(1,n),t.stroke()},{repeat:i})}function Br(i="#c9d1d8",t=[12,1]){return mn(256,256,(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s);for(let o=0;o<n;o+=32){const a=e.createLinearGradient(o,0,o+32,0);a.addColorStop(0,"rgba(0,0,0,0.10)"),a.addColorStop(.5,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(0,0,0,0.10)"),e.fillStyle=a,e.fillRect(o,0,32,s)}const r=to(3);for(let o=0;o<800;o++)e.fillStyle=`rgba(80,80,80,${r()*.05})`,e.fillRect(r()*n,r()*s,2,6)},{repeat:t})}function Gh(){return mn(256,64,(i,t,e)=>{const n=to(11);i.fillStyle="#b58a57",i.fillRect(0,0,t,e);for(let s=0;s<60;s++){i.strokeStyle=`rgba(90,60,30,${.1+n()*.2})`,i.lineWidth=1+n()*2;const r=n()*e;i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(t*.3,r+(n()-.5)*8,t*.6,r+(n()-.5)*8,t,r+(n()-.5)*6),i.stroke()}})}function lv(){return mn(128,128,(i,t,e)=>{const n=to(5);i.fillStyle="#b8895a",i.fillRect(0,0,t,e);for(let s=0;s<400;s++)i.fillStyle=`rgba(120,80,40,${n()*.15})`,i.fillRect(n()*t,n()*e,2,2);i.fillStyle="rgba(150,110,70,0.6)",i.fillRect(0,e*.45,t,10)})}function Ie({header:i,lines:t=[],headerBg:e="#006ce9",bg:n="#ffffff",fg:s="#002550",w:r=512,h:o=256}){return mn(r,o,a=>{a.fillStyle=n,a.fillRect(0,0,r,o);const c=i?o*.34:0;i&&(a.fillStyle=e,a.fillRect(0,0,r,c),a.fillStyle="#ffffff",a.font=`900 ${Math.round(c*.5)}px Gilroy, Arial, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(i.toUpperCase(),r/2,c/2+2)),a.fillStyle=s,a.textAlign="center",a.textBaseline="middle";const l=(o-c)/(t.length+1);a.font=`900 ${Math.round(Math.min(l*.75,o*.22))}px Gilroy, Arial, sans-serif`,t.forEach((u,h)=>a.fillText(u.toUpperCase(),r/2,c+l*(h+1))),a.strokeStyle=s,a.lineWidth=6,a.strokeRect(3,3,r-6,o-6)},{repeat:[1,1]})}function hv(){return mn(128,128,(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,t*.44,0,Math.PI*2),i.fillStyle="#ff6b00",i.fill(),i.lineWidth=8,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#002550",i.font="900 78px Gilroy, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("!",t/2,e/2+4)})}function Wh(i){const t=new Kg().load(i);return t.colorSpace=Ke,t.anisotropy=8,t}const ze=(i,t=.7,e=0,n={})=>new Rt({color:i,roughness:t,metalness:e,...n});function eo(){return{steel:ze(9080982,.42,.85),darkSteel:ze(3883078,.5,.8),galv:ze(12041666,.35,.9),columnBlue:ze(2841228,.55,.3),navy:ze(9552,.6,.2),orange:ze(16739072,.5,.1),yellow:ze(15906565,.55,.1),red:ze(12721951,.45,.2),black:ze(1711135,.8,.1),rubber:ze(2237222,.9,0),machine:ze(2703966,.5,.4),white:ze(15922422,.6,0),panelGrey:ze(8358543,.75,.2),lockerGrey:ze(7307926,.5,.5),cylinder:ze(10134442,.4,.6),copper:ze(12088115,.35,.9),wood:ze(16777215,.85,0,{map:Gh()}),cardboard:ze(16777215,.9,0,{map:lv()}),rag:ze(5918533,.95,0),ragBlue:ze(4086394,.95,0),skin:ze(13803644,.7,0),hivis:ze(14217770,.6,0,{emissive:2765568}),curtain:new Rt({color:16734738,roughness:.4,metalness:0,transparent:!0,opacity:.72,side:Je,depthWrite:!1}),glassBlue:new Rt({color:12572911,emissive:10274026,emissiveIntensity:.9,roughness:.2}),lamp:new Rt({color:16777215,emissive:16774108,emissiveIntensity:2.2})}}function V(i,t,e,n,s=0,r=0,o=0,{base:a=!0,cast:c=!0,receive:l=!0}={}){const u=new J(new He(i,t,e),n);return u.position.set(s,a?r+t/2:r,o),u.castShadow=c,u.receiveShadow=l,u}function ve(i,t,e,n,s=0,r=0,o=0,a=20,{base:c=!0,cast:l=!0}={}){const u=new J(new sn(i,t,e,a),n);return u.position.set(s,c?r+e/2:r,o),u.castShadow=l,u.receiveShadow=!0,u}function Hr(i,t,e=.3){const n=new zt,s=.02;return n.add(V(e,i,s*1.4,t,0,0,-e/2+s/2)),n.add(V(e,i,s*1.4,t,0,0,e/2-s/2)),n.add(V(s,i,e,t)),n}function Gn(i,t,e=.3,n=.16){const s=new zt,r=.018;return s.add(V(i,r,n,t,0,e/2-r/2,0,{base:!1})),s.add(V(i,r,n,t,0,-e/2+r/2,0,{base:!1})),s.add(V(i,e,r,t,0,0,0,{base:!1})),s}function Ua(i){const t=new zt,e=1.2,n=.8;for(let s=0;s<7;s++)t.add(V(e,.022,.1,i.wood,0,.122,-n/2+.05+s*((n-.1)/6)));for(const s of[-n/2+.05,0,n/2-.05])t.add(V(e,.1,.1,i.wood,0,0,s));for(const s of[-e/2+.05,e/2-.05])t.add(V(.1,.022,n,i.wood,s,.1,0));return t}function cn(i,t,e,n=40){const s=new Ph(i),r=new J(new ec(s,n,t,8,!1),e);return r.castShadow=!0,r}function In(i){const t=new zt,e=new zt,n=new zt,s=()=>{const h=new J(new Fs(.075,.72,4,10),i.navy);return h.position.y=-.43,h.castShadow=!0,h};e.add(s()),n.add(s()),e.position.set(-.1,.92,0),n.position.set(.1,.92,0);const r=new J(new Fs(.19,.45,4,12),i.navy);r.position.y=1.25,r.castShadow=!0;const o=new J(new sn(.205,.2,.42,14),i.hivis);o.position.y=1.27;const a=new J(new Be(.11,16,12),i.skin);a.position.y=1.68;const c=new J(new Be(.125,16,10,0,Math.PI*2,0,Math.PI/2),i.white);c.position.y=1.71;const l=new J(new Fs(.06,.5,4,8),i.navy);l.position.set(-.26,1.2,0);const u=l.clone();return u.position.x=.26,t.add(e,n,r,o,a,c,l,u),t.userData.legs=[e,n],t.userData.arms=[l,u],t}const es=""+new URL("logo-white-D3oA5qhY.png",import.meta.url).href,be=Math.PI,uv=new _e({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),dv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,En=(i,t,e)=>i+(t-i)*e;function fv(i){const t=eo(),e=new zt;e.name="factory";const n=[],s=[],r={},o=[],a=(D,F)=>i.tween(D,nt=>{F(dv(nt)),i.shadowsDirty()}),c=(D,F=!1)=>(e.add(D),F&&s.push(D),D);function l(D,F,nt,Ct,Vt,qt){const Ot=[];for(const pe of[].concat(nt))pe.traverse(ye=>{ye.isMesh&&ye.material.emissive&&(ye.material=ye.material.clone(),Ot.push({m:ye.material,e:ye.material.emissive.clone(),i:ye.material.emissiveIntensity}))});const ce=new J(new He(...Ct),uv);ce.position.set(...Vt),e.add(ce);const ae={id:D,kind:F,group:nt,hit:ce,anchor:new S(...qt),done:!1,setHighlight(pe){for(const{m:ye,e:ue,i:Xt}of Ot)pe?(ye.emissive.set(16739072),ye.emissiveIntensity=.55):(ye.emissive.copy(ue),ye.emissiveIntensity=Xt)},fix:async()=>{}};return ce.userData.interactable=ae,r[D]=ae,ae}const u={w:32,d:24,h:8},h=new Rt({map:Vh([8,6]),roughness:.82,metalness:.05}),d=new J(new se(u.w,u.d),h);d.rotation.x=-be/2,d.receiveShadow=!0,c(d),n.push(d);const f=new Rt({map:Br("#c4ccd4",[16,1]),roughness:.6,metalness:.3}),g=new Rt({map:Br("#c4ccd4",[12,1]),roughness:.6,metalness:.3}),v=(D,F,nt,Ct,Vt)=>{const qt=new J(new se(D,u.h),Vt);qt.position.set(F,u.h/2,nt),qt.rotation.y=Ct,qt.receiveShadow=!0,c(qt,!0);const Ot=new J(new se(D,1.2),t.navy);return Ot.position.set(F,.6,nt),Ot.rotation.y=Ct,Ot.translateZ(.02),c(Ot),qt};v(u.w,0,-24/2,0,f),v(u.w,0,u.d/2,be,f),v(u.d,-32/2,0,be/2,g),v(u.d,u.w/2,0,-be/2,g);for(const D of[-1,1])for(let F=-9;F<=9;F+=4.5){const nt=new J(new se(3.2,1.3),t.glassBlue);nt.position.set(D*(u.w/2-.03),6.3,F),nt.rotation.y=-D*be/2,c(nt)}const m=new J(new se(u.w,u.d),new Rt({color:4080973,roughness:.9}));m.rotation.x=be/2,m.position.y=u.h,c(m);for(let D=-9;D<=9;D+=6){const F=Gn(u.w,t.columnBlue,.45,.2);F.position.set(0,7.5,D),c(F)}for(let D=-12;D<=12;D+=4){const F=V(.12,.18,u.d,t.darkSteel,D,7.75,0,{base:!1,cast:!1});c(F)}for(const D of[-12.5,12.5]){for(const nt of[-9,-3,3,9]){const Ct=Hr(7.5,t.columnBlue,.34);Ct.position.set(D,0,nt),c(Ct,!0)}const F=Gn(u.d-1,t.yellow,.5,.25);F.rotation.y=be/2,F.position.set(D,6.3,0),c(F)}const p=V(25.4,.7,.5,t.yellow,0,6.6,-6.5);c(p),c(V(25.4,.7,.5,t.yellow,0,6.6,-5.6));const E=V(.9,.6,1.3,t.darkSteel,4,6.2,-6.05);c(E),c(ve(.012,.012,3.2,t.darkSteel,4,3,-6.05,6)),c(V(.25,.35,.12,t.yellow,4,2.7,-6.05));for(const D of[-8,0,8])for(const F of[-8,-2,4,10]){c(ve(.32,.4,.3,t.darkSteel,D,7,F,16,{cast:!1}));const nt=new J(new Xn(.34,20),t.lamp);nt.rotation.x=be/2,nt.position.set(D,6.99,F),c(nt)}const y=new J(new se(8.4,2.2),t.navy);y.position.set(0,4.8,-24/2+.05),c(y);const _=new J(new se(6.6,6.6*381/1867),new _e({map:Wh(es),transparent:!0}));_.position.set(0,4.8,-24/2+.07),c(_);const U=new Rt({color:15906565,roughness:.6}),A=(D,F,nt,Ct)=>{const Vt=new J(new se(D,F),U);Vt.rotation.x=-be/2,Vt.position.set(nt,.004,Ct),Vt.receiveShadow=!0,c(Vt)};A(.1,22,2.6,0),A(.1,22,4.8,0);for(let D=-10;D<=10;D+=2.5){const F=new J(new Xn(.18,3),U);F.rotation.set(-be/2,0,be/2),F.position.set(3.7,.005,D),c(F)}A(4.4,.08,0,-.95);function P(D,F,nt){const Ct=new zt,Vt=[],qt=F/D*1.15;for(let ae=0;ae<D;ae++){const pe=new J(new se(qt,1.9),t.curtain);pe.position.y=1.1,Ct.add(pe),Vt.push(pe)}const Ot=ae=>-F/2+F/D*(ae+.5),ce=(ae,pe=-F/2)=>{Vt.forEach((ye,ue)=>{const Xt=En(Ot(ue),pe+.08+ue*.055,ae),je=En(0,ue%2?.55:-.55,ae);nt?(ye.position.x=Xt,ye.rotation.y=je):(ye.position.z=Xt,ye.rotation.y=be/2+je)})};return ce(0),{group:Ct,strips:Vt,setOpen:ce}}function C(D,F,{label:nt,frontFull:Ct=!0,rightCurtain:Vt=!1}){const qt=new zt;qt.position.set(D,0,F);const Ot=4,ce=3.5,ae=2.1;for(const[je,Te]of[[-2,-1.75],[2,-1.75],[-2,1.75],[2,1.75]])qt.add(V(.06,ae+.1,.06,t.yellow,je,0,Te));qt.add(V(Ot,.05,.05,t.yellow,0,ae,-1.75),V(Ot,.05,.05,t.yellow,0,ae,1.75)),qt.add(V(.05,.05,ce,t.yellow,-2,ae,0),V(.05,.05,ce,t.yellow,2,ae,0));const pe=V(Ot-.06,2,.04,t.panelGrey,0,.02,-1.72),ye=V(.04,2,ce-.06,t.panelGrey,-1.97,.02,0);qt.add(pe,ye),s.push(pe,ye);let ue=null;Vt||(ue=V(.04,2,ce-.06,t.panelGrey,1.97,.02,0),qt.add(ue),s.push(ue));const Xt=P(Ct?12:6,Ct?Ot:Ot/2,!0);if(Xt.group.position.set(Ct?0:-Ot/4,0,1.75),qt.add(Xt.group),nt){const je=new J(new se(1,.36),new _e({map:Ie({lines:[nt],bg:"#002550",fg:"#ffffff",w:512,h:184})}));je.position.set(0,ae+.3,1.785),qt.add(je),qt.add(V(1.04,.4,.02,t.darkSteel,0,ae+.1,1.76))}return c(qt),qt}C(-5,-3.25,{label:"Bay 1"}),C(8,-3.25,{label:"Bay 3"}),C(0,-3.25,{label:"Bay 2",frontFull:!1,rightCurtain:!0});const x=In(t);x.position.set(8,0,-3.8),x.rotation.y=be,c(x),c(V(1.6,.85,.8,t.darkSteel,8,0,-4.3));const w=new Yn(13623551,0,7,2);w.position.set(8,1.05,-4),c(w);const L=new J(new Be(.03,8,8),new _e({color:15397631}));L.position.copy(w.position),c(L);let z=0,B=!0;o.push(D=>{z-=D,z<=0&&(B=!B,z=B?2.5+Math.random()*3:1.5+Math.random()*2);const F=B?4+Math.random()*5:0;w.intensity=F,L.visible=B});const $=new J(new se(.7,.35),new _e({map:Ie({header:"Warning",lines:["Welding in progress"],headerBg:"#f2b705",w:512,h:256})}));$.position.set(10.08,1.6,-2.2),$.rotation.y=be/2,c($);const rt=new J(new se(.62,.31),new _e({map:Ie({header:"Mandatory",lines:["Eye protection","in this area"],w:512,h:256})}));rt.position.set(-1,1.65,-1.47),c(rt),c(V(.66,.35,.015,t.darkSteel,-1,1.475,-1.485,{cast:!1}));const X=-.3,lt=-3.8,G=.82,yt=V(1.8,.03,.9,t.darkSteel,X,G,lt);c(yt,!0);for(const[D,F]of[[-.85,-.4],[.85,-.4],[-.85,.4],[.85,.4]])c(V(.05,G,.05,t.steel,X+D,0,lt+F));c(V(1.7,.05,.03,t.steel,X,.25,lt-.4)),c(V(.42,.012,.26,t.galv,0,G+.03,lt-.05)),c(V(.42,.14,.012,t.galv,0,G+.042,lt-.05)),c(V(.05,.05,.08,t.copper,.25,G+.03,lt-.05));const bt=1.15,Et=-4.55,Bt=new zt;Bt.add(V(.45,.72,.58,t.machine,0,.08,0)),Bt.add(V(.36,.34,.5,t.machine,0,.8,0)),Bt.add(V(.37,.05,.51,t.orange,0,.8,0));for(const[D,F]of[[-.18,-.24],[.18,-.24],[-.18,.24],[.18,.24]])Bt.add(ve(.04,.04,.03,t.rubber,D,.04,F,10,{base:!1}));const ie=new J(new se(.16,.08),new Rt({color:731666,emissive:3342186,emissiveIntensity:1.4}));ie.position.set(0,.62,.292),Bt.add(ie),Bt.add(ve(.025,.025,.04,t.black,-.1,.3,.3,10,{base:!1})),Bt.children.at(-1).rotation.x=be/2,Bt.position.set(bt,0,Et),c(Bt,!0),c(ve(.05,.05,2.6,t.galv,-.3,0,-5.08,12)),c(ve(.11,.11,4.9,t.galv,-.3,2.6,-5.08,16));const Q=new J(new Be(.035,12,10),new Rt({color:4194304,emissive:16722458,emissiveIntensity:2}));Q.position.set(-.62,1.55,-4.96),c(Q),c(V(.18,.22,.08,t.machine,-.62,1.35,-4.97));const ft=new zt;ft.position.set(-.3,2.45,-4.98);const pt=1,mt=1.45,Pt=new zt;ft.add(Pt),Pt.add(new J(new Be(.1,14,10),t.darkSteel)),Pt.add(ve(.075,.075,pt,t.galv,0,0,0,14));const jt=new zt;jt.position.y=pt,Pt.add(jt),jt.add(new J(new Be(.09,14,10),t.darkSteel)),jt.add(ve(.068,.068,mt,t.galv,0,0,0,14));const Zt=t.yellow.clone();Zt.side=Je;const Jt=new J(new sn(.25,.07,.32,24,1,!0),Zt);Jt.position.y=mt+.16,Jt.castShadow=!0,jt.add(Jt);const it=[.12,.5],ut=[1,1.95];Pt.rotation.x=it[0],jt.rotation.x=it[1],c(ft);const R=l("VEN-01","hazard",ft,[.9,2.8,1.5],[-.3,3.7,-4.4],[-.3,5.3,-3.9]);R.label="VEN-01",R.fix=()=>(Q.material.emissive.set(2883434),Q.material.color.set(13056),a(1.8,D=>{Pt.rotation.x=En(it[0],ut[0],D),jt.rotation.x=En(it[1],ut[1],D)}));const It=P(11,3.5,!1);It.group.position.set(2,0,-3.25),It.setOpen(1,-1.75),c(It.group);const ht=l("RAD-01","hazard",It.group,[.35,2,1.2],[2,1.1,-4.45],[2,2.5,-4.4]);ht.fix=()=>a(1.6,D=>It.setOpen(1-D,-1.75));const ot=new zt;ot.add(ve(.115,.115,1.25,t.cylinder,0,0,0,24));const gt=new J(new Be(.115,24,12,0,be*2,0,be/2),t.cylinder);gt.position.y=1.25,gt.castShadow=!0,ot.add(gt);const Yt=new J(new sn(.117,.117,.22,24,1,!0),new Rt({map:mn(512,96,(D,F,nt)=>{D.fillStyle="#ffffff",D.fillRect(0,0,F,nt),D.fillStyle="#002550",D.font="900 44px Gilroy, Arial, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText("SHIELDING GAS",F/2,nt/2+2)}),roughness:.6}));Yt.position.y=.85,ot.add(Yt),ot.add(ve(.025,.03,.12,t.copper,0,1.33,0,12));const Dt=V(.07,.08,.07,t.copper,.06,1.38,0);ot.add(Dt);for(const D of[-.04,.04]){const F=ve(.035,.035,.025,t.white,.1,1.46,D,16,{base:!1});F.rotation.z=be/2,ot.add(F)}const T={p:new S(1.45,0,-3),rz:.07},M={p:new S(1.72,0,-4.66)};ot.position.copy(T.p),ot.rotation.z=T.rz,c(ot),c(V(.3,.06,.08,t.darkSteel,1.72,.9,-4.92)),c(V(.3,.06,.08,t.darkSteel,1.72,.5,-4.92));const H=new zt;for(let D=0;D<7;D++){const F=new J(new qn(.018,.005,6,10),t.darkSteel);F.position.set(1.72,.88-D*.03,-4.86),F.rotation.y=D%2?be/2:0,H.add(F)}c(H);const Z=new zt;for(const D of[.92,.52]){const F=new J(new qn(.13,.009,6,32),t.darkSteel);F.rotation.x=be/2,F.position.set(M.p.x,D,M.p.z),Z.add(F)}Z.visible=!1,c(Z);let st=null;const et=()=>{st&&(e.remove(st),st.geometry.dispose()),ot.updateMatrixWorld(!0);const D=new S(.1,1.38,0).applyMatrix4(ot.matrixWorld),F=new S(bt+.18,.95,Et+.1),nt=D.clone().lerp(F,.5);nt.y=Math.min(D.y,F.y)-.35,st=cn([D,nt,F],.008,t.black,24),e.add(st)};et();const Tt=l("GAS-01","hazard",ot,[.42,1.6,.42],[T.p.x,.8,T.p.z],[T.p.x,1.9,T.p.z]);Tt.fix=async()=>{await a(1.4,D=>{ot.position.lerpVectors(T.p,M.p,D),ot.position.y=Math.sin(D*be)*.03,ot.rotation.z=En(T.rz,0,D),et()}),H.visible=!1,Z.visible=!0,i.shadowsDirty()};const at=new zt,Ut=ve(.024,.02,.17,t.black,0,0,0,12,{base:!1});Ut.rotation.z=be/2,at.add(Ut);const Kt=V(.07,.03,.035,t.copper,.11,-.012,0,{base:!1});at.add(Kt);const dt=ve(.0035,.0035,.3,t.steel,.16,-.012,.13,6,{base:!1});dt.rotation.x=be/2,at.add(dt);const At={p:new S(.4,G+.05,-3.55),r:new xn(0,.4,0)},Gt={p:new S(-1.86,1.25,-3.05),r:new xn(0,0,-be/2)};at.position.copy(At.p),at.rotation.copy(At.r),c(at),c(V(.05,.12,.05,t.black,-1.92,1.32,-3.05)),c(V(.09,.025,.04,t.black,-1.89,1.27,-3.05));let $t=null;const Nt=()=>{$t&&(e.remove($t),$t.geometry.dispose()),at.updateMatrixWorld(!0);const D=new S(-.085,0,0).applyMatrix4(at.matrixWorld),F=new S(bt-.1,.3,Et+.3),nt=[D,new S(D.x-.05,G+.05,D.z+.15),new S((D.x+F.x)/2,.03,-3.2),new S(F.x-.1,.03,F.z+.3),F];at.position.x<-1&&nt.splice(1,1,new S(D.x+.1,.6,D.z+.2)),$t=cn(nt,.012,t.rubber,48),e.add($t)};Nt();const Qt=l("ELE-02","hazard",at,[.6,.25,.45],[At.p.x,At.p.y,At.p.z],[At.p.x,1.35,At.p.z]);Qt.fix=async()=>{dt.visible=!1;const D=new ci().setFromEuler(At.r),F=new ci().setFromEuler(Gt.r);await a(1.4,nt=>{at.position.lerpVectors(At.p,Gt.p,nt),at.position.y+=Math.sin(nt*be)*.25,at.quaternion.slerpQuaternions(D,F,nt),Nt()}),ie.material.emissive.set(0),ie.material.color.set(1118481)};const Ht=new zt,ee=new Rt({map:mn(256,128,(D,F,nt)=>{D.fillStyle="#c21f1f",D.fillRect(0,0,F,nt),D.fillStyle="#ffffff",D.fillRect(0,nt*.3,F,nt*.4),D.fillStyle="#c21f1f",D.font="900 30px Gilroy, Arial, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText("DEGREASER",F/4,nt/2+1),D.fillText("DEGREASER",3*F/4,nt/2+1)}),roughness:.4,metalness:.5}),I=new J(new sn(.065,.065,.2,20),ee);I.position.y=.1,I.castShadow=!0,Ht.add(I);const St=ve(.03,.03,.02,t.darkSteel,.11,.01,.05,12,{base:!1});St.rotation.x=be/2,Ht.add(St),Ht.position.set(-.95,G+.015,-3.55),c(Ht);const j=l("FAC-05","hazard",Ht,[.36,.32,.36],[-.92,G+.13,-3.52],[-.95,1.4,-3.55]);j.fix=async()=>{await a(.5,F=>{St.position.set(En(.11,0,F),En(.01,.21,F),En(.05,0,F)),St.rotation.x=En(be/2,0,F)});const D=Ht.position.clone();await a(1,F=>{Ht.position.set(D.x,D.y+F*.5,D.z+F*.8),Ht.scale.setScalar(1-F)}),Ht.visible=!1};const tt=new zt,_t=.5,xt=.32,Wt=.4;tt.add(V(_t,.01,Wt,t.cardboard,0,0,0)),tt.add(V(_t,xt,.01,t.cardboard,0,0,-Wt/2),V(_t,xt,.01,t.cardboard,0,0,Wt/2)),tt.add(V(.01,xt,Wt,t.cardboard,-_t/2,0,0),V(.01,xt,Wt,t.cardboard,_t/2,0,0));const fe=V(_t,.01,.18,t.cardboard,0,xt,Wt/2+.07,{base:!1});fe.rotation.x=.5,tt.add(fe);for(let D=0;D<6;D++){const F=new J(new tc(.09,0),D%2?t.rag:t.ragBlue);F.position.set(-.15+D%3*.15,xt-.02+(D>2?.04:0),-.08+(D>2?.12:0)),F.scale.set(1.2,.6,1),F.rotation.set(D,D*2,D*.5),F.castShadow=!0,tt.add(F)}const oe=new S(-.8,0,-3.6);tt.position.copy(oe),c(tt);const W=new S(1.4,0,-.85);c(ve(.24,.22,.7,t.red,W.x,0,W.z,20));const wt=new zt;wt.add(ve(.25,.25,.04,t.darkSteel,0,0,0,20)),wt.position.set(W.x-.25,.7,W.z),wt.children[0].position.x=.25,wt.rotation.z=1.2,c(wt);const ne=new J(new se(.34,.17),new _e({map:Ie({lines:["Oily waste"],bg:"#ffffff",w:256,h:128})}));ne.position.set(W.x,.45,W.z+.235),c(ne);const xe=l("AREA-01","hazard",tt,[.7,.55,.6],[oe.x,.25,oe.z],[oe.x,1.15,oe.z+.1]);xe.fix=async()=>{const D=tt.position.clone(),F=new S(W.x,.75,W.z);await a(1.6,nt=>{tt.position.lerpVectors(D,F,nt),tt.position.y+=Math.sin(nt*be)*.9,tt.scale.setScalar(En(1,.35,nt))}),tt.visible=!1,await a(.4,nt=>{wt.rotation.z=En(1.2,0,nt)})};const we=new zt;we.add(V(.08,1.3,.08,t.darkSteel,0,0,-.1)),we.add(ve(.095,.095,.5,t.red,0,.62,0,20)),we.add(ve(.03,.03,.1,t.black,0,1.12,0,10)),we.add(V(.12,.02,.03,t.black,.04,1.22,0));const Re=cn([new S(.03,1.18,.02),new S(.12,1,.08),new S(.1,.75,.1)],.01,t.black,12);we.add(Re);const Mt=new J(new se(.4,.2),new _e({map:Ie({lines:["Fire","extinguisher"],bg:"#c21f1f",fg:"#ffffff",w:256,h:128})}));Mt.position.set(0,1.55,-.055),we.add(Mt),we.position.set(-2.5,0,-1.3),c(we);const re=new zt;for(let D=0;D<3;D++){const F=Ua(t);F.position.y=D*.145,F.rotation.y=(D-1)*.04,re.add(F)}re.add(V(.5,.4,.4,t.cardboard,-.25,.435,.05),V(.4,.3,.35,t.cardboard,.3,.435,-.05));const Se=new S(-2.5,0,-.62),me=new S(-9.5,0,1.5);re.position.copy(Se),c(re);const Oe=l("AREA-02","hazard",[we,re],[1.3,1.6,1.3],[-2.5,.8,-.95],[-2.5,2,-1]);Oe.fix=()=>a(2,D=>{re.position.lerpVectors(Se,me,D),re.rotation.y=D*.6});const ct=new zt;ct.add(V(.9,1.9,.5,t.lockerGrey,0,0,0)),ct.add(V(.005,1.8,.01,t.darkSteel,0,.05,.255));for(const D of[-.22,.22]){for(let F=0;F<5;F++)ct.add(V(.2,.012,.01,t.darkSteel,D,1.55+F*.04,.256));ct.add(V(.02,.12,.03,t.darkSteel,D>0?.05:-.05,1,.26))}const te=new J(new se(.8,.3),new _e({map:Ie({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));te.position.set(0,2.15,.02),ct.add(te);const kt=new zt,ge=new J(new Be(.15,18,12,0,be*2,0,be/1.6),t.navy);ge.scale.set(1,1.15,1.1),ge.rotation.x=be/2.4,kt.add(ge);const Ce=V(.1,.05,.01,new Rt({color:793100,roughness:.1,metalness:.6}),0,.04,.16,{base:!1});kt.add(Ce),kt.position.set(-.2,2,0),ct.add(kt);const hn=V(.08,.7,.5,new Rt({color:7031339,roughness:.9}),.5,.9,0);ct.add(hn),ct.position.set(-3.4,0,1.8),ct.rotation.y=be/2,c(ct,!0),l("PPE","ppe",ct,[.7,2.2,1.2],[-3.35,1.05,1.8],[-3.4,2.6,1.8]);for(const D of[-12,-9,-6]){const F=Hr(3.2,t.navy,.22);F.position.set(D,0,-10.9),c(F);for(let nt=.8;nt<3.2;nt+=.8)c(V(.12,.08,1,t.navy,D,nt,-10.4))}for(let D=.88;D<3.2;D+=.8)for(let F=0;F<3;F++){const nt=Gn(7.5,t.darkSteel,.14,.08);nt.position.set(-9,D+.07,-10.1-F*.22),c(nt)}for(const[D,F,nt]of[[-9.5,4.5,8],[-11.5,7.5,5],[11.5,7,6]]){const Ct=Ua(t);Ct.position.set(D,0,F),c(Ct);for(let Vt=0;Vt<nt;Vt++)c(V(1.15,.02,.78,t.steel,D,.145+Vt*.022,F))}for(const D of[6.5,10.5])c(V(.08,.7,.08,t.navy,D,0,4.6),V(.08,.7,.08,t.navy,D,0,5.4)),c(V(.1,.08,.9,t.navy,D,.7,5));const b=Gn(5.5,t.columnBlue,.6,.3);b.position.set(8.5,1.08,5),c(b),c(V(1.6,.85,.7,t.darkSteel,7.5,0,9.5),V(.2,.25,.2,t.machine,7.2,.85,9.5));const N=In(t);N.position.set(3.7,0,0),c(N),o.push((D,F)=>{const nt=-3+5*Math.sin(F*.18),Ct=5*.18*Math.cos(F*.18);N.position.z=nt,N.rotation.y=Ct>0?0:be;const Vt=Math.sin(F*6)*.45*Math.min(1,Math.abs(Ct));N.userData.legs[0].rotation.x=Vt,N.userData.legs[1].rotation.x=-Vt,N.userData.arms[0].rotation.x=-Vt*.6,N.userData.arms[1].rotation.x=Vt*.6}),N.traverse(D=>{D.castShadow=!1});const Y=new Jr(15331576,7038560,1.4);c(Y);const q=new Qr(16774890,1.8);q.position.set(7,14,8),q.target.position.set(0,0,-3),q.castShadow=!0,q.shadow.mapSize.set(2048,2048),Object.assign(q.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:1,far:40}),q.shadow.bias=-4e-4,q.shadow.normalBias=.02,c(q),c(q.target);for(const[D,F]of[[-6,-6],[6,-6],[-6,4],[6,4]]){const nt=new Yn(16773596,30,18,1.6);nt.position.set(D,6.6,F),c(nt)}const k=new Qg(16777215,25,8,.9,.5,1.5);return k.position.set(0,4.5,-2.5),k.target.position.set(0,0,-3.6),c(k),c(k.target),{root:e,floors:n,blockers:s,interactables:r,spawn:{position:new S(0,0,3.6),yaw:0},weldSpot:{center:new S(-.45,G+.03,-3.52),standAt:new S(-.45,0,-3.02),bench:{y:G+.03,minX:X-.9,maxX:X+.9,minZ:lt-.45,maxZ:lt+.45}},bounds:{minX:-15.4,maxX:15.4,minZ:-11.4,maxZ:11.4},update(D,F){for(const nt of o)nt(D,F)}}}const Lt=Math.PI,Fe=(i,t,e)=>i+(t-i)*e,pv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,mv=new _e({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function sc(i,t){const e=new zt;e.name=t;const n=[],s=[],r={},o=[],a=(u,h)=>i.tween(u,d=>{h(pv(d)),i.shadowsDirty()}),c=(u,h=!1)=>(e.add(u),h&&s.push(u),u);function l(u,h,d,f,g,v){const m=[];for(const y of[].concat(d))y.traverse(_=>{_.isMesh&&_.material.emissive&&(_.material=_.material.clone(),m.push({m:_.material,e:_.material.emissive.clone(),i:_.material.emissiveIntensity}))});const p=new J(new He(...f),mv);p.position.set(...g),e.add(p);const E={id:u,kind:h,group:d,hit:p,anchor:new S(...v),done:!1,setHighlight(y){for(const{m:_,e:U,i:A}of m)y?(_.emissive.set(16739072),_.emissiveIntensity=.55):(_.emissive.copy(U),_.emissiveIntensity=A)},fix:async()=>{}};return p.userData.interactable=E,r[u]=E,E}return{root:e,floors:n,blockers:s,interactables:r,updaters:o,tween:a,add:c,makeInteractive:l}}function gv(i=1){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function ns(i,t,{repeat:e=[1,1],seed:n=3,count:s=9e3,blotches:r=30,size:o=2}={}){return mn(512,512,(a,c,l)=>{const u=gv(n);a.fillStyle=i,a.fillRect(0,0,c,l);for(let h=0;h<r;h++){const d=u()*c,f=u()*l,g=30+u()*120,v=a.createRadialGradient(d,f,0,d,f,g);v.addColorStop(0,t[Math.floor(u()*t.length)]+"33"),v.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=v,a.fillRect(d-g,f-g,g*2,g*2)}for(let h=0;h<s;h++){a.fillStyle=t[Math.floor(u()*t.length)],a.globalAlpha=.15+u()*.5;const d=1+u()*o;a.fillRect(u()*c,u()*l,d,d)}a.globalAlpha=1},{repeat:e})}function Cl(i,{color:t="#f2f4f6",w:e=512,h:n=256,font:s=900}={}){return mn(e,n,r=>{r.clearRect(0,0,e,n),r.fillStyle=t;let o=Math.floor(n*.6);for(r.font=`${s} ${o}px Gilroy, Arial, sans-serif`;r.measureText(i).width>e*.92&&o>10;)o-=4,r.font=`${s} ${o}px Gilroy, Arial, sans-serif`;r.textAlign="center",r.textBaseline="middle",r.fillText(i,e/2,n/2+4)})}function Xh(i){const t=new zt,e=new J(new sn(.09,.09,.48,18),i.red);e.position.y=.24,e.castShadow=!0,t.add(e);const n=new J(new sn(.03,.03,.08,10),i.black);n.position.y=.52,t.add(n);const s=new J(new He(.12,.02,.03),i.black);return s.position.set(.04,.58,0),t.add(s),t}function vv(i,t,e){const n=new zt,s=mn(256,32,(o,a,c)=>{for(let l=0;l<8;l++)o.fillStyle=l%2?"#c21f1f":"#ffffff",o.beginPath(),o.moveTo(l*32,0),o.lineTo(l*32+32,0),o.lineTo(l*32+16,c),o.lineTo(l*32-16,c),o.fill()},{repeat:[4,1]}),r=new Rt({map:s,side:Je,roughness:.6});for(let o=0;o<i.length;o++){const[a,c]=i[o],l=new J(new sn(.025,.025,1,8),e.orange);l.position.set(a,t+.5,c),l.castShadow=!0,n.add(l);const u=new J(new sn(.12,.14,.05,12),e.black);if(u.position.set(a,t+.025,c),n.add(u),o>0){const[h,d]=i[o-1],f=Math.hypot(a-h,c-d),g=new J(new se(f,.07),r);g.position.set((a+h)/2,t+.9,(c+d)/2),g.rotation.y=-Math.atan2(c-d,a-h),n.add(g)}}return n}function _v(i){const t=eo(),e=sc(i,"construction"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:c,add:l,makeInteractive:u}=e,h=4,d=new J(new se(140,140),new Rt({map:ns("#7d766b",["#5b554c","#9a9284","#4a463f","#a8a294"],{repeat:[28,28],seed:11}),roughness:.95}));d.rotation.x=-Lt/2,d.receiveShadow=!0,l(d,!0);const f=new Rt({color:4016727,roughness:.06,metalness:.4,transparent:!0,opacity:.85}),g=(W,wt,ne,xe,we=.01)=>{const Re=new J(new Xn(1,28),f);return Re.rotation.x=-Lt/2,Re.scale.set(ne,xe,1),Re.position.set(W,we,wt),Re.receiveShadow=!0,l(Re),Re};g(-6,-10,2.2,1.2),g(9,-9,1.4,.9),g(-12,6,2.6,1.5),g(4,12,1.8,1.1);const v=new Rt({color:10134442,roughness:.6,metalness:.6,transparent:!0,opacity:.55,side:Je});for(const[W,wt,ne,xe]of[[0,-22,50,0],[0,22,50,0],[-25,0,44,Lt/2],[25,0,44,Lt/2]]){const we=new J(new se(ne,2),v);we.position.set(W,1,wt),we.rotation.y=xe,l(we);const Re=new J(new se(ne*.6,.9),t.navy);Re.position.set(W,1.1,wt),Re.rotation.y=xe,Re.translateZ(.02),l(Re)}const m=[8885409,10135218,8095894,11055804].map(W=>new Rt({color:W,roughness:.9}));for(let W=0;W<22;W++){const wt=W/22*Lt*2,ne=46+W%3*9,xe=10+W*37%24;l(V(8+W%4*3,xe,8,m[W%4],Math.cos(wt)*ne,0,Math.sin(wt)*ne,{cast:!1}))}const p=new Rt({map:Br("#8f989f",[20,1]),roughness:.55,metalness:.55});p.map.rotation=Lt/2;const E=new J(new He(16,.12,12),p);E.position.set(0,h-.06,0),E.receiveShadow=!0,E.castShadow=!0,l(E),s.push(E),g(2.6,-3.4,.9,.6,h+.005),g(-4.5,1.5,.7,.45,h+.005),g(5.8,3.2,.5,.35,h+.005);for(const W of[-8,0,8])for(const wt of[-6,6]){const ne=Hr(8.6,t.columnBlue,.36);ne.position.set(W,0,wt),l(ne,!0)}for(const W of[h-.3,8.2]){for(const wt of[-6,6]){const ne=Gn(16.4,t.columnBlue,.45,.2);ne.position.set(0,W,wt),l(ne)}for(const wt of[-8,0,8]){const ne=Gn(12.4,t.columnBlue,.45,.2);ne.rotation.y=Lt/2,ne.position.set(wt,W,0),l(ne)}}for(const W of[-3,0,3]){const wt=Gn(16,t.columnBlue,.3,.15);wt.position.set(0,8.1,W),l(wt)}function y(W,wt,ne,xe){const we=new zt,Re=Math.hypot(ne-W,xe-wt),Mt=Math.max(1,Math.round(Re/1.5)),re=-Math.atan2(xe-wt,ne-W);for(let Se=0;Se<=Mt;Se++){const me=Se/Mt;we.add(V(.05,1.05,.05,t.yellow,Fe(W,ne,me),0,Fe(wt,xe,me)))}for(const[Se,me]of[[1,.04],[.5,.04],[0,.15]]){const Oe=V(Re,me,.03,Se===0?t.wood:t.yellow,(W+ne)/2,Se,(wt+xe)/2);Oe.rotation.y=re,we.add(Oe)}return we.position.y=h,we}l(y(-8,-6,-2.2,-6),!0),l(y(2.2,-6,8,-6),!0),l(y(-8,6,8,6),!0),l(y(-8,-6,-8,6),!0),l(y(8,-6,8,6),!0);const _=new J(new se(4.4,.12),new Rt({color:15906565,roughness:.6}));_.rotation.x=-Lt/2,_.position.set(0,h+.004,-5.9),l(_);const U=new zt;for(let W=0;W<14;W++)U.add(V(1,.04,.3,t.galv,0,W*.29,-W*.28));U.add(V(.05,4.2,.05,t.yellow,-.5,0,0),V(.05,4.2,.05,t.yellow,.5,0,0)),U.position.set(-9.2,0,5.2),l(U);for(let W=0;W<6;W++)l(V(2.4,.03,.9,p,5.2,h+W*.032,3.8,{cast:W===5}));for(let W=0;W<9;W++){const wt=ve(.012,.012,3.2,t.rubber,-5.6+W%3*.04,h+.08+Math.floor(W/3)*.04,4.6,6,{base:!1});wt.rotation.z=Lt/2,l(wt)}const A=new zt;A.add(V(1.2,.7,.6,t.orange,0,0,0)),A.add(V(1.22,.04,.62,t.darkSteel,0,.7,0)),A.position.set(3.8,h,4.8),l(A,!0);const P=-.6,C=-4.4,x=.85,w=new zt;w.add(V(1.2,.04,.6,t.darkSteel,0,x-.04,0));for(const[W,wt]of[[-.55,-.25],[.55,-.25],[-.55,.25],[.55,.25]])w.add(V(.05,x-.04,.05,t.steel,W,0,wt));w.position.set(P,h,C),l(w,!0);const L=Gn(1.4,t.columnBlue,.3,.15);L.position.set(0,h+1.1,-5.95),l(L),l(V(.32,.32,.02,t.galv,.7,h+.95,-5.95));const z=new zt;z.add(V(.36,.42,.62,t.machine,0,.06,0)),z.add(V(.37,.04,.63,t.orange,0,.48,0)),z.add(V(.06,.12,.2,t.black,0,.52,0));for(const[W,wt]of[[-.14,-.26],[.14,-.26],[-.14,.26],[.14,.26]])z.add(ve(.035,.035,.06,t.rubber,W,0,wt,10));const B=new S(2.6,h,-3.4),$=new S(3.4,h+.145,-1.8);z.position.copy(B),z.rotation.y=.3,l(z);const rt=Ua(t);rt.position.set(3.4,h,-1.8),l(rt);const X=new zt;for(const[W,wt]of[[-.7,-.5],[.7,-.5],[-.7,.5],[.7,.5]])X.add(V(.04,1.4,.04,t.galv,W,0,wt));const lt=new J(new se(1.6,1.2),new Rt({color:27881,roughness:.7,side:Je}));lt.rotation.x=-Lt/2+.12,lt.position.y=1.42,X.add(lt),X.position.set(3.4,h,-1.8),l(X);const G=u("CON-03","hazard",z,[.8,.9,1],[B.x,h+.4,B.z],[B.x,h+1.3,B.z]);G.fix=()=>c(1.6,W=>{z.position.lerpVectors(B,$,W),z.position.y+=Math.sin(W*Lt)*.25,z.rotation.y=Fe(.3,0,W),pt()});const yt=new Rt({color:15909376,roughness:.45,metalness:.3}),bt=ve(.05,.05,9,yt,1.2,h+.32,-5.45,16,{base:!1});bt.rotation.z=Lt/2,l(bt);for(const W of[-3,0,3,5.5])l(V(.06,.28,.12,t.darkSteel,W,h,-5.45));const Et=new J(new se(.42,.14),new _e({map:Ie({lines:["GAS"],bg:"#f2c200",fg:"#002550",w:256,h:86})}));Et.position.set(-1.6,h+.32,-5.39),l(Et);const Bt=new zt;Bt.add(V(.08,.06,.05,t.copper,0,-.03,0,{base:!1})),Bt.add(V(.02,.1,.05,t.black,.05,.02,0,{base:!1}));const ie=new S(-.9,h+.38,-5.45),Q=new S(-.05,h+x+.03,-4.62);Bt.position.copy(ie),Bt.scale.setScalar(1.7),l(Bt);let ft=null;const pt=()=>{ft&&(n.remove(ft),ft.geometry.dispose()),z.updateMatrixWorld(!0);const W=new S(0,.3,-.31).applyMatrix4(z.matrixWorld),wt=Bt.position.clone(),ne=new S(W.x-.2,h+.03,W.z-.5),xe=new S((W.x+wt.x)/2,h+.03,(W.z+wt.z)/2);ft=cn([W,ne,xe,new S(wt.x+.1,Math.max(h+.03,wt.y-.3),wt.z+.1),wt],.012,t.rubber,48),n.add(ft)};pt();const mt=u("CON-04","hazard",[Bt,bt],[.7,.4,.4],[ie.x,ie.y,ie.z],[ie.x,h+1,ie.z]);mt.fix=()=>c(1.4,W=>{Bt.position.lerpVectors(ie,Q,W),Bt.position.y+=Math.sin(W*Lt)*.3,pt()});const Pt=y(-2.2,-6,2.2,-6),jt=h-1.3;Pt.position.y=jt,Pt.visible=!1,l(Pt);const Zt=new zt,Jt=u("CON-01","hazard",[Zt],[4.4,1.2,.5],[0,h+.6,-5.85],[0,h+1.6,-5.9]),it=_.material;Jt.setHighlight=W=>{it.emissive.set(W?16739072:0),it.emissiveIntensity=W?.8:0},Jt.fix=async()=>{Pt.visible=!0,await c(1.4,W=>{Pt.position.y=Fe(jt,h,W)}),r.push(Pt)};const ut=new zt,R=new Rt({map:Gh(),roughness:.85});for(let W=0;W<4;W++)for(let wt=0;wt<5;wt++)ut.add(V(2.4,.1,.15,R,0,W*.11,-.4+wt*.2));const It=new S(.6,0,-7.6),ht=new S(-14,0,-12);ut.position.copy(It),l(ut);const ot=In(t);ot.position.set(-6,0,-7.2),l(ot);let gt=!0;a.push((W,wt)=>{if(!gt)return;const ne=5*Math.sin(wt*.22),xe=Math.cos(wt*.22);ot.position.x=ne,ot.rotation.y=xe>0?Lt/2:-Lt/2;const we=Math.sin(wt*6)*.45*Math.min(1,Math.abs(xe)*1.5);ot.userData.legs[0].rotation.x=we,ot.userData.legs[1].rotation.x=-we,ot.userData.arms[0].rotation.x=-we*.6,ot.userData.arms[1].rotation.x=we*.6});const Yt=vv([[-3,-6.4],[-3,-9.6],[3.2,-9.6],[3.2,-6.4]],0,t);Yt.visible=!1,l(Yt);const Dt=u("CON-02","hazard",[ut,ot],[6.5,2.2,3.4],[0,1,-8],[0,2.6,-7.8]);Dt.fix=async()=>{gt=!1;const W=ot.position.clone(),wt=ut.position.clone();ot.rotation.y=-Lt/2,await c(2,ne=>{ot.position.set(Fe(W.x,-16,ne),0,Fe(W.z,-10,ne)),ut.position.lerpVectors(wt,ht,ne);const xe=Math.sin(ne*30)*.45;ot.userData.legs[0].rotation.x=xe,ot.userData.legs[1].rotation.x=-xe}),ot.visible=!1,Yt.visible=!0,i.shadowsDirty()};const T=new zt;T.add(V(.05,1.5,.05,t.galv,-.35,0,0),V(.05,1.5,.05,t.galv,.35,0,0));const M=new Rt({map:Ie({header:"Hot work permit",lines:["NOT ISSUED","Fire watch: —"],headerBg:"#c21f1f",w:512,h:384}),roughness:.7}),H=new J(new He(.8,.6,.02),[t.white,t.white,t.white,t.white,M,t.white]);H.position.y=1.35,H.castShadow=!0,T.add(H),T.position.set(-2.6,h,-4.2),T.rotation.y=.35,l(T,!0);const Z=In(t),st=Xh(t);st.position.set(.3,0,.15),Z.add(st),Z.position.set(-2,h,-2.6),Z.rotation.y=Lt+.4,Z.visible=!1,l(Z);const et=u("CON-05","hazard",T,[1,1.8,.5],[-2.6,h+.95,-4.2],[-2.6,h+2.25,-4.2]);et.fix=async()=>{M.map=Ie({header:"Hot work permit",lines:["ISSUED","Fire watch: assigned"],headerBg:"#1f9d55",w:512,h:384}),M.needsUpdate=!0,Z.visible=!0;const W=Z.position.clone();await c(1,wt=>{Z.position.set(W.x,h+(1-wt)*.3,W.z)})};const Tt=new Rt({color:15906565,roughness:.5,metalness:.3,wireframe:!1}),at=new zt;for(const[W,wt]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])at.add(V(.12,26,.12,Tt,W,0,wt,{cast:!1}));for(let W=0;W<26;W+=1.6)at.add(V(1.7,.08,.08,Tt,0,W,-.8,{cast:!1})),at.add(V(1.7,.08,.08,Tt,0,W,.8,{cast:!1})),at.add(V(.08,.08,1.7,Tt,-.8,W,0,{cast:!1})),at.add(V(.08,.08,1.7,Tt,.8,W,0,{cast:!1}));at.position.set(16,0,-14),l(at);const Ut=V(34,.9,.9,Tt,6,26,-14,{cast:!1});l(Ut),l(V(2.4,2,2.4,t.navy,16,26.9,-14,{cast:!1}));const Kt=5.5,dt=ve(.012,.012,1,t.darkSteel,Kt,0,-7.2,6,{base:!1});l(dt);const At=V(.25,.35,.15,t.yellow,Kt,0,-7.2,{base:!1});l(At);const Gt=new zt;Gt.add(ve(.115,.115,1.25,t.cylinder,0,0,0,20)),Gt.add(ve(.025,.03,.12,t.copper,0,1.28,0,10)),Gt.add(V(.08,.08,.08,t.copper,.06,1.36,0));const $t=new Rt({color:2976991,roughness:.8}),Nt=cn([new S(0,1.75,0),new S(.13,.95,0),new S(0,.82,.13),new S(-.13,.82,0),new S(0,1.75,0)],.012,$t,30);Gt.add(Nt);const Qt=new zt;for(const[W,wt]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]])Qt.add(V(.04,1.5,.04,t.orange,W,0,wt));for(const W of[.02,.75,1.48])Qt.add(V(.54,.04,.04,t.orange,0,W,-.25),V(.54,.04,.04,t.orange,0,W,.25),V(.04,.04,.54,t.orange,-.25,W,0),V(.04,.04,.54,t.orange,.25,W,0));Qt.visible=!1;const Ht=new zt;Ht.add(Gt,Qt);const ee=new S(Kt,h+1.6,-7.3),I=new S(5.6,h,-4.6);Ht.position.copy(ee),l(Ht);let St=!0;const j=()=>{const wt=Ht.position.y+(Qt.visible?1.6:1.9);At.position.set(Ht.position.x,wt,Ht.position.z),dt.scale.y=25.5-wt,dt.position.set(Ht.position.x,(25.5+wt)/2,Ht.position.z)};a.push((W,wt)=>{St&&(Ht.rotation.z=Math.sin(wt*.9)*.04,Ht.rotation.y=wt*.15),j()});const tt=u("CON-06","hazard",Ht,[.8,2.2,.8],[ee.x,ee.y+.8,ee.z],[ee.x,ee.y+2.6,ee.z]);tt.fix=async()=>{St=!1,Ht.rotation.set(0,0,0),Nt.visible=!1,Qt.visible=!0,Gt.position.y=.06,await c(2.2,W=>{Ht.position.set(Fe(ee.x,I.x,W),Fe(ee.y,I.y,W)+Math.sin(W*Lt)*.6,Fe(ee.z,I.z,W))}),r.push(Qt)};const _t=new zt;_t.add(V(1,.9,.6,t.lockerGrey,0,0,0)),_t.add(V(1.02,.05,.62,t.orange,0,.9,0));const xt=new J(new se(.7,.26),new _e({map:Ie({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));xt.position.set(0,.55,.305),_t.add(xt);const Wt=new J(new Be(.15,18,12,0,Lt*2,0,Lt/1.6),t.navy);Wt.position.set(-.2,1,0),Wt.scale.set(1,1.1,1.1),_t.add(Wt);const fe=V(.25,.06,.15,new Rt({color:9067059,roughness:.9}),.25,.95,0);_t.add(fe),_t.position.set(-4.6,h,1.6),_t.rotation.y=Lt/2,l(_t,!0),u("PPE","ppe",_t,[.8,1.4,1.2],[-4.6,h+.6,1.6],[-4.6,h+1.8,1.6]),l(new Jr(14674162,7169628,1.7));const oe=new Qr(15987178,1.6);return oe.position.set(-10,22,12),oe.target.position.set(0,h,-2),oe.castShadow=!0,oe.shadow.mapSize.set(2048,2048),Object.assign(oe.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:60}),oe.shadow.bias=-4e-4,oe.shadow.normalBias=.02,l(oe),l(oe.target),{root:n,floors:s,blockers:r,interactables:o,floorY:h,spawn:{position:new S(0,h,3.4),yaw:0},bounds:{minX:-7.4,maxX:7.4,minZ:-5.4,maxZ:5.4},atmosphere:{background:12175574,fog:[12175574,30,110],envIntensity:.5,exposure:1},weldSpot:{center:new S(P+.05,h+x,C+.12),standAt:new S(P+.05,h,C+.62),bench:{y:h+x,minX:P-.6,maxX:P+.6,minZ:C-.3,maxZ:C+.3}},update(W,wt){for(const ne of a)ne(W,wt)}}}function xv(i){const t=eo(),e=sc(i,"shipyard"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:c,add:l,makeInteractive:u}=e,h=-1.35,d={w:40,d:30,h:14},f=new J(new se(d.w,d.d),new Rt({map:Vh([10,8]),roughness:.85}));f.rotation.x=-Lt/2,f.position.y=h-.3,f.receiveShadow=!0,l(f,!0);const g=new Rt({map:Br("#b9c2ca",[20,1]),roughness:.6,metalness:.3});for(const[ct,te,kt,ge]of[[d.w,0,-30/2,0],[d.w,0,d.d/2,Lt],[d.d,-40/2,0,Lt/2],[d.d,d.w/2,0,-Lt/2]]){const Ce=new J(new se(ct,d.h),g);Ce.position.set(te,h-.3+d.h/2,kt),Ce.rotation.y=ge,l(Ce,!0)}const v=new J(new se(d.w,d.d),new Rt({color:4080973,roughness:.9}));v.rotation.x=Lt/2,v.position.y=h-.3+d.h,l(v);for(const ct of[-18,-9,0,9,18])for(const te of[-14,14]){const kt=Hr(d.h,t.columnBlue,.5);kt.position.set(ct,h-.3,te),l(kt,!0)}for(const ct of[-11,-10])l(V(d.w-2,.9,.5,t.yellow,0,10,ct,{cast:!1}));l(V(1.6,1,2.2,t.darkSteel,-5,9.4,-10.5,{cast:!1}));for(const ct of[-12,0,12])for(const te of[-8,2,10]){const kt=new J(new Xn(.45,20),t.lamp);kt.rotation.x=Lt/2,kt.position.set(ct,12.5,te),l(kt)}const m=new J(new se(9,2.3),t.navy);m.position.set(0,8.5,d.d/2-.05),m.rotation.y=Lt,l(m);const p=new J(new se(7,7*381/1867),new _e({map:Wh(es),transparent:!0}));p.position.set(0,8.5,d.d/2-.07),p.rotation.y=Lt,l(p);const E=new Rt({map:ns("#7b4a3a",["#5e3529","#8f5b48","#6b4436","#4a2a20"],{repeat:[6,2],seed:5}),roughness:.7,metalness:.3}),y=new Oh;y.moveTo(-7,6),y.lineTo(7,6),y.lineTo(7,2.5),y.quadraticCurveTo(7,0,4,0),y.lineTo(-4,0),y.quadraticCurveTo(-7,0,-7,2.5),y.closePath();const _=new J(new Qa(y,{depth:4.5,bevelEnabled:!1}),E);_.position.set(0,h+.6,-14.6),_.castShadow=!0,_.receiveShadow=!0,l(_,!0);const U=new Rt({color:9147547,roughness:.6,metalness:.3}),A=V(6,2.6,3.5,U,-2,h+6.6,-12.4);l(A);for(let ct=-4;ct<=4;ct+=2)l(V(1.2,.9,1.2,t.wood,ct,h-.3,-12.4));const P=new Rt({map:ns("#8a9298",["#6d757b","#a0a8ad","#7a6a5e","#5b6369"],{repeat:[6,5],seed:9}),roughness:.55,metalness:.55}),C={minX:-9.5,maxX:9.5,minZ:-8,maxZ:6},x={minX:-3.2,maxX:4.2,minZ:-5,maxZ:-.8},w=(ct,te,kt,ge)=>{const Ce=new J(new He(te-ct,.04,ge-kt),P);return Ce.position.set((ct+te)/2,-.02,(kt+ge)/2),Ce.receiveShadow=!0,Ce.castShadow=!0,l(Ce),s.push(Ce),Ce};w(C.minX,C.maxX,x.maxZ,C.maxZ),w(C.minX,C.maxX,C.minZ,x.minZ),w(C.minX,x.minX,x.minZ,x.maxZ),w(x.maxX,C.maxX,x.minZ,x.maxZ);const L=new Rt({color:7305344,roughness:.6,metalness:.5});l(V(C.maxX-C.minX,-h+.3,.04,L,0,h-.3,C.maxZ),!0),l(V(C.maxX-C.minX,-h+.3,.04,L,0,h-.3,C.minZ),!0),l(V(.04,-h+.3,C.maxZ-C.minZ,L,C.minX,h-.3,0),!0),l(V(.04,-h+.3,C.maxZ-C.minZ,L,C.maxX,h-.3,0),!0);for(const[ct,te,kt,ge]of[[C.minX,C.minZ,C.maxX,C.minZ],[C.minX,C.maxZ,C.maxX,C.maxZ],[C.minX,C.minZ,C.minX,C.maxZ],[C.maxX,C.minZ,C.maxX,C.maxZ]]){const Ce=Math.hypot(kt-ct,ge-te),hn=-Math.atan2(ge-te,kt-ct),b=V(Ce,.04,.04,t.yellow,(ct+kt)/2,1,(te+ge)/2);b.rotation.y=hn,l(b);const N=Math.round(Ce/1.8);for(let Y=0;Y<=N;Y++)l(V(.05,1.02,.05,t.yellow,Fe(ct,kt,Y/N),0,Fe(te,ge,Y/N)))}const z=new J(new He(x.maxX-x.minX,.02,x.maxZ-x.minZ),new Rt({color:13624309,roughness:.05,metalness:.1,transparent:!0,opacity:.12,depthWrite:!1}));z.position.set((x.minX+x.maxX)/2,-.01,(x.minZ+x.maxZ)/2),l(z),s.push(z);const B=mn(256,32,(ct,te,kt)=>{ct.fillStyle="#f2b705",ct.fillRect(0,0,te,kt),ct.fillStyle="#1a1c1f";for(let ge=-1;ge<9;ge++)ct.beginPath(),ct.moveTo(ge*32,kt),ct.lineTo(ge*32+16,kt),ct.lineTo(ge*32+32,0),ct.lineTo(ge*32+16,0),ct.fill()},{repeat:[8,1]}),$=new Rt({map:B,roughness:.6});for(const[ct,te,kt,ge]of[[(x.minX+x.maxX)/2,x.minZ,x.maxX-x.minX+.2,.1],[(x.minX+x.maxX)/2,x.maxZ,x.maxX-x.minX+.2,.1],[x.minX,(x.minZ+x.maxZ)/2,.1,x.maxZ-x.minZ],[x.maxX,(x.minZ+x.maxZ)/2,.1,x.maxZ-x.minZ]]){const Ce=V(kt,.012,ge,$,ct,0,te,{cast:!1});l(Ce)}const rt=new J(new se(1.6,.4),new _e({map:Ie({lines:["Training view: tank 4P below"],bg:"#002550",fg:"#ffffff",w:768,h:192}),transparent:!0}));rt.rotation.x=-Lt/2,rt.position.set(-1.6,.008,-.55),l(rt);const X=new Rt({color:12107688,roughness:.7,metalness:.3}),lt=new J(new He(x.maxX-x.minX+1,.04,6.2),X);lt.position.set((x.minX+x.maxX)/2,h-.02,-2.2),lt.receiveShadow=!0,l(lt);const G=(ct,te,kt,ge)=>{const Ce=V(kt,-h,ge,X,ct,h,te);return Ce.receiveShadow=!0,l(Ce),Ce};G((x.minX+x.maxX)/2,-5.3,x.maxX-x.minX+1,.04),G((x.minX+x.maxX)/2,.85,x.maxX-x.minX+1,.04),G(x.minX-.4,-2.2,.04,6.2),G(x.maxX+.4,-2.2,.04,6.2);const yt=1;G(yt,-2.2,.04,6.2);for(let ct=-4.6;ct<.6;ct+=.7)l(V(x.maxX-x.minX+1,.12,.012,X,(x.minX+x.maxX)/2,h+.02,ct));const bt=new J(new se(.05,1),new _e({color:16777215}));bt.position.set(yt-.025,h+.65,-3),bt.rotation.y=-Lt/2,l(bt);const Et=new Yn(16773590,6,7,1.6);Et.position.set(-1,-.25,-2.6),l(Et),l(ve(.08,.06,.18,t.yellow,-1,-.45,-2.6,12)),l(cn([new S(-1,-.05,.2),new S(-1,h+.05,0),new S(.2,h+.03,-2.4),new S(.7,h+.03,-2.9)],.015,t.rubber,40));const Bt=new J(new se(1.1,.55),new _e({map:Cl("TANK 4P"),transparent:!0}));Bt.rotation.x=-Lt/2,Bt.position.set(-1,.006,1.2),l(Bt);const ie=new Rt({color:10134442,roughness:.4,metalness:.8}),Q=new Rt({color:15258474,roughness:.95});for(const ct of[-4.2,-3,-1.8]){l(V(2.6,.04,.4,ie,2.6,h+.7,ct));for(let te=0;te<5;te++){const kt=ve(.018,.018,2.6,[t.black,t.red,t.navy][te%3],2.6,h+.76,ct-.15+te*.07,8,{base:!1});kt.rotation.z=Lt/2,l(kt)}}for(let ct=-4.8;ct<.4;ct+=1)l(V(.08,.9,.95,Q,yt+.07,h+.15,ct+.48));const ft=new Yn(14673663,2.5,5,1.6);ft.position.set(2.8,-.3,-2.6),l(ft);const pt=new S(-1,0,.2),mt=new J(new Xn(1,28),new _e({color:724240}));mt.rotation.x=-Lt/2,mt.scale.set(.42,.28,1),mt.position.set(pt.x,.004,pt.z),l(mt);const Pt=new J(new qn(1,.08,8,28),t.darkSteel);Pt.rotation.x=Lt/2,Pt.scale.set(.44,.3,.4),Pt.position.set(pt.x,.03,pt.z),l(Pt);const jt=V(.9,.03,.62,t.darkSteel,pt.x-1,0,pt.z+.1);l(jt);const Zt=new zt;Zt.add(V(.05,1.4,.05,t.galv,-.33,0,0),V(.05,1.4,.05,t.galv,.33,0,0));const Jt=new Rt({map:Ie({header:"Confined space entry",lines:["Permit: —","Attendant: —"],headerBg:"#c21f1f",w:512,h:384}),roughness:.7}),it=new J(new He(.76,.57,.02),[t.white,t.white,t.white,t.white,Jt,t.white]);it.position.y=1.25,Zt.add(it),Zt.position.set(-2.4,0,1),Zt.rotation.y=.5,l(Zt,!0);const ut=In(t),R=V(.05,.12,.03,t.black,.22,1.25,.12);ut.add(R),ut.position.set(-1.7,0,.95),ut.rotation.y=Lt+.6,ut.visible=!1,l(ut);const It=u("SHP-01","hazard",[Zt,Pt],[2.2,1.6,1.2],[-1.8,.8,.6],[-2,2.2,.7]);It.fix=async()=>{Jt.map=Ie({header:"Confined space entry",lines:["Permit: valid","Attendant: on duty"],headerBg:"#1f9d55",w:512,h:384}),Jt.needsUpdate=!0,ut.visible=!0,await c(.8,ct=>{ut.position.y=(1-ct)*.3})};const ht=new zt;ht.add(V(.04,.95,.04,t.galv,0,0,0));const ot=new zt;ot.add(V(.14,.22,.06,t.yellow,0,0,0));const gt=new _e({map:Ie({lines:["– – –"],bg:"#1a1c1f",fg:"#9aa3aa",w:256,h:160})}),Yt=new J(new se(.1,.065),gt);Yt.position.set(0,.16,.031),ot.add(Yt),ot.position.y=.95,ht.add(ot);const Dt=cn([new S(0,1,.03),new S(.1,.6,.15),new S(.2,.02,.2),new S(.7,.02,-.1)],.006,t.black,24);ht.add(Dt);const T=new J(new se(.3,.12),new _e({map:Ie({lines:["NOT TESTED"],bg:"#c21f1f",fg:"#ffffff",w:256,h:102})}));T.position.set(0,.75,.03),ht.add(T),ht.position.set(.3,0,1.1),ht.rotation.y=-.3,l(ht);const M=u("SHP-02","hazard",ht,[.5,1.3,.5],[.3,.65,1.1],[.3,1.7,1.1]);M.fix=async()=>{gt.map=Ie({lines:["OK"],bg:"#0b2a12",fg:"#32ff6a",w:256,h:160}),gt.needsUpdate=!0,T.material.map=Ie({lines:["TESTED"],bg:"#1f9d55",fg:"#ffffff",w:256,h:102}),T.material.needsUpdate=!0,await c(1.2,ct=>{ot.rotation.y=Math.sin(ct*Lt*2)*.3})};const H=(ct,te=t.cylinder)=>{const kt=new zt;kt.add(ve(.115,.115,1.25,te,0,0,0,20));const ge=new J(new Be(.115,20,10,0,Lt*2,0,Lt/2),te);ge.position.y=1.25,kt.add(ge),kt.add(ve(.025,.03,.12,t.copper,0,1.33,0,10));const Ce=new J(new sn(.117,.117,.2,20,1,!0),new Rt({map:mn(512,96,(hn,b,N)=>{hn.fillStyle="#ffffff",hn.fillRect(0,0,b,N),hn.fillStyle="#002550",hn.font="900 46px Gilroy, Arial, sans-serif",hn.textAlign="center",hn.textBaseline="middle",hn.fillText(ct,b/2,N/2+2)}),roughness:.6}));return Ce.position.y=.85,kt.add(Ce),kt},Z=H("ARGON"),st=new S(-2.4,h,-3.9),et=new S(-4.6,0,1.9);Z.position.copy(st),Z.rotation.z=.05,l(Z);const Tt=new zt;Tt.add(V(.6,.05,.4,t.darkSteel,0,0,0),V(.05,1.1,.05,t.darkSteel,-.28,0,-.18),V(.05,1.1,.05,t.darkSteel,.28,0,-.18),V(.6,.05,.05,t.darkSteel,0,1.05,-.18));const at=new J(new qn(.13,.009,6,32),t.darkSteel);at.rotation.x=Lt/2,at.position.set(0,.95,0),at.visible=!1,Tt.add(at),Tt.position.set(et.x,0,et.z),l(Tt);const Ut=u("SHP-03","hazard",Z,[.5,1.75,.5],[st.x,h+.85,st.z],[st.x,.6,st.z]);Ut.fix=async()=>{const ct=new S(pt.x,h,pt.z-.1);await c(1,kt=>{Z.position.lerpVectors(st,ct,kt),Z.rotation.z=Fe(.05,0,kt)}),await c(1,kt=>{Z.position.set(pt.x,Fe(h,.1,kt),pt.z)});const te=Z.position.clone();await c(1.2,kt=>{Z.position.lerpVectors(te,et,kt),Z.position.y=Math.sin(kt*Lt)*.15}),at.visible=!0};const Kt=new zt;Kt.add(ve(.32,.32,.45,t.yellow,0,.2,0,24,{base:!1}).rotateZ(Lt/2)),Kt.add(V(.5,.2,.5,t.darkSteel,0,0,0));const dt=new J(new Xn(.3,24),t.black);dt.position.set(-.23,.42,0),dt.rotation.y=-Lt/2,Kt.add(dt),Kt.position.set(-3.6,0,1.4),Kt.rotation.y=.3,l(Kt,!0);const At=new Rt({color:15906565,roughness:.75,side:Je});let Gt=null;const $t=ct=>{const te=new S(Fe(pt.x,.55,ct),Fe(-.25,h+.75,ct),Fe(pt.z,-2.95,ct)),kt=[new S(-3.3,.42,1.25),new S(-2.3,.18,.7),new S(pt.x-.2,.25,pt.z+.1),new S(pt.x,-.1,pt.z)];return ct>.02&&kt.push(new S(Fe(pt.x,-.3,ct),Fe(-.2,h+.6,ct),Fe(pt.z,-1.2,ct))),kt.push(te),kt},Nt=ct=>{Gt&&(n.remove(Gt),Gt.geometry.dispose()),Gt=cn($t(ct),.13,At,48),n.add(Gt)};Nt(0);const Qt=u("SHP-04","hazard",Kt,[1.6,.9,1],[-3,.4,1.1],[-3.2,1.4,1.2]),Ht=Qt.setHighlight;Qt.setHighlight=ct=>{Ht(ct),At.emissive.set(ct?16739072:0),At.emissiveIntensity=ct?.5:0},Qt.fix=()=>c(1.8,ct=>Nt(ct));const ee=H("OXYGEN",new Rt({color:15199471,roughness:.4,metalness:.5}));ee.position.set(1.6,0,1.6),l(ee);const I=In(t);I.position.set(0,0,.55),I.rotation.y=-Lt/2-.4,I.userData.arms[0].rotation.x=-.9,I.userData.arms[1].rotation.x=-.9,l(I);const St=cn([new S(1.6,1.4,1.6),new S(1,.4,1.2),new S(.2,.9,.5),new S(-.5,.5,.3),new S(pt.x+.1,-.2,pt.z-.05)],.012,new Rt({color:3104691,roughness:.6}),40);l(St);const j=new zt,tt=new _e({color:14674175,transparent:!0,opacity:.35,depthWrite:!1});for(let ct=0;ct<6;ct++){const te=new J(new Be(.03,8,6),tt);j.add(te)}j.position.set(pt.x+.1,-.25,pt.z-.05),l(j),a.push((ct,te)=>{j.children.forEach((kt,ge)=>{const Ce=(te*.8+ge/6)%1;kt.position.set(Math.sin(ge*2)*Ce*.2,-Ce*.6,Math.cos(ge*3)*Ce*.2),kt.scale.setScalar(.5+Ce*2)})});const _t=u("SHP-07","hazard",[I,ee],[1.9,1.9,1.3],[.7,.95,1],[.6,2.2,.9]);_t.fix=async()=>{St.visible=!1,j.visible=!1,I.userData.arms[0].rotation.x=0,I.userData.arms[1].rotation.x=0;const ct=I.position.clone();I.rotation.y=0,await c(1.6,te=>{I.position.set(Fe(ct.x,3.2,te),0,Fe(ct.z,4.4,te));const kt=Math.sin(te*24)*.4;I.userData.legs[0].rotation.x=kt,I.userData.legs[1].rotation.x=-kt})};const xt=In(t);xt.scale.setScalar(.72);const Wt=Xh(t);Wt.position.set(.32,0,.1),Wt.scale.setScalar(1/.72*.8),xt.add(Wt),xt.position.set(2.7,h,-2.4),xt.rotation.y=-Lt/2,xt.visible=!1,l(xt);const fe=u("SHP-05","hazard",[],[2.8,1.8,3.6],[2.6,h+.85,-3],[2.6,.6,-3]);fe.setHighlight=ct=>{Q.emissive.set(ct?16739072:0),Q.emissiveIntensity=ct?.4:0,ie.emissive.set(ct?16739072:0),ie.emissiveIntensity=ct?.4:0},fe.fix=async()=>{xt.visible=!0,await c(.8,ct=>{xt.position.y=h+(1-ct)*.2})};const oe=new zt;oe.add(V(.05,1.5,.05,t.galv,-.33,0,0),V(.05,1.5,.05,t.galv,.33,0,0));const W=new Rt({map:Ie({header:"Hot work certificate",lines:["Space: TANK 3P","Gas free: yes"],headerBg:"#006ce9",w:512,h:384}),roughness:.7}),wt=new J(new He(.76,.57,.02),[t.white,t.white,t.white,t.white,W,t.white]);wt.position.y=1.32,oe.add(wt),oe.position.set(-4.4,0,-.2),oe.rotation.y=.6,l(oe,!0);const ne=u("SHP-06","hazard",oe,[.9,1.8,.5],[-4.4,.95,-.2],[-4.4,2.3,-.2]);ne.fix=async()=>{await c(.4,ct=>{wt.rotation.y=ct*Lt/2}),W.map=Ie({header:"Hot work certificate",lines:["Space: TANK 4P","Gas free: yes · valid today"],headerBg:"#1f9d55",w:512,h:384}),W.needsUpdate=!0,await c(.4,ct=>{wt.rotation.y=(1-ct)*Lt/2})};const xe=new zt;xe.add(V(.9,1.9,.5,t.lockerGrey,0,0,0));const we=new J(new se(.8,.3),new _e({map:Ie({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));we.position.set(0,2.15,.02),xe.add(we);const Re=new J(new Be(.15,18,12,0,Lt*2,0,Lt/1.6),t.navy);Re.position.set(-.2,2,0),xe.add(Re),xe.position.set(6.4,0,2.6),xe.rotation.y=-Lt/2,l(xe,!0),u("PPE","ppe",xe,[.7,2.2,1.2],[6.45,1.05,2.6],[6.4,2.6,2.6]);const Mt=-1.4,re=-3.3,Se=h+.32;l(V(.7,Se-h,.45,X,Mt,h,re),!0);const me=new J(new se(.5,.18),new _e({map:Cl("WELD HERE",{color:"#ff6b00"}),transparent:!0}));me.position.set(Mt,h+.005,re+.45),me.rotation.x=-Lt/2,l(me),l(new Jr(15331576,7038560,1.3));const Oe=new Qr(16774890,1.6);Oe.position.set(8,16,10),Oe.target.position.set(0,0,-2),Oe.castShadow=!0,Oe.shadow.mapSize.set(2048,2048),Object.assign(Oe.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:50}),Oe.shadow.bias=-4e-4,Oe.shadow.normalBias=.02,l(Oe),l(Oe.target);for(const[ct,te]of[[-8,-4],[8,-4],[-8,6],[8,6]]){const kt=new Yn(16773596,40,22,1.6);kt.position.set(ct,9,te),l(kt)}return{root:n,floors:s,blockers:r,interactables:o,floorY:0,spawn:{position:new S(.5,0,4.4),yaw:0},bounds:{minX:-9,maxX:9,minZ:-7.5,maxZ:5.5},weldSpot:{center:new S(Mt,Se,re+.05),standAt:new S(Mt,h,re+.55),eye:.95,bench:{y:Se,minX:Mt-.35,maxX:Mt+.35,minZ:re-.22,maxZ:re+.22}},update(ct,te){for(const kt of a)kt(ct,te)}}}function yv(i){const t=eo(),e=sc(i,"underwater"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:c,add:l,makeInteractive:u}=e,h=1,d=-6.5,f=new S(.6,0,-6.2),g=-4,v=new Rt({color:1927802,roughness:.15,metalness:.2,transparent:!0,opacity:.42,side:Je,depthWrite:!1}),m=new J(new se(160,160,1,1),v);m.rotation.x=-Lt/2,m.position.y=0,m.renderOrder=5,l(m);const p=new J(new se(80,80),new Rt({map:ns("#6f6a52",["#5a553f","#857e63","#4a4635","#9a9276"],{repeat:[16,16],seed:21}),roughness:1}));p.rotation.x=-Lt/2,p.position.y=d,p.receiveShadow=!0,l(p,!0);const E=new Rt({color:5069394,roughness:1});for(let Mt=0;Mt<30;Mt++){const re=new J(new Ja(.2+Mt*7%5*.12,0),E);re.position.set(-12+Mt*53%24,d+.05,-14+Mt*31%12),re.rotation.set(Mt,Mt*2,Mt*3),l(re)}const y=new Rt({map:ns("#6b5a4a",["#4b3f33","#7d6a57","#3f5a4a","#8a7a62"],{repeat:[1,6],seed:17}),roughness:.85,metalness:.3}),_=3.4;for(const Mt of[-11.4,-5.4,f.x,6.6,12.6])for(const re of[-6.2,-11.2])l(ve(.38,.38,_-d,y,Mt,d,re,24),!0);l(V(26,.5,6.4,new Rt({color:9147032,roughness:.8}),.6,_,-8.7),!0);for(const Mt of[-6.2,-11.2]){const re=Gn(26,t.darkSteel,.5,.25);re.position.set(.6,_-.25,Mt),l(re)}for(const Mt of[-11.4,-5.4,f.x,6.6,12.6])l(ve(.4,.4,.8,new Rt({color:3099187,roughness:1}),Mt,-.9,-6.2,24));l(V(160,3,20,new Rt({color:8161898,roughness:1}),0,-1,-70,{cast:!1}));for(let Mt=0;Mt<10;Mt++)l(V(6+Mt%3*3,6+Mt*5%10,6,new Rt({color:[12107976,10135218,13685976][Mt%3]}),-40+Mt*9,2,-64,{cast:!1}));const U=V(12,2.2,9,new Rt({color:599e4,roughness:.7,metalness:.4}),-2,h-2.2,2.5);l(U,!0);const A=new J(new He(12,.06,9),new Rt({map:ns("#7c858c",["#5f676d","#949ca2","#6b5a4a"],{repeat:[6,4],seed:4}),roughness:.7,metalness:.4}));A.position.set(-2,h-.03,2.5),A.receiveShadow=!0,l(A),s.push(A);const P=(Mt,re,Se,me)=>{const Oe=Math.hypot(Se-Mt,me-re),ct=-Math.atan2(me-re,Se-Mt);for(const kt of[.55,1.05]){const ge=V(Oe,.04,.04,t.yellow,(Mt+Se)/2,h+kt,(re+me)/2);ge.rotation.y=ct,l(ge)}const te=Math.max(1,Math.round(Oe/1.5));for(let kt=0;kt<=te;kt++)l(V(.05,1.07,.05,t.yellow,Fe(Mt,Se,kt/te),h,Fe(re,me,kt/te)))};P(-8,-2,-1.4,-2),P(-.2,-2,4,-2),P(-8,7,4,7),P(-8,-2,-8,7),P(4,-2,4,7),r.push();const C=new zt;C.add(V(.05,4.2,.05,t.galv,-.3,-3.2,0),V(.05,4.2,.05,t.galv,.3,-3.2,0));for(let Mt=-3;Mt<1;Mt+=.3)C.add(V(.6,.03,.04,t.galv,0,Mt,0));C.position.set(-.8,h-.2,-2.1),l(C),l(V(.12,2.6,.12,t.orange,-2.4,h,-1.7),V(.12,2.6,.12,t.orange,.8,h,-1.7),V(3.3,.12,.12,t.orange,-.8,h+2.6,-1.7));const x=V(3,2.4,2.2,new Rt({color:9552,roughness:.6,metalness:.3}),-5.8,h,5.4);l(x,!0);const w=new J(new se(2,.5),new _e({map:Ie({lines:["DIVE CONTROL"],bg:"#002550",fg:"#ffffff",w:512,h:128})}));w.position.set(-5.8,h+1.9,4.29),w.rotation.y=Lt,l(w);const L=w.clone();L.position.set(-5.8,h+1.9,4.29),L.rotation.y=0,L.position.z=4.29,l(L);const z=new zt;z.add(V(1.6,.8,.7,t.lockerGrey,0,0,0));const B=new zt;B.add(V(.5,.28,.32,t.black,0,0,0));const $=new _e({map:Ie({lines:["COMMS OFF"],bg:"#1a1c1f",fg:"#5b6369",w:256,h:96})}),rt=new J(new se(.3,.11),$);rt.position.set(0,.16,.162),B.add(rt);const X=new J(new Be(.025,10,8),new Rt({color:2236962,emissive:0}));X.position.set(.19,.06,.165),B.add(X),B.position.set(-.3,.8,0),z.add(B);const lt=new J(new qn(.09,.015,8,20,Lt),t.black);lt.position.set(.45,.84,.1),z.add(lt),z.position.set(-3.6,h,.6),z.rotation.y=.2,l(z,!0),l(V(1.4,.45,.45,t.wood,-5.6,h,1.2));const G=In(t);G.traverse(Mt=>{Mt.material===t.hivis&&(Mt.visible=!1)}),G.position.set(-5.6,h-.42,1.2),G.rotation.y=Lt/2,G.userData.legs.forEach(Mt=>{Mt.rotation.x=-Lt/2}),l(G);const yt=Rl(t,!1);yt.position.set(-1.9,h,-1.3),yt.rotation.y=Lt,yt.visible=!1,l(yt);const bt=u("UW-05","hazard",[z,G],[3.2,1.6,1.8],[-4.4,h+.7,.9],[-4,h+1.9,.8]);bt.fix=async()=>{$.map=Ie({lines:["COMMS OK"],bg:"#0b2a12",fg:"#32ff6a",w:256,h:96}),$.needsUpdate=!0,X.material.emissive.set(2883434),X.material.emissiveIntensity=2,await c(.5,Mt=>{G.position.y=h-.42+Mt*.3}),G.visible=!1,yt.visible=!0};const Et=new zt;Et.add(V(.8,.9,.6,t.machine,0,0,0)),Et.add(V(.82,.05,.62,t.orange,0,.9,0));const Bt=new _e({map:Ie({lines:["AC"],bg:"#c21f1f",fg:"#ffffff",w:256,h:160})}),ie=new J(new se(.32,.2),Bt);ie.position.set(0,.6,.302),Et.add(ie),Et.position.set(2.4,h,2.2),Et.rotation.y=-.3,l(Et,!0);const Q=cn([new S(2.75,h+.1,2.3),new S(3.1,h+.02,2.6),new S(3.4,h+.02,3.2)],.012,new Rt({color:3120708,roughness:.6}),16);Q.visible=!1,l(Q);const ft=u("UW-02","hazard",Et,[1.1,1.2,.9],[2.4,h+.55,2.2],[2.4,h+1.7,2.2]);ft.fix=async()=>{await c(.4,Mt=>{Et.scale.setScalar(1-Mt*.15)}),Bt.map=Ie({lines:["DC"],bg:"#1f9d55",fg:"#ffffff",w:256,h:160}),Bt.needsUpdate=!0,Q.visible=!0,await c(.4,Mt=>{Et.scale.setScalar(.85+Mt*.15)})};const pt=new zt;pt.add(V(.06,1.1,.06,t.darkSteel,0,0,0)),pt.add(V(.42,.5,.12,t.navy,0,1.05,0));const mt=new J(new se(.34,.1),new _e({map:Ie({lines:["SAFETY SWITCH"],bg:"#f2b705",fg:"#002550",w:384,h:112})}));mt.position.set(0,1.42,.061),pt.add(mt);for(const Mt of[-.1,.1])pt.add(V(.04,.08,.05,t.copper,Mt,1.08,.08));const Pt=new zt;Pt.position.set(0,1.12,.1);const jt=V(.28,.03,.025,t.copper,0,-.015,0,{base:!1});Pt.add(jt);const Zt=V(.05,.1,.05,t.red,.15,.04,0,{base:!1});Pt.add(Zt),Pt.rotation.z=0,pt.add(Pt),pt.position.set(.9,h,-1.2),pt.rotation.y=-.4,l(pt,!0);const Jt=In(t);Jt.position.set(-6.8,h,3.4),Jt.rotation.y=Lt/2;const it=new J(new qn(.12,.018,8,20,Lt),t.black);it.position.set(0,1.72,0),it.visible=!1,Jt.add(it),l(Jt);const ut=u("UW-01","hazard",pt,[.7,1.6,.6],[.9,h+.85,-1.2],[.9,h+2,-1.2]);ut.fix=async()=>{await c(.6,Se=>{Pt.rotation.z=Se*1.2});const Mt=Jt.position.clone(),re=new S(.5,h,-.4);Jt.rotation.y=Math.atan2(re.x-Mt.x,re.z-Mt.z),await c(2,Se=>{Jt.position.lerpVectors(Mt,re,Se);const me=Math.sin(Se*30)*.4;Jt.userData.legs[0].rotation.x=me,Jt.userData.legs[1].rotation.x=-me}),Jt.rotation.y=Lt*.85,it.visible=!0};const R=Rl(t,!0);R.position.set(f.x,g-1,f.z+1.4),R.rotation.y=Lt,l(R),l(cn([new S(f.x,g+.75,f.z+1.6),new S(.2,-2.2,-3.6),new S(-.6,-.3,-2.4),new S(-.8,h+.2,-1.9)],.025,new Rt({color:15906565,roughness:.7}),40));const It=new S(f.x+.18,g+.05,f.z+1);l(cn([new S(2.4,h+.5,1.9),new S(2,-.4,-1.8),new S(1.4,-2.6,-4.6),It.clone().add(new S(.1,-.2,.25)),It],.02,t.rubber,48));const ht=new J(new se(.35,.25),new Rt({color:11581114,roughness:.4,metalness:.8}));ht.position.set(f.x,g,f.z+.385),l(ht);const ot=new zt,gt=V(.08,.035,.04,t.copper,.1,0,0,{base:!1});ot.add(gt);const Yt=ve(.025,.022,.18,new Rt({color:3811872,roughness:.9}),0,0,0,10,{base:!1});Yt.rotation.z=Lt/2,ot.add(Yt);const Dt=ve(.03,.03,.26,t.black,.03,0,0,12,{base:!1});Dt.rotation.z=Lt/2,Dt.visible=!1,ot.add(Dt);const T=ve(.003,.003,.3,t.steel,.24,0,0,6,{base:!1});T.rotation.z=Lt/2-.3,ot.add(T),ot.position.copy(It),ot.rotation.y=Lt/2+.3,l(ot);const M=new zt,H=new Rt({color:15267583,roughness:.05,metalness:.4,transparent:!0,opacity:.7});for(let Mt=0;Mt<10;Mt++)M.add(new J(new Be(.018,8,6),H));const Z=new S(1.4,-2.6,-4.6);M.position.copy(Z),l(M);const st=ve(.035,.035,.12,new Rt({color:2829099,roughness:.6}),Z.x,Z.y,Z.z,10,{base:!1});l(st),a.push((Mt,re)=>{M.visible&&M.children.forEach((Se,me)=>{const Oe=(re*.35+me/10)%1;Se.position.set(Math.sin(me*3+re)*.05,Oe*2.6,Math.cos(me*2)*.05),Se.visible=Z.y+Oe*2.6<-.05})});const et=u("UW-06","hazard",[ot],[.9,.7,.9],[It.x,It.y,It.z+.1],[It.x+.3,g+.9,It.z+.2]);et.fix=async()=>{await c(.5,Mt=>{ot.scale.setScalar(1-Mt*.5)}),gt.visible=!1,Yt.visible=!1,Dt.visible=!0,M.visible=!1,st.material.color.set(1118481),await c(.5,Mt=>{ot.scale.setScalar(.5+Mt*.5)})};const Tt=new zt;Tt.add(V(.12,.08,.08,t.copper,0,0,0,{base:!1}),V(.03,.14,.06,t.black,.07,.05,0,{base:!1})),Tt.scale.setScalar(1.8),l(V(.12,1.6,.12,t.darkSteel,1.2,-2.3,-2.75));const at=new S(1.2,-1.5,-2.7),Ut=new S(f.x+.32,g-.28,f.z+.3);Tt.position.copy(at),l(Tt);let Kt=null;const dt=()=>{Kt&&(n.remove(Kt),Kt.geometry.dispose());const Mt=new S(2.6,h+.3,1.9),re=Tt.position.clone();Kt=cn([Mt,new S(2.4,-.3,-1.6),new S((Mt.x+re.x)/2+.6,(re.y-.3)/1.4,(Mt.z+re.z)/2-.6),re],.018,new Rt({color:1776928,roughness:.7}),40),n.add(Kt)};dt();const At=u("UW-03","hazard",Tt,[.8,.8,.8],[at.x,at.y,at.z],[at.x,at.y+.9,at.z]);At.fix=()=>c(2,Mt=>{Tt.position.lerpVectors(at,Ut,Mt),Tt.position.z+=Math.sin(Mt*Lt)*.5,dt()});const Gt=new Rt({color:5595242,roughness:.6,metalness:.6,side:Je}),$t=new zt,Nt=new J(new sn(.62,.62,.9,32,1,!0,Lt*.15,Lt*1.7),Gt);Nt.rotation.y=Lt,$t.add(Nt);const Qt=new J(new jr(.38,.62,32,1,Lt*.15,Lt*1.7),Gt);Qt.rotation.x=-Lt/2,Qt.rotation.z=Lt,Qt.position.y=.45,$t.add(Qt),$t.position.set(f.x,g+.75,f.z),l($t);const Ht=new Rt({color:14676735,emissive:10471654,emissiveIntensity:.7,roughness:.02,metalness:.9,transparent:!0,opacity:.9}),ee=new J(new qn(.5,.1,10,32,Lt*1.6),Ht);ee.rotation.x=Lt/2,ee.rotation.z=Lt*.2,ee.scale.set(1,1,.6),ee.position.set(f.x,g+1.12,f.z),l(ee);const I=cn([new S(f.x+.5,g+1.2,f.z+.2),new S(f.x+.75,g+2.4,f.z+.35),new S(f.x+.6,.2,f.z+.4),new S(f.x+.55,.9,f.z+.4)],.03,new Rt({color:16739072,roughness:.6}),40);I.visible=!1,l(I);const St=u("UW-04","hazard",[$t,ee],[1.5,1.2,1.5],[f.x,g+.85,f.z+.2],[f.x-.8,g+1.6,f.z+.5]);St.fix=async()=>{I.visible=!0,await c(1.6,Mt=>{ee.scale.set(1-Mt*.9,1-Mt*.9,.6*(1-Mt))}),ee.visible=!1};const j=new zt;j.add(V(1.4,1.8,.5,t.lockerGrey,0,0,0));const tt=new J(new se(1.1,.28),new _e({map:Ie({lines:["DIVER PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:130})}));tt.position.set(0,2.05,.02),j.add(tt);const _t=new J(new Be(.17,18,14),t.yellow);_t.position.set(-.35,1.95,0),j.add(_t);const xt=ve(.08,.08,.55,t.yellow,.35,1.8,0,14);j.add(xt),j.position.set(-7.2,h,2.6),j.rotation.y=Lt/2,l(j,!0),u("PPE","ppe",j,[.8,2.3,1.6],[-7.15,h+1.05,2.6],[-7.2,h+2.7,2.6]);const Wt=f.x,fe=f.z+.75,oe=g-.32;l(V(.6,.03,.5,t.darkSteel,Wt,oe-.03,fe),!0),l(V(.08,.5,.08,t.darkSteel,Wt-.2,oe-.5,fe-.22),V(.08,.5,.08,t.darkSteel,Wt+.2,oe-.5,fe-.22)),l(new Jr(14675706,4020826,1.6));const W=new Qr(16774370,1.8);W.position.set(8,20,10),W.target.position.set(-1,0,0),W.castShadow=!0,W.shadow.mapSize.set(2048,2048),Object.assign(W.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:60}),W.shadow.bias=-4e-4,W.shadow.normalBias=.02,l(W),l(W.target);const wt=new Yn(13626111,6,6,1.5);wt.position.set(f.x+.4,g+.6,f.z+1.2),l(wt);const ne=new Yn(12575743,4,7,1.5);ne.position.set(f.x-.6,g+.4,f.z+1.4),l(ne);const xe={bg:new le(12375011),fog:new le(12375011)},we=new le(1791328),Re=new S;return a.push((Mt,re)=>{m.position.y=Math.sin(re*.6)*.02,i.camera.getWorldPosition(Re);const Se=Re.y<m.position.y,me=i.scene;me.fog&&(Se?(me.background=we,me.fog.color.copy(we),me.fog.near=.5,me.fog.far=13):(me.background=xe.bg,me.fog.color.copy(xe.fog),me.fog.near=40,me.fog.far=140))}),{root:n,floors:s,blockers:r,interactables:o,floorY:h,spawn:{position:new S(-1.2,h,4.6),yaw:0},bounds:{minX:-7.4,maxX:3.6,minZ:-1.6,maxZ:6.6},atmosphere:{background:12375011,fog:[12375011,40,140],envIntensity:.5,exposure:1},underwater:!0,weldSpot:{center:new S(Wt,oe,fe+.05),standAt:new S(Wt,oe-.85,fe+.55),bench:{y:oe,minX:Wt-.3,maxX:Wt+.3,minZ:fe-.25,maxZ:fe+.25},hide:[R,ot]},update(Mt,re){for(const Se of a)Se(Mt,re)}}}function Rl(i,t){const e=In(i),n=new Rt({color:1776928,roughness:.6});e.traverse(a=>{a.isMesh&&(a.material===i.hivis||a.material===i.white?a.visible=!1:a.material===i.navy&&(a.material=n))});const s=new J(new Be(.19,20,16),i.yellow);s.position.y=1.7,s.castShadow=!0,e.add(s);const r=new J(new Xn(.09,20),new Rt({color:793100,roughness:.1,metalness:.6}));r.position.set(0,1.7,.185),e.add(r);const o=new J(new sn(.07,.07,.45,12),i.yellow);o.position.set(0,1.25,-.24),e.add(o);for(const a of[-.1,.1]){const c=new J(new He(.12,.02,.3),i.black);c.position.set(a,.03,.12),e.add(c)}return t&&e.userData.arms.forEach(a=>{a.rotation.x=-1.2,a.position.z=.15}),e}const wv={id:"factory",hazards:[{id:"AREA-01",correct:1},{id:"VEN-01",correct:2},{id:"RAD-01",correct:0},{id:"GAS-01",correct:0},{id:"ELE-02",correct:2},{id:"AREA-02",correct:0},{id:"FAC-05",correct:1}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,2,0,1,0],passScore:.8},Mv={id:"construction",hazards:[{id:"CON-01",correct:1},{id:"CON-02",correct:0},{id:"CON-03",correct:1},{id:"CON-04",correct:0},{id:"CON-05",correct:2},{id:"CON-06",correct:0}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,0,2,1,2],passScore:.8},Sv={id:"shipyard",hazards:[{id:"SHP-01",correct:1},{id:"SHP-02",correct:0},{id:"SHP-03",correct:2},{id:"SHP-04",correct:1},{id:"SHP-05",correct:2},{id:"SHP-06",correct:0},{id:"SHP-07",correct:0}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,1,2,0,1],passScore:.8},bv={id:"underwater",hazards:[{id:"UW-01",correct:1},{id:"UW-02",correct:0},{id:"UW-03",correct:2},{id:"UW-04",correct:1},{id:"UW-05",correct:2},{id:"UW-06",correct:0}],ppe:[{id:"UPPE-01",correct:1},{id:"UPPE-02",correct:2},{id:"UPPE-03",correct:0}],quiz:[2,0,1,2,1],passScore:.8,practiceProcesses:["SMAW"]},rc="seabery-vrw-records-v1";function oc(){try{return JSON.parse(localStorage.getItem(rc))||[]}catch{return[]}}function qh(i){try{const t=oc();t.unshift({...i,at:new Date().toISOString()}),localStorage.setItem(rc,JSON.stringify(t.slice(0,200)))}catch{}}function Ev(){try{localStorage.removeItem(rc)}catch{}}function Pl(){const i={};for(const t of oc()){if(t.type!=="check")continue;const e=i[t.env];(!e||t.score>e.score||t.score===e.score&&t.pass&&!e.pass)&&(i[t.env]={score:t.score,pass:t.pass})}return i}function Tv(i){const t=new Date(i),e=n=>String(n).padStart(2,"0");return`${e(t.getDate())}/${e(t.getMonth()+1)}/${t.getFullYear()} ${e(t.getHours())}:${e(t.getMinutes())}`}const Hn=(i,t=.5,e=.3)=>new Rt({color:i,roughness:t,metalness:e});function Ze(i,t,e,n,s,r=16){const o=new J(new sn(t,i,n-e,r),s);return o.position.y=(e+n)/2,o.castShadow=!1,o}function Av(i){const t=new zt;t.name=`torch-${i}`;const e=Hn(1776928,.7,.1),n=Hn(9552,.55,.2),s=Hn(16739072,.5,.1),r=Hn(12088115,.35,.9),o=Hn(10133670,.4,.85),a={group:t,process:i,length:0,handY:()=>.17,setLength(){}};if(i==="GMAW"){t.add(Ze(9e-4,9e-4,0,.013,o,6)),t.add(Ze(.0035,.004,.011,.016,r,10)),t.add(Ze(.0085,.0095,.013,.048,r,18)),t.add(Ze(.0075,.0075,.048,.115,e,14)),t.add(Ze(.016,.018,.115,.245,n,16));const c=new J(new He(.008,.035,.014),s);c.position.set(0,.15,-.019),t.add(c),t.add(Ze(.009,.009,.245,.31,e,10)),a.handY=()=>.17}else if(i==="SMAW"){const c=Ze(.0022,.0022,0,1,Hn(9210496,.9,.05),8),l=Ze(.0014,.0014,0,.022,o,6),u=new zt;u.add(Ze(.009,.009,0,.03,r,12)),u.add(Ze(.016,.018,.03,.16,e,16)),u.add(Ze(.011,.011,.16,.22,e,10)),t.add(c,l,u),a.setLength=h=>{a.length=h,c.scale.y=Math.max(.001,h),c.position.y=h/2,l.position.y=h+.002,u.position.y=h+.012},a.handY=()=>a.length+.09,a.setLength(.3)}else t.add(Ze(2e-4,.0012,0,.006,Hn(7238522,.3,.9),8)),t.add(Ze(.0055,.008,.005,.025,Hn(15193030,.8,0),18)),t.add(Ze(.011,.011,.025,.06,e,16)),t.add(Ze(.007,.007,.06,.1,e,12)),t.add(Ze(.012,.013,.06,.19,n,16)),t.add(Ze(.008,.008,.19,.25,e,10)),a.handY=()=>.13;return a}function Cv(){const i=new zt;return i.add(Ze(.0012,.0012,0,.5,Hn(12946778,.35,.9),8)),{group:i,handY:()=>.3}}function Ir(i,t=128){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(const[o,a]of i)s.addColorStop(o,a);n.fillStyle=s,n.fillRect(0,0,t,t);const r=new Za(e);return r.colorSpace=Ke,r}const zo=(i,t)=>new Yr({map:i,color:t,blending:zs,transparent:!0,depthWrite:!1,toneMapped:!1});class Rv{constructor(t,e=2e3){const n=new Be(1,14,8);this.cap=e,this.metal=new Do(n,new Rt({color:16777215,roughness:.32,metalness:.85}),e),this.slag=new Do(n,new Rt({color:16777215,roughness:.95,metalness:.05}),e),this.glow=new Do(n,new _e({color:16777215,blending:zs,transparent:!0,depthWrite:!1,toneMapped:!1}),e),this.glow.renderOrder=961;const s=new le(1,1,1);for(const r of[this.metal,this.slag,this.glow]){for(let o=0;o<e;o++)r.setColorAt(o,s);r.count=0,r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!0,t.add(r)}this.items=[],this._m=new Ae,this._q=new ci,this._s=new S,this._c=new le,this.useSlag=!1}clear(){this.items=[];for(const t of[this.metal,this.slag,this.glow])t.count=0}get last(){return this.items[this.items.length-1]||null}add(t,e,n,s,r,o){if(this.items.length>=this.cap)return null;const a={p:t.clone(),w:e,h:n,len:Math.max(e*.55,.0022),yaw:s,born:o,grow:1,i:this.items.length};this.items.push(a),this.metal.setColorAt(a.i,this._c.set(r)),this.slag.setColorAt(a.i,this._c.set(3880497)),this._write(a);for(const c of[this.metal,this.slag,this.glow])c.count=this.items.length,c.instanceColor.needsUpdate=!0;return a}_write(t,e=1){this._q.setFromAxisAngle(new S(0,1,0),t.yaw);const n=t.len*t.grow,s=t.h*t.grow,r=t.w/2*t.grow;this._m.compose(t.p,this._q,this._s.set(n,s,r)),this.metal.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.05,s*1.18,r*1.08).multiplyScalar(this.useSlag?e:0)),this.slag.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.1,s*1.25,r*1.14)),this.glow.setMatrixAt(t.i,this._m);for(const o of[this.metal,this.slag,this.glow])o.instanceMatrix.needsUpdate=!0}growLast(t){const e=this.last;!e||e.grow>=1.9||(e.grow=Math.min(1.9,e.grow+t*.9),this._write(e))}update(t){let e=!1;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n],r=t-s.born;if(r>4.5){s.cold||(s.cold=!0,this.glow.setColorAt(s.i,this._c.setRGB(0,0,0)),e=!0);continue}const o=Math.exp(-r/.8);this.glow.setColorAt(s.i,this._c.setRGB(1.6*Math.sqrt(o),.55*o,.12*o*o)),e=!0}e&&(this.glow.instanceColor.needsUpdate=!0)}setSlagVisibleFrom(t){const e=Math.floor(this.items.length*t);for(let n=0;n<this.items.length;n++)this._write(this.items[n],n<e?0:1)}}class Pv{constructor(t){this.core=new Us(zo(Ir([[0,"rgba(255,255,255,1)"],[.18,"rgba(235,245,255,0.95)"],[.45,"rgba(160,200,255,0.35)"],[1,"rgba(120,170,255,0)"]]),16777215)),this.halo=new Us(zo(Ir([[0,"rgba(255,255,255,0.6)"],[.3,"rgba(200,220,255,0.18)"],[1,"rgba(150,190,255,0)"]]),16777215)),this.pool=new Us(zo(Ir([[0,"rgba(255,250,220,1)"],[.35,"rgba(255,170,60,0.8)"],[1,"rgba(255,90,0,0)"]]),16777215)),this.core.renderOrder=963,this.halo.renderOrder=962,this.pool.renderOrder=962,this.light=new Yn(14214911,0,3.5,2),t.add(this.core,this.halo,this.pool,this.light),this.set(!1)}setColor(t){this.light.color.set(t),this.core.material.color.set(t),this.halo.material.color.set(t)}set(t){this.on=t,this.core.visible=this.halo.visible=this.pool.visible=t,t||(this.light.intensity=0)}update(t,e,n,s){if(!this.on)return;const r=.75+Math.random()*.5+(s?(Math.random()-.5)*.9:0),o=t.clone().lerp(e,.5);this.core.position.copy(o),this.core.scale.setScalar(.028*r),this.halo.position.copy(o),this.halo.scale.setScalar(.11*(.85+Math.random()*.3)),this.pool.position.copy(e).y+=.0015,this.pool.scale.setScalar(.016*(.9+Math.random()*.2)),this.light.position.copy(o).y+=.12,this.light.intensity=n*r}}class Lv{constructor(t,e=600){this.max=e,this.pos=new Float32Array(e*3).fill(-100),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.age=new Float32Array(e),this.next=0;const n=new Ge;n.setAttribute("position",new ln(this.pos,3)),n.setAttribute("color",new ln(this.col,3)),this.points=new vg(n,new Rh({size:.0055,vertexColors:!0,blending:zs,transparent:!0,depthWrite:!1,toneMapped:!1})),this.points.frustumCulled=!1,this.points.renderOrder=964,t.add(this.points),this.ground=()=>0}emit(t,e){for(let n=0;n<t;n++){const s=this.next;this.next=(this.next+1)%this.max;const r=Math.random()*Math.PI*2,o=.25+Math.random()*.75,a=.5+Math.random()*1.9,c=Math.sqrt(1-o*o);this.pos.set([e.x,e.y+.002,e.z],s*3),this.vel.set([Math.cos(r)*c*a,o*a,Math.sin(r)*c*a],s*3),this.life[s]=.35+Math.random()*.8,this.age[s]=0}}update(t){const e=this.pos,n=this.vel,s=this.col;for(let r=0;r<this.max;r++){if(this.life[r]<=0)continue;this.age[r]+=t;const o=this.age[r]/this.life[r];if(o>=1){this.life[r]=0,e[r*3+1]=-100;continue}const a=r*3;n[a+1]-=9.8*t,e[a]+=n[a]*t,e[a+1]+=n[a+1]*t,e[a+2]+=n[a+2]*t;const c=this.ground(e[a],e[a+2]);e[a+1]<c&&(e[a+1]=c,n[a+1]*=-.3,n[a]*=.6,n[a+2]*=.6);const l=1-o;s[a]=1.4*l+.2,s[a+1]=.9*l*l+.1*l,s[a+2]=.35*l*l*l}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}}class Dv{constructor(t,e=40){const n=Ir([[0,"rgba(200,200,200,0.55)"],[.6,"rgba(170,170,170,0.18)"],[1,"rgba(160,160,160,0)"]],64);this.list=[];for(let s=0;s<e;s++){const r=new Us(new Yr({map:n,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,t.add(r),this.list.push({s:r,age:0,life:0})}this.acc=0,this.drift=new S(0,.22,-.06)}emit(t,e,n){for(this.acc+=t*e;this.acc>=1;){this.acc-=1;const s=this.list.find(r=>r.life<=0);if(!s)return;s.age=0,s.life=2.2+Math.random(),s.s.position.copy(n).add(new S((Math.random()-.5)*.01,.01,(Math.random()-.5)*.01)),s.s.visible=!0}}update(t){for(const e of this.list){if(e.life<=0)continue;e.age+=t;const n=e.age/e.life;if(n>=1){e.life=0,e.s.visible=!1;continue}e.s.position.addScaledVector(this.drift,t),e.s.position.x+=Math.sin(e.age*3+e.life*7)*.01*t,e.s.scale.setScalar(.02+n*.22),e.s.material.opacity=.4*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}}clear(){for(const t of this.list)t.life=0,t.s.visible=!1}}class Iv{constructor(t){this.mesh=new J(new Be(.2,24,16),new _e({color:795664,side:nn,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=950,this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.level=0}update(t,e){const n=e===2?.86:e===1?.42:0,s=n>this.level?40:6;this.level+=(n-this.level)*Math.min(1,s*t),this.mesh.material.opacity=this.level,this.mesh.visible=this.level>.01}dispose(){this.mesh.removeFromParent()}}const Bo={GMAW:{pops:260,decay:.003,base:.22,freq:2400,q:.8,vol:.55},SMAW:{pops:120,decay:.007,base:.18,freq:1600,q:.6,vol:.6},GTAW:{pops:0,decay:.004,base:.6,freq:5200,q:.35,vol:.22}};class Uv{constructor(){this.ctx=null,this.muted=!1,this.buffers={},this.process=null,this.src=null}ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.filter=this.ctx.createBiquadFilter(),this.filter.type="bandpass",this.gain=this.ctx.createGain(),this.gain.gain.value=0,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:1,this.filter.connect(this.gain).connect(this.master).connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0}_buffer(t){if(this.buffers[t])return this.buffers[t];const e=Bo[t],n=this.ctx.sampleRate,s=Math.floor(n*3),r=this.ctx.createBuffer(1,s,n),o=r.getChannelData(0),a=new Float32Array(s).fill(e.base),c=Math.floor(e.pops*3),l=Math.floor(e.decay*n);for(let u=0;u<c;u++){const h=Math.floor(Math.random()*s),d=.3+Math.random()*.9;for(let f=0;f<l*4&&h+f<s;f++)a[h+f]+=d*Math.exp(-f/l)}for(let u=0;u<s;u++)o[u]=(Math.random()*2-1)*Math.min(1.4,a[u]);for(let u=0;u<256;u++)o[u]*=u/256,o[s-1-u]*=u/256;return this.buffers[t]=r}setProcess(t){if(!this.ctx||this.process===t)return;if(this.process=t,this.src){try{this.src.stop()}catch{}this.src.disconnect()}const e=Bo[t];this.filter.frequency.value=e.freq,this.filter.Q.value=e.q,this.src=this.ctx.createBufferSource(),this.src.buffer=this._buffer(t),this.src.loop=!0,this.src.connect(this.filter),this.src.start()}update(t,e=0){if(!this.ctx||!this.process)return;const n=Bo[this.process],s=t?n.vol*(.85+Math.random()*.3)*(1+e*.5):0;this.gain.gain.setTargetAtTime(s,this.ctx.currentTime,t?.015:.04)}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:1,this.ctx.currentTime,.02)}stop(){this.ctx&&this.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.03)}}const Nv=["GMAW","SMAW","GTAW"],Cs={GMAW:{pace:[.01,.028],w:.008,hr:.38,sparks:90,fume:6,arc:2.6,color:14477567,metal:[10788243,10130571],win:[-.004,.02],strike:.02,lose:.035,touch:null,pcAxis:[-.15,.9,.35]},SMAW:{pace:[.007,.02],w:.009,hr:.42,sparks:140,fume:10,arc:3,color:16773596,metal:[9343896,8751759],win:[-.002,.012],strike:.012,lose:.022,touch:-.004,pcAxis:[.3,.85,.35],burn:.0125,L0:.3,Lmin:.05},GTAW:{pace:[.004,.014],w:.006,hr:.3,sparks:0,fume:1.2,arc:2,color:13228287,metal:[12830925,11449530],win:[-.002,.01],strike:.01,lose:.02,touch:-.004,pcAxis:[-.3,.85,.35]}},Ov=.003,Ll=.025,Dl=.005,Fv=.006,kv=.003,zv=.006,Bv=.35,Hv=.6,Rs=new S(0,1,0),Tr=new S(0,.5,1).normalize();class Vv{constructor(t){this.game=t,this.engine=t.engine,this.input=t.input,this.panels=t.panels,this.active=!1,this.state="off",this.process="GMAW",this.audio=new Uv,this.pointer={down:!1,valid:!1,id:null,point:new S},this.trigger=!1,this.needRelease=!1,this.arcOn=!1,this.raycaster=new Bh,this.plane=new ii,this._bindPointer(),this._bindXR(),this.engine.updaters.add((e,n)=>{this.active&&this._update(e,n)})}start(){const t=this.game.world;this.spot=t.weldSpot,this.active=!0,this.root=new zt,this.root.name="weld-practice",t.root.add(this.root),this._buildCoupon(),this.bead=new Rv(this.root),this.arc=new Pv(this.root),this.sparks=new Lv(this.root);const e=this.spot.bench,n=this.seam;if(this.sparks.ground=(r,o)=>r>n.minX&&r<n.maxX&&o>n.minZ&&o<n.maxZ?this.top:r>e.minX&&r<e.maxX&&o>e.minZ&&o<e.maxZ?e.y:0,this.fume=new Dv(this.root),this.wet=!!t.underwater,this.wet){this.fume.drift.set(0,.7,0);for(const r of this.fume.list)r.s.material.color.set(15398655)}this.helmet=new Iv(this.engine.camera),this.saved={fov:this.engine.camera.fov},this.pointer.point.set(n.x0-.01,this.top,n.z+.02),this.pointer.valid=!0,this.pcLift=Ll,this.m=null,this.input.locked=!0,this.input.clearHover(),this.audio.ensure(),this._buildHud();for(const r of this.spot.hide||[])r.visible=!1;this._placeUser();const s=this._processes();s.length===1?this._intro(s[0]):this._choose()}exit(){this.stop(),this.game._afterPractice()}stop(){var e,n,s;if(!this.active)return;this._setArc(!1),this.active=!1,this.state="off",this.audio.stop(),this.panels.hide(),this._restoreRays(),(e=this.torch)==null||e.group.removeFromParent(),(n=this.filler)==null||n.group.removeFromParent(),this.torch=this.filler=this.torchCtrl=null,this.root.removeFromParent(),this.root=null,this.helmet.dispose();for(const r of this.spot.hide||[])r.visible=!0;(s=this.hud)==null||s.remove(),this.hud=null;const t=this.engine.camera;t.fov=this.saved.fov,t.updateProjectionMatrix(),this.engine.rig.position.y=0,this.game.world&&this.input.setWorld(this.game.world),this.game.vrHud.mesh.visible=!1}onModeChange(){this.active&&(this._setArc(!1),this.engine.isVR||(this.engine.camera.fov=38,this.engine.camera.updateProjectionMatrix()),this._placeUser(),this._mountTorch(),this.renderHud(!0))}_buildCoupon(){const t=this.spot.center,e=.006,n=.26,s=.06,r=.0015,o=new Rt({color:9410462,roughness:.5,metalness:.75});for(const u of[-1,1]){const h=new J(new He(n,e,s),o);h.position.set(t.x,t.y+e/2,t.z+u*(s/2+r/2)),h.receiveShadow=!0,this.root.add(h)}this.top=t.y+e,this.seam={x0:t.x-.11,x1:t.x+.11,z:t.z,minX:t.x-n/2,maxX:t.x+n/2,minZ:t.z-s-r/2,maxZ:t.z+s+r/2};const a=new _e({color:16777215,transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1});for(const u of[this.seam.x0,this.seam.x1])for(const h of[-1,1]){const d=new J(new se(.0022,.018),a);d.rotation.x=-Math.PI/2,d.position.set(u,this.top+4e-4,t.z+h*.017),d.renderOrder=958,this.root.add(d)}const c=new Rt({color:9080724,roughness:.4,metalness:.8});for(const u of[t.x-n/2+.008,t.x+n/2-.008]){const h=new J(new Be(1,10,6),c);h.scale.set(.004,.002,.003),h.position.set(u,this.top,t.z),this.root.add(h)}const l=new J(new He(.018,.016,.024),new Rt({color:12088115,roughness:.4,metalness:.8}));l.position.set(t.x+n/2-.012,this.top+.008,t.z+s*.8),this.root.add(l)}_placeUser(){const t=this.engine,e=this.spot.standAt;if(t.isVR){t.rig.position.y=e.y+(this.spot.eye!=null?this.spot.eye-ts:0);const n=new S;t.camera.getWorldDirection(n),this.input.snapTurn(-Math.atan2(-n.x,-n.z));const s=new S;t.camera.getWorldPosition(s),t.rig.position.x+=e.x-s.x,t.rig.position.z+=e.z-s.z,t.rig.position.y=e.y+(this.spot.eye!=null?this.spot.eye-ts:0)}else{const n=this.spot.eye??1.4;t.rig.position.set(e.x,e.y+n-ts,e.z),this.input.yaw=0,this.input.pitch=-Math.atan2(e.y+n-this.top,e.z-this.seam.z),this.input._applyLook(),t.camera.fov=38,t.camera.updateProjectionMatrix()}}_setProcess(t){var e,n;this.process=t,(e=this.torch)==null||e.group.removeFromParent(),(n=this.filler)==null||n.group.removeFromParent(),this.torch=Av(t),this.filler=t==="GTAW"?Cv():null,this._mountTorch(),this.arc.setColor(Cs[t].color),this.audio.ensure(),this.audio.setProcess(t)}_mountTorch(){const t=this.torch;if(t)if(this._restoreRays(),this.torchCtrl=null,this.engine.isVR){const e=this.input.controllers.filter(s=>s.userData.source&&s.userData.grip),n=e.find(s=>s.userData.handedness==="right")||e[0];if(!n){this.root.add(t.group);return}if(this.torchCtrl=n,n.userData.grip.add(t.group),t.group.quaternion.setFromUnitVectors(Rs,Tr),this.filler){const s=e.find(r=>r!==n);s?(s.userData.grip.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(Rs,Tr),this.filler.group.position.copy(Tr).multiplyScalar(-this.filler.handY())):this.filler.group.removeFromParent()}}else this.root.add(t.group),t.group.quaternion.setFromUnitVectors(Rs,new S(...Cs[this.process].pcAxis).normalize()),this.filler&&(this.root.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(Rs,new S(.75,.42,.5).normalize()))}_kicker(){return this.torch?`${O("practice.kicker")} · ${O(`practice.processes.${this.process}.name`)}`:O("practice.kicker")}_choose(){this._setArc(!1),this.state="select",this.panels.show({kicker:O("practice.kicker"),title:O("practice.chooseTitle"),body:[O(`env.${this.game.env.id}.job`),O("practice.chooseBody")],options:this._processes().map(t=>({text:`${O(`practice.processes.${t}.name`)}: ${O(`practice.processes.${t}.short`)}`})),onOption:t=>this._intro(this._processes()[t]),buttons:[{label:O("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}),this.renderHud(!0)}_processes(){var t;return((t=this.game.env)==null?void 0:t.content.practiceProcesses)||Nv}_intro(t){this._setProcess(t),this.state="intro",this.panels.show({kicker:this._kicker(),title:O(`practice.processes.${t}.name`),body:[O(`practice.processes.${t}.desc`),...this.game.world.underwater?[O("practice.wetNote")]:[],this.engine.isVR?O("practice.howVr"):O("practice.howScreen"),O("practice.helmet")],buttons:[{label:O("app.back"),style:"secondary",onClick:()=>this._choose()},{label:O("app.start"),onClick:()=>{this.panels.hide(),this._beginPass()}}]}),this.renderHud(!0)}_beginPass(){this.state="weld",this.bead.clear(),this.fume.clear(),this.bead.useSlag=this.process==="SMAW",this.m={bins:new Array(Math.ceil((this.seam.x1-this.seam.x0)/Dl)).fill(!1),lat2:0,latN:0,samples:[],win:null,dGood:0,dFar:0,dClose:0,dN:0},this.vs=0,this.lastDep=null,this.prevPool=null,this.idle=0,this.swapAt=0,this.needRelease=this.trigger||this.pointer.down,this.process==="SMAW"&&this.torch.setLength(Cs.SMAW.L0),this.renderHud(!0)}_finishPass(){if(this.state==="weld"){if(this._coverage()<.15){this.game._notify(O("practice.weldFirst"));return}this._setArc(!1),this.state="review",this.renderHud(!0),this.process==="SMAW"?this._slag():this._results()}}_slag(){this.panels.show({kicker:this._kicker(),title:O("practice.slagTitle"),body:O("practice.slagBody"),buttons:[{label:O("practice.chip"),onClick:async()=>{this.panels.hide(),await this.engine.tween(1.6,t=>this.bead.setSlagVisibleFrom(t)),this.active&&this._results()}}]})}_evaluate(){const t=this.m,e=Cs[this.process],n=[],s=this._coverage();n.push({key:"coverage",level:s>=.92?"good":"bad",text:s>=.92?"good":"bad"});const r=t.latN?Math.sqrt(t.lat2/t.latN):1,o=r<=kv?"good":r<=zv?"ok":"bad";n.push({key:"line",level:o,text:o==="good"?"good":"bad"});const a=t.samples,c=a.length?a.reduce((v,m)=>v+m,0)/a.length:0,l=a.length?Math.sqrt(a.reduce((v,m)=>v+(m-c)**2,0)/a.length):0,u=c<e.pace[0]?"slow":c>e.pace[1]?"fast":"good";n.push({key:"pace",level:u==="good"?"good":"bad",text:u});const h=c>0?l/c:1,d=h<=Bv?"good":h<=Hv?"ok":"bad";if(n.push({key:"steady",level:d,text:d==="good"?"good":"bad"}),t.dN>20){const v=t.dGood/t.dN,m=v>=.75?"good":v>=.5?"ok":"bad";n.push({key:"distance",level:m,text:m==="good"?"good":t.dFar>=t.dClose?"far":"close"})}const f=n.filter(v=>v.level==="bad").length,g=n.filter(v=>v.level==="good").length;return{rows:n,title:g===n.length?"great":f===0?"good":"keep"}}_results(){const t=this._evaluate();qh({type:"weld",env:this.game.env.id,process:this.process,rating:t.title}),this.game.lastWeld={process:this.process,rating:t.title},this.state="review",this.panels.show({kicker:this._kicker(),title:O(`practice.resultTitle.${t.title}`),options:t.rows.map(e=>({text:O(`practice.fb.${e.key}.${e.text}`),mark:e.level==="good"?O("practice.markGood"):O("practice.markTip"),state:e.level==="good"?"correct":e.level==="bad"?"wrong":null,disabled:!0})),source:`${O("practice.soldamatic")} ${O("practice.note")}`,buttons:[{label:O("practice.change"),style:"secondary",onClick:()=>this._choose()},{label:O("practice.done"),style:"secondary",onClick:()=>this.exit()},{label:O("practice.again"),onClick:()=>{this.panels.hide(),this._beginPass()}}]})}_buildHud(){this.hudCov=K("div.value",{text:"0%"}),this.hudBar=K("div"),this.hudProc=K("div.value",{text:"–"});const t=K("button.btn.secondary",{text:O("practice.soundOn"),onclick:()=>{this.audio.ensure(),this.audio.setMuted(!this.audio.muted),t.textContent=this.audio.muted?O("practice.soundOff"):O("practice.soundOn")}}),e=K("div.hud-actions",{},t,K("button.btn.secondary",{text:O("practice.change"),onclick:()=>{(this.state==="weld"||this.state==="review")&&this._choose()}}),K("button.btn.secondary",{text:O("practice.exit"),onclick:()=>this.exit()}),K("button.btn",{text:O("practice.finishPass"),onclick:()=>this._finishPass()}));this.game.vrSupported&&e.prepend(K("button.btn.secondary",{text:O("app.enterVr"),onclick:()=>this.game._enterVR()})),this.hud=K("div",{},K("div.hud-top",{},K("div.hud-chip",{},K("img.hud-logo",{src:es,alt:"Seabery"})),K("div",{style:"display:flex;gap:10px"},K("div.hud-chip",{},K("div",{},K("div.label",{text:O("practice.kicker")}),this.hudProc)),K("div.hud-chip",{},K("div",{},K("div.label",{text:O("practice.joint")}),this.hudCov),K("div.cov-bar",{},this.hudBar)))),K("div.hud-bottom",{},K("div.hint-text",{text:O("practice.howScreen")}),e)),this.game.uiRoot.prepend(this.hud)}renderHud(t=!1){if(!this.active)return;const e=Math.round(this._coverage()*100),n=this.torch?O(`practice.processes.${this.process}.name`):"–";this.hud&&(this.hudCov.textContent=`${e}%`,this.hudBar.style.width=`${e}%`,this.hudProc.textContent=n,this.hud.style.display=this.engine.isVR?"none":"");const s=this.game.vrHud,r=this.engine.isVR&&this.state==="weld",o=`${e}|${n}|${this.game.lastMsg}|${r}`;!t&&o===this._hudKey||(this._hudKey=o,s.mesh.visible=r,r&&s.render({kicker:O("practice.kicker"),title:n,body:[`${O("practice.joint")} ${e}%`,this.game.lastMsg].filter(Boolean),buttons:[{label:O("practice.finishPass"),onClick:()=>this._finishPass()},{label:O("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}))}_coverage(){return this.m?this.m.bins.filter(Boolean).length/this.m.bins.length:0}_bindPointer(){const t=this.engine.renderer.domElement,e=new vt,n=new S,s=o=>{const a=t.getBoundingClientRect(),c=o.pointerType==="touch"?70:0;if(e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-c-a.top)/a.height)*2+1),this.raycaster.setFromCamera(e,this.engine.camera),this.plane.set(Rs,-this.top),!this.raycaster.ray.intersectPlane(this.plane,n))return;const l=this.seam;n.x=Ji.clamp(n.x,l.minX-.12,l.maxX+.12),n.z=Ji.clamp(n.z,l.minZ-.08,l.maxZ+.12),this.pointer.point.copy(n),this.pointer.valid=!0};t.addEventListener("pointerdown",o=>{!this.active||this.engine.isVR||this.state!=="weld"||this.panels.isOpen||this.pointer.down||(s(o),this.pointer.down=!0,this.pointer.id=o.pointerId,this.audio.ensure())}),t.addEventListener("pointermove",o=>{!this.active||this.engine.isVR||this.pointer.down&&o.pointerId!==this.pointer.id||s(o)});const r=o=>{o.pointerId===this.pointer.id&&(this.pointer.down=!1,this.pointer.id=null,this.needRelease=!1)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}_bindXR(){for(const t of this.input.controllers)t.addEventListener("selectstart",()=>{!this.active||t!==this.torchCtrl||(this.trigger=!0,this.audio.ensure())}),t.addEventListener("selectend",()=>{t===this.torchCtrl&&(this.trigger=!1,this.needRelease=!1)})}_rays(t,e){const n=this.torchCtrl;if(!n)return;const s=!t||e&&e.distanceTo(this.spot.center)>.35;n.userData.line.visible=n.userData.dot.visible=s}_restoreRays(){for(const t of this.input.controllers)t.userData.line.visible=t.userData.dot.visible=!0}_haptic(t,e){var s,r,o,a,c;const n=(r=(s=this.torchCtrl)==null?void 0:s.userData.source)==null?void 0:r.gamepad;try{(c=(a=(o=n==null?void 0:n.hapticActuators)==null?void 0:o[0])==null?void 0:a.pulse)==null||c.call(a,t,e)}catch{}}_setArc(t){var e;t!==this.arcOn&&(this.arcOn=t,(e=this.arc)==null||e.set(t),this.lastDep=null,this.prevPool=null,this.m&&(this.m.win=null),t||this.audio.update(!1))}_update(t,e){const n=Cs[this.process],s=this.engine.isVR,r=this.state==="weld"&&!this.panels.isOpen;let o=null;if(this.torch){const d=this.torch.group;if(s)this.torchCtrl||this._mountTorch(),this.torchCtrl&&d.position.copy(Tr).multiplyScalar(-this.torch.handY());else{const f=this.pointer.down&&r?Ov:Ll;this.pcLift+=(f-this.pcLift)*Math.min(1,t*18),d.position.set(this.pointer.point.x,this.top+this.pcLift,this.pointer.point.z)}d.updateWorldMatrix(!0,!1),o=new S().setFromMatrixPosition(d.matrixWorld),s&&this._rays(r,o)}const a=this.seam,c=o?o.y-this.top:1,l=!!o&&o.x>a.minX&&o.x<a.maxX&&o.z>a.minZ&&o.z<a.maxZ;this.swapAt&&e>=this.swapAt&&(this.torch.setLength(n.L0),this.swapAt=0);let u=!1;r&&l&&!this.needRelease&&!this.swapAt&&(s?u=this.trigger&&(this.arcOn?c<n.lose:c<n.strike):u=this.pointer.down),u&&s&&n.touch!=null&&c<n.touch&&(u=!1,this.needRelease=!0,this._haptic(1,180),this.game._notify(O(this.process==="SMAW"?"practice.stuck":"practice.tungsten"))),this.arcOn&&!u&&s&&r&&this.trigger&&!this.needRelease&&c>=n.lose&&(this.needRelease=!0,this.game._notify(O("practice.lost"))),this._setArc(u);let h=0;if(this.arcOn){const d=this.m,f=new S(o.x,this.top,o.z);s&&(d.dN++,c>n.win[1]?(d.dFar++,h=Math.min(1,(c-n.win[1])/(n.lose-n.win[1]))):c<n.win[0]?d.dClose++:d.dGood++),this.arc.update(o,f,n.arc,h>.3);const g=this.prevPool?Math.hypot(f.x-this.prevPool.x,f.z-this.prevPool.z):0;this.vs+=(g/Math.max(t,1e-4)-this.vs)*(1-Math.exp(-t/.3)),this.prevPool=f.clone();const v=(n.pace[0]+n.pace[1])/2,m=Ji.clamp(Math.sqrt(v/Math.max(this.vs,.002)),.55,1.8),p=.0012;this.lastDep||(this.lastDep=f.clone().addScaledVector(new S(1,0,0),-p));let E=Math.hypot(f.x-this.lastDep.x,f.z-this.lastDep.z);E<p&&this.bead.growLast(t);let y=0;for(;E>=p&&y++<200;){const U=new S(f.x-this.lastDep.x,0,f.z-this.lastDep.z).normalize(),A=this.lastDep.clone().addScaledVector(U,p),P=A.clone(),C=h*.0016;P.x+=(Math.random()-.5)*C,P.z+=(Math.random()-.5)*C;const x=Math.atan2(-U.z,U.x),w=this.bead.items.length,L=w%4<2?1:.92;this.bead.add(P,n.w*m*(1+h*.3)*L,n.w*n.hr*Math.sqrt(m)*(1-h*.3),x,n.metal[w%4<2?0:1],e),this.lastDep=A;const z=A.z-a.z;d.lat2+=z*z,d.latN++,Math.abs(z)<Fv&&A.x>=a.x0&&A.x<=a.x1&&(d.bins[Math.min(d.bins.length-1,Math.floor((A.x-a.x0)/Dl))]=!0),E-=p}d.win||(d.win={t:0,x:f.x,first:!0}),d.win.t+=t,d.win.t>=.25&&(d.win.first||d.samples.push(Math.abs(f.x-d.win.x)/d.win.t),d.win={t:0,x:f.x,first:!1});const _=this.wet?0:n.sparks*(1+h*2);this.sparks.emit(Math.floor(_*t+Math.random()),f),this.fume.emit(this.wet?18:n.fume,t,f),this.audio.update(!0,h),s&&(this._hapT=(this._hapT||0)+t)>.05&&(this._hapT=0,this._haptic(.12+Math.random()*.15+h*.3,45)),this.process==="SMAW"&&(this.torch.setLength(this.torch.length-n.burn*t),this.torch.length<=n.Lmin&&(this._setArc(!1),this.needRelease=!0,this.swapAt=e+1.2,this.game._notify(O("practice.electrodeUsed")))),this.idle=0}if(this.filler&&!s&&o){const d=this.arcOn&&Math.sin(e*5)>.2?0:.005;this.filler.group.position.set(o.x+.007,this.top+.0015+d+(this.arcOn?0:.015),o.z+.002)}this.sparks.update(t),this.fume.update(t),this.bead.update(e),this.helmet.update(t,this.state==="weld"&&!this.panels.isOpen?this.arcOn?2:1:0),this.state==="weld"&&!this.arcOn&&this._coverage()>=.95&&(this.idle+=t,this.idle>.8&&this._finishPass()),(this._hudT=(this._hudT||0)+t)>.2&&(this._hudT=0,this.renderHud())}}const Ho=[{id:"factory",icon:Er.factory,build:fv,content:wv,available:!0},{id:"construction",icon:Er.construction,build:_v,content:Mv,available:!0},{id:"shipyard",icon:Er.shipyard,build:xv,content:Sv,available:!0},{id:"underwater",icon:Er.underwater,build:yv,content:bv,available:!0}],Gv=i=>{const t=[...Array(i).keys()];for(let e=i-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};class Wv{constructor({engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}){Object.assign(this,{engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}),this.world=null,this.env=null,this.layer=K("div"),this.hud=null,s.append(this.layer),e.onSelect=o=>this._onSelect(o),e.addEventListener("hover",o=>this._onHover(o.detail)),t.updaters.add((o,a)=>this._update(o,a)),t.addEventListener("vrstart",()=>{this._renderHud(),this.phase==="practice"&&this.practice.onModeChange()}),t.addEventListener("vrend",()=>{this._renderHud(),this.phase==="results"&&(this.panels.hide(),this._resultsScreen()),this.phase==="practice"&&this.practice.onModeChange()}),this.vrHud=new Hh({widthM:.26,px:640,maxH:700,compact:!0}),this.vrHud.mesh.position.set(0,.09,.02),this.vrHud.mesh.rotation.set(-1,0,0),this.vrHud.mesh.visible=!1,e.uiMeshes.add(this.vrHud.mesh),e.addEventListener("controller",o=>{const{grip:a,handedness:c}=o.detail;(c==="left"||!this.vrHud.mesh.parent)&&a.add(this.vrHud.mesh)}),this.markerTex=hv(),this.markers=[],this.practice=new Vv(this)}showMenu(){const t=Pl();this.phase="menu",this._clearWorld(),this.panels.hide(),this._hideHud(),this.layer.replaceChildren(K("div.screen",{},K("img.logo",{src:es,alt:"Seabery"}),K("div.kicker",{text:O("app.kicker")}),K("h1",{text:O("app.title")}),K("p.lead",{text:O("app.lead")}),K("div.env-grid",{},Ho.map(e=>{const n=K("button.env-card",{disabled:!e.available,onclick:()=>this.startEnv(e.id)});n.innerHTML=`<span class="env-icon">${e.icon}</span>`;const s=t[e.id];return n.append(K("span.tag",{text:e.available?s?`${O("app.best",{score:Math.round(s.score*100)})}${s.pass?" · ✓":""}`:O("app.available"):O("app.comingSoon")}),K("h3",{text:O(`env.${e.id}.name`)}),K("p",{text:O(`env.${e.id}.desc`)})),n})),K("button.btn.secondary.menu-records",{text:O("app.myResults"),onclick:()=>this.showRecords()}),K("div.howto",{},K("div",{},K("b",{text:O("app.howtoPc")}),O("app.howtoPcText")),K("div",{},K("b",{text:O("app.howtoTablet")}),O("app.howtoTabletText")),K("div",{},K("b",{text:O("app.howtoVr")}),O("app.howtoVrText"))),K("p.draft-note",{text:O("app.draftNote")})))}async startEnv(t){const e=Ho.find(n=>n.id===t);this.env=e,this.layer.replaceChildren(K("div.screen",{},K("img.logo",{src:es,alt:"Seabery"}),K("p.lead",{text:O("app.loading")}),K("div.loader",{},K("div")))),await new Promise(n=>setTimeout(n,60)),this._clearWorld(),this.world=e.build(this.engine),this._applyAtmosphere(this.world.atmosphere),this.engine.scene.add(this.world.root),this.engine.shadowsDirty(),this.input.setWorld(this.world),this.state={hazards:{},ppe:{},quiz:[],hints:0},this.lastWeld=null,this.hintOn=!1,this._buildMarkers(),this.layer.replaceChildren(),this.phase="explore",this._showHud(),this.input.locked=!1,this._brief()}_applyAtmosphere(t={}){const e=this.engine.scene;e.background=new le(t.background??1713459);const[n,s,r]=t.fog||[2766146,22,48];e.fog=new qr(n,s,r),e.environmentIntensity=t.envIntensity??.35,this.engine.renderer.toneMappingExposure=t.exposure??1}_brief(){const t=[{label:O("app.start"),onClick:()=>this.panels.hide()}];this.vrSupported&&!this.engine.isVR&&t.unshift({label:O("app.enterVr"),style:"secondary",onClick:()=>this._enterVR()}),this.panels.show({kicker:O(`env.${this.env.id}.name`),title:O("brief.title"),body:[O(`env.${this.env.id}.brief`,{count:this.env.content.hazards.length}),O("brief.tip")],buttons:t})}async _enterVR(){try{await this.engine.enterVR()}catch(t){console.warn(t),this._notify(O("app.vrUnsupported"))}}_clearWorld(){this.practice.active&&this.practice.stop(),this.world&&(this.engine.scene.remove(this.world.root),this.world=null),this.input.world=null,this.input.locked=!0;for(const t of this.markers)t.removeFromParent();this.markers=[]}_showHud(){this._hideHud();const t=this.hud=K("div");this.hoverLabel=K("div.hover-label"),this.hudHazards=K("div.value"),this.hudDots=K("div.progress-dots"),this.hudPpe=K("div.value");const e=K("div.hud-actions",{},K("button.btn.secondary",{text:O("hud.hint"),onclick:()=>this._toggleHint()}),K("button.btn",{text:O("hud.finish"),onclick:()=>this._finish()}));e.prepend(K("button.btn.secondary",{text:O("app.worksites"),onclick:()=>this._changeWorksite()})),this.vrSupported&&e.prepend(K("button.btn.secondary",{text:O("app.enterVr"),onclick:()=>this._enterVR()})),t.append(K("div.hud-top",{},K("div.hud-chip",{},K("img.hud-logo",{src:es,alt:"Seabery"})),K("div",{style:"display:flex;gap:10px"},K("div.hud-chip",{},K("div",{},K("div.label",{text:O("hud.hazards")}),this.hudHazards),this.hudDots),K("div.hud-chip",{},K("div",{},K("div.label",{text:O("hud.ppe")}),this.hudPpe)))),K("div.hud-bottom",{},K("div.hint-text",{text:matchMedia("(pointer:coarse)").matches?O("app.howtoTabletText"):O("app.howtoPcText")}),e),this.hoverLabel),this.uiRoot.prepend(t),this._renderHud()}_hideHud(){this.hud&&(this.hud.remove(),this.hud=null),this.vrHud.mesh.visible=!1}_counts(){const t=this.env.content,e=t.hazards.filter(s=>{var r;return(r=this.state.hazards[s.id])==null?void 0:r.found}).length,n=t.ppe.filter(s=>this.state.ppe[s.id]).length;return{found:e,total:t.hazards.length,ppe:n,ppeTotal:t.ppe.length}}_renderHud(){if(this.phase==="practice"){this.practice.renderHud(!0);return}if(!this.env||!this.state||this.phase!=="explore"){this.vrHud.mesh.visible=!1;return}const t=this._counts();this.hud&&(this.hudHazards.textContent=`${t.found}/${t.total}`,this.hudDots.replaceChildren(...this.env.content.hazards.map(e=>{var n;return K(`span${(n=this.state.hazards[e.id])!=null&&n.found?".done":""}`)})),this.hudPpe.textContent=`${t.ppe}/${t.ppeTotal}`,this.hud.style.display=this.engine.isVR?"none":""),this.vrHud.mesh.visible=this.engine.isVR,this.vrHud.render({kicker:O(`env.${this.env.id}.name`),title:`${O("hud.hazards")} ${t.found}/${t.total}`,body:[`${O("hud.ppe")} ${t.ppe}/${t.ppeTotal}`,this.lastMsg].filter(Boolean),buttons:[{label:O("hud.hint"),style:"secondary",onClick:()=>this._toggleHint()},{label:O("app.worksites"),style:"secondary",onClick:()=>this._changeWorksite()},{label:O("hud.finish"),onClick:()=>this._finish()}]})}_notify(t){av(this.uiRoot,t),this.lastMsg=t,this._renderHud(),clearTimeout(this._msgTimer),this._msgTimer=setTimeout(()=>{this.lastMsg=null,this._renderHud()},6e3)}_onHover(t){if(!this.hoverLabel)return;if(!t){this.hoverLabel.style.display="none";return}const e=t.item.id;this.hoverLabel.textContent=O(e==="PPE"?`env.${this.env.id}.ppeLabel`:`hazards.${e}.label`),this.hoverLabel.style.left=t.x+"px",this.hoverLabel.style.top=t.y+"px",this.hoverLabel.style.display="block"}_buildMarkers(){for(const t of Object.values(this.world.interactables)){const e=new Us(new Yr({map:this.markerTex,depthTest:!1,transparent:!0}));e.scale.setScalar(.32),e.position.copy(t.anchor),e.renderOrder=900,e.visible=!1,e.userData.item=t,this.engine.scene.add(e),this.markers.push(e)}}_toggleHint(){this.hintOn=!this.hintOn,this.hintOn&&(this.state.hints++,this._notify(O("hud.hintShown")))}_update(t,e){this.world&&this.world.update(t,e);for(const n of this.markers)n.visible=this.hintOn&&!n.userData.item.done&&this.phase==="explore",n.visible&&(n.position.y=n.userData.item.anchor.y+Math.sin(e*3)*.05,n.scale.setScalar(.3+Math.sin(e*6)*.02))}_onSelect(t){this.phase==="explore"&&(t.kind==="hazard"?this._hazardPanel(t):t.kind==="ppe"&&this._ppePanel(t))}_mcq(t,{onAnswer:e,actionLabel:n,onAction:s,closable:r=!0}){const o=Gv(t.options.length),a=c=>{const l=c!=null,u=c===t.correct;this.panels.show({kicker:t.kicker,title:l&&t.answeredTitle?t.answeredTitle:t.question,options:o.map(h=>({text:t.options[h],state:l?h===t.correct?"correct":h===c?"wrong":null:null,disabled:l})),onOption:l?null:h=>{const d=o[h];e&&e(d===t.correct),a(d)},feedback:l?{ok:u,title:O(u?"panel.correct":"panel.notQuite"),text:t.why}:null,source:l&&t.source?`${O("panel.basedOn")}: ${t.source}`:null,buttons:l?[{label:n,onClick:s}]:r?[{label:O("app.close"),style:"secondary",onClick:()=>this.panels.hide()}]:[]})};a(null)}_hazardPanel(t){const e=this.env.content.hazards.find(s=>s.id===t.id),n=O(`hazards.${t.id}`);this._mcq({kicker:`${O("hud.inspect")} · ${n.label}`,question:O("panel.whatsWrong"),answeredTitle:n.name,options:n.options,correct:e.correct,why:n.why,source:n.source},{onAnswer:s=>{this.state.hazards[t.id]={found:!0,firstTry:s},this._renderHud()},actionLabel:O("panel.fix"),onAction:async()=>{this.panels.hide(),t.done=!0,t.setHighlight(!1),await t.fix(),this._notify(O("hud.fixed",{name:n.name}));const s=this._counts();s.found===s.total&&setTimeout(()=>this._notify(O("hud.allFound")),1200)}})}_ppePanel(t){const e=this.env.content.ppe,n=e.find(o=>this.state.ppe[o.id]===void 0);if(!n)return;const s=O(`ppe.items.${n.id}`),r=e.indexOf(n);this._mcq({kicker:`${O("ppe.title")} · ${r+1}/${e.length}`,question:s.q,options:s.options,correct:n.correct,why:s.why,source:s.source},{onAnswer:o=>{this.state.ppe[n.id]=o,this._renderHud()},actionLabel:r<e.length-1?O("app.continue"):O("app.close"),onAction:()=>{if(r<e.length-1){this._ppePanel(t);return}this.panels.hide(),t.done=!0,t.setHighlight(!1),this._notify(O("hud.ppeDone"))}})}_finish(){if(this.phase!=="explore")return;const t=this._counts();t.found<t.total||t.ppe<t.ppeTotal?this.panels.show({title:O("finishConfirm.title"),body:O("finishConfirm.body",t),buttons:[{label:O("finishConfirm.keep"),style:"secondary",onClick:()=>this.panels.hide()},{label:O("finishConfirm.finish"),onClick:()=>this._quizIntro()}]}):this._quizIntro()}_quizIntro(){this.phase="quiz",this.hintOn=!1,this._renderHud(),this.panels.show({title:O("quizIntro.title"),body:O("quizIntro.body",{count:this.env.content.quiz.length}),buttons:[{label:O("app.start"),onClick:()=>this._quizQuestion(0)}]})}_quizQuestion(t){const e=O(`quizzes.${this.env.id}`)[t],n=this.env.content.quiz.length;this._mcq({kicker:O("panel.question",{n:t+1,total:n}),question:e.q,options:e.options,correct:this.env.content.quiz[t],why:e.why,source:e.source},{closable:!1,onAnswer:s=>{this.state.quiz[t]=s},actionLabel:t<n-1?O("app.continue"):O("results.title"),onAction:()=>t<n-1?this._quizQuestion(t+1):this._results()})}_score(){const t=this.env.content,e=this.state,n=t.hazards.map(h=>{const d=e.hazards[h.id];return{id:h.id,name:O(`hazards.${h.id}.name`),status:d?d.firstTry?"ok":"part":"miss"}}),s=t.ppe.map(h=>({id:h.id,name:O(`ppe.items.${h.id}.q`),status:e.ppe[h.id]===void 0?"miss":e.ppe[h.id]?"ok":"part"})),r=e.quiz.filter(Boolean).length,o=n.reduce((h,d)=>h+(d.status==="ok"?1:d.status==="part"?.5:0),0)+s.filter(h=>h.status==="ok").length+r,a=n.length+s.length+t.quiz.length,c=o/a,l=n.every(h=>h.status!=="miss")&&s.every(h=>h.status!=="miss"),u=s.every(h=>h.status==="ok");return{hz:n,pp:s,quizOk:r,quizTotal:t.quiz.length,score:c,pass:l&&u&&c>=t.passScore}}_results({record:t=!0}={}){this.phase="results",this.input.locked=!0,this._renderHud();const e=this.result=t||!this.result?this._score():this.result;if(t){const n=this._counts();if(qh({type:"check",env:this.env.id,score:e.score,pass:e.pass,found:n.found,total:n.total,ppeOk:e.pp.filter(s=>s.status==="ok").length,ppeTotal:e.pp.length,quizOk:e.quizOk,quizTotal:e.quizTotal}),this.world.weldSpot){this._readyToWeld(e);return}}this.engine.isVR?this.panels.show({kicker:O("results.title"),title:e.pass?O("results.passed"):O("results.notPassed"),body:[`${O("results.score")}: ${Math.round(e.score*100)}%`,e.pass?O("results.passText"):O("results.failText"),...this.lastWeld?[`${O("practice.kicker")}: ${O(`practice.processes.${this.lastWeld.process}.name`)} · ${O(`practice.resultTitle.${this.lastWeld.rating}`)}`]:[]],buttons:[{label:O("results.retry"),style:e.pass?"secondary":void 0,onClick:()=>{this.panels.hide(),this.startEnv(this.env.id)}},{label:O("app.worksites"),style:"secondary",onClick:()=>this._vrMenu()},{label:O("app.close")+" VR",style:"secondary",onClick:()=>this.engine.exitVR()},{label:this.lastWeld?O("practice.again"):O("practice.startWelding"),onClick:()=>this.startPractice()}]}):(this.panels.hide(),this._resultsScreen())}_readyToWeld(t){this.panels.show({kicker:`${O("results.title")} · ${O(`env.${this.env.id}.name`)}`,title:t.pass?O("results.passed"):O("results.checkDone"),body:[`${O("results.score")}: ${Math.round(t.score*100)}%`,t.pass?O("practice.startJob"):O("practice.startJobReview"),O(`env.${this.env.id}.job`)],buttons:[{label:O("results.seeResults"),style:"secondary",onClick:()=>{this.panels.hide(),this._results({record:!1})}},{label:O("practice.startWelding"),onClick:()=>this.startPractice()}]})}startPractice(){!this.world||!this.world.weldSpot||(this.panels.hide(),this.layer.replaceChildren(),this._hideHud(),this.phase="practice",this.practice.start())}_afterPractice(){this.phase="results",this.input.locked=!0,this._results({record:!1})}_changeWorksite(){this.phase==="explore"&&this.panels.show({title:O("changeConfirm.title"),body:O("changeConfirm.body"),buttons:[{label:O("changeConfirm.stay"),style:"secondary",onClick:()=>this.panels.hide()},{label:O("changeConfirm.change"),onClick:()=>this.engine.isVR?this._vrMenu():this.showMenu()}]})}_vrMenu(){const t=Ho.filter(n=>n.available),e=Pl();this.panels.show({kicker:O("app.title"),title:O("app.chooseEnv"),options:t.map(n=>({text:`${O(`env.${n.id}.name`)}${e[n.id]?" · "+O("app.best",{score:Math.round(e[n.id].score*100)}):""}`})),onOption:n=>{this.panels.hide(),this.startEnv(t[n].id)},buttons:[{label:O("app.close")+" VR",style:"secondary",onClick:()=>{this.panels.hide(),this.engine.exitVR(),this.showMenu()}}]})}showRecords(){this.phase="records",this._clearWorld(),this.panels.hide(),this._hideHud();const t=oc(),e=r=>O(`env.${r}.name`),n=r=>K("tr",{},K("td",{text:Tv(r.at)}),K("td",{text:e(r.env)}),K("td",{text:r.type==="check"?O("records.check"):`${O("records.weld")} · ${O(`practice.processes.${r.process}.name`)}`}),K("td",{},r.type==="check"?K(`span.st.${r.pass?"ok":"miss"}`,{text:`${Math.round(r.score*100)}% · ${r.pass?O("records.ready"):O("records.notReady")}`}):K(`span.st.${r.rating==="great"?"ok":r.rating==="good"?"part":"miss"}`,{text:O(`practice.resultTitle.${r.rating}`)}))),s=t.length?K("div.table-wrap",{},K("table.records",{},K("thead",{},K("tr",{},["date","worksite","activity","result"].map(r=>K("th",{text:O(`records.${r}`)})))),K("tbody",{},t.map(n)))):K("p",{text:O("records.empty")});this.layer.replaceChildren(K("div.screen",{},K("div.results",{},K("div.kicker",{text:O("app.title")}),K("h1",{text:O("records.title")}),K("p.draft-note",{style:"text-align:left;color:#4a5d73;margin:0 0 14px",text:O("records.note")}),s,K("div.actions",{style:"margin-top:18px"},K("button.btn",{text:O("records.back"),onclick:()=>this.showMenu()}),t.length?K("button.btn.secondary",{text:O("records.clear"),onclick:()=>{confirm(O("records.clearConfirm"))&&(Ev(),this.showRecords())}}):null))))}async debugPractice(){await this.startEnv("factory"),this.panels.hide();const t=this.env.content;await Promise.all(Object.values(this.world.interactables).map(e=>(e.done=!0,e.kind==="hazard"?e.fix():null)));for(const e of t.hazards)this.state.hazards[e.id]={found:!0,firstTry:!0};for(const e of t.ppe)this.state.ppe[e.id]=!0;this.state.quiz=t.quiz.map(()=>!0),this.result=this._score(),this.startPractice()}_resultsScreen(){const t=this.result;this._hideHud();const e=this._counts(),n={ok:O("results.stOk"),part:O("results.stPart"),miss:O("results.stMiss")},s=r=>K("li",{},K(`span.st.${r.status}`,{text:n[r.status]}),K("span",{text:`${r.name}`}));this.layer.replaceChildren(K("div.screen",{},K("div.results",{},K("div.kicker",{text:`${O("results.title")} · ${O(`env.${this.env.id}.name`)}`}),K("h1",{text:t.pass?O("results.passed"):O("results.notPassed")}),K("p",{text:t.pass?O("results.passText"):O("results.failText")}),K("div.score-row",{},K("div.score-tile",{},K("div.n",{text:`${Math.round(t.score*100)}%`}),K("div.l",{text:O("results.score")})),K("div.score-tile",{},K("div.n",{text:`${e.found}/${e.total}`}),K("div.l",{text:O("results.hazardsFound")})),K("div.score-tile",{},K("div.n",{text:`${t.pp.filter(r=>r.status==="ok").length}/${t.pp.length}`}),K("div.l",{text:O("results.ppeCorrect")})),K("div.score-tile",{},K("div.n",{text:`${t.quizOk}/${t.quizTotal}`}),K("div.l",{text:O("results.quizCorrect")}))),K("ul.item-list",{},t.hz.map(s),t.pp.map(s)),K("div.practice-unlock",{},K("div",{},K("strong",{text:this.lastWeld?`${O("practice.kicker")}: ${O(`practice.resultTitle.${this.lastWeld.rating}`)}`:O("practice.unlockTitle")}),K("span",{text:this.lastWeld?O(`practice.processes.${this.lastWeld.process}.name`):O(`env.${this.env.id}.job`)})),K("button.btn",{text:this.lastWeld?O("practice.again"):O("practice.startWelding"),onclick:()=>this.startPractice()})),K("div.actions",{},K(`button.btn${t.pass?".secondary":""}`,{text:O("results.retry"),onclick:()=>this.startEnv(this.env.id)}),K("button.btn.secondary",{text:O("app.myResults"),onclick:()=>this.showRecords()}),K("button.btn.secondary",{text:O("results.menu"),onclick:()=>this.showMenu()})),K("p.draft-note",{style:"text-align:left;color:#4a5d73",text:`${O("results.sourcesTitle")}: ${O(`env.${this.env.id}.sources`)}`}),K("p.draft-note",{style:"text-align:left;color:#4a5d73;margin-top:4px",text:O("app.draftNote")}))))}}async function Xv(){await Kh();try{await Promise.all([document.fonts.load("900 40px Gilroy"),document.fonts.load("500 40px Gilroy"),document.fonts.load('400 40px "PP Supply Mono"')])}catch{}const i=new Al(document.getElementById("scene")),t=new rv(i),e=document.getElementById("ui"),n=new cv(i,t,e),s=await Al.vrSupported(),r=new Wv({engine:i,input:t,panels:n,uiRoot:e,vrSupported:s});r.showMenu(),new URLSearchParams(location.search).has("practice")&&r.debugPractice(),window.__game=r}Xv();
