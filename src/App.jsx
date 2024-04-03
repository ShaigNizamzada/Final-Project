import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ModeContext } from "./context/ModeContext";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import Contact from "./pages/Contact";
import Sale from "./pages/Sale";
import Blog from "./pages/Blog";
import Description from "./components/Description";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import FAQs from "./pages/FAQs";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  const [mode] = useContext(ModeContext);
  return (
    <>
      <BrowserRouter>
        <div className={mode}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/campaign" element={<Campaign />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/sale" element={<Sale />}></Route>
            <Route path="/faqs" element={<FAQs />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/changepassword" element={<ChangePassword />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
            <Route path="/sale/:url" element={<ProductDetails />}></Route>
            <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          </Routes>
          <Description />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
