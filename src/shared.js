export default function removeContent() {
    const content = document.getElementById("content")
    content.replaceChildren()
    content.classList.remove("content-box")
    content.classList.remove("menu-box")
}

export function makeLinkActive(linkSelector) {
    const homeLink = document.querySelector(".home-link")
    const menuLink = document.querySelector(".menu-link")
    const contactLink = document.querySelector(".contact-link")

    homeLink.classList.remove("active-link")
    menuLink.classList.remove("active-link")
    contactLink.classList.remove("active-link")

    const linkElement = document.querySelector(linkSelector)
    linkElement.classList.add("active-link")
}