export function useBackgroundScroll() {
  const createNewPosition = () => {
    const currentValue = Number(
      getComputedStyle(document.documentElement).getPropertyValue(`--next-position`).split(`%`)[0]
    );

    document.documentElement.style.setProperty(`--next-position`, `${currentValue + 100}%`);

    return setTimeout(() => createNewPosition(), 5500);
  };

  return createNewPosition();
}
