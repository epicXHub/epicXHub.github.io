const listVariants = {
  show: {
    y: "0",
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
  hide: {
    y: "-5%",
    opacity: 0,
  },

  selected: {
    y: "0",
    scale: 1.2,
    opacity: 1,
    originX: 0,
  },
};

const headVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8,
    },
  },
};

export { listVariants, headVariants };
