// oefening 1.

/*const groterDan100 =function (nummer) {
    if (nummer > 100) {
        return "ja dit getal is groter dan 100";
    };
    return "nee dit getal is kleiner dan 100";
};

const getal1 = groterDan100(51);
console.log(getal1);

const getal2 = groterDan100(801);
console.log(getal2);*/


// oefening 2.


/*const uitsmijter=function(
    leeftijd, 
    MaxAantal, 
    huidigAantal
    ) {

    if (leeftijd < 21) {
        return `dit is een club voor volwassenen.`;
    };


    if (huidigAantal < MaxAantal) {
        return `kom binnen.`;
    };


    return `het is nu te druk, kom later terug.`;
};


const klant1 = uitsmijter(54, 100, 33);
console.log(klant1);

const klant2 = uitsmijter(17, 100, 18);
console.log(klant2);

const klant3 = uitsmijter(25, 100, 100);
console.log(klant3);*/


/*const uitsmijter=function(
    leeftijd, 
    MaxAantal, 
    huidigAantal) {
    if (leeftijd < 18) {
        return console.log(`dit is een club voor volwassenen.`);
    };
    if (huidigAantal < MaxAantal) {
        return console.log(`Kom binnen`);
    };
    return console.log(`het is nu te druk, kom later terug.`);
};

const klant1 = uitsmijter(40, 100, 50);
const klant2 = uitsmijter(17, 100, 70);
const klant3 = uitsmijter(44, 100, 100);*/




/*const uitsmijter=function(
    leeftijd,
     MaxAantal, 
     huidigAantal
     ) {       
    if (leeftijd >= 18 && huidigAantal < MaxAantal) {
        return console.log(`kom binnen`);
    } else if (leeftijd >= 18 && huidigAantal >= MaxAantal) {
        return console.log(`het is nu te druk, kom later terug.`);
    };
    return console.log(`dit is een club voor volwassenen.`);
};

const klant1 = uitsmijter(40, 100, 55);
const klant2 = uitsmijter(15, 100, 55);
const klant3 = uitsmijter(99, 100, 100);*/

// oefening 3.



const gemiddelde = function (
    nummer1,
    nummer2,
    nummer3,
    nummer4,
    nummer5
) {
    const totaal = nummer1 + nummer2 + nummer3 + nummer4 + nummer5;
    const gemiddelde = totaal / 5;
    return gemiddelde
};

console.log(gemiddelde(10, 20, 30, 40, 50));