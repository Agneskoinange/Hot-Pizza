
// Business logic
function Pizza (order) {
    this.size = Sizes;
    this.crust = Crusts;
    this.toppings = [];
    this.quantity = 1;
    this.price=0;   
}

// size
var Sizes = ["small", "medium", "large"];

// crusts

var Crusts = ["Crispy", "Stuffed", "Gluten-free"];

//toppings
var Toppings = ["Mushrooms", "Butternut", "Cauliflower", "Bacon", "Tomatoes"];


// pizza sizes
const pizzaSizes = [
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
// pizza Toppings
const pizzaToppings = [
    {
        name: "Mushrooms",
        price: 60,
    },

    {
        name: "Butternut",
        price: 50,
    },

    {
        name: "Cauliflower",
        price: 70,
    },

    {
        name: "Bacon",
        price: 80,
    },

    {
        name: "Tomatoes",
        price: 40,
    },

];

// set pizza size
Pizza.prototype.orderSize = function (size) {
    const pizzaSize = pizzaSizes.find((pizzaSize) => pizzaSize.size == size);
    if (pizzaSize) {
        this.size = pizzaSize;
        this.calculateTotal();
    }
};

//set pizza crust
Pizza.prototype.orderCrust = function (crust) {
    const pizzaCrust = pizzaCrusts.find((pizzaCrust) => pizzaCrust.crust == crust);
    if (pizzaCrust) {
        this.crust = pizzaCrust;
        this.calculateTotal();
    }
};

Pizza.prototype.orderToppings = function (toppings) {
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

        var orderSize = $("input#new-size").val();
        var orderCrust= $("input#new-size").val();
        var orderToppings = $("input#new-size").val();
        var orderQuantity = $("input#new-size").val();


        var newOrder = new Order(inputtedFirstName, inputtedLastName);

        // append pizzas
    pizzas.forEach((pizza) => {
        $("#pizza").append(`<option value="${pizza.name}">${pizza.name}</option>`);
    });
    // append pizza sizes
    pizzaSizes.forEach((pizzaSize) => {
        $("#size").append(
            `<option value="${pizzaSize.size}">${pizzaSize.size}-${pizzaSize.price}</option>`
        );
    });

    // append pizza crusts
    pizzaCrusts.forEach((pizzaCrust) => {
        $("#crust").append(
            `<option value="${pizzaCrust.name}">${pizzaCrust.name}-${pizzaCrust.price}</option>`
        );
    });

    //append pizza toppings
    pizzaToppings.forEach((topping) => {
        $(".toppings").append(`<div class="col-md-6">
        <div class="form-check">
          <input class="form-check-input" name="toppings[]" type="checkbox" id="${topping}" value="${topping}">
          <label class="form-check-label" for="${topping}">
              ${topping}
          </label>
          </div>
        </div>`);
}