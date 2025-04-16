import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("Hello");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/2037e862-e02a-4a55-ad58-746f115b8ed5")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
