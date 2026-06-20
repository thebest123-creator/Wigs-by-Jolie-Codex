/* Wigs by Jolie — paste once into Page Settings > Tracking Code > Footer. */
(function () {
  "use strict";

  document.querySelectorAll("[data-wbj-tabs]").forEach(function (tabGroup) {
    var tabs = Array.from(tabGroup.querySelectorAll('[role="tab"]'));
    var root = tabGroup.closest(".wbj-shop");
    if (!root) return;

    function activate(tab, focus) {
      tabs.forEach(function (item) {
        var selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
        var panel = root.querySelector("#" + item.getAttribute("aria-controls"));
        if (panel) panel.hidden = !selected;
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () { activate(tab, false); });
      tab.addEventListener("keydown", function (event) {
        var next = null;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next !== null) {
          event.preventDefault();
          activate(tabs[next], true);
        }
      });
    });
  });

  document.querySelectorAll(".wbj-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      var menu = link.closest("details");
      if (menu) menu.open = false;
    });
  });

  document.querySelectorAll("[data-wbj-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
