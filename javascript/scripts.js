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

// lets calculate the total amount
function totalAmount() {
    var total = (getSize() + getCrust() + getTopping()) * getQuantity();
    console.log(total);
    alert("You have placed your order" + getQuantity() +"pizza," + "" + "Thanks for your order welcome again.");
}