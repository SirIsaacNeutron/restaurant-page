// This applies CSS classes since webpack will basically put all of this CSS file
// into a <style> tag
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
    content.classList.add("home-content")
}

createHomePageContent()