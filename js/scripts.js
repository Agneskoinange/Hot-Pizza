
$(document).ready(function(){
    $(function () {
        $(".ordersummary").hide();
        $(".deliver-check").hide();



    $("#btn").click(function(event){
        event.preventDefault();
        let name = $("#name option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let quantity = $("#quantity").val();
        let topping= $("#topping option:checked").val();
       

        let order = (inputtedName, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity, inputtedTotal) => {
            return {inputtedName, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity, inputtedTotal};
        };


        let price,totalPrice;
        switch (name){
            case name = "Pepperoni":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Chicken Tikka":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Gamberi":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Pulled Pork":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Margharita":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Marinara":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Mushroom":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Spicy Veggie":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Bbq Pork":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Grilled Pork":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;
                case name = "Hawaiian":
                switch (size) {
                    case size = "Large":
                        price = 900;
                        if (crust === "Crispy" ){
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity)+ 180;
                        } 
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Medium":
                        price = 700;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        }
                        break;
                    case size = "Small":
                        price = 500;
                        if (crust === "Crispy") {
                            totalPrice = (price * quantity) + 250;
                        } else if (crust === "Stuffed") {
                            totalPrice = (price * quantity) + 200;
                        } else if (crust === "Glutten free") {
                            totalPrice = (price * quantity) + 180;
                        }
                        else{
                            totalPrice === price
                        } 
                        break;       
                        
                }
                break;


            

        }

        // switch (toppings){
        //     case (toppings)
        // }

    
        switch (topping){
            case topping = "Mushrooms":
                totalPrice = totalPrice + 100;
                break;
            case topping = "Butternut":
                totalPrice = totalPrice + 50;
                break;
            case topping = "Cauliflower":
                totalPrice = totalPrice + 70;
                break;
            case topping = "Bacon":
                totalPrice = totalPrice +80;
                break;
            case topping = "Tomatoes":
                totalPrice = totalPrice + 40;
                break;
        }
    

        

        let newOrder= order(name,size,crust,topping,quantity,totalPrice);

        $(".ordersummary").slideToggle(2000)
        $('.deliver-check').slideToggle();
        $('#yourOrder').slideToggle();
        $('.transport').show(1000);
        

    

        $("#yourOrder").text(" ");
        $("#yourOrder").append( "Pizza name: " + newOrder.inputtedName + "<br>"
         + "Size: " + newOrder.inputtedSize + "<br>"
         + "Crust: " + newOrder.inputtedCrust + "<br>"
         + "Topping: " + newOrder.inputtedTopping + "<br>"
         + "Quantity: " + newOrder.inputtedQuantity + "<br>"
         + "Total: " + newOrder.inputtedTotal)
    });
        $(".transport").click(function () {
        $(".ordersummary").slideToggle();
        $("#yourOrder").slideToggle();
        $(".ordersummary").text("Please provide your location for deliveries.").slideToggle();
        $(".transport").hide(1000);
        $(".deliver-check").slideToggle();
    });

    

    });

});


function customerValidate () {
    var customerName = document.getElementById("customername").value;
    var customerPhone = document.getElementById("customerphone").value;
    var customerLocation = document.getElementById("customerlocation").value;
    if (customerName == "" || customerPhone  == ""|| customerLocation  == ""){
      alert("Please enter your name, phone number and location.");
       return false;

    }
    else{
      alert ("Your order will be delivered to " + customerLocation + ".  Delivery charges are Ksh.100");
          }
    }
  





// function validate () {
//     var name = document.getElementById("yourname").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     if (name == "" || email  == ""|| message  == ""){
//       alert("Please enter your name, email and message!");
//        return false;

//     }
//     else{
//       alert ("Thank you " +  name + " for contacting us. We will get back to you as soon as possible.");
//           }
//     }





































// function Order(name, size, crust, quantity,toppings, total) {
//     this.name = name;
//     this.size = size;
//     this.crust = crust;
//     this.quantity = quantity;
//     this.toppings = toppings;
//     this.total = total;
//   }
//   Order.prototype.newOrder 
//    var sumtotal = 0
//   //user Interface Logic
//   $(document).ready(function(){
//     $(".delivery").hide()
//     $("#checkout").click(function () {
//     alert("Hello,this is your order and the total amount is ksh."+sumtotal)
  
     
//     $(".delivery").show()   
//     });
//     $(".btn").click(function () {
//       locationvalidate() 
     
//       // $(".delivery").show()   
//       });
    
//     let toppings = []
//           $("#top1").change(function () {
//               if (this.checked) {
//                   toppings.push($("#top1").val())
                 
//               }
//           });
//           $("#top2").change(function () {
//               if (this.checked) {
//                   toppings.push($("#top2").val())
//                   // console.log($("#topping-1").val())
//               }
//           });
  
//           $("#top3").change(function () {
//             if (this.checked) {
//                 toppings.push($("#top3").val())
//               }
//             });
            
//           $("#top4").change(function () {
//             if (this.checked) {
//                toppings.push($("#top4").val())
//               }
//             });


//           $("#top5").change(function () {
//             if (this.checked) {
//                toppings.push($("#top5").val())
//               }
//             });
          
//     $("form#order-form").submit(function (event){
//       event.preventDefault();
  
//       var inputtedName = $("select#name").val();
//       var inputtedSize = $("select#size").val();
//       var inputtedCrust = $("select#crust").val();
//       var inputtedQuantity = $("select#quantity").val();
//       var inputtedToppings = toppings
//       var toppingsCost= $("select#topping").toppings.length.val();
//       var sizeCost = $('#size').find('option:selected').attr('cost');
//       var crustCost = $('#crust').find('option:selected').attr('cost');
     
      
  
      
//       var inputtedTotal = $("select#total").val();
  
//       var newOrder = new Order(
//         inputtedName, inputtedSize, inputtedCrust, inputtedQuantity, inputtedToppings, inputtedTotal
//       );
//       var sumTotal = Number(sizeCost) + Number(crustCost) +Number(toppingsCost)
//       sumtotal = sumTotal
  
   
//       console.log(newOrder);
//       $("tbody#Orders").append("<tr>"+
//   "<td>"+newOrder.name+"</td>"+
//   "<td>"+newOrder.size+"</td>"+
//   "<td>"+newOrder.crust+"</td>"+
//   "<td>"+newOrder.quantity+"</td>"+
//   "<td>"+newOrder.toppings+"</td>"+
//   "<td>"+sumTotal+"</td>"+
//   +"</tr>")
  
//   function locationvalidate () {
//     var name = document.getElementById("name").value;
//     var phone = document.getElementById("phone").value;
//     var location = document.getElementById("location").value;
//     if (name == "" || phone  == ""|| location  == ""){
//       alert("Please enter your name, phone number and location.");
//        return false;
//     }
//     // else{
//     //   alert ("Your order will be delivered to " + locateLocation + ".  Delivery charges are Ksh.100");
//     //       }
//     }
    
//   });
// $("form#formcustomer").submit(function (event){
//             event.preventDefault();
//               var customerName = $("#formcustomer#name").val();
//               var customerPhone = $("#formcustomer#phone").val();
//               var customerLocation = $("#formcustomer#location").val();
//             alert ("Hey,"+ customerName  + " your order will be delivered to " +  customerLocation  + " you will be contacted on "+ customerPhone +".  Delivery charges are Ksh.50");
//          });
//   });
  
  






// Option above


// // // Business logic
// // function Order(name,size, crust,toppings,quantity, total) {
// //     this.name =name;
// //     this.size =size;
// //     this.crust = crust;
// //     this.toppings = toppings;
// //     this.quantity = quantity;
// //     this.total = total;
// // }

// // //  Pizza names
// // let Pepperoni = new Name ("Pepperoni")
// // let ChickenTikka = new Name("Chicken Tikka")
// // let Gamberi = new Name("Gamberi")
// // let PulledPork = new Name ("Pulled Pork")
// // let Margharita = new Name("Margharita")
// // let Marinara = new Name("Marinara")
// // let SpicyVeggie = new Name("Spicy Veggie")
// // let Mushroom = new Name("Mushroom")
// // let BbqPork = new Name("Bbq Pork")
// // let GrilledPork = new Name("Grilled Pork")
// // let Hawaiian = new Name("Hawaiian")


// // //pizza size
// // let large = new Size("large", 900);
// // let medium = new Size("medium",700);
// // let small = new Size("small",500);


// // // Pizza crusts
// // let crispy = new Crust("crispy",250);
// // let stuffed = new Crust("stuffed",200);
// // let gluttenfree = new Crust("gluttenfree",180);

// // // toppings
// // let Mushrooms = new Toppings("Mushrooms",100);
// // let Butternut = new Toppings("Butternut",50);
// // let Cauliflower = new Toppings("Cauliflower",70);
// // let Bacon = new Toppings("Bacon",80);
// // let Tomatoes = new Toppings("Tomatoes",40);

// // function Name (name) {
// //     this.name = name
// // }
// // function Size (size,cost) {
// //     this.size = size
// //     this.cost = cost
// // }
// // function quantity () {
// //     this.quantity = quantity 
// // }    

// // function Crust(crust,cost) {
// //     this.crust = crust
// //     this.cost = cost 
// // }        
// // function Toppings (toppings,cost) {
// //     this.toppings = toppings
// //     this.cost = cost
// //  }       


 

 

// //  $(document).ready(function(){
// //     $(".delivery").hide()
// //     $("#checkout").click(function () {
// //     alert("Hello,this is your order and the total amount is ksh."+sumtotal)
// // });
  
     
// //     $(".delivery").show()   
// //     });
// //     $("#place-order").click(function () {
// //       locationvalidate() 
     
        
// //       });

// //     });

// // // User interface logic
// // $(document).ready(function() {
// //     $("form#order-form").submit(function(event) {
// //         event.preventDefault();
        
// //         var inputtedName = $("select#name").val();
// //         var inputtedSize = $("select#size").val();
// //         var inputtedCrust = $("select#crust").val();
// //         var inputtedToppings = $("select#toppings").val(); 
// //         var inputtedQuantity = $("input#quantity").val();
// //         var inputtedTotal = $("select#total").val();
// //         var toppingsCost= $("select#topping").toppings.length.val();
// //         var sizeCost = $('#size').find('option:selected').attr('cost');
// //         var crustCost = $('#crust').find('option:selected').attr('cost');
       
// //         Order.prototype.newOrder 
// //         var sumtotal = 0

// //         var newOrder = new Order(
// //             inputtedName, inputtedSize, inputtedCrust, inputtedQuantity, inputtedToppings, inputtedTotal
// //           );
// //           var sumTotal = Number(sizeCost) + Number(crustCost) +Number(toppingsCost)
// //           sumtotal = sumTotal
        
         
// //         //output
// //             console.log(newOrder);
// //             $("tbody#Orders").append("<tr>"+
// //         "<td>" + inputtedName+"</td>"+
// //         "<td>" + inputtedSize +"</td>"+
// //         "<td>" + inputtedCrust +"</td>"+
// //         "<td>" + inputtedToppings+"</td>"+
// //         "<td>" + inputtedQuantity +"</td>"+
// //         "<td>" + inputtedTotal+"</td>"+
        
// //         "</tr>");
       
// //     });
// // });
// //         function myFunction() {
// //             document.getElementById("name").value = "inputtedName";
// //         }


// //         function locationvalidate () {
// //         var name = document.getElementById("name").value;
// //         var phone = document.getElementById("phone").value;
// //         var location = document.getElementById("location").value;
// //         if (name == "" || phone  == ""|| location  == ""){
// //         alert("Please enter your name, phone number and location.");
// //         return false;
// //         }
// //     }  
       
// //     $("form#formcustomer").submit(function (event){
// //         event.preventDefault();
// //           var customerName = $("#formcustomer#name").val();
// //           var customerPhone = $("#formcustomer#phone").val();
// //           var customerLocation = $("#formcustomer#location").val();
// //         alert ("Hey,"+ customerName  + " your order will be delivered to " +  customerLocation  + " you will be contacted on "+ customerPhone +".  Delivery charges are Ksh.50");
// //      });

       

// //        function response() {
// //         alert("Your order will be sent to your selected location")
// //         alert("Click the checkout button to exit")
// //     }

// //     function exit() {
// //         alert("Thank you for visiting our website")
// //     };