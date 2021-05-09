import React, { useRef } from "react";
import { useHistory } from "react-router";
import { addBlog, editBlog, useBlogs } from "../state/blog-context";

const BlogForm = ({ blog }) => {
  const history = useHistory();
  const { dispatch } = useBlogs();
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blog) {
      const newBlog = await addBlog(dispatch, {
        title: inputRef.current.value,
        text: textAreaRef.current.value,
        timestamp: new Date(),
      });
      history.push(`/blogs/${newBlog.id}`);
      return;
    }
    await editBlog(dispatch, {
      id: blog.id,
      title: inputRef.current.value,
      text: textAreaRef.current.value,
      timestamp: new Date(),
    });
    history.push(`/blogs/${blog.id}`);
  };
  return (
    <div class="container">
      <form onSubmit={handleSubmit}
      >
        <ul className="flex-outer">
          <li>
          <label>Title:</label>
            <input
              ref={inputRef}
              type="text"
              defaultValue={blog ? blog.title : ""}
            />
          </li>
        

        <li>
          <label>Text:</label>
          
            <textarea
              ref={textAreaRef}
              rows="16"
              cols="16"
              defaultValue={blog ? blog.text : ""}
            />
        </li>
        <li>
        <button
          type="submit"
        >
          {blog ? "Edit Blog Post" : "Add New Blog"}
        </button>
        </li>
        </ul>
      </form>
    </div>
  );
};

export default BlogForm;
