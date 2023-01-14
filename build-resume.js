const puppeteer = require("puppeteer");
const dayjs = require("dayjs");


(async () => {
    try {
        const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
        const page = await browser.newPage();
        // const location = `http://localhost:1234/resume.html`;
        const location = `file://${process.cwd()}/resume/resume.html`;
        await page.goto(location, {
            waitUntil: "networkidle2"
        });
        const path = `build/Ken-Hoff-Resume-${dayjs().format("YYYY-MM-DD")}.pdf`
        await page.pdf({
            path,
            printBackground: true
        });
        await browser.close();
        console.log(`built at ${path}`);
    } catch (e) {
        console.log(e);
    }

})();
