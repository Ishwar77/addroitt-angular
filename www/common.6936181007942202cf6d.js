(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return s});const r=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}},JbSX:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("wEJo"),i=n("qULd"),o=n("iWo5");const c=(t,e)=>{let n,c;const s=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(l(),a(o,i)):l()},a=(t,e)=>{n=t,c||(c=n);const i=n;Object(r.f)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(r.f)(()=>e.classList.remove("ion-activated")),t&&c!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,i.a),onMove:t=>s(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),Object(i.e)(),c=void 0}})}},QQAA:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("fXoL");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"strong"),r.pc(2),r.Ob(),r.Pb(3,"p"),r.pc(4,"Explore "),r.Pb(5,"a",1),r.pc(6,"UI Components"),r.Ob(),r.Ob(),r.Ob()),2&t&&(r.Ab(2),r.qc(e.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()},acej:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("1vRN");const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>c.classList.add(t)),o&&Object.assign(c,o),e.appendChild(c),await new Promise(t=>Object(r.c)(c,t)),c},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return r});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},k0NA:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("fXoL"),i=n("TEn/"),o=n("rIor");let c=(()=>{class t{constructor(t){this.modalController=t}ngOnInit(){this.myImage=this.image}imageCropped(t){this.croppedImageBase64=t.base64}dismissModal(){this.modalController.dismiss(this.croppedImageBase64)}imageLoaded(t){}cropperReady(){}loadImageFailed(){}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(i.P))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-image-cropper"]],inputs:{image:"image"},decls:9,vars:4,consts:[["outputType","base64","format","png",3,"imageBase64","aspectRatio","resizeToWidth","imageCropped"],[3,"src"],[3,"click"]],template:function(t,e){1&t&&(r.Pb(0,"ion-header"),r.Pb(1,"ion-toolbar"),r.Pb(2,"ion-title"),r.pc(3,"Image crop "),r.Ob(),r.Ob(),r.Ob(),r.Pb(4,"ion-content"),r.Pb(5,"image-cropper",0),r.Xb("imageCropped",function(t){return e.imageCropped(t)}),r.Ob(),r.Lb(6,"img",1),r.Pb(7,"ion-button",2),r.Xb("click",function(){return e.dismissModal()}),r.pc(8,"Crop"),r.Ob(),r.Ob()),2&t&&(r.Ab(5),r.ec("imageBase64",e.myImage)("aspectRatio",1)("resizeToWidth",e.myImage.resizeTo?e.myImage.resizeTo:1200),r.Ab(1),r.ec("src",e.croppedImage,r.lc))},directives:[i.r,i.L,i.J,i.n,o.a,i.e],styles:[""]}),t})()},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return s});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},c=()=>{r.selectionChanged()},s=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},qtYk:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),c=n("fXoL");let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({imports:[[r.b,i.d,o.M]]}),t})()}}]);