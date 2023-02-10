export default function removeContent() {
    const content = document.getElementById("content")
    content.replaceChildren()
    content.classList.remove("content-box")
    content.classList.remove("menu-box")
}