function helloWorld(){console.log("hello world")};
helloWorld();

function melarancia(mele, arance){
let melarancia = "succo con "+ mele +" mele e "+ arance+" arance.";
return melarancia;
};
console.log(melarancia(4,5));
console.log(melarancia(4,));

var frecciaAnni = (a) => 2050 - a;
console.log(frecciaAnni(2000));

function anni(a){
    var anni = 2050 - a;
    return anni;
}
console.log(anni(1999))
//__________________________________________________________________________________________________


function anni2050(){
    var dataNascita = document.getElementById("data_nascita").value;
    let anni2050 = 2050 - dataNascita;
    document.getElementById("anni2050").innerHTML = "avrai " + anni2050+ " anni.";
    return dataNascita;
}

function pensione(){
    let dataNascita = anni2050();
    let anniPensione = 65-(2020-dataNascita);
    document.getElementById("pensione").innerHTML = "andrai in pensione tra "+ anniPensione + " anni.";
}