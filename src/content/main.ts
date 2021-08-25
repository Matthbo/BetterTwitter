import browser from "webextension-polyfill";
import { log } from "./test";
import "./bttw-component";

class BetterTwitter {

    private static instance: BetterTwitter;

    constructor(){
        /* Future proofing? idk */
        if(!BetterTwitter.instance) {
            BetterTwitter.instance = this;
            this.onLoad();
        }

        return BetterTwitter.instance;
    }

    private onLoad() {
        const timer = window.setInterval(() => {
            const rootDiv = document.querySelector("#react-root");
            const placeholder = rootDiv?.querySelector("#placeholder");
            const progressbar = rootDiv?.querySelector("[role=\"progressbar\"]");
            if(!placeholder && !progressbar) {
                window.clearInterval(timer);
                this.initialise();
            }
        }, 10);
    }

    private initialise() {
        const elems = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-1iud8zs r-1777fci r-1jgb5lz r-sb58tz r-1j3t67a r-13qz1uu");
        const menubar = Array.from(elems as HTMLCollectionOf<HTMLElement>).find(elem => elem.innerText == "Home");

        const menuIconWrapper = document.createElement("div");
        menuIconWrapper.className = "css-1dbjc4n r-obd0qt r-1pz39u2 r-1777fci r-1vsu8ta r-2j7rtt";
        menuIconWrapper.innerHTML = `<p>🎨</p>`;
        menuIconWrapper.id = "toggleBTTW";
        menuIconWrapper.onclick = function() {
            log("clicked!!!!");
            const rootDiv = document.querySelector("#react-root");
            const bttwConponentInject = document.createElement("bttw-component");
            rootDiv?.appendChild(bttwConponentInject);
        }

        log(menuIconWrapper);
        (menubar?.lastChild as HTMLElement)?.classList.remove("r-2j7rtt");

        menubar?.insertBefore(menuIconWrapper, menubar.lastChild);
    }
}

new BetterTwitter();

/* browser.storage.local.set({
    [window.location.hostname]: document.title,
}).then(() => {
    console.log("Saved!")
    browser.runtime.sendMessage(`Saved document title for ${window.location.hostname}`);
}); */
