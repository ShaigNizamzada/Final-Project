import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import SingleProductSale from "../components/SingleProductSale";
import { useTranslation } from "react-i18next";

const OrderDone = () => {
  document.title = "Thank You";
  const { t } = useTranslation();
  const [product] = useContext(ProductContext);
  return (
    <div className="thankyou">
      <div className="container-fluid mt-4 d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-center thank--you--text mb-3">{t("thankyou.0")}</h2>
        <div className="col-8">
          <p className="text-center">{t("thankyou.1")}</p>
        </div>
        {/* <i class="fa-solid fa-check d-flex align-items-center justify-content-center text-success success--icon my-5"></i> */}
        <iframe
          src="https://lottie.host/embed/1169b291-70b2-4363-9f81-b599225c4065/9yNL07seHA.json"
          title="Bucket list animation"
        ></iframe>
      </div>
      <h3 className="ms-2">{t("thankyou.2")}</h3>
      <div className="col-lg-6 ms-3">
        <div className="row">
          {product.slice(29, 33).map((item) => (
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
  );
};

export default OrderDone;
