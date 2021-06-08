(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4160],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),g=i,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2204:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294),i="Card_ShZN",r=function(e){var t=e.children,n=e.className;return a.createElement("div",{className:i+" "+n},t)}},708:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294),i="LinkCard_75d5",r=(n(1821),function(e){var t=e.linkTo,n=e.children;e.title;return a.createElement("a",{href:t,className:i},n)})},1821:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294),i="TileCard_3eEi",r="CardContent_2Ki1",o="CardTitle_1W1S",s=n(2204),l=function(e){var t=e.children,n=e.title;return a.createElement(s.Z,{className:i},a.createElement("div",{className:r},t),n&&a.createElement("div",{className:o},n))}},3193:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(708),s=n(1821),l={sidebar_position:9,title:"Integrations",slug:"/integrations",custom_edit_url:null},d={unversionedId:"integrations",id:"integrations",isDocsHomePage:!1,title:"Integrations",description:"Radar supports a number of server-side integrations. Event integrations like webhooks, mParticle, and Braze allow you to send events from Radar to other systems. Geofence integrations like geofence sync and Yext allow you to sync geofences from other systems to Radar. Finally, trip integrations allow you to start and stop trips and send live ETAs to other platforms.",source:"@site/docs/integrations.mdx",sourceDirName:".",slug:"/integrations",permalink:"/documentation/integrations",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Integrations",slug:"/integrations",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"API Reference",permalink:"/documentation/api"},next:{title:"Webhooks",permalink:"/documentation/integrations/webhooks"}},c=[{value:"Event integrations",id:"event-integrations",children:[{value:"Filters",id:"filters",children:[]}]},{value:"Geofence integrations",id:"geofence-integrations",children:[]},{value:"Trip integrations",id:"trip-integrations",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Radar supports a number of server-side integrations. ",(0,r.kt)("em",{parentName:"p"},"Event integrations")," like webhooks, mParticle, and Braze allow you to send events from Radar to other systems. ",(0,r.kt)("em",{parentName:"p"},"Geofence integrations")," like geofence sync and Yext allow you to sync geofences from other systems to Radar. Finally, ",(0,r.kt)("em",{parentName:"p"},"trip integrations")," allow you to ",(0,r.kt)("a",{parentName:"p",href:"/trip-tracking"},"start and stop trips")," and send live ETAs to other platforms."),(0,r.kt)("h2",{id:"event-integrations"},"Event integrations"),(0,r.kt)("div",{className:"deck"},(0,r.kt)(o.Z,{linkTo:"./webhooks",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Webhooks",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/75HOdPFYSWCFbXAoOIQhCM/15ae35fdef8e0a7d2e173018174aeee6/webhooks.png"}))),(0,r.kt)(o.Z,{linkTo:"./braze",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Braze",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/72J5q7LqJM5NrfdPiqVyTP/a3a67ededa4ffb126200196196c042a1/braze.png"}))),(0,r.kt)(o.Z,{linkTo:"./urban-airship",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Airship",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/45UBZEAVnVKlEHtil1iz0M/e5b001bac96c4da50143d4ac14d9fc4e/airship.png"}))),(0,r.kt)(o.Z,{linkTo:"./onesignal",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"OneSignal",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/80pHUR3gSl4z15J2cVa68/ea54ea0d92e223b2f4d32832e7ae53a4/onesignal.png"}))),(0,r.kt)(o.Z,{linkTo:"./mparticle",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"mParticle",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/29R4KVZ3aR1joNXfNuZw2G/4bac743a3df61229f0879aed5eeeabe9/mparticle.png"}))),(0,r.kt)(o.Z,{linkTo:"./segment",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Segment",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/27XQ1zGeHIhjm5LtLF3bgU/cbaeb56d29be5babd074b9643137b493/segment.png"}))),(0,r.kt)(o.Z,{linkTo:"./branch",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Branch",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/6w8utKLdZulCfgKb8xFxws/6224af9b6dbd808e8982afdc2d6124c1/branch.png"}))),(0,r.kt)(o.Z,{linkTo:"./lytics",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Lytics",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/6OH5TKmnhmdIPwt5AmDRKg/86045c964b5df9d4bd8a44a4b6d743bf/lytics.png"}))),(0,r.kt)(o.Z,{linkTo:"./Iterable",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Iterable",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/5JkL4nN6sFxdFP1FvWTsgI/77e1bc68e8e237fffad48f826ee22e8c/iterable.png"}))),(0,r.kt)(o.Z,{linkTo:"./leanplum",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Leanplum",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/3gsuQKmyyKbC9DxHeCGAMj/87bf2fa85899171df260fe2a465dd92f/leanplum-logo.png"}))),(0,r.kt)(o.Z,{linkTo:"./salesforce",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Salesforce",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/ejJlxW8GiFw6y93xitjto/5fb51966020c0a1973977439dda45b74/salesforce.png"}))),(0,r.kt)(o.Z,{linkTo:"./amplitude",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Amplitude",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/1daVtiOrTk4AXHLCpYyJrk/84e1f637cb1db99afa9dbc118c3bbd0c/amplitude.png"}))),(0,r.kt)(o.Z,{linkTo:"./mixpanel",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Mixpanel",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/3FE3T0zASXVYWhQFHyKc32/18d2d4ba0db0a8ce2ba23057155a7d23/mixpanel.png"}))),(0,r.kt)(o.Z,{linkTo:"./pinpoint",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Amazon Pinpoint",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/33MFOwGnSEZjMw1ccr6tNY/8a506cdb4d5d41db0b61e153cedec55b/amazonPinpointLogo.png"})))),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("p",null,"Click ",(0,r.kt)("em",{parentName:"p"},"Show Advanced")," on the ",(0,r.kt)("a",{parentName:"p",href:"/integrations"},"Integrations page")," under an integration to show advanced filters."),(0,r.kt)("p",null,"To filter event types sent to an integration, select or unselect event types under ",(0,r.kt)("em",{parentName:"p"},"Event Type Whitelist"),"."),(0,r.kt)("p",null,"To filter keys from the request body sent to an integration, add keys, comma-separated, to ",(0,r.kt)("em",{parentName:"p"},"Request Key Blacklist"),". For example, to skip sending ",(0,r.kt)("inlineCode",{parentName:"p"},"radar_geofence_ids")," to the Segment ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," call and to skip sending ",(0,r.kt)("inlineCode",{parentName:"p"},"geofence_id")," to the Segment ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," call, add ",(0,r.kt)("inlineCode",{parentName:"p"},"radar_geofence_ids,geofence_id")," to ",(0,r.kt)("em",{parentName:"p"},"Request Key Blacklist"),"."),(0,r.kt)("h2",{id:"geofence-integrations"},"Geofence integrations"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Geofence integrations")," allow you to sync geofences from other systems to Radar."),(0,r.kt)("div",{className:"deck"},(0,r.kt)(o.Z,{linkTo:"./yext",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Yext",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/79yasKMxHXJfO0VXdovKX5/bd28de435af26bfe101543050fd5f519/yext.png"}))),(0,r.kt)(o.Z,{linkTo:"./brandify",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Brandify",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/5dm9ubBk9xEXOZIS0ii4kO/dca3cd457248b3e2f12679d575e48dad/brandify.png"})))),(0,r.kt)("h2",{id:"trip-integrations"},"Trip integrations"),(0,r.kt)("div",{className:"deck"},(0,r.kt)(o.Z,{linkTo:"./olo",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Olo",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/Ddk41H23DrKONqUsmJfY4/4877547cb981c489177b9d5dbfe01c8b/olo-logo.png"})))))}m.isMDXComponent=!0}}]);