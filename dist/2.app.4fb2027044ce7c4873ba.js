(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"j/C5":function(n,e,t){var o;/*! keydrown - v1.2.7 - 2018-12-19 - http://jeremyckahn.github.com/keydrown */!function(r){var i=function(){var n={forEach:function(n,e){var t;for(t in n)n.hasOwnProperty(t)&&e(n[t],t)}},e=n.forEach;n.getTranspose=function(n){var t={};return e(n,(function(n,e){t[n]=e})),t},n.indexOf=function(n,e){if(n.indexOf)return n.indexOf(e);var t,o=n.length;for(t=0;t<o;t++)if(n[t]===e)return t;return-1};var t=n.indexOf;return n.pushUnique=function(n,e){return-1===t(n,e)&&(n.push(e),!0)},n.removeValue=function(n,e){var o=t(n,e);if(-1!==o)return n.splice(o,1)[0]},n.documentOn=function(n,e){r.addEventListener?r.addEventListener(n,e,!1):document.attachEvent&&document.attachEvent("on"+n,e)},n.requestAnimationFrame=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||function(n){r.setTimeout(n,1e3/60)},n.noop=function(){},n}(),u={ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,ENTER:13,SHIFT:16,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,BACKSPACE:8,DELETE:46,TAB:9,TILDE:192},c=i.getTranspose(u),a=[],p=function(){"use strict";function n(n){this.keyCode=n,this.cachedKeypressEvent=null}
/*!
   * The function to be invoked on every tick that the key is held down for.
   *
   * @type {function}
   */
/*!
   * Private helper function that binds or invokes a hander for `down`, `up',
   * or `press` for a `Key`.
   *
   * @param {Key} key
   * @param {string} handlerName
   * @param {function=} opt_handler If omitted, the handler is invoked.
   * @param {KeyboardEvent=} opt_evt If this function is being called by a
   * keyboard event handler, this is the raw KeyboardEvent Object provided from
   * the browser.
   */
function e(n,e,t,o){t?n[e]=t:n[e](o)}return n.prototype._downHandler=i.noop,
/*!
   * The function to be invoked when the key is released.
   *
   * @type {function}
   */
n.prototype._upHandler=i.noop,
/*!
   * The function to be invoked when the key is pressed.
   *
   * @type {function}
   */
n.prototype._pressHandler=i.noop,n.prototype.isDown=function(){return-1!==i.indexOf(a,this.keyCode)},n.prototype.down=function(n){e(this,"_downHandler",n,this.cachedKeypressEvent)},n.prototype.up=function(n,t){e(this,"_upHandler",n,t)},n.prototype.press=function(n,t){this.cachedKeypressEvent=t,e(this,"_pressHandler",n,t)},n.prototype.unbindDown=function(){this._downHandler=i.noop},n.prototype.unbindUp=function(){this._upHandler=i.noop},n.prototype.unbindPress=function(){this._pressHandler=i.noop},n}(),s=function(n){"use strict";var e={};e.Key=p;var t=!1,o=Date.now?Date.now:function(){return+new Date},a=o();return e.tick=function(){var t,o=n.length;for(t=0;t<o;t++){var r=n[t],i=c[r];i&&e[i].down()}},e.run=function(n){t=!0;var u=o(),c=u-a;i.requestAnimationFrame.call(r,(function(){t&&(e.run(n),n(c,u))})),a=u},e.stop=function(){t=!1},i.forEach(u,(function(n,t){e[t]=new p(n)})),i.documentOn("keydown",(function(t){var o=t.keyCode,r=c[o],u=i.pushUnique(n,o),a=e[r];if(a){var p=a.cachedKeypressEvent||{};(p.ctrlKey||p.shiftKey||p.metaKey)&&(u=!0),u&&a.press(null,t)}})),i.documentOn("keyup",(function(t){var o=i.removeValue(n,t.keyCode),r=c[o];r&&e[r].up(null,t)})),i.documentOn("blur",(function(t){i.forEach(n,(function(n){var t=c[n];t&&e[t].up()})),n.length=0})),e}(a);"object"==typeof n.exports?n.exports=s:void 0===(o=function(){return s}.call(e,t,e,n))||(n.exports=o)}(window)}}]);