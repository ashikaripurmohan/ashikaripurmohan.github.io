$(function() {

  $(".link").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().parent().parent().remove();
  })

})