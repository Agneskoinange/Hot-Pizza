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
let Mushrooms = new Toppings("Mushrooms",100);
let Butternut = new Toppings("Butternut",50);
let Cauliflower = new Toppings("Cauliflower",70);
let Bacon = new Toppings("Bacon",80);
let Tomatoes = new Toppings("Tomatoes",40);


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
        var toppingsCost= toppings.length *70
        var sizeCost = $('#size').find('option:selected').attr('cost');
        var crustCost = $('#crust').find('option:selected').attr('cost');
       
    
        var newOrder = new Order(
          inputtedName, inputtedSize, inputtedCrust, inputtedQuantity, inputtedToppings, inputtedTotal
        );
        var sumTotal = Number(sizeCost) + Number(crustCost) +Number(toppingsCost)
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
        alert(newOrder)
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
                  var customerName = $("#formcustomer #name").val();
                  var customerPhone = $("#formcustomer #phone").val();
                  var customerLocation = $("#formcustomer #location").val();
                alert ("Hey,"+ customerName  + " your order will be delivered to " +  customerLocation  + " you will be contacted on "+ customerPhone +".  Delivery charges are Ksh.50");
            });

       

       function response() {
        alert("Your order will be sent to your selected location")
        alert("Click the checkout button to exit")
    }

    function exit() {
        alert("Thank you for visiting our website")
    };