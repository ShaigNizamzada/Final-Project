import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
const Blog = () => {
  const blogs = useSelector((p) => p);
  return (
    <>
      <div className="container">
        <div className="row">
          {blogs.map((item) => (
            <div className="col-12 col-sm-12 col-md-4">
              <div className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc.slice(0, 200)}...</p>
                  <Link
                    to={`/blog/${slugify(item.title)}`}
                    className="btn btn-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
