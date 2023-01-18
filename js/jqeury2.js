$(document).ready(function () {
  // 2. Count child elements using jQuery.
  $("#childs").click(function () {
    // console.log($("#selected").children().length);
    console.log("Length of Childs:", $("#selected p").length);
  });

  //   3. Find the total width of an element:-
  let tagLen = $("#myText").outerWidth();
  console.log(`width of the P Tag: ${tagLen}`);

  //   4. Check if an object is a jQuery object
  var test = $("#selected");
  if (test instanceof jQuery) {
    console.log("object is jQuery");
  }
  $("#button1").click(function () {
    $("#pid").toggleClass("large");
  });
});
