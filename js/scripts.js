
// Business logic
function Pizza (name) {
    this.name = name;
    this.toppings = [];
    this.quantity = 1;
    this.price=0;   
}
// Pizza name
const pizzanames = [
    { name: "Pepperoni" },
    { name: "Chicken Tikka" },
    { name: "Gamberi" },
    { name: "Pulled Pork" },
    { name: "Margharita" },
    { name: "Marinara" },
    { name: "Mushroom" },
    { name: "Spicy Veggie" },
    { name: "Bbq Pork" },
    { name: "Grilled Pork" },
    { name: "Hawaiian" },
];

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

// order pizza size
Pizza.prototype.orderSize = function (size) {
    const pizzaSize = pizzaSizes.find((pizzaSize) => pizzaSize.size == size);
    if (pizzaSize) {
        this.size = pizzaSize;
        this.calculateTotal();
    }
};

//order pizza crust
Pizza.prototype.orderCrust = function (crust) {
    const pizzaCrust = pizzaCrusts.find((pizzaCrust) => pizzaCrust.crust == crust);
    if (pizzaCrust) {
        this.crust = pizzaCrust;
        this.calculateTotal();
    }
};
//order pizza toppings
Pizza.prototype.orderToppings = function (toppings) {
    this.toppings = toppings;
    this.calculateTotal();
};

//order quantity
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

    if (this.toppings) {
        this.price = this.price + this.toppings.length * toppingPrice;
    }

    this.price *= this.quantity;
};

// user interface logic
// $(document).ready(function() {
//     $("form#new-order").submit(function(event) {
//         event.preventDefault();

//         var orderSize = $("input#new-size").val();
//         var orderCrust= $("input#new-size").val();
//         var orderToppings = $("input#new-size").val();
//         var orderQuantity = $("input#new-size").val();


//         var newOrder = new Order(inputtedFirstName, inputtedLastName);

//         // append pizzas
//     pizzas.forEach((pizza) => {
//         $("#pizza").append(`<option value="${pizza.name}">${pizza.name}</option>`);
//     });
//     // append pizza sizes
//     pizzaSizes.forEach((pizzaSize) => {
//         $("#size").append(
//             `<option value="${pizzaSize.size}">${pizzaSize.size}-${pizzaSize.price}</option>`
//         );
//     });

//     // append pizza crusts
//     pizzaCrusts.forEach((pizzaCrust) => {
//         $("#crust").append(
//             `<option value="${pizzaCrust.name}">${pizzaCrust.name}-${pizzaCrust.price}</option>`
//         );
//     });

//     //append pizza toppings
//     pizzaToppings.forEach((topping) => {
//         $(".toppings").append(`<div class="col-md-6">
//         <div class="form-check">
//           <input class="form-check-input" name="toppings[]" type="checkbox" id="${topping}" value="${topping}">
//           <label class="form-check-label" for="${topping}">
//               ${topping}
//           </label>
//           </div>
//         </div>`);
// }


$(document).ready(function() {

    $("#add-order").click(function() {
      $("#new-addresses").append('<form id="order-form">' +
                                 '<div class="form-group">'+
                                 '<label for="new-size">Select Pizza Size <span class="text-danger">*</span></label>' +
                                 '<select name="size" id="size" class="form-control">'+
                                     '<option value="" selected disabled>Size</option> ' +
                                 '</select>' +
                                 '</div>'+
                                 '<div class="form-group">'+
                                 '<label for="new-crust">Select Pizza Crust <span class="text-danger">*</span></label>'+
                                 '<select name="crust" id="crust" class="form-control">'+
                                 '<option value="" selected disabled>Select Crust</option>'+
                                 '</select>'+
                                 '</div>'+
                                 '<div class="form-group">'+
                                 '<label for="new-toppings">Select Pizza Toppings <span class="text-danger">*</span></label>'+
                                 '<select name="toppings" id="toppings" class="form-control">'+
                                 '<option value="" selected disabled>Toppings</option>'+
                                     '</select>'+
                                     '</div>');
    });
  
//     $("form#new-order").submit(function(event) {
//       event.preventDefault();
  
//       var inputtedFirstName = $("input#new-first-name").val();
//       var inputtedLastName = $("input#new-last-name").val();
//       var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
//       $(".new-address").each(function() {
//         var inputtedStreet = $(this).find("input.new-street").val();
//         var inputtedCity = $(this).find("input.new-city").val();
//         var inputtedCounty = $(this).find("input.new-county").val();
//         var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
//         newContact.addresses.push(newAddress)
//       });
  
//       $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
//       Address.prototype.fullAddress = function() {
//         return this.street + ", " + this.city + ", " + this.county;
//       }
  
//       $(".contact").last().click(function() {
//         $("#show-contact").show();
//         $("#show-contact h2").text(newContact.fullName());
//         $(".first-name").text(newContact.firstName);
//         $(".last-name").text(newContact.lastName);
//         $("ul#addresses").text("");
//         newContact.addresses.forEach(function(address) {
//           $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//         });
//       });
  
//       $("input#new-first-name").val("");
//       $("input#new-last-name").val("");
//       $("input.new-street").val("");
//       $("input.new-city").val("");
//       $("input.new-county").val("");
  
//     });
//   });
  

function calculateFinalTotal() {
    let total = 0;
    cart.forEach((pizza) => {
        total += pizza.price;
    });

    $(".final-total").html(`Ksh <span class="text-bold">${total}</span> `)
}


