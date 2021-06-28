// Business logic
$(document).ready(function() {
    $("#order-details").hide();
    $(".delivery-section").hide();
    $("#delivery").hide();

    var totalPriceArray = [];
    function Order(pizzaFlavour,pizzaSize, pizzaCrust, pizzaTopping, amount) {
        this.pizzaFlavour = pizzaFlavour;
        this.pizzaSize = pizzaSize;
        this.pizzaCrust = pizzaCrust;
        this.pizzaTopping = pizzaTopping;
        this.pizzaPrice = 0;
        this.amount = amount;
    }

    Order.prototype.pizzaCost = function() {
        if (this.pizzaSize === "regular") {
            this.pizzaPrice += 800;
        } else if (this.pizzaSize === "medium") {
            this.pizzaPrice += 1000;
        } else if (this.pizzaSize === "large") {
            this.pizzaPrice += 1000;
        }

        if (this.pizzaCrust === "thin") {
            this.pizzaPrice += 200;
        } else if (this.pizzaCrust === "thick") {
            this.pizzaPrice += 200;
        } else if (this.pizzaCrust === "stuffed") {
            this.pizzaPrice += 200;
        } else if (this.pizzaCrust === "crispy") {
            this.pizzaPrice += 200;
        }

        if (this.pizzaTopping === "tomato") {
            this.pizzaPrice += 80;
        } else if (this.pizzaTopping === "sausage") {
            this.pizzaPrice += 80;
        } else if (this.pizzaTopping === "mushroom") {
            this.pizzaPrice += 80;
        } else if (this.pizzaTopping === "chicken") {
            this.pizzaPrice += 80;
        }
    };

    Order.prototype.finalCost = function() {
        var cartTotalPrice = [];
        for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
            cartTotalPrice += totalPriceArray[arrayElement];
        }
        return cartTotalPrice;
    };

    $(".btn.check-out").click(function(event) {
        event.preventDefault();
    });
    $("form#custom-pizza").submit(function(event) {
        event.preventDefault();
        var pizzaFlavour = $("select#pizzaFlavour").val();
        var pizzaSize = $("select#pizzaSize").val();
        var pizzaCrust = $("select#pizzaCrust").val();
        var pizzaTopping = $("select#pizzaTopping").val();
        var pizzaDetails = (pizzaFlavour + " - " + pizzaSize + " - " + pizzaCrust + " - " + pizzaTopping);
        var newPizzaOrder = new Order(pizzaFlavour,pizzaSize, pizzaCrust, pizzaTopping);
        newPizzaOrder.pizzaCost();
        totalPriceArray.push(newPizzaOrder.pizzaPrice);
        $("#final-cost").text(newPizzaOrder.finalCost());
        $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    });

    $("#checkout-btn").click(function() {
        $("#checkout-btn").hide();
        $("#order-details").slideDown(1000);
        $("#delivery").slideDown(1000);
 
    });
    $("#delivery").click(function(){
        $("#order-details").hide();
        $(".cart-section").hide();
        $("#delivery").hide();
        $(".delivery-section").slideDown();
        

    });

    $("#delivery").submit(function() {
        var name = $("input#name").val();
        var phoneNumber = $("input#phoneNumber").val();
        var location = $("input#location").val();

        alert("Hello " +  name + ". Your order has been successfully received. It will be processed and delivered to " + location + " within one hour of placing.  Your delivery fee is ksh.250 .   Thank you for chosing our pizza inn.");
    });
});