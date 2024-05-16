import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import slugify from "react-slugify";
import { editBlogFromDatabase } from "../../../tools/action/blogAction";

const EditBlog = () => {
  const { slug } = useParams();
  const blogs = useSelector((p) => p);
  const selectBlog = blogs.filter((p) => slugify(p.title) === slug);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="my-3 text-center">Edit Blog</h2>
      <BlogForm
        editdata={selectBlog[0]}
        comingblog={(item) => {
          dispatch(editBlogFromDatabase(selectBlog[0].id, item));
          window.location.assign("/dashboard");
        }}
      />
    </div>
  );
};

export default EditBlog;
