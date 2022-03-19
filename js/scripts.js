
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

user interface logic
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




function calculateFinalTotal() {
    let total = 0;
    box.forEach((pizza) => {
        total += pizza.price;
    });

    $(".final-total").html(`Ksh <span class="text-bold">${total}</span> `)
}


 // initialize an empty box
 const box = [];
 // check if box is empty
 if (box.length == 0) {
     $(".empty-box").show();
     $(".delivery-button").hide();
 } else {
     $(".empty-box").hide();
 }
 $("#order-form").on("submit", function (e) {
     //prevent default action
     e.preventDefault();

     const selectedPizzaName = $("#pizza").val();
     const selectedSize = $("#size").val();
     const selectedCrust = $("#crust").val();
     const selectedToppings = $("input[name='toppings[]']:checkbox:checked")
         .map(function () {
             return $(this).val();
         })
         .get();
     // validation for all fields
     if (!selectedPizzaName || !selectedSize || !selectedCrust) {
         $("#error").text("** Input your order** ");
         return;
     } else {
         $("#error").text("");
     }
     // box details
     //check if selected pizza exists in box
     const boxPizza = box.find((pizza) => {
         const sameToppings =
             JSON.stringify(pizza.toppings) == JSON.stringify(selectedToppings);

         return (
             pizza.name == selectedPizzaName &&
             pizza.size.size == selectedSize &&
             sameToppings
         );
     });
     //if it exists increase quantity
     if (boxPizza) {
         boxPizza.setQuantity(boxPizza.quantity + 1);
     } else {
         const pizza = new Pizza(selectedPizzaName);
         pizza.setSize(selectedSize);
         pizza.setCrust(selectedCrust);
         pizza.setTopings(selectedToppings);

         box.push(pizza);
     }
     // empty tbody first
     $(".order-table tbody").html("");
     //loop and append
     box.forEach((pizza, boxIndex) => {
         $(".order-table tbody").append(`
         <tr>
             <td>${pizza.name}</td>
             <td>${pizza.size.size}</td>
             <td>${pizza.crust.name}</td>
             <td>${pizza.toppings.join(", ")}</td>
             <td>
                 <input type="number" min="1" class="input-sm form-control pizza-quantity" data-box-index="${boxIndex}" value="${pizza.quantity
             }" />
             </td>
             <td>Ksh ${pizza.price}</td>
         </tr>
     `);
         // show checkout button
         $(".delivery-button").show();
         // console.log(pizza);
         //update final total
         calculateFinalTotal();

     });

 });
 //pizza quantity change event
 $("body").on("change", ".pizza-quantity", function () {
     const quantity = $(this).val();
     const boxIndex = $(this).data("box-index");
     const pizza = box[boxIndex];

     if (quantity > 0) {
         pizza.setQuantity(quantity);
         // update line total
         $(this).parent().next().html(`Ksh <span class="text-bold">${pizza.price}</span> `);
     }

     //update final total
     calculateFinalTotal();
 });

 // delivery modal
 $("#delivery-form").on("submit", function (e) {
     //prevent default action
     e.preventDefault();
     // check if the user has selected the radio button
     const selectd = $("input[name='deliveryMethod']:checked");
     if (selectd.val() == undefined) {
         $(".delivery-option").html("<p class='text-danger'>** Please select the delivery method **</p>");
         return;
     } else {
         $(".delivery-option").text("");
         // check which radio button was selected
         if (selectd.val() == "delivery") {
             $("#location-input-details").show();
             // user inputs variables
             const customerName = $("#customerName").val();
             const customerPhone = $("#customerPhone").val();
             const customerLocation = $("#customerLocation").val();
             const additionalInfo = $("#additionalInfo").val();
             // validate user inputs
             if (!customerName || !customerPhone || !customerLocation) {
                 $(".error-delivery-location").text("Fill in all input fields with * to proceed!")
                 return;
             } else {
                 $(".error-delivery-location").text("");
             }
             function calculatFinalTotal() {
                 let total = 0;
                 box.forEach((pizza) => {
                     total += pizza.price;
                 });
                 const getTotalPlusDeliveryFee = total + 128;
                 console.log(getTotalPlusDeliveryFee);
                 console.log(box);
                 $("#select-delivery-method").hide();
                 $(".delivery-head").append(`
                 <div class="alert alert-success" role="alert">Hello ${customerName}. Order successfully processed. Your order will be delivered to your location(${customerLocation})🙂</div>
                     <div class="d-flex justify-content-between">
                         <div>
                             <h5>Order Summary</h5>
                         </div>
                         <div>
                             <p class="color-palace float-right">Total Ksh <span class="text-bold">${getTotalPlusDeliveryFee}</span></p>
                         </div>
                     </div>
                 `);
                 //loop and append
                box.forEach((pizza, boxIndex) => {
                     $(".delivery-bottom").append(`
                     <div>
                     <div class="row">
                         <div class="col-md-12">
                             <ol class="list-group">
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                     <div class="ms-2 me-auto">
                                         <div class="fw-bold">${pizza.name}(${pizza.size.size})</div>
                                         Crust - ${pizza.crust.name} <br>
                                         Toppings - ${pizza.toppings.join(", ")}
                                     </div>
                                     <span class="badge bg-primary rounded-pill">${pizza.quantity}</span>
                                 </li>
                             </ol>
                         </div>
                     </div>
                    </div>
                     `);
                 });

             }
             calculateFinalTotal()
             // $("#deliveryMethodModal").hide();
         } else if (selectd.val() == "pickup") {
             function calculateFinalTotal() {
                 let total = 0;
                box.forEach((pizza) => {
                     total += pizza.price;
                 });
                 const getTotalPlusDeliveryFee = total;
                 console.log(getTotalPlusDeliveryFee);
                 $("#select-delivery-method").hide();
                 $(".delivery-head").append(`
                 <div class="alert alert-success" role="alert">Hello. Order successfully processed. Your order will be delivered to your location in 30 minutes</div>
                     <div class="d-flex justify-content-between">
                         <div>
                             <h5>Order Summary</h5>
                         </div>
                         <div>
                             <p class="color-palace float-right">Total Ksh <span class="text-bold">${getTotalPlusDeliveryFee}</span></p>
                         </div>
                     </div>
                 `);
                 //loop and append
                 box.forEach((pizza, boxIndex) => {
                     $(".delivery-bottom").append(`
                     <div>
                     <div class="row">
                         <div class="col-md-12">
                             <ol class="list-group">
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                     <div class="ms-2 me-auto">
                                         <div class="fw-bold">${pizza.name}(${pizza.size.size})</div>
                                         Crust - ${pizza.crust.name} <br>
                                         Toppings - ${pizza.toppings.join(", ")}
                                     </div>
                                     <span class="badge bg-primary rounded-pill">${pizza.quantity}</span>
                                 </li>
                             </ol>
                         </div>
                     </div>
                    </div>
                     `);
                 });

             }
             calculateFinalTotal()
         }
     }

 })
});












