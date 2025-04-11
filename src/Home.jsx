import React, { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import Counter from "./Counter";
// import { createContext, useContext } from "react";

export const dataContext = createContext();

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const dataHome = "DataHome-Parent";

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
      {/* <SignUp value={data} /> useContext hooks before I learned */}
      <dataContext.Provider value={dataHome}>
        {/* <SignUp />
        <Counter /> */}
      </dataContext.Provider>

      {/*  */}
      <div className="container">
        {/* <Link to="/Login">LogIn</Link> */}
        <div className="row justify-content-center m-3">
          {posts &&
            posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="card m-3"
                  style={{ width: "18rem" }}
                  onClick={() => {
                    navigate("/post/" + post.id);
                  }} // this is not good in react onclick method passing values because its work as method calling so we neend array method
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    {/* <p className="card-text">{post.content}</p> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
