document.addEventListener("DOMContentLoaded", function () {
  // Get the navbar menu items
  const navbarMenuItems = document.querySelectorAll(".navbar-nav .nav-item");

  // Create a new list element for offcanvas menu
  const offcanvasMenu = document.querySelector(".offcanvas-menu");

  // Loop through the navbar menu items and clone them
  navbarMenuItems.forEach((menuItem) => {
    const clonedMenuItem = menuItem.cloneNode(true);

    // Apply padding between menu items
    clonedMenuItem.classList.add("gap-3");

    // Check if the cloned menu item has a dropdown
    const dropdownMenu = clonedMenuItem.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      // Remove the 'dropdown-menu' class and add 'collapse' class to make it expandable
      dropdownMenu.classList.remove("dropdown-menu");
      dropdownMenu.classList.add("collapse", "bg-dropdown"); // Add the 'bg-dropdown' class for dark brown background

      // Add data attributes to enable Bootstrap Collapse functionality
      clonedMenuItem
        .querySelector(".dropdown-toggle")
        .setAttribute("data-bs-toggle", "collapse");
      const dropdownMenuId = `dropdown-${Math.random()
        .toString(36)
        .substring(7)}`; // Generate a unique ID for the dropdown menu
      dropdownMenu.setAttribute("id", dropdownMenuId);
      clonedMenuItem
        .querySelector(".dropdown-toggle")
        .setAttribute("data-bs-target", `#${dropdownMenuId}`);
      clonedMenuItem
        .querySelector(".dropdown-toggle")
        .setAttribute("aria-expanded", "false");

      // Add event listener to the toggle button
      clonedMenuItem
        .querySelector(".dropdown-toggle")
        .addEventListener("click", () => {
          // Loop through all dropdown menu toggle buttons
          const allToggleButtons = document.querySelectorAll(
            ".offcanvas-menu .dropdown-toggle"
          );
          allToggleButtons.forEach((toggleButton) => {
            if (
              toggleButton !== clonedMenuItem.querySelector(".dropdown-toggle")
            ) {
              // Close other dropdown menus
              const targetId = toggleButton.getAttribute("data-bs-target");
              const target = document.querySelector(targetId);
              target.classList.remove("show");
              toggleButton.setAttribute("aria-expanded", "false");
            }
          });
        });
    }

    offcanvasMenu.appendChild(clonedMenuItem);
  });
});

document.getElementById("fluidsim").addEventListener("mouseenter", function () {
  fluidsimVideo.play();
});

document.getElementById("fluidsim").addEventListener("mouseleave", function () {
  fluidsimVideo.pause();
  // fluidsimVideo.currentTime = 0;
});

document.getElementById("pp").addEventListener("mouseenter", function () {
  document
    .getElementById("ppVideo")
    .setAttribute("src", "images/pp_banner5.gif");
});

document.getElementById("pp").addEventListener("mouseleave", function () {
  document
    .getElementById("ppVideo")
    .setAttribute("src", "images/pp_banner4.gif");
});
// Overflow Menu
