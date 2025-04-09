import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      const url = "http://localhost:3500/posts";
      fetch(url, { signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("Couldn't retrieve data");
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data); // store fetched data into state
        })
        .catch((error) => {
          setError(error.message); // handle error
          console.log(error);
        });
    }, 1000);

    //cleanup function -
    return () => {
      console.log("unMounted - Cleaning Up");
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="container">
        <Link to="/Login">LogIn</Link>
        <div className="row justify-content-center m-3">
          {posts &&
            posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="card m-3"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
