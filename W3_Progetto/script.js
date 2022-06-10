var base = "";
document.getElementById("schermino").value = base;

function aggiungi(n) {
    document.getElementById("schermino").value = document.getElementById("schermino").value+n;
    document.getElementById("schermino").innerHTML = document.getElementById("schermino").value;
}
function cancella(){
    document.getElementById("schermino").value = base;
    document.getElementById("schermino").innerHTML = base;
}
function esegui(){
    var risultato = eval(document.getElementById("schermino").value);
    if(risultato!=undefined){
        document.getElementById("schermino").value = risultato;
        document.getElementById("schermino").innerHTML = risultato;
    }
}
