import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ModeContext } from "./context/ModeContext";
import About from "./pages/About";
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
import AccountDetails from "./pages/AccountDetails";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/update/AddBlog";
import BlogDetails from "./pages/BlogDetails";
import TopToBtn from "./components/TopToScroll/TopToBtn";
import Checkout from "./pages/Checkout";
import PreLoader from "./components/PreLoader";
import ThankYou from "./pages/ThankYou";
const App = () => {
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  const [mode] = useContext(ModeContext);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <BrowserRouter>
          <div className={mode}>
            <TopToBtn />
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
              <Route path="/sale" element={<Sale />}></Route>
              <Route path="/faqs" element={<FAQs />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route
                path="/changepassword"
                element={<ChangePassword />}
              ></Route>
              <Route
                path="/forgotpassword"
                element={<ForgotPassword />}
              ></Route>
              <Route path="/sale/:url" element={<ProductDetails />}></Route>
              <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
              <Route
                path="/accountdetails"
                element={<AccountDetails />}
              ></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/add" element={<AddBlog />}></Route>
              <Route path="/blog/:slug" element={<BlogDetails />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/thankyou" element={<ThankYou />}></Route>
            </Routes>
            <Description />
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
