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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLDJCQUFhRCxvREFBYUEsQ0FBQztBQUVqQyxpRUFBZUMsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXEFrc2hpdGEgUG9ydGZvbGlvXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXEFwcENvbnRleHRGb2xkZXJcXEFwcENvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJBcHBDb250ZXh0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppContextFolder/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var _components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContextFolder/AppContext */ \"./components/AppContextFolder/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// import NEXT_PUBLIC_GA_TRACKING_ID form .env\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;\n// import useRouter\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Load Google Analytics script\n            const script = document.createElement(\"script\");\n            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;\n            script.async = true;\n            document.head.appendChild(script);\n            // Initialize Google Analytics\n            window.dataLayer = window.dataLayer || [];\n            window.gtag = ({\n                \"MyApp.useEffect\": function() {\n                    window.dataLayer.push(arguments);\n                }\n            })[\"MyApp.useEffect\"];\n            window.gtag(\"js\", new Date());\n            window.gtag(\"config\", GA_TRACKING_ID, {\n                page_path: window.location.pathname\n            });\n            // Track page views\n            const handleRouteChange = {\n                \"MyApp.useEffect.handleRouteChange\": (url)=>{\n                    window.gtag(\"config\", GA_TRACKING_ID, {\n                        page_path: url\n                    });\n                }\n            }[\"MyApp.useEffect.handleRouteChange\"];\n            router.events.on(\"routeChangeComplete\", handleRouteChange);\n            return ({\n                \"MyApp.useEffect\": ()=>{\n                    router.events.off(\"routeChangeComplete\", handleRouteChange);\n                }\n            })[\"MyApp.useEffect\"];\n        }\n    }[\"MyApp.useEffect\"], [\n        router.events\n    ]);\n    const timerCookie = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const windowSizeTrackerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const [sharedState, setSharedState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        portfolio: {\n            NavBar: {\n                IntervalEvent: null,\n                scrolling: null,\n                scrollSizeY: null\n            },\n            Scrolling: {\n                IntervalEvent: null\n            }\n        },\n        userdata: {\n            timerCookieRef: timerCookie,\n            windowSizeTracker: windowSizeTrackerRef,\n            mousePositionTracker: mousePositionRef\n        },\n        typing: {\n            keyboardEvent: null,\n            eventInputLostFocus: null\n        },\n        finishedLoading: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            sharedState,\n            setSharedState\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Akshita Portfolio\\\\Portfolio\\\\pages\\\\_app.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {}, void 0, false, {\n                fileName: \"D:\\\\Akshita Portfolio\\\\Portfolio\\\\pages\\\\_app.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Akshita Portfolio\\\\Portfolio\\\\pages\\\\_app.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDcUI7QUFDZTtBQUNmO0FBQ3BELDhDQUE4QztBQUM5QyxNQUFNSyxpQkFBaUJDLFFBQVFDLEdBQUcsQ0FBQ0MsMEJBQTBCO0FBUTdELG1CQUFtQjtBQUNxQjtBQUV4QyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QkwsZ0RBQVNBOzJCQUFDO1lBQ1IsK0JBQStCO1lBQy9CLE1BQU1VLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztZQUN0Q0YsT0FBT0csR0FBRyxHQUFHLENBQUMsNENBQTRDLEVBQUVaLGdCQUFnQjtZQUM1RVMsT0FBT0ksS0FBSyxHQUFHO1lBQ2ZILFNBQVNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTjtZQUUxQiw4QkFBOEI7WUFDOUJPLE9BQU9DLFNBQVMsR0FBR0QsT0FBT0MsU0FBUyxJQUFJLEVBQUU7WUFDekNELE9BQU9FLElBQUk7bUNBQUc7b0JBQ1pGLE9BQU9DLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDQztnQkFDeEI7O1lBQ0FKLE9BQU9FLElBQUksQ0FBQyxNQUFNLElBQUlHO1lBQ3RCTCxPQUFPRSxJQUFJLENBQUMsVUFBVWxCLGdCQUFnQjtnQkFDcENzQixXQUFXTixPQUFPTyxRQUFRLENBQUNDLFFBQVE7WUFDckM7WUFFQSxtQkFBbUI7WUFDbkIsTUFBTUM7cURBQW9CLENBQUNDO29CQUN6QlYsT0FBT0UsSUFBSSxDQUFDLFVBQVVsQixnQkFBZ0I7d0JBQ3BDc0IsV0FBV0k7b0JBQ2I7Z0JBQ0Y7O1lBRUFsQixPQUFPbUIsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCSDtZQUV4QzttQ0FBTztvQkFDTGpCLE9BQU9tQixNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJKO2dCQUMzQzs7UUFDRjswQkFBRztRQUFDakIsT0FBT21CLE1BQU07S0FBQztJQUNsQixNQUFNRyxjQUFjakMsNkNBQU1BLENBQUM7SUFDM0IsTUFBTWtDLHVCQUF1QmxDLDZDQUFNQSxDQUFDO0lBQ3BDLE1BQU1tQyxtQkFBbUJuQyw2Q0FBTUEsQ0FBQztJQUNoQyxNQUFNLENBQUNvQyxhQUFhQyxlQUFlLEdBQUdwQywrQ0FBUUEsQ0FBQztRQUM3Q3FDLFdBQVc7WUFDVEMsUUFBUTtnQkFDTkMsZUFBZTtnQkFDZkMsV0FBVztnQkFDWEMsYUFBYTtZQUNmO1lBQ0FDLFdBQVc7Z0JBQ1RILGVBQWU7WUFDakI7UUFDRjtRQUNBSSxVQUFVO1lBQ1JDLGdCQUFnQlo7WUFDaEJhLG1CQUFtQlo7WUFDbkJhLHNCQUFzQlo7UUFDeEI7UUFDQWEsUUFBUTtZQUNOQyxlQUFlO1lBQ2ZDLHFCQUFxQjtRQUN2QjtRQUNBQyxpQkFBaUI7SUFDbkI7SUFDQSxxQkFDRSw4REFBQ3BELHdGQUFtQjtRQUFDc0QsT0FBTztZQUFFakI7WUFBYUM7UUFBZTs7MEJBQ3hELDhEQUFDNUI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ1osOERBQVNBOzs7Ozs7Ozs7OztBQUdoQjtBQUVBLGlFQUFlVSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJEOlxcQWtzaGl0YSBQb3J0Zm9saW9cXFBvcnRmb2xpb1xccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgeyBBbmFseXRpY3MgfSBmcm9tIFwiQHZlcmNlbC9hbmFseXRpY3MvcmVhY3RcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwQ29udGV4dEZvbGRlci9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUQgZm9ybSAuZW52XHJcbmNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUQ7XHJcbi8vIGdsb2JhbC5kLnRzXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIGd0YWc6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcclxuICBkYXRhTGF5ZXI6IGFueVtdO1xyXG59XHJcbn1cclxuLy8gaW1wb3J0IHVzZVJvdXRlclxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gTG9hZCBHb29nbGUgQW5hbHl0aWNzIHNjcmlwdFxyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke0dBX1RSQUNLSU5HX0lEfWA7XHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgR29vZ2xlIEFuYWx5dGljc1xyXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICB3aW5kb3cuZ3RhZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gICAgd2luZG93Lmd0YWcoXCJqc1wiLCBuZXcgRGF0ZSgpKTtcclxuICAgIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVHJhY2sgcGFnZSB2aWV3c1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgd2luZG93Lmd0YWcoXCJjb25maWdcIiwgR0FfVFJBQ0tJTkdfSUQsIHtcclxuICAgICAgICBwYWdlX3BhdGg6IHVybCxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XHJcbiAgY29uc3QgdGltZXJDb29raWUgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgd2luZG93U2l6ZVRyYWNrZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbW91c2VQb3NpdGlvblJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbc2hhcmVkU3RhdGUsIHNldFNoYXJlZFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHBvcnRmb2xpbzoge1xyXG4gICAgICBOYXZCYXI6IHtcclxuICAgICAgICBJbnRlcnZhbEV2ZW50OiBudWxsLFxyXG4gICAgICAgIHNjcm9sbGluZzogbnVsbCxcclxuICAgICAgICBzY3JvbGxTaXplWTogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgU2Nyb2xsaW5nOiB7XHJcbiAgICAgICAgSW50ZXJ2YWxFdmVudDogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB1c2VyZGF0YToge1xyXG4gICAgICB0aW1lckNvb2tpZVJlZjogdGltZXJDb29raWUsXHJcbiAgICAgIHdpbmRvd1NpemVUcmFja2VyOiB3aW5kb3dTaXplVHJhY2tlclJlZixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYWNrZXI6IG1vdXNlUG9zaXRpb25SZWYsXHJcbiAgICB9LFxyXG4gICAgdHlwaW5nOiB7XHJcbiAgICAgIGtleWJvYXJkRXZlbnQ6IG51bGwsXHJcbiAgICAgIGV2ZW50SW5wdXRMb3N0Rm9jdXM6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmluaXNoZWRMb2FkaW5nOiBmYWxzZSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2hhcmVkU3RhdGUsIHNldFNoYXJlZFN0YXRlIH19PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxBbmFseXRpY3MgLz5cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkFuYWx5dGljcyIsIkFwcENvbnRleHQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdBX1RSQUNLSU5HX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEIiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsImRhdGFMYXllciIsImd0YWciLCJwdXNoIiwiYXJndW1lbnRzIiwiRGF0ZSIsInBhZ2VfcGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImV2ZW50cyIsIm9uIiwib2ZmIiwidGltZXJDb29raWUiLCJ3aW5kb3dTaXplVHJhY2tlclJlZiIsIm1vdXNlUG9zaXRpb25SZWYiLCJzaGFyZWRTdGF0ZSIsInNldFNoYXJlZFN0YXRlIiwicG9ydGZvbGlvIiwiTmF2QmFyIiwiSW50ZXJ2YWxFdmVudCIsInNjcm9sbGluZyIsInNjcm9sbFNpemVZIiwiU2Nyb2xsaW5nIiwidXNlcmRhdGEiLCJ0aW1lckNvb2tpZVJlZiIsIndpbmRvd1NpemVUcmFja2VyIiwibW91c2VQb3NpdGlvblRyYWNrZXIiLCJ0eXBpbmciLCJrZXlib2FyZEV2ZW50IiwiZXZlbnRJbnB1dExvc3RGb2N1cyIsImZpbmlzaGVkTG9hZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();