import React, { useState } from "react";
import Form from "../Components/Form/Form";
import Posts from "../Components/Posts/Posts";

export default function HomePage() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <div className="flex justify-around mt-10">
      <div>
        <Posts setCurrentId={setCurrentId} />
      </div>
      <div className=" ">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
}
