document.addEventListener("DOMContentLoaded", function () {


  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    // Use absolute path since we are running on a server
    const footerPath = "/components/footer.html";

    fetch(footerPath)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
  }

  // Load Navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    // Use absolute path since we are running on a server
    const navbarPath = "/components/navbar.html";
    console.log("Fetching navbar from:", navbarPath);

    fetch(navbarPath)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then((data) => {
        navbarPlaceholder.innerHTML = data;

        // Highlight active link
        const currentPath = window.location.pathname;
        const navLinks = navbarPlaceholder.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          // Normalize paths for comparison
          const normalize = (p) => p.replace(/\/$/, "") || "/";
          if (normalize(href) === normalize(currentPath)) {
            link.classList.add('active');
          }
        });
      })
      .catch((error) => console.error("Error loading navbar:", error));
  }
});
