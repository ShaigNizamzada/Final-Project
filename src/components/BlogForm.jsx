import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../tools/action/blogAction";
import { useTranslation } from "react-i18next";

const BlogForm = () => {
  const { t } = useTranslation();
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !img) {
      alert("please fill the input");
    } else {
      dispatch(
        addBlog({
          img: img,
          title: title,
          desc: desc,
        })
      );
    }
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="mb-3">
        <label className="form-label">{t("account.15")}</label>
        <input
          type="text"
          onChange={(e) => setImg(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{t("account.11")}</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{t("account.16")}</label>
        <div>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            class="form-control"
            placeholder={t("account.17")}

            style={{ height: 300 }}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="button">
      {t("account.14")}
      </button>
    </form>
  );
};

export default BlogForm;
