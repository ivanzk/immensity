this.iy=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return e&&e.getAttributeNames().forEach(function(r){t.includes(r)||(n.push({name:r,value:e.getAttribute(r)}),e.removeAttribute(r))}),n};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},{htmlClean:!0,headClean:!0,bodyClean:!0},e);var t=document,n=t.head,a=t.body,i=document.documentElement;if(e.htmlClean&&r(i),e.headClean){var u=document.title;r(n),n.innerHTML="",document.title=u}e.bodyClean&&(r(a),a.innerHTML="")},i=function(e){var t={hr:3600,min:60,sec:1},n=[];for(var r in t)if(e>=t[r]){var o=parseInt(e/t[r]);e-=o*t[r],n.push(o)}else n.push(0);return n},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length>2&&0===e[0]&&(e=e.slice(1)),(e=e.map(function(e){return e.toString().length>1?e:"0".concat(e)})).join(":")};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},{child:void 0,parent:document.body,tag:"div",type:"append"},e);var n=document.createElement(e.tag);return Object.keys(t).forEach(function(e){n[e]=t[e]}),"prepend"===e.type?e.parent.prepend(n):e.parent.append(n),e.child&&n.append(e.child),n};function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}({},{eventPropertyToGetKeyValue:"key",isLogging:!1,preventDefault:!0,stopPropagation:!0,stopImmediatePropagation:!0,targets:[]},t);var r=document.activeElement;if(t.targets.length&&!t.targets.some(function(e){return e instanceof HTMLElement?e.isEqualNode(r):"."===e[0]?d(r.classList).includes(e.slice(1)):"#"===e[0]?r.id===e.slice(1):r.nodeName===e}))return;var o=function(e,t){if("key"===t)return e.key.match(/Control|Shift|Alt/)?e.key.toLowerCase():"".concat(e.ctrlKey?"control+":"").concat(e.shiftKey?"shift+":"").concat(e.altKey?"alt+":"").concat(e.key.toLowerCase());if("code"===t)return e.code.match(/Control|Shift|Alt/)?e.code:"".concat(e.ctrlKey?"Control+":"").concat(e.shiftKey?"Shift+":"").concat(e.altKey?"Alt+":"").concat(e.code)}(n,t.eventPropertyToGetKeyValue);return t.isLogging&&(console.clear(),console.log({event:n,key:o,action:e[o]})),function(e,t,n){"function"==typeof t&&(n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),t(e))}(n,e[o],t),o}};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(e);return Object.keys(t).forEach(function(e){n[e]=t[e]}),n};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}({},{download:!0,ext:".jpg",name:document.title,quality:.95,timestamp:" ".concat(Date.now()),type:"image/jpeg"},t),r=n.name,o=n.timestamp,a=n.type,i=n.ext,u=n.quality,c=n.download;r=(r&&r+o||Date.now())+i;var l=m("canvas",{width:e.videoWidth,height:e.videoHeight});l.getContext("2d").drawImage(e,0,0,l.width,l.height),l.toBlob(function(e){return c&&m("a",{href:URL.createObjectURL(e),download:r}).click(),e},a,u)};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e,t){var n,r=t.modal,o={" ":e.togglePlay,s:e.togglePlay,arrowright:e.seekForward,d:e.seekForward,arrowleft:e.seekBackward,a:e.seekBackward,arrowup:e.volumeUp,arrowdown:e.volumeDown,e:function(){return e.increasePlaybackRate(.1)},w:e.normalizePlaybackRate,q:function(){return e.decreasePlaybackRate(.1)},c:e.toggleControls,m:e.toggleMute,v:function(){return p(e.video)}};r&&(o["alt+q"]=r.closeModal),n=!0===t.keyboardActionMap?o:t.mergeKeyboardActionMapWithDefault?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){g(e,t,n[t])})}return e}({},o,t.keyboardActionMap):t.keyboardActionMap,document.addEventListener("keydown",s(n,{targets:["BODY","VIDEO"]}))},b=function(e,t){return e.preventDefault(),"function"==typeof t&&t()};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="",O=!1,k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({},{isLogging:!0,preventDefault:!0,stopPropagation:!0,stopImmediatePropagation:!0},t);var r=n.button,o=n.buttons,a=n.detail,i=n.offsetX,u=n.offsetY,c=n.target,l=n.type,d="".concat(n.metaKey||n.ctrlKey?"control+":"").concat(n.shiftKey?"shift+":"").concat(n.altKey?"alt+":"");"mouseup"===l&&2===r&&(O=!1);var f="".concat(d).concat(l).concat(r).concat(a>1?"+d"+a:"").concat(O?"+rbm":"");"click"==l&&(f="".concat(d).concat(l)),"dblclick"==l&&(f="".concat(d).concat(l));var s=n.deltaY;if(s&&(f="".concat(d).concat(l).concat(s>0?"down":"up").concat(o||"")),"mousedown"===l&&2===r&&(O=!0),!w.includes("wheel")||!f.includes("mouseup")){var m=Math.floor(i/c.offsetWidth*10),v=Math.floor(u/c.offsetHeight*10);return t.isLogging&&console.log({event:n,key:"".concat(f,"+g").concat(m,"x").concat(v,"y")}),Object.keys(e).forEach(function(r){var o=r.match(/g(\d{4})/);if(o){if(o=o[0],m>=o[1]&&m<=o[2]&&v>=o[3]&&v<=o[4]){var a=f+"+".concat(o);if(r!==a)return;B(n,e[a],t)}}else B(n,f===r?e[r]:null,t)}),w=f,"".concat(f,"+g").concat(m,"x").concat(v,"y")}w=""}};function B(e,t,n){"function"==typeof t&&(n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),t(e))}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e,t){var n,r=e.video,o=t.modal,a=t.closeModalMouseKey,i={click:function(){},mousedown1:function(){return p(r,t.videoshotOpt)},mouseup2:e.toggleControls,"wheeldown+g0208":function(){return e.decreasePlaybackRate(.1)},"wheelup+g0208":function(){return e.increasePlaybackRate(.1)},"mousedown0+g0228":function(){return e.normalizePlaybackRate()},"mousedown0+g0201":function(){return p(r,t.videoshotOpt)},"click+g3600":function(){return document.fullscreenElement?document.webkitExitFullscreen():r.parentElement.webkitRequestFullscreen()},"mousedown0+g3618":e.togglePlay,"mousedown0+d2+g3618":e.togglePlay,"wheeldown+g3604":function(){return e.seekBackward(2.5,{currentBuffer:e.getBufferState().currentBuffer})},"wheelup+g3604":function(){return e.seekForward(2.5,{currentBuffer:e.getBufferState().currentBuffer})},"wheeldown+g3658":function(){return e.seekBackward(2.5)},"wheelup+g3658":function(){return e.seekForward(2.5)},"wheeldown+g7904":function(){return e.volumeDown(.05)},"wheelup+g7904":function(){return e.volumeUp(.05)},"wheeldown+g7958":function(){return e.volumeDown(.01)},"wheelup+g7958":function(){return e.volumeUp(.01)},"mousedown0+g7928":e.toggleMute};if(o&&(i["click+g7901"]=o.closeModal,i[a]=o.closeModal),n=!0===t.mouseActionMap?i:t.mergeMouseActionMapWithDefault?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){P(e,t,n[t])})}return e}({},i,t.mouseActionMap):t.mouseActionMap,t.view){var u=document.querySelector("#videoOverlay");u.addEventListener("click",k(n)),u.addEventListener("mousedown",k(n)),u.addEventListener("mouseup",k(n)),u.addEventListener("wheel",k(n)),u.addEventListener("contextmenu",b)}else r.addEventListener("click",k(n)),r.addEventListener("mousedown",k(n)),r.addEventListener("mouseup",k(n)),r.addEventListener("wheel",k(n))};function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.video,o=e.getBufferState,a=n.volumeBar,c=n.seekBar,l=n.seekBarTime,d=n.volumeBarLevel;function f(){clearInterval(t),c.classList.remove("waiting")}r.addEventListener("loadstart",function(e){var t=Math.ceil(100*r.volume);a.style.setProperty("--volumeBarState","".concat(t,"%")),S(t,d)}),r.addEventListener("timeupdate",function(e){var t=Math.ceil(100*r.volume);a.style.setProperty("--volumeBarState","".concat(t,"%")),S(t,d),c.style.setProperty("--seekBarState","".concat(r.currentTime/r.duration*100,"%")),c.style.setProperty("--seekBarBuffered","".concat(o().currentBuffer.end/r.duration*100,"%")),n=r.currentTime,f=r.duration,s=l,m=u(i(n)),v=u(i(f)),s.innerText="".concat(m," / ").concat(v),r.muted&&a.style.setProperty("--volumeBarColor","211, 47, 47");var n,f,s,m,v;r.muted||a.style.setProperty("--volumeBarColor","25, 118, 210")}),r.addEventListener("volumechange",function(e){var t=Math.ceil(100*r.volume);a.style.setProperty("--volumeBarState","".concat(t,"%")),S(t,d),r.muted&&a.style.setProperty("--volumeBarColor","211, 47, 47");r.muted||a.style.setProperty("--volumeBarColor","25, 118, 210")}),r.addEventListener("waiting",function(){t=setTimeout(function(){c.classList.add("waiting")},500)}),r.addEventListener("playing",f),r.addEventListener("canplay",f)};function S(e,t){t.innerText=e}var L=function(e,t){var n=e.video,r=t.modal,o=t.startInFullScreen,a=t.startWithControlBar;l({tag:"style",parent:document.head},{id:"iyVideoControllerStyle",innerHTML:"\n      @import url('https://fonts.googleapis.com/css?family=Open+Sans');\n      * {\n        box-sizing: border-box;\n      }\n\n      :root {\n        --volumeBarState: 50%;\n        --seekBarState: 0%;\n        --seekBarBuffered: 0%;\n        --fillColorActive: rgba(25, 118, 210, 1);\n        --volumeBarColor: 25, 118, 210;\n        --seekBarColor: 25, 118, 210;\n        --fillColorBuffered: rgba(25, 118, 210, .5);\n        --fillColor: rgba(25, 118, 210, .1);\n        --textColor: rgb(33, 150, 243);\n      }\n\n      body {\n        margin: 0 !important;\n        overflow-x: hidden !important;\n      }\n\n      #iyModal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 16777269;\n      }\n\n      #iyVideoControllerRoot.videoContainer {\n        background: #111; \n        display: flex;\n        flex-wrap: wrap;\n        width: 100vw;\n        height: 100vh;\n        z-index: 16777271;\n      }\n\n      #iyVideoControllerRoot #videoOverlay {\n        position: absolute;\n        width: 100vw;\n        height: 100vh;\n      }\n\n      #iyVideoControllerRoot video {\n        background-color: #000 !important;\n        flex: 100% !important;\n        width: 100% !important;\n        height: initial !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n      }\n\n      #iyVideoControllerRoot .controlsContainer {\n        display: flex;\n        align-items: center;\n        background: rgba(0,0,0,.66);\n        position: absolute;\n        bottom: 0px;\n        height: 50px;\n        width: 100%;\n      }\n\n      #iyVideoControllerRoot .hideControls {\n        display: none\n      }\n\n      #iyVideoControllerRoot .controlBars {\n        border-radius: 8px;\n        height: 8px;\n        margin: 0px 16px;\n        cursor: pointer;\n        box-shadow: \n          0px 0px 8px 2px rgba(0,0,0,.2),\n          0px 4px 4px 2px rgba(0,0,0,.2);\n        transition: 100ms cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      #iyVideoControllerRoot .controlBars:hover {\n        height: 32px;\n        border-radius: 32px;\n      }\n\n      #iyVideoControllerRoot #seekBar {\n        border: 1px solid rgb(var(--seekBarColor));\n        flex: 1 1 400px;\n        display: flex;\n        align-items: center;\n        background-image: linear-gradient(\n          90deg,\n          rgba(var(--seekBarColor), 1),\n          rgba(var(--seekBarColor), 1) var(--seekBarState),\n          rgba(var(--seekBarColor), .5) var(--seekBarState),\n          rgba(var(--seekBarColor), .5) var(--seekBarBuffered),\n          rgba(var(--seekBarColor), .1) var(--seekBarBuffered),\n          rgba(var(--seekBarColor), .1) 100%);\n      }\n\n      #iyVideoControllerRoot #seekBarTime {\n        font-family: 'Open Sans', sans-serif;\n        color: var(--textColor);\n        font-size: initial;\n        flex: 0 1 auto;\n        margin: 0px 16px;\n        cursor: default;\n        user-select: none;\n      }\n\n      #iyVideoControllerRoot #volumeBar {\n        border: 1px solid rgb(var(--volumeBarColor));\n        flex: 0 1 200px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-image: linear-gradient(\n          90deg,\n          rgba(var(--volumeBarColor), 1),\n          rgba(var(--volumeBarColor), 1) var(--volumeBarState),\n          rgba(var(--volumeBarColor), .1) var(--volumeBarState),\n          rgba(var(--volumeBarColor), .1) 100%);\n      }\n\n      #iyVideoControllerRoot #volumeBarLevel {\n        display: none;\n      }\n\n      #iyVideoControllerRoot .waiting {\n        animation-duration: 1s;\n        animation-name: waitingborder;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n      }\n\n      @keyframes waitingborder {\n        from {\n          border: 1px solid #1976D2;\n        }\n        to {\n          border: 1px solid #D32F2F;\n        }\n      }\n    "});var i=l({parent:r?r.modal:null,child:n,type:"prepend"},{className:"videoContainer",id:"iyVideoControllerRoot"});n.parentElement.webkitRequestFullscreen&&o&&n.parentElement.webkitRequestFullscreen();l({parent:i},{id:"videoOverlay"});var u=l({parent:i},{className:"controlsContainer"});!a&&u.classList.add("hideControls");var c=l({parent:u},{id:"seekBarTime",innerText:"00:00 / 00:00"}),d=l({parent:u},{id:"seekBar",className:"controlBars"}),f=l({parent:u},{id:"volumeBar",className:"controlBars"}),s=l({parent:f},{id:"volumeBarLevel"});f.addEventListener("mousedown",function(t){var r=t.offsetX/t.target.offsetWidth;e.muteOff(),n.volume=r}),f.addEventListener("wheel",function(t){t.preventDefault(),e.muteOff(),t.deltaY<0?e.volumeUp(.02):e.volumeDown(.02)}),f.addEventListener("mousedown",v),f.addEventListener("mouseup",p),f.addEventListener("mouseout",g),f.addEventListener("mousemove",function(t){if(!m)return;t.preventDefault();var r=Math.ceil(t.offsetX/t.target.offsetWidth*100)/100;e.muteOff(),n.volume=r}),d.addEventListener("mousedown",function(e){e.stopPropagation();var t=e.offsetX/this.offsetWidth;n.currentTime=n.duration*t,d.style.setProperty("--seekBarState","".concat(100*t,"%"))}),d.addEventListener("wheel",function(t){t.stopPropagation(),t.preventDefault(),t.deltaY<0?e.seekForward(1):e.seekBackward(1)}),d.addEventListener("mousedown",v),d.addEventListener("mouseup",p),d.addEventListener("mouseout",g),d.addEventListener("mousemove",function(e){if(!m)return;e.preventDefault();var t=e.offsetX/this.offsetWidth;n.currentTime=n.duration*t,d.style.setProperty("--seekBarState","".concat(100*t,"%"))});var m=!1;function v(e){e.preventDefault(),m=!0}function p(e){m=!1}function g(e){m=!1}E(e,{seekBar:d,volumeBar:f,seekBarTime:c,volumeBarLevel:s})},M=function(e){var t=e.video,n=e.videoIndex,r=e.originalVideoAttributes,o=e.originalVideoParent;r.forEach(function(e){var n=e.name,r=e.value;return t.setAttribute(n,r)}),o.insertBefore(t,o.children[n])};function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){D(e,t,n[t])})}return e}({},{clean:!0,closeModalMouseKey:null,keyboardActionMap:!0,mergeMouseActionMapWithDefault:!1,mouseActionMap:!0,playbackRateChange:.1,startInFullScreen:!0,startWithControlBar:!0,timeChange:2.5,videoshotOpt:{},view:!0,volumeChange:.025},t)).view&&r(e,["src"]);"modal"===t.view&&(t.originalVideoAttributes=n,t.originalVideoParent=e.parentElement,t.videoIndex=A(e.parentElement.children).findIndex(function(e){return"VIDEO"===e.nodeName}),t.modal=function(e,t){var n=t.videoIndex,r=t.originalVideoAttributes,o=t.originalVideoParent,a=l({},{id:"iyModal"});return l({tag:"style",parent:document.head},{id:"iyBodyOverflowHiddenStyle",innerHTML:"\n        body { overflow: hidden !important }"}),{modal:a,closeModal:function(){M({video:e,videoIndex:n,originalVideoAttributes:r,originalVideoParent:o}),document.querySelector("#iyModal").remove(),document.querySelector("#iyBodyOverflowHiddenStyle").remove(),document.querySelector("#iyVideoControllerStyle").remove()}}}(e,t),t.clean=!1),t.clean&&a();var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timeChange;try{console.log("%c".concat(e.src),"color: #4caf50")}catch(e){console.error("err: ",e)}return{getBufferState:function(){for(var t=e.buffered,n=e.currentTime,r=e.buffered.length,o=[],a=0;a<r;a++)o.push({start:t.start(a),end:t.end(a)});return{currentBuffer:o.filter(function(e){return e.start<=n&&e.end>=n})[0],buffers:o}},muteOff:function(){return e.muted=!1},muteOn:function(){return e.muted=!0},increasePlaybackRate:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.playbackRateChange;return e.playbackRate+=n},normalizePlaybackRate:function(){return e.playbackRate=1},decreasePlaybackRate:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.playbackRateChange;return e.playbackRate-=n},seekBackward:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=C({},{currentBuffer:!1,customBufferTime:1},r);var o=e.currentTime;o-=t,r.currentBuffer?o-r.customBufferTime>r.currentBuffer.start&&(e.currentTime=o):e.currentTime=o>0?o:0},seekForward:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=C({},{currentBuffer:!1,customBufferTime:2},r);var o=e.currentTime,a=e.duration;o+=t,r.currentBuffer?o+r.customBufferTime<r.currentBuffer.end&&(e.currentTime=o):e.currentTime=o<a?o:a},showControls:function(){t.view?document.querySelector(".controlsContainer").classList.remove("hideControls"):e.setAttribute("controls",!0)},toggleControls:function(){t.view?document.querySelector(".controlsContainer").classList.toggle("hideControls"):e.hasAttribute("controls")?e.removeAttribute("controls"):e.setAttribute("controls",!0)},toggleMute:function(){return e.muted=!e.muted},togglePlay:function(){return e.paused?e.play():e.pause()},video:e,volumeDown:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.volumeChange,r=e.volume;r-=n,e.volume=r>0?r:0,e.muted=!1},volumeUp:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.volumeChange,r=e.volume;r+=n,e.volume=r<1?r:1,e.muted=!1}}}(e,t);return t.view&&L(o,t),t.keyboardActionMap&&y(o,t),t.mouseActionMap&&x(o,t),o},R=function(e,t){var n=document.createElement("iframe");return n.src=e,n.style="\n    height: 0px;\n    opacity: 0;\n  ",document.body.append(n),new Promise(function(e){n.onload=function(){e(t(n.contentDocument)),n.remove()}})},V=function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&a(),l({tag:"style",parent:document.head},{innerHTML:"\n        body {\n          background-color: #0E0E0E;\n          text-align: center;\n        }\n        #iyMediaContainer {\n          text-align: center;\n        }\n        .iyMedia {\n          box-shadow:\n            0px 0px 8px 2px rgba(0,0,0,.2),\n            0px 4px 4px 2px rgba(0,0,0,.2);\n\n          filter: brightness(1);\n          cursor: pointer;\n          height: 250px;\n          margin: 8px;\n          transition: filter 100ms cubic-bezier(0.4, 0.0, 0.2, 1);\n        }\n        .iyMedia:hover {\n          filter: brightness(1.1);\n        }\n      "});var t=l(void 0,{id:"iyMediaContainer"});e.forEach(function(e){l({tag:"a",parent:t,child:m("img",{src:e,className:"iyMedia"})},{href:e,target:"_blank",rel:"noopener noreferrer"})})};n.d(t,"cleanDocument",function(){return a}),n.d(t,"convertSecondsToTimeUnits",function(){return i}),n.d(t,"craddel",function(){return l}),n.d(t,"createVideoController",function(){return T}),n.d(t,"crel",function(){return m}),n.d(t,"formatTimeForVideo",function(){return u}),n.d(t,"getVideoshot",function(){return p}),n.d(t,"handleContextMenu",function(){return b}),n.d(t,"handleKeyboardEvent",function(){return s}),n.d(t,"handleMouseEvent",function(){return k}),n.d(t,"openInIframe",function(){return R}),n.d(t,"photoshowSimple",function(){return V}),n.d(t,"removeAttributes",function(){return r})}]);