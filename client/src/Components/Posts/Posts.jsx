import React, { useEffect, useState } from "react";

import Post from "./Post/Post";

export default function Posts({ setCurrentId }) {
  const [posts, setPosts] = useState([]);
  
  
  async function getProducts() {
    let result = await fetch("/posts");
    result = await result.json();
    setPosts(result);
  }
  useEffect(() => {
    getProducts()
  },);

  return (
    <div className="flex overflow-hidden w-full   ml-5 ">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-y-10  ">
            {posts.map((post) => (
              <Post setCurrentId={setCurrentId} key={post._id} post={post} />
            ))}
          </div>
        </div>
      ) : posts.length < 0 ? (
        "No Memories Available"
      ) : (
        <div className="flex items-center justify-center ">
          <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
