"use strict";

(function () {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Getters ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function getBullets() {
    return [...document.getElementsByClassName("Bullet")];
  }

  function getScreenColor(/** @type number*/ index) {
    const screens = document.getElementsByClassName("Screen");
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

    function goToScreen(/** @type number */ wantedScreen, /** @type boolean */ shouldScroll) {
      // ensure the newly selected page is in the range [0, pageCount)
      state.currentScreen = Math.min(Math.max(wantedScreen, 0), state.pages - 1);

      const currentScreenColor = getScreenColor(state.currentScreen);

      getBullets().forEach((bullet, index) => {
        bullet.className = index === state.currentScreen ? "Bullet active" : "Bullet";

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
      function handleScroll(/** @type Event */ _e) {
        goToScreen(Math.round(window.scrollY / window.innerHeight), false);
      }

      function disableArrows(/** @type KeyboardEvent */ e) {
        const upArrowPressed = e.code === "ArrowUp";
        const downArrowPressed = e.code === "ArrowDown";

        if (upArrowPressed || downArrowPressed) {
          e.preventDefault();
        }
      }

      function handleArrowNavigation(/** @type KeyboardEvent */ e) {
        const upArrowPressed = e.code === "ArrowUp";
        const kPressed = e.code === "KeyK";

        if (upArrowPressed || kPressed) {
          goToScreen(state.currentScreen - 1, true);
          return;
        }

        const downArrowPressed = e.code === "ArrowDown";
        const jPressed = e.code === "KeyJ";

        if (downArrowPressed || jPressed) {
          goToScreen(state.currentScreen + 1, true);
          return;
        }
      }

      function handleBackToTop(/** @type MouseEvent */ _e) {
        goToScreen(0, true);
      }

      document.addEventListener("scroll", handleScroll);
      document.addEventListener("keydown", disableArrows);
      document.addEventListener("keyup", handleArrowNavigation);

      getBullets().forEach((bullet, index) => {
        bullet.addEventListener("click", () => goToScreen(index, true));
      });

      const backToTop = getBackToTop();
      if (backToTop) {
        backToTop.addEventListener("click", handleBackToTop);
      }
    }

    goToScreen(Math.round(window.scrollY / window.innerHeight));

    initEventListeners();
  }

  window.addEventListener("load", onLoad);
})();
