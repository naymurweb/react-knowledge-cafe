import BookmarkedBlogs from "../BookmarkedBlogs/BookmarkedBlogs";
import SpentTime from "../SpentTime/SpentTime";
import PropTypes from "prop-types";

const Bookmarked = ({ spentTime, markBlogs }) => {
  console.log(typeof spentTime, typeof markBlogs);
  return (
    <div>
      <SpentTime spentTime={spentTime} />
      <BookmarkedBlogs markBlogs={markBlogs} />
    </div>
  );
};

Bookmarked.propTypes = {
  spentTime: PropTypes.number.isRequired,
  markBlogs: PropTypes.array,
};

export default Bookmarked;
