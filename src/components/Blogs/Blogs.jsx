import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ blogs,handleReadBtn }) => {
  return (
    <div>
     {
      blogs.map(blog=><Blog blog={blog} key={blog.id} handleReadBtn={handleReadBtn}/>)
     }
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  handleReadBtn:PropTypes.func.isRequired
};
export default Blogs;
