"use strict";

(function () {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Getters ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * @returns {Element|null}
   */
  function getBulletContainer() {
    return document.getElementsByClassName("Bullets")[0] || null;
  }

  /**
   * @returns {Element[]}
   */
  function getBullets() {
    return Array.from(document.getElementsByClassName("Bullet"));
  }

  /**
   * @returns {Element[]}
   */
  function getScreens() {
    return Array.from(document.getElementsByClassName("Screen"));
  }

  /**
   * @param {number} index
   * @returns {string|null}
   */
  function getScreenColor(index) {
    const screens = getScreens();
    const screen = screens[index];
    if (!screen) {
      return null;
    }
    const color = screen.getAttribute("data-color");
    if (!color) {
      return null;
    }

    return color;
  }

  function getBackToTop() {
    return document.getElementById("BackToTop");
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // onLoad /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onLoad() {
    const state = {
      pages: document.getElementsByClassName("Screen").length,
      currentScreen: Math.round(window.scrollY / window.innerHeight),
    };

    /**
     * @param {number} wantedScreen
     * @param {Object} options
     * @param {boolean} options.shouldScroll
     */
    function goToScreen(wantedScreen, { shouldScroll = false }) {
      // ensure the newly selected page is in the range [0, pageCount)
      state.currentScreen = Math.min(Math.max(wantedScreen, 0), state.pages - 1);

      const currentScreenColor = getScreenColor(state.currentScreen);

      getBullets().forEach((bullet, index) => {
        if (index === state.currentScreen) {
          bullet.classList.add("Bullet--active");
        } else {
          bullet.classList.remove("Bullet--active");
        }

        if (currentScreenColor) {
          bullet.setAttribute("style", `background-color: ${currentScreenColor}`);
        }
      });

      const backToTop = getBackToTop();
      if (backToTop) {
        const isAtTop = state.currentScreen === 0;
        backToTop.setAttribute(
          "style",
          `color: ${currentScreenColor}; opacity: ${isAtTop ? 0 : 1}; pointer-events: ${isAtTop ? "none" : "initial"}`,
        );
      }

      if (shouldScroll) {
        scroll({ top: state.currentScreen * window.innerHeight, behavior: "smooth" });
      }
    }

    function initEventListeners() {
      /**
       * @param {Event} _e
       */
      function handleScroll(_e) {
        goToScreen(Math.round(window.scrollY / window.innerHeight), { shouldScroll: false });
      }

      /**
       * @param {KeyboardEvent} e
       */
      function disableArrows(e) {
        const upArrowPressed = e.code === "ArrowUp";
        const downArrowPressed = e.code === "ArrowDown";

        if (upArrowPressed || downArrowPressed) {
          e.preventDefault();
        }
      }

      /**
       * @param {KeyboardEvent} e
       */
      function handleArrowNavigation(e) {
        const upArrowPressed = e.code === "ArrowUp";
        const kPressed = e.code === "KeyK";

        if (upArrowPressed || kPressed) {
          goToScreen(state.currentScreen - 1, { shouldScroll: true });
          return;
        }

        const downArrowPressed = e.code === "ArrowDown";
        const jPressed = e.code === "KeyJ";

        if (downArrowPressed || jPressed) {
          goToScreen(state.currentScreen + 1, { shouldScroll: true });
          return;
        }
      }

      /**
       * @param {MouseEvent|KeyboardEvent|TouchEvent} _e
       */
      function handleBackToTop(_e) {
        goToScreen(0, { shouldScroll: true });
      }

      document.addEventListener("scroll", handleScroll);
      document.addEventListener("keydown", disableArrows);
      document.addEventListener("keyup", handleArrowNavigation);

      getBullets().forEach((bullet, index) => {
        bullet.addEventListener("click", () => goToScreen(index, { shouldScroll: true }));
      });

      const backToTop = getBackToTop();
      if (backToTop) {
        backToTop.addEventListener("click", handleBackToTop);
      }
    }

    function showBullets() {
      const bulletContainer = getBulletContainer();
      if (!bulletContainer) {
        return;
      }
      bulletContainer.classList.remove("Bullets--hidden");
    }

    goToScreen(Math.round(window.scrollY / window.innerHeight), { shouldScroll: false });

    initEventListeners();
    showBullets();
  }

  window.addEventListener("load", onLoad);
})();
