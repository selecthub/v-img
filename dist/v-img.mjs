!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=" *[data-v-0d2552ba] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-0d2552ba] { z-index: 9999; height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, .7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-0d2552ba] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-0d2552ba] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, .3); height: 50px; z-index: 9999; display: flex; justify-content: space-between; align-items: center; } .title-v-img[data-v-0d2552ba] { font-family: 'Avenir', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; color: white; text-align: center; max-height: 100%; overflow: auto; } .count-v-img[data-v-0d2552ba], .close-v-img[data-v-0d2552ba] { width: 80px; font-family: 'Avenir', Helvetica, Arial, sans-serif; line-height: 50px; } .count-v-img[data-v-0d2552ba] { font-size: 15px; color: white; margin-left: 10px; } .close-v-img[data-v-0d2552ba] { margin-right: 10px; color: #E5E6EB; font-size: 30px; cursor: pointer; -webkit-transition: color .4s ease-in-out; transition: color .4s ease-in-out; text-align: right; } .close-v-img[data-v-0d2552ba]:hover { color: white; } .prev-v-img svg[data-v-0d2552ba], .next-v-img svg[data-v-0d2552ba] { margin: 5px auto; } .prev-v-img[data-v-0d2552ba], .next-v-img[data-v-0d2552ba] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: 'Avenir', Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, .3); z-index: 1000; opacity: .3; -webkit-transition: opacity .3s ease-in-out; transition: opacity .3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-0d2552ba]:hover, .next-v-img[data-v-0d2552ba]:hover { opacity: 1; } .prev-v-img[data-v-0d2552ba] { left: 10px; } .next-v-img[data-v-0d2552ba] { right: 10px; } .v-img-fade-enter[data-v-0d2552ba], .v-img-fade-leave-to[data-v-0d2552ba] { opacity: 0; } .v-img-fade-enter-active[data-v-0d2552ba], .v-img-fade-leave-active[data-v-0d2552ba] { -webkit-transition: opacity .3s ease-in-out; transition: opacity .3s ease-in-out; } .body-fs-v-img {} ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}}();var ImgScreen={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{appear:"",name:"v-img-fade"}},[e.closed?e._e():i("div",{staticClass:"fullscreen-v-img",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.close()}}},[i("div",{staticClass:"header-v-img"},[i("span",{staticClass:"count-v-img"},[e.images.length>1?i("span",[e._v(e._s(e.currentImageIndex+1)+"/"+e._s(e.images.length)+" ")]):e._e()]),i("span",{staticClass:"title-v-img"},[e._v(e._s(e.titles[e.currentImageIndex])+" ")]),i("span",{staticClass:"close-v-img",on:{click:e.close}},[e._v("×")])]),i("transition",{attrs:{appear:"",name:"v-img-fade"}},[e.visibleUI&&1!==e.images.length?i("span",{staticClass:"prev-v-img",on:{click:e.prev}},[i("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z",fill:"#fff"}})])]):e._e()]),i("transition",{attrs:{appear:"",name:"v-img-fade"}},[e.visibleUI&&1!==e.images.length?i("span",{staticClass:"next-v-img",on:{click:e.next}},[i("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z",fill:"#fff"}})])]):e._e()]),i("div",{staticClass:"content-v-img"},[i("img",{attrs:{src:e.images[e.currentImageIndex]},on:{click:e.next}})])],1)])},staticRenderFns:[],_scopeId:"data-v-0d2552ba",data:function(){return{images:[],titles:[],visibleUI:!0,currentImageIndex:0,closed:!0,uiTimeout:null}},methods:{close:function(){document.querySelector("body").classList.remove("body-fs-v-img"),this.images=[],this.currentImageIndex=0,this.closed=!0},next:function(){this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0},prev:function(){this.currentImageIndex>0?this.currentImageIndex--:this.currentImageIndex=this.images.length-1},showUI:function(){var e=this;clearTimeout(this.uiTimeout),this.visibleUI=!0,this.uiTimeout=setTimeout(function(){e.visibleUI=!1},3500)}},created:function(){var e=this;window.addEventListener("keyup",function(t){27!==t.keyCode&&81!==t.keyCode||e.close(),39!==t.keyCode&&76!==t.keyCode||e.next(),37!==t.keyCode&&72!==t.keyCode||e.prev()}),window.addEventListener("scroll",function(){e.close()}),window.addEventListener("mousemove",function(){e.showUI()})}},babelHelpers={},asyncGenerator=function(){function e(e){this.value=e}function t(t){function i(a,r){try{var o=t[a](r),s=o.value;s instanceof e?Promise.resolve(s.value).then(function(e){i("next",e)},function(e){i("throw",e)}):n(o.done?"return":"normal",o.value)}catch(e){n("throw",e)}}function n(e,t){switch(e){case"return":a.resolve({value:t,done:!0});break;case"throw":a.reject(t);break;default:a.resolve({value:t,done:!1})}(a=a.next)?i(a.key,a.arg):r=null}var a,r;this._invoke=function(e,t){return new Promise(function(n,o){var s={key:e,arg:t,resolve:n,reject:o,next:null};r?r=r.next=s:(a=r=s,i(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)},install=function(e,t){var i=e.extend(ImgScreen),n={altAsTitle:!1};t=Object.assign(n,t),e.directive("img",{bind:function(n,a){var r="pointer",o=n.src,s=a.arg||null,c=void 0;t.altAsTitle&&(c=n.alt),void 0!==a.value&&(r=a.value.cursor||r,o=a.value.src||o,s=a.value.group||s,c=a.value.title||c),n.setAttribute("data-vue-img-group",s||""),n.setAttribute("data-vue-img-src",o),n.setAttribute("data-vue-img-title",c||""),o||console.error("v-img element missing src parameter."),n.style.cursor=r;var l=window.vueImg;if(!l){var d=document.createElement("div");d.setAttribute("id","imageScreen"),document.querySelector("body").appendChild(d),l=window.vueImg=(new i).$mount("#imageScreen")}n.addEventListener("click",function(){document.querySelector("body").classList.add("body-fs-v-img");var t=[].concat(toConsumableArray(document.querySelectorAll('img[data-vue-img-group="'+s+'"]')));0==t.length?(e.set(l,"images",[o]),e.set(l,"titles",[c])):(e.set(l,"images",t.map(function(e){return e.dataset.vueImgSrc})),e.set(l,"titles",t.map(function(e){return e.dataset.vueImgTitle})),e.set(l,"currentImageIndex",t.indexOf(n))),e.set(l,"closed",!1)})}})};export default install;
//# sourceMappingURL=v-img.mjs.map
