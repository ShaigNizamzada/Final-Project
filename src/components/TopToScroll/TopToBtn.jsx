import React, { useEffect, useState } from "react";

const TopToBtn = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollTop}
      className="button top--to--scroll"
      style={{
        position: "fixed",
        right: "30px",
        bottom: "40px",
        zIndex: 123,
        border: "1px solid grey",
        borderRadius: "50%",
        padding: "6px 14px",
        display: visible ? "block" : "none",
      }}
    >
      <i className="fa-solid fa-arrow-up top--to--scroll--icon"></i>
    </button>
  );
};

export default TopToBtn;
