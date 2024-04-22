import React from "react";
import { PacmanLoader } from "react-spinners";

const PreLoader = () => {
  return (
    <>
      <div className="pacman-loader">
        <div className="d-flex align-items-center justify-content-center pacman">
          <PacmanLoader
            color="rgb(109, 78, 236)"
            cssOverride={{}}
            margin={1}
            size={50}
          />
        </div>
      </div>
    </>
  );
};

export default PreLoader;
