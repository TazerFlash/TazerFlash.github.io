// Wires up every ARIA tablist on the page (Experience roles, Projects).
export function initTabs() {
  document.querySelectorAll<HTMLElement>('[role="tablist"]:not([data-tabs-ready])').forEach((list) => {
    list.dataset.tabsReady = '';
    const tabs = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const select = (i: number, focus = false) => {
      tabs.forEach((tab, j) => {
        const on = i === j;
        tab.setAttribute('aria-selected', String(on));
        tab.tabIndex = on ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')!)!.toggleAttribute('data-inactive', !on);
      });
      // Scroll only the tab strip (on phones), never the page track.
      if (focus) tabs[i].focus({ preventScroll: true });
      const t = tabs[i];
      if (t.offsetLeft < list.scrollLeft || t.offsetLeft + t.offsetWidth > list.scrollLeft + list.clientWidth)
        list.scrollTo({ left: t.offsetLeft - 20, behavior: 'smooth' });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(i));
      tab.addEventListener('keydown', (e) => {
        const keys: Record<string, number> = {
          ArrowDown: i + 1,
          ArrowRight: i + 1,
          ArrowUp: i - 1,
          ArrowLeft: i - 1,
          Home: 0,
          End: tabs.length - 1,
        };
        if (!(e.key in keys)) return;
        e.preventDefault();
        select((keys[e.key] + tabs.length) % tabs.length, true);
      });
    });
  });
}
