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

/***/ "./components/GoogleAnalytics.jsx":
/*!****************************************!*\
  !*** ./components/GoogleAnalytics.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// @ts-ignore\nconst addPageView = (url)=>{\n    if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID) return;\n    // @ts-ignore\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\nconst GoogleAnalytics = ()=>{\n    if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID) return;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // @ts-ignore\n        const handleRouteChange = (url)=>{\n            addPageView(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"afterInteractive\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tejas\\\\Downloads\\\\Compressed\\\\Munchyroll\\\\components\\\\GoogleAnalytics.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"gtag-init\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {\n        page_path: window.location.pathname,\n      });\n    `\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tejas\\\\Downloads\\\\Compressed\\\\Munchyroll\\\\components\\\\GoogleAnalytics.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleAnalytics);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvb2dsZUFuYWx5dGljcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBQ0M7QUFFbEMsYUFBYTtBQUNiLE1BQU1HLGNBQWMsQ0FBQ0M7SUFDbkIsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLDBCQUEwQixFQUFFO0lBQzdDLGFBQWE7SUFDYkMsT0FBT0MsSUFBSSxDQUFDLFVBQVVDLGdCQUFnQjtRQUNwQ0MsV0FBV1A7SUFDYjtBQUNGO0FBRUEsTUFBTVEsa0JBQWtCO0lBQ3RCLElBQUksQ0FBQ1AsUUFBUUMsR0FBRyxDQUFDQywwQkFBMEIsRUFBRTtJQUM3QyxNQUFNTSxTQUFTYixzREFBU0E7SUFFeEJFLGdEQUFTQSxDQUFDO1FBQ1IsYUFBYTtRQUNiLE1BQU1ZLG9CQUFvQixDQUFDVjtZQUN6QkQsWUFBWUM7UUFDZDtRQUNBUyxPQUFPRSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJGO1FBQ3hDLE9BQU87WUFDTEQsT0FBT0UsTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCSDtRQUMzQztJQUNGLEdBQUc7UUFBQ0QsT0FBT0UsTUFBTTtLQUFDO0lBQ2xCLHFCQUNFOzswQkFDRSw4REFBQ2Qsb0RBQU1BO2dCQUNMaUIsVUFBUztnQkFDVEMsS0FBSyxDQUFDLDRDQUE0QyxFQUFFZCxRQUFRQyxHQUFHLENBQUNDLDBCQUEwQixDQUFDLENBQUM7Ozs7OzswQkFFOUYsOERBQUNOLG9EQUFNQTtnQkFDTG1CLElBQUc7Z0JBQ0hGLFVBQVM7Z0JBQ1RHLHlCQUF5QjtvQkFDdkJDLFFBQVEsQ0FBQzs7OztzQkFJRyxFQUFFakIsUUFBUUMsR0FBRyxDQUFDQywwQkFBMEIsQ0FBQzs7O0lBRzNELENBQUM7Z0JBQ0c7Ozs7Ozs7O0FBSVI7QUFFQSxpRUFBZUssZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL211bmNoeXJvbGwvLi9jb21wb25lbnRzL0dvb2dsZUFuYWx5dGljcy5qc3g/NmQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgYWRkUGFnZVZpZXcgPSAodXJsKSA9PiB7XG4gIGlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUQpIHJldHVybjtcbiAgLy8gQHRzLWlnbm9yZVxuICB3aW5kb3cuZ3RhZyhcImNvbmZpZ1wiLCBHQV9UUkFDS0lOR19JRCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KTtcbn07XG5cbmNvbnN0IEdvb2dsZUFuYWx5dGljcyA9ICgpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCkgcmV0dXJuO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcbiAgICAgIGFkZFBhZ2VWaWV3KHVybCk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNjcmlwdFxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUR9YH1cbiAgICAgIC8+XG4gICAgICA8U2NyaXB0XG4gICAgICAgIGlkPVwiZ3RhZy1pbml0XCJcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEfScsIHtcbiAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICB9KTtcbiAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUFuYWx5dGljczsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU2NyaXB0IiwidXNlRWZmZWN0IiwiYWRkUGFnZVZpZXciLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUQiLCJ3aW5kb3ciLCJndGFnIiwiR0FfVFJBQ0tJTkdfSUQiLCJwYWdlX3BhdGgiLCJHb29nbGVBbmFseXRpY3MiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImV2ZW50cyIsIm9uIiwib2ZmIiwic3RyYXRlZ3kiLCJzcmMiLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GoogleAnalytics.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/nprogress.css */ \"./styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/GoogleAnalytics */ \"./components/GoogleAnalytics.jsx\");\n\n\n\n\n\n\n\n\n\nif (process.env.NEXT_PUBLIC_GA_TRACKING_ID) {\n    react_ga__WEBPACK_IMPORTED_MODULE_5___default().initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);\n}\nnext_router__WEBPACK_IMPORTED_MODULE_6__.events.on(\"routeChangeStart\", (nprogress__WEBPACK_IMPORTED_MODULE_7___default().start));\nnext_router__WEBPACK_IMPORTED_MODULE_6__.events.on(\"routeChangeError\", (nprogress__WEBPACK_IMPORTED_MODULE_7___default().done));\nnext_router__WEBPACK_IMPORTED_MODULE_6__.events.on(\"routeChangeComplete\", (nprogress__WEBPACK_IMPORTED_MODULE_7___default().done));\nfunction MyApp({ Component, pageProps }) {\n    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: [\n                process.env.NEXT_PUBLIC_GA_TACKING_ID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tejas\\\\Downloads\\\\Compressed\\\\Munchyroll\\\\pages\\\\_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tejas\\\\Downloads\\\\Compressed\\\\Munchyroll\\\\pages\\\\_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tejas\\\\Downloads\\\\Compressed\\\\Munchyroll\\\\pages\\\\_app.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRTtBQUM4QjtBQUNyQztBQUNLO0FBQ007QUFDSDtBQUMwQjtBQUU1RCxJQUFJTyxRQUFRQyxHQUFHLENBQUNDLDBCQUEwQixFQUFFO0lBQzFDTiwwREFBa0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQywwQkFBMEI7QUFDM0Q7QUFFQUwsK0NBQU1BLENBQUNPLEVBQUUsQ0FBQyxvQkFBb0JOLHdEQUFlO0FBQzdDRCwrQ0FBTUEsQ0FBQ08sRUFBRSxDQUFDLG9CQUFvQk4sdURBQWM7QUFDNUNELCtDQUFNQSxDQUFDTyxFQUFFLENBQUMsdUJBQXVCTix1REFBYztBQUUvQyxTQUFTUyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU1DLGNBQWMsSUFBSWpCLG9EQUFXQTtJQUVuQyxxQkFDRTtrQkFDRSw0RUFBQ0MsNERBQW1CQTtZQUFDaUIsUUFBUUQ7O2dCQUMxQlYsUUFBUUMsR0FBRyxDQUFDVyx5QkFBeUIsa0JBQ3BDLDhEQUFDYixtRUFBZUE7Ozs7OzhCQUVsQiw4REFBQ1M7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVuY2h5cm9sbC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IEdvb2dsZUFuYWx5dGljcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Hb29nbGVBbmFseXRpY3NcIjtcblxuaWYgKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEKSB7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCk7XG59XG5cbmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgbnByb2dyZXNzLnN0YXJ0KTtcbmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgbnByb2dyZXNzLmRvbmUpO1xuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBucHJvZ3Jlc3MuZG9uZSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfVEFDS0lOR19JRCAmJiAoXG4gICAgICAgICAgPEdvb2dsZUFuYWx5dGljcyAvPlxuICAgICAgICApfVxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0IiwiUmVhY3RHQSIsImV2ZW50cyIsIm5wcm9ncmVzcyIsIkdvb2dsZUFuYWx5dGljcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCIsImluaXRpYWxpemUiLCJvbiIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicXVlcnlDbGllbnQiLCJjbGllbnQiLCJORVhUX1BVQkxJQ19HQV9UQUNLSU5HX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
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

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

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

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();