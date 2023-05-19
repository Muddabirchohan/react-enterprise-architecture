export const nameSplitter = (item) => {
  if (item.length > 40) return item.slice(0, 40) + "...";
  return item;
};
