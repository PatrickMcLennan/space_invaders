(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{VR46:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),c=n.n(r),a=n("ZMKu"),l=n("o13o"),i=n("eVmc"),u=n("QJiT"),o=n("vOnD");function g(){var e,t,n=(e=["\n  ",";\n  margin: auto auto 50px auto;\n  fill: white;\n  backface-visibility: visible;\n  perspective: 500px;\n  transition: all 0.2s;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return g=function(){return n},n}var s=Object(o.d)(a.b.svg)(g(),(function(e){return e.theme.svgSize})),f=(n("w7Wj"),n("ls82"));f.mark(m);function m(){var e=f.mark(p),t=Object(i.b)().inputState,n=(Object(i.a)().gameState,[Object(a.c)(0),Object(a.c)(0)]),l=n[0],o=n[1],g=Object(r.useRef)(null),m=function(e,t){return t.includes(e)},b=function(e,t){return{x:l.get()+e,y:o.get()+t}},E=function(e){return m(u.a.Up,e)&&m(u.a.Right,e)?b(20,-20):m(u.a.Up,e)&&m(u.a.Left,e)?b(-20,-20):m(u.a.Down,e)&&m(u.a.Right,e)?b(20,20):m(u.a.Down,e)&&m(u.a.Left,e)?b(-20,20):m(u.a.Up,e)?b(0,-20):m(u.a.Right,e)?b(20,0):m(u.a.Down,e)?b(0,20):m(u.a.Left,e)?b(-20,0):b(0,0)};function p(n){var r,c,a,i,s,b;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.length){e.next=2;break}return e.abrupt("return");case 2:return r=g.current.getBoundingClientRect(),c=r.left,a=r.bottom,i=r.right,s=r.top,b=E(n),s<0&&m(u.a.Up,n)||a>window.innerHeight&&m(u.a.Down,n)?l.set(b.x):(c<0&&m(u.a.Left,n)||i>window.innerWidth&&m(u.a.Right,n)||l.set(b.x),o.set(b.y)),e.next=7,setTimeout((function(){return p(t).next()}),200);case 7:e.sent;case 8:case"end":return e.stop()}}),e)}return Object(r.useEffect)((function(){console.log(t.length),t.length?p(t).next():p(t).return()}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(s,{version:"1.1",style:{x:l.get(),y:o.get()},ref:g,viewBox:"0 0 572.146 572.146"},c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M37.691,414.201c3.863-4.102,7.622-11.705,7.077-36.078l109.366-10.979c-13.722,31.365-23.285,52.699-23.294,52.719\r\n\r\n\t\t\tc-0.191,0.41-0.344,0.832-0.469,1.262c-0.602,2.113-3.337,13.023,2.716,21.066c2.41,3.203,7.019,7.018,15.31,7.018\r\n\r\n\t\t\tc4.083,0,8.635-0.926,13.933-2.83c8.807-3.174,20.407-6.004,33.957-8.318v22.566c0,5.289,4.274,9.562,9.562,9.562h57.375\r\n\r\n\t\t\tc5.288,0,9.562-4.273,9.562-9.562v-29.223l18.159-0.143c4.112,0.037,6.952,0.123,10.528,0.229v29.137\r\n\r\n\t\t\tc0,5.289,4.274,9.562,9.562,9.562h57.375c5.288,0,9.562-4.273,9.562-9.562v-22.098c13.789,2.457,22.778,5.287,29.854,7.822\r\n\r\n\t\t\tc5.297,1.912,9.82,2.84,13.855,2.84c8.664,0,13.158-4.418,15.062-7.059c5.891-8.166,2.668-19.238,1.96-21.371\r\n\r\n\t\t\tc-0.105-0.316-0.21-0.613-0.354-0.918c0,0-9.668-21.545-23.495-53.178l112.512,11.256c-0.545,24.289,3.194,31.861,7.038,35.936\r\n\r\n\t\t\tc2.592,2.744,5.986,4.246,9.554,4.246c1.606,0,3.012-0.297,4.179-0.709c2.572-0.439,5.642-1.662,8.567-4.617\r\n\r\n\t\t\tc7.766-7.861,16.534-29.52,15.329-128.033l-0.048-4.705c0-45.087-5.47-98.829-31.547-98.829c-5.977,0-11.331,2.41-15.453,6.971\r\n\r\n\t\t\tc-9.342,10.309-10.681,30.839-10.442,44.36l-165.307-21.841c-3.203-8.061-6.244-15.883-9.094-23.332\r\n\r\n\t\t\tc-17.776-46.589-33.555-74.597-46.866-83.223c-2.219-1.444-4.953-2.19-8.089-2.19c-2.926,0-5.594,0.641-6.101,0.775\r\n\r\n\t\t\tc-0.603,0.162-1.195,0.373-1.759,0.641c-4.916,2.352-19.861,9.524-48.271,83.987c-2.888,7.583-5.996,15.549-9.257,23.744\r\n\r\n\t\t\tL57.61,232.542c0.21-13.091-1.167-32.694-10.28-42.782c-4.16-4.6-9.562-7.038-15.616-7.038c-26.086,0-31.556,53.33-31.556,98.073\r\n\r\n\t\t\tL0.11,285.49c-1.195,98.188,7.555,119.799,15.319,127.65c2.955,2.992,6.062,4.217,8.635,4.646\r\n\r\n\t\t\tC27.784,419.012,33.952,418.15,37.691,414.201z M229.764,244.065c0.21-0.698,5.422-17.471,17.394-47.66\r\n\r\n\t\t\tc11.236-28.324,31.068-30.514,36.882-30.514c1.416,0,2.228,0.124,2.228,0.124c36.94,0.545,51.609,75.391,52.221,78.575\r\n\r\n\t\t\tc0.258,1.396-0.105,2.85-1.014,3.94c-0.899,1.09-2.247,1.721-3.672,1.721l0,0l0,0h-99.469l0,0c-1.521,0-2.945-0.717-3.844-1.941\r\n\r\n\t\t\tC229.572,247.087,229.314,245.509,229.764,244.065z M291.91,275.201V394.57c0,6.1-4.284,11.062-9.562,11.062\r\n\r\n\t\t\ts-9.562-4.973-9.562-11.062V275.201c0-6.101,4.284-11.064,9.562-11.064S291.91,269.11,291.91,275.201z"}))),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null)))}function b(){var e,t,n=(e=["\n  display: flex;\n  height: 100%;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return b=function(){return n},n}var E=Object(o.d)(a.b.section)(b());t.default=function(){return c.a.createElement(a.a,null,c.a.createElement(E,{initial:"initial",animate:"animate",exit:"exit",variants:l.a},c.a.createElement(m,null)))}}}]);