import DefaultRenderEmpty from 'antd/es/config-provider/defaultRenderEmpty';
import { useState, useDeferredValue, useEffect } from 'react';


function useApiFetch(query) {
  const deferredQuery = useDeferredValue(query);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${deferredQuery}`);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [deferredQuery]);

  return { data, loading };
}


export default () =>  {


    const [inputVal, setInputVal] = useState('');

    const { data, loading } = useApiFetch(inputVal);


  return (
    <div style={{ marginTop: 200 }}>
    <input
      type='text'
      onChange={(e) => setInputVal(e.target.value)}
      value={inputVal}
    />
    {loading ? <div>Loading...</div> : <div>{JSON.stringify(data)}</div>}
  </div>
  );
}