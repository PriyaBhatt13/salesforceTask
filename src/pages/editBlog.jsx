import React from "react";
import { useParams } from "react-router";
import BlogForm from "../components/blogForm";
import Layout from "../components/layout";
import { useBlogs } from "../state/blog-context";

const EditBlog = () => {
  let { id } = useParams();
  const { state } = useBlogs();
  const blog = state.displayBlogs.filter((blog) => {
    return blog.id === parseInt(id);
  })[0];
  return (
    <Layout
      renderInSlot={() => (
        <h1 >
          Edit Blog
        </h1>
      )}
    >
      <div >
        {blog && <BlogForm blog={blog} />}
      </div>
    </Layout>
  );
};

export default EditBlog;
