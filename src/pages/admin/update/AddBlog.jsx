import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useDispatch } from "react-redux";
import { addBlog } from "../../../tools/action/blogAction";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="my-3 text-center">Add Blog</h2>
      <BlogForm
        comingblog={(item) => {
          dispatch(addBlog(item));
          navigate("/dashboard");
        }}
      />
    </div>
  );
};

export default AddBlog;
