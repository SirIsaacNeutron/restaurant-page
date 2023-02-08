// This applies CSS classes since webpack will basically put all of this CSS file
// into a <style> tag
import "./styles.css"

const content = document.getElementById("content")

function createNavBar() {
    const nav = doucment.createElement("nav")

    const navHeader = document.createElement("h1")
    navHeader.textContent = "Pizza Palace"

    content.appendChild(nav)
}