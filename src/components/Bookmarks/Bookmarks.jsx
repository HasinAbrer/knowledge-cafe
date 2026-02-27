import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3 className="text-3xl font-bold mt-2 text-center">Reading Time: {readingTime} mins</h3>
            </div>
            <h2 className="text-3xl font-bold mt-2 text-center">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx )=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;