$(document).ready(function() {



  veggieButton.addEventListener('click', function(){
    var price = $("#vegeterianPizza").val()
    var name = "Vegeterian Pizza"
    if( price == 350 ){
      var size = 'Small';
    }
    else if ( price == 550) {
      var size = 'Medium';

    }
    else if (price == 750){
      var size = 'Large';
    }
    else {
      return
    }
    // function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = name;
  cell2.innerHTML = size;
  cell3.innerHTML = price;
// }




    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')
    //

    totalCost();


     return
  })

  pepperoniButton.addEventListener('click', function(){
    var price = $("#pepperoniPizza").val()
    var name = "Pepperoni Pizza"
    if( price == 400 ){
      var size = 'Small';
    }
    else if ( price == 650) {
      var size = 'Medium';

    }
    else if (price == 900){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();
    return
  })

  hawaiianButton.addEventListener('click', function(){
    var price = $("#hawaiianPizza").val()
    var name = "Hawaiian Pizza"
    if( price == 500 ){
      var size = 'Small';
    }
    else if ( price == 700) {
      var size = 'Medium';

    }
    else if (price == 950){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();


    return
  })

  chickenTikkaButton.addEventListener('click', function(){
    var price = $("#chickenTikka").val()
    var name = "Chicken Tikka Pizza"
    if( price == 450 ){
      var size = 'Small';
    }
    else if ( price == 650) {
      var size = 'Medium';

    }
    else if (price == 900){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  meatDeluxeButton.addEventListener('click', function(){
    var price = $("#meatDeluxe").val()
    var name = "Meat Deluxe Pizza"
    if( price == 800 ){
      var size = 'Small';
    }
    else if ( price == 1000) {
      var size = 'Medium';

    }
    else if (price == 1300){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  classicItalianButton.addEventListener('click', function(){
    var price = $("#classicItalian").val()
    var name = "Gourmet Classic Pizza"
    if( price == 450 ){
      var size = 'Small';
    }
    else if ( price == 600) {
      var size = 'Medium';

    }
    else if (price == 800){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  chickenGarlicButton.addEventListener('click', function(){
    var price = $("#chickenGarlic").val()
    var name = "Gourmet Chicken Garlic Pizza"
    if( price == 500 ){
      var size = 'Small';
    }
    else if ( price == 750) {
      var size = 'Medium';

    }
    else if (price == 950){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  margheritaButton.addEventListener('click', function(){
    var price = $("#margherita").val()
    var name = "Margherita Pizza"
    if( price == 350 ){
      var size = 'Small';
    }
    else if ( price == 600) {
      var size = 'Medium';

    }
    else if (price == 800){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  specialButton.addEventListener('click', function(){
    var price = $("#special").val()
    var name = "House Special Pizza"
    if( price == 400 ){
      var size = 'Small';
    }
    else if ( price == 650) {
      var size = 'Medium';

    }
    else if (price == 900){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  gourmetVeggieButton.addEventListener('click', function(){
    var price = $("#gourmetVeggie").val()
    var name = "Gourmet Veggie Pizza"
    if( price == 300 ){
      var size = 'Small';
    }
    else if ( price == 500) {
      var size = 'Medium';

    }
    else if (price == 800){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  sweetPotatoButton.addEventListener('click', function(){
    var price = $("#sweetPotato").val()
    var name = "Sweet Potato Walnuts Pizza"
    if( price == 550 ){
      var size = 'Small';
    }
    else if ( price == 750) {
      var size = 'Medium';

    }
    else if (price == 1050){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost();

    return
  })

  lambPizzaButton.addEventListener('click', function(){
    var price = $("#lambPizza").val()
    var name = "Lamb Pizza"
    if( price == 400 ){
      var size = 'Small';
    }
    else if ( price == 650) {
      var size = 'Medium';

    }
    else if (price == 900){
      var size = 'Large';
    }
    else {
      return
    }


    alert( size + ' ' + name + ' for Kshs. ' + price + ' added to cart')

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size;
    cell3.innerHTML = price;

    totalCost()


    return
  })

 function totalCost() {
   var table = document.getElementById("myTable"),sum = 0;

   for (var i = 1; i < table.rows.length; i++) {

     sum +=  Number(table.rows[i].cells[2].innerHTML);
   }

  ;

   document.getElementById('total').innerHTML = sum

 }
checkout.addEventListener('click' ,function(){
  var customerName = $("#userName").val()


  // if ($("#delivery").val() == "delivery") {
  //   $(".address").show();
  //
  //
  // }

  if ($("#delivery").val() == "pickUp" && $("#address").val() != "")  {
    alert("ERROR!! Chosing Pick Up and entering address not allowed.")
    return

  }

  if ($("#delivery").val() == "delivery" && $("#address").val() == "")  {
    alert("ERROR!! Please enter delivery address.")
    return

  }





  if ($("#userName").val() == "" || $("#userPhone").val() == "") {

    alert("Please fill in personal details")
return
  }
  if (document.getElementById('total').innerHTML == 0) {
alert("Nothing in cart, checkout unavailable.")
  }
  else {
    alert('Hello ' + customerName + '. Your order has been placed. Thank You for using our service.')
    location.reload();
  }





});


customPizzaButton.addEventListener('click', function(){

  var name = 'custom'
  var crust = $("input[name='crust']:checked").val();
  var size = $("input[name='size']:checked").val();
  if (size == "Small") {
    var priceSize = 500;
      }
      else if (size == "Medium") {
        var priceSize = 700;

      }
      else if (size == "Large") {
        var priceSize = 900

      }
      else {
        return
      }

      var toppings = function(){
            var favorite = [];
            $.each($("input[type='checkbox']:checked"), function(){
                favorite.push($(this).val());
            });
            // alert("My favourite toppings are: " + favorite.join(", "));
            alert(favorite.length);





             return

        };

        var toppingPrice =  document.querySelectorAll('input[type=checkbox]:checked').length
        var totalTopping = toppingPrice * 75


        var price = Number(priceSize + totalTopping);



alert('Your '+ crust +  ' custom pizza for Kshs. ' + price +  ' has been added to your cart.')


  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = name;
  cell2.innerHTML = size;
  cell3.innerHTML = price;

  totalCost()


  return







});














});
