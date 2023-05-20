export const nameSplitter = (item) => {
  if (item.length > 45) return item.slice(0, 45) + "...";
  return item;
};
