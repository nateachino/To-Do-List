const sidebar = document.getElementsByClassName("sidebar")[0];
const content = document.getElementsByClassName("content")[0];
const sidebarButton = document.getElementById("sidebar-button");
const bodyContainer = document.getElementsByClassName("body-container")[0];
var sidebarVisibility = true;

sidebarButton.addEventListener("click", () => {
  if (sidebarVisibility == true) {
    sidebar.style.transform = "translateX(-500px)";
  } else {
    sidebarVisibility = true;
    sidebar.style.position = "static";
    sidebar.style.transform = "translateX(0px)";
  }
});
