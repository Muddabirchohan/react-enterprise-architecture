export const nameSplitter = (item) => {
  if (item.length > 45) return item.slice(0, 45) + "...";
  return item;
};


export const itemExistArr = (id,productState) => {
    const ids = productState.cart?.map((item) => item.id);

    if (ids &&  ids.length > 0){
      return ids.includes(id);
    }
    
    return false;
  };