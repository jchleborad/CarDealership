//INVENTORY FILTER
(function($) {
  jQuery.expr[':'].Contains = function(a, x, m) {
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
  };

  function listFilter(header, list) {
    $('#searchBox')
      .change(function() {
        var filter = $(this).val();
        if (filter) {
          $(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
          $(list).find("a:Contains(" + filter + ")").parent().slideDown();
        } else {
          $(list).find("li").slideDown();
        }
        return false;
      })
      .keyup(function() {
        $(this).change();
      });
  }
  $(function() {
    listFilter($(), $("#list"));
  });
}(jQuery));

// TODO Get Alert to work
// alert('Sorry, No such inventory exists at this time');

//CALCULATE SALES TAX & DOC FEE
$(function() {
  $('.bid').on('input', function() {
    calculate();
  });

  function calculate() {
    var custBid = parseFloat($(".bid").val());
    var taxId = "";
    if (isNaN(custBid)) {
      taxId = "";
    } else {
      taxId = ((custBid * 0.08) + 350).toFixed(2);
    }
    $('.taxTot').val(taxId);
  }
});

//DISPLAY TOTAL CUSTOMER BID
$(function() {
  $('.bid').on('input', function() {
    calculate();
  });

  function calculate() {
    var custBid = parseFloat($(".bid").val());
    var VehicleBid = "";
    var docFee = 350;
    if (isNaN(custBid)) {
      VehicleBid = "";
    } else {
      VehicleBid = (custBid + (custBid * 0.08) + docFee).toFixed(2);
    }
    $('#custVehiclePrice').val(VehicleBid);
  }
});

// TODO Line breaks?  \n not working....
//EMAIL BID
function sendBid() {
  var bidCar= document.getElementById("bidCar").value;
  var custPrice = document.getElementById("custVehiclePrice").value;
  var lotId = document.getElementById("lotId").value;
  window.location.href = "mailto:bids@chlebsclassiccars.com?subject= Please Review My Bid&body=" + "My bid for the " + bidCar + " (Lot ID:" + lotId + ") " + "is: $" + custPrice + ". %0A%0A" + "Please respond as soon as possible." + "%0A%0A";

}

//EMAIL INFO
function sendInfo() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var custEmail = document.getElementById("custEmail").value;
  var message = document.getElementById("message").value;
  var location = document.getElementById("location").value;
  window.location.href = "mailto:info@chlebsclassiccars.com?subject=Question for Sales&body=" + "My name is " + firstName + " " + lastName + ", I am from " + location + " and my email address is: " + custEmail + "%0A%0ABegin Message: %0A" + message + "%0A%0A";
}

//PAGE UPDATE
function currentDate() {
  var x = document.lastModified;
  document.getElementById('date').innerHTML = x;
}
