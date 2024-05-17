import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import slugify from "react-slugify";
import { editBlogFromDatabase } from "../../../tools/action/blogAction";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";

const EditBlog = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const blogs = useSelector((p) => p);
  const selectBlog = blogs.filter((p) => slugify(p.title) === slug);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="my-3 text-center">{t("blog.1")}</h2>
      <BlogForm
        editdata={selectBlog[0]}
        comingblog={(item) => {
          dispatch(editBlogFromDatabase(selectBlog[0].id, item));
          setTimeout(() => {
            window.location.assign("/dashboard");
          }, 2000);
          swal({
            title: "",
            text: `${t("swal.13")}`,
            icon: "success",
            timer: 1500,
          });
        }}
      />
    </div>
  );
};

export default EditBlog;
