import PropTypes from "prop-types";

const BookmarkedBlogs = ({ markBlogs }) => {
  console.log(markBlogs);
  return (
    <div className="bg-slate-200 h-screen ">
      <h1 className="font-bold text-2xl my-6 rounded-lg p-5">
        Bookmarked Blogs : {markBlogs.length}
      </h1>

      {markBlogs.map((blog, idx) => (
        <div key={idx} className="bg-white m-5 rounded-lg">
          <h3 className="p-5  text-lg font-bold">{blog.blogTitle}</h3>
        </div>
      ))}
    </div>
  );
};

BookmarkedBlogs.propTypes = {
  markBlogs: PropTypes.number.isRequired,
};

export default BookmarkedBlogs;
