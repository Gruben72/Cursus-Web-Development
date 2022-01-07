// oefening 1

/*function muurschilderen() {
    console.log('De muur is rood geverfd.');
};

muurschilderen();*/


// oefening 2

/* function muurschilderen(kleur) {
    console.log("De muur is de kleur " + kleur + " geverfd");
};

muurschilderen('groen');
muurschilderen('paars');
muurschilderen(); */

//dan geeft hij i.p.v. een kleur undefined aan.


// oefening 3

function muurschilderen(kleur, locatie) {
    console.log('De muur op het ' + locatie + ' is in de kleur ' + kleur + ' geschilderd.');
};

muurschilderen('oranje', 'noorden');
muurschilderen('grijs', 'zuiden');

// De volgorde voor het aanroepen van de argumenten is alleen belangrijk.
// Anders zal hij de uitwerkingen omdraaien.