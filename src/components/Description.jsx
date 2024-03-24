import React, { useState } from "react";
import { Link } from "react-router-dom";

const Description = () => {
  const [showContent, setShowContent] = useState("false");

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <div
        class={`description--section ${
          showContent ? "visible" : "hidden"
        } mt-5 ms-3`}
      >
        <h5 className="fw-bolder mb-4">Online video game store</h5>
        <p>
          The online store of equipment and electronics is one of the leading
          online stores. The band was released in 25 volumes. During this time,
          our team sent 228 cypemapkets and managed to create a powerful,
          fast-working online store. The range of online supply points is huge
          and covers all company categories available for convenience stores. In
          2019, we presented a new border policy strategy that covers all
          aspects of the company’s activities – corporate style, delivery, and
          consultant work.
        </p>
        <h5 className="fw-bolder mb-4">
          Online shopping that really is convenient
        </h5>
        <p>
          The car parts and everything you may need for repairs and regular
          maintenance of your vehicle are listed in a convenient and
          comprehensive catalogue. The innovative search – by name, item ID or
          OEM number will help you to find automotive parts easily.
        </p>
        <p>
          You can choose whichever payment method is most convenient for you
          from among the various options. Have any questions? Our support
          service specialists are always on hand to help. Picking and buying car
          parts with us is an enjoyable experience! At worst the discussion is
          at least working towards the final goal of your site where questions
          about lorem ipsum don’t. If the copy becomes distracting in the design
          then you are doing something wrong or they are discussing copy
          changes. It might be a bit annoying but you could tell them that that
          discussion would be best suited for another time.
        </p>
        <p>
          A seemingly elegant design can quickly begin to bloat with unexpected
          content or break under the weight of actual activity. Fake data can
          ensure a nice looking layout but it doesn’t reflect what a living,
          breathing application must endure. Real data does.
        </p>
      </div>
      <Link onClick={toggleContent} className="read--more--button ms-3">
        {showContent ? "Read More" : "Read More"}
      </Link>
    </>
  );
};

export default Description;
