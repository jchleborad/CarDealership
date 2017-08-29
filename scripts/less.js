function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById("carThumb");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




// (function($) {
//   jQuery.expr[':'].Contains = function(a, i, m) {
//     return (a.textContent || a.innerText|| "").toUpperCase().indexOf(m[3].toUpperCase())>= 0;
//   };
//
//   function listFilter(header, list) {
//     $('#searchbox')
//       .change(function() {
//         var filter = $(this).val();
//         if (filter) {
//           $(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
//           $(list).find("a:Contains(" + filter + ")").parent().slideDown();
//         } else {
//           $(list).find("li").slideDown();
//         }
//         return false;
//       })
//       .keyup(function() {
//         $(this).change();
//       });
//   }
//   $(function() {
//     listFilter($(), $("#list"));
//   });
// }(jQuery));
