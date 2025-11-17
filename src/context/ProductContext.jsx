import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("Hello");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/def3861b-5312-446a-bb5e-f4a0181b0a69")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
