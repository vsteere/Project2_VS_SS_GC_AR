$(document).ready(() => {
  //creating constants for the column names
  const customerName = $("input#customer_name");
  const customerAddress = $("input#customer_address");
  const customerOrder = $("input#customer_order");
  const customerTotal = $("input#customer_total");

  meallyOrder.on("submit", event => {
    event.preventDefault();
    const userData = {
      customer_name: customerName.val().trim(),
      customer_address: customerAddress.val().trim(),
      customer_order: customerOrder.val().trim(),
      customer_total: customerTotal.val().trim(),
    };

    orderMeally(userData.customer_name, userData.customer_address, userData.customer_order, userData.customer_total);
    customerName.val("");
    customerAddress.val("");
    customerOrder.val("");
    customerTotal.val("");
  });

  function orderMeally(customer_name, customer_address, customer_order, customer_total) {
    $.post("/api/orders", {
      customer_name: name,
      customer_address: address,
      customer_order: order,
      customer_total: total
    }).then (function() {
      console.log("added new order!");
      location.reload();
    })
  }
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

});
