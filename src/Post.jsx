import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const url = "http://localhost:3500/posts/" + id;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Couldn't retrieve data");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data); // store fetched data into state
      })
      .catch((error) => {
        // setError(error.message); // handle error
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <h4>{post.content}</h4>
        </div>
      )}
      ;
    </>
  );
}

export default Post;
