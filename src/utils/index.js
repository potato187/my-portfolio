export const px2vw = (size, width = 1440) =>
  `${((size / width) * 100).toFixed(2)}vw`;
