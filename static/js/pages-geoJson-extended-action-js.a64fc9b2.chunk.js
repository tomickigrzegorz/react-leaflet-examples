(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[25],{53:function(e,t,o){"use strict";o.r(t);var n=o(81),a=o(8),i=o(0),c=o(131),l=o(96),r=o(122),s=o(82),p=o.n(s),f=o(107),u=o(91),h=o(1),b=[52,19.2];function d(e,t){t.on("mouseover",(function(o){!function(e,t){e.properties&&e.properties.nazwa&&t.bindPopup(e.properties.nazwa)}(e,t),this.openPopup(),this.setStyle({fillColor:"#eb4034",weight:2,color:"#eb4034",fillOpacity:.7})})),t.on("mouseout",(function(){this.closePopup(),this.setStyle({fillColor:"#3388ff",weight:2,color:"#3388ff",fillOpacity:.2})}))}t.default=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),o=t[0],s=t[1];return Object(i.useEffect)((function(){if(o){var e=p.a.control({position:"bottomleft"});e.onAdd=function(){var e=p.a.DomUtil.create("div","legend");return e.innerHTML="click/hover on polygon",e},e.addTo(o)}}),[o]),Object(h.jsxs)(c.a,{whenCreated:s,center:b,zoom:6,scrollWheelZoom:!1,children:[Object(h.jsx)(l.a,Object(n.a)({},u.a)),Object(h.jsx)(r.a,{data:f,onEachFeature:d})]})}}}]);