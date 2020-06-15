$(document).ready(function() {
    
   
  
console.log("i m from orderStatusDriver.js file")

$('#listOne').addClass("completed");
$("#listTwo").on("click", function () {
  
    $('#listTwo').addClass("completed");
var status="picked up";
update(status);
});
$("#listThree").on("click", function () {
    $('#listThree').addClass("completed");
var status="on the way";
update(status);
});
$("#listFour").on("click", function () {
    $('#listFour').addClass("completed");
var status="delivered";
update(status);
});


function update(status) {
    // console.log("inside the ajax", driverId)

    $.ajax({
      method: "put",
      url: "/api/updateOrderStatus",
      data: {
        status: status,
        
    
      }
    })
      .catch(handleLoginErr);
  };
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);

  };

});

