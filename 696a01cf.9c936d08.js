(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),i=(n(0),n(185)),o={id:"api",title:"Applications API",sidebar_label:"Applications API"},r={unversionedId:"api",id:"version-4.x/api",isDocsHomePage:!1,title:"Applications API",description:"single-spa exports named functions and variables rather than a single default export.",source:"@site/versioned_docs/version-4.x/api.md",slug:"/api",permalink:"/docs/4.x/api",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/api.md",version:"4.x",sidebar_label:"Applications API",sidebar:"version-4.x/docs",previous:{title:"Parcels",permalink:"/docs/4.x/parcels-overview"},next:{title:"Parcels API",permalink:"/docs/4.x/parcels-api"}},s=[{value:"registerApplication",id:"registerapplication",children:[]},{value:"start",id:"start",children:[]},{value:"triggerAppChange",id:"triggerappchange",children:[]},{value:"navigateToUrl",id:"navigatetourl",children:[]},{value:"getMountedApps",id:"getmountedapps",children:[]},{value:"getAppNames",id:"getappnames",children:[]},{value:"getAppStatus",id:"getappstatus",children:[]},{value:"unloadApplication",id:"unloadapplication",children:[]},{value:"checkActivityFunctions",id:"checkactivityfunctions",children:[]},{value:"addErrorHandler",id:"adderrorhandler",children:[]},{value:"removeErrorHandler",id:"removeerrorhandler",children:[]},{value:"mountRootParcel",id:"mountrootparcel",children:[]},{value:"ensureJQuerySupport",id:"ensurejquerysupport",children:[]},{value:"setBootstrapMaxTime",id:"setbootstrapmaxtime",children:[]},{value:"setMountMaxTime",id:"setmountmaxtime",children:[]},{value:"setUnmountMaxTime",id:"setunmountmaxtime",children:[]},{value:"setUnloadMaxTime",id:"setunloadmaxtime",children:[]},{value:"before routing event",id:"before-routing-event",children:[]},{value:"routing event",id:"routing-event",children:[]},{value:"app-change event",id:"app-change-event",children:[]},{value:"no-app-change event",id:"no-app-change-event",children:[]},{value:"before-first-mount",id:"before-first-mount",children:[]},{value:"first-mount",id:"first-mount",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"single-spa exports named functions and variables rather than a single default export.\nThis means importing must happen in one of two ways:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { registerApplication, start } from 'single-spa';\n// or\nimport * as singleSpa from 'single-spa';\n")),Object(i.b)("h2",{id:"registerapplication"},"registerApplication"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.registerApplication(\n  'appName',\n  () => System.import('appName'),\n  location => location.pathname.startsWith('appName'),\n);\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"registerApplication")," is the most important api your root config will use. Use this function to register any application within single-spa."),Object(i.b)("p",null,"Note that if an application is registered from within another application, that no hierarchy will be maintained between the applications."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is described in detail inside of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"Configuration docs")))),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"appName: string"),Object(i.b)("dd",null,"App name that single-spa will register and reference this application with, and will be labelled with in dev tools."),Object(i.b)("dt",null,"applicationOrLoadingFn: () => <Function | Promise>"),Object(i.b)("dd",null,"Must be a loading function that either returns the resolved application or a promise."),Object(i.b)("dt",null,"activityFn: (location) => boolean"),Object(i.b)("dd",null,"Must be a pure function. The function is called with ",Object(i.b)("code",null,"window.location")," as the first argument !-- TODO: any only? --\x3e and should return a truthy value whenever the application should be active."),Object(i.b)("dt",null,"customProps?: Object = "),Object(i.b)("dd",null,"Will be passed to the application during each lifecycle method.")),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"start"},"start"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.start();\n")),Object(i.b)("p",null,"Must be called by your single spa config. Before ",Object(i.b)("inlineCode",{parentName:"p"},"start")," is called, applications will be loaded, but will never be bootstrapped, mounted or unmounted. The reason for ",Object(i.b)("inlineCode",{parentName:"p"},"start")," is to give you control over the performance of your single page application. For example, you may want to declare registered applications immediately (to start downloading the code for the active ones), but not actually mount the registered applications until an initial AJAX request (maybe to get information about the logged in user) has been completed. In that case, the best performance is achieved by calling ",Object(i.b)("inlineCode",{parentName:"p"},"registerApplication")," immediately, but calling ",Object(i.b)("inlineCode",{parentName:"p"},"start")," after the AJAX request is completed."),Object(i.b)("h3",null,"arguments"),Object(i.b)("p",null,"none"),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"triggerappchange"},"triggerAppChange"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.triggerAppChange();\n")),Object(i.b)("p",null,"Returns a Promise that will resolve/reject when all apps have mounted/unmounted. This was built for testing single-spa and is likely not\nneeded in a production application."),Object(i.b)("h3",null,"arguments"),Object(i.b)("p",null,"none"),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"Promise"),Object(i.b)("dd",null,"Returns a Promise that will resolve/reject when all apps have mounted.")),Object(i.b)("h2",{id:"navigatetourl"},"navigateToUrl"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Three ways of using navigateToUrl\nsingleSpa.navigateToUrl('/new-url');\nsingleSpa.navigateToUrl(document.querySelector('a'));\ndocument.querySelector('a').addEventListener(singleSpa.navigateToUrl);\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- A fourth way to use navigateToUrl, this one inside of your HTML --\x3e\n<a href="/new-url" onclick="singleSpaNavigate()">My link</a>\n')),Object(i.b)("p",null,"Use this utility function to easily perform url navigation between registered applications without needing to deal with ",Object(i.b)("inlineCode",{parentName:"p"},"event.preventDefault()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pushState"),", ",Object(i.b)("inlineCode",{parentName:"p"},"triggerAppChange()"),", etc."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"navigationObj: string | context | DOMEvent"),Object(i.b)("dd",null,"navigationObj must be one of the following types:",Object(i.b)("ul",null,Object(i.b)("li",null,"a url string."),Object(i.b)("li",null,"a context / thisArg that has an ",Object(i.b)("code",null,"href")," property; useful for calling ",Object(i.b)("code",null,"singleSpaNavigate.call(anchorElement)")," with a reference to the anchor element or other context."),Object(i.b)("li",null,"a DOMEvent object for a click event on a DOMElement that has an ",Object(i.b)("code",null,"href")," attribute; ideal for the ",Object(i.b)("code",null,'<a onclick="singleSpaNavigate"></a>')," use case.")))),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"getmountedapps"},"getMountedApps"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mountedAppNames = singleSpa.getMountedApps();\nconsole.log(mountedAppNames); // ['app1', 'app2', 'navbar']\n")),Object(i.b)("h3",null,"arguments"),Object(i.b)("p",null,"none"),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"appNames: string[]"),Object(i.b)("dd",null,"Each string is the name of a registered application that is currently ",Object(i.b)("code",null,"MOUNTED"),".")),Object(i.b)("h2",{id:"getappnames"},"getAppNames"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const appNames = singleSpa.getAppNames();\nconsole.log(appNames); // ['app1', 'app2', 'app3', 'navbar']\n")),Object(i.b)("h3",null,"arguments"),Object(i.b)("p",null,"none"),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"appNames: string[]"),Object(i.b)("dd",null,"Each string is the name of a registered application regardless of app status.")),Object(i.b)("h2",{id:"getappstatus"},"getAppStatus"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const status = singleSpa.getAppStatus('app1');\nconsole.log(status); // one of many statuses (see list below). e.g. MOUNTED\n")),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"appName: string"),Object(i.b)("dd",null,"Registered application name.")),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"appStatus: <string | null>"),Object(i.b)("dd",null,"Will be one of the following string constants, or ",Object(i.b)("code",null,"null")," if the app does not exist.",Object(i.b)("dl",{className:"dl-inline"},Object(i.b)("div",null,Object(i.b)("dt",null,"NOT_LOADED"),Object(i.b)("dd",null,"app has been registered with single-spa but has not yet been loaded.")),Object(i.b)("div",null,Object(i.b)("dt",null,"LOADING_SOURCE_CODE"),Object(i.b)("dd",null,"'s source code is being fetched.")),Object(i.b)("div",null,Object(i.b)("dt",null,"NOT_BOOTSTRAPPED"),Object(i.b)("dd",null,"app has been loaded but not bootstrapped.")),Object(i.b)("div",null,Object(i.b)("dt",null,"BOOTSTRAPPING"),Object(i.b)("dd",null,"the ",Object(i.b)("code",null,"bootstrap")," lifecycle function has been called but has not finished.")),Object(i.b)("div",null,Object(i.b)("dt",null,"NOT_MOUNTED"),Object(i.b)("dd",null,"app has been loaded and bootstrapped but not yet mounted.")),Object(i.b)("div",null,Object(i.b)("dt",null,"MOUNTING"),Object(i.b)("dd",null,"app is being mounted but not finished.")),Object(i.b)("div",null,Object(i.b)("dt",null,"MOUNTED"),Object(i.b)("dd",null,"app is currently active and is mounted to the DOM.")),Object(i.b)("div",null,Object(i.b)("dt",null,"UNMOUNTING"),Object(i.b)("dd",null,"app is currently being unmounted but has not finished.")),Object(i.b)("div",null,Object(i.b)("dt",null,"UNLOADING"),Object(i.b)("dd",null,"app is currently being unloaded but has not finished.")),Object(i.b)("div",null,Object(i.b)("dt",null,"SKIP_BECAUSE_BROKEN"),Object(i.b)("dd",null,"app threw an error during load, bootstrap, mount, or unmount and has been siloed because it is misbehaving and has been skipped. Other apps will continue on normally.")),Object(i.b)("div",null,Object(i.b)("dt",null,"LOAD_ERROR"),Object(i.b)("dd",null,"The app's loading function returned a promise that rejected. This is often due to a network error attempting to download the JavaScript bundle for the application. Single-spa will retry loading the application after the user navigates away from the current route and then comes back to it."))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note about LOAD_ERROR status")),Object(i.b)("p",null,"Note that if you're using SystemJS to load your bundles, you need to add the following code to get SystemJS to re-attempt the network request\nwhen your loading function calls ",Object(i.b)("inlineCode",{parentName:"p"},"System.import()")," on an application in ",Object(i.b)("inlineCode",{parentName:"p"},"LOAD_ERROR")," status."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.addErrorHandler(err => {\n  if (singleSpa.getAppStatus(err.appOrParcelName) === singleSpa.LOAD_ERROR) {\n    System.delete(System.resolve(err.appOrParcelName));\n  }\n});\n")),Object(i.b)("h2",{id:"unloadapplication"},"unloadApplication"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Unload the application right now, without waiting for it to naturally unmount.\nsingleSpa.unloadApplication('app1');\n\n// Unload the application only after it naturally unmounts due to a route change.\nsingleSpa.unloadApplication('app1', { waitForUnmount: true });\n")),Object(i.b)("p",null,"The purpose of unloading a registered application is to set it back to to a NOT_LOADED status, which means that it will be re-bootstrapped the next time it needs to mount. The main use-case for this was to allow for the hot-reloading of entire registered applications, but ",Object(i.b)("inlineCode",{parentName:"p"},"unloadApplication")," can be useful whenever you want to re-bootstrap your application."),Object(i.b)("p",null,"Single-spa performs the following steps when unloadApplication is called."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Call the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/4.x/api#unload"}),"unload lifecyle")," on the registered application that is being unloaded."),Object(i.b)("li",{parentName:"ol"},"Set the app status to NOT_LOADED"),Object(i.b)("li",{parentName:"ol"},"Trigger a reroute, during which single-spa will potentially mount the application that was just unloaded.")),Object(i.b)("p",null,"Because a registered application might be mounted when ",Object(i.b)("inlineCode",{parentName:"p"},"unloadApplication")," is called, you can specify whether you want to immediately unload or if you want to wait until the application is no longer mounted. This is done with the ",Object(i.b)("inlineCode",{parentName:"p"},"waitForUnmount")," option."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"appName: string"),Object(i.b)("dd",null,"Registered application name."),Object(i.b)("dt",null,"options?: {waitForUnmount: boolean = false}"),Object(i.b)("dd",null,"The options must be an object that has a ",Object(i.b)("code",null,"waitForUnmount")," property. When `waitForUnmount` is `false`, single-spa immediately unloads the specified registered application even if the app is currently mounted. If it is ",Object(i.b)("code",null,"true"),", single-spa will unload the registered application as soon as it is safe to do so (when the app status is not ",Object(i.b)("code",null,"MOUNTED"),").")),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"Promise"),Object(i.b)("dd",null,"This promise will be resolved when the registered application has been successfully removed.")),Object(i.b)("h2",{id:"checkactivityfunctions"},"checkActivityFunctions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const appsThatShouldBeActive = singleSpa.checkActivityFunctions();\nconsole.log(appsThatShouldBeActive); // ['app1']\n\nconst appsForACertainRoute = singleSpa.checkActivityFunctions({\n  pathname: '/app2',\n});\nconsole.log(appsForACertainRoute); // ['app2']\n")),Object(i.b)("p",null,"Will call every app's activity function with the ",Object(i.b)("inlineCode",{parentName:"p"},"mockWindowLocation")," and give you list of which applications should be mounted with that location."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"mockWindowLocation: string"),Object(i.b)("dd",null,"A string representing a window.location that will be used when calling every application's activity function to test if they return true.")),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"appNames: string[]"),Object(i.b)("dd",null,"Each string is the name of a registered application that matches the provided ",Object(i.b)("code",null,"mockWindowLocation"),".")),Object(i.b)("h2",{id:"adderrorhandler"},"addErrorHandler"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.addErrorHandler(err => {\n  console.log(err);\n  console.log(err.appOrParcelName);\n  console.log(singleSpa.getAppStatus(err.appOrParcelName));\n});\n")),Object(i.b)("p",null,"Adds a handler that will be called every time an application throws an error during a lifecycle function or activity function. When there are no error handlers, single-spa throws the error to the window."),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"errorHandler: Function(error: Error)"),Object(i.b)("dd",null,"Must be a function. Will be called with an ",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"},"Error object")," that additionally has a ",Object(i.b)("code",null,"message")," and ",Object(i.b)("code",null,"appOrParcelName")," property.")),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"removeerrorhandler"},"removeErrorHandler"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.addErrorHandler(handleErr);\nsingleSpa.removeErrorHandler(handleErr);\n\nfunction handleErr(err) {\n  console.log(err);\n}\n")),Object(i.b)("p",null,"Removes the given error handler function."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"errorHandler: Function"),Object(i.b)("dd",null,"Reference to the error handling function.")),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"boolean"),Object(i.b)("dd",null,Object(i.b)("code",null,"true")," if the error handler was removed, and ",Object(i.b)("code",null,"false")," if it was not.")),Object(i.b)("h2",{id:"mountrootparcel"},"mountRootParcel"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Synchronous mounting\nconst parcel = singleSpa.mountRootParcel(parcelConfig, {\n  prop1: 'value1',\n  domElement: document.getElementById('a-div'),\n});\nparcel.mountPromise.then(() => {\n  console.log('finished mounting the parcel!');\n});\n\n// Asynchronous mounting. Feel free to use webpack code splits or SystemJS dynamic loading\nconst parcel2 = singleSpa.mountRootParcel(() => import('./some-parcel.js'), {\n  prop1: 'value1',\n  domElement: document.getElementById('a-div'),\n});\n")),Object(i.b)("p",null,"Will create and mount a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/parcels-overview"}),"single-spa parcel"),"."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Parcels do not automatically unmount. Unmounting will need to be triggered manually."))),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"parcelConfig: Object or Loading Function"),Object(i.b)("dd",null,"[parcelConfig](/docs/4.x/parcels-api#parcel-configuration)"),Object(i.b)("dt",null,"parcelProps: Object with a domElement property"),Object(i.b)("dd",null,"[parcelProps](/docs/4.x/parcels-api#parcel-props)")),Object(i.b)("h3",null,"returns"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"Parcel object"),Object(i.b)("dd",null,"See ",Object(i.b)("a",{href:"/docs/parcels-api.html"},"Parcels API")," for more detail.")),Object(i.b)("h2",{id:"ensurejquerysupport"},"ensureJQuerySupport"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.ensureJQuerySupport(jQuery);\n")),Object(i.b)("p",null,"jQuery uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://learn.jquery.com/events/event-delegation/"}),"event delegation")," so single-spa must monkey-patch each version of jQuery on the page",". single-spa will attempt to do this automatically by looking for ",Object(i.b)("inlineCode",{parentName:"p"},"window.jQuery")," or ",Object(i.b)("inlineCode",{parentName:"p"},"window.$"),". Use this explicit method if multiple versions are included on your page or if jQuery is bound to a different global variable."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"jQuery?: JQueryFn = window.jQuery"),Object(i.b)("dd",null,"A reference to the global variable that jQuery has been bound to.")),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"setbootstrapmaxtime"},"setBootstrapMaxTime"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setBootstrapMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setBootstrapMaxTime(3000, true);\n")),Object(i.b)("p",null,"Sets the global configuration for bootstrap timeouts."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"millis: number"),Object(i.b)("dd",null,"Number of milliseconds to wait for bootstrap to complete before timing out."),Object(i.b)("dt",null,"dieOnTimeout: boolean = false"),Object(i.b)("dd",null,Object(i.b)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",Object(i.b)("code",null,"millis")," is reached."),Object(i.b)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),Object(i.b)("p",null,"Each registered application can override this behavior for itself."))),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"setmountmaxtime"},"setMountMaxTime"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setMountMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setMountMaxTime(3000, true);\n")),Object(i.b)("p",null,"Sets the global configuration for mount timeouts."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"millis: number"),Object(i.b)("dd",null,"Number of milliseconds to wait for mount to complete before timing out."),Object(i.b)("dt",null,"dieOnTimeout: boolean = false"),Object(i.b)("dd",null,Object(i.b)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",Object(i.b)("code",null,"millis")," is reached."),Object(i.b)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),Object(i.b)("p",null,"Each registered application can override this behavior for itself."))),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"setunmountmaxtime"},"setUnmountMaxTime"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setUnmountMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setUnmountMaxTime(3000, true);\n")),Object(i.b)("p",null,"Sets the global configuration for unmount timeouts."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"millis: number"),Object(i.b)("dd",null,"Number of milliseconds to wait for unmount to complete before timing out."),Object(i.b)("dt",null,"dieOnTimeout: boolean = false"),Object(i.b)("dd",null,Object(i.b)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",Object(i.b)("code",null,"millis")," is reached."),Object(i.b)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),Object(i.b)("p",null,"Each registered application can override this behavior for itself."))),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"setunloadmaxtime"},"setUnloadMaxTime"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setUnloadMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setUnloadMaxTime(3000, true);\n\n// don't do a console warning for slow lifecycles until 10 seconds have elapsed\nsingleSpa.setUnloadMaxTime(3000, true, 10000);\n")),Object(i.b)("p",null,"Sets the global configuration for unload timeouts."),Object(i.b)("h3",null,"arguments"),Object(i.b)("dl",{className:"args-list"},Object(i.b)("dt",null,"millis: number"),Object(i.b)("dd",null,"Number of milliseconds to wait for unload to complete before timing out."),Object(i.b)("dt",null,"dieOnTimeout: boolean = false"),Object(i.b)("dd",null,Object(i.b)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",Object(i.b)("code",null,"millis")," is reached."),Object(i.b)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),Object(i.b)("p",null,"Each registered application can override this behavior for itself.")),Object(i.b)("dt",null,"warningMillis: number = 1000"),Object(i.b)("dd",null,"Number of milliseconds to wait between console warnings that occur before the final timeout.")),Object(i.b)("h3",null,"returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"events"},"Events"),Object(i.b)("p",null,"All of the following are ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent"}),"custom events")," fired by single-spa on the window. The event ",Object(i.b)("inlineCode",{parentName:"p"},"detail")," property contains the native DOM event that triggered the reroute, such as a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent"}),"PopStateEvent")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent"}),"HashChangeEvent"),". These events can be handled by using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"}),Object(i.b)("inlineCode",{parentName:"a"},"addEventListener")),", like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('single-spa:before-routing-event', evt => {\n  const originalEvent = evt.detail;\n  console.log('single-spa event', originalEvent);\n});\n")),Object(i.b)("h2",{id:"before-routing-event"},"before routing event"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('single-spa:before-routing-event', () => {\n  console.log('single-spa is about to mount/unmount applications!');\n});\n")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:before-routing-event")," event is fired before every routing event occurs, which is after each hashchange, popstate, or triggerAppChange, even if no changes to registered applications were necessary."),Object(i.b)("h2",{id:"routing-event"},"routing event"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('single-spa:routing-event', () => {\n  console.log('single-spa finished mounting/unmounting applications!');\n});\n")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:routing-event")," event is fired every time that a routing event has occurred, which is after each hashchange, popstate, or triggerAppChange, even if no changes to registered applications were necessary; and after single-spa verified that all apps were correctly loaded, bootstrapped, mounted, and unmounted."),Object(i.b)("h2",{id:"app-change-event"},"app-change event"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('single-spa:app-change', () => {\n  console.log(\n    'A routing event occurred where at least one application was mounted/unmounted',\n  );\n});\n")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:app-change")," event is fired every time that one or more apps were loaded, bootstrapped, mounted, unmounted, or unloaded. It is similar to ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:routing-event")," except that it will not fire unless one or more apps were actually loaded, bootstrapped, mounted, or unmounted. A hashchange, popstate, or triggerAppChange that does not result in one of those changes will not cause the event to be fired."),Object(i.b)("h2",{id:"no-app-change-event"},"no-app-change event"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('single-spa:before-routing-event', () => {\n  console.log(\n    'A routing event occurred where zero applications were mounted/unmounted',\n  );\n});\n")),Object(i.b)("p",null,"When no applications were loaded, bootstrapped, mounted, unmounted, or unloaded, single-spa fires a ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:no-app-change")," event. This is the inverse of the ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:app-change")," event. Only one will be fired for each routing event."),Object(i.b)("h2",{id:"before-first-mount"},"before-first-mount"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('single-spa:before-first-mount', () => {\n  console.log(\n    'single-spa is about to mount the very first application for the first time',\n  );\n});\n")),Object(i.b)("p",null,"Before the first of any single-spa applications is mounted, single-spa fires a ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:before-first-mount")," event; therefore it will only be fired once ever. More specifically, it fires after the application is already loaded but before mounting."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Suggested use case")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"remove a loader bar that the user is seeing right before the first app will be mounted."))),Object(i.b)("h2",{id:"first-mount"},"first-mount"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('single-spa:first-mount', () => {\n  console.log('single-spa just mounted the very first application');\n});\n")),Object(i.b)("p",null,"After the first of any single-spa applications is mounted, single-spa fires a ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa:first-mount")," event; therefore it will only be fired once ever."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Suggested use case:")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"log the time it took before the user sees any of the apps mounted."))))}b.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?l.a.createElement(m,r(r({ref:t},c),{},{components:n})):l.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);