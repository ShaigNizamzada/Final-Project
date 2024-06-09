import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("Hello");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/f290d002-46e7-44aa-bd56-b27fea8d0c0d")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
