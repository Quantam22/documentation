/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  defaultSidebar: [
    { type: "doc", id: "overview", label: "Overview" },
    "geofences",
    {
      type: "category",
      label: "Places",
      items: [
        { type: "doc", id: "places", label: "Overview" },
        "places/categories",
        "places/chains",
        "places/groups"
      ],
    },
    {
      type: "category",
      label: "Regions",
      items: [
        { type: "doc", id: "regions", label: "Overview" },
        "regions/countries",
        "regions/states",
        "regions/dmas",
      ],
    },
    "beacons",
    "trip-tracking",
    {
      type: "category",
      label: "SDK Reference",
      items: [
        "sdk/sdk-overview",
        "sdk/ios",
        "sdk/android",
        "sdk/react-native",
        "sdk/web",
        "sdk/cordova",
        "sdk/capacitor",
        "sdk/flutter",
        "sdk/xamarin",
        "sdk/tracking",
      ],
    },
    "api",
    {
      type: "category",
      label: "Integrations",
      items: [
        { type: "doc", id: "integrations", label: "Overview" },
        "integrations/webhooks",
        "integrations/urban-airship",
        "integrations/amplitude",
        "integrations/aws-pinpoint",
        "integrations/aws-s3",
        "integrations/branch",
        "integrations/brandify",
        "integrations/braze",
        "integrations/iterable",
        "integrations/leanplum",
        "integrations/lytics",
        "integrations/mixpanel",
        "integrations/mparticle",
        "integrations/olo",
        "integrations/onesignal",
        "integrations/salesforce",
        "integrations/segment",
        "integrations/yext",
      ],
    },
    "toolkit",
    {
      type: "category",
      label: "Tutorials",
      items: [
        { type: "doc", id: "tutorials", label: "Overview" },
        "tutorials/showing-a-notification-when-a-user-enters-a-geofence",
        "tutorials/building-an-app-with-location-enabled-curbside-pickup",
        "tutorials/building-a-delivery-tracker-with-live-location-and-etas",
        "tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",
        "tutorials/building-a-store-locator-on-ios",
        "tutorials/localizing-a-website-based-on-current-country-or-city",
      ],
    },
    "dashboard",
    "faqs",
  ],
  miscSidebar: [
    { type: "doc", id: "overview", label: "Overview" },
    "geofences",
    {
      type: "category",
      label: "Places",
      items: [
        { type: "doc", id: "places", label: "Overview" },
        "places/categories",
        "places/chains",
        "places/groups"
      ],
    },
    {
      type: "category",
      label: "Regions",
      items: [
        { type: "doc", id: "regions", label: "Overview" },
        "regions/countries",
        "regions/dmas",
        "regions/states",
      ],
    },
    "beacons",
    "trip-tracking",
    {
      type: "category",
      label: "SDK Reference",
      items: [
        "sdk/sdk-overview",
        "sdk/ios",
        "sdk/android",
        "sdk/react-native",
        "sdk/web",
        "sdk/cordova",
        "sdk/capacitor",
        "sdk/flutter",
        "sdk/tracking",
      ],
    },
    "api",
    {
      type: "category",
      label: "Integrations",
      items: [
        { type: "doc", id: "integrations", label: "Overview" },
        "integrations/webhooks",
        "integrations/urban-airship",
        "integrations/amplitude",
        "integrations/aws-pinpoint",
        "integrations/aws-s3",
        "integrations/branch",
        "integrations/brandify",
        "integrations/braze",
        "integrations/iterable",
        "integrations/leanplum",
        "integrations/lytics",
        "integrations/mixpanel",
        "integrations/mparticle",
        "integrations/olo",
        "integrations/onesignal",
        "integrations/salesforce",
        "integrations/segment",
        "integrations/yext",
      ],
    },
    "toolkit",
    {
      type: "category",
      label: "Tutorials",
      items: [
        { type: "doc", id: "tutorials", label: "Overview" },
        "tutorials/building-a-delivery-tracker-with-live-location-and-etas",
        "tutorials/building-a-store-locator-on-ios",
        "tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",
        "tutorials/building-an-app-with-location-enabled-curbside-pickup",
        "tutorials/localizing-a-website-based-on-current-country-or-city",
        "tutorials/showing-a-notification-when-a-user-enters-a-geofence",
      ],
    },
    "faqs",
    "vulnerability-disclosure-policy",
  ],
};
