"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[863],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",s="alertSuccess_7EZp",l=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},960:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(970),s={sidebar_position:5,title:"Beacons",id:"beacons"},l=void 0,c={unversionedId:"beacons",id:"beacons",isDocsHomePage:!1,title:"Beacons",description:"Beacons is available on the { }",source:"@site/docs/beacons.mdx",sourceDirName:".",slug:"/beacons",permalink:"/documentation/beacons",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/beacons.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Beacons",id:"beacons"},sidebar:"defaultSidebar",previous:{title:"DMAs",permalink:"/documentation/regions/dmas"},next:{title:"Trip Tracking",permalink:"/documentation/trip-tracking"}},p=[{value:"How it works",id:"how-it-works",children:[]},{value:"Create beacons",id:"create-beacons",children:[{value:"Dashboard",id:"dashboard",children:[]},{value:"CSV import",id:"csv-import",children:[]},{value:"API",id:"api",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Beacons is available on the "," ",(0,o.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,o.kt)("p",null,"Beacons detects nearby Bluetooth beacons. Beacons are like hardware-enabled micro-geofences, accurate down to a few meters. For example, you might create a store-level ",(0,o.kt)("a",{parentName:"p",href:"/geofences"},"geofence")," and monitor beacons installed at the entrance, in the drive-thru, on registers, on tables, in aisles, or in parking spaces at each store."),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/tU9ITnOkNzy0wPUmepuIR/bcb4292390be1641b2ab80fa488f9d11/beacons.svg",className:"hero-image"}),(0,o.kt)("p",null,"Beacons provides the following user context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  beacons: [\n    {\n      uuid: "b9407f30-f5f8-466e-aff9-25556b57fe6d",\n      major: "100",\n      minor: "1",\n      description: "Store #123 - Register #1",\n      tag: "store-register",\n      externalId: "1",\n      enabled: true\n    },\n    {\n      uuid: "c9407f30-f5f8-466e-aff9-25556b57fe6d",\n      major: "100",\n      minor: "2",\n      description: "Store #123 - Register #2",\n      tag: "store-register",\n      externalId: "123-2",\n      enabled: true\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Beacons also provides the following events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.entered_beacon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.exited_beacon"))),(0,o.kt)("p",null,"You can receive events client-side via the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or server-side via ",(0,o.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),", including webhooks."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Beacon detection works on iOS and Android in the foreground and in the background. After you import beacons, Radar will sync nearby beacons to the SDK on every location update. Radar can range any beacons compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/ibeacon/"},"iBeacon"),"."),(0,o.kt)("p",null,"Just like the Radar generates ",(0,o.kt)("inlineCode",{parentName:"p"},"user.entered_geofence")," events after you import ",(0,o.kt)("a",{parentName:"p",href:"/geofences"},"geofences"),", Radar will generate ",(0,o.kt)("inlineCode",{parentName:"p"},"user.entered_beacon")," events after you import beacons."),(0,o.kt)("p",null,"To range beacons, the user must grant location permissions. If the user grants foreground location permissions, you can range nearby beacons in the foreground by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce(desiredAccuracy, beacons, completionHandler:)")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"beacons = true"),". If the user grants background location permissions, you can monitor beacons in the background by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.startTracking()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"trackingOptions.beacons = true"),". See the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK reference")," for more information."),(0,o.kt)("p",null,"Beacon entry and exit events are sent to the SDK, to ",(0,o.kt)("a",{parentName:"p",href:"/integrations#webhooks"},"webhooks"),", and to ",(0,o.kt)("a",{parentName:"p",href:"/integrations"},"integrations")," just like geofence entry and exit events."),(0,o.kt)("h2",{id:"create-beacons"},"Create beacons"),(0,o.kt)("p",null,"You can create beacons via the dashboard, CSV import, or through the API. You can create beacons in the Test environment for development and testing, and in the Live environment for production."),(0,o.kt)("p",null,"Like ",(0,o.kt)("a",{parentName:"p",href:"/geofences"},"geofences"),", you also specify the metadata for beacons when you create them, including ",(0,o.kt)("em",{parentName:"p"},"tag")," (a group for the beacon, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"store-register"),"), external ID (an external ID for the beacon that maps to your internal database, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"123-1"),"), ",(0,o.kt)("em",{parentName:"p"},"description")," (a display name for the beacon, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Store #123 - Register #1"),")."),(0,o.kt)("p",null,"You also specify the identifiers used to range the beacon, including ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"major"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"minor"),", as well as an approximate latitude and longitude used to sync nearby beacons (within 1 kilometer) to the SDK."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beacons should be uniquely referenced by tag and external ID, assigned by you when a beacon is created. To disable or rotate identifiers for a beacon, re-import the beacon with the same tag and external ID.")),(0,o.kt)("h3",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"To create a beacon via the dashboard, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/beacons"},"Beacons page")," and click the ",(0,o.kt)("em",{parentName:"p"},"New")," button. Optionally search for an address or place, then enter a type, tag, external ID, UUID, major, minor, and optional metadata. Click ",(0,o.kt)("em",{parentName:"p"},"Create")," to create the beacon."),(0,o.kt)("h3",{id:"csv-import"},"CSV import"),(0,o.kt)("p",null,"To import beacons via CSV import, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/beacons"},"Beacons page")," and click the ",(0,o.kt)("em",{parentName:"p"},"Import")," button. Then, select a CSV to upload."),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Headers are required as the first row of the CSV."),(0,o.kt)("p",null,"The CSV may have the following columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))," (string, required): A display name for the beacon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"tag"))," (string, optional): A group for the beacon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"externalId"))," (string, optional): An external ID for the beacon that maps to your internal database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"type"))," (string, required): The type of beacon. ",(0,o.kt)("inlineCode",{parentName:"li"},"ibeacon")," is currently supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"uuid"))," (string, required): The UUID of the beacon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"major"))," (string, required): The major ID of the beacon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"minor"))," (string, required): The minor ID of the beacon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"coordinates"))," (array, required): The approximate location of the beacon, used to sync nearby beacons (within 1 kilometer) to the SDK. A JSON string in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"[longitude,latitude]"),". ",(0,o.kt)("strong",{parentName:"li"},"Note that longitude comes before latitude, a GeoJSON convention.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"enabled"))," (boolean, required): If true, the beacon will generate events. If false, the beacon will not generate events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"metadata"))," (dictionary, optional): A set of custom key-value pairs for the beacon. A JSON string representing a dictionary with up to 16 keys and values of type string, boolean, or number.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If a beacon with the specified tag and external ID already exists, it will be updated. If not, it will be created.")),(0,o.kt)("p",null,"For example, to import beacons installed on registers and in parking spaces at a store, you could use the following CSV:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'description,tag,external id,type,uuid,major,minor,coordinates,enabled,metadata\n"Store #123 - Register #1",store-register,123-1,ibeacon,"b9407f30-f5f8-466e-aff9-25556b57fe6d",100,1,"[-73.975363,40.783826]",true,{}\n"Store #123 - Register #2",store-register,123-2,ibeacon,"c9407f30-f5f8-466e-aff9-25556B57fe6d",100,1,"[-73.975363,40.783826]",true,{}\n"Store #123 - Parking Space #1",store-parking,123-1,ibeacon,"d9407f30-f5f8-466e-aff9-25556b57fe6d",101,1,"[-73.975363,40.783826]",true,{}\n"Store #123 - Parking Space #2",store-parking,123-2,ibeacon,"e9407f30-f5f8-466e-aff9-25556b57fe6d",101,2,"[-73.975363,40.783826]",true,"{""type"":""parking""}"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Again, note that longitude comes before latitude, a GeoJSON convention.")),(0,o.kt)("p",null,"You can find a history of past imports on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/beacons/imports"},"Beacons import history page"),"."),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("p",null,"You can also create beacons programmatically via the ",(0,o.kt)("a",{parentName:"p",href:"/api"},"API"),". You can create a beacon via ",(0,o.kt)("span",{className:"badge badge--info"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/beacons"),", or upsert a beacon based on tag and external ID via ",(0,o.kt)("span",{className:"badge badge--warning"},"PUT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/beacons/:tag/:externalId"),"."),(0,o.kt)("p",null,"For example, to upsert a beacon within a store via the ",(0,o.kt)("a",{parentName:"p",href:"/api"},"API"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.radar.io/v1/beacons/drive-thru/store123-beacon-1" \\\n    -H "Authorization: prj_live_sk_..." \\\n    -X PUT \\\n    -d "description=Beacon 1" \\\n    -d "type=ibeacon" \\\n    -d "uuid=f7826da6-4fa2-4e98-0000-bc5b71e0893e" \\\n    -d "major=2298" \\\n    -d "minor=8515" \\\n    -d "coordinates=[-105.94653744704361,35.70654086799666]" \\\n    -d "enabled=true"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Again, note that longitude comes before latitude, a GeoJSON convention.")))}u.isMDXComponent=!0}}]);