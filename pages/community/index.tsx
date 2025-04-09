"use client";
import { useState } from "react";

const Community = () => {
  console.log("Community component - pages Routing");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      Community {""}
      <button onClick={() => alert("Hello World")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};
export default Community;
