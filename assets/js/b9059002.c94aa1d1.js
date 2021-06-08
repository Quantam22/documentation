(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6396],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5713:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={sidebar_position:5,sidebar_label:"Web",title:"Web SDK",id:"web",description:"Documentation for Web SDK",custom_edit_url:null},l={unversionedId:"sdk/web",id:"sdk/web",isDocsHomePage:!1,title:"Web SDK",description:"Documentation for Web SDK",source:"@site/docs/sdk/web.mdx",sourceDirName:"sdk",slug:"/sdk/web",permalink:"/documentation/sdk/web",editUrl:null,version:"current",sidebar_label:"Web",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Web",title:"Web SDK",id:"web",description:"Documentation for Web SDK",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"React Native SDK",permalink:"/documentation/sdk/react-native"},next:{title:"Cordova Plugin",permalink:"/documentation/sdk/cordova"}},s=[{value:"Install",id:"install",children:[]},{value:"Integrate",id:"integrate",children:[{value:"Initialize",id:"initialize",children:[]},{value:"Identify user",id:"identify-user",children:[]},{value:"Foreground tracking",id:"foreground-tracking",children:[]},{value:"Manual tracking",id:"manual-tracking",children:[]},{value:"Other APIs",id:"other-apis",children:[]}]},{value:"Support",id:"support",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the documentation for the web JavaScript SDK. Before integrating, read the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"native SDK documentation")," to familiarize yourself with the platform."),(0,i.kt)("p",null,"See the source on GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/radar-sdk-js"},"here"),". Or, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"radar-sdk-js")," package on npm ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/radar-sdk-js"},"here"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"In an HTML page, include the SDK using a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://js.radar.io/v3/radar.min.js"><\/script>\n')),(0,i.kt)("p",null,"In a web app, install the package from npm, then import the library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radar-sdk-js\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Radar from 'radar-sdk-js';\n")),(0,i.kt)("p",null,"The SDK is less than 20 KB minified."),(0,i.kt)("h2",{id:"integrate"},"Integrate"),(0,i.kt)("h3",{id:"initialize"},"Initialize"),(0,i.kt)("p",null,"To initialize the library, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.initialize(publishableKey);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"publishableKey")," is a string containing your Radar publishable API key."),(0,i.kt)("h3",{id:"identify-user"},"Identify user"),(0,i.kt)("p",null,"To identify the user when logged in, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setUserId(userId);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," is a stable unique ID for the user."),(0,i.kt)("p",null,"To set an optional dictionary of custom metadata for the user, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setMetadata(metadata);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is a JSON object with up to 16 keys and values of type string, boolean, or number."),(0,i.kt)("p",null,"Finally, to set an optional description for the user, displayed in the dashboard, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setDescription(description);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," is a string."),(0,i.kt)("p",null,"You only need to call these functions once, as these settings will be persisted across browser sessions in cookies."),(0,i.kt)("h3",{id:"foreground-tracking"},"Foreground tracking"),(0,i.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can track the user's location."),(0,i.kt)("p",null,"The SDK uses the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation"},"HTML5 geolocation API")," to determine the user's location."),(0,i.kt)("p",null,"To track the user's location, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce(function(err, result) {\n  if (!err) {\n    // do something with result.location, result.events, result.user\n  }\n});\n")),(0,i.kt)("p",null,"If the request is unsuccessful, ",(0,i.kt)("inlineCode",{parentName:"p"},"err")," will be a string, one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PUBLISHABLE_KEY")),": SDK not initialized"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PERMISSIONS")),": location permissions not granted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_LOCATION")),": location services error or timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_NETWORK")),": network error or timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_BAD_REQUEST")),": bad request (missing or invalid params)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_UNAUTHORIZED")),": unauthorized (invalid API key)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PAYMENT_REQUIRED")),": payment required (organization disabled or usage exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_FORBIDDEN")),": forbidden (insufficient permissions or no beta access)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_NOT_FOUND")),": not found"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_RATE_LIMIT")),": too many requests (",(0,i.kt)("a",{parentName:"li",href:"/api#track"},"rate limit")," exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_SERVER")),": internal server error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_UNKNOWN")),": unknown error")),(0,i.kt)("h3",{id:"manual-tracking"},"Manual tracking"),(0,i.kt)("p",null,"You can manually update the user's location by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce({\n  latitude: 39.2904,\n  longitude: -76.6122,\n  accuracy: 65\n}, function(err, result) {\n  if (!err) {\n    // do something with result.events, result.user\n  }\n});\n")),(0,i.kt)("h3",{id:"other-apis"},"Other APIs"),(0,i.kt)("p",null,"The web SDK also exposes APIs for anonymous context, geocoding, search, and distance."),(0,i.kt)("h4",{id:"get-location"},"Get location"),(0,i.kt)("p",null,"Get a single location update without sending it to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getLocation(function(err, result) {\n  if (!err) {\n    // do something with result.location\n  }\n});\n")),(0,i.kt)("h4",{id:"context"},"Context"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#context"},"context API"),", get context for a location without sending device or user identifiers to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getContext({\n  latitude: 40.783826,\n  longitude: -73.975363,\n  accuracy: 65\n}, function(err, result) {\n  if (!err) {\n    // do something with result.context\n  }\n});\n")),(0,i.kt)("h4",{id:"geocoding"},"Geocoding"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocoding API"),", geocode an address, converting address to coordinates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.geocode('20 jay st brooklyn ny', function(err, result) {\n  if (!err) {\n    // do something with result.addresses\n  }\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#reverse-geocode"},"reverse geocoding API"),", reverse geocode a location, converting coordinates to address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.reverseGeocode({\n  latitude: 40.783826,\n  longitude: -73.975363\n}, function(err, result) {\n  if (!err) {\n    // do something with result.addresses\n  }\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API"),", geocode the device's current IP address, converting IP address to city, state, and country:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.ipGeocode(function(err, result) {\n  if (!err) {\n    // do something with result.address\n  }\n});\n")),(0,i.kt)("h4",{id:"search"},"Search"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#autocomplete"},"autocomplete API"),", autocomplete partial addresses and place names, sorted by relevance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.autocomplete({\n  query: 'brooklyn roasting',\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  limit: 10\n}, function(err, result) {\n  if (!err) {\n    // do something with result.addresses\n  }\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API"),", search for geofences near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchGeofences({\n  radius: 1000,\n  tags: ['venue'],\n  limit: 10\n}, function(err, result) {\n  if (!err) {\n    // do something with result.geofences\n  }\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-places"},"places search API"),", search for places near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchPlaces({\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  radius: 1000,\n  chains: ['starbucks'],\n  limit: 10\n}, function(err, result) {\n  if (!err) {\n    // do something with result.places\n  }\n});\n")),(0,i.kt)("h4",{id:"distance"},"Distance"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),", calculate the travel distance and duration between two locations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getDistance({\n  origin: {\n    latitude: 40.78382,\n    longitude: -73.97536\n  },\n  destination: {\n    latitude: 40.70390,\n    longitude: -73.98670\n  },\n  modes: [\n    'foot',\n    'car'\n  ],\n  units: 'imperial'\n}, function(err, result) {\n  if (!err) {\n    // do something with result.routes\n  }\n});\n")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.io"},"support@radar.io"),"."))}p.isMDXComponent=!0}}]);