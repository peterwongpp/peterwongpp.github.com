function setupFakeLink() {
  $("a.fake-link").on("click", function(e) {
    if (e.preventDefault) { e.preventDefault(); }
    return false;
  });
}
function setupTooltip() {
  $("a[rel='tooltip']").tooltip();
}

function postProcesses() {
  setupFakeLink();
  setupTooltip();
}

jQuery(function($) {
  postProcesses();
});
