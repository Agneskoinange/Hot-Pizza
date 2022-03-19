
// Business logic
function Pizza (order) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
    this.quantity = 1;
    this.price=0;   
}

// size
var Sizes = ["small", "medium", "large"];

// crusts

var Crusts = ["Crispy", "Stuffed", "Gluten-free"];

//toppings
const pizzaToppings = ["Mushrooms", "Butternut", "Cauliflower", "Bacon", "Tomatoes"];


// pizza sizes
const pizzaSize = [
    {
        size: "small",
        price: 400,
    },
    {
        size: "medium",
        price: 700,
    },
    {
        size: "large",
        price: 1000,
    },
];

// pizza crusts
const pizzaCrusts = [
    {
        name: "crispy",
        price: 240,
    },
    {
        name: "stuffed",
        price: 200,
    },
    {
        name: "Glutten free",
        price: 250,
    },
];

const toppingPrice = 80;

// set pizza size
Pizza.prototype.orderSize = function (size) {
    this.size = pizzaSize;
    this.calculateTotal();
};

//set pizza crust
Pizza.prototype.orderCrust = function (crust) {
    this.crust = pizzaCrust;
    this.calculateTotal();
};

Pizza.prototype.orderTopings = function (toppings) {
    this.toppings = toppings;
    this.calculateTotal();
};

//set quantity
Pizza.prototype.orderQuantity = function (quantity) {
    this.quantity = +quantity;
    this.calculateTotal();
};

// calculate pizza total
Pizza.prototype.calculateTotal = function () {

    if (this.size) {
        this.price = this.size.price;
    }

    if (this.crust) {
        this.price = this.price + this.crust.price;
    }

    // add the price of toppings
    this.price += this.toppings.length * toppingPrice;

    this.price *= this.quantity;
};

// user interface logic
$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputtedSize = $("input#new-size").val();
}