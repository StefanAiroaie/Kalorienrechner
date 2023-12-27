
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

    // fur mich zu prufen ob alle functiniert
    console.log("gewicht" + gewicht);
    console.log("kGrosse" + kGrosse);
    console.log("mann" + mann);
    console.log("frau" + frau);
    console.log("alter" + alter);
    let bmrWert

    if (mann == true) {
        bmrWert = 66 + (13.7 * gewicht) + (5 * kGrosse) - (6.8 * alter)
        console.log(bmrWert);
    }
    else if (frau == true) {
        bmrWert = 665 + (9.6 * gewicht) + (1.8 * kGrosse) - (4.7 * alter)
        console.log(bmrWert);
    }
    else {
        errorMessage.innerHTML = "bitte selectiere dein geschlecht"
    }

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
    console.log(result);
    console.log(Kalorienbedarf);
    result.innerHTML = "Dein Kalorienbedarf nach Harris-Benedict-Formel ist " + Math.round(Kalorienbedarf) + " kcal pro Tag"

}




