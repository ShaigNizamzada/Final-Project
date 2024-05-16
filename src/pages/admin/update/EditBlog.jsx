import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "react-slugify";
import { editBlog } from "../../../tools/action/blogAction";

const EditBlog = () => {
  const { slug } = useParams();
  const blogs = useSelector((p) => p);
  const selectBlog = blogs.filter((p) => slugify(p.title) === slug);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="my-3 text-center">Edit Blog</h2>
      <BlogForm
        editdata={selectBlog[0]}
        comingblog={(item) => {
          dispatch(editBlog(selectBlog[0].id, item));
          navigate("/dashboard");
        }}
      />
    </div>
  );
};

export default EditBlog;
