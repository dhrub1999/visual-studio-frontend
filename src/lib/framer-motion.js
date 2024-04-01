export const navUl = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
};

export const navLi = {
  hidden: { x: '15px', opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
  exit: { x: '15px', opacity: 0 },
};
