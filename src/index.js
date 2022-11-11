const sidebar = document.getElementsByClassName("sidebar")[0];
const content = document.getElementsByClassName("content")[0];
const sidebarButton = document.getElementById("sidebar-button");
const bodyContainer = document.getElementsByClassName("body-container")[0];
var sidebarVisibility = true;

sidebarButton.addEventListener("click", () => {
  if (sidebarVisibility == true) {
    sidebar.style.flex = "0";
    sidebarVisibility = false;
    console.log(sidebarVisibility);
  } else {
    console.log(sidebarVisibility);

    sidebarVisibility = true;
    sidebar.style.flex = "0 1 15%";
  }
});
