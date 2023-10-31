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
    <div className="container mx-auto px-5 md:flex">
      <div className="md:w-2/3 ">
        <Blogs blogs={blogs} key={blogs.id} />
      </div>
      <div className=" md:w-1/3">
        <Bookmarked />
      </div>
    </div>
  );
};

export default Main;
