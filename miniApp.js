function begroet(naam){
    console.log("Hallo", naam, "!");
}

function som (a, b) {
    return a + b;
}

let naam = "Quinten";
let resultaat = som(5, 7);

begroet(naam);
console.log("De som van 5 en 7 is ", resultaat);