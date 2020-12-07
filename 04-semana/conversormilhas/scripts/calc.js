$(function() {
  $("#calc").click(function(e) {
    e.preventDefault();
    const miles = parseFloat($("#miles").val());
    const alert =
      '<div class="alert alert-danger" role="alert">Campo milhas não pode ser vazio.</div>';
    if (!miles) {
      if ($(".alert").length === 0) {
        $(".miles").append(alert);
      }
    } else {
      const meters = 1609.34 * miles;
      $("#meters").val(meters);
      $(".alert").remove();
    }
  });
});
