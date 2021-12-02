

let wert = false;



function knopf () { 
    console.log("knopf")
    let preis1 = document.getElementById("preis1").innerHTML;
    let preis2 = document.getElementById("preis2").innerHTML;
    let preis3 = document.getElementById("preis3").innerHTML;
    let preis4 = document.getElementById("preis4").innerHTML;
    let preis5 = document.getElementById("preis5").innerHTML;
    let preis6 = document.getElementById("preis6").innerHTML;
    let preis7 = document.getElementById("preis7").innerHTML;
    let preis8 = document.getElementById("preis8").innerHTML;
    let preis9 = document.getElementById("preis9").innerHTML;

if (wert === false) {
    
    document.getElementById("knopf").innerHTML = "in € anzeigen";


    document.getElementById("preis1").innerHTML = (Number(preis1) * 1.14).toFixed(1);
    document.getElementById("währungZeichen1").innerHTML = "€"

    document.getElementById("preis2").innerHTML = (Number(preis2) * 1.14).toFixed(1);
    document.getElementById("währungZeichen2").innerHTML = "€"

    document.getElementById("preis3").innerHTML = (Number(preis3) * 1.14).toFixed(1);
    document.getElementById("währungZeichen3").innerHTML = "€"

    document.getElementById("preis4").innerHTML = (Number(preis4) * 1.14).toFixed(1);
    document.getElementById("währungZeichen4").innerHTML = "€"

    document.getElementById("preis5").innerHTML = (Number(preis5) * 1.4).toFixed(1);
    document.getElementById("währungZeichen5").innerHTML = "$€"

    document.getElementById("preis6").innerHTML = (Number(preis6) * 1.14).toFixed(1);
    document.getElementById("währungZeichen6").innerHTML = "€"

    document.getElementById("preis7").innerHTML = (Number(preis7) * 1.14).toFixed(1);
    document.getElementById("währungZeichen7").innerHTML = "€"
    document.getElementById("preis8").innerHTML = (Number(preis8) * 1.14).toFixed(1);

    document.getElementById("währungZeichen8").innerHTML = "€"

    document.getElementById("preis9").innerHTML = (Number(preis9) * 1.14).toFixed(1);
    document.getElementById("währungZeichen9").innerHTML = "€"
}

else {
    document.getElementById("knopf").innerHTML = "In $ anzeigen";

    document.getElementById("preis1").innerHTML = (Number(preis1) / 1.14).toFixed(1);
    document.getElementById("währungZeichen1").innerHTML = "$"

    document.getElementById("preis2").innerHTML = (Number(preis2) / 1.4).toFixed(1);
    document.getElementById("währungZeichen2").innerHTML = "$"

    document.getElementById("preis3").innerHTML = (Number(preis3) / 1.14).toFixed(1);
    document.getElementById("währungZeichen3").innerHTML = "$"

    document.getElementById("preis4").innerHTML = (Number(preis4) / 1.14).toFixed(1);
    document.getElementById("währungZeichen4").innerHTML = "$"


    document.getElementById("preis5").innerHTML = (Number(preis5) / 1.14).toFixed(1);
    document.getElementById("währungZeichen5").innerHTML = "$"

    document.getElementById("preis6").innerHTML = (Number(preis6) / 1.14).toFixed(1);
    document.getElementById("währungZeichen6").innerHTML = "$"

    document.getElementById("preis7").innerHTML = (Number(preis7) / 1.14).toFixed(1);
    document.getElementById("währungZeichen7").innerHTML = "$"

    document.getElementById("preis8").innerHTML = (Number(preis8) / 1.14).toFixed(1);
    document.getElementById("währungZeichen8").innerHTML = "$"

    document.getElementById("preis9").innerHTML = (Number(preis9) / 1.14).toFixed(1);
    document.getElementById("währungZeichen9").innerHTML = "$"


}

wert = !wert;
}
