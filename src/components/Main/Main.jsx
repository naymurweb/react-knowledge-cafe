import { useEffect } from "react";
import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarked from "../Bookmarked/Bookmarked";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadBtn = (time) => {
    setSpentTime(spentTime + time);
  };
  
  return (
    <div className="container mx-auto px-5 md:flex gap-6">
      <div className="md:w-2/3 ">
        <Blogs blogs={blogs} key={blogs.id} handleReadBtn={handleReadBtn} />
      </div>
      <div className=" md:w-1/3">
        <Bookmarked spentTime={spentTime} />
      </div>
    </div>
  );
};

export default Main;
