/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeContent),
/* harmony export */   "makeLinkActive": () => (/* binding */ makeLinkActive)
/* harmony export */ });
function removeContent() {
    const content = document.getElementById("content")
    content.replaceChildren()
    content.classList.remove("content-box")
    content.classList.remove("menu-box")
}

function makeLinkActive(linkSelector) {
    const homeLink = document.querySelector(".home-link")
    const menuLink = document.querySelector(".menu-link")
    const contactLink = document.querySelector(".contact-link")

    homeLink.classList.remove("active-link")
    menuLink.classList.remove("active-link")
    contactLink.classList.remove("active-link")

    const linkElement = document.querySelector(linkSelector)
    linkElement.classList.add("active-link")
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/shared.js");


function createContact() {
    (0,_shared__WEBPACK_IMPORTED_MODULE_0__["default"])()

    const content = document.getElementById("content")

    const contactContent = document.createElement("div")
    contactContent.classList.add("content-box")

    const phoneNum = document.createElement("p")
    phoneNum.textContent = "📞 (123) 456-7890"
    contactContent.appendChild(phoneNum)

    const address = document.createElement("p")
    address.textContent = "🏠 Cheese Boulevard 1, Pizzaland, USA"
    contactContent.appendChild(address)

    content.appendChild(contactContent)
}

const contactLink = document.querySelector(".contact-link")
contactLink.addEventListener("click", () => {
    createContact()
    ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.makeLinkActive)(".contact-link")
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndEOztBQUV4RDtBQUNBLElBQUksbURBQWE7O0FBRWpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGVudC1ib3hcIilcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWJveFwiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxpbmtBY3RpdmUobGlua1NlbGVjdG9yKSB7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtbGlua1wiKVxuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpbmtcIilcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1saW5rXCIpXG5cbiAgICBob21lTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWxpbmtcIilcbiAgICBtZW51TGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWxpbmtcIilcbiAgICBjb250YWN0TGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWxpbmtcIilcblxuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rU2VsZWN0b3IpXG4gICAgbGlua0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saW5rXCIpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVtb3ZlQ29udGVudCwgeyBtYWtlTGlua0FjdGl2ZSB9IGZyb20gXCIuL3NoYXJlZFwiXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgcmVtb3ZlQ29udGVudCgpXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1ib3hcIilcblxuICAgIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IFwi8J+TniAoMTIzKSA0NTYtNzg5MFwiXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmVOdW0pXG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCLwn4+gIENoZWVzZSBCb3VsZXZhcmQgMSwgUGl6emFsYW5kLCBVU0FcIlxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KVxufVxuXG5jb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1saW5rXCIpXG5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNyZWF0ZUNvbnRhY3QoKVxuICAgIG1ha2VMaW5rQWN0aXZlKFwiLmNvbnRhY3QtbGlua1wiKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=