(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[19],{102:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var o=t(76),i=t(64),a=Object(o.a)((function(n){return new i.Control.Zoom(n)}))},44:function(n,e,t){"use strict";t.r(e);var o,i,a=t(71),r=t(82),c=t(0),s=t(108),u=t(102),p=t(69),l=t(73),f=t(72),d=t(64),b=t.n(d),O=t(83),g=t(1),x=O.a.div(o||(o=Object(r.a)(["\n  position: relative;\n"]))),j=O.a.div(i||(i=Object(r.a)(["\n  position: absolute;\n  z-index: 999;\n  border: 2px solid #0084ff;\n  top: 15px;\n  bottom: 15px;\n  left: 15px;\n  width: 30%;\n  background: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 10px rgb(0 140 255 / 20%);\n  overflow: hidden;\n"]))),v=[52.22977,21.01178];e.default=function(){var n=Object(c.useRef)(0),e=Object(c.useState)(null),t=Object(a.a)(e,2),o=t[0],i=t[1];return Object(c.useEffect)((function(){if(o){var e=n.current.offsetWidth,t=[];o.eachLayer((function(n){n instanceof b.a.Marker&&t.push(n)}));var i=b.a.featureGroup(t).getBounds();function a(){o.fitBounds(i,{paddingTopLeft:[e+10,10]})}return a(),window.addEventListener("resize",a),function(n){window.removeEventListener("resize",a)}}}),[o]),Object(g.jsxs)(x,{children:[Object(g.jsx)(j,{ref:n,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a deserunt distinctio vitae! Dolores officiis animi ab ut officia consequuntur fuga, possimus et eligendi, facilis libero nulla repellat modi magnam!"}),Object(g.jsxs)(s.a,{whenCreated:i,center:v,zoom:18,zoomControl:!1,scrollWheelZoom:!1,children:[Object(g.jsx)(u.a,{position:"topright"}),Object(g.jsx)(p.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(g.jsx)(l.a,{position:v,children:Object(g.jsx)(f.a,{children:"Center Warsaw"})})]})]})}},68:function(n,e,t){"use strict";function o(n,e,t){var o=e.opacity,i=e.zIndex;null!=o&&o!==t.opacity&&n.setOpacity(o),null!=i&&i!==t.zIndex&&n.setZIndex(i)}t.d(e,"a",(function(){return o}))},69:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var o=t(66),i=t(76),a=t(79),r=t(68),c=t(64),s=Object(i.e)((function(n,e){var t=n.url,i=Object(o.a)(n,["url"]);return{instance:new c.TileLayer(t,Object(a.a)(i,e)),context:e}}),r.a)},72:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var o=t(76),i=t(64),a=t(0),r=Object(o.c)((function(n,e){return{instance:new i.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,o){var i=t.onClose,r=t.onOpen,c=t.position;Object(a.useEffect)((function(){var t=n.instance;function a(n){n.popup===t&&(t.update(),o(!0),null==r||r())}function s(n){n.popup===t&&(o(!1),null==i||i())}return e.map.on({popupopen:a,popupclose:s}),null==e.overlayContainer?(null!=c&&t.setLatLng(c),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){e.map.off({popupopen:a,popupclose:s}),e.map.removeLayer(t)}}),[n,e,o,i,r,c])}))},73:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var o=t(70),i=t(66),a=t(76),r=t(64),c=Object(a.b)((function(n,e){var t=n.position,a=Object(i.a)(n,["position"]),c=new r.Marker(t,a);return{instance:c,context:Object(o.a)(Object(o.a)({},e),{},{overlayContainer:c})}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())}))}}]);