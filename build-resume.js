const puppeteer = require("puppeteer");
const dayjs = require("dayjs");


(async () => {
    try {
        const browser = await puppeteer.launch({args: ["--no-sandbox"]});
        const page = await browser.newPage();
        const location = `file://${process.cwd()}/resume/resume.html`;
        await page.goto(location, {
            waitUntil: "networkidle2"
        });

        await page.pdf({
            path: `build/Ken-Hoff-Resume-${dayjs().format("YYYY-MM-DD")}.pdf`,
            printBackground: true
        });
        await browser.close();
    } catch (e) {
        console.log(e);
    }

})();
