(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6271],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(a),h=n,m=l["".concat(d,".").concat(h)]||l[h]||u[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=l;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},5081:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i={sidebar_position:12,title:"Dashboard",id:"dashboard"},s={unversionedId:"dashboard",id:"dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Use the Radar dashboard to manage, explore, and analyze your Radar data, such as geofences, users, events, and trips.",source:"@site/docs/dashboard.mdx",sourceDirName:".",slug:"/dashboard",permalink:"/documentation/dashboard",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/dashboard.mdx",version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Dashboard",id:"dashboard"},sidebar:"defaultSidebar",previous:{title:"Localizing a website based on current country or city",permalink:"/documentation/tutorials/localizing-a-website-based-on-current-country-or-city"},next:{title:"FAQs",permalink:"/documentation/faqs"}},d=[{value:"Simulator",id:"simulator",children:[{value:"How it works",id:"how-it-works",children:[]}]}],p={toc:d};function c(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use the Radar ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard"},"dashboard")," to manage, explore, and analyze your Radar data, such as ",(0,o.kt)("a",{parentName:"p",href:"/geofences"},"geofences"),", ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/users"},"users"),", ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/events"},"events"),", and ",(0,o.kt)("a",{parentName:"p",href:"/trip-tracking"},"trips"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard"},"dashboard")," can also be used to configure ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/integrations"},"integrations"),", ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/settings"},"project settings")," such as enabled features (e.g., ",(0,o.kt)("a",{parentName:"p",href:"/places"},"places"),") and event types (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"user.exited_place"),"), and ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/privacy"},"custom data retention windows"),"."),(0,o.kt)("h2",{id:"simulator"},"Simulator"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/simulate"},"simulator")," is the easiest way to generate location updates to test and visualize entry and exit events at will. Gone are the days of needing to drive around or download spoofing apps to try out location-enabled features. The simulator acts as a playground to experiment with our API without any code!"),(0,o.kt)("h3",{id:"how-it-works"},"How it works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Click around the map to generate locations and events.")," The activity feed is populated in real-time to mirror how our APIs would surface locations and events in your app. The data generated flows through to your enabled ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/integrations"},"integrations")," in the corresponding environment. The locations and events generated abide by your project's ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/settings"},"settings")," and will persist across the dashboard. To avoid any production side effects, use the test environment with the default user provided (",(0,o.kt)("inlineCode",{parentName:"p"},"simulated-user-id"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Simulate a target user.")," To simulate a given ",(0,o.kt)("a",{parentName:"p",href:"/api#users"},"user"),", click into that specific user on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/users"},"users"),' page and hit the "Simulate" button. You can also set custom user metadata, app-specific information that downstream systems can act upon, such as whether a user has been activated or membership in a target cohort.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Simulate a trip.")," There are 3 fields necessary to simulate a ",(0,o.kt)("a",{parentName:"p",href:"/trip-tracking"},"trip"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"externalId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationGeofenceTag"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationGeofenceExternalId"),'. You can enter them manually or select a geofence on the map and click "Set as trip destination" to autofill these values. Then, click "Start Trip" to officially kick off and activate the trip! As you click around, you\'ll notice events such as ',(0,o.kt)("inlineCode",{parentName:"p"},"user.approaching_trip_destination")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user.arrived_at_trip_destination"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator.gif",src:a(7586).Z})))}c.isMDXComponent=!0},7586:function(e,t,a){"use strict";t.Z=a.p+"assets/images/mock_tracking-effd78695dc9d8d76e6e028f9bee0a7e.gif"}}]);