import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import SingleProductSale from "./SingleProductSale";
import { Select } from "antd";

const SingleProductSaleList = () => {
  const [product] = useContext(ProductContext);
  const [state, setState] = useState(product);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    if (value === "all") {
      setState(product);
      return;
    } else if (value === "low-to-high") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    } else if (value === "high-to-low") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    } else if (value === "a-z") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortedProducts);
    } else if (value === "z-a") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortedProducts);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items center">
        <h4>All Games</h4>
        <div className="filter--section me-2">
          {" "}
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
      <div className="row">
        {state.map((item) => (
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
    </>
  );
};

export default SingleProductSaleList;
