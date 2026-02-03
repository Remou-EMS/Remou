const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.getAttribute("data-open") === "true";
    menu.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const appliedTabs = document.querySelectorAll("[data-applied-tab]");
const appliedPanels = document.querySelectorAll("[data-applied-panel]");

if (appliedTabs.length && appliedPanels.length) {
  appliedTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-applied-tab");

      appliedTabs.forEach((btn) => btn.classList.remove("is-active"));
      tab.classList.add("is-active");

      appliedPanels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.getAttribute("data-applied-panel") === target);
      });
    });
  });
}

const privacyTabs = document.querySelectorAll("[data-privacy-tab]");
const privacyPanels = document.querySelectorAll("[data-privacy-panel]");

if (privacyTabs.length && privacyPanels.length) {
  privacyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-privacy-tab");

      privacyTabs.forEach((btn) => btn.classList.remove("is-active"));
      tab.classList.add("is-active");

      privacyPanels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.getAttribute("data-privacy-panel") === target);
      });
    });
  });
}

const termsTabs = document.querySelectorAll("[data-terms-tab]");
const termsPanels = document.querySelectorAll("[data-terms-panel]");

if (termsTabs.length && termsPanels.length) {
  termsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-terms-tab");

      termsTabs.forEach((btn) => btn.classList.remove("is-active"));
      tab.classList.add("is-active");

      termsPanels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.getAttribute("data-terms-panel") === target);
      });
    });
  });
}
