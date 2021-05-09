import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import { deleteBlog, useBlogs } from "../state/blog-context";

const Blog = () => {
  let { id } = useParams();
  const history = useHistory();
  const { state, dispatch } = useBlogs();
  const blog = state.displayBlogs.filter((blog) => {
    if (blog) return blog.id === parseInt(id);
    return false;
  })[0];
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteBlog(dispatch, blog);
    history.push("/");
  };
  return (
    <Layout
      renderInSlot={() => <h1 >Blog Post</h1>}
    >
      <div >
        {blog && (
          <div className="blog-details-container">
            <span>
              <h3 className="blog-title">{blog.title}</h3>
              
            </span>
            <p >{blog.text}</p>
            <div className="blog-actions">
                <Link
                  to={`/blogs/${blog.id}/edit`}
                  title="Edit blog"
                >
                  Edit Blog
                </Link>
                <a href="#"onClick={handleDelete}>
                 Delete Blog
                </a>
              </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
