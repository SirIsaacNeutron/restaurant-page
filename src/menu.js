import removeContent from "./removeContent"

import Cheese from "./images/cheese_pizza.png"
import Pepperoni from "./images/pepperoni_pizza.png"
import Hawaiian from "./images/hawaiian_pizza.png"
import Meat from "./images/meat_pizza.png"
import Vegetarian from "./images/vegetarian_pizza.png"
import Tofu from "./images/tofu_pizza.png"
import Carbonator from "./images/carbonator_pizza.png"
import Yukon from "./images/yukon_pizza.png"
import Crabby from "./images/crabby_pizza.png"
import Wagyu from "./images/wagyu_pizza.png"

function createPizzaArray(imageSrc, title, descr) {
    return [imageSrc, title, descr]
}

function getPizzasArray() {
    const cheeseTitle = "Cheese"
    const cheeseDescr = "A classic cheese pizza."
    const pizzas = [createPizzaArray(Cheese, cheeseTitle, cheeseDescr)]

    const pepperoniTitle = "Pepperoni"
    const pepperoniDescr = "Another classic."
    pizzas.push(createPizzaArray(Pepperoni, pepperoniTitle, pepperoniDescr))

    const hawaiianTitle = "Blue Hawaiian"
    const hawaiianDescr = "A Haiwaiian pizza with a swirl of bleu cheese!"
    pizzas.push(createPizzaArray(Hawaiian, hawaiianTitle, hawaiianDescr))

    const meatTitle = "Meat Lover's"
    const meatDescr = "Pepperoni, sausage, ham and bacon for the carnivores."
    pizzas.push(createPizzaArray(Meat, meatTitle, meatDescr))

    const vegTitle = "Vegetarian"
    const vegDescr = "One of the healthier options we have. Mushrooms, olives, onions, bell peppers, basil, pineapples, and corn."
    pizzas.push(createPizzaArray(Vegetarian, vegTitle, vegDescr))

    const tofuTitle = "Mapo Tofu"
    const tofuDescr = "Tofu and vegan ground beef, with a spicy bean sauce seasoned with garlic, and sichuan peppercorns."
    pizzas.push(createPizzaArray(Tofu, tofuTitle, tofuDescr))

    const carboTitle = "Carbonator"
    const carboDescr = "Pizza meets pasta in this delicacy. Fresh mozzarella, alfredo sauce, jalapeños, and garganelli pasta."
    pizzas.push(createPizzaArray(Carbonator, carboTitle, carboDescr))

    const yukonTitle = "Yukon Gold"
    const yukonDescr = "A spudtacular choice. Fresh mozzarella and parmesan, red pepper flakes, garlic, rosemary, and Yukon gold potatoes."
    pizzas.push(createPizzaArray(Yukon, yukonTitle, yukonDescr))

    const crabbyTitle = "Crabby"
    const crabbyDescr = "Sea for yourself how delicious this pizza is. Cream cheese, salsa with a pinch of sliced tomatoes, and crab."
    pizzas.push(createPizzaArray(Crabby, crabbyTitle, crabbyDescr))

    const wagyuTitle = "Wagyu"
    const wagyuDescr = "A pizza for kings. Thinly sliced wagyu beef, combined with onions, cheddar cheese, and a low calorie steak sauce."
    pizzas.push(createPizzaArray(Wagyu, wagyuTitle, wagyuDescr))

    return pizzas
}

export default function createMenu() {
    removeContent()

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