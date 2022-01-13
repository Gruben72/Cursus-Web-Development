// oefening: Guess the number game


// Als gebruiker wil ik een inleidend bericht dat de gebruiker begroet en naar zijn naam vraagt.

// Als gebruiker wil ik, nadat ik mijn naam heb ingevoerd, een bericht zien: "Hey [naam]"

// Als gebruiker wil ik na de begroeting met mijn naam om een ​​nieuwe invoer met een cijfer worden gevraagd.

// Als gebruiker wil ik kunnen invoeren en nummeren en op enter klikken.

// Als gebruiker wil ik een bericht ontvangen wanneer ik het verkeerde nummer heb geraden.

// Als gebruiker wil ik een bericht ontvangen wanneer ik het juiste nummer heb geraden.

// Als gebruiker wil ik een bericht ontvangen wanneer het spel is afgelopen.

function spel() {
  alert(" Welkom, wat is jou naam ?");
  let naam = prompt(" Toets jou naam in")
  alert("Hoi, " + naam + " zullen we beginnen ?");

  const nummer = Math.floor(Math.random() * 25) + 1;
  let keuze = parseInt(prompt("Kies een nummer tussen de 1 en 25"));

  while (keuze !== nummer) {
    keuze = parseInt(prompt("Je hebt het verkeerde getal gekozen, raad nog eens!"));

  }
  if (keuze == nummer) {
    alert(" Dat was het goede nummer.");

  }
}
spel();

