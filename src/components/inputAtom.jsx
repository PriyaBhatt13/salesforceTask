import React from "react";
import { useBlogs } from "../state/blog-context";

const InputAtom = () => {
  const { dispatch } = useBlogs();
  return (
    <span >
      <input
        placeholder="Search Blogs"
        className="search-input"
        onChange={(e) => {
          const searchText = e.target.value;
          dispatch({ type: "SEARCH_BLOGS", payload: { searchText } });
        }}
      />
    </span>
  );
};

export default InputAtom;
