// Business logic
$(document).ready(function() {
    $("#order-details").hide();

    var totalPriceArray = [];
    function Order(pizzaSize, pizzaCrust, pizzaTopping, amount) {
        this.pizzaSize = pizzaSize;
        this.pizzaCrust = pizzaCrust;
        this.pizzaTopping = pizzaTopping;
        this.pizzaPrice = 0;
        this.amount = amount;
    }

    Order.prototype.pizzaCost = function() {
        if (this.pizzaSize === "regular") {
            this.pizzaPrice += 800;
        } else if (this.size === "medium") {
            this.pizzaPrice += 1000;
        } else if (this.size === "large") {
            this.pizzaPrice += 1000;
        }
    }
});






// function getSize() {
//     var size = document.getElementById("pizzaSize").value;
//     return parseInt(size);
// }

// function getCrust() {
//     var crust = document.getElementById("pizzaCrust").value;
//     return parseInt(crust);
// }

// function getTopping() {
//     var topping = document.getElementById("pizzaTopping").value;
//     return parseInt(topping);
// }

// function getQuantity() {
//     var number = document.getElementById("pizzaQuantity").value;
//     return parseInt(number);
// }


// // lets calculate the total amount
// function totalAmount() {
//     var total = (getSize() + getCrust() + getTopping()) * getQuantity();
//     alert("You have ordered " + getQuantity() + " pizza," + "" + " amounting to ksh. " +
//     total + " ");
// }

// // delivery form inputs
// $(document).ready(function() {
//     $("#delivery").submit(function(){
//         var name = $("input#name").val();
//         var number = $("input#number").val();
//         var location = $("input#location").val();

//         alert("Hello " +  name + ". Your order has been successfully received. It will be processed and delivered to " + location + " within one hour of placing.  Your delivery fee is ksh.250 .   Thank you for chosing our pizza inn.");
//     });
// });