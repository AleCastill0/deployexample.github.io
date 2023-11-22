'use strict'
var suma = 0;

function btnSumar() {
    var val1 = document.getElementById('txtval1').value;
    var val2 = document.getElementById('txtval2').value;
    suma = parseInt(val1) + parseInt(val2);
    document.form1.txtRes.value = suma;
}