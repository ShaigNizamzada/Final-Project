import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";
const BlogForm = ({ comingblog, editdata }) => {
  const { t } = useTranslation();
  const [img, setImg] = useState(editdata ? editdata.img : "");
  const [title, setTitle] = useState(editdata ? editdata.title : "");
  const [desc, setDesc] = useState(editdata ? editdata.desc : "");

  const formSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !img) {
      swal({
        title: "",
        text: `${t("swal.5")}`,
        icon: "error",
        timer: 1500,
      });
    } else {
      comingblog({
        title: title,
        img: img,
        desc: desc,
      });
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
          value={img}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{t("account.11")}</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
            value={desc}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="button">
        {editdata ? t("account.12") : t("account.14")}
      </button>
    </form>
  );
};

export default BlogForm;
