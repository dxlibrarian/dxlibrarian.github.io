(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0tVQ":function(o,e,n){n("FlQf"),n("VJsP"),o.exports=n("WEpk").Array.from},IP1Z:function(o,e,n){"use strict";var t=n("2faE"),r=n("rr1i");o.exports=function(o,e,n){e in o?t.f(o,e,r(0,n)):o[e]=n}},Q2ey:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book",function(){return n("gKfl")}])},VJsP:function(o,e,n){"use strict";var t=n("2GTP"),r=n("Y7ZC"),a=n("JB68"),u=n("sNwI"),i=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),l=n("fNZA");r(r.S+r.F*!n("TuGD")((function(o){Array.from(o)})),"Array",{from:function(o){var e,n,r,f,k=a(o),d="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,v=void 0!==p,y=0,m=l(k);if(v&&(p=t(p,b>2?arguments[2]:void 0,2)),void 0==m||d==Array&&i(m))for(n=new d(e=c(k.length));e>y;y++)s(n,y,v?p(k[y],y):k[y]);else for(f=m.call(k),n=new d;!(r=f.next()).done;y++)s(n,y,v?u(f,p,[r.value,y],!0):r.value);return n.length=y,n}})},d04V:function(o,e,n){o.exports=n("0tVQ")},dfwq:function(o,e,n){"use strict";var t=n("p0XB"),r=n.n(t);var a=n("d04V"),u=n.n(a),i=n("yLu3"),c=n.n(i);function s(o){return function(o){if(r()(o)){for(var e=0,n=new Array(o.length);e<o.length;e++)n[e]=o[e];return n}}(o)||function(o){if(c()(Object(o))||"[object Arguments]"===Object.prototype.toString.call(o))return u()(o)}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return s}))},gKfl:function(o,e,n){"use strict";n.r(e);var t=n("nOHt"),r=n("q1tI"),a=n.n(r),u=n("5Yp1"),i=n("dfwq"),c=n("ANjH"),s=n("/MKj"),l=n("ZpDd"),f=n("NgOB"),k=n("3Mv1"),d=a.a.createElement,b="/images/avatar-placeholder.png";var p=Object(r.memo)((function(o){var e=o.displayMode,n=o.name,t=o.email,r=o.avatar,a=o.date,u=new Date(a),i=u.getDate(),c=u.getMonth()+1,s=u.getFullYear();return i<10&&(i="0".concat(i)),c<10&&(c="0".concat(c)),d(k.a,{topText:n,bottomText:"".concat(i,"/").concat(c,"/").concat(s," - NOW"),displayMode:e,elevation:1,img:null==r?b:r},d("a",{href:"mailto:".concat(t)},t))})),v=n("Z0lo"),y=a.a.createElement;function m(o){var e;return console.log({userId:o.profile.userId,book:o.search.books.find((e=o.bookInfo.bookId,function(o){return o.bookId===e})),users:o.bookInfo.users,displayMode:o.search.displayMode.toLowerCase()}),{userId:o.profile.userId,book:o.bookInfo.book,users:o.bookInfo.users,displayMode:o.search.displayMode.toLowerCase()}}var I=Object(r.memo)((function(o){var e=o.bookId,n=function(){var o=Object(s.b)();return Object(r.useMemo)((function(){return Object(c.b)({getBookInfoById:l.d,onTakeBook:l.y,onReturnBook:l.i,onTrackBook:l.z,onUntrackBook:l.A,onLikeBook:l.f,onDislikeBook:l.b},o)}),[o])}(),t=n.getBookInfoById,a=n.onTakeBook,u=n.onReturnBook,k=n.onTrackBook,d=n.onUntrackBook,b=n.onLikeBook,I=n.onDislikeBook,B=Object(s.c)(m),w=B.userId,g=B.book,h=B.users,j=B.displayMode,O=Object(r.useState)(null),M=O[0],T=O[1];if(Object(r.useEffect)((function(){M||(T(!0),t(e))})),!M||null==g)return null;var A=g.title,E=g.author,N=g.count,D=g.img,P=g.likesCount,x=g.likes,J=g.activeUsers,L=g.trackers,V=[y(f.a,{key:0,bookId:e,userId:w,title:A,author:E,count:N,displayMode:j,img:D,likes:x,likesCount:P,activeUsers:J,trackers:L,onTakeBook:a,onReturnBook:u,onTrackBook:k,onUntrackBook:d,onLikeBook:b,onDislikeBook:I})].concat(Object(i.a)(h.filter((function(o){var e=o.userId;return null!=J[e]})).map((function(o,e){var n=o.userId,t=o.name,r=o.email,a=o.avatar;return y(p,{key:e+1,name:t,email:r,date:J[n],displayMode:j,avatar:a})}))));return y(v.a,null,V)}));n.d(e,"default",(function(){return w}));var B=a.a.createElement;function w(){var o=Object(t.useRouter)().query.id;return B(u.a,null,null!=o?B(I,{bookId:o}):null)}}},[["Q2ey",1,2,0,3,4,6]]]);