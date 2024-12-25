(function(){"use strict";var e={7542:function(e,t,n){var o=n(5130),s=n(6768);function i(e,t,n,o,i,a){const r=(0,s.g2)("ActivityView");return(0,s.uX)(),(0,s.Wv)(r)}var a=n(4232);const r={key:0},c={class:"container"},l={class:"row my-3"},d={class:"col"},m={class:"card bg-dark ps-3 py-2 text-light shadow"},u={class:"fw-bold my-auto text-start"},g={class:"row mb-3"},h={class:"col"},v={class:"row mb-3"},p={class:"col"},b={key:1},S={key:1};function f(e,t,n,o,i,f){const y=(0,s.g2)("SongLibrary"),k=(0,s.g2)("SongComplete"),L=(0,s.g2)("PlainTextLayout"),w=(0,s.g2)("AuthComponent");return e.user?((0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("div",c,[(0,s.Lk)("div",l,[(0,s.Lk)("div",d,[(0,s.Lk)("div",m,[(0,s.Lk)("p",u," Welcome, "+(0,a.v_)(e.user.displayName),1)])])]),(0,s.Lk)("div",g,[(0,s.Lk)("div",h,[(0,s.bF)(y)])]),(0,s.Lk)("div",v,[(0,s.Lk)("div",p,[e.activeSong?((0,s.uX)(),(0,s.Wv)(k,{key:0,song:e.activeSong,plainTextActive:i.plainTextActive,onTogglePlainText:f.togglePlainText},null,8,["song","plainTextActive","onTogglePlainText"])):((0,s.uX)(),(0,s.CE)("p",b,"No song selected")),e.activeSong&&i.plainTextActive?((0,s.uX)(),(0,s.Wv)(L,{key:2,song:e.activeSong},null,8,["song"])):(0,s.Q3)("",!0)])])])])):((0,s.uX)(),(0,s.CE)("div",S,[(0,s.bF)(w)]))}const y={class:"card bg-light text-dark mb-5"},k={class:"card-body text-start"},L={class:"card-footer text-end"};function w(e,t,n,o,i,r){return(0,s.uX)(),(0,s.CE)("div",y,[t[1]||(t[1]=(0,s.Lk)("div",{class:"card-header bg-dark text-light"},[(0,s.Lk)("p",{class:"my-auto fw-bold text-start"},"Plain Text Layout")],-1)),(0,s.Lk)("div",k,[(0,s.Lk)("pre",null,(0,a.v_)(r.formattedSong),1)]),(0,s.Lk)("div",L,[(0,s.Lk)("button",{class:"btn btn-primary btn-sm fw-bold",onClick:t[0]||(t[0]=(...e)=>r.copyToClipboard&&r.copyToClipboard(...e))}," Copy to Clipboard ")])])}n(8992),n(3949);var T=n(782),x={name:"PlainTextLayout",computed:{...(0,T.L8)({activeSong:"getActiveSong"}),formattedSong(){if(!this.activeSong)return"";let e=`Title: ${this.activeSong.title}\n`;return e+=`Mood: ${this.activeSong.mood}\n`,e+=`Narrative Outline: ${this.activeSong.narrativeOutline}\n`,e+=`Hook: ${this.activeSong.hook}\n\n`,this.activeSong.sections.forEach((t=>{e+=`${t.type.toUpperCase()} - ${t.chordProgression}\n\n`,t.lines.forEach((t=>{e+=`${t}\n\n`})),e+="\n"})),e}},methods:{copyToClipboard(){const e=document.createElement("textarea");e.value=this.formattedSong,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}},C=n(1241);const E=(0,C.A)(x,[["render",w]]);var A=E;const I={class:"card bg-card text-dark-muted mb-3 shadow-sm"},O={class:"card-body"},_={class:"text-start"},F={class:"row"},N={class:"col"},R={class:"mb-3"},V={class:"col"},P={class:"mb-3"},U=["value"],D={key:0,class:"text-muted ms-2 mb-0"},X={class:"row"},B={class:"col"},H={class:"mb-3"},$={class:"col"},G={class:"mb-3"},M={class:"mb-3"},j={class:"mb-3"},J={class:"card bg-card shadow-sm"},W={class:"card-body"},Q={key:0,class:"mb-3 text-start"},q=["innerHTML"],z=["value"];function K(e,t,n,i,r,c){const l=(0,s.g2)("SongSection");return(0,s.uX)(),(0,s.CE)("div",I,[(0,s.Lk)("div",O,[t[20]||(t[20]=(0,s.Lk)("h1",{class:"fs-4 my-auto fw-bold text-start"},"Song",-1)),t[21]||(t[21]=(0,s.Lk)("hr",null,null,-1)),(0,s.Lk)("div",_,[(0,s.Lk)("div",F,[(0,s.Lk)("div",N,[(0,s.Lk)("div",R,[t[12]||(t[12]=(0,s.Lk)("label",{for:"songTitle",class:"form-label fw-bold"},"Title",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control input-off-white",id:"songTitle","onUpdate:modelValue":t[0]||(t[0]=e=>r.localSong.title=e)},null,512),[[o.Jo,r.localSong.title]])])]),(0,s.Lk)("div",V,[(0,s.Lk)("div",P,[t[14]||(t[14]=(0,s.Lk)("label",{for:"songMood",class:"form-label fw-bold"},"Mood",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select input-off-white",id:"songMood","onUpdate:modelValue":t[1]||(t[1]=e=>r.localSong.mood=e)},[t[13]||(t[13]=(0,s.Lk)("option",{value:"",disabled:""},"Select a mood",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.moods,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.mood,value:e.mood},(0,a.v_)(e.mood),9,U)))),128))],512),[[o.u1,r.localSong.mood]]),c.selectedMoodImplication?((0,s.uX)(),(0,s.CE)("small",D," Musical Implication: "+(0,a.v_)(c.selectedMoodImplication),1)):(0,s.Q3)("",!0)])])]),(0,s.Lk)("div",X,[(0,s.Lk)("div",B,[(0,s.Lk)("div",H,[t[15]||(t[15]=(0,s.Lk)("label",{for:"songHook",class:"form-label fw-bold"},"Hook",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control input-off-white",id:"songHook","onUpdate:modelValue":t[2]||(t[2]=e=>r.localSong.hook=e),placeholder:"Catchy phrase or refrain"},null,512),[[o.Jo,r.localSong.hook]])])]),(0,s.Lk)("div",$,[(0,s.Lk)("div",G,[t[16]||(t[16]=(0,s.Lk)("label",{for:"songTheme",class:"form-label fw-bold"},"Theme",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control input-off-white",id:"songTheme","onUpdate:modelValue":t[3]||(t[3]=e=>r.localSong.theme=e),placeholder:"Briefly, this song is about..."},null,512),[[o.Jo,r.localSong.theme]])])])]),(0,s.Lk)("div",M,[t[17]||(t[17]=(0,s.Lk)("label",{for:"songNarrative",class:"form-label fw-bold"},"Narrative Outline",-1)),(0,s.bo)((0,s.Lk)("textarea",{class:"form-control input-off-white",id:"songNarrative",rows:"3","onUpdate:modelValue":t[4]||(t[4]=e=>r.localSong.narrativeOutline=e),placeholder:"This song is about...",onInput:t[5]||(t[5]=(...e)=>c.autoResize&&c.autoResize(...e)),ref:"narrativeTextarea"},null,544),[[o.Jo,r.localSong.narrativeOutline]])])]),(0,s.Lk)("div",j,[(0,s.Lk)("div",J,[(0,s.Lk)("div",W,[t[19]||(t[19]=(0,s.Lk)("div",{class:"text-start text-dark-muted"},[(0,s.Lk)("label",{for:"templateDropdown",class:"form-label fw-bold"},"Arrangement Template")],-1)),r.selectedTemplate?((0,s.uX)(),(0,s.CE)("div",Q,[(0,s.Lk)("span",{innerHTML:c.arrangementVisualized(c.selectedTemplateArrangement)},null,8,q)])):(0,s.Q3)("",!0),(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"templateDropdown","onUpdate:modelValue":t[6]||(t[6]=e=>r.selectedTemplate=e)},[t[18]||(t[18]=(0,s.Lk)("option",{value:"",disabled:""},"Select a template",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.sectionTemplates,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.name,value:e.name},(0,a.v_)(e.name)+" - "+(0,a.v_)(c.arrangementText(e.arrangement)),9,z)))),128))],512),[[o.u1,r.selectedTemplate]]),(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm fw-bold mt-2",onClick:t[7]||(t[7]=(...e)=>c.confirmApplyTemplate&&c.confirmApplyTemplate(...e))}," Apply Template ")])])]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(c.orderedSections,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:e.id},[(0,s.bF)(l,{section:e,isFirst:0===t,isLast:t===c.orderedSections.length-1,onUpdateLine:c.updateLine,onUpdateSection:c.updateSection,onRemoveSection:c.removeSection,onMoveSection:e=>c.moveSection(t,e)},null,8,["section","isFirst","isLast","onUpdateLine","onUpdateSection","onRemoveSection","onMoveSection"])])))),128)),(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm fw-bold mx-1",onClick:t[8]||(t[8]=e=>c.addSection("verse"))}," Add Verse "),(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm fw-bold mx-1",onClick:t[9]||(t[9]=e=>c.addSection("chorus"))}," Add Chorus "),(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm fw-bold mx-1",onClick:t[10]||(t[10]=e=>c.addSection("bridge"))}," Add Bridge "),(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm fw-bold mx-1",onClick:t[11]||(t[11]=(...e)=>c.activatePlainTextView&&c.activatePlainTextView(...e))},(0,a.v_)(n.plainTextActive?"Hide Plain Text":"Show Plain Text"),1)])])}n(4114),n(4520),n(2577),n(1454);const Z={class:"card mb-3 shadow-sm bg-card"},Y={class:"card-body bg-section-card pt-1 rounded"},ee={class:"row"},te={class:"col"},ne={class:"d-flex justify-content-between align-items-center text-dark-muted"},oe={class:"ms-2 fs-5 fw-bold text-capitalize"},se={class:"btn-group gap-1"},ie=["disabled"],ae=["disabled"],re={class:"row"},ce={class:"col"},le=["onUpdate:modelValue","placeholder"],de={class:"btn-group ms-2 gap-1"},me=["onClick","disabled"],ue=["onClick","disabled"],ge=["disabled"],he={class:"col-4"},ve={class:"input-group mt-2"},pe={key:0,class:"mt-2 alert alert-info position-relative",style:{"max-height":"10em","overflow-y":"auto"}},be={class:"list-unstyled text-start"};function Se(e,t,n,i,r,c){const l=(0,s.g2)("CountdownTimer");return(0,s.uX)(),(0,s.CE)("div",Z,[(0,s.Lk)("div",Y,[(0,s.Lk)("div",ee,[(0,s.Lk)("div",te,[(0,s.Lk)("div",ne,[(0,s.Lk)("div",oe,(0,a.v_)(n.section.type),1),(0,s.bF)(l,{class:"ms-auto me-2 text-dark-muted"}),(0,s.Lk)("div",null,[(0,s.Lk)("button",{class:"btn btn-outline-custom fw-bold btn-sm py-0 me-2",onClick:t[0]||(t[0]=(...e)=>c.confirmRemoveSelf&&c.confirmRemoveSelf(...e))},t[11]||(t[11]=[(0,s.Lk)("span",{class:"bi bi-trash-fill"},null,-1)])),(0,s.Lk)("div",se,[(0,s.Lk)("button",{class:"btn btn-outline-custom fw-bold py-0",onClick:t[1]||(t[1]=e=>c.moveSelf("up")),disabled:n.isFirst}," ↑ ",8,ie),(0,s.Lk)("button",{class:"btn btn-outline-custom fw-bold py-0",onClick:t[2]||(t[2]=e=>c.moveSelf("down")),disabled:n.isLast}," ↓ ",8,ae)])])])])]),t[16]||(t[16]=(0,s.Lk)("hr",{class:"mt-1 mb-3"},null,-1)),(0,s.Lk)("div",re,[(0,s.Lk)("div",ce,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control mb-2 input-off-white","onUpdate:modelValue":t[3]||(t[3]=e=>r.sectionNarrative=e),placeholder:"This section is about..."},null,512),[[o.Jo,r.sectionNarrative]]),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control mb-2 input-off-white","onUpdate:modelValue":t[4]||(t[4]=e=>r.chordProgression=e),placeholder:"Chord progression (e.g., C G Am F)"},null,512),[[o.Jo,r.chordProgression]]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.section.lines,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"mb-2 d-flex align-items-center"},[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control input-off-white","onUpdate:modelValue":e=>r.localLines[t]=e,placeholder:`Line ${t+1}`},null,8,le),[[o.Jo,r.localLines[t]]]),(0,s.Lk)("div",de,[(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm h-100 my-0",onClick:e=>c.moveLine(t,"up"),disabled:0===t}," ↑ ",8,me),(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm h-100 my-0",onClick:e=>c.moveLine(t,"down"),disabled:t===r.localLines.length-1}," ↓ ",8,ue)])])))),128)),(0,s.Lk)("button",{class:"btn btn-outline-round mx-1",onClick:t[5]||(t[5]=(...e)=>c.removeLine&&c.removeLine(...e)),disabled:r.localLines.length<=1},t[12]||(t[12]=[(0,s.Lk)("span",{class:"fw-bold bi bi-dash-lg"},null,-1)]),8,ge),(0,s.Lk)("button",{class:"btn btn-outline-round mx-1",onClick:t[6]||(t[6]=(...e)=>c.addLine&&c.addLine(...e))},t[13]||(t[13]=[(0,s.Lk)("span",{class:"bi bi-plus-lg"},null,-1)]))]),(0,s.Lk)("div",he,[(0,s.bo)((0,s.Lk)("textarea",{class:"form-control input-off-white",rows:"10",placeholder:"Brainstorming area...","onUpdate:modelValue":t[7]||(t[7]=e=>r.brainstormingText=e)},null,512),[[o.Jo,r.brainstormingText]]),(0,s.Lk)("div",ve,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control input-off-white",placeholder:"Rhymebrain.com query","onUpdate:modelValue":t[8]||(t[8]=e=>r.rhymeQuery=e)},null,512),[[o.Jo,r.rhymeQuery]]),(0,s.Lk)("button",{class:"btn btn-outline-custom",onClick:t[9]||(t[9]=(...e)=>c.fetchRhymes&&c.fetchRhymes(...e))},t[14]||(t[14]=[(0,s.Lk)("span",{class:"bi bi-search"},null,-1)]))]),r.rhymes.length?((0,s.uX)(),(0,s.CE)("div",pe,[(0,s.Lk)("button",{type:"button",class:"btn-close position-absolute top-0 end-0 m-2","aria-label":"Close",onClick:t[10]||(t[10]=e=>r.rhymes=[])}),(0,s.Lk)("ul",be,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.rhymes,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{key:t},(0,a.v_)(e.word),1)))),128))]),t[15]||(t[15]=(0,s.Lk)("p",null,[(0,s.eW)(" Rhyme results are provided by "),(0,s.Lk)("a",{href:"https://rhymebrain.com"},"RhymeBrain.com")],-1))])):(0,s.Q3)("",!0)])])])])}const fe={class:"d-flex align-items-center justify-content-between"},ye={class:"flex-grow-1 text-center"},ke={key:0,class:"alert alert-danger my-1 fw-bold mx-3 py-0 text-nowrap"},Le={key:1,class:"fw-bold fs-4 me-3 my-0"},we={class:"btn-group gap-1 w-100",role:"group"};function Te(e,t,n,o,i,r){return(0,s.uX)(),(0,s.CE)("div",fe,[(0,s.Lk)("div",ye,[i.timerEnded?((0,s.uX)(),(0,s.CE)("p",ke," Time's up! ")):((0,s.uX)(),(0,s.CE)("div",Le,(0,a.v_)(r.formattedTime),1))]),(0,s.Lk)("div",we,[(0,s.Lk)("button",{class:"btn btn-outline-custom fw-bold py-0",onClick:t[0]||(t[0]=(...e)=>r.decrementTime&&r.decrementTime(...e))}," - "),(0,s.Lk)("button",{class:"btn btn-outline-custom fw-bold py-0",onClick:t[1]||(t[1]=(...e)=>r.incrementTime&&r.incrementTime(...e))}," + "),(0,s.Lk)("button",{class:"btn btn-outline-custom fw-bold py-0",onClick:t[2]||(t[2]=(...e)=>r.resetTime&&r.resetTime(...e))}," Reset ")])])}var xe={name:"CountdownTimer",data(){return{minutes:0,seconds:0,timer:null,timerEnded:!1,audio:new Audio(n(4890))}},computed:{formattedTime(){const e=this.minutes,t=this.seconds<10?"0"+this.seconds:this.seconds;return`${e}:${t}`}},methods:{startTimer(){this.timer||(this.timer=setInterval((()=>{0===this.seconds?0===this.minutes?(clearInterval(this.timer),this.timer=null,this.timerEnded=!0,this.audio.play(),setTimeout((()=>{this.timerEnded=!1}),3e3)):(this.minutes--,this.seconds=59):this.seconds--}),1e3))},incrementTime(){this.minutes++,this.startTimer()},decrementTime(){this.minutes>0&&this.minutes--},resetTime(){this.minutes=0,this.seconds=0,clearInterval(this.timer),this.timer=null,this.timerEnded=!1}}};const Ce=(0,C.A)(xe,[["render",Te]]);var Ee=Ce,Ae={emits:["update-section","remove-section","move-section"],props:{section:{type:Object,required:!0},isFirst:{type:Boolean,required:!0},isLast:{type:Boolean,required:!0}},components:{CountdownTimer:Ee},data(){return{localLines:[...this.section.lines],sectionNarrative:this.section.sectionNarrative||"",chordProgression:this.section.chordProgression||"",brainstormingText:this.section.brainstormingText||"",rhymeQuery:"",rhymes:[]}},methods:{updateLine(e,t){this.$set(this.localLines,e,t)},moveLine(e,t){"up"===t&&e>0?[this.localLines[e-1],this.localLines[e]]=[this.localLines[e],this.localLines[e-1]]:"down"===t&&e<this.localLines.length-1&&([this.localLines[e+1],this.localLines[e]]=[this.localLines[e],this.localLines[e+1]])},confirmRemoveSelf(){confirm("Are you sure you want to remove this section?")&&this.removeSelf()},removeSelf(){this.$emit("remove-section",this.section.id)},typeColor(e){switch(e){case"verse":return"bg-verse";case"chorus":return"bg-chorus";case"bridge":return"bg-bridge";default:return"bg-secondary text-white"}},addLine(){this.localLines.push("")},removeLine(){this.localLines.length>1&&this.localLines.pop()},moveSelf(e){this.$emit("move-section",e),console.log("moveSelf emitted")},updateSection(){this.$store.dispatch("updateSection",{songId:this.section.songId,section:{...this.section,lines:this.localLines,sectionNarrative:this.sectionNarrative,chordProgression:this.chordProgression,brainstormingText:this.brainstormingText}})},async fetchRhymes(){if(""!==this.rhymeQuery.trim())try{const e=await fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${this.rhymeQuery}`),t=await e.json(),n=t.filter((e=>1==e.syllables)).slice(0,20),o=t.filter((e=>2==e.syllables)).slice(0,10),s=t.filter((e=>e.syllables>=3)).slice(0,5);this.rhymes=[...n,...o,...s].map((e=>({word:e.word,syllables:e.syllables}))),console.log("Rhymes fetched:",this.rhymes)}catch(e){console.error("Error fetching rhymes:",e)}else this.rhymes=[]}},watch:{localLines:{handler(e){this.$emit("update-section",{...this.section,lines:e}),this.updateSection()},deep:!0},sectionNarrative(e){this.$emit("update-section",{...this.section,sectionNarrative:e}),this.updateSection()},brainstormingText(e){this.$emit("update-section",{...this.section,brainstormingText:e}),this.updateSection()},chordProgression(e){this.$emit("update-section",{...this.section,chordProgression:e}),this.updateSection()}}};const Ie=(0,C.A)(Ae,[["render",Se]]);var Oe=Ie;const _e=[{name:"Standard",arrangement:["v","c","v","c","b","c"]},{name:"Extended",arrangement:["v","c","v","c","v","b","c"]},{name:"Simple",arrangement:["v","c","v","c"]},{name:"Bridge First",arrangement:["b","v","c","v","c"]},{name:"Outro Heavy",arrangement:["v","c","v","c","c","c"]},{name:"Intro and Outro",arrangement:["v","c","b","c","v","c"]},{name:"Double Bridge",arrangement:["v","c","v","b","b","c"]},{name:"Refrain Heavy",arrangement:["v","c","v","c","c"]},{name:"Minimalist",arrangement:["v","c"]},{name:"All Verse",arrangement:["v","v","v","v"]},{name:"Verse Driven",arrangement:["v","v","c","v","c"]},{name:"Double Verse",arrangement:["v","v","c","v","v","c"]},{name:"No Bridge",arrangement:["v","c","v","c","v","c"]},{name:"Climactic",arrangement:["v","c","v","b","c","b","c"]},{name:"Retro",arrangement:["v","b","v","c","b","c"]},{name:"Experimental",arrangement:["b","c","v","b","v","c"]},{name:"Crescendo",arrangement:["v","c","v","c","b","c","c"]},{name:"Intro Repeat",arrangement:["v","v","c","v","c","c"]},{name:"Verse First",arrangement:["v","v","v","c","v","c"]},{name:"Bridge Ending",arrangement:["v","c","v","c","b","b"]},{name:"Triple Verse",arrangement:["v","v","v","c","c"]},{name:"Verse Heavy",arrangement:["v","v","v","c","v","b"]},{name:"All Chorus",arrangement:["c","c","c","c"]},{name:"Double Outro",arrangement:["v","c","v","c","c","c","c"]},{name:"Chorus Build",arrangement:["v","c","v","b","c","c"]},{name:"Looping",arrangement:["v","c","v","c","v","c"]},{name:"Climactic Outro",arrangement:["v","c","v","b","c","c","c"]},{name:"All Bridge",arrangement:["b","b","b","b"]},{name:"Interlude Focus",arrangement:["v","c","b","b","c"]},{name:"Outro Bridge",arrangement:["v","c","v","b","b"]},{name:"Verse Intro",arrangement:["v","v","c","b","c"]},{name:"Chorus First",arrangement:["c","v","v","c","b","c"]},{name:"Bridge Finale",arrangement:["v","c","v","c","b","b","b"]},{name:"Bridge Peak",arrangement:["v","c","b","b","c","c"]},{name:"Balanced",arrangement:["v","c","b","c","b","c"]},{name:"Layered",arrangement:["v","c","b","v","c","c"]},{name:"Dynamic",arrangement:["b","c","v","c","b","c"]},{name:"Inverse",arrangement:["c","v","b","v","c"]},{name:"Echo",arrangement:["v","c","v","b","v","c"]},{name:"End Focus",arrangement:["v","c","b","c","b","c"]},{name:"Sequential",arrangement:["v","c","b","v","c","b"]},{name:"Complex",arrangement:["v","c","v","b","c","v","b","c"]},{name:"Heavy Outro",arrangement:["v","c","b","c","c","c"]},{name:"Evolving",arrangement:["v","c","v","b","v","c","b"]},{name:"Drift",arrangement:["v","v","c","b","v","c"]},{name:"Offset",arrangement:["v","b","c","v","b","c"]},{name:"Stacked",arrangement:["v","v","b","b","c","c"]},{name:"Triple Bridge",arrangement:["v","c","b","b","b","c"]},{name:"Finale",arrangement:["v","c","v","c","b","b","c"]},{name:"Vibrant",arrangement:["v","c","b","c","v","c"]},{name:"Repeater",arrangement:["v","c","v","c","b","c","b","c"]}];var Fe=_e;const Ne=[{mood:"Happy",implications:"Major chords"},{mood:"Sad",implications:"Minor chords and slower tempo"},{mood:"Angry",implications:"Distorted guitars and fast tempo"},{mood:"Excited",implications:"Upbeat rhythm and high energy"},{mood:"Calm",implications:"Soft dynamics and slow tempo"},{mood:"Romantic",implications:"Smooth melodies and gentle harmonies"},{mood:"Melancholic",implications:"Minor chords and reflective lyrics"},{mood:"Energetic",implications:"Driving beat and syncopation"},{mood:"Reflective",implications:"Acoustic instruments and slow pace"},{mood:"Hopeful",implications:"Ascending melodies and major chords"},{mood:"Triumphant",implications:"Bold brass and rising dynamics"},{mood:"Mysterious",implications:"Unresolved chords and unusual scales"},{mood:"Tense",implications:"Dissonance and repetitive rhythms"},{mood:"Cheerful",implications:"Bright instrumentation and quick tempo"},{mood:"Lonely",implications:"Sparse arrangement and minor keys"},{mood:"Playful",implications:"Bouncy rhythms and quirky instrumentation"},{mood:"Dark",implications:"Low tones and slow, brooding tempo"},{mood:"Dreamy",implications:"Echo effects and soft harmonies"},{mood:"Optimistic",implications:"Rising melodies and energetic tempo"},{mood:"Nostalgic",implications:"Warm tones and vintage instrumentation"},{mood:"Aggressive",implications:"Heavy percussion and intense dynamics"},{mood:"Peaceful",implications:"Smooth transitions and mellow tones"},{mood:"Groovy",implications:"Syncopated bass lines and steady rhythm"},{mood:"Quirky",implications:"Unexpected chord progressions and unusual instruments"},{mood:"Ethereal",implications:"Reverb-heavy and light textures"}];var Re=Ne,Ve={name:"SongComplete",components:{SongSection:Oe},props:{song:{type:Object,required:!0},plainTextActive:{type:Boolean,required:!0}},data(){return{localSong:{...this.song,sections:this.song.sections||[]},selectedTemplate:"",sectionTemplates:Fe,moods:Re}},computed:{orderedSections(){return(this.localSong.sections||[]).slice().sort(((e,t)=>e.order[0]-t.order[0]))},selectedTemplateArrangement(){const e=this.sectionTemplates.find((e=>e.name===this.selectedTemplate));return e?e.arrangement:[]},selectedMoodImplication(){const e=this.moods.find((e=>e.mood===this.localSong.mood));return e?e.implications:""}},watch:{song:{handler(e){this.localSong={...e,sections:e.sections||[]},console.log("Updated localSong:",this.localSong),this.$nextTick((()=>{this.autoResize({target:this.$refs.narrativeTextarea})}))},immediate:!0},localSong:{handler(e){this.updateSong(e)},deep:!0}},methods:{...(0,T.i0)(["updateSong"]),arrangementVisualized(e){return e.map((e=>{switch(e){case"v":return'<span class="badge bg-primary me-1">Verse</span>';case"c":return'<span class="badge bg-success me-1">Chorus</span>';case"b":return'<span class="badge bg-danger me-1">Bridge</span>';default:return""}})).join("")},arrangementText(e){return e.map((e=>{switch(e){case"v":return"Verse";case"c":return"Chorus";case"b":return"Bridge";default:return""}})).join(" - ")},confirmApplyTemplate(){confirm("Are you sure you want to apply this template? This will clear all existing sections.")&&this.applyTemplate()},applyTemplate(){const e=this.sectionTemplates.find((e=>e.name===this.selectedTemplate));e&&(this.localSong.sections=e.arrangement.map(((e,t)=>({id:t+1,order:[t],type:this.sectionLabel(e),lines:["","","",""],sectionNarrative:"",brainstormingText:""}))),this.updateSong(this.localSong))},updateLine({sectionId:e,index:t,newLine:n}){const o=this.localSong.sections.find((t=>t.id===e));o&&this.$set(o.lines,t,n)},addSection(e){const t={id:this.localSong.sections.length+1,order:[this.localSong.sections.length],type:e,lines:["","","",""],sectionNarrative:"",brainstormingText:""};this.localSong.sections.push(t)},updateSection(e){const t=this.localSong.sections.findIndex((t=>t.id===e.id));-1!==t&&this.localSong.sections.splice(t,1,e)},removeSection(e){this.localSong.sections=this.localSong.sections.filter((t=>t.id!==e))},moveSection(e,t){if(console.log("moveSection called"),console.log(e,t),"up"===t&&e>0){const t=this.localSong.sections[e];this.localSong.sections[e]=this.localSong.sections[e-1],this.localSong.sections[e-1]=t}else if("down"===t&&e<this.localSong.sections.length-1){const t=this.localSong.sections[e];this.localSong.sections[e]=this.localSong.sections[e+1],this.localSong.sections[e+1]=t}this.localSong.sections.forEach(((e,t)=>{e.order=[t]})),this.updateSong(this.localSong)},activatePlainTextView(){this.$emit("toggle-plain-text")},badgeClass(e){switch(e){case"v":return"bg-primary";case"c":return"bg-success";case"b":return"bg-warning";default:return"bg-secondary"}},sectionLabel(e){switch(e){case"v":return"Verse";case"c":return"Chorus";case"b":return"Bridge";default:return"Unknown"}},autoResize(e){const t=e.target;t.style.height="auto",t.style.height=`${t.scrollHeight}px`}},created(){console.log("Song prop:",this.song)}};const Pe=(0,C.A)(Ve,[["render",K]]);var Ue=Pe;const De={class:"row"},Xe={class:"col"},Be={class:"card bg-card text-dark-muted shadow-sm pb-3"},He={class:"card-body"},$e={class:"table input-off-white text-dark-muted"},Ge=["onClick"],Me={class:"text-start",scope:"row"},je={class:"text-start"},Je={class:"text-start"},We={class:"text-start"},Qe={class:"row"},qe={class:"col"};function ze(e,t,n,o,i,r){return(0,s.uX)(),(0,s.CE)("div",De,[(0,s.Lk)("div",Xe,[(0,s.Lk)("div",Be,[(0,s.Lk)("div",He,[t[3]||(t[3]=(0,s.Lk)("h1",{class:"fs-4 my-auto fw-bold text-start"},"Song Library",-1)),t[4]||(t[4]=(0,s.Lk)("hr",null,null,-1)),(0,s.Lk)("table",$e,[t[2]||(t[2]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",{class:"text-start"},[(0,s.Lk)("th",{scope:"col",style:{width:"5%"}},"#"),(0,s.Lk)("th",{scope:"col",style:{width:"20%"}},"Title"),(0,s.Lk)("th",{scope:"col",style:{width:"45%"}},"Hook"),(0,s.Lk)("th",{scope:"col",style:{width:"20%"}},"Last Edit")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.getSongs,((e,t)=>((0,s.uX)(),(0,s.CE)("tr",{key:e.id,onClick:t=>r.selectSong(e),class:(0,a.C4)({"table-primary":e===i.selectedSong,"cursor-pointer":!0})},[(0,s.Lk)("th",Me,(0,a.v_)(t+1),1),(0,s.Lk)("td",je,(0,a.v_)(e.title),1),(0,s.Lk)("td",Je,(0,a.v_)(e.hook),1),(0,s.Lk)("td",We,(0,a.v_)(r.formatDate(e.lastEdit)),1)],10,Ge)))),128))])])]),(0,s.Lk)("div",Qe,[(0,s.Lk)("div",qe,[(0,s.Lk)("button",{class:"btn btn-outline-custom me-2 btn-sm fw-bold",onClick:t[0]||(t[0]=(...e)=>r.confirmRemoveSong&&r.confirmRemoveSong(...e))}," Remove Song "),(0,s.Lk)("button",{class:"btn btn-outline-custom btn-sm fw-bold",onClick:t[1]||(t[1]=(...e)=>r.newSong&&r.newSong(...e))}," Add Song ")])])])])])}var Ke={name:"SongLibrary",data(){return{selectedSong:null}},computed:{...(0,T.L8)(["getSongs"])},methods:{...(0,T.i0)(["addSong","deleteSong","setActiveSong","updateSong","setSongs","resetStore"]),selectSong(e){this.selectedSong&&this.updateSong(this.selectedSong),this.selectedSong=e,this.setActiveSong(e)},newSong(){this.addSong()},confirmRemoveSong(){this.selectedSong?confirm(`Are you sure you want to remove the song "${this.selectedSong.title}"?`)&&this.removeSong():alert("Please select a song to remove.")},removeSong(){this.selectedSong&&(this.deleteSong(this.selectedSong.id),this.selectedSong=null,this.refreshAppState())},refreshAppState(){0===this.getSongs.length?this.resetStore():(this.setSongs(this.getSongs),this.setActiveSong(null))},formatDate(e){const t=new Date(e),n={month:"2-digit",day:"2-digit",year:"2-digit",hour:"numeric",minute:"numeric",hour12:!0};return t.toLocaleString("en-US",n).replace(",","")}},watch:{getSongs:{handler(){this.selectedSong&&(this.selectedSong=this.getSongs.find((e=>e.id===this.selectedSong.id)))},deep:!0}}};const Ze=(0,C.A)(Ke,[["render",ze],["__scopeId","data-v-b0a59dbe"]]);var Ye=Ze;const et={class:"container"},tt={class:"row mt-5"},nt={class:"col"},ot={class:"card border border-dark shadow"};function st(e,t,n,o,i,a){return(0,s.uX)(),(0,s.CE)("div",et,[(0,s.Lk)("div",tt,[t[3]||(t[3]=(0,s.Lk)("div",{class:"col-3"},null,-1)),(0,s.Lk)("div",nt,[(0,s.Lk)("div",ot,[t[2]||(t[2]=(0,s.Lk)("div",{class:"card-header bg-dark text-light"},[(0,s.Lk)("p",{class:"text-center my-auto fw-bold"},"Hello, Songwriter")],-1)),(0,s.Lk)("div",null,[(0,s.Lk)("button",{class:"btn btn-lg btn-primary fw-bold my-5",onClick:t[0]||(t[0]=(...e)=>a.signInWithGitHub&&a.signInWithGitHub(...e))},t[1]||(t[1]=[(0,s.eW)(" Sign In with GitHub "),(0,s.Lk)("span",{class:"ms-3 bi bi-github"},null,-1)]))])])]),t[4]||(t[4]=(0,s.Lk)("div",{class:"col-3"},null,-1))])])}var it=n(3869),at={name:"AuthComponent",methods:{async signInWithGitHub(){const e=(0,it.xI)(),t=new it.Dt;try{await(0,it.df)(e,t),console.log("Signed in with GitHub successfully")}catch(n){console.error("Error signing in with GitHub:",n)}}}};const rt=(0,C.A)(at,[["render",st]]);var ct=rt,lt={name:"ActivityView",components:{SongLibrary:Ye,SongComplete:Ue,PlainTextLayout:A,AuthComponent:ct},computed:{...(0,T.L8)({activeSong:"getActiveSong",user:"user"})},watch:{activeSong:{handler(e){this.localSong={...e},this.saveStateToFirestore(),this.activeSongChanged=!0},immediate:!0},localSong:{handler(e){this.updateSong(e),this.activeSongChanged||this.debounceSaveState()},deep:!0}},data(){return{localSong:null,plainTextActive:!1,debounceTimeout:null,activeSongChanged:!1}},methods:{...(0,T.i0)(["updateSong","saveStateToFirestore"]),togglePlainText(){this.plainTextActive=!this.plainTextActive},debounceSaveState(){clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((()=>{this.saveStateToFirestore(),this.activeSongChanged=!1}),1e3)}}};const dt=(0,C.A)(lt,[["render",f]]);var mt=dt,ut={name:"App",components:{ActivityView:mt}};const gt=(0,C.A)(ut,[["render",i]]);var ht=gt,vt=n(7617),pt=n(6400);const bt={apiKey:"AIzaSyDb8nZoo3LwrWHJB-uFCSlVLv3FsPIXMCI",authDomain:"lyric-writing-assistant.firebaseapp.com",projectId:"lyric-writing-assistant",storageBucket:"lyric-writing-assistant.firebasestorage.app",messagingSenderId:"550944326368",appId:"1:550944326368:web:3dd3fcd0009f72fef78685"},St=(0,pt.Wp)(bt),ft=(0,vt.aU)(St),yt=(0,it.xI)(St),kt=(0,T.y$)({state:{songs:[],activeSong:null,user:null},mutations:{SET_USER(e,t){e.user=t},SET_SONGS(e,t){e.songs=t},ADD_SONG(e,t){e.songs.push(t)},DELETE_SONG(e,t){const n=e.songs.findIndex((e=>e.id===t));-1!==n&&e.songs.splice(n,1)},UPDATE_SONG(e,t){const n=e.songs.findIndex((e=>e.id===t.id));-1!==n&&(e.songs[n]={...e.songs[n],...t,lastEdit:(new Date).toISOString()})},SET_ACTIVE_SONG(e,t){e.activeSong={...t}},UPDATE_SECTION(e,{songId:t,section:n}){const o=e.songs.find((e=>e.id===t));if(o){const e=o.sections.findIndex((e=>e.id===n.id));-1!==e&&o.sections.splice(e,1,n)}},RESET_STORE(e){e.songs=[],e.activeSong=null}},actions:{setUser({commit:e},t){e("SET_USER",t)},setSongs({commit:e},t){e("SET_SONGS",t)},addSong({commit:e}){const t={id:(new Date).getTime(),title:"Untitled",mood:"",hook:"",theme:"",narrativeOutline:"",sections:[],lastEdit:(new Date).toISOString()};e("ADD_SONG",t)},deleteSong({commit:e},t){e("DELETE_SONG",t)},updateSong({commit:e},t){e("UPDATE_SONG",t)},setActiveSong({commit:e},t){e("SET_ACTIVE_SONG",t)},updateSection({commit:e},t){e("UPDATE_SECTION",t)},resetStore({commit:e}){e("RESET_STORE")},async saveStateToFirestore({state:e}){if(!e.user)return;const t=(0,vt.H9)(ft,"users",e.user.uid);try{await(0,vt.BN)(t,{state:JSON.stringify(e)}),console.log("State saved to Firestore")}catch(n){console.error("Error saving state to Firestore:",n)}},async loadStateFromFirestore({commit:e,state:t}){if(!t.user)return;const n=(0,vt.H9)(ft,"users",t.user.uid);try{const t=await(0,vt.x7)(n);if(t.exists()){const n=t.data().state;if(n){const t=JSON.parse(n);t.songs=t.songs.map((e=>({...e,sections:Array.isArray(e.sections)?e.sections:[]}))),console.log("Loaded state from Firestore:",t),e("SET_SONGS",t.songs),e("SET_ACTIVE_SONG",t.activeSong),console.log("State loaded from Firestore")}else console.log("No state data found in Firestore")}else console.log("No state document found in Firestore")}catch(o){console.error("Error loading state from Firestore:",o)}}},getters:{getSongs(e){return e.songs},getActiveSong(e){return e.activeSong},user(e){return e.user}}});(0,it.hg)(yt,(e=>{e?(kt.dispatch("setUser",e),kt.dispatch("loadStateFromFirestore")):kt.dispatch("setUser",null)}));var Lt=kt,wt=n(1387);const Tt=[{path:Lt.getters.useLandingPage?"/activity":"/",name:"Activity",component:mt},{path:"/auth",name:"AuthComponent",component:ct}],xt=(0,wt.aE)({linkExactActiveClass:"fw-bold",history:(0,wt.LA)("/lyric-writing-assistant/"),routes:Tt});var Ct=xt;async function Et(){await Lt.dispatch("loadStateFromFirestore"),(0,o.Ef)(ht).use(Lt).use(Ct).mount("#app")}Et()},4890:function(e,t,n){e.exports=n.p+"media/alarm.e1848079.mp3"}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],i=e[d][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,i<a&&(a=i));if(r){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/lyric-writing-assistant/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,i,a=o[0],r=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var d=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunklyric_writing_assistant"]=self["webpackChunklyric_writing_assistant"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7542)}));o=n.O(o)})();
//# sourceMappingURL=app.04637401.js.map