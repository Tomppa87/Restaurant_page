export function pageLoad() {
    let content = document.getElementById("content");
    let homePage = document.createElement("div");
    let homeHead = document.createElement("h2");
    homeHead.innerHTML = "Rantolan Puoti"
    homePage.appendChild(homeHead)
    content.appendChild(homePage);
    let homeP = document.createElement("p");
    let homePText = document.createTextNode("Sauvossa, Karunan kylän keskustassa, meren rannalla sijaitseva Rantolan Puoti tarjoaa kesäisin kahvila -ja ravintolapalveluita. Kursailematonta tuoretta ruokaa ja leivonnaisia, jotka valmistetaan puhtaista ja mahdollisemman paikallisista raaka-aineista. Viihtyisässä kahvilassamme on mukava rentoutua hyvässä seurassa, nauttia herkuista ja maistella viiniä tai paikallista olutta ja siideriä.")
    homeP.appendChild(homePText);
    homePage.appendChild(homeP)
}
