$(document).ready(function() {
    $("button#hello").click(function() {
      $(".ttwp ul").prepend("<li>Hello!</li>");
    });

    $("button#goodbye").click(function() {
      $(".ttwp ul").prepend("<li>Goodbye!</li>");
    });

    $("button#stop").click(function() {
      $(".ttwp ul").prepend("<li>Stop copying me!</li>");
    });
});
