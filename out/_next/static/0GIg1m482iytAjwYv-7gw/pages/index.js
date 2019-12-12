(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=s("q1tI");var o=new(((r=s("SevZ"))&&r.__esModule?r:{default:r}).default),n=function(e){var t,s;function r(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=r).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,r.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return o.computeId(t,s)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=n},"8oxB":function(e,t){var s,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function a(e){if(s===setTimeout)return setTimeout(e,0);if((s===o||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:o}catch(e){s=o}try{r="function"===typeof clearTimeout?clearTimeout:n}catch(e){r=n}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===n||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];u.push(new f(e,t)),1!==u.length||l||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},MX0m:function(e,t,s){e.exports=s("3niX")},RNiq:function(e,t,s){"use strict";s.r(t);var r=s("MX0m"),i=s.n(r),o=s("q1tI"),n=s.n(o),a=s("8Kt/"),c=s.n(a),u=n.a.createElement;t.default=function(){var e=Object(o.useState)(),t=e[0],s=e[1],r=Object(o.useState)(),n=r[0],a=r[1];return u("div",{className:"jsx-2877626288"},u(c.a,null,u("title",{className:"jsx-2877626288"},"Coding Challenge"),u("link",{rel:"image",href:"/production.png",className:"jsx-2877626288"})),u("div",{className:"jsx-2877626288 page"},u("div",{className:"jsx-2877626288 container"},u("h1",{className:"jsx-2877626288 h1"},"Hometeam coding challenge"),u("p",{className:"jsx-2877626288"},"Below is your challenge!"),u("p",{className:"jsx-2877626288"},"Please write your code as if it were going into a production application. Once you're finished, please email your code to ",u("a",{href:"",className:"jsx-2877626288"},"brad@hometeamcare.com")," with the subject ",'"hometeam coding challenge: <Your Name>"'),u("p",{className:"jsx-2877626288"},"There are inputs at the bottom to help you test your code before submitting."),u("p",{className:"jsx-2877626288"},"Here are some online code editors that you may find useful. \xa0",u("a",{href:"https://code.sololearn.com/cVRUy2BwauK8#java",className:"jsx-2877626288"},"Java"),"\xa0\xa0",u("a",{href:"https://jsbin.com/?html,output",className:"jsx-2877626288"},"Javascript"),"\xa0\xa0",u("a",{href:"https://www.katacoda.com/courses/python/playground",className:"jsx-2877626288"},"Python")),u("h2",{className:"jsx-2877626288 h1"},"Description:"),u("p",{className:"jsx-2877626288"},"An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do."),u("p",{className:"jsx-2877626288"},"Below is a list of what each opcode means:"),u("div",{className:"jsx-2877626288 opcodes"},u("p",{className:"jsx-2877626288"},"99 - The program is finished and should immediately halt"),u("p",{className:"jsx-2877626288"},"1 - Adds together numbers read from two positions and stores the result in a third position."),u("p",{className:"jsx-2877626288"},"The three integers immediately after the opcode in the array tell you these three positions."),u("p",{className:"jsx-2877626288"},"The first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored."),u("p",{className:"jsx-2877626288"},"For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."),u("p",{className:"jsx-2877626288"},"2 - Works exactly like opcode 1, except it multiplies the two inputs instead of adding them.")),u("p",{className:"jsx-2877626288"},"Once you're done processing an opcode, move to the next one by stepping forward 4 positions."),u("h2",{className:"jsx-2877626288 h1"},"Part I:"),u("p",{className:"jsx-2877626288"},"Run your computer on the Intcode program below and enter the result.  The result should be stored at index 0."),u("div",{className:"jsx-2877626288 code-block"},u("code",{className:"jsx-2877626288"},"[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39, 1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75, 2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0, 99,2,14,0,0]")),u("p",{className:"jsx-2877626288"},"Enter your result:"),u("input",{type:"number",value:t,onChange:function(e){s(e.target.value)},className:"jsx-2877626288 number-input"}),void 0!==t&&("3895705"===t?u("p",{className:"jsx-2877626288 correct"},"Correct!"):u("p",{className:"jsx-2877626288 incorrect"},"Incorrect!")),u("h2",{className:"jsx-2877626288 h1"},"Part II:"),u("p",{className:"jsx-2877626288"},"Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output 19690720? Both values will be between 0 and 99."),u("p",{className:"jsx-2877626288"},"Enter 100 * input1 + input2:"),u("input",{type:"number",value:n,onChange:function(e){a(e.target.value)},className:"jsx-2877626288 number-input"}),void 0!==n&&("6417"===n?u("p",{className:"jsx-2877626288 correct"},"Correct!"):u("p",{className:"jsx-2877626288 incorrect"},"Incorrect!")))),u(i.a,{id:"2877626288"},[".correct.jsx-2877626288{color:#71a310;}",".incorrect.jsx-2877626288{color:#e42e00;}",".page.jsx-2877626288{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}",".container.jsx-2877626288{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}",".h1.jsx-2877626288{color:#053075;}",".h2.jsx-2877626288{color:#053075;}",".row.jsx-2877626288{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".code-block.jsx-2877626288{width:90%;padding:5px;background-color:#eeeeee;}",".number-input.jsx-2877626288{width:200px;}",".opcodes.jsx-2877626288{padding-left:40px;padding-right:40px;}",".card.jsx-2877626288{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}",".card.jsx-2877626288:hover{border-color:#067df7;}",".card.jsx-2877626288 h3.jsx-2877626288{margin:0;color:#067df7;font-size:18px;}",".card.jsx-2877626288 p.jsx-2877626288{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]))}},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var r=o(s("9kyW")),i=o(s("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var n=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,r=void 0===s?null:s,o=t.optimizeForSpeed,n=void 0!==o&&o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:n}),this._sheet.inject(),r&&"boolean"===typeof n&&(this._sheet.setOptimizeForSpeed(n),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),r=s.styleId,i=s.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var r=this._fromServer&&this._fromServer[s];r?(r.parentNode.removeChild(r),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var i=String(s),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=s+r;return t[i]||(t[i]=r.replace(e,s)),t[i]}},t.getIdAndRules=function(e){var t=this,s=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,s)]}}return{styleId:this.computeId(i),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=n},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,s=t.name,o=void 0===s?"stylesheet":s,a=t.optimizeForSpeed,c=void 0===a?r:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;n(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",n("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,o,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){n("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),n(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(n(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(n(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];n(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];n(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,s){t&&n(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return s?o.insertBefore(r,s):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,o),a&&s(t,a),e}();function n(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,s("8oxB"))},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,1]]]);