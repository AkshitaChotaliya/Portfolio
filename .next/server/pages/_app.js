/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AppContextFolder/AppContext.tsx":
/*!****************************************************!*\
  !*** ./components/AppContextFolder/AppContext.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFVBQVUsaUJBQUdELG9EQUFhLENBQUMsSUFBSSxDQUFDO0FBRXRDLGlFQUFlQyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vY29tcG9uZW50cy9BcHBDb250ZXh0Rm9sZGVyL0FwcENvbnRleHQudHN4P2VkYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppContextFolder/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var _components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContextFolder/AppContext */ \"./components/AppContextFolder/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// import NEXT_PUBLIC_GA_TRACKING_ID form .env\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;\n// import useRouter\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Load Google Analytics script\n        const script = document.createElement(\"script\");\n        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;\n        script.async = true;\n        document.head.appendChild(script);\n        // Initialize Google Analytics\n        window.dataLayer = window.dataLayer || [];\n        window.gtag = function() {\n            window.dataLayer.push(arguments);\n        };\n        window.gtag(\"js\", new Date());\n        window.gtag(\"config\", GA_TRACKING_ID, {\n            page_path: window.location.pathname\n        });\n        // Track page views\n        const handleRouteChange = (url)=>{\n            window.gtag(\"config\", GA_TRACKING_ID, {\n                page_path: url\n            });\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    const timerCookie = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const windowSizeTrackerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const { 0: sharedState , 1: setSharedState  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        portfolio: {\n            NavBar: {\n                IntervalEvent: null,\n                scrolling: null,\n                scrollSizeY: null\n            },\n            Scrolling: {\n                IntervalEvent: null\n            }\n        },\n        userdata: {\n            timerCookieRef: timerCookie,\n            windowSizeTracker: windowSizeTrackerRef,\n            mousePositionTracker: mousePositionRef\n        },\n        typing: {\n            keyboardEvent: null,\n            eventInputLostFocus: null\n        },\n        finishedLoading: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            sharedState,\n            setSharedState\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Akshita Portfolio\\\\Portfolio\\\\pages\\\\_app.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {}, void 0, false, {\n                fileName: \"D:\\\\Akshita Portfolio\\\\Portfolio\\\\pages\\\\_app.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Akshita Portfolio\\\\Portfolio\\\\pages\\\\_app.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQ3NELEtBQUssRUFBRTtZQUFFakIsV0FBVztZQUFFQyxjQUFjO1NBQUU7OzBCQUN6RCw4REFBQzVCLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7MEJBQzVCLDhEQUFDWiw4REFBUzs7OztvQkFBRzs7Ozs7O1lBQ08sQ0FDdEI7Q0FDSDtBQUVELGlFQUFlVSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSBcIkB2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0XCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IE5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEIGZvcm0gLmVudlxyXG5jb25zdCBHQV9UUkFDS0lOR19JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEO1xyXG4vLyBnbG9iYWwuZC50c1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBndGFnOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XHJcbiAgZGF0YUxheWVyOiBhbnlbXTtcclxufVxyXG59XHJcbi8vIGltcG9ydCB1c2VSb3V0ZXJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIExvYWQgR29vZ2xlIEFuYWx5dGljcyBzY3JpcHRcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtHQV9UUkFDS0lOR19JRH1gO1xyXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIEdvb2dsZSBBbmFseXRpY3NcclxuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgd2luZG93Lmd0YWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5ndGFnKFwianNcIiwgbmV3IERhdGUoKSk7XHJcbiAgICB3aW5kb3cuZ3RhZyhcImNvbmZpZ1wiLCBHQV9UUkFDS0lOR19JRCwge1xyXG4gICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRyYWNrIHBhZ2Ugdmlld3NcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbcm91dGVyLmV2ZW50c10pO1xyXG4gIGNvbnN0IHRpbWVyQ29va2llID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdpbmRvd1NpemVUcmFja2VyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG1vdXNlUG9zaXRpb25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3NoYXJlZFN0YXRlLCBzZXRTaGFyZWRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBwb3J0Zm9saW86IHtcclxuICAgICAgTmF2QmFyOiB7XHJcbiAgICAgICAgSW50ZXJ2YWxFdmVudDogbnVsbCxcclxuICAgICAgICBzY3JvbGxpbmc6IG51bGwsXHJcbiAgICAgICAgc2Nyb2xsU2l6ZVk6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIFNjcm9sbGluZzoge1xyXG4gICAgICAgIEludGVydmFsRXZlbnQ6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdXNlcmRhdGE6IHtcclxuICAgICAgdGltZXJDb29raWVSZWY6IHRpbWVyQ29va2llLFxyXG4gICAgICB3aW5kb3dTaXplVHJhY2tlcjogd2luZG93U2l6ZVRyYWNrZXJSZWYsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFja2VyOiBtb3VzZVBvc2l0aW9uUmVmLFxyXG4gICAgfSxcclxuICAgIHR5cGluZzoge1xyXG4gICAgICBrZXlib2FyZEV2ZW50OiBudWxsLFxyXG4gICAgICBldmVudElucHV0TG9zdEZvY3VzOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGZpbmlzaGVkTG9hZGluZzogZmFsc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNoYXJlZFN0YXRlLCBzZXRTaGFyZWRTdGF0ZSB9fT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8QW5hbHl0aWNzIC8+XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJBbmFseXRpY3MiLCJBcHBDb250ZXh0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHQV9UUkFDS0lOR19JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJkYXRhTGF5ZXIiLCJndGFnIiwicHVzaCIsImFyZ3VtZW50cyIsIkRhdGUiLCJwYWdlX3BhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJldmVudHMiLCJvbiIsIm9mZiIsInRpbWVyQ29va2llIiwid2luZG93U2l6ZVRyYWNrZXJSZWYiLCJtb3VzZVBvc2l0aW9uUmVmIiwic2hhcmVkU3RhdGUiLCJzZXRTaGFyZWRTdGF0ZSIsInBvcnRmb2xpbyIsIk5hdkJhciIsIkludGVydmFsRXZlbnQiLCJzY3JvbGxpbmciLCJzY3JvbGxTaXplWSIsIlNjcm9sbGluZyIsInVzZXJkYXRhIiwidGltZXJDb29raWVSZWYiLCJ3aW5kb3dTaXplVHJhY2tlciIsIm1vdXNlUG9zaXRpb25UcmFja2VyIiwidHlwaW5nIiwia2V5Ym9hcmRFdmVudCIsImV2ZW50SW5wdXRMb3N0Rm9jdXMiLCJmaW5pc2hlZExvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();