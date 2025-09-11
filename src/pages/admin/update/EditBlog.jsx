import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useParams } from "react-router-dom";
import slugify from "react-slugify";
import { useTranslation } from "react-i18next";

const EditBlog = () => {
  document.title = "Edit Blog";
  const { t } = useTranslation();
  const { slug } = useParams();
  const blogs = []; // Removed Redux - replace with actual blog data source
  const selectBlog = blogs.filter((p) => slugify(p.title) === slug);

  return (
    <div className="container">
      <h2 className="my-3 text-center">{t("blog.1")}</h2>
      <BlogForm />
    </div>
  );
};

export default EditBlog;
