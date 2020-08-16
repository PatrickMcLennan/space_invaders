// Component Mount
export const menuMountAnimation = {
  initial: {
    opacity: 0,
    y: 10,
    transition: {
      delayChildren: 0.2,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      delayChildren: 0.2,
    },
  },
};
