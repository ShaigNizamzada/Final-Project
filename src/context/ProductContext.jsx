import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("Hello");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/8c2e3e90-8741-4e3e-92e2-fe9023ab9a58")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
