import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h3 className="text-xl bg-slate-300 ml-8 m-4 p-4 rounded-xl">{title}</h3>
        </div>
    );
};

Bookmark.proTotypes = {
    bookmark: PropTypes.object
}

export default Bookmark;