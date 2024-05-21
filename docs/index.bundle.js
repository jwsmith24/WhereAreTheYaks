(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 50px 1fr 50px;\n  grid-template-columns: 1fr;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n}\n\n.headerFooter {\n  background-color: black;\n  color: white;\n}\n\nmain {\n  text-align: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-content: center;\n  align-self: center;\n\n  gap: 18px;\n}\n\n.boards {\n  height: 30%;\n  width: 80%;\n  justify-self: center;\n  justify-content: center;\n  justify-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  gap: 20px;\n}\n\n.player {\n  display: grid;\n  gap: 10px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(10, 1fr);\n}\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: 1fr;\n}\n\n.space {\n  background-color: rgba(52, 114, 11, 0.795);\n  width: 60px;\n  height: 60px;\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.space:hover {\n  background-color: #ccc;\n}\n\n.yaks {\n  display: flex;\n  gap: 12px;\n\n  justify-content: space-evenly;\n}\n\n.yaks > * {\n  opacity: 1;\n}\n\n.hidden {\n  opacity: 0.3;\n}\n\n#placementForm {\n  display: grid;\n  gap: 10px;\n  padding: 18px;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;CAEC;AACD;EACE,SAAS;AACX;AACA;;;;CAIC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;CAEC;AACD;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;CAEC;AACD;;;;EAIE,aAAa;AACf;AACA;;CAEC;AACD;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;CAEC;AACD;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,qBAAqB;EACrB,kBAAkB;;EAElB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,UAAU;EACV,oBAAoB;EACpB,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,uBAAuB;AACzB;;AAEA;EACE,0CAA0C;EAC1C,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;;EAET,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV",sourcesContent:["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 50px 1fr 50px;\n  grid-template-columns: 1fr;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n}\n\n.headerFooter {\n  background-color: black;\n  color: white;\n}\n\nmain {\n  text-align: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-content: center;\n  align-self: center;\n\n  gap: 18px;\n}\n\n.boards {\n  height: 30%;\n  width: 80%;\n  justify-self: center;\n  justify-content: center;\n  justify-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  gap: 20px;\n}\n\n.player {\n  display: grid;\n  gap: 10px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(10, 1fr);\n}\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: 1fr;\n}\n\n.space {\n  background-color: rgba(52, 114, 11, 0.795);\n  width: 60px;\n  height: 60px;\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.space:hover {\n  background-color: #ccc;\n}\n\n.yaks {\n  display: flex;\n  gap: 12px;\n\n  justify-content: space-evenly;\n}\n\n.yaks > * {\n  opacity: 1;\n}\n\n.hidden {\n  opacity: 0.3;\n}\n\n#placementForm {\n  display: grid;\n  gap: 10px;\n  padding: 18px;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n"],sourceRoot:""}]);const s=i},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],A=r.base?c[0]+r.base:c[0],d=o[A]||0,l="".concat(A," ").concat(d);o[A]=d+1;var u=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=a(p,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),A=0;A<o.length;A++){var d=t(o[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},906:n=>{const e={HIT:"HIT",MISS:"MISS",NONE:"NONE"};n.exports={createGameBoard:function(){const n={board:[],yaks:[],attackLog:[],resetBoard:function(){for(let n=0;n<10;n++){this.board[n]=[];for(let t=0;t<10;t++)this.board[n][t]={yak:"empty",status:e.NONE,hasTarget:function(){return"empty"!==this.yak}}}},placeYak:function(n,e){this.yaks.push(e);for(let t of n)this.board[t.y][t.x].yak=e},handleAttack:function(n){const t=this.board[n.y][n.x];return"empty"!==t.yak?(this.logAttack(n,e.HIT),t.yak.hit(),t.status=e.HIT,this.updateActiveYaks(),!0):(this.logAttack(n,e.MISS),t.status=e.MISS,!1)},logAttack:function(n,e){this.attackLog.push({space:n,status:e})},yaksFound:function(){for(let n of this.yaks)if(!n.isFound())return!1;return!0},buildDisplay:function(){const n=document.createElement("div");n.classList.add("grid");for(let t=0;t<10;t++){let r=document.createElement("div");r.classList.add("row");for(let n=0;n<10;n++){let a=document.createElement("div");a.classList.add("space"),a.textContent=`${t}${n}`,a.id=`${t} ${n}`,this.board[t][n].status===e.HIT&&(a.textContent="X",a.style.backgroundColor="red"),this.board[t][n].status===e.MISS&&(a.textContent="O",a.style.backgroundColor="white"),r.appendChild(a)}n.appendChild(r)}return n},updateActiveYaks:function(){this.yaks=this.yaks.filter((n=>!n.isFound()))}};return n.resetBoard(),n},attackStatus:e,boardWidth:10,boardHeight:10}},211:(n,e,t)=>{const r=t(906);n.exports={playerType:{REAL:"REAL",COMPUTER:"COMPUTER"},createPlayer:function(n){return{type:n,board:r.createGameBoard(),attackLog:[]}}}},855:n=>{function e(n){return{length:n,hits:0,hit:function(){this.hits++},isFound:function(){return this.hits>=this.length}}}n.exports={createLargeYak:function(){return{...e(5),name:"Large Yak"}},createMediumYak:function(){return{...e(4),name:"Medium Yak"}},createSmallYak:function(){return{...e(3),name:"Small Yak"}},createTinyYak:function(){return{...e(2),name:"Tiny Yak"}}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),a=t.n(r),o=t(659),i=t.n(o),s=t(56),c=t.n(s),A=t(540),d=t.n(A),l=t(113),u=t.n(l),p=t(208),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(p.A,f),p.A&&p.A.locals&&p.A.locals;const y=t(211),m=t(855),g=document.getElementById("player1Board"),h=(document.getElementById("state"),document.getElementById("p1YakCount")),C=y.createPlayer(y.playerType.REAL),E=document.getElementById("tinyYak1"),b=document.getElementById("smallYak1"),v=document.getElementById("mediumYak1"),x=document.getElementById("largeYak1"),k="playing",B="gameOver";let w;function S(){g.innerHTML="",g.appendChild(C.board.buildDisplay())}function I(){const n=C.board.yaks;console.log(n),E.classList.remove("hidden"),b.classList.remove("hidden"),v.classList.remove("hidden"),x.classList.remove("hidden"),function(n){for(let e of n)switch(e.length){case 2:E.classList.add("hidden");break;case 3:b.classList.add("hidden");break;case 4:v.classList.add("hidden");break;case 5:x.classList.add("hidden")}}(n),h.textContent=`Yaks Remaining: ${n.length}`}function Y(){let n=Math.random();return Math.floor(9*n)}function L(n){let e,t=!0;for(;t;)e={x:Y(),y:Y()},t=T(n,e)}function T(n,e){if("empty"!==C.board.board[e.y][e.x].yak)return!0;const t=function(){switch(Math.floor(4*Math.random())){case 0:return R;case 1:return O;case 2:return M;case 3:return j}}()(n.length,e);return console.log(t),!1===t||(C.board.placeYak(t,n),!1)}function M(n,e){let t=[e];for(let r=1;r<n;r++){if(t.push({x:e.x-r,y:e.y}),e.x-r<0)return!1;if(!C.board.board[e.y][e.x-r].yak&&"empty"!==C.board.board[e.y][e.x-r].yak)return!1}return t}function j(n,e){let t=[e];for(let r=1;r<n;r++){if(t.push({x:e.x+r,y:e.y}),e.x+r>=9)return!1;if(!C.board.board[e.y][e.x+r].yak&&"empty"!==C.board.board[e.y][e.x+r].yak)return!1}return t}function R(n,e){let t=[e];for(let r=1;r<n;r++){if(t.push({x:e.x,y:e.y+r}),e.y+r>=9)return!1;if(!C.board.board[e.y+r][e.x].yak&&"empty"!==C.board.board[e.y+r][e.x].yak)return!1}return t}function O(n,e){let t=[e];for(let r=1;r<n;r++){if(t.push({x:e.x,y:e.y-r}),e.y-r<0)return!1;if(!C.board.board[e.y-r][e.x].yak&&"empty"!==C.board.board[e.y-r][e.x].yak)return!1}return t}w="init",L(m.createTinyYak()),L(m.createLargeYak()),L(m.createMediumYak()),L(m.createSmallYak()),console.log(C.board),I(),S(),g.addEventListener("click",(n=>{n.target&&n.target.classList.contains("space")&&function(n){if(w===k){const e=function(n){const e=n.split(" ");return{y:e[0],x:e[1]}}(n),t=C.board.handleAttack(e);C.attackLog.push({attack:e,result:t}),I(),S(),C.board.yaksFound()&&(console.log("game over!"),w=B)}else console.log("Game is not currently active")}(n.target.id)})),w=k})()})();
//# sourceMappingURL=index.bundle.js.map