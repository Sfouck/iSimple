(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["epaper"],{"2af9":function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return h}));var a=r("3020"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"modal",appear:"","appear-class":"modal-enter","appear-active-class":"modal-enter-active","appear-to-class":"modal-enter-to"}},[r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container"},[r("div",{staticClass:"modal-header"},[t._t("header")],2),r("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2),r("div",{staticClass:"modal-footer"},[t._t("footer")],2),r("a",{staticClass:"modal-btn-close",on:{click:function(e){return t.$emit("close")}}})])])])])},o=[],n={name:"IModal"},s=n,c=(r("6cf5"),r("2877")),l=Object(c["a"])(s,i,o,!1,null,"7c21b3c0",null),p=l.exports,d=r("4cc3"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card__thumb"},[t._t("thumbnail",(function(){return[r("img",{attrs:{src:t.img,alt:"card_thumb"}})]}))],2),r("div",{staticClass:"card__content card"},[r("div",{staticClass:"text-area"},[r("div",{staticClass:"text-area__title"},[t._t("title",(function(){return[r("h4",[t._v(t._s(t.title))])]}))],2),r("div",{staticClass:"text-area__description"},[t._t("description",(function(){return[r("h5",[t._v(t._s(t.description))])]}))],2)]),r("div",{staticClass:"tag-area"},t._l(t.tags,(function(e,a){return r("a",{key:a},[t._v(" #"+t._s(e)+" ")])})),0)]),t.link?r("div",{staticClass:"card__link-box"},[r("router-link",{attrs:{to:t.link}},[r("p",[t._v("深入瞭解")])])],1):t._e()])},u=[],f={name:"ICard",props:["img","title","description","tags","link"]},m=f,g=(r("65ee"),Object(c["a"])(m,_,u,!1,null,"1b22881b",null)),h=g.exports;a["a"],d["a"]},"2bba":function(t,e,r){},"48ce":function(t,e,r){"use strict";r("b8b2")},"553d":function(t,e,r){},"56b7":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page__epaper"},[r("i-cover",{attrs:{"background-url":t.cover_image},scopedSlots:t._u([{key:"title",fn:function(){return[r("h1",[t._v("電子報")])]},proxy:!0}])}),r("article",{staticClass:"epaper"},[r("section",t._l(t.epaper_list,(function(e,a){return r("i-card",t._b({key:a},"i-card",e,!1))})),1)])],1)},i=[],o=r("2af9"),n=r("ead1");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={data:function(){return{cover_image:"cover/page/epaper.jpg",epaper_list:n["a"].map((function(t){return c(c({},t),{},{link:"/detail/".concat(t.id),img:"/img/detail/".concat(t.img_folder,"/cover.jpg")})}))}},computed:{},filters:{},methods:{},components:{iCard:o["a"]}},d=p,_=(r("48ce"),r("2877")),u=Object(_["a"])(d,a,i,!1,null,null,null);e["default"]=u.exports},"65ee":function(t,e,r){"use strict";r("2bba")},"6cf5":function(t,e,r){"use strict";r("553d")},b8b2:function(t,e,r){},ead1:function(t,e,r){"use strict";for(var a=[{title:"五木工坊",post_title:"木作 追求一種純真的感動",author:{writer:["陳湘琴","陳滋妤"],photographer:["江昕儒"]},post_name:"Woodwork",img_folder:"woodwork",description:"不惑之年的楊詔期先生,從事木工產業已逾 16 年。逐漸地體會到土木工程並非自己的志業,在 2008 年毅然決然地回到水林老家。",tags:["五木工坊","品牌設計"],created_at:"2019-07-02"},{title:"祥美餅舖",post_title:"餅舖  陪伴我們人生四季",author:{writer:["陳湘琴","康慧賢"],photographer:["江昕儒"]},post_name:"Baking",img_folder:"baking",description:"「祥美餅舖」位於水林市場附近，以預約訂購方式營運的傳統糕餅店。李重賢老闆曾經在台中上班，目前是餅舖的第二代。從小就他在家裡幫忙，每逢過年過節店裡總是應接不暇。",tags:["祥美餅舖","地方美食"],created_at:"2019-09-07"},{title:"憨吉客棧",post_title:"憨吉客棧 成就良善",author:{writer:["陳湘琴","黎俐妘"],photographer:["陳湘琴","吳世明","江昕儒"]},post_name:"Inn",img_folder:"inn",description:"現任水林蕃薯社區理事長吳世明先生，是蕃薯厝的愛護者。上任後立即參與雲林縣第九屆社區環境改善的培訓課程和PK賽。大家一起同心協力改造，並將食堂命名為「憨吉客棧」。最後從20個社區脫穎而出，榮獲金牌獎勵。",tags:["憨吉客棧","社區規劃"],created_at:"2019-08-25"},{title:"地瓜校長",post_title:"退休 也能成為一種力量",author:{writer:["陳湘琴","黎俐妘"],photographer:["黎俐妘"]},post_name:"PrincipalOfSweetpotato",img_folder:"principal_of_sweetpotato",description:"現年76歲的李高章先生是一位退休校長，是道地水林大溝村的居民。因為家裡務農，從小他就與鄉間的地瓜田有著深切的連結。",tags:["地瓜校長","自然農法"],created_at:"2019-08-26"},{title:"建影陶形",post_title:"仰望天空 返鄉追夢",author:{writer:["陳湘琴","康慧賢"],photographer:["江昕儒"]},post_name:"LandPottery",img_folder:"land_pottery",description:"出生於台北的79年次年輕陶藝工作者郭建佑先生，每逢過年過節便跟隨著父母，回到水林蔦松探望親族好友，因此從小就對於台北和雲林不同環境的反差深感好奇，每逢返鄉令他充滿期待，他喜歡家鄉節慶時的歡樂、親族間活絡的溫暖，在高中的時候就埋下了返鄉的意念。",tags:["建影陶形","藝術創作"],created_at:"2019-08-14"},{title:"水賊林",post_title:"友善土地  翻轉生命",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘"]},post_name:"PirateFarmer",img_folder:"pirate_farmer",description:"蔡得黃，綽號：菜刀。曾經任職於傳播事業的他，2010年返鄉回到水林進行土地耕種。雖然是農家子弟，但沒有任何務農經驗他，回憶起剛開始：「夏天都要早起下田，約莫五點多，不然會熱到凍末條。很多眉眉角角，譬如說工人要打給誰、何時要施藥施肥、何處買資材等問題…。",tags:["水賊林","友善土地組合"],created_at:"2019-09-02"},{title:"黃金蝙蝠館",post_title:"讓蝙蝠的生態環境 預約幸福",author:{writer:["陳湘琴","黎俐妘"],photographer:["黎俐妘","張恒嘉"]},post_name:"BatPavilion",img_folder:"bat_pavilion",description:"黃金蝙蝠館的創辦人兼館長張恒嘉是北港人，在1985年離開大學後便在水林鄉誠正國小實習。「到水林就職的第一天，就在蘇秦衛生室看到黃金蝙蝠，從那天起我就會在戶外四處觀察蝙蝠的出沒！」張館長回憶起剛來水林時說道。",tags:["黃金蝙蝠","友善環境"],created_at:"2019-09-02"},{title:"涼心青草茶",post_title:"堅持傳統古味 三代接力青草茶",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘"]},post_name:"HerbTea",img_folder:"herb_tea",description:"在雲林縣水林國小圍牆轉角，有一處竹管茅草的傳統茶攤是「涼心青草茶」。茶攤第一代經營者是王錦村老闆，他在當年退伍後，因為向一位熟悉青草種類的中醫師習得配方之後，就開始在舊水林公所前開業，目前由第二代王建二老闆接任父親的事業。",tags:["黃金蝙蝠","友善環境"],created_at:"2019-09-02"},{title:"風箏校長",post_title:"千錘百鍊  翱翔世界",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘","吳盛合"]},post_name:"PrincipalOfKite",img_folder:"principal_of_kite",description:"年近70歲口湖成龍國小退休校長侯順政先生，定居於水林已有31年。當時1980年代正逢全國在推動民俗體育之時，風箏運動還不是很風行之際，侯校長為了突破個人的表現，便毅然決然地投入這項民俗運動。",tags:["風箏校長","民俗體育"],created_at:"2019-09-02"},{title:"鮮禾屋",post_title:"把用心當作美食的交流",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘"]},post_name:"XianheHouse",img_folder:"xianhe_house",description:"鮮禾屋的老闆鄭清任先生曾經是銀行員，太太蔡芷涵是經營補習班的老師，兩人都是道地的水林人，平常都熱愛美食。鄭老闆表示：「剛開始是我小舅子在北部餐廳當主廚，待過很多餐廳，目前在北港經營餐館，他擅長廣式料理，很會做餐前小菜。",tags:["鮮禾屋","友善環境"],created_at:"2019-09-08"}],i=0;i<a.length;i++)a[i].id=i+1;e["a"]=a}}]);
//# sourceMappingURL=epaper.27f7e1b0.js.map