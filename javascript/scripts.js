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
    alert("You have ordered " + getQuantity() + " pizza," + "" + " amounting to ksh. " +
    total + " ");
    prompt("Enter your email address")
    prompt("Enter your phone number")
    prompt("Enter your location")
    alert("Your delivery fee is ksh.250")
    alert("Your order will be processed and delivered within one hour of placing")
    alert("Continue shopping with us each and everytime")
}

