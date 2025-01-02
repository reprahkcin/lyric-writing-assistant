(self["webpackChunklyric_writing_assistant"]=self["webpackChunklyric_writing_assistant"]||[]).push([[504],{4046:function(t,e,n){"use strict";n.d(e,{Am:function(){return F},FA:function(){return D},Fy:function(){return w},I9:function(){return V},Im:function(){return M},Ku:function(){return G},T9:function(){return v},Tj:function(){return g},Uj:function(){return u},XA:function(){return y},ZQ:function(){return b},bD:function(){return U},c1:function(){return I},cY:function(){return _},eX:function(){return O},g:function(){return N},hp:function(){return B},jZ:function(){return E},lT:function(){return A},lV:function(){return C},nr:function(){return k},sr:function(){return S},tD:function(){return $},u:function(){return c},yU:function(){return m},zW:function(){return R}});n(4114),n(8992),n(3949),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(1023&u))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|u>>6,f=63&u;a||(f=64,s||(h=64)),r.push(n[c],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const u=i<t.length,c=u?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==c||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==c){const t=a<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},u=function(t){return a(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/lyric-writing-assistant/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function S(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k(){return!T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){try{return"object"===typeof indexedDB}catch(t){return!1}}function O(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x="FirebaseError";class N extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=x,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function P(t,e){return t.replace(L,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function U(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(j(n)&&j(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function V(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function B(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){const n=new z(t,e);return n.subscribe.bind(n)}class z{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=q(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t){return t&&t._delegate?t._delegate:t}},144:function(t,e,n){"use strict";n.d(e,{C4:function(){return S},EW:function(){return jt},Gc:function(){return yt},IG:function(){return Ct},IJ:function(){return xt},KR:function(){return Ot},Kh:function(){return vt},Pr:function(){return Mt},R1:function(){return Pt},X2:function(){return l},bl:function(){return C},fE:function(){return Tt},g8:function(){return bt},hV:function(){return qt},hZ:function(){return U},i9:function(){return Rt},ju:function(){return It},lJ:function(){return At},qA:function(){return F},u4:function(){return M},uY:function(){return a},ux:function(){return St},wB:function(){return zt},yC:function(){return o}});n(4114),n(9678),n(7145),n(1658),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(t){return new o(t)}function u(){return i}const c=new WeakSet;class l{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||p(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,A(this),v(this);const t=s,e=T;s=this,T=!0;try{return this.fn()}finally{0,y(this),s=t,T=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)b(t);this.deps=this.depsTail=void 0,A(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_(this)&&this.run()}get dirty(){return _(this)}}let h,f,d=0;function p(t,e=!1){if(t.flags|=8,e)return t.next=f,void(f=t);t.next=h,h=t}function g(){d++}function m(){if(--d>0)return;if(f){let t=f;f=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(h){let n=h;h=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function v(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),b(r),E(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function _(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===k)return;t.globalVersion=k;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_(t))return void(t.flags&=-3);const n=s,i=T;s=t,T=!0;try{v(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,T=i,y(t),t.flags&=-3}}function b(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)b(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function E(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let T=!0;const I=[];function S(){I.push(T),T=!1}function C(){const t=I.pop();T=void 0===t||t}function A(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let k=0;class R{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class O{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!s||!T||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new R(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,x(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,k++,this.notify(t)}notify(t){g();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{m()}}}function x(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)x(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const N=new WeakMap,D=Symbol(""),P=Symbol(""),L=Symbol("");function M(t,e,n){if(T&&s){let e=N.get(t);e||N.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new O),r.map=e,r.key=n),r.track()}}function U(t,e,n,i,s,o){const a=N.get(t);if(!a)return void k++;const u=t=>{t&&t.trigger()};if(g(),"clear"===e)a.forEach(u);else{const s=(0,r.cy)(t),o=s&&(0,r.yI)(n);if(s&&"length"===n){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n===L||!(0,r.Bm)(n)&&n>=t)&&u(e)}))}else switch((void 0!==n||a.has(void 0))&&u(a.get(n)),o&&u(a.get(L)),e){case"add":s?o&&u(a.get("length")):(u(a.get(D)),(0,r.CE)(t)&&u(a.get(P)));break;case"delete":s||(u(a.get(D)),(0,r.CE)(t)&&u(a.get(P)));break;case"set":(0,r.CE)(t)&&u(a.get(D));break}}m()}function j(t){const e=St(t);return e===t?e:(M(e,"iterate",L),Tt(t)?e:e.map(At))}function F(t){return M(t=St(t),"iterate",L),t}const V={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,At)},concat(...t){return j(this).concat(...t.map((t=>(0,r.cy)(t)?j(t):t)))},entries(){return B(this,"entries",(t=>(t[1]=At(t[1]),t)))},every(t,e){return z(this,"every",t,e,void 0,arguments)},filter(t,e){return z(this,"filter",t,e,(t=>t.map(At)),arguments)},find(t,e){return z(this,"find",t,e,At,arguments)},findIndex(t,e){return z(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return z(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return z(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return z(this,"forEach",t,e,void 0,arguments)},includes(...t){return W(this,"includes",t)},indexOf(...t){return W(this,"indexOf",t)},join(t){return j(this).join(t)},lastIndexOf(...t){return W(this,"lastIndexOf",t)},map(t,e){return z(this,"map",t,e,void 0,arguments)},pop(){return G(this,"pop")},push(...t){return G(this,"push",t)},reduce(t,...e){return q(this,"reduce",t,e)},reduceRight(t,...e){return q(this,"reduceRight",t,e)},shift(){return G(this,"shift")},some(t,e){return z(this,"some",t,e,void 0,arguments)},splice(...t){return G(this,"splice",t)},toReversed(){return j(this).toReversed()},toSorted(t){return j(this).toSorted(t)},toSpliced(...t){return j(this).toSpliced(...t)},unshift(...t){return G(this,"unshift",t)},values(){return B(this,"values",At)}};function B(t,e,n){const r=F(t),i=r[e]();return r===t||Tt(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.value&&(t.value=n(t.value)),t}),i}const $=Array.prototype;function z(t,e,n,r,i,s){const o=F(t),a=o!==t&&!Tt(t),u=o[e];if(u!==$[e]){const e=u.apply(t,s);return a?At(e):e}let c=n;o!==t&&(a?c=function(e,r){return n.call(this,At(e),r,t)}:n.length>2&&(c=function(e,r){return n.call(this,e,r,t)}));const l=u.call(o,c,r);return a&&i?i(l):l}function q(t,e,n,r){const i=F(t);let s=n;return i!==t&&(Tt(t)?n.length>3&&(s=function(e,r,i){return n.call(this,e,r,i,t)}):s=function(e,r,i){return n.call(this,e,At(r),i,t)}),i[e](s,...r)}function W(t,e,n){const r=St(t);M(r,"iterate",L);const i=r[e](...n);return-1!==i&&!1!==i||!It(n[0])?i:(n[0]=St(n[0]),r[e](...n))}function G(t,e,n=[]){S(),g();const r=St(t)[e].apply(t,n);return m(),C(),r}const H=(0,r.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm));function Q(t){(0,r.Bm)(t)||(t=String(t));const e=St(this);return M(e,"has",t),e.hasOwnProperty(t)}class X{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?pt:dt:s?ft:ht).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){let t;if(o&&(t=V[e]))return t;if("hasOwnProperty"===e)return Q}const a=Reflect.get(t,e,Rt(t)?t:n);return((0,r.Bm)(e)?K.has(e):H(e))?a:(i||M(t,"get",e),s?a:Rt(a)?o&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?_t(a):vt(a):a)}}class Y extends X{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=Et(s);if(Tt(n)||Et(n)||(s=St(s),n=St(n)),!(0,r.cy)(t)&&Rt(s)&&!Rt(n))return!e&&(s.value=n,!0)}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,Rt(t)?t:i);return t===St(i)&&(o?(0,r.$H)(n,s)&&U(t,"set",e,n,s):U(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&U(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&K.has(e)||M(t,"has",e),n}ownKeys(t){return M(t,"iterate",(0,r.cy)(t)?"length":D),Reflect.ownKeys(t)}}class J extends X{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Z=new Y,tt=new J,et=new Y(!0),nt=t=>t,rt=t=>Reflect.getPrototypeOf(t);function it(t,e,n){return function(...i){const s=this["__v_raw"],o=St(s),a=(0,r.CE)(o),u="entries"===t||t===Symbol.iterator&&a,c="keys"===t&&a,l=s[t](...i),h=n?nt:e?kt:At;return!e&&M(o,"iterate",c?P:D),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:u?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ot(t,e){const n={get(n){const i=this["__v_raw"],s=St(i),o=St(n);t||((0,r.$H)(n,o)&&M(s,"get",n),M(s,"get",o));const{has:a}=rt(s),u=e?nt:t?kt:At;return a.call(s,n)?u(i.get(n)):a.call(s,o)?u(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&M(St(e),"iterate",D),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],i=St(n),s=St(e);return t||((0,r.$H)(e,s)&&M(i,"has",e),M(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=St(s),a=e?nt:t?kt:At;return!t&&M(o,"iterate",D),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}};(0,r.X$)(n,t?{add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear")}:{add(t){e||Tt(t)||Et(t)||(t=St(t));const n=St(this),r=rt(n),i=r.has.call(n,t);return i||(n.add(t),U(n,"add",t,t)),this},set(t,n){e||Tt(n)||Et(n)||(n=St(n));const i=St(this),{has:s,get:o}=rt(i);let a=s.call(i,t);a||(t=St(t),a=s.call(i,t));const u=o.call(i,t);return i.set(t,n),a?(0,r.$H)(n,u)&&U(i,"set",t,n,u):U(i,"add",t,n),this},delete(t){const e=St(this),{has:n,get:r}=rt(e);let i=n.call(e,t);i||(t=St(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&U(e,"delete",t,void 0,s),o},clear(){const t=St(this),e=0!==t.size,n=void 0,r=t.clear();return e&&U(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=it(r,t,e)})),n}function at(t,e){const n=ot(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const ut={get:at(!1,!1)},ct={get:at(!1,!0)},lt={get:at(!0,!1)};const ht=new WeakMap,ft=new WeakMap,dt=new WeakMap,pt=new WeakMap;function gt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:gt((0,r.Zf)(t))}function vt(t){return Et(t)?t:wt(t,!1,Z,ut,ht)}function yt(t){return wt(t,!1,et,ct,ft)}function _t(t){return wt(t,!0,tt,lt,dt)}function wt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=mt(t);if(0===a)return t;const u=new Proxy(t,2===a?i:n);return s.set(t,u),u}function bt(t){return Et(t)?bt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function It(t){return!!t&&!!t["__v_raw"]}function St(t){const e=t&&t["__v_raw"];return e?St(e):t}function Ct(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const At=t=>(0,r.Gv)(t)?vt(t):t,kt=t=>(0,r.Gv)(t)?_t(t):t;function Rt(t){return!!t&&!0===t["__v_isRef"]}function Ot(t){return Nt(t,!1)}function xt(t){return Nt(t,!0)}function Nt(t,e){return Rt(t)?t:new Dt(t,e)}class Dt{constructor(t,e){this.dep=new O,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:St(t),this._value=e?t:At(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Tt(t)||Et(t);t=n?t:St(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:At(t),this.dep.trigger())}}function Pt(t){return Rt(t)?t.value:t}const Lt={get:(t,e,n)=>"__v_raw"===e?t:Pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Rt(i)&&!Rt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Mt(t){return bt(t)?t:new Proxy(t,Lt)}class Ut{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new O(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=k-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return p(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jt(t,e,n=!1){let i,s;(0,r.Tn)(t)?i=t:(i=t.get,s=t.set);const o=new Ut(i,s,n);return o}const Ft={},Vt=new WeakMap;let Bt;function $t(t,e=!1,n=Bt){if(n){let e=Vt.get(n);e||Vt.set(n,e=[]),e.push(t)}else 0}function zt(t,e,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:c,call:h}=n,f=t=>s?t:Tt(t)||!1===s||0===s?qt(t,1):qt(t);let d,p,g,m,v=!1,y=!1;if(Rt(t)?(p=()=>t.value,v=Tt(t)):bt(t)?(p=()=>f(t),v=!0):(0,r.cy)(t)?(y=!0,v=t.some((t=>bt(t)||Tt(t))),p=()=>t.map((t=>Rt(t)?t.value:bt(t)?f(t):(0,r.Tn)(t)?h?h(t,2):t():void 0))):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){S();try{g()}finally{C()}}const e=Bt;Bt=d;try{return h?h(t,3,[m]):t(m)}finally{Bt=e}}:r.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>qt(t(),e)}const _=u(),w=()=>{d.stop(),_&&_.active&&(0,r.TF)(_.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),w()}}let b=y?new Array(t.length).fill(Ft):Ft;const E=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(s||v||(y?t.some(((t,e)=>(0,r.$H)(t,b[e]))):(0,r.$H)(t,b))){g&&g();const n=Bt;Bt=d;try{const n=[t,b===Ft?void 0:y&&b[0]===Ft?[]:b,m];h?h(e,3,n):e(...n),b=t}finally{Bt=n}}}else d.run()};return c&&c(E),d=new l(p),d.scheduler=a?()=>a(E,!1):E,m=t=>$t(t,!1,d),g=d.onStop=()=>{const t=Vt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();Vt.delete(d)}},e?i?E(!0):b=d.run():a?a(E.bind(null,!0),!0):d.run(),w.pause=d.pause.bind(d),w.resume=d.resume.bind(d),w.stop=w,w}function qt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,Rt(t))qt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)qt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{qt(t,e,n)}));else if((0,r.Qd)(t)){for(const r in t)qt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&qt(t[r],e,n)}return t}},6768:function(t,e,n){"use strict";n.d(e,{$u:function(){return st},CE:function(){return Ke},Df:function(){return B},EW:function(){return Ln},FK:function(){return Ue},Gt:function(){return $t},Gy:function(){return L},K9:function(){return le},Lk:function(){return tn},MZ:function(){return V},OW:function(){return F},Q3:function(){return an},QP:function(){return U},WQ:function(){return zt},Wv:function(){return Qe},bF:function(){return en},bo:function(){return R},dY:function(){return m},eW:function(){return on},g2:function(){return dt},h:function(){return Mn},nI:function(){return vn},pI:function(){return vt},pM:function(){return $},qL:function(){return o},uX:function(){return ze},wB:function(){return be}});n(4114),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(3949),n(1454),n(8872),n(7550);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:c,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(c)return(0,r.C4)(),s(c,null,10,[t,o,a]),void(0,r.bl)()}u(t,n,a,o,l)}function u(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const c=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function v(t){let e=l+1,n=c.length;while(e<n){const r=e+n>>>1,i=c[r],s=T(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function y(t){if(!(1&t.flags)){const e=T(t),n=c[c.length-1];!n||!(2&t.flags)&&e>=T(n)?c.push(t):c.splice(v(e),0,t),t.flags|=1,_()}}function _(){g||(g=p.then(I))}function w(t){(0,i.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),_()}function b(t,e,n=l+1){for(0;n<c.length;n++){const e=c[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,c.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>T(t)-T(e)));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function I(t){i.tE;try{for(l=0;l<c.length;l++){const t=c[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<c.length;l++){const t=c[l];t&&(t.flags&=-2)}l=-1,c.length=0,E(t),g=null,(c.length||h.length)&&I(t)}}let S=null,C=null;function A(t){const e=S;return S=t,C=t&&t.type.__scopeId||null,e}function k(t,e=S,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ge(-1);const i=A(e);let s;try{s=t(...n)}finally{A(i),r._d&&Ge(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function R(t,e){if(null===S)return t;const n=Nn(S),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,u,c=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:u,modifiers:c}))}return t}function O(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let u=0;u<s.length;u++){const c=s[u];a&&(c.oldValue=a[u].value);let l=c.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,c,t,e]),(0,r.bl)())}}const x=Symbol("_vte"),N=t=>t.__isTeleport;const D=Symbol("_leaveCb"),P=Symbol("_enterCb");function L(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rt((()=>{t.isMounted=!0})),ot((()=>{t.isUnmounting=!0})),t}const M=[Function,Array],U={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:M,onEnter:M,onAfterEnter:M,onEnterCancelled:M,onBeforeLeave:M,onLeave:M,onAfterLeave:M,onLeaveCancelled:M,onBeforeAppear:M,onAppear:M,onAfterAppear:M,onAppearCancelled:M};function j(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function F(t,e,n,r,s){const{appear:a,mode:u,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:_,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),T=j(n,t),I=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];I(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},C={mode:u,persisted:c,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=y||l}e[D]&&e[D](!0);const i=T[E];i&&Ye(t,i)&&i.el[D]&&i.el[D](),I(r,[e])},enter(t){let e=h,r=f,i=d;if(!n.isMounted){if(!a)return;e=_||h,r=w||f,i=b||d}let s=!1;const o=t[P]=e=>{s||(s=!0,I(e?i:r,[t]),C.delayedLeave&&C.delayedLeave(),t[P]=void 0)};e?S(e,[t,o]):o()},leave(e,r){const i=String(t.key);if(e[P]&&e[P](!0),n.isUnmounting)return r();I(p,[e]);let s=!1;const o=e[D]=n=>{s||(s=!0,r(),I(n?v:m,[e]),e[D]=void 0,T[i]===t&&delete T[i])};T[i]=t,g?S(g,[e,o]):o()},clone(t){const i=F(t,e,n,r,s);return s&&s(i),i}};return C}function V(t,e){6&t.shapeFlag&&t.component?(t.transition=e,V(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function B(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ue?(128&o.patchFlag&&i++,r=r.concat(B(o.children,e,a))):(e||o.type!==Fe)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function $(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function z(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function q(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>q(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(W(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&q(t,e,n,o.component.subTree));const u=4&o.shapeFlag?Nn(o.component):o.el,c=a?null:u,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?()=>!1:t=>(0,i.$3)(g,t);if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,m(f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))s(h,l,12,[c,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,u):(0,i.cy)(n)?n.includes(u)||n.push(u):e?(d[h]=[u],m(h)&&(p[h]=d[h])):(h.value=[u],t.k&&(d[t.k]=h.value))}else e?(d[h]=c,m(h)&&(p[h]=c)):s&&(h.value=c,t.k&&(d[t.k]=c))};c?(r.id=-1,ce(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const W=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const G=t=>t.type.__isKeepAlive;RegExp,RegExp;function H(t,e){return(0,i.cy)(t)?t.some((t=>H(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function K(t,e){X(t,"a",e)}function Q(t,e){X(t,"da",e)}function X(t,e,n=mn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(tt(e,r,n),n){let t=n.parent;while(t&&t.parent)G(t.parent.vnode)&&Y(r,e,n,t),t=t.parent}}function Y(t,e,n,r){const s=tt(e,t,r,!0);at((()=>{(0,i.TF)(r[e],s)}),n)}function J(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Z(t){return 128&t.shapeFlag?t.ssContent:t}function tt(t,e,n=mn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=wn(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const et=t=>(e,n=mn)=>{Sn&&"sp"!==t||tt(t,((...t)=>e(...t)),n)},nt=et("bm"),rt=et("m"),it=et("bu"),st=et("u"),ot=et("bum"),at=et("um"),ut=et("sp"),ct=et("rtg"),lt=et("rtc");function ht(t,e=mn){tt("ec",t,e)}const ft="components";function dt(t,e){return gt(ft,t,!0,e)||t}const pt=Symbol.for("v-ndc");function gt(t,e,n=!0,r=!1){const s=S||mn;if(s){const n=s.type;if(t===ft){const t=Dn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=mt(s[t]||n[t],e)||mt(s.appContext[t],e);return!o&&r?n:o}}function mt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function vt(t,e,n,s){let o;const a=n&&n[s],u=(0,i.cy)(t);if(u||(0,i.Kg)(t)){const n=u&&(0,r.g8)(t);let i=!1;n&&(i=!(0,r.fE)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let s=0,u=t.length;s<u;s++)o[s]=e(i?(0,r.lJ)(t[s]):t[s],s,void 0,a&&a[s])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const yt=t=>t?En(t)?Nn(t):yt(t.parent):null,_t=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yt(t.parent),$root:t=>yt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kt(t),$forceUpdate:t=>t.f||(t.f=()=>{y(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>Te.bind(t)}),wt=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),bt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:u,type:c,appContext:l}=t;let h;if("$"!==e[0]){const r=u[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(wt(s,e))return u[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return u[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return u[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return u[e]=4,n[e];Tt&&(u[e]=0)}}const f=_t[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),f(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(u[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return wt(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let u;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||wt(e,a)||(u=o[0])&&(0,i.$3)(u,a)||(0,i.$3)(r,a)||(0,i.$3)(_t,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Et(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Tt=!0;function It(t){const e=kt(t),n=t.proxy,s=t.ctx;Tt=!1,e.beforeCreate&&Ct(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:u,watch:c,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:R,components:O,directives:x,filters:N}=e,D=null;if(h&&St(h,s,D),u)for(const r in u){const t=u[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Tt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,u=Ln({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:t=>u.value=t})}if(c)for(const r in c)At(c[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{$t(e,t[e])}))}function P(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Ct(f,t,"c"),P(nt,d),P(rt,p),P(it,g),P(st,m),P(K,v),P(Q,y),P(ht,C),P(lt,I),P(ct,S),P(ot,w),P(at,E),P(ut,A),(0,i.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),x&&(t.directives=x),A&&z(t)}function St(t,e,n=i.tE){(0,i.cy)(t)&&(t=Dt(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?zt(n.from||s,n.default,!0):zt(n.from||s):zt(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Ct(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function At(t,e,n,r){let s=r.includes(".")?Ie(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&be(s,n)}else if((0,i.Tn)(t))be(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>At(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&be(s,r,t)}else 0}function kt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,u=o.get(e);let c;return u?c=u:s.length||n||r?(c={},s.length&&s.forEach((t=>Rt(c,t,a,!0))),Rt(c,e,a)):c=e,(0,i.Gv)(e)&&o.set(e,c),c}function Rt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Rt(t,s,n,!0),i&&i.forEach((e=>Rt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Ot[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Ot={data:xt,props:Mt,emits:Mt,methods:Lt,computed:Lt,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Lt,directives:Lt,watch:Ut,provide:xt,inject:Nt};function xt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Nt(t,e){return Lt(Dt(t),Dt(e))}function Dt(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Lt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Mt(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),Et(t),Et(null!=e?e:{})):e}function Ut(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function jt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ft=0;function Vt(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=jt(),a=new WeakSet,u=[];let c=!1;const l=s.app={_uid:Ft++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Un,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(i,o,a){if(!c){0;const u=l._ceVNode||en(n,r);return u.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(u,i):t(u,i,a),c=!0,l._container=i,i.__vue_app__=l,Nn(u.component)}},onUnmount(t){u.push(t)},unmount(){c&&(o(u,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=Bt;Bt=l;try{return t()}finally{Bt=e}}};return l}}let Bt=null;function $t(t,e){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[t]=e}else 0}function zt(t,e,n=!1){const r=mn||S;if(r||Bt){const s=Bt?Bt._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const qt={},Wt=()=>Object.create(qt),Gt=t=>Object.getPrototypeOf(t)===qt;function Ht(t,e,n,i=!1){const s={},o=Wt();t.propsDefaults=Object.create(null),Qt(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Kt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:u}}=t,c=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||u>0)||16&u){let r;Qt(t,e,o,a)&&(h=!0);for(const s in c)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Xt(l,c,s,void 0,t,!0)):delete o[s]);if(a!==c)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&u){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(ke(t.emitsOptions,s))continue;const u=e[s];if(l)if((0,i.$3)(a,s))u!==a[s]&&(a[s]=u,h=!0);else{const e=(0,i.PT)(s);o[e]=Xt(l,c,e,u,t,!1)}else u!==a[s]&&(a[s]=u,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Qt(t,e,n,s){const[o,a]=t.propsOptions;let u,c=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(u||(u={}))[h]=l:n[h]=l:ke(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,c=!0)}if(a){const e=(0,r.ux)(n),s=u||i.MZ;for(let r=0;r<a.length;r++){const u=a[r];n[u]=Xt(o,e,u,s[u],t,!(0,i.$3)(s,u))}}return c}function Xt(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=wn(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Yt=new WeakMap;function Jt(t,e,n=!1){const r=n?Yt:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},u=[];let c=!1;if(!(0,i.Tn)(t)){const r=t=>{c=!0;const[n,r]=Jt(t,e,!0);(0,i.X$)(a,n),r&&u.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!c)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);Zt(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(Zt(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let c=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){c=!0;break}"String"===n&&(l=!1)}else c=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=c,r[1]=l,(c||(0,i.$3)(r,"default"))&&u.push(e)}}}const l=[a,u];return(0,i.Gv)(t)&&r.set(t,l),l}function Zt(t){return"$"!==t[0]&&!(0,i.SU)(t)}const te=t=>"_"===t[0]||"$stable"===t,ee=t=>(0,i.cy)(t)?t.map(un):[un(t)],ne=(t,e,n)=>{if(e._n)return e;const r=k(((...t)=>ee(e(...t))),n);return r._c=!1,r},re=(t,e,n)=>{const r=t._ctx;for(const s in t){if(te(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=ne(s,n,r);else if(null!=n){0;const t=ee(n);e[s]=()=>t}}},ie=(t,e)=>{const n=ee(e);t.slots.default=()=>n},se=(t,e,n)=>{for(const r in e)(n||"_"!==r)&&(t[r]=e[r])},oe=(t,e,n)=>{const r=t.slots=Wt();if(32&t.vnode.shapeFlag){const t=e._;t?(se(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):re(e,r)}else e&&ie(t,e)},ae=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:se(s,e,n):(o=!e.$stable,re(e,s)),a=e}else e&&(ie(t,e),a={default:1});if(o)for(const i in s)te(i)||null!=a[i]||delete s[i]};function ue(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ce=Me;function le(t){return he(t)}function he(t,e){ue();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:u,createText:c,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,u=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ye(t,e)&&(r=Z(t),K(t,i,s,!0),t=null),-2===e.patchFlag&&(u=!1,e.dynamicChildren=null);const{type:c,ref:l,shapeFlag:h}=e;switch(c){case je:_(t,e,n,r);break;case Fe:w(t,e,n,r);break;case Ve:null==t&&T(e,n,r,o);break;case Ue:L(t,e,n,r,i,s,o,a,u);break;default:1&h?C(t,e,n,r,i,s,o,a,u):6&h?M(t,e,n,r,i,s,o,a,u):(64&h||128&h)&&c.process(t,e,n,r,i,s,o,a,u,nt)}null!=l&&i&&q(l,t&&t.ref,s,e||t,!e)},_=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,u)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?A(e,n,r,i,s,o,a,u):N(t,e,i,s,o,a,u)},A=(t,e,n,r,o,c,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=t;if(d=t.el=u(t.type,c,g&&g.is,g),8&m?f(d,t.children):16&m&&R(t.children,d,null,r,o,fe(t,c),l,h),y&&O(t,null,r,"created"),k(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],c,r);"value"in g&&a(d,"value",null,g.value,c),(p=g.onVnodeBeforeMount)&&fn(p,r,t)}y&&O(t,null,r,"beforeMount");const _=pe(o,v);_&&v.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||_||y)&&ce((()=>{p&&fn(p,r,t),_&&v.enter(d),y&&O(t,null,r,"mounted")}),o)},k=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||Le(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,u=0)=>{for(let c=u;c<t.length;c++){const u=t[c]=a?cn(t[c]):un(t[c]);v(null,u,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,u)=>{const c=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&de(n,!1),(m=g.onVnodeBeforeUpdate)&&fn(m,n,e,t),d&&O(e,t,n,"beforeUpdate"),n&&de(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(c,""),h?D(t.dynamicChildren,h,c,n,r,fe(e,s),o):u||B(t,e,c,null,n,r,fe(e,s),o,!1),l>0){if(16&l)P(c,p,g,n,s);else if(2&l&&p.class!==g.class&&a(c,"class",null,g.class,s),4&l&&a(c,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(c,r,i,o,s,n)}}1&l&&t.children!==e.children&&f(c,e.children)}else u||null!=h||P(c,p,g,n,s);((m=g.onVnodeUpdated)||d)&&ce((()=>{m&&fn(m,n,e,t),d&&O(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const u=t[a],c=e[a],l=u.el&&(u.type===Ue||!Ye(u,c)||70&u.shapeFlag)?d(u.el):n;v(u,c,l,null,r,i,s,o,!0)}},P=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const u=n[o],c=e[o];u!==c&&"value"!==o&&a(t,o,c,u,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},L=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),R(e.children||[],n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&ge(t,e,!0)):B(t,e,n,f,i,o,a,u,l)},M=(t,e,n,r,i,s,o,a,u)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,u):U(e,n,r,i,s,o,u):j(t,e,u)},U=(t,e,n,r,i,s,o)=>{const a=t.component=gn(t,r,i);if(G(t)&&(a.ctx.renderer=nt),Cn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,F,o),!t.el){const t=a.subTree=en(Fe);w(null,t,e,n)}}else F(a,t,e,n,i,s,o)},j=(t,e,n)=>{const r=e.component=t.component;if(Ne(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,s,o,a,u)=>{const c=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:l}=t;{const n=ve(t);if(n)return e&&(e.el=l.el,V(t,e,u)),void n.asyncDep.then((()=>{t.isUnmounted||c()}))}let h,f=e;0,de(t,!1),e?(e.el=l.el,V(t,e,u)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&fn(h,s,e,l),de(t,!0);const p=Re(t);0;const g=t.subTree;t.subTree=p,v(g,p,d(g.el),Z(g),t,o,a),e.el=p.el,null===f&&Pe(t,p.el),r&&ce(r,o),(h=e.props&&e.props.onVnodeUpdated)&&ce((()=>fn(h,s,e,l)),o)}else{let r;const{el:u,props:c}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=W(e);if(de(t,!1),l&&(0,i.DY)(l),!g&&(r=c&&c.onVnodeBeforeMount)&&fn(r,f,e),de(t,!0),u&&it){const e=()=>{t.subTree=Re(t),it(u,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(u,t,e):e()}else{d.ce&&d.ce._injectChildStyle(p);const r=t.subTree=Re(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&ce(h,o),!g&&(r=c&&c.onVnodeMounted)){const t=e;ce((()=>fn(r,f,t)),o)}(256&e.shapeFlag||f&&W(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&ce(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new r.X2(c);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>y(f),de(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Kt(t,e.props,i,n),ae(t,e.children,n),(0,r.C4)(),b(t),(0,r.bl)()},B=(t,e,n,r,i,s,o,a,u=!1)=>{const c=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(c,h,n,r,i,s,o,a,u);if(256&d)return void $(c,h,n,r,i,s,o,a,u)}8&p?(16&l&&J(c,i,s),h!==c&&f(n,h)):16&l?16&p?z(c,h,n,r,i,s,o,a,u):J(c,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,u))},$=(t,e,n,r,s,o,a,u,c)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=c?cn(e[d]):un(e[d]);v(t[d],r,n,null,s,o,a,u,c)}l>h?J(t,s,o,!0,!1,f):R(e,n,r,s,o,a,u,c,f)},z=(t,e,n,r,s,o,a,u,c)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=c?cn(e[l]):un(e[l]);if(!Ye(r,i))break;v(r,i,n,null,s,o,a,u,c),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=c?cn(e[d]):un(e[d]);if(!Ye(r,i))break;v(r,i,n,null,s,o,a,u,c),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=c?cn(e[l]):un(e[l]),n,i,s,o,a,u,c),l++}}else if(l>d)while(l<=f)K(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=c?cn(e[l]):un(e[l]);null!=t.key&&m.set(t.key,l)}let y,_=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=w){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&Ye(r,e[y])){i=y;break}void 0===i?K(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,v(r,e[i],n,null,s,o,a,u,c),_++)}const I=b?me(T):i.Oj;for(y=I.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,f,s,o,a,u,c):b&&(y<0||l!==I[y]?H(i,n,f,2):y--)}}},H=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:u,children:c,shapeFlag:l}=t;if(6&l)return void H(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,nt);if(a===Ue){s(o,e,n);for(let t=0;t<c.length;t++)H(c[t],e,n,r);return void s(t.anchor,e,n)}if(a===Ve)return void I(t,e,n);const h=2!==r&&1&l&&u;if(h)if(0===r)u.beforeEnter(o),s(o,e,n),ce((()=>u.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=u,a=()=>s(o,e,n),c=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,e,n)},K=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:u,dynamicChildren:c,shapeFlag:l,patchFlag:h,dirs:f,cacheIndex:d}=t;if(-2===h&&(i=!1),null!=a&&q(a,null,n,t,!0),null!=d&&(e.renderCache[d]=void 0),256&l)return void e.ctx.deactivate(t);const p=1&l&&f,g=!W(t);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&fn(m,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);p&&O(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,nt,r):c&&!c.hasOnce&&(s!==Ue||h>0&&64&h)?J(c,e,n,!1,!0):(s===Ue&&384&h||!i&&16&l)&&J(u,e,n),r&&Q(t)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&ce((()=>{m&&fn(m,e,t),p&&O(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Ue)return void X(n,r);if(e===Ve)return void S(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:u,m:c,a:l}=t;ye(c),ye(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,K(a,t,e,n)),u&&ce(u,e),ce((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,r,i)},Z=t=>{if(6&t.shapeFlag)return Z(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[x];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,b(),E(),tt=!1)},nt={p:v,um:K,m:H,r:Q,mt:U,mc:R,pc:B,pbc:D,n:Z,o:t};let rt,it;return e&&([rt,it]=e(nt)),{render:et,hydrate:rt,createApp:Vt(et,rt)}}function fe({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function de({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pe(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ge(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=cn(s[i]),e.el=t.el),n||-2===e.patchFlag||ge(t,e)),e.type===je&&(e.el=t.el)}}function me(t){const e=t.slice(),n=[0];let r,i,s,o,a;const u=t.length;for(r=0;r<u;r++){const u=t[r];if(0!==u){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function ve(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ve(e)}function ye(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _e=Symbol.for("v-scx"),we=()=>{{const t=zt(_e);return t}};function be(t,e,n){return Ee(t,e,n)}function Ee(t,e,n=i.MZ){const{immediate:s,deep:a,flush:u,once:c}=n;const l=(0,i.X$)({},n);const h=e&&s||!e&&"post"!==u;let f;if(Sn)if("sync"===u){const t=we();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=mn;l.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===u?l.scheduler=t=>{ce(t,d&&d.suspense)}:"sync"!==u&&(p=!0,l.scheduler=(t,e)=>{e?t():y(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return Sn&&(f?f.push(g):h&&g()),g}function Te(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?Ie(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=wn(this),u=Ee(s,o.bind(r),n);return a(),u}function Ie(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Se=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function Ce(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),u=a&&Se(r,e.slice(7));let c;u&&(u.trim&&(s=n.map((t=>(0,i.Kg)(t)?t.trim():t))),u.number&&(s=n.map(i.bB)));let l=r[c=(0,i.rU)(e)]||r[c=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[c=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[c+"Once"];if(h){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,o(h,t,6,s)}}function Ae(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},u=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=Ae(t,e,!0);n&&(u=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||u?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function ke(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function Re(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:u,attrs:c,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:v}=t,y=A(t);let _,w;try{if(4&n.shapeFlag){const t=s||r,e=t;_=un(h.call(e,t,f,d,g,p,m)),w=c}else{const t=e;0,_=un(t.length>1?t(d,{attrs:c,slots:u,emit:l}):t(d,null)),w=e.props?c:Oe(c)}}catch(E){Be.length=0,a(E,t,1),_=en(Fe)}let b=_;if(w&&!1!==v){const t=Object.keys(w),{shapeFlag:e}=b;t.length&&7&e&&(o&&t.some(i.CP)&&(w=xe(w,o)),b=sn(b,w,!1,!0))}return n.dirs&&(b=sn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&V(b,n.transition),_=b,A(y),_}const Oe=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},xe=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function Ne(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:u}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&u>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||De(r,o,c):!!o);if(1024&u)return!0;if(16&u)return r?De(r,o,c):!!o;if(8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!ke(c,n))return!0}}return!1}function De(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ke(n,s))return!0}return!1}function Pe({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const Le=t=>t.__isSuspense;function Me(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):w(t)}const Ue=Symbol.for("v-fgt"),je=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),Ve=Symbol.for("v-stc"),Be=[];let $e=null;function ze(t=!1){Be.push($e=t?null:[])}function qe(){Be.pop(),$e=Be[Be.length-1]||null}let We=1;function Ge(t,e=!1){We+=t,t<0&&$e&&e&&($e.hasOnce=!0)}function He(t){return t.dynamicChildren=We>0?$e||i.Oj:null,qe(),We>0&&$e&&$e.push(t),t}function Ke(t,e,n,r,i,s){return He(tn(t,e,n,r,i,s,!0))}function Qe(t,e,n,r,i){return He(en(t,e,n,r,i,!0))}function Xe(t){return!!t&&!0===t.__v_isVNode}function Ye(t,e){return t.type===e.type&&t.key===e.key}const Je=({key:t})=>null!=t?t:null,Ze=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:S,r:t,k:e,f:!!n}:t:null);function tn(t,e=null,n=null,r=0,s=null,o=(t===Ue?0:1),a=!1,u=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Je(e),ref:e&&Ze(e),scopeId:C,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return u?(ln(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=(0,i.Kg)(n)?8:16),We>0&&!a&&$e&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&$e.push(c),c}const en=nn;function nn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==pt||(t=Fe),Xe(t)){const r=sn(t,e,!0);return n&&ln(r,n),We>0&&!a&&$e&&(6&r.shapeFlag?$e[$e.indexOf(t)]=r:$e.push(r)),r.patchFlag=-2,r}if(Pn(t)&&(t=t.__vccOpts),e){e=rn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const u=(0,i.Kg)(t)?1:Le(t)?128:N(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return tn(t,e,n,s,o,u,a,!0)}function rn(t){return t?(0,r.ju)(t)||Gt(t)?(0,i.X$)({},t):t:null}function sn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:u,transition:c}=t,l=e?hn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Je(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(Ze(e)):[o,Ze(e)]:Ze(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&V(h,c.clone(h)),h}function on(t=" ",e=0){return en(je,null,t,e)}function an(t="",e=!1){return e?(ze(),Qe(Fe,null,t)):en(Fe,null,t)}function un(t){return null==t||"boolean"===typeof t?en(Fe):(0,i.cy)(t)?en(Ue,null,t.slice()):Xe(t)?cn(t):en(je,null,String(t))}function cn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:sn(t)}function ln(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),ln(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Gt(e)?3===r&&S&&(1===S.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=S}}else(0,i.Tn)(e)?(e={default:e,_ctx:S},n=32):(e=String(e),64&r?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function hn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function fn(t,e,n,r=null){o(t,e,7,[n,r])}const dn=jt();let pn=0;function gn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||dn,a={uid:pn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jt(s,o),emitsOptions:Ae(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ce.bind(null,a),t.ce&&t.ce(a),a}let mn=null;const vn=()=>mn||S;let yn,_n;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};yn=e("__VUE_INSTANCE_SETTERS__",(t=>mn=t)),_n=e("__VUE_SSR_SETTERS__",(t=>Sn=t))}const wn=t=>{const e=mn;return yn(t),t.scope.on(),()=>{t.scope.off(),yn(e)}},bn=()=>{mn&&mn.scope.off(),yn(null)};function En(t){return 4&t.vnode.shapeFlag}let Tn,In,Sn=!1;function Cn(t,e=!1,n=!1){e&&_n(e);const{props:r,children:i}=t.vnode,s=En(t);Ht(t,r,s,e),oe(t,i,n);const o=s?An(t,e):void 0;return e&&_n(!1),o}function An(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bt);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?xn(t):null,u=wn(t),c=s(o,t,0,[t.props,n]),l=(0,i.yL)(c);if((0,r.bl)(),u(),!l&&!t.sp||W(t)||z(t),l){if(c.then(bn,bn),e)return c.then((n=>{kn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else kn(t,c,e)}else Rn(t,e)}function kn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Rn(t,n)}function Rn(t,e,n){const s=t.type;if(!t.render){if(!e&&Tn&&!s.render){const e=s.template||kt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,u=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Tn(e,u)}}t.render=s.render||i.tE,In&&In(t)}{const e=wn(t);(0,r.C4)();try{It(t)}finally{(0,r.bl)(),e()}}}const On={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function xn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,On),slots:t.slots,emit:t.emit,expose:e}}function Nn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in _t?_t[n](t):void 0},has(t,e){return e in t||e in _t}})):t.proxy}function Dn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Pn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Ln=(t,e)=>{const n=(0,r.EW)(t,e,Sn);return n};function Mn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?Xe(e)?en(t,null,[e]):en(t,e):en(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Xe(n)&&(n=[n]),en(t,e,n))}const Un="3.5.13"},5130:function(t,e,n){"use strict";n.d(e,{Ef:function(){return tt},Jo:function(){return H},u1:function(){return K}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(rt){}const a=s?t=>s.createHTML(t):t=>t,u="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(u,t):"mathml"===e?l.createElementNS(c,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const _=/(^|;)\s*display\s*:/;function w(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&E(r,e,"")}else for(const t in e)null==n[t]&&E(r,t,"");for(const t in n)"display"===t&&(o=!0),E(r,t,n[t])}else if(s){if(e!==n){const t=r[y];t&&(n+=";"+t),r.cssText=n,o=_.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[v]&&(r.display="none"))}const b=/\s*!important$/;function E(t,e,n){if((0,i.cy)(n))n.forEach((n=>E(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=S(t,e);b.test(n)?t.setProperty((0,i.Tg)(r),n.replace(b,""),"important"):t[r]=n}}const T=["Webkit","Moz","ms"],I={};function S(t,e){const n=I[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return I[e]=r;r=(0,i.ZH)(r);for(let i=0;i<T.length;i++){const n=T[i]+r;if(n in t)return I[e]=n}return e}const C="http://www.w3.org/1999/xlink";function A(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(C,e.slice(6,e.length)):t.setAttributeNS(C,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function k(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let u=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{t[e]=n}catch(rt){0}u&&t.removeAttribute(s||e)}function R(t,e,n,r){t.addEventListener(e,n,r)}function O(t,e,n,r){t.removeEventListener(e,n,r)}const x=Symbol("_vei");function N(t,e,n,r,i=null){const s=t[x]||(t[x]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=P(e);if(r){const o=s[e]=j(r,i);R(t,n,o,a)}else o&&(O(t,n,o,a),s[e]=void 0)}}const D=/(?:Once|Passive|Capture)$/;function P(t){let e;if(D.test(t)){let n;e={};while(n=t.match(D))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let L=0;const M=Promise.resolve(),U=()=>L||(M.then((()=>L=0)),L=Date.now());function j(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(F(t,n.value),e,5,[t])};return n.value=t,n.attached=U(),n}function F(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const V=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,B=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?g(t,r,a):"style"===e?w(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||N(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):$(t,e,r,a))?(k(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||A(t,e,r,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,i.Kg)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),A(t,e,r,a)):k(t,(0,i.PT)(e),r,o,e)};function $(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&V(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!V(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function q(t){t.target.composing=!0}function W(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const G=Symbol("_assign"),H={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[G]=z(s);const o=r||s.props&&"number"===s.props.type;R(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),t[G](r)})),n&&R(t,"change",(()=>{t.value=t.value.trim()})),e||(R(t,"compositionstart",q),R(t,"compositionend",W),R(t,"change",W))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[G]=z(a),t.composing)return;const u=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),c=null==e?"":e;if(u!==c){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===c)return}t.value=c}}};const K={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=(0,i.vM)(e);R(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.bB)(X(t)):X(t)));t[G](t.multiple?o?new Set(e):e:e[0]),t._assigning=!0,(0,r.dY)((()=>{t._assigning=!1}))})),t[G]=z(s)},mounted(t,{value:e}){Q(t,e)},beforeUpdate(t,e,n){t[G]=z(n)},updated(t,{value:e}){t._assigning||Q(t,e)}};function Q(t,e){const n=t.multiple,r=(0,i.cy)(e);if(!n||r||(0,i.vM)(e)){for(let s=0,o=t.options.length;s<o;s++){const o=t.options[s],a=X(o);if(n)if(r){const t=typeof a;o.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):(0,i.u3)(e,a)>-1}else o.selected=e.has(a);else if((0,i.BX)(X(o),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function X(t){return"_value"in t?t._value:t.value}const Y=(0,i.X$)({patchProp:B},f);let J;function Z(){return J||(J=(0,r.K9)(Y))}const tt=(...t)=>{const e=Z().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=nt(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,et(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function et(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function nt(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){"use strict";n.d(e,{$3:function(){return d},$H:function(){return U},BH:function(){return W},BX:function(){return nt},Bm:function(){return b},C4:function(){return Y},CE:function(){return g},CP:function(){return c},DY:function(){return j},Gv:function(){return E},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return u},NO:function(){return a},Oj:function(){return s},PT:function(){return N},Qd:function(){return A},Ro:function(){return B},SU:function(){return R},TF:function(){return h},Tg:function(){return P},Tn:function(){return _},Tr:function(){return G},We:function(){return z},X$:function(){return l},Y2:function(){return tt},ZH:function(){return L},Zf:function(){return C},bB:function(){return V},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return k},yL:function(){return T},yQ:function(){return F}});n(4114),n(8992),n(4520),n(3949),n(1454),n(8872);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,u=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),c=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),v=t=>"[object Date]"===S(t),y=t=>"[object RegExp]"===S(t),_=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||_(t))&&_(t.then)&&_(t.catch),I=Object.prototype.toString,S=t=>I.call(t),C=t=>S(t).slice(8,-1),A=t=>"[object Object]"===S(t),k=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},x=/-(\w)/g,N=O((t=>t.replace(x,((t,e)=>e?e.toUpperCase():"")))),D=/\B([A-Z])/g,P=O((t=>t.replace(D,"-$1").toLowerCase())),L=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=O((t=>{const e=t?`on${L(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),j=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},F=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},V=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const z=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",W=r(q);function G(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=w(r)?X(r):G(r);if(i)for(const t in i)e[t]=i[t]}return e}if(w(t)||E(t))return t}const H=/;(?![^(]*\))/g,K=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(H).forEach((t=>{if(t){const n=t.split(K);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>w(t)?t:null==t?"":p(t)||E(t)&&(t.toString===I||!_(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:b(e)?at(e):!E(e)||p(e)||A(e)?e:String(e),at=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},2952:function(t,e,n){var r="Expected a function",i=NaN,s="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,h="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=h||f||Function("return this")(),p=Object.prototype,g=p.toString,m=Math.max,v=Math.min,y=function(){return d.Date.now()};function _(t,e,n){var i,s,o,a,u,c,l=0,h=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError(r);function p(e){var n=i,r=s;return i=s=void 0,l=e,a=t.apply(r,n),a}function g(t){return l=t,u=setTimeout(E,e),h?p(t):a}function _(t){var n=t-c,r=t-l,i=e-n;return f?v(i,o-r):i}function b(t){var n=t-c,r=t-l;return void 0===c||n>=e||n<0||f&&r>=o}function E(){var t=y();if(b(t))return I(t);u=setTimeout(E,_(t))}function I(t){return u=void 0,d&&i?p(t):(i=s=void 0,a)}function S(){void 0!==u&&clearTimeout(u),l=0,i=c=s=u=void 0}function C(){return void 0===u?a:I(y())}function A(){var t=y(),n=b(t);if(i=arguments,s=this,c=t,n){if(void 0===u)return g(c);if(f)return u=setTimeout(E,e),p(c)}return void 0===u&&(u=setTimeout(E,e)),a}return e=T(e)||0,w(n)&&(h=!!n.leading,f="maxWait"in n,o=f?m(T(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),A.cancel=S,A.flush=C,A}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){return!!t&&"object"==typeof t}function E(t){return"symbol"==typeof t||b(t)&&g.call(t)==s}function T(t){if("number"==typeof t)return t;if(E(t))return i;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?i:+t}t.exports=_},8626:function(t,e,n){var r;t=n.nmd(t),n(4114),n(6573),n(8100),n(7936),n(8992),n(4743),n(3215),n(4520),n(2577),n(670),n(3949),n(1454),n(8872),n(7550),n(7413),n(1795),function(){var i,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",d=1,p=2,g=4,m=1,v=2,y=1,_=2,w=4,b=8,E=16,T=32,I=64,S=128,C=256,A=512,k=30,R="...",O=800,x=16,N=1,D=2,P=3,L=1/0,M=9007199254740991,U=17976931348623157e292,j=NaN,F=4294967295,V=F-1,B=F>>>1,$=[["ary",S],["bind",y],["bindKey",_],["curry",b],["curryRight",E],["flip",A],["partial",T],["partialRight",I],["rearg",C]],z="[object Arguments]",q="[object Array]",W="[object AsyncFunction]",G="[object Boolean]",H="[object Date]",K="[object DOMException]",Q="[object Error]",X="[object Function]",Y="[object GeneratorFunction]",J="[object Map]",Z="[object Number]",tt="[object Null]",et="[object Object]",nt="[object Promise]",rt="[object Proxy]",it="[object RegExp]",st="[object Set]",ot="[object String]",at="[object Symbol]",ut="[object Undefined]",ct="[object WeakMap]",lt="[object WeakSet]",ht="[object ArrayBuffer]",ft="[object DataView]",dt="[object Float32Array]",pt="[object Float64Array]",gt="[object Int8Array]",mt="[object Int16Array]",vt="[object Int32Array]",yt="[object Uint8Array]",_t="[object Uint8ClampedArray]",wt="[object Uint16Array]",bt="[object Uint32Array]",Et=/\b__p \+= '';/g,Tt=/\b(__p \+=) '' \+/g,It=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,At=RegExp(St.source),kt=RegExp(Ct.source),Rt=/<%-([\s\S]+?)%>/g,Ot=/<%([\s\S]+?)%>/g,xt=/<%=([\s\S]+?)%>/g,Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dt=/^\w*$/,Pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,Mt=RegExp(Lt.source),Ut=/^\s+/,jt=/\s/,Ft=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Vt=/\{\n\/\* \[wrapped with (.+)\] \*/,Bt=/,? & /,$t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zt=/[()=,{}\[\]\/\s]/,qt=/\\(\\)?/g,Wt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Gt=/\w*$/,Ht=/^[-+]0x[0-9a-f]+$/i,Kt=/^0b[01]+$/i,Qt=/^\[object .+?Constructor\]$/,Xt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zt=/($^)/,te=/['\n\r\u2028\u2029\\]/g,ee="\\ud800-\\udfff",ne="\\u0300-\\u036f",re="\\ufe20-\\ufe2f",ie="\\u20d0-\\u20ff",se=ne+re+ie,oe="\\u2700-\\u27bf",ae="a-z\\xdf-\\xf6\\xf8-\\xff",ue="\\xac\\xb1\\xd7\\xf7",ce="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",le="\\u2000-\\u206f",he=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fe="A-Z\\xc0-\\xd6\\xd8-\\xde",de="\\ufe0e\\ufe0f",pe=ue+ce+le+he,ge="['’]",me="["+ee+"]",ve="["+pe+"]",ye="["+se+"]",_e="\\d+",we="["+oe+"]",be="["+ae+"]",Ee="[^"+ee+pe+_e+oe+ae+fe+"]",Te="\\ud83c[\\udffb-\\udfff]",Ie="(?:"+ye+"|"+Te+")",Se="[^"+ee+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",ke="["+fe+"]",Re="\\u200d",Oe="(?:"+be+"|"+Ee+")",xe="(?:"+ke+"|"+Ee+")",Ne="(?:"+ge+"(?:d|ll|m|re|s|t|ve))?",De="(?:"+ge+"(?:D|LL|M|RE|S|T|VE))?",Pe=Ie+"?",Le="["+de+"]?",Me="(?:"+Re+"(?:"+[Se,Ce,Ae].join("|")+")"+Le+Pe+")*",Ue="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",je="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fe=Le+Pe+Me,Ve="(?:"+[we,Ce,Ae].join("|")+")"+Fe,Be="(?:"+[Se+ye+"?",ye,Ce,Ae,me].join("|")+")",$e=RegExp(ge,"g"),ze=RegExp(ye,"g"),qe=RegExp(Te+"(?="+Te+")|"+Be+Fe,"g"),We=RegExp([ke+"?"+be+"+"+Ne+"(?="+[ve,ke,"$"].join("|")+")",xe+"+"+De+"(?="+[ve,ke+Oe,"$"].join("|")+")",ke+"?"+Oe+"+"+Ne,ke+"+"+De,je,Ue,_e,Ve].join("|"),"g"),Ge=RegExp("["+Re+ee+se+de+"]"),He=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ke=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Qe=-1,Xe={};Xe[dt]=Xe[pt]=Xe[gt]=Xe[mt]=Xe[vt]=Xe[yt]=Xe[_t]=Xe[wt]=Xe[bt]=!0,Xe[z]=Xe[q]=Xe[ht]=Xe[G]=Xe[ft]=Xe[H]=Xe[Q]=Xe[X]=Xe[J]=Xe[Z]=Xe[et]=Xe[it]=Xe[st]=Xe[ot]=Xe[ct]=!1;var Ye={};Ye[z]=Ye[q]=Ye[ht]=Ye[ft]=Ye[G]=Ye[H]=Ye[dt]=Ye[pt]=Ye[gt]=Ye[mt]=Ye[vt]=Ye[J]=Ye[Z]=Ye[et]=Ye[it]=Ye[st]=Ye[ot]=Ye[at]=Ye[yt]=Ye[_t]=Ye[wt]=Ye[bt]=!0,Ye[Q]=Ye[X]=Ye[ct]=!1;var Je={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},en={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nn=parseFloat,rn=parseInt,sn="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,on="object"==typeof self&&self&&self.Object===Object&&self,an=sn||on||Function("return this")(),un=e&&!e.nodeType&&e,cn=un&&t&&!t.nodeType&&t,ln=cn&&cn.exports===un,hn=ln&&sn.process,fn=function(){try{var t=cn&&cn.require&&cn.require("util").types;return t||hn&&hn.binding&&hn.binding("util")}catch(e){}}(),dn=fn&&fn.isArrayBuffer,pn=fn&&fn.isDate,gn=fn&&fn.isMap,mn=fn&&fn.isRegExp,vn=fn&&fn.isSet,yn=fn&&fn.isTypedArray;function _n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function wn(t,e,n,r){var i=-1,s=null==t?0:t.length;while(++i<s){var o=t[i];e(r,o,n(o),t)}return r}function bn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function En(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function Tn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function In(t,e){var n=-1,r=null==t?0:t.length,i=0,s=[];while(++n<r){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Sn(t,e){var n=null==t?0:t.length;return!!n&&Un(t,e,0)>-1}function Cn(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function An(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function kn(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function Rn(t,e,n,r){var i=-1,s=null==t?0:t.length;r&&s&&(n=t[++i]);while(++i<s)n=e(n,t[i],i,t);return n}function On(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function xn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var Nn=Bn("length");function Dn(t){return t.split("")}function Pn(t){return t.match($t)||[]}function Ln(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Mn(t,e,n,r){var i=t.length,s=n+(r?1:-1);while(r?s--:++s<i)if(e(t[s],s,t))return s;return-1}function Un(t,e,n){return e===e?dr(t,e,n):Mn(t,Fn,n)}function jn(t,e,n,r){var i=n-1,s=t.length;while(++i<s)if(r(t[i],e))return i;return-1}function Fn(t){return t!==t}function Vn(t,e){var n=null==t?0:t.length;return n?Wn(t,e)/n:j}function Bn(t){return function(e){return null==e?i:e[t]}}function $n(t){return function(e){return null==t?i:t[e]}}function zn(t,e,n,r,i){return i(t,(function(t,i,s){n=r?(r=!1,t):e(n,t,i,s)})),n}function qn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Wn(t,e){var n,r=-1,s=t.length;while(++r<s){var o=e(t[r]);o!==i&&(n=n===i?o:n+o)}return n}function Gn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Hn(t,e){return An(e,(function(e){return[e,t[e]]}))}function Kn(t){return t?t.slice(0,vr(t)+1).replace(Ut,""):t}function Qn(t){return function(e){return t(e)}}function Xn(t,e){return An(e,(function(e){return t[e]}))}function Yn(t,e){return t.has(e)}function Jn(t,e){var n=-1,r=t.length;while(++n<r&&Un(e,t[n],0)>-1);return n}function Zn(t,e){var n=t.length;while(n--&&Un(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var er=$n(Je),nr=$n(Ze);function rr(t){return"\\"+en[t]}function ir(t,e){return null==t?i:t[e]}function sr(t){return Ge.test(t)}function or(t){return He.test(t)}function ar(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function ur(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function cr(t,e){return function(n){return t(e(n))}}function lr(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n];o!==e&&o!==f||(t[n]=f,s[i++]=n)}return s}function hr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function fr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function dr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function pr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function gr(t){return sr(t)?_r(t):Nn(t)}function mr(t){return sr(t)?wr(t):Dn(t)}function vr(t){var e=t.length;while(e--&&jt.test(t.charAt(e)));return e}var yr=$n(tn);function _r(t){var e=qe.lastIndex=0;while(qe.test(t))++e;return e}function wr(t){return t.match(qe)||[]}function br(t){return t.match(We)||[]}var Er=function t(e){e=null==e?an:Tr.defaults(an.Object(),e,Tr.pick(an,Ke));var n=e.Array,r=e.Date,jt=e.Error,$t=e.Function,ee=e.Math,ne=e.Object,re=e.RegExp,ie=e.String,se=e.TypeError,oe=n.prototype,ae=$t.prototype,ue=ne.prototype,ce=e["__core-js_shared__"],le=ae.toString,he=ue.hasOwnProperty,fe=0,de=function(){var t=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pe=ue.toString,ge=le.call(ne),me=an._,ve=re("^"+le.call(he).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ye=ln?e.Buffer:i,_e=e.Symbol,we=e.Uint8Array,be=ye?ye.allocUnsafe:i,Ee=cr(ne.getPrototypeOf,ne),Te=ne.create,Ie=ue.propertyIsEnumerable,Se=oe.splice,Ce=_e?_e.isConcatSpreadable:i,Ae=_e?_e.iterator:i,ke=_e?_e.toStringTag:i,Re=function(){try{var t=Ho(ne,"defineProperty");return t({},"",{}),t}catch(e){}}(),Oe=e.clearTimeout!==an.clearTimeout&&e.clearTimeout,xe=r&&r.now!==an.Date.now&&r.now,Ne=e.setTimeout!==an.setTimeout&&e.setTimeout,De=ee.ceil,Pe=ee.floor,Le=ne.getOwnPropertySymbols,Me=ye?ye.isBuffer:i,Ue=e.isFinite,je=oe.join,Fe=cr(ne.keys,ne),Ve=ee.max,Be=ee.min,qe=r.now,We=e.parseInt,Ge=ee.random,He=oe.reverse,Je=Ho(e,"DataView"),Ze=Ho(e,"Map"),tn=Ho(e,"Promise"),en=Ho(e,"Set"),sn=Ho(e,"WeakMap"),on=Ho(ne,"create"),un=sn&&new sn,cn={},hn=Na(Je),fn=Na(Ze),Nn=Na(tn),Dn=Na(en),$n=Na(sn),dr=_e?_e.prototype:i,_r=dr?dr.valueOf:i,wr=dr?dr.toString:i;function Er(t){if(Sl(t)&&!ul(t)&&!(t instanceof Ar)){if(t instanceof Cr)return t;if(he.call(t,"__wrapped__"))return Pa(t)}return new Cr(t)}var Ir=function(){function t(){}return function(e){if(!Il(e))return{};if(Te)return Te(e);t.prototype=e;var n=new t;return t.prototype=i,n}}();function Sr(){}function Cr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}function Ar(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function kr(){var t=new Ar(this.__wrapped__);return t.__actions__=ro(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ro(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ro(this.__views__),t}function Rr(){if(this.__filtered__){var t=new Ar(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Or(){var t=this.__wrapped__.value(),e=this.__dir__,n=ul(t),r=e<0,i=n?t.length:0,s=Jo(0,i,this.__views__),o=s.start,a=s.end,u=a-o,c=r?a:o-1,l=this.__iteratees__,h=l.length,f=0,d=Be(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return js(t,this.__actions__);var p=[];t:while(u--&&f<d){c+=e;var g=-1,m=t[c];while(++g<h){var v=l[g],y=v.iteratee,_=v.type,w=y(m);if(_==D)m=w;else if(!w){if(_==N)continue t;break t}}p[f++]=m}return p}function xr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Nr(){this.__data__=on?on(null):{},this.size=0}function Dr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Pr(t){var e=this.__data__;if(on){var n=e[t];return n===l?i:n}return he.call(e,t)?e[t]:i}function Lr(t){var e=this.__data__;return on?e[t]!==i:he.call(e,t)}function Mr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=on&&e===i?l:e,this}function Ur(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function jr(){this.__data__=[],this.size=0}function Fr(t){var e=this.__data__,n=li(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Se.call(e,n,1),--this.size,!0}function Vr(t){var e=this.__data__,n=li(e,t);return n<0?i:e[n][1]}function Br(t){return li(this.__data__,t)>-1}function $r(t,e){var n=this.__data__,r=li(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function zr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function qr(){this.size=0,this.__data__={hash:new xr,map:new(Ze||Ur),string:new xr}}function Wr(t){var e=Wo(this,t)["delete"](t);return this.size-=e?1:0,e}function Gr(t){return Wo(this,t).get(t)}function Hr(t){return Wo(this,t).has(t)}function Kr(t,e){var n=Wo(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Qr(t){var e=-1,n=null==t?0:t.length;this.__data__=new zr;while(++e<n)this.add(t[e])}function Xr(t){return this.__data__.set(t,l),this}function Yr(t){return this.__data__.has(t)}function Jr(t){var e=this.__data__=new Ur(t);this.size=e.size}function Zr(){this.__data__=new Ur,this.size=0}function ti(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ei(t){return this.__data__.get(t)}function ni(t){return this.__data__.has(t)}function ri(t,e){var n=this.__data__;if(n instanceof Ur){var r=n.__data__;if(!Ze||r.length<o-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new zr(r)}return n.set(t,e),this.size=n.size,this}function ii(t,e){var n=ul(t),r=!n&&al(t),i=!n&&!r&&dl(t),s=!n&&!r&&!i&&Vl(t),o=n||r||i||s,a=o?Gn(t.length,ie):[],u=a.length;for(var c in t)!e&&!he.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||s&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||oa(c,u))||a.push(c);return a}function si(t){var e=t.length;return e?t[vs(0,e-1)]:i}function oi(t,e){return Ra(ro(t),mi(e,0,t.length))}function ai(t){return Ra(ro(t))}function ui(t,e,n){(n!==i&&!il(t[e],n)||n===i&&!(e in t))&&pi(t,e,n)}function ci(t,e,n){var r=t[e];he.call(t,e)&&il(r,n)&&(n!==i||e in t)||pi(t,e,n)}function li(t,e){var n=t.length;while(n--)if(il(t[n][0],e))return n;return-1}function hi(t,e,n,r){return Ei(t,(function(t,i,s){e(r,t,n(t),s)})),r}function fi(t,e){return t&&io(e,Eh(e),t)}function di(t,e){return t&&io(e,Th(e),t)}function pi(t,e,n){"__proto__"==e&&Re?Re(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function gi(t,e){var r=-1,s=e.length,o=n(s),a=null==t;while(++r<s)o[r]=a?i:mh(t,e[r]);return o}function mi(t,e,n){return t===t&&(n!==i&&(t=t<=n?t:n),e!==i&&(t=t>=e?t:e)),t}function vi(t,e,n,r,s,o){var a,u=e&d,c=e&p,l=e&g;if(n&&(a=s?n(t,r,s,o):n(t)),a!==i)return a;if(!Il(t))return t;var h=ul(t);if(h){if(a=ea(t),!u)return ro(t,a)}else{var f=Yo(t),m=f==X||f==Y;if(dl(t))return Hs(t,u);if(f==et||f==z||m&&!s){if(a=c||m?{}:na(t),!u)return c?oo(t,di(a,t)):so(t,fi(a,t))}else{if(!Ye[f])return s?t:{};a=ra(t,f,u)}}o||(o=new Jr);var v=o.get(t);if(v)return v;o.set(t,a),Ul(t)?t.forEach((function(r){a.add(vi(r,e,n,r,t,o))})):Cl(t)&&t.forEach((function(r,i){a.set(i,vi(r,e,n,i,t,o))}));var y=l?c?Vo:Fo:c?Th:Eh,_=h?i:y(t);return bn(_||t,(function(r,i){_&&(i=r,r=t[i]),ci(a,i,vi(r,e,n,i,t,o))})),a}function yi(t){var e=Eh(t);return function(n){return _i(n,t,e)}}function _i(t,e,n){var r=n.length;if(null==t)return!r;t=ne(t);while(r--){var s=n[r],o=e[s],a=t[s];if(a===i&&!(s in t)||!o(a))return!1}return!0}function wi(t,e,n){if("function"!=typeof t)throw new se(u);return Sa((function(){t.apply(i,n)}),e)}function bi(t,e,n,r){var i=-1,s=Sn,a=!0,u=t.length,c=[],l=e.length;if(!u)return c;n&&(e=An(e,Qn(n))),r?(s=Cn,a=!1):e.length>=o&&(s=Yn,a=!1,e=new Qr(e));t:while(++i<u){var h=t[i],f=null==n?h:n(h);if(h=r||0!==h?h:0,a&&f===f){var d=l;while(d--)if(e[d]===f)continue t;c.push(h)}else s(e,f,r)||c.push(h)}return c}Er.templateSettings={escape:Rt,evaluate:Ot,interpolate:xt,variable:"",imports:{_:Er}},Er.prototype=Sr.prototype,Er.prototype.constructor=Er,Cr.prototype=Ir(Sr.prototype),Cr.prototype.constructor=Cr,Ar.prototype=Ir(Sr.prototype),Ar.prototype.constructor=Ar,xr.prototype.clear=Nr,xr.prototype["delete"]=Dr,xr.prototype.get=Pr,xr.prototype.has=Lr,xr.prototype.set=Mr,Ur.prototype.clear=jr,Ur.prototype["delete"]=Fr,Ur.prototype.get=Vr,Ur.prototype.has=Br,Ur.prototype.set=$r,zr.prototype.clear=qr,zr.prototype["delete"]=Wr,zr.prototype.get=Gr,zr.prototype.has=Hr,zr.prototype.set=Kr,Qr.prototype.add=Qr.prototype.push=Xr,Qr.prototype.has=Yr,Jr.prototype.clear=Zr,Jr.prototype["delete"]=ti,Jr.prototype.get=ei,Jr.prototype.has=ni,Jr.prototype.set=ri;var Ei=co(xi),Ti=co(Ni,!0);function Ii(t,e){var n=!0;return Ei(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Si(t,e,n){var r=-1,s=t.length;while(++r<s){var o=t[r],a=e(o);if(null!=a&&(u===i?a===a&&!Fl(a):n(a,u)))var u=a,c=o}return c}function Ci(t,e,n,r){var s=t.length;n=Kl(n),n<0&&(n=-n>s?0:s+n),r=r===i||r>s?s:Kl(r),r<0&&(r+=s),r=n>r?0:Ql(r);while(n<r)t[n++]=e;return t}function Ai(t,e){var n=[];return Ei(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function ki(t,e,n,r,i){var s=-1,o=t.length;n||(n=sa),i||(i=[]);while(++s<o){var a=t[s];e>0&&n(a)?e>1?ki(a,e-1,n,r,i):kn(i,a):r||(i[i.length]=a)}return i}var Ri=lo(),Oi=lo(!0);function xi(t,e){return t&&Ri(t,e,Eh)}function Ni(t,e){return t&&Oi(t,e,Eh)}function Di(t,e){return In(e,(function(e){return bl(t[e])}))}function Pi(t,e){e=zs(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[xa(e[n++])];return n&&n==r?t:i}function Li(t,e,n){var r=e(t);return ul(t)?r:kn(r,n(t))}function Mi(t){return null==t?t===i?ut:tt:ke&&ke in ne(t)?Ko(t):_a(t)}function Ui(t,e){return t>e}function ji(t,e){return null!=t&&he.call(t,e)}function Fi(t,e){return null!=t&&e in ne(t)}function Vi(t,e,n){return t>=Be(e,n)&&t<Ve(e,n)}function Bi(t,e,r){var s=r?Cn:Sn,o=t[0].length,a=t.length,u=a,c=n(a),l=1/0,h=[];while(u--){var f=t[u];u&&e&&(f=An(f,Qn(e))),l=Be(f.length,l),c[u]=!r&&(e||o>=120&&f.length>=120)?new Qr(u&&f):i}f=t[0];var d=-1,p=c[0];t:while(++d<o&&h.length<l){var g=f[d],m=e?e(g):g;if(g=r||0!==g?g:0,!(p?Yn(p,m):s(h,m,r))){u=a;while(--u){var v=c[u];if(!(v?Yn(v,m):s(t[u],m,r)))continue t}p&&p.push(m),h.push(g)}}return h}function $i(t,e,n,r){return xi(t,(function(t,i,s){e(r,n(t),i,s)})),r}function zi(t,e,n){e=zs(e,t),t=ba(t,e);var r=null==t?t:t[xa(su(e))];return null==r?i:_n(r,t,n)}function qi(t){return Sl(t)&&Mi(t)==z}function Wi(t){return Sl(t)&&Mi(t)==ht}function Gi(t){return Sl(t)&&Mi(t)==H}function Hi(t,e,n,r,i){return t===e||(null==t||null==e||!Sl(t)&&!Sl(e)?t!==t&&e!==e:Ki(t,e,n,r,Hi,i))}function Ki(t,e,n,r,i,s){var o=ul(t),a=ul(e),u=o?q:Yo(t),c=a?q:Yo(e);u=u==z?et:u,c=c==z?et:c;var l=u==et,h=c==et,f=u==c;if(f&&dl(t)){if(!dl(e))return!1;o=!0,l=!1}if(f&&!l)return s||(s=new Jr),o||Vl(t)?Lo(t,e,n,r,i,s):Mo(t,e,u,n,r,i,s);if(!(n&m)){var d=l&&he.call(t,"__wrapped__"),p=h&&he.call(e,"__wrapped__");if(d||p){var g=d?t.value():t,v=p?e.value():e;return s||(s=new Jr),i(g,v,n,r,s)}}return!!f&&(s||(s=new Jr),Uo(t,e,n,r,i,s))}function Qi(t){return Sl(t)&&Yo(t)==J}function Xi(t,e,n,r){var s=n.length,o=s,a=!r;if(null==t)return!o;t=ne(t);while(s--){var u=n[s];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}while(++s<o){u=n[s];var c=u[0],l=t[c],h=u[1];if(a&&u[2]){if(l===i&&!(c in t))return!1}else{var f=new Jr;if(r)var d=r(l,h,c,t,e,f);if(!(d===i?Hi(h,l,m|v,r,f):d))return!1}}return!0}function Yi(t){if(!Il(t)||ha(t))return!1;var e=bl(t)?ve:Qt;return e.test(Na(t))}function Ji(t){return Sl(t)&&Mi(t)==it}function Zi(t){return Sl(t)&&Yo(t)==st}function ts(t){return Sl(t)&&Tl(t.length)&&!!Xe[Mi(t)]}function es(t){return"function"==typeof t?t:null==t?xf:"object"==typeof t?ul(t)?as(t[0],t[1]):os(t):qf(t)}function ns(t){if(!da(t))return Fe(t);var e=[];for(var n in ne(t))he.call(t,n)&&"constructor"!=n&&e.push(n);return e}function rs(t){if(!Il(t))return ya(t);var e=da(t),n=[];for(var r in t)("constructor"!=r||!e&&he.call(t,r))&&n.push(r);return n}function is(t,e){return t<e}function ss(t,e){var r=-1,i=ll(t)?n(t.length):[];return Ei(t,(function(t,n,s){i[++r]=e(t,n,s)})),i}function os(t){var e=Go(t);return 1==e.length&&e[0][2]?ga(e[0][0],e[0][1]):function(n){return n===t||Xi(n,t,e)}}function as(t,e){return ua(t)&&pa(e)?ga(xa(t),e):function(n){var r=mh(n,t);return r===i&&r===e?yh(n,t):Hi(e,r,m|v)}}function us(t,e,n,r,s){t!==e&&Ri(e,(function(o,a){if(s||(s=new Jr),Il(o))cs(t,e,a,n,us,r,s);else{var u=r?r(Ta(t,a),o,a+"",t,e,s):i;u===i&&(u=o),ui(t,a,u)}}),Th)}function cs(t,e,n,r,s,o,a){var u=Ta(t,n),c=Ta(e,n),l=a.get(c);if(l)ui(t,n,l);else{var h=o?o(u,c,n+"",t,e,a):i,f=h===i;if(f){var d=ul(c),p=!d&&dl(c),g=!d&&!p&&Vl(c);h=c,d||p||g?ul(u)?h=u:hl(u)?h=ro(u):p?(f=!1,h=Hs(c,!0)):g?(f=!1,h=Js(c,!0)):h=[]:Pl(c)||al(c)?(h=u,al(u)?h=Yl(u):Il(u)&&!bl(u)||(h=na(c))):f=!1}f&&(a.set(c,h),s(h,c,r,o,a),a["delete"](c)),ui(t,n,h)}}function ls(t,e){var n=t.length;if(n)return e+=e<0?n:0,oa(e,n)?t[e]:i}function hs(t,e,n){e=e.length?An(e,(function(t){return ul(t)?function(e){return Pi(e,1===t.length?t[0]:t)}:t})):[xf];var r=-1;e=An(e,Qn(qo()));var i=ss(t,(function(t,n,i){var s=An(e,(function(e){return e(t)}));return{criteria:s,index:++r,value:t}}));return qn(i,(function(t,e){return to(t,e,n)}))}function fs(t,e){return ds(t,e,(function(e,n){return yh(t,n)}))}function ds(t,e,n){var r=-1,i=e.length,s={};while(++r<i){var o=e[r],a=Pi(t,o);n(a,o)&&Ts(s,zs(o,t),a)}return s}function ps(t){return function(e){return Pi(e,t)}}function gs(t,e,n,r){var i=r?jn:Un,s=-1,o=e.length,a=t;t===e&&(e=ro(e)),n&&(a=An(t,Qn(n)));while(++s<o){var u=0,c=e[s],l=n?n(c):c;while((u=i(a,l,u,r))>-1)a!==t&&Se.call(a,u,1),Se.call(t,u,1)}return t}function ms(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==s){var s=i;oa(i)?Se.call(t,i,1):Ls(t,i)}}return t}function vs(t,e){return t+Pe(Ge()*(e-t+1))}function ys(t,e,r,i){var s=-1,o=Ve(De((e-t)/(r||1)),0),a=n(o);while(o--)a[i?o:++s]=t,t+=r;return a}function _s(t,e){var n="";if(!t||e<1||e>M)return n;do{e%2&&(n+=t),e=Pe(e/2),e&&(t+=t)}while(e);return n}function ws(t,e){return Ca(wa(t,e,xf),t+"")}function bs(t){return si(Bh(t))}function Es(t,e){var n=Bh(t);return Ra(n,mi(e,0,n.length))}function Ts(t,e,n,r){if(!Il(t))return t;e=zs(e,t);var s=-1,o=e.length,a=o-1,u=t;while(null!=u&&++s<o){var c=xa(e[s]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(s!=a){var h=u[c];l=r?r(h,c,u):i,l===i&&(l=Il(h)?h:oa(e[s+1])?[]:{})}ci(u,c,l),u=u[c]}return t}var Is=un?function(t,e){return un.set(t,e),t}:xf,Ss=Re?function(t,e){return Re(t,"toString",{configurable:!0,enumerable:!1,value:Af(e),writable:!0})}:xf;function Cs(t){return Ra(Bh(t))}function As(t,e,r){var i=-1,s=t.length;e<0&&(e=-e>s?0:s+e),r=r>s?s:r,r<0&&(r+=s),s=e>r?0:r-e>>>0,e>>>=0;var o=n(s);while(++i<s)o[i]=t[i+e];return o}function ks(t,e){var n;return Ei(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function Rs(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=B){while(r<i){var s=r+i>>>1,o=t[s];null!==o&&!Fl(o)&&(n?o<=e:o<e)?r=s+1:i=s}return i}return Os(t,e,xf,n)}function Os(t,e,n,r){var s=0,o=null==t?0:t.length;if(0===o)return 0;e=n(e);var a=e!==e,u=null===e,c=Fl(e),l=e===i;while(s<o){var h=Pe((s+o)/2),f=n(t[h]),d=f!==i,p=null===f,g=f===f,m=Fl(f);if(a)var v=r||g;else v=l?g&&(r||d):u?g&&d&&(r||!p):c?g&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?s=h+1:o=h}return Be(o,V)}function xs(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n],a=e?e(o):o;if(!n||!il(a,u)){var u=a;s[i++]=0===o?0:o}}return s}function Ns(t){return"number"==typeof t?t:Fl(t)?j:+t}function Ds(t){if("string"==typeof t)return t;if(ul(t))return An(t,Ds)+"";if(Fl(t))return wr?wr.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Ps(t,e,n){var r=-1,i=Sn,s=t.length,a=!0,u=[],c=u;if(n)a=!1,i=Cn;else if(s>=o){var l=e?null:Ro(t);if(l)return hr(l);a=!1,i=Yn,c=new Qr}else c=e?[]:u;t:while(++r<s){var h=t[r],f=e?e(h):h;if(h=n||0!==h?h:0,a&&f===f){var d=c.length;while(d--)if(c[d]===f)continue t;e&&c.push(f),u.push(h)}else i(c,f,n)||(c!==u&&c.push(f),u.push(h))}return u}function Ls(t,e){return e=zs(e,t),t=ba(t,e),null==t||delete t[xa(su(e))]}function Ms(t,e,n,r){return Ts(t,e,n(Pi(t,e)),r)}function Us(t,e,n,r){var i=t.length,s=r?i:-1;while((r?s--:++s<i)&&e(t[s],s,t));return n?As(t,r?0:s,r?s+1:i):As(t,r?s+1:0,r?i:s)}function js(t,e){var n=t;return n instanceof Ar&&(n=n.value()),Rn(e,(function(t,e){return e.func.apply(e.thisArg,kn([t],e.args))}),n)}function Fs(t,e,r){var i=t.length;if(i<2)return i?Ps(t[0]):[];var s=-1,o=n(i);while(++s<i){var a=t[s],u=-1;while(++u<i)u!=s&&(o[s]=bi(o[s]||a,t[u],e,r))}return Ps(ki(o,1),e,r)}function Vs(t,e,n){var r=-1,s=t.length,o=e.length,a={};while(++r<s){var u=r<o?e[r]:i;n(a,t[r],u)}return a}function Bs(t){return hl(t)?t:[]}function $s(t){return"function"==typeof t?t:xf}function zs(t,e){return ul(t)?t:ua(t,e)?[t]:Oa(Zl(t))}var qs=ws;function Ws(t,e,n){var r=t.length;return n=n===i?r:n,!e&&n>=r?t:As(t,e,n)}var Gs=Oe||function(t){return an.clearTimeout(t)};function Hs(t,e){if(e)return t.slice();var n=t.length,r=be?be(n):new t.constructor(n);return t.copy(r),r}function Ks(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function Qs(t,e){var n=e?Ks(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Xs(t){var e=new t.constructor(t.source,Gt.exec(t));return e.lastIndex=t.lastIndex,e}function Ys(t){return _r?ne(_r.call(t)):{}}function Js(t,e){var n=e?Ks(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Zs(t,e){if(t!==e){var n=t!==i,r=null===t,s=t===t,o=Fl(t),a=e!==i,u=null===e,c=e===e,l=Fl(e);if(!u&&!l&&!o&&t>e||o&&a&&c&&!u&&!l||r&&a&&c||!n&&c||!s)return 1;if(!r&&!o&&!l&&t<e||l&&n&&s&&!r&&!o||u&&n&&s||!a&&s||!c)return-1}return 0}function to(t,e,n){var r=-1,i=t.criteria,s=e.criteria,o=i.length,a=n.length;while(++r<o){var u=Zs(i[r],s[r]);if(u){if(r>=a)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}function eo(t,e,r,i){var s=-1,o=t.length,a=r.length,u=-1,c=e.length,l=Ve(o-a,0),h=n(c+l),f=!i;while(++u<c)h[u]=e[u];while(++s<a)(f||s<o)&&(h[r[s]]=t[s]);while(l--)h[u++]=t[s++];return h}function no(t,e,r,i){var s=-1,o=t.length,a=-1,u=r.length,c=-1,l=e.length,h=Ve(o-u,0),f=n(h+l),d=!i;while(++s<h)f[s]=t[s];var p=s;while(++c<l)f[p+c]=e[c];while(++a<u)(d||s<o)&&(f[p+r[a]]=t[s++]);return f}function ro(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function io(t,e,n,r){var s=!n;n||(n={});var o=-1,a=e.length;while(++o<a){var u=e[o],c=r?r(n[u],t[u],u,n,t):i;c===i&&(c=t[u]),s?pi(n,u,c):ci(n,u,c)}return n}function so(t,e){return io(t,Qo(t),e)}function oo(t,e){return io(t,Xo(t),e)}function ao(t,e){return function(n,r){var i=ul(n)?wn:hi,s=e?e():{};return i(n,t,qo(r,2),s)}}function uo(t){return ws((function(e,n){var r=-1,s=n.length,o=s>1?n[s-1]:i,a=s>2?n[2]:i;o=t.length>3&&"function"==typeof o?(s--,o):i,a&&aa(n[0],n[1],a)&&(o=s<3?i:o,s=1),e=ne(e);while(++r<s){var u=n[r];u&&t(e,u,r,o)}return e}))}function co(t,e){return function(n,r){if(null==n)return n;if(!ll(n))return t(n,r);var i=n.length,s=e?i:-1,o=ne(n);while(e?s--:++s<i)if(!1===r(o[s],s,o))break;return n}}function lo(t){return function(e,n,r){var i=-1,s=ne(e),o=r(e),a=o.length;while(a--){var u=o[t?a:++i];if(!1===n(s[u],u,s))break}return e}}function ho(t,e,n){var r=e&y,i=go(t);function s(){var e=this&&this!==an&&this instanceof s?i:t;return e.apply(r?n:this,arguments)}return s}function fo(t){return function(e){e=Zl(e);var n=sr(e)?mr(e):i,r=n?n[0]:e.charAt(0),s=n?Ws(n,1).join(""):e.slice(1);return r[t]()+s}}function po(t){return function(e){return Rn(Ef(Kh(e).replace($e,"")),t,"")}}function go(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Ir(t.prototype),r=t.apply(n,e);return Il(r)?r:n}}function mo(t,e,r){var s=go(t);function o(){var a=arguments.length,u=n(a),c=a,l=zo(o);while(c--)u[c]=arguments[c];var h=a<3&&u[0]!==l&&u[a-1]!==l?[]:lr(u,l);if(a-=h.length,a<r)return Ao(t,e,_o,o.placeholder,i,u,h,i,i,r-a);var f=this&&this!==an&&this instanceof o?s:t;return _n(f,this,u)}return o}function vo(t){return function(e,n,r){var s=ne(e);if(!ll(e)){var o=qo(n,3);e=Eh(e),n=function(t){return o(s[t],t,s)}}var a=t(e,n,r);return a>-1?s[o?e[a]:a]:i}}function yo(t){return jo((function(e){var n=e.length,r=n,s=Cr.prototype.thru;t&&e.reverse();while(r--){var o=e[r];if("function"!=typeof o)throw new se(u);if(s&&!a&&"wrapper"==$o(o))var a=new Cr([],!0)}r=a?r:n;while(++r<n){o=e[r];var c=$o(o),l="wrapper"==c?Bo(o):i;a=l&&la(l[0])&&l[1]==(S|b|T|C)&&!l[4].length&&1==l[9]?a[$o(l[0])].apply(a,l[3]):1==o.length&&la(o)?a[c]():a.thru(o)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&ul(r))return a.plant(r).value();var i=0,s=n?e[i].apply(this,t):r;while(++i<n)s=e[i].call(this,s);return s}}))}function _o(t,e,r,s,o,a,u,c,l,h){var f=e&S,d=e&y,p=e&_,g=e&(b|E),m=e&A,v=p?i:go(t);function w(){var i=arguments.length,y=n(i),_=i;while(_--)y[_]=arguments[_];if(g)var b=zo(w),E=tr(y,b);if(s&&(y=eo(y,s,o,g)),a&&(y=no(y,a,u,g)),i-=E,g&&i<h){var T=lr(y,b);return Ao(t,e,_o,w.placeholder,r,y,T,c,l,h-i)}var I=d?r:this,S=p?I[t]:t;return i=y.length,c?y=Ea(y,c):m&&i>1&&y.reverse(),f&&l<i&&(y.length=l),this&&this!==an&&this instanceof w&&(S=v||go(S)),S.apply(I,y)}return w}function wo(t,e){return function(n,r){return $i(n,t,e(r),{})}}function bo(t,e){return function(n,r){var s;if(n===i&&r===i)return e;if(n!==i&&(s=n),r!==i){if(s===i)return r;"string"==typeof n||"string"==typeof r?(n=Ds(n),r=Ds(r)):(n=Ns(n),r=Ns(r)),s=t(n,r)}return s}}function Eo(t){return jo((function(e){return e=An(e,Qn(qo())),ws((function(n){var r=this;return t(e,(function(t){return _n(t,r,n)}))}))}))}function To(t,e){e=e===i?" ":Ds(e);var n=e.length;if(n<2)return n?_s(e,t):e;var r=_s(e,De(t/gr(e)));return sr(e)?Ws(mr(r),0,t).join(""):r.slice(0,t)}function Io(t,e,r,i){var s=e&y,o=go(t);function a(){var e=-1,u=arguments.length,c=-1,l=i.length,h=n(l+u),f=this&&this!==an&&this instanceof a?o:t;while(++c<l)h[c]=i[c];while(u--)h[c++]=arguments[++e];return _n(f,s?r:this,h)}return a}function So(t){return function(e,n,r){return r&&"number"!=typeof r&&aa(e,n,r)&&(n=r=i),e=Hl(e),n===i?(n=e,e=0):n=Hl(n),r=r===i?e<n?1:-1:Hl(r),ys(e,n,r,t)}}function Co(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Xl(e),n=Xl(n)),t(e,n)}}function Ao(t,e,n,r,s,o,a,u,c,l){var h=e&b,f=h?a:i,d=h?i:a,p=h?o:i,g=h?i:o;e|=h?T:I,e&=~(h?I:T),e&w||(e&=~(y|_));var m=[t,e,s,p,f,g,d,u,c,l],v=n.apply(i,m);return la(t)&&Ia(v,m),v.placeholder=r,Aa(v,t,e)}function ko(t){var e=ee[t];return function(t,n){if(t=Xl(t),n=null==n?0:Be(Kl(n),292),n&&Ue(t)){var r=(Zl(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(Zl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var Ro=en&&1/hr(new en([,-0]))[1]==L?function(t){return new en(t)}:Ff;function Oo(t){return function(e){var n=Yo(e);return n==J?ur(e):n==st?fr(e):Hn(e,t(e))}}function xo(t,e,n,r,s,o,a,c){var l=e&_;if(!l&&"function"!=typeof t)throw new se(u);var h=r?r.length:0;if(h||(e&=~(T|I),r=s=i),a=a===i?a:Ve(Kl(a),0),c=c===i?c:Kl(c),h-=s?s.length:0,e&I){var f=r,d=s;r=s=i}var p=l?i:Bo(t),g=[t,e,n,r,s,f,d,o,a,c];if(p&&va(g,p),t=g[0],e=g[1],n=g[2],r=g[3],s=g[4],c=g[9]=g[9]===i?l?0:t.length:Ve(g[9]-h,0),!c&&e&(b|E)&&(e&=~(b|E)),e&&e!=y)m=e==b||e==E?mo(t,e,c):e!=T&&e!=(y|T)||s.length?_o.apply(i,g):Io(t,e,n,r);else var m=ho(t,e,n);var v=p?Is:Ia;return Aa(v(m,g),t,e)}function No(t,e,n,r){return t===i||il(t,ue[n])&&!he.call(r,n)?e:t}function Do(t,e,n,r,s,o){return Il(t)&&Il(e)&&(o.set(e,t),us(t,e,i,Do,o),o["delete"](e)),t}function Po(t){return Pl(t)?i:t}function Lo(t,e,n,r,s,o){var a=n&m,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=o.get(t),h=o.get(e);if(l&&h)return l==e&&h==t;var f=-1,d=!0,p=n&v?new Qr:i;o.set(t,e),o.set(e,t);while(++f<u){var g=t[f],y=e[f];if(r)var _=a?r(y,g,f,e,t,o):r(g,y,f,t,e,o);if(_!==i){if(_)continue;d=!1;break}if(p){if(!xn(e,(function(t,e){if(!Yn(p,e)&&(g===t||s(g,t,n,r,o)))return p.push(e)}))){d=!1;break}}else if(g!==y&&!s(g,y,n,r,o)){d=!1;break}}return o["delete"](t),o["delete"](e),d}function Mo(t,e,n,r,i,s,o){switch(n){case ft:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ht:return!(t.byteLength!=e.byteLength||!s(new we(t),new we(e)));case G:case H:case Z:return il(+t,+e);case Q:return t.name==e.name&&t.message==e.message;case it:case ot:return t==e+"";case J:var a=ur;case st:var u=r&m;if(a||(a=hr),t.size!=e.size&&!u)return!1;var c=o.get(t);if(c)return c==e;r|=v,o.set(t,e);var l=Lo(a(t),a(e),r,i,s,o);return o["delete"](t),l;case at:if(_r)return _r.call(t)==_r.call(e)}return!1}function Uo(t,e,n,r,s,o){var a=n&m,u=Fo(t),c=u.length,l=Fo(e),h=l.length;if(c!=h&&!a)return!1;var f=c;while(f--){var d=u[f];if(!(a?d in e:he.call(e,d)))return!1}var p=o.get(t),g=o.get(e);if(p&&g)return p==e&&g==t;var v=!0;o.set(t,e),o.set(e,t);var y=a;while(++f<c){d=u[f];var _=t[d],w=e[d];if(r)var b=a?r(w,_,d,e,t,o):r(_,w,d,t,e,o);if(!(b===i?_===w||s(_,w,n,r,o):b)){v=!1;break}y||(y="constructor"==d)}if(v&&!y){var E=t.constructor,T=e.constructor;E==T||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof T&&T instanceof T||(v=!1)}return o["delete"](t),o["delete"](e),v}function jo(t){return Ca(wa(t,i,Ka),t+"")}function Fo(t){return Li(t,Eh,Qo)}function Vo(t){return Li(t,Th,Xo)}var Bo=un?function(t){return un.get(t)}:Ff;function $o(t){var e=t.name+"",n=cn[e],r=he.call(cn,e)?n.length:0;while(r--){var i=n[r],s=i.func;if(null==s||s==t)return i.name}return e}function zo(t){var e=he.call(Er,"placeholder")?Er:t;return e.placeholder}function qo(){var t=Er.iteratee||Nf;return t=t===Nf?es:t,arguments.length?t(arguments[0],arguments[1]):t}function Wo(t,e){var n=t.__data__;return ca(e)?n["string"==typeof e?"string":"hash"]:n.map}function Go(t){var e=Eh(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,pa(i)]}return e}function Ho(t,e){var n=ir(t,e);return Yi(n)?n:i}function Ko(t){var e=he.call(t,ke),n=t[ke];try{t[ke]=i;var r=!0}catch(o){}var s=pe.call(t);return r&&(e?t[ke]=n:delete t[ke]),s}var Qo=Le?function(t){return null==t?[]:(t=ne(t),In(Le(t),(function(e){return Ie.call(t,e)})))}:Kf,Xo=Le?function(t){var e=[];while(t)kn(e,Qo(t)),t=Ee(t);return e}:Kf,Yo=Mi;function Jo(t,e,n){var r=-1,i=n.length;while(++r<i){var s=n[r],o=s.size;switch(s.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=Be(e,t+o);break;case"takeRight":t=Ve(t,e-o);break}}return{start:t,end:e}}function Zo(t){var e=t.match(Vt);return e?e[1].split(Bt):[]}function ta(t,e,n){e=zs(e,t);var r=-1,i=e.length,s=!1;while(++r<i){var o=xa(e[r]);if(!(s=null!=t&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=null==t?0:t.length,!!i&&Tl(i)&&oa(o,i)&&(ul(t)||al(t)))}function ea(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&he.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function na(t){return"function"!=typeof t.constructor||da(t)?{}:Ir(Ee(t))}function ra(t,e,n){var r=t.constructor;switch(e){case ht:return Ks(t);case G:case H:return new r(+t);case ft:return Qs(t,n);case dt:case pt:case gt:case mt:case vt:case yt:case _t:case wt:case bt:return Js(t,n);case J:return new r;case Z:case ot:return new r(t);case it:return Xs(t);case st:return new r;case at:return Ys(t)}}function ia(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Ft,"{\n/* [wrapped with "+e+"] */\n")}function sa(t){return ul(t)||al(t)||!!(Ce&&t&&t[Ce])}function oa(t,e){var n=typeof t;return e=null==e?M:e,!!e&&("number"==n||"symbol"!=n&&Yt.test(t))&&t>-1&&t%1==0&&t<e}function aa(t,e,n){if(!Il(n))return!1;var r=typeof e;return!!("number"==r?ll(n)&&oa(e,n.length):"string"==r&&e in n)&&il(n[e],t)}function ua(t,e){if(ul(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fl(t))||(Dt.test(t)||!Nt.test(t)||null!=e&&t in ne(e))}function ca(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function la(t){var e=$o(t),n=Er[e];if("function"!=typeof n||!(e in Ar.prototype))return!1;if(t===n)return!0;var r=Bo(n);return!!r&&t===r[0]}function ha(t){return!!de&&de in t}(Je&&Yo(new Je(new ArrayBuffer(1)))!=ft||Ze&&Yo(new Ze)!=J||tn&&Yo(tn.resolve())!=nt||en&&Yo(new en)!=st||sn&&Yo(new sn)!=ct)&&(Yo=function(t){var e=Mi(t),n=e==et?t.constructor:i,r=n?Na(n):"";if(r)switch(r){case hn:return ft;case fn:return J;case Nn:return nt;case Dn:return st;case $n:return ct}return e});var fa=ce?bl:Qf;function da(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ue;return t===n}function pa(t){return t===t&&!Il(t)}function ga(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==i||t in ne(n)))}}function ma(t){var e=Vc(t,(function(t){return n.size===h&&n.clear(),t})),n=e.cache;return e}function va(t,e){var n=t[1],r=e[1],i=n|r,s=i<(y|_|S),o=r==S&&n==b||r==S&&n==C&&t[7].length<=e[8]||r==(S|C)&&e[7].length<=e[8]&&n==b;if(!s&&!o)return t;r&y&&(t[2]=e[2],i|=n&y?0:w);var a=e[3];if(a){var u=t[3];t[3]=u?eo(u,a,e[4]):a,t[4]=u?lr(t[3],f):e[4]}return a=e[5],a&&(u=t[5],t[5]=u?no(u,a,e[6]):a,t[6]=u?lr(t[5],f):e[6]),a=e[7],a&&(t[7]=a),r&S&&(t[8]=null==t[8]?e[8]:Be(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function ya(t){var e=[];if(null!=t)for(var n in ne(t))e.push(n);return e}function _a(t){return pe.call(t)}function wa(t,e,r){return e=Ve(e===i?t.length-1:e,0),function(){var i=arguments,s=-1,o=Ve(i.length-e,0),a=n(o);while(++s<o)a[s]=i[e+s];s=-1;var u=n(e+1);while(++s<e)u[s]=i[s];return u[e]=r(a),_n(t,this,u)}}function ba(t,e){return e.length<2?t:Pi(t,As(e,0,-1))}function Ea(t,e){var n=t.length,r=Be(e.length,n),s=ro(t);while(r--){var o=e[r];t[r]=oa(o,n)?s[o]:i}return t}function Ta(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var Ia=ka(Is),Sa=Ne||function(t,e){return an.setTimeout(t,e)},Ca=ka(Ss);function Aa(t,e,n){var r=e+"";return Ca(t,ia(r,Da(Zo(r),n)))}function ka(t){var e=0,n=0;return function(){var r=qe(),s=x-(r-n);if(n=r,s>0){if(++e>=O)return arguments[0]}else e=0;return t.apply(i,arguments)}}function Ra(t,e){var n=-1,r=t.length,s=r-1;e=e===i?r:e;while(++n<e){var o=vs(n,s),a=t[o];t[o]=t[n],t[n]=a}return t.length=e,t}var Oa=ma((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Pt,(function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)})),e}));function xa(t){if("string"==typeof t||Fl(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Na(t){if(null!=t){try{return le.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Da(t,e){return bn($,(function(n){var r="_."+n[0];e&n[1]&&!Sn(t,r)&&t.push(r)})),t.sort()}function Pa(t){if(t instanceof Ar)return t.clone();var e=new Cr(t.__wrapped__,t.__chain__);return e.__actions__=ro(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function La(t,e,r){e=(r?aa(t,e,r):e===i)?1:Ve(Kl(e),0);var s=null==t?0:t.length;if(!s||e<1)return[];var o=0,a=0,u=n(De(s/e));while(o<s)u[a++]=As(t,o,o+=e);return u}function Ma(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var s=t[e];s&&(i[r++]=s)}return i}function Ua(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return kn(ul(r)?ro(r):[r],ki(e,1))}var ja=ws((function(t,e){return hl(t)?bi(t,ki(e,1,hl,!0)):[]})),Fa=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,ki(e,1,hl,!0),qo(n,2)):[]})),Va=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,ki(e,1,hl,!0),i,n):[]}));function Ba(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Kl(e),As(t,e<0?0:e,r)):[]}function $a(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Kl(e),e=r-e,As(t,0,e<0?0:e)):[]}function za(t,e){return t&&t.length?Us(t,qo(e,3),!0,!0):[]}function qa(t,e){return t&&t.length?Us(t,qo(e,3),!0):[]}function Wa(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&aa(t,e,n)&&(n=0,r=i),Ci(t,e,n,r)):[]}function Ga(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Kl(n);return i<0&&(i=Ve(r+i,0)),Mn(t,qo(e,3),i)}function Ha(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r-1;return n!==i&&(s=Kl(n),s=n<0?Ve(r+s,0):Be(s,r-1)),Mn(t,qo(e,3),s,!0)}function Ka(t){var e=null==t?0:t.length;return e?ki(t,1):[]}function Qa(t){var e=null==t?0:t.length;return e?ki(t,L):[]}function Xa(t,e){var n=null==t?0:t.length;return n?(e=e===i?1:Kl(e),ki(t,e)):[]}function Ya(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];r[i[0]]=i[1]}return r}function Ja(t){return t&&t.length?t[0]:i}function Za(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Kl(n);return i<0&&(i=Ve(r+i,0)),Un(t,e,i)}function tu(t){var e=null==t?0:t.length;return e?As(t,0,-1):[]}var eu=ws((function(t){var e=An(t,Bs);return e.length&&e[0]===t[0]?Bi(e):[]})),nu=ws((function(t){var e=su(t),n=An(t,Bs);return e===su(n)?e=i:n.pop(),n.length&&n[0]===t[0]?Bi(n,qo(e,2)):[]})),ru=ws((function(t){var e=su(t),n=An(t,Bs);return e="function"==typeof e?e:i,e&&n.pop(),n.length&&n[0]===t[0]?Bi(n,i,e):[]}));function iu(t,e){return null==t?"":je.call(t,e)}function su(t){var e=null==t?0:t.length;return e?t[e-1]:i}function ou(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r;return n!==i&&(s=Kl(n),s=s<0?Ve(r+s,0):Be(s,r-1)),e===e?pr(t,e,s):Mn(t,Fn,s,!0)}function au(t,e){return t&&t.length?ls(t,Kl(e)):i}var uu=ws(cu);function cu(t,e){return t&&t.length&&e&&e.length?gs(t,e):t}function lu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,qo(n,2)):t}function hu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,i,n):t}var fu=jo((function(t,e){var n=null==t?0:t.length,r=gi(t,e);return ms(t,An(e,(function(t){return oa(t,n)?+t:t})).sort(Zs)),r}));function du(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],s=t.length;e=qo(e,3);while(++r<s){var o=t[r];e(o,r,t)&&(n.push(o),i.push(r))}return ms(t,i),n}function pu(t){return null==t?t:He.call(t)}function gu(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&aa(t,e,n)?(e=0,n=r):(e=null==e?0:Kl(e),n=n===i?r:Kl(n)),As(t,e,n)):[]}function mu(t,e){return Rs(t,e)}function vu(t,e,n){return Os(t,e,qo(n,2))}function yu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e);if(r<n&&il(t[r],e))return r}return-1}function _u(t,e){return Rs(t,e,!0)}function wu(t,e,n){return Os(t,e,qo(n,2),!0)}function bu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e,!0)-1;if(il(t[r],e))return r}return-1}function Eu(t){return t&&t.length?xs(t):[]}function Tu(t,e){return t&&t.length?xs(t,qo(e,2)):[]}function Iu(t){var e=null==t?0:t.length;return e?As(t,1,e):[]}function Su(t,e,n){return t&&t.length?(e=n||e===i?1:Kl(e),As(t,0,e<0?0:e)):[]}function Cu(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Kl(e),e=r-e,As(t,e<0?0:e,r)):[]}function Au(t,e){return t&&t.length?Us(t,qo(e,3),!1,!0):[]}function ku(t,e){return t&&t.length?Us(t,qo(e,3)):[]}var Ru=ws((function(t){return Ps(ki(t,1,hl,!0))})),Ou=ws((function(t){var e=su(t);return hl(e)&&(e=i),Ps(ki(t,1,hl,!0),qo(e,2))})),xu=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,Ps(ki(t,1,hl,!0),i,e)}));function Nu(t){return t&&t.length?Ps(t):[]}function Du(t,e){return t&&t.length?Ps(t,qo(e,2)):[]}function Pu(t,e){return e="function"==typeof e?e:i,t&&t.length?Ps(t,i,e):[]}function Lu(t){if(!t||!t.length)return[];var e=0;return t=In(t,(function(t){if(hl(t))return e=Ve(t.length,e),!0})),Gn(e,(function(e){return An(t,Bn(e))}))}function Mu(t,e){if(!t||!t.length)return[];var n=Lu(t);return null==e?n:An(n,(function(t){return _n(e,i,t)}))}var Uu=ws((function(t,e){return hl(t)?bi(t,e):[]})),ju=ws((function(t){return Fs(In(t,hl))})),Fu=ws((function(t){var e=su(t);return hl(e)&&(e=i),Fs(In(t,hl),qo(e,2))})),Vu=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,Fs(In(t,hl),i,e)})),Bu=ws(Lu);function $u(t,e){return Vs(t||[],e||[],ci)}function zu(t,e){return Vs(t||[],e||[],Ts)}var qu=ws((function(t){var e=t.length,n=e>1?t[e-1]:i;return n="function"==typeof n?(t.pop(),n):i,Mu(t,n)}));function Wu(t){var e=Er(t);return e.__chain__=!0,e}function Gu(t,e){return e(t),t}function Hu(t,e){return e(t)}var Ku=jo((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,s=function(e){return gi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Ar&&oa(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Hu,args:[s],thisArg:i}),new Cr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(i),t}))):this.thru(s)}));function Qu(){return Wu(this)}function Xu(){return new Cr(this.value(),this.__chain__)}function Yu(){this.__values__===i&&(this.__values__=Gl(this.value()));var t=this.__index__>=this.__values__.length,e=t?i:this.__values__[this.__index__++];return{done:t,value:e}}function Ju(){return this}function Zu(t){var e,n=this;while(n instanceof Sr){var r=Pa(n);r.__index__=0,r.__values__=i,e?s.__wrapped__=r:e=r;var s=r;n=n.__wrapped__}return s.__wrapped__=t,e}function tc(){var t=this.__wrapped__;if(t instanceof Ar){var e=t;return this.__actions__.length&&(e=new Ar(this)),e=e.reverse(),e.__actions__.push({func:Hu,args:[pu],thisArg:i}),new Cr(e,this.__chain__)}return this.thru(pu)}function ec(){return js(this.__wrapped__,this.__actions__)}var nc=ao((function(t,e,n){he.call(t,n)?++t[n]:pi(t,n,1)}));function rc(t,e,n){var r=ul(t)?Tn:Ii;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}function ic(t,e){var n=ul(t)?In:Ai;return n(t,qo(e,3))}var sc=vo(Ga),oc=vo(Ha);function ac(t,e){return ki(mc(t,e),1)}function uc(t,e){return ki(mc(t,e),L)}function cc(t,e,n){return n=n===i?1:Kl(n),ki(mc(t,e),n)}function lc(t,e){var n=ul(t)?bn:Ei;return n(t,qo(e,3))}function hc(t,e){var n=ul(t)?En:Ti;return n(t,qo(e,3))}var fc=ao((function(t,e,n){he.call(t,n)?t[n].push(e):pi(t,n,[e])}));function dc(t,e,n,r){t=ll(t)?t:Bh(t),n=n&&!r?Kl(n):0;var i=t.length;return n<0&&(n=Ve(i+n,0)),jl(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Un(t,e,n)>-1}var pc=ws((function(t,e,r){var i=-1,s="function"==typeof e,o=ll(t)?n(t.length):[];return Ei(t,(function(t){o[++i]=s?_n(e,t,r):zi(t,e,r)})),o})),gc=ao((function(t,e,n){pi(t,n,e)}));function mc(t,e){var n=ul(t)?An:ss;return n(t,qo(e,3))}function vc(t,e,n,r){return null==t?[]:(ul(e)||(e=null==e?[]:[e]),n=r?i:n,ul(n)||(n=null==n?[]:[n]),hs(t,e,n))}var yc=ao((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function _c(t,e,n){var r=ul(t)?Rn:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ei)}function wc(t,e,n){var r=ul(t)?On:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ti)}function bc(t,e){var n=ul(t)?In:Ai;return n(t,Bc(qo(e,3)))}function Ec(t){var e=ul(t)?si:bs;return e(t)}function Tc(t,e,n){e=(n?aa(t,e,n):e===i)?1:Kl(e);var r=ul(t)?oi:Es;return r(t,e)}function Ic(t){var e=ul(t)?ai:Cs;return e(t)}function Sc(t){if(null==t)return 0;if(ll(t))return jl(t)?gr(t):t.length;var e=Yo(t);return e==J||e==st?t.size:ns(t).length}function Cc(t,e,n){var r=ul(t)?xn:ks;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}var Ac=ws((function(t,e){if(null==t)return[];var n=e.length;return n>1&&aa(t,e[0],e[1])?e=[]:n>2&&aa(e[0],e[1],e[2])&&(e=[e[0]]),hs(t,ki(e,1),[])})),kc=xe||function(){return an.Date.now()};function Rc(t,e){if("function"!=typeof e)throw new se(u);return t=Kl(t),function(){if(--t<1)return e.apply(this,arguments)}}function Oc(t,e,n){return e=n?i:e,e=t&&null==e?t.length:e,xo(t,S,i,i,i,i,e)}function xc(t,e){var n;if("function"!=typeof e)throw new se(u);return t=Kl(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=i),n}}var Nc=ws((function(t,e,n){var r=y;if(n.length){var i=lr(n,zo(Nc));r|=T}return xo(t,r,e,n,i)})),Dc=ws((function(t,e,n){var r=y|_;if(n.length){var i=lr(n,zo(Dc));r|=T}return xo(e,r,t,n,i)}));function Pc(t,e,n){e=n?i:e;var r=xo(t,b,i,i,i,i,i,e);return r.placeholder=Pc.placeholder,r}function Lc(t,e,n){e=n?i:e;var r=xo(t,E,i,i,i,i,i,e);return r.placeholder=Lc.placeholder,r}function Mc(t,e,n){var r,s,o,a,c,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new se(u);function g(e){var n=r,o=s;return r=s=i,h=e,a=t.apply(o,n),a}function m(t){return h=t,c=Sa(_,e),f?g(t):a}function v(t){var n=t-l,r=t-h,i=e-n;return d?Be(i,o-r):i}function y(t){var n=t-l,r=t-h;return l===i||n>=e||n<0||d&&r>=o}function _(){var t=kc();if(y(t))return w(t);c=Sa(_,v(t))}function w(t){return c=i,p&&r?g(t):(r=s=i,a)}function b(){c!==i&&Gs(c),h=0,r=l=s=c=i}function E(){return c===i?a:w(kc())}function T(){var t=kc(),n=y(t);if(r=arguments,s=this,l=t,n){if(c===i)return m(l);if(d)return Gs(c),c=Sa(_,e),g(l)}return c===i&&(c=Sa(_,e)),a}return e=Xl(e)||0,Il(n)&&(f=!!n.leading,d="maxWait"in n,o=d?Ve(Xl(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),T.cancel=b,T.flush=E,T}var Uc=ws((function(t,e){return wi(t,1,e)})),jc=ws((function(t,e,n){return wi(t,Xl(e)||0,n)}));function Fc(t){return xo(t,A)}function Vc(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new se(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Vc.Cache||zr),n}function Bc(t){if("function"!=typeof t)throw new se(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function $c(t){return xc(2,t)}Vc.Cache=zr;var zc=qs((function(t,e){e=1==e.length&&ul(e[0])?An(e[0],Qn(qo())):An(ki(e,1),Qn(qo()));var n=e.length;return ws((function(r){var i=-1,s=Be(r.length,n);while(++i<s)r[i]=e[i].call(this,r[i]);return _n(t,this,r)}))})),qc=ws((function(t,e){var n=lr(e,zo(qc));return xo(t,T,i,e,n)})),Wc=ws((function(t,e){var n=lr(e,zo(Wc));return xo(t,I,i,e,n)})),Gc=jo((function(t,e){return xo(t,C,i,i,i,e)}));function Hc(t,e){if("function"!=typeof t)throw new se(u);return e=e===i?e:Kl(e),ws(t,e)}function Kc(t,e){if("function"!=typeof t)throw new se(u);return e=null==e?0:Ve(Kl(e),0),ws((function(n){var r=n[e],i=Ws(n,0,e);return r&&kn(i,r),_n(t,this,i)}))}function Qc(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new se(u);return Il(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Mc(t,e,{leading:r,maxWait:e,trailing:i})}function Xc(t){return Oc(t,1)}function Yc(t,e){return qc($s(e),t)}function Jc(){if(!arguments.length)return[];var t=arguments[0];return ul(t)?t:[t]}function Zc(t){return vi(t,g)}function tl(t,e){return e="function"==typeof e?e:i,vi(t,g,e)}function el(t){return vi(t,d|g)}function nl(t,e){return e="function"==typeof e?e:i,vi(t,d|g,e)}function rl(t,e){return null==e||_i(t,e,Eh(e))}function il(t,e){return t===e||t!==t&&e!==e}var sl=Co(Ui),ol=Co((function(t,e){return t>=e})),al=qi(function(){return arguments}())?qi:function(t){return Sl(t)&&he.call(t,"callee")&&!Ie.call(t,"callee")},ul=n.isArray,cl=dn?Qn(dn):Wi;function ll(t){return null!=t&&Tl(t.length)&&!bl(t)}function hl(t){return Sl(t)&&ll(t)}function fl(t){return!0===t||!1===t||Sl(t)&&Mi(t)==G}var dl=Me||Qf,pl=pn?Qn(pn):Gi;function gl(t){return Sl(t)&&1===t.nodeType&&!Pl(t)}function ml(t){if(null==t)return!0;if(ll(t)&&(ul(t)||"string"==typeof t||"function"==typeof t.splice||dl(t)||Vl(t)||al(t)))return!t.length;var e=Yo(t);if(e==J||e==st)return!t.size;if(da(t))return!ns(t).length;for(var n in t)if(he.call(t,n))return!1;return!0}function vl(t,e){return Hi(t,e)}function yl(t,e,n){n="function"==typeof n?n:i;var r=n?n(t,e):i;return r===i?Hi(t,e,i,n):!!r}function _l(t){if(!Sl(t))return!1;var e=Mi(t);return e==Q||e==K||"string"==typeof t.message&&"string"==typeof t.name&&!Pl(t)}function wl(t){return"number"==typeof t&&Ue(t)}function bl(t){if(!Il(t))return!1;var e=Mi(t);return e==X||e==Y||e==W||e==rt}function El(t){return"number"==typeof t&&t==Kl(t)}function Tl(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=M}function Il(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Sl(t){return null!=t&&"object"==typeof t}var Cl=gn?Qn(gn):Qi;function Al(t,e){return t===e||Xi(t,e,Go(e))}function kl(t,e,n){return n="function"==typeof n?n:i,Xi(t,e,Go(e),n)}function Rl(t){return Dl(t)&&t!=+t}function Ol(t){if(fa(t))throw new jt(a);return Yi(t)}function xl(t){return null===t}function Nl(t){return null==t}function Dl(t){return"number"==typeof t||Sl(t)&&Mi(t)==Z}function Pl(t){if(!Sl(t)||Mi(t)!=et)return!1;var e=Ee(t);if(null===e)return!0;var n=he.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&le.call(n)==ge}var Ll=mn?Qn(mn):Ji;function Ml(t){return El(t)&&t>=-M&&t<=M}var Ul=vn?Qn(vn):Zi;function jl(t){return"string"==typeof t||!ul(t)&&Sl(t)&&Mi(t)==ot}function Fl(t){return"symbol"==typeof t||Sl(t)&&Mi(t)==at}var Vl=yn?Qn(yn):ts;function Bl(t){return t===i}function $l(t){return Sl(t)&&Yo(t)==ct}function zl(t){return Sl(t)&&Mi(t)==lt}var ql=Co(is),Wl=Co((function(t,e){return t<=e}));function Gl(t){if(!t)return[];if(ll(t))return jl(t)?mr(t):ro(t);if(Ae&&t[Ae])return ar(t[Ae]());var e=Yo(t),n=e==J?ur:e==st?hr:Bh;return n(t)}function Hl(t){if(!t)return 0===t?t:0;if(t=Xl(t),t===L||t===-L){var e=t<0?-1:1;return e*U}return t===t?t:0}function Kl(t){var e=Hl(t),n=e%1;return e===e?n?e-n:e:0}function Ql(t){return t?mi(Kl(t),0,F):0}function Xl(t){if("number"==typeof t)return t;if(Fl(t))return j;if(Il(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Il(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Kn(t);var n=Kt.test(t);return n||Xt.test(t)?rn(t.slice(2),n?2:8):Ht.test(t)?j:+t}function Yl(t){return io(t,Th(t))}function Jl(t){return t?mi(Kl(t),-M,M):0===t?t:0}function Zl(t){return null==t?"":Ds(t)}var th=uo((function(t,e){if(da(e)||ll(e))io(e,Eh(e),t);else for(var n in e)he.call(e,n)&&ci(t,n,e[n])})),eh=uo((function(t,e){io(e,Th(e),t)})),nh=uo((function(t,e,n,r){io(e,Th(e),t,r)})),rh=uo((function(t,e,n,r){io(e,Eh(e),t,r)})),ih=jo(gi);function sh(t,e){var n=Ir(t);return null==e?n:fi(n,e)}var oh=ws((function(t,e){t=ne(t);var n=-1,r=e.length,s=r>2?e[2]:i;s&&aa(e[0],e[1],s)&&(r=1);while(++n<r){var o=e[n],a=Th(o),u=-1,c=a.length;while(++u<c){var l=a[u],h=t[l];(h===i||il(h,ue[l])&&!he.call(t,l))&&(t[l]=o[l])}}return t})),ah=ws((function(t){return t.push(i,Do),_n(Ah,i,t)}));function uh(t,e){return Ln(t,qo(e,3),xi)}function ch(t,e){return Ln(t,qo(e,3),Ni)}function lh(t,e){return null==t?t:Ri(t,qo(e,3),Th)}function hh(t,e){return null==t?t:Oi(t,qo(e,3),Th)}function fh(t,e){return t&&xi(t,qo(e,3))}function dh(t,e){return t&&Ni(t,qo(e,3))}function ph(t){return null==t?[]:Di(t,Eh(t))}function gh(t){return null==t?[]:Di(t,Th(t))}function mh(t,e,n){var r=null==t?i:Pi(t,e);return r===i?n:r}function vh(t,e){return null!=t&&ta(t,e,ji)}function yh(t,e){return null!=t&&ta(t,e,Fi)}var _h=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=n}),Af(xf)),wh=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),he.call(t,e)?t[e].push(n):t[e]=[n]}),qo),bh=ws(zi);function Eh(t){return ll(t)?ii(t):ns(t)}function Th(t){return ll(t)?ii(t,!0):rs(t)}function Ih(t,e){var n={};return e=qo(e,3),xi(t,(function(t,r,i){pi(n,e(t,r,i),t)})),n}function Sh(t,e){var n={};return e=qo(e,3),xi(t,(function(t,r,i){pi(n,r,e(t,r,i))})),n}var Ch=uo((function(t,e,n){us(t,e,n)})),Ah=uo((function(t,e,n,r){us(t,e,n,r)})),kh=jo((function(t,e){var n={};if(null==t)return n;var r=!1;e=An(e,(function(e){return e=zs(e,t),r||(r=e.length>1),e})),io(t,Vo(t),n),r&&(n=vi(n,d|p|g,Po));var i=e.length;while(i--)Ls(n,e[i]);return n}));function Rh(t,e){return xh(t,Bc(qo(e)))}var Oh=jo((function(t,e){return null==t?{}:fs(t,e)}));function xh(t,e){if(null==t)return{};var n=An(Vo(t),(function(t){return[t]}));return e=qo(e),ds(t,n,(function(t,n){return e(t,n[0])}))}function Nh(t,e,n){e=zs(e,t);var r=-1,s=e.length;s||(s=1,t=i);while(++r<s){var o=null==t?i:t[xa(e[r])];o===i&&(r=s,o=n),t=bl(o)?o.call(t):o}return t}function Dh(t,e,n){return null==t?t:Ts(t,e,n)}function Ph(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Ts(t,e,n,r)}var Lh=Oo(Eh),Mh=Oo(Th);function Uh(t,e,n){var r=ul(t),i=r||dl(t)||Vl(t);if(e=qo(e,4),null==n){var s=t&&t.constructor;n=i?r?new s:[]:Il(t)&&bl(s)?Ir(Ee(t)):{}}return(i?bn:xi)(t,(function(t,r,i){return e(n,t,r,i)})),n}function jh(t,e){return null==t||Ls(t,e)}function Fh(t,e,n){return null==t?t:Ms(t,e,$s(n))}function Vh(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Ms(t,e,$s(n),r)}function Bh(t){return null==t?[]:Xn(t,Eh(t))}function $h(t){return null==t?[]:Xn(t,Th(t))}function zh(t,e,n){return n===i&&(n=e,e=i),n!==i&&(n=Xl(n),n=n===n?n:0),e!==i&&(e=Xl(e),e=e===e?e:0),mi(Xl(t),e,n)}function qh(t,e,n){return e=Hl(e),n===i?(n=e,e=0):n=Hl(n),t=Xl(t),Vi(t,e,n)}function Wh(t,e,n){if(n&&"boolean"!=typeof n&&aa(t,e,n)&&(e=n=i),n===i&&("boolean"==typeof e?(n=e,e=i):"boolean"==typeof t&&(n=t,t=i)),t===i&&e===i?(t=0,e=1):(t=Hl(t),e===i?(e=t,t=0):e=Hl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var s=Ge();return Be(t+s*(e-t+nn("1e-"+((s+"").length-1))),e)}return vs(t,e)}var Gh=po((function(t,e,n){return e=e.toLowerCase(),t+(n?Hh(e):e)}));function Hh(t){return bf(Zl(t).toLowerCase())}function Kh(t){return t=Zl(t),t&&t.replace(Jt,er).replace(ze,"")}function Qh(t,e,n){t=Zl(t),e=Ds(e);var r=t.length;n=n===i?r:mi(Kl(n),0,r);var s=n;return n-=e.length,n>=0&&t.slice(n,s)==e}function Xh(t){return t=Zl(t),t&&kt.test(t)?t.replace(Ct,nr):t}function Yh(t){return t=Zl(t),t&&Mt.test(t)?t.replace(Lt,"\\$&"):t}var Jh=po((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Zh=po((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),tf=fo("toLowerCase");function ef(t,e,n){t=Zl(t),e=Kl(e);var r=e?gr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return To(Pe(i),n)+t+To(De(i),n)}function nf(t,e,n){t=Zl(t),e=Kl(e);var r=e?gr(t):0;return e&&r<e?t+To(e-r,n):t}function rf(t,e,n){t=Zl(t),e=Kl(e);var r=e?gr(t):0;return e&&r<e?To(e-r,n)+t:t}function sf(t,e,n){return n||null==e?e=0:e&&(e=+e),We(Zl(t).replace(Ut,""),e||0)}function of(t,e,n){return e=(n?aa(t,e,n):e===i)?1:Kl(e),_s(Zl(t),e)}function af(){var t=arguments,e=Zl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var uf=po((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function cf(t,e,n){return n&&"number"!=typeof n&&aa(t,e,n)&&(e=n=i),n=n===i?F:n>>>0,n?(t=Zl(t),t&&("string"==typeof e||null!=e&&!Ll(e))&&(e=Ds(e),!e&&sr(t))?Ws(mr(t),0,n):t.split(e,n)):[]}var lf=po((function(t,e,n){return t+(n?" ":"")+bf(e)}));function hf(t,e,n){return t=Zl(t),n=null==n?0:mi(Kl(n),0,t.length),e=Ds(e),t.slice(n,n+e.length)==e}function ff(t,e,n){var r=Er.templateSettings;n&&aa(t,e,n)&&(e=i),t=Zl(t),e=nh({},e,r,No);var s,o,a=nh({},e.imports,r.imports,No),u=Eh(a),l=Xn(a,u),h=0,f=e.interpolate||Zt,d="__p += '",p=re((e.escape||Zt).source+"|"+f.source+"|"+(f===xt?Wt:Zt).source+"|"+(e.evaluate||Zt).source+"|$","g"),g="//# sourceURL="+(he.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Qe+"]")+"\n";t.replace(p,(function(e,n,r,i,a,u){return r||(r=i),d+=t.slice(h,u).replace(te,rr),n&&(s=!0,d+="' +\n__e("+n+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),h=u+e.length,e})),d+="';\n";var m=he.call(e,"variable")&&e.variable;if(m){if(zt.test(m))throw new jt(c)}else d="with (obj) {\n"+d+"\n}\n";d=(o?d.replace(Et,""):d).replace(Tt,"$1").replace(It,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var v=Tf((function(){return $t(u,g+"return "+d).apply(i,l)}));if(v.source=d,_l(v))throw v;return v}function df(t){return Zl(t).toLowerCase()}function pf(t){return Zl(t).toUpperCase()}function gf(t,e,n){if(t=Zl(t),t&&(n||e===i))return Kn(t);if(!t||!(e=Ds(e)))return t;var r=mr(t),s=mr(e),o=Jn(r,s),a=Zn(r,s)+1;return Ws(r,o,a).join("")}function mf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.slice(0,vr(t)+1);if(!t||!(e=Ds(e)))return t;var r=mr(t),s=Zn(r,mr(e))+1;return Ws(r,0,s).join("")}function vf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.replace(Ut,"");if(!t||!(e=Ds(e)))return t;var r=mr(t),s=Jn(r,mr(e));return Ws(r,s).join("")}function yf(t,e){var n=k,r=R;if(Il(e)){var s="separator"in e?e.separator:s;n="length"in e?Kl(e.length):n,r="omission"in e?Ds(e.omission):r}t=Zl(t);var o=t.length;if(sr(t)){var a=mr(t);o=a.length}if(n>=o)return t;var u=n-gr(r);if(u<1)return r;var c=a?Ws(a,0,u).join(""):t.slice(0,u);if(s===i)return c+r;if(a&&(u+=c.length-u),Ll(s)){if(t.slice(u).search(s)){var l,h=c;s.global||(s=re(s.source,Zl(Gt.exec(s))+"g")),s.lastIndex=0;while(l=s.exec(h))var f=l.index;c=c.slice(0,f===i?u:f)}}else if(t.indexOf(Ds(s),u)!=u){var d=c.lastIndexOf(s);d>-1&&(c=c.slice(0,d))}return c+r}function _f(t){return t=Zl(t),t&&At.test(t)?t.replace(St,yr):t}var wf=po((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),bf=fo("toUpperCase");function Ef(t,e,n){return t=Zl(t),e=n?i:e,e===i?or(t)?br(t):Pn(t):t.match(e)||[]}var Tf=ws((function(t,e){try{return _n(t,i,e)}catch(n){return _l(n)?n:new jt(n)}})),If=jo((function(t,e){return bn(e,(function(e){e=xa(e),pi(t,e,Nc(t[e],t))})),t}));function Sf(t){var e=null==t?0:t.length,n=qo();return t=e?An(t,(function(t){if("function"!=typeof t[1])throw new se(u);return[n(t[0]),t[1]]})):[],ws((function(n){var r=-1;while(++r<e){var i=t[r];if(_n(i[0],this,n))return _n(i[1],this,n)}}))}function Cf(t){return yi(vi(t,d))}function Af(t){return function(){return t}}function kf(t,e){return null==t||t!==t?e:t}var Rf=yo(),Of=yo(!0);function xf(t){return t}function Nf(t){return es("function"==typeof t?t:vi(t,d))}function Df(t){return os(vi(t,d))}function Pf(t,e){return as(t,vi(e,d))}var Lf=ws((function(t,e){return function(n){return zi(n,t,e)}})),Mf=ws((function(t,e){return function(n){return zi(t,n,e)}}));function Uf(t,e,n){var r=Eh(e),i=Di(e,r);null!=n||Il(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Di(e,Eh(e)));var s=!(Il(n)&&"chain"in n)||!!n.chain,o=bl(t);return bn(i,(function(n){var r=e[n];t[n]=r,o&&(t.prototype[n]=function(){var e=this.__chain__;if(s||e){var n=t(this.__wrapped__),i=n.__actions__=ro(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,kn([this.value()],arguments))})})),t}function jf(){return an._===this&&(an._=me),this}function Ff(){}function Vf(t){return t=Kl(t),ws((function(e){return ls(e,t)}))}var Bf=Eo(An),$f=Eo(Tn),zf=Eo(xn);function qf(t){return ua(t)?Bn(xa(t)):ps(t)}function Wf(t){return function(e){return null==t?i:Pi(t,e)}}var Gf=So(),Hf=So(!0);function Kf(){return[]}function Qf(){return!1}function Xf(){return{}}function Yf(){return""}function Jf(){return!0}function Zf(t,e){if(t=Kl(t),t<1||t>M)return[];var n=F,r=Be(t,F);e=qo(e),t-=F;var i=Gn(r,e);while(++n<t)e(n);return i}function td(t){return ul(t)?An(t,xa):Fl(t)?[t]:ro(Oa(Zl(t)))}function ed(t){var e=++fe;return Zl(t)+e}var nd=bo((function(t,e){return t+e}),0),rd=ko("ceil"),id=bo((function(t,e){return t/e}),1),sd=ko("floor");function od(t){return t&&t.length?Si(t,xf,Ui):i}function ad(t,e){return t&&t.length?Si(t,qo(e,2),Ui):i}function ud(t){return Vn(t,xf)}function cd(t,e){return Vn(t,qo(e,2))}function ld(t){return t&&t.length?Si(t,xf,is):i}function hd(t,e){return t&&t.length?Si(t,qo(e,2),is):i}var fd=bo((function(t,e){return t*e}),1),dd=ko("round"),pd=bo((function(t,e){return t-e}),0);function gd(t){return t&&t.length?Wn(t,xf):0}function md(t,e){return t&&t.length?Wn(t,qo(e,2)):0}return Er.after=Rc,Er.ary=Oc,Er.assign=th,Er.assignIn=eh,Er.assignInWith=nh,Er.assignWith=rh,Er.at=ih,Er.before=xc,Er.bind=Nc,Er.bindAll=If,Er.bindKey=Dc,Er.castArray=Jc,Er.chain=Wu,Er.chunk=La,Er.compact=Ma,Er.concat=Ua,Er.cond=Sf,Er.conforms=Cf,Er.constant=Af,Er.countBy=nc,Er.create=sh,Er.curry=Pc,Er.curryRight=Lc,Er.debounce=Mc,Er.defaults=oh,Er.defaultsDeep=ah,Er.defer=Uc,Er.delay=jc,Er.difference=ja,Er.differenceBy=Fa,Er.differenceWith=Va,Er.drop=Ba,Er.dropRight=$a,Er.dropRightWhile=za,Er.dropWhile=qa,Er.fill=Wa,Er.filter=ic,Er.flatMap=ac,Er.flatMapDeep=uc,Er.flatMapDepth=cc,Er.flatten=Ka,Er.flattenDeep=Qa,Er.flattenDepth=Xa,Er.flip=Fc,Er.flow=Rf,Er.flowRight=Of,Er.fromPairs=Ya,Er.functions=ph,Er.functionsIn=gh,Er.groupBy=fc,Er.initial=tu,Er.intersection=eu,Er.intersectionBy=nu,Er.intersectionWith=ru,Er.invert=_h,Er.invertBy=wh,Er.invokeMap=pc,Er.iteratee=Nf,Er.keyBy=gc,Er.keys=Eh,Er.keysIn=Th,Er.map=mc,Er.mapKeys=Ih,Er.mapValues=Sh,Er.matches=Df,Er.matchesProperty=Pf,Er.memoize=Vc,Er.merge=Ch,Er.mergeWith=Ah,Er.method=Lf,Er.methodOf=Mf,Er.mixin=Uf,Er.negate=Bc,Er.nthArg=Vf,Er.omit=kh,Er.omitBy=Rh,Er.once=$c,Er.orderBy=vc,Er.over=Bf,Er.overArgs=zc,Er.overEvery=$f,Er.overSome=zf,Er.partial=qc,Er.partialRight=Wc,Er.partition=yc,Er.pick=Oh,Er.pickBy=xh,Er.property=qf,Er.propertyOf=Wf,Er.pull=uu,Er.pullAll=cu,Er.pullAllBy=lu,Er.pullAllWith=hu,Er.pullAt=fu,Er.range=Gf,Er.rangeRight=Hf,Er.rearg=Gc,Er.reject=bc,Er.remove=du,Er.rest=Hc,Er.reverse=pu,Er.sampleSize=Tc,Er.set=Dh,Er.setWith=Ph,Er.shuffle=Ic,Er.slice=gu,Er.sortBy=Ac,Er.sortedUniq=Eu,Er.sortedUniqBy=Tu,Er.split=cf,Er.spread=Kc,Er.tail=Iu,Er.take=Su,Er.takeRight=Cu,Er.takeRightWhile=Au,Er.takeWhile=ku,Er.tap=Gu,Er.throttle=Qc,Er.thru=Hu,Er.toArray=Gl,Er.toPairs=Lh,Er.toPairsIn=Mh,Er.toPath=td,Er.toPlainObject=Yl,Er.transform=Uh,Er.unary=Xc,Er.union=Ru,Er.unionBy=Ou,Er.unionWith=xu,Er.uniq=Nu,Er.uniqBy=Du,Er.uniqWith=Pu,Er.unset=jh,Er.unzip=Lu,Er.unzipWith=Mu,Er.update=Fh,Er.updateWith=Vh,Er.values=Bh,Er.valuesIn=$h,Er.without=Uu,Er.words=Ef,Er.wrap=Yc,Er.xor=ju,Er.xorBy=Fu,Er.xorWith=Vu,Er.zip=Bu,Er.zipObject=$u,Er.zipObjectDeep=zu,Er.zipWith=qu,Er.entries=Lh,Er.entriesIn=Mh,Er.extend=eh,Er.extendWith=nh,Uf(Er,Er),Er.add=nd,Er.attempt=Tf,Er.camelCase=Gh,Er.capitalize=Hh,Er.ceil=rd,Er.clamp=zh,Er.clone=Zc,Er.cloneDeep=el,Er.cloneDeepWith=nl,Er.cloneWith=tl,Er.conformsTo=rl,Er.deburr=Kh,Er.defaultTo=kf,Er.divide=id,Er.endsWith=Qh,Er.eq=il,Er.escape=Xh,Er.escapeRegExp=Yh,Er.every=rc,Er.find=sc,Er.findIndex=Ga,Er.findKey=uh,Er.findLast=oc,Er.findLastIndex=Ha,Er.findLastKey=ch,Er.floor=sd,Er.forEach=lc,Er.forEachRight=hc,Er.forIn=lh,Er.forInRight=hh,Er.forOwn=fh,Er.forOwnRight=dh,Er.get=mh,Er.gt=sl,Er.gte=ol,Er.has=vh,Er.hasIn=yh,Er.head=Ja,Er.identity=xf,Er.includes=dc,Er.indexOf=Za,Er.inRange=qh,Er.invoke=bh,Er.isArguments=al,Er.isArray=ul,Er.isArrayBuffer=cl,Er.isArrayLike=ll,Er.isArrayLikeObject=hl,Er.isBoolean=fl,Er.isBuffer=dl,Er.isDate=pl,Er.isElement=gl,Er.isEmpty=ml,Er.isEqual=vl,Er.isEqualWith=yl,Er.isError=_l,Er.isFinite=wl,Er.isFunction=bl,Er.isInteger=El,Er.isLength=Tl,Er.isMap=Cl,Er.isMatch=Al,Er.isMatchWith=kl,Er.isNaN=Rl,Er.isNative=Ol,Er.isNil=Nl,Er.isNull=xl,Er.isNumber=Dl,Er.isObject=Il,Er.isObjectLike=Sl,Er.isPlainObject=Pl,Er.isRegExp=Ll,Er.isSafeInteger=Ml,Er.isSet=Ul,Er.isString=jl,Er.isSymbol=Fl,Er.isTypedArray=Vl,Er.isUndefined=Bl,Er.isWeakMap=$l,Er.isWeakSet=zl,Er.join=iu,Er.kebabCase=Jh,Er.last=su,Er.lastIndexOf=ou,Er.lowerCase=Zh,Er.lowerFirst=tf,Er.lt=ql,Er.lte=Wl,Er.max=od,Er.maxBy=ad,Er.mean=ud,Er.meanBy=cd,Er.min=ld,Er.minBy=hd,Er.stubArray=Kf,Er.stubFalse=Qf,Er.stubObject=Xf,Er.stubString=Yf,Er.stubTrue=Jf,Er.multiply=fd,Er.nth=au,Er.noConflict=jf,Er.noop=Ff,Er.now=kc,Er.pad=ef,Er.padEnd=nf,Er.padStart=rf,Er.parseInt=sf,Er.random=Wh,Er.reduce=_c,Er.reduceRight=wc,Er.repeat=of,Er.replace=af,Er.result=Nh,Er.round=dd,Er.runInContext=t,Er.sample=Ec,Er.size=Sc,Er.snakeCase=uf,Er.some=Cc,Er.sortedIndex=mu,Er.sortedIndexBy=vu,Er.sortedIndexOf=yu,Er.sortedLastIndex=_u,Er.sortedLastIndexBy=wu,Er.sortedLastIndexOf=bu,Er.startCase=lf,Er.startsWith=hf,Er.subtract=pd,Er.sum=gd,Er.sumBy=md,Er.template=ff,Er.times=Zf,Er.toFinite=Hl,Er.toInteger=Kl,Er.toLength=Ql,Er.toLower=df,Er.toNumber=Xl,Er.toSafeInteger=Jl,Er.toString=Zl,Er.toUpper=pf,Er.trim=gf,Er.trimEnd=mf,Er.trimStart=vf,Er.truncate=yf,Er.unescape=_f,Er.uniqueId=ed,Er.upperCase=wf,Er.upperFirst=bf,Er.each=lc,Er.eachRight=hc,Er.first=Ja,Uf(Er,function(){var t={};return xi(Er,(function(e,n){he.call(Er.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Er.VERSION=s,bn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Er[t].placeholder=Er})),bn(["drop","take"],(function(t,e){Ar.prototype[t]=function(n){n=n===i?1:Ve(Kl(n),0);var r=this.__filtered__&&!e?new Ar(this):this.clone();return r.__filtered__?r.__takeCount__=Be(n,r.__takeCount__):r.__views__.push({size:Be(n,F),type:t+(r.__dir__<0?"Right":"")}),r},Ar.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),bn(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==N||n==P;Ar.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:qo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),bn(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Ar.prototype[t]=function(){return this[n](1).value()[0]}})),bn(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Ar.prototype[t]=function(){return this.__filtered__?new Ar(this):this[n](1)}})),Ar.prototype.compact=function(){return this.filter(xf)},Ar.prototype.find=function(t){return this.filter(t).head()},Ar.prototype.findLast=function(t){return this.reverse().find(t)},Ar.prototype.invokeMap=ws((function(t,e){return"function"==typeof t?new Ar(this):this.map((function(n){return zi(n,t,e)}))})),Ar.prototype.reject=function(t){return this.filter(Bc(qo(t)))},Ar.prototype.slice=function(t,e){t=Kl(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Ar(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==i&&(e=Kl(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},Ar.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Ar.prototype.toArray=function(){return this.take(F)},xi(Ar.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),s=Er[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);s&&(Er.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,u=e instanceof Ar,c=a[0],l=u||ul(e),h=function(t){var e=s.apply(Er,kn([t],a));return r&&f?e[0]:e};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=o&&!f,g=u&&!d;if(!o&&l){e=g?e:new Ar(this);var m=t.apply(e,a);return m.__actions__.push({func:Hu,args:[h],thisArg:i}),new Cr(m,f)}return p&&g?t.apply(this,a):(m=this.thru(h),p?r?m.value()[0]:m.value():m)})})),bn(["pop","push","shift","sort","splice","unshift"],(function(t){var e=oe[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Er.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ul(i)?i:[],t)}return this[n]((function(n){return e.apply(ul(n)?n:[],t)}))}})),xi(Ar.prototype,(function(t,e){var n=Er[e];if(n){var r=n.name+"";he.call(cn,r)||(cn[r]=[]),cn[r].push({name:e,func:n})}})),cn[_o(i,_).name]=[{name:"wrapper",func:i}],Ar.prototype.clone=kr,Ar.prototype.reverse=Rr,Ar.prototype.value=Or,Er.prototype.at=Ku,Er.prototype.chain=Qu,Er.prototype.commit=Xu,Er.prototype.next=Yu,Er.prototype.plant=Zu,Er.prototype.reverse=tc,Er.prototype.toJSON=Er.prototype.valueOf=Er.prototype.value=ec,Er.prototype.first=Er.prototype.head,Ae&&(Er.prototype[Ae]=Ju),Er},Tr=Er();an._=Tr,r=function(){return Tr}.call(e,n,e,t),r===i||(t.exports=r)}.call(this)},1241:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},782:function(t,e,n){"use strict";n.d(e,{y$:function(){return tt},i0:function(){return it},L8:function(){return rt}});n(4114),n(8992),n(4520),n(3949),n(1454),n(8872);var r=n(6768),i=n(144);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:{}}const a="function"===typeof Proxy,u="devtools-plugin:setup",c="plugin:settings:set";let l,h;function f(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof globalThis&&(null===(t=globalThis.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=globalThis.perf_hooks.performance):l=!1),l}function d(){return f()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return d()}},e&&e.on(c,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function g(t,e){const n=t,r=o(),i=s(),c=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const t=c?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(u,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function v(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function y(t){return null!==t&&"object"===typeof t}function _(t){return t&&"function"===typeof t.then}function w(t,e){return function(){return t(e)}}function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;I(t,n,[],t._modules.root,!0),T(t,n,e)}function T(t,e,n){var s=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,u={},c={},l=(0,i.uY)(!0);l.run((function(){v(a,(function(e,n){u[n]=w(e,t),c[n]=(0,r.EW)((function(){return u[n]()})),Object.defineProperty(t.getters,n,{get:function(){return c[n].value},enumerable:!0})}))})),t._state=(0,i.Kh)({data:e}),t._scope=l,t.strict&&O(t),s&&n&&t._withCommit((function(){s.data=null})),o&&o.stop()}function I(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=x(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){a[u]=r.state}))}var c=r.context=S(t,o,n);r.forEachMutation((function(e,n){var r=o+n;A(t,r,e,c)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;k(t,r,i,c)})),r.forEachGetter((function(e,n){var r=o+n;R(t,r,e,c)})),r.forEachChild((function(r,s){I(t,e,n.concat(s),r,i)}))}function S(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,u=s.type;return a&&a.root||(u=e+u),t.dispatch(u,o)},commit:r?t.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,u=s.type;a&&a.root||(u=e+u),t.commit(u,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function A(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function k(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return _(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function R(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){(0,r.wB)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function N(t,e,n){return y(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var D="vuex bindings",P="vuex:mutations",L="vuex:actions",M="vuex",U=0;function j(t,e){g({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[D]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:F}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:F}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===M)if(n.filter){var r=[];W(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[q(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId;C(e,r),n.state=G(K(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=U++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:L,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var F=8702998,V=6710886,B=16777215,$={label:"namespaced",textColor:B,backgroundColor:V};function z(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function q(t,e){return{id:e||"root",label:z(e),tags:t.namespaced?[$]:[],children:Object.keys(t._children).map((function(n){return q(t._children[n],e+n+"/")}))}}function W(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[$]:[]}),Object.keys(e._children).forEach((function(i){W(t,e._children[i],n,r+i+"/")}))}function G(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=H(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?z(t):t,editable:!1,value:Q((function(){return s[t]}))}}))}return i}function H(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=Q((function(){return t[n]}))}else e[n]=Q((function(){return t[n]}))})),e}function K(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function Q(t){try{return t()}catch(e){return e}}var X=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},Y={namespaced:{configurable:!0}};Y.namespaced.get=function(){return!!this._rawModule.namespaced},X.prototype.addChild=function(t,e){this._children[t]=e},X.prototype.removeChild=function(t){delete this._children[t]},X.prototype.getChild=function(t){return this._children[t]},X.prototype.hasChild=function(t){return t in this._children},X.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},X.prototype.forEachChild=function(t){v(this._children,t)},X.prototype.forEachGetter=function(t){this._rawModule.getters&&v(this._rawModule.getters,t)},X.prototype.forEachAction=function(t){this._rawModule.actions&&v(this._rawModule.actions,t)},X.prototype.forEachMutation=function(t){this._rawModule.mutations&&v(this._rawModule.mutations,t)},Object.defineProperties(X.prototype,Y);var J=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;Z(t.concat(r),e.getChild(r),n.modules[r])}}J.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},J.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},J.prototype.update=function(t){Z([],this.root,t)},J.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new X(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&v(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},J.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},J.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new J(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this,a=o.dispatch,u=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return u.call(s,t,e,n)},this.strict=r;var c=this._modules.root.state;I(this,c,[],this._modules.root),T(this,c),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||m,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&j(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,i=N(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),u=this._mutations[s];u&&(this._withCommit((function(){u.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=N(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(c){0}var u=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){u.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(c){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var i=this;return(0,r.wB)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),I(this,this.state,t,this._modules.get(t),n.preserveState),T(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);at((function(t,e){var n={};return st(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ut(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),at((function(t,e){var n={};return st(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=ut(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));var rt=at((function(t,e){var n={};return st(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||ut(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),it=at((function(t,e){var n={};return st(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=ut(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function st(t){return ot(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function ot(t){return Array.isArray(t)||y(t)}function at(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ut(t,e,n){var r=t._modulesNamespaceMap[n];return r}},9306:function(t,e,n){"use strict";var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},3506:function(t,e,n){"use strict";var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},7080:function(t,e,n){"use strict";var r=n(4402).has;t.exports=function(t){return r(t),t}},6469:function(t,e,n){"use strict";var r=n(8227),i=n(2360),s=n(4913).f,o=r("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},679:function(t,e,n){"use strict";var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},8551:function(t,e,n){"use strict";var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},7811:function(t){"use strict";t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){"use strict";var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;t.exports=o&&i(o.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==s(t))throw new a("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){"use strict";var r=n(4576),i=n(7476),s=n(7394),o=r.ArrayBuffer,a=o&&o.prototype,u=a&&i(a.slice);t.exports=function(t){if(0!==s(t))return!1;if(!u)return!1;try{return u(t,0,0),!1}catch(e){return!0}}},5169:function(t,e,n){"use strict";var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},5636:function(t,e,n){"use strict";var r=n(4576),i=n(9504),s=n(6706),o=n(7696),a=n(5169),u=n(7394),c=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=Math.min,g=f.prototype,m=d.prototype,v=i(g.slice),y=s(g,"resizable","get"),_=s(g,"maxByteLength","get"),w=i(m.getInt8),b=i(m.setInt8);t.exports=(l||c)&&function(t,e,n){var r,i=u(t),s=void 0===e?i:o(e),g=!y||!y(t);if(a(t),l&&(t=h(t,{transfer:[t]}),i===s&&(n||g)))return t;if(i>=s&&(!n||g))r=v(t,0,s);else{var m=n&&!g&&_?{maxByteLength:_(t)}:void 0;r=new f(s,m);for(var E=new d(t),T=new d(r),I=p(s,i),S=0;S<I;S++)b(T,S,w(E,S))}return l||c(t),r}},4644:function(t,e,n){"use strict";var r,i,s,o=n(7811),a=n(3724),u=n(4576),c=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),_=n(2967),w=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=u.Int8Array,C=S&&S.prototype,A=u.Uint8ClampedArray,k=A&&A.prototype,R=S&&y(S),O=C&&y(C),x=Object.prototype,N=u.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==f(u.opera),U=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(j,e)||h(F,e)},B=function(t){var e=y(t);if(l(e)){var n=I(e);return n&&h(n,L)?n[L]:B(e)}},$=function(t){if(!l(t))return!1;var e=f(t);return h(j,e)||h(F,e)},z=function(t){if($(t))return t;throw new N("Target is not a typed array")},q=function(t){if(c(t)&&(!_||v(R,t)))return t;throw new N(d(t)+" is not a typed array constructor")},W=function(t,e,n,r){if(a){if(n)for(var i in j){var s=u[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(c){}}}O[t]&&!n||g(O,t,n?e:M&&C[t]||e,r)}},G=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in j)if(i=u[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return g(R,t,n?e:M&&R[t]||e)}catch(s){}}for(r in j)i=u[r],!i||i[t]&&!n||g(i,t,e)}};for(r in j)i=u[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in F)i=u[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!c(R)||R===Function.prototype)&&(R=function(){throw new N("Incorrect invocation")},M))for(r in j)u[r]&&_(u[r],R);if((!M||!O||O===x)&&(O=R.prototype,M))for(r in j)u[r]&&_(u[r].prototype,O);if(M&&y(k)!==O&&_(k,O),a&&!h(O,D))for(r in U=!0,m(O,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),j)u[r]&&p(u[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:B,isView:V,isTypedArray:$,TypedArray:R,TypedArrayPrototype:O}},5370:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e,n){var i=0,s=arguments.length>2?n:r(e),o=new t(s);while(s>i)o[i]=e[i++];return o}},9617:function(t,e,n){"use strict";var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),u=s(a);if(0===u)return!t&&-1;var c,l=i(o,u);if(t&&n!==n){while(u>l)if(c=a[l++],c!==c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){"use strict";var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7628:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},9928:function(t,e,n){"use strict";var r=n(6198),i=n(1291),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),u=i(n),c=u<0?a+u:u;if(c>=a||c<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===c?o:t[h];return l}},6319:function(t,e,n){"use strict";var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},2195:function(t,e,n){"use strict";var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},6955:function(t,e,n){"use strict";var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),u=Object,c="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=u(t),a))?n:c?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){"use strict";var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),u=o.f,c=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||u(t,h,c(e,h))}}},2211:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2529:function(t){"use strict";t.exports=function(t,e){return{value:t,done:e}}},6699:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4659:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},2106:function(t,e,n){"use strict";var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){"use strict";var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var u=a.enumerable,c=void 0!==a.name?a.name:e;if(r(n)&&s(n,c,a),a.global)u?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(u=!0):delete t[e]}catch(l){}u?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6279:function(t,e,n){"use strict";var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},9433:function(t,e,n){"use strict";var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(t,e,n){"use strict";var r,i,s,o,a=n(4576),u=n(9429),c=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(c)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=u("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,s=new h(2),o=function(t){i.port1.postMessage(null,[t])},2===s.byteLength&&(o(s),0===s.byteLength&&(d=o)))}catch(p){}t.exports=d},4055:function(t,e,n){"use strict";var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},5002:function(t){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(t,e,n){"use strict";var r=n(4215);t.exports="NODE"===r},2839:function(t,e,n){"use strict";var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},9519:function(t,e,n){"use strict";var r,i,s=n(4576),o=n(2839),a=s.process,u=s.Deno,c=a&&a.versions||u&&u.version,l=c&&c.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},4215:function(t,e,n){"use strict";var r=n(4576),i=n(2839),s=n(2195),o=function(t){return i.slice(0,t.length)===t};t.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===s(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},8574:function(t,e,n){"use strict";var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(o);t.exports=function(t,e){if(u&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6518:function(t,e,n){"use strict";var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),u=n(7740),c=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=c(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},9039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},6080:function(t,e,n){"use strict";var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},616:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){"use strict";var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){"use strict";var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),u=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},6706:function(t,e,n){"use strict";var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},7476:function(t,e,n){"use strict";var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},9504:function(t,e,n){"use strict";var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},9429:function(t,e,n){"use strict";var r=n(4576),i=n(6193);t.exports=function(t){if(i){try{return r.process.getBuiltinModule(t)}catch(e){}try{return Function('return require("'+t+'")')()}catch(e){}}}},4124:function(t,e,n){"use strict";var r=n(4576);t.exports=function(t,e){var n=r[t],i=n&&n.prototype;return i&&i[e]}},7751:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},1767:function(t){"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},8646:function(t,e,n){"use strict";var r=n(9565),i=n(8551),s=n(1767),o=n(851);t.exports=function(t,e){e&&"string"===typeof t||i(t);var n=o(t);return s(i(void 0!==n?r(n,t):t))}},851:function(t,e,n){"use strict";var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),u=a("iterator");t.exports=function(t){if(!s(t))return i(t,u)||i(t,"@@iterator")||o[r(t)]}},81:function(t,e,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),u=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new u(o(t)+" is not iterable")}},5966:function(t,e,n){"use strict";var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},3789:function(t,e,n){"use strict";var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),u="Invalid size",c=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(u);var n=o(e);if(n<0)throw new c(u);return new f(t,n)}},4576:function(t,e,n){"use strict";var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){"use strict";var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},421:function(t){"use strict";t.exports={}},397:function(t,e,n){"use strict";var r=n(7751);t.exports=r("document","documentElement")},5917:function(t,e,n){"use strict";var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3167:function(t,e,n){"use strict";var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3706:function(t,e,n){"use strict";var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){"use strict";var r,i,s,o=n(8622),a=n(4576),u=n(34),c=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw new g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},s=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw new g(p);return e.facade=t,c(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},4209:function(t,e,n){"use strict";var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4376:function(t,e,n){"use strict";var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){"use strict";var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){"use strict";var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=u[a(t)];return n===l||n!==c&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},u=o.data={},c=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){"use strict";var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){"use strict";var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){"use strict";t.exports=!1},757:function(t,e,n){"use strict";var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},507:function(t,e,n){"use strict";var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},2652:function(t,e,n){"use strict";var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),u=n(6198),c=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,v,y,_,w,b,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),k=r(e,T),R=function(t){return m&&f(m,"normal",t),new p(!0,t)},O=function(t){return I?(s(t),A?k(t[0],t[1],R):k(t[0],t[1])):A?k(t,R):k(t)};if(S)m=t.iterator;else if(C)m=t;else{if(v=h(t),!v)throw new d(o(t)+" is not iterable");if(a(v)){for(y=0,_=u(t);_>y;y++)if(w=O(t[y]),w&&c(g,w))return w;return new p(!1)}m=l(t,v)}b=S?t.next:m.next;while(!(E=i(b,m)).done){try{w=O(E.value)}catch(x){f(m,"throw",x)}if("object"==typeof w&&w&&c(g,w))return w}return new p(!1)}},9539:function(t,e,n){"use strict";var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(u){a=!0,o=u}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9462:function(t,e,n){"use strict";var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),u=n(1181),c=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",m=u.set,v=function(t){var e=u.getterFor(t?g:p);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var s=c(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{f(n.inner.iterator,"normal")}catch(o){return f(i,"throw",o)}return i&&f(i,"normal"),h(void 0,!0)}})},y=v(!0),_=v(!1);s(_,d,"Iterator Helper"),t.exports=function(t,e){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=e?g:p,r.nextHandler=t,r.counter=0,r.done=!1,m(this,r)};return n.prototype=e?y:_,n}},713:function(t,e,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(1767),a=n(9462),u=n(6319),c=a((function(){var t=this.iterator,e=s(r(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return s(this),i(t),new c(o(this),{mapper:t})}},7657:function(t,e,n){"use strict";var r,i,s,o=n(9039),a=n(4901),u=n(34),c=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!u(r)||o((function(){var t={};return r[p].call(t)!==t}));m?r={}:d&&(r=c(r)),a(r[p])||h(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(t){"use strict";t.exports={}},6198:function(t,e,n){"use strict";var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),u=n(350).CONFIGURABLE,c=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||u&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&f(this).source||c(this)}),"toString")},741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){"use strict";var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},4149:function(t){"use strict";var e=RangeError;t.exports=function(t){if(t===t)return t;throw new e("NaN is not allowed")}},2360:function(t,e,n){"use strict";var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),u=n(397),c=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=c("iframe"),n="java"+p+":";return e.style.display="none",u.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var t=o.length;while(t--)delete w[d][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:s.f(n,e)}},6801:function(t,e,n){"use strict";var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),u=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=u(e),c=i.length,l=0;while(c>l)s.f(t,n=i[l++],r[n]);return t}},4913:function(t,e,n){"use strict";var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),u=TypeError,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){"use strict";var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),u=n(6969),c=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=u(e),l)try{return h(t,e)}catch(n){}if(c(t,e))return o(!i(s.f,t,e),t[e])}},8480:function(t,e,n){"use strict";var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},3717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){"use strict";var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),u=o("IE_PROTO"),c=Object,l=c.prototype;t.exports=a?c.getPrototypeOf:function(t){var e=s(t);if(r(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof c?l:null}},1625:function(t,e,n){"use strict";var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){"use strict";var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),u=r([].push);t.exports=function(t,e){var n,r=s(t),c=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&u(l,n);while(e.length>c)i(r,n=e[c++])&&(~o(l,n)||u(l,n));return l}},1072:function(t,e,n){"use strict";var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},8773:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){"use strict";var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(t,e,n){"use strict";var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){"use strict";var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),u=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?u(e,n(t)):e}},7979:function(t,e,n){"use strict";var r=n(8551);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},7750:function(t,e,n){"use strict";var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},9286:function(t,e,n){"use strict";var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,(function(t){o(e,t)})),e}},3440:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),u=n(8469),c=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(e)<=n.size?u(e,(function(t){n.includes(t)&&h(i,t)})):c(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},4402:function(t,e,n){"use strict";var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),u=n(507),c=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new c;return s(e)>n.size?u(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},4449:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),u=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==u(l,(function(t){if(i(e,t))return c(l,"normal",!1)}))}},3838:function(t,e,n){"use strict";var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,(function(t){if(!n.includes(t))return!1}),!0)}},8527:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var c=n.getIterator();return!1!==a(c,(function(t){if(!i(e,t))return u(c,"normal",!1)}))}},8469:function(t,e,n){"use strict";var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,u=r(a.forEach),c=r(a.keys),l=c(new o).next;t.exports=function(t,e,n){return n?i({iterator:c(t),next:l},e):u(t,e)}},4916:function(t,e,n){"use strict";var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=r("Set");try{(new e)[t](i(0));try{return(new e)[t](i(-1)),!1}catch(n){return!0}}catch(s){return!1}}},5170:function(t,e,n){"use strict";var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),u=i.add,c=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,(function(t){c(e,t)?l(i,t):u(i,t)})),i}},4204:function(t,e,n){"use strict";var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),u=s(e);return a(n,(function(t){i(u,t)})),u}},6119:function(t,e,n){"use strict";var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},7629:function(t,e,n){"use strict";var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.39.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){"use strict";var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},1548:function(t,e,n){"use strict";var r=n(4576),i=n(9039),s=n(9519),o=n(4215),a=r.structuredClone;t.exports=!!a&&!i((function(){if("DENO"===o&&s>92||"NODE"===o&&s>94||"BROWSER"===o&&s>97)return!1;var t=new ArrayBuffer(8),e=a(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},4495:function(t,e,n){"use strict";var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(t,e,n){"use strict";var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5854:function(t,e,n){"use strict";var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},7696:function(t,e,n){"use strict";var r=n(1291),i=n(8014),s=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new s("Wrong length or index");return n}},5397:function(t,e,n){"use strict";var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){"use strict";var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){"use strict";var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){"use strict";var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},9590:function(t,e,n){"use strict";var r=n(1291),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw new i("The argument can't be less than 0");return e}},2777:function(t,e,n){"use strict";var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),u=n(8227),c=TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,u=o(t,l);if(u){if(void 0===e&&(e="default"),n=r(u,t,e),!i(n)||s(n))return n;throw new c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){"use strict";var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){"use strict";var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},655:function(t,e,n){"use strict";var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},6823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){"use strict";var r=n(9504),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},7040:function(t,e,n){"use strict";var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){"use strict";var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(t){"use strict";var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8227:function(t,e,n){"use strict";var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),u=n(7040),c=r.Symbol,l=i("wks"),h=u?c["for"]||c:c&&c.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(c,t)?c[t]:h("Symbol."+t)),l[t]}},6573:function(t,e,n){"use strict";var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(t,e,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(t,e,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(t,e,n){"use strict";var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),u=n(9039),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var u=0;u<r;u++)e[n]=arguments[u],n++;return o(e,n),n}})},9678:function(t,e,n){"use strict";var r=n(6518),i=n(7628),s=n(5397),o=n(6469),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return i(s(this),a)}}),o("toReversed")},7145:function(t,e,n){"use strict";var r=n(6518),i=n(9504),s=n(9306),o=n(5397),a=n(5370),u=n(4124),c=n(6469),l=Array,h=i(u("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&s(t);var e=o(this),n=a(l,e);return h(n,t)}}),c("toSorted")},1658:function(t,e,n){"use strict";var r=n(6518),i=n(6469),s=n(6837),o=n(6198),a=n(5610),u=n(5397),c=n(1291),l=Array,h=Math.max,f=Math.min;r({target:"Array",proto:!0},{toSpliced:function(t,e){var n,r,i,d,p=u(this),g=o(p),m=a(t,g),v=arguments.length,y=0;for(0===v?n=r=0:1===v?(n=0,r=g-m):(n=v-2,r=f(h(c(e),0),g-m)),i=s(g+n-r),d=l(i);y<m;y++)d[y]=p[y];for(;y<m+n;y++)d[y]=arguments[y-m+2];for(;y<i;y++)d[y]=p[y+r-n];return d}}),i("toSpliced")},8111:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),u=n(2787),c=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),v="constructor",y="Iterator",_=d("toStringTag"),w=TypeError,b=i[y],E=m||!a(b)||b.prototype!==p||!h((function(){b({})})),T=function(){if(s(this,p),u(this)===p)throw new w("Abstract class Iterator not directly constructable")},I=function(t,e){g?c(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new w("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,_)||I(_,y),!E&&f(p,v)&&p[v]!==Object||I(v,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},9314:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(8551),o=n(1767),a=n(4149),u=n(9590),c=n(9462),l=n(6395),h=c((function(){var t,e,n=this.iterator,r=this.next;while(this.remaining)if(this.remaining--,t=s(i(r,n)),e=this.done=!!t.done,e)return;if(t=s(i(r,n)),e=this.done=!!t.done,!e)return t.value}));r({target:"Iterator",proto:!0,real:!0,forced:l},{drop:function(t){s(this);var e=u(a(+t));return new h(o(this),{remaining:e})}})},1148:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(t){o(this),s(t);var e=a(this),n=0;return!i(e,(function(e,r){if(!t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),u=n(9462),c=n(6319),l=n(6395),h=u((function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,c(r,s,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:l},{filter:function(t){return o(this),s(t),new h(a(this),{predicate:t})}})},116:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(t){o(this),s(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},531:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),u=n(8646),c=n(9462),l=n(9539),h=n(6395),f=c((function(){var t,e,n=this.iterator,r=this.mapper;while(1){if(e=this.inner)try{if(t=o(i(e.next,e.iterator)),!t.done)return t.value;this.inner=null}catch(s){l(n,"throw",s)}if(t=o(i(this.next,n)),this.done=!!t.done)return;try{this.inner=u(r(t.value,this.counter++),!1)}catch(s){l(n,"throw",s)}}}));r({target:"Iterator",proto:!0,real:!0,forced:h},{flatMap:function(t){return o(this),s(t),new f(a(this),{mapper:t,inner:null})}})},7588:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(t){o(this),s(t);var e=a(this),n=0;i(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},1701:function(t,e,n){"use strict";var r=n(6518),i=n(713),s=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:s},{map:i})},8237:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),u=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(t){o(this),s(t);var e=a(this),n=arguments.length<2,r=n?void 0:arguments[1],c=0;if(i(e,(function(e){n?(n=!1,r=e):r=t(r,e,c),c++}),{IS_RECORD:!0}),n)throw new u("Reduce of empty iterator with no initial value");return r}})},3579:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(t){o(this),s(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},4972:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(8551),o=n(1767),a=n(4149),u=n(9590),c=n(9462),l=n(9539),h=n(6395),f=c((function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,l(t,"normal",void 0);var e=s(i(this.next,t)),n=this.done=!!e.done;return n?void 0:e.value}));r({target:"Iterator",proto:!0,real:!0,forced:h},{take:function(t){s(this);var e=u(a(+t));return new f(o(this),{remaining:e})}})},1806:function(t,e,n){"use strict";var r=n(6518),i=n(8551),s=n(2652),o=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return s(o(i(this)),a,{that:t,IS_RECORD:!0}),t}})},9479:function(t,e,n){"use strict";var r=n(4576),i=n(3724),s=n(2106),o=n(7979),a=n(9039),u=r.RegExp,c=u.prototype,l=i&&a((function(){var t=!0;try{u(".","d")}catch(l){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",i=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in t&&(s.hasIndices="d"),s)i(o,s[o]);var a=Object.getOwnPropertyDescriptor(c,"flags").get.call(e);return a!==r||n!==r}));l&&s(c,"flags",{configurable:!0,get:o})},7642:function(t,e,n){"use strict";var r=n(6518),i=n(3440),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:i})},8004:function(t,e,n){"use strict";var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(t,e,n){"use strict";var r=n(6518),i=n(4449),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:i})},5876:function(t,e,n){"use strict";var r=n(6518),i=n(3838),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:i})},2475:function(t,e,n){"use strict";var r=n(6518),i=n(8527),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:i})},5024:function(t,e,n){"use strict";var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},1698:function(t,e,n){"use strict";var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},7467:function(t,e,n){"use strict";var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(t,e,n){"use strict";var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,u=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);c("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(u(e),e);return l(n,t)}))},9577:function(t,e,n){"use strict";var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),u=i.aTypedArray,c=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=u(this),i=o(t),l=s(n)?a(e):+e;return r(n,c(n),i,l)}}["with"],!h)},8992:function(t,e,n){"use strict";n(8111)},4743:function(t,e,n){"use strict";n(9314)},3215:function(t,e,n){"use strict";n(1148)},4520:function(t,e,n){"use strict";n(2489)},2577:function(t,e,n){"use strict";n(116)},670:function(t,e,n){"use strict";n(531)},3949:function(t,e,n){"use strict";n(7588)},1454:function(t,e,n){"use strict";n(1701)},8872:function(t,e,n){"use strict";n(8237)},7550:function(t,e,n){"use strict";n(3579)},7413:function(t,e,n){"use strict";n(4972)},1795:function(t,e,n){"use strict";n(1806)},4979:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,u=n(9297),c=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(8574),p=n(3724),g=n(6395),m="DOMException",v=s("Error"),y=s(m),_=function(){c(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=new v(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in new v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var C=s(m),A=C.prototype;if(A.constructor!==C)for(var k in g||a(A,"constructor",o(1,C)),f)if(u(f,k)){var R=f[k],O=R.s;u(C,O)||a(C,O,o(6,R.c))}},4603:function(t,e,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,u=a.prototype,c=i(u.append),l=i(u["delete"]),h=i(u.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(u,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),o(e,1);var i,a=s(t),u=s(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===u||c(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(t,e,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,u=a.prototype,c=i(u.getAll),l=i(u.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(u,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=c(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(t,e,n){"use strict";var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},3405:function(t,e,n){"use strict";n.d(e,{MF:function(){return _t},j6:function(){return pt},xZ:function(){return gt},om:function(){return dt},Sx:function(){return bt},Wp:function(){return wt},KO:function(){return Et}});n(4114),n(8992),n(4520),n(1454),n(8872),n(7550);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,u;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,c())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}_((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",N="0.10.17",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",$="@firebase/data-connect",z="@firebase/database-compat",q="@firebase/functions",W="@firebase/functions-compat",G="@firebase/installations",H="@firebase/installations-compat",K="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/vertexai",it="@firebase/firestore-compat",st="firebase",ot="11.1.0",at="[DEFAULT]",ut={[x]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-data-connect",[z]:"fire-rtdb-compat",[q]:"fire-fn",[W]:"fire-fn-compat",[G]:"fire-iid",[H]:"fire-iid-compat",[K]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ct=new Map,lt=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ct.values())ft(n,t);for(const n of lt.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},vt=new s.FA("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t=ot;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw vt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw vt.create("no-options");const a=ct.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw vt.create("duplicate-app",{appName:o})}const u=new r.h1(o);for(const r of ht.values())u.addComponent(r);const c=new yt(n,i,u);return ct.set(o,c),c}function bt(t=at){const e=ct.get(t);if(!e&&t===at&&(0,s.T9)())return wt();if(!e)throw vt.create("no-app",{appName:t});return e}function Et(t,e,n){var i;let s=null!==(i=ut[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}dt(new r.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="firebase-heartbeat-database",It=1,St="firebase-heartbeat-store";let Ct=null;function At(){return Ct||(Ct=I(Tt,It,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch((t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function kt(t){try{const e=await At(),n=e.transaction(St),r=await n.objectStore(St).get(Ot(t));return await n.done,r}catch(e){if(e instanceof s.g)D.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});D.warn(t.message)}}}async function Rt(t,e){try{const n=await At(),r=n.transaction(St,"readwrite"),i=r.objectStore(St);await i.put(e,Ot(t)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const t=vt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1024,Nt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Pt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Nt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){D.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pt(),{heartbeatsToSend:n,unsentEntries:r}=Lt(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return D.warn(e),""}}}function Pt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=xt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){dt(new r.uA("platform-logger",(t=>new R(t)),"PRIVATE")),dt(new r.uA("heartbeat",(t=>new Dt(t)),"PRIVATE")),Et(x,N,t),Et(x,N,"esm2017"),Et("fire-js","")}jt("")},852:function(t,e,n){"use strict";n.d(e,{h1:function(){return c},uA:function(){return i}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(1454);var r=n(4046);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){"use strict";n.d(e,{$b:function(){return i},Vy:function(){return c}});n(4114),n(8992),n(4520),n(1454);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6400:function(t,e,n){"use strict";n.d(e,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},3869:function(t,e,n){"use strict";n.d(e,{HF:function(){return Se},xI:function(){return Hr},hg:function(){return Ue},df:function(){return Un},CI:function(){return je}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),s=n(1363);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=u,l=new i.FA("auth","Firebase",u()),h=new s.Vy("@firebase/auth");function f(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${t}`,...e)}function d(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw _(t,...e)}function g(t,...e){return _(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},c()),{[e]:n}),s=new i.FA("auth","Firebase",r);return s.create(e,{appName:t.name})}function v(t){return m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function w(t,e,...n){if(!t)throw _(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function E(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,s={}){return L(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return(0,i.c1)()||(c.referrerPolicy="no-referrer"),O.fetch()(U(t,t.config.apiHost,n,a),c)}))}async function L(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},x),e);try{const e=new F(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof i.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function M(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?R(t.config,i):`${t.config.apiScheme}://${i}`}function j(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),N.get())}))}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return void 0!==t&&void 0!==t.enterprise}class ${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return j(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return P(t,"GET","/v2/recaptchaConfig",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,i.Ku)(t),r=await n.getIdToken(e),s=Q(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(K(s.auth_time)),issuedAtTime:G(K(s.iat)),expirationTime:G(K(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function K(t){return 1e3*Number(t)}function Q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.u)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(t){const e=Q(t);return w(e,"internal-error"),w("undefined"!==typeof e.exp,"internal-error"),w("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.g&&J(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Y(t,W(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?it(s.providerUserInfo):[],a=rt(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!u&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function nt(t){const e=(0,i.Ku)(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e){const n=await L(t,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=U(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ot(t,e){return P(t,"POST","/v2/accounts:revokeToken",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w("undefined"!==typeof t.idToken,"internal-error"),w("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):X(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){w(0!==t.length,"internal-error");const e=X(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(w(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await st(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new at;return n&&(w("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){w("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ct{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Y(this,this.stsTokenManager.getToken(this.auth,t));return w(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return nt(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const t=await this.getIdToken();return await Y(this,q(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,u,c;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=e.createdAt)&&void 0!==u?u:void 0,v=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:T}=e;w(y&&T,t,"internal-error");const I=at.fromJSON(this.name,T);w("string"===typeof y,t,"internal-error"),ut(l,t.name),ut(h,t.name),w("boolean"===typeof _,t,"internal-error"),w("boolean"===typeof b,t,"internal-error"),ut(f,t.name),ut(d,t.name),ut(p,t.name),ut(g,t.name),ut(m,t.name),ut(v,t.name);const S=new ct({uid:y,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new at;r.updateFromServerResponse(e);const i=new ct({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await et(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];w(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?it(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new at;o.updateFromIdToken(n);const a=new ct({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:s}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new tt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,u),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map;function ht(t){E(t instanceof Function,"Expected a class definition");let e=lt.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ft.type="NONE";const dt=ft;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class gt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pt(this.userKey,r.apiKey,i),this.fullPersistenceKey=pt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ct._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new gt(ht(dt),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ht(dt);const s=pt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){const n=ct._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch(u){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(u){}}))),new gt(i,t,n)):new gt(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Et(e))return"Blackberry";if(Tt(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||_t(e))&&!e.includes("edge/"))return"Chrome";if(bt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function vt(t=(0,i.ZQ)()){return/firefox\//i.test(t)}function yt(t=(0,i.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _t(t=(0,i.ZQ)()){return/crios\//i.test(t)}function wt(t=(0,i.ZQ)()){return/iemobile/i.test(t)}function bt(t=(0,i.ZQ)()){return/android/i.test(t)}function Et(t=(0,i.ZQ)()){return/blackberry/i.test(t)}function Tt(t=(0,i.ZQ)()){return/webos/i.test(t)}function It(t=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function St(t=(0,i.ZQ)()){var e;return It(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ct(){return(0,i.lT)()&&10===document.documentMode}function At(t=(0,i.ZQ)()){return It(t)||bt(t)||Tt(t)||Et(t)||/windows phone/i.test(t)||wt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=mt((0,i.ZQ)());break;case"Worker":n=`${mt((0,i.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(t,e={}){return P(t,"GET","/v2/passwordPolicy",D(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=6;class Nt{constructor(t){var e,n,r,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:xt,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lt(this),this.idTokenSubscription=new Lt(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ht(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await gt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await W(this,{idToken:t}),n=await ct._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,r.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await et(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,r.xZ)(this.app))return Promise.reject(v(this));const e=t?(0,i.Ku)(t):null;return e&&w(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ht(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ot(this),e=new Nt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await ot(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ht(t)||this._popupRedirectResolver;w(e,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[ht(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Pt(t){return(0,i.Ku)(t)}class Lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.tD)((t=>this.observer=t))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ut(t){Mt=t}function jt(t){return Mt.loadJS(t)}function Ft(){return Mt.recaptchaEnterpriseScript}function Vt(){return Mt.gapiScript}function Bt(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.enterprise=new zt}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class zt{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const qt="recaptcha-enterprise",Wt="NO_RECAPTCHA";class Gt{constructor(t){this.type=qt,this.auth=Pt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{z(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new $(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;B(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Wt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const t=new $t;return t.execute("siteKey",{action:"verify"})}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&B(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=Ft();0!==e.length&&(e+=n),jt(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Ht(t,e,n,r=!1,i=!1){const s=new Gt(t);let o;if(i)o=Wt;else try{o=await s.verify(n)}catch(u){o=await s.verify(n,!0)}const a=Object.assign({},e);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kt(t,e,n,r,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ht(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ht(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const i=await Ht(t,e,n);return r(t,i).catch((async i=>{var s;if("AUDIT"===(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Ht(t,e,n,!1,!0);return r(t,i)}return Promise.reject(i)}))}{const i=await Ht(t,e,n,!1,!0);return r(t,i)}}return Promise.reject(i+" provider is not supported.")}async function Qt(t){const e=Pt(t),n=await z(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new $(n);if(null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()){const t=new Gt(e);t.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){const n=(0,r.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Yt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Jt(t,e,n){const r=Pt(t);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Zt(e),{host:o,port:a}=te(e),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ne()}function Zt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function te(t){const e=Zt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ee(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ee(e)}}}function ee(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ne(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e){return P(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oe(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function ae(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends re{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ue(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ue(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kt(t,e,"signInWithPassword",se,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oe(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kt(t,n,"signUpPassword",ie,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ae(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="http://localhost";class he extends re{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new he(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new he(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ce(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ce(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ce(t,e)}buildRequest(){const t={requestUri:le,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function de(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function pe(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const ge={["USER_NOT_FOUND"]:"user-not-found"};async function me(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),ge)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends re{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ve({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ve({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return de(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return pe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return me(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ve({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _e(t){const e=(0,i.I9)((0,i.hp)(t))["link"],n=e?(0,i.I9)((0,i.hp)(e))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(t))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||e||t}class we{constructor(t){var e,n,r,s,o,a;const u=(0,i.I9)((0,i.hp)(t)),c=null!==(e=u["apiKey"])&&void 0!==e?e:null,l=null!==(n=u["oobCode"])&&void 0!==n?n:null,h=ye(null!==(r=u["mode"])&&void 0!==r?r:null);w(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(s=u["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=u["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=u["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=_e(t);try{return new we(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(){this.providerId=be.PROVIDER_ID}static credential(t,e){return ue._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=we.parseLink(e);return w(n,"argument-error"),ue._fromEmailAndCode(t,n.code,n.tenantId)}}be.PROVIDER_ID="password",be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Ee{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends Te{constructor(){super("facebook.com")}static credential(t){return he._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ie.credential(t.oauthAccessToken)}catch(e){return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return he._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Se.credential(e,n)}catch(r){return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com",Se.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends Te{constructor(){super("github.com")}static credential(t){return he._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ce.credential(t.oauthAccessToken)}catch(e){return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com",Ce.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends Te{constructor(){super("twitter.com")}static credential(t,e){return he._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ae.credential(e,n)}catch(r){return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ct._fromIdTokenResponse(t,n,r),s=Re(n),o=new ke({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Re(n);return new ke({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Re(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe extends i.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Oe.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Oe(t,e,n,r)}}function xe(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Oe._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e,n=!1){const r=await Y(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function De(t,e,n=!1){const{auth:i}=t;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await Y(t,xe(i,s,e,t),n);w(r.idToken,i,"internal-error");const o=Q(r.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(t.uid===a,i,"user-mismatch"),ke._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i="signIn",s=await xe(t,i,e),o=await ke._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function Le(t,e,n,r){return(0,i.Ku)(t).onIdTokenChanged(e,n,r)}function Me(t,e,n){return(0,i.Ku)(t).beforeAuthStateChanged(e,n)}function Ue(t,e,n,r){return(0,i.Ku)(t).onAuthStateChanged(e,n,r)}function je(t){return(0,i.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Ve(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}function Be(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function $e(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const ze="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=1e3,Ge=10;class He extends qe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=At(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Ct()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Ge):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),We)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}He.type="LOCAL";const Ke=He;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends qe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Qe.type="SESSION";const Xe=Qe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Je(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Ye(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je.receivers=[];class tn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Ze("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function nn(t){en().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return"undefined"!==typeof en()["WorkerGlobalScope"]&&"function"===typeof en()["importScripts"]}async function sn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function on(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function an(){return rn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="firebaseLocalStorageDb",cn=1,ln="firebaseLocalStorage",hn="fbase_key";class fn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function dn(t,e){return t.transaction([ln],e?"readwrite":"readonly").objectStore(ln)}function pn(){const t=indexedDB.deleteDatabase(un);return new fn(t).toPromise()}function gn(){const t=indexedDB.open(un,cn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ln,{keyPath:hn})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ln)?e(n):(n.close(),await pn(),e(await gn()))}))}))}async function mn(t,e,n){const r=dn(t,!0).put({[hn]:e,value:n});return new fn(r).toPromise()}async function vn(t,e){const n=dn(t,!1).get(e),r=await new fn(n).toPromise();return void 0===r?null:r.value}function yn(t,e){const n=dn(t,!0).delete(e);return new fn(n).toPromise()}const _n=800,wn=3;class bn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>wn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Je._getInstance(an()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await sn(),!this.activeServiceWorker)return;this.sender=new tn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&on()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await gn();return await mn(t,ze,"1"),await yn(t,ze),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>mn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>vn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>yn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=dn(t,!1).getAll();return new fn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),_n)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bn.type="LOCAL";const En=bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function In(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}function Sn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn="recaptcha";async function An(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Qt(t)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){w("enroll"===e.type,t,"internal-error");const r={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(t,e)=>{if(e.phoneEnrollmentInfo.captchaResponse===Wt){w((null===n||void 0===n?void 0:n.type)===Cn,t,"argument-error");const r=await kn(t,e,n);return Fe(t,r)}return Fe(t,e)},o=Kt(t,r,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((t=>Promise.reject(t)));return a.phoneSessionInfo.sessionInfo}{w("signin"===e.type,t,"internal-error");const s=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;w(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:e.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(t,e)=>{if(e.phoneSignInInfo.captchaResponse===Wt){w((null===n||void 0===n?void 0:n.type)===Cn,t,"argument-error");const r=await kn(t,e,n);return Tn(t,r)}return Tn(t,e)},u=Kt(t,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),c=await u.catch((t=>Promise.reject(t)));return c.phoneResponseInfo.sessionInfo}}{const e={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(t,e)=>{if(e.captchaResponse===Wt){w((null===n||void 0===n?void 0:n.type)===Cn,t,"argument-error");const r=await kn(t,e,n);return fe(t,r)}return fe(t,e)},s=Kt(t,e,"sendVerificationCode",r,"PHONE_PROVIDER"),o=await s.catch((t=>Promise.reject(t)));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function kn(t,e,n){w(n.type===Cn,t,"argument-error");const r=await n.verify();w("string"===typeof r,t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const t=i.phoneEnrollmentInfo.phoneNumber,e=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:r,captchaResponse:e,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const t=i.phoneSignInInfo.captchaResponse,e=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:t,clientType:e,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.providerId=Rn.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return An(this.auth,t,(0,i.Ku)(e))}static credential(t,e){return ve._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Rn.credentialFromTaggedObject(e)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ve._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(t,e){return e?ht(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.PROVIDER_ID="phone",Rn.PHONE_SIGN_IN_METHOD="phone";class xn extends re{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ce(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ce(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ce(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Nn(t){return Pe(t.auth,new xn(t),t.bypassAuthState)}function Dn(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),De(n,new xn(t),t.bypassAuthState)}async function Pn(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Ne(n,new xn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Nn;case"linkViaPopup":case"linkViaRedirect":return Pn;case"reauthViaPopup":case"reauthViaRedirect":return Dn;default:p(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new k(2e3,1e4);async function Un(t,e,n){if((0,r.xZ)(t.app))return Promise.reject(g(t,"operation-not-supported-in-this-environment"));const i=Pt(t);y(t,e,Ee);const s=On(i,n),o=new jn(i,"signInViaPopup",e,s);return o.executeNotNull()}class jn extends Ln{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=Ze();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Mn.get())};t()}}jn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn="pendingRedirect",Vn=new Map;class Bn extends Ln{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Vn.get(this.auth._key());if(!t){try{const e=await $n(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Vn.set(this.auth._key(),t)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function $n(t,e){const n=Wn(e),r=qn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function zn(t,e){Vn.set(t._key(),e)}function qn(t){return ht(t._redirectPersistence)}function Wn(t){return pt(Fn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i=Pt(t),s=On(i,e),o=new Bn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=6e5;class Kn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Yn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Xn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Hn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(t))}saveEventToCache(t){this.cachedEventUids.add(Qn(t)),this.lastProcessedEventTime=Date.now()}}function Qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Xn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Yn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function er(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jn(t);for(const r of e)try{if(nr(r))return}catch(n){}p(t,"unauthorized-domain")}function nr(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tr.test(n))return!1;if(Zn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new k(3e4,6e4);function ir(){const t=en().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function sr(t){return new Promise(((e,n)=>{var r,i,s;function o(){ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ir(),n(g(t,"network-request-failed"))},timeout:rr.get()})}if(null===(i=null===(r=en().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=en().gapi)||void 0===s?void 0:s.load)){const e=Bt("iframefcb");return en()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},jt(`${Vt()}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw or=null,t}))}let or=null;function ar(t){return or=or||sr(t),or}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new k(5e3,15e3),cr="__/auth/iframe",lr="emulator/auth/iframe",hr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dr(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?R(e,lr):`https://${t.config.authDomain}/${cr}`,s={apiKey:e.apiKey,appName:t.name,v:r.MF},o=fr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function pr(t){const e=await ar(t),n=en().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:dr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),s=en().setTimeout((()=>{r(i)}),ur.get());function o(){en().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mr=500,vr=600,yr="_blank",_r="http://localhost";class wr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function br(t,e,n,r=mr,s=vr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},gr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(u=_t(l)?yr:n),vt(l)&&(e=e||_r,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(l)&&"_self"!==u)return Er(e||"",u),new wr(null);const f=window.open(e||"",u,h);w(f,t,"popup-blocked");try{f.focus()}catch(d){}return new wr(f)}function Er(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="__/auth/handler",Ir="emulator/auth/handler",Sr=encodeURIComponent("fac");async function Cr(t,e,n,s,o,a){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(e instanceof Ee){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",(0,i.Im)(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))u[t]=e}if(e instanceof Te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(u.scopes=t.join(","))}t.tenantId&&(u.tid=t.tenantId);const c=u;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];const l=await t._getAppCheckToken(),h=l?`#${Sr}=${encodeURIComponent(l)}`:"";return`${Ar(t)}?${(0,i.Am)(c).slice(1)}${h}`}function Ar({config:t}){return t.emulator?R(t,Ir):`https://${t.authDomain}/${Tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="webStorageSupport";class Rr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xe,this._completeRedirectFn=Gn,this._overrideRedirectResult=zn}async _openPopup(t,e,n,r){var i;E(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Cr(t,e,n,T(),r);return br(t,s,Ze())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Cr(t,e,n,T(),r);return nn(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await pr(t),n=new Kn(t);return e.register("authEvent",(e=>{w(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(kr,{type:kr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[kr];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=er(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return At()||yt()||It()}}const Or=Rr;class xr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class Nr extends xr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Nr(t)}_finalizeEnroll(t,e,n){return Ve(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return In(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Dr{constructor(){}static assertion(t){return Nr._fromCredential(t)}}Dr.FACTOR_ID="phone";class Pr{static assertionForEnrollment(t,e){return Lr._fromSecret(t,e)}static assertionForSignIn(t,e){return Lr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;w("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await Be(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Mr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Pr.FACTOR_ID="totp";class Lr extends xr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Lr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Lr(e,t)}async _finalizeEnroll(t,e,n){return w("undefined"!==typeof this.secret,t,"argument-error"),$e(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){w(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return Sn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Mr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Mr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Ur(t)||Ur(e))&&(r=!0),r&&(Ur(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ur(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ur(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var jr="@firebase/auth",Fr="1.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $r(t){(0,r.om)(new a.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},c=new Dt(r,i,s,u);return Yt(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new Vr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(jr,Fr,Br(t)),(0,r.KO)(jr,Fr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=300,qr=(0,i.XA)("authIdTokenMaxAge")||zr;let Wr=null;const Gr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qr)return;const i=null===n||void 0===n?void 0:n.token;Wr!==i&&(Wr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hr(t=(0,r.Sx)()){const e=(0,r.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xt(t,{popupRedirectResolver:Or,persistence:[En,Ke,Xe]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=Gr(t.toString());Me(n,e,(()=>e(n.currentUser))),Le(n,(t=>e(t)))}}const o=(0,i.Tj)("auth");return o&&Jt(n,`http://${o}`),n}function Kr(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Ut({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Kr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),$r("Browser")},7617:function(t,e,n){"use strict";n.d(e,{H9:function(){return ta},x7:function(){return La},aU:function(){return ra},BN:function(){return Ua}});n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(1795),n(4979);var r,i,s=n(3405),o=n(852),a=n(1363),u=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function a(t,e){var n=c;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function u(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var c={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new u([0|t],0>t?-1:0)})):new u([0|t],0>t?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return _(f(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new u(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return _(d(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=f(Math.pow(e,8)),r=p,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=f(Math.pow(e,s)),r=r.j(s).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function v(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function _(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new u(n,~t.h).add(g)}function w(t,e){return t.add(_(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(v(e))throw Error("division by zero");if(v(t))return new E(p,p);if(y(t))return e=T(_(t),e),new E(_(e.g),_(e.h));if(y(e))return e=T(t,_(e)),new E(_(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;0>=r.l(t);)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!v(r);){var o=s.add(r);0>=o.l(t)&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return e=w(t,i.j(e)),new E(i,e)}for(i=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=f(n),o=s.j(e);y(o)||0<o.l(t);)n-=r,s=f(n),o=s.j(e);v(s)&&(s=g),i=i.add(s),t=w(t,o)}return new E(i,t)}function I(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new u(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new u(i,t.h)}t=u.prototype,t.m=function(){if(y(this))return-_(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(v(this))return"0";if(y(this))return"-"+_(this).toString(t);for(var e=f(Math.pow(t,6)),n=this,r="";;){var i=T(n,e).g;n=w(n,i.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,v(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=w(this,t),y(t)?-1:v(t)?0:1},t.abs=function(){return y(this)?_(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.i(i))+(65535&t.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new u(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(v(this)||v(t))return p;if(y(this))return y(t)?_(this).j(_(t)):_(_(this).j(t));if(y(t))return _(this.j(_(t)));if(0>this.l(m)&&0>t.l(m))return f(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),a=t.i(i)>>>16,c=65535&t.i(i);n[2*r+2*i]+=o*c,b(n,2*r+2*i),n[2*r+2*i+1]+=s*c,b(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,b(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,b(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new u(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new u(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new u(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new u(n,this.h^t.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,i=l.Md5=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=d,r=l.Integer=u}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,f,d,p,g,m,v,y,_="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _&&_];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function c(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t,e,n){return t.call.apply(t.bind,arguments)}function E(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function T(t,e,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:E,T.apply(null,arguments)}function S(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(u(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class R{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function O(t){return/^[\s\xa0]*$/.test(t)}function x(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function N(t){return N[" "](t),t}N[" "]=function(){};var D=-1!=x().indexOf("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&-1==x().indexOf("Edge"))&&!(-1!=x().indexOf("Trident")||-1!=x().indexOf("MSIE"))&&-1==x().indexOf("Edge");function P(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}const U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<U.length;e++)n=U[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function V(t){a.setTimeout((()=>{throw t}),0)}function B(){var t=H;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ${constructor(){this.h=this.g=null}add(t,e){const n=z.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var z=new R((()=>new q),(t=>t.reset()));class q{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let W,G=!1,H=new $,K=()=>{const t=a.Promise.resolve(void 0);W=()=>{t.then(Q)}};var Q=()=>{for(var t;t=B();){try{t.h.call(t.g)}catch(n){V(n)}var e=z;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}G=!1};function X(){this.s=this.s,this.C=this.C}function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(D){t:{try{N(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}C(Z,Y);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.da=this.fa=!1}function it(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new rt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),ct={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[et]?t.K(e,n,c(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=c(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ut]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)J||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[et]?t.L(e,n,c(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=c(r)?!!r.capture:!!r,n=wt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(it(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ut]=null)):it(t)}}}function mt(t){return t in ct?ct[t]:ct[t]="on"+t}function vt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ut],t instanceof st?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function bt(){X.call(this),this.i=new st(this),this.M=this,this.F=null}function Et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(r,t),j(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.fa&&ot(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}function It(t,e,n){if("function"===typeof t)n&&(t=T(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=T(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function St(t){t.g=It((()=>{t.g=null,t.i&&(t.i=!1,St(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}C(bt,X),bt.prototype[et]=!0,bt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.F=null},bt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class Ct extends X{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:St(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(t){X.call(this),this.h=t,this.g={}}C(At,X);var kt=[];function Rt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}At.prototype.N=function(){At.aa.N.call(this),Rt(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=a.JSON.stringify,xt=a.JSON.parse,Nt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Dt(){}function Pt(t){return t.h||(t.h=t.i())}function Lt(){}Dt.prototype.h=null;var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ut(){Y.call(this,"d")}function jt(){Y.call(this,"c")}C(Ut,Y),C(jt,Y);var Ft={},Vt=null;function Bt(){return Vt=Vt||new bt}function $t(t){Y.call(this,Ft.La,t)}function zt(t){const e=Bt();Et(e,new $t(e))}function qt(t,e){Y.call(this,Ft.STAT_EVENT,t),this.stat=e}function Wt(t){const e=Bt();Et(e,new qt(e,t))}function Gt(t,e){Y.call(this,Ft.Ma,t),this.size=e}function Ht(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Kt(){this.g=!0}function Qt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ot(n)}catch(a){return e}}Ft.La="serverreachability",C($t,Y),Ft.STAT_EVENT="statevent",C(qt,Y),Ft.Ma="timingevent",C(Gt,Y),Kt.prototype.xa=function(){this.g=!1},Kt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function re(){}function ie(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new se}function se(){this.i=null,this.g="",this.h=!1}C(re,Dt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},te=new re;var oe={},ae={};function ue(t,e,n){t.L=1,t.v=Ue(Ne(e)),t.m=n,t.P=!0,ce(t,null)}function ce(t,e){t.F=Date.now(),fe(t),t.A=Ne(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Xe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new se,t.g=zn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new Ct(T(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(kt[0]=i.toString()),i=kt);for(var s=0;s<i.length;s++){var o=lt(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?M(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),zt(),Qt(t.i,t.u,t.A,t.l,t.R,t.m)}function le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ae:(n=Number(e.substring(n,r)),isNaN(n)?oe:(r+=1,r+n>e.length?ae:(e=e.slice(r,r+n),t.C=r+n,e)))}function fe(t){t.S=Date.now()+t.I,de(t,t.I)}function de(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ht(T(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ge(t){0==t.j.G||t.J||jn(t.j,t)}function me(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,Rt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ve(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Ee(n.h,t)))if(!t.K&&Ee(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Un(n),Cn(n)}Pn(n),Wt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ht(T(n.Za,n),6e3));if(1>=be(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else Vn(n,11)}else if((t.K||n.g==t)&&Un(n),!O(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const e=c[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=c[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Te(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Me(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=$n(r,r.J?r.ia:null,r.W),o.K){Ie(r.h,o);var a=o,u=r.L;u&&(a.I=u),a.B&&(pe(a),fe(a)),r.g=o}else Dn(r);0<n.i.length&&kn(n)}else"stop"!=c[0]&&"close"!=c[0]||Vn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vn(n,7):Sn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}zt(4)}catch(c){}}ie.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==wn(t)?e.j():this.Y(t)},ie.prototype.Y=function(t){try{if(t==this.g)t:{const f=wn(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=f||7==e||zt(8==e||0>=d?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(le(this)){var r=bn(this.g);t="";var i=r.length,s=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){me(this),ge(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(s&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Xt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(u)){var l=u;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,Wt(12),me(this),ge(this);break t}Yt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ve(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=he(this,o),t==ae){4==f&&(this.s=4,Wt(14),n=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}if(t==oe){this.s=4,Wt(15),Yt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Yt(this.i,this.l,t,null),ve(this,t)}if(le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,Wt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Ln(h),h.M=!0,Wt(11))}}else Yt(this.i,this.l,o,"[Invalid Chunked Response]"),me(this),ge(this)}else Yt(this.i,this.l,o,null),ve(this,o);4==f&&me(this),this.o&&!this.J&&(4==f?jn(this.j,this):(this.o=!1,fe(this)))}else En(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Wt(12)):(this.s=0,Wt(13)),me(this),ge(this)}}}catch(b){}},ie.prototype.cancel=function(){this.J=!0,me(this)},ie.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(zt(),Wt(17)),me(this),this.s=2,ge(this)):de(this,this.S-t)};var ye=class{constructor(t,e){this.g=t,this.map=e}};function _e(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function we(t){return!!t.h||!!t.g&&t.g.size>=t.j}function be(t){return t.h?1:t.g?t.g.size:0}function Ee(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Te(t,e){t.g?t.g.add(e):t.h=e}function Ie(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Se(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Ce(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ae(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(u(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ke(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ae(t),r=Ce(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}_e.prototype.cancel=function(){if(this.i=Se(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Re=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof xe){this.h=t.h,De(this,t.j),this.o=t.o,this.g=t.g,Pe(this,t.s),this.l=t.l;var e=t.i,n=new Ge;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Le(this,n),this.m=t.m}else t&&(e=String(t).match(Re))?(this.h=!1,De(this,e[1]||"",!0),this.o=je(e[2]||""),this.g=je(e[3]||"",!0),Pe(this,e[4]),this.l=je(e[5]||"",!0),Le(this,e[6]||"",!0),this.m=je(e[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}function Ne(t){return new xe(t)}function De(t,e,n){t.j=n?je(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Le(t,e,n){e instanceof Ge?(t.i=e,Je(t.i,t.h)):(n||(e=Fe(e,qe)),t.i=new Ge(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Ue(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function je(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ve),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ve(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}xe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fe(e,Be,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Fe(e,Be,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Fe(n,"/"==n.charAt(0)?ze:$e,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Fe(n,We)),t.join("")};var Be=/[#\/\?@]/g,$e=/[#\?:]/g,ze=/[#\?]/g,qe=/[#\?@]/g,We=/#/g;function Ge(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function He(t){t.g||(t.g=new Map,t.h=0,t.i&&Oe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ke(t,e){He(t),e=Ye(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qe(t,e){return He(t),e=Ye(t,e),t.g.has(e)}function Xe(t,e,n){Ke(t,e),0<n.length&&(t.i=null,t.g.set(Ye(t,e),A(n)),t.h+=n.length)}function Ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(He(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ke(this,e),Xe(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Kt;if(a.Image){const r=new Image;r.onload=S(en,n,"TestLoadImage: loaded",!0,e,r),r.onerror=S(en,n,"TestLoadImage: error",!1,e,r),r.onabort=S(en,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=S(en,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function tn(t,e){const n=new Kt,r=new AbortController,i=setTimeout((()=>{r.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function nn(){this.g=new Nt}function rn(t,e,n){const r=n||"";try{ke(t,(function(t,n){let i=t;c(t)&&(i=Ot(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sn(t){this.l=t.Ub||null,this.j=t.eb||!1}function on(t,e){bt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function un(t){t.readyState=4,t.l=null,t.j=null,t.v=null,cn(t)}function cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ln(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ln(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Me(t,e,n))}function fn(t){bt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Ge.prototype,t.add=function(t,e){He(this),this.i=null,t=Ye(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){He(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){He(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){He(this);let e=[];if("string"===typeof t)Qe(this,t)&&(e=e.concat(this.g.get(Ye(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return He(this),this.i=null,t=Ye(this,t),Qe(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},C(sn,Dt),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(t){return function(){return t}}({}),C(on,bt),t=on.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,cn(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,un(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?un(this):cn(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,un(this))},t.Qa=function(t){this.g&&(this.response=t,un(this))},t.ga=function(){this.g&&un(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),C(fn,bt);var dn=/^https?$/i,pn=["POST","PUT"];function gn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,mn(t),yn(t)}function mn(t){t.A||(t.A=!0,Et(t,"complete"),Et(t,"error"))}function vn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=wn(t)||2!=t.Z()))if(t.u&&4==wn(t))It(t.Ea,0,t);else if(Et(t,"readystatechange"),4==wn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.D).match(Re)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!dn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<wn(t)?t.g.statusText:""}catch(u){s=""}t.l=s+" ["+t.Z()+"]",mn(t)}}finally{yn(t)}}}function yn(t,e){if(t.g){_n(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function _n(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function wn(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(I){return null}}function En(t){const e={};t=(t.g&&2<=wn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(O(t[r]))continue;var n=F(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}L(e,(function(t){return t.join(", ")}))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function In(t){this.Aa=0,this.i=[],this.j=new Kt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,t),this.cb=Tn("retryDelaySeedMs",1e4,t),this.Wa=Tn("forwardChannelMaxRetries",2,t),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new _e(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Sn(t){if(An(t),3==t.G){var e=t.U++,n=Ne(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),xn(t,n),e=new ie(t,t.j,e),e.L=2,e.v=Ue(Ne(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=zn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),fe(e)}Bn(t)}function Cn(t){t.g&&(Ln(t),t.g.cancel(),t.g=null)}function An(t){Cn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Un(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function kn(t){if(!we(t.h)&&!t.s){t.s=!0;var e=t.Ga;W||K(),G||(W(),G=!0),H.add(e,t),t.B=0}}function Rn(t,e){return!(be(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Ht(T(t.Ga,t,e),Fn(t,t.B)),t.B++,!0))}function On(t,e){var n;n=e?e.l:t.U++;const r=Ne(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.T),xn(t,r),t.m&&t.o&&hn(r,t.m,t.o),n=new ie(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Nn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Te(t.h,n),ue(n,r,e)}function xn(t,e){t.H&&P(t.H,(function(t,n){Me(e,n,t)})),t.l&&ke({},(function(t,n){Me(e,n,t)}))}function Nn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?T(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{rn(a,t,"req"+n+"_")}catch(b){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Dn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;W||K(),G||(W(),G=!0),H.add(e,t),t.v=0}}function Pn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ht(T(t.Fa,t),Fn(t,t.v)),t.v++,!0)}function Ln(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Mn(t){t.g=new ie(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Ne(t.qa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.T),Me(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Me(e,"TO",t.ja),Me(e,"TYPE","xmlhttp"),xn(t,e),t.m&&t.o&&hn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Ue(Ne(e)),n.m=null,n.P=!0,ce(n,t)}function Un(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function jn(t,e){var n=null;if(t.g==e){Un(t),Ln(t),t.g=null;var r=2}else{if(!Ee(t.h,e))return;n=e.D,Ie(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=Bt(),Et(r,new Gt(r,n)),kn(t)}else Dn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&Rn(t,e)||2==r&&Pn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}function Fn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Vn(t,e){if(t.j.info("Error code "+e),2==e){var n=T(t.fb,t),r=t.Xa;const e=!r;r=new xe(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||De(r,"https"),Ue(r),e?Ze(r.toString(),n):tn(r.toString(),n)}else Wt(2);t.G=0,t.l&&t.l.sa(e),Bn(t),An(t)}function Bn(t){if(t.G=0,t.ka=[],t.l){const e=Se(t.h);0==e.length&&0==t.i.length||(k(t.ka,e),k(t.ka,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ra()}}function $n(t,e,n){var r=n instanceof xe?Ne(n):new xe(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Pe(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new xe(null);r&&De(s,r),e&&(s.g=e),i&&Pe(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.ya,n&&e&&Me(r,n,e),Me(r,"VER",t.la),xn(t,r),r}function zn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new fn(new sn({eb:n})):new fn(t.pa),e.Ha(t.J),e}function qn(){}function Wn(){}function Gn(t,e){bt.call(this),this.g=new In(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!O(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function Hn(t){Ut.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Kn(){jt.call(this),this.status=1}function Qn(t){this.g=t}t=fn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Pt(this.o):Pt(te),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void gn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_n(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){gn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),yn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),fn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vn(this):this.bb())},t.bb=function(){vn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=In.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){Wt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),kn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ie(this,this.j,t);let s=this.o;if(this.S&&(s?(s=M(s),j(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Nn(this,i,e),n=Ne(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),xn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ln(s)))+"&"+e:this.m&&hn(n,this.m,s)),Te(this.h,i),this.Ua&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),i.T=!0,ue(i,n,null)):ue(i,n,e),this.G=2}}else 3==this.G&&(t?On(this,t):0==this.i.length||we(this.h)||On(this))},t.Fa=function(){if(this.u=null,Mn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ht(T(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Wt(10),Cn(this),Mn(this))},t.Za=function(){null!=this.C&&(this.C=null,Cn(this),Pn(this),Wt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=qn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Wn.prototype.g=function(t,e){return new Gn(t,e)},C(Gn,bt),Gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){Sn(this.g)},Gn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Ot(t),t=n);e.i.push(new ye(e.Ya++,t)),3==e.G&&kn(e)},Gn.prototype.N=function(){this.g.l=null,delete this.j,Sn(this.g),delete this.g,Gn.aa.N.call(this)},C(Hn,Ut),C(Kn,jt),C(Qn,qn),Qn.prototype.ua=function(){Et(this.g,"a")},Qn.prototype.ta=function(t){Et(this.g,new Hn(t))},Qn.prototype.sa=function(t){Et(this.g,new Kn)},Qn.prototype.ra=function(){Et(this.g,"b")},Wn.prototype.createWebChannel=Wn.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,y=w.createWebChannelTransport=function(){return new Wn},v=w.getStatEventTarget=function(){return Bt()},m=w.Event=Ft,g=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,p=w.ErrorCode=ee,ne.COMPLETE="complete",d=w.EventType=ne,Lt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",bt.prototype.listen=bt.prototype.K,f=w.WebChannel=Lt,w.FetchXmlHttpFactory=sn,fn.prototype.listenOnce=fn.prototype.L,fn.prototype.getLastError=fn.prototype.Ka,fn.prototype.getLastErrorCode=fn.prototype.Ba,fn.prototype.getStatus=fn.prototype.Z,fn.prototype.getResponseJson=fn.prototype.Oa,fn.prototype.getResponseText=fn.prototype.oa,fn.prototype.send=fn.prototype.ea,fn.prototype.setWithCredentials=fn.prototype.Ha,h=w.XhrIo=fn}).apply("undefined"!==typeof _?_:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let T="11.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new a.Vy("@firebase/firestore");function S(){return I.logLevel}function C(t,...e){if(I.logLevel<=a.$b.DEBUG){const n=e.map(R);I.debug(`Firestore (${T}): ${t}`,...n)}}function A(t,...e){if(I.logLevel<=a.$b.ERROR){const n=e.map(R);I.error(`Firestore (${T}): ${t}`,...n)}}function k(t,...e){if(I.logLevel<=a.$b.WARN){const n=e.map(R);I.warn(`Firestore (${T}): ${t}`,...n)}}function R(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t="Unexpected state"){const e=`FIRESTORE (${T}) INTERNAL ASSERTION FAILED: `+t;throw A(e),new Error(e)}function x(t,e){t||O()}function N(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends u.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class U{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(E.UNAUTHENTICATED)))}shutdown(){}}class j{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class F{constructor(t){this.t=t,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){x(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new L;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new L,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new L)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(x("string"==typeof e.accessToken),new M(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return x(null===t||"string"==typeof t),new E(t)}}class V{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=E.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class B{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new V(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(E.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ${constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){x(void 0===this.o);const n=t=>{null!=t.error&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,C("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(x("string"==typeof t.token),this.R=t.token,new $(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=q(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function G(t,e){return t<e?-1:t>e?1:0}function H(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new K(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(t){return new Q(t)}static min(){return new Q(new K(0,0))}static max(){return new Q(new K(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(),void 0===n?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===X.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof X?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends X{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const J=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends X{construct(t,e,n){return new Z(t,e,n)}static isValidIdentifier(t){return J.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new P(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new P(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(e)}static emptyPath(){return new Z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(Y.fromString(t))}static fromName(t){return new tt(Y.fromString(t).popFirst(5))}static empty(){return new tt(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Y.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new Y(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}et.UNKNOWN_ID=-1;function nt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(1e9===r?new K(n+1,0):new K(n,r));return new it(i,tt.empty(),e)}function rt(t){return new it(t.readTime,t.key,-1)}class it{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new it(Q.min(),tt.empty(),-1)}static max(){return new it(Q.max(),tt.empty(),-1)}}function st(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=tt.comparator(t.documentKey,e.documentKey),0!==n?n:G(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ot="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class at{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==ot)throw t;C("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ct(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ct?e:ct.resolve(e)}catch(t){return ct.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ct.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ct.reject(e)}static resolve(t){return new ct(((e,n)=>{e(t)}))}static reject(t){return new ct(((e,n)=>{n(t)}))}static waitFor(t){return new ct(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=ct.resolve(!1);for(const n of t)e=e.next((t=>t?ct.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ct(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new ct(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ht(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function dt(t){return null==t}function pt(t){return 0===t&&1/t==-1/0}function gt(t){return"number"==typeof t&&Number.isInteger(t)&&!pt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=yt(e)),e=vt(t.get(n),e);return yt(e)}function vt(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function yt(t){return t+""}ft.oe=-1;const _t=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bt=wt,Et=[...bt,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function It(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function St(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){this.comparator=t,this.root=e||kt.EMPTY}insert(t,e){return new Ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(t){return new Ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,kt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new At(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new At(this.root,t,this.comparator,!1)}getReverseIterator(){return new At(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new At(this.root,t,this.comparator,!0)}}class At{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class kt{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:kt.RED,this.left=null!=r?r:kt.EMPTY,this.right=null!=i?i:kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new kt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return kt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1,kt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,i){return this}insert(t,e,n){return new kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt{constructor(t){this.comparator=t,this.data=new Ct(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ot(this.data.getIterator())}getIteratorFrom(t){return new Ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Rt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Rt(this.comparator);return e.data=t,e}}class Ot{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new xt([])}unionWith(t){let e=new Rt(Z.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return H(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Nt("Invalid base64 string: "+t):t}}(t);return new Dt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Pt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(t){if(x(!!t),"string"==typeof t){let e=0;const n=Pt.exec(t);if(x(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Mt(t.seconds),nanos:Mt(t.nanos)}}function Mt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ut(t){return"string"==typeof t?Dt.fromBase64String(t):Dt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ft(t){const e=t.mapValue.fields.__previous_value__;return jt(e)?Ft(e):e}function Vt(t){const e=Lt(t.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,n,r,i,s,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class $t{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $t("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $t&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jt(t)?4:oe(t)?9007199254740991:ie(t)?10:11:O()}function Wt(t,e){if(t===e)return!0;const n=qt(t);if(n!==qt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vt(t).isEqual(Vt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Lt(t.timestampValue),r=Lt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ut(t.bytesValue).isEqual(Ut(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Mt(t.geoPointValue.latitude)===Mt(e.geoPointValue.latitude)&&Mt(t.geoPointValue.longitude)===Mt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Mt(t.integerValue)===Mt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Mt(t.doubleValue),r=Mt(e.doubleValue);return n===r?pt(n)===pt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return H(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Tt(n)!==Tt(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Wt(n[i],r[i])))return!1;return!0}(t,e);default:return O()}}function Gt(t,e){return void 0!==(t.values||[]).find((t=>Wt(t,e)))}function Ht(t,e){if(t===e)return 0;const n=qt(t),r=qt(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Mt(t.integerValue||t.doubleValue),r=Mt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Kt(t.timestampValue,e.timestampValue);case 4:return Kt(Vt(t),Vt(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ut(t),r=Ut(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=G(n[i],r[i]);if(0!==t)return t}return G(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=G(Mt(t.latitude),Mt(e.latitude));return 0!==n?n:G(Mt(t.longitude),Mt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qt(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},u=null===(n=o.value)||void 0===n?void 0:n.arrayValue,c=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=G((null===(i=null==u?void 0:u.values)||void 0===i?void 0:i.length)||0,(null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:Qt(u,c)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===zt.mapValue&&e===zt.mapValue)return 0;if(t===zt.mapValue)return 1;if(e===zt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=G(r[o],s[o]);if(0!==t)return t;const e=Ht(n[r[o]],i[s[o]]);if(0!==e)return e}return G(r.length,s.length)}(t.mapValue,e.mapValue);default:throw O()}}function Kt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return G(t,e);const n=Lt(t),r=Lt(e),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function Qt(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ht(n[i],r[i]);if(t)return t}return G(n.length,r.length)}function Xt(t){return Yt(t)}function Yt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Lt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ut(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return tt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Yt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Yt(t.fields[i])}`;return n+"}"}(t.mapValue):O()}function Jt(t){switch(qt(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ft(t);return e?16+Jt(e):16;case 5:return 2*t.stringValue.length;case 6:return Ut(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Jt(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return It(t.fields,((t,n)=>{e+=t.length+Jt(n)})),e}(t.mapValue);default:throw O()}}function Zt(t){return!!t&&"integerValue"in t}function te(t){return!!t&&"arrayValue"in t}function ee(t){return!!t&&"nullValue"in t}function ne(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function re(t){return!!t&&"mapValue"in t}function ie(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function se(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return It(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=se(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=se(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oe(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae{constructor(t){this.value=t}static empty(){return new ae({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!re(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=se(e)}setAll(t){let e=Z.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=se(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());re(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];re(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){It(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ae(se(this.value))}}function ue(t){const e=[];return It(t.fields,((t,n)=>{const r=new Z([t]);if(re(n)){const t=ue(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new xt(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ce{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ce(t,0,Q.min(),Q.min(),Q.min(),ae.empty(),0)}static newFoundDocument(t,e,n,r){return new ce(t,1,e,Q.min(),n,r,0)}static newNoDocument(t,e){return new ce(t,2,e,Q.min(),Q.min(),ae.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,Q.min(),Q.min(),ae.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ae.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.position=t,this.inclusive=e}}function he(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):Ht(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function fe(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e="asc"){this.field=t,this.dir=e}}function pe(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{}class me extends ge{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ie(t,e,n):"array-contains"===e?new ke(t,n):"in"===e?new Re(t,n):"not-in"===e?new Oe(t,n):"array-contains-any"===e?new xe(t,n):new me(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Se(t,n):new Ce(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ht(e,this.value)):null!==e&&qt(this.value)===qt(e)&&this.matchesComparison(Ht(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends ge{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ve(t,e)}matches(t){return ye(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ye(t){return"and"===t.op}function _e(t){return we(t)&&ye(t)}function we(t){for(const e of t.filters)if(e instanceof ve)return!1;return!0}function be(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+Xt(t.value);if(_e(t))return t.filters.map((t=>be(t))).join(",");{const e=t.filters.map((t=>be(t))).join(",");return`${t.op}(${e})`}}function Ee(t,e){return t instanceof me?function(t,e){return e instanceof me&&t.op===e.op&&t.field.isEqual(e.field)&&Wt(t.value,e.value)}(t,e):t instanceof ve?function(t,e){return e instanceof ve&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Ee(n,e.filters[r])),!0)}(t,e):void O()}function Te(t){return t instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${Xt(t.value)}`}(t):t instanceof ve?function(t){return t.op.toString()+" {"+t.getFilters().map(Te).join(" ,")+"}"}(t):"Filter"}class Ie extends me{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Se extends me{constructor(t,e){super(t,"in",e),this.keys=Ae("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ce extends me{constructor(t,e){super(t,"not-in",e),this.keys=Ae("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ae(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>tt.fromName(t.referenceValue)))}class ke extends me{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return te(e)&&Gt(e.arrayValue,this.value)}}class Re extends me{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Gt(this.value.arrayValue,e)}}class Oe extends me{constructor(t,e){super(t,"not-in",e)}matches(t){if(Gt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Gt(this.value.arrayValue,e)}}class xe extends me{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!te(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Gt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function De(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ne(t,e,n,r,i,s,o)}function Pe(t){const e=N(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>be(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),dt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xt(t))).join(",")),e.ue=t}return e.ue}function Le(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pe(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ee(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fe(t.startAt,e.startAt)&&fe(t.endAt,e.endAt)}function Me(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function je(t,e,n,r,i,s,o,a){return new Ue(t,e,n,r,i,s,o,a)}function Fe(t){return new Ue(t)}function Ve(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Be(t){return null!==t.collectionGroup}function $e(t){const e=N(t);if(null===e.ce){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Rt(Z.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new de(r,n))})),t.has(Z.keyField().canonicalString())||e.ce.push(new de(Z.keyField(),n))}return e.ce}function ze(t){const e=N(t);return e.le||(e.le=qe(e,$e(t))),e.le}function qe(t,e){if("F"===t.limitType)return De(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new de(t.field,e)}));const n=t.endAt?new le(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new le(t.startAt.position,t.startAt.inclusive):null;return De(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function We(t,e,n){return new Ue(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ge(t,e){return Le(ze(t),ze(e))&&t.limitType===e.limitType}function He(t){return`${Pe(ze(t))}|lt:${t.limitType}`}function Ke(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Te(t))).join(", ")}]`),dt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xt(t))).join(",")),`Target(${e})`}(ze(t))}; limitType=${t.limitType})`}function Qe(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of $e(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=he(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,$e(t),e))&&!(t.endAt&&!function(t,e,n){const r=he(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,$e(t),e))}(t,e)}function Xe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ye(t){return(e,n)=>{let r=!1;for(const i of $e(t)){const t=Je(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Je(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ht(r,i):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){It(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return St(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Ct(tt.comparator);function en(){return tn}const nn=new Ct(tt.comparator);function rn(...t){let e=nn;for(const n of t)e=e.insert(n.key,n);return e}function sn(t){let e=nn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function on(){return un()}function an(){return un()}function un(){return new Ze((t=>t.toString()),((t,e)=>t.isEqual(e)))}const cn=new Ct(tt.comparator),ln=new Rt(tt.comparator);function hn(...t){let e=ln;for(const n of t)e=e.add(n);return e}const fn=new Rt(G);function dn(){return fn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pt(e)?"-0":e}}function gn(t){return{integerValue:""+t}}function mn(t,e){return gt(e)?gn(e):pn(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this._=void 0}}function yn(t,e,n){return t instanceof bn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&jt(e)&&(e=Ft(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof En?Tn(t,e):t instanceof In?Sn(t,e):function(t,e){const n=wn(t,e),r=An(n)+An(t.Pe);return Zt(n)&&Zt(t.Pe)?gn(r):pn(t.serializer,r)}(t,e)}function _n(t,e,n){return t instanceof En?Tn(t,e):t instanceof In?Sn(t,e):n}function wn(t,e){return t instanceof Cn?function(t){return Zt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class bn extends vn{}class En extends vn{constructor(t){super(),this.elements=t}}function Tn(t,e){const n=kn(e);for(const r of t.elements)n.some((t=>Wt(t,r)))||n.push(r);return{arrayValue:{values:n}}}class In extends vn{constructor(t){super(),this.elements=t}}function Sn(t,e){let n=kn(e);for(const r of t.elements)n=n.filter((t=>!Wt(t,r)));return{arrayValue:{values:n}}}class Cn extends vn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function An(t){return Mt(t.integerValue||t.doubleValue)}function kn(t){return te(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof En&&e instanceof En||t instanceof In&&e instanceof In?H(t.elements,e.elements,Wt):t instanceof Cn&&e instanceof Cn?Wt(t.Pe,e.Pe):t instanceof bn&&e instanceof bn}(t.transform,e.transform)}class On{constructor(t,e){this.version=t,this.transformResults=e}}class xn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xn}static exists(t){return new xn(void 0,t)}static updateTime(t){return new xn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Dn{}function Pn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new qn(t.key,xn.none()):new Fn(t.key,t.data,xn.none());{const n=t.data,r=ae.empty();let i=new Rt(Z.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Vn(t.key,r,new xt(i.toArray()),xn.none())}}function Ln(t,e,n){t instanceof Fn?function(t,e,n){const r=t.value.clone(),i=$n(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Vn?function(t,e,n){if(!Nn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=$n(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Bn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Mn(t,e,n,r){return t instanceof Fn?function(t,e,n,r){if(!Nn(t.precondition,e))return n;const i=t.value.clone(),s=zn(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vn?function(t,e,n,r){if(!Nn(t.precondition,e))return n;const i=zn(t.fieldTransforms,r,e),s=e.data;return s.setAll(Bn(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Nn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Un(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=wn(r.transform,t||null);null!=i&&(null===n&&(n=ae.empty()),n.set(r.field,i))}return n||null}function jn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&H(t,e,((t,e)=>Rn(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fn extends Dn{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vn extends Dn{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function $n(t,e,n){const r=new Map;x(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_n(o,a,n[i]))}return r}function zn(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,yn(t,s,e))}return r}class qn extends Dn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wn extends Dn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ln(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=an();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Pn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Q.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),hn())}isEqual(t){return this.batchId===t.batchId&&H(this.mutations,t.mutations,((t,e)=>jn(t,e)))&&H(this.baseMutations,t.baseMutations,((t,e)=>jn(t,e)))}}class Hn{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){x(t.mutations.length===n.length);let r=function(){return cn}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hn(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn,Yn;function Jn(t){switch(t){default:return O();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Zn(t){if(void 0===t)return A("GRPC error has no .code"),D.UNKNOWN;switch(t){case Xn.OK:return D.OK;case Xn.CANCELLED:return D.CANCELLED;case Xn.UNKNOWN:return D.UNKNOWN;case Xn.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Xn.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Xn.INTERNAL:return D.INTERNAL;case Xn.UNAVAILABLE:return D.UNAVAILABLE;case Xn.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Xn.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Xn.NOT_FOUND:return D.NOT_FOUND;case Xn.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Xn.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Xn.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Xn.ABORTED:return D.ABORTED;case Xn.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Xn.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Xn.DATA_LOSS:return D.DATA_LOSS;default:return O()}}(Yn=Xn||(Xn={}))[Yn.OK=0]="OK",Yn[Yn.CANCELLED=1]="CANCELLED",Yn[Yn.UNKNOWN=2]="UNKNOWN",Yn[Yn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yn[Yn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yn[Yn.NOT_FOUND=5]="NOT_FOUND",Yn[Yn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yn[Yn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yn[Yn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yn[Yn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yn[Yn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yn[Yn.ABORTED=10]="ABORTED",Yn[Yn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yn[Yn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yn[Yn.INTERNAL=13]="INTERNAL",Yn[Yn.UNAVAILABLE=14]="UNAVAILABLE",Yn[Yn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let tr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new r([4294967295,4294967295],0);function rr(t){const e=er().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function ir(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class sr{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new or(`Invalid padding: ${e}`);if(n<0)throw new or(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new or(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new or(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=r.fromNumber(this.Te)}Ee(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(nr)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=rr(t),[n,r]=ir(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,r,i);if(!this.de(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new sr(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=rr(t),[n,r]=ir(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,r,i);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ur.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ar(Q.min(),r,new Ct(G),en(),hn())}}class ur{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ur(n,e,hn(),hn(),hn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class lr{constructor(t,e){this.targetId=t,this.me=e}}class hr{constructor(t,e,n=Dt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class fr{constructor(){this.fe=0,this.ge=gr(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=hn(),e=hn(),n=hn();return this.ge.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:O()}})),new ur(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=gr()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,x(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dr{constructor(t){this.Le=t,this.Be=new Map,this.ke=en(),this.qe=pr(),this.Qe=pr(),this.Ke=new Ct(G)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:O()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.me.count,r=this.Ye(e);if(r){const i=r.target;if(Me(i))if(0===n){const t=new tt(i.path);this.We(e,t,ce.newNoDocument(t,Q.min()))}else x(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),i=n?this.et(n,t,r):1;if(0!==i){this.He(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==tr||tr.tt(function(t,e,n,r,i){var s,o,a,u,c,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(u=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==f?void 0:f.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.me,this.Le.nt(),n,i))}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ut(n).toUint8Array()}catch(t){if(t instanceof Nt)return k("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new sr(s,r,i)}catch(t){return k(t instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.Be.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&Me(i.target)){const e=new tt(i.target.path);this.st(e).has(r)||this.ot(r,e)||this.We(r,e,ce.newNoDocument(e,t))}n.be&&(e.set(r,n.ve()),n.Ce())}}));let n=hn();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const r=new ar(t,e,this.Ke,this.ke,n);return this.ke=en(),this.qe=pr(),this.Qe=pr(),this.Ke=new Ct(G),r}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.ot(t,e)?r.Fe(e,1):r.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new fr,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new Rt(G),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Rt(G),this.qe=this.qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||C("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new fr),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function pr(){return new Ct(tt.comparator)}function gr(){return new Ct(tt.comparator)}const mr=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),vr=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),yr=(()=>{const t={and:"AND",or:"OR"};return t})();class _r{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function wr(t,e){return t.useProto3Json||dt(e)?e:{value:e}}function br(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Er(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tr(t,e){return br(t,e.toTimestamp())}function Ir(t){return x(!!t),Q.fromTimestamp(function(t){const e=Lt(t);return new K(e.seconds,e.nanos)}(t))}function Sr(t,e){return Cr(t,e).canonicalString()}function Cr(t,e){const n=function(t){return new Y(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Ar(t){const e=Y.fromString(t);return x(Xr(e)),e}function kr(t,e){return Sr(t.databaseId,e.path)}function Rr(t,e){const n=Ar(e);if(n.get(1)!==t.databaseId.projectId)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(Dr(n))}function Or(t,e){return Sr(t.databaseId,e)}function xr(t){const e=Ar(t);return 4===e.length?Y.emptyPath():Dr(e)}function Nr(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Dr(t){return x(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Pr(t,e,n){return{name:kr(t,e),fields:n.value.mapValue.fields}}function Lr(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(x(void 0===e||"string"==typeof e),Dt.fromBase64String(e||"")):(x(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Dt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?D.UNKNOWN:Zn(t.code);return new P(e,t.message||"")}(o);n=new hr(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rr(t,r.document.name),s=Ir(r.document.updateTime),o=r.document.createTime?Ir(r.document.createTime):Q.min(),a=new ae({mapValue:{fields:r.document.fields}}),u=ce.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new cr(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rr(t,r.document),s=r.readTime?Ir(r.readTime):Q.min(),o=ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rr(t,r.document),s=r.removedTargetIds||[];n=new cr([],s,i,null)}else{if(!("filter"in e))return O();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Qn(r,i),o=t.targetId;n=new lr(o,s)}}return n}function Mr(t,e){let n;if(e instanceof Fn)n={update:Pr(t,e.key,e.value)};else if(e instanceof qn)n={delete:kr(t,e.key)};else if(e instanceof Vn)n={update:Pr(t,e.key,e.data),updateMask:Qr(e.fieldMask)};else{if(!(e instanceof Wn))return O();n={verify:kr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof bn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof En)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof In)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Cn)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw O()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Tr(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:O()}(t,e.precondition)),n}function Ur(t,e){return t&&t.length>0?(x(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ir(t.updateTime):Ir(e);return n.isEqual(Q.min())&&(n=Ir(e)),new On(n,t.transformResults||[])}(t,e)))):[]}function jr(t,e){return{documents:[Or(t,e.path)]}}function Fr(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Or(t,i);const s=function(t){if(0!==t.length)return Kr(ve.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Gr(t.field),direction:zr(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wr(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ct:n,parent:i}}function Vr(t){let e=xr(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){x(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=$r(t);return e instanceof ve&&_e(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new de(Hr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,dt(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new le(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new le(n,e)}(n.endAt)),je(e,i,o,s,a,"F",u,c)}function Br(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function $r(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Hr(t.unaryFilter.field);return me.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Hr(t.unaryFilter.field);return me.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hr(t.unaryFilter.field);return me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Hr(t.unaryFilter.field);return me.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):void 0!==t.fieldFilter?function(t){return me.create(Hr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ve.create(t.compositeFilter.filters.map((t=>$r(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))}(t):O()}function zr(t){return mr[t]}function qr(t){return vr[t]}function Wr(t){return yr[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Hr(t){return Z.fromServerFormat(t.fieldPath)}function Kr(t){return t instanceof me?function(t){if("=="===t.op){if(ne(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NAN"}};if(ee(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ne(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NOT_NAN"}};if(ee(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(t.field),op:qr(t.op),value:t.value}}}(t):t instanceof ve?function(t){const e=t.getFilters().map((t=>Kr(t)));return 1===e.length?e[0]:{compositeFilter:{op:Wr(t.op),filters:e}}}(t):O()}function Qr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Xr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e,n,r,i=Q.min(),s=Q.min(),o=Dt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this.ht=t}}function Zr(t){const e=Vr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?We(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){}Et(t,e){this.dt(t,e),e.At()}dt(t,e){if("nullValue"in t)this.Rt(e,5);else if("booleanValue"in t)this.Rt(e,10),e.Vt(t.booleanValue?1:0);else if("integerValue"in t)this.Rt(e,15),e.Vt(Mt(t.integerValue));else if("doubleValue"in t){const n=Mt(t.doubleValue);isNaN(n)?this.Rt(e,13):(this.Rt(e,15),pt(n)?e.Vt(0):e.Vt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Rt(e,20),"string"==typeof n&&(n=Lt(n)),e.ft(`${n.seconds||""}`),e.Vt(n.nanos||0)}else if("stringValue"in t)this.gt(t.stringValue,e),this.yt(e);else if("bytesValue"in t)this.Rt(e,30),e.wt(Ut(t.bytesValue)),this.yt(e);else if("referenceValue"in t)this.St(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Rt(e,45),e.Vt(n.latitude||0),e.Vt(n.longitude||0)}else"mapValue"in t?oe(t)?this.Rt(e,Number.MAX_SAFE_INTEGER):ie(t)?this.bt(t.mapValue,e):(this.Dt(t.mapValue,e),this.yt(e)):"arrayValue"in t?(this.vt(t.arrayValue,e),this.yt(e)):O()}gt(t,e){this.Rt(e,25),this.Ct(t,e)}Ct(t,e){e.ft(t)}Dt(t,e){const n=t.fields||{};this.Rt(e,55);for(const r of Object.keys(n))this.gt(r,e),this.dt(n[r],e)}bt(t,e){var n,r;const i=t.fields||{};this.Rt(e,53);const s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Rt(e,15),e.Vt(Mt(o)),this.gt(s,e),this.dt(i[s],e)}vt(t,e){const n=t.values||[];this.Rt(e,50);for(const r of n)this.dt(r,e)}St(t,e){this.Rt(e,37),tt.fromName(t).path.forEach((t=>{this.Rt(e,60),this.Ct(t,e)}))}Rt(t,e){t.Vt(e)}yt(t){t.Vt(2)}}ti.Ft=new ti;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(){this.ln=new ni}addToCollectionParentIndex(t,e){return this.ln.add(e),ct.resolve()}getCollectionParents(t,e){return ct.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return ct.resolve()}deleteFieldIndex(t,e){return ct.resolve()}deleteAllFieldIndexes(t){return ct.resolve()}createTargetIndexes(t,e){return ct.resolve()}getDocumentsMatchingTarget(t,e){return ct.resolve(null)}getIndexType(t,e){return ct.resolve(0)}getFieldIndexes(t,e){return ct.resolve([])}getNextCollectionGroupToUpdate(t){return ct.resolve(null)}getMinOffset(t,e){return ct.resolve(it.min())}getMinOffsetFromCollectionGroup(t,e){return ct.resolve(it.min())}updateCollectionGroup(t,e,n){return ct.resolve()}updateIndexEntries(t,e){return ct.resolve()}}class ni{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Rt(Y.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Rt(Y.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ri={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ii{static withCacheSize(t){return new ii(t,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.DEFAULT_COLLECTION_PERCENTILE=10,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ii.DEFAULT=new ii(41943040,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ii.DISABLED=new ii(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new si(0)}static Qn(){return new si(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi([t,e],[n,r]){const i=G(t,n);return 0===i?G(e,r):i}class ai{constructor(t){this.Gn=t,this.buffer=new Rt(oi),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();oi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ui{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(t){C("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ht(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ut(t)}await this.Yn(3e5)}))}}class ci{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return ct.resolve(ft.oe);const n=new ai(e);return this.Zn.forEachTarget(t,(t=>n.Hn(t.sequenceNumber))).next((()=>this.Zn.er(t,(t=>n.Hn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector","Garbage collection skipped; disabled"),ct.resolve(ri)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ri):this.tr(t,e)))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,r,i,s,o,u,c;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,u=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),S()<=a.$b.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(u-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-u)+"ms\n"+`Total Duration: ${c-l}ms`),ct.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}function li(t,e){return new ci(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(){this.changes=new Ze((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ct.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Mn(n.mutation,t,xt.empty(),K.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,hn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=hn()){const r=on();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=rn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=on();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,hn())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=en();const s=un(),o=function(){return un()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Vn)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Mn(o.mutation,e,o.mutation.getFieldMask(),K.now())):s.set(e.key,xt.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new fi(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=un();let r=new Ct(((t,e)=>t-e)),i=hn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||xt.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||hn()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=an();u.forEach((t=>{if(!i.has(t)){const r=Pn(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return ct.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Be(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):ct.resolve(on());let o=-1,a=i;return s.next((e=>ct.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?ct.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,hn()))).next((t=>({batchId:o,changes:sn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next((t=>{let e=rn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=rn();return this.indexManager.getCollectionParents(t,i).next((o=>ct.forEach(o,(o=>{const a=function(t,e){return new Ue(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,ce.newInvalidDocument(r)))}));let n=rn();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Mn(s.mutation,r,xt.empty(),K.now()),Qe(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return ct.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ir(t.createTime)}}(e)),ct.resolve()}getNamedQuery(t,e){return ct.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(t){return{name:t.name,query:Zr(t.bundledQuery),readTime:Ir(t.readTime)}}(e)),ct.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.overlays=new Ct(tt.comparator),this.Er=new Map}getOverlay(t,e){return ct.resolve(this.overlays.get(e))}getOverlays(t,e){const n=on();return ct.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Tt(t,e,r)})),ct.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Er.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Er.delete(n)),ct.resolve()}getOverlaysForCollection(t,e,n){const r=on(),i=e.length+1,s=new tt(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ct.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ct(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=on(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=on(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ct.resolve(o)}Tt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Er.get(r.largestBatchId).delete(n.key);this.Er.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Kn(e,n));let i=this.Er.get(e);void 0===i&&(i=hn(),this.Er.set(e,i)),this.Er.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(t){return ct.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,ct.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.dr=new Rt(yi.Ar),this.Rr=new Rt(yi.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new yi(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gr(new yi(t,e))}pr(t,e){t.forEach((t=>this.removeReference(t,e)))}yr(t){const e=new tt(new Y([])),n=new yi(e,t),r=new yi(e,t+1),i=[];return this.Rr.forEachInRange([n,r],(t=>{this.gr(t),i.push(t.key)})),i}wr(){this.dr.forEach((t=>this.gr(t)))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new tt(new Y([])),n=new yi(e,t),r=new yi(e,t+1);let i=hn();return this.Rr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new yi(t,0),n=this.dr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class yi{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return tt.comparator(t.key,e.key)||G(t.br,e.br)}static Vr(t,e){return G(t.br,e.br)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new Rt(yi.Ar)}checkEmpty(t){return ct.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Gn(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.vr=this.vr.add(new yi(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ct.resolve(s)}lookupMutationBatch(t,e){return ct.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Fr(n),i=r<0?0:r;return ct.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ct.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(t){return ct.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new yi(e,0),r=new yi(e,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],(t=>{const e=this.Cr(t.br);i.push(e)})),ct.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Rt(G);return e.forEach((t=>{const e=new yi(t,0),r=new yi(t,Number.POSITIVE_INFINITY);this.vr.forEachInRange([e,r],(t=>{n=n.add(t.br)}))})),ct.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;tt.isDocumentKey(i)||(i=i.child(""));const s=new yi(new tt(i),0);let o=new Rt(G);return this.vr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.br)),!0)}),s),ct.resolve(this.Mr(o))}Mr(t){const e=[];return t.forEach((t=>{const n=this.Cr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){x(0===this.Or(e.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return ct.forEach(e.mutations,(r=>{const i=new yi(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.vr=n}))}Ln(t){}containsKey(t,e){const n=new yi(e,0),r=this.vr.firstAfterOrEqual(n);return ct.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ct.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t){this.Nr=t,this.docs=function(){return new Ct(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ct.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let n=en();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ce.newInvalidDocument(t))})),ct.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=en();const s=e.path,o=new tt(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||st(rt(o),n)<=0||(r.has(o.key)||Qe(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ct.resolve(i)}getAllFromCollectionGroup(t,e,n,r){O()}Lr(t,e){return ct.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new bi(this)}getSize(t){return ct.resolve(this.size)}}class bi extends hi{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.hr.addEntry(t,r)):this.hr.removeEntry(n)})),ct.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.persistence=t,this.Br=new Ze((t=>Pe(t)),Le),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.kr=0,this.qr=new vi,this.targetCount=0,this.Qr=si.qn()}forEachTarget(t,e){return this.Br.forEach(((t,n)=>e(n))),ct.resolve()}getLastRemoteSnapshotVersion(t){return ct.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ct.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),ct.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),ct.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new si(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,ct.resolve()}updateTargetData(t,e){return this.Un(e),ct.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,ct.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Br.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Br.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ct.waitFor(i).next((()=>r))}getTargetCount(t){return ct.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return ct.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),ct.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),ct.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),ct.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return ct.resolve(n)}containsKey(t,e){return ct.resolve(this.qr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e){this.Kr={},this.overlays={},this.$r=new ft(0),this.Ur=!1,this.Ur=!0,this.Wr=new mi,this.referenceDelegate=t(this),this.Gr=new Ei(this),this.indexManager=new ei,this.remoteDocumentCache=function(t){return new wi(t)}((t=>this.referenceDelegate.zr(t))),this.serializer=new Jr(e),this.jr=new pi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new _i(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const r=new Ii(this.$r.next());return this.referenceDelegate.Hr(),n(r).next((t=>this.referenceDelegate.Jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Yr(t,e){return ct.or(Object.values(this.Kr).map((n=>()=>n.containsKey(t,e))))}}class Ii extends at{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.Zr=new vi,this.Xr=null}static ei(t){return new Si(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),ct.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),ct.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),ct.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach((t=>this.ti.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ti.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ct.forEach(this.ti,(n=>{const r=tt.fromPath(n);return this.ni(t,r).next((t=>{t||e.removeEntry(r,Q.min())}))})).next((()=>(this.Xr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ni(t,e).next((t=>{t?this.ti.delete(e.toString()):this.ti.add(e.toString())}))}zr(t){return 0}ni(t,e){return ct.or([()=>ct.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class Ci{constructor(t,e){this.persistence=t,this.ri=new Ze((t=>mt(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=li(this,e)}static ei(t,e){return new Ci(t,e)}Hr(){}Jr(t){return ct.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}nr(t){let e=0;return this.er(t,(t=>{e++})).next((()=>e))}er(t,e){return ct.forEach(this.ri,((n,r)=>this.ir(t,n,r).next((t=>t?ct.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Lr(t,(r=>this.ir(t,r,e).next((t=>{t||(n++,i.removeEntry(r,Q.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),ct.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),ct.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),ct.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),ct.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Jt(t.data.value)),e}ir(t,e,n){return ct.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.ri.get(e);return ct.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=r}static zi(t,e){let n=hn(),r=hn();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ai(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return(0,u.nr)()?8:lt((0,u.ZQ)())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Xi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.es(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new ki;return this.ts(t,e,n).next((r=>{if(i.result=r,this.Hi)return this.ns(t,e,n,r.size)}))})).next((()=>i.result))}ns(t,e,n,r){return n.documentReadCount<this.Ji?(S()<=a.$b.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),ct.resolve()):(S()<=a.$b.DEBUG&&C("QueryEngine","Query:",Ke(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(S()<=a.$b.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ze(e))):ct.resolve())}Xi(t,e){if(Ve(e))return ct.resolve(null);let n=ze(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=We(e,null,"F"),n=ze(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=hn(...r);return this.Zi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.rs(e,r);return this.ss(e,s,i,n.readTime)?this.Xi(t,We(e,null,"F")):this.os(t,s,e,n)}))))})))))}es(t,e,n,r){return Ve(e)||r.isEqual(Q.min())?ct.resolve(null):this.Zi.getDocuments(t,n).next((i=>{const s=this.rs(e,i);return this.ss(e,s,n,r)?ct.resolve(null):(S()<=a.$b.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ke(e)),this.os(t,s,e,nt(r,-1)).next((t=>t)))}))}rs(t,e){let n=new Rt(Ye(t));return e.forEach(((e,r)=>{Qe(t,r)&&(n=n.add(r))})),n}ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(t,e,n){return S()<=a.$b.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Ke(e)),this.Zi.getDocumentsMatchingQuery(t,e,it.min(),n)}os(t,e,n,r){return this.Zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e,n,r){this.persistence=t,this._s=e,this.serializer=r,this.us=new Ct(G),this.cs=new Ze((t=>Pe(t)),Le),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new di(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.us)))}}function xi(t,e,n,r){return new Oi(t,e,n,r)}async function Ni(t,e){const n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=hn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ts:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Di(t,e){const n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=ct.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);x(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=hn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Pi(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Gr.getLastRemoteSnapshotVersion(t)))}function Li(t,e){const n=N(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Gr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Gr.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?c=c.withResumeToken(Dt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,s)&&o.push(n.Gr.updateTargetData(t,c))}));let a=en(),u=hn();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Mi(t,s,e.documentUpdates).next((t=>{a=t.Is,u=t.Es}))),!r.isEqual(Q.min())){const e=n.Gr.getLastRemoteSnapshotVersion(t).next((e=>n.Gr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ct.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.us=i,t)))}function Mi(t,e,n){let r=hn(),i=hn();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=en();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Q.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):C("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Is:r,Es:i}}))}function Ui(t,e){const n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function ji(t,e){const n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Gr.getTargetData(t,e).next((i=>i?(r=i,ct.resolve(r)):n.Gr.allocateTargetId(t).next((i=>(r=new Yr(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Gr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.us.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(t.targetId,t),n.cs.set(e,t.targetId)),t}))}async function Fi(t,e,n){const r=N(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!ht(t))throw t;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Vi(t,e,n){const r=N(t);let i=Q.min(),s=hn();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=N(t),i=r.cs.get(n);return void 0!==i?ct.resolve(r.us.get(i)):r.Gr.getTargetData(e,n)}(r,t,ze(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r._s.getDocumentsMatchingQuery(t,e,n?i:Q.min(),n?s:hn()))).next((t=>(Bi(r,Xe(e),t),{documents:t,ds:s})))))}function Bi(t,e,n){let r=t.ls.get(e)||Q.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.ls.set(e,r)}class $i{constructor(){this.activeTargetIds=dn()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zi{constructor(){this._o=new $i,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new $i,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{uo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi=null;function Hi(){return null===Gi?Gi=function(){return 268435456+Math.round(2147483648*Math.random())}():Gi++,"0x"+Gi.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ki={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="WebChannelConnection";class Yi extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=e+"://"+t.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(t,e,n,r,i){const s=Hi(),o=this.No(t,e.toUriEncodedString());C("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,r,i),this.Bo(t,o,a,n).then((e=>(C("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw k("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}ko(t,e,n,r,i,s){return this.Oo(t,e,n,r,i)}Lo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+T}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}No(t,e){const n=Ki[t];return`${this.Fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,r){const i=Hi();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(d.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();C(Xi,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case p.TIMEOUT:C(Xi,`RPC '${t}' ${i} timed out`),o(new P(D.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(C(Xi,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(e)>=0?e:D.UNKNOWN}(e.status);o(new P(t,e.message))}else o(new P(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(D.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{C(Xi,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(r);C(Xi,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",u,n,15)}))}qo(t,e,n){const r=Hi(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=y(),o=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");C(Xi,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let h=!1,d=!1;const p=new Qi({Eo:e=>{d?C(Xi,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(C(Xi,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),C(Xi,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Ao:()=>l.close()}),_=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return _(l,f.EventType.OPEN,(()=>{d||(C(Xi,`RPC '${t}' stream ${r} transport opened.`),p.So())})),_(l,f.EventType.CLOSE,(()=>{d||(d=!0,C(Xi,`RPC '${t}' stream ${r} transport closed`),p.Do())})),_(l,f.EventType.ERROR,(e=>{d||(d=!0,k(Xi,`RPC '${t}' stream ${r} transport errored:`,e),p.Do(new P(D.UNAVAILABLE,"The operation could not be completed")))})),_(l,f.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];x(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){C(Xi,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Xn[t];if(void 0!==e)return Zn(e)}(e),i=o.message;void 0===n&&(n=D.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,p.Do(new P(n,i)),l.close()}else C(Xi,`RPC '${t}' stream ${r} received:`,i),p.vo(i)}})),_(o,m.STAT_EVENT,(e=>{e.stat===g.PROXY?C(Xi,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===g.NOPROXY&&C(Xi,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.bo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return new _r(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,n=1e3,r=1.5,i=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,e-n);r>0&&C("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,(()=>(this.Go=Date.now(),t()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e,n,r,i,s,o,a){this.li=t,this.Yo=n,this.Zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ts(t,e)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==t?this.r_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(A(e.toString()),A("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===D.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Xo===e&&this.I_(t,n)}),(e=>{t((()=>{const t=new P(D.UNKNOWN,"Fetching auth token failed: "+e.message);return this.E_(t)}))}))}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro((()=>{n((()=>this.listener.Ro()))})),this.stream.mo((()=>{n((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((t=>{n((()=>this.E_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.n_?this.A_(t):this.onNext(t)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}E_(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget((()=>this.Xo===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ns extends es{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Lr(this.serializer,t),n=function(t){if(!("targetChange"in t))return Q.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Q.min():e.readTime?Ir(e.readTime):Q.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=Nr(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Me(r)?{documents:jr(t,r)}:{query:Fr(t,r).ct},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Er(t,e.resumeToken);const r=wr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Q.min())>0){n.readTime=br(t,e.snapshotVersion.toTimestamp());const r=wr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Br(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=Nr(this.serializer),e.removeTarget=t,this.c_(e)}}class rs extends es{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return x(!!t.streamToken),this.lastStreamToken=t.streamToken,x(!t.writeResults||0===t.writeResults.length),this.listener.p_()}onNext(t){x(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Ur(t.writeResults,t.commitTime),n=Ir(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=Nr(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Mr(this.serializer,t)))};this.c_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Oo(t,Cr(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(D.UNKNOWN,t.toString())}))}ko(t,e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.ko(t,Cr(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(D.UNKNOWN,t.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class ss{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(t){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,"Online"===t&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(A(e),this.C_=!1):C("OnlineStateTracker",e)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo((t=>{n.enqueueAndForget((async()=>{gs(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=N(t);e.k_.add(4),await us(e),e.K_.set("Unknown"),e.k_.delete(4),await as(e)}(this))}))})),this.K_=new ss(n,r)}}async function as(t){if(gs(t))for(const e of t.q_)await e(!0)}async function us(t){for(const e of t.q_)await e(!1)}function cs(t,e){const n=N(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),ps(n)?ds(n):Ps(n).s_()&&hs(n,e))}function ls(t,e){const n=N(t),r=Ps(n);n.B_.delete(e),r.s_()&&fs(n,e),0===n.B_.size&&(r.s_()?r.a_():gs(n)&&n.K_.set("Unknown"))}function hs(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).V_(e)}function fs(t,e){t.U_.xe(e),Ps(t).m_(e)}function ds(t){t.U_=new dr({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.K_.F_()}function ps(t){return gs(t)&&!Ps(t).i_()&&t.B_.size>0}function gs(t){return 0===N(t).k_.size}function ms(t){t.U_=void 0}async function vs(t){t.K_.set("Online")}async function ys(t){t.B_.forEach(((e,n)=>{hs(t,e)}))}async function _s(t,e){ms(t),ps(t)?(t.K_.O_(e),ds(t)):t.K_.set("Unknown")}async function ws(t,e,n){if(t.K_.set("Online"),e instanceof hr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.B_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.B_.delete(r),t.U_.removeTarget(r))}(t,e)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bs(t,n)}else if(e instanceof cr?t.U_.$e(e):e instanceof lr?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Q.min()))try{const e=await Pi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.U_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.B_.get(r);i&&t.B_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.B_.get(e);if(!r)return;t.B_.set(e,r.withResumeToken(Dt.EMPTY_BYTE_STRING,r.snapshotVersion)),fs(t,e);const i=new Yr(r.target,e,n,r.sequenceNumber);hs(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){C("RemoteStore","Failed to raise snapshot:",e),await bs(t,e)}}async function bs(t,e,n){if(!ht(e))throw e;t.k_.add(1),await us(t),t.K_.set("Offline"),n||(n=()=>Pi(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await as(t)}))}function Es(t,e){return e().catch((n=>bs(t,n,e)))}async function Ts(t){const e=N(t),n=Ls(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Is(e);)try{const t=await Ui(e.localStore,r);if(null===t){0===e.L_.length&&n.a_();break}r=t.batchId,Ss(e,t)}catch(t){await bs(e,t)}Cs(e)&&As(e)}function Is(t){return gs(t)&&t.L_.length<10}function Ss(t,e){t.L_.push(e);const n=Ls(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Cs(t){return gs(t)&&!Ls(t).i_()&&t.L_.length>0}function As(t){Ls(t).start()}async function ks(t){Ls(t).w_()}async function Rs(t){const e=Ls(t);for(const n of t.L_)e.g_(n.mutations)}async function Os(t,e,n){const r=t.L_.shift(),i=Hn.from(r,e,n);await Es(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Ts(t)}async function xs(t,e){e&&Ls(t).f_&&await async function(t,e){if(function(t){return Jn(t)&&t!==D.ABORTED}(e.code)){const n=t.L_.shift();Ls(t).__(),await Es(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ts(t)}}(t,e),Cs(t)&&As(t)}async function Ns(t,e){const n=N(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=gs(n);n.k_.add(3),await us(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await as(n)}async function Ds(t,e){const n=N(t);e?(n.k_.delete(2),await as(n)):e||(n.k_.add(2),await us(n),n.K_.set("Unknown"))}function Ps(t){return t.W_||(t.W_=function(t,e,n){const r=N(t);return r.b_(),new ns(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Ro:vs.bind(null,t),mo:ys.bind(null,t),po:_s.bind(null,t),R_:ws.bind(null,t)}),t.q_.push((async e=>{e?(t.W_.__(),ps(t)?ds(t):t.K_.set("Unknown")):(await t.W_.stop(),ms(t))}))),t.W_}function Ls(t){return t.G_||(t.G_=function(t,e,n){const r=N(t);return r.b_(),new rs(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:ks.bind(null,t),po:xs.bind(null,t),p_:Rs.bind(null,t),y_:Os.bind(null,t)}),t.q_.push((async e=>{e?(t.G_.__(),await Ts(t)):(await t.G_.stop(),t.L_.length>0&&(C("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))}))),t.G_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ms{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new L,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Ms(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Us(t,e){if(A("AsyncQueue",`${e}: ${t}`),ht(t))return new P(D.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static emptySet(t){return new js(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=rn(),this.sortedSet=new Ct(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof js))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new js;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.z_=new Ct(tt.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?0!==t.type&&3===n.type?this.z_=this.z_.insert(e,t):3===t.type&&1!==n.type?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.z_=this.z_.remove(e):1===t.type&&2===n.type?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):O():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Vs{constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Vs(t,e,js.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ge(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some((t=>t.Z_()))}}class $s{constructor(){this.queries=zs(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(t,e){const n=N(t),r=n.queries;n.queries=zs(),r.forEach(((t,n)=>{for(const r of n.J_)r.onError(e)}))}(this,new P(D.ABORTED,"Firestore shutting down"))}}function zs(){return new Ze((t=>He(t)),Ge)}async function qs(t,e){const n=N(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new Bs,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Us(t,`Initialization of query '${Ke(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&Ks(n)}async function Ws(t,e){const n=N(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.J_.indexOf(e);t>=0&&(s.J_.splice(t,1),0===s.J_.length?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Gs(t,e){const n=N(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.J_)t.ta(i)&&(r=!0);e.H_=i}}r&&Ks(n)}function Hs(t,e,n){const r=N(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function Ks(t){t.X_.forEach((t=>{t.next()}))}var Qs,Xs;(Xs=Qs||(Qs={})).na="default",Xs.Cache="cache";class Ys{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Vs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache)return!0;if(!this.Z_())return!0;const n="Offline"!==e;return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}aa(t){t=Vs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==Qs.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(t){this.key=t}}class Zs{constructor(t){this.key=t}}class to{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=hn(),this.mutatedKeys=hn(),this.Va=Ye(t),this.ma=new js(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new Fs,r=e?e.ma:this.ma;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=Qe(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.ya(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Va(l,a)>0||u&&this.Va(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ma:s,pa:n,ss:o,mutatedKeys:i}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const s=t.pa.j_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Va(t.doc,e.doc))),this.wa(n),r=null!=r&&r;const o=e&&!r?this.Sa():[],a=0===this.Ra.size&&this.current&&!r?1:0,u=a!==this.Aa;return this.Aa=a,0!==s.length||u?{snapshot:new Vs(this.query,t.ma,i,s,t.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Fs,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach((t=>this.da=this.da.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.da=this.da.delete(t))),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=hn(),this.ma.forEach((t=>{this.Da(t.key)&&(this.Ra=this.Ra.add(t.key))}));const e=[];return t.forEach((t=>{this.Ra.has(t)||e.push(new Zs(t))})),this.Ra.forEach((n=>{t.has(n)||e.push(new Js(n))})),e}va(t){this.da=t.ds,this.Ra=hn();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Vs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class eo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class no{constructor(t){this.key=t,this.Fa=!1}}class ro{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new Ze((t=>He(t)),Ge),this.Oa=new Map,this.Na=new Set,this.La=new Ct(tt.comparator),this.Ba=new Map,this.ka=new vi,this.qa={},this.Qa=new Map,this.Ka=si.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function io(t,e,n=!0){const r=Ao(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await oo(r,e,n,!0),i}async function so(t,e){const n=Ao(t);await oo(n,e,!0,!1)}async function oo(t,e,n,r){const i=await ji(t.localStore,ze(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await ao(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&cs(t.remoteStore,i),a}async function ao(t,e,n,r,i){t.Ua=(e,n,r)=>async function(t,e,n,r){let i=e.view.ga(n);i.ss&&(i=await Vi(t.localStore,e.query,!1).then((({documents:t})=>e.view.ga(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return bo(t,e.targetId,a.ba),a.snapshot}(t,e,n,r);const s=await Vi(t.localStore,e,!0),o=new to(e,s.ds),a=o.ga(s.documents),u=ur.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);bo(t,n,c.ba);const l=new eo(e,n,o);return t.xa.set(e,l),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function uo(t,e,n){const r=N(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter((t=>!Ge(t,e)))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fi(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ls(r.remoteStore,i.targetId),_o(r,i.targetId)})).catch(ut)):(_o(r,i.targetId),await Fi(r.localStore,i.targetId,!0))}async function co(t,e){const n=N(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ls(n.remoteStore,r.targetId))}async function lo(t,e,n){const r=ko(t);try{const t=await function(t,e){const n=N(t),r=K.now(),i=e.reduce(((t,e)=>t.add(e.key)),hn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=en(),u=hn();return n.hs.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Un(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Vn(t.key,e,ue(e.value.mapValue),xn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:sn(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.qa[t.currentUser.toKey()];r||(r=new Ct(G)),r=r.insert(e,n),t.qa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Io(r,t.changes),await Ts(r.remoteStore)}catch(t){const e=Us(t,"Failed to persist write");n.reject(e)}}async function ho(t,e){const n=N(t);try{const t=await Li(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Ba.get(e);r&&(x(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Fa=!0:t.modifiedDocuments.size>0?x(r.Fa):t.removedDocuments.size>0&&(x(r.Fa),r.Fa=!1))})),await Io(n,t,e)}catch(t){await ut(t)}}function fo(t,e,n){const r=N(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xa.forEach(((n,r)=>{const i=r.view.ea(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=N(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.J_)i.ea(e)&&(r=!0)})),r&&Ks(n)}(r.eventManager,e),t.length&&r.Ma.R_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function po(t,e,n){const r=N(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let t=new Ct(tt.comparator);t=t.insert(s,ce.newNoDocument(s,Q.min()));const n=hn().add(s),i=new ar(Q.min(),new Map,new Ct(G),t,n);await ho(r,i),r.La=r.La.remove(s),r.Ba.delete(e),To(r)}else await Fi(r.localStore,e,!1).then((()=>_o(r,e,n))).catch(ut)}async function go(t,e){const n=N(t),r=e.batch.batchId;try{const t=await Di(n.localStore,e);yo(n,r,null),vo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Io(n,t)}catch(t){await ut(t)}}async function mo(t,e,n){const r=N(t);try{const t=await function(t,e){const n=N(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(x(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);yo(r,e,n),vo(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Io(r,t)}catch(n){await ut(n)}}function vo(t,e){(t.Qa.get(e)||[]).forEach((t=>{t.resolve()})),t.Qa.delete(e)}function yo(t,e,n){const r=N(t);let i=r.qa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function _o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach((e=>{t.ka.containsKey(e)||wo(t,e)}))}function wo(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);null!==n&&(ls(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),To(t))}function bo(t,e,n){for(const r of n)r instanceof Js?(t.ka.addReference(r.key,e),Eo(t,r)):r instanceof Zs?(C("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||wo(t,r.key)):O()}function Eo(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(C("SyncEngine","New document in limbo: "+n),t.Na.add(r),To(t))}function To(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new tt(Y.fromString(e)),r=t.Ka.next();t.Ba.set(r,new no(n)),t.La=t.La.insert(n,r),cs(t.remoteStore,new Yr(ze(Fe(n.path)),r,"TargetPurposeLimboResolution",ft.oe))}}async function Io(t,e,n){const r=N(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach(((t,a)=>{o.push(r.Ua(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=Ai.zi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Ma.R_(i),await async function(t,e){const n=N(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ct.forEach(e,(e=>ct.forEach(e.Wi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ct.forEach(e.Gi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ht(t))throw t;C("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.us.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.us=n.us.insert(t,i)}}}(r.localStore,s))}async function So(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const t=await Ni(n.localStore,e);n.currentUser=e,function(t,e){t.Qa.forEach((t=>{t.forEach((t=>{t.reject(new P(D.CANCELLED,e))}))})),t.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Io(n,t.Ts)}}function Co(t,e){const n=N(t),r=n.Ba.get(e);if(r&&r.Fa)return hn().add(r.key);{let t=hn();const r=n.Oa.get(e);if(!r)return t;for(const e of r){const r=n.xa.get(e);t=t.unionWith(r.view.fa)}return t}}function Ao(t){const e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ho.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Co.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=po.bind(null,e),e.Ma.R_=Gs.bind(null,e.eventManager),e.Ma.Wa=Hs.bind(null,e.eventManager),e}function ko(t){const e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=go.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mo.bind(null,e),e}class Ro{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Zi(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return xi(this.persistence,new Ri,t.initialUser,this.serializer)}ja(t){return new Ti(Si.ei,this.serializer)}za(t){return new zi}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ro.provider={build:()=>new Ro};class Oo extends Ro{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){x(this.persistence.referenceDelegate instanceof Ci);const n=this.persistence.referenceDelegate.garbageCollector;return new ui(n,t.asyncQueue,e)}ja(t){const e=void 0!==this.cacheSizeBytes?ii.withCacheSize(this.cacheSizeBytes):ii.DEFAULT;return new Ti((t=>Ci.ei(t,e)),this.serializer)}}class xo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>fo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=So.bind(null,this.syncEngine),await Ds(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $s}()}createDatastore(t){const e=Zi(t.databaseInfo.databaseId),n=function(t){return new Yi(t)}(t.databaseInfo);return function(t,e,n,r){return new is(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new os(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>fo(this.syncEngine,t,0)),function(){return Wi.p()?new Wi:new qi}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ro(t,e,n,r,i,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=N(t);C("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await us(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}xo.provider={build:()=>new xo};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):A("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=E.UNAUTHENTICATED,this.clientId=W.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{C("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(C("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new L;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Us(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Po(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ni(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Lo(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mo(t);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Ns(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ns(e.remoteStore,n))),t._onlineComponents=e}async function Mo(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Po(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;k("Error using user provided cache. Falling back to memory cache: "+n),await Po(t,new Ro)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Po(t,new Oo(void 0));return t._offlineComponents}async function Uo(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Lo(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Lo(t,new xo))),t._onlineComponents}function jo(t){return Uo(t).then((t=>t.syncEngine))}async function Fo(t){const e=await Uo(t),n=e.eventManager;return n.onListen=io.bind(null,e.syncEngine),n.onUnlisten=uo.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=so.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=co.bind(null,e.syncEngine),n}function Vo(t,e,n={}){const r=new L;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new No({next:a=>{s.eu(),e.enqueueAndForget((()=>Ws(t,o)));const u=a.docs.has(n);!u&&a.fromCache?i.reject(new P(D.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&a.fromCache&&r&&"server"===r.source?i.reject(new P(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new Ys(Fe(n.path),s,{includeMetadataChanges:!0,ua:!0});return qs(t,o)}(await Fo(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bo(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const $o=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){if(!n)throw new P(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qo(t,e,n,r){if(!0===e&&!0===r)throw new P(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wo(t){if(!tt.isDocumentKey(t))throw new P(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Go(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O()}function Ho(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Go(t);throw new P(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new P(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new P(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qo("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bo(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qo{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ko({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ko(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new U;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=$o.get(t);e&&(C("ComponentProvider","Removing Datastore"),$o.delete(t),e.terminate())}(this),Promise.resolve()}}function Xo(t,e,n,r={}){var i;const s=(t=Ho(t,Qo))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&k("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=E.MOCK_USER;else{e=(0,u.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new P(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new E(s)}t._authCredentials=new j(new M(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yo(this.firestore,t,this._query)}}class Jo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jo(this.firestore,t,this._key)}}class Zo extends Yo{constructor(t,e,n){super(t,e,Fe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jo(this.firestore,null,new tt(t))}withConverter(t){return new Zo(this.firestore,t,this._path)}}function ta(t,e,...n){if(t=(0,u.Ku)(t),1===arguments.length&&(e=W.newId()),zo("doc","path",e),t instanceof Qo){const r=Y.fromString(e,...n);return Wo(r),new Jo(t,null,new tt(r))}{if(!(t instanceof Jo||t instanceof Zo))throw new P(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return Wo(r),new Jo(t.firestore,t instanceof Zo?t.converter:null,new tt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ea{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ts(this,"async_queue_retry"),this.fu=()=>{const t=Ji();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.r_.Jo()},this.gu=t;const e=Ji();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Ji();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise((()=>{}));const e=new L;return this.yu((()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Iu.push(t),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!ht(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(t){const e=this.gu.then((()=>(this.Ru=!0,t().catch((t=>{this.Au=t,this.Ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw A("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ru=!1,t))))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const r=Ms.createAndSchedule(this,t,e,n,(t=>this.Su(t)));return this.du.push(r),r}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do{t=this.gu,await t}while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bu()}))}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class na extends Qo{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new ea,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ea(t),this._firestoreClient=void 0,await t}}}function ra(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||"(default)",i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,u.yU)("firestore");t&&Xo(i,...t)}return i}function ia(t){if(t._terminated)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||sa(t),t._firestoreClient}function sa(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new Bt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Bo(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Do(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(t){this._byteString=t}static fromBase64String(t){try{return new oa(Dt.fromBase64String(t))}catch(t){throw new P(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new oa(Dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=/^__.*__$/;class fa{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Vn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fn(t,this.data,e,this.fieldTransforms)}}function da(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class pa{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new pa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.xu({path:n,Nu:!1});return r.Lu(t),r}Bu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.xu({path:n,Nu:!1});return r.Fu(),r}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Sa(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(0===t.length)throw this.qu("Document fields must not be empty");if(da(this.Mu)&&ha.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class ga{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Zi(t)}$u(t,e,n,r=!1){return new pa({Mu:t,methodName:e,Ku:n,path:Z.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ma(t){const e=t._freezeSettings(),n=Zi(t._databaseId);return new ga(t._databaseId,!!e.ignoreUndefinedProperties,n)}function va(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);ba("Data must be an object, but it was:",o,r);const a=_a(r,o);let u,c;if(s.merge)u=new xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Ea(e,r,n);if(!o.contains(i))throw new P(D.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ca(t,i)||t.push(i)}u=new xt(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new fa(new ae(a),u,c)}function ya(t,e){if(wa(t=(0,u.Ku)(t)))return ba("Unsupported field value:",e,t),_a(t,e);if(t instanceof ua)return function(t,e){if(!da(e.Mu))throw e.qu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.qu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&4!==e.Mu)throw e.qu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=ya(i,e.ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,u.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=K.fromDate(t);return{timestampValue:br(e.serializer,n)}}if(t instanceof K){const n=new K(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:br(e.serializer,n)}}if(t instanceof ca)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof oa)return{bytesValue:Er(e.serializer,t._byteString)};if(t instanceof Jo){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.qu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sr(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof la)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.qu("VectorValues must only contain numeric values.");return pn(e.serializer,t)}))}}}}}}(t,e);throw e.qu(`Unsupported field value: ${Go(t)}`)}(t,e)}function _a(t,e){const n={};return St(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):It(t,((t,r)=>{const i=ya(r,e.Ou(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function wa(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof K||t instanceof ca||t instanceof oa||t instanceof Jo||t instanceof ua||t instanceof la)}function ba(t,e,n){if(!wa(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Go(n);throw"an object"===r?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Ea(t,e,n){if((e=(0,u.Ku)(e))instanceof aa)return e._internalPath;if("string"==typeof e)return Ia(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ta=new RegExp("[~\\*/\\[\\]]");function Ia(t,e,n){if(e.search(Ta)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new aa(...e.split("."))._internalPath}catch(r){throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new P(D.INVALID_ARGUMENT,a+t+u)}function Ca(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Jo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ka(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ra("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ka extends Aa{data(){return super.data()}}function Ra(t,e){return"string"==typeof e?Ia(t,e):e instanceof aa?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{convertValue(t,e="none"){switch(qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ut(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return It(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>Mt(t.doubleValue)));return new la(i)}convertGeoPoint(t){return new ca(Mt(t.latitude),Mt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ft(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vt(t));default:return null}}convertTimestamp(t){const e=Lt(t);return new K(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);x(Xr(n));const r=new $t(n.get(1),n.get(3)),i=new tt(n.popFirst(5));return r.isEqual(e)||A(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Da extends Aa{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ra("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Pa extends Da{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function La(t){t=Ho(t,Jo);const e=Ho(t.firestore,na);return Vo(ia(e),t._key).then((n=>Fa(e,t,n)))}class Ma extends Oa{constructor(t){super(),this.firestore=t}convertBytes(t){return new oa(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Jo(this.firestore,null,e)}}function Ua(t,e,n){t=Ho(t,Jo);const r=Ho(t.firestore,na),i=xa(t.converter,e,n);return ja(r,[va(ma(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,xn.none())])}function ja(t,e){return function(t,e){const n=new L;return t.asyncQueue.enqueueAndForget((async()=>lo(await jo(t),e,n))),n.promise}(ia(t),e)}function Fa(t,e,n){const r=n.docs.get(e._key),i=new Ma(t);return new Da(t,i,e._key,r,new Na(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){T=t}(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new na(new F(t.getProvider("auth-internal")),new z(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $t(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(b,"4.7.5",t),(0,s.KO)(b,"4.7.5","esm2017")}()},1387:function(t,e,n){"use strict";n.d(e,{LA:function(){return ut},aE:function(){return ie}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550);var r=n(6768),i=n(144);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function a(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&o(t.default)}const u=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=h(i)?i.map(t):t(i)}return n}const l=()=>{},h=Array.isArray;const f=/#/g,d=/&/g,p=/\//g,g=/=/g,m=/\?/g,v=/\+/g,y=/%5B/g,_=/%5D/g,w=/%5E/g,b=/%60/g,E=/%7B/g,T=/%7C/g,I=/%7D/g,S=/%20/g;function C(t){return encodeURI(""+t).replace(T,"|").replace(y,"[").replace(_,"]")}function A(t){return C(t).replace(E,"{").replace(I,"}").replace(w,"^")}function k(t){return C(t).replace(v,"%2B").replace(S,"+").replace(f,"%23").replace(d,"%26").replace(b,"`").replace(E,"{").replace(I,"}").replace(w,"^")}function R(t){return k(t).replace(g,"%3D")}function O(t){return C(t).replace(f,"%23").replace(m,"%3F")}function x(t){return null==t?"":O(t).replace(p,"%2F")}function N(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const D=/\/$/,P=t=>t.replace(D,"");function L(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let u=e.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=e.slice(0,u),s=e.slice(u+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=z(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:N(o)}}function M(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function U(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function j(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&F(e.matched[r],n.matched[i])&&V(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function F(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function V(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!B(t[n],e[n]))return!1;return!0}function B(t,e){return h(t)?$(t,e):h(e)?$(e,t):t===e}function $(t,e){return h(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function z(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var W,G;(function(t){t["pop"]="pop",t["push"]="push"})(W||(W={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(G||(G={}));function H(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),P(t)}const K=/^[^#]+#/;function Q(t,e){return t.replace(K,"#")+e}function X(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function J(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=X(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function Z(t,e){const n=history.state?history.state.position-e:-1;return n+t}const tt=new Map;function et(t,e){tt.set(t,e)}function nt(t){const e=tt.get(t);return tt.delete(t),e}let rt=()=>location.protocol+"//"+location.host;function it(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),U(n,"")}const o=U(n,t);return o+r+i}function st(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=it(t,location),u=n.value,c=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===u)return void(o=null);l=c?s.position-c.position:0}else r(a);i.forEach((t=>{t(n.value,u,{delta:l,type:W.pop,direction:l?l>0?G.forward:G.back:G.unknown})}))};function c(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(u({},t.state,{scroll:Y()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ot(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function at(t){const{history:e,location:n}=window,r={value:it(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:rt()+t+r;try{e[o?"replaceState":"pushState"](s,"",u),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](u)}}function o(t,n){const o=u({},e.state,ot(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=u({},i.value,e.state,{forward:t,scroll:Y()});s(o.current,o,!0);const a=u({},ot(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function ut(t){t=H(t);const e=at(t),n=st(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=u({location:"",base:t,go:r,createHref:Q.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ct(t){return"string"===typeof t||t&&"object"===typeof t}function lt(t){return"string"===typeof t||"symbol"===typeof t}const ht=Symbol("");var ft;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(ft||(ft={}));function dt(t,e){return u(new Error,{type:t,[ht]:!0},e)}function pt(t,e){return t instanceof Error&&ht in t&&(null==e||!!(t.type&e))}const gt="[^/]+?",mt={sensitive:!1,strict:!1,start:!0,end:!0},vt=/[.+*?^${}()[\]/\\]/g;function yt(t,e){const n=u({},mt,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const t=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let e=0;e<u.length;e++){const r=u[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(vt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||gt;if(h!==gt){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+l.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&u.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,u=s in e?e[s]:"";if(h(u)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=h(u)?u.join("/"):u;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function _t(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function wt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=_t(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(bt(r))return 1;if(bt(i))return-1}return i.length-r.length}function bt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Et={type:0,value:""},Tt=/[a-zA-Z0-9_]/;function It(t){if(!t)return[[]];if("/"===t)return[[Et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${c}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,u=0,c="",l="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}while(u<t.length)if(a=t[u++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:Tt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function St(t,e,n){const r=yt(It(t.path),n);const i=u(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function Ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=kt(t);a.aliasOf=r&&r.record;const h=Nt(e,t),f=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(kt(u({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a})))}let d,p;for(const e of f){const{path:u}=e;if(n&&"/"!==u[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(u&&r+u)}if(d=St(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!Ot(d)&&o(t.name)),Lt(d)&&c(d),a.children){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d}return p?()=>{o(p)}:l}function o(t){if(lt(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){const e=Dt(t,n);n.splice(e,0,t),t.record.name&&!Ot(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw dt(1,{location:t});0,o=i.record.name,a=u(At(e.params,i.keys.filter((t=>!t.optional)).concat(i.parent?i.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&At(t.params,i.keys.map((t=>t.name)))),s=i.stringify(a)}else if(null!=t.path)s=t.path,i=n.find((t=>t.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw dt(1,{location:t,currentLocation:e});o=i.record.name,a=u({},e.params,t.params),s=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:xt(c)}}function f(){n.length=0,r.clear()}return e=Nt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function At(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kt(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Rt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Rt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Ot(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xt(t){return t.reduce(((t,e)=>u(t,e.meta)),{})}function Nt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Dt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1,s=wt(t,e[i]);s<0?r=i:n=i+1}const i=Pt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Pt(t){let e=t;while(e=e.parent)if(Lt(e)&&0===wt(t,e))return e}function Lt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Mt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(v," "),n=t.indexOf("="),s=N(n<0?t:t.slice(0,n)),o=n<0?null:N(t.slice(n+1));if(s in e){let t=e[s];h(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ut(t){let e="";for(let n in t){const r=t[n];if(n=R(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=h(r)?r.map((t=>t&&k(t))):[r&&k(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function jt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=h(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ft=Symbol(""),Vt=Symbol(""),Bt=Symbol(""),$t=Symbol(""),zt=Symbol("");function qt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wt(t,e,n,r,i,s=t=>t()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,u)=>{const c=t=>{!1===t?u(dt(4,{from:n,to:e})):t instanceof Error?u(t):ct(t)?u(dt(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),a())},l=s((()=>t.call(r&&r.instances[i],e,n,c)));let h=Promise.resolve(l);t.length<3&&(h=h.then(c)),h.catch((t=>u(t)))}))}function Gt(t,e,n,r,i=t=>t()){const s=[];for(const u of t){0;for(const t in u.components){let c=u.components[t];if("beforeRouteEnter"===e||u.instances[t])if(o(c)){const o=c.__vccOpts||c,a=o[e];a&&s.push(Wt(a,n,r,u,t,i))}else{let o=c();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${t}" at "${u.path}"`);const o=a(s)?s.default:s;u.mods[t]=s,u.components[t]=o;const c=o.__vccOpts||o,l=c[e];return l&&Wt(l,n,r,u,t,i)()}))))}}}return s}function Ht(t){const e=(0,r.WQ)(Bt),n=(0,r.WQ)($t);const s=(0,r.EW)((()=>{const n=(0,i.R1)(t.to);return e.resolve(n)})),o=(0,r.EW)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(F.bind(null,r));if(o>-1)return o;const a=Zt(t[e-2]);return e>1&&Zt(r)===a&&i[i.length-1].path!==a?i.findIndex(F.bind(null,t[e-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Jt(n.params,s.value.params))),u=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&V(n.params,s.value.params)));function c(n={}){if(Yt(n)){const n=e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(l);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:u,navigate:c}}function Kt(t){return 1===t.length?t[0]:t}const Qt=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,i.Kh)(Ht(t)),{options:s}=(0,r.WQ)(Bt),o=(0,r.EW)((()=>({[te(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[te(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&Kt(e.default(n));return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Xt=Qt;function Yt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Zt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const te=(t,e,n)=>null!=t?t:null!=e?e:n,ee=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.WQ)(zt),o=(0,r.EW)((()=>t.route||s.value)),a=(0,r.WQ)(Vt,0),c=(0,r.EW)((()=>{let t=(0,i.R1)(a);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.EW)((()=>o.value.matched[c.value]));(0,r.Gt)(Vt,(0,r.EW)((()=>c.value+1))),(0,r.Gt)(Ft,l),(0,r.Gt)(zt,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&F(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,a=l.value,c=a&&a.components[s];if(!c)return ne(n.default,{Component:c,route:i});const f=a.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(a.instances[s]=null)},g=(0,r.h)(c,u({},d,e,{onVnodeUnmounted:p,ref:h}));return ne(n.default,{Component:g,route:i})||g}}});function ne(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const re=ee;function ie(t){const e=Ct(t.routes,t),n=t.parseQuery||Mt,o=t.stringifyQuery||Ut,a=t.history;const f=qt(),d=qt(),p=qt(),g=(0,i.IJ)(q);let m=q;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(t=>""+t)),y=c.bind(null,x),_=c.bind(null,N);function w(t,n){let r,i;return lt(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function b(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function E(){return e.getRoutes().map((t=>t.record))}function T(t){return!!e.getRecordMatcher(t)}function I(t,r){if(r=u({},r||g.value),"string"===typeof t){const i=L(n,t,r.path),s=e.resolve({path:i.path},r),o=a.createHref(i.fullPath);return u(i,s,{params:_(s.params),hash:N(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=t.path)i=u({},t,{path:L(n,t.path,r.path).path});else{const e=u({},t.params);for(const t in e)null==e[t]&&delete e[t];i=u({},t,{params:y(e)}),r.params=y(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=v(_(s.params));const l=M(o,u({},t,{hash:A(c),path:s.path})),h=a.createHref(l);return u({fullPath:l,hash:c,query:o===Ut?jt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:h})}function S(t){return"string"===typeof t?L(n,t,g.value.path):u({},t)}function C(t,e){if(m!==t)return dt(8,{from:e,to:t})}function k(t){return D(t)}function R(t){return k(u(S(t),{replace:!0}))}function O(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),u({query:t.query,hash:t.hash,params:null!=r.path?{}:t.params},r)}}function D(t,e){const n=m=I(t),r=g.value,i=t.state,s=t.force,a=!0===t.replace,c=O(n);if(c)return D(u(S(c),{state:"object"===typeof c?u({},i,c.state):i,force:s,replace:a}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&j(o,r,n)&&(h=dt(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):F(l,r)).catch((t=>pt(t)?pt(t,2)?t:tt(t):Q(t,l,r))).then((t=>{if(t){if(pt(t,2))return D(u({replace:a},S(t.to),{state:"object"===typeof t.to?u({},i,t.to.state):i,force:s}),e||l)}else t=B(l,r,!0,a,i);return V(l,r,t),t}))}function P(t,e){const n=C(t,e);return n?Promise.reject(n):Promise.resolve()}function U(t){const e=ot.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function F(t,e){let n;const[r,i,s]=se(t,e);n=Gt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Wt(r,t,e))}));const o=P.bind(null,t,e);return n.push(o),ut(n).then((()=>{n=[];for(const r of f.list())n.push(Wt(r,t,e));return n.push(o),ut(n)})).then((()=>{n=Gt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(Wt(r,t,e))}));return n.push(o),ut(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(Wt(i,t,e));else n.push(Wt(r.beforeEnter,t,e));return n.push(o),ut(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Gt(s,"beforeRouteEnter",t,e,U),n.push(o),ut(n)))).then((()=>{n=[];for(const r of d.list())n.push(Wt(r,t,e));return n.push(o),ut(n)})).catch((t=>pt(t,8)?t:Promise.reject(t)))}function V(t,e,n){p.list().forEach((r=>U((()=>r(t,e,n)))))}function B(t,e,n,r,i){const o=C(t,e);if(o)return o;const c=e===q,l=s?history.state:{};n&&(r||c?a.replace(t.fullPath,u({scroll:c&&l&&l.scroll},i)):a.push(t.fullPath,i)),g.value=t,rt(t,e,n,c),tt()}let $;function z(){$||($=a.listen(((t,e,n)=>{if(!at.listening)return;const r=I(t),i=O(r);if(i)return void D(u(i,{replace:!0,force:!0}),r).catch(l);m=r;const o=g.value;s&&et(Z(o.fullPath,n.delta),Y()),F(r,o).catch((t=>pt(t,12)?t:pt(t,2)?(D(u(S(t.to),{force:!0}),r).then((t=>{pt(t,20)&&!n.delta&&n.type===W.pop&&a.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(t,r,o)))).then((t=>{t=t||B(r,o,!1),t&&(n.delta&&!pt(t,8)?a.go(-n.delta,!1):n.type===W.pop&&pt(t,20)&&a.go(-1,!1)),V(r,o,t)})).catch(l)})))}let G,H=qt(),K=qt();function Q(t,e,n){tt(t);const r=K.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function X(){return G&&g.value!==q?Promise.resolve():new Promise(((t,e)=>{H.add([t,e])}))}function tt(t){return G||(G=!t,z(),H.list().forEach((([e,n])=>t?n(t):e())),H.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const u=!i&&nt(Z(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(e,n,u))).then((t=>t&&J(t))).catch((t=>Q(t,e,n)))}const it=t=>a.go(t);let st;const ot=new Set,at={currentRoute:g,listening:!0,addRoute:w,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:E,resolve:I,options:t,push:k,replace:R,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:d.add,afterEach:p.add,onError:K.add,isReady:X,install(t){const e=this;t.component("RouterLink",Xt),t.component("RouterView",re),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!st&&g.value===q&&(st=!0,k(a.location).catch((t=>{0})));const n={};for(const i in q)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});t.provide(Bt,e),t.provide($t,(0,i.Gc)(n)),t.provide(zt,g);const r=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(m=q,$&&$(),$=null,g.value=q,st=!1,G=!1),r()}}};function ut(t){return t.reduce(((t,e)=>t.then((()=>U(e)))),Promise.resolve())}return at}function se(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>F(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>F(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.2c8134dc.js.map