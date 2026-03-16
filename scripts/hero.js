document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("hero-banner");
  const dismissBtn = document.getElementById("hero-dismiss");
  const exploreBtn = document.querySelector(".hero-btn-primary");
  const heroActions = document.querySelector(".hero-actions");
  const STORAGE_KEY = "cseHeroDismissed";

  if (!banner) return;

  // Hide if previously dismissed
  if (window.localStorage && localStorage.getItem(STORAGE_KEY) === "1") {
    banner.classList.add("hero-hidden");
  }

  const hideBanner = () => {
    banner.classList.add("hero-hiding");
    setTimeout(() => {
      banner.classList.add("hero-hidden");
    }, 250);
    if (window.localStorage) {
      localStorage.setItem(STORAGE_KEY, "1");
    }
  };

  if (dismissBtn) {
    dismissBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      hideBanner();
    });
  }

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      hideBanner();
    });
  }

  // Subtle parallax on hero background
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      // only apply parallax on larger screens
      if (window.innerWidth >= 1024) {
        hero.style.backgroundPositionY = `${offset * 0.25}px`;
      }

      // reveal hero actions after slight scroll so initial view is mostly image + title
      if (heroActions && !heroActions.classList.contains("hero-actions-visible")) {
        if (offset > 40) {
          heroActions.classList.add("hero-actions-visible");
        }
      }
    });
  }
});

