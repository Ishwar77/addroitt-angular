(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{rIor:function(t,e,i){"use strict";i.d(e,"a",function(){return x}),i.d(e,"b",function(){return M});var o=i("fXoL"),a=i("O1h7"),r=i("ofXK"),s=i("jhN1");const n=["wrapper"],h=["sourceImage"];function c(t,e){if(1&t){const t=o.Qb();o.Pb(0,"img",4,5),o.Xb("load",function(){return o.kc(t),o.bc().imageLoadedInView()}),o.Ob()}if(2&t){const t=o.bc();o.nc("visibility",t.imageVisible?"visible":"hidden")("transform",t.safeTransformStyle),o.ec("src",t.safeImgDataUrl,o.lc)}}function p(t,e){if(1&t){const t=o.Qb();o.Nb(0),o.Pb(1,"span",9),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"topleft")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"topleft")}),o.Lb(2,"span",10),o.Ob(),o.Pb(3,"span",11),o.Lb(4,"span",10),o.Ob(),o.Pb(5,"span",12),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"topright")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"topright")}),o.Lb(6,"span",10),o.Ob(),o.Pb(7,"span",13),o.Lb(8,"span",10),o.Ob(),o.Pb(9,"span",14),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"bottomright")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"bottomright")}),o.Lb(10,"span",10),o.Ob(),o.Pb(11,"span",15),o.Lb(12,"span",10),o.Ob(),o.Pb(13,"span",16),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"bottomleft")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"bottomleft")}),o.Lb(14,"span",10),o.Ob(),o.Pb(15,"span",17),o.Lb(16,"span",10),o.Ob(),o.Pb(17,"span",18),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"top")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"top")}),o.Ob(),o.Pb(18,"span",19),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"right")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"right")}),o.Ob(),o.Pb(19,"span",20),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"bottom")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"bottom")}),o.Ob(),o.Pb(20,"span",21),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"left")})("touchstart",function(e){o.kc(t);const i=o.bc(2);return i.startMove(e,i.moveTypes.Resize,"left")}),o.Ob(),o.Mb()}}function g(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",6),o.Xb("keydown",function(e){return o.kc(t),o.bc().keyboardAccess(e)}),o.Pb(1,"div",7),o.Xb("mousedown",function(e){o.kc(t);const i=o.bc();return i.startMove(e,i.moveTypes.Move)})("touchstart",function(e){o.kc(t);const i=o.bc();return i.startMove(e,i.moveTypes.Move)}),o.Ob(),o.oc(2,p,21,0,"ng-container",8),o.Ob()}if(2&t){const t=o.bc();o.nc("top",t.cropper.y1,"px")("left",t.cropper.x1,"px")("width",t.cropper.x2-t.cropper.x1,"px")("height",t.cropper.y2-t.cropper.y1,"px")("margin-left","center"===t.alignImage?t.marginLeft:null)("visibility",t.imageVisible?"visible":"hidden"),o.Cb("rounded",t.roundCropper),o.Ab(2),o.ec("ngIf",!t.hideResizeSquares)}}const d={Move:"move",Resize:"resize",Pinch:"pinch"};let m=(()=>{class t{crop(t,e,i,o){const a=this.getImagePosition(t,e,i,o),r=a.x2-a.x1,s=a.y2-a.y1,n=document.createElement("canvas");n.width=r,n.height=s;const h=n.getContext("2d");if(!h)return;null!=o.backgroundColor&&(h.fillStyle=o.backgroundColor,h.fillRect(0,0,r,s));const c=(o.transform.scale||1)*(o.transform.flipH?-1:1),p=(o.transform.scale||1)*(o.transform.flipV?-1:1),g=e.transformed;h.setTransform(c,0,0,p,g.size.width/2,g.size.height/2),h.translate(-a.x1/c,-a.y1/p),h.rotate((o.transform.rotate||0)*Math.PI/180),h.drawImage(g.image,-g.size.width/2,-g.size.height/2);const d={width:r,height:s,imagePosition:a,cropperPosition:Object.assign({},i)};o.containWithinAspectRatio&&(d.offsetImagePosition=this.getOffsetImagePosition(t,e,i,o));const m=this.getResizeRatio(r,s,o);return 1!==m&&(d.width=Math.round(r*m),d.height=o.maintainAspectRatio?Math.round(d.width/o.aspectRatio):Math.round(s*m),function(t,e,i){const o=t.width,a=t.height,r=o/(e=Math.round(e)),s=a/(i=Math.round(i)),n=Math.ceil(r/2),h=Math.ceil(s/2),c=t.getContext("2d");if(c){const p=c.getImageData(0,0,o,a),g=c.createImageData(e,i),d=p.data,m=g.data;for(let t=0;t<i;t++)for(let i=0;i<e;i++){const c=4*(i+t*e),p=t*s;let g=0,l=0,u=0,f=0,x=0,M=0,b=0;const A=Math.floor(i*r),y=Math.floor(t*s);let S=Math.ceil((i+1)*r),v=Math.ceil((t+1)*s);S=Math.min(S,o),v=Math.min(v,a);for(let t=y;t<v;t++){const e=Math.abs(p-t)/h,a=i*r,s=e*e;for(let i=A;i<S;i++){const e=Math.abs(a-i)/n,r=Math.sqrt(s+e*e);if(r>=1)continue;g=2*r*r*r-3*r*r+1;const h=4*(i+t*o);b+=g*d[h+3],u+=g,d[h+3]<255&&(g=g*d[h+3]/250),f+=g*d[h],x+=g*d[h+1],M+=g*d[h+2],l+=g}}m[c]=f/l,m[c+1]=x/l,m[c+2]=M/l,m[c+3]=b/u}t.width=e,t.height=i,c.putImageData(g,0,0)}}(n,d.width,d.height)),d.base64=n.toDataURL("image/"+o.format,this.getQuality(o)),d}getImagePosition(t,e,i,o){const a=e.transformed.size.width/t.nativeElement.offsetWidth,r={x1:Math.round(i.x1*a),y1:Math.round(i.y1*a),x2:Math.round(i.x2*a),y2:Math.round(i.y2*a)};return o.containWithinAspectRatio||(r.x1=Math.max(r.x1,0),r.y1=Math.max(r.y1,0),r.x2=Math.min(r.x2,e.transformed.size.width),r.y2=Math.min(r.y2,e.transformed.size.height)),r}getOffsetImagePosition(t,e,i,o){const a=e.transformed.size.width/t.nativeElement.offsetWidth;let r,s;(o.canvasRotation+e.exifTransform.rotate)%2?(r=(e.transformed.size.width-e.original.size.height)/2,s=(e.transformed.size.height-e.original.size.width)/2):(r=(e.transformed.size.width-e.original.size.width)/2,s=(e.transformed.size.height-e.original.size.height)/2);const n={x1:Math.round(i.x1*a)-r,y1:Math.round(i.y1*a)-s,x2:Math.round(i.x2*a)-r,y2:Math.round(i.y2*a)-s};return o.containWithinAspectRatio||(n.x1=Math.max(n.x1,0),n.y1=Math.max(n.y1,0),n.x2=Math.min(n.x2,e.transformed.size.width),n.y2=Math.min(n.y2,e.transformed.size.height)),n}getResizeRatio(t,e,i){const o=i.resizeToWidth/t,a=i.resizeToHeight/e,r=new Array;i.resizeToWidth>0&&r.push(o),i.resizeToHeight>0&&r.push(a);const s=0===r.length?1:Math.min(...r);return s>1&&!i.onlyScaleDown?s:Math.min(s,1)}getQuality(t){return Math.min(1,Math.max(0,t.imageQuality/100))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(o.Gb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();class l{constructor(){this.format="png",this.maintainAspectRatio=!0,this.transform={},this.aspectRatio=1,this.resizeToWidth=0,this.resizeToHeight=0,this.cropperMinWidth=0,this.cropperMinHeight=0,this.cropperMaxHeight=0,this.cropperMaxWidth=0,this.cropperStaticWidth=0,this.cropperStaticHeight=0,this.canvasRotation=0,this.initialStepSize=3,this.roundCropper=!1,this.onlyScaleDown=!1,this.imageQuality=92,this.autoCrop=!0,this.backgroundColor=void 0,this.containWithinAspectRatio=!1,this.hideResizeSquares=!1,this.alignImage="center",this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20,this.cropperScaledMaxWidth=20,this.cropperScaledMaxHeight=20,this.stepSize=this.initialStepSize}setOptions(t){Object.keys(t).filter(t=>t in this).forEach(e=>this[e]=t[e])}setOptionsFromChanges(t){Object.keys(t).filter(t=>t in this).forEach(e=>this[e]=t[e].currentValue)}}let u=(()=>{class t{constructor(){this.autoRotateSupported=new Promise(t=>{const e=new Image;e.onload=()=>{t(1===e.width&&2===e.height)},e.src="data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q=="})}loadImageFile(t,e){return new Promise((i,o)=>{const a=new FileReader;a.onload=a=>{this.loadImage(a.target.result,t.type,e).then(i).catch(o)},a.readAsDataURL(t)})}loadImage(t,e,i){return this.isValidImageType(e)?this.loadBase64Image(t,i):Promise.reject(new Error("Invalid image type"))}isValidImageType(t){return/image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(t)}loadImageFromURL(t,e){return new Promise((i,o)=>{const a=new Image;a.onerror=()=>o,a.onload=()=>{const t=document.createElement("canvas"),o=t.getContext("2d");t.width=a.width,t.height=a.height,o.drawImage(a,0,0),this.loadBase64Image(t.toDataURL(),e).then(i)},a.crossOrigin="anonymous",a.src=t})}loadBase64Image(t,e){return new Promise((e,i)=>{const o=new Image;o.onload=()=>e({originalImage:o,originalBase64:t}),o.onerror=i,o.src=t}).then(t=>this.transformImageBase64(t,e))}transformImageBase64(t,e){return Object(a.a)(this,void 0,void 0,function*(){const i=yield this.autoRotateSupported,o=yield function(t){switch("string"==typeof t&&(t=function(t){const e=new DataView(function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");const e=atob(t),i=e.length,o=new Uint8Array(i);for(let a=0;a<i;a++)o[a]=e.charCodeAt(a);return o.buffer}(t));if(65496!=e.getUint16(0,!1))return-2;const i=e.byteLength;let o=2;for(;o<i;){if(e.getUint16(o+2,!1)<=8)return-1;const t=e.getUint16(o,!1);if(o+=2,65505==t){if(1165519206!=e.getUint32(o+=2,!1))return-1;const t=18761==e.getUint16(o+=6,!1);o+=e.getUint32(o+4,t);const i=e.getUint16(o,t);o+=2;for(let a=0;a<i;a++)if(274==e.getUint16(o+12*a,t))return e.getUint16(o+12*a+8,t)}else{if(65280!=(65280&t))break;o+=e.getUint16(o,!1)}}return-1}(t)),t){case 2:return{rotate:0,flip:!0};case 3:return{rotate:2,flip:!1};case 4:return{rotate:2,flip:!0};case 5:return{rotate:1,flip:!0};case 6:return{rotate:1,flip:!1};case 7:return{rotate:3,flip:!0};case 8:return{rotate:3,flip:!1};default:return{rotate:0,flip:!1}}}(i?-1:t.originalBase64);return t.originalImage&&t.originalImage.complete?this.transformLoadedImage({original:{base64:t.originalBase64,image:t.originalImage,size:{width:t.originalImage.naturalWidth,height:t.originalImage.naturalHeight}},exifTransform:o},e):Promise.reject(new Error("No image loaded"))})}transformLoadedImage(t,e){return Object(a.a)(this,void 0,void 0,function*(){const i=e.canvasRotation+t.exifTransform.rotate,o={width:t.original.image.naturalWidth,height:t.original.image.naturalHeight};if(0===i&&!t.exifTransform.flip&&!e.containWithinAspectRatio)return{original:{base64:t.original.base64,image:t.original.image,size:Object.assign({},o)},transformed:{base64:t.original.base64,image:t.original.image,size:Object.assign({},o)},exifTransform:t.exifTransform};const a=this.getTransformedSize(o,t.exifTransform,e),r=document.createElement("canvas");r.width=a.width,r.height=a.height;const s=r.getContext("2d");s.setTransform(t.exifTransform.flip?-1:1,0,0,1,r.width/2,r.height/2),s.rotate(Math.PI*(i/2)),s.drawImage(t.original.image,-o.width/2,-o.height/2);const n=r.toDataURL(),h=yield this.loadImageFromBase64(n);return{original:{base64:t.original.base64,image:t.original.image,size:Object.assign({},o)},transformed:{base64:n,image:h,size:{width:h.width,height:h.height}},exifTransform:t.exifTransform}})}loadImageFromBase64(t){return new Promise((e,i)=>{const o=new Image;o.onload=()=>e(o),o.onerror=i,o.src=t})}getTransformedSize(t,e,i){const o=i.canvasRotation+e.rotate;if(i.containWithinAspectRatio){if(o%2){const e=t.height/i.aspectRatio;return{width:Math.max(t.height,t.width*i.aspectRatio),height:Math.max(t.width,e)}}{const e=t.width/i.aspectRatio;return{width:Math.max(t.width,t.height*i.aspectRatio),height:Math.max(t.height,e)}}}return o%2?{height:t.width,width:t.height}:{width:t.width,height:t.height}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(o.Gb)({factory:function(){return new t},token:t,providedIn:"root"}),t})(),f=(()=>{class t{resetCropperPosition(t,e,i){const o=t.nativeElement;if(i.cropperStaticHeight&&i.cropperStaticWidth)e.x1=0,e.x2=o.offsetWidth>i.cropperStaticWidth?i.cropperStaticWidth:o.offsetWidth,e.y1=0,e.y2=o.offsetHeight>i.cropperStaticHeight?i.cropperStaticHeight:o.offsetHeight;else{const t=Math.min(i.cropperScaledMaxWidth,o.offsetWidth),a=Math.min(i.cropperScaledMaxHeight,o.offsetHeight);if(i.maintainAspectRatio)if(t/i.aspectRatio<a){e.x1=0,e.x2=t;const a=t/i.aspectRatio;e.y1=(o.offsetHeight-a)/2,e.y2=e.y1+a}else{e.y1=0,e.y2=a;const t=a*i.aspectRatio;e.x1=(o.offsetWidth-t)/2,e.x2=e.x1+t}else e.x1=0,e.x2=t,e.y1=0,e.y2=a}}move(t,e,i){const o=this.getClientX(t)-e.clientX,a=this.getClientY(t)-e.clientY;i.x1=e.x1+o,i.y1=e.y1+a,i.x2=e.x2+o,i.y2=e.y2+a}resize(t,e,i,o,a){const r=this.getClientX(t)-e.clientX,s=this.getClientY(t)-e.clientY;switch(e.position){case"left":i.x1=Math.min(Math.max(e.x1+r,i.x2-a.cropperScaledMaxWidth),i.x2-a.cropperScaledMinWidth);break;case"topleft":i.x1=Math.min(Math.max(e.x1+r,i.x2-a.cropperScaledMaxWidth),i.x2-a.cropperScaledMinWidth),i.y1=Math.min(Math.max(e.y1+s,i.y2-a.cropperScaledMaxHeight),i.y2-a.cropperScaledMinHeight);break;case"top":i.y1=Math.min(Math.max(e.y1+s,i.y2-a.cropperScaledMaxHeight),i.y2-a.cropperScaledMinHeight);break;case"topright":i.x2=Math.max(Math.min(e.x2+r,i.x1+a.cropperScaledMaxWidth),i.x1+a.cropperScaledMinWidth),i.y1=Math.min(Math.max(e.y1+s,i.y2-a.cropperScaledMaxHeight),i.y2-a.cropperScaledMinHeight);break;case"right":i.x2=Math.max(Math.min(e.x2+r,i.x1+a.cropperScaledMaxWidth),i.x1+a.cropperScaledMinWidth);break;case"bottomright":i.x2=Math.max(Math.min(e.x2+r,i.x1+a.cropperScaledMaxWidth),i.x1+a.cropperScaledMinWidth),i.y2=Math.max(Math.min(e.y2+s,i.y1+a.cropperScaledMaxHeight),i.y1+a.cropperScaledMinHeight);break;case"bottom":i.y2=Math.max(Math.min(e.y2+s,i.y1+a.cropperScaledMaxHeight),i.y1+a.cropperScaledMinHeight);break;case"bottomleft":i.x1=Math.min(Math.max(e.x1+r,i.x2-a.cropperScaledMaxWidth),i.x2-a.cropperScaledMinWidth),i.y2=Math.max(Math.min(e.y2+s,i.y1+a.cropperScaledMaxHeight),i.y1+a.cropperScaledMinHeight);break;case"center":const n=t.scale,h=Math.min(Math.max(a.cropperScaledMinWidth,Math.abs(e.x2-e.x1)*n),a.cropperScaledMaxWidth),c=Math.min(Math.max(a.cropperScaledMinHeight,Math.abs(e.y2-e.y1)*n),a.cropperScaledMaxHeight);i.x1=e.clientX-h/2,i.x2=e.clientX+h/2,i.y1=e.clientY-c/2,i.y2=e.clientY+c/2,i.x1<0?(i.x2-=i.x1,i.x1=0):i.x2>o.width&&(i.x1-=i.x2-o.width,i.x2=o.width),i.y1<0?(i.y2-=i.y1,i.y1=0):i.y2>o.height&&(i.y1-=i.y2-o.height,i.y2=o.height)}a.maintainAspectRatio&&this.checkAspectRatio(e.position,i,o,a)}checkAspectRatio(t,e,i,o){let a=0,r=0;switch(t){case"top":e.x2=e.x1+(e.y2-e.y1)*o.aspectRatio,a=Math.max(e.x2-i.width,0),r=Math.max(0-e.y1,0),(a>0||r>0)&&(e.x2-=r*o.aspectRatio>a?r*o.aspectRatio:a,e.y1+=r*o.aspectRatio>a?r:a/o.aspectRatio);break;case"bottom":e.x2=e.x1+(e.y2-e.y1)*o.aspectRatio,a=Math.max(e.x2-i.width,0),r=Math.max(e.y2-i.height,0),(a>0||r>0)&&(e.x2-=r*o.aspectRatio>a?r*o.aspectRatio:a,e.y2-=r*o.aspectRatio>a?r:a/o.aspectRatio);break;case"topleft":e.y1=e.y2-(e.x2-e.x1)/o.aspectRatio,a=Math.max(0-e.x1,0),r=Math.max(0-e.y1,0),(a>0||r>0)&&(e.x1+=r*o.aspectRatio>a?r*o.aspectRatio:a,e.y1+=r*o.aspectRatio>a?r:a/o.aspectRatio);break;case"topright":e.y1=e.y2-(e.x2-e.x1)/o.aspectRatio,a=Math.max(e.x2-i.width,0),r=Math.max(0-e.y1,0),(a>0||r>0)&&(e.x2-=r*o.aspectRatio>a?r*o.aspectRatio:a,e.y1+=r*o.aspectRatio>a?r:a/o.aspectRatio);break;case"right":case"bottomright":e.y2=e.y1+(e.x2-e.x1)/o.aspectRatio,a=Math.max(e.x2-i.width,0),r=Math.max(e.y2-i.height,0),(a>0||r>0)&&(e.x2-=r*o.aspectRatio>a?r*o.aspectRatio:a,e.y2-=r*o.aspectRatio>a?r:a/o.aspectRatio);break;case"left":case"bottomleft":e.y2=e.y1+(e.x2-e.x1)/o.aspectRatio,a=Math.max(0-e.x1,0),r=Math.max(e.y2-i.height,0),(a>0||r>0)&&(e.x1+=r*o.aspectRatio>a?r*o.aspectRatio:a,e.y2-=r*o.aspectRatio>a?r:a/o.aspectRatio);break;case"center":e.x2=e.x1+(e.y2-e.y1)*o.aspectRatio,e.y2=e.y1+(e.x2-e.x1)/o.aspectRatio;const t=Math.max(0-e.x1,0),s=Math.max(e.x2-i.width,0),n=Math.max(e.y2-i.height,0),h=Math.max(0-e.y1,0);(t>0||s>0||n>0||h>0)&&(e.x1+=n*o.aspectRatio>t?n*o.aspectRatio:t,e.x2-=h*o.aspectRatio>s?h*o.aspectRatio:s,e.y1+=h*o.aspectRatio>s?h:s/o.aspectRatio,e.y2-=n*o.aspectRatio>t?n:t/o.aspectRatio)}}getClientX(t){return(t.touches&&t.touches[0]?t.touches[0].clientX:t.clientX)||0}getClientY(t){return(t.touches&&t.touches[0]?t.touches[0].clientY:t.clientY)||0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t.ngInjectableDef=Object(o.Gb)({factory:function(){return new t},token:t,providedIn:"root"}),t})(),x=(()=>{class t{constructor(t,e,i,a,r){this.cropService=t,this.cropperPositionService=e,this.loadImageService=i,this.sanitizer=a,this.cd=r,this.Hammer="undefined"!=typeof window?window.Hammer:null,this.settings=new l,this.setImageMaxSizeRetries=0,this.marginLeft="0px",this.moveTypes=d,this.imageVisible=!1,this.format=this.settings.format,this.transform={},this.maintainAspectRatio=this.settings.maintainAspectRatio,this.aspectRatio=this.settings.aspectRatio,this.resizeToWidth=this.settings.resizeToWidth,this.resizeToHeight=this.settings.resizeToHeight,this.cropperMinWidth=this.settings.cropperMinWidth,this.cropperMinHeight=this.settings.cropperMinHeight,this.cropperMaxHeight=this.settings.cropperMaxHeight,this.cropperMaxWidth=this.settings.cropperMaxWidth,this.cropperStaticWidth=this.settings.cropperStaticWidth,this.cropperStaticHeight=this.settings.cropperStaticHeight,this.canvasRotation=this.settings.canvasRotation,this.initialStepSize=this.settings.initialStepSize,this.roundCropper=this.settings.roundCropper,this.onlyScaleDown=this.settings.onlyScaleDown,this.imageQuality=this.settings.imageQuality,this.autoCrop=this.settings.autoCrop,this.backgroundColor=this.settings.backgroundColor,this.containWithinAspectRatio=this.settings.containWithinAspectRatio,this.hideResizeSquares=this.settings.hideResizeSquares,this.cropper={x1:-100,y1:-100,x2:1e4,y2:1e4},this.alignImage=this.settings.alignImage,this.disabled=!1,this.imageCropped=new o.o,this.startCropImage=new o.o,this.imageLoaded=new o.o,this.cropperReady=new o.o,this.loadImageFailed=new o.o,this.reset()}ngOnChanges(t){this.onChangesUpdateSettings(t),this.onChangesInputImage(t),this.loadedImage&&this.loadedImage.original.image.complete&&(t.containWithinAspectRatio||t.canvasRotation)&&this.loadImageService.transformLoadedImage(this.loadedImage,this.settings).then(t=>this.setLoadedImage(t)).catch(t=>this.loadImageError(t)),t.cropper&&(this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize(),this.checkCropperPosition(!1),this.doAutoCrop(),this.cd.markForCheck()),t.aspectRatio&&this.imageVisible&&this.resetCropperPosition(),t.transform&&(this.transform=this.transform||{},this.setCssTransform(),this.doAutoCrop())}onChangesUpdateSettings(t){this.settings.setOptionsFromChanges(t),this.settings.cropperStaticHeight&&this.settings.cropperStaticWidth&&this.settings.setOptions({hideResizeSquares:!0,cropperMinWidth:this.settings.cropperStaticWidth,cropperMinHeight:this.settings.cropperStaticHeight,cropperMaxHeight:this.settings.cropperStaticHeight,cropperMaxWidth:this.settings.cropperStaticWidth,maintainAspectRatio:!1})}onChangesInputImage(t){(t.imageChangedEvent||t.imageURL||t.imageBase64||t.imageFile)&&this.reset(),t.imageChangedEvent&&this.isValidImageChangedEvent()&&this.loadImageFile(this.imageChangedEvent.target.files[0]),t.imageURL&&this.imageURL&&this.loadImageFromURL(this.imageURL),t.imageBase64&&this.imageBase64&&this.loadBase64Image(this.imageBase64),t.imageFile&&this.imageFile&&this.loadImageFile(this.imageFile)}isValidImageChangedEvent(){return this.imageChangedEvent&&this.imageChangedEvent.target&&this.imageChangedEvent.target.files&&this.imageChangedEvent.target.files.length>0}setCssTransform(){this.safeTransformStyle=this.sanitizer.bypassSecurityTrustStyle("scaleX("+(this.transform.scale||1)*(this.transform.flipH?-1:1)+")scaleY("+(this.transform.scale||1)*(this.transform.flipV?-1:1)+")rotate("+(this.transform.rotate||0)+"deg)")}ngOnInit(){this.settings.stepSize=this.initialStepSize,this.activatePinchGesture()}reset(){this.imageVisible=!1,this.loadedImage=null,this.safeImgDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=",this.moveStart={active:!1,type:null,position:null,x1:0,y1:0,x2:0,y2:0,clientX:0,clientY:0},this.maxSize={width:0,height:0},this.cropper.x1=-100,this.cropper.y1=-100,this.cropper.x2=1e4,this.cropper.y2=1e4}loadImageFile(t){this.loadImageService.loadImageFile(t,this.settings).then(t=>this.setLoadedImage(t)).catch(t=>this.loadImageError(t))}loadBase64Image(t){this.loadImageService.loadBase64Image(t,this.settings).then(t=>this.setLoadedImage(t)).catch(t=>this.loadImageError(t))}loadImageFromURL(t){this.loadImageService.loadImageFromURL(t,this.settings).then(t=>this.setLoadedImage(t)).catch(t=>this.loadImageError(t))}setLoadedImage(t){this.loadedImage=t,this.safeImgDataUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t.transformed.base64),this.cd.markForCheck()}loadImageError(t){console.error(t),this.loadImageFailed.emit()}imageLoadedInView(){null!=this.loadedImage&&(this.imageLoaded.emit(this.loadedImage),this.setImageMaxSizeRetries=0,setTimeout(()=>this.checkImageMaxSizeRecursively()))}checkImageMaxSizeRecursively(){this.setImageMaxSizeRetries>40?this.loadImageFailed.emit():this.sourceImageLoaded()?(this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize(),this.resetCropperPosition(),this.cropperReady.emit(Object.assign({},this.maxSize)),this.cd.markForCheck()):(this.setImageMaxSizeRetries++,setTimeout(()=>this.checkImageMaxSizeRecursively(),50))}sourceImageLoaded(){return this.sourceImage&&this.sourceImage.nativeElement&&this.sourceImage.nativeElement.offsetWidth>0}onResize(){this.loadedImage&&(this.resizeCropperPosition(),this.setMaxSize(),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize())}activatePinchGesture(){if(this.Hammer){const t=new this.Hammer(this.wrapper.nativeElement);t.get("pinch").set({enable:!0}),t.on("pinchmove",this.onPinch.bind(this)),t.on("pinchend",this.pinchStop.bind(this)),t.on("pinchstart",this.startPinch.bind(this))}else Object(o.V)()&&console.warn("[NgxImageCropper] Could not find HammerJS - Pinch Gesture won't work")}resizeCropperPosition(){const t=this.sourceImage.nativeElement;this.maxSize.width===t.offsetWidth&&this.maxSize.height===t.offsetHeight||(this.cropper.x1=this.cropper.x1*t.offsetWidth/this.maxSize.width,this.cropper.x2=this.cropper.x2*t.offsetWidth/this.maxSize.width,this.cropper.y1=this.cropper.y1*t.offsetHeight/this.maxSize.height,this.cropper.y2=this.cropper.y2*t.offsetHeight/this.maxSize.height)}resetCropperPosition(){this.cropperPositionService.resetCropperPosition(this.sourceImage,this.cropper,this.settings),this.doAutoCrop(),this.imageVisible=!0}keyboardAccess(t){this.changeKeyboardStepSize(t),this.keyboardMoveCropper(t)}changeKeyboardStepSize(t){t.key>="1"&&t.key<="9"&&(this.settings.stepSize=+t.key)}keyboardMoveCropper(t){if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t.key))return;const e=t.shiftKey?d.Resize:d.Move,i=t.altKey?function(t){switch(t){case"ArrowUp":return"bottom";case"ArrowRight":return"left";case"ArrowDown":return"top";case"ArrowLeft":default:return"right"}}(t.key):function(t){switch(t){case"ArrowUp":return"top";case"ArrowRight":return"right";case"ArrowDown":return"bottom";case"ArrowLeft":default:return"left"}}(t.key),o=function(t,e){switch(t){case"ArrowUp":return{clientX:0,clientY:-1*e};case"ArrowRight":return{clientX:e,clientY:0};case"ArrowDown":return{clientX:0,clientY:e};case"ArrowLeft":default:return{clientX:-1*e,clientY:0}}}(t.key,this.settings.stepSize);t.preventDefault(),t.stopPropagation(),this.startMove({clientX:0,clientY:0},e,i),this.moveImg(o),this.moveStop()}startMove(t,e,i=null){this.moveStart&&this.moveStart.active&&this.moveStart.type===d.Pinch||(t.preventDefault&&t.preventDefault(),this.moveStart=Object.assign({active:!0,type:e,position:i,clientX:this.cropperPositionService.getClientX(t),clientY:this.cropperPositionService.getClientY(t)},this.cropper))}startPinch(t){this.safeImgDataUrl&&(t.preventDefault&&t.preventDefault(),this.moveStart=Object.assign({active:!0,type:d.Pinch,position:"center",clientX:this.cropper.x1+(this.cropper.x2-this.cropper.x1)/2,clientY:this.cropper.y1+(this.cropper.y2-this.cropper.y1)/2},this.cropper))}moveImg(t){this.moveStart.active&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),this.moveStart.type===d.Move?(this.cropperPositionService.move(t,this.moveStart,this.cropper),this.checkCropperPosition(!0)):this.moveStart.type===d.Resize&&(this.cropperStaticWidth||this.cropperStaticHeight||this.cropperPositionService.resize(t,this.moveStart,this.cropper,this.maxSize,this.settings),this.checkCropperPosition(!1)),this.cd.detectChanges())}onPinch(t){this.moveStart.active&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),this.moveStart.type===d.Pinch&&(this.cropperPositionService.resize(t,this.moveStart,this.cropper,this.maxSize,this.settings),this.checkCropperPosition(!1)),this.cd.detectChanges())}setMaxSize(){if(this.sourceImage){const t=this.sourceImage.nativeElement;this.maxSize.width=t.offsetWidth,this.maxSize.height=t.offsetHeight,this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.maxSize.width/2+"px)")}}setCropperScaledMinSize(){this.loadedImage&&this.loadedImage.transformed&&this.loadedImage.transformed.image?(this.setCropperScaledMinWidth(),this.setCropperScaledMinHeight()):(this.settings.cropperScaledMinWidth=20,this.settings.cropperScaledMinHeight=20)}setCropperScaledMinWidth(){this.settings.cropperScaledMinWidth=this.cropperMinWidth>0?Math.max(20,this.cropperMinWidth/this.loadedImage.transformed.image.width*this.maxSize.width):20}setCropperScaledMinHeight(){this.settings.cropperScaledMinHeight=this.maintainAspectRatio?Math.max(20,this.settings.cropperScaledMinWidth/this.aspectRatio):this.cropperMinHeight>0?Math.max(20,this.cropperMinHeight/this.loadedImage.transformed.image.height*this.maxSize.height):20}setCropperScaledMaxSize(){if(this.loadedImage&&this.loadedImage.transformed&&this.loadedImage.transformed.image){const t=this.loadedImage.transformed.size.width/this.maxSize.width;this.settings.cropperScaledMaxWidth=this.cropperMaxWidth>20?this.cropperMaxWidth/t:this.maxSize.width,this.settings.cropperScaledMaxHeight=this.cropperMaxHeight>20?this.cropperMaxHeight/t:this.maxSize.height,this.maintainAspectRatio&&(this.settings.cropperScaledMaxWidth>this.settings.cropperScaledMaxHeight*this.aspectRatio?this.settings.cropperScaledMaxWidth=this.settings.cropperScaledMaxHeight*this.aspectRatio:this.settings.cropperScaledMaxWidth<this.settings.cropperScaledMaxHeight*this.aspectRatio&&(this.settings.cropperScaledMaxHeight=this.settings.cropperScaledMaxWidth/this.aspectRatio))}else this.settings.cropperScaledMaxWidth=this.maxSize.width,this.settings.cropperScaledMaxHeight=this.maxSize.height}checkCropperPosition(t=!1){this.cropper.x1<0&&(this.cropper.x2-=t?this.cropper.x1:0,this.cropper.x1=0),this.cropper.y1<0&&(this.cropper.y2-=t?this.cropper.y1:0,this.cropper.y1=0),this.cropper.x2>this.maxSize.width&&(this.cropper.x1-=t?this.cropper.x2-this.maxSize.width:0,this.cropper.x2=this.maxSize.width),this.cropper.y2>this.maxSize.height&&(this.cropper.y1-=t?this.cropper.y2-this.maxSize.height:0,this.cropper.y2=this.maxSize.height)}moveStop(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}pinchStop(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}doAutoCrop(){this.autoCrop&&this.crop()}crop(){if(this.sourceImage&&this.sourceImage.nativeElement&&null!=this.loadedImage.transformed.image){this.startCropImage.emit();const t=this.cropService.crop(this.sourceImage,this.loadedImage,this.cropper,this.settings);return null!=t&&this.imageCropped.emit(t),t}return null}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(m),o.Kb(f),o.Kb(u),o.Kb(s.b),o.Kb(o.i))},t.\u0275cmp=o.Eb({type:t,selectors:[["image-cropper"]],viewQuery:function(t,e){if(1&t&&(o.sc(n,3),o.sc(h,1)),2&t){let t;o.hc(t=o.Yb())&&(e.wrapper=t.first),o.hc(t=o.Yb())&&(e.sourceImage=t.first)}},hostVars:4,hostBindings:function(t,e){1&t&&o.Xb("resize",function(){return e.onResize()},!1,o.jc)("mousemove",function(t){return e.moveImg(t)},!1,o.ic)("touchmove",function(t){return e.moveImg(t)},!1,o.ic)("mouseup",function(){return e.moveStop()},!1,o.ic)("touchend",function(){return e.moveStop()},!1,o.ic),2&t&&(o.nc("text-align",e.alignImage),o.Cb("disabled",e.disabled))},inputs:{format:"format",transform:"transform",maintainAspectRatio:"maintainAspectRatio",aspectRatio:"aspectRatio",resizeToWidth:"resizeToWidth",resizeToHeight:"resizeToHeight",cropperMinWidth:"cropperMinWidth",cropperMinHeight:"cropperMinHeight",cropperMaxHeight:"cropperMaxHeight",cropperMaxWidth:"cropperMaxWidth",cropperStaticWidth:"cropperStaticWidth",cropperStaticHeight:"cropperStaticHeight",canvasRotation:"canvasRotation",initialStepSize:"initialStepSize",roundCropper:"roundCropper",onlyScaleDown:"onlyScaleDown",imageQuality:"imageQuality",autoCrop:"autoCrop",backgroundColor:"backgroundColor",containWithinAspectRatio:"containWithinAspectRatio",hideResizeSquares:"hideResizeSquares",cropper:"cropper",alignImage:"alignImage",disabled:"disabled",imageChangedEvent:"imageChangedEvent",imageURL:"imageURL",imageBase64:"imageBase64",imageFile:"imageFile"},outputs:{imageCropped:"imageCropped",startCropImage:"startCropImage",imageLoaded:"imageLoaded",cropperReady:"cropperReady",loadImageFailed:"loadImageFailed"},features:[o.yb],decls:5,vars:10,consts:[["wrapper",""],["class","source-image",3,"src","visibility","transform","load",4,"ngIf"],[1,"overlay"],["class","cropper","tabindex","0",3,"rounded","top","left","width","height","margin-left","visibility","keydown",4,"ngIf"],[1,"source-image",3,"src","load"],["sourceImage",""],["tabindex","0",1,"cropper",3,"keydown"],[1,"move",3,"mousedown","touchstart"],[4,"ngIf"],[1,"resize","topleft",3,"mousedown","touchstart"],[1,"square"],[1,"resize","top"],[1,"resize","topright",3,"mousedown","touchstart"],[1,"resize","right"],[1,"resize","bottomright",3,"mousedown","touchstart"],[1,"resize","bottom"],[1,"resize","bottomleft",3,"mousedown","touchstart"],[1,"resize","left"],[1,"resize-bar","top",3,"mousedown","touchstart"],[1,"resize-bar","right",3,"mousedown","touchstart"],[1,"resize-bar","bottom",3,"mousedown","touchstart"],[1,"resize-bar","left",3,"mousedown","touchstart"]],template:function(t,e){1&t&&(o.Pb(0,"div",null,0),o.oc(2,c,2,5,"img",1),o.Lb(3,"div",2),o.oc(4,g,3,15,"div",3),o.Ob()),2&t&&(o.nc("background",e.imageVisible&&e.backgroundColor),o.Ab(2),o.ec("ngIf",e.safeImgDataUrl),o.Ab(1),o.nc("width",e.maxSize.width,"px")("height",e.maxSize.height,"px")("margin-left","center"===e.alignImage?e.marginLeft:null),o.Ab(1),o.ec("ngIf",e.imageVisible))},directives:[r.j],styles:['[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}'],changeDetection:0}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({imports:[[r.b]]}),t})()}}]);