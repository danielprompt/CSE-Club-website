document.addEventListener("DOMContentLoaded", function () {


  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    // Use absolute path since we are running on a server
    // Determine path based on current location depth
    const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");
    // If we are in a subdirectory (like /Page/), go up one level.
    // A simple check: if the path includes "/Page/", we need "../"
    const prefix = window.location.pathname.includes("/Page/") ? ".." : ".";

    const footerPath = `${prefix}/components/footer.html`;

    fetch(footerPath)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;

        // Fix footer links
        const footerLinks = footerPlaceholder.querySelectorAll('a');
        footerLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (prefix !== "." && href && !href.startsWith("http") && !href.startsWith("#")) {
            link.setAttribute('href', `${prefix}/${href}`);
          }
        });
      })
      .catch((error) => console.error("Error loading footer:", error));
  }

  // Load Navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    // Use absolute path since we are running on a server
    // Determine path based on current location depth
    const prefix = window.location.pathname.includes("/Page/") ? ".." : ".";
    const navbarPath = `${prefix}/components/navbar.html`;
    // Debug log removed

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

          // Fix link paths if we are in a subdirectory
          if (prefix !== "." && href && !href.startsWith("http") && !href.startsWith("#")) {
            link.setAttribute('href', `${prefix}/${href}`);
          }

          // Normalize paths for comparison
          // We need to compare the resolved path or just check if the current page matches the link
          // Simple check: if current path ends with the href (ignoring prefix adjustments for comparison)
          const normalize = (p) => p.split('/').pop() || "index.html";
          if (normalize(currentPath) === normalize(href)) {
            link.classList.add('active');
          }
        });
      })
      .catch((error) => console.error("Error loading navbar:", error));
  }

  // Fix Footer Links
  // We need to wait for footer to load, but fetch is async. 
  // Let's move the footer fetch logic to be similar or just add a listener? 
  // Actually, we can just add the link fixing logic to the footer fetch chain.

});
