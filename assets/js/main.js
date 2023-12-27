
function calculate() {
    let gewicht = document.querySelector('#gewicht').value
    gewicht = Number(gewicht)
    let kGrosse = document.querySelector('#kGrosse').value
    kGrosse = Number(kGrosse)
    let alter = document.querySelector('#alter').value
    alter = Number(alter)
    let mann = document.querySelector("#geschlechtMann").checked
    let frau = document.querySelector("#geschlechtFrau").checked

    // options für swicht 
    let palWertOptions = document.querySelector("#palWertOptions")
    let palWert = palWertOptions.value

    // fur die results am ende
    let result = document.querySelector('#result')
    let Kalorienbedarf
    let errorMessage = document.querySelector("#errorMessage")
    let bmrWert

    // fur mich zu prufen ob alle functiniert
    // console.log("gewicht" + gewicht);
    // console.log("kGrosse" + kGrosse);
    // console.log("mann" + mann);
    // console.log("frau" + frau);
    // console.log("alter" + alter);

    // erste abfrage ob mann oder frau und die enstehende formula
    if (mann == true) {
        bmrWert = 66 + (13.7 * gewicht) + (5 * kGrosse) - (6.8 * alter)

    }
    else if (frau == true) {
        bmrWert = 665 + (9.6 * gewicht) + (1.8 * kGrosse) - (4.7 * alter)

    }
    else {
        errorMessage.innerHTML = "ERROR - bitte selectiere dein geschlecht"
    }

    // jede case hat andere wer zu multiplizieren
    switch (palWert) {
        case 'palW1':
            Kalorienbedarf = bmrWert * 1.2
            break
        case 'palW2':
            Kalorienbedarf = bmrWert * 1.375
            break
        case 'palW3':
            Kalorienbedarf = bmrWert * 1.55
            break
        case 'palW4':
            Kalorienbedarf = bmrWert * 1.725
            break
        case 'palW5':
            Kalorienbedarf = bmrWert * 1.9
            break
        default:
            break

    }

    // abfrage zu kleren ob werte gegen wurden oder die richtige antwort

    if (gewicht == "" && kGrosse == "" && mann == false && frau == false) {
        errorMessage.innerHTML += "</br> ERROR - bitte werte eingeben"

    }
    else if (gewicht == "" || kGrosse == "" || alter == "") {
        errorMessage.innerHTML = ""
        errorMessage.innerHTML += "ERROR - bitte alle werte eingeben"
    }

    else {
        errorMessage.innerHTML = ""
        result.innerHTML = "Dein Kalorienbedarf nach Harris-Benedict-Formel ist " + Math.round(Kalorienbedarf) + " kcal pro Tag"
    }

}




