(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n  box-sizing: border-box;\n  background-color: #f5f4f6;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #333;\n  font-size: 16px;\n  line-height: 1.5;\n}\n\ndiv,\nform,\nmain,\narticle,\nsection,\nh1 {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\ninput:focus {\n  outline: none;\n}\n\nh1,\n#addnew,\n.tasklist-btn,\n.task-item-text {\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #333;\n}\n\nmain {\n  margin: 40px auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #ccc;\n}\n\n.flex-wrap,\n.tasklist {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex-wrap > *,\n.tasklist > * {\n  padding: 10px 20px;\n  border-bottom: 1px solid #eee;\n}\n\n#newtask {\n  position: relative;\n}\n\n#tasklist-main {\n  padding: 0;\n}\n\n#addnew {\n  color: #333;\n  font-style: normal;\n  border: none;\n}\n\n#addnew::placeholder {\n  color: #bbb;\n  font-style: italic;\n  border: none;\n}\n\n.task-group {\n  display: flex;\n  position: relative;\n}\n\n.task-group > * {\n  margin: 0 5px;\n}\n\n.task-item-text,\n.task-item-text::placeholder {\n  color: #333;\n  border: none;\n}\n\n.task-item-delete {\n  display: none;\n}\n\n.task-item-more,\n.h1-reload,\n.newtask-return,\n.task-item-delete {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  height: 16px;\n}\n\n.task-item-more,\n.task-item-delete {\n  right: 10px;\n}\n\n.task-item:checked ~ .task-item-delete {\n  display: block;\n}\n\n.task-item:checked ~ .task-item-more {\n  display: none;\n}\n\n.task-item:checked ~ .task-item-text {\n  text-decoration: line-through;\n}\n\n.tasklist-btn {\n  width: 100%;\n  padding: 10px 20px;\n  text-align: center;\n  color: #666;\n  background-color: #f5f4f6;\n  border: none;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"39ceec8e41ac66b091dd.png",v=t.p+"4f479c8c2cbd7f2ec2ab.png",g=document.querySelector(".tasklist"),k=document.querySelector(".newtask-return"),y=document.getElementById("addnew");let x;function b(e){const n=JSON.stringify(e);localStorage.setItem("tasks",n)}function w(){g.innerHTML="",x.forEach(((e,n)=>{const t=document.createElement("div");t.classList.add("task-group"),t.innerHTML='\n      <input class="task-item" type="checkbox">\n      <input class="task-item-text" placeholder="Task item...">\n    ';const r=new Image;r.src=h,r.classList.add("task-item-more"),t.appendChild(r);const o=new Image;o.src=v,o.classList.add("task-item-delete"),t.appendChild(o);const a=t.querySelector(".task-item-text"),i=t.querySelector(".task-item"),c=t.querySelector(".task-item-delete");a.value=e.description,i.checked=e.completed,a.addEventListener("change",(()=>{E(e,"description",a.value)})),i.addEventListener("change",(()=>{E(e,"completed",i.checked)})),c.addEventListener("click",(()=>{!function(e){x.splice(e,1),b(x),w()}(n)})),g.appendChild(t)}))}function S(){const e=document.getElementById("addnew"),n=e.value;x.push({description:n,completed:!1}),b(x),w(),e.value=""}function E(e,n,t){e[n]=t,b(x),w()}x=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],k.addEventListener("click",(function(){S()})),y.addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),S())})),w()})()})();