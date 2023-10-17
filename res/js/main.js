let dia = document.getElementById("dia");
let pocet = document.getElementById("pocet");
let autoclicker = document.getElementById("autoclicker");
let costclick = document.getElementById("costautoclick");
let poc = document.getElementById("poc");
let steve1 = document.getElementById("steve");
let double = 0;
let fifty = 0;


let cursor = 0;
let diamond = 0;
let price = 10;
let interval;


const change = () => {
    diamond++;
    diamond += double;
    diamond += fifty;
    pocet.innerText = `Diamond: ${diamond}`;
};

dia.onclick = change;
let cost = 10;
let cena = 10;
let cur = 0;

const autoclickerBuy = () => {
    if (diamond >= cost) {
        diamond -= cost;
        cost = cost + 10;
        pocet.innerText = `Diamond: ${diamond}`;
        interval = setInterval(change, 5000);
        autoclicker.style.display = "block";
        price = cena;
        cena = cena + 10;
        costclick.innerText = `Cena: ${cena}`;
        cursor = cur;
        cur++;
        poc.innerText = `${cur}`;
    }
}

autoclicker.onclick = autoclickerBuy;

let pickaxe = document.getElementById("pickaxe");
let costclick2 = document.getElementById("costautoclick2");
let poc2 = document.getElementById("poc2");

let pia = 0;
let pio = 0;
let price2 = 100;
let cena2 = 100;
let cost2 = 100;

const pickaxeBuy = () => {
    if (diamond >= cost2) {
        diamond -= cost2;
        cost2 = cost2 + 75;
        pocet.innerText = `Diamond: ${diamond}`;
        interval = setInterval(change, 3000);
        pickaxe.style.display = "block";
        price2 = cena2;
        cena2 = cena2 + 75;
        costclick2.innerText = `Cena: ${cena2}`;
        pia = pio;
        pio++;
        poc2.innerText = `${pio}`;
    }
}
pickaxe.onclick = pickaxeBuy;

let steve = document.getElementById("steve");
let costclick3 = document.getElementById("costautoclick3");
let poc3 = document.getElementById("poc3");

let mina = 0;
let mino = 0;
let price3 = 300;
let cena3 = 300;
let cost3 = 300;

const steveBuy = () => {
    if (diamond >= cost3) {
        diamond -= cost3;
        cost3 = cost3 + 100;
        pocet.innerText = `Diamond: ${diamond}`;
        interval = setInterval(change, 1500);
        steve.style.display = "block";
        price3 = cena3;
        cena3 = cena3 + 100;
        costclick3.innerText = `Cena: ${cena3}`;
        mina = mino;
        mino++;
        poc3.innerText = `${mino}`;
    }
}
steve1.onclick = steveBuy;


let minecart = document.getElementById("minecart");
let costclick4 = document.getElementById("costautoclick4");
let poc4 = document.getElementById("poc4");

let carta = 0;
let carto = 0;
let price4 = 1000;
let cena4 = 1000;
let cost4 = 1000;

const minecartBuy = () => {
    if (diamond >= cost4) {
        diamond -= cost4;
        cost4 = cost4 + 500;
        pocet.innerText = `Diamond: ${diamond}`;
        interval = setInterval(change, 750);
        minecart.style.display = "block";
        price4 = cena4;
        cena4 = cena4 + 500;
        costclick4.innerText = `Cena: ${cena4}`;
        carta = carto;
        carto++;
        poc4.innerText = `${carto}`;
    }
}
minecart.onclick = minecartBuy;


let doubleclick = document.getElementById("doubleclick");
let costclick6 = document.getElementById("costautoclick6");
let onetimedouble = true;
let price6 = 250;
let cena6 = 250;
let cost6 = 250;

const doubleclickBuy = () => {
    if (diamond >= cost6 && onetimedouble == true) {
        diamond -= cost6;
        pocet.innerText = `Diamond: ${diamond}`;
        double = 1;
        doubleclick.style.display = "block";
        price6 = cena6;
        costclick6.innerText = `Cena: ${cena6}`;
        onetimedouble = false;
        costclick6.innerText = " ";
    } else {
        return;
    }
}
doubleclick.onclick = doubleclickBuy;

let fiftyclick = document.getElementById("fiftyclick");
let costclick7 = document.getElementById("costautoclick7");
let onetimefifty = true;
let price7 = 5000;
let cena7 = 5000;
let cost7 = 5000;

const fiftyclickBuy = () => {
    if (diamond >= cost7 && onetimefifty == true) {
        diamond -= cost7;
        pocet.innerText = `Diamond: ${diamond}`;
        fifty = 49;
        fiftyclick.style.display = "block";
        price7 = cena7;
        costclick7.innerText = `Cena: ${cena7}`;
        onetimefifty = false;
        costclick7.innerText = " ";
    } else {
        return;
    }
}
fiftyclick.onclick = fiftyclickBuy;