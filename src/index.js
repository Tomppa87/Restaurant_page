import {pageLoad} from "./page_load";
import {aboutPageLoad} from "./about";
import {menuPageLoad} from "./menu";
import "./styles.css";

pageLoad();
let content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn")

menuBtn.addEventListener("click", () => {
    content.removeChild(content.lastChild)
    menuPageLoad()
})
aboutBtn.addEventListener("click", () => {
    content.removeChild(content.lastChild)
    aboutPageLoad()
})

homeBtn.addEventListener("click", () => {
    content.removeChild(content.lastChild)
    pageLoad()
})