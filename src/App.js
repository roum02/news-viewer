import React, { useState, useCallback } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

// apiKey 3c3956ba55574481865e14506029d508

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=3c3956ba55574481865e14506029d508"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory, []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       rows={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
  );
}

export default App;
