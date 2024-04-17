import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const StarWars = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="starwars--section my-5">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="starwars--left--section" data-aos="zoom-in-right">
              {/* <img
                src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-sw-j-d.jpg?id=6973"
                alt="starwars"
              /> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="starwars--right--section" data-aos="zoom-in-left">
              <div className="starwars--right--section--top">
                <img
                  src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-sw-j-logo-d.jpg.webp"
                  alt="starwars jedi survivor "
                  className="starwars--jedi--survivor my-4"
                />

                <h2>Stand Against the Darkness</h2>
                <p>
                  The story of Cal Kestis continues in STAR WARS Jedi:
                  Survivor™, an epic new adventure that will push Cal further
                  than ever as he fights to protect the galaxy from descending
                  into darkness.
                </p>
              </div>

              <div className="starwars--right--section--mid button--section d-flex align-items-center justify-content-center">
                <img
                  src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-sw-j-stroke-d-70x40.png"
                  alt=""
                />
                <Link className="buy--now--button" to="/sale">
                  <button className="button">Take It Now!</button>
                </Link>
                <img
                  src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-sw-j-stroke-d-right-70x40.png"
                  alt=""
                />
              </div>
              <div className="starwars--right--section--bottom">
                <p>
                  *Internet connection. Some content may require gameplay to
                  unlock. Mandatory content updates may be downloaded
                  automatically, require additional storage.
                </p>
                <img
                  src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-sw-j-platforms-d-68x16.jpg"
                  alt=""
                  className="starwars--section--platforms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarWars;
