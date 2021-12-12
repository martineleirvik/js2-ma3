import { getUsername } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {

    const { pathname} = document.location;
    console.log(pathname);

    const username = getUsername();
    console.log(username);

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`

    if (username) {
        authLink = `<button id="logout">Logout ${username}</button>`;
    }

    const menuContainer = document.querySelector(".menu-container");

    menuContainer.innerHTML = `<div class="menu">
                                    <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                                    ${authLink}
                                </div>`;

    logoutButton();
}