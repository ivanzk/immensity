var iy=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[];return e&&e.getAttributeNames().forEach(function(r){n.includes(r)||(t.push({name:r,value:e.getAttribute(r)}),e.removeAttribute(r))}),t},o=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=document,a=o.head,i=o.body,u=document.documentElement;if(e&&r(u),n){var l=document.title;r(a),a.innerHTML="",document.title=l}t&&(r(i),i.innerHTML="")},a=function(e){var n={hr:3600,min:60,sec:1},t=[];for(var r in n)if(e>=n[r]){var o=parseInt(e/n[r]);e-=o*n[r],t.push(o)}else t.push(0);return t},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length>2&&0===e[0]&&(e=e.slice(1)),(e=e.map(function(e){return e.toString().length>1?e:"0".concat(e)})).join(":")};function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){u(e,n,t[n])})}return e}({},{child:void 0,parent:document.body,tag:"div",type:"append"},e);var t=document.createElement(e.tag);return Object.keys(n).forEach(function(e){t[e]=n[e]}),"prepend"===e.type?e.parent.prepend(t):e.parent.append(t),e.child&&t.append(e.child),t},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=document.createElement(e);return Object.keys(n).forEach(function(e){t[e]=n[e]}),t};function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){d(e,n,t[n])})}return e}({},{download:!0,ext:".jpg",name:document.title,quality:.95,timestamp:" ".concat(Date.now()),type:"image/jpeg"},n),r=t.name,o=t.timestamp,a=t.type,i=t.ext,u=t.quality,l=t.download;r=(r&&r+o||Date.now())+i;var s=c("canvas",{width:e.videoWidth,height:e.videoHeight});s.getContext("2d").drawImage(e,0,0,s.width,s.height),s.toBlob(function(e){return l&&c("a",{href:URL.createObjectURL(e),download:r}).click(),e},a,u)},f=function(e,n){return e.preventDefault(),"function"==typeof n&&n()};function v(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(t){var r=document.activeElement;if(n.length&&!n.some(function(e){return e instanceof HTMLElement?e.isEqualNode(r):"."===e[0]?v(r.classList).includes(e.slice(1)):"#"===e[0]?r.id===e.slice(1):r.nodeName===e}))return;var o=t.key.match(/Control|Shift|Alt/)?t.key:"".concat(t.ctrlKey?"control+":"").concat(t.shiftKey?"shift+":"").concat(t.altKey?"alt+":"").concat(t.key.toLowerCase()),a=e[o];return"function"==typeof a&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),a()),o}},p="",g=!1,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=n.button,r=n.buttons,o=n.detail,a=n.offsetX,i=n.offsetY,u=n.target,l=n.type,c="".concat(n.metaKey||n.ctrlKey?"control+":"").concat(n.shiftKey?"shift+":"").concat(n.altKey?"alt+":"");"mouseup"===l&&2===t&&(g=!1);var d="".concat(c).concat(l).concat(t).concat(o>1?"+d"+o:"").concat(g?"+rbm":"");"click"==l&&(d="".concat(c).concat(l)),"dblclick"==l&&(d="".concat(c).concat(l));var s=n.deltaY;if(s&&(d="".concat(c).concat(l).concat(s>0?"down":"up").concat(r||"")),"mousedown"===l&&2===t&&(g=!0),!p.includes("wheel")||!d.includes("mouseup")){var f=Math.floor(a/u.offsetWidth*10),v=Math.floor(i/u.offsetHeight*10);return Object.keys(e).forEach(function(t){var r=t.match(/g(\d{4})/);if(r){if(r=r[0],f>=r[1]&&f<=r[2]&&v>=r[3]&&v<=r[4]){var o=d+"+".concat(r);if(t!==o)return;var a=e[o];"function"==typeof a&&(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),a(n))}}else{var i=d===t?e[t]:null;"function"==typeof i&&(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),i(n))}}),p=d,d}p=""}},h=function(e,n){var t=document.createElement("iframe");return t.src=e,t.style="\n    height: 0px;\n    opacity: 0;\n  ",document.body.append(t),new Promise(function(e){t.onload=function(){e(n(t.contentDocument)),t.remove()}})},b=function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&o(),l({tag:"style",parent:document.head},{innerHTML:"\n        body {\n          background-color: #0E0E0E;\n          text-align: center;\n        }\n        #iyMediaContainer {\n          text-align: center;\n        }\n        .iyMedia {\n          box-shadow:\n            0px 0px 8px 2px rgba(0,0,0,.2),\n            0px 4px 4px 2px rgba(0,0,0,.2);\n\n          filter: brightness(1);\n          cursor: pointer;\n          height: 250px;\n          margin: 8px;\n          transition: filter 100ms cubic-bezier(0.4, 0.0, 0.2, 1);\n        }\n        .iyMedia:hover {\n          filter: brightness(1.1);\n        }\n      "});var n=l(void 0,{id:"iyMediaContainer"});e.forEach(function(e){l({tag:"a",parent:n,child:c("img",{src:e,className:"iyMedia"})},{href:e,target:"_blank",rel:"noopener noreferrer"})})},w=function(e,n){var t=e.video,r=n.modal,o=n.closeModalMouseKey,a={click:function(){},mousedown1:function(){return s(t,n.videoshotOpt)},mouseup2:e.toggleControls,"wheeldown+g0208":function(){return e.decreasePlaybackRate(.1)},"wheelup+g0208":function(){return e.increasePlaybackRate(.1)},"mousedown0+g0228":function(){return e.normalizePlaybackRate()},"mousedown0+g0201":function(){return s(t,n.videoshotOpt)},"click+g3600":function(){return document.fullscreenElement?document.webkitExitFullscreen():t.parentElement.webkitRequestFullscreen()},"mousedown0+g3618":e.togglePlay,"mousedown0+d2+g3618":e.togglePlay,"wheeldown+g3604":function(){return e.seekBackward(2.5,{currentBuffer:e.getBufferState().currentBuffer})},"wheelup+g3604":function(){return e.seekForward(2.5,{currentBuffer:e.getBufferState().currentBuffer})},"wheeldown+g3658":function(){return e.seekBackward(2.5)},"wheelup+g3658":function(){return e.seekForward(2.5)},"wheeldown+g7904":function(){return e.volumeDown(.05)},"wheelup+g7904":function(){return e.volumeUp(.05)},"wheeldown+g7958":function(){return e.volumeDown(.01)},"wheelup+g7958":function(){return e.volumeUp(.01)},"mousedown0+g7928":e.toggleMute};r&&(a["click+g7901"]=r.closeModal,a[o]=r.closeModal);var i=!0===n.mouseActionMap?a:n.mouseActionMap;if(n.view){var u=document.querySelector("#videoOverlay");u.addEventListener("click",y(i)),u.addEventListener("mousedown",y(i)),u.addEventListener("mouseup",y(i)),u.addEventListener("wheel",y(i)),u.addEventListener("contextmenu",f)}else t.addEventListener("click",y(i)),t.addEventListener("mousedown",y(i)),t.addEventListener("mouseup",y(i)),t.addEventListener("wheel",y(i))};var k=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.video,o=e.getBufferState,u=t.volumeBar,l=t.seekBar,c=t.seekBarTime,d=t.volumeBarLevel;function s(){clearInterval(n),l.classList.remove("waiting")}r.addEventListener("loadstart",function(e){var n=Math.ceil(100*r.volume);u.style.setProperty("--volumeBarState","".concat(n,"%")),B(n,d)}),r.addEventListener("timeupdate",function(e){var n=Math.ceil(100*r.volume);u.style.setProperty("--volumeBarState","".concat(n,"%")),B(n,d),l.style.setProperty("--seekBarState","".concat(r.currentTime/r.duration*100,"%")),l.style.setProperty("--seekBarBuffered","".concat(o().currentBuffer.end/r.duration*100,"%")),t=r.currentTime,s=r.duration,f=c,v=i(a(t)),m=i(a(s)),f.innerText="".concat(v," / ").concat(m),r.muted&&u.style.setProperty("--volumeBarColor","211, 47, 47");var t,s,f,v,m;r.muted||u.style.setProperty("--volumeBarColor","25, 118, 210")}),r.addEventListener("volumechange",function(e){var n=Math.ceil(100*r.volume);u.style.setProperty("--volumeBarState","".concat(n,"%")),B(n,d),r.muted&&u.style.setProperty("--volumeBarColor","211, 47, 47");r.muted||u.style.setProperty("--volumeBarColor","25, 118, 210")}),r.addEventListener("waiting",function(){n=setTimeout(function(){l.classList.add("waiting")},500)}),r.addEventListener("playing",s),r.addEventListener("canplay",s)};function B(e,n){n.innerText=e}var x=function(e,n){var t=e.video,r=n.modal,o=n.startInFullScreen,a=n.startWithControlBar;l({tag:"style",parent:document.head},{id:"iyVideoControllerStyle",innerHTML:"\n      @import url('https://fonts.googleapis.com/css?family=Open+Sans');\n      * {\n        box-sizing: border-box;\n      }\n\n      :root {\n        --volumeBarState: 50%;\n        --seekBarState: 0%;\n        --seekBarBuffered: 0%;\n        --fillColorActive: rgba(25, 118, 210, 1);\n        --volumeBarColor: 25, 118, 210;\n        --seekBarColor: 25, 118, 210;\n        --fillColorBuffered: rgba(25, 118, 210, .5);\n        --fillColor: rgba(25, 118, 210, .1);\n        --textColor: rgb(33, 150, 243);\n      }\n\n      body {\n        margin: 0 !important;\n        overflow-x: hidden !important;\n      }\n\n      #iyModal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 16777269;\n      }\n\n      #iyVideoControllerRoot.videoContainer {\n        background: #111; \n        display: flex;\n        flex-wrap: wrap;\n        width: 100vw;\n        height: 100vh;\n        z-index: 16777271;\n      }\n\n      #iyVideoControllerRoot #videoOverlay {\n        position: absolute;\n        width: 100vw;\n        height: 100vh;\n      }\n\n      #iyVideoControllerRoot video {\n        background-color: #000 !important;\n        flex: 100% !important;\n        width: 100% !important;\n        height: initial !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n      }\n\n      #iyVideoControllerRoot .controlsContainer {\n        display: flex;\n        align-items: center;\n        background: rgba(0,0,0,.66);\n        position: absolute;\n        bottom: 0px;\n        height: 50px;\n        width: 100%;\n      }\n\n      #iyVideoControllerRoot .hideControls {\n        display: none\n      }\n\n      #iyVideoControllerRoot .controlBars {\n        border-radius: 8px;\n        height: 8px;\n        margin: 0px 16px;\n        cursor: pointer;\n        box-shadow: \n          0px 0px 8px 2px rgba(0,0,0,.2),\n          0px 4px 4px 2px rgba(0,0,0,.2);\n        transition: 100ms cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      #iyVideoControllerRoot .controlBars:hover {\n        height: 32px;\n        border-radius: 32px;\n      }\n\n      #iyVideoControllerRoot #seekBar {\n        border: 1px solid rgb(var(--seekBarColor));\n        flex: 1 1 400px;\n        display: flex;\n        align-items: center;\n        background-image: linear-gradient(\n          90deg,\n          rgba(var(--seekBarColor), 1),\n          rgba(var(--seekBarColor), 1) var(--seekBarState),\n          rgba(var(--seekBarColor), .5) var(--seekBarState),\n          rgba(var(--seekBarColor), .5) var(--seekBarBuffered),\n          rgba(var(--seekBarColor), .1) var(--seekBarBuffered),\n          rgba(var(--seekBarColor), .1) 100%);\n      }\n\n      #iyVideoControllerRoot #seekBarTime {\n        font-family: 'Open Sans', sans-serif;\n        color: var(--textColor);\n        font-size: initial;\n        flex: 0 1 auto;\n        margin: 0px 16px;\n        cursor: default;\n        user-select: none;\n      }\n\n      #iyVideoControllerRoot #volumeBar {\n        border: 1px solid rgb(var(--volumeBarColor));\n        flex: 0 1 200px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-image: linear-gradient(\n          90deg,\n          rgba(var(--volumeBarColor), 1),\n          rgba(var(--volumeBarColor), 1) var(--volumeBarState),\n          rgba(var(--volumeBarColor), .1) var(--volumeBarState),\n          rgba(var(--volumeBarColor), .1) 100%);\n      }\n\n      #iyVideoControllerRoot #volumeBarLevel {\n        display: none;\n      }\n\n      #iyVideoControllerRoot .waiting {\n        animation-duration: 1s;\n        animation-name: waitingborder;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n      }\n\n      @keyframes waitingborder {\n        from {\n          border: 1px solid #1976D2;\n        }\n        to {\n          border: 1px solid #D32F2F;\n        }\n      }\n    "});var i=l({parent:r?r.modal:null,child:t,type:"prepend"},{className:"videoContainer",id:"iyVideoControllerRoot"});t.parentElement.webkitRequestFullscreen&&o&&t.parentElement.webkitRequestFullscreen();l({parent:i},{id:"videoOverlay"});var u=l({parent:i},{className:"controlsContainer"});!a&&u.classList.add("hideControls");var c=l({parent:u},{id:"seekBarTime",innerText:"00:00 / 00:00"}),d=l({parent:u},{id:"seekBar",className:"controlBars"}),s=l({parent:u},{id:"volumeBar",className:"controlBars"}),f=l({parent:s},{id:"volumeBarLevel"});s.addEventListener("mousedown",function(n){var r=n.offsetX/n.target.offsetWidth;e.muteOff(),t.volume=r}),s.addEventListener("wheel",function(n){n.preventDefault(),e.muteOff(),n.deltaY<0?e.volumeUp(.02):e.volumeDown(.02)}),s.addEventListener("mousedown",m),s.addEventListener("mouseup",p),s.addEventListener("mouseout",g),s.addEventListener("mousemove",function(n){if(!v)return;n.preventDefault();var r=Math.ceil(n.offsetX/n.target.offsetWidth*100)/100;e.muteOff(),t.volume=r}),d.addEventListener("mousedown",function(e){e.stopPropagation();var n=e.offsetX/this.offsetWidth;t.currentTime=t.duration*n,d.style.setProperty("--seekBarState","".concat(100*n,"%"))}),d.addEventListener("wheel",function(n){n.stopPropagation(),n.preventDefault(),n.deltaY<0?e.seekForward(1):e.seekBackward(1)}),d.addEventListener("mousedown",m),d.addEventListener("mouseup",p),d.addEventListener("mouseout",g),d.addEventListener("mousemove",function(e){if(!v)return;e.preventDefault();var n=e.offsetX/this.offsetWidth;t.currentTime=t.duration*n,d.style.setProperty("--seekBarState","".concat(100*n,"%"))});var v=!1;function m(e){e.preventDefault(),v=!0}function p(e){v=!1}function g(e){v=!1}k(e,{seekBar:d,volumeBar:s,seekBarTime:c,volumeBarLevel:f})},C=function(e){var n=e.video,t=e.videoIndex,r=e.originalVideoAttributes,o=e.originalVideoParent;r.forEach(function(e){var t=e.name,r=e.value;return n.setAttribute(t,r)}),o.insertBefore(n,o.children[t])},O=function(e,n){var t=n.videoIndex,r=n.originalVideoAttributes,o=n.originalVideoParent,a=l({},{id:"iyModal"});return l({tag:"style",parent:document.head},{id:"iyBodyOverflowHiddenStyle",innerHTML:"\n        body { overflow: hidden !important }"}),{modal:a,closeModal:function(){C({video:e,videoIndex:t,originalVideoAttributes:r,originalVideoParent:o}),document.querySelector("#iyModal").remove(),document.querySelector("#iyBodyOverflowHiddenStyle").remove(),document.querySelector("#iyVideoControllerStyle").remove()}}};function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){P(e,n,t[n])})}return e}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.timeChange;try{console.log("%c".concat(e.src),"color: #4caf50")}catch(e){console.error("err: ",e)}return{getBufferState:function(){for(var n=e.buffered,t=e.currentTime,r=e.buffered.length,o=[],a=0;a<r;a++)o.push({start:n.start(a),end:n.end(a)});return{currentBuffer:o.filter(function(e){return e.start<=t&&e.end>=t})[0],buffers:o}},muteOff:function(){return e.muted=!1},muteOn:function(){return e.muted=!0},increasePlaybackRate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.playbackRateChange;return e.playbackRate+=t},normalizePlaybackRate:function(){return e.playbackRate=1},decreasePlaybackRate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.playbackRateChange;return e.playbackRate-=t},seekBackward:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=E({},{currentBuffer:!1,customBufferTime:1},r);var o=e.currentTime;o-=n,r.currentBuffer?o-r.customBufferTime>r.currentBuffer.start&&(e.currentTime=o):e.currentTime=o>0?o:0},seekForward:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=E({},{currentBuffer:!1,customBufferTime:2},r);var o=e.currentTime,a=e.duration;o+=n,r.currentBuffer?o+r.customBufferTime<r.currentBuffer.end&&(e.currentTime=o):e.currentTime=o<a?o:a},showControls:function(){n.view?document.querySelector(".controlsContainer").classList.remove("hideControls"):e.setAttribute("controls",!0)},toggleControls:function(){n.view?document.querySelector(".controlsContainer").classList.toggle("hideControls"):e.hasAttribute("controls")?e.removeAttribute("controls"):e.setAttribute("controls",!0)},toggleMute:function(){return e.muted=!e.muted},togglePlay:function(){return e.paused?e.play():e.pause()},video:e,volumeDown:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.volumeChange,r=e.volume;r-=t,e.volume=r>0?r:0,e.muted=!1},volumeUp:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.volumeChange,r=e.volume;r+=t,e.volume=r<1?r:1,e.muted=!1}}};function L(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){M(e,n,t[n])})}return e}({},{clean:!0,closeModalMouseKey:null,keyboardActionMap:!0,mouseActionMap:!0,playbackRateChange:.1,startInFullScreen:!0,startWithControlBar:!0,timeChange:2.5,videoshotOpt:{},view:!0,volumeChange:.025},n)).view&&r(e,["src"]);"modal"===n.view&&(n.originalVideoAttributes=t,n.originalVideoParent=e.parentElement,n.videoIndex=L(e.parentElement.children).findIndex(function(e){return"VIDEO"===e.nodeName}),n.modal=new O(e,n),n.clean=!1),n.clean&&o();var a=new S(e,n);return n.view&&x(a,n),n.keyboardActionMap&&function(e,n){var t=n.modal,r={" ":e.togglePlay,s:e.togglePlay,arrowright:e.seekForward,d:e.seekForward,arrowleft:e.seekBackward,a:e.seekBackward,arrowup:e.volumeUp,arrowdown:e.volumeDown,e:function(){return e.increasePlaybackRate(.1)},w:e.normalizePlaybackRate,q:function(){return e.decreasePlaybackRate(.1)},c:e.toggleControls,m:e.toggleMute,v:function(){return s(e.video)}};t&&(r["alt+q"]=t.closeModal);var o=!0===n.keyboardActionMap?r:n.keyboardActionMap;document.addEventListener("keydown",m(o,["BODY","VIDEO"]))}(a,n),n.mouseActionMap&&w(a,n),a};t.d(n,"cleanDocument",function(){return o}),t.d(n,"convertSecondsToTimeUnits",function(){return a}),t.d(n,"craddel",function(){return l}),t.d(n,"crel",function(){return c}),t.d(n,"formatTimeForVideo",function(){return i}),t.d(n,"getVideoshot",function(){return s}),t.d(n,"handleContextMenu",function(){return f}),t.d(n,"handleKeyboardEvent",function(){return m}),t.d(n,"handleMouseEvent",function(){return y}),t.d(n,"openInIframe",function(){return h}),t.d(n,"photoshowSimple",function(){return b}),t.d(n,"removeAttributes",function(){return r}),t.d(n,"VideoController",function(){return j})}]);