import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useDispatch } from "react-redux";
import { addBlogToDatabase } from "../../../tools/action/blogAction";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";

const AddBlog = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="my-3 text-center">{t("blog.0")}</h2>
      <BlogForm
        comingblog={(item) => {
          dispatch(addBlogToDatabase(item));
          setTimeout(() => {
            window.location.assign("/dashboard");
          }, 2000);
          swal({
            title: "",
            text: `${t("swal.12")}`,
            icon: "success",
            timer: 1500,
          });
        }}
      />
    </div>
  );
};

export default AddBlog;
