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
    $('.custVehiclePrice').val(VehicleBid);
  }
});

//EMAIL BID
function sendMail() {
  var link = "mailto:bids@chlebsclassiccars.com";

  window.location.href = link;
}
