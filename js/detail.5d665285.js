(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{a106:function(t,e,a){},c84b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__detail"},[a("i-cover",{staticClass:"detail__cover",attrs:{"background-url":t.cover_background}}),a("article",{staticClass:"post detail__post"},[a("div",{staticClass:"post__title"},[a("h1",[t._v(t._s(t.post.post_title))])]),a("div",{staticClass:"post__tags"},t._l(t.post.tags,(function(e,o){return a("a",{key:o,attrs:{href:""}},[t._v("\n        #"+t._s(e)+"\n      ")])})),0),a("div",{staticClass:"post__content"},[a(t.post_component,{ref:"postContent",tag:"component"})],1),a("div",{staticClass:"post__share-box"},[t._t("share-box")],2)])],1)},r=[],i=a("ead1"),n={name:"IDetail",data:function(){return{cover_background:"cover/page/home.jpg",post:{},post_component:null}},created:function(){this.fetchPostData();var t="".concat(this.post.post_name,".vue");this.post_component=function(){return{component:a("ecd6")("./".concat(t)),delay:200,timeout:3e3}},this.cover_background="/detail/".concat(this.post.img_folder,"/cover.jpg")},methods:{fetchPostData:function(){var t=this.$route.params,e=i["a"].find((function(e){return e.id==t.id}));e&&(this.post=e)}}},c=n,s=(a("ed23"),a("2877")),p=Object(s["a"])(c,o,r,!1,null,null,null);e["default"]=p.exports},ead1:function(t,e,a){"use strict";for(var o=[{title:"五木工坊",post_title:"木作 追求一種純真的感動",author:{writer:["陳湘琴","陳滋妤"],photographer:["江昕儒"]},post_name:"Woodwork",img_folder:"woodwork",description:"不惑之年的楊詔期先生,從事木工產業已逾 16 年。逐漸地體會到土木工程並非自己的志業,在 2008 年毅然決然地回到水林老家。",tags:["五木工坊","品牌設計"],created_at:"2019-07-02"},{title:"祥美餅舖",post_title:"餅舖  陪伴我們人生四季",author:{writer:["陳湘琴","康慧賢"],photographer:["江昕儒"]},post_name:"Baking",img_folder:"baking",description:"「祥美餅舖」位於水林市場附近，以預約訂購方式營運的傳統糕餅店。李重賢老闆曾經在台中上班，目前是餅舖的第二代。從小就他在家裡幫忙，每逢過年過節店裡總是應接不暇。",tags:["祥美餅舖","地方美食"],created_at:"2019-09-07"},{title:"憨吉客棧",post_title:"憨吉客棧 成就良善",author:{writer:["陳湘琴","黎俐妘"],photographer:["陳湘琴","吳世明","江昕儒"]},post_name:"Inn",img_folder:"inn",description:"現任水林蕃薯社區理事長吳世明先生，是蕃薯厝的愛護者。上任後立即參與雲林縣第九屆社區環境改善的培訓課程和PK賽。大家一起同心協力改造，並將食堂命名為「憨吉客棧」。最後從20個社區脫穎而出，榮獲金牌獎勵。",tags:["憨吉客棧","社區規劃"],created_at:"2019-08-25"},{title:"地瓜校長",post_title:"退休 也能成為一種力量",author:{writer:["陳湘琴","黎俐妘"],photographer:["黎俐妘"]},post_name:"PrincipalOfSweetpotato",img_folder:"principal_of_sweetpotato",description:"現年76歲的李高章先生是一位退休校長，是道地水林大溝村的居民。因為家裡務農，從小他就與鄉間的地瓜田有著深切的連結。",tags:["地瓜校長","自然農法"],created_at:"2019-08-26"},{title:"建影陶形",post_title:"仰望天空 返鄉追夢",author:{writer:["陳湘琴","康慧賢"],photographer:["江昕儒"]},post_name:"LandPottery",img_folder:"land_pottery",description:"出生於台北的79年次年輕陶藝工作者郭建佑先生，每逢過年過節便跟隨著父母，回到水林蔦松探望親族好友，因此從小就對於台北和雲林不同環境的反差深感好奇，每逢返鄉令他充滿期待，他喜歡家鄉節慶時的歡樂、親族間活絡的溫暖，在高中的時候就埋下了返鄉的意念。",tags:["建影陶形","藝術創作"],created_at:"2019-08-14"},{title:"水賊林",post_title:"友善土地  翻轉生命",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘"]},post_name:"PirateFarmer",img_folder:"pirate_farmer",description:"蔡得黃，綽號：菜刀。曾經任職於傳播事業的他，2010年返鄉回到水林進行土地耕種。雖然是農家子弟，但沒有任何務農經驗他，回憶起剛開始：「夏天都要早起下田，約莫五點多，不然會熱到凍末條。很多眉眉角角，譬如說工人要打給誰、何時要施藥施肥、何處買資材等問題…。",tags:["水賊林","友善土地組合"],created_at:"2019-09-02"},{title:"黃金蝙蝠館",post_title:"讓蝙蝠的生態環境 預約幸福",author:{writer:["陳湘琴","黎俐妘"],photographer:["黎俐妘","張恒嘉"]},post_name:"BatPavilion",img_folder:"bat_pavilion",description:"黃金蝙蝠館的創辦人兼館長張恒嘉是北港人，在1985年離開大學後便在水林鄉誠正國小實習。「到水林就職的第一天，就在蘇秦衛生室看到黃金蝙蝠，從那天起我就會在戶外四處觀察蝙蝠的出沒！」張館長回憶起剛來水林時說道。",tags:["黃金蝙蝠","友善環境"],created_at:"2019-09-02"},{title:"涼心青草茶",post_title:"堅持傳統古味 三代接力青草茶",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘"]},post_name:"HerbTea",img_folder:"herb_tea",description:"在雲林縣水林國小圍牆轉角，有一處竹管茅草的傳統茶攤是「涼心青草茶」。茶攤第一代經營者是王錦村老闆，他在當年退伍後，因為向一位熟悉青草種類的中醫師習得配方之後，就開始在舊水林公所前開業，目前由第二代王建二老闆接任父親的事業。",tags:["黃金蝙蝠","友善環境"],created_at:"2019-09-02"},{title:"風箏校長",post_title:"千錘百鍊  翱翔世界",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘","吳盛合"]},post_name:"PrincipalOfKite",img_folder:"principal_of_kite",description:"年近70歲口湖成龍國小退休校長侯順政先生，定居於水林已有31年。當時1980年代正逢全國在推動民俗體育之時，風箏運動還不是很風行之際，侯校長為了突破個人的表現，便毅然決然地投入這項民俗運動。",tags:["風箏校長","民俗體育"],created_at:"2019-09-02"},{title:"鮮禾屋",post_title:"把用心當作美食的交流",author:{writer:["陳湘琴","康慧賢"],photographer:["黎俐妘"]},post_name:"XianheHouse",img_folder:"xianhe_house",description:"鮮禾屋的老闆鄭清任先生曾經是銀行員，太太蔡芷涵是經營補習班的老師，兩人都是道地的水林人，平常都熱愛美食。鄭老闆表示：「剛開始是我小舅子在北部餐廳當主廚，待過很多餐廳，目前在北港經營餐館，他擅長廣式料理，很會做餐前小菜。",tags:["鮮禾屋","友善環境"],created_at:"2019-09-08"}],r=0;r<o.length;r++)o[r].id=r+1;e["a"]=o},ecd6:function(t,e,a){var o={"./Baking":["94dc","chunk-1346fb2c"],"./Baking.vue":["94dc","chunk-1346fb2c"],"./BatPavilion":["4f7c","chunk-2b732948"],"./BatPavilion.vue":["4f7c","chunk-2b732948"],"./HerbTea":["8c14","chunk-916f9410"],"./HerbTea.vue":["8c14","chunk-916f9410"],"./Inn":["98ec","chunk-309c2c2e"],"./Inn.vue":["98ec","chunk-309c2c2e"],"./LandPottery":["9ce6","chunk-0dba5f6b"],"./LandPottery.vue":["9ce6","chunk-0dba5f6b"],"./PirateFarmer":["0f02","chunk-1478580e"],"./PirateFarmer.vue":["0f02","chunk-1478580e"],"./PrincipalOfKite":["ed2a","chunk-9e3d9590"],"./PrincipalOfKite.vue":["ed2a","chunk-9e3d9590"],"./PrincipalOfSweetpotato":["fdaa","chunk-092af5b0"],"./PrincipalOfSweetpotato.vue":["fdaa","chunk-092af5b0"],"./Woodwork":["37dd","chunk-59f67f3c"],"./Woodwork.vue":["37dd","chunk-59f67f3c"],"./XianheHouse":["7aee","chunk-65a2ecdc"],"./XianheHouse.vue":["7aee","chunk-65a2ecdc"]};function r(t){if(!a.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return a.e(e[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(o)},r.id="ecd6",t.exports=r},ed23:function(t,e,a){"use strict";a("a106")}}]);
//# sourceMappingURL=detail.5d665285.js.map