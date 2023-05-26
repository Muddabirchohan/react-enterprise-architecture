export const nameSplitter = (item,upto) => {
  if (item.length > upto) return item.slice(0, upto) + "...";
  return item;
};


export const itemExistArr = (id,cart) => {
    const ids = cart?.map((item) => item.id);

    if (ids &&  ids.length > 0){
      return ids.includes(id);
    }

    return false;
  };