import browser from "webextension-polyfill";
import { log } from "./utils";
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
        // TODO create a wait for element util function so that it makes sure the menubar exists before trying to add icon

        const rootDiv = document.querySelector<HTMLElement>("#react-root");
        const bttwConponentInject = document.createElement("bttw-component");
        rootDiv?.appendChild(bttwConponentInject);

        const menuIconWrapper = document.createElement("div");
        menuIconWrapper.className = "css-1dbjc4n r-obd0qt r-1pz39u2 r-1777fci r-1vsu8ta r-2j7rtt";
        menuIconWrapper.innerHTML = `<p>🎨</p>`;
        menuIconWrapper.id = "toggleBTTW";
        menuIconWrapper.onclick = function() {
            /* appBasis used because everything doesn't shift from here */
            const appBasis = document.querySelector<HTMLElement>(".css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010");
            const isShown = document.querySelector("bttw-component")?.getAttribute("shown") != null;

            if (isShown){
                document.querySelector("bttw-component")?.removeAttribute("shown");
                const scrollY = appBasis!.style.top;
                appBasis!.style.position = '';
                appBasis!.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            } else {
                appBasis!.style.top = `-${window.scrollY}px`;
                appBasis!.style.position = 'fixed';
                document.querySelector("bttw-component")?.setAttribute("shown", "");
            }
        }
        
        const elems = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-1iud8zs r-1777fci r-1jgb5lz r-sb58tz r-1j3t67a r-13qz1uu");
        const menubar = Array.from(elems as HTMLCollectionOf<HTMLElement>).find(elem => elem.innerText == "Home");
        menubar?.insertBefore(menuIconWrapper, menubar.lastChild);
        (menubar?.lastChild as HTMLElement | undefined)?.classList.remove("r-2j7rtt");
    }
}

new BetterTwitter();

/* browser.storage.local.set({
    [window.location.hostname]: document.title,
}).then(() => {
    console.log("Saved!")
    browser.runtime.sendMessage(`Saved document title for ${window.location.hostname}`);
}); */
