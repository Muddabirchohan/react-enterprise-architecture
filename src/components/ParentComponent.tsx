import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";

export default function ParentComponent() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setLoader(false);
        setData(json);
      })
      .catch(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div>
      {loader ? (
        <p> loading </p>
      ) : data.length > 0 ? (
        <p> data found {data[0].title} </p>
      ) : (
        <p> empty </p>
      )}
    </div>
  );
}
