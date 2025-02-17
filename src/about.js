export function aboutPageLoad() {
    let content = document.getElementById("content");
    let aboutPage = document.createElement("div");
    aboutPage.id = "aboutPage"
    let aboutHead = document.createElement("h2");
    aboutHead.innerHTML = "Paikallista ruokaa"
    aboutPage.appendChild(aboutHead)
    content.appendChild(aboutPage);
    let aboutP = document.createElement("p");
    let aboutPText = document.createTextNode("Valmistamme ruuat mahdollisimman läheltä tuotetuista raaka-aineista omassa keittiössämme.")
    aboutP.appendChild(aboutPText);
    aboutPage.appendChild(aboutP)
}
