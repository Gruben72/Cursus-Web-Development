const leeftijd = 17;
if (leeftijd >= 18) {
    console.log("u mag naar binnen");
} else {
    console.log("Sorry u bent te jong en mag niet naar binnen");
}

const vrouw = true;

if (vrouw == true) {
    console.log("Welkom");
} else {
    console.log("Sorry mannen mogen niet naar binnen.");
}

const driverStatus = "gedronken";

if (driverStatus == "gedronken") {

    console.log("u mag niet meer rijden");
} else {
    console.log("goede reis terug");
}

const leeftijd2 = 30;
if (leeftijd2 >= 18 && leeftijd2 <= 25) {
    console.log("U krijgt 50% korting op uw bier!!");
} else {
    console.log("Kijk voor onze andere actie's!");
}

const voornaam = "Jeroen";
if (voornaam === "Sarah" || voornaam === "Abraham") {
    console.log("U krijgt een gratis biertje!");
} else {
    console.log("Leuk feestje he!")
}

const rekening = 105;
if (rekening >= 25 && rekening < 50) {
    console.log("U krijg een gratis portie (vegetarische) bitterballen!");
} else if (rekening >= 50 && rekening < 100) {
    console.log("U krijg een gratis portie nachos!");
} else if (rekening >= 100) {
    console.log("U krijg een gratis fles champagne!");
}