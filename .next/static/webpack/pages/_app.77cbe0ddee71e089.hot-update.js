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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 50px;\\n  align-items: center;\\n}\\n\\n.article {\\n  background-color: white;\\n  padding: 10px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 40px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px;\\n}\\n\\n.article--summary {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,uBAAuB;EACvB,WAAW;EACX,gEAAgE;AAClE;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA0GG\",\"sourcesContent\":[\"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 50px;\\n  align-items: center;\\n}\\n\\n.article {\\n  background-color: white;\\n  padding: 10px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 40px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px;\\n}\\n\\n.article--summary {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QsNEJBQTRCLGdCQUFnQixxRUFBcUUsR0FBRyxTQUFTLGtCQUFrQix3QkFBd0Isd0JBQXdCLHdCQUF3QixHQUFHLGNBQWMsNEJBQTRCLGtCQUFrQixHQUFHLGdCQUFnQixpQkFBaUIsdUJBQXVCLHFCQUFxQiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxxQkFBcUIscUJBQXFCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLGdCQUFnQixHQUFHLHVCQUF1QixxQkFBcUIsdUJBQXVCLGdCQUFnQixHQUFHLGNBQWMsd0JBQXdCLDBCQUEwQix3TkFBd04sZ0NBQWdDLDBDQUEwQyx3Q0FBd0MseUxBQXlMLHFHQUFxRyxzQ0FBc0Msa0NBQWtDLHVKQUF1SixtQ0FBbUMsd0NBQXdDLDhCQUE4QixxQ0FBcUMsR0FBRyx5Q0FBeUMsV0FBVyxzQ0FBc0Msc0NBQXNDLG9DQUFvQyxvRkFBb0YsNkpBQTZKLG9DQUFvQywrQkFBK0IseUtBQXlLLGtDQUFrQywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLEdBQUcsT0FBTywyQkFBMkIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHNDQUFzQywwSkFBMEosR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyx5Q0FBeUMsVUFBVSx5QkFBeUIsS0FBSyxJQUFJLFdBQVcsdUZBQXVGLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLDhHQUE4RyxnQ0FBZ0MsNEJBQTRCLGdCQUFnQixxRUFBcUUsR0FBRyxTQUFTLGtCQUFrQix3QkFBd0Isd0JBQXdCLHdCQUF3QixHQUFHLGNBQWMsNEJBQTRCLGtCQUFrQixHQUFHLGdCQUFnQixpQkFBaUIsdUJBQXVCLHFCQUFxQiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxxQkFBcUIscUJBQXFCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLGdCQUFnQixHQUFHLHVCQUF1QixxQkFBcUIsdUJBQXVCLGdCQUFnQixHQUFHLGNBQWMsd0JBQXdCLDBCQUEwQix3TkFBd04sZ0NBQWdDLDBDQUEwQyx3Q0FBd0MseUxBQXlMLHFHQUFxRyxzQ0FBc0Msa0NBQWtDLHVKQUF1SixtQ0FBbUMsd0NBQXdDLDhCQUE4QixxQ0FBcUMsR0FBRyx5Q0FBeUMsV0FBVyxzQ0FBc0Msc0NBQXNDLG9DQUFvQyxvRkFBb0YsNkpBQTZKLG9DQUFvQywrQkFBK0IseUtBQXlLLGtDQUFrQywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLEdBQUcsT0FBTywyQkFBMkIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHNDQUFzQywwSkFBMEosR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyx5Q0FBeUMsVUFBVSx5QkFBeUIsS0FBSyxJQUFJLHVCQUF1QjtBQUNsdU47QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzZmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBueXQtaW1wZXJpYWwsIGdlb3JnaWEsJ3RpbWVzIG5ldyByb21hbicsdGltZXMsc2VyaWY7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXJ0aWNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5uYXYtLW1lbnUge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LS10aXRsZSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm5hdi0taGVscCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmFydGljbGUtLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuOTM3NXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtOyBcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYXJ0aWNsZS0tc3VtbWFyeSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qIDpyb290IHtcXG4gIC0tbWF4LXdpZHRoOiAxMTAwcHg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAtLWZvbnQtbW9ubzogdWktbW9ub3NwYWNlLCBNZW5sbywgTW9uYWNvLCAnQ2FzY2FkaWEgTW9ubycsICdTZWdvZSBVSSBNb25vJyxcXG4gICAgJ1JvYm90byBNb25vJywgJ094eWdlbiBNb25vJywgJ1VidW50dSBNb25vc3BhY2UnLCAnU291cmNlIENvZGUgUHJvJyxcXG4gICAgJ0ZpcmEgTW9ubycsICdEcm9pZCBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxuXFxuICAtLWZvcmVncm91bmQtcmdiOiAwLCAwLCAwO1xcbiAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMjE0LCAyMTksIDIyMDtcXG4gIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcblxcbiAgLS1wcmltYXJ5LWdsb3c6IGNvbmljLWdyYWRpZW50KFxcbiAgICBmcm9tIDE4MGRlZyBhdCA1MCUgNTAlLFxcbiAgICAjMTZhYmZmMzMgMGRlZyxcXG4gICAgIzA4ODVmZjMzIDU1ZGVnLFxcbiAgICAjNTRkNmZmMzMgMTIwZGVnLFxcbiAgICAjMDA3MWZmMzMgMTYwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAzNjBkZWdcXG4gICk7XFxuICAtLXNlY29uZGFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICk7XFxuXFxuICAtLXRpbGUtc3RhcnQtcmdiOiAyMzksIDI0NSwgMjQ5O1xcbiAgLS10aWxlLWVuZC1yZ2I6IDIyOCwgMjMyLCAyMzM7XFxuICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXG4gICAgIzAwMDAwMDgwLFxcbiAgICAjMDAwMDAwNDAsXFxuICAgICMwMDAwMDAzMCxcXG4gICAgIzAwMDAwMDIwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDAxMCxcXG4gICAgIzAwMDAwMDgwXFxuICApO1xcblxcbiAgLS1jYWxsb3V0LXJnYjogMjM4LCAyNDAsIDI0MTtcXG4gIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxNzIsIDE3NSwgMTc2O1xcbiAgLS1jYXJkLXJnYjogMTgwLCAxODUsIDE4ODtcXG4gIC0tY2FyZC1ib3JkZXItcmdiOiAxMzEsIDEzNCwgMTM1O1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tZm9yZWdyb3VuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAgIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAwLCAwLCAwO1xcblxcbiAgICAtLXByaW1hcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KHJnYmEoMSwgNjUsIDI1NSwgMC40KSwgcmdiYSgxLCA2NSwgMjU1LCAwKSk7XFxuICAgIC0tc2Vjb25kYXJ5LWdsb3c6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20gcmlnaHQsXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMC4zKVxcbiAgICApO1xcblxcbiAgICAtLXRpbGUtc3RhcnQtcmdiOiAyLCAxMywgNDY7XFxuICAgIC0tdGlsZS1lbmQtcmdiOiAyLCA1LCAxOTtcXG4gICAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICAgI2ZmZmZmZjgwLFxcbiAgICAgICNmZmZmZmY0MCxcXG4gICAgICAjZmZmZmZmMzAsXFxuICAgICAgI2ZmZmZmZjIwLFxcbiAgICAgICNmZmZmZmYxMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjgwXFxuICAgICk7XFxuXFxuICAgIC0tY2FsbG91dC1yZ2I6IDIwLCAyMCwgMjA7XFxuICAgIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxMDgsIDEwOCwgMTA4O1xcbiAgICAtLWNhcmQtcmdiOiAxMDAsIDEwMCwgMTAwO1xcbiAgICAtLWNhcmQtYm9yZGVyLXJnYjogMjAwLCAyMDAsIDIwMDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1lbmQtcmdiKSlcXG4gICAgKVxcbiAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgaHRtbCB7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG59ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBHR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogbnl0LWltcGVyaWFsLCBnZW9yZ2lhLCd0aW1lcyBuZXcgcm9tYW4nLHRpbWVzLHNlcmlmO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubmF2LS1tZW51IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi0tdGl0bGUge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5uYXYtLWhlbHAge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5hcnRpY2xlLS10aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjkzNzVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTsgXFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFydGljbGUtLXN1bW1hcnkge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiA6cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcblxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxuICApO1xcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcblxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICMwMDAwMDA4MCxcXG4gICAgIzAwMDAwMDQwLFxcbiAgICAjMDAwMDAwMzAsXFxuICAgICMwMDAwMDAyMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDA4MFxcbiAgKTtcXG5cXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXG4gICAgKTtcXG5cXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgICNmZmZmZmY4MCxcXG4gICAgICAjZmZmZmZmNDAsXFxuICAgICAgI2ZmZmZmZjMwLFxcbiAgICAgICNmZmZmZmYyMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmY4MFxcbiAgICApO1xcblxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20sXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxuICAgIClcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css\n"));

/***/ })

});