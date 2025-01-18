import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("Hello");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/32fc6906-e557-4465-bf63-be0959db26f3")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
