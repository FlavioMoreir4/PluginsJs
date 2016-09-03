!function(t,e,i,n){"use strict";function r(t,e,i){return setTimeout(c(t,i),e)}function s(t,e,i){return Array.isArray(t)?(o(t,i[e],i),!0):!1}function o(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function a(t,e,i){for(var r=Object.keys(e),s=0;s<r.length;)(!i||i&&t[r[s]]===n)&&(t[r[s]]=e[r[s]]),s++;return t}function u(t,e){return a(t,e,!0)}function h(t,e,i){var n,r=e.prototype;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&a(n,i)}function c(t,e){return function(){return t.apply(e,arguments)}}function l(t,e){return typeof t==ut?t.apply(e?e[0]||n:n,e):t}function p(t,e){return t===n?e:t}function f(t,e,i){o(g(e),function(e){t.addEventListener(e,i,!1)})}function d(t,e,i){o(g(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function m(t,e){return t.indexOf(e)>-1}function g(t){return t.trim().split(/\s+/g)}function T(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function y(t){return Array.prototype.slice.call(t,0)}function E(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];T(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function I(t,e){for(var i,r,s=e[0].toUpperCase()+e.slice(1),o=0;o<ot.length;){if(i=ot[o],r=i?i+s:e,r in t)return r;o++}return n}function A(){return pt++}function _(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function D(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){l(t.options.enable,[t])&&i.handler(e)},this.init()}function w(t){var e,i=t.options.inputClass;return new(e=i?i:vt?q:mt?W:dt?H:F)(t,S)}function S(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&At&&n-r===0,o=e&(Dt|wt)&&n-r===0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e,b(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function b(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=z(e)),r>1&&!i.firstMultiple?i.firstMultiple=z(e):1===r&&(i.firstMultiple=!1);var s=i.firstInput,o=i.firstMultiple,a=o?o.center:s.center,u=e.center=N(n);e.timeStamp=lt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=x(a,u),e.distance=O(a,u),C(i,e),e.offsetDirection=P(e.deltaX,e.deltaY),e.scale=o?Y(o.pointers,n):1,e.rotation=o?X(o.pointers,n):0,R(i,e);var h=t.element;v(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function C(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};(e.eventType===At||s.eventType===Dt)&&(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}function R(t,e){var i,r,s,o,a=t.lastInterval||e,u=e.timeStamp-a.timeStamp;if(e.eventType!=wt&&(u>It||a.velocity===n)){var h=a.deltaX-e.deltaX,c=a.deltaY-e.deltaY,l=M(u,h,c);r=l.x,s=l.y,i=ct(l.x)>ct(l.y)?l.x:l.y,o=P(h,c),t.lastInterval=e}else i=a.velocity,r=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=r,e.velocityY=s,e.direction=o}function z(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:ht(t.pointers[i].clientX),clientY:ht(t.pointers[i].clientY)},i++;return{timeStamp:lt(),pointers:e,center:N(e),deltaX:t.deltaX,deltaY:t.deltaY}}function N(t){var e=t.length;if(1===e)return{x:ht(t[0].clientX),y:ht(t[0].clientY)};for(var i=0,n=0,r=0;e>r;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:ht(i/e),y:ht(n/e)}}function M(t,e,i){return{x:e/t||0,y:i/t||0}}function P(t,e){return t===e?St:ct(t)>=ct(e)?t>0?bt:Ct:e>0?Rt:zt}function O(t,e,i){i||(i=Ot);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function x(t,e,i){i||(i=Ot);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}function X(t,e){return x(e[1],e[0],xt)-x(t[1],t[0],xt)}function Y(t,e){return O(e[0],e[1],xt)/O(t[0],t[1],xt)}function F(){this.evEl=Yt,this.evWin=Ft,this.allow=!0,this.pressed=!1,D.apply(this,arguments)}function q(){this.evEl=Lt,this.evWin=Ht,D.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=Ut,this.targetIds={},D.apply(this,arguments)}function L(t,e){var i=y(t.touches),n=this.targetIds;if(e&(At|_t)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s=y(t.targetTouches),o=y(t.changedTouches),a=[];if(e===At)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(Dt|wt)&&delete n[o[r].identifier],r++;return a.length?[E(s.concat(a),"identifier",!0),a]:void 0}function H(){D.apply(this,arguments);var t=c(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new F(this.manager,t)}function k(t,e){this.manager=t,this.set(e)}function U(t){if(m(t,Jt))return Jt;var e=m(t,Kt),i=m(t,Qt);return e&&i?Kt+" "+Qt:e||i?e?Kt:Qt:m(t,Bt)?Bt:Zt}function G(t){this.id=A(),this.manager=null,this.options=u(t||{},this.defaults),this.options.enable=p(this.options.enable,!0),this.state=$t,this.simultaneous={},this.requireFail=[]}function V(t){return t&re?"cancel":t&ie?"end":t&ee?"move":t&te?"start":""}function j(t){return t==zt?"down":t==Rt?"up":t==bt?"left":t==Ct?"right":""}function Z(t,e){var i=e.manager;return i?i.get(t):t}function B(){G.apply(this,arguments)}function J(){B.apply(this,arguments),this.pX=null,this.pY=null}function K(){B.apply(this,arguments)}function Q(){G.apply(this,arguments),this._timer=null,this._input=null}function $(){B.apply(this,arguments)}function tt(){B.apply(this,arguments)}function et(){G.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function it(t,e){return e=e||{},e.recognizers=p(e.recognizers,it.defaults.preset),new nt(t,e)}function nt(t,e){e=e||{},this.options=u(e,it.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=w(this),this.touchAction=new k(this,this.options.touchAction),rt(this,!0),o(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function rt(t,e){var i=t.element;o(t.options.cssProps,function(t,n){i.style[I(i.style,n)]=e?t:""})}function st(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var ot=["","webkit","moz","MS","ms","o"],at=e.createElement("div"),ut="function",ht=Math.round,ct=Math.abs,lt=Date.now,pt=1,ft=/mobile|tablet|ip(ad|hone|od)|android/i,dt="ontouchstart"in t,vt=I(t,"PointerEvent")!==n,mt=dt&&ft.test(navigator.userAgent),gt="touch",Tt="pen",yt="mouse",Et="kinect",It=25,At=1,_t=2,Dt=4,wt=8,St=1,bt=2,Ct=4,Rt=8,zt=16,Nt=bt|Ct,Mt=Rt|zt,Pt=Nt|Mt,Ot=["x","y"],xt=["clientX","clientY"];D.prototype={handler:function(){},init:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(_(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(_(this.element),this.evWin,this.domHandler)}};var Xt={mousedown:At,mousemove:_t,mouseup:Dt},Yt="mousedown",Ft="mousemove mouseup";h(F,D,{handler:function(t){var e=Xt[t.type];e&At&&0===t.button&&(this.pressed=!0),e&_t&&1!==t.which&&(e=Dt),this.pressed&&this.allow&&(e&Dt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:yt,srcEvent:t}))}});var qt={pointerdown:At,pointermove:_t,pointerup:Dt,pointercancel:wt,pointerout:wt},Wt={2:gt,3:Tt,4:yt,5:Et},Lt="pointerdown",Ht="pointermove pointerup pointercancel";t.MSPointerEvent&&(Lt="MSPointerDown",Ht="MSPointerMove MSPointerUp MSPointerCancel"),h(q,D,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=qt[n],s=Wt[t.pointerType]||t.pointerType,o=s==gt;r&At&&(0===t.button||o)?e.push(t):r&(Dt|wt)&&(i=!0);var a=T(e,t.pointerId,"pointerId");0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var kt={touchstart:At,touchmove:_t,touchend:Dt,touchcancel:wt},Ut="touchstart touchmove touchend touchcancel";h(W,D,{handler:function(t){var e=kt[t.type],i=L.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:gt,srcEvent:t})}}),h(H,D,{handler:function(t,e,i){var n=i.pointerType==gt,r=i.pointerType==yt;if(n)this.mouse.allow=!1;else if(r&&!this.mouse.allow)return;e&(Dt|wt)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Gt=I(at.style,"touchAction"),Vt=Gt!==n,jt="compute",Zt="auto",Bt="manipulation",Jt="none",Kt="pan-x",Qt="pan-y";k.prototype={set:function(t){t==jt&&(t=this.compute()),Vt&&(this.manager.element.style[Gt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){l(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),U(t.join(" "))},preventDefaults:function(t){if(!Vt){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,r=m(n,Jt),s=m(n,Qt),o=m(n,Kt);return r||s&&i&Nt||o&&i&Mt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var $t=1,te=2,ee=4,ie=8,ne=ie,re=16,se=32;G.prototype={defaults:{},set:function(t){return a(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(s(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=Z(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return s(t,"dropRecognizeWith",this)?this:(t=Z(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(s(t,"requireFailure",this))return this;var e=this.requireFail;return t=Z(t,this),-1===T(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(s(t,"dropRequireFailure",this))return this;t=Z(t,this);var e=T(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?V(n):""),t)}var i=this,n=this.state;ie>n&&e(!0),e(),n>=ie&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=se)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(se|$t)))return!1;t++}return!0},recognize:function(t){var e=a({},t);return l(this.options.enable,[this,e])?(this.state&(ne|re|se)&&(this.state=$t),this.state=this.process(e),void(this.state&(te|ee|ie|re)&&this.tryEmit(e))):(this.reset(),void(this.state=se))},process:function(){},getTouchAction:function(){},reset:function(){}},h(B,G,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(te|ee),r=this.attrTest(t);return n&&(i&wt||!r)?e|re:n||r?i&Dt?e|ie:e&te?e|ee:te:se}}),h(J,B,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Nt&&e.push(Qt),t&Mt&&e.push(Kt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&Nt?(r=0===s?St:0>s?bt:Ct,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?St:0>o?Rt:zt,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return B.prototype.attrTest.call(this,t)&&(this.state&te||!(this.state&te)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=j(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),h(K,B,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Jt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&te)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),h(Q,G,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Zt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Dt|wt)&&!s)this.reset();else if(t.eventType&At)this.reset(),this._timer=r(function(){this.state=ne,this.tryEmit()},e.time,this);else if(t.eventType&Dt)return ne;return se},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ne&&(t&&t.eventType&Dt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=lt(),this.manager.emit(this.options.event,this._input)))}}),h($,B,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Jt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&te)}}),h(tt,B,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Nt|Mt,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Nt|Mt)?e=t.velocity:i&Nt?e=t.velocityX:i&Mt&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&ct(e)>this.options.velocity&&t.eventType&Dt},emit:function(t){var e=j(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),h(et,G,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Bt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&At&&0===this.count)return this.failTimeout();if(n&&s&&i){if(t.eventType!=Dt)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,a=!this.pCenter||O(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t;var u=this.count%e.taps;if(0===u)return this.hasRequireFailures()?(this._timer=r(function(){this.state=ne,this.tryEmit()},e.interval,this),te):ne}return se},failTimeout:function(){return this._timer=r(function(){this.state=se},this.options.interval,this),se},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ne&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),it.VERSION="2.0.3",it.defaults={domEvents:!1,touchAction:jt,enable:!0,inputTarget:null,inputClass:null,preset:[[$,{enable:!1}],[K,{enable:!1},["rotate"]],[tt,{direction:Nt}],[J,{direction:Nt},["swipe"]],[et],[et,{event:"doubletap",taps:2},["tap"]],[Q]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var oe=1,ae=2;nt.prototype={set:function(t){return a(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?ae:oe},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&ne)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],e.stopped===ae||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(te|ee|ie)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof G)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(s(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(s(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(T(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return o(g(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return o(g(t),function(t){e?i[t].splice(T(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&rt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},a(it,{INPUT_START:At,INPUT_MOVE:_t,INPUT_END:Dt,INPUT_CANCEL:wt,STATE_POSSIBLE:$t,STATE_BEGAN:te,STATE_CHANGED:ee,STATE_ENDED:ie,STATE_RECOGNIZED:ne,STATE_CANCELLED:re,STATE_FAILED:se,DIRECTION_NONE:St,DIRECTION_LEFT:bt,DIRECTION_RIGHT:Ct,DIRECTION_UP:Rt,DIRECTION_DOWN:zt,DIRECTION_HORIZONTAL:Nt,DIRECTION_VERTICAL:Mt,DIRECTION_ALL:Pt,Manager:nt,Input:D,TouchAction:k,TouchInput:W,MouseInput:F,PointerEventInput:q,TouchMouseInput:H,Recognizer:G,AttrRecognizer:B,Tap:et,Pan:J,Swipe:tt,Pinch:K,Rotate:$,Press:Q,on:f,off:d,each:o,merge:u,extend:a,inherit:h,bindFn:c,prefixed:I}),typeof define==ut&&define.amd?define(function(){return it}):"undefined"!=typeof module&&module.exports?module.exports=it:t[i]=it}(window,document,"Hammer");