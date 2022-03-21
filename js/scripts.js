function Order(name, size, crust, quantity, toppings, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.quantity = quantity;
    this.toppings = toppings;
    this.total = total;
  }
  Order.prototype.newOrder
  var sumtotal = 0


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
        $(".ordersummary").text("Please provide your location for deliveries.").Toggle();
        // $(".transport").hide(1000);
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
  

    function exit() {
        alert("Thank you for visiting our website")
    };