export const verticalAppearence = {
  hidden: {
    opacity: 0,
    y: 4,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      delay: 0.12,
      ease: "linear"
    }
  }
}

export const lateralAppearence = {
  hidden: {
    opacity: 0,
    x: 4
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.32,
      delay: 0.12,
      ease: "linear"
    }
  },
  exit: {
    opacity: 0,
    x: 4,
    transition: {
      duration: 0.04,
      ease: "linear"
    }
  }
}