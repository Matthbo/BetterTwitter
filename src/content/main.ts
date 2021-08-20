// import * as browser from "webextension-polyfill";
import { testLog } from "./test";

console.log("Starting...");

testLog();

/* browser.storage.local.set({
    [window.location.hostname]: document.title,
}).then(() => {
    browser.runtime.sendMessage(`Saved document title for ${window.location.hostname}`);
}); */
