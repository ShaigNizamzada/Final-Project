import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useTranslation } from "react-i18next";

const AddBlog = () => {
  document.title = "Add Blog";
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="my-3 text-center">{t("blog.0")}</h2>
      <BlogForm />
    </div>
  );
};

export default AddBlog;
