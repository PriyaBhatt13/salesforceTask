import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InputAtom from "../components/inputAtom";
import Layout from "../components/layout";
import { fetchBlogs, useBlogs } from "../state/blog-context";

const BlogItem = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="blog-item-container">
        <h2>{blog.title}</h2>
        <p>{blog.text}</p>
        
      </div>
    </Link>
  );
};

const Blogs = () => {
  const { dispatch, state } = useBlogs();
  useEffect(async () => {
    await fetchBlogs(dispatch, state);
  }, []);
  return (
    <Layout
      renderInSlot={() => <InputAtom />}
      renderInActionSlot={() => (
        <Link
          to="/blogs/add"
          
        >
          
          <span>Create New Blog</span>
        </Link>
      )}
    >
      <div >
        {state.displayBlogs
          .filter((blog) => blog.id && blog.title && blog.title.length)
          .map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
      </div>
    </Layout>
  );
};

export default Blogs;
