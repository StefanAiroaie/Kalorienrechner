

console.log("test");

function calculate() {
    let gewicht = document.querySelector('#gewicht').value
    let kGrosse = document.querySelector('#kGrosse').value
    let alter = document.querySelector('#alter')
    let mann = document.querySelector("#geschlechtMann").checked
    let frau = document.querySelector("#geschlechtFrau").checked

    // options für swicht 
    let palWertOptions = document.querySelector("#palWertOptions")
    let palWert = palWertOptions.value

    let result = document.querySelector('#result')

    console.log("gewicht" + gewicht);

    if (mann == true) {
        bmrWert = 66 + (13.7 * gewicht) + (5 * kGrosse) - (6.8 * alter)
    }
    else if (frau == true) {
        bmrWert = 66 + (13.7 * gewicht) + (5 * kGrosse) - (6.8 * alter)
        console.log(bmrWert);
    }
    else
        result.innerHTML = "bitte selectiere dein geschlecht"

    switch (palWert) {
        case 'palW1':
            result = Number(bmrWert) * 1.2
            break
        case 'palW2':
            result.innerHTML = Number(bmrWert) * 1.375
            break
        case 'palW3':
            result = Number(bmrWert) * 1.55
            break
        case 'palW4':
            result = Number(bmrWert) * 1.725
            break
        case 'palW5':
            result = Number(bmrWert) * 1.9
            break
        default:
            break

    }

    result.innerHTML = "Dein Kalorienbedarf nach Harris-Benedict-Formel ist" + result + "kcal pro Tag"

    console.log("palW1 " + palW1);

}
