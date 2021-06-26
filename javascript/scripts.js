// Business logic
function getSize() {
    var size = document.getElementById("pizzaSize").value;
    return parseInt(size);
}

function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
}

function getTopping() {
    var topping = document.getElementById("pizzaTopping").value;
    return parseInt(topping);
}

function getQuantity() {
    var number = document.getElementById("pizzaQuantity").value;
    return parseInt(number);
}