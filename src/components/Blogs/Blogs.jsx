import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <div>
     {
      blogs.map(blog=><Blog blog={blog} key={blog.id}/>)
     }
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
};
export default Blogs;
