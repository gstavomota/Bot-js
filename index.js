const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor');

async function robo(){
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Moeda Base: ') || 'Dolar';
    const moedaFinal = readlineSync.question('Moeda Final: ') || 'Real';

    const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i433i512j0i512l8.9005j1j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(url);
    const resultado = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value;
    })
    // await page.screenshot({path: 'examplo.png'});
    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
    await browser.close();
}

robo();