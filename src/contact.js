import removeContent, { makeLinkActive } from "./shared"

function createContact() {
    removeContent()

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
    makeLinkActive(".contact-link")
})