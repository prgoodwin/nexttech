"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  align-items: center;\\n  box-shadow: 0px px;\\n}\\n\\n.article {\\n  background-color: white;\\n  padding: 10px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 40px;\\n  margin: 30px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px;\\n}\\n\\n.article--summary {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,uBAAuB;EACvB,WAAW;EACX,gEAAgE;AAClE;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA0GG\",\"sourcesContent\":[\"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  align-items: center;\\n  box-shadow: 0px px;\\n}\\n\\n.article {\\n  background-color: white;\\n  padding: 10px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 40px;\\n  margin: 30px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px;\\n}\\n\\n.article--summary {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QsNEJBQTRCLGdCQUFnQixxRUFBcUUsR0FBRyxTQUFTLGtCQUFrQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix1QkFBdUIsR0FBRyxjQUFjLDRCQUE0QixrQkFBa0IsR0FBRyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixxQkFBcUIsNEJBQTRCLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0IscUJBQXFCLG9CQUFvQixpQkFBaUIsR0FBRyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLHFCQUFxQixxQkFBcUIseUJBQXlCLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLEdBQUcsdUJBQXVCLHFCQUFxQix1QkFBdUIsZ0JBQWdCLEdBQUcsY0FBYyx3QkFBd0IsMEJBQTBCLHdOQUF3TixnQ0FBZ0MsMENBQTBDLHdDQUF3Qyx5TEFBeUwscUdBQXFHLHNDQUFzQyxrQ0FBa0MsdUpBQXVKLG1DQUFtQyx3Q0FBd0MsOEJBQThCLHFDQUFxQyxHQUFHLHlDQUF5QyxXQUFXLHNDQUFzQyxzQ0FBc0Msb0NBQW9DLG9GQUFvRiw2SkFBNkosb0NBQW9DLCtCQUErQix5S0FBeUssa0NBQWtDLDBDQUEwQyxnQ0FBZ0MsdUNBQXVDLEtBQUssR0FBRyxPQUFPLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsc0NBQXNDLDBKQUEwSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLHlDQUF5QyxVQUFVLHlCQUF5QixLQUFLLElBQUksV0FBVyx1RkFBdUYsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLDhHQUE4RyxnQ0FBZ0MsNEJBQTRCLGdCQUFnQixxRUFBcUUsR0FBRyxTQUFTLGtCQUFrQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix1QkFBdUIsR0FBRyxjQUFjLDRCQUE0QixrQkFBa0IsR0FBRyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixxQkFBcUIsNEJBQTRCLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0IscUJBQXFCLG9CQUFvQixpQkFBaUIsR0FBRyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLHFCQUFxQixxQkFBcUIseUJBQXlCLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLEdBQUcsdUJBQXVCLHFCQUFxQix1QkFBdUIsZ0JBQWdCLEdBQUcsY0FBYyx3QkFBd0IsMEJBQTBCLHdOQUF3TixnQ0FBZ0MsMENBQTBDLHdDQUF3Qyx5TEFBeUwscUdBQXFHLHNDQUFzQyxrQ0FBa0MsdUpBQXVKLG1DQUFtQyx3Q0FBd0MsOEJBQThCLHFDQUFxQyxHQUFHLHlDQUF5QyxXQUFXLHNDQUFzQyxzQ0FBc0Msb0NBQW9DLG9GQUFvRiw2SkFBNkosb0NBQW9DLCtCQUErQix5S0FBeUssa0NBQWtDLDBDQUEwQyxnQ0FBZ0MsdUNBQXVDLEtBQUssR0FBRyxPQUFPLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsc0NBQXNDLDBKQUEwSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLHlDQUF5QyxVQUFVLHlCQUF5QixLQUFLLElBQUksdUJBQXVCO0FBQ3gwTjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/NmY2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IG55dC1pbXBlcmlhbCwgZ2VvcmdpYSwndGltZXMgbmV3IHJvbWFuJyx0aW1lcyxzZXJpZjtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwcHggcHg7XFxufVxcblxcbi5hcnRpY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5hdi0tbWVudSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4ubmF2LS1oZWxwIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYXJ0aWNsZS0tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS45Mzc1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07IFxcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5hcnRpY2xlLS1zdW1tYXJ5IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyogOnJvb3Qge1xcbiAgLS1tYXgtd2lkdGg6IDExMDBweDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIC0tZm9udC1tb25vOiB1aS1tb25vc3BhY2UsIE1lbmxvLCBNb25hY28sICdDYXNjYWRpYSBNb25vJywgJ1NlZ29lIFVJIE1vbm8nLFxcbiAgICAnUm9ib3RvIE1vbm8nLCAnT3h5Z2VuIE1vbm8nLCAnVWJ1bnR1IE1vbm9zcGFjZScsICdTb3VyY2UgQ29kZSBQcm8nLFxcbiAgICAnRmlyYSBNb25vJywgJ0Ryb2lkIFNhbnMgTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG5cXG4gIC0tZm9yZWdyb3VuZC1yZ2I6IDAsIDAsIDA7XFxuICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAyMTQsIDIxOSwgMjIwO1xcbiAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuXFxuICAtLXByaW1hcnktZ2xvdzogY29uaWMtZ3JhZGllbnQoXFxuICAgIGZyb20gMTgwZGVnIGF0IDUwJSA1MCUsXFxuICAgICMxNmFiZmYzMyAwZGVnLFxcbiAgICAjMDg4NWZmMzMgNTVkZWcsXFxuICAgICM1NGQ2ZmYzMyAxMjBkZWcsXFxuICAgICMwMDcxZmYzMyAxNjBkZWcsXFxuICAgIHRyYW5zcGFyZW50IDM2MGRlZ1xcbiAgKTtcXG4gIC0tc2Vjb25kYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgKTtcXG5cXG4gIC0tdGlsZS1zdGFydC1yZ2I6IDIzOSwgMjQ1LCAyNDk7XFxuICAtLXRpbGUtZW5kLXJnYjogMjI4LCAyMzIsIDIzMztcXG4gIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAjMDAwMDAwODAsXFxuICAgICMwMDAwMDA0MCxcXG4gICAgIzAwMDAwMDMwLFxcbiAgICAjMDAwMDAwMjAsXFxuICAgICMwMDAwMDAxMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwODBcXG4gICk7XFxuXFxuICAtLWNhbGxvdXQtcmdiOiAyMzgsIDI0MCwgMjQxO1xcbiAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDE3MiwgMTc1LCAxNzY7XFxuICAtLWNhcmQtcmdiOiAxODAsIDE4NSwgMTg4O1xcbiAgLS1jYXJkLWJvcmRlci1yZ2I6IDEzMSwgMTM0LCAxMzU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDpyb290IHtcXG4gICAgLS1mb3JlZ3JvdW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gICAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMCwgMCwgMDtcXG4gICAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDAsIDAsIDA7XFxuXFxuICAgIC0tcHJpbWFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgxLCA2NSwgMjU1LCAwLjQpLCByZ2JhKDEsIDY1LCAyNTUsIDApKTtcXG4gICAgLS1zZWNvbmRhcnktZ2xvdzogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSByaWdodCxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwLjMpXFxuICAgICk7XFxuXFxuICAgIC0tdGlsZS1zdGFydC1yZ2I6IDIsIDEzLCA0NjtcXG4gICAgLS10aWxlLWVuZC1yZ2I6IDIsIDUsIDE5O1xcbiAgICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXG4gICAgICAjZmZmZmZmODAsXFxuICAgICAgI2ZmZmZmZjQwLFxcbiAgICAgICNmZmZmZmYzMCxcXG4gICAgICAjZmZmZmZmMjAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmYxMCxcXG4gICAgICAjZmZmZmZmODBcXG4gICAgKTtcXG5cXG4gICAgLS1jYWxsb3V0LXJnYjogMjAsIDIwLCAyMDtcXG4gICAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDEwOCwgMTA4LCAxMDg7XFxuICAgIC0tY2FyZC1yZ2I6IDEwMCwgMTAwLCAxMDA7XFxuICAgIC0tY2FyZC1ib3JkZXItcmdiOiAyMDAsIDIwMCwgMjAwO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogcmdiKHZhcigtLWZvcmVncm91bmQtcmdiKSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLWVuZC1yZ2IpKVxcbiAgICApXFxuICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYikpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICBodG1sIHtcXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgfVxcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBHR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogbnl0LWltcGVyaWFsLCBnZW9yZ2lhLCd0aW1lcyBuZXcgcm9tYW4nLHRpbWVzLHNlcmlmO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDBweCBweDtcXG59XFxuXFxuLmFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubmF2LS1tZW51IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi0tdGl0bGUge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5uYXYtLWhlbHAge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5hcnRpY2xlLS10aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjkzNzVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTsgXFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFydGljbGUtLXN1bW1hcnkge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiA6cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcblxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxuICApO1xcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcblxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICMwMDAwMDA4MCxcXG4gICAgIzAwMDAwMDQwLFxcbiAgICAjMDAwMDAwMzAsXFxuICAgICMwMDAwMDAyMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDA4MFxcbiAgKTtcXG5cXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXG4gICAgKTtcXG5cXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgICNmZmZmZmY4MCxcXG4gICAgICAjZmZmZmZmNDAsXFxuICAgICAgI2ZmZmZmZjMwLFxcbiAgICAgICNmZmZmZmYyMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmY4MFxcbiAgICApO1xcblxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20sXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxuICAgIClcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css\n"));

/***/ })

});