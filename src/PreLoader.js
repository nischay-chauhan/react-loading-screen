import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

// This component fetches data from JSONPlaceholder API and displays it as a list
function PreLoader1() {
    // Initialize state variables for data and loading status using useState hook
    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);
  
    // Use useEffect hook to fetch data from API after the component mounts
    useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
            setDone(true);
          });
      }, 2000);
    }, []);
  
    // Render a loading indicator if data is not yet loaded, otherwise render the data as a list
    return (
      <>
        {!done ? (
          <ReactLoading
            type={"bars"}
            color={"#03fc4e"}
            height={100}
            width={100}
          />
        ) : (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
  
  export default PreLoader1;