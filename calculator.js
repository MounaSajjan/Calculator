// This function clears all the values
function clearScreen() {
    document.getElementById("finalResult").value = "";
}
 
// This function displays the values
function displayValue(value) {
    document.getElementById("finalResult").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("finalResult").value;
    var q = eval(p);
    document.getElementById("finalResult").value = q;
}

function del() {
   var ev = document.getElementById('finalResult');
   ev.value = ev.value.slice(0, -1);
}

