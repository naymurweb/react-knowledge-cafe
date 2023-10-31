import PropsTypes from "prop-types";
import authorProfile from "../../assets/boy1.png";

const Blog = ({ blog,handleReadBtn }) => {
  const { coverImage, authorName, blogTitle, date, hashtags, readingTime } =
    blog;
  return (
    <div className="mb-16">
      <img src={coverImage} alt="" width="100%" />

      <div className="space-y-4">
        <div className="flex justify-between items-center my-7">
          <div className="flex gap-6">
            <img
              src={authorProfile}
              alt=""
              width="60px"
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold text-xl">{authorName}</h4>
              <small>{date}</small>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <p>{readingTime} min read</p>
              <span onClick={()=>handleReadBtn(readingTime)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold">{blogTitle}</h2>
        <div>
          {hashtags.map((hash, idx) => (
            <span key={idx}>{hash}</span>
          ))}
        </div>
        <button>Mark as read</button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropsTypes.object.isRequired,
  handleReadBtn:PropsTypes.func.isRequired
};
export default Blog;
