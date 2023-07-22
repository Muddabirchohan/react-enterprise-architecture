const cache = {};

export const getCachedData = async (url) => {
  if (cache[url]) {
    console.log("Data fetched from cache:", cache[url]);
    return cache[url];
  } else {
    try {
        return fetch(url)
        .then((res) => res.json())
        .then((resp) => {
          cache[url] = resp;
          return resp;
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
};
