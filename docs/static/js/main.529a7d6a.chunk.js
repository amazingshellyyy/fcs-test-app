(this["webpackJsonpfcs-test-app"]=this["webpackJsonpfcs-test-app"]||[]).push([[0],{24:function(e,n,t){"use strict";(function(e){var o=t(10),c=t(0),r=t(26),i=t(2),s=t(17);n.a=function(){var n=Object(c.useCallback)((function(n){console.log("acceptedFiles",n),n.forEach((function(n){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){console.log("reader",t);var n=t.result;console.log("binaryStr",n);var o=e.from(n,"binary");console.log("buffer",o);var c=new s({},o);console.log("FCSfile",c)},console.log("file",n),t.readAsArrayBuffer(n)}))}),[]),t=Object(r.a)({onDrop:n}),a=t.getRootProps,l=t.getInputProps,f=t.isDragActive;return Object(i.jsxs)("div",Object(o.a)(Object(o.a)({},a()),{},{children:[Object(i.jsx)("input",Object(o.a)({},l())),f?Object(i.jsx)("p",{children:"Drop the files here ..."}):Object(i.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"})]}))}}).call(this,t(4).Buffer)},31:function(e,n,t){},32:function(e,n,t){},40:function(e,n){},42:function(e,n){},55:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(23),i=t.n(r),s=(t(31),t(32),t(24)),a=t(2);var l=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(s.a,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),f()}},[[55,1,2]]]);
//# sourceMappingURL=main.529a7d6a.chunk.js.map