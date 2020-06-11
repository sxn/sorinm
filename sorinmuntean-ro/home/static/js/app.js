(function () {
  window.addEventListener("load", function () {
    const state = {
      pages: document.getElementsByClassName("Screen").length,
      currentScreen: Math.round(window.scrollY / window.innerHeight),
    };

    function updateScreen(wantedScreen, shouldScroll) {
      // ensure the newly selected page is in the range [0, pageCount)
      const newScreen = Math.min(Math.max(wantedScreen, 0), state.pages - 1);

      state.currentScreen = Math.min(Math.max(newScreen, 0), state.pages - 1);

      currentScreenColor = document.getElementsByClassName("Screen")[state.currentScreen].dataset.color;

      [...document.getElementsByClassName("Bullet")].forEach((bullet, index) => {
        bullet.className = index === state.currentScreen ? "Bullet active" : "Bullet";

        if (currentScreenColor) {
          bullet.style = `background-color: ${currentScreenColor}`;
        }
      });

      if (shouldScroll) {
        scroll({ top: state.currentScreen * window.innerHeight, behavior: "smooth" });
      }
    }

    function handleScroll(_e) {
      updateScreen(Math.round(window.scrollY / window.innerHeight), false);
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
        updateScreen(state.currentScreen - 1, true);
        return;
      }

      const downArrowPressed = e.code === "ArrowDown";
      const jPressed = e.code === "KeyJ";

      if (downArrowPressed || jPressed) {
        updateScreen(state.currentScreen + 1, true);
        return;
      }
    }

    updateScreen(Math.round(window.scrollY / window.innerHeight));

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", disableArrows);
    document.addEventListener("keyup", handleArrowNavigation);
  });
})();
