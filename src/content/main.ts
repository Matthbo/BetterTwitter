import browser from "webextension-polyfill";
import { testLog } from "./test";

testLog("Starting");
testLog(document);

browser.storage.local.set({
    [window.location.hostname]: document.title,
}).then(() => {
    console.log("Saved!")
    browser.runtime.sendMessage(`Saved document title for ${window.location.hostname}`);
});
