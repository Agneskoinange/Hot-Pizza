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

 order.prototype.newOrder 
 var sumtotal = 0

 $(document).ready(function(){
    $(".delivery").hide()
    $("#checkout").click(function () {
    alert("Hello,this is your order and the total amount is ksh."+sumtotal)
});
  
     
    $(".delivery").show()   
    });
    $("#place-order").click(function () {
      locationvalidate() 
     
        
      });

//  Pizza names
//pizza size
// Pizza crusts
// toppings



// User interface logic
$(document).ready(function() {
    $("form#order-form").submit(function(event) {
        event.preventDefault();
        
        var inputtedName = $("select#name").val();
        var inputtedSize = $("select#size").val();
        var inputtedCrust = $("select#crust").val();
        var inputtedToppings = $("select#toppings").val(); 
        var inputtedQuantity = $("input#quantity").val();
        var inputtedTotal = $("select#total").val();
        var toppingsPrice = toppings.length *70
        var sizePrice = $('#size').find('option:selected').attr('price');
        var crustPrice = $('#crust').find('option:selected').attr('price');
       
    
        var newOrder = new Order(
          inputtedName, inputtedSize, inputtedCrust, inputtedQuantity, inputtedToppings, inputtedTotal
        );
        var sumTotal = Number(sizePrice) + Number(crustPrice) +Number(toppingsPrice)
        sumtotal = sumTotal
    
        //output
            console.log(newOrder);
            $("tbody#ordermade").append("<tr>"+
        "<td>" + inputtedName+"</td>"+
        "<td>" + inputtedSize +"</td>"+
        "<td>" + inputtedCrust +"</td>"+
        "<td>" + inputtedToppings+"</td>"+
        "<td>" + inputtedQuantity +"</td>"+
        "<td>" + inputtedTotal+"</td>"+
        
        "</tr>");
    });
});
        function locationvalidate () {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var location = document.getElementById("location").value;
        if (name == "" || phone  == ""|| location  == ""){
        alert("Please enter your name, phone number and location.");
        return false;
        }
    }  

      
            
              $("form#formcustomer").submit(function (event){
                event.preventDefault();
                  var clientName = $("#formcustomer #name").val();
                  var clientPhone = $("#formcustomer #phone").val();
                  var clientLocation = $("#formcustomer #location").val();
                alert ("Hey,"+ clientName + " your order will be delivered to " + clientLocation + " you will be contacted on "+ clientPhone +".  Delivery charges are Ksh.50");
            });

       

       function response() {
        alert("Your order will be sent to your selected location")
        alert("Click the checkout button to exit")
    }

    function exit() {
        alert("Thank you for visiting our website")
    };