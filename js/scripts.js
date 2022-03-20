// Business logic
function Pizza(name,size, crust,toppings,quantity) {
    this.name =name
    this.size =size
    this.crust = crust
    this.toppings = toppings
    this.quantity = quantity
}

function Name (name) {
    this.name = name
}
function Size (size,cost) {
    this.size = size
    this.cost = cost
}
function quantity () {
    this.quantity = quantity 
}    

function Crust(crust,cost) {
    this.crust = crust
    this.cost = cost 
}        
function Toppings (toppings,cost) {
    this.toppings = toppings
    this.cost = cost
 }       

//  Pizza names
let Pepperoni = new Name ("Pepperoni")
let ChickenTikka = new Name("Chicken Tikka")
let Gamberi = new Name("Gamberi")
let PulledPork = new Name ("Pulled Pork")
let Margharita = new Name("Margharita")
let Marinara = new Name("Marinara")
let SpicyVeggie = new Name("Spicy Veggie")
let Mushroom = new Name("Mushroom")
let BbqPork = new Name("Bbq Pork")
let GrilledPork = new Name("Grilled Pork")
let Hawaiian = new Name("Hawaiian")


//pizza size
let large = new Size("large", 900);
let medium = new Size("medium",700);
let small = new Size("small",500);


// Pizza crusts
let crispy = new Crust("crispy",250);
let stuffed = new Crust("stuffed",200);
let gluttenfree = new Crust("gluttenfree",180);

// toppings
let Mushrooms = new Toppings("Mushrooms",250);
let Butternut = new Toppings("Butternut",50);
let Cauliflower = new Toppings("Cauliflower",70);
let Bacon = new Toppings("Bacon",80);
let Tomatoes = new Toppings("Tomatoes",40);



// User interface logic
$(document).ready(function() {
    $("form#order-form").submit(function(event) {
        event.preventDefault();
        
        var inputtedName = $("select#name").val();
        var inputtedSize = $("select#size").val();
        var inputtedCrust = $("select#crust").val();
        var inputtedToppings = $("select#toppings").val();
        var inputtedToppings = $("select#toppings").val();  
        var inputtedToppings = $("select#toppings").val(); 
        var inputtedQuantity = $("input#quantity").val();
        
        //output
        var order="<tr>"+
        "<td>" + inputtedName+"</td>"+
        "<td>" + inputtedSize +"</td>"+
        "<td>" + inputtedCrust +"</td>"+
        "<td>" + inputtedToppings+"</td>"+
        "<td>" + inputtedToppings+"</td>"+
        "<td>" + inputtedToppings+"</td>"+
        "<td>" + inputtedQuantity +"</td>"+
        
        "</tr>";
    
        $("ul#orders").append(order);
        

        

    });
});


function response() {
    alert("your order will be sent to your selected location")
    alert("click the checkout button to exit")

};
function exit() {
    alert("click the checkout button to exit")
};



















// $(document).ready(function() {
//     alert(here you are)
// });

// // Business logic
// function Pizza (name) {
//     this.name = name;
//     this.toppings = [];
//     this.quantity = 1;
//     this.cost=0;   
// }
// // Pizza name
// const pizzanames = [
//     { name: "Pepperoni" },
//     { name: "Chicken Tikka" },
//     { name: "Gamberi" },
//     { name: "Pulled Pork" },
//     { name: "Margharita" },
//     { name: "Marinara" },
//     { name: "Mushroom" },
//     { name: "Spicy Veggie" },
//     { name: "Bbq Pork" },
//     { name: "Grilled Pork" },
//     { name: "Hawaiian" },
// ];

// // pizza sizes
// const pizzaSizes = [
//     {
//         size: "small",
//         cost: 400,
//     },
//     {
//         size: "medium",
//         cost: 700,
//     },
//     {
//         size: "large",
//         cost: 1000,
//     },
// ];

// // pizza crusts
// const pizzaCrusts = [
//     {
//         name: "crispy",
//         cost: 240,
//     },
//     {
//         name: "stuffed",
//         cost: 200,
//     },
//     {
//         name: "Glutten free",
//         cost: 250,
//     },
// ];
// // pizza Toppings
// const pizzaToppings = [
//     {
//         name: "Mushrooms",
//         cost: 60,
//     },

//     {
//         name: "Butternut",
//         cost: 50,
//     },

//     {
//         name: "Cauliflower",
//         cost: 70,
//     },

//     {
//         name: "Bacon",
//         cost: 80,
//     },

//     {
//         name: "Tomatoes",
//         cost: 40,
//     },

// ];

// // order pizza size
// Pizza.prototype.orderSize = function (size) {
//     const pizzaSize = pizzaSizes.find((pizzaSize) => pizzaSize.size == size);
//     if (pizzaSize) {
//         this.size = pizzaSize;
//         this.calculateTotal();
//     }
// };

// //order pizza crust
// Pizza.prototype.orderCrust = function (crust) {
//     const pizzaCrust = pizzaCrusts.find((pizzaCrust) => pizzaCrust.crust == crust);
//     if (pizzaCrust) {
//         this.crust = pizzaCrust;
//         this.calculateTotal();
//     }
// };
// //order pizza toppings
// Pizza.prototype.orderToppings = function (toppings) {
//     this.toppings = toppings;
//     this.calculateTotal();
// };

// //order quantity
// Pizza.prototype.orderQuantity = function (quantity) {
//     this.quantity = +quantity;
//     this.calculateTotal();
// };

// // calculate pizza total
// Pizza.prototype.calculateTotal = function () {

//     if (this.size) {
//         this.cost = this.size.cost;
//     }

//     if (this.crust) {
//         this.cost = this.cost + this.crust.cost;
//     }

//     if (this.toppings) {
//         this.cost = this.cost + this.toppings.length * toppingcost;
//     }

//     this.cost *= this.quantity;
// };

// // user interface logic
// $(document).ready(function() {
//     $("form#new-order").submit(function(event) {
//         event.preventDefault();
//         // append pizzas
//     pizzas.forEach((pizza) => {
//         $("#pizza").append(`<option value="${pizza.name}">${pizza.name}</option>`);
//     });
//     // append pizza sizes
//     pizzaSizes.forEach((pizzaSize) => {
//         $("#size").append(
//             `<option value="${pizzaSize.size}">${pizzaSize.size}-${pizzaSize.cost}</option>`
//         );
//     });

//     // append pizza crusts
//     pizzaCrusts.forEach((pizzaCrust) => {
//         $("#crust").append(
//             `<option value="${pizzaCrust.name}">${pizzaCrust.name}-${pizzaCrust.cost}</option>`
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
// });




//     function calculateFinalTotal() {
//     let total = 0;
//     box.forEach((pizza) => {
//         total += pizza.cost;
//     });

//     $(".final-total").html(`Ksh <span class="text-bold">${total}</span> `)
// };


//  // initialize an empty box
//  const box = [];
//  // check if box is empty
//  if (box.length == 0) {
//      $(".empty-box").show();
//      $(".delivery-button").hide();
//  } else {
//      $(".empty-box").hide();
//  }
//  $("#order-form").on("submit", function (e) {
//      //prevent default action
//      e.preventDefault();

//      const selectedPizzaName = $("#pizza").val();
//      const selectedSize = $("#size").val();
//      const selectedCrust = $("#crust").val();
//      const selectedToppings = $("input[name='toppings[]']:checkbox:checked")
//          .map(function () {
//              return $(this).val();
//          })
//          .get();
//      // validation for all fields
//      if (!selectedPizzaName || !selectedSize || !selectedCrust) {
//          $("#error").text("** Input your order** ");
//          return;
//      } else {
//          $("#error").text("");
//      }
//      // box details
//      //check if selected pizza exists in box
//      const boxPizza = box.find((pizza) => {
//          const sameToppings =
//              JSON.stringify(pizza.toppings) == JSON.stringify(selectedToppings);

//          return (
//              pizza.name == selectedPizzaName &&
//              pizza.size.size == selectedSize &&
//              sameToppings
//          );
//      });
//      //if it exists increase quantity
//      if (boxPizza) {
//          boxPizza.setQuantity(boxPizza.quantity + 1);
//      } else {
//          const pizza = new Pizza(selectedPizzaName);
//          pizza.setSize(selectedSize);
//          pizza.setCrust(selectedCrust);
//          pizza.setTopings(selectedToppings);

//          box.push(pizza);
//      }
//      // empty tbody first
//      $(".order-table tbody").html("");
//      //loop and append
//      box.forEach((pizza, boxIndex) => {
//          $(".order-table tbody").append(`
//          <tr>
//              <td>${pizza.name}</td>
//              <td>${pizza.size.size}</td>
//              <td>${pizza.crust.name}</td>
//              <td>${pizza.toppings.join(", ")}</td>
//              <td>
//                  <input type="number" min="1" class="input-sm form-control pizza-quantity" data-box-index="${boxIndex}" value="${pizza.quantity
//              }" />
//              </td>
//              <td>Ksh ${pizza.cost}</td>
//          </tr>
//      `);
//          // show checkout button
//          $(".delivery-button").show();
//          // console.log(pizza);
//          //update final total
//          calculateFinalTotal();

//      });

//  });
//  //pizza quantity change event
//  $("body").on("change", ".pizza-quantity", function () {
//      const quantity = $(this).val();
//      const boxIndex = $(this).data("box-index");
//      const pizza = box[boxIndex];

//      if (quantity > 0) {
//          pizza.setQuantity(quantity);
//          // update line total
//          $(this).parent().next().html(`Ksh <span class="text-bold">${pizza.cost}</span> `);
//      }

//      //update final total
//      calculateFinalTotal();
//  });

//  // delivery modal
//  $("#delivery-form").on("submit", function (e) {
//      //prevent default action
//      e.preventDefault();
//      // check if the user has selected the radio button
//      const selectd = $("input[name='deliveryMethod']:checked");
//      if (selectd.val() == undefined) {
//          $(".delivery-option").html("<p class='text-danger'>** Please select the delivery method **</p>");
//          return;
//      } else {
//          $(".delivery-option").text("");
//          // check which radio button was selected
//          if (selectd.val() == "delivery") {
//              $("#location-input-details").show();
//              // user inputs variables
//              const customerName = $("#customerName").val();
//              const customerPhone = $("#customerPhone").val();
//              const customerLocation = $("#customerLocation").val();
//              const additionalInfo = $("#additionalInfo").val();
//              // validate user inputs
//              if (!customerName || !customerPhone || !customerLocation) {
//                  $(".error-delivery-location").text("Fill in all input fields with * to proceed!")
//                  return;
//              } else {
//                  $(".error-delivery-location").text("");
//              }
//              function calculatFinalTotal() {
//                  let total = 0;
//                  box.forEach((pizza) => {
//                      total += pizza.cost;
//                  });
//                  const getTotalPlusDeliveryFee = total + 128;
//                  console.log(getTotalPlusDeliveryFee);
//                  console.log(box);
//                  $("#select-delivery-method").hide();
//                  $(".delivery-head").append(`
//                  <div class="alert alert-success" role="alert">Hello ${customerName}. Order successfully processed. Your order will be delivered to your location(${customerLocation})🙂</div>
//                      <div class="d-flex justify-content-between">
//                          <div>
//                              <h5>Order Summary</h5>
//                          </div>
//                          <div>
//                              <p class="color-palace float-right">Total Ksh <span class="text-bold">${getTotalPlusDeliveryFee}</span></p>
//                          </div>
//                      </div>
//                  `);
//                  //loop and append
//                 box.forEach((pizza, boxIndex) => {
//                      $(".delivery-bottom").append(`
//                      <div>
//                      <div class="row">
//                          <div class="col-md-12">
//                              <ol class="list-group">
//                                  <li class="list-group-item d-flex justify-content-between align-items-start">
//                                      <div class="ms-2 me-auto">
//                                          <div class="fw-bold">${pizza.name}(${pizza.size.size})</div>
//                                          Crust - ${pizza.crust.name} <br>
//                                          Toppings - ${pizza.toppings.join(", ")}
//                                      </div>
//                                      <span class="badge bg-primary rounded-pill">${pizza.quantity}</span>
//                                  </li>
//                              </ol>
//                          </div>
//                      </div>
//                     </div>
//                      `);
//                  });

//              }
//              calculateFinalTotal()
//              // $("#deliveryMethodModal").hide();
//          } else if (selectd.val() == "pickup") {
//              function calculateFinalTotal() {
//                  let total = 0;
//                 box.forEach((pizza) => {
//                      total += pizza.cost;
//                  });
//                  const getTotalPlusDeliveryFee = total;
//                  console.log(getTotalPlusDeliveryFee);
//                  $("#select-delivery-method").hide();
//                  $(".delivery-head").append(`
//                  <div class="alert alert-success" role="alert">Hello. Order successfully processed. Your order will be delivered to your location in 30 minutes</div>
//                      <div class="d-flex justify-content-between">
//                          <div>
//                              <h5>Order Summary</h5>
//                          </div>
//                          <div>
//                              <p class="color-palace float-right">Total Ksh <span class="text-bold">${getTotalPlusDeliveryFee}</span></p>
//                          </div>
//                      </div>
//                  `);
//                  //loop and append
//                  box.forEach((pizza, boxIndex) => {
//                      $(".delivery-bottom").append(`
//                      <div>
//                      <div class="row">
//                          <div class="col-md-12">
//                              <ol class="list-group">
//                                  <li class="list-group-item d-flex justify-content-between align-items-start">
//                                      <div class="ms-2 me-auto">
//                                          <div class="fw-bold">${pizza.name}(${pizza.size.size})</div>
//                                          Crust - ${pizza.crust.name} <br>
//                                          Toppings - ${pizza.toppings.join(", ")}
//                                      </div>
//                                      <span class="badge bg-primary rounded-pill">${pizza.quantity}</span>
//                                  </li>
//                              </ol>
//                          </div>
//                      </div>
//                     </div>
//                      `);
//                  });

//              }
//              calculateFinalTotal()
//          }
//      }

//  })
// });


// });
