const nettoBrutto = document.getElementById("MwSt+");
const bruttoNetto = document.getElementById("MwSt-");
const nineteen = document.getElementById("satz_19");
const seven = document.getElementById("satz_7");
const inputNumber = document.getElementById ("inputNum");
const result = document.getElementById("result_endbetrag");
const resultMwSt = document.getElementById("result_MwSt");
const txt_endbetrag = document.getElementById("txt-BetragErgebnis");
const txt_MwSt = document.getElementById("txt_MwSt");

const rechner = () => {
    if (nettoBrutto.checked == true && nineteen.checked == true){
        result.innerHTML = (inputNumber.value * 1.19).toFixed(2).concat("€");
        resultMwSt.innerHTML = (inputNumber.value * 0.19).toFixed(2).concat("€");
        txt_endbetrag.innerHTML = "Bruttobetrag (Endpreis)"
    }
    else if (nettoBrutto.checked == false && nineteen.checked == true){
        result.innerHTML = (inputNumber.value / 1.19).toFixed(2).concat("€");
        resultMwSt.innerHTML = (inputNumber.value / 1.19 * 0.19).toFixed(2).concat("€");
        txt_endbetrag.innerHTML = "Nettobetrag"
    }
    else if (nettoBrutto.checked == true && seven.checked == true){
        result.innerHTML = (inputNumber.value * 1.07).toFixed(2).concat("€");
        resultMwSt.innerHTML = (inputNumber.value * 0.07).toFixed(2).concat("€");
        txt_endbetrag.innerHTML = "Bruttobetrag (Endpreis)"
    }
    else if (nettoBrutto.checked == false && seven.checked == true){
        result.innerHTML = (inputNumber.value / 1.07).toFixed(2).concat("€");
        resultMwSt.innerHTML = (inputNumber.value / 1.07 * 0.07).toFixed(2).concat("€");
        txt_endbetrag.innerHTML = "Nettobetrag"
    }
}

let text = () => {
    if (nettoBrutto.checked == true){ 
    txt_MwSt.innerHTML = ("Nettobetrag (Preis ohne Mehrwertsteuer)in Euro"); 
    } else {
    txt_MwSt.innerHTML = ("Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro");    
    }    
}





