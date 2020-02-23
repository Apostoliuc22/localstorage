
/* Set the width of the side navigation to 250px */
function openNav() {
  localStorage.setItem('mySidenav', true);
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  localStorage.setItem('mySidenav', false);
  document.getElementById("mySidenav").style.width = "0";
}

let isCollapsed = JSON.parse(localStorage.getItem('mySidenav'));
if (isCollapsed === true) {
    openNav();
}







