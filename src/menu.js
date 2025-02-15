export function menuPageLoad() {
    let content = document.getElementById("content");
    // create container for menu to be added to content page
    let menuPage = document.createElement("div");
    // create date for menu header
    let date = new Date();
    let dnum = date.getDay();
    let dday = date.getDate();
    let month = date.getMonth();    
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dname = dayNames[dnum];
    // create menu header with date as H2    
    let menuHeader = document.createElement("h2");
    menuHeader.id = "menuHeader"
    menuHeader.innerHTML = ("Menu for" +" "+ dname+" " + dday+"." + (month+1));
    menuPage.appendChild(menuHeader);

    // create menu items as list
    let menu = document.createElement("ul");
    let menuItems = ["Lasagne", "Grillileike", "Korealainen possuburger", "Pepperjack-leike"];
    //console.log(menuItems)
    for (let i = 0; i<menuItems.length;i++) {
        //console.log(menuItems[i])
        let item = document.createElement("li");
        item.innerHTML = menuItems[i];
        menu.appendChild(item);
    }
    menuPage.appendChild(menu)
    
    content.appendChild(menuPage);
}
