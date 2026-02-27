import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  // console.log(blog)
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14 rounded-3xl" src={author_img} alt="" />
          <div className="ml-[20px]">
            <h3 className="text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>{hashtags.join(" ")}</p>
      <button onClick={() => handleMarkAsRead (reading_time)} className="font-bold mt-6 text-purple-600 underline">Mark as Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
