(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const rd="modulepreload",od=function(i,t){return new URL(i,t).href},vl={},ad=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=od(l,n),l in vl)return;vl[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const _=o[p];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":rd,h||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),h)return new Promise((p,_)=>{u.addEventListener("load",p),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Wc={title:"Seabery VR Immersive Welding Worksites",kicker:"Pre-weld safety training",lead:"Step into a real-scale worksite. Find the hazards, choose the right PPE and get the workplace ready before the arc is struck.",draftNote:"Prototype v0.1. Safety content is a draft based on public guidance (ANSI Z49.1, OSHA, HSE, INSST, DGUV, ISO/EN) and is pending review by a qualified welding expert.",loading:"Loading worksite…",chooseEnv:"Choose a worksite",comingSoon:"Coming soon",available:"Available",howtoPc:"PC",howtoPcText:"Drag to look · WASD to move · click the floor to walk · click objects",howtoTablet:"Tablet",howtoTabletText:"Drag to look · tap the floor to walk · tap objects",howtoVr:"VR headset",howtoVrText:"Point and pull the trigger · aim at the floor to teleport · thumbstick to turn",enterVr:"Enter VR",vrUnsupported:"VR not available on this device",start:"Start",back:"Back",close:"Close",continue:"Continue",menu:"Menu",worksites:"Worksites",myResults:"My results",best:"Best {score}%"},Xc={factory:{name:"Factory",desc:"Metal fabrication workshop with MAG/MMA welding bays, extraction and gas supply.",brief:"You are about to weld in Bay 2 of the fabrication workshop. Before you strike an arc, walk around the welding area and find everything that is not safe. There are {count} hazards. Then visit the PPE locker and dress for the job.",ppeLabel:"PPE locker",sources:"ANSI Z49.1:2021 Safety in Welding, Cutting and Allied Processes (AWS) · OSHA 29 CFR 1910 Subpart Q · UK HSE welding fume guidance (STSU1-2019) · INSST NTP 494 · DGUV Regel 100-500 Kap. 2.26 · EN ISO 11611, EN 12477, ISO 16321-2, EN ISO 15012-1 (scope).",job:"Your job is at the bench in Bay 2."},construction:{name:"Construction site",desc:"Steel frame under construction, outdoors after rain: work at height, falling sparks, wet conditions.",brief:"You are about to weld a beam connection on the first floor of a steel frame under construction. It rained this morning. Before you strike an arc, check the edge, what is below you, the equipment and the permit. There are {count} hazards. Then visit the PPE box and dress for the job.",ppeLabel:"PPE box",sources:"ANSI Z49.1:2021 Safety in Welding, Cutting and Allied Processes (AWS) · OSHA 29 CFR 1926 Subparts J and M (construction) · OSHA 29 CFR 1910.254 · EN ISO 11611, EN 12477, ISO 16321-2 (scope).",job:"Your job is at the work stand next to the beam connection."},shipyard:{name:"Shipyard",desc:"Double-bottom tank in a hull block: confined space, air testing, gas supply and fire watch.",brief:"You are about to weld inside double-bottom tank 4P of a hull block. A glass training window in the deck lets you see into the tank and the next compartment. Before anyone enters or strikes an arc, check the entry, the air, the gas supply, the ventilation and the paperwork. There are {count} hazards. Then visit the PPE locker.",ppeLabel:"PPE locker",sources:"ANSI Z49.1:2021 §6 and §7 (confined spaces) · OSHA 29 CFR 1915.12, 1915.14, 1915.504 (shipyards) · OSHA 29 CFR 1910.252 · UK HSE Asphyxiation hazards in welding · INSST BASEQUIM 007 · EN ISO 11611, EN 12477, ISO 16321-2 (scope).",job:"Your job is the repair on the bottom of tank 4P. You work kneeling inside the tank."},underwater:{name:"Underwater",desc:"Wet welding on a pier pile from a dive barge: electrical safety, trapped gas, dive team and diver PPE.",brief:"A diver is about to wet weld a repair on a pier pile, supplied from the dive station on the barge. You are on the barge deck; the side of the water is shown as a training cutaway so you can see the work below. Check the dive station, the welding circuit and the work site. There are {count} hazards. Then check the diver's equipment at the dive rack.",ppeLabel:"Diver equipment rack",sources:"US Navy Underwater Cutting & Welding Manual S0300-BB-MAN-010 (App. D) · OSHA 29 CFR 1910 Subpart T (commercial diving) · UK HSE Diving at Work Regulations 1997, ACoP L104 · IMCA D 045 · AWS D3.6M, EN ISO 15618-1 (scope).",job:"Your job: weld the repair plate on the pile bracket, 4 m below the surface. You are now the diver."}},qc={title:"Your task: the pre-weld check",body:"Before you strike an arc, find everything that is not safe. There are {count} hazards. Then visit the PPE station and dress for the job.",tip:"Objects you can inspect light up orange when you point at them."},Yc={hazards:"Hazards",ppe:"PPE",hint:"Hint",finish:"Finish check",hintText:"Look around the booth, the bench, the gas supply and the walkway.",hintShown:"Orange markers show where to look.",inspect:"Inspect",allFound:"All hazards found. Visit the PPE station, then finish the check.",ppeDone:"PPE check complete.",fixed:"Fixed: {name}"},$c={whatsWrong:"What is the problem here?",correct:"Correct",notQuite:"Not quite",why:"Why it matters",fix:"Fix it",basedOn:"Based on",question:"Question {n} of {total}"},Zc={title:"Finish the check?",body:"You have found {found} of {total} hazards and completed {ppe} of {ppeTotal} PPE checks. Anything you have not found will count as missed.",keep:"Keep looking",finish:"Finish"},jc={title:"Final questions",body:"Answer {count} short questions to complete the module."},Kc={title:"Safety check results",passed:"Ready to weld",notPassed:"Not ready to weld yet",passText:"You prepared the workplace safely. Keep these checks as a routine before every job.",failText:"Review the items below and try again. In a real workshop, missing one of these can cause an injury or a fire.",score:"Overall score",hazardsFound:"Hazards found",ppeCorrect:"PPE correct",quizCorrect:"Quiz correct",stOk:"Correct",stPart:"Found, wrong answer",stMiss:"Missed",retry:"Try again",menu:"Main menu",sourcesTitle:"Sources",seeResults:"See full results",checkDone:"Safety check complete"},Jc=JSON.parse(`{"AREA-01":{"name":"Combustibles in the spark zone","label":"Box under the bench","options":["Nothing. It is normal storage under the bench.","Oily rags and cardboard are inside the spark zone and can catch fire.","The box is too heavy to lift safely."],"why":"Sparks and spatter travel far and can start fires that smoulder unseen. Move combustibles away from the work, or cover them with fire-resistant material. If they cannot be moved or protected, do not weld.","fixText":"Rags moved to a closed metal bin outside the spark zone.","source":"ANSI Z49.1:2021 §6.1; OSHA 1910.252(a)(1)"},"VEN-01":{"name":"Fume extraction off and out of position","label":"Fume extraction arm","options":["It is fine. General ventilation in the hall is enough.","The arm should point at the ceiling to remove hot air.","Extraction is switched off and parked away from the work. Position the hood close to the arc and switch it on."],"why":"All welding fume, including mild steel fume, can cause lung cancer. Capturing fume at the source with local exhaust ventilation (LEV) is the expected control; general ventilation alone is not enough. Keep your head out of the plume.","fixText":"Extraction on and the hood positioned close to the work.","source":"ANSI Z49.1:2021 §5.3–5.4; HSE Safety Alert STSU1-2019"},"RAD-01":{"name":"Curtain open to the walkway","label":"Booth curtain","options":["The curtain is open to the walkway, so arc radiation can reach people passing by.","Curtains should stay open so the supervisor can watch.","The curtain colour is wrong."],"why":"Arc radiation can injure the eyes of people nearby (\\"arc eye\\"), not just the welder. Screens and curtains also stop spatter from reaching others. Close the curtain and make sure nobody nearby is unprotected before you strike the arc.","fixText":"Curtain closed. The walkway is protected.","source":"ANSI Z49.1:2021 §4.1.3; OSHA 1910.252(b)(2)(iii)"},"GAS-01":{"name":"Gas cylinder not secured","label":"Shielding gas cylinder","options":["The cylinder is standing free. It must be chained upright so it cannot fall.","The cylinder should be laid on the floor to be more stable.","Nothing. Shielding gas is not flammable, so it is safe."],"why":"A falling cylinder can break its valve and turn into a projectile. Keep cylinders chained upright, away from sparks, and never let them become part of the welding circuit.","fixText":"Cylinder chained upright to the trolley.","source":"ANSI Z49.1:2021 §10.8.2.1, §10.8.4.12–14; OSHA 1910.253(b)(5)"},"ELE-02":{"name":"Live electrode holder left on the table","label":"Electrode holder","options":["It is fine as long as the welder comes back soon.","Cool the holder in a bucket of water before you put it down.","A live holder with an electrode is lying on the steel table. Remove the electrode, hang the holder on an insulated hook and switch the output off."],"why":"A live electrode holder can give an electric shock or strike an arc on anything it touches. When you stop welding, remove the electrode and place the holder where it cannot touch people, metal or cylinders. Never cool a holder in water.","fixText":"Electrode removed and holder hung on the insulated hook.","source":"ANSI Z49.1:2021 §11.4.6, §11.4.8, §11.4.9.5; OSHA 1926.351(d)"},"AREA-02":{"name":"Fire extinguisher blocked","label":"Fire extinguisher","options":["The extinguisher is blocked by pallets. Clear the access so it can be reached in seconds.","The extinguisher is in the wrong colour.","Nothing. Somebody can move the pallets if there is a fire."],"why":"A small fire must be put out in seconds. Suitable fire-extinguishing equipment must be ready and within reach before you start welding.","fixText":"Pallets moved. The extinguisher is accessible.","source":"ANSI Z49.1:2021 §6.2.1.1"},"FAC-05":{"name":"Open solvent can at the bench","label":"Solvent can","options":["It is useful to keep degreaser at hand while welding.","An open can of chlorinated degreaser is next to the arc. Close it and take it out of the welding area.","The can is only a problem if it is full."],"why":"Arc UV and heat can turn chlorinated solvent vapour into phosgene, a highly toxic gas. Open flammable liquids are also a fire risk. Keep degreasing away from the welding area.","fixText":"Solvent can closed and removed from the welding area.","source":"ANSI Z49.1:2021 §5.5.4.1"},"CON-01":{"name":"Open edge without fall protection","label":"Open edge at the welding point","options":["Nothing. Just be careful near the edge.","The edge has no guardrail and there is no fall-arrest system. Fall protection must be in place before welding at height.","A warning sign on the edge is enough."],"why":"An electric shock or a flash from the arc can startle you and cause a fall. Edge protection such as a guardrail, or a fall-arrest system, must be in place before you start.","fixText":"Guardrail installed along the open edge.","source":"OSHA 29 CFR 1926.501(b)(1); ANSI Z49.1:2021 §11.4.9.8, E11.4.9.2"},"CON-02":{"name":"Sparks falling on people and materials below","label":"Area below the welding point","options":["Barricade the area below, move the timber and keep people out before welding.","Sparks cool down before they reach the ground.","Ask the worker below to wear a hard hat."],"why":"Sparks and slag fall to lower levels and can set fire to materials or burn people below. Clear and barricade the area underneath and cover any openings.","fixText":"Area below barricaded, timber moved away.","source":"ANSI Z49.1:2021 §6.1.4.2, E6.2.2; OSHA 29 CFR 1926.352(f)"},"CON-03":{"name":"Welding machine standing in water","label":"Welding machine","options":["It is fine. Welding machines are built for outdoor use.","Move it to a dry, raised place and protect it from rain without blocking its vents. If it got wet, have it dried and tested first.","Put sand on the puddle and carry on."],"why":"Water greatly increases the risk of electric shock. A machine that has been wet must be dried and tested before it is used.","fixText":"Machine moved onto a pallet under a rain cover.","source":"ANSI Z49.1:2021 §11.4.9.2, §11.5.2.2, §11.5.3; OSHA 29 CFR 1910.254(d)(9)(ii)"},"CON-04":{"name":"Work clamp on a gas pipe","label":"Work clamp","options":["Attach the work clamp to the work, close to the joint. Never use a gas pipe as the return.","It is fine. The pipe is steel and conducts well.","Wrap the clamp in tape first."],"why":"Welding current that flows through other parts can heat them. Pipelines carrying gas or flammable liquids must never carry the return current.","fixText":"Work clamp moved onto the work, next to the joint.","source":"OSHA 29 CFR 1926.351(c); OSHA 29 CFR 1910.254(c)(2)(iii)"},"CON-05":{"name":"No hot-work permit or fire watch","label":"Permit board","options":["A permit is only needed indoors.","Start now. The permit can be signed afterwards.","Get the hot-work permit and assign a fire watch with an extinguisher, who stays on after welding stops."],"why":"Many site fires start after the welder has left, from smouldering material. A fire watch checks hidden areas and stays for the time set in the permit.","fixText":"Permit issued and fire watch assigned.","source":"ANSI Z49.1:2021 §6.2.2, §6.2.4, §6.3; OSHA 29 CFR 1926.352(e)"},"CON-06":{"name":"Gas cylinder lifted with a sling","label":"Gas cylinder on the crane hook","options":["Lift cylinders only in a cylinder cradle or on a suitable pallet, never with a sling or a magnet.","Fine if the sling is pulled tight.","Fine if the cylinder is nearly empty."],"why":"Cylinders lifted with slings or magnets can slip out and fall, and a falling cylinder can kill. Remove the regulator and fit the valve cap before lifting.","fixText":"Cylinder lifted in a cradle and set down on the deck.","source":"OSHA 29 CFR 1926.350(a)(2), (a)(6)"},"SHP-01":{"name":"No attendant or entry permit","label":"Manhole and entry board","options":["Go in anyway. It is a short job.","Stop. A valid entry permit and a trained attendant outside, with an agreed signal and rescue plan, are needed before anyone enters.","Leave the cover half closed so nobody falls in."],"why":"In a tank or double bottom, gas or fume can make you unconscious without warning. Someone outside must be able to raise the alarm and start the planned rescue.","fixText":"Entry permit valid, attendant on duty at the manhole.","source":"ANSI Z49.1:2021 §7.4, §7.5; INSST BASEQUIM 007"},"SHP-02":{"name":"Air in the tank not tested","label":"Gas detector","options":["Test the air for oxygen, flammable and toxic gases before entry, at all levels, and keep testing during the work.","No test is needed if you cannot smell anything.","Testing at the manhole opening is enough."],"why":"Argon and CO2 are heavier than air and collect in the lowest areas, while oxygen from a leak raises the fire risk. Test the whole space, especially the bottom.","fixText":"Atmosphere tested and recorded.","source":"ANSI Z49.1:2021 §7.1.1, §7.1.2; UK HSE Asphyxiation hazards in welding"},"SHP-03":{"name":"Gas cylinder inside the tank","label":"Argon cylinder","options":["Fine if it is chained.","Fine. Argon is not flammable.","Cylinders and power sources stay outside the space. Only hoses and cables go in."],"why":"A leaking cylinder inside a tank can quickly create an atmosphere you cannot breathe.","fixText":"Cylinder taken out and chained in the rack on deck.","source":"ANSI Z49.1:2021 §7.2.1; OSHA 29 CFR 1910.252(b)(4)(iii)"},"SHP-04":{"name":"Ventilation does not reach the work","label":"Ventilation fan and duct","options":["It is fine at the manhole. The air will spread.","Extend the duct to the welding position so fume and gas are removed where they are produced.","Switch the fan off to reduce noise."],"why":"Fume and shielding gas build up quickly in small spaces and affect everyone inside. Ventilation or extraction must work at the welding position.","fixText":"Duct extended to the welding position.","source":"ANSI Z49.1:2021 §7.1, §7.1.3; OSHA 29 CFR 1910.252(c)(4)"},"SHP-05":{"name":"No fire watch on the other side","label":"Compartment on the other side","options":["Nothing is needed. Steel does not burn.","Wet the weld area instead.","Post a fire watch with an extinguisher on the other side of the bulkhead."],"why":"Heat travels through steel plating and can ignite cables or insulation in the next compartment, out of the welder's view.","fixText":"Fire watch with an extinguisher posted in the next compartment.","source":"ANSI Z49.1:2021 §6.2.2, §6.2.3; OSHA 29 CFR 1915.504"},"SHP-06":{"name":"Certificate for the wrong tank","label":"Hot-work certificate","options":["Stop. Get the space tested and a certificate for this tank (4P) before any hot work.","Fine. Tank 3P is next door.","Fine if the certificate was issued today."],"why":"Spaces that held fuel must be tested and certified before hot work, and a certificate only covers the space and time written on it.","fixText":"Certificate issued for tank 4P.","source":"OSHA 29 CFR 1915.14(a)"},"SHP-07":{"name":"Oxygen used to \\"freshen the air\\"","label":"Hose into the tank","options":["Shut it off now. Never use oxygen for ventilation.","Fine if it is done slowly.","Fine if an extinguisher is ready."],"why":"Extra oxygen makes clothing and other materials burn fiercely. Use proper forced ventilation, then leave and re-test the air.","fixText":"Oxygen hose removed.","source":"ANSI Z49.1:2021 §7.1.5; OSHA 29 CFR 1910.252(c)(4)(v); UK HSE Asphyxiation hazards in welding"},"UW-01":{"name":"Safety switch closed while the diver changes the electrode","label":"Knife switch","options":["Nothing. Leaving the switch closed saves time between electrodes.","The switch is closed during an electrode change. Open it until the diver calls \\"switch on\\".","The switch only matters when the machine is above full power."],"why":"With the safety switch open, the diver is fully isolated from the welding current. The tender closes it only when the diver calls for it and confirms every change by voice.","fixText":"Switch open. The tender stands at the switch with the comms headset on.","source":"US Navy S0300-BB-MAN-010 App. D §D-9; OSHA 1910.422(g)(1); IMCA D 045 §8.5.5"},"UW-02":{"name":"AC welding machine connected","label":"Welding machine","options":["The machine is set to AC. Underwater welding needs a DC power source.","Nothing. AC and DC are equally safe in water.","AC is fine if the diver wears thicker gloves."],"why":"An AC shock can lock the hand muscles, so the diver may not be able to let go. AC is much more dangerous underwater than DC.","fixText":"DC welding machine connected. The machine frame is earthed to the barge.","source":"US Navy S0300-BB-MAN-010 §D-4, §D-6; IMCA D 045 §8.5.5"},"UW-03":{"name":"Work clamp far from the weld, diver in the current path","label":"Work (ground) clamp","options":["Nothing. Any point on the structure is a good return.","The clamp should be on the barge so it stays dry.","The clamp is far away, with the diver between electrode and clamp. Fix it close to the weld."],"why":"If your body or equipment is between the electrode and the work clamp, you can become part of the welding circuit. Fix the clamp close to the work, in front of you, and face it.","fixText":"Clamp fixed on the pile close to the weld. The diver faces the clamp.","source":"US Navy S0300-BB-MAN-010 §D-7(e), §D-8(h); IMCA D 045 §8.5.5"},"UW-04":{"name":"Welding under a space where gas can be trapped","label":"Closed space above the weld","options":["Nothing. Gas bubbles always escape to the surface.","Gas from the arc is collecting in the closed space above. Vent or flood the space before welding.","Weld faster so less gas is produced."],"why":"The arc splits water into hydrogen and oxygen, which rise and collect in pockets above the work and can explode. Vent or flood any space where gas could be trapped, and stop if you hear a \\"pop\\".","fixText":"Vent hose fitted from the high point to above the waterline. No gas pocket left.","source":"US Navy S0300-BB-MAN-010 §D-3.1–D-3.2; OSHA 1910.422(g)(5); IMCA D 045 §8.5.5"},"UW-05":{"name":"Comms not tested and no standby diver ready","label":"Dive control station","options":["Comms can be tested once the diver reaches the work.","A standby diver is only needed for deep dives, so this is fine.","Comms are off and the standby diver is not dressed. Test comms and ready the standby diver."],"why":"The safety switch depends on clear voice commands between diver and tender. If the diver gets into trouble, a standby diver must be ready to go in at once.","fixText":"Comms on and tested. Standby diver dressed, helmet to hand.","source":"OSHA 1910.422(c), (g)(1)(i); HSE L104 paras 78, 83–85, 105–106"},"UW-06":{"name":"Electrode holder not insulated for underwater use","label":"Electrode holder","options":["This is a topside holder with bare metal and damaged insulation. Use a fully insulated underwater holder.","Nothing. Seawater cools the holder, so insulation is not needed.","Wrap the bare parts in a cloth and start welding."],"why":"Any bare metal on the holder or a damaged cable joint lets current leak into the water around your hand. Holders made for topside use are not suitable underwater.","fixText":"Fully insulated underwater holder fitted. Cable joint re-insulated, no bubbles.","source":"US Navy S0300-BB-MAN-010 §D-7(a)–(d), §D-8(c); OSHA 1910.422(g)(3); IMCA D 045 §8.5.5"}}`),Qc={title:"Dress for the job",intro:"Choose the right protection for MAG welding at this bay.",items:{"PPE-01":{q:"Which eye and face protection do you take?",options:["A helmet with a cracked cover lens. It still works.","A helmet with intact lenses and the filter shade suited to the process and current, with safety glasses underneath.","Safety glasses only. The arc is short."],why:"Arc radiation burns eyes and skin within seconds. The filter must suit the process and current, with no gaps that let light through. Safety glasses protect you from slag and grinding particles when the helmet is raised.",source:"ANSI Z49.1:2021 §4.2; ISO 16321-2 (scope)"},"PPE-02":{q:"Which clothing is correct?",options:["Polyester hoodie. It is warm.","Cotton t-shirt with rolled-up sleeves.","Flame-resistant welding jacket and trousers: collar and sleeves closed, no turn-ups, pockets empty."],why:"Sparks lodge in turn-ups, open pockets and rolled sleeves. Synthetic fabrics can melt onto the skin.",source:"ANSI Z49.1:2021 §4.3; EN ISO 11611 (scope)"},"PPE-03":{q:"Which gloves and footwear do you choose?",options:["Dry, undamaged welding gloves and safety boots, with the trousers over the boot tops.","Wet welding gloves. They keep your hands cool.","Torn gloves and trainers. It is a short job."],why:"Gloves protect against burns and are part of your insulation from electric shock, so wet or torn gloves increase the risk. Spatter can enter low or open shoes.",source:"ANSI Z49.1:2021 §4.3.2, §4.3.6, §11.4.9.3; EN 12477 (scope)"},"UPPE-01":{q:"Which diving helmet do you take for wet welding?",options:["A helmet with no welding lens. The water filters the arc light.","A helmet with a welding lens fitted and voice comms tested.","A helmet with the comms cable unplugged. You can use hand signals."],why:"The arc can injure your eyes underwater just as it does topside, so the helmet needs a welding lens suited to the water conditions. Voice comms are how you call the switch on and off.",source:"US Navy S0300-BB-MAN-010 §D-12.1(c); OSHA 1910.422(c); HSE L104 para 105"},"UPPE-02":{q:"Which hand and body protection is correct?",options:["Leather welding gloves only. They work topside.","Rubber gloves with a small tear. The suit covers the rest.","Heavy rubber gloves over thin rubber gloves, cuffs over the wrists, and a suit with no tears."],why:"Rubber gloves give the most protection where the voltage is highest, at your hands. Tears in gloves or suit reduce your insulation from the welding current.",source:"US Navy S0300-BB-MAN-010 §D-12.1(a)–(b); OSHA 1910.422(g)(4); IMCA D 045 §8.5.2"},"UPPE-03":{q:"What about your emergency breathing gas?",options:["Bail-out cylinder carried, charged and checked before the dive.","No bail-out needed. The surface supply has a backup.","Take the bail-out cylinder even if the gauge reads empty."],why:"If the surface gas supply fails, the bail-out cylinder gives you enough gas to reach safety. Check it before every dive.",source:"HSE L104 paras 43(b), 101; OSHA 1910.421(g)"}}},th=JSON.parse('{"kicker":"Welding","cta":"Practise welding","unlockTitle":"Ready for the job","unlockText":"The workplace is safe. Now lay a bead with MIG/MAG, stick or TIG.","chooseTitle":"Choose the process","chooseBody":"Arc welding, gas welding and brazing, plasma cutting or resistance welding. Each one is a hands-on taster, not a technique assessment.","processes":{"GMAW":{"name":"GMAW · MIG/MAG","short":"wire-fed gun with shielding gas","desc":"A wire electrode is fed continuously through the gun while shielding gas protects the weld pool. Wire and gas start when you pull the trigger."},"SMAW":{"name":"SMAW · Stick (MMA)","short":"coated electrode that melts as you weld","desc":"A flux-coated electrode carries the current and melts into the joint. It gets shorter as you weld, so keep bringing your hand closer. The flux leaves slag on the bead, which you chip off afterwards."},"GTAW":{"name":"GTAW · TIG","short":"tungsten electrode, filler rod in the other hand","desc":"A non-consumable tungsten electrode makes the arc under shielding gas. Filler rod is added by hand into the front of the weld pool. Keep the tungsten out of the pool."},"OAW":{"name":"OAW · Oxy-acetylene welding","short":"oxygen and acetylene flame, filler rod by hand","desc":"A flame of oxygen and acetylene melts the edges of the joint. You add filler rod by hand into the front of the weld pool. There is no arc and no current: the heat comes from the flame alone."},"TB":{"name":"TB · Torch brazing","short":"flame heats the joint, filler flows in, base metal does not melt","desc":"In brazing the base metal does not melt. The flame heats the joint and a filler metal with a lower melting point flows into the gap between the parts. Here you braze a lap joint along the edge of the top sheet."},"PAC":{"name":"PAC · Plasma arc cutting","short":"constricted arc and gas jet cut through the metal","desc":"A narrow, very hot plasma arc melts the metal and the gas jet blows it out of the cut. Follow the soapstone line at an even speed. When the cut goes through, the sparks come out underneath the plate."},"RSW":{"name":"RSW · Resistance spot welding","short":"two electrodes clamp the sheets, current welds a spot","desc":"Two copper electrodes clamp the overlapping sheets. Current flows through the clamped point and melts a small nugget between the sheets. No filler and no arc. The gun runs its weld cycle: keep it still until the cycle ends."},"RSEW":{"name":"RSEW · Resistance seam welding","short":"rotating wheel electrodes make a continuous seam","desc":"Wheel-shaped electrodes roll along the overlapping sheets and weld a row of overlapping spots, giving a continuous, tight seam. In industry this is usually done on a machine; here you guide the wheels by hand."}},"howScreen":"Press and hold on the joint at the left mark, then move steadily to the right mark. Release to stop.","howVr":"Bring the tip close to the joint at the left mark and hold the trigger to strike the arc. Move steadily to the right mark. Release to stop.","helmet":"Your helmet is down. The auto-darkening filter darkens when the arc strikes.","joint":"Joint welded","finishPass":"Finish pass","change":"Change process","exit":"Exit welding","soundOn":"Sound on","soundOff":"Sound off","weldFirst":"Weld along the joint first.","electrodeUsed":"Electrode used up. A new one is fitted: carry on from where you stopped.","stuck":"The electrode stuck to the plate. Release the trigger and strike again, keeping a short gap.","tungsten":"The tungsten touched the plate. In real work you would stop and regrind it. Release the trigger and start again.","lost":"Arc lost: you moved too far from the plate. Release the trigger and strike again.","slagTitle":"Remove the slag","slagBody":"Stick welding leaves a layer of slag on the bead. Chip and brush it off before you inspect the weld. Keep your eye protection on: hot slag can fly.","chip":"Chip the slag","resultTitle":{"great":"Great pass","good":"Good start","keep":"Keep practising"},"fb":{"coverage":{"good":"Joint welded from mark to mark.","bad":"Part of the joint was not welded. Weld from the left mark to the right mark."},"line":{"good":"You stayed on the joint.","bad":"The bead wandered off the joint. Watch the front edge of the weld pool and follow the joint line."},"pace":{"good":"Good travel speed.","slow":"Too slow: the bead got wide and heaped up. Move a little faster.","fast":"Too fast: the bead is thin and narrow. Slow down so the metal can fuse."},"steady":{"good":"Smooth, steady movement.","bad":"Your speed kept changing. Try to move at an even pace."},"distance":{"good":"Good distance to the work.","far":"Often too far from the work: the arc becomes unstable and spatters.","close":"Often too close to the work. Keep a short, constant gap."}},"markGood":"OK","markTip":"TIP","note":"Practice feedback is indicative only and is not a technique assessment.","soldamatic":"To train real welding technique with measured feedback, use the Soldamatic augmented-reality welding simulator.","again":"Weld again","done":"Done","wetNote":"Wet welding uses waterproofed stick electrodes, and real underwater technique differs from welding in air. This practice shows the basic movement only.","startWelding":"Start welding","startJob":"The workplace is safe. Now do the job.","startJobReview":"Some items were missed. Check them in the full results later. Now do the job.","materials":{"MS":{"name":"Mild steel (MS)","note":"low-carbon steel, the most common material for welding practice."},"AL":{"name":"Aluminium (Al)","note":"light and conducts heat quickly. A tough oxide layer forms on the surface, so it is cleaned just before welding."},"SS":{"name":"Stainless steel (SS)","note":"keep it clean and use tools reserved for stainless to avoid contamination. The weld shows heat-tint colours."},"CI":{"name":"Cast iron (CI)","note":"brittle and prone to cracking. It is often preheated and cooled slowly."},"BRASS":{"name":"Brass","note":"a copper–zinc alloy. Heating it gives off zinc fume: use good fume extraction."},"CU":{"name":"Copper (Cu)","note":"conducts heat very quickly, so the heat spreads away from the joint fast."}},"materialTitle":"Choose the material","materialBody":"In real work, the welding procedure (WPS) states which process, consumables and settings suit each material. In this practice the material changes how the plate looks and how quickly it heats up, not real settings.","material":"Material","current":"current","changeMaterial":"Change material","progress":{"weld":"Joint done","cut":"Cut done","spot":"Spots done"},"how":{"arc":"Press and hold on the joint at the left mark, then move steadily to the right mark. Release to stop.","arcVr":"Bring the tip close to the joint at the left mark and hold the trigger to strike the arc. Move steadily to the right mark. Release to stop.","flame":"Press and hold on the joint at the left mark. Keep the flame there until the metal glows and melts, then move steadily to the right mark. Release to lift the torch.","flameVr":"Hold the inner cone of the flame just above the joint at the left mark and hold the trigger. When the metal glows and melts, move steadily to the right mark.","TB":"Press and hold on the edge of the top sheet at the left mark. Heat until the filler flows into the joint, then move steadily to the right mark.","TBVr":"Hold the flame just above the edge of the top sheet at the left mark and hold the trigger. When the filler flows, move steadily to the right mark.","cut":"Press and hold on the cut line at the left mark, then move steadily along the line to the right mark. Release to stop.","cutVr":"Bring the torch close to the cut line at the left mark and hold the trigger. Move steadily along the line to the right mark.","spot":"Press and hold on a cross until the weld cycle ends, then release and go to the next cross. Weld all six.","spotVr":"Put the electrode on a cross and hold the trigger until the weld cycle ends. Release and go to the next cross.","seam":"Press and hold at the left mark and roll the wheels steadily along the line to the right mark.","seamVr":"Put the wheels on the line at the left mark, hold the trigger and roll steadily to the right mark."},"eyes":{"arc":"Your helmet is down. The auto-darkening filter darkens when the arc strikes.","cut":"Your helmet is down. Plasma cutting makes a bright arc: the filter darkens when the arc starts.","flame":"You wear gas welding goggles with a filter lens. They do not darken automatically, so the view stays tinted while you work.","spot":"There is no arc, but hot metal can spray out of the joint. You wear safety glasses or a face shield, and gloves.","seam":"There is no arc, but hot metal can spray out of the joint. You wear safety glasses or a face shield, and gloves."},"walking":"Going to the job…","skip":"Skip","cutFirst":"Cut along the line first.","lostFlame":"The flame moved too far from the work. Release the trigger and bring it back.","lostContact":"The wheels lost contact with the sheets. Release the trigger and start again.","spotShort":"Released before the weld cycle ended: that spot is weak.","fbKind":{"flame":{"coverage":{"good":"Joint fused from mark to mark.","bad":"Part of the joint did not melt. Keep the flame on the joint until the pool forms, then move on."},"pace":{"good":"Good travel speed.","slow":"Too slow: too much heat went in and the bead got wide.","fast":"Too fast: the metal did not melt everywhere. Slow down."},"distance":{"good":"Good flame distance.","far":"The flame was often too far from the work, so the joint heated slowly.","close":"The flame was often too close to the work. Keep the inner cone just above the pool."}},"TB":{"coverage":{"good":"Filler flowed along the whole joint.","bad":"The filler did not flow along the whole joint. Heat the joint until the filler flows, then move on."},"line":{"good":"You stayed on the joint.","bad":"The filler wandered off the joint. Keep it on the edge of the top sheet."},"pace":{"good":"Good travel speed.","slow":"Too slow: the joint got hotter than needed. Move on as soon as the filler flows.","fast":"Too fast: the joint was not hot enough for the filler to flow everywhere."}},"cut":{"coverage":{"good":"Cut through from mark to mark.","bad":"Part of the line was not cut through."},"line":{"good":"You followed the cut line.","bad":"The cut wandered off the line. Watch the line just in front of the torch."},"pace":{"good":"Good cutting speed: the sparks came out underneath.","slow":"Too slow: the cut got wide and dross can build up underneath.","fast":"Too fast: the arc did not cut through and the sparks sprayed back up."},"distance":{"good":"Good torch height.","far":"The torch was often too high: the cut gets wider and less clean.","close":"The torch was often too close. Keep an even, short distance."}},"seam":{"coverage":{"good":"Seam welded from mark to mark.","bad":"Part of the seam was not welded."},"line":{"good":"The wheels stayed on the line.","bad":"The seam wandered off the line. Keep the wheels on the middle of the overlap."},"pace":{"good":"Good, even speed.","slow":"Too slow: too much heat went into the sheets.","fast":"Too fast: the spots may not overlap into a tight seam."}},"spot":{"count":{"good":"All six spots welded.","bad":"Some crosses have no spot. Weld one spot on each cross."},"place":{"good":"Spots on the crosses.","bad":"Some spots are off the crosses. Line the electrode up with the cross before you start."},"hold":{"good":"You held the gun until each weld cycle ended.","bad":"You released too early on some spots, so the weld did not finish. Keep the trigger pressed until the cycle ends."},"still":{"good":"You kept the gun still.","bad":"The gun moved during the weld and metal sprayed out. Keep it still until the cycle ends."}}},"xs":{"open":"Cross-section","title":"Cross-section check","body":{"arc":"Welds are checked by cutting a slice across the joint, polishing and etching it (macro examination). This view shows what a slice of your weld could look like.","flame":"Welds are checked by cutting a slice across the joint, polishing and etching it (macro examination). This view shows what a slice of your joint could look like.","cut":"This view shows the plate cut across your cut line, so you can see the cut edge through the full thickness.","spot":"Spot welds are checked by cutting through the spot, polishing and etching it (macro examination). This view shows what a slice through each spot could look like.","seam":"Seam welds are checked by cutting a slice across the seam, polishing and etching it (macro examination). This view shows what a slice of your seam could look like."},"bodyShort":"A slice cut across your weld, as in a macro-etch test. Choose where to cut.","pick":"Choose where to cut. The red line on the plate shows the slice.","shown":"shown","ok":"looks right","check":"check this","back":"Back to results","spot":"Spot {n}","pos":["Cut 1 · near the start","Cut 2","Cut 3 · middle","Cut 4","Cut 5 · near the end"],"note":"Illustration based on how you moved in the practice. It is not a measured result and shows no real dimensions. Real macro examination of welds follows the applicable standard (e.g. ISO 17639) and the acceptance criteria in the procedure.","label":{"base":"Base metal","weld":"Weld metal","haz":"Heat-affected zone","pores":"Pores","unfusedRoot":"Root not fused","excess":"Too much weld metal","lackFusion":"Edge not fused","notJoined":"Not joined","filler":"Braze filler","flowed":"Filler flowed into the overlap","noFlow":"Filler did not flow in","heavyFillet":"Heavy fillet","kerf":"Kerf (cut gap)","dross":"Dross","notCut":"Not cut","notThrough":"Not cut through","line":"Marked line","nugget":"Weld nugget","smallNugget":"Small nugget","expulsion":"Expelled metal","deepMark":"Deep electrode mark","mark":"Mark","illustration":"Illustration · not to scale"},"find":{"arc":{"good":"Full fusion: the weld metal goes through the joint to the root and blends smoothly into both plates.","none":"No weld here: the two plates are not joined at this point.","fast":"Too fast here: the weld is narrow and shallow, and the bottom of the joint did not fuse (incomplete penetration).","slow":"Too slow here: too much weld metal and heat. The bead is high and wide, and the heat-affected zone is larger.","off":"Off the joint here: the weld sits to one side, so one edge of the joint did not fuse (lack of fusion).","far":"Too far from the work here: gas pores are trapped in the weld metal (porosity)."},"flame":{"good":"Full fusion: the joint melted through to the root and the filler blended into both plates.","fast":"Too fast here: the flame did not melt the joint through, so the bottom of the joint did not fuse (incomplete penetration).","slow":"Too slow here: the joint overheated. The bead is wide and the heated zone around it is large."},"TB":{"good":"Good braze: the filler flowed into the overlap and formed a smooth fillet. In brazing the base metal does not melt.","none":"No braze here: the parts are not joined at this point.","fast":"Too fast here: the joint was not hot enough, so the filler did not flow into the overlap.","slow":"Too slow here: the joint overheated and the filler built up in a heavy fillet.","off":"Off the joint here: the filler sits on one part only and did not wet both parts."},"cut":{"good":"Clean cut: the kerf goes through the full thickness with straight edges.","none":"Not cut here: the plate is still in one piece.","fast":"Too fast here: the arc did not cut through the full thickness.","slow":"Too slow here: the kerf is wide and molten metal (dross) stuck to the underside.","off":"Off the line here: the cut is away from the marked line."},"spot":{"good":"Good spot weld: a lens-shaped nugget joins the two sheets where they touch.","none":"No spot weld at this mark: the sheets are only touching.","short":"Weld cycle stopped early: the nugget is small and the joint is weak.","moved":"Gun moved during the weld: molten metal sprayed out of the joint (expulsion), leaving a deep, uneven mark.","off":"Away from the mark: the spot is not where the joint needs it."},"seam":{"good":"Good seam weld: the nugget joins the two sheets where they touch, all along the seam.","none":"No weld here: the sheets are only touching.","fast":"Too fast here: the nugget is small, so the seam may not be continuous or tight.","slow":"Too slow here: the nugget is large and the wheels pressed deep marks into the sheets.","off":"Off the line here: the seam is away from the marked line."}}}}'),eh={factory:[{q:"Combustible materials near the work cannot be moved. What should you do?",options:["Weld quickly to reduce the risk.","Protect them with fire-resistant covers or guards. If they cannot be protected, do not weld.","Spray them with water and start."],why:"If combustibles cannot be moved or protected, the work must not start.",source:"ANSI Z49.1:2021 §6.1.4"},{q:"Why must you never cool a hot electrode holder by dipping it in water?",options:["It damages the electrode.","It makes the fume worse.","It can expose you to electric shock."],why:"Water greatly increases the risk of electric shock.",source:"OSHA 1926.351(d)(2); ANSI Z49.1:2021 §11.4.9.5"},{q:"According to UK HSE, is general room ventilation enough to control mild steel welding fume indoors?",options:["No. Engineering controls such as LEV are expected, with respiratory protection if exposure remains.","Yes, if the doors are open.","Only for TIG welding."],why:"HSE treats all welding fume, including mild steel fume, as a carcinogen and expects fume to be controlled at the source.",source:"HSE Safety Alert STSU1-2019"},{q:"Why must chlorinated degreasing be kept away from the welding arc?",options:["It makes the weld look dull.","Arc UV and heat can turn its vapour into phosgene, a highly toxic gas.","It is only a problem in winter."],why:"Phosgene can form from chlorinated hydrocarbon vapours exposed to the arc.",source:"ANSI Z49.1:2021 §5.5.4.1"},{q:"Why must a gas cylinder never become part of the welding circuit?",options:["An arc struck on a cylinder can weaken it.","It wastes shielding gas.","It changes the gas mixture."],why:"Arc strikes damage the cylinder wall and can lead to failure. Keep the work clamp and electrode away from cylinders.",source:"ANSI Z49.1:2021 §10.8.4.12–14"}],construction:[{q:"Why is an electric shock more dangerous when you weld at height?",options:["It is not. Height makes no difference.","The shock, or just the surprise, can make you fall. Fall protection must be in place first.","Because the cables are longer."],why:"Even a mild shock can cause a fall from height.",source:"ANSI Z49.1:2021 §11.4.9.8, E11.4.9.2"},{q:"It is raining and the steel is wet. What lowers your risk of electric shock?",options:["Dry gloves and boots, an insulating mat, and a machine protected from the rain.","Welding faster.","Wet gloves for a better grip."],why:"Water and sweat make electric shock more likely. Keep yourself insulated from the wet work.",source:"ANSI Z49.1:2021 §11.4.9.2, §11.4.9.3"},{q:"Where must the work (return) clamp be attached?",options:["On a nearby gas pipe.","On the crane hook.","On the work, close to the joint."],why:"Current must not flow through pipelines, chains, ropes, cranes or hoists.",source:"OSHA 29 CFR 1926.351(c); OSHA 29 CFR 1910.254(c)(2)(iii)"},{q:"What does the fire watch do after welding stops?",options:["Leaves together with the welder.","Stays for the time set in the permit and checks for smouldering fires, also below and behind.","Switches off the welding machine."],why:"Many fires start after the work has finished, from material that smoulders unseen.",source:"ANSI Z49.1:2021 §6.2.4; OSHA 29 CFR 1926.352(e)"},{q:"How should a gas cylinder be lifted to an upper level?",options:["With a choker sling.","With a lifting magnet.","In a cylinder cradle or on a suitable pallet."],why:"Slings and magnets can let the cylinder slip and fall.",source:"OSHA 29 CFR 1926.350(a)(6)"}],shipyard:[{q:"Where do gas cylinders and welding power sources go when you weld inside a double bottom?",options:["Next to the welder for easy adjustment.","Outside the confined space.","At the bottom of the space, chained."],why:"A leak inside the space can create an atmosphere you cannot breathe.",source:"ANSI Z49.1:2021 §7.2.1; OSHA 29 CFR 1910.252(b)(4)(iii)"},{q:"Why is argon especially dangerous in tanks and double bottoms?",options:["It is flammable.","It is heavier than air, collects in low areas and pushes out the oxygen.","It is toxic in small amounts."],why:"You cannot see or smell it, and it collects at the bottom of the space.",source:"UK HSE Asphyxiation hazards in welding; ANSI Z49.1:2021 E7.1.2"},{q:'A co-worker wants to blow oxygen into a tank to "freshen the air". What is correct?',options:["Good idea if done slowly.","Fine if a fire extinguisher is present.","Never. Oxygen enrichment greatly increases the fire risk."],why:"In air with extra oxygen, clothing and other materials catch fire easily and burn fiercely.",source:"ANSI Z49.1:2021 §7.1.5; OSHA 29 CFR 1910.252(c)(4)(v)"},{q:"You weld on a bulkhead. What extra precaution may be needed?",options:["A fire watch on the other side, because heat can ignite materials in the next compartment.","Nothing. Steel does not burn.","A darker filter shade."],why:"Heat conducts through the plate to areas the welder cannot see.",source:"ANSI Z49.1:2021 §6.2.2; OSHA 29 CFR 1915.504"},{q:"What does the attendant outside a confined space do?",options:["Goes in to help at the first sign of trouble, without a plan.","Stays outside, keeps contact with the people inside and raises the alarm to start the planned rescue.","Leaves once the welder is inside."],why:"Unplanned rescues often add more victims. The attendant raises the alarm and starts the planned rescue.",source:"ANSI Z49.1:2021 §7.4, §7.5"}],underwater:[{q:"Why is AC power never used for underwater welding?",options:["It gives poorer weld quality.","It uses more power from the generator.","An AC shock can lock your hand muscles so you cannot let go."],why:"AC shock stops you from relaxing the muscles that control your hand. This is why only DC is used underwater.",source:"US Navy S0300-BB-MAN-010 §D-4"},{q:'While welding, you hear a "pop" near the work. What do you do?',options:["Stop welding and investigate. Gas is collecting above the work.","Keep welding. Pops are normal underwater.","Weld faster to finish before more gas forms."],why:"A pop means explosive gas is collecting above the work area. Stop and find the cause before you continue.",source:"US Navy S0300-BB-MAN-010 §D-3.2"},{q:"Your electrode is nearly used up. What is the correct sequence?",options:["Change it quickly while the current is still on.",'Call "switch off", wait for the tender to confirm, then change the electrode.',"Ask the tender to lower the current, then change it."],why:"Never change an electrode with the current on. Wait until the tender confirms the switch is off.",source:"US Navy S0300-BB-MAN-010 §3-12.3, §D-5(f); IMCA D 045 §8.5.5"},{q:"Where is a diver at greatest risk of severe electric shock when welding?",options:["At the seabed.","Inside a dry habitat.","In the splash zone, only partly in the water."],why:"When you are only partly in the water, current can pass through your body more easily. The splash zone is the most hazardous place to weld.",source:"US Navy S0300-BB-MAN-010 App. D (warning, §D-3)"},{q:"Voice comms are lost during welding and cannot be quickly restored. What happens?",options:["The tender keeps the switch closed so the diver can finish.","The switch stays open, welding stops and the working dive is ended.","The diver carries on using hand signals to the camera."],why:"The switch may only be operated on the diver's voice command. Without comms the working dive must end.",source:"OSHA 1910.422(g)(1), (i); US Navy S0300-BB-MAN-010 §E-6"}]},nh={title:"Change worksite?",body:"Your progress in this worksite will be lost. Finished results are kept in My results.",stay:"Stay here",change:"Change worksite"},ih={title:"My results",note:"Saved only in this browser on this device. Clearing the browser data removes them.",empty:"No results yet. Complete a safety check to see it here.",date:"Date",worksite:"Worksite",activity:"Activity",result:"Result",check:"Safety check",weld:"Weld practice",ready:"Ready to weld",notReady:"Not ready",clear:"Clear history",clearConfirm:"Delete all saved results on this device?",back:"Back"},sh={title:"Start welding now?",body:"Your safety check is not finished. You can do the job now and come back to the check afterwards: what you have found so far is kept.",stay:"Keep checking",back:"Back at the worksite. Carry on with the safety check."},Wa={app:Wc,env:Xc,brief:qc,hud:Yc,panel:$c,finishConfirm:Zc,quizIntro:jc,results:Kc,hazards:Jc,ppe:Qc,practice:th,quizzes:eh,changeConfirm:nh,records:ih,weldNow:sh},ld=Object.freeze(Object.defineProperty({__proto__:null,app:Wc,brief:qc,changeConfirm:nh,default:Wa,env:Xc,finishConfirm:Zc,hazards:Jc,hud:Yc,panel:$c,ppe:Qc,practice:th,quizIntro:jc,quizzes:eh,records:ih,results:Kc,weldNow:sh},Symbol.toStringTag,{value:"Module"})),xl=Object.assign({"./locales/en.json":()=>ad(()=>Promise.resolve().then(()=>ld),void 0,import.meta.url).then(i=>i.default)});let rh=Wa,js="en";async function cd(){const t=[new URLSearchParams(location.search).get("lang"),...navigator.languages||[navigator.language]].filter(Boolean).map(e=>e.toLowerCase());for(const e of t){const n=[e,e.split("-")[0]].find(s=>xl[`./locales/${s}.json`]);if(n){js=n;break}}js!=="en"&&(rh=await xl[`./locales/${js}.json`]()),document.documentElement.lang=js}const _l=(i,t)=>t.split(".").reduce((e,n)=>e==null?void 0:e[n],i);function I(i,t){let e=_l(rh,i);return e===void 0&&(e=_l(Wa,i)),e===void 0?i:(typeof e=="string"&&t&&(e=e.replace(/\{(\w+)\}/g,(n,s)=>t[s]??n)),e)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="170",hd=0,yl=1,dd=2,oh=1,ah=2,Vn=3,ui=0,en=1,tn=2,hi=0,es=1,as=2,wl=3,Ml=4,ud=5,Mi=100,fd=101,pd=102,md=103,gd=104,vd=200,xd=201,_d=202,yd=203,jo=204,Ko=205,wd=206,Md=207,Sd=208,bd=209,Td=210,Ed=211,Ad=212,Cd=213,Rd=214,Jo=0,Qo=1,ta=2,ls=3,ea=4,na=5,ia=6,sa=7,lh=0,Pd=1,Ld=2,di=0,Id=1,Dd=2,Ud=3,ch=4,Nd=5,kd=6,Od=7,hh=300,cs=301,hs=302,ra=303,oa=304,Zr=306,Hr=1e3,bi=1001,aa=1002,gn=1003,Fd=1004,Ks=1005,In=1006,co=1007,Ti=1008,Kn=1009,dh=1010,uh=1011,Ws=1012,qa=1013,Ei=1014,Dn=1015,Zs=1016,Ya=1017,$a=1018,ds=1020,fh=35902,ph=1021,mh=1022,Rn=1023,gh=1024,vh=1025,ns=1026,us=1027,Za=1028,ja=1029,xh=1030,Ka=1031,Ja=1033,Ur=33776,Nr=33777,kr=33778,Or=33779,la=35840,ca=35841,ha=35842,da=35843,ua=36196,fa=37492,pa=37496,ma=37808,ga=37809,va=37810,xa=37811,_a=37812,ya=37813,wa=37814,Ma=37815,Sa=37816,ba=37817,Ta=37818,Ea=37819,Aa=37820,Ca=37821,Fr=36492,Ra=36494,Pa=36495,_h=36283,La=36284,Ia=36285,Da=36286,zd=3200,Bd=3201,yh=0,Hd=1,ci="",Qe="srgb",ms="srgb-linear",jr="linear",De="srgb",Ii=7680,Sl=519,Vd=512,Gd=513,Wd=514,wh=515,Xd=516,qd=517,Yd=518,$d=519,Ua=35044,bl="300 es",Xn=2e3,Vr=2001;class gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const ks=Math.PI/180,fs=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function Qa(i,t){return(i%t+t)%t}function Zd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jd(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function Kd(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function Jd(i,t=1){return t-Math.abs(Qa(i,t*2)-t)}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nu(i,t){return i+Math.random()*(t-i)}function iu(i){return i*(.5-Math.random())}function su(i){i!==void 0&&(Tl=i);let t=Tl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(i){return i*ks}function ou(i){return i*fs}function au(i){return(i&i-1)===0&&i!==0}function lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*u,a*l);break;case"YXY":i.set(c*u,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*u,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gn={DEG2RAD:ks,RAD2DEG:fs,generateUUID:Un,clamp:Ke,euclideanModulo:Qa,mapLinear:Zd,inverseLerp:jd,lerp:Os,damp:Kd,pingpong:Jd,smoothstep:Qd,smootherstep:tu,randInt:eu,randFloat:nu,randFloatSpread:iu,seededRandom:su,degToRad:ru,radToDeg:ou,isPowerOfTwo:au,ceilPowerOfTwo:lu,floorPowerOfTwo:cu,setQuaternionFromProperEuler:hu,normalize:Ie,denormalize:Cn};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,o,a,c,l){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=s[0],g=s[3],m=s[6],b=s[1],x=s[4],v=s[7],N=s[2],C=s[5],P=s[8];return r[0]=o*_+a*b+c*N,r[3]=o*g+a*x+c*C,r[6]=o*m+a*v+c*P,r[1]=l*_+h*b+d*N,r[4]=l*g+h*x+d*C,r[7]=l*m+h*v+d*P,r[2]=f*_+u*b+p*N,r[5]=f*g+u*x+p*C,r[8]=f*m+u*v+p*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,u=l*r-o*c,p=e*d+n*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ho.makeScale(t,e)),this}rotate(t){return this.premultiply(ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new he;function Mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function du(){const i=Xs("canvas");return i.style.display="block",i}const El={};function Us(i){i in El||(El[i]=!0,console.warn(i))}function uu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ee={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Al=[.64,.33,.3,.6,.15,.06],Cl=[.2126,.7152,.0722],Rl=[.3127,.329],Pl=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[ms]:{primaries:Al,whitePoint:Rl,transfer:jr,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:Cl,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Al,whitePoint:Rl,transfer:De,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:Cl,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let Di;class mu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Xs("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gu=0;class Sh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uo(s[o].image)):r.push(uo(s[o]))}else r=uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0;class nn extends gs{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=bi,s=bi,r=In,o=Ti,a=Rn,c=Kn,l=nn.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Un(),this.name="",this.source=new Sh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=hh;nn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(u+1)/2,N=(m+1)/2,C=(h+f)/4,P=(d+_)/4,E=(p+g)/4;return x>v&&x>N?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=P/n):v>N?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=E/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=P/r,s=E/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xu extends gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends xu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bh extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=p,t[e+3]=_;return}if(d!==_||c!==f||l!==u||h!==p){let g=1-a;const m=c*f+l*u+h*p+d*_,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const N=Math.sqrt(x),C=Math.atan2(N,m*b);g=Math.sin(g*C)/N,a=Math.sin(a*C)/N}const v=a*b;if(c=c*g+f*v,l=l*g+u*v,h=h*g+p*v,d=d*g+_*v,g===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=N,l*=N,h*=N,d*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+c*u-l*f,t[e+1]=c*p+h*f+l*d-a*u,t[e+2]=l*p+h*u+a*f-c*d,t[e+3]=h*p-a*d-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),u=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"YZX":this._x=f*h*d+l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d-f*u*p;break;case"XZY":this._x=f*h*d-l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d+f*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new S,Il=new Jn;class Ri{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Qs.subVectors(this.max,ys),Ui.subVectors(t.a,ys),Ni.subVectors(t.b,ys),ki.subVectors(t.c,ys),ei.subVectors(Ni,Ui),ni.subVectors(ki,Ni),mi.subVectors(Ui,ki);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!po(e,Ui,Ni,ki,Qs)||(e=[1,0,0,0,1,0,0,0,1],!po(e,Ui,Ni,ki,Qs))?!1:(tr.crossVectors(ei,ni),e=[tr.x,tr.y,tr.z],po(e,Ui,Ni,ki,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new S,new S,new S,new S,new S,new S,new S,new S],Sn=new S,Js=new Ri,Ui=new S,Ni=new S,ki=new S,ei=new S,ni=new S,mi=new S,ys=new S,Qs=new S,tr=new S,gi=new S;function po(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const yu=new Ri,ws=new S,mo=new S;class Pi{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(mo)),this.expandByPoint(ws.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new S,go=new S,er=new S,ii=new S,vo=new S,nr=new S,xo=new S;class Kr{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){go.copy(t).add(e).multiplyScalar(.5),er.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(er),a=ii.dot(this.direction),c=-ii.dot(er),l=ii.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*c-a,f=o*a-c,p=r*h,d>=0)if(f>=-p)if(f<=p){const _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(go).addScaledVector(er,f),u}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){vo.subVectors(e,t),nr.subVectors(n,t),xo.crossVectors(vo,nr);let o=this.direction.dot(xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(nr.crossVectors(ii,nr));if(c<0)return null;const l=a*this.direction.dot(vo.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(xo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,s,r,o,a,c,l,h,d,f,u,p,_,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,f,u,p,_,g)}set(t,e,n,s,r,o,a,c,l,h,d,f,u,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+p*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=p+u*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,u=c*d,p=l*h,_=l*d;e[0]=f+_*a,e[4]=p*a-u,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,u=c*d,p=l*h,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,_=a*d;e[0]=c*h,e[4]=p*l-u,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=u*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,u=o*l,p=a*c,_=a*l;e[0]=c*h,e[4]=_-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*d+p,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*c,u=o*l,p=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Mu)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),si.crossVectors(n,pn),si.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),si.crossVectors(n,pn)),si.normalize(),ir.crossVectors(pn,si),s[0]=si.x,s[4]=ir.x,s[8]=pn.x,s[1]=si.y,s[5]=ir.y,s[9]=pn.y,s[2]=si.z,s[6]=ir.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],g=n[10],m=n[14],b=n[3],x=n[7],v=n[11],N=n[15],C=s[0],P=s[4],E=s[8],y=s[12],w=s[1],R=s[5],k=s[9],D=s[13],F=s[2],q=s[6],H=s[10],tt=s[14],z=s[3],ct=s[7],xt=s[11],gt=s[15];return r[0]=o*C+a*w+c*F+l*z,r[4]=o*P+a*R+c*q+l*ct,r[8]=o*E+a*k+c*H+l*xt,r[12]=o*y+a*D+c*tt+l*gt,r[1]=h*C+d*w+f*F+u*z,r[5]=h*P+d*R+f*q+u*ct,r[9]=h*E+d*k+f*H+u*xt,r[13]=h*y+d*D+f*tt+u*gt,r[2]=p*C+_*w+g*F+m*z,r[6]=p*P+_*R+g*q+m*ct,r[10]=p*E+_*k+g*H+m*xt,r[14]=p*y+_*D+g*tt+m*gt,r[3]=b*C+x*w+v*F+N*z,r[7]=b*P+x*R+v*q+N*ct,r[11]=b*E+x*k+v*H+N*xt,r[15]=b*y+x*D+v*tt+N*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*u-n*c*u)+_*(+e*c*u-e*l*f+r*o*f-s*o*u+s*l*h-r*c*h)+g*(+e*l*d-e*a*u-r*o*d+n*o*u+r*a*h-n*l*h)+m*(-s*a*h-e*c*d+e*a*f+s*o*d-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],_=t[13],g=t[14],m=t[15],b=d*g*l-_*f*l+_*c*u-a*g*u-d*c*m+a*f*m,x=p*f*l-h*g*l-p*c*u+o*g*u+h*c*m-o*f*m,v=h*_*l-p*d*l+p*a*u-o*_*u-h*a*m+o*d*m,N=p*d*c-h*_*c-p*a*f+o*_*f+h*a*g-o*d*g,C=e*b+n*x+s*v+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=b*P,t[1]=(_*f*r-d*g*r-_*s*u+n*g*u+d*s*m-n*f*m)*P,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*m+n*c*m)*P,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*u-n*c*u)*P,t[4]=x*P,t[5]=(h*g*r-p*f*r+p*s*u-e*g*u-h*s*m+e*f*m)*P,t[6]=(p*c*r-o*g*r-p*s*l+e*g*l+o*s*m-e*c*m)*P,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*u+e*c*u)*P,t[8]=v*P,t[9]=(p*d*r-h*_*r-p*n*u+e*_*u+h*n*m-e*d*m)*P,t[10]=(o*_*r-p*a*r+p*n*l-e*_*l-o*n*m+e*a*m)*P,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*u-e*a*u)*P,t[12]=N*P,t[13]=(h*_*s-p*d*s+p*n*f-e*_*f-h*n*g+e*d*g)*P,t[14]=(p*a*s-o*_*s-p*n*c+e*_*c+o*n*g-e*a*g)*P,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,u=r*h,p=r*d,_=o*h,g=o*d,m=a*d,b=c*l,x=c*h,v=c*d,N=n.x,C=n.y,P=n.z;return s[0]=(1-(_+m))*N,s[1]=(u+v)*N,s[2]=(p-x)*N,s[3]=0,s[4]=(u-v)*C,s[5]=(1-(f+m))*C,s[6]=(g+b)*C,s[7]=0,s[8]=(p+x)*P,s[9]=(g-b)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const l=1/r,h=1/o,d=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Xn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let u,p;if(a===Xn)u=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Vr)u=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*l,u=(n+s)*h;let p,_;if(a===Xn)p=(o+r)*d,_=-2*d;else if(a===Vr)p=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new S,bn=new Ce,wu=new S(0,0,0),Mu=new S(1,1,1),si=new S,ir=new S,pn=new S,Dl=new Ce,Ul=new Jn;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Su=0;const Nl=new S,Fi=new Jn,zn=new Ce,sr=new S,Ms=new S,bu=new S,Tu=new Jn,kl=new S(1,0,0),Ol=new S(0,1,0),Fl=new S(0,0,1),zl={type:"added"},Eu={type:"removed"},zi={type:"childadded",child:null},_o={type:"childremoved",child:null};class Ge extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new S,e=new wn,n=new Jn,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new he}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ms,sr,this.up):zn.lookAt(sr,Ms,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(zn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eu),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new S(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new S,Bn=new S,yo=new S,Hn=new S,Bi=new S,Hi=new S,Bl=new S,wo=new S,Mo=new S,So=new S,bo=new Ue,To=new Ue,Eo=new Ue;class yn{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Bn.subVectors(n,e),yo.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(Bn),c=Tn.dot(yo),l=Bn.dot(Bn),h=Bn.dot(yo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return bo.setScalar(0),To.setScalar(0),Eo.setScalar(0),bo.fromBufferAttribute(t,e),To.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bo,r.x),o.addScaledVector(To,r.y),o.addScaledVector(Eo,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Bn.subVectors(t,e),Tn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Tn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,n),Hi.subVectors(r,n),wo.subVectors(t,n);const c=Bi.dot(wo),l=Hi.dot(wo);if(c<=0&&l<=0)return e.copy(n);Mo.subVectors(t,s);const h=Bi.dot(Mo),d=Hi.dot(Mo);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Bi,o);So.subVectors(t,r);const u=Bi.dot(So),p=Hi.dot(So);if(p>=0&&u<=p)return e.copy(r);const _=u*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Hi,a);const g=h*p-u*d;if(g<=0&&d-h>=0&&u-p>=0)return Bl.subVectors(r,s),a=(d-h)/(d-h+(u-p)),e.copy(s).addScaledVector(Bl,a);const m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(Bi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=Qa(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ao(o,r,t+1/3),this.g=Ao(o,r,t),this.b=Ao(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Ee.fromWorkingColorSpace(rn.copy(this),t),Math.round(Ke(rn.r*255,0,255))*65536+Math.round(Ke(rn.g*255,0,255))*256+Math.round(Ke(rn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Qe){Ee.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,s=rn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(rr);const n=Os(ri.h,rr.h,e),s=Os(ri.s,rr.s,e),r=Os(ri.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new le;le.NAMES=Th;let Au=0;class pi extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Un(),this.name="",this.blending=es,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Ko,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fe extends pi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new S,or=new yt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}}class Eh extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ah extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cu=0;const _n=new Ce,Co=new Ge,Vi=new S,mn=new Ri,Ss=new Ri,Ze=new S;class We extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?Ah:Eh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(mn.min,Ss.min),mn.expandByPoint(Ze),Ze.addVectors(mn.max,Ss.max),mn.expandByPoint(Ze)):(mn.expandByPoint(Ss.min),mn.expandByPoint(Ss.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ze.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(t,l),Ze.add(Vi)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new S,c[E]=new S;const l=new S,h=new S,d=new S,f=new yt,u=new yt,p=new yt,_=new S,g=new S;function m(E,y,w){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,w),f.fromBufferAttribute(r,E),u.fromBufferAttribute(r,y),p.fromBufferAttribute(r,w),h.sub(l),d.sub(l),u.sub(f),p.sub(f);const R=1/(u.x*p.y-p.x*u.y);isFinite(R)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-u.y).multiplyScalar(R),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(R),a[E].add(_),a[y].add(_),a[w].add(_),c[E].add(g),c[y].add(g),c[w].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let E=0,y=b.length;E<y;++E){const w=b[E],R=w.start,k=w.count;for(let D=R,F=R+k;D<F;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new S,v=new S,N=new S,C=new S;function P(E){N.fromBufferAttribute(s,E),C.copy(N);const y=a[E];x.copy(y),x.sub(N.multiplyScalar(N.dot(y))).normalize(),v.crossVectors(C,y);const R=v.dot(c[E])<0?-1:1;o.setXYZW(E,x.x,x.y,x.z,R)}for(let E=0,y=b.length;E<y;++E){const w=b[E],R=w.start,k=w.count;for(let D=R,F=R+k;D<F;D+=3)P(t.getX(D+0)),P(t.getX(D+1)),P(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,d=new S;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let u=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?u=c[_]*a.data.stride+a.offset:u=c[_]*h;for(let m=0;m<h;m++)f[p++]=l[u++]}return new dn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new Ce,vi=new Kr,ar=new Pi,Vl=new S,lr=new S,cr=new S,hr=new S,Ro=new S,dr=new S,Gl=new S,ur=new S;class Y extends Ge{constructor(t=new We,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Ro.fromBufferAttribute(d,t),o?dr.addScaledVector(Ro,h):dr.addScaledVector(Ro.sub(e),h))}e.add(dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(ar.containsPoint(vi.origin)===!1&&(vi.intersectSphere(ar,Vl)===null||vi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=b,N=x;v<N;v+=3){const C=a.getX(v),P=a.getX(v+1),E=a.getX(v+2);s=fr(this,m,t,n,l,h,d,C,P,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=p,m=_;g<m;g+=3){const b=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=fr(this,o,t,n,l,h,d,b,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=b,N=x;v<N;v+=3){const C=v,P=v+1,E=v+2;s=fr(this,m,t,n,l,h,d,C,P,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let g=p,m=_;g<m;g+=3){const b=g,x=g+1,v=g+2;s=fr(this,o,t,n,l,h,d,b,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Ru(i,t,e,n,s,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ui,a),c===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:i}}function fr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,lr),i.getVertexPosition(c,cr),i.getVertexPosition(l,hr);const h=Ru(i,t,e,n,lr,cr,hr,Gl);if(h){const d=new S;yn.getBarycoord(Gl,lr,cr,hr,d),s&&(h.uv=yn.getInterpolatedAttribute(s,a,c,l,d,new yt)),r&&(h.uv1=yn.getInterpolatedAttribute(r,a,c,l,d,new yt)),o&&(h.normal=yn.getInterpolatedAttribute(o,a,c,l,d,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new S,materialIndex:0};yn.getNormal(lr,cr,hr,f.normal),h.face=f,h.barycoord=d}return h}class Le extends We{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function p(_,g,m,b,x,v,N,C,P,E,y){const w=v/P,R=N/E,k=v/2,D=N/2,F=C/2,q=P+1,H=E+1;let tt=0,z=0;const ct=new S;for(let xt=0;xt<H;xt++){const gt=xt*R-D;for(let Ft=0;Ft<q;Ft++){const Kt=Ft*w-k;ct[_]=Kt*b,ct[g]=gt*x,ct[m]=F,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[g]=0,ct[m]=C>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(Ft/P),d.push(1-xt/E),tt+=1}}for(let xt=0;xt<E;xt++)for(let gt=0;gt<P;gt++){const Ft=f+gt+q*xt,Kt=f+gt+q*(xt+1),et=f+(gt+1)+q*(xt+1),pt=f+(gt+1)+q*xt;c.push(Ft,Kt,pt),c.push(Kt,et,pt),z+=6}a.addGroup(u,z,y),u+=z,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Pu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ch(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const Lu={clone:ps,merge:ln};var Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends pi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Pu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new S,Wl=new yt,Xl=new yt;class cn extends Rh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Wl,Xl),e.subVectors(Xl,Wl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Wi=1;class Uu extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Gi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new cn(Gi,Wi,t,e);r.layers=this.layers,this.add(r);const o=new cn(Gi,Wi,t,e);o.layers=this.layers,this.add(o);const a=new cn(Gi,Wi,t,e);a.layers=this.layers,this.add(a);const c=new cn(Gi,Wi,t,e);c.layers=this.layers,this.add(c);const l=new cn(Gi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ph extends nn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nu extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ph(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:hi});r.uniforms.tEquirect.value=e;const o=new Y(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=In),new Uu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Po=new S,ku=new S,Ou=new he;class li{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Po.subVectors(n,e).cross(ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ou.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Pi,pr=new S;class el{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],u=s[8],p=s[9],_=s[10],g=s[11],m=s[12],b=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,g-u,v-m).normalize(),n[1].setComponents(c+r,f+l,g+u,v+m).normalize(),n[2].setComponents(c+o,f+h,g+p,v+b).normalize(),n[3].setComponents(c-o,f-h,g-p,v-b).normalize(),n[4].setComponents(c-a,f-d,g-_,v-x).normalize(),e===Xn)n[5].setComponents(c+a,f+d,g+_,v+x).normalize();else if(e===Vr)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const _=d[u];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class se extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,u=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const b=m*f-o;for(let x=0;x<l;x++){const v=x*d-r;p.push(v,-b,0),_.push(0,0,1),g.push(x/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const x=b+l*m,v=b+l*(m+1),N=b+1+l*(m+1),C=b+1+l*m;u.push(x,v,C),u.push(v,N,C)}this.setIndex(u),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.widthSegments,t.heightSegments)}}var zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
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
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
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
#endif`,$u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ku=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
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
#endif`,Qu=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cf=`#define PI 3.141592653589793
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,zf=`
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,r0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,l0=`#define PHONG
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
}`,c0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,d0=`#define TOON
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
}`,u0=`#define TOON
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
}`,f0=`uniform float size;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:zu,alphahash_pars_fragment:Bu,alphamap_fragment:Hu,alphamap_pars_fragment:Vu,alphatest_fragment:Gu,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:qu,batching_pars_vertex:Yu,batching_vertex:$u,begin_vertex:Zu,beginnormal_vertex:ju,bsdfs:Ku,iridescence_fragment:Ju,bumpmap_pars_fragment:Qu,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:sf,color_fragment:rf,color_pars_fragment:of,color_pars_vertex:af,color_vertex:lf,common:cf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:df,displacementmap_pars_vertex:uf,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:vf,envmap_fragment:xf,envmap_common_pars_fragment:_f,envmap_pars_fragment:yf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:If,envmap_vertex:Mf,fog_vertex:Sf,fog_pars_vertex:bf,fog_fragment:Tf,fog_pars_fragment:Ef,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Cf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:Df,lights_toon_pars_fragment:Uf,lights_phong_fragment:Nf,lights_phong_pars_fragment:kf,lights_physical_fragment:Of,lights_physical_pars_fragment:Ff,lights_fragment_begin:zf,lights_fragment_maps:Bf,lights_fragment_end:Hf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Gf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:$f,map_particle_pars_fragment:Zf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:Kf,morphinstance_vertex:Jf,morphcolor_vertex:Qf,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:sp,normal_pars_fragment:rp,normal_pars_vertex:op,normal_vertex:ap,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:dp,iridescence_pars_fragment:up,opaque_fragment:fp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:vp,dithering_pars_fragment:xp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:bp,skinbase_vertex:Tp,skinning_pars_vertex:Ep,skinning_vertex:Ap,skinnormal_vertex:Cp,specularmap_fragment:Rp,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:Dp,transmission_pars_fragment:Up,uv_pars_fragment:Np,uv_pars_vertex:kp,uv_vertex:Op,worldpos_vertex:Fp,background_vert:zp,background_frag:Bp,backgroundCube_vert:Hp,backgroundCube_frag:Vp,cube_vert:Gp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:$p,equirect_vert:Zp,equirect_frag:jp,linedashed_vert:Kp,linedashed_frag:Jp,meshbasic_vert:Qp,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:l0,meshphysical_vert:c0,meshphysical_frag:h0,meshtoon_vert:d0,meshtoon_frag:u0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:v0,sprite_frag:x0},Ot={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ln={basic:{uniforms:ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:ln([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:ln([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:ln([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:ln([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:ln([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:ln([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:ln([Ot.common,Ot.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:ln([Ot.lights,Ot.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ln.physical={uniforms:ln([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const mr={r:0,b:0,g:0},_i=new wn,_0=new Ce;function y0(i,t,e,n,s,r,o){const a=new le(0);let c=r===!0?0:1,l,h,d=null,f=0,u=null;function p(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function _(b){let x=!1;const v=p(b);v===null?m(a,c):v&&v.isColor&&(m(v,1),x=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,x){const v=p(x);v&&(v.isCubeTexture||v.mapping===Zr)?(h===void 0&&(h=new Y(new Le(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ps(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(_i)),h.material.toneMapped=Ee.getTransfer(v.colorSpace)!==De,(d!==v||f!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Y(new se(2,2),new fi({name:"BackgroundMaterial",uniforms:ps(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(v.colorSpace)!==De,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,x){b.getRGB(mr,Ch(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:_,addToRenderList:g}}function w0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(w,R,k,D,F){let q=!1;const H=d(D,k,R);r!==H&&(r=H,l(r.object)),q=u(w,D,k,F),q&&p(w,D,k,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(w,R,k,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function d(w,R,k){const D=k.wireframe===!0;let F=n[w.id];F===void 0&&(F={},n[w.id]=F);let q=F[R.id];q===void 0&&(q={},F[R.id]=q);let H=q[D];return H===void 0&&(H=f(c()),q[D]=H),H}function f(w){const R=[],k=[],D=[];for(let F=0;F<e;F++)R[F]=0,k[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:D,object:w,attributes:{},index:null}}function u(w,R,k,D){const F=r.attributes,q=R.attributes;let H=0;const tt=k.getAttributes();for(const z in tt)if(tt[z].location>=0){const xt=F[z];let gt=q[z];if(gt===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor)),xt===void 0||xt.attribute!==gt||gt&&xt.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function p(w,R,k,D){const F={},q=R.attributes;let H=0;const tt=k.getAttributes();for(const z in tt)if(tt[z].location>=0){let xt=q[z];xt===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const gt={};gt.attribute=xt,xt&&xt.data&&(gt.data=xt.data),F[z]=gt,H++}r.attributes=F,r.attributesNum=H,r.index=D}function _(){const w=r.newAttributes;for(let R=0,k=w.length;R<k;R++)w[R]=0}function g(w){m(w,0)}function m(w,R){const k=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;k[w]=1,D[w]===0&&(i.enableVertexAttribArray(w),D[w]=1),F[w]!==R&&(i.vertexAttribDivisor(w,R),F[w]=R)}function b(){const w=r.newAttributes,R=r.enabledAttributes;for(let k=0,D=R.length;k<D;k++)R[k]!==w[k]&&(i.disableVertexAttribArray(k),R[k]=0)}function x(w,R,k,D,F,q,H){H===!0?i.vertexAttribIPointer(w,R,k,F,q):i.vertexAttribPointer(w,R,k,D,F,q)}function v(w,R,k,D){_();const F=D.attributes,q=k.getAttributes(),H=R.defaultAttributeValues;for(const tt in q){const z=q[tt];if(z.location>=0){let ct=F[tt];if(ct===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor)),ct!==void 0){const xt=ct.normalized,gt=ct.itemSize,Ft=t.get(ct);if(Ft===void 0)continue;const Kt=Ft.buffer,et=Ft.type,pt=Ft.bytesPerElement,mt=et===i.INT||et===i.UNSIGNED_INT||ct.gpuType===qa;if(ct.isInterleavedBufferAttribute){const vt=ct.data,Pt=vt.stride,jt=ct.offset;if(vt.isInstancedInterleavedBuffer){for(let $t=0;$t<z.locationSize;$t++)m(z.location+$t,vt.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let $t=0;$t<z.locationSize;$t++)g(z.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let $t=0;$t<z.locationSize;$t++)x(z.location+$t,gt/z.locationSize,et,xt,Pt*pt,(jt+gt/z.locationSize*$t)*pt,mt)}else{if(ct.isInstancedBufferAttribute){for(let vt=0;vt<z.locationSize;vt++)m(z.location+vt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let vt=0;vt<z.locationSize;vt++)g(z.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let vt=0;vt<z.locationSize;vt++)x(z.location+vt,gt/z.locationSize,et,xt,gt*pt,gt/z.locationSize*vt*pt,mt)}}else if(H!==void 0){const xt=H[tt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(z.location,xt);break;case 3:i.vertexAttrib3fv(z.location,xt);break;case 4:i.vertexAttrib4fv(z.location,xt);break;default:i.vertexAttrib1fv(z.location,xt)}}}}b()}function N(){E();for(const w in n){const R=n[w];for(const k in R){const D=R[k];for(const F in D)h(D[F].object),delete D[F];delete R[k]}delete n[w]}}function C(w){if(n[w.id]===void 0)return;const R=n[w.id];for(const k in R){const D=R[k];for(const F in D)h(D[F].object),delete D[F];delete R[k]}delete n[w.id]}function P(w){for(const R in n){const k=n[R];if(k[w.id]===void 0)continue;const D=k[w.id];for(const F in D)h(D[F].object),delete D[F];delete k[w.id]}}function E(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function M0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];e.update(u,n,1)}function c(l,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_]*f[_];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function S0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const E=P===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Kn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Dn&&!E)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=p>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:N,maxSamples:C}}function b0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new li,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{const b=r?0:n,x=b*4;let v=m.clippingState||null;c.value=v,v=h(p,f,x,u);for(let N=0;N!==x;++N)v[N]=e[N];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=u+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=u;x!==_;++x,v+=4)o.copy(d[x]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function T0(i){let t=new WeakMap;function e(o,a){return a===ra?o.mapping=cs:a===oa&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ra||a===oa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Nu(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ih extends Rh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,ql=[.125,.215,.35,.446,.526,.582],Si=20,Lo=new Ih,Yl=new le;let Io=null,Do=0,Uo=0,No=!1;const wi=(1+Math.sqrt(5))/2,Xi=1/wi,$l=[new S(-wi,Xi,0),new S(wi,Xi,0),new S(-Xi,0,wi),new S(Xi,0,wi),new S(0,wi,-Xi),new S(0,wi,Xi),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)];class Na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,Do,Uo),this._renderer.xr.enabled=No,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Zs,format:Rn,colorSpace:ms,depthBuffer:!1},s=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(r)),this._blurMaterial=A0(r,t,e)}return s}_compileMaterial(t){const e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,n,s){const a=new cn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yl),h.toneMapping=di,h.autoClear=!1;const u=new fe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),p=new Y(new Le,u);let _=!1;const g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,_=!0):(u.color.copy(Yl),_=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;gr(s,b*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$l[(s-r-1)%$l.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Y(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Si-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Si;g>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);const m=[];let b=0;for(let P=0;P<Si;++P){const E=P/_,y=Math.exp(-E*E/2);m.push(y),P===0?b+=y:P<g&&(b+=2*y)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-n;const v=this._sizeLods[s],N=3*v*(s>x-Qi?s-x+Qi:0),C=4*(this._cubeSize-v);gr(e,N,C,3*v,2*v),c.setRenderTarget(e),c.render(d,Lo)}}function E0(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Qi?c=ql[o-i+Qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,p=6,_=3,g=2,m=1,b=new Float32Array(_*p*u),x=new Float32Array(g*p*u),v=new Float32Array(m*p*u);for(let C=0;C<u;C++){const P=C%3*2/3-1,E=C>2?0:-1,y=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];b.set(y,_*p*C),x.set(f,g*p*C);const w=[C,C,C,C,C,C];v.set(w,m*p*C)}const N=new We;N.setAttribute("position",new dn(b,_)),N.setAttribute("uv",new dn(x,g)),N.setAttribute("faceIndex",new dn(v,m)),t.push(N),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(i,t,e){const n=new Ai(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function A0(i,t,e){const n=new Float32Array(Si),s=new S(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function jl(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Kl(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function C0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ra||c===oa,h=c===cs||c===hs;if(l||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Na(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return l&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new Na(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function R0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P0(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const p in u){const _=u[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(d){const f=[],u=d.index,p=d.attributes.position;let _=0;if(u!==null){const b=u.array;_=u.version;for(let x=0,v=b.length;x<v;x+=3){const N=b[x+0],C=b[x+1],P=b[x+2];f.push(N,C,C,P,P,N)}}else if(p!==void 0){const b=p.array;_=p.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const N=x+0,C=x+1,P=x+2;f.push(N,C,C,P,P,N)}}else return;const g=new(Mh(f)?Ah:Eh)(f,1);g.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function L0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function l(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*o,p),e.update(u,n,p))}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=u[m];e.update(g,n,1)}function d(f,u,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,u[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,_,0,p);let m=0;for(let b=0;b<p;b++)m+=u[b]*_[b];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function I0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function D0(i,t,e){const n=new WeakMap,s=new Ue;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;u===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,N=1;v>t.maxTextureSize&&(N=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const C=new Float32Array(v*N*4*d),P=new bh(C,v,N,d);P.type=Dn,P.needsUpdate=!0;const E=x*4;for(let w=0;w<d;w++){const R=g[w],k=m[w],D=b[w],F=v*N*4*w;for(let q=0;q<R.count;q++){const H=q*E;u===!0&&(s.fromBufferAttribute(R,q),C[F+H+0]=s.x,C[F+H+1]=s.y,C[F+H+2]=s.z,C[F+H+3]=0),p===!0&&(s.fromBufferAttribute(k,q),C[F+H+4]=s.x,C[F+H+5]=s.y,C[F+H+6]=s.z,C[F+H+7]=0),_===!0&&(s.fromBufferAttribute(D,q),C[F+H+8]=s.x,C[F+H+9]=s.y,C[F+H+10]=s.z,C[F+H+11]=D.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new yt(v,N)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];const p=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function U0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Dh extends nn{constructor(t,e,n,s,r,o,a,c,l,h=ns){if(h!==ns&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ei),n===void 0&&h===us&&(n=ds),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uh=new nn,Jl=new Dh(1,1),Nh=new bh,kh=new _u,Oh=new Ph,Ql=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),$e(e,n)}}function B0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),$e(e,n)}}function H0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;ec.set(n),i.uniformMatrix4fv(this.addr,!1,ec),$e(e,n)}}function V0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function j0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jl.compareFunction=wh,r=Jl):r=Uh,e.setTexture2D(t||r,s)}function K0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function J0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Oh,s)}function Q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nh,s)}function tm(i){switch(i){case 5126:return N0;case 35664:return k0;case 35665:return O0;case 35666:return F0;case 35674:return z0;case 35675:return B0;case 35676:return H0;case 5124:case 35670:return V0;case 35667:case 35671:return G0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return $0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function em(i,t){i.uniform1fv(this.addr,t)}function nm(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function im(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function sm(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function rm(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function om(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function am(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lm(i,t){i.uniform1iv(this.addr,t)}function cm(i,t){i.uniform2iv(this.addr,t)}function hm(i,t){i.uniform3iv(this.addr,t)}function dm(i,t){i.uniform4iv(this.addr,t)}function um(i,t){i.uniform1uiv(this.addr,t)}function fm(i,t){i.uniform2uiv(this.addr,t)}function pm(i,t){i.uniform3uiv(this.addr,t)}function mm(i,t){i.uniform4uiv(this.addr,t)}function gm(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Uh,r[o])}function vm(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kh,r[o])}function xm(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Oh,r[o])}function _m(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nh,r[o])}function ym(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return om;case 35676:return am;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return um;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return _m}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class Mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ym(e.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function sc(i,t){i.seq.push(t),i.map[t.id]=t}function bm(i,t,e){const n=i.name,s=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),o=ko.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sc(e,l===void 0?new wm(a,i,t):new Mm(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Sm(a),sc(e,d)),e=d}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Tm=37297;let Em=0;function Am(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const oc=new he;function Cm(i){Ee._getMatrix(oc,Ee.workingColorSpace,i);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ac(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Am(i.getShaderSource(t),o)}else return s}function Rm(i,t){const e=Cm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pm(i,t){let e;switch(t){case Id:e="Linear";break;case Dd:e="Reinhard";break;case Ud:e="Cineon";break;case ch:e="ACESFilmic";break;case kd:e="AgX";break;case Od:e="Neutral";break;case Nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new S;function Lm(){Ee.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Dm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ns(i){return i!==""}function lc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(i){return i.replace(Nm,Om)}const km=new Map;function Om(i,t){let e=ue[t];if(e===void 0){const n=km.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ka(e)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(Fm,zm)}function zm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Bm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Gm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Bm(e),l=Hm(e),h=Vm(e),d=Gm(e),f=Wm(e),u=Im(e),p=Dm(r),_=s.createProgram();let g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ns).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(g=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?ue.tonemapping_pars_fragment:"",e.toneMapping!==di?Pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Rm("linearToOutputTexel",e.outputColorSpace),Lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=ka(o),o=lc(o,e),o=cc(o,e),a=ka(a),a=lc(a,e),a=cc(a,e),o=hc(o),a=hc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=b+g+o,v=b+m+a,N=rc(s,s.VERTEX_SHADER,x),C=rc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,N),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(R){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(N).trim(),F=s.getShaderInfoLog(C).trim();let q=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,C);else{const tt=ac(s,N,"vertex"),z=ac(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+tt+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||F==="")&&(H=!1);H&&(R.diagnostics={runnable:q,programLog:k,vertexShader:{log:D,prefix:g},fragmentShader:{log:F,prefix:m}})}s.deleteShader(N),s.deleteShader(C),E=new zr(s,_),y=Um(s,_)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,Tm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Em++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=C,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $m(t),e.set(t,n)),n}}class $m{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function Zm(i,t,e,n,s,r,o){const a=new tl,c=new Ym,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,w,R,k,D){const F=k.fog,q=D.geometry,H=y.isMeshStandardMaterial?k.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),z=tt&&tt.mapping===Zr?tt.image.height:null,ct=p[y.type];y.precision!==null&&(u=s.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=xt!==void 0?xt.length:0;let Ft=0;q.morphAttributes.position!==void 0&&(Ft=1),q.morphAttributes.normal!==void 0&&(Ft=2),q.morphAttributes.color!==void 0&&(Ft=3);let Kt,et,pt,mt;if(ct){const $=Ln[ct];Kt=$.vertexShader,et=$.fragmentShader}else Kt=y.vertexShader,et=y.fragmentShader,c.update(y),pt=c.getVertexShaderID(y),mt=c.getFragmentShaderID(y);const vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),jt=D.isInstancedMesh===!0,$t=D.isBatchedMesh===!0,Qt=!!y.map,rt=!!y.matcap,ut=!!tt,L=!!y.aoMap,Dt=!!y.lightMap,dt=!!y.bumpMap,at=!!y.normalMap,_t=!!y.displacementMap,Yt=!!y.emissiveMap,It=!!y.metalnessMap,A=!!y.roughnessMap,M=y.anisotropy>0,W=y.clearcoat>0,J=y.dispersion>0,ot=y.iridescence>0,it=y.sheen>0,Et=y.transmission>0,lt=M&&!!y.anisotropyMap,Ut=W&&!!y.clearcoatMap,Jt=W&&!!y.clearcoatNormalMap,ft=W&&!!y.clearcoatRoughnessMap,At=ot&&!!y.iridescenceMap,Gt=ot&&!!y.iridescenceThicknessMap,Zt=it&&!!y.sheenColorMap,Nt=it&&!!y.sheenRoughnessMap,te=!!y.specularMap,Ht=!!y.specularColorMap,ne=!!y.specularIntensityMap,O=Et&&!!y.transmissionMap,Tt=Et&&!!y.thicknessMap,Q=!!y.gradientMap,nt=!!y.alphaMap,wt=y.alphaTest>0,Mt=!!y.alphaHash,Wt=!!y.extensions;let pe=di;y.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const oe={shaderID:ct,shaderType:y.type,shaderName:y.name,vertexShader:Kt,fragmentShader:et,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:$t,batchingColor:$t&&D._colorsTexture!==null,instancing:jt,instancingColor:jt&&D.instanceColor!==null,instancingMorph:jt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ms,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:rt,envMap:ut,envMapMode:ut&&tt.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:Dt,bumpMap:dt,normalMap:at,displacementMap:f&&_t,emissiveMap:Yt,normalMapObjectSpace:at&&y.normalMapType===Hd,normalMapTangentSpace:at&&y.normalMapType===yh,metalnessMap:It,roughnessMap:A,anisotropy:M,anisotropyMap:lt,clearcoat:W,clearcoatMap:Ut,clearcoatNormalMap:Jt,clearcoatRoughnessMap:ft,dispersion:J,iridescence:ot,iridescenceMap:At,iridescenceThicknessMap:Gt,sheen:it,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:te,specularColorMap:Ht,specularIntensityMap:ne,transmission:Et,transmissionMap:O,thicknessMap:Tt,gradientMap:Q,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:wt,alphaHash:Mt,combine:y.combine,mapUv:Qt&&_(y.map.channel),aoMapUv:L&&_(y.aoMap.channel),lightMapUv:Dt&&_(y.lightMap.channel),bumpMapUv:dt&&_(y.bumpMap.channel),normalMapUv:at&&_(y.normalMap.channel),displacementMapUv:_t&&_(y.displacementMap.channel),emissiveMapUv:Yt&&_(y.emissiveMap.channel),metalnessMapUv:It&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:lt&&_(y.anisotropyMap.channel),clearcoatMapUv:Ut&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(y.sheenRoughnessMap.channel),specularMapUv:te&&_(y.specularMap.channel),specularColorMapUv:Ht&&_(y.specularColorMap.channel),specularIntensityMapUv:ne&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:Tt&&_(y.thicknessMap.channel),alphaMapUv:nt&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(at||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(Qt||nt),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&Ee.getTransfer(y.map.colorSpace)===De,decodeVideoTextureEmissive:Yt&&y.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(y.emissiveMap.colorSpace)===De,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&y.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(w,y),x(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const w=p[y.type];let R;if(w){const k=Ln[w];R=Lu.clone(k.uniforms)}else R=y.uniforms;return R}function N(y,w){let R;for(let k=0,D=h.length;k<D;k++){const F=h[k];if(F.cacheKey===w){R=F,++R.usedTimes;break}}return R===void 0&&(R=new Xm(i,w,y,r),h.push(R)),R}function C(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function P(y){c.remove(y)}function E(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:N,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:E}}function jm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,u,p,_,g){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:u,groupOrder:p,renderOrder:d.renderOrder,z:_,group:g},i[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=u,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=_,m.group=g),t++,m}function a(d,f,u,p,_,g){const m=o(d,f,u,p,_,g);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):e.push(m)}function c(d,f,u,p,_,g){const m=o(d,f,u,p,_,g);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,f){e.length>1&&e.sort(d||Km),n.length>1&&n.sort(f||uc),s.length>1&&s.sort(f||uc)}function h(){for(let d=t,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Jm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new fc,i.set(n,[o])):s>=r.length?(o=new fc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new le};break;case"SpotLight":e={position:new S,direction:new S,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){const t=new Qm,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);const s=new S,r=new Ce,o=new Ce;function a(l){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,p=0,_=0,g=0,m=0,b=0,x=0,v=0,N=0,C=0,P=0;l.sort(ng);for(let y=0,w=l.length;y<w;y++){const R=l[y],k=R.color,D=R.intensity,F=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*D,d+=k.g*D,f+=k.b*D;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],D);P++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,z=e.get(R);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.directionalShadow[u]=z,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=R.shadow.matrix,b++}n.directional[u]=H,u++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(k).multiplyScalar(D),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[_]=H;const tt=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,tt.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=tt.matrix,R.castShadow){const z=e.get(R);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,v++}_++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(k).multiplyScalar(D),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=H,g++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const tt=R.shadow,z=e.get(R);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,z.shadowCameraNear=tt.camera.near,z.shadowCameraFar=tt.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=R.shadow.matrix,x++}n.point[p]=H,p++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(D),H.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[m]=H,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const E=n.hash;(E.directionalLength!==u||E.pointLength!==p||E.spotLength!==_||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==b||E.numPointShadows!==x||E.numSpotShadows!==v||E.numSpotMaps!==N||E.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+N-C,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,E.directionalLength=u,E.pointLength=p,E.spotLength=_,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=b,E.numPointShadows=x,E.numSpotShadows=v,E.numSpotMaps=N,E.numLightProbes=P,n.version=eg++)}function c(l,h){let d=0,f=0,u=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const x=l[m];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(x.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function pc(i){const t=new ig(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function sg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pc(i),t.set(s,[a])):r>=o.length?(a=new pc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rg extends pi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class og extends pi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function cg(i,t,e){let n=new el;const s=new yt,r=new yt,o=new Ue,a=new rg({depthPacking:Bd}),c=new og,l={},h=e.maxTextureSize,d={[ui]:en,[en]:ui,[tn]:tn},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:ag,fragmentShader:lg}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new We;p.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Y(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let m=this.type;this.render=function(C,P,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(hi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const D=m!==Vn&&this.type===Vn,F=m===Vn&&this.type!==Vn;for(let q=0,H=C.length;q<H;q++){const tt=C[q],z=tt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ct=z.getFrameExtents();if(s.multiply(ct),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,z.mapSize.y=r.y)),z.map===null||D===!0||F===!0){const gt=this.type!==Vn?{minFilter:gn,magFilter:gn}:{};z.map!==null&&z.map.dispose(),z.map=new Ai(s.x,s.y,gt),z.map.texture.name=tt.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const xt=z.getViewportCount();for(let gt=0;gt<xt;gt++){const Ft=z.getViewport(gt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),k.viewport(o),z.updateMatrices(tt,gt),n=z.getFrustum(),v(P,E,z.camera,tt,this.type)}z.isPointLightShadow!==!0&&this.type===Vn&&b(z,E),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(y,w,R)};function b(C,P){const E=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ai(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,E,f,_,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,E,u,_,null)}function x(C,P,E,y){let w=null;const R=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)w=R;else if(w=E.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const k=w.uuid,D=P.uuid;let F=l[k];F===void 0&&(F={},l[k]=F);let q=F[D];q===void 0&&(q=w.clone(),F[D]=q,P.addEventListener("dispose",N)),w=q}if(w.visible=P.visible,w.wireframe=P.wireframe,y===Vn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:d[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,E.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=i.properties.get(w);k.light=E}return w}function v(C,P,E,y,w){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===Vn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const D=t.update(C),F=C.material;if(Array.isArray(F)){const q=D.groups;for(let H=0,tt=q.length;H<tt;H++){const z=q[H],ct=F[z.materialIndex];if(ct&&ct.visible){const xt=x(C,ct,y,w);C.onBeforeShadow(i,C,P,E,D,xt,z),i.renderBufferDirect(E,null,D,xt,C,z),C.onAfterShadow(i,C,P,E,D,xt,z)}}}else if(F.visible){const q=x(C,F,y,w);C.onBeforeShadow(i,C,P,E,D,q,null),i.renderBufferDirect(E,null,D,q,C,null),C.onAfterShadow(i,C,P,E,D,q,null)}}const k=C.children;for(let D=0,F=k.length;D<F;D++)v(k[D],P,E,y,w)}function N(C){C.target.removeEventListener("dispose",N);for(const E in l){const y=l[E],w=C.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const hg={[Jo]:Qo,[ta]:ia,[ea]:sa,[ls]:na,[Qo]:Jo,[ia]:ta,[sa]:ea,[na]:ls};function dg(i,t){function e(){let O=!1;const Tt=new Ue;let Q=null;const nt=new Ue(0,0,0,0);return{setMask:function(wt){Q!==wt&&!O&&(i.colorMask(wt,wt,wt,wt),Q=wt)},setLocked:function(wt){O=wt},setClear:function(wt,Mt,Wt,pe,oe){oe===!0&&(wt*=pe,Mt*=pe,Wt*=pe),Tt.set(wt,Mt,Wt,pe),nt.equals(Tt)===!1&&(i.clearColor(wt,Mt,Wt,pe),nt.copy(Tt))},reset:function(){O=!1,Q=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,Tt=!1,Q=null,nt=null,wt=null;return{setReversed:function(Mt){if(Tt!==Mt){const Wt=t.get("EXT_clip_control");Tt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const pe=wt;wt=null,this.setClear(pe)}Tt=Mt},getReversed:function(){return Tt},setTest:function(Mt){Mt?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!O&&(i.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(Tt&&(Mt=hg[Mt]),nt!==Mt){switch(Mt){case Jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Mt}},setLocked:function(Mt){O=Mt},setClear:function(Mt){wt!==Mt&&(Tt&&(Mt=1-Mt),i.clearDepth(Mt),wt=Mt)},reset:function(){O=!1,Q=null,nt=null,wt=null,Tt=!1}}}function s(){let O=!1,Tt=null,Q=null,nt=null,wt=null,Mt=null,Wt=null,pe=null,oe=null;return{setTest:function($){O||($?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function($){Tt!==$&&!O&&(i.stencilMask($),Tt=$)},setFunc:function($,St,ie){(Q!==$||nt!==St||wt!==ie)&&(i.stencilFunc($,St,ie),Q=$,nt=St,wt=ie)},setOp:function($,St,ie){(Mt!==$||Wt!==St||pe!==ie)&&(i.stencilOp($,St,ie),Mt=$,Wt=St,pe=ie)},setLocked:function($){O=$},setClear:function($){oe!==$&&(i.clearStencil($),oe=$)},reset:function(){O=!1,Tt=null,Q=null,nt=null,wt=null,Mt=null,Wt=null,pe=null,oe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,u=[],p=null,_=!1,g=null,m=null,b=null,x=null,v=null,N=null,C=null,P=new le(0,0,0),E=0,y=!1,w=null,R=null,k=null,D=null,F=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,tt=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=tt>=1):z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=tt>=2);let ct=null,xt={};const gt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Kt=new Ue().fromArray(gt),et=new Ue().fromArray(Ft);function pt(O,Tt,Q,nt){const wt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(O,Mt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Q;Wt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(Tt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Mt}const mt={};mt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),o.setFunc(ls),dt(!1),at(yl),vt(i.CULL_FACE),L(hi);function vt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Pt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function jt(O,Tt){return d[O]!==Tt?(i.bindFramebuffer(O,Tt),d[O]=Tt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Tt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function $t(O,Tt){let Q=u,nt=!1;if(O){Q=f.get(Tt),Q===void 0&&(Q=[],f.set(Tt,Q));const wt=O.textures;if(Q.length!==wt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Wt=wt.length;Mt<Wt;Mt++)Q[Mt]=i.COLOR_ATTACHMENT0+Mt;Q.length=wt.length,nt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Q)}function Qt(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const rt={[Mi]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};rt[md]=i.MIN,rt[gd]=i.MAX;const ut={[vd]:i.ZERO,[xd]:i.ONE,[_d]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[wd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(O,Tt,Q,nt,wt,Mt,Wt,pe,oe,$){if(O===hi){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(vt(i.BLEND),_=!0),O!==ud){if(O!==g||$!==y){if((m!==Mi||v!==Mi)&&(i.blendEquation(i.FUNC_ADD),m=Mi,v=Mi),$)switch(O){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,x=null,N=null,C=null,P.set(0,0,0),E=0,g=O,y=$}return}wt=wt||Tt,Mt=Mt||Q,Wt=Wt||nt,(Tt!==m||wt!==v)&&(i.blendEquationSeparate(rt[Tt],rt[wt]),m=Tt,v=wt),(Q!==b||nt!==x||Mt!==N||Wt!==C)&&(i.blendFuncSeparate(ut[Q],ut[nt],ut[Mt],ut[Wt]),b=Q,x=nt,N=Mt,C=Wt),(pe.equals(P)===!1||oe!==E)&&(i.blendColor(pe.r,pe.g,pe.b,oe),P.copy(pe),E=oe),g=O,y=!1}function Dt(O,Tt){O.side===tn?Pt(i.CULL_FACE):vt(i.CULL_FACE);let Q=O.side===en;Tt&&(Q=!Q),dt(Q),O.blending===es&&O.transparent===!1?L(hi):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const nt=O.stencilWrite;a.setTest(nt),nt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function at(O){O!==hd?(vt(i.CULL_FACE),O!==R&&(O===yl?i.cullFace(i.BACK):O===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),R=O}function _t(O){O!==k&&(H&&i.lineWidth(O),k=O)}function Yt(O,Tt,Q){O?(vt(i.POLYGON_OFFSET_FILL),(D!==Tt||F!==Q)&&(i.polygonOffset(Tt,Q),D=Tt,F=Q)):Pt(i.POLYGON_OFFSET_FILL)}function It(O){O?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+q-1),ct!==O&&(i.activeTexture(O),ct=O)}function M(O,Tt,Q){Q===void 0&&(ct===null?Q=i.TEXTURE0+q-1:Q=ct);let nt=xt[Q];nt===void 0&&(nt={type:void 0,texture:void 0},xt[Q]=nt),(nt.type!==O||nt.texture!==Tt)&&(ct!==Q&&(i.activeTexture(Q),ct=Q),i.bindTexture(O,Tt||mt[O]),nt.type=O,nt.texture=Tt)}function W(){const O=xt[ct];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(O){Kt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Kt.copy(O))}function Nt(O){et.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function te(O,Tt){let Q=l.get(Tt);Q===void 0&&(Q=new WeakMap,l.set(Tt,Q));let nt=Q.get(O);nt===void 0&&(nt=i.getUniformBlockIndex(Tt,O.name),Q.set(O,nt))}function Ht(O,Tt){const nt=l.get(Tt).get(O);c.get(Tt)!==nt&&(i.uniformBlockBinding(Tt,nt,O.__bindingPointIndex),c.set(Tt,nt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,xt={},d={},f=new WeakMap,u=[],p=null,_=!1,g=null,m=null,b=null,x=null,v=null,N=null,C=null,P=new le(0,0,0),E=0,y=!1,w=null,R=null,k=null,D=null,F=null,Kt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:Pt,bindFramebuffer:jt,drawBuffers:$t,useProgram:Qt,setBlending:L,setMaterial:Dt,setFlipSided:dt,setCullFace:at,setLineWidth:_t,setPolygonOffset:Yt,setScissorTest:It,activeTexture:A,bindTexture:M,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:ot,texImage2D:At,texImage3D:Gt,updateUBOMapping:te,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:ft,texSubImage2D:it,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ut,scissor:Zt,viewport:Nt,reset:ne}}function mc(i,t,e,n){const s=ug(n);switch(e){case ph:return i*t;case gh:return i*t;case vh:return i*t*2;case Za:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case xh:return i*t*2/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case mh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Ja:return i*t*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:case da:return Math.max(i,16)*Math.max(t,8)/4;case la:case ha:return Math.max(i,8)*Math.max(t,8)/2;case ua:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fr:case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _h:case La:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ia:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(i){switch(i){case Kn:case dh:return{byteLength:1,components:1};case Ws:case uh:case Zs:return{byteLength:2,components:1};case Ya:case $a:return{byteLength:2,components:4};case Ei:case qa:case Dn:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return u?new OffscreenCanvas(A,M):Xs("canvas")}function _(A,M,W){let J=1;const ot=It(A);if((ot.width>W||ot.height>W)&&(J=W/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const it=Math.floor(J*ot.width),Et=Math.floor(J*ot.height);d===void 0&&(d=p(it,Et));const lt=M?p(it,Et):d;return lt.width=it,lt.height=Et,lt.getContext("2d").drawImage(A,0,0,it,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+it+"x"+Et+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,M,W,J,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=M;if(M===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),M===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),M===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),M===i.RGBA){const Et=ot?jr:Ee.getTransfer(J);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=Et===De?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(A,M){let W;return A?M===null||M===Ei||M===ds?W=i.DEPTH24_STENCIL8:M===Dn?W=i.DEPTH32F_STENCIL8:M===Ws&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===ds?W=i.DEPTH_COMPONENT24:M===Dn?W=i.DEPTH_COMPONENT32F:M===Ws&&(W=i.DEPTH_COMPONENT16),W}function N(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),E(M),M.isVideoTexture&&h.delete(M)}function P(A){const M=A.target;M.removeEventListener("dispose",P),w(M)}function E(A){const M=n.get(A);if(M.__webglInit===void 0)return;const W=A.source,J=f.get(W);if(J){const ot=J[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(A),Object.keys(J).length===0&&f.delete(W)}n.remove(A)}function y(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const W=A.source,J=f.get(W);delete J[M.__cacheKey],o.memory.textures--}function w(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ot=0;ot<M.__webglFramebuffer[J].length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[J][ot]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=A.textures;for(let J=0,ot=W.length;J<ot;J++){const it=n.get(W[J]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(A)}let R=0;function k(){R=0}function D(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function F(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function q(A,M){const W=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,A,M);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function H(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){et(W,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function tt(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){et(W,A,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function z(A,M){const W=n.get(A);if(A.version>0&&W.__version!==A.version){pt(W,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const ct={[Hr]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},xt={[gn]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},gt={[Vd]:i.NEVER,[$d]:i.ALWAYS,[Gd]:i.LESS,[wh]:i.LEQUAL,[Wd]:i.EQUAL,[Yd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Ft(A,M){if(M.type===Dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===co||M.magFilter===Ks||M.magFilter===Ti||M.minFilter===In||M.minFilter===co||M.minFilter===Ks||M.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ct[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ct[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ct[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==Ks&&M.minFilter!==Ti||M.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Kt(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const J=M.source;let ot=f.get(J);ot===void 0&&(ot={},f.set(J,ot));const it=F(M);if(it!==A.__cacheKey){ot[it]===void 0&&(ot[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ot[it].usedTimes++;const Et=ot[A.__cacheKey];Et!==void 0&&(ot[A.__cacheKey].usedTimes--,Et.usedTimes===0&&y(M)),A.__cacheKey=it,A.__webglTexture=ot[it].texture}return W}function et(A,M,W){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const ot=Kt(A,M),it=M.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+W);const Et=n.get(it);if(it.version!==Et.__version||ot===!0){e.activeTexture(i.TEXTURE0+W);const lt=Ee.getPrimaries(Ee.workingColorSpace),Ut=M.colorSpace===ci?null:Ee.getPrimaries(M.colorSpace),Jt=M.colorSpace===ci||lt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ft=_(M.image,!1,s.maxTextureSize);ft=Yt(M,ft);const At=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let Zt=x(M.internalFormat,At,Gt,M.colorSpace,M.isVideoTexture);Ft(J,M);let Nt;const te=M.mipmaps,Ht=M.isVideoTexture!==!0,ne=Et.__version===void 0||ot===!0,O=it.dataReady,Tt=N(M,ft);if(M.isDepthTexture)Zt=v(M.format===us,M.type),ne&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Zt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Zt,ft.width,ft.height,0,At,Gt,null));else if(M.isDataTexture)if(te.length>0){Ht&&ne&&e.texStorage2D(i.TEXTURE_2D,Tt,Zt,te[0].width,te[0].height);for(let Q=0,nt=te.length;Q<nt;Q++)Nt=te[Q],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Nt.width,Nt.height,At,Gt,Nt.data):e.texImage2D(i.TEXTURE_2D,Q,Zt,Nt.width,Nt.height,0,At,Gt,Nt.data);M.generateMipmaps=!1}else Ht?(ne&&e.texStorage2D(i.TEXTURE_2D,Tt,Zt,ft.width,ft.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,At,Gt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,ft.width,ft.height,0,At,Gt,ft.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Zt,te[0].width,te[0].height,ft.depth);for(let Q=0,nt=te.length;Q<nt;Q++)if(Nt=te[Q],M.format!==Rn)if(At!==null)if(Ht){if(O)if(M.layerUpdates.size>0){const wt=mc(Nt.width,Nt.height,M.format,M.type);for(const Mt of M.layerUpdates){const Wt=Nt.data.subarray(Mt*wt/Nt.data.BYTES_PER_ELEMENT,(Mt+1)*wt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Mt,Nt.width,Nt.height,1,At,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Nt.width,Nt.height,ft.depth,At,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Zt,Nt.width,Nt.height,ft.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Nt.width,Nt.height,ft.depth,At,Gt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Zt,Nt.width,Nt.height,ft.depth,0,At,Gt,Nt.data)}else{Ht&&ne&&e.texStorage2D(i.TEXTURE_2D,Tt,Zt,te[0].width,te[0].height);for(let Q=0,nt=te.length;Q<nt;Q++)Nt=te[Q],M.format!==Rn?At!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Nt.width,Nt.height,At,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Nt.width,Nt.height,At,Gt,Nt.data):e.texImage2D(i.TEXTURE_2D,Q,Zt,Nt.width,Nt.height,0,At,Gt,Nt.data)}else if(M.isDataArrayTexture)if(Ht){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Zt,ft.width,ft.height,ft.depth),O)if(M.layerUpdates.size>0){const Q=mc(ft.width,ft.height,M.format,M.type);for(const nt of M.layerUpdates){const wt=ft.data.subarray(nt*Q/ft.data.BYTES_PER_ELEMENT,(nt+1)*Q/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ft.width,ft.height,1,At,Gt,wt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,Gt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,ft.width,ft.height,ft.depth,0,At,Gt,ft.data);else if(M.isData3DTexture)Ht?(ne&&e.texStorage3D(i.TEXTURE_3D,Tt,Zt,ft.width,ft.height,ft.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,Gt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,ft.width,ft.height,ft.depth,0,At,Gt,ft.data);else if(M.isFramebufferTexture){if(ne)if(Ht)e.texStorage2D(i.TEXTURE_2D,Tt,Zt,ft.width,ft.height);else{let Q=ft.width,nt=ft.height;for(let wt=0;wt<Tt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Zt,Q,nt,0,At,Gt,null),Q>>=1,nt>>=1}}else if(te.length>0){if(Ht&&ne){const Q=It(te[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Zt,Q.width,Q.height)}for(let Q=0,nt=te.length;Q<nt;Q++)Nt=te[Q],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At,Gt,Nt):e.texImage2D(i.TEXTURE_2D,Q,Zt,At,Gt,Nt);M.generateMipmaps=!1}else if(Ht){if(ne){const Q=It(ft);e.texStorage2D(i.TEXTURE_2D,Tt,Zt,Q.width,Q.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Zt,At,Gt,ft);g(M)&&m(J),Et.__version=it.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pt(A,M,W){if(M.image.length!==6)return;const J=Kt(A,M),ot=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);const it=n.get(ot);if(ot.version!==it.__version||J===!0){e.activeTexture(i.TEXTURE0+W);const Et=Ee.getPrimaries(Ee.workingColorSpace),lt=M.colorSpace===ci?null:Ee.getPrimaries(M.colorSpace),Ut=M.colorSpace===ci||Et===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,ft=M.image[0]&&M.image[0].isDataTexture,At=[];for(let nt=0;nt<6;nt++)!Jt&&!ft?At[nt]=_(M.image[nt],!0,s.maxCubemapSize):At[nt]=ft?M.image[nt].image:M.image[nt],At[nt]=Yt(M,At[nt]);const Gt=At[0],Zt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),te=x(M.internalFormat,Zt,Nt,M.colorSpace),Ht=M.isVideoTexture!==!0,ne=it.__version===void 0||J===!0,O=ot.dataReady;let Tt=N(M,Gt);Ft(i.TEXTURE_CUBE_MAP,M);let Q;if(Jt){Ht&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,te,Gt.width,Gt.height);for(let nt=0;nt<6;nt++){Q=At[nt].mipmaps;for(let wt=0;wt<Q.length;wt++){const Mt=Q[wt];M.format!==Rn?Zt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Mt.width,Mt.height,Zt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,te,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Mt.width,Mt.height,Zt,Nt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,te,Mt.width,Mt.height,0,Zt,Nt,Mt.data)}}}else{if(Q=M.mipmaps,Ht&&ne){Q.length>0&&Tt++;const nt=It(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,te,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ft){Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At[nt].width,At[nt].height,Zt,Nt,At[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,At[nt].width,At[nt].height,0,Zt,Nt,At[nt].data);for(let wt=0;wt<Q.length;wt++){const Wt=Q[wt].image[nt].image;Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Wt.width,Wt.height,Zt,Nt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,te,Wt.width,Wt.height,0,Zt,Nt,Wt.data)}}else{Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Zt,Nt,At[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,Zt,Nt,At[nt]);for(let wt=0;wt<Q.length;wt++){const Mt=Q[wt];Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Zt,Nt,Mt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,te,Zt,Nt,Mt.image[nt])}}}g(M)&&m(i.TEXTURE_CUBE_MAP),it.__version=ot.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,W,J,ot,it){const Et=r.convert(W.format,W.colorSpace),lt=r.convert(W.type),Ut=x(W.internalFormat,Et,lt,W.colorSpace),Jt=n.get(M),ft=n.get(W);if(ft.__renderTarget=M,!Jt.__hasExternalTextures){const At=Math.max(1,M.width>>it),Gt=Math.max(1,M.height>>it);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,Ut,At,Gt,M.depth,0,Et,lt,null):e.texImage2D(ot,it,Ut,At,Gt,0,Et,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),at(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ot,ft.__webglTexture,0,dt(M)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ot,ft.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const J=M.depthTexture,ot=J&&J.isDepthTexture?J.type:null,it=v(M.stencilBuffer,ot),Et=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=dt(M);at(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,it,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,it,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,A)}else{const J=M.textures;for(let ot=0;ot<J.length;ot++){const it=J[ot],Et=r.convert(it.format,it.colorSpace),lt=r.convert(it.type),Ut=x(it.internalFormat,Et,lt,it.colorSpace),Jt=dt(M);W&&at(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Ut,M.width,M.height):at(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,Ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ot=J.__webglTexture,it=dt(M);if(M.depthTexture.format===ns)at(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(M.depthTexture.format===us)at(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function jt(A){const M=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ot)};J.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=J}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,A)}else if(W){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),vt(M.__webglDepthbuffer[J],A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),vt(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,M,W){const J=n.get(A);M!==void 0&&mt(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&jt(A)}function Qt(A){const M=A.texture,W=n.get(A),J=n.get(M);A.addEventListener("dispose",P);const ot=A.textures,it=A.isWebGLCubeRenderTarget===!0,Et=ot.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,o.memory.textures++),it){W.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[lt]=[];for(let Ut=0;Ut<M.mipmaps.length;Ut++)W.__webglFramebuffer[lt][Ut]=i.createFramebuffer()}else W.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)W.__webglFramebuffer[lt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Et)for(let lt=0,Ut=ot.length;lt<Ut;lt++){const Jt=n.get(ot[lt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&at(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let lt=0;lt<ot.length;lt++){const Ut=ot[lt];W.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[lt]);const Jt=r.convert(Ut.format,Ut.colorSpace),ft=r.convert(Ut.type),At=x(Ut.internalFormat,Jt,ft,Ut.colorSpace,A.isXRRenderTarget===!0),Gt=dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,W.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)mt(W.__webglFramebuffer[lt][Ut],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut);else mt(W.__webglFramebuffer[lt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,Ut=ot.length;lt<Ut;lt++){const Jt=ot[lt],ft=n.get(Jt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),Ft(i.TEXTURE_2D,Jt),mt(W.__webglFramebuffer,A,Jt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),g(Jt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,J.__webglTexture),Ft(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)mt(W.__webglFramebuffer[Ut],A,M,i.COLOR_ATTACHMENT0,lt,Ut);else mt(W.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,lt,0);g(M)&&m(lt),e.unbindTexture()}A.depthBuffer&&jt(A)}function rt(A){const M=A.textures;for(let W=0,J=M.length;W<J;W++){const ot=M[W];if(g(ot)){const it=b(A),Et=n.get(ot).__webglTexture;e.bindTexture(it,Et),m(it),e.unbindTexture()}}}const ut=[],L=[];function Dt(A){if(A.samples>0){if(at(A)===!1){const M=A.textures,W=A.width,J=A.height;let ot=i.COLOR_BUFFER_BIT;const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(A),lt=M.length>1;if(lt)for(let Ut=0;Ut<M.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ut=0;Ut<M.length;Ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Ut]);const Jt=n.get(M[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,ot,i.NEAREST),c===!0&&(ut.length=0,L.length=0,ut.push(i.COLOR_ATTACHMENT0+Ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ut.push(it),L.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Ut=0;Ut<M.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Ut]);const Jt=n.get(M[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function dt(A){return Math.min(s.maxSamples,A.samples)}function at(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Yt(A,M){const W=A.colorSpace,J=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==ms&&W!==ci&&(Ee.getTransfer(W)===De?(J!==Rn||ot!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=z,this.rebindTextures=$t,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=at}function pg(i,t){function e(n,s=ci){let r;const o=Ee.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.BYTE;if(n===uh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===Rn)return i.RGBA;if(n===gh)return i.LUMINANCE;if(n===vh)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===xh)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===kr||n===Or)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ca||n===ha||n===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ua||n===fa)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pa)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ma||n===ga||n===va||n===xa||n===_a||n===ya||n===wa||n===Ma||n===Sa||n===ba||n===Ta||n===Ea||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ba)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===Ra||n===Pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===La||n===Ia||n===Da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class mg extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zt extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;l.inputState.pinching&&f>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fi({vertexShader:vg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends gs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,p=null;const _=new _g,g=e.getContextAttributes();let m=null,b=null;const x=[],v=[],N=new yt;let C=null;const P=new cn;P.viewport=new Ue;const E=new cn;E.viewport=new Ue;const y=[P,E],w=new mg;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let pt=x[et];return pt===void 0&&(pt=new Oo,x[et]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(et){let pt=x[et];return pt===void 0&&(pt=new Oo,x[et]=pt),pt.getGripSpace()},this.getHand=function(et){let pt=x[et];return pt===void 0&&(pt=new Oo,x[et]=pt),pt.getHandSpace()};function D(et){const pt=v.indexOf(et.inputSource);if(pt===-1)return;const mt=x[pt];mt!==void 0&&(mt.update(et.inputSource,et.frame,l||o),mt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",q);for(let et=0;et<x.length;et++){const pt=v[et];pt!==null&&(v[et]=null,x[et].disconnect(pt))}R=null,k=null,_.reset(),t.setRenderTarget(m),u=null,f=null,d=null,s=null,b=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Ai(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let pt=null,mt=null,vt=null;g.depth&&(vt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=g.stencil?us:ns,mt=g.stencil?ds:Ei);const Pt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ai(f.textureWidth,f.textureHeight,{format:Rn,type:Kn,depthTexture:new Dh(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(et){for(let pt=0;pt<et.removed.length;pt++){const mt=et.removed[pt],vt=v.indexOf(mt);vt>=0&&(v[vt]=null,x[vt].disconnect(mt))}for(let pt=0;pt<et.added.length;pt++){const mt=et.added[pt];let vt=v.indexOf(mt);if(vt===-1){for(let jt=0;jt<x.length;jt++)if(jt>=v.length){v.push(mt),vt=jt;break}else if(v[jt]===null){v[jt]=mt,vt=jt;break}if(vt===-1)break}const Pt=x[vt];Pt&&Pt.connect(mt)}}const H=new S,tt=new S;function z(et,pt,mt){H.setFromMatrixPosition(pt.matrixWorld),tt.setFromMatrixPosition(mt.matrixWorld);const vt=H.distanceTo(tt),Pt=pt.projectionMatrix.elements,jt=mt.projectionMatrix.elements,$t=Pt[14]/(Pt[10]-1),Qt=Pt[14]/(Pt[10]+1),rt=(Pt[9]+1)/Pt[5],ut=(Pt[9]-1)/Pt[5],L=(Pt[8]-1)/Pt[0],Dt=(jt[8]+1)/jt[0],dt=$t*L,at=$t*Dt,_t=vt/(-L+Dt),Yt=_t*-L;if(pt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Yt),et.translateZ(_t),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Pt[10]===-1)et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const It=$t+_t,A=Qt+_t,M=dt-Yt,W=at+(vt-Yt),J=rt*Qt/A*It,ot=ut*Qt/A*It;et.projectionMatrix.makePerspective(M,W,J,ot,It,A),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function ct(et,pt){pt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(pt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let pt=et.near,mt=et.far;_.texture!==null&&(_.depthNear>0&&(pt=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),w.near=E.near=P.near=pt,w.far=E.far=P.far=mt,(R!==w.near||k!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,k=w.far),P.layers.mask=et.layers.mask|2,E.layers.mask=et.layers.mask|4,w.layers.mask=P.layers.mask|E.layers.mask;const vt=et.parent,Pt=w.cameras;ct(w,vt);for(let jt=0;jt<Pt.length;jt++)ct(Pt[jt],vt);Pt.length===2?z(w,P,E):w.projectionMatrix.copy(P.projectionMatrix),xt(et,w,vt)};function xt(et,pt,mt){mt===null?et.matrix.copy(pt.matrixWorld):(et.matrix.copy(mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(pt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=fs*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(et){c=et,f!==null&&(f.fixedFoveation=et),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let gt=null;function Ft(et,pt){if(h=pt.getViewerPose(l||o),p=pt,h!==null){const mt=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let vt=!1;mt.length!==w.cameras.length&&(w.cameras.length=0,vt=!0);for(let jt=0;jt<mt.length;jt++){const $t=mt[jt];let Qt=null;if(u!==null)Qt=u.getViewport($t);else{const ut=d.getViewSubImage(f,$t);Qt=ut.viewport,jt===0&&(t.setRenderTargetTextures(b,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(b))}let rt=y[jt];rt===void 0&&(rt=new cn,rt.layers.enable(jt),rt.viewport=new Ue,y[jt]=rt),rt.matrix.fromArray($t.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray($t.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),jt===0&&(w.matrix.copy(rt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),vt===!0&&w.cameras.push(rt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const jt=d.getDepthInformation(mt[0]);jt&&jt.isValid&&jt.texture&&_.init(t,jt,s.renderState)}}for(let mt=0;mt<x.length;mt++){const vt=v[mt],Pt=x[mt];vt!==null&&Pt!==void 0&&Pt.update(vt,pt,l||o)}gt&&gt(et,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),p=null}const Kt=new Lh;Kt.setAnimationLoop(Ft),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const yi=new wn,wg=new Ce;function Mg(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ch(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&u(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=t.get(m),x=b.envMap,v=b.envMapRotation;x&&(g.envMap.value=x,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(yi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function l(b,x){let v=s[b.id];v===void 0&&(p(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));const N=x.program;n.updateUBOMapping(b,N);const C=t.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function h(b){const x=d();b.__bindingPointIndex=x;const v=i.createBuffer(),N=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,N,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],v=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,P=v.length;C<P;C++){const E=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,w=E.length;y<w;y++){const R=E[y];if(u(R,C,y,N)===!0){const k=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let q=0;q<D.length;q++){const H=D[q],tt=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+F,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,F),F+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,x,v,N){const C=b.value,P=x+"_"+v;if(N[P]===void 0)return typeof C=="number"||typeof C=="boolean"?N[P]=C:N[P]=C.clone(),!0;{const E=N[P];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return N[P]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function p(b){const x=b.uniforms;let v=0;const N=16;for(let P=0,E=x.length;P<E;P++){const y=Array.isArray(x[P])?x[P]:[x[P]];for(let w=0,R=y.length;w<R;w++){const k=y[w],D=Array.isArray(k.value)?k.value:[k.value];for(let F=0,q=D.length;F<q;F++){const H=D[F],tt=_(H),z=v%N,ct=z%tt.boundary,xt=z+ct;v+=ct,xt!==0&&N-xt<tt.storage&&(v+=N-xt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=tt.storage}}}const C=v%N;return C>0&&(v+=N-C),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function g(b){const x=b.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class bg{constructor(t={}){const{canvas:e=du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=di,this.toneMappingExposure=1;const v=this;let N=!1,C=0,P=0,E=null,y=-1,w=null;const R=new Ue,k=new Ue;let D=null;const F=new le(0);let q=0,H=e.width,tt=e.height,z=1,ct=null,xt=null;const gt=new Ue(0,0,H,tt),Ft=new Ue(0,0,H,tt);let Kt=!1;const et=new el;let pt=!1,mt=!1;const vt=new Ce,Pt=new Ce,jt=new S,$t=new Ue,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function ut(){return E===null?z:1}let L=n;function Dt(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),L===null){const B="webgl2";if(L=Dt(B,T),L===null)throw Dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,at,_t,Yt,It,A,M,W,J,ot,it,Et,lt,Ut,Jt,ft,At,Gt,Zt,Nt,te,Ht,ne,O;function Tt(){dt=new R0(L),dt.init(),Ht=new pg(L,dt),at=new S0(L,dt,t,Ht),_t=new dg(L,dt),at.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Yt=new I0(L),It=new jm,A=new fg(L,dt,_t,It,at,Ht,Yt),M=new T0(v),W=new C0(v),J=new Fu(L),ne=new w0(L,J),ot=new P0(L,J,Yt,ne),it=new U0(L,ot,J,Yt),Zt=new D0(L,at,A),ft=new b0(It),Et=new Zm(v,M,W,dt,at,ne,ft),lt=new Mg(v,It),Ut=new Jm,Jt=new sg(dt),Gt=new y0(v,M,W,_t,it,u,c),At=new cg(v,it,at),O=new Sg(L,Yt,at,_t),Nt=new M0(L,dt,Yt),te=new L0(L,dt,Yt),Yt.programs=Et.programs,v.capabilities=at,v.extensions=dt,v.properties=It,v.renderLists=Ut,v.shadowMap=At,v.state=_t,v.info=Yt}Tt();const Q=new yg(v,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(H,tt,!1))},this.getSize=function(T){return T.set(H,tt)},this.setSize=function(T,B,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,tt=B,e.width=Math.floor(T*z),e.height=Math.floor(B*z),K===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*z,tt*z).floor()},this.setDrawingBufferSize=function(T,B,K){H=T,tt=B,z=K,e.width=Math.floor(T*K),e.height=Math.floor(B*K),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(gt)},this.setViewport=function(T,B,K,j){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,B,K,j),_t.viewport(R.copy(gt).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Ft)},this.setScissor=function(T,B,K,j){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,B,K,j),_t.scissor(k.copy(Ft).multiplyScalar(z).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(T){_t.setScissorTest(Kt=T)},this.setOpaqueSort=function(T){ct=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(T=!0,B=!0,K=!0){let j=0;if(T){let G=!1;if(E!==null){const U=E.texture.format;G=U===Ja||U===Ka||U===ja}if(G){const U=E.texture.type,V=U===Kn||U===Ei||U===Ws||U===ds||U===Ya||U===$a,st=Gt.getClearColor(),Ct=Gt.getClearAlpha(),Vt=st.r,qt=st.g,kt=st.b;V?(p[0]=Vt,p[1]=qt,p[2]=kt,p[3]=Ct,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=Vt,_[1]=qt,_[2]=kt,_[3]=Ct,L.clearBufferiv(L.COLOR,0,_))}else j|=L.COLOR_BUFFER_BIT}B&&(j|=L.DEPTH_BUFFER_BIT),K&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Ut.dispose(),Jt.dispose(),It.dispose(),M.dispose(),W.dispose(),it.dispose(),ne.dispose(),O.dispose(),Et.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",_e),Q.removeEventListener("sessionend",Me),Pe.stop()};function nt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const T=Yt.autoReset,B=At.enabled,K=At.autoUpdate,j=At.needsUpdate,G=At.type;Tt(),Yt.autoReset=T,At.enabled=B,At.autoUpdate=K,At.needsUpdate=j,At.type=G}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const B=T.target;B.removeEventListener("dispose",Wt),pe(B)}function pe(T){oe(T),It.remove(T)}function oe(T){const B=It.get(T).programs;B!==void 0&&(B.forEach(function(K){Et.releaseProgram(K)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,K,j,G,U){B===null&&(B=Qt);const V=G.isMesh&&G.matrixWorld.determinant()<0,st=ve(T,B,K,j,G);_t.setMaterial(j,V);let Ct=K.index,Vt=1;if(j.wireframe===!0){if(Ct=ot.getWireframeAttribute(K),Ct===void 0)return;Vt=2}const qt=K.drawRange,kt=K.attributes.position;let ce=qt.start*Vt,ae=(qt.start+qt.count)*Vt;U!==null&&(ce=Math.max(ce,U.start*Vt),ae=Math.min(ae,(U.start+U.count)*Vt)),Ct!==null?(ce=Math.max(ce,0),ae=Math.min(ae,Ct.count)):kt!=null&&(ce=Math.max(ce,0),ae=Math.min(ae,kt.count));const me=ae-ce;if(me<0||me===1/0)return;ne.setup(G,j,st,K,Ct);let ye,de=Nt;if(Ct!==null&&(ye=J.get(Ct),de=te,de.setIndex(ye)),G.isMesh)j.wireframe===!0?(_t.setLineWidth(j.wireframeLinewidth*ut()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if(G.isLine){let Xt=j.linewidth;Xt===void 0&&(Xt=1),_t.setLineWidth(Xt*ut()),G.isLineSegments?de.setMode(L.LINES):G.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else G.isPoints?de.setMode(L.POINTS):G.isSprite&&de.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xt=G._multiDrawStarts,Je=G._multiDrawCounts,Ae=G._multiDrawCount,Mn=Ct?J.get(Ct).bytesPerElement:1,Li=It.get(j).currentProgram.getUniforms();for(let fn=0;fn<Ae;fn++)Li.setValue(L,"_gl_DrawID",fn),de.render(Xt[fn]/Mn,Je[fn])}else if(G.isInstancedMesh)de.renderInstances(ce,me,G.count);else if(K.isInstancedBufferGeometry){const Xt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Je=Math.min(K.instanceCount,Xt);de.renderInstances(ce,me,Je)}else de.render(ce,me)};function $(T,B,K){T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,ht(T,B,K),T.side=ui,T.needsUpdate=!0,ht(T,B,K),T.side=tn):ht(T,B,K)}this.compile=function(T,B,K=null){K===null&&(K=T),m=Jt.get(K),m.init(B),x.push(m),K.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==K&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const j=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const U=G.material;if(U)if(Array.isArray(U))for(let V=0;V<U.length;V++){const st=U[V];$(st,K,G),j.add(st)}else $(U,K,G),j.add(U)}),x.pop(),m=null,j},this.compileAsync=function(T,B,K=null){const j=this.compile(T,B,K);return new Promise(G=>{function U(){if(j.forEach(function(V){It.get(V).currentProgram.isReady()&&j.delete(V)}),j.size===0){G(T);return}setTimeout(U,10)}dt.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let St=null;function ie(T){St&&St(T)}function _e(){Pe.stop()}function Me(){Pe.start()}const Pe=new Lh;Pe.setAnimationLoop(ie),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(T){St=T,Q.setAnimationLoop(T),T===null?Pe.stop():Pe.start()},Q.addEventListener("sessionstart",_e),Q.addEventListener("sessionend",Me),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,E),m=Jt.get(T,x.length),m.init(B),x.push(m),Pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(Pt),mt=this.localClippingEnabled,pt=ft.init(this.clippingPlanes,mt),g=Ut.get(T,b.length),g.init(),b.push(g),Q.enabled===!0&&Q.isPresenting===!0){const U=v.xr.getDepthSensingMesh();U!==null&&bt(U,B,-1/0,v.sortObjects)}bt(T,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ct,xt),rt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,rt&&Gt.addToRenderList(g,T),this.info.render.frame++,pt===!0&&ft.beginShadows();const K=m.state.shadowsArray;At.render(K,T,B),pt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,G=g.transmissive;if(m.setupLights(),B.isArrayCamera){const U=B.cameras;if(G.length>0)for(let V=0,st=U.length;V<st;V++){const Ct=U[V];be(j,G,T,Ct)}rt&&Gt.render(T);for(let V=0,st=U.length;V<st;V++){const Ct=U[V];re(g,T,Ct,Ct.viewport)}}else G.length>0&&be(j,G,T,B),rt&&Gt.render(T),re(g,T,B);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(v,T,B),ne.resetDefaultState(),y=-1,w=null,x.pop(),x.length>0?(m=x[x.length-1],pt===!0&&ft.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function bt(T,B,K,j){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){j&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pt);const V=it.update(T),st=T.material;st.visible&&g.push(T,V,st,K,$t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){const V=it.update(T),st=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),$t.copy(V.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(Pt)),Array.isArray(st)){const Ct=V.groups;for(let Vt=0,qt=Ct.length;Vt<qt;Vt++){const kt=Ct[Vt],ce=st[kt.materialIndex];ce&&ce.visible&&g.push(T,V,ce,K,$t.z,kt)}}else st.visible&&g.push(T,V,st,K,$t.z,null)}}const U=T.children;for(let V=0,st=U.length;V<st;V++)bt(U[V],B,K,j)}function re(T,B,K,j){const G=T.opaque,U=T.transmissive,V=T.transparent;m.setupLightsView(K),pt===!0&&ft.setGlobalState(v.clippingPlanes,K),j&&_t.viewport(R.copy(j)),G.length>0&&ge(G,B,K),U.length>0&&ge(U,B,K),V.length>0&&ge(V,B,K),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function be(T,B,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Ai(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Zs:Kn,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const U=m.state.transmissionRenderTarget[j.id],V=j.viewport||R;U.setSize(V.z,V.w);const st=v.getRenderTarget();v.setRenderTarget(U),v.getClearColor(F),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),rt&&Gt.render(K);const Ct=v.toneMapping;v.toneMapping=di;const Vt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),pt===!0&&ft.setGlobalState(v.clippingPlanes,j),ge(T,K,j),A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U),dt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let kt=0,ce=B.length;kt<ce;kt++){const ae=B[kt],me=ae.object,ye=ae.geometry,de=ae.material,Xt=ae.group;if(de.side===tn&&me.layers.test(j.layers)){const Je=de.side;de.side=en,de.needsUpdate=!0,Fe(me,K,j,ye,de,Xt),de.side=Je,de.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U))}v.setRenderTarget(st),v.setClearColor(F,q),Vt!==void 0&&(j.viewport=Vt),v.toneMapping=Ct}function ge(T,B,K){const j=B.isScene===!0?B.overrideMaterial:null;for(let G=0,U=T.length;G<U;G++){const V=T[G],st=V.object,Ct=V.geometry,Vt=j===null?V.material:j,qt=V.group;st.layers.test(K.layers)&&Fe(st,B,K,Ct,Vt,qt)}}function Fe(T,B,K,j,G,U){T.onBeforeRender(v,B,K,j,G,U),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(v,B,K,j,T,U),G.transparent===!0&&G.side===tn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,v.renderBufferDirect(K,B,j,G,T,U),G.side=ui,G.needsUpdate=!0,v.renderBufferDirect(K,B,j,G,T,U),G.side=tn):v.renderBufferDirect(K,B,j,G,T,U),T.onAfterRender(v,B,K,j,G,U)}function ht(T,B,K){B.isScene!==!0&&(B=Qt);const j=It.get(T),G=m.state.lights,U=m.state.shadowsArray,V=G.state.version,st=Et.getParameters(T,G.state,U,B,K),Ct=Et.getProgramCacheKey(st);let Vt=j.programs;j.environment=T.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(T.isMeshStandardMaterial?W:M).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Wt),Vt=new Map,j.programs=Vt);let qt=Vt.get(Ct);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===V)return Bt(T,st),qt}else st.uniforms=Et.getUniforms(T),T.onBeforeCompile(st,v),qt=Et.acquireProgram(st,Ct),Vt.set(Ct,qt),j.uniforms=st.uniforms;const kt=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=ft.uniform),Bt(T,st),j.needsLights=un(T),j.lightsStateVersion=V,j.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function ee(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=zr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Bt(T,B){const K=It.get(T);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function ve(T,B,K,j,G){B.isScene!==!0&&(B=Qt),A.resetTextureUnits();const U=B.fog,V=j.isMeshStandardMaterial?B.environment:null,st=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ms,Ct=(j.isMeshStandardMaterial?W:M).get(j.envMap||V),Vt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),kt=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,ae=!!K.morphAttributes.color;let me=di;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(me=v.toneMapping);const ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=ye!==void 0?ye.length:0,Xt=It.get(j),Je=m.state.lights;if(pt===!0&&(mt===!0||T!==w)){const xn=T===w&&j.id===y;ft.setState(j,T,xn)}let Ae=!1;j.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Je.state.version||Xt.outputColorSpace!==st||G.isBatchedMesh&&Xt.batching===!1||!G.isBatchedMesh&&Xt.batching===!0||G.isBatchedMesh&&Xt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xt.instancing===!1||!G.isInstancedMesh&&Xt.instancing===!0||G.isSkinnedMesh&&Xt.skinning===!1||!G.isSkinnedMesh&&Xt.skinning===!0||G.isInstancedMesh&&Xt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xt.instancingMorph===!1&&G.morphTexture!==null||Xt.envMap!==Ct||j.fog===!0&&Xt.fog!==U||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ft.numPlanes||Xt.numIntersection!==ft.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==qt||Xt.morphTargets!==kt||Xt.morphNormals!==ce||Xt.morphColors!==ae||Xt.toneMapping!==me||Xt.morphTargetsCount!==de)&&(Ae=!0):(Ae=!0,Xt.__version=j.version);let Mn=Xt.currentProgram;Ae===!0&&(Mn=ht(j,B,G));let Li=!1,fn=!1,xs=!1;const ke=Mn.getUniforms(),Pn=Xt.uniforms;if(_t.useProgram(Mn.program)&&(Li=!0,fn=!0,xs=!0),j.id!==y&&(y=j.id,fn=!0),Li||w!==T){_t.buffers.depth.getReversed()?(vt.copy(T.projectionMatrix),fu(vt),pu(vt),ke.setValue(L,"projectionMatrix",vt)):ke.setValue(L,"projectionMatrix",T.projectionMatrix),ke.setValue(L,"viewMatrix",T.matrixWorldInverse);const Qn=ke.map.cameraPosition;Qn!==void 0&&Qn.setValue(L,jt.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&ke.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ke.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,fn=!0,xs=!0)}if(G.isSkinnedMesh){ke.setOptional(L,G,"bindMatrix"),ke.setOptional(L,G,"bindMatrixInverse");const xn=G.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),ke.setValue(L,"boneTexture",xn.boneTexture,A))}G.isBatchedMesh&&(ke.setOptional(L,G,"batchingTexture"),ke.setValue(L,"batchingTexture",G._matricesTexture,A),ke.setOptional(L,G,"batchingIdTexture"),ke.setValue(L,"batchingIdTexture",G._indirectTexture,A),ke.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&ke.setValue(L,"batchingColorTexture",G._colorsTexture,A));const _s=K.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&Zt.update(G,K,Mn),(fn||Xt.receiveShadow!==G.receiveShadow)&&(Xt.receiveShadow=G.receiveShadow,ke.setValue(L,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Pn.envMap.value=Ct,Pn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(Pn.envMapIntensity.value=B.environmentIntensity),fn&&(ke.setValue(L,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&Re(Pn,xs),U&&j.fog===!0&&lt.refreshFogUniforms(Pn,U),lt.refreshMaterialUniforms(Pn,j,z,tt,m.state.transmissionRenderTarget[T.id]),zr.upload(L,ee(Xt),Pn,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(zr.upload(L,ee(Xt),Pn,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ke.setValue(L,"center",G.center),ke.setValue(L,"modelViewMatrix",G.modelViewMatrix),ke.setValue(L,"normalMatrix",G.normalMatrix),ke.setValue(L,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const xn=j.uniformsGroups;for(let Qn=0,ti=xn.length;Qn<ti;Qn++){const gl=xn[Qn];O.update(gl,Mn),O.bind(gl,Mn)}}return Mn}function Re(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function un(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,B,K){It.get(T.texture).__webglTexture=B,It.get(T.depthTexture).__webglTexture=K;const j=It.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const K=It.get(T);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,K=0){E=T,C=B,P=K;let j=!0,G=null,U=!1,V=!1;if(T){const Ct=It.get(T);if(Ct.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ct.__hasExternalTextures)A.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const kt=T.depthTexture;if(Ct.__boundDepthTexture!==kt){if(kt!==null&&It.has(kt)&&(T.width!==kt.image.width||T.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(V=!0);const qt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?G=qt[B][K]:G=qt[B],U=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?G=It.get(T).__webglMultisampledFramebuffer:Array.isArray(qt)?G=qt[K]:G=qt,R.copy(T.viewport),k.copy(T.scissor),D=T.scissorTest}else R.copy(gt).multiplyScalar(z).floor(),k.copy(Ft).multiplyScalar(z).floor(),D=Kt;if(_t.bindFramebuffer(L.FRAMEBUFFER,G)&&j&&_t.drawBuffers(T,G),_t.viewport(R),_t.scissor(k),_t.setScissorTest(D),U){const Ct=It.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,K)}else if(V){const Ct=It.get(T.texture),Vt=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.__webglTexture,K||0,Vt)}y=-1},this.readRenderTargetPixels=function(T,B,K,j,G,U,V){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&V!==void 0&&(st=st[V]),st){_t.bindFramebuffer(L.FRAMEBUFFER,st);try{const Ct=T.texture,Vt=Ct.format,qt=Ct.type;if(!at.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-j&&K>=0&&K<=T.height-G&&L.readPixels(B,K,j,G,Ht.convert(Vt),Ht.convert(qt),U)}finally{const Ct=E!==null?It.get(E).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(T,B,K,j,G,U,V){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let st=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&V!==void 0&&(st=st[V]),st){const Ct=T.texture,Vt=Ct.format,qt=Ct.type;if(!at.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-j&&K>=0&&K<=T.height-G){_t.bindFramebuffer(L.FRAMEBUFFER,st);const kt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,kt),L.bufferData(L.PIXEL_PACK_BUFFER,U.byteLength,L.STREAM_READ),L.readPixels(B,K,j,G,Ht.convert(Vt),Ht.convert(qt),0);const ce=E!==null?It.get(E).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,ce);const ae=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await uu(L,ae,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,kt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,U),L.deleteBuffer(kt),L.deleteSync(ae),U}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,K=0){T.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-K),G=Math.floor(T.image.width*j),U=Math.floor(T.image.height*j),V=B!==null?B.x:0,st=B!==null?B.y:0;A.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,V,st,G,U),_t.unbindTexture()},this.copyTextureToTexture=function(T,B,K=null,j=null,G=0){T.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],B=arguments[2],G=arguments[3]||0,K=null);let U,V,st,Ct,Vt,qt,kt,ce,ae;const me=T.isCompressedTexture?T.mipmaps[G]:T.image;K!==null?(U=K.max.x-K.min.x,V=K.max.y-K.min.y,st=K.isBox3?K.max.z-K.min.z:1,Ct=K.min.x,Vt=K.min.y,qt=K.isBox3?K.min.z:0):(U=me.width,V=me.height,st=me.depth||1,Ct=0,Vt=0,qt=0),j!==null?(kt=j.x,ce=j.y,ae=j.z):(kt=0,ce=0,ae=0);const ye=Ht.convert(B.format),de=Ht.convert(B.type);let Xt;B.isData3DTexture?(A.setTexture3D(B,0),Xt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Xt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Xt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Je=L.getParameter(L.UNPACK_ROW_LENGTH),Ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Li=L.getParameter(L.UNPACK_SKIP_ROWS),fn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);const xs=T.isDataArrayTexture||T.isData3DTexture,ke=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Pn=It.get(T),_s=It.get(B),xn=It.get(Pn.__renderTarget),Qn=It.get(_s.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,xn.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<st;ti++)xs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.get(T).__webglTexture,G,qt+ti),T.isDepthTexture?(ke&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.get(B).__webglTexture,G,ae+ti),L.blitFramebuffer(Ct,Vt,U,V,kt,ce,U,V,L.DEPTH_BUFFER_BIT,L.NEAREST)):ke?L.copyTexSubImage3D(Xt,G,kt,ce,ae+ti,Ct,Vt,U,V):L.copyTexSubImage2D(Xt,G,kt,ce,ae+ti,Ct,Vt,U,V);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ke?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Xt,G,kt,ce,ae,U,V,st,ye,de,me.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Xt,G,kt,ce,ae,U,V,st,ye,me.data):L.texSubImage3D(Xt,G,kt,ce,ae,U,V,st,ye,de,me):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,kt,ce,U,V,ye,de,me.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,kt,ce,me.width,me.height,ye,me.data):L.texSubImage2D(L.TEXTURE_2D,G,kt,ce,U,V,ye,de,me);L.pixelStorei(L.UNPACK_ROW_LENGTH,Je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Li),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fn),G===0&&B.generateMipmaps&&L.generateMipmap(Xt),_t.unbindTexture()},this.copyTextureToTexture3D=function(T,B,K=null,j=null,G=0){return T.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,T=arguments[2],B=arguments[3],G=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,K,j,G)},this.initRenderTarget=function(T){It.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){C=0,P=0,E=null,_t.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}class Qr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new Qr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fh extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ua,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new S;class Gr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class to extends pi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const bs=new S,Yi=new S,$i=new S,Zi=new yt,Ts=new yt,zh=new Ce,xr=new S,Es=new S,_r=new S,gc=new yt,Fo=new yt,vc=new yt;class ss extends Ge{constructor(t=new to){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tg(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Gr(n,3,0,!1)),qi.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=qi,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;yr(xr.set(-.5,-.5,0),$i,o,Yi,s,r),yr(Es.set(.5,-.5,0),$i,o,Yi,s,r),yr(_r.set(.5,.5,0),$i,o,Yi,s,r),gc.set(0,0),Fo.set(1,0),vc.set(1,1);let a=t.ray.intersectTriangle(xr,Es,_r,!1,bs);if(a===null&&(yr(Es.set(-.5,.5,0),$i,o,Yi,s,r),Fo.set(0,1),a=t.ray.intersectTriangle(xr,_r,Es,!1,bs),a===null))return;const c=t.ray.origin.distanceTo(bs);c<t.near||c>t.far||e.push({distance:c,point:bs.clone(),uv:yn.getInterpolation(bs,xr,Es,_r,gc,Fo,vc,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function yr(i,t,e,n,s,r){Zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*Zi.x-s*Zi.y,Ts.y=s*Zi.x+r*Zi.y):Ts.copy(Zi),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(zh)}class Eg extends nn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=gn,h=gn,d,f){super(null,o,a,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xc extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ji=new Ce,_c=new Ce,wr=[],yc=new Ri,Ag=new Ce,As=new Y,Cs=new Pi;class zo extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),yc.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Cs.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),_c.multiplyMatrices(n,ji),As.matrixWorld=_c,As.raycast(t,wr);for(let o=0,a=wr.length;o<a;o++){const c=wr[o];c.instanceId=r,c.object=this,e.push(c)}wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eg(new Float32Array(s*this.count),s,this.count,Za,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bh extends pi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wr=new S,Xr=new S,wc=new Ce,Rs=new Kr,Mr=new Pi,Bo=new S,Mc=new S;class Cg extends Ge{constructor(t=new We,e=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Wr.fromBufferAttribute(e,s-1),Xr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Wr.distanceTo(Xr);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;wc.copy(s).invert(),Rs.copy(t.ray).applyMatrix4(wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=u,g=p-1;_<g;_+=l){const m=h.getX(_),b=h.getX(_+1),x=Sr(this,t,Rs,c,m,b);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(u),m=Sr(this,t,Rs,c,_,g);m&&e.push(m)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=u,g=p-1;_<g;_+=l){const m=Sr(this,t,Rs,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Sr(this,t,Rs,c,p-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Wr.fromBufferAttribute(o,s),Xr.fromBufferAttribute(o,r),e.distanceSqToSegment(Wr,Xr,Bo,Mc)>n)return;Bo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bo);if(!(c<t.near||c>t.far))return{distance:c,point:Mc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Hh extends pi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sc=new Ce,Oa=new Kr,br=new Pi,Tr=new S;class Rg extends Ge{constructor(t=new We,e=new Hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;Sc.copy(s).invert(),Oa.copy(t.ray).applyMatrix4(Sc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let p=f,_=u;p<_;p++){const g=l.getX(p);Tr.fromBufferAttribute(d,g),bc(Tr,g,c,s,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,_=u;p<_;p++)Tr.fromBufferAttribute(d,p),bc(Tr,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bc(i,t,e,n,s,r,o){const a=Oa.distanceSqToPoint(i);if(a<e){const c=new S;Oa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class il extends nn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new yt:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new S,s=[],r=[],o=[],a=new S,c=new Ce;for(let u=0;u<=t;u++){const p=u/t;s[u]=this.getTangentAt(p,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ke(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ke(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sl extends kn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new yt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pg extends sl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Er=new S,Ho=new rl,Vo=new rl,Go=new rl;class Vh extends kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),l=Er);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Ho.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,p,_,g),Vo.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,p,_,g),Go.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Vo.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Go.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Ho.calc(c),Vo.calc(c),Go.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Lg(i,t){const e=1-i;return e*e*t}function Ig(i,t){return 2*(1-i)*i*t}function Dg(i,t){return i*i*t}function Fs(i,t,e,n){return Lg(i,t)+Ig(i,e)+Dg(i,n)}function Ug(i,t){const e=1-i;return e*e*e*t}function Ng(i,t){const e=1-i;return 3*e*e*i*t}function kg(i,t){return 3*(1-i)*i*i*t}function Og(i,t){return i*i*i*t}function zs(i,t,e,n,s){return Ug(i,t)+Ng(i,e)+kg(i,n)+Og(i,s)}class Gh extends kn{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fg extends kn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wh extends kn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zg extends kn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xh extends kn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends kn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y),Fs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Tc(a,c.x,l.x,h.x,d.x),Tc(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new yt().fromArray(s))}return this}}var qr=Object.freeze({__proto__:null,ArcCurve:Pg,CatmullRomCurve3:Vh,CubicBezierCurve:Gh,CubicBezierCurve3:Fg,EllipseCurve:sl,LineCurve:Wh,LineCurve3:zg,QuadraticBezierCurve:Xh,QuadraticBezierCurve3:qh,SplineCurve:Yh});class Bg extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new qr[s.type]().fromJSON(s))}return this}}class Fa extends Bg{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Wh(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Xh(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Gh(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Yh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new sl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ol extends We{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,d=new S,f=new yt,u=new S,p=new S,_=new S;let g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,u.x=m*1,u.y=-g,u.z=m*0,_.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,u.x=m*1,u.y=-g,u.z=m*0,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),c.push(u.x,u.y,u.z),_.copy(p)}for(let b=0;b<=e;b++){const x=n+b*h*s,v=Math.sin(x),N=Math.cos(x);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*v,d.y=t[C].y,d.z=t[C].x*N,o.push(d.x,d.y,d.z),f.x=b/e,f.y=C/(t.length-1),a.push(f.x,f.y);const P=c[3*C+0]*v,E=c[3*C+1],y=c[3*C+0]*N;l.push(P,E,y)}}for(let b=0;b<e;b++)for(let x=0;x<t.length-1;x++){const v=x+b*t.length,N=v,C=v+t.length,P=v+t.length+1,E=v+1;r.push(N,C,E),r.push(P,E,C)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.points,t.segments,t.phiStart,t.phiLength)}}class Bs extends ol{constructor(t=1,e=1,n=4,s=8){const r=new Fa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Bs(t.radius,t.length,t.capSegments,t.radialSegments)}}class $n extends We{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new S,h=new yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qe extends We{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const _=[],g=n/2;let m=0;b(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(u,2));function b(){const v=new S,N=new S;let C=0;const P=(e-t)/n;for(let E=0;E<=r;E++){const y=[],w=E/r,R=w*(e-t)+t;for(let k=0;k<=s;k++){const D=k/s,F=D*c+a,q=Math.sin(F),H=Math.cos(F);N.x=R*q,N.y=-w*n+g,N.z=R*H,d.push(N.x,N.y,N.z),v.set(q,P,H).normalize(),f.push(v.x,v.y,v.z),u.push(D,1-w),y.push(p++)}_.push(y)}for(let E=0;E<s;E++)for(let y=0;y<r;y++){const w=_[y][E],R=_[y+1][E],k=_[y+1][E+1],D=_[y][E+1];(t>0||y!==0)&&(h.push(w,R,D),C+=3),(e>0||y!==r-1)&&(h.push(R,k,D),C+=3)}l.addGroup(m,C,0),m+=C}function x(v){const N=p,C=new yt,P=new S;let E=0;const y=v===!0?t:e,w=v===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*w,0),f.push(0,w,0),u.push(.5,.5),p++;const R=p;for(let k=0;k<=s;k++){const F=k/s*c+a,q=Math.cos(F),H=Math.sin(F);P.x=y*H,P.y=g*w,P.z=y*q,d.push(P.x,P.y,P.z),f.push(0,w,0),C.x=q*.5+.5,C.y=H*.5*w+.5,u.push(C.x,C.y),p++}for(let k=0;k<s;k++){const D=N+k,F=R+k;v===!0?h.push(F,F+1,D):h.push(F+1,F,D),E+=3}l.addGroup(m,E,v===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hs extends qe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Hs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const x=new S,v=new S,N=new S;for(let C=0;C<e.length;C+=3)u(e[C+0],x),u(e[C+1],v),u(e[C+2],N),c(x,v,N,b)}function c(b,x,v,N){const C=N+1,P=[];for(let E=0;E<=C;E++){P[E]=[];const y=b.clone().lerp(v,E/C),w=x.clone().lerp(v,E/C),R=C-E;for(let k=0;k<=R;k++)k===0&&E===C?P[E][k]=y:P[E][k]=y.clone().lerp(w,k/R)}for(let E=0;E<C;E++)for(let y=0;y<2*(C-E)-1;y++){const w=Math.floor(y/2);y%2===0?(f(P[E][w+1]),f(P[E+1][w]),f(P[E][w])):(f(P[E][w+1]),f(P[E+1][w+1]),f(P[E+1][w]))}}function l(b){const x=new S;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(b),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const b=new S;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const v=g(b)/2/Math.PI+.5,N=m(b)/Math.PI+.5;o.push(v,1-N)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){const x=o[b+0],v=o[b+2],N=o[b+4],C=Math.max(x,v,N),P=Math.min(x,v,N);C>.9&&P<.1&&(x<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),N<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function u(b,x){const v=b*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function p(){const b=new S,x=new S,v=new S,N=new S,C=new yt,P=new yt,E=new yt;for(let y=0,w=0;y<r.length;y+=9,w+=6){b.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),C.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),E.set(o[w+4],o[w+5]),N.copy(b).add(x).add(v).divideScalar(3);const R=g(N);_(C,w+0,b,R),_(P,w+2,x,R),_(E,w+4,v,R)}}function _(b,x,v,N){N<0&&b.x===1&&(o[x]=b.x-1),v.x===0&&v.z===0&&(o[x]=N/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.vertices,t.indices,t.radius,t.details)}}class al extends eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new al(t.radius,t.detail)}}class $h extends Fa{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fa().fromJSON(s))}return this}}const Hg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Zh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,f,u;if(n&&(r=qg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let p=e;p<s;p+=e)d=i[p],f=i[p+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);u=Math.max(l-a,h-c),u=u!==0?32767/u:0}return qs(r,o,e,a,c,u,0),o}};function Zh(i,t,e,n,s){let r,o;if(s===iv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ec(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ec(r,i[r],i[r+1],o);return o&&no(o,o.next)&&($s(o),o=o.next),o}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(no(e,e.next)||He(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Kg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Gg(i,n,s,r):Vg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),$s(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Wg(Ci(i),t,e),qs(i,t,e,n,s,r,2)):o===2&&Xg(i,t,e,n,s,r):qs(Ci(i),t,e,n,s,r,1);break}}}function Vg(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,u=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&ts(s,a,r,c,o,l,p.x,p.y)&&He(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,f=o.y,u=a<c?a<l?a:l:c<l?c:l,p=h<d?h<f?h:f:d<f?d:f,_=a>c?a>l?a:l:c>l?c:l,g=h>d?h>f?h:f:d>f?d:f,m=za(u,p,t,e,n),b=za(_,g,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=m&&v&&v.z<=b;){if(x.x>=u&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ts(a,h,c,d,l,f,x.x,x.y)&&He(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=u&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ts(a,h,c,d,l,f,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=u&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ts(a,h,c,d,l,f,x.x,x.y)&&He(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=u&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ts(a,h,c,d,l,f,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!no(s,r)&&jh(s,n,n.next,r)&&Ys(s,r)&&Ys(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$s(n),$s(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function Xg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tv(o,a)){let c=Kh(o,a);o=Ci(o,o.next),c=Ci(c,c.next),qs(o,t,e,n,s,r,0),qs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qg(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Zh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Qg(l));for(s.sort(Yg),r=0;r<s.length;r++)e=$g(s[r],e);return e}function Yg(i,t){return i.x-t.x}function $g(i,t){const e=Zg(i,t);if(!e)return t;const n=Kh(e,i);return Ci(n,n.next),Ci(e,e.next)}function Zg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ts(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Ys(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&jg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function jg(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function Kg(i,t,e,n){let s=i;do s.z===0&&(s.z=za(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jg(s)}function Jg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function za(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function tv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ev(i,t)&&(Ys(i,t)&&Ys(t,i)&&nv(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||no(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function no(i,t){return i.x===t.x&&i.y===t.y}function jh(i,t,e,n){const s=Cr(He(i,t,e)),r=Cr(He(i,t,n)),o=Cr(He(e,n,i)),a=Cr(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Ar(i,e,t)||r===0&&Ar(i,n,t)||o===0&&Ar(e,i,n)||a===0&&Ar(e,t,n))}function Ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cr(i){return i>0?1:i<0?-1:0}function ev(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function nv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kh(i,t){const e=new Ba(i.i,i.x,i.y),n=new Ba(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ec(i,t,e,n){const s=new Ba(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ba(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Vs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Vs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ac(t),Cc(n,t);let o=t.length;e.forEach(Ac);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Cc(n,e[c]);const a=Hg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ac(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ll extends We{constructor(t=new $h([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:sv;let x,v=!1,N,C,P,E;m&&(x=m.getSpacedPoints(h),v=!0,f=!1,N=m.computeFrenetFrames(h,!1),C=new S,P=new S,E=new S),f||(g=0,u=0,p=0,_=0);const y=a.extractPoints(l);let w=y.shape;const R=y.holes;if(!Vs.isClockWise(w)){w=w.reverse();for(let rt=0,ut=R.length;rt<ut;rt++){const L=R[rt];Vs.isClockWise(L)&&(R[rt]=L.reverse())}}const D=Vs.triangulateShape(w,R),F=w;for(let rt=0,ut=R.length;rt<ut;rt++){const L=R[rt];w=w.concat(L)}function q(rt,ut,L){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ut,L)}const H=w.length,tt=D.length;function z(rt,ut,L){let Dt,dt,at;const _t=rt.x-ut.x,Yt=rt.y-ut.y,It=L.x-rt.x,A=L.y-rt.y,M=_t*_t+Yt*Yt,W=_t*A-Yt*It;if(Math.abs(W)>Number.EPSILON){const J=Math.sqrt(M),ot=Math.sqrt(It*It+A*A),it=ut.x-Yt/J,Et=ut.y+_t/J,lt=L.x-A/ot,Ut=L.y+It/ot,Jt=((lt-it)*A-(Ut-Et)*It)/(_t*A-Yt*It);Dt=it+_t*Jt-rt.x,dt=Et+Yt*Jt-rt.y;const ft=Dt*Dt+dt*dt;if(ft<=2)return new yt(Dt,dt);at=Math.sqrt(ft/2)}else{let J=!1;_t>Number.EPSILON?It>Number.EPSILON&&(J=!0):_t<-Number.EPSILON?It<-Number.EPSILON&&(J=!0):Math.sign(Yt)===Math.sign(A)&&(J=!0),J?(Dt=-Yt,dt=_t,at=Math.sqrt(M)):(Dt=_t,dt=Yt,at=Math.sqrt(M/2))}return new yt(Dt/at,dt/at)}const ct=[];for(let rt=0,ut=F.length,L=ut-1,Dt=rt+1;rt<ut;rt++,L++,Dt++)L===ut&&(L=0),Dt===ut&&(Dt=0),ct[rt]=z(F[rt],F[L],F[Dt]);const xt=[];let gt,Ft=ct.concat();for(let rt=0,ut=R.length;rt<ut;rt++){const L=R[rt];gt=[];for(let Dt=0,dt=L.length,at=dt-1,_t=Dt+1;Dt<dt;Dt++,at++,_t++)at===dt&&(at=0),_t===dt&&(_t=0),gt[Dt]=z(L[Dt],L[at],L[_t]);xt.push(gt),Ft=Ft.concat(gt)}for(let rt=0;rt<g;rt++){const ut=rt/g,L=u*Math.cos(ut*Math.PI/2),Dt=p*Math.sin(ut*Math.PI/2)+_;for(let dt=0,at=F.length;dt<at;dt++){const _t=q(F[dt],ct[dt],Dt);vt(_t.x,_t.y,-L)}for(let dt=0,at=R.length;dt<at;dt++){const _t=R[dt];gt=xt[dt];for(let Yt=0,It=_t.length;Yt<It;Yt++){const A=q(_t[Yt],gt[Yt],Dt);vt(A.x,A.y,-L)}}}const Kt=p+_;for(let rt=0;rt<H;rt++){const ut=f?q(w[rt],Ft[rt],Kt):w[rt];v?(P.copy(N.normals[0]).multiplyScalar(ut.x),C.copy(N.binormals[0]).multiplyScalar(ut.y),E.copy(x[0]).add(P).add(C),vt(E.x,E.y,E.z)):vt(ut.x,ut.y,0)}for(let rt=1;rt<=h;rt++)for(let ut=0;ut<H;ut++){const L=f?q(w[ut],Ft[ut],Kt):w[ut];v?(P.copy(N.normals[rt]).multiplyScalar(L.x),C.copy(N.binormals[rt]).multiplyScalar(L.y),E.copy(x[rt]).add(P).add(C),vt(E.x,E.y,E.z)):vt(L.x,L.y,d/h*rt)}for(let rt=g-1;rt>=0;rt--){const ut=rt/g,L=u*Math.cos(ut*Math.PI/2),Dt=p*Math.sin(ut*Math.PI/2)+_;for(let dt=0,at=F.length;dt<at;dt++){const _t=q(F[dt],ct[dt],Dt);vt(_t.x,_t.y,d+L)}for(let dt=0,at=R.length;dt<at;dt++){const _t=R[dt];gt=xt[dt];for(let Yt=0,It=_t.length;Yt<It;Yt++){const A=q(_t[Yt],gt[Yt],Dt);v?vt(A.x,A.y+x[h-1].y,x[h-1].x+L):vt(A.x,A.y,d+L)}}}et(),pt();function et(){const rt=s.length/3;if(f){let ut=0,L=H*ut;for(let Dt=0;Dt<tt;Dt++){const dt=D[Dt];Pt(dt[2]+L,dt[1]+L,dt[0]+L)}ut=h+g*2,L=H*ut;for(let Dt=0;Dt<tt;Dt++){const dt=D[Dt];Pt(dt[0]+L,dt[1]+L,dt[2]+L)}}else{for(let ut=0;ut<tt;ut++){const L=D[ut];Pt(L[2],L[1],L[0])}for(let ut=0;ut<tt;ut++){const L=D[ut];Pt(L[0]+H*h,L[1]+H*h,L[2]+H*h)}}n.addGroup(rt,s.length/3-rt,0)}function pt(){const rt=s.length/3;let ut=0;mt(F,ut),ut+=F.length;for(let L=0,Dt=R.length;L<Dt;L++){const dt=R[L];mt(dt,ut),ut+=dt.length}n.addGroup(rt,s.length/3-rt,1)}function mt(rt,ut){let L=rt.length;for(;--L>=0;){const Dt=L;let dt=L-1;dt<0&&(dt=rt.length-1);for(let at=0,_t=h+g*2;at<_t;at++){const Yt=H*at,It=H*(at+1),A=ut+Dt+Yt,M=ut+dt+Yt,W=ut+dt+It,J=ut+Dt+It;jt(A,M,W,J)}}}function vt(rt,ut,L){c.push(rt),c.push(ut),c.push(L)}function Pt(rt,ut,L){$t(rt),$t(ut),$t(L);const Dt=s.length/3,dt=b.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);Qt(dt[0]),Qt(dt[1]),Qt(dt[2])}function jt(rt,ut,L,Dt){$t(rt),$t(ut),$t(Dt),$t(ut),$t(L),$t(Dt);const dt=s.length/3,at=b.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);Qt(at[0]),Qt(at[1]),Qt(at[3]),Qt(at[1]),Qt(at[2]),Qt(at[3])}function $t(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function Qt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qr[s.type]().fromJSON(s)),new ll(n,t.options)}}const sv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new yt(r,o),new yt(a,c),new yt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new yt(o,1-c),new yt(l,1-d),new yt(f,1-p),new yt(_,1-m)]:[new yt(a,1-c),new yt(h,1-d),new yt(u,1-p),new yt(g,1-m)]}};function rv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cl extends eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cl(t.radius,t.detail)}}class io extends We{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const f=(e-t)/s,u=new S,p=new yt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;u.x=d*Math.cos(m),u.y=d*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}d+=f}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const b=m+g,x=b,v=b+n+1,N=b+n+2,C=b+1;a.push(x,v,C),a.push(v,N,C)}}this.setIndex(a),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Be extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new S,f=new S,u=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const b=[],x=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&c===Math.PI&&(v=-.5/e);for(let N=0;N<=e;N++){const C=N/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+x*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(C+v,1-x),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const x=h[m][b+1],v=h[m][b],N=h[m+1][b],C=h[m+1][b+1];(m!==0||o>0)&&u.push(x,v,C),(m!==n-1||c<Math.PI)&&u.push(v,N,C)}this.setIndex(u),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zn extends We{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new S,d=new S,f=new S;for(let u=0;u<=n;u++)for(let p=0;p<=s;p++){const _=p/s*r,g=u/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let p=1;p<=s;p++){const _=(s+1)*u+p-1,g=(s+1)*(u-1)+p-1,m=(s+1)*(u-1)+p,b=(s+1)*u+p;o.push(_,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hl extends We{constructor(t=new qh(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,c=new S,l=new yt;let h=new S;const d=[],f=[],u=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(u,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),b(),m()}function g(x){h=t.getPointAt(x/e,h);const v=o.normals[x],N=o.binormals[x];for(let C=0;C<=s;C++){const P=C/s*Math.PI*2,E=Math.sin(P),y=-Math.cos(P);c.x=y*v.x+E*N.x,c.y=y*v.y+E*N.y,c.z=y*v.z+E*N.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const N=(s+1)*(x-1)+(v-1),C=(s+1)*x+(v-1),P=(s+1)*x+v,E=(s+1)*(x-1)+v;p.push(N,C,E),p.push(C,P,E)}}function b(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new hl(new qr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Rt extends pi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Rc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ov{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const u=l[d],p=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null}}}const av=new ov;class dl{constructor(t){this.manager=t!==void 0?t:av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}dl.DEFAULT_MATERIAL_NAME="__DEFAULT";class lv extends dl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Rc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Xs("img");function c(){h(),Rc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class cv extends dl{constructor(t){super(t)}load(t,e,n,s){const r=new nn,o=new lv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class so extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ro extends so{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wo=new Ce,Pc=new S,Lc=new S;class ul{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hv extends ul{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=fs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class dv extends so{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ic=new Ce,Ps=new S,Xo=new S;class uv extends ul{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),Xo.copy(n.position),Xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xo),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic)}}class jn extends so{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fv extends ul{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oo extends so{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new fv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dc(){return performance.now()}const Uc=new Ce;class Jh{constructor(t,e,n=0,s=1/0){this.ray=new Kr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(t,e=!0,n=[]){return Ha(t,this,n,e),n.sort(Nc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ha(t[s],this,n,e);return n.sort(Nc),n}}function Nc(i,t){return i.distance-t.distance}function Ha(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ha(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);class mv extends Fh{constructor(){super();const t=new Le;t.deleteAttribute("uv");const e=new Rt({side:en}),n=new Rt,s=new jn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Y(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Y(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Y(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Y(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Y(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Y(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new Y(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new Y(t,Ki(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const u=new Y(t,Ki(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const p=new Y(t,Ki(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const _=new Y(t,Ki(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new Y(t,Ki(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const m=new Y(t,Ki(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ki(i){const t=new fe;return t.color.setScalar(i),t}const Wn=1.65;class kc extends EventTarget{constructor(t){super();const e=this.renderer=new bg({canvas:t,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=Qe,e.toneMapping=ch,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=ah,e.shadowMap.autoUpdate=!1,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),this.scene=new Fh,this.scene.background=new le(1713459),this.scene.fog=new Qr(2766146,22,48);const n=new Na(e);this.scene.environment=n.fromScene(new mv,.04).texture,this.scene.environmentIntensity=.35,this.camera=new cn(70,window.innerWidth/window.innerHeight,.05,120),this.rig=new zt,this.rig.add(this.camera),this.camera.position.set(0,Wn,0),this.scene.add(this.rig),this.clock=new pv,this.time=0,this.updaters=new Set,this.tweens=new Set,window.addEventListener("resize",()=>this.resize()),e.xr.addEventListener("sessionstart",()=>this.dispatchEvent(new Event("vrstart"))),e.xr.addEventListener("sessionend",()=>{this.camera.position.set(0,Wn,0),this.dispatchEvent(new Event("vrend"))}),e.setAnimationLoop(()=>this.frame())}get isVR(){return this.renderer.xr.isPresenting}resize(){this.isVR||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight,!1))}shadowsDirty(){this.renderer.shadowMap.needsUpdate=!0}tween(t,e){return new Promise(n=>{const s={t:0,duration:t,fn:e,resolve:n};this.tweens.add(s)})}frame(){const t=Math.min(this.clock.getDelta(),.1);this.time+=t;for(const e of this.tweens){e.t+=t;const n=Math.min(1,e.t/e.duration);e.fn(n),n>=1&&(this.tweens.delete(e),e.resolve())}for(const e of this.updaters)e(t,this.time);this.renderer.render(this.scene,this.camera)}static async vrSupported(){try{return!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr"))}catch{return!1}}async enterVR(){const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});return await this.renderer.xr.setSession(t),t}exitVR(){const t=this.renderer.xr.getSession();t&&t.end()}}const gv=new S(0,1,0);class vv extends EventTarget{constructor(t){super(),this.engine=t,this.canvas=t.renderer.domElement,this.raycaster=new Jh,this.raycaster.far=40,this.world=null,this.uiMeshes=new Set,this.modal=!1,this.locked=!0,this.yaw=0,this.pitch=-.08,this.keys=new Set,this.walkTarget=null,this.hovered=new Map,this.onSelect=null,this._bindPointer(),this._bindKeys(),this._setupXR(),t.updaters.add(e=>this._update(e)),t.addEventListener("vrend",()=>this._applyLook())}setWorld(t){this.world=t,this.yaw=t.spawn.yaw,this.pitch=-.08,this.engine.rig.position.copy(t.spawn.position),this.engine.rig.rotation.set(0,this.yaw,0),this._applyLook(),this.walkTarget=null}_targets(){const t=[...this.uiMeshes].filter(e=>e.visible&&e.parent);if(this.modal||!this.world)return t;for(const e of Object.values(this.world.interactables))e.done||t.push(e.hit);return t.push(...this.world.floors,...this.world.blockers),t}_pick(){const t=this.raycaster.intersectObjects(this._targets(),!0);for(const e of t){let n=e.object;return n.userData.panel?{kind:"ui",panel:n.userData.panel,uv:e.uv,point:e.point,distance:e.distance}:n.userData.interactable?{kind:"item",item:n.userData.interactable,point:e.point,distance:e.distance}:this.world&&this.world.floors.includes(n)?{kind:"floor",point:e.point,distance:e.distance}:{kind:"block",point:e.point,distance:e.distance}}return null}_setHover(t,e){const n=this.hovered.get(t)||null;if(n===e)return;this.hovered.set(t,e);const s=new Set(this.hovered.values());n&&!s.has(n)&&n.setHighlight(!1),e&&e.setHighlight(!0),t==="mouse"&&(this.canvas.style.cursor=e?"pointer":"grab")}clearHover(){for(const t of this.hovered.values())t&&t.setHighlight(!1);this.hovered.clear(),this.dispatchEvent(new CustomEvent("hover",{detail:null}))}_bindPointer(){const t=this.canvas,e=new yt;let n=null;const s=o=>{const a=t.getBoundingClientRect();return e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-a.top)/a.height)*2+1),e};t.addEventListener("pointerdown",o=>{this.engine.isVR||n||(n={id:o.pointerId,x:o.clientX,y:o.clientY,lx:o.clientX,ly:o.clientY,moved:!1,type:o.pointerType},t.setPointerCapture(o.pointerId),o.pointerType==="mouse"&&(t.style.cursor="grabbing"))}),t.addEventListener("pointermove",o=>{if(this.engine.isVR)return;if(n&&o.pointerId===n.id){const l=o.clientX-n.lx,h=o.clientY-n.ly;if(n.lx=o.clientX,n.ly=o.clientY,Math.hypot(o.clientX-n.x,o.clientY-n.y)>7&&(n.moved=!0),n.moved&&!this.locked&&!this.modal){const d=n.type==="touch"?.006:.004;this.yaw+=l*d,this.pitch=Gn.clamp(this.pitch+h*d,-1.25,1.25),this._applyLook()}return}if(o.pointerType!=="mouse"||this.locked||this.modal)return;this.raycaster.setFromCamera(s(o),this.engine.camera);const a=this._pick(),c=a&&a.kind==="item"?a.item:null;this._setHover("mouse",c),this.dispatchEvent(new CustomEvent("hover",{detail:c?{item:c,x:o.clientX,y:o.clientY}:null}))});const r=o=>{if(!n||o.pointerId!==n.id)return;const a=!n.moved;n=null,t.style.cursor="grab",!(!a||this.locked||this.modal||o.type==="pointercancel")&&(this.raycaster.setFromCamera(s(o),this.engine.camera),this._activate(this._pick(),"mouse"))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("contextmenu",o=>o.preventDefault())}_bindKeys(){window.addEventListener("keydown",t=>{t.target&&/input|textarea/i.test(t.target.tagName)||this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear())}_applyLook(){this.engine.isVR||(this.engine.rig.rotation.set(0,this.yaw,0),this.engine.camera.position.set(0,Wn,0),this.engine.camera.rotation.set(this.pitch,0,0))}_activate(t,e){if(t){if(t.kind==="ui"){t.panel.click(t.uv);return}if(!(this.modal||this.locked)){if(t.kind==="item"){this.walkTarget=null,this.onSelect&&this.onSelect(t.item);return}t.kind==="floor"&&(this.engine.isVR?this.teleport(t.point):this.walkTarget=this._clamp(t.point.clone()))}}}_clamp(t){const e=this.world.bounds;return t.x=Gn.clamp(t.x,e.minX,e.maxX),t.z=Gn.clamp(t.z,e.minZ,e.maxZ),t.y=this.world.floorY||0,t}teleport(t){const e=this.engine.rig,n=new S;this.engine.camera.getWorldPosition(n),e.position.x+=t.x-n.x,e.position.z+=t.z-n.z,this._clamp(e.position)}snapTurn(t){const e=this.engine.rig,n=new S;this.engine.camera.getWorldPosition(n),e.position.sub(n).applyAxisAngle(gv,t).add(n),e.rotation.y+=t}_setupXR(){const t=this.engine.renderer.xr;this.controllers=[];const e=new We().setFromPoints([new S(0,0,0),new S(0,0,-1)]),n=new Bh({color:16739072,transparent:!0,opacity:.9}),s=new Be(.012,10,8),r=new fe({color:16777215});for(let a=0;a<2;a++){const c=t.getController(a),l=new Cg(e,n);l.scale.z=3;const h=new Y(s,r);h.position.z=-3,c.add(l,h),c.userData={line:l,dot:h,source:null,turnLatched:!1},c.addEventListener("connected",d=>{c.userData.source=d.data,c.userData.handedness=d.data.handedness,c.visible=d.data.targetRayMode!=="gaze",this.dispatchEvent(new CustomEvent("controller",{detail:{controller:c,grip:o[a],handedness:d.data.handedness}}))}),c.addEventListener("disconnected",()=>{c.userData.source=null,this._setHover(c,null)}),c.addEventListener("select",()=>{this.raycaster.setFromXRController(c),this._activate(this._pick(),c)}),this.engine.rig.add(c),this.controllers.push(c)}const o=[0,1].map(a=>{const c=t.getControllerGrip(a),l=new Y(new qe(.018,.024,.12,12),new Rt({color:9552,roughness:.5}));return l.rotation.x=Math.PI/2,l.position.z=.03,c.add(l),this.engine.rig.add(c),c});this.controllers.forEach((a,c)=>{a.userData.grip=o[c]}),this.reticle=new Y(new io(.16,.22,32).rotateX(-Math.PI/2),new fe({color:16739072,transparent:!0,opacity:.85,depthWrite:!1})),this.reticle.visible=!1,this.engine.scene.add(this.reticle)}_updateXR(){let t=!1;for(const e of this.controllers){if(!e.userData.source)continue;this.raycaster.setFromXRController(e);const n=this._pick(),s=n?n.distance:3;if(e.userData.line.scale.z=s,e.userData.dot.position.z=-s,this._setHover(e,n&&n.kind==="item"?n.item:null),n&&n.kind==="ui")n.panel.hover(n.uv,e);else for(const o of this.uiMeshes)o.userData.panel.hover(null,e);n&&n.kind==="floor"&&!this.modal&&!this.locked&&!t&&(this.reticle.position.set(n.point.x,.01,n.point.z),t=!0);const r=e.userData.source.gamepad;if(r&&!this.locked){const o=r.axes.length>=4?r.axes[2]:r.axes[0]||0;Math.abs(o)>.7&&!e.userData.turnLatched?(this.snapTurn(-Math.sign(o)*(Math.PI/6)),e.userData.turnLatched=!0):Math.abs(o)<.3&&(e.userData.turnLatched=!1)}}this.reticle.visible=t}_update(t){if(this.engine.isVR){this._updateXR();return}if(this.reticle.visible=!1,this.locked||this.modal||!this.world)return;const e=this.keys,n=(e.has("ArrowLeft")?1:0)-(e.has("ArrowRight")?1:0);n&&(this.yaw+=n*1.8*t,this._applyLook());const s=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),r=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),o=this.engine.rig;if(s||r){this.walkTarget=null;const a=(e.has("ShiftLeft")?3.2:1.8)*t,c=Math.sin(this.yaw),l=Math.cos(this.yaw);o.position.x+=(-c*s+l*r)*a,o.position.z+=(-l*s-c*r)*a,this._clamp(o.position)}else if(this.walkTarget){const a=new S().subVectors(this.walkTarget,o.position);a.y=0;const c=a.length();c<.05?this.walkTarget=null:o.position.addScaledVector(a.normalize(),Math.min(c,2.6*t))}}}const Oe={navy:"#002550",orange:"#ff6b00",grey:"#e4ebef",ok:"#1f9d55",bad:"#c0392b",okBg:"#e7f6ee",badBg:"#fbeceb",softOrange:"#fff3ec"},En={head:i=>`900 ${i}px Gilroy, Arial, sans-serif`,body:i=>`500 ${i}px Gilroy, Arial, sans-serif`,mono:i=>`400 ${i}px "PP Supply Mono", "Courier New", monospace`};function Ls(i,t,e){const n=String(t).split(/\s+/),s=[];let r="";for(const o of n){const a=r?r+" "+o:o;i.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Is(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}class Qh{constructor({widthM:t=1,px:e=1024,maxH:n=1800,compact:s=!1}={}){this.px=e,this.maxH=n,this.widthM=t,this.compact=s,this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=n,this.ctx=this.canvas.getContext("2d"),this.texture=new il(this.canvas),this.texture.colorSpace=Qe,this.texture.anisotropy=4,this.mesh=new Y(new se(1,1),new fe({map:this.texture,transparent:!0,depthTest:!1,toneMapped:!1})),this.mesh.renderOrder=1e3,this.mesh.userData.panel=this,this.rects=[],this.hoverBy=new Map,this.spec=null,this.usedH=100}render(t){this.spec=t,this._draw()}_draw(){const t=this.spec;if(!t)return;const e=this.ctx,n=this.px,s=this.compact?36:56,r=n-s*2,o=this.compact?1.25:1,a=new Set(this.hoverBy.values());e.clearRect(0,0,n,this.maxH),this.rects=[];const c=l=>{let h=0;if(l&&(e.fillStyle="#ffffff",Is(e,0,0,n,this.usedH,36),e.fill(),e.save(),Is(e,0,0,n,this.usedH,36),e.clip(),e.fillStyle=Oe.orange,e.fillRect(0,0,n,16),e.restore()),h=16+(this.compact?26:44),e.textBaseline="top",t.kicker&&(e.font=En.mono(24*o),e.fillStyle=Oe.orange,l&&e.fillText(String(t.kicker).toUpperCase(),s,h),h+=40*o),t.title){e.font=En.head(46*o),e.fillStyle=Oe.navy;for(const u of Ls(e,String(t.title).toUpperCase(),r))l&&e.fillText(u,s,h),h+=52*o;h+=12}const d=[].concat(t.body||[]);e.font=En.body(30*o),e.fillStyle=Oe.navy;for(const u of d){for(const p of Ls(e,u,r))l&&e.fillText(p,s,h),h+=40*o;h+=14}if(t.figure){const u=t.figure,p=r*(u.height/u.width);l&&e.drawImage(u,s,h,r,p),h+=p+14}const f=()=>{if(!t.feedback)return;const u=t.feedback;e.font=En.body(27);const p=Ls(e,u.text,r-60),_=70+p.length*35+24;l&&(e.fillStyle=u.ok?Oe.okBg:Oe.badBg,Is(e,s,h,r,_,20),e.fill(),e.fillStyle=u.ok?Oe.ok:Oe.bad,e.fillRect(s,h,10,_),e.font=En.head(30),e.fillStyle=Oe.navy,e.fillText(String(u.title).toUpperCase(),s+34,h+22),e.font=En.body(27),p.forEach((g,m)=>e.fillText(g,s+34,h+66+m*35))),h+=_+16};if(t.figure&&f(),t.options&&(h+=6,t.options.forEach((u,p)=>{e.font=En.body(28);const _=Ls(e,u.text,r-110),g=Math.max(84,_.length*36+44),m="opt"+p;if(l){const b=a.has(m)&&!u.disabled;e.fillStyle=u.state==="correct"?Oe.okBg:u.state==="wrong"?Oe.badBg:b?Oe.softOrange:Oe.grey,Is(e,s,h,r,g,22),e.fill();const x=u.state==="correct"?Oe.ok:u.state==="wrong"?Oe.bad:b?Oe.orange:null;x&&(e.lineWidth=5,e.strokeStyle=x,e.stroke()),e.font=En.mono(u.mark?22:30),e.fillStyle=u.state==="correct"?Oe.ok:Oe.orange,e.fillText(u.mark??String.fromCharCode(65+p),s+(u.mark?18:30),h+(u.mark?28:24)),e.font=En.body(28),e.fillStyle=Oe.navy,_.forEach((v,N)=>e.fillText(v,s+84,h+24+N*36))}!u.disabled&&t.onOption&&this.rects.push({id:m,x:s,y:h,w:r,h:g,fn:()=>t.onOption(p)}),h+=g+14})),t.figure||f(),t.source){e.font=En.body(21),e.fillStyle="#4a5d73";for(const u of Ls(e,t.source,r))l&&e.fillText(u,s,h),h+=28;h+=10}if(t.buttons&&t.buttons.length){h+=8,e.font=En.mono(26*o);const u=80*(this.compact?1.1:1),p=16,_=t.buttons.map(b=>e.measureText(String(b.label).toUpperCase()).width+70),g=[[]];let m=0;_.forEach((b,x)=>{g.at(-1).length&&m+p+b>r&&(g.push([]),m=0),m+=(g.at(-1).length?p:0)+b,g.at(-1).push(x)}),g.forEach((b,x)=>{const v=b.reduce((P,E)=>P+_[E],0)+p*(b.length-1),N=v>r;let C=this.compact||g.length>1?s:Math.max(s,n-s-v);for(const P of b){const E=t.buttons[P],y=N?(r-p*(b.length-1))/b.length:g.length>1?(r-p*(b.length-1))*(_[P]/(v-p*(b.length-1))):_[P],w="btn"+P;if(l){const R=a.has(w),k=E.style!=="secondary";Is(e,C,h,y,u,u/2),e.fillStyle=k?R?"#ff8a33":Oe.orange:R?Oe.grey:"#ffffff",e.fill(),e.lineWidth=4,e.strokeStyle=k?Oe.orange:Oe.navy,e.stroke(),e.fillStyle=Oe.navy,e.textAlign="center",e.fillText(String(E.label).toUpperCase(),C+y/2,h+u/2-13*o),e.textAlign="left"}E.disabled||this.rects.push({id:w,x:C,y:h,w:y,h:u,fn:E.onClick}),C+=y+p}h+=u+(x<g.length-1?p:0)})}return h+s*.8};this.usedH=Math.min(this.maxH,Math.ceil(c(!1))),this.rects=[],c(!0),this.texture.repeat.set(1,this.usedH/this.maxH),this.texture.offset.set(0,1-this.usedH/this.maxH),this.texture.needsUpdate=!0,this.mesh.scale.set(this.widthM,this.widthM*(this.usedH/this.px),1)}_rectAt(t){if(!t)return null;const e=t.x*this.px,n=(1-t.y)*this.usedH;return this.rects.find(s=>e>=s.x&&e<=s.x+s.w&&n>=s.y&&n<=s.y+s.h)||null}hover(t,e){const n=this._rectAt(t),s=n?n.id:null;this.hoverBy.get(e)!==s&&(s?this.hoverBy.set(e,s):this.hoverBy.delete(e),this._draw())}click(t){const e=this._rectAt(t);e&&e.fn&&e.fn()}}function Z(i,t={},...e){const[n,...s]=i.split("."),r=document.createElement(n||"div");s.length&&(r.className=s.join(" "));for(const[o,a]of Object.entries(t||{}))a==null||a===!1||(o.startsWith("on")?r.addEventListener(o.slice(2).toLowerCase(),a):o==="text"?r.textContent=a:r.setAttribute(o,a===!0?"":a));for(const o of e.flat())o!=null&&o!==!1&&r.append(o instanceof Node?o:document.createTextNode(String(o)));return r}function xv(i){const t=[].concat(i.body||[]).map(l=>Z("p",{text:l})),e=i.options?Z("div.options",{},i.options.map((l,h)=>Z(`button.option${l.state?"."+l.state:""}`,{disabled:l.disabled,onclick:()=>i.onOption&&i.onOption(h)},Z("span.letter",{text:l.mark??String.fromCharCode(65+h)}),Z("span",{text:l.text})))):null,n=i.feedback?Z(`div.feedback.${i.feedback.ok?"ok":"no"}`,{},Z("strong",{text:i.feedback.title}),Z("span",{text:i.feedback.text})):null,s=i.source?Z("div.src",{text:i.source}):null,r=i.figure?Z("div.figure",{},i.figure):null,o=(i.buttons||[]).map(l=>Z(`button.btn${l.style==="secondary"?".secondary":""}`,{disabled:l.disabled,onclick:l.onClick,text:l.label})),a=Z("div.modal",{role:"dialog","aria-modal":"true"},Z("div.modal-head",{},i.kicker?Z("div.kicker",{text:i.kicker}):null,i.title?Z("h2",{text:i.title}):null),Z("div.modal-body",{},t,r,r?n:null,e,r?null:n,s),o.length?Z("div.modal-foot",{},o):null),c=Z("div.modal-wrap",{},a);return queueMicrotask(()=>{const l=a.querySelector(".option:not([disabled]), .btn");l&&matchMedia("(pointer:fine)").matches&&l.focus({preventScroll:!0})}),c}function _v(i,t){const e=Z("div.toast",{text:t});i.append(e),setTimeout(()=>e.remove(),3300)}const Rr={factory:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 42V22l11 7v-7l11 7v-7l11 7V8h5v34z"/><path d="M5 42h38"/></svg>',construction:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 42V10h32"/><path d="M8 10l10 10M40 10v8"/><path d="M36 18h8v6h-8z"/><path d="M4 42h40M16 42V28h12v14"/></svg>',underwater:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2"/><circle cx="20" cy="27" r="6"/><path d="M26 27h8M14 33l-4 6M30 21l6-5"/><circle cx="38" cy="36" r="2"/><circle cx="34" cy="41" r="1.5"/></svg>',shipyard:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30h36l-5 10H11z"/><path d="M12 30V20h18v10M30 24h6v6"/><path d="M4 44c4 0 4-2 8-2s4 2 8 2 4-2 8-2 4 2 8 2 4-2 8-2"/></svg>'};class yv{constructor(t,e,n){this.engine=t,this.input=e,this.uiRoot=n,this.spec=null,this.htmlNode=null,this.vr=new Qh({widthM:.95}),this.vr.mesh.visible=!1,t.scene.add(this.vr.mesh),e.uiMeshes.add(this.vr.mesh),t.addEventListener("vrstart",()=>this.spec&&this._render(!0)),t.addEventListener("vrend",()=>this.spec&&this._render(!0))}get isOpen(){return!!this.spec}show(t){const e=!this.spec;this.spec=t,this.input.modal=!0,this.input.clearHover(),this._render(e)}hide(){this.spec=null,this.input.modal=!1,this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.vr.mesh.visible=!1}_render(t){this.htmlNode&&(this.htmlNode.remove(),this.htmlNode=null),this.engine.isVR?(this.vr.render(this.spec),this.vr.mesh.visible=!0,t&&this._placeInFront()):(this.vr.mesh.visible=!1,this.htmlNode=xv(this.spec),this.uiRoot.append(this.htmlNode))}_placeInFront(){const t=this.engine.camera,e=new S,n=new S;t.getWorldPosition(e),t.getWorldDirection(n),n.y=0,n.lengthSq()<1e-4&&n.set(0,0,-1),n.normalize();const s=this.vr.mesh;s.position.copy(e).addScaledVector(n,1.25),s.position.y=e.y-.12,s.lookAt(e.x,s.position.y,e.z)}}function ao(i=1){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function vn(i,t,e,{repeat:n=[1,1],srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t;const o=r.getContext("2d");e(o,i,t);const a=new il(r);return s&&(a.colorSpace=Qe),a.wrapS=a.wrapT=Hr,a.repeat.set(n[0],n[1]),a.anisotropy=8,a}function td(i=[8,6]){return vn(512,512,(t,e,n)=>{const s=ao(7);t.fillStyle="#8d9196",t.fillRect(0,0,e,n);for(let r=0;r<40;r++){const o=s()*e,a=s()*n,c=30+s()*110,l=t.createRadialGradient(o,a,0,o,a,c),h=s()>.5;l.addColorStop(0,h?"rgba(60,62,66,0.16)":"rgba(190,194,198,0.14)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(o-c,a-c,c*2,c*2)}for(let r=0;r<9e3;r++){const o=90+s()*90;t.fillStyle=`rgba(${o},${o},${o+4},${.08+s()*.12})`,t.fillRect(s()*e,s()*n,1+s()*2,1+s()*2)}t.strokeStyle="rgba(40,42,46,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,1),t.lineTo(e,1),t.moveTo(1,0),t.lineTo(1,n),t.stroke()},{repeat:i})}function Yr(i="#c9d1d8",t=[12,1]){return vn(256,256,(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s);for(let o=0;o<n;o+=32){const a=e.createLinearGradient(o,0,o+32,0);a.addColorStop(0,"rgba(0,0,0,0.10)"),a.addColorStop(.5,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(0,0,0,0.10)"),e.fillStyle=a,e.fillRect(o,0,32,s)}const r=ao(3);for(let o=0;o<800;o++)e.fillStyle=`rgba(80,80,80,${r()*.05})`,e.fillRect(r()*n,r()*s,2,6)},{repeat:t})}function ed(){return vn(256,64,(i,t,e)=>{const n=ao(11);i.fillStyle="#b58a57",i.fillRect(0,0,t,e);for(let s=0;s<60;s++){i.strokeStyle=`rgba(90,60,30,${.1+n()*.2})`,i.lineWidth=1+n()*2;const r=n()*e;i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(t*.3,r+(n()-.5)*8,t*.6,r+(n()-.5)*8,t,r+(n()-.5)*6),i.stroke()}})}function wv(){return vn(128,128,(i,t,e)=>{const n=ao(5);i.fillStyle="#b8895a",i.fillRect(0,0,t,e);for(let s=0;s<400;s++)i.fillStyle=`rgba(120,80,40,${n()*.15})`,i.fillRect(n()*t,n()*e,2,2);i.fillStyle="rgba(150,110,70,0.6)",i.fillRect(0,e*.45,t,10)})}function Ne({header:i,lines:t=[],headerBg:e="#006ce9",bg:n="#ffffff",fg:s="#002550",w:r=512,h:o=256}){return vn(r,o,a=>{a.fillStyle=n,a.fillRect(0,0,r,o);const c=i?o*.34:0;i&&(a.fillStyle=e,a.fillRect(0,0,r,c),a.fillStyle="#ffffff",a.font=`900 ${Math.round(c*.5)}px Gilroy, Arial, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(i.toUpperCase(),r/2,c/2+2)),a.fillStyle=s,a.textAlign="center",a.textBaseline="middle";const l=(o-c)/(t.length+1);a.font=`900 ${Math.round(Math.min(l*.75,o*.22))}px Gilroy, Arial, sans-serif`,t.forEach((h,d)=>a.fillText(h.toUpperCase(),r/2,c+l*(d+1))),a.strokeStyle=s,a.lineWidth=6,a.strokeRect(3,3,r-6,o-6)},{repeat:[1,1]})}function Mv(){return vn(128,128,(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,t*.44,0,Math.PI*2),i.fillStyle="#ff6b00",i.fill(),i.lineWidth=8,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#002550",i.font="900 78px Gilroy, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("!",t/2,e/2+4)})}function nd(i){const t=new cv().load(i);return t.colorSpace=Qe,t.anisotropy=8,t}const Ve=(i,t=.7,e=0,n={})=>new Rt({color:i,roughness:t,metalness:e,...n});function lo(){return{steel:Ve(9080982,.42,.85),darkSteel:Ve(3883078,.5,.8),galv:Ve(12041666,.35,.9),columnBlue:Ve(2841228,.55,.3),navy:Ve(9552,.6,.2),orange:Ve(16739072,.5,.1),yellow:Ve(15906565,.55,.1),red:Ve(12721951,.45,.2),black:Ve(1711135,.8,.1),rubber:Ve(2237222,.9,0),machine:Ve(2703966,.5,.4),white:Ve(15922422,.6,0),panelGrey:Ve(8358543,.75,.2),lockerGrey:Ve(7307926,.5,.5),cylinder:Ve(10134442,.4,.6),copper:Ve(12088115,.35,.9),wood:Ve(16777215,.85,0,{map:ed()}),cardboard:Ve(16777215,.9,0,{map:wv()}),rag:Ve(5918533,.95,0),ragBlue:Ve(4086394,.95,0),skin:Ve(13803644,.7,0),hivis:Ve(14217770,.6,0,{emissive:2765568}),curtain:new Rt({color:16734738,roughness:.4,metalness:0,transparent:!0,opacity:.72,side:tn,depthWrite:!1}),glassBlue:new Rt({color:12572911,emissive:10274026,emissiveIntensity:.9,roughness:.2}),lamp:new Rt({color:16777215,emissive:16774108,emissiveIntensity:2.2})}}function X(i,t,e,n,s=0,r=0,o=0,{base:a=!0,cast:c=!0,receive:l=!0}={}){const h=new Y(new Le(i,t,e),n);return h.position.set(s,a?r+t/2:r,o),h.castShadow=c,h.receiveShadow=l,h}function xe(i,t,e,n,s=0,r=0,o=0,a=20,{base:c=!0,cast:l=!0}={}){const h=new Y(new qe(i,t,e,a),n);return h.position.set(s,c?r+e/2:r,o),h.castShadow=l,h.receiveShadow=!0,h}function $r(i,t,e=.3){const n=new zt,s=.02;return n.add(X(e,i,s*1.4,t,0,0,-e/2+s/2)),n.add(X(e,i,s*1.4,t,0,0,e/2-s/2)),n.add(X(s,i,e,t)),n}function qn(i,t,e=.3,n=.16){const s=new zt,r=.018;return s.add(X(i,r,n,t,0,e/2-r/2,0,{base:!1})),s.add(X(i,r,n,t,0,-e/2+r/2,0,{base:!1})),s.add(X(i,e,r,t,0,0,0,{base:!1})),s}function Va(i){const t=new zt,e=1.2,n=.8;for(let s=0;s<7;s++)t.add(X(e,.022,.1,i.wood,0,.122,-n/2+.05+s*((n-.1)/6)));for(const s of[-n/2+.05,0,n/2-.05])t.add(X(e,.1,.1,i.wood,0,0,s));for(const s of[-e/2+.05,e/2-.05])t.add(X(.1,.022,n,i.wood,s,.1,0));return t}function hn(i,t,e,n=40){const s=new Vh(i),r=new Y(new hl(s,n,t,8,!1),e);return r.castShadow=!0,r}function Nn(i){const t=new zt,e=new zt,n=new zt,s=()=>{const d=new Y(new Bs(.075,.72,4,10),i.navy);return d.position.y=-.43,d.castShadow=!0,d};e.add(s()),n.add(s()),e.position.set(-.1,.92,0),n.position.set(.1,.92,0);const r=new Y(new Bs(.19,.45,4,12),i.navy);r.position.y=1.25,r.castShadow=!0;const o=new Y(new qe(.205,.2,.42,14),i.hivis);o.position.y=1.27;const a=new Y(new Be(.11,16,12),i.skin);a.position.y=1.68;const c=new Y(new Be(.125,16,10,0,Math.PI*2,0,Math.PI/2),i.white);c.position.y=1.71;const l=new Y(new Bs(.06,.5,4,8),i.navy);l.position.set(-.26,1.2,0);const h=l.clone();return h.position.x=.26,t.add(e,n,r,o,a,c,l,h),t.userData.legs=[e,n],t.userData.arms=[l,h],t}const rs=""+new URL("logo-white-D3oA5qhY.png",import.meta.url).href,Te=Math.PI,Sv=new fe({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),bv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,An=(i,t,e)=>i+(t-i)*e;function Tv(i){const t=lo(),e=new zt;e.name="factory";const n=[],s=[],r={},o=[],a=(U,V)=>i.tween(U,st=>{V(bv(st)),i.shadowsDirty()}),c=(U,V=!1)=>(e.add(U),V&&s.push(U),U);function l(U,V,st,Ct,Vt,qt){const kt=[];for(const me of[].concat(st))me.traverse(ye=>{ye.isMesh&&ye.material.emissive&&(ye.material=ye.material.clone(),kt.push({m:ye.material,e:ye.material.emissive.clone(),i:ye.material.emissiveIntensity}))});const ce=new Y(new Le(...Ct),Sv);ce.position.set(...Vt),e.add(ce);const ae={id:U,kind:V,group:st,hit:ce,anchor:new S(...qt),done:!1,setHighlight(me){for(const{m:ye,e:de,i:Xt}of kt)me?(ye.emissive.set(16739072),ye.emissiveIntensity=.55):(ye.emissive.copy(de),ye.emissiveIntensity=Xt)},fix:async()=>{}};return ce.userData.interactable=ae,r[U]=ae,ae}const h={w:32,d:24,h:8},d=new Rt({map:td([8,6]),roughness:.82,metalness:.05}),f=new Y(new se(h.w,h.d),d);f.rotation.x=-Te/2,f.receiveShadow=!0,c(f),n.push(f);const u=new Rt({map:Yr("#c4ccd4",[16,1]),roughness:.6,metalness:.3}),p=new Rt({map:Yr("#c4ccd4",[12,1]),roughness:.6,metalness:.3}),_=(U,V,st,Ct,Vt)=>{const qt=new Y(new se(U,h.h),Vt);qt.position.set(V,h.h/2,st),qt.rotation.y=Ct,qt.receiveShadow=!0,c(qt,!0);const kt=new Y(new se(U,1.2),t.navy);return kt.position.set(V,.6,st),kt.rotation.y=Ct,kt.translateZ(.02),c(kt),qt};_(h.w,0,-24/2,0,u),_(h.w,0,h.d/2,Te,u),_(h.d,-32/2,0,Te/2,p),_(h.d,h.w/2,0,-Te/2,p);for(const U of[-1,1])for(let V=-9;V<=9;V+=4.5){const st=new Y(new se(3.2,1.3),t.glassBlue);st.position.set(U*(h.w/2-.03),6.3,V),st.rotation.y=-U*Te/2,c(st)}const g=new Y(new se(h.w,h.d),new Rt({color:4080973,roughness:.9}));g.rotation.x=Te/2,g.position.y=h.h,c(g);for(let U=-9;U<=9;U+=6){const V=qn(h.w,t.columnBlue,.45,.2);V.position.set(0,7.5,U),c(V)}for(let U=-12;U<=12;U+=4){const V=X(.12,.18,h.d,t.darkSteel,U,7.75,0,{base:!1,cast:!1});c(V)}for(const U of[-12.5,12.5]){for(const st of[-9,-3,3,9]){const Ct=$r(7.5,t.columnBlue,.34);Ct.position.set(U,0,st),c(Ct,!0)}const V=qn(h.d-1,t.yellow,.5,.25);V.rotation.y=Te/2,V.position.set(U,6.3,0),c(V)}const m=X(25.4,.7,.5,t.yellow,0,6.6,-6.5);c(m),c(X(25.4,.7,.5,t.yellow,0,6.6,-5.6));const b=X(.9,.6,1.3,t.darkSteel,4,6.2,-6.05);c(b),c(xe(.012,.012,3.2,t.darkSteel,4,3,-6.05,6)),c(X(.25,.35,.12,t.yellow,4,2.7,-6.05));for(const U of[-8,0,8])for(const V of[-8,-2,4,10]){c(xe(.32,.4,.3,t.darkSteel,U,7,V,16,{cast:!1}));const st=new Y(new $n(.34,20),t.lamp);st.rotation.x=Te/2,st.position.set(U,6.99,V),c(st)}const x=new Y(new se(8.4,2.2),t.navy);x.position.set(0,4.8,-24/2+.05),c(x);const v=new Y(new se(6.6,6.6*381/1867),new fe({map:nd(rs),transparent:!0}));v.position.set(0,4.8,-24/2+.07),c(v);const N=new Rt({color:15906565,roughness:.6}),C=(U,V,st,Ct)=>{const Vt=new Y(new se(U,V),N);Vt.rotation.x=-Te/2,Vt.position.set(st,.004,Ct),Vt.receiveShadow=!0,c(Vt)};C(.1,22,2.6,0),C(.1,22,4.8,0);for(let U=-10;U<=10;U+=2.5){const V=new Y(new $n(.18,3),N);V.rotation.set(-Te/2,0,Te/2),V.position.set(3.7,.005,U),c(V)}C(4.4,.08,0,-.95);function P(U,V,st){const Ct=new zt,Vt=[],qt=V/U*1.15;for(let ae=0;ae<U;ae++){const me=new Y(new se(qt,1.9),t.curtain);me.position.y=1.1,Ct.add(me),Vt.push(me)}const kt=ae=>-V/2+V/U*(ae+.5),ce=(ae,me=-V/2)=>{Vt.forEach((ye,de)=>{const Xt=An(kt(de),me+.08+de*.055,ae),Je=An(0,de%2?.55:-.55,ae);st?(ye.position.x=Xt,ye.rotation.y=Je):(ye.position.z=Xt,ye.rotation.y=Te/2+Je)})};return ce(0),{group:Ct,strips:Vt,setOpen:ce}}function E(U,V,{label:st,frontFull:Ct=!0,rightCurtain:Vt=!1}){const qt=new zt;qt.position.set(U,0,V);const kt=4,ce=3.5,ae=2.1;for(const[Je,Ae]of[[-2,-1.75],[2,-1.75],[-2,1.75],[2,1.75]])qt.add(X(.06,ae+.1,.06,t.yellow,Je,0,Ae));qt.add(X(kt,.05,.05,t.yellow,0,ae,-1.75),X(kt,.05,.05,t.yellow,0,ae,1.75)),qt.add(X(.05,.05,ce,t.yellow,-2,ae,0),X(.05,.05,ce,t.yellow,2,ae,0));const me=X(kt-.06,2,.04,t.panelGrey,0,.02,-1.72),ye=X(.04,2,ce-.06,t.panelGrey,-1.97,.02,0);qt.add(me,ye),s.push(me,ye);let de=null;Vt||(de=X(.04,2,ce-.06,t.panelGrey,1.97,.02,0),qt.add(de),s.push(de));const Xt=P(Ct?12:6,Ct?kt:kt/2,!0);if(Xt.group.position.set(Ct?0:-kt/4,0,1.75),qt.add(Xt.group),st){const Je=new Y(new se(1,.36),new fe({map:Ne({lines:[st],bg:"#002550",fg:"#ffffff",w:512,h:184})}));Je.position.set(0,ae+.3,1.785),qt.add(Je),qt.add(X(1.04,.4,.02,t.darkSteel,0,ae+.1,1.76))}return c(qt),qt}E(-5,-3.25,{label:"Bay 1"}),E(8,-3.25,{label:"Bay 3"}),E(0,-3.25,{label:"Bay 2",frontFull:!1,rightCurtain:!0});const y=Nn(t);y.position.set(8,0,-3.8),y.rotation.y=Te,c(y),c(X(1.6,.85,.8,t.darkSteel,8,0,-4.3));const w=new jn(13623551,0,7,2);w.position.set(8,1.05,-4),c(w);const R=new Y(new Be(.03,8,8),new fe({color:15397631}));R.position.copy(w.position),c(R);let k=0,D=!0;o.push(U=>{k-=U,k<=0&&(D=!D,k=D?2.5+Math.random()*3:1.5+Math.random()*2);const V=D?4+Math.random()*5:0;w.intensity=V,R.visible=D});const F=new Y(new se(.7,.35),new fe({map:Ne({header:"Warning",lines:["Welding in progress"],headerBg:"#f2b705",w:512,h:256})}));F.position.set(10.08,1.6,-2.2),F.rotation.y=Te/2,c(F);const q=new Y(new se(.62,.31),new fe({map:Ne({header:"Mandatory",lines:["Eye protection","in this area"],w:512,h:256})}));q.position.set(-1,1.65,-1.47),c(q),c(X(.66,.35,.015,t.darkSteel,-1,1.475,-1.485,{cast:!1}));const H=-.3,tt=-3.8,z=.82,ct=X(1.8,.03,.9,t.darkSteel,H,z,tt);c(ct,!0);for(const[U,V]of[[-.85,-.4],[.85,-.4],[-.85,.4],[.85,.4]])c(X(.05,z,.05,t.steel,H+U,0,tt+V));c(X(1.7,.05,.03,t.steel,H,.25,tt-.4)),c(X(.42,.012,.26,t.galv,0,z+.03,tt-.05)),c(X(.42,.14,.012,t.galv,0,z+.042,tt-.05)),c(X(.05,.05,.08,t.copper,.25,z+.03,tt-.05));const xt=1.15,gt=-4.55,Ft=new zt;Ft.add(X(.45,.72,.58,t.machine,0,.08,0)),Ft.add(X(.36,.34,.5,t.machine,0,.8,0)),Ft.add(X(.37,.05,.51,t.orange,0,.8,0));for(const[U,V]of[[-.18,-.24],[.18,-.24],[-.18,.24],[.18,.24]])Ft.add(xe(.04,.04,.03,t.rubber,U,.04,V,10,{base:!1}));const Kt=new Y(new se(.16,.08),new Rt({color:731666,emissive:3342186,emissiveIntensity:1.4}));Kt.position.set(0,.62,.292),Ft.add(Kt),Ft.add(xe(.025,.025,.04,t.black,-.1,.3,.3,10,{base:!1})),Ft.children.at(-1).rotation.x=Te/2,Ft.position.set(xt,0,gt),c(Ft,!0),c(xe(.05,.05,2.6,t.galv,-.3,0,-5.08,12)),c(xe(.11,.11,4.9,t.galv,-.3,2.6,-5.08,16));const et=new Y(new Be(.035,12,10),new Rt({color:4194304,emissive:16722458,emissiveIntensity:2}));et.position.set(-.62,1.55,-4.96),c(et),c(X(.18,.22,.08,t.machine,-.62,1.35,-4.97));const pt=new zt;pt.position.set(-.3,2.45,-4.98);const mt=1,vt=1.45,Pt=new zt;pt.add(Pt),Pt.add(new Y(new Be(.1,14,10),t.darkSteel)),Pt.add(xe(.075,.075,mt,t.galv,0,0,0,14));const jt=new zt;jt.position.y=mt,Pt.add(jt),jt.add(new Y(new Be(.09,14,10),t.darkSteel)),jt.add(xe(.068,.068,vt,t.galv,0,0,0,14));const $t=t.yellow.clone();$t.side=tn;const Qt=new Y(new qe(.25,.07,.32,24,1,!0),$t);Qt.position.y=vt+.16,Qt.castShadow=!0,jt.add(Qt);const rt=[.12,.5],ut=[1,1.95];Pt.rotation.x=rt[0],jt.rotation.x=rt[1],c(pt);const L=l("VEN-01","hazard",pt,[.9,2.8,1.5],[-.3,3.7,-4.4],[-.3,5.3,-3.9]);L.label="VEN-01",L.fix=()=>(et.material.emissive.set(2883434),et.material.color.set(13056),a(1.8,U=>{Pt.rotation.x=An(rt[0],ut[0],U),jt.rotation.x=An(rt[1],ut[1],U)}));const Dt=P(11,3.5,!1);Dt.group.position.set(2,0,-3.25),Dt.setOpen(1,-1.75),c(Dt.group);const dt=l("RAD-01","hazard",Dt.group,[.35,2,1.2],[2,1.1,-4.45],[2,2.5,-4.4]);dt.fix=()=>a(1.6,U=>Dt.setOpen(1-U,-1.75));const at=new zt;at.add(xe(.115,.115,1.25,t.cylinder,0,0,0,24));const _t=new Y(new Be(.115,24,12,0,Te*2,0,Te/2),t.cylinder);_t.position.y=1.25,_t.castShadow=!0,at.add(_t);const Yt=new Y(new qe(.117,.117,.22,24,1,!0),new Rt({map:vn(512,96,(U,V,st)=>{U.fillStyle="#ffffff",U.fillRect(0,0,V,st),U.fillStyle="#002550",U.font="900 44px Gilroy, Arial, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText("SHIELDING GAS",V/2,st/2+2)}),roughness:.6}));Yt.position.y=.85,at.add(Yt),at.add(xe(.025,.03,.12,t.copper,0,1.33,0,12));const It=X(.07,.08,.07,t.copper,.06,1.38,0);at.add(It);for(const U of[-.04,.04]){const V=xe(.035,.035,.025,t.white,.1,1.46,U,16,{base:!1});V.rotation.z=Te/2,at.add(V)}const A={p:new S(1.45,0,-3),rz:.07},M={p:new S(1.72,0,-4.66)};at.position.copy(A.p),at.rotation.z=A.rz,c(at),c(X(.3,.06,.08,t.darkSteel,1.72,.9,-4.92)),c(X(.3,.06,.08,t.darkSteel,1.72,.5,-4.92));const W=new zt;for(let U=0;U<7;U++){const V=new Y(new Zn(.018,.005,6,10),t.darkSteel);V.position.set(1.72,.88-U*.03,-4.86),V.rotation.y=U%2?Te/2:0,W.add(V)}c(W);const J=new zt;for(const U of[.92,.52]){const V=new Y(new Zn(.13,.009,6,32),t.darkSteel);V.rotation.x=Te/2,V.position.set(M.p.x,U,M.p.z),J.add(V)}J.visible=!1,c(J);let ot=null;const it=()=>{ot&&(e.remove(ot),ot.geometry.dispose()),at.updateMatrixWorld(!0);const U=new S(.1,1.38,0).applyMatrix4(at.matrixWorld),V=new S(xt+.18,.95,gt+.1),st=U.clone().lerp(V,.5);st.y=Math.min(U.y,V.y)-.35,ot=hn([U,st,V],.008,t.black,24),e.add(ot)};it();const Et=l("GAS-01","hazard",at,[.42,1.6,.42],[A.p.x,.8,A.p.z],[A.p.x,1.9,A.p.z]);Et.fix=async()=>{await a(1.4,U=>{at.position.lerpVectors(A.p,M.p,U),at.position.y=Math.sin(U*Te)*.03,at.rotation.z=An(A.rz,0,U),it()}),W.visible=!1,J.visible=!0,i.shadowsDirty()};const lt=new zt,Ut=xe(.024,.02,.17,t.black,0,0,0,12,{base:!1});Ut.rotation.z=Te/2,lt.add(Ut);const Jt=X(.07,.03,.035,t.copper,.11,-.012,0,{base:!1});lt.add(Jt);const ft=xe(.0035,.0035,.3,t.steel,.16,-.012,.13,6,{base:!1});ft.rotation.x=Te/2,lt.add(ft);const At={p:new S(.4,z+.05,-3.55),r:new wn(0,.4,0)},Gt={p:new S(-1.86,1.25,-3.05),r:new wn(0,0,-Te/2)};lt.position.copy(At.p),lt.rotation.copy(At.r),c(lt),c(X(.05,.12,.05,t.black,-1.92,1.32,-3.05)),c(X(.09,.025,.04,t.black,-1.89,1.27,-3.05));let Zt=null;const Nt=()=>{Zt&&(e.remove(Zt),Zt.geometry.dispose()),lt.updateMatrixWorld(!0);const U=new S(-.085,0,0).applyMatrix4(lt.matrixWorld),V=new S(xt-.1,.3,gt+.3),st=[U,new S(U.x-.05,z+.05,U.z+.15),new S((U.x+V.x)/2,.03,-3.2),new S(V.x-.1,.03,V.z+.3),V];lt.position.x<-1&&st.splice(1,1,new S(U.x+.1,.6,U.z+.2)),Zt=hn(st,.012,t.rubber,48),e.add(Zt)};Nt();const te=l("ELE-02","hazard",lt,[.6,.25,.45],[At.p.x,At.p.y,At.p.z],[At.p.x,1.35,At.p.z]);te.fix=async()=>{ft.visible=!1;const U=new Jn().setFromEuler(At.r),V=new Jn().setFromEuler(Gt.r);await a(1.4,st=>{lt.position.lerpVectors(At.p,Gt.p,st),lt.position.y+=Math.sin(st*Te)*.25,lt.quaternion.slerpQuaternions(U,V,st),Nt()}),Kt.material.emissive.set(0),Kt.material.color.set(1118481)};const Ht=new zt,ne=new Rt({map:vn(256,128,(U,V,st)=>{U.fillStyle="#c21f1f",U.fillRect(0,0,V,st),U.fillStyle="#ffffff",U.fillRect(0,st*.3,V,st*.4),U.fillStyle="#c21f1f",U.font="900 30px Gilroy, Arial, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText("DEGREASER",V/4,st/2+1),U.fillText("DEGREASER",3*V/4,st/2+1)}),roughness:.4,metalness:.5}),O=new Y(new qe(.065,.065,.2,20),ne);O.position.y=.1,O.castShadow=!0,Ht.add(O);const Tt=xe(.03,.03,.02,t.darkSteel,.11,.01,.05,12,{base:!1});Tt.rotation.x=Te/2,Ht.add(Tt),Ht.position.set(-.95,z+.015,-3.55),c(Ht);const Q=l("FAC-05","hazard",Ht,[.36,.32,.36],[-.92,z+.13,-3.52],[-.95,1.4,-3.55]);Q.fix=async()=>{await a(.5,V=>{Tt.position.set(An(.11,0,V),An(.01,.21,V),An(.05,0,V)),Tt.rotation.x=An(Te/2,0,V)});const U=Ht.position.clone();await a(1,V=>{Ht.position.set(U.x,U.y+V*.5,U.z+V*.8),Ht.scale.setScalar(1-V)}),Ht.visible=!1};const nt=new zt,wt=.5,Mt=.32,Wt=.4;nt.add(X(wt,.01,Wt,t.cardboard,0,0,0)),nt.add(X(wt,Mt,.01,t.cardboard,0,0,-Wt/2),X(wt,Mt,.01,t.cardboard,0,0,Wt/2)),nt.add(X(.01,Mt,Wt,t.cardboard,-wt/2,0,0),X(.01,Mt,Wt,t.cardboard,wt/2,0,0));const pe=X(wt,.01,.18,t.cardboard,0,Mt,Wt/2+.07,{base:!1});pe.rotation.x=.5,nt.add(pe);for(let U=0;U<6;U++){const V=new Y(new cl(.09,0),U%2?t.rag:t.ragBlue);V.position.set(-.15+U%3*.15,Mt-.02+(U>2?.04:0),-.08+(U>2?.12:0)),V.scale.set(1.2,.6,1),V.rotation.set(U,U*2,U*.5),V.castShadow=!0,nt.add(V)}const oe=new S(-.8,0,-3.6);nt.position.copy(oe),c(nt);const $=new S(1.4,0,-.85);c(xe(.24,.22,.7,t.red,$.x,0,$.z,20));const St=new zt;St.add(xe(.25,.25,.04,t.darkSteel,0,0,0,20)),St.position.set($.x-.25,.7,$.z),St.children[0].position.x=.25,St.rotation.z=1.2,c(St);const ie=new Y(new se(.34,.17),new fe({map:Ne({lines:["Oily waste"],bg:"#ffffff",w:256,h:128})}));ie.position.set($.x,.45,$.z+.235),c(ie);const _e=l("AREA-01","hazard",nt,[.7,.55,.6],[oe.x,.25,oe.z],[oe.x,1.15,oe.z+.1]);_e.fix=async()=>{const U=nt.position.clone(),V=new S($.x,.75,$.z);await a(1.6,st=>{nt.position.lerpVectors(U,V,st),nt.position.y+=Math.sin(st*Te)*.9,nt.scale.setScalar(An(1,.35,st))}),nt.visible=!1,await a(.4,st=>{St.rotation.z=An(1.2,0,st)})};const Me=new zt;Me.add(X(.08,1.3,.08,t.darkSteel,0,0,-.1)),Me.add(xe(.095,.095,.5,t.red,0,.62,0,20)),Me.add(xe(.03,.03,.1,t.black,0,1.12,0,10)),Me.add(X(.12,.02,.03,t.black,.04,1.22,0));const Pe=hn([new S(.03,1.18,.02),new S(.12,1,.08),new S(.1,.75,.1)],.01,t.black,12);Me.add(Pe);const bt=new Y(new se(.4,.2),new fe({map:Ne({lines:["Fire","extinguisher"],bg:"#c21f1f",fg:"#ffffff",w:256,h:128})}));bt.position.set(0,1.55,-.055),Me.add(bt),Me.position.set(-2.5,0,-1.3),c(Me);const re=new zt;for(let U=0;U<3;U++){const V=Va(t);V.position.y=U*.145,V.rotation.y=(U-1)*.04,re.add(V)}re.add(X(.5,.4,.4,t.cardboard,-.25,.435,.05),X(.4,.3,.35,t.cardboard,.3,.435,-.05));const be=new S(-2.5,0,-.62),ge=new S(-9.5,0,1.5);re.position.copy(be),c(re);const Fe=l("AREA-02","hazard",[Me,re],[1.3,1.6,1.3],[-2.5,.8,-.95],[-2.5,2,-1]);Fe.fix=()=>a(2,U=>{re.position.lerpVectors(be,ge,U),re.rotation.y=U*.6});const ht=new zt;ht.add(X(.9,1.9,.5,t.lockerGrey,0,0,0)),ht.add(X(.005,1.8,.01,t.darkSteel,0,.05,.255));for(const U of[-.22,.22]){for(let V=0;V<5;V++)ht.add(X(.2,.012,.01,t.darkSteel,U,1.55+V*.04,.256));ht.add(X(.02,.12,.03,t.darkSteel,U>0?.05:-.05,1,.26))}const ee=new Y(new se(.8,.3),new fe({map:Ne({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));ee.position.set(0,2.15,.02),ht.add(ee);const Bt=new zt,ve=new Y(new Be(.15,18,12,0,Te*2,0,Te/1.6),t.navy);ve.scale.set(1,1.15,1.1),ve.rotation.x=Te/2.4,Bt.add(ve);const Re=X(.1,.05,.01,new Rt({color:793100,roughness:.1,metalness:.6}),0,.04,.16,{base:!1});Bt.add(Re),Bt.position.set(-.2,2,0),ht.add(Bt);const un=X(.08,.7,.5,new Rt({color:7031339,roughness:.9}),.5,.9,0);ht.add(un),ht.position.set(-3.4,0,1.8),ht.rotation.y=Te/2,c(ht,!0),l("PPE","ppe",ht,[.7,2.2,1.2],[-3.35,1.05,1.8],[-3.4,2.6,1.8]);for(const U of[-12,-9,-6]){const V=$r(3.2,t.navy,.22);V.position.set(U,0,-10.9),c(V);for(let st=.8;st<3.2;st+=.8)c(X(.12,.08,1,t.navy,U,st,-10.4))}for(let U=.88;U<3.2;U+=.8)for(let V=0;V<3;V++){const st=qn(7.5,t.darkSteel,.14,.08);st.position.set(-9,U+.07,-10.1-V*.22),c(st)}for(const[U,V,st]of[[-9.5,4.5,8],[-11.5,7.5,5],[11.5,7,6]]){const Ct=Va(t);Ct.position.set(U,0,V),c(Ct);for(let Vt=0;Vt<st;Vt++)c(X(1.15,.02,.78,t.steel,U,.145+Vt*.022,V))}for(const U of[6.5,10.5])c(X(.08,.7,.08,t.navy,U,0,4.6),X(.08,.7,.08,t.navy,U,0,5.4)),c(X(.1,.08,.9,t.navy,U,.7,5));const T=qn(5.5,t.columnBlue,.6,.3);T.position.set(8.5,1.08,5),c(T),c(X(1.6,.85,.7,t.darkSteel,7.5,0,9.5),X(.2,.25,.2,t.machine,7.2,.85,9.5));const B=Nn(t);B.position.set(3.7,0,0),c(B),o.push((U,V)=>{const st=-3+5*Math.sin(V*.18),Ct=5*.18*Math.cos(V*.18);B.position.z=st,B.rotation.y=Ct>0?0:Te;const Vt=Math.sin(V*6)*.45*Math.min(1,Math.abs(Ct));B.userData.legs[0].rotation.x=Vt,B.userData.legs[1].rotation.x=-Vt,B.userData.arms[0].rotation.x=-Vt*.6,B.userData.arms[1].rotation.x=Vt*.6}),B.traverse(U=>{U.castShadow=!1});const K=new ro(15331576,7038560,1.4);c(K);const j=new oo(16774890,1.8);j.position.set(7,14,8),j.target.position.set(0,0,-3),j.castShadow=!0,j.shadow.mapSize.set(2048,2048),Object.assign(j.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:1,far:40}),j.shadow.bias=-4e-4,j.shadow.normalBias=.02,c(j),c(j.target);for(const[U,V]of[[-6,-6],[6,-6],[-6,4],[6,4]]){const st=new jn(16773596,30,18,1.6);st.position.set(U,6.6,V),c(st)}const G=new dv(16777215,25,8,.9,.5,1.5);return G.position.set(0,4.5,-2.5),G.target.position.set(0,0,-3.6),c(G),c(G.target),{root:e,floors:n,blockers:s,interactables:r,spawn:{position:new S(0,0,3.6),yaw:0},weldSpot:{center:new S(-.45,z+.03,-3.52),standAt:new S(-.45,0,-3.02),approach:[{p:new S(.8,0,-.8)},{p:new S(.6,0,-2.5)}],bench:{y:z+.03,minX:H-.9,maxX:H+.9,minZ:tt-.45,maxZ:tt+.45}},bounds:{minX:-15.4,maxX:15.4,minZ:-11.4,maxZ:11.4},update(U,V){for(const st of o)st(U,V)}}}const Lt=Math.PI,ze=(i,t,e)=>i+(t-i)*e,Ga=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ev=new fe({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function fl(i,t){const e=new zt;e.name=t;const n=[],s=[],r={},o=[],a=(h,d)=>i.tween(h,f=>{d(Ga(f)),i.shadowsDirty()}),c=(h,d=!1)=>(e.add(h),d&&s.push(h),h);function l(h,d,f,u,p,_){const g=[];for(const x of[].concat(f))x.traverse(v=>{v.isMesh&&v.material.emissive&&(v.material=v.material.clone(),g.push({m:v.material,e:v.material.emissive.clone(),i:v.material.emissiveIntensity}))});const m=new Y(new Le(...u),Ev);m.position.set(...p),e.add(m);const b={id:h,kind:d,group:f,hit:m,anchor:new S(..._),done:!1,setHighlight(x){for(const{m:v,e:N,i:C}of g)x?(v.emissive.set(16739072),v.emissiveIntensity=.55):(v.emissive.copy(N),v.emissiveIntensity=C)},fix:async()=>{}};return m.userData.interactable=b,r[h]=b,b}return{root:e,floors:n,blockers:s,interactables:r,updaters:o,tween:a,add:c,makeInteractive:l}}function Av(i=1){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function os(i,t,{repeat:e=[1,1],seed:n=3,count:s=9e3,blotches:r=30,size:o=2}={}){return vn(512,512,(a,c,l)=>{const h=Av(n);a.fillStyle=i,a.fillRect(0,0,c,l);for(let d=0;d<r;d++){const f=h()*c,u=h()*l,p=30+h()*120,_=a.createRadialGradient(f,u,0,f,u,p);_.addColorStop(0,t[Math.floor(h()*t.length)]+"33"),_.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=_,a.fillRect(f-p,u-p,p*2,p*2)}for(let d=0;d<s;d++){a.fillStyle=t[Math.floor(h()*t.length)],a.globalAlpha=.15+h()*.5;const f=1+h()*o;a.fillRect(h()*c,h()*l,f,f)}a.globalAlpha=1},{repeat:e})}function Oc(i,{color:t="#f2f4f6",w:e=512,h:n=256,font:s=900}={}){return vn(e,n,r=>{r.clearRect(0,0,e,n),r.fillStyle=t;let o=Math.floor(n*.6);for(r.font=`${s} ${o}px Gilroy, Arial, sans-serif`;r.measureText(i).width>e*.92&&o>10;)o-=4,r.font=`${s} ${o}px Gilroy, Arial, sans-serif`;r.textAlign="center",r.textBaseline="middle",r.fillText(i,e/2,n/2+4)})}function id(i){const t=new zt,e=new Y(new qe(.09,.09,.48,18),i.red);e.position.y=.24,e.castShadow=!0,t.add(e);const n=new Y(new qe(.03,.03,.08,10),i.black);n.position.y=.52,t.add(n);const s=new Y(new Le(.12,.02,.03),i.black);return s.position.set(.04,.58,0),t.add(s),t}function Cv(i,t,e){const n=new zt,s=vn(256,32,(o,a,c)=>{for(let l=0;l<8;l++)o.fillStyle=l%2?"#c21f1f":"#ffffff",o.beginPath(),o.moveTo(l*32,0),o.lineTo(l*32+32,0),o.lineTo(l*32+16,c),o.lineTo(l*32-16,c),o.fill()},{repeat:[4,1]}),r=new Rt({map:s,side:tn,roughness:.6});for(let o=0;o<i.length;o++){const[a,c]=i[o],l=new Y(new qe(.025,.025,1,8),e.orange);l.position.set(a,t+.5,c),l.castShadow=!0,n.add(l);const h=new Y(new qe(.12,.14,.05,12),e.black);if(h.position.set(a,t+.025,c),n.add(h),o>0){const[d,f]=i[o-1],u=Math.hypot(a-d,c-f),p=new Y(new se(u,.07),r);p.position.set((a+d)/2,t+.9,(c+f)/2),p.rotation.y=-Math.atan2(c-f,a-d),n.add(p)}}return n}function Rv(i){const t=lo(),e=fl(i,"construction"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:c,add:l,makeInteractive:h}=e,d=4,f=new Y(new se(140,140),new Rt({map:os("#7d766b",["#5b554c","#9a9284","#4a463f","#a8a294"],{repeat:[28,28],seed:11}),roughness:.95}));f.rotation.x=-Lt/2,f.receiveShadow=!0,l(f,!0);const u=new Rt({color:4016727,roughness:.06,metalness:.4,transparent:!0,opacity:.85}),p=($,St,ie,_e,Me=.01)=>{const Pe=new Y(new $n(1,28),u);return Pe.rotation.x=-Lt/2,Pe.scale.set(ie,_e,1),Pe.position.set($,Me,St),Pe.receiveShadow=!0,l(Pe),Pe};p(-6,-10,2.2,1.2),p(9,-9,1.4,.9),p(-12,6,2.6,1.5),p(4,12,1.8,1.1);const _=new Rt({color:10134442,roughness:.6,metalness:.6,transparent:!0,opacity:.55,side:tn});for(const[$,St,ie,_e]of[[0,-22,50,0],[0,22,50,0],[-25,0,44,Lt/2],[25,0,44,Lt/2]]){const Me=new Y(new se(ie,2),_);Me.position.set($,1,St),Me.rotation.y=_e,l(Me);const Pe=new Y(new se(ie*.6,.9),t.navy);Pe.position.set($,1.1,St),Pe.rotation.y=_e,Pe.translateZ(.02),l(Pe)}const g=[8885409,10135218,8095894,11055804].map($=>new Rt({color:$,roughness:.9}));for(let $=0;$<22;$++){const St=$/22*Lt*2,ie=46+$%3*9,_e=10+$*37%24;l(X(8+$%4*3,_e,8,g[$%4],Math.cos(St)*ie,0,Math.sin(St)*ie,{cast:!1}))}const m=new Rt({map:Yr("#8f989f",[20,1]),roughness:.55,metalness:.55});m.map.rotation=Lt/2;const b=new Y(new Le(16,.12,12),m);b.position.set(0,d-.06,0),b.receiveShadow=!0,b.castShadow=!0,l(b),s.push(b),p(2.6,-3.4,.9,.6,d+.005),p(-4.5,1.5,.7,.45,d+.005),p(5.8,3.2,.5,.35,d+.005);for(const $ of[-8,0,8])for(const St of[-6,6]){const ie=$r(8.6,t.columnBlue,.36);ie.position.set($,0,St),l(ie,!0)}for(const $ of[d-.3,8.2]){for(const St of[-6,6]){const ie=qn(16.4,t.columnBlue,.45,.2);ie.position.set(0,$,St),l(ie)}for(const St of[-8,0,8]){const ie=qn(12.4,t.columnBlue,.45,.2);ie.rotation.y=Lt/2,ie.position.set(St,$,0),l(ie)}}for(const $ of[-3,0,3]){const St=qn(16,t.columnBlue,.3,.15);St.position.set(0,8.1,$),l(St)}function x($,St,ie,_e){const Me=new zt,Pe=Math.hypot(ie-$,_e-St),bt=Math.max(1,Math.round(Pe/1.5)),re=-Math.atan2(_e-St,ie-$);for(let be=0;be<=bt;be++){const ge=be/bt;Me.add(X(.05,1.05,.05,t.yellow,ze($,ie,ge),0,ze(St,_e,ge)))}for(const[be,ge]of[[1,.04],[.5,.04],[0,.15]]){const Fe=X(Pe,ge,.03,be===0?t.wood:t.yellow,($+ie)/2,be,(St+_e)/2);Fe.rotation.y=re,Me.add(Fe)}return Me.position.y=d,Me}l(x(-8,-6,-2.2,-6),!0),l(x(2.2,-6,8,-6),!0),l(x(-8,6,8,6),!0),l(x(-8,-6,-8,6),!0),l(x(8,-6,8,6),!0);const v=new Y(new se(4.4,.12),new Rt({color:15906565,roughness:.6}));v.rotation.x=-Lt/2,v.position.set(0,d+.004,-5.9),l(v);const N=new zt;for(let $=0;$<14;$++)N.add(X(1,.04,.3,t.galv,0,$*.29,-$*.28));N.add(X(.05,4.2,.05,t.yellow,-.5,0,0),X(.05,4.2,.05,t.yellow,.5,0,0)),N.position.set(-9.2,0,5.2),l(N);for(let $=0;$<6;$++)l(X(2.4,.03,.9,m,5.2,d+$*.032,3.8,{cast:$===5}));for(let $=0;$<9;$++){const St=xe(.012,.012,3.2,t.rubber,-5.6+$%3*.04,d+.08+Math.floor($/3)*.04,4.6,6,{base:!1});St.rotation.z=Lt/2,l(St)}const C=new zt;C.add(X(1.2,.7,.6,t.orange,0,0,0)),C.add(X(1.22,.04,.62,t.darkSteel,0,.7,0)),C.position.set(3.8,d,4.8),l(C,!0);const P=-.6,E=-4.4,y=.85,w=new zt;w.add(X(1.2,.04,.6,t.darkSteel,0,y-.04,0));for(const[$,St]of[[-.55,-.25],[.55,-.25],[-.55,.25],[.55,.25]])w.add(X(.05,y-.04,.05,t.steel,$,0,St));w.position.set(P,d,E),l(w,!0);const R=qn(1.4,t.columnBlue,.3,.15);R.position.set(0,d+1.1,-5.95),l(R),l(X(.32,.32,.02,t.galv,.7,d+.95,-5.95));const k=new zt;k.add(X(.36,.42,.62,t.machine,0,.06,0)),k.add(X(.37,.04,.63,t.orange,0,.48,0)),k.add(X(.06,.12,.2,t.black,0,.52,0));for(const[$,St]of[[-.14,-.26],[.14,-.26],[-.14,.26],[.14,.26]])k.add(xe(.035,.035,.06,t.rubber,$,0,St,10));const D=new S(2.6,d,-3.4),F=new S(3.4,d+.145,-1.8);k.position.copy(D),k.rotation.y=.3,l(k);const q=Va(t);q.position.set(3.4,d,-1.8),l(q);const H=new zt;for(const[$,St]of[[-.7,-.5],[.7,-.5],[-.7,.5],[.7,.5]])H.add(X(.04,1.4,.04,t.galv,$,0,St));const tt=new Y(new se(1.6,1.2),new Rt({color:27881,roughness:.7,side:tn}));tt.rotation.x=-Lt/2+.12,tt.position.y=1.42,H.add(tt),H.position.set(3.4,d,-1.8),l(H);const z=h("CON-03","hazard",k,[.8,.9,1],[D.x,d+.4,D.z],[D.x,d+1.3,D.z]);z.fix=()=>c(1.6,$=>{k.position.lerpVectors(D,F,$),k.position.y+=Math.sin($*Lt)*.25,k.rotation.y=ze(.3,0,$),mt()});const ct=new Rt({color:15909376,roughness:.45,metalness:.3}),xt=xe(.05,.05,9,ct,1.2,d+.32,-5.45,16,{base:!1});xt.rotation.z=Lt/2,l(xt);for(const $ of[-3,0,3,5.5])l(X(.06,.28,.12,t.darkSteel,$,d,-5.45));const gt=new Y(new se(.42,.14),new fe({map:Ne({lines:["GAS"],bg:"#f2c200",fg:"#002550",w:256,h:86})}));gt.position.set(-1.6,d+.32,-5.39),l(gt);const Ft=new zt;Ft.add(X(.08,.06,.05,t.copper,0,-.03,0,{base:!1})),Ft.add(X(.02,.1,.05,t.black,.05,.02,0,{base:!1}));const Kt=new S(-.9,d+.38,-5.45),et=new S(-.05,d+y+.03,-4.62);Ft.position.copy(Kt),Ft.scale.setScalar(1.7),l(Ft);let pt=null;const mt=()=>{pt&&(n.remove(pt),pt.geometry.dispose()),k.updateMatrixWorld(!0);const $=new S(0,.3,-.31).applyMatrix4(k.matrixWorld),St=Ft.position.clone(),ie=new S($.x-.2,d+.03,$.z-.5),_e=new S(($.x+St.x)/2,d+.03,($.z+St.z)/2);pt=hn([$,ie,_e,new S(St.x+.1,Math.max(d+.03,St.y-.3),St.z+.1),St],.012,t.rubber,48),n.add(pt)};mt();const vt=h("CON-04","hazard",[Ft,xt],[.7,.4,.4],[Kt.x,Kt.y,Kt.z],[Kt.x,d+1,Kt.z]);vt.fix=()=>c(1.4,$=>{Ft.position.lerpVectors(Kt,et,$),Ft.position.y+=Math.sin($*Lt)*.3,mt()});const Pt=x(-2.2,-6,2.2,-6),jt=d-1.3;Pt.position.y=jt,Pt.visible=!1,l(Pt);const $t=new zt,Qt=h("CON-01","hazard",[$t],[4.4,1.2,.5],[0,d+.6,-5.85],[0,d+1.6,-5.9]),rt=v.material;Qt.setHighlight=$=>{rt.emissive.set($?16739072:0),rt.emissiveIntensity=$?.8:0},Qt.fix=async()=>{Pt.visible=!0,await c(1.4,$=>{Pt.position.y=ze(jt,d,$)}),r.push(Pt)};const ut=new zt,L=new Rt({map:ed(),roughness:.85});for(let $=0;$<4;$++)for(let St=0;St<5;St++)ut.add(X(2.4,.1,.15,L,0,$*.11,-.4+St*.2));const Dt=new S(.6,0,-7.6),dt=new S(-14,0,-12);ut.position.copy(Dt),l(ut);const at=Nn(t);at.position.set(-6,0,-7.2),l(at);let _t=!0;a.push(($,St)=>{if(!_t)return;const ie=5*Math.sin(St*.22),_e=Math.cos(St*.22);at.position.x=ie,at.rotation.y=_e>0?Lt/2:-Lt/2;const Me=Math.sin(St*6)*.45*Math.min(1,Math.abs(_e)*1.5);at.userData.legs[0].rotation.x=Me,at.userData.legs[1].rotation.x=-Me,at.userData.arms[0].rotation.x=-Me*.6,at.userData.arms[1].rotation.x=Me*.6});const Yt=Cv([[-3,-6.4],[-3,-9.6],[3.2,-9.6],[3.2,-6.4]],0,t);Yt.visible=!1,l(Yt);const It=h("CON-02","hazard",[ut,at],[6.5,2.2,3.4],[0,1,-8],[0,2.6,-7.8]);It.fix=async()=>{_t=!1;const $=at.position.clone(),St=ut.position.clone();at.rotation.y=-Lt/2,await c(2,ie=>{at.position.set(ze($.x,-16,ie),0,ze($.z,-10,ie)),ut.position.lerpVectors(St,dt,ie);const _e=Math.sin(ie*30)*.45;at.userData.legs[0].rotation.x=_e,at.userData.legs[1].rotation.x=-_e}),at.visible=!1,Yt.visible=!0,i.shadowsDirty()};const A=new zt;A.add(X(.05,1.5,.05,t.galv,-.35,0,0),X(.05,1.5,.05,t.galv,.35,0,0));const M=new Rt({map:Ne({header:"Hot work permit",lines:["NOT ISSUED","Fire watch: —"],headerBg:"#c21f1f",w:512,h:384}),roughness:.7}),W=new Y(new Le(.8,.6,.02),[t.white,t.white,t.white,t.white,M,t.white]);W.position.y=1.35,W.castShadow=!0,A.add(W),A.position.set(-2.6,d,-4.2),A.rotation.y=.35,l(A,!0);const J=Nn(t),ot=id(t);ot.position.set(.3,0,.15),J.add(ot),J.position.set(-2,d,-2.6),J.rotation.y=Lt+.4,J.visible=!1,l(J);const it=h("CON-05","hazard",A,[1,1.8,.5],[-2.6,d+.95,-4.2],[-2.6,d+2.25,-4.2]);it.fix=async()=>{M.map=Ne({header:"Hot work permit",lines:["ISSUED","Fire watch: assigned"],headerBg:"#1f9d55",w:512,h:384}),M.needsUpdate=!0,J.visible=!0;const $=J.position.clone();await c(1,St=>{J.position.set($.x,d+(1-St)*.3,$.z)})};const Et=new Rt({color:15906565,roughness:.5,metalness:.3,wireframe:!1}),lt=new zt;for(const[$,St]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])lt.add(X(.12,26,.12,Et,$,0,St,{cast:!1}));for(let $=0;$<26;$+=1.6)lt.add(X(1.7,.08,.08,Et,0,$,-.8,{cast:!1})),lt.add(X(1.7,.08,.08,Et,0,$,.8,{cast:!1})),lt.add(X(.08,.08,1.7,Et,-.8,$,0,{cast:!1})),lt.add(X(.08,.08,1.7,Et,.8,$,0,{cast:!1}));lt.position.set(16,0,-14),l(lt);const Ut=X(34,.9,.9,Et,6,26,-14,{cast:!1});l(Ut),l(X(2.4,2,2.4,t.navy,16,26.9,-14,{cast:!1}));const Jt=5.5,ft=xe(.012,.012,1,t.darkSteel,Jt,0,-7.2,6,{base:!1});l(ft);const At=X(.25,.35,.15,t.yellow,Jt,0,-7.2,{base:!1});l(At);const Gt=new zt;Gt.add(xe(.115,.115,1.25,t.cylinder,0,0,0,20)),Gt.add(xe(.025,.03,.12,t.copper,0,1.28,0,10)),Gt.add(X(.08,.08,.08,t.copper,.06,1.36,0));const Zt=new Rt({color:2976991,roughness:.8}),Nt=hn([new S(0,1.75,0),new S(.13,.95,0),new S(0,.82,.13),new S(-.13,.82,0),new S(0,1.75,0)],.012,Zt,30);Gt.add(Nt);const te=new zt;for(const[$,St]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]])te.add(X(.04,1.5,.04,t.orange,$,0,St));for(const $ of[.02,.75,1.48])te.add(X(.54,.04,.04,t.orange,0,$,-.25),X(.54,.04,.04,t.orange,0,$,.25),X(.04,.04,.54,t.orange,-.25,$,0),X(.04,.04,.54,t.orange,.25,$,0));te.visible=!1;const Ht=new zt;Ht.add(Gt,te);const ne=new S(Jt,d+1.6,-7.3),O=new S(5.6,d,-4.6);Ht.position.copy(ne),l(Ht);let Tt=!0;const Q=()=>{const St=Ht.position.y+(te.visible?1.6:1.9);At.position.set(Ht.position.x,St,Ht.position.z),ft.scale.y=25.5-St,ft.position.set(Ht.position.x,(25.5+St)/2,Ht.position.z)};a.push(($,St)=>{Tt&&(Ht.rotation.z=Math.sin(St*.9)*.04,Ht.rotation.y=St*.15),Q()});const nt=h("CON-06","hazard",Ht,[.8,2.2,.8],[ne.x,ne.y+.8,ne.z],[ne.x,ne.y+2.6,ne.z]);nt.fix=async()=>{Tt=!1,Ht.rotation.set(0,0,0),Nt.visible=!1,te.visible=!0,Gt.position.y=.06,await c(2.2,$=>{Ht.position.set(ze(ne.x,O.x,$),ze(ne.y,O.y,$)+Math.sin($*Lt)*.6,ze(ne.z,O.z,$))}),r.push(te)};const wt=new zt;wt.add(X(1,.9,.6,t.lockerGrey,0,0,0)),wt.add(X(1.02,.05,.62,t.orange,0,.9,0));const Mt=new Y(new se(.7,.26),new fe({map:Ne({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));Mt.position.set(0,.55,.305),wt.add(Mt);const Wt=new Y(new Be(.15,18,12,0,Lt*2,0,Lt/1.6),t.navy);Wt.position.set(-.2,1,0),Wt.scale.set(1,1.1,1.1),wt.add(Wt);const pe=X(.25,.06,.15,new Rt({color:9067059,roughness:.9}),.25,.95,0);wt.add(pe),wt.position.set(-4.6,d,1.6),wt.rotation.y=Lt/2,l(wt,!0),h("PPE","ppe",wt,[.8,1.4,1.2],[-4.6,d+.6,1.6],[-4.6,d+1.8,1.6]),l(new ro(14674162,7169628,1.7));const oe=new oo(15987178,1.6);return oe.position.set(-10,22,12),oe.target.position.set(0,d,-2),oe.castShadow=!0,oe.shadow.mapSize.set(2048,2048),Object.assign(oe.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:60}),oe.shadow.bias=-4e-4,oe.shadow.normalBias=.02,l(oe),l(oe.target),{root:n,floors:s,blockers:r,interactables:o,floorY:d,spawn:{position:new S(0,d,3.4),yaw:0},bounds:{minX:-7.4,maxX:7.4,minZ:-5.4,maxZ:5.4},atmosphere:{background:12175574,fog:[12175574,30,110],envIntensity:.5,exposure:1},weldSpot:{center:new S(P+.05,d+y,E+.12),standAt:new S(P+.05,d,E+.62),approach:[{p:new S(-.4,d,-2.4)}],bench:{y:d+y,minX:P-.6,maxX:P+.6,minZ:E-.3,maxZ:E+.3}},update($,St){for(const ie of a)ie($,St)}}}function Pv(i){const t=lo(),e=fl(i,"shipyard"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:c,add:l,makeInteractive:h}=e,d=-1.35,f={w:40,d:30,h:14},u=new Y(new se(f.w,f.d),new Rt({map:td([10,8]),roughness:.85}));u.rotation.x=-Lt/2,u.position.y=d-.3,u.receiveShadow=!0,l(u,!0);const p=new Rt({map:Yr("#b9c2ca",[20,1]),roughness:.6,metalness:.3});for(const[ht,ee,Bt,ve]of[[f.w,0,-30/2,0],[f.w,0,f.d/2,Lt],[f.d,-40/2,0,Lt/2],[f.d,f.w/2,0,-Lt/2]]){const Re=new Y(new se(ht,f.h),p);Re.position.set(ee,d-.3+f.h/2,Bt),Re.rotation.y=ve,l(Re,!0)}const _=new Y(new se(f.w,f.d),new Rt({color:4080973,roughness:.9}));_.rotation.x=Lt/2,_.position.y=d-.3+f.h,l(_);for(const ht of[-18,-9,0,9,18])for(const ee of[-14,14]){const Bt=$r(f.h,t.columnBlue,.5);Bt.position.set(ht,d-.3,ee),l(Bt,!0)}for(const ht of[-11,-10])l(X(f.w-2,.9,.5,t.yellow,0,10,ht,{cast:!1}));l(X(1.6,1,2.2,t.darkSteel,-5,9.4,-10.5,{cast:!1}));for(const ht of[-12,0,12])for(const ee of[-8,2,10]){const Bt=new Y(new $n(.45,20),t.lamp);Bt.rotation.x=Lt/2,Bt.position.set(ht,12.5,ee),l(Bt)}const g=new Y(new se(9,2.3),t.navy);g.position.set(0,8.5,f.d/2-.05),g.rotation.y=Lt,l(g);const m=new Y(new se(7,7*381/1867),new fe({map:nd(rs),transparent:!0}));m.position.set(0,8.5,f.d/2-.07),m.rotation.y=Lt,l(m);const b=new Rt({map:os("#7b4a3a",["#5e3529","#8f5b48","#6b4436","#4a2a20"],{repeat:[6,2],seed:5}),roughness:.7,metalness:.3}),x=new $h;x.moveTo(-7,6),x.lineTo(7,6),x.lineTo(7,2.5),x.quadraticCurveTo(7,0,4,0),x.lineTo(-4,0),x.quadraticCurveTo(-7,0,-7,2.5),x.closePath();const v=new Y(new ll(x,{depth:4.5,bevelEnabled:!1}),b);v.position.set(0,d+.6,-14.6),v.castShadow=!0,v.receiveShadow=!0,l(v,!0);const N=new Rt({color:9147547,roughness:.6,metalness:.3}),C=X(6,2.6,3.5,N,-2,d+6.6,-12.4);l(C);for(let ht=-4;ht<=4;ht+=2)l(X(1.2,.9,1.2,t.wood,ht,d-.3,-12.4));const P=new Rt({map:os("#8a9298",["#6d757b","#a0a8ad","#7a6a5e","#5b6369"],{repeat:[6,5],seed:9}),roughness:.55,metalness:.55}),E={minX:-9.5,maxX:9.5,minZ:-8,maxZ:6},y={minX:-3.2,maxX:4.2,minZ:-5,maxZ:-.8},w=(ht,ee,Bt,ve)=>{const Re=new Y(new Le(ee-ht,.04,ve-Bt),P);return Re.position.set((ht+ee)/2,-.02,(Bt+ve)/2),Re.receiveShadow=!0,Re.castShadow=!0,l(Re),s.push(Re),Re};w(E.minX,E.maxX,y.maxZ,E.maxZ),w(E.minX,E.maxX,E.minZ,y.minZ),w(E.minX,y.minX,y.minZ,y.maxZ),w(y.maxX,E.maxX,y.minZ,y.maxZ);const R=new Rt({color:7305344,roughness:.6,metalness:.5});l(X(E.maxX-E.minX,-d+.3,.04,R,0,d-.3,E.maxZ),!0),l(X(E.maxX-E.minX,-d+.3,.04,R,0,d-.3,E.minZ),!0),l(X(.04,-d+.3,E.maxZ-E.minZ,R,E.minX,d-.3,0),!0),l(X(.04,-d+.3,E.maxZ-E.minZ,R,E.maxX,d-.3,0),!0);for(const[ht,ee,Bt,ve]of[[E.minX,E.minZ,E.maxX,E.minZ],[E.minX,E.maxZ,E.maxX,E.maxZ],[E.minX,E.minZ,E.minX,E.maxZ],[E.maxX,E.minZ,E.maxX,E.maxZ]]){const Re=Math.hypot(Bt-ht,ve-ee),un=-Math.atan2(ve-ee,Bt-ht),T=X(Re,.04,.04,t.yellow,(ht+Bt)/2,1,(ee+ve)/2);T.rotation.y=un,l(T);const B=Math.round(Re/1.8);for(let K=0;K<=B;K++)l(X(.05,1.02,.05,t.yellow,ze(ht,Bt,K/B),0,ze(ee,ve,K/B)))}const k=new Y(new Le(y.maxX-y.minX,.02,y.maxZ-y.minZ),new Rt({color:13624309,roughness:.05,metalness:.1,transparent:!0,opacity:.12,depthWrite:!1}));k.position.set((y.minX+y.maxX)/2,-.01,(y.minZ+y.maxZ)/2),l(k),s.push(k);const D=vn(256,32,(ht,ee,Bt)=>{ht.fillStyle="#f2b705",ht.fillRect(0,0,ee,Bt),ht.fillStyle="#1a1c1f";for(let ve=-1;ve<9;ve++)ht.beginPath(),ht.moveTo(ve*32,Bt),ht.lineTo(ve*32+16,Bt),ht.lineTo(ve*32+32,0),ht.lineTo(ve*32+16,0),ht.fill()},{repeat:[8,1]}),F=new Rt({map:D,roughness:.6});for(const[ht,ee,Bt,ve]of[[(y.minX+y.maxX)/2,y.minZ,y.maxX-y.minX+.2,.1],[(y.minX+y.maxX)/2,y.maxZ,y.maxX-y.minX+.2,.1],[y.minX,(y.minZ+y.maxZ)/2,.1,y.maxZ-y.minZ],[y.maxX,(y.minZ+y.maxZ)/2,.1,y.maxZ-y.minZ]]){const Re=X(Bt,.012,ve,F,ht,0,ee,{cast:!1});l(Re)}const q=new Y(new se(1.6,.4),new fe({map:Ne({lines:["Training view: tank 4P below"],bg:"#002550",fg:"#ffffff",w:768,h:192}),transparent:!0}));q.rotation.x=-Lt/2,q.position.set(-1.6,.008,-.55),l(q);const H=new Rt({color:12107688,roughness:.7,metalness:.3}),tt=new Y(new Le(y.maxX-y.minX+1,.04,6.2),H);tt.position.set((y.minX+y.maxX)/2,d-.02,-2.2),tt.receiveShadow=!0,l(tt);const z=(ht,ee,Bt,ve)=>{const Re=X(Bt,-d,ve,H,ht,d,ee);return Re.receiveShadow=!0,l(Re),Re};z((y.minX+y.maxX)/2,-5.3,y.maxX-y.minX+1,.04),z((y.minX+y.maxX)/2,.85,y.maxX-y.minX+1,.04),z(y.minX-.4,-2.2,.04,6.2),z(y.maxX+.4,-2.2,.04,6.2);const ct=1;z(ct,-2.2,.04,6.2);for(let ht=-4.6;ht<.6;ht+=.7)l(X(y.maxX-y.minX+1,.12,.012,H,(y.minX+y.maxX)/2,d+.02,ht));const xt=new Y(new se(.05,1),new fe({color:16777215}));xt.position.set(ct-.025,d+.65,-3),xt.rotation.y=-Lt/2,l(xt);const gt=new jn(16773590,6,7,1.6);gt.position.set(-1,-.25,-2.6),l(gt),l(xe(.08,.06,.18,t.yellow,-1,-.45,-2.6,12)),l(hn([new S(-1,-.05,.2),new S(-1,d+.05,0),new S(.2,d+.03,-2.4),new S(.7,d+.03,-2.9)],.015,t.rubber,40));const Ft=new Y(new se(1.1,.55),new fe({map:Oc("TANK 4P"),transparent:!0}));Ft.rotation.x=-Lt/2,Ft.position.set(-1,.006,1.2),l(Ft);const Kt=new Rt({color:10134442,roughness:.4,metalness:.8}),et=new Rt({color:15258474,roughness:.95});for(const ht of[-4.2,-3,-1.8]){l(X(2.6,.04,.4,Kt,2.6,d+.7,ht));for(let ee=0;ee<5;ee++){const Bt=xe(.018,.018,2.6,[t.black,t.red,t.navy][ee%3],2.6,d+.76,ht-.15+ee*.07,8,{base:!1});Bt.rotation.z=Lt/2,l(Bt)}}for(let ht=-4.8;ht<.4;ht+=1)l(X(.08,.9,.95,et,ct+.07,d+.15,ht+.48));const pt=new jn(14673663,2.5,5,1.6);pt.position.set(2.8,-.3,-2.6),l(pt);const mt=new S(-1,0,.2),vt=new Y(new $n(1,28),new fe({color:724240}));vt.rotation.x=-Lt/2,vt.scale.set(.42,.28,1),vt.position.set(mt.x,.004,mt.z),l(vt);const Pt=new Y(new Zn(1,.08,8,28),t.darkSteel);Pt.rotation.x=Lt/2,Pt.scale.set(.44,.3,.4),Pt.position.set(mt.x,.03,mt.z),l(Pt);const jt=X(.9,.03,.62,t.darkSteel,mt.x-1,0,mt.z+.1);l(jt);const $t=new zt;$t.add(X(.05,1.4,.05,t.galv,-.33,0,0),X(.05,1.4,.05,t.galv,.33,0,0));const Qt=new Rt({map:Ne({header:"Confined space entry",lines:["Permit: —","Attendant: —"],headerBg:"#c21f1f",w:512,h:384}),roughness:.7}),rt=new Y(new Le(.76,.57,.02),[t.white,t.white,t.white,t.white,Qt,t.white]);rt.position.y=1.25,$t.add(rt),$t.position.set(-2.4,0,1),$t.rotation.y=.5,l($t,!0);const ut=Nn(t),L=X(.05,.12,.03,t.black,.22,1.25,.12);ut.add(L),ut.position.set(-1.7,0,.95),ut.rotation.y=Lt+.6,ut.visible=!1,l(ut);const Dt=h("SHP-01","hazard",[$t,Pt],[2.2,1.6,1.2],[-1.8,.8,.6],[-2,2.2,.7]);Dt.fix=async()=>{Qt.map=Ne({header:"Confined space entry",lines:["Permit: valid","Attendant: on duty"],headerBg:"#1f9d55",w:512,h:384}),Qt.needsUpdate=!0,ut.visible=!0,await c(.8,ht=>{ut.position.y=(1-ht)*.3})};const dt=new zt;dt.add(X(.04,.95,.04,t.galv,0,0,0));const at=new zt;at.add(X(.14,.22,.06,t.yellow,0,0,0));const _t=new fe({map:Ne({lines:["– – –"],bg:"#1a1c1f",fg:"#9aa3aa",w:256,h:160})}),Yt=new Y(new se(.1,.065),_t);Yt.position.set(0,.16,.031),at.add(Yt),at.position.y=.95,dt.add(at);const It=hn([new S(0,1,.03),new S(.1,.6,.15),new S(.2,.02,.2),new S(.7,.02,-.1)],.006,t.black,24);dt.add(It);const A=new Y(new se(.3,.12),new fe({map:Ne({lines:["NOT TESTED"],bg:"#c21f1f",fg:"#ffffff",w:256,h:102})}));A.position.set(0,.75,.03),dt.add(A),dt.position.set(.3,0,1.1),dt.rotation.y=-.3,l(dt);const M=h("SHP-02","hazard",dt,[.5,1.3,.5],[.3,.65,1.1],[.3,1.7,1.1]);M.fix=async()=>{_t.map=Ne({lines:["OK"],bg:"#0b2a12",fg:"#32ff6a",w:256,h:160}),_t.needsUpdate=!0,A.material.map=Ne({lines:["TESTED"],bg:"#1f9d55",fg:"#ffffff",w:256,h:102}),A.material.needsUpdate=!0,await c(1.2,ht=>{at.rotation.y=Math.sin(ht*Lt*2)*.3})};const W=(ht,ee=t.cylinder)=>{const Bt=new zt;Bt.add(xe(.115,.115,1.25,ee,0,0,0,20));const ve=new Y(new Be(.115,20,10,0,Lt*2,0,Lt/2),ee);ve.position.y=1.25,Bt.add(ve),Bt.add(xe(.025,.03,.12,t.copper,0,1.33,0,10));const Re=new Y(new qe(.117,.117,.2,20,1,!0),new Rt({map:vn(512,96,(un,T,B)=>{un.fillStyle="#ffffff",un.fillRect(0,0,T,B),un.fillStyle="#002550",un.font="900 46px Gilroy, Arial, sans-serif",un.textAlign="center",un.textBaseline="middle",un.fillText(ht,T/2,B/2+2)}),roughness:.6}));return Re.position.y=.85,Bt.add(Re),Bt},J=W("ARGON"),ot=new S(-2.4,d,-3.9),it=new S(-4.6,0,1.9);J.position.copy(ot),J.rotation.z=.05,l(J);const Et=new zt;Et.add(X(.6,.05,.4,t.darkSteel,0,0,0),X(.05,1.1,.05,t.darkSteel,-.28,0,-.18),X(.05,1.1,.05,t.darkSteel,.28,0,-.18),X(.6,.05,.05,t.darkSteel,0,1.05,-.18));const lt=new Y(new Zn(.13,.009,6,32),t.darkSteel);lt.rotation.x=Lt/2,lt.position.set(0,.95,0),lt.visible=!1,Et.add(lt),Et.position.set(it.x,0,it.z),l(Et);const Ut=h("SHP-03","hazard",J,[.5,1.75,.5],[ot.x,d+.85,ot.z],[ot.x,.6,ot.z]);Ut.fix=async()=>{const ht=new S(mt.x,d,mt.z-.1);await c(1,Bt=>{J.position.lerpVectors(ot,ht,Bt),J.rotation.z=ze(.05,0,Bt)}),await c(1,Bt=>{J.position.set(mt.x,ze(d,.1,Bt),mt.z)});const ee=J.position.clone();await c(1.2,Bt=>{J.position.lerpVectors(ee,it,Bt),J.position.y=Math.sin(Bt*Lt)*.15}),lt.visible=!0};const Jt=new zt;Jt.add(xe(.32,.32,.45,t.yellow,0,.2,0,24,{base:!1}).rotateZ(Lt/2)),Jt.add(X(.5,.2,.5,t.darkSteel,0,0,0));const ft=new Y(new $n(.3,24),t.black);ft.position.set(-.23,.42,0),ft.rotation.y=-Lt/2,Jt.add(ft),Jt.position.set(-3.6,0,1.4),Jt.rotation.y=.3,l(Jt,!0);const At=new Rt({color:15906565,roughness:.75,side:tn});let Gt=null;const Zt=ht=>{const ee=new S(ze(mt.x,.55,ht),ze(-.25,d+.75,ht),ze(mt.z,-2.95,ht)),Bt=[new S(-3.3,.42,1.25),new S(-2.3,.18,.7),new S(mt.x-.2,.25,mt.z+.1),new S(mt.x,-.1,mt.z)];return ht>.02&&Bt.push(new S(ze(mt.x,-.3,ht),ze(-.2,d+.6,ht),ze(mt.z,-1.2,ht))),Bt.push(ee),Bt},Nt=ht=>{Gt&&(n.remove(Gt),Gt.geometry.dispose()),Gt=hn(Zt(ht),.13,At,48),n.add(Gt)};Nt(0);const te=h("SHP-04","hazard",Jt,[1.6,.9,1],[-3,.4,1.1],[-3.2,1.4,1.2]),Ht=te.setHighlight;te.setHighlight=ht=>{Ht(ht),At.emissive.set(ht?16739072:0),At.emissiveIntensity=ht?.5:0},te.fix=()=>c(1.8,ht=>Nt(ht));const ne=W("OXYGEN",new Rt({color:15199471,roughness:.4,metalness:.5}));ne.position.set(1.6,0,1.6),l(ne);const O=Nn(t);O.position.set(0,0,.55),O.rotation.y=-Lt/2-.4,O.userData.arms[0].rotation.x=-.9,O.userData.arms[1].rotation.x=-.9,l(O);const Tt=hn([new S(1.6,1.4,1.6),new S(1,.4,1.2),new S(.2,.9,.5),new S(-.5,.5,.3),new S(mt.x+.1,-.2,mt.z-.05)],.012,new Rt({color:3104691,roughness:.6}),40);l(Tt);const Q=new zt,nt=new fe({color:14674175,transparent:!0,opacity:.35,depthWrite:!1});for(let ht=0;ht<6;ht++){const ee=new Y(new Be(.03,8,6),nt);Q.add(ee)}Q.position.set(mt.x+.1,-.25,mt.z-.05),l(Q),a.push((ht,ee)=>{Q.children.forEach((Bt,ve)=>{const Re=(ee*.8+ve/6)%1;Bt.position.set(Math.sin(ve*2)*Re*.2,-Re*.6,Math.cos(ve*3)*Re*.2),Bt.scale.setScalar(.5+Re*2)})});const wt=h("SHP-07","hazard",[O,ne],[1.9,1.9,1.3],[.7,.95,1],[.6,2.2,.9]);wt.fix=async()=>{Tt.visible=!1,Q.visible=!1,O.userData.arms[0].rotation.x=0,O.userData.arms[1].rotation.x=0;const ht=O.position.clone();O.rotation.y=0,await c(1.6,ee=>{O.position.set(ze(ht.x,3.2,ee),0,ze(ht.z,4.4,ee));const Bt=Math.sin(ee*24)*.4;O.userData.legs[0].rotation.x=Bt,O.userData.legs[1].rotation.x=-Bt})};const Mt=Nn(t);Mt.scale.setScalar(.72);const Wt=id(t);Wt.position.set(.32,0,.1),Wt.scale.setScalar(1/.72*.8),Mt.add(Wt),Mt.position.set(2.7,d,-2.4),Mt.rotation.y=-Lt/2,Mt.visible=!1,l(Mt);const pe=h("SHP-05","hazard",[],[2.8,1.8,3.6],[2.6,d+.85,-3],[2.6,.6,-3]);pe.setHighlight=ht=>{et.emissive.set(ht?16739072:0),et.emissiveIntensity=ht?.4:0,Kt.emissive.set(ht?16739072:0),Kt.emissiveIntensity=ht?.4:0},pe.fix=async()=>{Mt.visible=!0,await c(.8,ht=>{Mt.position.y=d+(1-ht)*.2})};const oe=new zt;oe.add(X(.05,1.5,.05,t.galv,-.33,0,0),X(.05,1.5,.05,t.galv,.33,0,0));const $=new Rt({map:Ne({header:"Hot work certificate",lines:["Space: TANK 3P","Gas free: yes"],headerBg:"#006ce9",w:512,h:384}),roughness:.7}),St=new Y(new Le(.76,.57,.02),[t.white,t.white,t.white,t.white,$,t.white]);St.position.y=1.32,oe.add(St),oe.position.set(-4.4,0,-.2),oe.rotation.y=.6,l(oe,!0);const ie=h("SHP-06","hazard",oe,[.9,1.8,.5],[-4.4,.95,-.2],[-4.4,2.3,-.2]);ie.fix=async()=>{await c(.4,ht=>{St.rotation.y=ht*Lt/2}),$.map=Ne({header:"Hot work certificate",lines:["Space: TANK 4P","Gas free: yes · valid today"],headerBg:"#1f9d55",w:512,h:384}),$.needsUpdate=!0,await c(.4,ht=>{St.rotation.y=(1-ht)*Lt/2})};const _e=new zt;_e.add(X(.9,1.9,.5,t.lockerGrey,0,0,0));const Me=new Y(new se(.8,.3),new fe({map:Ne({lines:["PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:192})}));Me.position.set(0,2.15,.02),_e.add(Me);const Pe=new Y(new Be(.15,18,12,0,Lt*2,0,Lt/1.6),t.navy);Pe.position.set(-.2,2,0),_e.add(Pe),_e.position.set(6.4,0,2.6),_e.rotation.y=-Lt/2,l(_e,!0),h("PPE","ppe",_e,[.7,2.2,1.2],[6.45,1.05,2.6],[6.4,2.6,2.6]);const bt=-1.4,re=-3.3,be=d+.32;l(X(.7,be-d,.45,H,bt,d,re),!0);const ge=new Y(new se(.5,.18),new fe({map:Oc("WELD HERE",{color:"#ff6b00"}),transparent:!0}));ge.position.set(bt,d+.005,re+.45),ge.rotation.x=-Lt/2,l(ge),l(new ro(15331576,7038560,1.3));const Fe=new oo(16774890,1.6);Fe.position.set(8,16,10),Fe.target.position.set(0,0,-2),Fe.castShadow=!0,Fe.shadow.mapSize.set(2048,2048),Object.assign(Fe.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:50}),Fe.shadow.bias=-4e-4,Fe.shadow.normalBias=.02,l(Fe),l(Fe.target);for(const[ht,ee]of[[-8,-4],[8,-4],[-8,6],[8,6]]){const Bt=new jn(16773596,40,22,1.6);Bt.position.set(ht,9,ee),l(Bt)}return{root:n,floors:s,blockers:r,interactables:o,floorY:0,spawn:{position:new S(.5,0,4.4),yaw:0},bounds:{minX:-9,maxX:9,minZ:-7.5,maxZ:5.5},weldSpot:{center:new S(bt,be,re+.05),standAt:new S(bt,d,re+.55),eye:.95,approach:[{p:new S(-1,0,.95)},{p:new S(-1,0,.25)},{p:new S(-1,d,.2),eye:1},{p:new S(-1.35,d,-1.9),eye:1}],bench:{y:be,minX:bt-.35,maxX:bt+.35,minZ:re-.22,maxZ:re+.22}},update(ht,ee){for(const Bt of a)Bt(ht,ee)}}}function Lv(i){const t=lo(),e=fl(i,"underwater"),{root:n,floors:s,blockers:r,interactables:o,updaters:a,tween:c,add:l,makeInteractive:h}=e,d=1,f=-6.5,u=new S(.6,0,-6.2),p=-4,_=new Rt({color:1927802,roughness:.15,metalness:.2,transparent:!0,opacity:.42,side:tn,depthWrite:!1}),g=new Y(new se(160,160,1,1),_);g.rotation.x=-Lt/2,g.position.y=0,g.renderOrder=5,l(g);const m=new Y(new se(80,80),new Rt({map:os("#6f6a52",["#5a553f","#857e63","#4a4635","#9a9276"],{repeat:[16,16],seed:21}),roughness:1}));m.rotation.x=-Lt/2,m.position.y=f,m.receiveShadow=!0,l(m,!0);const b=new Rt({color:5069394,roughness:1});for(let bt=0;bt<30;bt++){const re=new Y(new al(.2+bt*7%5*.12,0),b);re.position.set(-12+bt*53%24,f+.05,-14+bt*31%12),re.rotation.set(bt,bt*2,bt*3),l(re)}const x=new Rt({map:os("#6b5a4a",["#4b3f33","#7d6a57","#3f5a4a","#8a7a62"],{repeat:[1,6],seed:17}),roughness:.85,metalness:.3}),v=3.4;for(const bt of[-11.4,-5.4,u.x,6.6,12.6])for(const re of[-6.2,-11.2])l(xe(.38,.38,v-f,x,bt,f,re,24),!0);l(X(26,.5,6.4,new Rt({color:9147032,roughness:.8}),.6,v,-8.7),!0);for(const bt of[-6.2,-11.2]){const re=qn(26,t.darkSteel,.5,.25);re.position.set(.6,v-.25,bt),l(re)}for(const bt of[-11.4,-5.4,u.x,6.6,12.6])l(xe(.4,.4,.8,new Rt({color:3099187,roughness:1}),bt,-.9,-6.2,24));l(X(160,3,20,new Rt({color:8161898,roughness:1}),0,-1,-70,{cast:!1}));for(let bt=0;bt<10;bt++)l(X(6+bt%3*3,6+bt*5%10,6,new Rt({color:[12107976,10135218,13685976][bt%3]}),-40+bt*9,2,-64,{cast:!1}));const N=X(12,2.2,9,new Rt({color:599e4,roughness:.7,metalness:.4}),-2,d-2.2,2.5);l(N,!0);const C=new Y(new Le(12,.06,9),new Rt({map:os("#7c858c",["#5f676d","#949ca2","#6b5a4a"],{repeat:[6,4],seed:4}),roughness:.7,metalness:.4}));C.position.set(-2,d-.03,2.5),C.receiveShadow=!0,l(C),s.push(C);const P=(bt,re,be,ge)=>{const Fe=Math.hypot(be-bt,ge-re),ht=-Math.atan2(ge-re,be-bt);for(const Bt of[.55,1.05]){const ve=X(Fe,.04,.04,t.yellow,(bt+be)/2,d+Bt,(re+ge)/2);ve.rotation.y=ht,l(ve)}const ee=Math.max(1,Math.round(Fe/1.5));for(let Bt=0;Bt<=ee;Bt++)l(X(.05,1.07,.05,t.yellow,ze(bt,be,Bt/ee),d,ze(re,ge,Bt/ee)))};P(-8,-2,-1.4,-2),P(-.2,-2,4,-2),P(-8,7,4,7),P(-8,-2,-8,7),P(4,-2,4,7),r.push();const E=new zt;E.add(X(.05,4.2,.05,t.galv,-.3,-3.2,0),X(.05,4.2,.05,t.galv,.3,-3.2,0));for(let bt=-3;bt<1;bt+=.3)E.add(X(.6,.03,.04,t.galv,0,bt,0));E.position.set(-.8,d-.2,-2.1),l(E),l(X(.12,2.6,.12,t.orange,-2.4,d,-1.7),X(.12,2.6,.12,t.orange,.8,d,-1.7),X(3.3,.12,.12,t.orange,-.8,d+2.6,-1.7));const y=X(3,2.4,2.2,new Rt({color:9552,roughness:.6,metalness:.3}),-5.8,d,5.4);l(y,!0);const w=new Y(new se(2,.5),new fe({map:Ne({lines:["DIVE CONTROL"],bg:"#002550",fg:"#ffffff",w:512,h:128})}));w.position.set(-5.8,d+1.9,4.29),w.rotation.y=Lt,l(w);const R=w.clone();R.position.set(-5.8,d+1.9,4.29),R.rotation.y=0,R.position.z=4.29,l(R);const k=new zt;k.add(X(1.6,.8,.7,t.lockerGrey,0,0,0));const D=new zt;D.add(X(.5,.28,.32,t.black,0,0,0));const F=new fe({map:Ne({lines:["COMMS OFF"],bg:"#1a1c1f",fg:"#5b6369",w:256,h:96})}),q=new Y(new se(.3,.11),F);q.position.set(0,.16,.162),D.add(q);const H=new Y(new Be(.025,10,8),new Rt({color:2236962,emissive:0}));H.position.set(.19,.06,.165),D.add(H),D.position.set(-.3,.8,0),k.add(D);const tt=new Y(new Zn(.09,.015,8,20,Lt),t.black);tt.position.set(.45,.84,.1),k.add(tt),k.position.set(-3.6,d,.6),k.rotation.y=.2,l(k,!0),l(X(1.4,.45,.45,t.wood,-5.6,d,1.2));const z=Nn(t);z.traverse(bt=>{bt.material===t.hivis&&(bt.visible=!1)}),z.position.set(-5.6,d-.42,1.2),z.rotation.y=Lt/2,z.userData.legs.forEach(bt=>{bt.rotation.x=-Lt/2}),l(z);const ct=Fc(t,!1);ct.position.set(-1.9,d,-1.3),ct.rotation.y=Lt,ct.visible=!1,l(ct);const xt=h("UW-05","hazard",[k,z],[3.2,1.6,1.8],[-4.4,d+.7,.9],[-4,d+1.9,.8]);xt.fix=async()=>{F.map=Ne({lines:["COMMS OK"],bg:"#0b2a12",fg:"#32ff6a",w:256,h:96}),F.needsUpdate=!0,H.material.emissive.set(2883434),H.material.emissiveIntensity=2,await c(.5,bt=>{z.position.y=d-.42+bt*.3}),z.visible=!1,ct.visible=!0};const gt=new zt;gt.add(X(.8,.9,.6,t.machine,0,0,0)),gt.add(X(.82,.05,.62,t.orange,0,.9,0));const Ft=new fe({map:Ne({lines:["AC"],bg:"#c21f1f",fg:"#ffffff",w:256,h:160})}),Kt=new Y(new se(.32,.2),Ft);Kt.position.set(0,.6,.302),gt.add(Kt),gt.position.set(2.4,d,2.2),gt.rotation.y=-.3,l(gt,!0);const et=hn([new S(2.75,d+.1,2.3),new S(3.1,d+.02,2.6),new S(3.4,d+.02,3.2)],.012,new Rt({color:3120708,roughness:.6}),16);et.visible=!1,l(et);const pt=h("UW-02","hazard",gt,[1.1,1.2,.9],[2.4,d+.55,2.2],[2.4,d+1.7,2.2]);pt.fix=async()=>{await c(.4,bt=>{gt.scale.setScalar(1-bt*.15)}),Ft.map=Ne({lines:["DC"],bg:"#1f9d55",fg:"#ffffff",w:256,h:160}),Ft.needsUpdate=!0,et.visible=!0,await c(.4,bt=>{gt.scale.setScalar(.85+bt*.15)})};const mt=new zt;mt.add(X(.06,1.1,.06,t.darkSteel,0,0,0)),mt.add(X(.42,.5,.12,t.navy,0,1.05,0));const vt=new Y(new se(.34,.1),new fe({map:Ne({lines:["SAFETY SWITCH"],bg:"#f2b705",fg:"#002550",w:384,h:112})}));vt.position.set(0,1.42,.061),mt.add(vt);for(const bt of[-.1,.1])mt.add(X(.04,.08,.05,t.copper,bt,1.08,.08));const Pt=new zt;Pt.position.set(0,1.12,.1);const jt=X(.28,.03,.025,t.copper,0,-.015,0,{base:!1});Pt.add(jt);const $t=X(.05,.1,.05,t.red,.15,.04,0,{base:!1});Pt.add($t),Pt.rotation.z=0,mt.add(Pt),mt.position.set(.9,d,-1.2),mt.rotation.y=-.4,l(mt,!0);const Qt=Nn(t);Qt.position.set(-6.8,d,3.4),Qt.rotation.y=Lt/2;const rt=new Y(new Zn(.12,.018,8,20,Lt),t.black);rt.position.set(0,1.72,0),rt.visible=!1,Qt.add(rt),l(Qt);const ut=h("UW-01","hazard",mt,[.7,1.6,.6],[.9,d+.85,-1.2],[.9,d+2,-1.2]);ut.fix=async()=>{await c(.6,be=>{Pt.rotation.z=be*1.2});const bt=Qt.position.clone(),re=new S(.5,d,-.4);Qt.rotation.y=Math.atan2(re.x-bt.x,re.z-bt.z),await c(2,be=>{Qt.position.lerpVectors(bt,re,be);const ge=Math.sin(be*30)*.4;Qt.userData.legs[0].rotation.x=ge,Qt.userData.legs[1].rotation.x=-ge}),Qt.rotation.y=Lt*.85,rt.visible=!0};const L=Fc(t,!0);L.position.set(u.x,p-1,u.z+1.4),L.rotation.y=Lt,l(L),l(hn([new S(u.x,p+.75,u.z+1.6),new S(.2,-2.2,-3.6),new S(-.6,-.3,-2.4),new S(-.8,d+.2,-1.9)],.025,new Rt({color:15906565,roughness:.7}),40));const Dt=new S(u.x+.18,p+.05,u.z+1);l(hn([new S(2.4,d+.5,1.9),new S(2,-.4,-1.8),new S(1.4,-2.6,-4.6),Dt.clone().add(new S(.1,-.2,.25)),Dt],.02,t.rubber,48));const dt=new Y(new se(.35,.25),new Rt({color:11581114,roughness:.4,metalness:.8}));dt.position.set(u.x,p,u.z+.385),l(dt);const at=new zt,_t=X(.08,.035,.04,t.copper,.1,0,0,{base:!1});at.add(_t);const Yt=xe(.025,.022,.18,new Rt({color:3811872,roughness:.9}),0,0,0,10,{base:!1});Yt.rotation.z=Lt/2,at.add(Yt);const It=xe(.03,.03,.26,t.black,.03,0,0,12,{base:!1});It.rotation.z=Lt/2,It.visible=!1,at.add(It);const A=xe(.003,.003,.3,t.steel,.24,0,0,6,{base:!1});A.rotation.z=Lt/2-.3,at.add(A),at.position.copy(Dt),at.rotation.y=Lt/2+.3,l(at);const M=new zt,W=new Rt({color:15267583,roughness:.05,metalness:.4,transparent:!0,opacity:.7});for(let bt=0;bt<10;bt++)M.add(new Y(new Be(.018,8,6),W));const J=new S(1.4,-2.6,-4.6);M.position.copy(J),l(M);const ot=xe(.035,.035,.12,new Rt({color:2829099,roughness:.6}),J.x,J.y,J.z,10,{base:!1});l(ot),a.push((bt,re)=>{M.visible&&M.children.forEach((be,ge)=>{const Fe=(re*.35+ge/10)%1;be.position.set(Math.sin(ge*3+re)*.05,Fe*2.6,Math.cos(ge*2)*.05),be.visible=J.y+Fe*2.6<-.05})});const it=h("UW-06","hazard",[at],[.9,.7,.9],[Dt.x,Dt.y,Dt.z+.1],[Dt.x+.3,p+.9,Dt.z+.2]);it.fix=async()=>{await c(.5,bt=>{at.scale.setScalar(1-bt*.5)}),_t.visible=!1,Yt.visible=!1,It.visible=!0,M.visible=!1,ot.material.color.set(1118481),await c(.5,bt=>{at.scale.setScalar(.5+bt*.5)})};const Et=new zt;Et.add(X(.12,.08,.08,t.copper,0,0,0,{base:!1}),X(.03,.14,.06,t.black,.07,.05,0,{base:!1})),Et.scale.setScalar(1.8),l(X(.12,1.6,.12,t.darkSteel,1.2,-2.3,-2.75));const lt=new S(1.2,-1.5,-2.7),Ut=new S(u.x+.32,p-.28,u.z+.3);Et.position.copy(lt),l(Et);let Jt=null;const ft=()=>{Jt&&(n.remove(Jt),Jt.geometry.dispose());const bt=new S(2.6,d+.3,1.9),re=Et.position.clone();Jt=hn([bt,new S(2.4,-.3,-1.6),new S((bt.x+re.x)/2+.6,(re.y-.3)/1.4,(bt.z+re.z)/2-.6),re],.018,new Rt({color:1776928,roughness:.7}),40),n.add(Jt)};ft();const At=h("UW-03","hazard",Et,[.8,.8,.8],[lt.x,lt.y,lt.z],[lt.x,lt.y+.9,lt.z]);At.fix=()=>c(2,bt=>{Et.position.lerpVectors(lt,Ut,bt),Et.position.z+=Math.sin(bt*Lt)*.5,ft()});const Gt=new Rt({color:5595242,roughness:.6,metalness:.6,side:tn}),Zt=new zt,Nt=new Y(new qe(.62,.62,.9,32,1,!0,Lt*.15,Lt*1.7),Gt);Nt.rotation.y=Lt,Zt.add(Nt);const te=new Y(new io(.38,.62,32,1,Lt*.15,Lt*1.7),Gt);te.rotation.x=-Lt/2,te.rotation.z=Lt,te.position.y=.45,Zt.add(te),Zt.position.set(u.x,p+.75,u.z),l(Zt);const Ht=new Rt({color:14676735,emissive:10471654,emissiveIntensity:.7,roughness:.02,metalness:.9,transparent:!0,opacity:.9}),ne=new Y(new Zn(.5,.1,10,32,Lt*1.6),Ht);ne.rotation.x=Lt/2,ne.rotation.z=Lt*.2,ne.scale.set(1,1,.6),ne.position.set(u.x,p+1.12,u.z),l(ne);const O=hn([new S(u.x+.5,p+1.2,u.z+.2),new S(u.x+.75,p+2.4,u.z+.35),new S(u.x+.6,.2,u.z+.4),new S(u.x+.55,.9,u.z+.4)],.03,new Rt({color:16739072,roughness:.6}),40);O.visible=!1,l(O);const Tt=h("UW-04","hazard",[Zt,ne],[1.5,1.2,1.5],[u.x,p+.85,u.z+.2],[u.x-.8,p+1.6,u.z+.5]);Tt.fix=async()=>{O.visible=!0,await c(1.6,bt=>{ne.scale.set(1-bt*.9,1-bt*.9,.6*(1-bt))}),ne.visible=!1};const Q=new zt;Q.add(X(1.4,1.8,.5,t.lockerGrey,0,0,0));const nt=new Y(new se(1.1,.28),new fe({map:Ne({lines:["DIVER PPE"],bg:"#ff6b00",fg:"#002550",w:512,h:130})}));nt.position.set(0,2.05,.02),Q.add(nt);const wt=new Y(new Be(.17,18,14),t.yellow);wt.position.set(-.35,1.95,0),Q.add(wt);const Mt=xe(.08,.08,.55,t.yellow,.35,1.8,0,14);Q.add(Mt),Q.position.set(-7.2,d,2.6),Q.rotation.y=Lt/2,l(Q,!0),h("PPE","ppe",Q,[.8,2.3,1.6],[-7.15,d+1.05,2.6],[-7.2,d+2.7,2.6]);const Wt=u.x,pe=u.z+.75,oe=p-.32;l(X(.6,.03,.5,t.darkSteel,Wt,oe-.03,pe),!0),l(X(.08,.5,.08,t.darkSteel,Wt-.2,oe-.5,pe-.22),X(.08,.5,.08,t.darkSteel,Wt+.2,oe-.5,pe-.22)),l(new ro(14675706,4020826,1.6));const $=new oo(16774370,1.8);$.position.set(8,20,10),$.target.position.set(-1,0,0),$.castShadow=!0,$.shadow.mapSize.set(2048,2048),Object.assign($.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:60}),$.shadow.bias=-4e-4,$.shadow.normalBias=.02,l($),l($.target);const St=new jn(13626111,6,6,1.5);St.position.set(u.x+.4,p+.6,u.z+1.2),l(St);const ie=new jn(12575743,4,7,1.5);ie.position.set(u.x-.6,p+.4,u.z+1.4),l(ie);const _e={bg:new le(12375011),fog:new le(12375011)},Me=new le(1791328),Pe=new S;return a.push((bt,re)=>{g.position.y=Math.sin(re*.6)*.02,i.camera.getWorldPosition(Pe);const be=Pe.y<g.position.y,ge=i.scene;ge.fog&&(be?(ge.background=Me,ge.fog.color.copy(Me),ge.fog.near=.5,ge.fog.far=13):(ge.background=_e.bg,ge.fog.color.copy(_e.fog),ge.fog.near=40,ge.fog.far=140))}),{root:n,floors:s,blockers:r,interactables:o,floorY:d,spawn:{position:new S(-1.2,d,4.6),yaw:0},bounds:{minX:-7.4,maxX:3.6,minZ:-1.6,maxZ:6.6},atmosphere:{background:12375011,fog:[12375011,40,140],envIntensity:.5,exposure:1},underwater:!0,weldSpot:{center:new S(Wt,oe,pe+.05),standAt:new S(Wt,oe-.85,pe+.55),bench:{y:oe,minX:Wt-.3,maxX:Wt+.3,minZ:pe-.25,maxZ:pe+.25},hide:[L,at],approach:[{p:new S(-.8,d,-1.45)},{p:new S(-.8,d,-2)},{p:new S(-.8,-1.6,-2.35)},{p:new S(-.1,-3.9,-3.8)}]},update(bt,re){for(const be of a)be(bt,re)}}}function Fc(i,t){const e=Nn(i),n=new Rt({color:1776928,roughness:.6});e.traverse(a=>{a.isMesh&&(a.material===i.hivis||a.material===i.white?a.visible=!1:a.material===i.navy&&(a.material=n))});const s=new Y(new Be(.19,20,16),i.yellow);s.position.y=1.7,s.castShadow=!0,e.add(s);const r=new Y(new $n(.09,20),new Rt({color:793100,roughness:.1,metalness:.6}));r.position.set(0,1.7,.185),e.add(r);const o=new Y(new qe(.07,.07,.45,12),i.yellow);o.position.set(0,1.25,-.24),e.add(o);for(const a of[-.1,.1]){const c=new Y(new Le(.12,.02,.3),i.black);c.position.set(a,.03,.12),e.add(c)}return t&&e.userData.arms.forEach(a=>{a.rotation.x=-1.2,a.position.z=.15}),e}const Iv={id:"factory",hazards:[{id:"AREA-01",correct:1},{id:"VEN-01",correct:2},{id:"RAD-01",correct:0},{id:"GAS-01",correct:0},{id:"ELE-02",correct:2},{id:"AREA-02",correct:0},{id:"FAC-05",correct:1}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,2,0,1,0],passScore:.8},Dv={id:"construction",hazards:[{id:"CON-01",correct:1},{id:"CON-02",correct:0},{id:"CON-03",correct:1},{id:"CON-04",correct:0},{id:"CON-05",correct:2},{id:"CON-06",correct:0}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,0,2,1,2],passScore:.8},Uv={id:"shipyard",hazards:[{id:"SHP-01",correct:1},{id:"SHP-02",correct:0},{id:"SHP-03",correct:2},{id:"SHP-04",correct:1},{id:"SHP-05",correct:2},{id:"SHP-06",correct:0},{id:"SHP-07",correct:0}],ppe:[{id:"PPE-01",correct:1},{id:"PPE-02",correct:2},{id:"PPE-03",correct:0}],quiz:[1,1,2,0,1],passScore:.8},Nv={id:"underwater",hazards:[{id:"UW-01",correct:1},{id:"UW-02",correct:0},{id:"UW-03",correct:2},{id:"UW-04",correct:1},{id:"UW-05",correct:2},{id:"UW-06",correct:0}],ppe:[{id:"UPPE-01",correct:1},{id:"UPPE-02",correct:2},{id:"UPPE-03",correct:0}],quiz:[2,0,1,2,1],passScore:.8,practiceProcesses:["SMAW"]},pl="seabery-vrw-records-v1";function ml(){try{return JSON.parse(localStorage.getItem(pl))||[]}catch{return[]}}function sd(i){try{const t=ml();t.unshift({...i,at:new Date().toISOString()}),localStorage.setItem(pl,JSON.stringify(t.slice(0,200)))}catch{}}function kv(){try{localStorage.removeItem(pl)}catch{}}function zc(){const i={};for(const t of ml()){if(t.type!=="check")continue;const e=i[t.env];(!e||t.score>e.score||t.score===e.score&&t.pass&&!e.pass)&&(i[t.env]={score:t.score,pass:t.pass})}return i}function Ov(i){const t=new Date(i),e=n=>String(n).padStart(2,"0");return`${e(t.getDate())}/${e(t.getMonth()+1)}/${t.getFullYear()} ${e(t.getHours())}:${e(t.getMinutes())}`}const on=(i,t=.5,e=.3)=>new Rt({color:i,roughness:t,metalness:e});function we(i,t,e,n,s,r=16){const o=new Y(new qe(t,i,n-e,r),s);return o.position.y=(e+n)/2,o.castShadow=!1,o}function Fv(i){const t=new zt;t.name=`torch-${i}`;const e=on(1776928,.7,.1),n=on(9552,.55,.2),s=on(16739072,.5,.1),r=on(12088115,.35,.9),o=on(10133670,.4,.85),a={group:t,process:i,length:0,handY:()=>.17,setLength(){}};if(i==="GMAW"){t.add(we(9e-4,9e-4,0,.013,o,6)),t.add(we(.0035,.004,.011,.016,r,10)),t.add(we(.0085,.0095,.013,.048,r,18)),t.add(we(.0075,.0075,.048,.115,e,14)),t.add(we(.016,.018,.115,.245,n,16));const c=new Y(new Le(.008,.035,.014),s);c.position.set(0,.15,-.019),t.add(c),t.add(we(.009,.009,.245,.31,e,10)),a.handY=()=>.17}else if(i==="SMAW"){const c=we(.0022,.0022,0,1,on(9210496,.9,.05),8),l=we(.0014,.0014,0,.022,o,6),h=new zt;h.add(we(.009,.009,0,.03,r,12)),h.add(we(.016,.018,.03,.16,e,16)),h.add(we(.011,.011,.16,.22,e,10)),t.add(c,l,h),a.setLength=d=>{a.length=d,c.scale.y=Math.max(.001,d),c.position.y=d/2,l.position.y=d+.002,h.position.y=d+.012},a.handY=()=>a.length+.09,a.setLength(.3)}else if(i==="OAW"||i==="TB"){const c=on(13214026,.35,.85);t.add(we(.0016,.0022,.012,.022,r,10));const l=we(.0028,.0028,.022,.11,r,10);t.add(l),t.add(we(.006,.006,.11,.13,c,12)),t.add(we(.011,.012,.13,.26,on(9278362,.35,.85),16));for(const[h,d]of[[2056120,.013],[12721951,-.013]]){const f=new Y(new qe(.008,.008,.008,14),on(h,.5,.1));f.rotation.x=Math.PI/2,f.position.set(0,.24,d*1.6),t.add(f)}for(const[h,d]of[[2056120,.004],[12721951,-.004]]){const f=we(.0045,.0045,.26,.34,on(h,.7,.05),10);f.position.x=d,t.add(f)}a.flame=Bv(),t.add(a.flame.group),a.handY=()=>.19}else if(i==="PAC"){t.add(we(.0035,.0055,0,.012,r,16)),t.add(we(.0075,.009,.012,.03,on(3816770,.6,.3),16)),t.add(we(.012,.012,.03,.07,e,16)),t.add(we(.015,.017,.07,.2,n,16));const c=new Y(new Le(.008,.032,.012),s);c.position.set(0,.12,-.018),t.add(c),t.add(we(.009,.009,.2,.27,e,10)),a.handY=()=>.14}else if(i==="RSW"){const c=on(3159098,.6,.5);t.add(we(.0035,.006,0,.012,r,14)),t.add(we(.006,.006,.012,.05,r,12)),t.add(we(.012,.012,.05,.1,c,14));const l=new Y(new Le(.018,.018,.12),c);l.position.set(0,.11,.06),t.add(l);const h=new Y(new Le(.018,.2,.018),c);h.position.set(0,.02,.115),t.add(h);const d=new Y(new Le(.018,.018,.12),c);d.position.set(0,-.07,.06),t.add(d);const f=we(.006,.0035,-.07,-.0035,r,14);t.add(f),t.add(we(.016,.017,.12,.24,n,16));const u=new Y(new Le(.008,.03,.012),s);u.position.set(0,.17,-.019),t.add(u),a.handY=()=>.18}else if(i==="RSEW"){const c=on(3159098,.6,.5),l=.026,h=new qe(l,l,.006,32),d=new Y(h,r);d.rotation.x=Math.PI/2,d.position.y=l,t.add(d);const f=new Y(h,r);f.rotation.x=Math.PI/2,f.position.y=-l-.0035,t.add(f);for(const _ of[.008,-.008]){const g=new Y(new Le(.01,.06,.003),c);g.position.set(0,l+.02,_),t.add(g)}const u=new Y(new Le(.014,.014,.1),c);u.position.set(0,-l-.0035,.05),t.add(u);const p=new Y(new Le(.014,.12,.014),c);p.position.set(0,0,.1),t.add(p),t.add(we(.012,.012,.05,.08,c,14)),t.add(we(.016,.017,.08,.2,n,16)),a.wheels=[d,f],a.roll=_=>{d.rotation.y-=_/l,f.rotation.y+=_/l},a.handY=()=>.14}else t.add(we(2e-4,.0012,0,.006,on(7238522,.3,.9),8)),t.add(we(.0055,.008,.005,.025,on(15193030,.8,0),18)),t.add(we(.011,.011,.025,.06,e,16)),t.add(we(.007,.007,.06,.1,e,12)),t.add(we(.012,.013,.06,.19,n,16)),t.add(we(.008,.008,.19,.25,e,10)),a.handY=()=>.13;return a}function zv(i=12946778){const t=new zt;return t.add(we(.0012,.0012,0,.5,on(i,.35,.9),8)),{group:t,handY:()=>.3}}function Bv(){const i=new zt,t=(r,o)=>new fe({color:r,transparent:!0,opacity:o,blending:as,depthWrite:!1,toneMapped:!1}),e=new Y(new Hs(.0021,.012,14,1,!0),t(14676223,.95));e.rotation.x=Math.PI,e.position.y=.006;const n=new Y(new Hs(.0034,.02,14,1,!0),t(7183615,.5));n.rotation.x=Math.PI,n.position.y=.002;const s=new Y(new Hs(.0065,.055,16,1,!0),t(3825624,.22));s.rotation.x=Math.PI,s.position.y=-.016;for(const r of[e,n,s])r.renderOrder=962,i.add(r);return i.visible=!1,{group:i,update(r,o){if(i.visible=o,!o)return;const a=1+Math.sin(r*37)*.05+(Math.random()-.5)*.08;s.scale.set(a,1+(Math.random()-.5)*.12,a),n.scale.setScalar(1+(Math.random()-.5)*.06)}}}function Gs(i,t=128){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(const[o,a]of i)s.addColorStop(o,a);n.fillStyle=s,n.fillRect(0,0,t,t);const r=new il(e);return r.colorSpace=Qe,r}const Br=(i,t)=>new to({map:i,color:t,blending:as,transparent:!0,depthWrite:!1,toneMapped:!1});class Hv{constructor(t,e=2e3){const n=new Be(1,14,8);this.cap=e,this.metal=new zo(n,new Rt({color:16777215,roughness:.32,metalness:.85}),e),this.slag=new zo(n,new Rt({color:16777215,roughness:.95,metalness:.05}),e),this.glow=new zo(n,new fe({color:16777215,blending:as,transparent:!0,depthWrite:!1,toneMapped:!1}),e),this.glow.renderOrder=961;const s=new le(1,1,1);for(const r of[this.metal,this.slag,this.glow]){for(let o=0;o<e;o++)r.setColorAt(o,s);r.count=0,r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!0,t.add(r)}this.items=[],this._m=new Ce,this._q=new Jn,this._s=new S,this._c=new le,this.useSlag=!1}clear(){this.items=[];for(const t of[this.metal,this.slag,this.glow])t.count=0}get last(){return this.items[this.items.length-1]||null}add(t,e,n,s,r,o){if(this.items.length>=this.cap)return null;const a={p:t.clone(),w:e,h:n,len:Math.max(e*.55,.0022),yaw:s,born:o,grow:1,i:this.items.length};this.items.push(a),this.metal.setColorAt(a.i,this._c.set(r)),this.slag.setColorAt(a.i,this._c.set(3880497)),this._write(a);for(const c of[this.metal,this.slag,this.glow])c.count=this.items.length,c.instanceColor.needsUpdate=!0;return a}_write(t,e=1){this._q.setFromAxisAngle(new S(0,1,0),t.yaw);const n=t.len*t.grow,s=t.h*t.grow,r=t.w/2*t.grow;this._m.compose(t.p,this._q,this._s.set(n,s,r)),this.metal.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.05,s*1.18,r*1.08).multiplyScalar(this.useSlag?e:0)),this.slag.setMatrixAt(t.i,this._m),this._m.compose(t.p,this._q,this._s.set(n*1.1,s*1.25,r*1.14)),this.glow.setMatrixAt(t.i,this._m);for(const o of[this.metal,this.slag,this.glow])o.instanceMatrix.needsUpdate=!0}growLast(t){const e=this.last;!e||e.grow>=1.9||(e.grow=Math.min(1.9,e.grow+t*.9),this._write(e))}update(t){let e=!1;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n],r=t-s.born;if(r>4.5){s.cold||(s.cold=!0,this.glow.setColorAt(s.i,this._c.setRGB(0,0,0)),e=!0);continue}const o=Math.exp(-r/.8);this.glow.setColorAt(s.i,this._c.setRGB(1.6*Math.sqrt(o),.55*o,.12*o*o)),e=!0}e&&(this.glow.instanceColor.needsUpdate=!0)}setSlagVisibleFrom(t){const e=Math.floor(this.items.length*t);for(let n=0;n<this.items.length;n++)this._write(this.items[n],n<e?0:1)}}class Vv{constructor(t){this.core=new ss(Br(Gs([[0,"rgba(255,255,255,1)"],[.18,"rgba(235,245,255,0.95)"],[.45,"rgba(160,200,255,0.35)"],[1,"rgba(120,170,255,0)"]]),16777215)),this.halo=new ss(Br(Gs([[0,"rgba(255,255,255,0.6)"],[.3,"rgba(200,220,255,0.18)"],[1,"rgba(150,190,255,0)"]]),16777215)),this.pool=new ss(Br(Gs([[0,"rgba(255,250,220,1)"],[.35,"rgba(255,170,60,0.8)"],[1,"rgba(255,90,0,0)"]]),16777215)),this.core.renderOrder=963,this.halo.renderOrder=962,this.pool.renderOrder=962,this.light=new jn(14214911,0,3.5,2),t.add(this.core,this.halo,this.pool,this.light),this.set(!1)}setColor(t){this.light.color.set(t),this.core.material.color.set(t),this.halo.material.color.set(t)}set(t){this.on=t;const e=this.style!=="contact";this.core.visible=this.halo.visible=t&&e,this.pool.visible=t,t||(this.light.intensity=0)}setStyle(t){this.style=t,this.set(this.on)}update(t,e,n,s){if(!this.on)return;const r=.75+Math.random()*.5+(s?(Math.random()-.5)*.9:0),o=t.clone().lerp(e,.5);this.core.position.copy(o),this.core.scale.setScalar(.028*r),this.halo.position.copy(o),this.halo.scale.setScalar(.11*(.85+Math.random()*.3)),this.pool.position.copy(e).y+=.0015,this.pool.scale.setScalar((this.poolSize||.016)*(.9+Math.random()*.2)),this.light.position.copy(o).y+=.12,this.light.intensity=n*r}}class Gv{constructor(t,e=600){this.max=e,this.pos=new Float32Array(e*3).fill(-100),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.age=new Float32Array(e),this.next=0;const n=new We;n.setAttribute("position",new dn(this.pos,3)),n.setAttribute("color",new dn(this.col,3)),this.points=new Rg(n,new Hh({size:.0055,vertexColors:!0,blending:as,transparent:!0,depthWrite:!1,toneMapped:!1})),this.points.frustumCulled=!1,this.points.renderOrder=964,t.add(this.points),this.ground=()=>0}emit(t,e,n="splash"){for(let s=0;s<t;s++){const r=this.next;this.next=(this.next+1)%this.max;const o=Math.random()*Math.PI*2;let a=.25+Math.random()*.75,c=.5+Math.random()*1.9;n==="down"&&(a=-(.85+Math.random()*.15),c=1.2+Math.random()*1.6),n==="up"&&(a=.75+Math.random()*.25,c=.9+Math.random()*1.6);const l=Math.sqrt(1-a*a);this.pos.set([e.x,e.y+(n==="down"?-.002:.002),e.z],r*3),this.vel.set([Math.cos(o)*l*c,a*c,Math.sin(o)*l*c],r*3),this.life[r]=.35+Math.random()*.8,this.age[r]=0}}update(t){const e=this.pos,n=this.vel,s=this.col;for(let r=0;r<this.max;r++){if(this.life[r]<=0)continue;this.age[r]+=t;const o=this.age[r]/this.life[r];if(o>=1){this.life[r]=0,e[r*3+1]=-100;continue}const a=r*3;n[a+1]-=9.8*t,e[a]+=n[a]*t,e[a+1]+=n[a+1]*t,e[a+2]+=n[a+2]*t;const c=this.ground(e[a],e[a+2],e[a+1]-n[a+1]*t);e[a+1]<c&&(e[a+1]=c,n[a+1]*=-.3,n[a]*=.6,n[a+2]*=.6);const l=1-o;s[a]=1.4*l+.2,s[a+1]=.9*l*l+.1*l,s[a+2]=.35*l*l*l}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}}class Wv{constructor(t,e=40){const n=Gs([[0,"rgba(200,200,200,0.55)"],[.6,"rgba(170,170,170,0.18)"],[1,"rgba(160,160,160,0)"]],64);this.list=[];for(let s=0;s<e;s++){const r=new ss(new to({map:n,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,t.add(r),this.list.push({s:r,age:0,life:0})}this.acc=0,this.drift=new S(0,.22,-.06)}emit(t,e,n){for(this.acc+=t*e;this.acc>=1;){this.acc-=1;const s=this.list.find(r=>r.life<=0);if(!s)return;s.age=0,s.life=2.2+Math.random(),s.s.position.copy(n).add(new S((Math.random()-.5)*.01,.01,(Math.random()-.5)*.01)),s.s.visible=!0}}update(t){for(const e of this.list){if(e.life<=0)continue;e.age+=t;const n=e.age/e.life;if(n>=1){e.life=0,e.s.visible=!1;continue}e.s.position.addScaledVector(this.drift,t),e.s.position.x+=Math.sin(e.age*3+e.life*7)*.01*t,e.s.scale.setScalar(.02+n*.22),e.s.material.opacity=.4*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}}clear(){for(const t of this.list)t.life=0,t.s.visible=!1}}class Xv{constructor(t){this.mesh=new Y(new Be(.2,24,16),new fe({color:795664,side:en,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=950,this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.level=0}update(t,e){const n=e>this.level?40:6;this.level+=(e-this.level)*Math.min(1,n*t),this.mesh.material.opacity=this.level,this.mesh.visible=this.level>.01}dispose(){this.mesh.removeFromParent()}}class qv{constructor(t,e){const n=Gs([[0,"rgba(255,190,90,0.9)"],[.4,"rgba(255,90,20,0.45)"],[1,"rgba(160,20,0,0)"]],64);this.list=e.map(s=>{const r=new ss(Br(n,16777215));return r.position.copy(s),r.scale.setScalar(.022),r.renderOrder=961,r.visible=!1,t.add(r),r})}update(t){for(let e=0;e<this.list.length;e++){const n=Math.min(1.2,t[e]||0),s=this.list[e];s.visible=n>.12,s.visible&&(s.material.opacity=Math.min(1,(n-.1)*.9),s.scale.setScalar(.014+n*.012))}}}const qo={GMAW:{pops:260,decay:.003,base:.22,freq:2400,q:.8,vol:.55},SMAW:{pops:120,decay:.007,base:.18,freq:1600,q:.6,vol:.6},GTAW:{pops:0,decay:.004,base:.6,freq:5200,q:.35,vol:.22},OAW:{pops:0,decay:.004,base:.7,freq:650,q:.45,vol:.4},TB:{pops:0,decay:.004,base:.7,freq:650,q:.45,vol:.4},PAC:{pops:70,decay:.002,base:.55,freq:3400,q:.5,vol:.45},RSW:{pops:0,decay:.004,base:.8,freq:140,q:3,vol:.9},RSEW:{pops:0,decay:.004,base:.8,freq:140,q:3,vol:.9}};class Yv{constructor(){this.ctx=null,this.muted=!1,this.buffers={},this.process=null,this.src=null}ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.filter=this.ctx.createBiquadFilter(),this.filter.type="bandpass",this.gain=this.ctx.createGain(),this.gain.gain.value=0,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:1,this.filter.connect(this.gain).connect(this.master).connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0}_buffer(t){if(this.buffers[t])return this.buffers[t];const e=qo[t],n=this.ctx.sampleRate,s=Math.floor(n*3),r=this.ctx.createBuffer(1,s,n),o=r.getChannelData(0),a=new Float32Array(s).fill(e.base),c=Math.floor(e.pops*3),l=Math.floor(e.decay*n);for(let h=0;h<c;h++){const d=Math.floor(Math.random()*s),f=.3+Math.random()*.9;for(let u=0;u<l*4&&d+u<s;u++)a[d+u]+=f*Math.exp(-u/l)}for(let h=0;h<s;h++)o[h]=(Math.random()*2-1)*Math.min(1.4,a[h]);for(let h=0;h<256;h++)o[h]*=h/256,o[s-1-h]*=h/256;return this.buffers[t]=r}setProcess(t){if(!this.ctx||this.process===t)return;if(this.process=t,this.src){try{this.src.stop()}catch{}this.src.disconnect()}const e=qo[t];this.filter.frequency.value=e.freq,this.filter.Q.value=e.q,this.src=this.ctx.createBufferSource(),this.src.buffer=this._buffer(t),this.src.loop=!0,this.src.connect(this.filter),this.src.start()}update(t,e=0,n=1){if(!this.ctx||!this.process)return;const s=qo[this.process],r=t?s.vol*n*(.85+Math.random()*.3)*(1+e*.5):0;this.gain.gain.setTargetAtTime(r,this.ctx.currentTime,t?.015:.04)}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:1,this.ctx.currentTime,.02)}stop(){this.ctx&&this.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.03)}}const Pr=960,Yo=400,je={bg:"#f3f5f7",label:"#2b3d52",lead:"#6b7c8f",joint:"#20262c",pore:"#2a2d31",mark:"#ff6b00",bad:"#c0392b"};function Lr(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Bc(i,t,e){const n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=o=>Math.round((n>>o&255)*(1-e)+(s>>o&255)*e);return`rgb(${r(16)},${r(8)},${r(0)})`}const Hc=i=>"#"+i.toString(16).padStart(6,"0");function $v(i,{kind:t,process:e,codes:n,plate:s,weld:r,offSign:o=1,labels:a,seed:c=7}){i.width=Pr,i.height=Yo;const l=i.getContext("2d"),h=E=>a[E]||E;l.fillStyle=je.bg,l.fillRect(0,0,Pr,Yo);const d=Bc("#9aa1a8",Hc(s),.35),f=Bc("#b9bec3",Hc(r),.45),u=E=>n.includes(E),p=Pr/2,_=[],g=(E,y,w,R)=>{l.fillStyle=d,l.fillRect(E,y,w,R);const k=Lr(c+E);l.save(),l.beginPath(),l.rect(E,y,w,R),l.clip(),l.strokeStyle="rgba(40,46,52,0.10)",l.lineWidth=1;for(let D=y+4;D<y+R;D+=5+k()*6)l.beginPath(),l.moveTo(E,D),l.lineTo(E+w,D+(k()-.5)*3),l.stroke();l.restore(),l.strokeStyle="rgba(20,30,40,0.35)",l.lineWidth=1.5,l.strokeRect(E+.5,y+.5,w-1,R-1)},m=(E,y,w)=>{const R=Lr(c+3);l.save(),l.clip(E),l.strokeStyle="rgba(60,66,72,0.18)",l.lineWidth=1.2;for(let k=0;k<140;k++){const D=R()*Math.PI*2,F=140+R()*60,q=y+Math.cos(D)*F,H=w+Math.sin(D)*F;l.beginPath(),l.moveTo(q,H),l.lineTo(y+(q-y)*.25,w+(H-w)*.25),l.stroke()}l.restore()},b=(E,y,w,R=.32)=>{l.save(),l.beginPath();for(const[k,D,F,q]of w)l.rect(k,D,F,q);l.clip(),l.strokeStyle=`rgba(55,48,40,${R})`,l.lineWidth=y*2,l.lineJoin="round",l.stroke(E),l.strokeStyle=`rgba(55,48,40,${R*.6})`,l.lineWidth=y*3.2,l.stroke(E),l.restore()},x=(E,y,w,R,k,D=!1)=>_.push([E,y,w,R,k,D]);t==="arc"||t==="flame"?e==="TB"?N():v():t==="cut"?C():P();function v(){const R=[[p-380,150,380,110],[p,150,380,110]];for(const Kt of R)g(...Kt);if((()=>{l.strokeStyle=je.joint,l.lineWidth=3,l.beginPath(),l.moveTo(p,150),l.lineTo(p,260),l.stroke()})(),x(h("base"),p-300,150+110*.55,p-330,330),u("none")){x(h("notJoined"),p,150+110*.4,p+150,70,!0);return}const D=u("fast")?"fast":u("slow")?"slow":"good",F={good:62,fast:40,slow:92}[D],q={good:18,fast:10,slow:34}[D],H={good:1,fast:.45,slow:1}[D],tt={good:7,fast:0,slow:18}[D],z=p+(u("off")?o*88:0),ct=F*.32,xt=150+110*H,gt=new Path2D;gt.moveTo(z-F,150),gt.quadraticCurveTo(z,150-2*q,z+F,150),H>=1?(gt.bezierCurveTo(z+F*.7,150+110*.35,z+ct*1.2,150+110*.7,z+ct,260),gt.quadraticCurveTo(z,260+2*tt,z-ct,260),gt.bezierCurveTo(z-ct*1.2,150+110*.7,z-F*.7,150+110*.35,z-F,150)):(gt.bezierCurveTo(z+F*.85,150+110*H*.7,z+F*.35,xt,z,xt),gt.bezierCurveTo(z-F*.35,xt,z-F*.85,150+110*H*.7,z-F,150)),gt.closePath();const Ft=(t==="flame"?24:e==="GTAW"?9:12)*(D==="slow"?1.6:D==="fast"?.7:1);if(b(gt,Ft,R),l.fillStyle=f,l.fill(gt),m(gt,z,150+110*H*.35),l.strokeStyle="rgba(30,34,38,0.55)",l.lineWidth=1.5,l.stroke(gt),u("far")){const Kt=Lr(c+11);l.fillStyle=je.pore;for(let et=0;et<7;et++)l.beginPath(),l.arc(z+(Kt()-.5)*F*.9,150-q*.4+Kt()*110*H*.55,3+Kt()*4,0,Math.PI*2),l.fill();x(h("pores"),z+F*.2,150+110*.15,z+250,60,!0)}x(h("weld"),z-F*.3,150-q*.3,z-230,60),x(h("haz"),z+F+Ft*.9,160,p+300,330),D==="fast"&&x(h("unfusedRoot"),p,150+110*.8,p+90,260+(u("off")?112:70),!0),D==="slow"&&x(h("excess"),z,150-q-6,z+230,70,!0),u("off")&&x(h("lackFusion"),p,150+110*.6,p-o*150,330,!0)}function N(){const w=p-380,R=[[w,210,760,60],[w,150,p-w,60]];if(g(...R[0]),g(...R[1]),l.strokeStyle=je.joint,l.lineWidth=2,l.beginPath(),l.moveTo(w,210),l.lineTo(p,210),l.stroke(),x(h("base"),w+70,150+60*.5,w+40,150+2*60+70),u("none")){x(h("notJoined"),p,210,p+160,70,!0);return}const k=u("fast")?"fast":u("slow")?"slow":"good",D={good:46,fast:24,slow:72}[k],F=u("off")?0:{good:250,fast:45,slow:290}[k],q=p+(u("off")?70:0);l.save(),l.beginPath();for(const z of R)l.rect(...z);l.clip();const H=l.createRadialGradient(p,210,10,p,210,k==="slow"?190:120);H.addColorStop(0,"rgba(70,50,30,0.28)"),H.addColorStop(1,"rgba(70,50,30,0)"),l.fillStyle=H,l.fillRect(w,150,760,2*60),l.restore(),l.fillStyle=f,F&&l.fillRect(p-F,210-2.5,F,5);const tt=new Path2D;u("off")?(tt.moveTo(q,210),tt.quadraticCurveTo(q+D*.6,210-D*.9,q+D*1.6,210)):(tt.moveTo(q,210-Math.min(60,D)),tt.lineTo(q,210),tt.lineTo(q+D*1.1,210),tt.quadraticCurveTo(q+D*.25,210-D*.2,q,210-Math.min(60,D))),tt.closePath(),l.fill(tt),l.strokeStyle="rgba(80,60,20,0.6)",l.lineWidth=1.5,l.stroke(tt),x(h("filler"),q+D*.4,210-D*.25,q+220,70),F>120?x(h("flowed"),p-F*.6,210,p-250,70):x(h("noFlow"),p-30,210,p-250,70,!0),k==="slow"&&x(h("heavyFillet"),q+D*.6,210-D*.35,q+240,150+2*60+70,!0)}function C(){const w=p-380,R=p+(u("off")?o*90:0);if(u("none")){g(w,150,760,110),l.setLineDash([10,8]),l.strokeStyle=je.mark,l.lineWidth=3,l.beginPath(),l.moveTo(p,120),l.lineTo(p,290),l.stroke(),l.setLineDash([]),x(h("notCut"),p,150+110*.5,p+170,70,!0);return}const k=u("fast")?"fast":u("slow")?"slow":"good",D={good:22,fast:18,slow:36}[k],F={good:13,fast:4,slow:26}[k],q=k==="fast"?.55:1;if(g(w,150,760,110),l.fillStyle=je.bg,l.beginPath(),l.moveTo(R-D/2,149),l.lineTo(R+D/2,149),q<1?l.lineTo(R,150+110*q):(l.lineTo(R+F/2,261),l.lineTo(R-F/2,261)),l.closePath(),l.fill(),l.strokeStyle="rgba(30,26,22,0.7)",l.lineWidth=2.5,l.stroke(),k==="slow"){l.fillStyle="#4a4744";for(const H of[-1,1])l.beginPath(),l.ellipse(R+H*(F/2+7),267,12,8,0,0,Math.PI*2),l.fill();x(h("dross"),R+F/2+12,269,R+230,330,!0)}u("off")&&(l.setLineDash([10,8]),l.strokeStyle=je.mark,l.lineWidth=3,l.beginPath(),l.moveTo(p,116),l.lineTo(p,144),l.stroke(),l.setLineDash([]),x(h("line"),p,120,p-o*200,60,!0)),x(h("kerf"),R,150+110*.3,R+220,60),x(h("base"),w+70,150+110*.5,w+40,330),k==="fast"&&x(h("notThrough"),R,150+110*.75,R+200,330,!0)}function P(){const w=p-380,R=[[w,150,760,46],[w,196,760,46]];if(g(...R[0]),g(...R[1]),l.strokeStyle=je.joint,l.lineWidth=2,l.beginPath(),l.moveTo(w,196),l.lineTo(w+760,196),l.stroke(),x(h("base"),w+70,150+46*.5,w+40,150+2*46+70),(t==="spot"||u("off"))&&(l.setLineDash([10,8]),l.strokeStyle=je.mark,l.lineWidth=3,l.beginPath(),l.moveTo(p,114),l.lineTo(p,142),l.stroke(),l.setLineDash([])),u("none")){x(h("notJoined"),p,196,p+170,60,!0);return}const k=u("moved")?"moved":u("short")||u("fast")?"small":u("slow")?"big":"good",D={good:82,small:42,moved:74,big:98}[k],F={good:27,small:13,moved:26,big:32}[k],q={good:4,small:3,moved:12,big:10}[k],H=p+(u("off")?o*130:0),tt=new Path2D;if(tt.ellipse(H,196,D,F,0,0,Math.PI*2),b(tt,11,R),l.fillStyle=f,l.fill(tt),m(tt,H,196),l.strokeStyle="rgba(30,34,38,0.55)",l.lineWidth=1.5,l.stroke(tt),k==="moved"){l.fillStyle=f;const z=Lr(c+5);for(const ct of[-1,1])l.beginPath(),l.moveTo(H+ct*(D-6),192),l.lineTo(H+ct*(D+40+z()*20),196),l.lineTo(H+ct*(D-6),200),l.fill();x(h("expulsion"),H+D+30,196,H+250,150+2*46+70,!0)}l.fillStyle=je.bg;for(const[z,ct]of[[150,1],[150+2*46,-1]])l.beginPath(),l.ellipse(H,z,70,q,0,ct>0?0:Math.PI,ct>0?Math.PI:Math.PI*2),l.fill();x(h("nugget"),H-D*.3,196,H-260,60),x(h("haz"),H+D+6,196-F*.6,H+260,60),k==="small"&&x(h("smallNugget"),H,196+F*.5,H+230,150+2*46+70,!0),q>8&&x(h("deepMark"),H-40,150+2*46-q,H-110,150+2*46+70,!0),u("off")&&x(h("mark"),p,120,p-o*220,150+2*46+70,!0)}l.font="600 22px Gilroy, Arial, sans-serif",l.textBaseline="middle";for(const[E,y,w,R,k,D]of _){const F=l.measureText(E).width+22,q=Math.max(F/2+8,Math.min(Pr-F/2-8,R));l.strokeStyle=D?je.bad:je.lead,l.lineWidth=2,l.beginPath(),l.moveTo(y,w),l.lineTo(q,k),l.stroke(),l.fillStyle=D?je.bad:je.lead,l.beginPath(),l.arc(y,w,4,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.strokeStyle=D?je.bad:je.lead,l.beginPath(),l.roundRect(q-F/2,k-17,F,34,17),l.fill(),l.stroke(),l.fillStyle=D?je.bad:je.label,l.textAlign="center",l.fillText(E,q,k+1),l.textAlign="left"}return l.font='400 15px "PP Supply Mono", "Courier New", monospace',l.fillStyle="#6b7c8f",l.fillText(h("illustration").toUpperCase(),16,Yo-16),i}const Zv=["GMAW","SMAW","GTAW","OAW","TB","PAC","RSW","RSEW"],jv=["GMAW","SMAW","GTAW","OAW","TB","PAC"],Kv=["MS","AL","SS","CI","BRASS","CU"],Jv={GMAW:"arc",SMAW:"arc",GTAW:"arc",OAW:"flame",TB:"flame",PAC:"cut",RSW:"spot",RSEW:"seam"},Qv={GMAW:"butt",SMAW:"butt",GTAW:"butt",OAW:"butt",TB:"lap",PAC:"plate",RSW:"thin",RSEW:"thin"},tx={arc:[.42,.86],cut:[.42,.8],flame:[.5,.5],spot:[.08,.08],seam:[.08,.08]},Vc={GMAW:{pace:[.01,.028],w:.008,hr:.38,sparks:90,fume:6,arc:2.6,color:14477567,metal:[10788243,10130571],win:[-.004,.02],strike:.02,lose:.035,touch:null,pcAxis:[-.15,.9,.35]},SMAW:{pace:[.007,.02],w:.009,hr:.42,sparks:140,fume:10,arc:3,color:16773596,metal:[9343896,8751759],win:[-.002,.012],strike:.012,lose:.022,touch:-.004,pcAxis:[.3,.85,.35],burn:.0125,L0:.3,Lmin:.05},GTAW:{pace:[.004,.014],w:.006,hr:.3,sparks:0,fume:1.2,arc:2,color:13228287,metal:[12830925,11449530],win:[-.002,.01],strike:.01,lose:.02,touch:-.004,pcAxis:[-.3,.85,.35]},OAW:{pace:[.004,.013],w:.0075,hr:.32,sparks:8,fume:2,arc:1.3,color:16754784,metal:[10656658,9867400],win:[-.003,.014],strike:.014,lose:.03,touch:null,pcAxis:[-.35,.8,.35],heatRate:2.4,heatR:.008,filler:12946778},TB:{pace:[.005,.015],w:.0065,hr:.2,sparks:0,fume:3,arc:1.2,color:16754784,metal:[14465118,13609295],win:[-.003,.016],strike:.016,lose:.03,touch:null,pcAxis:[-.35,.8,.35],heatRate:2.8,heatR:.009,filler:14201434,fixedMetal:!0},PAC:{pace:[.012,.034],w:.0032,hr:.12,sparks:160,fume:5,arc:2.4,color:14865663,metal:[1184274,1710618],win:[-.003,.012],strike:.012,lose:.024,touch:null,pcAxis:[0,.9,.4],pool:.01,fixedMetal:!0},RSW:{cycle:.9,w:.0095,hr:.07,arc:.6,color:16752704,strike:.006,gap:0,pcAxis:[0,1,1e-4],flip:!0,spots:6,spotTol:.0045,moveTol:.0035,pool:.012},RSEW:{pace:[.008,.022],w:.0085,hr:.07,sparks:0,fume:.5,arc:.45,color:16752704,metal:null,win:[-.003,.006],strike:.006,lose:.012,touch:null,gap:0,pcAxis:[0,1,1e-4],flip:!0,spacing:.003,pool:.012}},Ds={MS:{plate:9410462,rough:.5,metal:.75,bead:null,heat:1},AL:{plate:12896718,rough:.42,metal:.7,bead:[14080733,13423061],heat:.7},SS:{plate:11449272,rough:.28,metal:.9,bead:[12887144,9408436],heat:1.1},CI:{plate:5658973,rough:.85,metal:.45,bead:[7698555,6974832],heat:.9},BRASS:{plate:13017164,rough:.35,metal:.9,bead:[13938264,13082957],heat:.8},CU:{plate:12088650,rough:.35,metal:.9,bead:[12877388,11956547],heat:.55}},ex=.003,Gc=.025,ai=.005,$o=.006,nx=.003,ix=.006,sx=.35,rx=.6,Zo=.06,Ji=new S(0,1,0),Ir=new S(0,.5,1).normalize();class ox{constructor(t){this.game=t,this.engine=t.engine,this.input=t.input,this.panels=t.panels,this.active=!1,this.state="off",this.process="GMAW",this.material="MS",this.audio=new Yv,this.pointer={down:!1,valid:!1,id:null,point:new S},this.trigger=!1,this.needRelease=!1,this.arcOn=!1,this.anims=[],this.runId=0,this.raycaster=new Jh,this.plane=new li,this._bindPointer(),this._bindXR(),this.engine.updaters.add((e,n)=>{this.active&&this._update(e,n)})}get T(){return Vc[this.process]}get kind(){return Jv[this.process]}start({from:t="results"}={}){const e=this.game.world;this.spot=e.weldSpot,this.from=t,this.active=!0,this.root=new zt,this.root.name="weld-practice",e.root.add(this.root);const n=this._processes(),s=this._materials();if(n.includes(this.process)||(this.process=n[0]),s.includes(this.material)||(this.material=s[0]),this.bead=new Hv(this.root),this.arc=new Vv(this.root),this.sparks=new Gv(this.root),this.sparks.ground=(c,l,h)=>this._ground(c,l,h),this.fume=new Wv(this.root),this.wet=!!e.underwater,this.wet){this.fume.drift.set(0,.7,0);for(const c of this.fume.list)c.s.material.color.set(15398655)}this._buildCoupon();const r=this.engine.camera,o=this.engine.rig;this.helmet=new Xv(r),this.fader=new Y(new Be(.15,16,10),new fe({color:0,side:en,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.fader.renderOrder=1e3,this.fader.frustumCulled=!1,this.fader.visible=!1,r.add(this.fader),this.saved={fov:r.fov,pos:o.position.clone(),rotY:o.rotation.y,yaw:this.input.yaw,pitch:this.input.pitch,vr:this.engine.isVR},this.torch=this.filler=this.torchCtrl=null,this.pointer.point.set(this.seam.x0-.01,this.top,this.seam.z+.02),this.pointer.valid=!0,this.pcLift=Gc,this.m=null,this.input.locked=!0,this.input.clearHover(),this.audio.ensure(),this._buildHud();for(const c of this.spot.hide||[])c.visible=!1;const a=++this.runId;this._walkIn().then(()=>{!this.active||a!==this.runId||(this._fade(0),this._placeUser(),this._choose())})}exit(){const t=this.from;this.stop(),this.game._afterPractice(t)}stop(){var s,r,o,a;if(!this.active)return;this._setArc(!1),this.active=!1,this.state="off",this.runId++;for(const c of this.anims)c.res();this.anims=[],this.audio.stop(),this.panels.hide(),this._restoreRays(),(s=this.torch)==null||s.group.removeFromParent(),(r=this.filler)==null||r.group.removeFromParent(),this.torch=this.filler=this.torchCtrl=null,this.root.removeFromParent(),this.root=null,this.helmet.dispose(),this.fader.removeFromParent();for(const c of this.spot.hide||[])c.visible=!0;(o=this.hud)==null||o.remove(),this.hud=null;const t=this.engine.camera,e=this.engine.rig,n=this.saved;t.fov=n.fov,t.updateProjectionMatrix(),n.vr===this.engine.isVR?(e.position.copy(n.pos),e.rotation.y=n.rotY):e.position.y=((a=this.game.world)==null?void 0:a.floorY)||0,this.input.yaw=n.yaw,this.input.pitch=n.pitch,this.input._applyLook(),this.game.world&&(this.input.world=this.game.world,this.input.walkTarget=null),this.game.vrHud.mesh.visible=!1}onModeChange(){if(this.active){if(this._setArc(!1),this.state==="walk"){this._skipWalk();return}this.engine.isVR||(this.engine.camera.fov=38,this.engine.camera.updateProjectionMatrix()),this._placeUser(),this._mountTorch(),this.renderHud(!0)}}_anim(t,e){return new Promise(n=>this.anims.push({t:0,dur:t,fn:e,res:n}))}_fade(t){this.fader&&(this.fader.material.opacity=t,this.fader.visible=t>.01)}_skipWalk(){this.skipWalk=!0;for(const t of this.anims)t.res();this.anims=[]}async _walkIn(){const t=this.engine,e=this.spot,n=this.input,s=t.rig,r=[...e.approach||[],{p:e.standAt,eye:e.eye,last:!0}];if(this.state="walk",this.skipWalk=!1,this.renderHud(!0),t.isVR){for(const o of r){if(this.skipWalk||!this.active||(await this._anim(.3,a=>this._fade(a)),this.skipWalk||!this.active))break;this._vrMoveTo(o,r[r.indexOf(o)+1]),await this._anim(.3,a=>this._fade(1-a)),await this._anim(.3,()=>{})}return}for(const o of r){if(this.skipWalk||!this.active)break;const a=s.position.clone(),c=o.last?o.eye??1.4:o.eye??Wn,l=new S(o.p.x,o.p.y+c-Wn,o.p.z),h=Math.hypot(l.x-a.x,l.z-a.z),d=Math.abs(l.y-a.y),f=Math.max(.4,h/1.3,d/.7),u=n.yaw,p=n.pitch,_=t.camera.fov,g=o.last?0:h>.1?Math.atan2(-(l.x-a.x),-(l.z-a.z)):u,m=Gn.euclideanModulo(g-u+Math.PI,Math.PI*2)-Math.PI,b=o.last?-Math.atan2(l.y+Wn-this.top,o.p.z-this.seam.z):l.y<a.y-.3?-.55:-.12,x=o.last?38:_;await this._anim(f,(v,N)=>{const C=Ga(v);s.position.lerpVectors(a,l,C),h>.3&&(s.position.y+=Math.abs(Math.sin(N*6.5))*.022*Math.sin(Math.PI*v)),n.yaw=u+m*(o.last?C:Ga(Math.min(1,v*2.5))),n.pitch=p+(b-p)*C,n._applyLook(),x!==_&&(t.camera.fov=_+(x-_)*C,t.camera.updateProjectionMatrix())})}}_vrMoveTo(t,e){const n=this.engine,s=new S,r=new S,o=e?e.p:this.spot.center,a=Math.atan2(-(o.x-t.p.x),-(o.z-t.p.z));n.camera.getWorldDirection(r),this.input.snapTurn(a-Math.atan2(-r.x,-r.z)),n.camera.getWorldPosition(s),n.rig.position.x+=t.p.x-s.x,n.rig.position.z+=t.p.z-s.z,n.rig.position.y=t.p.y+(t.eye!=null?t.eye-Wn:0)}_buildCoupon(){var m;(m=this.coupon)==null||m.removeFromParent();const t=this.coupon=new zt;this.root.add(t);const e=this.spot.center,n=Qv[this.process],s=Ds[this.material],r=new Rt({color:s.plate,roughness:s.rough,metalness:s.metal}),o=(b,x,v,N,C,P,E=r)=>{const y=new Y(new Le(b,x,v),E);return y.position.set(N,C,P),y.receiveShadow=!0,y.castShadow=!1,t.add(y),y},a=.26,c=n==="plate"||n==="thin",l=e.y+(c?Zo:0);if(c){const b=new Rt({color:3817285,roughness:.7,metalness:.5});for(const x of[-1,1])o(.03,Zo,.1,e.x+x*(a/2-.025),e.y+Zo/2,e.z,b)}let h,d,f,u;if(n==="butt"){for(const N of[-1,1])o(a,.006,.06,e.x,l+.006/2,e.z+N*(.06/2+.0015/2));h=l+.006,u=.006,d=e.z-.06-.0015/2,f=e.z+.06+.0015/2}else n==="lap"?(o(a,.003,.06,e.x,l+.003/2,e.z+.015),o(a,.003,.045,e.x,l+.003*1.5,e.z-.0225),h=l+.003,u=.003,d=e.z-.045,f=e.z+.045):n==="thin"?(o(a,.0015,.06,e.x,l+.0015/2,e.z-.015),o(a,.0015,.06,e.x,l+.0015*1.5,e.z+.015),h=l+2*.0015,u=2*.0015,d=e.z-.045,f=e.z+.045):(o(a,.006,.12,e.x,l+.006/2,e.z),h=l+.006,u=.006,d=e.z-.06,f=e.z+.06);this.top=h,this.thick=u,this.seam={x0:e.x-.11,x1:e.x+.11,z:e.z,minX:e.x-a/2,maxX:e.x+a/2,minZ:d,maxZ:f};const p=this.seam,_=new fe({color:16777215,transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1}),g=(b,x,v,N,C=0)=>{const P=new Y(new se(b,x),_);P.rotation.set(-Math.PI/2,0,C),P.position.set(v,h+4e-4,N),P.renderOrder=958,t.add(P)};if(this.marks=null,this.kind==="spot"){const b=this.T.spots;this.marks=[];for(let x=0;x<b;x++){const v=p.x0+.01+x*(p.x1-p.x0-.02)/(b-1);this.marks.push({x:v,z:p.z}),g(.0018,.014,v,p.z),g(.0018,.014,v,p.z,Math.PI/2)}}else{for(const b of[p.x0,p.x1])for(const x of[-1,1])g(.0022,.018,b,p.z+x*.017);n==="plate"&&g(p.x1-p.x0,.0012,(p.x0+p.x1)/2,p.z),n==="thin"&&g(p.x1-p.x0,8e-4,(p.x0+p.x1)/2,p.z+.006)}if(n==="butt"){const b=new Rt({color:s.plate,roughness:.4,metalness:.8});for(const x of[p.minX+.008,p.maxX-.008]){const v=new Y(new Be(1,10,6),b);v.scale.set(.004,.002,.003),v.position.set(x,h,e.z),t.add(v)}}if((this.kind==="arc"||this.kind==="cut")&&o(.018,.016,.024,p.maxX-.012,h+.008,e.z+(f-e.z)*.8,new Rt({color:12088115,roughness:.4,metalness:.8})),this.heat=null,this.heatGlow=null,this.kind==="flame"){const b=Math.ceil((p.maxX-p.minX)/ai);this.heat=new Float32Array(b);const x=[];for(let v=0;v<b;v++)x.push(new S(p.minX+(v+.5)*ai,h+8e-4,p.z));this.heatGlow=new qv(t,x)}}_ground(t,e,n){const s=this.seam,r=this.spot.bench;return t>s.minX&&t<s.maxX&&e>s.minZ&&e<s.maxZ&&n>=this.top-this.thick-.002?this.top:t>r.minX&&t<r.maxX&&e>r.minZ&&e<r.maxZ?r.y:this.spot.standAt.y}_placeUser(){const t=this.engine,e=this.spot.standAt;if(t.isVR){const n=new S;t.camera.getWorldDirection(n),this.input.snapTurn(-Math.atan2(-n.x,-n.z));const s=new S;t.camera.getWorldPosition(s),t.rig.position.x+=e.x-s.x,t.rig.position.z+=e.z-s.z,t.rig.position.y=e.y+(this.spot.eye!=null?this.spot.eye-Wn:0)}else{const n=this.spot.eye??1.4;t.rig.position.set(e.x,e.y+n-Wn,e.z),this.input.yaw=0,this.input.pitch=-Math.atan2(e.y+n-this.top,e.z-this.seam.z),this.input._applyLook(),t.camera.fov=38,t.camera.updateProjectionMatrix()}}_setup(t,e){var n,s;this.process=t,this.material=e,this._buildCoupon(),this.bead.clear(),this.fume.clear(),this.m=null,(n=this.torch)==null||n.group.removeFromParent(),(s=this.filler)==null||s.group.removeFromParent(),this.torch=Fv(t),this.filler=this.T.filler||t==="GTAW"?zv(this.T.filler||12946778):null,this._mountTorch(),this.arc.setColor(this.T.color),this.arc.setStyle(this.kind==="arc"||this.kind==="cut"?"arc":"contact"),this.arc.poolSize=this.T.pool||.016,this.audio.ensure(),this.audio.setProcess(t)}_mountTorch(){const t=this.torch;if(t)if(this._restoreRays(),this.torchCtrl=null,this.engine.isVR){const e=this.input.controllers.filter(s=>s.userData.source&&s.userData.grip),n=e.find(s=>s.userData.handedness==="right")||e[0];if(!n){this.root.add(t.group);return}if(this.torchCtrl=n,n.userData.grip.add(t.group),t.group.quaternion.setFromUnitVectors(Ji,Ir),this.filler){const s=e.find(r=>r!==n);s?(s.userData.grip.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(Ji,Ir),this.filler.group.position.copy(Ir).multiplyScalar(-this.filler.handY())):this.filler.group.removeFromParent()}}else this.root.add(t.group),t.group.quaternion.setFromUnitVectors(Ji,new S(...this.T.pcAxis).normalize()),this.T.flip&&t.group.quaternion.multiply(new Jn().setFromAxisAngle(Ji,Math.PI)),this.filler&&(this.root.add(this.filler.group),this.filler.group.quaternion.setFromUnitVectors(Ji,new S(.75,.42,.5).normalize()))}_pName(t=this.process){return I(`practice.processes.${t}.name`)}_mName(t=this.material){return I(`practice.materials.${t}.name`)}_kicker(){return this.torch?`${I("practice.kicker")} · ${this._pName()} · ${this._mName()}`:I("practice.kicker")}_fb(t,e){for(const n of[`practice.fbKind.${this.process}.${t}.${e}`,`practice.fbKind.${this.kind}.${t}.${e}`]){const s=I(n);if(s!==n)return s}return I(`practice.fb.${t}.${e}`)}_how(){const t=this.engine.isVR?"Vr":"",e=`practice.how.${this.process}${t}`,n=I(e);return n!==e?n:I(`practice.how.${this.kind}${t}`)}_processes(){var e,n;const t=(e=this.game.env)==null?void 0:e.content;return t!=null&&t.practiceProcesses?t.practiceProcesses:((n=this.game.env)==null?void 0:n.id)==="factory"?Zv:jv}_materials(){var t,e;return((t=this.game.env)==null?void 0:t.content.practiceMaterials)||((e=this.game.world)!=null&&e.underwater?["MS"]:Kv)}_choose(){this._xsClear(),this._setArc(!1);const t=this._processes();if(t.length===1){this._chooseMaterial(t[0]);return}this.state="select",this.panels.show({kicker:I("practice.kicker"),title:I("practice.chooseTitle"),body:[I(`env.${this.game.env.id}.job`),I("practice.chooseBody")],options:t.map(e=>({text:`${this._pName(e)}: ${I(`practice.processes.${e}.short`)}`})),onOption:e=>this._chooseMaterial(t[e]),buttons:[{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}),this.renderHud(!0)}_chooseMaterial(t){this._xsClear(),this._setArc(!1);const e=this._materials();if(e.length===1){this._intro(t,e[0]);return}this.state="select";const n=this._processes().length>1;this.panels.show({kicker:`${I("practice.kicker")} · ${this._pName(t)}`,title:I("practice.materialTitle"),body:I("practice.materialBody"),options:e.map(s=>({text:`${this._mName(s)}${s===this.material?` · ${I("practice.current")}`:""}`})),onOption:s=>this._intro(t,e[s]),buttons:[n?{label:I("app.back"),style:"secondary",onClick:()=>this._choose()}:{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()}]}),this.renderHud(!0)}_intro(t,e){this._setup(t,e),this.state="intro";const n=this._materials().length>1?()=>this._chooseMaterial(t):this._processes().length>1?()=>this._choose():null;this.panels.show({kicker:this._kicker(),title:this._pName(t),body:[I(`practice.processes.${t}.desc`),`${this._mName()}: ${I(`practice.materials.${e}.note`)}`,...this.wet?[I("practice.wetNote")]:[],this._how(),I(`practice.eyes.${this.kind}`)],buttons:[n?{label:I("app.back"),style:"secondary",onClick:n}:{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()},{label:I("app.start"),onClick:()=>{this.panels.hide(),this._beginPass()}}]}),this.renderHud(!0)}_beginPass(){this._xsClear(),this.state="weld",this.bead.clear(),this.fume.clear(),this.bead.useSlag=this.process==="SMAW",this.m={bins:new Array(Math.ceil((this.seam.x1-this.seam.x0)/ai)).fill(!1),lat2:0,latN:0,samples:[],win:null,dGood:0,dFar:0,dClose:0,dN:0,spots:[],slices:[]},this.heat&&this.heat.fill(0),this.cycle=null,this.vs=0,this.lastDep=null,this.prevPool=null,this.prevTipX=null,this.idle=0,this.swapAt=0,this.needRelease=this.trigger||this.pointer.down,this.process==="SMAW"&&this.torch.setLength(Vc.SMAW.L0),this.renderHud(!0)}_finishPass(){if(this.state==="weld"){if(this._coverage()<.15&&!(this.kind==="spot"&&this.m.spots.length)){this.game._notify(I(this.kind==="cut"?"practice.cutFirst":"practice.weldFirst"));return}this._setArc(!1),this.cycle&&this._endSpot(!1,this.engine.time),this.state="review",this.renderHud(!0),this.process==="SMAW"?this._slag():this._results()}}_slag(){this.panels.show({kicker:this._kicker(),title:I("practice.slagTitle"),body:I("practice.slagBody"),buttons:[{label:I("practice.chip"),onClick:async()=>{this.panels.hide(),await this.engine.tween(1.6,t=>this.bead.setSlagVisibleFrom(t)),this.active&&this._results()}}]})}_evaluate(){if(this.kind==="spot")return this._evaluateSpots();const t=this.m;this.T;const e=[],n=this._coverage();e.push({key:"coverage",level:n>=.92?"good":"bad",text:n>=.92?"good":"bad"});const s=t.latN?Math.sqrt(t.lat2/t.latN):1,r=s<=nx?"good":s<=ix?"ok":"bad";e.push({key:"line",level:r,text:r==="good"?"good":"bad"});const o=t.samples,a=o.length?o.reduce((p,_)=>p+_,0)/o.length:0,c=o.length?Math.sqrt(o.reduce((p,_)=>p+(_-a)**2,0)/o.length):0,[l,h]=this._pace(),d=a<l?"slow":a>h?"fast":"good";e.push({key:"pace",level:d==="good"?"good":"bad",text:d});const f=a>0?c/a:1,u=f<=sx?"good":f<=rx?"ok":"bad";if(e.push({key:"steady",level:u,text:u==="good"?"good":"bad"}),t.dN>20&&this.kind!=="seam"){const p=t.dGood/t.dN,_=p>=.75?"good":p>=.5?"ok":"bad";e.push({key:"distance",level:_,text:_==="good"?"good":t.dFar>=t.dClose?"far":"close"})}return this._rate(e)}_evaluateSpots(){const t=this.T,e=this.m.spots,n=this.marks,s=d=>Math.min(...n.map(f=>Math.hypot(d.x-f.x,d.z-f.z))),r=n.filter(d=>e.some(f=>Math.hypot(f.x-d.x,f.z-d.z)<t.spotTol*2.2)).length,o=[];o.push({key:"count",level:r===n.length?"good":"bad",text:r===n.length?"good":"bad"});const a=e.length?e.reduce((d,f)=>d+s(f),0)/e.length:1,c=a<=t.spotTol?"good":a<=t.spotTol*2?"ok":"bad";o.push({key:"place",level:c,text:c==="good"?"good":"bad"});const l=e.every(d=>d.full);o.push({key:"hold",level:l?"good":"bad",text:l?"good":"bad"});const h=e.every(d=>d.moved<t.moveTol);return o.push({key:"still",level:h?"good":"bad",text:h?"good":"bad"}),this._rate(o)}_rate(t){const e=t.filter(s=>s.level==="bad").length,n=t.filter(s=>s.level==="good").length;return{rows:t,title:n===t.length?"great":e===0?"good":"keep"}}_pace(){const t=this.T.pace,e=this.kind==="flame"?Ds[this.material].heat:1;return[t[0]*e,t[1]*e]}_results(){const t=this._evaluate();sd({type:"weld",env:this.game.env.id,process:this.process,material:this.material,rating:t.title}),this.game.lastWeld={process:this.process,material:this.material,rating:t.title},this.result=t,this._showResults()}_showResults(){const t=this.result;this._xsClear(),this.state="review";const e=this._materials().length>1;this.panels.show({kicker:this._kicker(),title:I(`practice.resultTitle.${t.title}`),options:t.rows.map(n=>({text:this._fb(n.key,n.text),mark:n.level==="good"?I("practice.markGood"):I("practice.markTip"),state:n.level==="good"?"correct":n.level==="bad"?"wrong":null,disabled:!0})),source:`${I("practice.soldamatic")} ${I("practice.note")}`,buttons:[...this._processes().length>1?[{label:I("practice.change"),style:"secondary",onClick:()=>this._choose()}]:[],...e?[{label:I("practice.changeMaterial"),style:"secondary",onClick:()=>this._chooseMaterial(this.process)}]:[],{label:I("practice.done"),style:"secondary",onClick:()=>this.exit()},{label:I("practice.xs.open"),style:"secondary",onClick:()=>this._crossSection()},{label:I("practice.again"),onClick:()=>{this.panels.hide(),this._beginPass()}}]})}_xsCuts(){const t=this.seam,e=this.T;if(this.kind==="spot")return this.marks.map((r,o)=>{let a=null,c=1/0;for(const h of this.m.spots){const d=Math.hypot(h.x-r.x,h.z-r.z);d<c&&(c=d,a=h)}const l=[];return!a||c>=e.spotTol*2.2?l.push("none"):(a.full||l.push("short"),a.moved>e.moveTol&&l.push("moved"),c>e.spotTol&&l.push("off")),{x:r.x,label:I("practice.xs.spot").replace("{n}",o+1),codes:l,offSign:a&&a.z<r.z?-1:1}});const[n,s]=this._pace();return[.1,.3,.5,.7,.9].map((r,o)=>{const a=t.x0+r*(t.x1-t.x0),c=Math.min(this.m.bins.length-1,Math.floor((a-t.x0)/ai)),l=this.m.slices[c]||this.m.slices[c-1]||this.m.slices[c+1],h=[];let d=1;if(!l||!l.n)h.push("none");else{const f=l.v/l.n,u=l.lat/l.n;d=u<0?-1:1,this.kind==="cut"?l.through?f<n&&h.push("slow"):h.push("fast"):f<n?h.push("slow"):f>s&&h.push("fast"),Math.abs(u)>$o&&h.push("off"),this.kind==="arc"&&l.rough>.3&&h.push("far")}return{x:a,label:I(`practice.xs.pos.${o}`),codes:h,offSign:d}})}_xsText(t){for(const e of[`practice.xs.find.${this.process}.${t}`,`practice.xs.find.${this.kind}.${t}`,`practice.xs.find.arc.${t}`]){const n=I(e);if(n!==e)return n}return t}_crossSection(t=null){const e=this._xsCuts();t==null&&(t=e.findIndex(l=>l.codes.length),t<0&&(t=Math.floor(e.length/2)));const n=e[t];this._xsMark(n.x);const s={};for(const l of["base","weld","haz","pores","unfusedRoot","excess","lackFusion","notJoined","filler","flowed","noFlow","heavyFillet","kerf","dross","notCut","notThrough","line","nugget","smallNugget","expulsion","deepMark","mark","illustration"])s[l]=I(`practice.xs.label.${l}`);const r=Ds[this.material],o=this._beadColors()[0];this.xsCanvas=this.xsCanvas||document.createElement("canvas"),$v(this.xsCanvas,{kind:this.kind,process:this.process,codes:n.codes,offSign:n.offSign,labels:s,plate:r.plate,weld:this.kind==="spot"||this.kind==="seam"?r.plate:o,seed:7+t});const a=!n.codes.length,c=a?[this._xsText("good")]:n.codes.map(l=>this._xsText(l));this.state="review",this.panels.show({kicker:this._kicker(),title:I("practice.xs.title"),body:this.engine.isVR?I("practice.xs.bodyShort"):[I(`practice.xs.body.${this.kind}`),I("practice.xs.pick")],figure:this.xsCanvas,feedback:{ok:a,title:`${n.label} · ${I(a?"practice.xs.ok":"practice.xs.check")}`,text:c.join(" ")},options:e.map((l,h)=>({text:l.label+(h===t?` · ${I("practice.xs.shown")}`:""),mark:l.codes.length?I("practice.markTip"):I("practice.markGood"),state:l.codes.length?"wrong":"correct"})),onOption:l=>this._crossSection(l),source:I("practice.xs.note"),buttons:[{label:I("practice.xs.back"),style:"secondary",onClick:()=>this._showResults()},{label:I("practice.again"),onClick:()=>{this.panels.hide(),this._beginPass()}}]})}_xsMark(t){this.xsMarker||(this.xsMarker=new Y(new Le(1,1,1),new fe({color:16726831,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1})),this.xsMarker.renderOrder=959);const e=this.seam,n=this.xsMarker;n.scale.set(.0012,this.thick+.02,e.maxZ-e.minZ+.02),n.position.set(t,this.top-this.thick/2,(e.minZ+e.maxZ)/2),this.root.add(n)}_xsClear(){var t;(t=this.xsMarker)==null||t.removeFromParent()}_buildHud(){this.hudCov=Z("div.value",{text:"0%"}),this.hudBar=Z("div"),this.hudProc=Z("div.value",{text:"–"}),this.hudMat=Z("div.value",{text:"–"}),this.hudCovLabel=Z("div.label",{text:I("practice.progress.weld")}),this.hudHint=Z("div.hint-text",{text:""});const t=Z("button.btn.secondary",{text:I("practice.soundOn"),onclick:()=>{this.audio.ensure(),this.audio.setMuted(!this.audio.muted),t.textContent=this.audio.muted?I("practice.soundOff"):I("practice.soundOn")}}),e=()=>this.state==="weld"||this.state==="review";this.hudActions=Z("div.hud-actions",{},t,this._processes().length>1?Z("button.btn.secondary",{text:I("practice.change"),onclick:()=>{e()&&this._choose()}}):null,this._materials().length>1?Z("button.btn.secondary",{text:I("practice.changeMaterial"),onclick:()=>{e()&&this._chooseMaterial(this.process)}}):null,Z("button.btn.secondary",{text:I("practice.exit"),onclick:()=>this.exit()}),Z("button.btn",{text:I("practice.finishPass"),onclick:()=>this._finishPass()})),this.game.vrSupported&&this.hudActions.prepend(Z("button.btn.secondary",{text:I("app.enterVr"),onclick:()=>this.game._enterVR()})),this.hudWalk=Z("div.hud-actions",{},Z("button.btn",{text:I("practice.skip"),onclick:()=>this._skipWalk()})),this.hudChips=Z("div",{style:"display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end"},Z("div.hud-chip",{},Z("div",{},Z("div.label",{text:I("practice.kicker")}),this.hudProc)),Z("div.hud-chip",{},Z("div",{},Z("div.label",{text:I("practice.material")}),this.hudMat)),Z("div.hud-chip",{},Z("div",{},this.hudCovLabel,this.hudCov),Z("div.cov-bar",{},this.hudBar))),this.hud=Z("div",{},Z("div.hud-top",{},Z("div.hud-chip",{},Z("img.hud-logo",{src:rs,alt:"Seabery"})),this.hudChips),Z("div.hud-bottom",{},this.hudHint,this.hudActions,this.hudWalk)),this.game.uiRoot.prepend(this.hud)}_progress(){if(this.kind==="spot"&&this.m&&this.marks){const e=this.marks.filter(n=>this.m.spots.some(s=>s.full&&Math.hypot(s.x-n.x,s.z-n.z)<this.T.spotTol*2.2)).length;return{pct:Math.round(e/this.marks.length*100),text:`${e}/${this.marks.length}`}}const t=Math.round(this._coverage()*100);return{pct:t,text:`${t}%`}}renderHud(t=!1){if(!this.active)return;const e=this.state==="walk",n=this._progress(),s=this.torch?this._pName():"–",r=I(`practice.progress.${this.kind==="cut"?"cut":this.kind==="spot"?"spot":"weld"}`);this.hud&&(this.hudCov.textContent=n.text,this.hudBar.style.width=`${n.pct}%`,this.hudProc.textContent=s,this.hudMat.textContent=this.torch?this._mName():"–",this.hudCovLabel.textContent=r,this.hudHint.textContent=e?I("practice.walking"):this.torch?this._how():"",this.hudHint.style.visibility=this.hudHint.textContent?"":"hidden",this.hudActions.style.display=e?"none":"",this.hudWalk.style.display=e?"":"none",this.hudChips.style.visibility=e?"hidden":"",this.hud.style.display=this.engine.isVR?"none":"");const o=this.game.vrHud,a=this.engine.isVR&&(this.state==="weld"||e),c=`${n.text}|${s}|${this.game.lastMsg}|${a}|${this.state}`;if(!(!t&&c===this._hudKey)&&(this._hudKey=c,o.mesh.visible=a,!!a)){if(e){o.render({kicker:I(`env.${this.game.env.id}.name`),title:I("practice.walking"),buttons:[{label:I("practice.skip"),onClick:()=>this._skipWalk()}]});return}o.render({kicker:`${I("practice.kicker")} · ${this._mName()}`,title:s,body:[`${r} ${n.text}`,this.game.lastMsg].filter(Boolean),buttons:[{label:I("practice.finishPass"),onClick:()=>this._finishPass()},{label:I("practice.exit"),style:"secondary",onClick:()=>this.exit()}]})}}_coverage(){return this.m?this.kind==="spot"?this._progress().pct/100:this.m.bins.filter(Boolean).length/this.m.bins.length:0}_bindPointer(){const t=this.engine.renderer.domElement,e=new yt,n=new S,s=o=>{const a=t.getBoundingClientRect(),c=o.pointerType==="touch"?70:0;if(e.set((o.clientX-a.left)/a.width*2-1,-((o.clientY-c-a.top)/a.height)*2+1),this.raycaster.setFromCamera(e,this.engine.camera),this.plane.set(Ji,-this.top),!this.raycaster.ray.intersectPlane(this.plane,n))return;const l=this.seam;n.x=Gn.clamp(n.x,l.minX-.12,l.maxX+.12),n.z=Gn.clamp(n.z,l.minZ-.08,l.maxZ+.12),this.pointer.point.copy(n),this.pointer.valid=!0};t.addEventListener("pointerdown",o=>{!this.active||this.engine.isVR||this.state!=="weld"||this.panels.isOpen||this.pointer.down||(s(o),this.pointer.down=!0,this.pointer.id=o.pointerId,this.audio.ensure())}),t.addEventListener("pointermove",o=>{!this.active||this.engine.isVR||this.state==="walk"||this.pointer.down&&o.pointerId!==this.pointer.id||s(o)});const r=o=>{o.pointerId===this.pointer.id&&(this.pointer.down=!1,this.pointer.id=null,this.needRelease=!1)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}_bindXR(){for(const t of this.input.controllers)t.addEventListener("selectstart",()=>{!this.active||t!==this.torchCtrl||(this.trigger=!0,this.audio.ensure())}),t.addEventListener("selectend",()=>{t===this.torchCtrl&&(this.trigger=!1,this.needRelease=!1)})}_rays(t,e){const n=this.torchCtrl;if(!n)return;const s=!t||e&&e.distanceTo(this.spot.center)>.35;n.userData.line.visible=n.userData.dot.visible=s}_restoreRays(){for(const t of this.input.controllers)t.userData.line.visible=t.userData.dot.visible=!0}_haptic(t,e){var s,r,o,a,c;const n=(r=(s=this.torchCtrl)==null?void 0:s.userData.source)==null?void 0:r.gamepad;try{(c=(a=(o=n==null?void 0:n.hapticActuators)==null?void 0:o[0])==null?void 0:a.pulse)==null||c.call(a,t,e)}catch{}}_setArc(t){var e;t!==this.arcOn&&(this.arcOn=t,(e=this.arc)==null||e.set(t),this.lastDep=null,this.prevPool=null,this.m&&(this.m.win=null),t||this.audio.update(!1))}_update(t,e){var d,f;for(const u of[...this.anims]){u.t+=t;const p=Math.min(1,u.t/u.dur);u.fn(p,u.t),p>=1&&(this.anims.splice(this.anims.indexOf(u),1),u.res())}if(this.state==="walk"||!this.active){this.helmet.update(t,0);return}const n=this.T,s=this.engine.isVR,r=this.state==="weld"&&!this.panels.isOpen;let o=null;if(this.torch){const u=this.torch.group;if(s)this.torchCtrl||this._mountTorch(),this.torchCtrl&&u.position.copy(Ir).multiplyScalar(-this.torch.handY());else{const p=this.pointer.down&&r?n.gap??ex:Gc;this.pcLift+=(p-this.pcLift)*Math.min(1,t*18),u.position.set(this.pointer.point.x,this.top+this.pcLift,this.pointer.point.z)}u.updateWorldMatrix(!0,!1),o=new S().setFromMatrixPosition(u.matrixWorld),s&&this._rays(r,o)}const a=this.seam,c=o?o.y-this.top:1,l=!!o&&o.x>a.minX&&o.x<a.maxX&&o.z>a.minZ&&o.z<a.maxZ;if(this.kind==="spot"?this._updateSpot(t,e,o,c,l,r,s):this._updateLine(t,e,o,c,l,r,s),(f=(d=this.torch)==null?void 0:d.flame)==null||f.update(e,this.state==="weld"),this.heat){for(let u=0;u<this.heat.length;u++)this.heat[u]=Math.max(0,this.heat[u]-t*.22);this.heatGlow.update(this.heat)}if(this.kind==="flame"&&this.state==="weld"&&!this.arcOn&&this.audio.update(!0,0,.35),this.filler&&!s&&o){const u=this.arcOn&&Math.sin(e*5)>.2?0:.005;this.filler.group.position.set(o.x+.007,this.top+.0015+u+(this.arcOn?0:.015),o.z+.002)}this.sparks.update(t),this.fume.update(t),this.bead.update(e);const h=tx[this.kind];this.helmet.update(t,this.state==="weld"&&!this.panels.isOpen?h[this.arcOn?1:0]:0),this.state==="weld"&&!this.arcOn&&this._coverage()>=.95&&(this.idle+=t,this.idle>.8&&this._finishPass()),(this._hudT=(this._hudT||0)+t)>.2&&(this._hudT=0,this.renderHud())}_updateLine(t,e,n,s,r,o,a){var w,R;const c=this.T,l=this.seam,h=this.kind;this.swapAt&&e>=this.swapAt&&(this.torch.setLength(c.L0),this.swapAt=0);let d=!1;if(o&&r&&!this.needRelease&&!this.swapAt&&(a?d=this.trigger&&(this.arcOn?s<c.lose:s<c.strike):d=this.pointer.down),d&&a&&c.touch!=null&&s<c.touch&&(d=!1,this.needRelease=!0,this._haptic(1,180),this.game._notify(I(this.process==="SMAW"?"practice.stuck":"practice.tungsten"))),this.arcOn&&!d&&a&&o&&this.trigger&&!this.needRelease&&s>=c.lose&&(this.needRelease=!0,this.game._notify(I(h==="flame"?"practice.lostFlame":h==="seam"?"practice.lostContact":"practice.lost"))),this._setArc(d),!this.arcOn){this.prevTipX=n?n.x:null;return}const f=this.m,u=new S(n.x,this.top,n.z);let p=0;a&&h!=="seam"&&(f.dN++,s>c.win[1]?(f.dFar++,p=Math.min(1,(s-c.win[1])/(c.lose-c.win[1]))):s<c.win[0]?f.dClose++:f.dGood++),this.arc.update(n,u,c.arc,p>.3),h==="seam"&&this.prevTipX!=null&&((R=(w=this.torch).roll)==null||R.call(w,n.x-this.prevTipX)),this.prevTipX=n.x;const _=this.prevPool?Math.hypot(u.x-this.prevPool.x,u.z-this.prevPool.z):0;this.vs+=(_/Math.max(t,1e-4)-this.vs)*(1-Math.exp(-t/.3)),this.prevPool=u.clone();const[g,m]=this._pace(),b=(g+m)/2,x=Gn.clamp(Math.sqrt(b/Math.max(this.vs,.002)),.55,1.8);let v=!0;if(h==="flame"){const k=c.heatRate*Ds[this.material].heat*(Math.abs(u.z-l.z)<$o*2?1:.4);for(let F=0;F<this.heat.length;F++){const q=l.minX+(F+.5)*ai,H=Math.abs(q-u.x);H<c.heatR&&(this.heat[F]=Math.min(1.4,this.heat[F]+k*t*(1-H/c.heatR)))}const D=Math.floor((u.x-l.minX)/ai);v=(this.heat[Gn.clamp(D,0,this.heat.length-1)]||0)>=1}const N=h!=="cut"||this.vs<=m*1.3,C=c.spacing||.0012;v||(this.lastDep=null),this.lastDep||(this.lastDep=u.clone().addScaledVector(new S(1,0,0),-C*1.01));let P=Math.hypot(u.x-this.lastDep.x,u.z-this.lastDep.z);P<C&&v&&h!=="cut"&&h!=="seam"&&this.bead.growLast(t);const E=this._beadColors();let y=0;for(;v&&P>=C&&y++<200;){const k=new S(u.x-this.lastDep.x,0,u.z-this.lastDep.z).normalize(),D=this.lastDep.clone().addScaledVector(k,C),F=D.clone(),q=p*.0016;F.x+=(Math.random()-.5)*q,F.z+=(Math.random()-.5)*q;const H=Math.atan2(-k.z,k.x),tt=this.bead.items.length;if(h==="seam")this.bead.add(F,c.w,c.w*c.hr,H,E[tt%2],e);else if(h==="cut"){const ct=c.w*Gn.clamp(x,.8,1.7);this.bead.add(F,ct,N?c.w*c.hr:c.w*.05,H,N?E[tt%2]:5593180,e)}else{const ct=tt%4<2?1:.92;this.bead.add(F,c.w*x*(1+p*.3)*ct,c.w*c.hr*Math.sqrt(x)*(1-p*.3),H,E[tt%4<2?0:1],e)}this.lastDep=D;const z=D.z-l.z;if(f.lat2+=z*z,f.latN++,D.x>=l.x0&&D.x<=l.x1){const ct=Math.min(f.bins.length-1,Math.floor((D.x-l.x0)/ai)),xt=f.slices[ct]||(f.slices[ct]={n:0,v:0,lat:0,rough:0,through:!0});xt.n++,xt.v+=this.vs,xt.lat+=z,xt.rough=Math.max(xt.rough,p),N||(xt.through=!1)}N&&Math.abs(z)<$o&&D.x>=l.x0&&D.x<=l.x1&&(f.bins[Math.min(f.bins.length-1,Math.floor((D.x-l.x0)/ai))]=!0),P-=C}if(f.win||(f.win={t:0,x:u.x,first:!0}),f.win.t+=t,f.win.t>=.25&&(f.win.first||f.samples.push(Math.abs(u.x-f.win.x)/f.win.t),f.win={t:0,x:u.x,first:!1}),!this.wet&&c.sparks){const k=c.sparks*(1+p*2),D=Math.floor(k*t+Math.random());h==="cut"?N?this.sparks.emit(D,new S(u.x,this.top-this.thick,u.z),"down"):this.sparks.emit(D,u,"up"):this.sparks.emit(D,u)}this.fume.emit(this.wet?18:c.fume,t,u),this.audio.update(!0,p),a&&(this._hapT=(this._hapT||0)+t)>.05&&(this._hapT=0,this._haptic(.12+Math.random()*.15+p*.3,45)),this.process==="SMAW"&&(this.torch.setLength(this.torch.length-c.burn*t),this.torch.length<=c.Lmin&&(this._setArc(!1),this.needRelease=!0,this.swapAt=e+1.2,this.game._notify(I("practice.electrodeUsed")))),this.idle=0}_updateSpot(t,e,n,s,r,o,a){const c=this.T,l=o&&r&&!this.needRelease&&(a?this.trigger&&s<c.strike:this.pointer.down);l&&!this.cycle&&(this.cycle={t:0,at:new S(n.x,this.top,n.z),moved:0,burst:!1},this._setArc(!0));const h=this.cycle;if(!h)return;if(!l){this._endSpot(!1,e);return}h.t+=t,h.moved=Math.max(h.moved,Math.hypot(n.x-h.at.x,n.z-h.at.z));const d=Math.min(1,h.t/c.cycle);this.arc.update(n,h.at,c.arc*(.3+.7*d),!1),this.audio.update(!0,0,.5+.5*d),a&&(this._hapT=(this._hapT||0)+t)>.06&&(this._hapT=0,this._haptic(.2+.3*d,50)),h.moved>c.moveTol&&!h.burst&&!this.wet&&(h.burst=!0,this.sparks.emit(40,h.at)),h.t>=c.cycle&&this._endSpot(!0,e),this.idle=0}_endSpot(t,e){const n=this.cycle;if(!n)return;const s=this.T,r=this._beadColors();this.bead.add(n.at,s.w*(t?1:.6),s.w*s.hr,0,r[0],e),this.m.spots.push({x:n.at.x,z:n.at.z,full:t,moved:n.moved}),this.cycle=null,this._setArc(!1),t?(this.needRelease=!0,this._haptic(.6,60)):this.game._notify(I("practice.spotShort"))}_beadColors(){const t=this.T,e=Ds[this.material];if(this.kind==="spot"||this.kind==="seam"){const n=new le(e.plate).multiplyScalar(.45).lerp(new le(3878953),.3).getHex();return[n,new le(n).multiplyScalar(.92).getHex()]}return t.fixedMetal||!e.bead?t.metal:e.bead}}const Dr=[{id:"factory",icon:Rr.factory,build:Tv,content:Iv,available:!0},{id:"construction",icon:Rr.construction,build:Rv,content:Dv,available:!0},{id:"shipyard",icon:Rr.shipyard,build:Pv,content:Uv,available:!0},{id:"underwater",icon:Rr.underwater,build:Lv,content:Nv,available:!0}],ax=i=>{const t=[...Array(i).keys()];for(let e=i-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};class lx{constructor({engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}){Object.assign(this,{engine:t,input:e,panels:n,uiRoot:s,vrSupported:r}),this.world=null,this.env=null,this.layer=Z("div"),this.hud=null,s.append(this.layer),e.onSelect=o=>this._onSelect(o),e.addEventListener("hover",o=>this._onHover(o.detail)),t.updaters.add((o,a)=>this._update(o,a)),t.addEventListener("vrstart",()=>{this._renderHud(),this.phase==="practice"&&this.practice.onModeChange()}),t.addEventListener("vrend",()=>{this._renderHud(),this.phase==="results"&&(this.panels.hide(),this._resultsScreen()),this.phase==="practice"&&this.practice.onModeChange()}),this.vrHud=new Qh({widthM:.26,px:640,maxH:700,compact:!0}),this.vrHud.mesh.position.set(0,.09,.02),this.vrHud.mesh.rotation.set(-1,0,0),this.vrHud.mesh.visible=!1,e.uiMeshes.add(this.vrHud.mesh),e.addEventListener("controller",o=>{const{grip:a,handedness:c}=o.detail;(c==="left"||!this.vrHud.mesh.parent)&&a.add(this.vrHud.mesh)}),this.markerTex=Mv(),this.markers=[],this.practice=new ox(this)}showMenu(){const t=zc();this.phase="menu",this._clearWorld(),this.panels.hide(),this._hideHud(),this.layer.replaceChildren(Z("div.screen",{},Z("img.logo",{src:rs,alt:"Seabery"}),Z("div.kicker",{text:I("app.kicker")}),Z("h1",{text:I("app.title")}),Z("p.lead",{text:I("app.lead")}),Z("div.env-grid",{},Dr.map(e=>{const n=Z("button.env-card",{disabled:!e.available,onclick:()=>this.startEnv(e.id)});n.innerHTML=`<span class="env-icon">${e.icon}</span>`;const s=t[e.id];return n.append(Z("span.tag",{text:e.available?s?`${I("app.best",{score:Math.round(s.score*100)})}${s.pass?" · ✓":""}`:I("app.available"):I("app.comingSoon")}),Z("h3",{text:I(`env.${e.id}.name`)}),Z("p",{text:I(`env.${e.id}.desc`)})),n})),Z("button.btn.secondary.menu-records",{text:I("app.myResults"),onclick:()=>this.showRecords()}),Z("div.howto",{},Z("div",{},Z("b",{text:I("app.howtoPc")}),I("app.howtoPcText")),Z("div",{},Z("b",{text:I("app.howtoTablet")}),I("app.howtoTabletText")),Z("div",{},Z("b",{text:I("app.howtoVr")}),I("app.howtoVrText"))),Z("p.draft-note",{text:I("app.draftNote")})))}async startEnv(t){const e=Dr.find(n=>n.id===t);this.env=e,this.layer.replaceChildren(Z("div.screen",{},Z("img.logo",{src:rs,alt:"Seabery"}),Z("p.lead",{text:I("app.loading")}),Z("div.loader",{},Z("div")))),await new Promise(n=>setTimeout(n,60)),this._clearWorld(),this.world=e.build(this.engine),this._applyAtmosphere(this.world.atmosphere),this.engine.scene.add(this.world.root),this.engine.shadowsDirty(),this.input.setWorld(this.world),this.state={hazards:{},ppe:{},quiz:[],hints:0},this.lastWeld=null,this.hintOn=!1,this._buildMarkers(),this.layer.replaceChildren(),this.phase="explore",this._showHud(),this.input.locked=!1,this._brief()}_applyAtmosphere(t={}){const e=this.engine.scene;e.background=new le(t.background??1713459);const[n,s,r]=t.fog||[2766146,22,48];e.fog=new Qr(n,s,r),e.environmentIntensity=t.envIntensity??.35,this.engine.renderer.toneMappingExposure=t.exposure??1}_brief(){const t=[{label:I("app.start"),onClick:()=>this.panels.hide()}];this.vrSupported&&!this.engine.isVR&&t.unshift({label:I("app.enterVr"),style:"secondary",onClick:()=>this._enterVR()}),this.panels.show({kicker:I(`env.${this.env.id}.name`),title:I("brief.title"),body:[I(`env.${this.env.id}.brief`,{count:this.env.content.hazards.length}),I("brief.tip")],buttons:t})}async _enterVR(){try{await this.engine.enterVR()}catch(t){console.warn(t),this._notify(I("app.vrUnsupported"))}}_clearWorld(){this.practice.active&&this.practice.stop(),this.world&&(this.engine.scene.remove(this.world.root),this.world=null),this.input.world=null,this.input.locked=!0;for(const t of this.markers)t.removeFromParent();this.markers=[]}_showHud(){var n;this._hideHud();const t=this.hud=Z("div");this.hoverLabel=Z("div.hover-label"),this.hudHazards=Z("div.value"),this.hudDots=Z("div.progress-dots"),this.hudPpe=Z("div.value");const e=Z("div.hud-actions",{},Z("button.btn.secondary",{text:I("hud.hint"),onclick:()=>this._toggleHint()}),(n=this.world)!=null&&n.weldSpot?Z("button.btn.secondary",{text:I("practice.startWelding"),onclick:()=>this._weldNow()}):null,Z("button.btn",{text:I("hud.finish"),onclick:()=>this._finish()}));e.prepend(Z("button.btn.secondary",{text:I("app.worksites"),onclick:()=>this._changeWorksite()})),this.vrSupported&&e.prepend(Z("button.btn.secondary",{text:I("app.enterVr"),onclick:()=>this._enterVR()})),t.append(Z("div.hud-top",{},Z("div.hud-chip",{},Z("img.hud-logo",{src:rs,alt:"Seabery"})),Z("div",{style:"display:flex;gap:10px"},Z("div.hud-chip",{},Z("div",{},Z("div.label",{text:I("hud.hazards")}),this.hudHazards),this.hudDots),Z("div.hud-chip",{},Z("div",{},Z("div.label",{text:I("hud.ppe")}),this.hudPpe)))),Z("div.hud-bottom",{},Z("div.hint-text",{text:matchMedia("(pointer:coarse)").matches?I("app.howtoTabletText"):I("app.howtoPcText")}),e),this.hoverLabel),this.uiRoot.prepend(t),this._renderHud()}_hideHud(){this.hud&&(this.hud.remove(),this.hud=null),this.vrHud.mesh.visible=!1}_counts(){const t=this.env.content,e=t.hazards.filter(s=>{var r;return(r=this.state.hazards[s.id])==null?void 0:r.found}).length,n=t.ppe.filter(s=>this.state.ppe[s.id]).length;return{found:e,total:t.hazards.length,ppe:n,ppeTotal:t.ppe.length}}_renderHud(){var e;if(this.phase==="practice"){this.practice.renderHud(!0);return}if(!this.env||!this.state||this.phase!=="explore"){this.vrHud.mesh.visible=!1;return}const t=this._counts();this.hud&&(this.hudHazards.textContent=`${t.found}/${t.total}`,this.hudDots.replaceChildren(...this.env.content.hazards.map(n=>{var s;return Z(`span${(s=this.state.hazards[n.id])!=null&&s.found?".done":""}`)})),this.hudPpe.textContent=`${t.ppe}/${t.ppeTotal}`,this.hud.style.display=this.engine.isVR?"none":""),this.vrHud.mesh.visible=this.engine.isVR,this.vrHud.render({kicker:I(`env.${this.env.id}.name`),title:`${I("hud.hazards")} ${t.found}/${t.total}`,body:[`${I("hud.ppe")} ${t.ppe}/${t.ppeTotal}`,this.lastMsg].filter(Boolean),buttons:[{label:I("hud.hint"),style:"secondary",onClick:()=>this._toggleHint()},{label:I("app.worksites"),style:"secondary",onClick:()=>this._changeWorksite()},...(e=this.world)!=null&&e.weldSpot?[{label:I("practice.startWelding"),style:"secondary",onClick:()=>this._weldNow()}]:[],{label:I("hud.finish"),onClick:()=>this._finish()}]})}_notify(t){_v(this.uiRoot,t),this.lastMsg=t,this._renderHud(),clearTimeout(this._msgTimer),this._msgTimer=setTimeout(()=>{this.lastMsg=null,this._renderHud()},6e3)}_onHover(t){if(!this.hoverLabel)return;if(!t){this.hoverLabel.style.display="none";return}const e=t.item.id;this.hoverLabel.textContent=I(e==="PPE"?`env.${this.env.id}.ppeLabel`:`hazards.${e}.label`),this.hoverLabel.style.left=t.x+"px",this.hoverLabel.style.top=t.y+"px",this.hoverLabel.style.display="block"}_buildMarkers(){for(const t of Object.values(this.world.interactables)){const e=new ss(new to({map:this.markerTex,depthTest:!1,transparent:!0}));e.scale.setScalar(.32),e.position.copy(t.anchor),e.renderOrder=900,e.visible=!1,e.userData.item=t,this.engine.scene.add(e),this.markers.push(e)}}_toggleHint(){this.hintOn=!this.hintOn,this.hintOn&&(this.state.hints++,this._notify(I("hud.hintShown")))}_update(t,e){this.world&&this.world.update(t,e);for(const n of this.markers)n.visible=this.hintOn&&!n.userData.item.done&&this.phase==="explore",n.visible&&(n.position.y=n.userData.item.anchor.y+Math.sin(e*3)*.05,n.scale.setScalar(.3+Math.sin(e*6)*.02))}_onSelect(t){this.phase==="explore"&&(t.kind==="hazard"?this._hazardPanel(t):t.kind==="ppe"&&this._ppePanel(t))}_mcq(t,{onAnswer:e,actionLabel:n,onAction:s,closable:r=!0}){const o=ax(t.options.length),a=c=>{const l=c!=null,h=c===t.correct;this.panels.show({kicker:t.kicker,title:l&&t.answeredTitle?t.answeredTitle:t.question,options:o.map(d=>({text:t.options[d],state:l?d===t.correct?"correct":d===c?"wrong":null:null,disabled:l})),onOption:l?null:d=>{const f=o[d];e&&e(f===t.correct),a(f)},feedback:l?{ok:h,title:I(h?"panel.correct":"panel.notQuite"),text:t.why}:null,source:l&&t.source?`${I("panel.basedOn")}: ${t.source}`:null,buttons:l?[{label:n,onClick:s}]:r?[{label:I("app.close"),style:"secondary",onClick:()=>this.panels.hide()}]:[]})};a(null)}_hazardPanel(t){const e=this.env.content.hazards.find(s=>s.id===t.id),n=I(`hazards.${t.id}`);this._mcq({kicker:`${I("hud.inspect")} · ${n.label}`,question:I("panel.whatsWrong"),answeredTitle:n.name,options:n.options,correct:e.correct,why:n.why,source:n.source},{onAnswer:s=>{this.state.hazards[t.id]={found:!0,firstTry:s},this._renderHud()},actionLabel:I("panel.fix"),onAction:async()=>{this.panels.hide(),t.done=!0,t.setHighlight(!1),await t.fix(),this._notify(I("hud.fixed",{name:n.name}));const s=this._counts();s.found===s.total&&setTimeout(()=>this._notify(I("hud.allFound")),1200)}})}_ppePanel(t){const e=this.env.content.ppe,n=e.find(o=>this.state.ppe[o.id]===void 0);if(!n)return;const s=I(`ppe.items.${n.id}`),r=e.indexOf(n);this._mcq({kicker:`${I("ppe.title")} · ${r+1}/${e.length}`,question:s.q,options:s.options,correct:n.correct,why:s.why,source:s.source},{onAnswer:o=>{this.state.ppe[n.id]=o,this._renderHud()},actionLabel:r<e.length-1?I("app.continue"):I("app.close"),onAction:()=>{if(r<e.length-1){this._ppePanel(t);return}this.panels.hide(),t.done=!0,t.setHighlight(!1),this._notify(I("hud.ppeDone"))}})}_finish(){if(this.phase!=="explore")return;const t=this._counts();t.found<t.total||t.ppe<t.ppeTotal?this.panels.show({title:I("finishConfirm.title"),body:I("finishConfirm.body",t),buttons:[{label:I("finishConfirm.keep"),style:"secondary",onClick:()=>this.panels.hide()},{label:I("finishConfirm.finish"),onClick:()=>this._quizIntro()}]}):this._quizIntro()}_quizIntro(){this.phase="quiz",this.hintOn=!1,this._renderHud(),this.panels.show({title:I("quizIntro.title"),body:I("quizIntro.body",{count:this.env.content.quiz.length}),buttons:[{label:I("app.start"),onClick:()=>this._quizQuestion(0)}]})}_quizQuestion(t){const e=I(`quizzes.${this.env.id}`)[t],n=this.env.content.quiz.length;this._mcq({kicker:I("panel.question",{n:t+1,total:n}),question:e.q,options:e.options,correct:this.env.content.quiz[t],why:e.why,source:e.source},{closable:!1,onAnswer:s=>{this.state.quiz[t]=s},actionLabel:t<n-1?I("app.continue"):I("results.title"),onAction:()=>t<n-1?this._quizQuestion(t+1):this._results()})}_score(){const t=this.env.content,e=this.state,n=t.hazards.map(d=>{const f=e.hazards[d.id];return{id:d.id,name:I(`hazards.${d.id}.name`),status:f?f.firstTry?"ok":"part":"miss"}}),s=t.ppe.map(d=>({id:d.id,name:I(`ppe.items.${d.id}.q`),status:e.ppe[d.id]===void 0?"miss":e.ppe[d.id]?"ok":"part"})),r=e.quiz.filter(Boolean).length,o=n.reduce((d,f)=>d+(f.status==="ok"?1:f.status==="part"?.5:0),0)+s.filter(d=>d.status==="ok").length+r,a=n.length+s.length+t.quiz.length,c=o/a,l=n.every(d=>d.status!=="miss")&&s.every(d=>d.status!=="miss"),h=s.every(d=>d.status==="ok");return{hz:n,pp:s,quizOk:r,quizTotal:t.quiz.length,score:c,pass:l&&h&&c>=t.passScore}}_results({record:t=!0}={}){this.phase="results",this.input.locked=!0,this._renderHud();const e=this.result=t||!this.result?this._score():this.result;if(t){const n=this._counts();if(sd({type:"check",env:this.env.id,score:e.score,pass:e.pass,found:n.found,total:n.total,ppeOk:e.pp.filter(s=>s.status==="ok").length,ppeTotal:e.pp.length,quizOk:e.quizOk,quizTotal:e.quizTotal}),this.world.weldSpot){this._readyToWeld(e);return}}this.engine.isVR?this.panels.show({kicker:I("results.title"),title:e.pass?I("results.passed"):I("results.notPassed"),body:[`${I("results.score")}: ${Math.round(e.score*100)}%`,e.pass?I("results.passText"):I("results.failText"),...this.lastWeld?[`${I("practice.kicker")}: ${I(`practice.processes.${this.lastWeld.process}.name`)} · ${I(`practice.resultTitle.${this.lastWeld.rating}`)}`]:[]],buttons:[{label:I("results.retry"),style:e.pass?"secondary":void 0,onClick:()=>{this.panels.hide(),this.startEnv(this.env.id)}},{label:I("app.worksites"),style:"secondary",onClick:()=>this._vrMenu()},{label:I("app.close")+" VR",style:"secondary",onClick:()=>this.engine.exitVR()},{label:this.lastWeld?I("practice.again"):I("practice.startWelding"),onClick:()=>this.startPractice()}]}):(this.panels.hide(),this._resultsScreen())}_readyToWeld(t){this.panels.show({kicker:`${I("results.title")} · ${I(`env.${this.env.id}.name`)}`,title:t.pass?I("results.passed"):I("results.checkDone"),body:[`${I("results.score")}: ${Math.round(t.score*100)}%`,t.pass?I("practice.startJob"):I("practice.startJobReview"),I(`env.${this.env.id}.job`)],buttons:[{label:I("results.seeResults"),style:"secondary",onClick:()=>{this.panels.hide(),this._results({record:!1})}},{label:I("practice.startWelding"),onClick:()=>this.startPractice()}]})}startPractice({from:t="results"}={}){!this.world||!this.world.weldSpot||(this.panels.hide(),this.layer.replaceChildren(),this._hideHud(),this.hintOn=!1,this.phase="practice",this.practice.start({from:t}))}_weldNow(){this.phase==="explore"&&this.panels.show({kicker:I(`env.${this.env.id}.name`),title:I("weldNow.title"),body:[I("weldNow.body"),I(`env.${this.env.id}.job`)],buttons:[{label:I("weldNow.stay"),style:"secondary",onClick:()=>this.panels.hide()},{label:I("practice.startWelding"),onClick:()=>this.startPractice({from:"explore"})}]})}_afterPractice(t){if(t==="explore"){this.phase="explore",this._showHud(),this.input.locked=!1,this._notify(I("weldNow.back"));return}this.phase="results",this.input.locked=!0,this._results({record:!1})}_changeWorksite(){this.phase==="explore"&&this.panels.show({title:I("changeConfirm.title"),body:I("changeConfirm.body"),buttons:[{label:I("changeConfirm.stay"),style:"secondary",onClick:()=>this.panels.hide()},{label:I("changeConfirm.change"),onClick:()=>this.engine.isVR?this._vrMenu():this.showMenu()}]})}_vrMenu(){const t=Dr.filter(n=>n.available),e=zc();this.panels.show({kicker:I("app.title"),title:I("app.chooseEnv"),options:t.map(n=>({text:`${I(`env.${n.id}.name`)}${e[n.id]?" · "+I("app.best",{score:Math.round(e[n.id].score*100)}):""}`})),onOption:n=>{this.panels.hide(),this.startEnv(t[n].id)},buttons:[{label:I("app.close")+" VR",style:"secondary",onClick:()=>{this.panels.hide(),this.engine.exitVR(),this.showMenu()}}]})}showRecords(){this.phase="records",this._clearWorld(),this.panels.hide(),this._hideHud();const t=ml(),e=r=>I(`env.${r}.name`),n=r=>Z("tr",{},Z("td",{text:Ov(r.at)}),Z("td",{text:e(r.env)}),Z("td",{text:r.type==="check"?I("records.check"):`${I("records.weld")} · ${I(`practice.processes.${r.process}.name`)}${r.material?` · ${I(`practice.materials.${r.material}.name`)}`:""}`}),Z("td",{},r.type==="check"?Z(`span.st.${r.pass?"ok":"miss"}`,{text:`${Math.round(r.score*100)}% · ${r.pass?I("records.ready"):I("records.notReady")}`}):Z(`span.st.${r.rating==="great"?"ok":r.rating==="good"?"part":"miss"}`,{text:I(`practice.resultTitle.${r.rating}`)}))),s=t.length?Z("div.table-wrap",{},Z("table.records",{},Z("thead",{},Z("tr",{},["date","worksite","activity","result"].map(r=>Z("th",{text:I(`records.${r}`)})))),Z("tbody",{},t.map(n)))):Z("p",{text:I("records.empty")});this.layer.replaceChildren(Z("div.screen",{},Z("div.results",{},Z("div.kicker",{text:I("app.title")}),Z("h1",{text:I("records.title")}),Z("p.draft-note",{style:"text-align:left;color:#4a5d73;margin:0 0 14px",text:I("records.note")}),s,Z("div.actions",{style:"margin-top:18px"},Z("button.btn",{text:I("records.back"),onclick:()=>this.showMenu()}),t.length?Z("button.btn.secondary",{text:I("records.clear"),onclick:()=>{confirm(I("records.clearConfirm"))&&(kv(),this.showRecords())}}):null))))}async debugPractice(t="factory",e=!1){if(await this.startEnv(Dr.some(s=>s.id===t)?t:"factory"),e){this.panels.hide(),this.startPractice({from:"explore"});return}this.panels.hide();const n=this.env.content;await Promise.all(Object.values(this.world.interactables).map(s=>(s.done=!0,s.kind==="hazard"?s.fix():null)));for(const s of n.hazards)this.state.hazards[s.id]={found:!0,firstTry:!0};for(const s of n.ppe)this.state.ppe[s.id]=!0;this.state.quiz=n.quiz.map(()=>!0),this.result=this._score(),this.startPractice()}_resultsScreen(){const t=this.result;this._hideHud();const e=this._counts(),n={ok:I("results.stOk"),part:I("results.stPart"),miss:I("results.stMiss")},s=r=>Z("li",{},Z(`span.st.${r.status}`,{text:n[r.status]}),Z("span",{text:`${r.name}`}));this.layer.replaceChildren(Z("div.screen",{},Z("div.results",{},Z("div.kicker",{text:`${I("results.title")} · ${I(`env.${this.env.id}.name`)}`}),Z("h1",{text:t.pass?I("results.passed"):I("results.notPassed")}),Z("p",{text:t.pass?I("results.passText"):I("results.failText")}),Z("div.score-row",{},Z("div.score-tile",{},Z("div.n",{text:`${Math.round(t.score*100)}%`}),Z("div.l",{text:I("results.score")})),Z("div.score-tile",{},Z("div.n",{text:`${e.found}/${e.total}`}),Z("div.l",{text:I("results.hazardsFound")})),Z("div.score-tile",{},Z("div.n",{text:`${t.pp.filter(r=>r.status==="ok").length}/${t.pp.length}`}),Z("div.l",{text:I("results.ppeCorrect")})),Z("div.score-tile",{},Z("div.n",{text:`${t.quizOk}/${t.quizTotal}`}),Z("div.l",{text:I("results.quizCorrect")}))),Z("ul.item-list",{},t.hz.map(s),t.pp.map(s)),Z("div.practice-unlock",{},Z("div",{},Z("strong",{text:this.lastWeld?`${I("practice.kicker")}: ${I(`practice.resultTitle.${this.lastWeld.rating}`)}`:I("practice.unlockTitle")}),Z("span",{text:this.lastWeld?`${I(`practice.processes.${this.lastWeld.process}.name`)}${this.lastWeld.material?` · ${I(`practice.materials.${this.lastWeld.material}.name`)}`:""}`:I(`env.${this.env.id}.job`)})),Z("button.btn",{text:this.lastWeld?I("practice.again"):I("practice.startWelding"),onclick:()=>this.startPractice()})),Z("div.actions",{},Z(`button.btn${t.pass?".secondary":""}`,{text:I("results.retry"),onclick:()=>this.startEnv(this.env.id)}),Z("button.btn.secondary",{text:I("app.myResults"),onclick:()=>this.showRecords()}),Z("button.btn.secondary",{text:I("results.menu"),onclick:()=>this.showMenu()})),Z("p.draft-note",{style:"text-align:left;color:#4a5d73",text:`${I("results.sourcesTitle")}: ${I(`env.${this.env.id}.sources`)}`}),Z("p.draft-note",{style:"text-align:left;color:#4a5d73;margin-top:4px",text:I("app.draftNote")}))))}}async function cx(){await cd();try{await Promise.all([document.fonts.load("900 40px Gilroy"),document.fonts.load("500 40px Gilroy"),document.fonts.load('400 40px "PP Supply Mono"')])}catch{}const i=new kc(document.getElementById("scene")),t=new vv(i),e=document.getElementById("ui"),n=new yv(i,t,e),s=await kc.vrSupported(),r=new lx({engine:i,input:t,panels:n,uiRoot:e,vrSupported:s});r.showMenu();const o=new URLSearchParams(location.search);o.has("practice")?r.debugPractice(o.get("practice")||"factory"):o.has("weld")&&r.debugPractice(o.get("weld")||"factory",!0),window.__game=r}cx();
