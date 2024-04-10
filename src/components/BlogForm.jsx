import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../tools/action/blogAction";

const BlogForm = () => {
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
        <label className="form-label">Image URL</label>
        <input
          type="text"
          onChange={(e) => setImg(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <div class="form-floating">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 300 }}
          ></textarea>
          <label for="floatingTextarea2">Description</label>
        </div>
      </div>
      <button type="submit" className="button">
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
