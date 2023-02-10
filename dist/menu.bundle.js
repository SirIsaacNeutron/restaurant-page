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

/***/ }),

/***/ "./src/images/carbonator_pizza.png":
/*!*****************************************!*\
  !*** ./src/images/carbonator_pizza.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "756891fd2c6f889953b9.png";

/***/ }),

/***/ "./src/images/cheese_pizza.png":
/*!*************************************!*\
  !*** ./src/images/cheese_pizza.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10f1da68a99c5c43560f.png";

/***/ }),

/***/ "./src/images/crabby_pizza.png":
/*!*************************************!*\
  !*** ./src/images/crabby_pizza.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a504f29ffe633a55c08d.png";

/***/ }),

/***/ "./src/images/hawaiian_pizza.png":
/*!***************************************!*\
  !*** ./src/images/hawaiian_pizza.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7f7c99d5abc932dc697.png";

/***/ }),

/***/ "./src/images/meat_pizza.png":
/*!***********************************!*\
  !*** ./src/images/meat_pizza.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5cd26cebc9bf20b25c6.png";

/***/ }),

/***/ "./src/images/pepperoni_pizza.png":
/*!****************************************!*\
  !*** ./src/images/pepperoni_pizza.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24553b16fb7498a16da0.png";

/***/ }),

/***/ "./src/images/tofu_pizza.png":
/*!***********************************!*\
  !*** ./src/images/tofu_pizza.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e81d2814cf3858fc102.png";

/***/ }),

/***/ "./src/images/vegetarian_pizza.png":
/*!*****************************************!*\
  !*** ./src/images/vegetarian_pizza.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "126ec7205bed328b205e.png";

/***/ }),

/***/ "./src/images/wagyu_pizza.png":
/*!************************************!*\
  !*** ./src/images/wagyu_pizza.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "394292f0d409859352fd.png";

/***/ }),

/***/ "./src/images/yukon_pizza.png":
/*!************************************!*\
  !*** ./src/images/yukon_pizza.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e490aebacdf3de18d07e.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/shared.js");
/* harmony import */ var _images_cheese_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cheese_pizza.png */ "./src/images/cheese_pizza.png");
/* harmony import */ var _images_pepperoni_pizza_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pepperoni_pizza.png */ "./src/images/pepperoni_pizza.png");
/* harmony import */ var _images_hawaiian_pizza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/hawaiian_pizza.png */ "./src/images/hawaiian_pizza.png");
/* harmony import */ var _images_meat_pizza_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/meat_pizza.png */ "./src/images/meat_pizza.png");
/* harmony import */ var _images_vegetarian_pizza_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/vegetarian_pizza.png */ "./src/images/vegetarian_pizza.png");
/* harmony import */ var _images_tofu_pizza_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/tofu_pizza.png */ "./src/images/tofu_pizza.png");
/* harmony import */ var _images_carbonator_pizza_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/carbonator_pizza.png */ "./src/images/carbonator_pizza.png");
/* harmony import */ var _images_yukon_pizza_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/yukon_pizza.png */ "./src/images/yukon_pizza.png");
/* harmony import */ var _images_crabby_pizza_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/crabby_pizza.png */ "./src/images/crabby_pizza.png");
/* harmony import */ var _images_wagyu_pizza_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/wagyu_pizza.png */ "./src/images/wagyu_pizza.png");













function createPizzaArray(imageSrc, title, descr) {
    return [imageSrc, title, descr]
}

function getPizzasArray() {
    const cheeseTitle = "Cheese"
    const cheeseDescr = "A classic cheese pizza."
    const pizzas = [createPizzaArray(_images_cheese_pizza_png__WEBPACK_IMPORTED_MODULE_1__, cheeseTitle, cheeseDescr)]

    const pepperoniTitle = "Pepperoni"
    const pepperoniDescr = "Another classic."
    pizzas.push(createPizzaArray(_images_pepperoni_pizza_png__WEBPACK_IMPORTED_MODULE_2__, pepperoniTitle, pepperoniDescr))

    const hawaiianTitle = "Blue Hawaiian"
    const hawaiianDescr = "A Haiwaiian pizza with a swirl of bleu cheese!"
    pizzas.push(createPizzaArray(_images_hawaiian_pizza_png__WEBPACK_IMPORTED_MODULE_3__, hawaiianTitle, hawaiianDescr))

    const meatTitle = "Meat Lover's"
    const meatDescr = "Pepperoni, sausage, ham and bacon for the carnivores."
    pizzas.push(createPizzaArray(_images_meat_pizza_png__WEBPACK_IMPORTED_MODULE_4__, meatTitle, meatDescr))

    const vegTitle = "Vegetarian"
    const vegDescr = "One of the healthier options we have. Mushrooms, olives, onions, bell peppers, basil, pineapples, and corn."
    pizzas.push(createPizzaArray(_images_vegetarian_pizza_png__WEBPACK_IMPORTED_MODULE_5__, vegTitle, vegDescr))

    const tofuTitle = "Mapo Tofu"
    const tofuDescr = "Tofu and vegan ground beef, with a spicy bean sauce seasoned with garlic, and sichuan peppercorns."
    pizzas.push(createPizzaArray(_images_tofu_pizza_png__WEBPACK_IMPORTED_MODULE_6__, tofuTitle, tofuDescr))

    const carboTitle = "Carbonator"
    const carboDescr = "Pizza meets pasta in this delicacy. Fresh mozzarella, alfredo sauce, jalapeños, and garganelli pasta."
    pizzas.push(createPizzaArray(_images_carbonator_pizza_png__WEBPACK_IMPORTED_MODULE_7__, carboTitle, carboDescr))

    const yukonTitle = "Yukon Gold"
    const yukonDescr = "A spudtacular choice. Fresh mozzarella and parmesan, red pepper flakes, garlic, rosemary, and Yukon gold potatoes."
    pizzas.push(createPizzaArray(_images_yukon_pizza_png__WEBPACK_IMPORTED_MODULE_8__, yukonTitle, yukonDescr))

    const crabbyTitle = "Crabby"
    const crabbyDescr = "Sea for yourself how delicious this pizza is. Cream cheese, salsa with a pinch of sliced tomatoes, and crab."
    pizzas.push(createPizzaArray(_images_crabby_pizza_png__WEBPACK_IMPORTED_MODULE_9__, crabbyTitle, crabbyDescr))

    const wagyuTitle = "Wagyu"
    const wagyuDescr = "A pizza for kings. Thinly sliced wagyu beef, combined with onions, cheddar cheese, and a low calorie steak sauce."
    pizzas.push(createPizzaArray(_images_wagyu_pizza_png__WEBPACK_IMPORTED_MODULE_10__, wagyuTitle, wagyuDescr))

    return pizzas
}

function createMenu() {
    (0,_shared__WEBPACK_IMPORTED_MODULE_0__["default"])()

    const content = document.getElementById("content")

    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-box")

    const pizzas = getPizzasArray()

    pizzas.forEach(pizzaArray => {
        const pizzaSection = document.createElement("div")
        pizzaSection.classList.add("pizza-section")

        const pizzaImage = new Image()
        pizzaImage.src = pizzaArray[0]
        pizzaImage.classList.add("pizza-img")

        const pizzaTitle = document.createElement("h3")
        pizzaTitle.textContent = pizzaArray[1]

        const pizzaDescr = document.createElement("p")
        pizzaDescr.textContent = pizzaArray[2]

        pizzaSection.appendChild(pizzaImage)
        pizzaSection.appendChild(pizzaTitle)
        pizzaSection.appendChild(pizzaDescr)

        menuContent.appendChild(pizzaSection)
    })

    content.appendChild(menuContent)
}

const menuLink = document.querySelector(".menu-link")
menuLink.addEventListener("click", () => {
    createMenu()
    ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.makeLinkActive)(".menu-link")
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0Q7O0FBRVY7QUFDTTtBQUNGO0FBQ1I7QUFDWTtBQUNaO0FBQ1k7QUFDVjtBQUNFO0FBQ0Y7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscURBQU07O0FBRTNDO0FBQ0E7QUFDQSxpQ0FBaUMsd0RBQVM7O0FBRTFDO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQVE7O0FBRXpDO0FBQ0E7QUFDQSxpQ0FBaUMsbURBQUk7O0FBRXJDO0FBQ0E7QUFDQSxpQ0FBaUMseURBQVU7O0FBRTNDO0FBQ0E7QUFDQSxpQ0FBaUMsbURBQUk7O0FBRXJDO0FBQ0E7QUFDQSxpQ0FBaUMseURBQVU7O0FBRTNDO0FBQ0E7QUFDQSxpQ0FBaUMsb0RBQUs7O0FBRXRDO0FBQ0E7QUFDQSxpQ0FBaUMscURBQU07O0FBRXZDO0FBQ0E7QUFDQSxpQ0FBaUMscURBQUs7O0FBRXRDO0FBQ0E7O0FBRWU7QUFDZixJQUFJLG1EQUFhOztBQUVqQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb250ZW50LWJveFwiKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYm94XCIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGlua0FjdGl2ZShsaW5rU2VsZWN0b3IpIHtcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1saW5rXCIpXG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlua1wiKVxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWxpbmtcIilcblxuICAgIGhvbWVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbGlua1wiKVxuICAgIG1lbnVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbGlua1wiKVxuICAgIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbGlua1wiKVxuXG4gICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmtTZWxlY3RvcilcbiAgICBsaW5rRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpbmtcIilcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcmVtb3ZlQ29udGVudCwgeyBtYWtlTGlua0FjdGl2ZSB9IGZyb20gXCIuL3NoYXJlZFwiXG5cbmltcG9ydCBDaGVlc2UgZnJvbSBcIi4vaW1hZ2VzL2NoZWVzZV9waXp6YS5wbmdcIlxuaW1wb3J0IFBlcHBlcm9uaSBmcm9tIFwiLi9pbWFnZXMvcGVwcGVyb25pX3BpenphLnBuZ1wiXG5pbXBvcnQgSGF3YWlpYW4gZnJvbSBcIi4vaW1hZ2VzL2hhd2FpaWFuX3BpenphLnBuZ1wiXG5pbXBvcnQgTWVhdCBmcm9tIFwiLi9pbWFnZXMvbWVhdF9waXp6YS5wbmdcIlxuaW1wb3J0IFZlZ2V0YXJpYW4gZnJvbSBcIi4vaW1hZ2VzL3ZlZ2V0YXJpYW5fcGl6emEucG5nXCJcbmltcG9ydCBUb2Z1IGZyb20gXCIuL2ltYWdlcy90b2Z1X3BpenphLnBuZ1wiXG5pbXBvcnQgQ2FyYm9uYXRvciBmcm9tIFwiLi9pbWFnZXMvY2FyYm9uYXRvcl9waXp6YS5wbmdcIlxuaW1wb3J0IFl1a29uIGZyb20gXCIuL2ltYWdlcy95dWtvbl9waXp6YS5wbmdcIlxuaW1wb3J0IENyYWJieSBmcm9tIFwiLi9pbWFnZXMvY3JhYmJ5X3BpenphLnBuZ1wiXG5pbXBvcnQgV2FneXUgZnJvbSBcIi4vaW1hZ2VzL3dhZ3l1X3BpenphLnBuZ1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZVBpenphQXJyYXkoaW1hZ2VTcmMsIHRpdGxlLCBkZXNjcikge1xuICAgIHJldHVybiBbaW1hZ2VTcmMsIHRpdGxlLCBkZXNjcl1cbn1cblxuZnVuY3Rpb24gZ2V0UGl6emFzQXJyYXkoKSB7XG4gICAgY29uc3QgY2hlZXNlVGl0bGUgPSBcIkNoZWVzZVwiXG4gICAgY29uc3QgY2hlZXNlRGVzY3IgPSBcIkEgY2xhc3NpYyBjaGVlc2UgcGl6emEuXCJcbiAgICBjb25zdCBwaXp6YXMgPSBbY3JlYXRlUGl6emFBcnJheShDaGVlc2UsIGNoZWVzZVRpdGxlLCBjaGVlc2VEZXNjcildXG5cbiAgICBjb25zdCBwZXBwZXJvbmlUaXRsZSA9IFwiUGVwcGVyb25pXCJcbiAgICBjb25zdCBwZXBwZXJvbmlEZXNjciA9IFwiQW5vdGhlciBjbGFzc2ljLlwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShQZXBwZXJvbmksIHBlcHBlcm9uaVRpdGxlLCBwZXBwZXJvbmlEZXNjcikpXG5cbiAgICBjb25zdCBoYXdhaWlhblRpdGxlID0gXCJCbHVlIEhhd2FpaWFuXCJcbiAgICBjb25zdCBoYXdhaWlhbkRlc2NyID0gXCJBIEhhaXdhaWlhbiBwaXp6YSB3aXRoIGEgc3dpcmwgb2YgYmxldSBjaGVlc2UhXCJcbiAgICBwaXp6YXMucHVzaChjcmVhdGVQaXp6YUFycmF5KEhhd2FpaWFuLCBoYXdhaWlhblRpdGxlLCBoYXdhaWlhbkRlc2NyKSlcblxuICAgIGNvbnN0IG1lYXRUaXRsZSA9IFwiTWVhdCBMb3ZlcidzXCJcbiAgICBjb25zdCBtZWF0RGVzY3IgPSBcIlBlcHBlcm9uaSwgc2F1c2FnZSwgaGFtIGFuZCBiYWNvbiBmb3IgdGhlIGNhcm5pdm9yZXMuXCJcbiAgICBwaXp6YXMucHVzaChjcmVhdGVQaXp6YUFycmF5KE1lYXQsIG1lYXRUaXRsZSwgbWVhdERlc2NyKSlcblxuICAgIGNvbnN0IHZlZ1RpdGxlID0gXCJWZWdldGFyaWFuXCJcbiAgICBjb25zdCB2ZWdEZXNjciA9IFwiT25lIG9mIHRoZSBoZWFsdGhpZXIgb3B0aW9ucyB3ZSBoYXZlLiBNdXNocm9vbXMsIG9saXZlcywgb25pb25zLCBiZWxsIHBlcHBlcnMsIGJhc2lsLCBwaW5lYXBwbGVzLCBhbmQgY29ybi5cIlxuICAgIHBpenphcy5wdXNoKGNyZWF0ZVBpenphQXJyYXkoVmVnZXRhcmlhbiwgdmVnVGl0bGUsIHZlZ0Rlc2NyKSlcblxuICAgIGNvbnN0IHRvZnVUaXRsZSA9IFwiTWFwbyBUb2Z1XCJcbiAgICBjb25zdCB0b2Z1RGVzY3IgPSBcIlRvZnUgYW5kIHZlZ2FuIGdyb3VuZCBiZWVmLCB3aXRoIGEgc3BpY3kgYmVhbiBzYXVjZSBzZWFzb25lZCB3aXRoIGdhcmxpYywgYW5kIHNpY2h1YW4gcGVwcGVyY29ybnMuXCJcbiAgICBwaXp6YXMucHVzaChjcmVhdGVQaXp6YUFycmF5KFRvZnUsIHRvZnVUaXRsZSwgdG9mdURlc2NyKSlcblxuICAgIGNvbnN0IGNhcmJvVGl0bGUgPSBcIkNhcmJvbmF0b3JcIlxuICAgIGNvbnN0IGNhcmJvRGVzY3IgPSBcIlBpenphIG1lZXRzIHBhc3RhIGluIHRoaXMgZGVsaWNhY3kuIEZyZXNoIG1venphcmVsbGEsIGFsZnJlZG8gc2F1Y2UsIGphbGFwZcOxb3MsIGFuZCBnYXJnYW5lbGxpIHBhc3RhLlwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShDYXJib25hdG9yLCBjYXJib1RpdGxlLCBjYXJib0Rlc2NyKSlcblxuICAgIGNvbnN0IHl1a29uVGl0bGUgPSBcIll1a29uIEdvbGRcIlxuICAgIGNvbnN0IHl1a29uRGVzY3IgPSBcIkEgc3B1ZHRhY3VsYXIgY2hvaWNlLiBGcmVzaCBtb3p6YXJlbGxhIGFuZCBwYXJtZXNhbiwgcmVkIHBlcHBlciBmbGFrZXMsIGdhcmxpYywgcm9zZW1hcnksIGFuZCBZdWtvbiBnb2xkIHBvdGF0b2VzLlwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShZdWtvbiwgeXVrb25UaXRsZSwgeXVrb25EZXNjcikpXG5cbiAgICBjb25zdCBjcmFiYnlUaXRsZSA9IFwiQ3JhYmJ5XCJcbiAgICBjb25zdCBjcmFiYnlEZXNjciA9IFwiU2VhIGZvciB5b3Vyc2VsZiBob3cgZGVsaWNpb3VzIHRoaXMgcGl6emEgaXMuIENyZWFtIGNoZWVzZSwgc2Fsc2Egd2l0aCBhIHBpbmNoIG9mIHNsaWNlZCB0b21hdG9lcywgYW5kIGNyYWIuXCJcbiAgICBwaXp6YXMucHVzaChjcmVhdGVQaXp6YUFycmF5KENyYWJieSwgY3JhYmJ5VGl0bGUsIGNyYWJieURlc2NyKSlcblxuICAgIGNvbnN0IHdhZ3l1VGl0bGUgPSBcIldhZ3l1XCJcbiAgICBjb25zdCB3YWd5dURlc2NyID0gXCJBIHBpenphIGZvciBraW5ncy4gVGhpbmx5IHNsaWNlZCB3YWd5dSBiZWVmLCBjb21iaW5lZCB3aXRoIG9uaW9ucywgY2hlZGRhciBjaGVlc2UsIGFuZCBhIGxvdyBjYWxvcmllIHN0ZWFrIHNhdWNlLlwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShXYWd5dSwgd2FneXVUaXRsZSwgd2FneXVEZXNjcikpXG5cbiAgICByZXR1cm4gcGl6emFzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgcmVtb3ZlQ29udGVudCgpXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1ib3hcIilcblxuICAgIGNvbnN0IHBpenphcyA9IGdldFBpenphc0FycmF5KClcblxuICAgIHBpenphcy5mb3JFYWNoKHBpenphQXJyYXkgPT4ge1xuICAgICAgICBjb25zdCBwaXp6YVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHBpenphU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicGl6emEtc2VjdGlvblwiKVxuXG4gICAgICAgIGNvbnN0IHBpenphSW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBwaXp6YUltYWdlLnNyYyA9IHBpenphQXJyYXlbMF1cbiAgICAgICAgcGl6emFJbWFnZS5jbGFzc0xpc3QuYWRkKFwicGl6emEtaW1nXCIpXG5cbiAgICAgICAgY29uc3QgcGl6emFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBwaXp6YVRpdGxlLnRleHRDb250ZW50ID0gcGl6emFBcnJheVsxXVxuXG4gICAgICAgIGNvbnN0IHBpenphRGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwaXp6YURlc2NyLnRleHRDb250ZW50ID0gcGl6emFBcnJheVsyXVxuXG4gICAgICAgIHBpenphU2VjdGlvbi5hcHBlbmRDaGlsZChwaXp6YUltYWdlKVxuICAgICAgICBwaXp6YVNlY3Rpb24uYXBwZW5kQ2hpbGQocGl6emFUaXRsZSlcbiAgICAgICAgcGl6emFTZWN0aW9uLmFwcGVuZENoaWxkKHBpenphRGVzY3IpXG5cbiAgICAgICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocGl6emFTZWN0aW9uKVxuICAgIH0pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxufVxuXG5jb25zdCBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saW5rXCIpXG5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNyZWF0ZU1lbnUoKVxuICAgIG1ha2VMaW5rQWN0aXZlKFwiLm1lbnUtbGlua1wiKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=