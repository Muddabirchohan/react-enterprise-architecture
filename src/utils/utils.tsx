export const nameSplitter = (item,upto) => {
  if (item && item.length > upto) return item.slice(0, upto) + "...";
  return item;
};


export const itemExistArr = (id,dataList) => {
    const ids = dataList?.map((item) => item.id);

    if (ids &&  ids.length > 0){
      return ids.includes(id);
    }

    console.log("datalist",dataList,"id",id)
    return false;
  };


  export const toastCustom = (type,title) => {
    toast(`item ${title} added to cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  }

