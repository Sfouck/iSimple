(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"017d":function(t,e,a){"use strict";a("85b3")},"054a":function(t,e,a){"use strict";a("b956")},"2af9":function(t,e,a){"use strict";a.d(e,"b",(function(){return d})),a.d(e,"a",(function(){return p}));var i=a("3020"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal",appear:"","appear-class":"modal-enter","appear-active-class":"modal-enter-active","appear-to-class":"modal-enter-to"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2),a("a",{staticClass:"modal-btn-close",on:{click:function(e){return t.$emit("close")}}})])])])])},r=[],s={name:"IModal"},o=s,c=(a("6cf5"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,"7c21b3c0",null),d=l.exports,u=a("4cc3"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card__thumb"},[t._t("thumbnail",(function(){return[a("img",{attrs:{src:t.img,alt:"card_thumb"}})]}))],2),a("div",{staticClass:"card__content card"},[a("div",{staticClass:"text-area"},[a("div",{staticClass:"text-area__title"},[t._t("title",(function(){return[a("h4",[t._v(t._s(t.title))])]}))],2),a("div",{staticClass:"text-area__description"},[t._t("description",(function(){return[a("h5",[t._v(t._s(t.description))])]}))],2)]),a("div",{staticClass:"tag-area"},t._l(t.tags,(function(e,i){return a("a",{key:i},[t._v(" #"+t._s(e)+" ")])})),0)]),t.link?a("div",{staticClass:"card__link-box"},[a("router-link",{attrs:{to:t.link}},[a("p",[t._v("深入瞭解")])])],1):t._e()])},v=[],h={name:"ICard",props:["img","title","description","tags","link"]},_=h,m=(a("017d"),Object(c["a"])(_,f,v,!1,null,"2926399d",null)),p=m.exports;i["a"],u["a"]},"553d":function(t,e,a){},"6cf5":function(t,e,a){"use strict";a("553d")},"85b3":function(t,e,a){},acca:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"page__projects"},[a("i-cover",{staticClass:"projects__cover",attrs:{"background-url":t.cover_image},scopedSlots:t._u([{key:"title",fn:function(){return[a("h1",[t._v("過往水林")])]},proxy:!0}])}),a("section",{staticClass:"projects__video-grid cards",class:{showing:t.cards.isShowing}},t._l(t.video_list,(function(e){return a("div",{key:e.id,staticClass:"card"},[a("div",{staticClass:"card__thumb"},[a("img",{attrs:{src:e.thumbnail,alt:""}})]),a("div",{staticClass:"card__title"},[a("a",{staticClass:"btn toggler-info",on:{click:function(a){return t.showVideo(e.id)}}},[a("span",{staticClass:"left"}),a("span",{staticClass:"right"})]),a("h2",[t._v("\n          "+t._s(e.vtitle)+"\n          "),a("small",[t._v(t._s(e.created))])])])])})),0),t.showModal?a("i-modal",{on:{close:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[a("div",{staticClass:"video-wrapper"},[a("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute"},attrs:{src:t.current_video.url,frameborder:"0",allowfullscreen:"1",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",width:"640",height:"360"}})])]},proxy:!0}],null,!1,2937127233)}):t._e()],1)},n=[],r=a("2af9");function s(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=o(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){c=!0,r=t},f:function(){try{s||null==a.return||a.return()}finally{if(c)throw r}}}}function o(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}var l={data:function(){return{showModal:!1,card:{hasShow:!1,isShowing:!1},cards:{hasShow:!1,isShowing:!1},cover_image:"/cover/page/video.jpg",video_list:[{vid:"1DXUWTUX4gU",vtitle:"水林小陳",created:"2019-10-13"},{vid:"HoVayGW_Dtc",vtitle:"五木工坊",created:"2019-10-13"}],current_video:""}},created:function(){var t,e=0,a=s(this.video_list);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.id=e++,i.url="//www.youtube.com/embed/".concat(i.vid),i.thumbnail="//img.youtube.com/vi/".concat(i.vid,"/0.jpg")}}catch(n){a.e(n)}finally{a.f()}this.current_video=this.video_list[0]},mounted:function(){var t,e=document.getElementsByClassName("card"),a=this,i=s(e);try{var n=function(){var e=t.value;e.addEventListener("click",(function(){a.cardShowing(e)}))};for(i.s();!(t=i.n()).done;)n()}catch(r){i.e(r)}finally{i.f()}},methods:{cardShowing:function(t){if(this.cards.isShowing){var e=t.classList.contains("show"),a=document.querySelector(".card.show");a.classList.remove("class","show"),e?this.cards.isShowing=!1:t.classList.add("show")}else this.cards.isShowing=!0,t.classList.add("show")},showVideo:function(t){this.current_video=this.video_list[t],this.showModal=!0}},components:{"i-modal":r["b"]}},d=l,u=(a("054a"),a("2877")),f=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=f.exports},b956:function(t,e,a){}}]);