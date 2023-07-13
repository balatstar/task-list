(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n  box-sizing: border-box;\n  background-color: #f5f4f6;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #333;\n  font-size: 16px;\n  line-height: 1.5;\n}\n\ndiv,\nform,\nmain,\narticle,\nsection,\nh1 {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\ninput:focus {\n  outline: none;\n}\n\nh1,\n#addnew,\n.tasklist-btn,\n.task-item-text {\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #333;\n}\n\nmain {\n  margin: 40px auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #ccc;\n}\n\n.flex-wrap,\n.tasklist {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex-wrap > *,\n.tasklist > * {\n  padding: 10px 20px;\n  border-bottom: 1px solid #eee;\n}\n\n#newtask {\n  position: relative;\n}\n\n#tasklist-main {\n  padding: 0;\n}\n\n#addnew {\n  color: #333;\n  font-style: normal;\n  border: none;\n  width: 90%;\n}\n\n#addnew::placeholder {\n  color: #bbb;\n  font-style: italic;\n  border: none;\n}\n\n.task-group {\n  display: flex;\n  position: relative;\n}\n\n.task-group > * {\n  margin: 0 5px;\n}\n\n.task-item-text {\n  width: 90%;\n}\n\n.task-item-text,\n.task-item-text::placeholder {\n  color: #333;\n  border: none;\n}\n\n.task-item-delete {\n  display: none;\n}\n\n.task-item-more,\n.h1-reload,\n.newtask-return,\n.task-item-delete {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  height: 16px;\n}\n\n.task-item-more,\n.task-item-delete {\n  right: 10px;\n}\n\n.task-item:checked ~ .task-item-delete {\n  display: block;\n}\n\n.task-item:checked ~ .task-item-more {\n  display: none;\n}\n\n.task-item:checked ~ .task-item-text {\n  text-decoration: line-through;\n}\n\n.tasklist-btn {\n  width: 100%;\n  padding: 10px 20px;\n  text-align: center;\n  color: #666;\n  background-color: #f5f4f6;\n  border: none;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"39ceec8e41ac66b091dd.png",v=t.p+"4f479c8c2cbd7f2ec2ab.png";function g(e){const n=JSON.stringify(e);localStorage.setItem("tasks",n)}const k=document.querySelector(".tasklist"),y=document.querySelector(".newtask-return"),x=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];function b(e,n,t){x[e][n]=t,g(x)}function w(){k.innerHTML="",x.forEach(((e,n)=>{const t=((e,n)=>{const t=document.createElement("div");t.classList.add("task-group"),t.innerHTML='\n    <input class="task-item" type="checkbox">\n    <input class="task-item-text" placeholder="Task item...">\n  ';const r=new Image;r.src=h,r.classList.add("task-item-more"),t.appendChild(r);const o=new Image;o.src=v,o.classList.add("task-item-delete"),t.appendChild(o);const a=t.querySelector(".task-item-text"),i=t.querySelector(".task-item"),s=t.querySelector(".task-item-delete");return a.value=e.description,i.checked=e.completed,a.addEventListener("change",(()=>{const r=a.value;e.description=r,b(n,"description",r),t.dispatchEvent(new CustomEvent("itemChanged"))})),i.addEventListener("change",(()=>{const r=i.checked;e.completed=r,b(n,"completed",r),t.dispatchEvent(new CustomEvent("itemChanged"))})),s.addEventListener("click",(()=>{!function(e){x.splice(e,1),g(x),k.dispatchEvent(new CustomEvent("itemDeleted"))}(n)})),t})(e,n);k.appendChild(t)}))}function E(){const e=document.getElementById("addnew"),n=e.value;x.push({description:n,completed:!1}),g(x),e.value="",k.dispatchEvent(new CustomEvent("itemAdded"))}y.addEventListener("click",(()=>{E()})),document.getElementById("addnew").addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),E())})),k.addEventListener("itemAdded",w),k.addEventListener("itemChanged",w),k.addEventListener("itemDeleted",w),w()})()})();