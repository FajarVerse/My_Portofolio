export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 45 : direction === "right" ? -45 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        // ease: [0.25, 0.25, 0.25, 0.75],
        ease: [0.19, 1.76, 0.54, 1],
      },
    },
  };
};

export const fadeZoom = (delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fade = (delay) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
