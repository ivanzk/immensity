var iy=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return e&&e.getAttributeNames().forEach(function(r){t.includes(r)||(n.push({name:r,value:e.getAttribute(r)}),e.removeAttribute(r))}),n};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},{htmlClean:!0,headClean:!0,bodyClean:!0},e);var t=document,n=t.head,a=t.body,i=document.documentElement;if(e.htmlClean&&r(i),e.headClean){var u=document.title;r(n),n.innerHTML="",document.title=u}e.bodyClean&&(r(a),a.innerHTML="")};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({},{cursor:"default",cursorVisibilityDuration:3e3},t),clearTimeout(a),e.style.cursor=t.cursor,a=setTimeout(function(){e.style.cursor="none"},t.cursorVisibilityDuration)},l=function(e){var t={hr:3600,min:60,sec:1},n=[];for(var r in t)if(e>=t[r]){var o=parseInt(e/t[r]);e-=o*t[r],n.push(o)}else n.push(0);return n},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length>2&&0===e[0]&&(e=e.slice(1)),(e=e.map(function(e){return e.toString().length>1?e:"0".concat(e)})).join(":")};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}({},{name:document.title,space:0,timestamp:" ".concat(Date.now())},t)).name;n=n&&n+t.timestamp||Date.now(),e=JSON.stringify(e,null,t.space);var r=new Blob([e],{type:"application/json"}),o=document.createElement("a");o.download=n,o.href=window.URL.createObjectURL(r),o.click()};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}({},{child:void 0,parent:document.body,tag:"div",type:"append"},e);var n=document.createElement(e.tag);return Object.keys(t).forEach(function(e){n[e]=t[e]}),"prepend"===e.type?e.parent.prepend(n):e.parent.append(n),e.child&&n.append(e.child),n};function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){g(e,t,n[t])})}return e}({},{eventPropertyToGetKeyValue:"key",excludeTargets:!1,isLogging:!1,preventDefault:!0,stopPropagation:!1,stopImmediatePropagation:!1,targets:[]},t);var r=document.activeElement;if(t.targets.length){var o=t.targets.some(function(e){return e instanceof HTMLElement?e.isEqualNode(r):"."===e[0]?p(r.classList).includes(e.slice(1)):"#"===e[0]?r.id===e.slice(1):r.nodeName===e});if(!o&&!t.excludeTargets||o&&t.excludeTargets)return}var a=function(e,t){if("key"===t)return e.key.match(/Control|Shift|Alt|Meta/)?e.key.toLowerCase():"".concat(e.ctrlKey||e.metaKey?"control+":"").concat(e.shiftKey?"shift+":"").concat(e.altKey?"alt+":"").concat(e.key.toLowerCase());if("code"===t)return e.code.match(/Control|Shift|Alt|Meta/)?e.code:"".concat(e.ctrlKey||e.metaKey?"Control+":"").concat(e.shiftKey?"Shift+":"").concat(e.altKey?"Alt+":"").concat(e.code)}(n,t.eventPropertyToGetKeyValue);return t.isLogging&&(console.clear(),console.log({event:n,key:a,action:e[a]})),function(e,t,n){"function"==typeof t&&(n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),t())}(n,e[a],t),a}};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(e);return Object.keys(t).forEach(function(e){n[e]=t[e]}),n};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({},{download:!0,name:document.title,quality:.95,timestamp:" ".concat(Date.now()),type:"image/jpeg"},t),r=n.name,o=n.timestamp,a=n.type,i=n.quality,u=n.download;r=r&&r+o||Date.now();var c=b("canvas",{width:e.videoWidth,height:e.videoHeight});c.getContext("2d").drawImage(e,0,0,c.width,c.height),c.toBlob(function(e){return u&&b("a",{href:URL.createObjectURL(e),download:r}).click(),e},a,i)};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e,t){var n,r=t.modal,o={" ":e.togglePlay,s:e.togglePlay,arrowright:function(){return e.seekForward(5)},d:function(){return e.seekForward(5)},arrowleft:function(){return e.seekBackward(5)},a:function(){return e.seekBackward(5)},arrowup:function(){return e.volumeUp(.05)},arrowdown:function(){return e.volumeDown(.05)},"shift+arrowright":function(){return e.seekForward(.1)},"shift+d":function(){return e.seekForward(.1)},"shift+arrowleft":function(){return e.seekBackward(.1)},"shift+a":function(){return e.seekBackward(.1)},"shift+arrowup":function(){return e.volumeUp(.01)},"shift+arrowdown":function(){return e.volumeDown(.01)},e:e.increasePlaybackRate,w:e.normalizePlaybackRate,q:e.decreasePlaybackRate,c:e.toggleControls,m:e.toggleMute,v:function(){return w(e.video)}};r&&(o["alt+q"]=r.closeModal),n=!0===t.keyboardActionMap?o:t.mergeKeyboardActionMapWithDefault?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({},o,t.keyboardActionMap):t.keyboardActionMap,(t.view?document.querySelector("#iyVideoOverlay"):document).addEventListener("keydown",y(n,{excludeTargets:t.excludeKeyboardEventTargetElements,targets:t.keyboardEventTargetElements}))},P=function(e,t){return e.preventDefault(),"function"==typeof t&&t()};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}({},{acceptDetail:!0,isLogging:!1,preventDefault:!0,stopPropagation:!1,stopImmediatePropagation:!1},t);var r=n.button,o=n.buttons,a=n.detail,i=n.offsetX,u=n.offsetY,c=n.target,l=n.type,d="".concat(n.ctrlKey||n.metaKey?"control+":"").concat(n.shiftKey?"shift+":"").concat(n.altKey?"alt+":""),s="".concat(d).concat(l);"mousedown"!=l&&"mouseup"!==l||(s="".concat(d).concat(l).concat(r).concat(t.acceptDetail&&a>1?"+d"+a:"")),"click"==l&&(s="".concat(d).concat(l)),"dblclick"==l&&(s="".concat(d).concat(l));var f=n.deltaY;f&&(s="".concat(d).concat(l).concat(f>0?"down":"up").concat(o||""));var m=Math.floor(i/c.offsetWidth*10);m=m<0?0:m;var v=Math.floor(u/c.offsetHeight*10);return v=v<0?0:v,t.isLogging&&console.log({event:n,key:"".concat(s,"+g").concat(m,"x").concat(v,"y")}),Object.keys(e).forEach(function(r){var o=r.match(/g(\d{4})/);if(o){if(o=o[0],m>=o[1]&&m<=o[2]&&v>=o[3]&&v<=o[4]){var a=s+"+".concat(o);if(r!==a)return;x(n,e[a],t)}}else x(n,s===r?e[r]:null,t)}),"".concat(s,"+g").concat(m,"x").concat(v,"y")}};function x(e,t,n){"function"==typeof t&&(n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),t())}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e,t){var n,r=e.video,o=t.modal,a=t.closeModalMouseKey,i={click:function(){},mousedown1:function(){return w(r,t.videoshotOpt)},mouseup2:e.toggleControls,"wheeldown+g0208":e.decreasePlaybackRate,"wheelup+g0208":e.increasePlaybackRate,"alt+wheeldown+g0208":function(){return e.decreasePlaybackRate(.05)},"alt+wheelup+g0208":function(){return e.increasePlaybackRate(.05)},"shift+alt+wheeldown+g0208":function(){return e.decreasePlaybackRate(.5)},"shift+alt+wheelup+g0208":function(){return e.increasePlaybackRate(.5)},"mousedown0+g0228":e.normalizePlaybackRate,"mousedown0+g0201":function(){return w(r,t.videoshotOpt)},"mousedown0+g3600":function(){return document.fullscreenElement?document.webkitExitFullscreen():r.parentElement.webkitRequestFullscreen()},"mousedown0+g3618":e.togglePlay,"mousedown0+d2+g3618":e.togglePlay,"wheeldown+g3604":function(){return e.seekBackward(2.5,{currentBuffer:e.getBufferState().currentBuffer})},"wheelup+g3604":function(){return e.seekForward(2.5,{currentBuffer:e.getBufferState().currentBuffer})},"wheeldown+g3658":function(){return e.seekBackward(2.5)},"wheelup+g3658":function(){return e.seekForward(2.5)},"alt+wheeldown+g3658":function(){return e.seekBackward(.1)},"alt+wheelup+g3658":function(){return e.seekForward(.1)},"shift+alt+wheeldown+g3658":function(){return e.seekBackward(r.duration/10)},"shift+alt+wheelup+g3658":function(){return e.seekForward(r.duration/10)},"wheeldown+g7904":function(){return e.volumeDown(.05)},"wheelup+g7904":function(){return e.volumeUp(.05)},"wheeldown+g7958":function(){return e.volumeDown(.01)},"wheelup+g7958":function(){return e.volumeUp(.01)},"alt+wheeldown+g7904":function(){return e.volumeDown(.5)},"alt+wheelup+g7904":function(){return e.volumeUp(.5)},"alt+wheeldown+g7958":function(){return e.volumeDown(.1)},"alt+wheelup+g7958":function(){return e.volumeUp(.1)},"mousedown0+g7928":e.toggleMute};if(o&&(i["mousedown0+g7901"]=o.closeModal,i[a]=o.closeModal),n=!0===t.mouseActionMap?i:t.mergeMouseActionMapWithDefault?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({},i,t.mouseActionMap):t.mouseActionMap,t.view){var u=document.querySelector("#iyVideoOverlay");u.addEventListener("click",C({click:function(){return u.focus()}})),u.addEventListener("mousedown",C(n)),u.addEventListener("mouseup",C(n)),u.addEventListener("wheel",C(n)),u.addEventListener("contextmenu",P)}else{var c={stopPropagation:!0,stopImmediatePropagation:!0};r.addEventListener("click",C(n,c)),r.addEventListener("mousedown",C(n,c)),r.addEventListener("mouseup",C(n,c)),r.addEventListener("wheel",C(n,c))}};function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){L(e,t,n[t])})}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.video,o=e.getBufferState,a=n.volumeBar,i=n.seekBar,u=n.seekBarTime,c=n.volumeBarLevel;function s(){clearInterval(t),i.classList.remove("waiting")}r.addEventListener("loadstart",function(e){var t=Math.ceil(100*r.volume);a.style.setProperty("--volumeBarState","".concat(t,"%")),M(t,c)}),r.addEventListener("timeupdate",function(e){var t=Math.ceil(100*r.volume);a.style.setProperty("--volumeBarState","".concat(t,"%")),M(t,c),i.style.setProperty("--seekBarState","".concat(r.currentTime/r.duration*100,"%")),i.style.setProperty("--seekBarBuffered","".concat(o().currentBuffer.end/r.duration*100,"%")),n=r.currentTime,s=r.duration,f=u,m=d(l(n)),v=d(l(s)),f.innerText="".concat(m," / ").concat(v),r.muted&&a.style.setProperty("--volumeBarColor","211, 47, 47");var n,s,f,m,v;r.muted||a.style.setProperty("--volumeBarColor","25, 118, 210")}),r.addEventListener("volumechange",function(e){var t=Math.ceil(100*r.volume);a.style.setProperty("--volumeBarState","".concat(t,"%")),M(t,c),r.muted&&a.style.setProperty("--volumeBarColor","211, 47, 47");r.muted||a.style.setProperty("--volumeBarColor","25, 118, 210")}),r.addEventListener("waiting",function(){t=setTimeout(function(){i.classList.add("waiting")},500)}),r.addEventListener("playing",s),r.addEventListener("canplay",s)};function M(e,t){t.innerText=e}var T,V=function(e,t){var n=0;return function(){var r=(new Date).getTime();if(!(r-n<e))return n=r,t.apply(void 0,arguments)}},R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"iyVideoOverlay"===e.target.id?(t.classList.remove("hideControls"),clearTimeout(T),T=setTimeout(function(){t.classList.add("hideControls")},n.controlBarVisibilityDuration)):(clearTimeout(T),t.classList.remove("hideControls"))},A=function(e,t){var n=e.video;v({tag:"style",parent:document.head},{id:"iyVideoControllerStyle",innerHTML:"\n      @import url('https://fonts.googleapis.com/css?family=Open+Sans');\n      * {\n        box-sizing: border-box;\n      }\n\n      :root {\n        --volumeBarState: 50%;\n        --seekBarState: 0%;\n        --seekBarBuffered: 0%;\n        --fillColorActive: rgba(25, 118, 210, 1);\n        --volumeBarColor: 25, 118, 210;\n        --seekBarColor: 25, 118, 210;\n        --fillColorBuffered: rgba(25, 118, 210, .5);\n        --fillColor: rgba(25, 118, 210, .1);\n        --textColor: rgb(33, 150, 243);\n      }\n\n      body {\n        margin: 0 !important;\n        overflow-x: hidden !important;\n      }\n\n      #iyModal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 16777269;\n      }\n\n      #iyVideoControllerRoot.videoContainer {\n        background: #111; \n        display: flex;\n        flex-wrap: wrap;\n        width: 100vw;\n        height: 100vh;\n        z-index: 16777271;\n      }\n\n      #iyVideoControllerRoot #iyVideoOverlay {\n        position: absolute;\n        width: 100vw;\n        height: 100vh;\n      }\n      #iyVideoControllerRoot #iyVideoOverlay:focus {\n        border: none;\n        outline: none;\n      }\n\n      #iyVideoControllerRoot video {\n        background-color: #000 !important;\n        flex: 100% !important;\n        width: 100% !important;\n        height: initial !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n      }\n\n      #iyVideoControllerRoot .controlsContainer {\n        display: flex;\n        align-items: center;\n        background: rgba(0,0,0,.66);\n        position: absolute;\n        bottom: 0px;\n        height: 50px;\n        width: 100%;\n        cursor: default;\n      }\n\n      #iyVideoControllerRoot .hideControls {\n        display: none\n      }\n\n      #iyVideoControllerRoot .showControls {\n        display: flex !important;\n      }\n\n      #iyVideoControllerRoot .controlBars {\n        border-radius: 8px;\n        height: 8px;\n        margin: 0px 16px;\n        cursor: pointer;\n        box-shadow: \n          0px 0px 8px 2px rgba(0,0,0,.2),\n          0px 4px 4px 2px rgba(0,0,0,.2);\n        transition: 100ms cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      #iyVideoControllerRoot .controlBars:hover {\n        height: 32px;\n        border-radius: 32px;\n      }\n\n      #iyVideoControllerRoot #seekBar {\n        border: 1px solid rgb(var(--seekBarColor));\n        flex: 1 1 400px;\n        display: flex;\n        align-items: center;\n        background-image: linear-gradient(\n          90deg,\n          rgba(var(--seekBarColor), 1),\n          rgba(var(--seekBarColor), 1) var(--seekBarState),\n          rgba(var(--seekBarColor), .5) var(--seekBarState),\n          rgba(var(--seekBarColor), .5) var(--seekBarBuffered),\n          rgba(var(--seekBarColor), .1) var(--seekBarBuffered),\n          rgba(var(--seekBarColor), .1) 100%);\n      }\n\n      #iyVideoControllerRoot #seekBarTime {\n        font-family: 'Open Sans', sans-serif;\n        color: var(--textColor);\n        font-size: initial;\n        flex: 0 1 auto;\n        margin: 0px 16px;\n        cursor: default;\n        user-select: none;\n      }\n\n      #iyVideoControllerRoot #volumeBar {\n        border: 1px solid rgb(var(--volumeBarColor));\n        flex: 0 1 200px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-image: linear-gradient(\n          90deg,\n          rgba(var(--volumeBarColor), 1),\n          rgba(var(--volumeBarColor), 1) var(--volumeBarState),\n          rgba(var(--volumeBarColor), .1) var(--volumeBarState),\n          rgba(var(--volumeBarColor), .1) 100%);\n      }\n\n      #iyVideoControllerRoot #volumeBarLevel {\n        display: none;\n      }\n\n      #iyVideoControllerRoot .waiting {\n        animation-duration: 1s;\n        animation-name: waitingborder;\n        animation-iteration-count: infinite;\n        animation-direction: alternate;\n        animation-timing-function: ease-in-out;\n      }\n\n      @keyframes waitingborder {\n        from {\n          border: 1px solid #1976D2;\n        }\n        to {\n          border: 1px solid #D32F2F;\n        }\n      }\n    "});var r=v({parent:t.modal?t.modal.modal:document.body,child:n,type:"prepend"},{className:"videoContainer",id:"iyVideoControllerRoot"});n.parentElement.webkitRequestFullscreen&&t.startInFullScreen&&n.parentElement.webkitRequestFullscreen(),v({parent:r},{id:"iyVideoOverlay",tabIndex:1}).focus();var o=v({parent:r},{className:"controlsContainer"});t.startWithControlBar&&o.classList.add("showControls"),!t.autoHideControlBar&&o.classList.add("hideControls");var a=v({parent:o},{id:"seekBarTime",innerText:"00:00 / 00:00"}),i=v({parent:o},{id:"seekBar",className:"controlBars"}),u=v({parent:o},{id:"volumeBar",className:"controlBars"}),l=v({parent:u},{id:"volumeBarLevel"});u.addEventListener("mousedown",function(t){var r=t.offsetX/t.target.offsetWidth;e.muteOff(),n.volume=r}),u.addEventListener("wheel",function(t){t.preventDefault(),e.muteOff(),t.deltaY<0?e.volumeUp():e.volumeDown()}),u.addEventListener("mousedown",s),u.addEventListener("mouseup",f),u.addEventListener("mouseout",m),u.addEventListener("mousemove",function(t){if(!d)return;t.preventDefault();var r=Math.ceil(t.offsetX/t.target.offsetWidth*100)/100;e.muteOff(),n.volume=r}),i.addEventListener("mousedown",function(e){e.stopPropagation();var t=e.offsetX/this.offsetWidth;n.currentTime=n.duration*t,i.style.setProperty("--seekBarState","".concat(100*t,"%"))}),i.addEventListener("wheel",function(t){t.stopPropagation(),t.preventDefault(),t.deltaY<0?e.seekForward():e.seekBackward()}),i.addEventListener("mousedown",s),i.addEventListener("mouseup",f),i.addEventListener("mouseout",m),i.addEventListener("mousemove",function(e){if(!d)return;e.preventDefault();var t=e.offsetX/this.offsetWidth;n.currentTime=n.duration*t,i.style.setProperty("--seekBarState","".concat(100*t,"%"))}),r.addEventListener("mousemove",V(100,function(e){var n=t.controlBarVisibilityDuration,a=t.cursorVisibilityDuration;t.autoHideCursor&&c(r,{cursorVisibilityDuration:a}),t.autoHideControlBar&&R(e,o,{controlBarVisibilityDuration:n})}));var d=!1;function s(e){e.preventDefault(),d=!0}function f(e){d=!1}function m(e){d=!1}D(e,{seekBar:i,volumeBar:u,seekBarTime:a,volumeBarLevel:l})},I=function(e){var t=e.video,n=e.videoIndex,r=e.originalVideoAttributes,o=e.originalVideoParent;r.forEach(function(e){var n=e.name,r=e.value;return t.setAttribute(n,r)}),o.insertBefore(t,o.children[n])};function K(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){H(e,t,n[t])})}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t=F({},{autoHideControlBar:!0,autoHideCursor:!0,clean:!1,closeModalMouseKey:"mousedown1",controlBarVisibilityDuration:2e3,cursorVisibilityDuration:2e3,keyboardActionMap:!0,keyboardEventTargetElements:["#iyVideoOverlay"],mergeKeyboardActionMapWithDefault:!0,mergeMouseActionMapWithDefault:!0,mouseActionMap:!0,playbackRateChange:.1,startInFullScreen:!0,startWithControlBar:!1,timeChange:1,videoshotOpt:{},view:"modal",volumeChange:.01},t)).view&&r(e,["src"]);"modal"===t.view&&(t.originalVideoAttributes=n,t.originalVideoParent=e.parentElement,t.videoIndex=K(e.parentElement.children).findIndex(function(e){return"VIDEO"===e.nodeName}),t.modal=function(e,t){var n=t.videoIndex,r=t.originalVideoAttributes,o=t.originalVideoParent,a=v({},{id:"iyModal"});return v({tag:"style",parent:document.head},{id:"iyBodyOverflowHiddenStyle",innerHTML:"\n        body { overflow: hidden !important }"}),{modal:a,closeModal:function(){I({video:e,videoIndex:n,originalVideoAttributes:r,originalVideoParent:o}),document.querySelector("#iyModal").remove(),document.querySelector("#iyBodyOverflowHiddenStyle").remove(),document.querySelector("#iyVideoControllerStyle").remove()}}}(e,t),t.clean=!1),!1===t.view&&(t=F({},t,{excludeKeyboardEventTargetElements:!0,keyboardEventTargetElements:["INPUT"]})),t.clean&&i();var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timeChange;try{console.log("%c".concat(e.src),"color: #4caf50")}catch(e){console.error("err: ",e)}return{getBufferState:function(){for(var t=e.buffered,n=e.currentTime,r=e.buffered.length,o=[],a=0;a<r;a++)o.push({start:t.start(a),end:t.end(a)});return{currentBuffer:o.filter(function(e){return e.start<=n&&e.end>=n})[0],buffers:o}},muteOff:function(){return e.muted=!1},muteOn:function(){return e.muted=!0},increasePlaybackRate:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.playbackRateChange,r=e.playbackRate+n;e.playbackRate=r<=5?r:5},normalizePlaybackRate:function(){return e.playbackRate=1},decreasePlaybackRate:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.playbackRateChange,r=e.playbackRate-n;e.playbackRate=r>=.1?r:.1},seekBackward:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=S({},{currentBuffer:!1,customBufferTime:1},r);var o=e.currentTime;o-=t,r.currentBuffer?o-r.customBufferTime>r.currentBuffer.start&&(e.currentTime=o):e.currentTime=o>0?o:0},seekForward:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=S({},{currentBuffer:!1,customBufferTime:2},r);var o=e.currentTime,a=e.duration;o+=t,r.currentBuffer?o+r.customBufferTime<r.currentBuffer.end&&(e.currentTime=o):e.currentTime=o<a?o:a},toggleControls:function(){if(t.view){var n=document.querySelector(".controlsContainer");n.classList.contains("showControls")?(n.classList.remove("showControls"),n.classList.add("hideControls")):(n.classList.add("showControls"),n.classList.remove("hideControls"))}else e.hasAttribute("controls")?e.removeAttribute("controls"):e.setAttribute("controls",!0)},toggleMute:function(){return e.muted=!e.muted},togglePlay:function(){return e.paused?e.play():e.pause()},video:e,volumeDown:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.volumeChange,r=e.volume;r-=n,e.volume=r>0?r:0,e.muted=!1},volumeUp:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.volumeChange,r=e.volume;r+=n,e.volume=r<1?r:1,e.muted=!1}}}(e,t);return t.view&&A(o,t),t.keyboardActionMap&&k(o,t),t.mouseActionMap&&E(o,t),o};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){U(e,t,n[t])})}return e}({removeIframe:!0},n);var r=document.createElement("iframe");return r.src=e,r.style="\n    height: 0px;\n    opacity: 0;\n  ",document.body.append(r),new Promise(function(e,o){r.onload=function(){r.contentDocument?e(t(r.contentDocument,{iframe:r})):o("Loading page in iframe failed"),n.removeIframe&&r.remove()}})};function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){W(e,t,n[t])})}return e}({},{clean:!0,root:document.body},t)).clean&&(i(),t.root=document.body),v({tag:"style",parent:document.head},{innerHTML:"\n        html, body {\n          background-color: #111;\n          padding: 0px;\n          margin: 0px;\n        }\n        #iyMediaContainer {\n          background-color: #111;\n          text-align: center;\n          text-align: center;\n        }\n        .iyMedia {\n          border: 1px solid rgba(255,255,255, 0.1);\n          box-shadow:\n            0px 0px 8px 2px rgba(0,0,0,.2),\n            0px 4px 4px 2px rgba(0,0,0,.2);\n\n          filter: brightness(1);\n          cursor: pointer;\n          height: 250px;\n          margin: 8px;\n          transition: filter 100ms cubic-bezier(0.4, 0.0, 0.2, 1);\n        }\n        .iyMedia:hover {\n          filter: brightness(1.1);\n        }\n      "});var n=v({parent:t.root},{id:"iyMediaContainer"});e.forEach(function(e){v({tag:"a",parent:n,child:b("img",{src:e,className:"iyMedia"})},{href:e,target:"_blank",rel:"noopener noreferrer"})})};n.d(t,"cleanDocument",function(){return i}),n.d(t,"controlCursorVisibility",function(){return c}),n.d(t,"convertSecondsToTimeUnits",function(){return l}),n.d(t,"craddel",function(){return v}),n.d(t,"createVideoController",function(){return q}),n.d(t,"crel",function(){return b}),n.d(t,"formatTimeForVideo",function(){return d}),n.d(t,"getVideoshot",function(){return w}),n.d(t,"handleContextMenu",function(){return P}),n.d(t,"handleKeyboardEvent",function(){return y}),n.d(t,"handleMouseEvent",function(){return C}),n.d(t,"openInIframe",function(){return N}),n.d(t,"photoshowSimple",function(){return z}),n.d(t,"removeAttributes",function(){return r}),n.d(t,"saveAsJSON",function(){return f}),n.d(t,"throttle",function(){return V})}]);