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
}

// $(document).ready(function() {
//     $("#checkout").submit(function() {
//         let pizzaFlavour = $(".pizzaFlavour option:selected");
//         let pizzaSize = $(".pizzaSize option:selected");
//         let pizzaCrust = $(".pizzaCrust option:selected");
//         let pizzaTopping = $(".pizzaTopping option:selected");
//     })
// })

// delivery form inputs
$(document).ready(function() {
    $("#delivery").submit(function(){
        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " +  name + ". Your order has been successfully received. It will be processed and delivered to " + location + " within one hour of placing.  Your delivery fee is ksh.250 .   Thank you for chosing our pizza inn.");
    });
});