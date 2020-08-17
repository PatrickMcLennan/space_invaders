export function useBackgroundScroll() {
  const currentValue = Number(
    getComputedStyle(document.documentElement).getPropertyValue(`--next-position`).split(`%`)[0]
  );

  document.documentElement.style.setProperty(`--next-position`, `${currentValue + 1200}%`);

  return setTimeout(() => useBackgroundScroll(), 60000);
}
