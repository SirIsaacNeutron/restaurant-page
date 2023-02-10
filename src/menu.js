import removeContent from "./removeContent"

import Cheese from "./images/cheese_pizza.png"
import Pepperoni from "./images/pepperoni_pizza.png"

function createPizzaArray(imageSrc, title, descr) {
    return [imageSrc, title, descr]
}

export default function createMenu() {
    removeContent()

    const content = document.getElementById("content")

    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-box")

    const cheeseTitle = "Cheese"
    const cheeseDescr = "A classic cheese pizza."

    const pizzas = [createPizzaArray(Cheese, cheeseTitle, cheeseDescr)]

    const pepperoniTitle = "Pepperoni"
    const pepperoniDescr = "Another classic!"

    pizzas.push(createPizzaArray(Pepperoni, pepperoniTitle, pepperoniDescr))

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