import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import slugify from "react-slugify";
import { useTranslation } from "react-i18next";
const BlogDetails = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const blogs = useSelector((p) => p);
  const blogDetails = blogs.filter((p) => slugify(p.title) === slug);
  console.log(blogDetails);
  return (
    <>
      <div className="blog--details--section">
        <div className="blog--details--top--section">
          <h1 className="py-3 fw-bold ps-3">
            {t("navbar.4")}
            <div className="d-flex mt-2">
              <Link className="link" to="/">
                <h6>{t("navbar.0")}</h6>
              </Link>
              <h6>&nbsp;/&nbsp;</h6>
              <Link className="link" to="/blog">
                <h6>{t("navbar.4")}</h6>
              </Link>
            </div>
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="blog--details--body--section">
                <h6 className="text-center blog--text text-light">
                  {t("navbar.4")}
                </h6>
                <h4 className="display-5 text-center mb-3">
                  {blogDetails[0].title}
                </h4>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <span className="me-2">Posted By</span>
                  <img
                    src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                    alt=""
                    height={18}
                    width={18}
                    className="author--img"
                  />
                  <span className="mx-2">Mr.Mackay</span>
                </div>
                <div className="blog--image--section">
                  <img
                    src={blogDetails[0].img}
                    className="d-block mx-lg-auto"
                    alt="Bootstrap Themes"
                    loading="lazy"
                  />
                  <div className="blog--day--section text-dark d-flex flex-column">
                    <span className="text-center">
                      {blogDetails[0].date_day}
                    </span>
                    <span className="text-center">
                      {blogDetails[0].date_month}
                    </span>
                  </div>
                </div>
                <div className="blog--description--section mt-3">
                  <p>{blogDetails[0].desc}</p>
                  <h2>Secret Invasion Character Posters</h2>
                  <div className="d-flex my-4">
                    <img
                      src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/06/wd-er-gallary-sw-j-3.jpg"
                      alt=""
                      className="desc--img"
                    />
                    <img
                      src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/06/wd-er-gallary-sw-j-4.jpg"
                      alt=""
                      className="desc--img"
                    />
                  </div>
                  <h2>You begin with a text, you sculpt information.</h2>
                  <p>
                    You chisel away what’s not needed, you come to the point,
                    make things clear, add value, you’re a content person, you
                    like words. Design is no afterthought, far from it, but it
                    comes in a deserved second. Anyway, you still use Lorem
                    Ipsum and rightly so, as it will always have a place in the
                    web workers toolbox, as things happen, not always the way
                    you like it, not always in the preferred order. Even if your
                    less into design and more into content strategy you may find
                    some redeeming value with, wait for it, dummy copy, no less.
                    I’ve heard the argument that “lorem ipsum” is effective in
                    wireframing or design because it helps people focus on the
                    actual layout, or color scheme, or whatever. What kills me
                    here is that we’re talking about creating a user experience
                    that will (whether we like it or not) be DRIVEN by words.
                    The entire structure of the page or app flow is FOR THE
                    WORDS. If that’s what you think how bout the other way
                    around? How can you evaluate content without design? No
                    typography, no colors, no layout, no styles, all those
                    things that convey the important signals that go beyond the
                    mere textual, hierarchies of information, weight, emphasis,
                    oblique stresses, priorities, all those subtle cues that
                    also have visual and emotional appeal to the reader. Or
                    else, an alternative route: set checkpoints, networks,
                    processes, junctions between content and layout. Depending
                    on the state of affairs it may be fine to concentrate either
                    on design or content, reversing gears when needed.
                  </p>
                </div>
                <div className="blog--testimonial--section">
                  <div className="about">
                    <div className="about-img d-flex justify-content-center align-items-center">
                      <img
                        src="https://secure.gravatar.com/avatar/5c21c2c78e4d99d973b7184405f2e70d?s=74&d=mm&r=g"
                        alt=""
                        width={74}
                        height={74}
                      />
                    </div>
                    <div className="about-text d-flex flex-column justfiy-content-center align-items-center text-center p-5">
                      <h6>About Mr. Mackay</h6>
                      <p>
                        A seemingly elegant design can quickly begin to bloat
                        with unexpected content or break under the weight of
                        actual activity. Fake data can ensure a nice looking
                        layout but it doesn’t reflect what a living, breathing
                        application must endure. Real data does. Information in
                        the Web design process can result in products with
                        unrealistic assumptions and potentially serious design.
                      </p>
                      <h6>All posts by Mr. Mackay</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={blogDetails[0].img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {blogDetails[0].title}
            </h1>
            <p className="lead">{blogDetails[0].desc}</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BlogDetails;
