import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SingleProductSale from "../components/SingleProductSale";
import { ProductContext } from "../context/ProductContext";
import { Select, Space } from "antd";
const Sale = () => {
  const [product] = useContext(ProductContext);
  const [state, setState] = useState(product);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    if (value == "all") {
      setState(product);
      return;
    } else if (value == "low-to-high") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    } else if (value == "high-to-low") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    } else if (value == "a-z") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortedProducts);
    } else if (value == "z-a") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortedProducts);
    }
  };
  return (
    <>
      <div className="sale--section">
        <div className="sale--section--top p-3">
          <Link className="sale--button" to="/">
            <span>Home </span>
          </Link>
          <span>/ </span>
          <span>All Games</span>
        </div>
        <div className="sale--section--middle">
          <div className="row">
            <div className="col-lg-7 col-md-10 col-sm-12 col-12">
              <div className="text--section">
                <p>Discounts up to -75%</p>
                <h1 className="text-light">Super Week Sale</h1>
                <p>
                  Spring is the nicest season. It’s the one that shows up and
                  shovels all the Winter snow off your driveway, tips its hat at
                  you, and strolls away. Then it wakes all the bears and
                  squirrels out of hibernation and fills up all the streams with
                  babbling water.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sale--section--bottom mt-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
              <div className="sale--section--bottom--left mt-3"></div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row sale--section--right--left ms-1 mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>All Games</h4>
                  <div className="filter--section me-2">
                    <Select
                      defaultValue="All"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "all",
                          label: "All",
                        },
                        {
                          value: "a-z",
                          label: "A-Z",
                        },
                        {
                          value: "z-a",
                          label: "Z-A",
                        },
                        {
                          value: "low-to-high",
                          label: "Low-to-High",
                        },
                        {
                          value: "high-to-low",
                          label: "High-to-Low",
                        },
                      ]}
                    />
                  </div>
                </div>
                {state.slice(0, 24).map((item) => (
                  <SingleProductSale
                    key={item.id}
                    title={item.title}
                    photo={item.photo}
                    rating={item.rating}
                    price={item.price}
                    alldata={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
