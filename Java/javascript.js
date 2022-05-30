
function informacion(){
    base = window.prompt("digite la medida de la base");
    altura = window.prompt("digite la medida de la altura");
    window.document.forms["f1"]["t1"].value = base;
    window.document.forms["f1"]["t2"].value = altura;
}

function calcular(){

    window.document.forms["f1"]["t1"].value = base;
    window.document.forms["f1"]["t2"].value = altura;
    window.document.forms["f1"]["t3"].value = (parseInt(base) * parseInt(altura))/2;
}
function borrar(){

    base = " ";
    altura = " ";
    window.document.forms["f1"]["t3"] .value =" ";
    window.document.forms["f1"]["t2"] .value =" ";
    window.document.forms["f1"]["t1"] .value =" ";
}
