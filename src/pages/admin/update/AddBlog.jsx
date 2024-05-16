import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useDispatch } from "react-redux";
import { addBlogToDatabase } from "../../../tools/action/blogAction";

const AddBlog = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="my-3 text-center">Add Blog</h2>
      <BlogForm
        comingblog={(item) => {
          dispatch(addBlogToDatabase(item));
          window.location.assign("/dashboard");
        }}
      />
    </div>
  );
};

export default AddBlog;
