$(document).ready(() => {
  //creating constants for the column names
  const meallyOrder = $("form.order_form")
  const customerName = $("input#customer_name");
  const customerAddress = $("input#customer_address");
  const customerOrder = $("input#customer_order");
  const customerTotal = $("input#customer_total");

  const $orderContainer = $(".orderInfo");

  const deliverorder = $(".deliverorder");

  // Our initial orderes array
  let orders = [];

  // Getting ordere from database when page loads
  getOrders();

  

  // This function grabs orders from the database and updates the view
  function getOrders() {
    $.get("/api/orders", function(data) {
      orders = data;
     
      console.log(orders);
      location.reload;
      
    });
  }

  deliverorder.on("click", event => {
    
    // console.log(event.target.getAttribute("data-id"))
let orderid = event.target.getAttribute("data-id")
    $.ajax("/api/orders", {
      type: "PUT",
      data: {id:orderid}
    }).then(
      function (res) {
        console.log("updated order to delivered");
        // Reload the page to get the updated list
        console.log(res)
        location.reload();

    
      }
    );

  })


  meallyOrder.on("submit", event => {
    event.preventDefault();
    let new_order = {
      customer_name: customerName.val().trim(),
      customer_address: customerAddress.val().trim(),
      customer_order: customerOrder.val().trim(),
      customer_total: customerTotal.val().trim()
    }
    $.ajax("/api/orders", {
      type: "POST",
      data: new_order
    }).then(
      function () {
        console.log("created new order");
        // Reload the page to get the updated list
        // location.reload();
      }
    );


    // orderMeally(customer_name, customer_address, customer_order, customer_total);
    // // customerName.val("");
    // // customerAddress.val("");
    // // customerOrder.val("");
    // // customerTotal.val("");
  });

  function orderMeally(customer_name, customer_address, customer_order, customer_total) {
    // $.post("/api/orders", {
    //   customer_name: customer_name,
    //   customer_address: customer_address,
    //   customer_order: customer_order,
    //   customer_total: customer_total
    // }).then (function() {
    //   console.log("added new order!");
    //   location.reload();
    // })

    console.log(customer_name);
    console.log(customer_address);
    console.log(customer_order);
    console.log(customer_total);
  }
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

});
