function menuToggle() {
    document.getElementById("menuDrop").classList.toggle("show");


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.categories-text')) {

    var dropdowns = document.getElementsByClassName("search-select");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}}