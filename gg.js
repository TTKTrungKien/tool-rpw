const puppeteer = require("puppeteer"),
    fs = require("fs").promises,
    colors = require("colors");
var prompt = require("prompt");
console.log("\n\n"), console.log(" ████████╗████████╗██╗░░██╗\n".brightRed + " ╚══██╔══╝╚══██╔══╝██║░██╔╝\n".brightGreen + " ░░░██║░░░░░░██║░░░█████═╝░\n".brightYellow + " ░░░██║░░░░░░██║░░░██╔═██╗░\n".brightBlue + " ░░░██║░░░░░░██║░░░██║░╚██╗\n".brightCyan + " ░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝\n".brightWhite), console.log("\n\nAuthor : ".brightWhite, "Thiệu Trung Kiên".brightGreen.bold), console.log("\n-------------------\n"), console.log("Vui lòng nhập url bài viết!\n".brightGreen), prompt.start(), prompt.get(["url"], (function(e, o) {
    !async function() {
        for (;;) {
            const e = await puppeteer.launch({
                    headless: !1,
                    args: ["--start-maximized", "--disable-popup-blocking", "--allow-popups-during-page-unload"]
                }),
                i = await e.newPage();
            await i.setUserAgent("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.116 Safari/537.36");
            const t = await fs.readFile("./cookies.json"),
                r = JSON.parse(t);
            await i.setCookie(...r), await i.goto("https://rpwliker.com/facebook/posts"), await i.click(".mt-6", (e => e.button[1])), await i.waitForTimeout(1000), await i.type(".flex-1 > div > div > div > div > input", `${o.url}`), await i.waitForTimeout(1000), await i.click(".flex-shrink-0", (e => e.button[1])), console.log("[TTK] : +100 Like - Cooldowns 20 phut"), await i.waitForTimeout(2000), await e.close(), await i.waitForTimeout(1200000)
        }
    }()
}));