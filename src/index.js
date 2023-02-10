// This applies CSS classes since webpack will basically put all of this CSS file
// into a <style> tag
import removeContent from "./removeContent"
import "./styles.css"

const content = document.getElementById("content")

function createNavBar() {
    const nav = document.createElement("nav")

    const navHeader = document.createElement("h1")
    navHeader.textContent = "Pizza Palace"

    nav.appendChild(navHeader)

    const navLinks = document.createElement("div")
    navLinks.classList.add("nav-links")

    const linkNames = ["Home", "Menu", "Contact"]
    for (const linkName of linkNames) {
        const newLink = document.createElement("p")
        newLink.textContent = linkName

        navLinks.appendChild(newLink)
    }

    nav.appendChild(navLinks)
}

function createHomePageContent() {
    removeContent()

    const homeContent = document.createElement("div")
    homeContent.classList.add("content-box")

    const hcHeader = document.createElement("h2")
    hcHeader.textContent = "Feast on 🍕 like a king!"

    const p1 = document.createElement("p")
    p1.textContent =
        "We've been making pizzas with love since 2010. And we'd love for you to experience the best the pizza world has to offer."

    const p2 = document.createElement("p")
    p2.textContent = "Visit us in person, or order delivery!"

    homeContent.appendChild(hcHeader)
    homeContent.appendChild(p1)
    homeContent.appendChild(p2)

    content.appendChild(homeContent)
}

createHomePageContent()

const homeLink = document.querySelector(".home-link")
homeLink.addEventListener("click", () => {
    createHomePageContent()
})