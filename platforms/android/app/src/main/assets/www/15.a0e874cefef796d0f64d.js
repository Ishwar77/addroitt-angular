(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Ef75:function(e,t,o){"use strict";o.r(t),o.d(t,"CropPageModule",function(){return b});var i=o("ofXK"),a=o("3Pt+"),n=o("TEn/"),r=o("tyNb"),s=o("fXoL"),c=o("rIor");const p=[{path:"",component:(()=>{class e{constructor(e){this.modalController=e}ngOnInit(){this.myImage=this.image}imageCropped(e){this.croppedImageBase64=e.base64}dismissModal(){this.modalController.dismiss(this.croppedImageBase64)}imageLoaded(e){}cropperReady(){}loadImageFailed(){}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(n.P))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-crop"]],inputs:{image:"image"},decls:9,vars:5,consts:[["outputType","base64","format","png",3,"imageBase64","maintainAspectRatio","aspectRatio","resizeToWidth","imageCropped"],[3,"src"],[3,"click"]],template:function(e,t){1&e&&(s.Pb(0,"ion-header"),s.Pb(1,"ion-toolbar"),s.Pb(2,"ion-title"),s.pc(3,"crop"),s.Ob(),s.Ob(),s.Ob(),s.Pb(4,"ion-content"),s.Pb(5,"image-cropper",0),s.Xb("imageCropped",function(e){return t.imageCropped(e)}),s.Ob(),s.Lb(6,"img",1),s.Pb(7,"ion-button",2),s.Xb("click",function(){return t.dismissModal()}),s.pc(8,"Crop"),s.Ob(),s.Ob()),2&e&&(s.Ab(5),s.ec("imageBase64",t.myImage)("maintainAspectRatio",!!t.myImage.aspectRatio)("aspectRatio",t.myImage.aspectRatio?t.myImage.aspectRatio:1)("resizeToWidth",t.myImage.resizeTo?t.myImage.resizeTo:1200),s.Ab(1),s.ec("src",t.croppedImage,s.lc))},directives:[n.r,n.L,n.J,n.n,c.a,n.e],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[r.i.forChild(p)],r.i]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[i.b,a.d,n.M,m,c.b]]}),e})()}}]);