(function () {
  window.addEventListener("load", function () {
    const state = {
      pages: document.getElementsByClassName("Page").length,
      currentPage: Math.round(window.scrollY / window.innerHeight),
    };

    function updatePage(wantedPage, shouldScroll) {
      // ensure the newly selected page is in the range [0, pageCount)
      const newPage = Math.min(Math.max(wantedPage, 0), state.pages - 1);

      state.currentPage = Math.min(Math.max(newPage, 0), state.pages - 1);

      currentPageColor = document.getElementsByClassName("Page")[state.currentPage].dataset.color;

      [...document.getElementsByClassName("Bullet")].forEach((bullet, index) => {
        bullet.className = index === state.currentPage ? "Bullet active" : "Bullet";

        if (currentPageColor) {
          bullet.style = `background-color: ${currentPageColor}`;
        }
      });

      if (shouldScroll) {
        scroll({ top: state.currentPage * window.innerHeight, behavior: "smooth" });
      }
    }

    function handleScroll(_e) {
      updatePage(Math.round(window.scrollY / window.innerHeight), false);
    }

    function disableArrows(e) {
      const upArrowPressed = e.code === "ArrowUp";
      const downArrowPressed = e.code === "ArrowDown";

      if (upArrowPressed || downArrowPressed) {
        e.preventDefault();
      }
    }

    function handleArrowNavigation(e) {
      const upArrowPressed = e.code === "ArrowUp";
      const kPressed = e.code === "KeyK";

      if (upArrowPressed || kPressed) {
        updatePage(state.currentPage - 1, true);
        return;
      }

      const downArrowPressed = e.code === "ArrowDown";
      const jPressed = e.code === "KeyJ";

      if (downArrowPressed || jPressed) {
        updatePage(state.currentPage + 1, true);
        return;
      }
    }

    updatePage(Math.round(window.scrollY / window.innerHeight));

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", disableArrows);
    document.addEventListener("keyup", handleArrowNavigation);
  });
})();
