var stringaDiPartenza = "io sono una rana";
let resultString = stringaDiPartenza.toUpperCase();
console.log(resultString);
resultString = stringaDiPartenza.toLocaleLowerCase();
console.log(resultString);
console.log(stringaDiPartenza.substring(3,7)+ " " +stringaDiPartenza.substring(12,16));


//array

const persone = ["Giacomino","Mariello","Nasturzio","Caloggero"];
console.log(persone.join(" & "));
console.log(persone[2]);
var nomeAggiuntivo = "upupo";
persone.push(nomeAggiuntivo);
console.log(persone.join(" , "));


function cercanomi(persona){
    return persona=="upupo";
}
console.log(cercanomi());


//el dadoooo

const d20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const d12 = [1,2,3,4,5,6,7,8,9,10,11,12];
const d8 = [1,2,3,4,5,6,7,8];
const d6 = [1,2,3,4,5,6];
 
function spin20(){
    document.getElementById("el_dadoooo").innerHTML = d20[Math.floor(Math.random() * 20)];
}
function spin12(){
    document.getElementById("el_dadoooo").innerHTML = d12[Math.floor(Math.random() * 12)];
}
function spin8(){
    document.getElementById("el_dadoooo").innerHTML = d8[Math.floor(Math.random() * 8)];
}
function spin6(){
    document.getElementById("el_dadoooo").innerHTML = d6[Math.floor(Math.random() * 6)];
}
