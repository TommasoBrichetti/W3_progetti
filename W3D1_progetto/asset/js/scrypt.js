alert('Benvenuto in questa sessione di pratica con JavaScrypt');
var animalePiccolo = "Puledro"
var animaleGrande = "Cavallo"

document.getElementById("test_01").innerHTML = animalePiccolo;

function PuledroGrow(){
    document.getElementById("test_01").innerHTML = animaleGrande;
}
function CavalloShrink(){
    document.getElementById("test_01").innerHTML = animalePiccolo;
}
document.write("Guarda la console per avere la soluzione");
console.log("Il "+ animalePiccolo + "è un "+ animaleGrande +" cresciuto!!!");
