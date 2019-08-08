$(document).ready(function() {
  // var addToCart = document.getElementsByClassName('pizza-button');

  // for (var i = 0; i < addToCart.length; i++) {
  //   var button = addToCart[i];
  //   button.addEventListener('click', function() {
  //     var button = event.target
  //     var pizza = button.parentElement.parentElement.parentElement
  //     var title = pizza.getElementsByClassName('pizza-title')[0].innerText;
  //     var price = $(".pizza-price option:selected").val();
  //     console.log(title + " for " + price + " Shillings")

      // function Test() {
      //   var sels = document.getElementsByClassName('pizza-price');
      //   for (var zxc0 = 0; zxc0 < sels.length; zxc0++) {
      //     alert(sels[zxc0].value);
      //   }
      // }
  //
  //   })
  // }

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


    alert( size + ' ' + name + ' for Kshs.' + price + ' added to cart')

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
  alert('Your order has been placed. Thank You for using our service.')
})
















});
