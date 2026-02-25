import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14 rounded-3xl" src={author_img} alt="" />
          <div className="ml-[20px]">
            <h3 className="text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>{hashtags.join(" ")}</p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
