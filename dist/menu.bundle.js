/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/removeContent.js":
/*!******************************!*\
  !*** ./src/removeContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeContent)
/* harmony export */ });
function removeContent() {
    const content = document.getElementById("content")
    content.replaceChildren()
    content.classList.remove("content-box")
    content.classList.remove("menu-box")
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
/* harmony import */ var _removeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeContent */ "./src/removeContent.js");
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
    (0,_removeContent__WEBPACK_IMPORTED_MODULE_0__["default"])()

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
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQzs7QUFFRztBQUNNO0FBQ0Y7QUFDUjtBQUNZO0FBQ1o7QUFDWTtBQUNWO0FBQ0U7QUFDRjs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxREFBTTs7QUFFM0M7QUFDQTtBQUNBLGlDQUFpQyx3REFBUzs7QUFFMUM7QUFDQTtBQUNBLGlDQUFpQyx1REFBUTs7QUFFekM7QUFDQTtBQUNBLGlDQUFpQyxtREFBSTs7QUFFckM7QUFDQTtBQUNBLGlDQUFpQyx5REFBVTs7QUFFM0M7QUFDQTtBQUNBLGlDQUFpQyxtREFBSTs7QUFFckM7QUFDQTtBQUNBLGlDQUFpQyx5REFBVTs7QUFFM0M7QUFDQTtBQUNBLGlDQUFpQyxvREFBSzs7QUFFdEM7QUFDQTtBQUNBLGlDQUFpQyxxREFBTTs7QUFFdkM7QUFDQTtBQUNBLGlDQUFpQyxxREFBSzs7QUFFdEM7QUFDQTs7QUFFZTtBQUNmLElBQUksMERBQWE7O0FBRWpCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW1vdmVDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGVudC1ib3hcIilcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWJveFwiKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCByZW1vdmVDb250ZW50IGZyb20gXCIuL3JlbW92ZUNvbnRlbnRcIlxuXG5pbXBvcnQgQ2hlZXNlIGZyb20gXCIuL2ltYWdlcy9jaGVlc2VfcGl6emEucG5nXCJcbmltcG9ydCBQZXBwZXJvbmkgZnJvbSBcIi4vaW1hZ2VzL3BlcHBlcm9uaV9waXp6YS5wbmdcIlxuaW1wb3J0IEhhd2FpaWFuIGZyb20gXCIuL2ltYWdlcy9oYXdhaWlhbl9waXp6YS5wbmdcIlxuaW1wb3J0IE1lYXQgZnJvbSBcIi4vaW1hZ2VzL21lYXRfcGl6emEucG5nXCJcbmltcG9ydCBWZWdldGFyaWFuIGZyb20gXCIuL2ltYWdlcy92ZWdldGFyaWFuX3BpenphLnBuZ1wiXG5pbXBvcnQgVG9mdSBmcm9tIFwiLi9pbWFnZXMvdG9mdV9waXp6YS5wbmdcIlxuaW1wb3J0IENhcmJvbmF0b3IgZnJvbSBcIi4vaW1hZ2VzL2NhcmJvbmF0b3JfcGl6emEucG5nXCJcbmltcG9ydCBZdWtvbiBmcm9tIFwiLi9pbWFnZXMveXVrb25fcGl6emEucG5nXCJcbmltcG9ydCBDcmFiYnkgZnJvbSBcIi4vaW1hZ2VzL2NyYWJieV9waXp6YS5wbmdcIlxuaW1wb3J0IFdhZ3l1IGZyb20gXCIuL2ltYWdlcy93YWd5dV9waXp6YS5wbmdcIlxuXG5mdW5jdGlvbiBjcmVhdGVQaXp6YUFycmF5KGltYWdlU3JjLCB0aXRsZSwgZGVzY3IpIHtcbiAgICByZXR1cm4gW2ltYWdlU3JjLCB0aXRsZSwgZGVzY3JdXG59XG5cbmZ1bmN0aW9uIGdldFBpenphc0FycmF5KCkge1xuICAgIGNvbnN0IGNoZWVzZVRpdGxlID0gXCJDaGVlc2VcIlxuICAgIGNvbnN0IGNoZWVzZURlc2NyID0gXCJBIGNsYXNzaWMgY2hlZXNlIHBpenphLlwiXG4gICAgY29uc3QgcGl6emFzID0gW2NyZWF0ZVBpenphQXJyYXkoQ2hlZXNlLCBjaGVlc2VUaXRsZSwgY2hlZXNlRGVzY3IpXVxuXG4gICAgY29uc3QgcGVwcGVyb25pVGl0bGUgPSBcIlBlcHBlcm9uaVwiXG4gICAgY29uc3QgcGVwcGVyb25pRGVzY3IgPSBcIkFub3RoZXIgY2xhc3NpYy5cIlxuICAgIHBpenphcy5wdXNoKGNyZWF0ZVBpenphQXJyYXkoUGVwcGVyb25pLCBwZXBwZXJvbmlUaXRsZSwgcGVwcGVyb25pRGVzY3IpKVxuXG4gICAgY29uc3QgaGF3YWlpYW5UaXRsZSA9IFwiQmx1ZSBIYXdhaWlhblwiXG4gICAgY29uc3QgaGF3YWlpYW5EZXNjciA9IFwiQSBIYWl3YWlpYW4gcGl6emEgd2l0aCBhIHN3aXJsIG9mIGJsZXUgY2hlZXNlIVwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShIYXdhaWlhbiwgaGF3YWlpYW5UaXRsZSwgaGF3YWlpYW5EZXNjcikpXG5cbiAgICBjb25zdCBtZWF0VGl0bGUgPSBcIk1lYXQgTG92ZXInc1wiXG4gICAgY29uc3QgbWVhdERlc2NyID0gXCJQZXBwZXJvbmksIHNhdXNhZ2UsIGhhbSBhbmQgYmFjb24gZm9yIHRoZSBjYXJuaXZvcmVzLlwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShNZWF0LCBtZWF0VGl0bGUsIG1lYXREZXNjcikpXG5cbiAgICBjb25zdCB2ZWdUaXRsZSA9IFwiVmVnZXRhcmlhblwiXG4gICAgY29uc3QgdmVnRGVzY3IgPSBcIk9uZSBvZiB0aGUgaGVhbHRoaWVyIG9wdGlvbnMgd2UgaGF2ZS4gTXVzaHJvb21zLCBvbGl2ZXMsIG9uaW9ucywgYmVsbCBwZXBwZXJzLCBiYXNpbCwgcGluZWFwcGxlcywgYW5kIGNvcm4uXCJcbiAgICBwaXp6YXMucHVzaChjcmVhdGVQaXp6YUFycmF5KFZlZ2V0YXJpYW4sIHZlZ1RpdGxlLCB2ZWdEZXNjcikpXG5cbiAgICBjb25zdCB0b2Z1VGl0bGUgPSBcIk1hcG8gVG9mdVwiXG4gICAgY29uc3QgdG9mdURlc2NyID0gXCJUb2Z1IGFuZCB2ZWdhbiBncm91bmQgYmVlZiwgd2l0aCBhIHNwaWN5IGJlYW4gc2F1Y2Ugc2Vhc29uZWQgd2l0aCBnYXJsaWMsIGFuZCBzaWNodWFuIHBlcHBlcmNvcm5zLlwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShUb2Z1LCB0b2Z1VGl0bGUsIHRvZnVEZXNjcikpXG5cbiAgICBjb25zdCBjYXJib1RpdGxlID0gXCJDYXJib25hdG9yXCJcbiAgICBjb25zdCBjYXJib0Rlc2NyID0gXCJQaXp6YSBtZWV0cyBwYXN0YSBpbiB0aGlzIGRlbGljYWN5LiBGcmVzaCBtb3p6YXJlbGxhLCBhbGZyZWRvIHNhdWNlLCBqYWxhcGXDsW9zLCBhbmQgZ2FyZ2FuZWxsaSBwYXN0YS5cIlxuICAgIHBpenphcy5wdXNoKGNyZWF0ZVBpenphQXJyYXkoQ2FyYm9uYXRvciwgY2FyYm9UaXRsZSwgY2FyYm9EZXNjcikpXG5cbiAgICBjb25zdCB5dWtvblRpdGxlID0gXCJZdWtvbiBHb2xkXCJcbiAgICBjb25zdCB5dWtvbkRlc2NyID0gXCJBIHNwdWR0YWN1bGFyIGNob2ljZS4gRnJlc2ggbW96emFyZWxsYSBhbmQgcGFybWVzYW4sIHJlZCBwZXBwZXIgZmxha2VzLCBnYXJsaWMsIHJvc2VtYXJ5LCBhbmQgWXVrb24gZ29sZCBwb3RhdG9lcy5cIlxuICAgIHBpenphcy5wdXNoKGNyZWF0ZVBpenphQXJyYXkoWXVrb24sIHl1a29uVGl0bGUsIHl1a29uRGVzY3IpKVxuXG4gICAgY29uc3QgY3JhYmJ5VGl0bGUgPSBcIkNyYWJieVwiXG4gICAgY29uc3QgY3JhYmJ5RGVzY3IgPSBcIlNlYSBmb3IgeW91cnNlbGYgaG93IGRlbGljaW91cyB0aGlzIHBpenphIGlzLiBDcmVhbSBjaGVlc2UsIHNhbHNhIHdpdGggYSBwaW5jaCBvZiBzbGljZWQgdG9tYXRvZXMsIGFuZCBjcmFiLlwiXG4gICAgcGl6emFzLnB1c2goY3JlYXRlUGl6emFBcnJheShDcmFiYnksIGNyYWJieVRpdGxlLCBjcmFiYnlEZXNjcikpXG5cbiAgICBjb25zdCB3YWd5dVRpdGxlID0gXCJXYWd5dVwiXG4gICAgY29uc3Qgd2FneXVEZXNjciA9IFwiQSBwaXp6YSBmb3Iga2luZ3MuIFRoaW5seSBzbGljZWQgd2FneXUgYmVlZiwgY29tYmluZWQgd2l0aCBvbmlvbnMsIGNoZWRkYXIgY2hlZXNlLCBhbmQgYSBsb3cgY2Fsb3JpZSBzdGVhayBzYXVjZS5cIlxuICAgIHBpenphcy5wdXNoKGNyZWF0ZVBpenphQXJyYXkoV2FneXUsIHdhZ3l1VGl0bGUsIHdhZ3l1RGVzY3IpKVxuXG4gICAgcmV0dXJuIHBpenphc1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIHJlbW92ZUNvbnRlbnQoKVxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtYm94XCIpXG5cbiAgICBjb25zdCBwaXp6YXMgPSBnZXRQaXp6YXNBcnJheSgpXG5cbiAgICBwaXp6YXMuZm9yRWFjaChwaXp6YUFycmF5ID0+IHtcbiAgICAgICAgY29uc3QgcGl6emFTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBwaXp6YVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInBpenphLXNlY3Rpb25cIilcblxuICAgICAgICBjb25zdCBwaXp6YUltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgcGl6emFJbWFnZS5zcmMgPSBwaXp6YUFycmF5WzBdXG4gICAgICAgIHBpenphSW1hZ2UuY2xhc3NMaXN0LmFkZChcInBpenphLWltZ1wiKVxuXG4gICAgICAgIGNvbnN0IHBpenphVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICAgICAgcGl6emFUaXRsZS50ZXh0Q29udGVudCA9IHBpenphQXJyYXlbMV1cblxuICAgICAgICBjb25zdCBwaXp6YURlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcGl6emFEZXNjci50ZXh0Q29udGVudCA9IHBpenphQXJyYXlbMl1cblxuICAgICAgICBwaXp6YVNlY3Rpb24uYXBwZW5kQ2hpbGQocGl6emFJbWFnZSlcbiAgICAgICAgcGl6emFTZWN0aW9uLmFwcGVuZENoaWxkKHBpenphVGl0bGUpXG4gICAgICAgIHBpenphU2VjdGlvbi5hcHBlbmRDaGlsZChwaXp6YURlc2NyKVxuXG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKHBpenphU2VjdGlvbilcbiAgICB9KVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudClcbn1cblxuY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlua1wiKVxubWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjcmVhdGVNZW51KClcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9