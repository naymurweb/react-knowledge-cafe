import { useEffect } from "react";
import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarked from "../Bookmarked/Bookmarked";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container mx-auto px-5 flex">
      <div className="w-2/3 bg-green-200">
        <Blogs blogs={blogs} key={blogs.id} />
      </div>
      <div className=" w-1/3 bg-red-300">
        <Bookmarked />
      </div>
    </div>
  );
};

export default Main;
