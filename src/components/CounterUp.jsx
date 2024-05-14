import React, { useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import ScrollTrigger from "react-scroll-trigger";
const CounterUp = () => {
  const { t } = useTranslation();
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="container counter--on">
        <div className="row g-4">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            {" "}
            <div className="counter--on--section d-flex justify-content-center align-items-center flex-column">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={40} duration={2} delay={0} />
                )}
                +
              </h1>
              <p className="fs-3 text-center mt-3">{t("counterup.0")}</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            {" "}
            <div className="counter--on--section d-flex justify-content-center align-items-center flex-column">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={200} duration={2} delay={0} />
                )}
                +
              </h1>
              <p className="fs-3 text-center mt-3">{t("counterup.1")}</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            {" "}
            <div className="counter--on--section d-flex justify-content-center align-items-center flex-column">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={195} duration={2} delay={0} />
                )}
                +
              </h1>
              <p className="fs-3 text-center mt-3">{t("counterup.2")}</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            {" "}
            <div className="counter--on--section d-flex justify-content-center align-items-center flex-column">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={60} duration={2} delay={0} />
                )}
                +
              </h1>
              <p className="fs-3 text-center mt-3">{t("counterup.3")}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUp;
