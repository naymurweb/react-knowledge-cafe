import PropTypes from "prop-types";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <div>
      <h1>blogs{blogs.length}</h1>
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
};
export default Blogs;
