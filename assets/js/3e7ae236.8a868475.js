"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8863],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2152:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o={sidebar_position:7,title:"Showing a notification when a user enters a geofence"},s=void 0,l={unversionedId:"tutorials/showing-a-notification-when-a-user-enters-a-geofence",id:"tutorials/showing-a-notification-when-a-user-enters-a-geofence",isDocsHomePage:!1,title:"Showing a notification when a user enters a geofence",description:"In this tutorial, we show you how to use the Radar iOS SDK and geofences to show a notification when a user enters a geofence.",source:"@site/docs/tutorials/showing-a-notification-when-a-user-enters-a-geofence.mdx",sourceDirName:"tutorials",slug:"/tutorials/showing-a-notification-when-a-user-enters-a-geofence",permalink:"/documentation/tutorials/showing-a-notification-when-a-user-enters-a-geofence",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/tutorials/showing-a-notification-when-a-user-enters-a-geofence.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Showing a notification when a user enters a geofence"},sidebar:"defaultSidebar",previous:{title:"Tutorials",permalink:"/documentation/tutorials"},next:{title:"Building an app with location-enabled curbside pickup",permalink:"/documentation/tutorials/building-an-app-with-location-enabled-curbside-pickup"}},p=[{value:"Languages used",id:"languages-used",children:[]},{value:"Features used",id:"features-used",children:[]},{value:"Steps",id:"steps",children:[{value:"Step 1: Sign up for Radar",id:"step-1-sign-up-for-radar",children:[]},{value:"Step 2: Import geofences",id:"step-2-import-geofences",children:[]},{value:"Step 3: Install the Radar iOS SDK",id:"step-3-install-the-radar-ios-sdk",children:[]},{value:"Step 4: Listen for events",id:"step-4-listen-for-events",children:[]}]},{value:"Sample code",id:"sample-code",children:[]},{value:"Support",id:"support",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, we show you how to use the Radar ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"iOS SDK")," and ",(0,i.kt)("a",{parentName:"p",href:"/geofences"},"geofences")," to show a notification when a user enters a geofence."),(0,i.kt)("p",null,"In this example, we show local notifications on iOS using ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios#delegate"},"RadarDelegate"),". Alternatively, you could show local notifications on Android using ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android#receiver"},"RadarReceiver"),", or send remote push notifications using a ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"webhook")," or ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"integrations")," with platforms like OneSignal, Braze, and Airship."),(0,i.kt)("h2",{id:"languages-used"},"Languages used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Swift")),(0,i.kt)("h2",{id:"features-used"},"Features used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/ios"},"iOS SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/geofences"},"Geofences"))),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"step-1-sign-up-for-radar"},"Step 1: Sign up for Radar"),(0,i.kt)("p",null,"If you haven't already, sign up for Radar to get your API key. You can create up to 1,000 geofences and make up to 100,000 API requests per month for free."),(0,i.kt)("a",{className:"btn btn-large btn-primary",href:"https://radar.com/signup"},"Get API Keys"),(0,i.kt)("h3",{id:"step-2-import-geofences"},"Step 2: Import geofences"),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofences"},"Geofences page"),", create a geofence."),(0,i.kt)("h3",{id:"step-3-install-the-radar-ios-sdk"},"Step 3: Install the Radar iOS SDK"),(0,i.kt)("p",null,"Initialize the SDK in your ",(0,i.kt)("inlineCode",{parentName:"p"},"AppDelegate")," class with your publishable API key. Make your ",(0,i.kt)("inlineCode",{parentName:"p"},"AppDelegate")," implement ",(0,i.kt)("inlineCode",{parentName:"p"},"RadarDelegate"),". Finally, ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios#request-permissions"},"request location permissions")," and start tracking:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate, RadarDelegate {\n\n    let locationManager = CLLocationManager()\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        Radar.initialize(publishableKey: "prj_test_pk_...")\n        Radar.setDelegate(self)\n\n        self.locationManager.requestAlwaysAuthorization()\n\n        Radar.startTracking(trackingOptions: RadarTrackingOptions.presetResponsive)\n\n        return true\n    }\n\n}\n')),(0,i.kt)("h3",{id:"step-4-listen-for-events"},"Step 4: Listen for events"),(0,i.kt)("p",null,"Implement ",(0,i.kt)("inlineCode",{parentName:"p"},"didReceiveEvents:user:")," to listen for geofence entry events and show notifications:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func didReceiveEvents(_ events: [RadarEvent], user: RadarUser) {\n    UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound]) { (granted, error) in\n    if granted {\n        for event in events {\n            if event.type == .userEnteredGeofence {\n                let content = UNMutableNotificationContent()\n                content.body = "You entered a geofence!"\n                content.sound = UNNotificationSound.default\n                content.categoryIdentifier = "geofence"\n\n                let request = UNNotificationRequest(identifier: event._id, content: content, trigger: nil)\n                UNUserNotificationCenter.current().add(request, withCompletionHandler: { (_) in })\n            }\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"sample-code"},"Sample code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\n\nimport UIKit\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate, RadarDelegate {\n\n    let locationManager = CLLocationManager()\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        Radar.initialize(publishableKey: "prj_test_pk_...")\n        Radar.setDelegate(self)\n\n        self.locationManager.requestAlwaysAuthorization()\n\n        Radar.startTracking(trackingOptions: RadarTrackingOptions.presetResponsive)\n\n        return true\n    }\n\n    func didReceiveEvents(_ events: [RadarEvent], user: RadarUser) {\n        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound]) { (granted, error) in\n        if granted {\n            for event in events {\n                if event.type == .userEnteredGeofence {\n                    let content = UNMutableNotificationContent()\n                    content.body = "You entered a geofence!"\n                    content.sound = UNNotificationSound.default\n                    content.categoryIdentifier = "geofence"\n\n                    let request = UNNotificationRequest(identifier: event._id, content: content, trigger: nil)\n                    UNUserNotificationCenter.current().add(request, withCompletionHandler: { (_) in })\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions or feedback on this documentation? Let us know! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}u.isMDXComponent=!0}}]);