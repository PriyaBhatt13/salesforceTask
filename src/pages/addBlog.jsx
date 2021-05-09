import React from "react";
import BlogForm from "../components/blogForm";
import Layout from "../components/layout";

const AddBlog = () => {
  return (
    <Layout
      renderInSlot={() => (
        <h1>
          Add New Blog
        </h1>
      )}
    >
      <div>
        {<BlogForm blog={null} />}
      </div>
    </Layout>
  );
};

export default AddBlog;
