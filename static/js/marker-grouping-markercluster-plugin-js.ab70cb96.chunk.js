(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[28],{50:function(t,n,e){"use strict";e.r(n);e(0);var o=e(108),a=e(69),i=e(73),p=e(72),r=e(96),c=e.n(r),l=(e(97),e(1)),s=[52.22977,21.01178],u=[{lat:52.230020586193795,lng:21.01083755493164,title:"point 1"},{lat:52.22924516170657,lng:21.011320352554325,title:"point 2"},{lat:52.229511304688444,lng:21.01270973682404,title:"point 3"},{lat:52.23040500771883,lng:21.012146472930908,title:"point 4"}];n.default=function(){return Object(l.jsxs)(o.a,{className:"markercluster-map",center:s,zoom:15,scrollWheelZoom:!1,children:[Object(l.jsx)(a.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(l.jsx)(c.a,{children:u.map((function(t,n){var e=t.lat,o=t.lng,a=t.title;return Object(l.jsx)(i.a,{position:[e,o],children:Object(l.jsx)(p.a,{children:a})},n)}))})]})}},72:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var o=e(76),a=e(64),i=e(0),p=Object(o.c)((function(t,n){return{instance:new a.Popup(t,n.overlayContainer),context:n}}),(function(t,n,e,o){var a=e.onClose,p=e.onOpen,r=e.position;Object(i.useEffect)((function(){var e=t.instance;function i(t){t.popup===e&&(e.update(),o(!0),null==p||p())}function c(t){t.popup===e&&(o(!1),null==a||a())}return n.map.on({popupopen:i,popupclose:c}),null==n.overlayContainer?(null!=r&&e.setLatLng(r),e.openOn(n.map)):n.overlayContainer.bindPopup(e),function(){n.map.off({popupopen:i,popupclose:c}),n.map.removeLayer(e)}}),[t,n,o,a,p,r])}))},73:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(70),a=e(66),i=e(76),p=e(64),r=Object(i.b)((function(t,n){var e=t.position,i=Object(a.a)(t,["position"]),r=new p.Marker(e,i);return{instance:r,context:Object(o.a)(Object(o.a)({},n),{},{overlayContainer:r})}}),(function(t,n,e){n.position!==e.position&&t.setLatLng(n.position),null!=n.icon&&n.icon!==e.icon&&t.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==e.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==e.opacity&&t.setOpacity(n.opacity),null!=t.dragging&&n.draggable!==e.draggable&&(!0===n.draggable?t.dragging.enable():t.dragging.disable())}))}}]);