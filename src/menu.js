export function menuPageLoad() {
    let content = document.getElementById("content");
    let menuPage = document.createElement("div");
    menuPage.innerHTML = "I like Pizza!";
    content.appendChild(menuPage);
}
