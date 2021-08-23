import { runtime, storage } from "webextension-polyfill";

runtime.onMessage.addListener(async (msg, sender) => {
    console.log("Service worker received message", msg, "from", sender);
    console.log("Stored data", await storage.local.get());
});
