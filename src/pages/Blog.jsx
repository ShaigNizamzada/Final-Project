import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const blogs = useSelector((p) => p);
  return (
    <>
      <h1 className="py-3 blog--top--title fw-bold ps-3">Blog</h1>
      <div className="container-fluid" data-aos="zoom-in-up">
        <div className="row">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-12 col-md-6 col-sm-12 g-3"
            >
              <div className="blog--section">
                <Link to={`/blog/${slugify(item.title)}`}>
                  <div className="blog--image--section">
                    <img
                      className="blog--image"
                      src={item.img}
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
                <div className="blog--top--section d-flex flex-column">
                  <span className="text-center">16</span>
                  <span className="text-center">May</span>
                </div>
                <div className="blog--body--section">
                  <h6 className="text-center blog--text text-light">Blog</h6>
                  <Link
                    className="blog--item--title"
                    to={`/blog/${slugify(item.title)}`}
                  >
                    <h5 className="text-light text-center fw-bold blog--title">
                      {item.title}
                    </h5>
                  </Link>
                </div>
                <div className="blog--bottom--section">
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="text-light me-2">By</span>
                    <img
                      src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                      alt=""
                      height={18}
                      width={18}
                    />
                    <span className="text-light mx-2">Mr.Mackay</span>
                    <Link to={`/blog/${slugify(item.title)}`}>
                      <i class="fa-regular fa-comment text-light"></i>
                    </Link>
                  </div>
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
