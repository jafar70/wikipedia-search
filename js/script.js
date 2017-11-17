$(document).ready(function() {
  $(".button").on("click", function() {
    var value = $("#searchItem").val();
    var url =
      "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&list=&generator=search&utf8=1&inprop=url&exsentences=2&exintro=1&gsrsearch=" +
      value +
      "&gsrlimit=10&origin=*";
    console.log(value);
    $.getJSON(url, function(x) {
      var testCheck = x.query.pages;

      console.log(url);
      $(".results").html("");
      for (var key in testCheck) {
        if (testCheck.hasOwnProperty(key)) {
          console.log(testCheck[key].title);
          console.log(testCheck[key].fullurl);
          console.log(testCheck[key].extract);
          $(".results").append(
            '<a class="linksa" href=' +
              testCheck[key].fullurl +
              '> <div class="entryOne"><h1>' +
              testCheck[key].title +
              "</h1>" +
              testCheck[key].extract +
              "</p></div></a>"
          );
        }
      }
    });
  });
});
