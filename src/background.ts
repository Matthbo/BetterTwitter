import { runtime, storage } from "webextension-polyfill";

runtime.onMessage.addListener(async (msg, sender) => {
    console.log("BG page received message", msg, "from", sender);
    console.log("Stored data", await storage.local.get());
});
