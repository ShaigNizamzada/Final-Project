import React from "react";
import ReactDOM from "react-dom";
import "./assets/sass/style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/style.css";
import "swiper/css";
import App from "./App";
import { ModeProvider } from "./context/ModeContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "react-use-cart";
import { addBlog } from "./tools/action/blogAction";
import configureStore from "./tools/store/ConfigureStore";
import { Provider } from "react-redux";

// REDUX START
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  addBlog({
    title:
      "Upcoming freebies: Fabledom. Tales of trades, feuds and partnerships",
    img: "https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/06/wd-vgs-blog-1.jpg.webp",
    desc: "It’s unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value. The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
  })
);
store.dispatch(
  addBlog({
    title:
      "Diablo 4 Patch 1.03 Fixes Nightmare Dungeons and the Endgame XP Grind",
    img: "https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/06/wd-vgs-blog-2.jpg.webp",
    desc: "It’s unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value. The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
  })
);
store.dispatch(
  addBlog({
    title: "Survivor’s Most Bizarre and Beloved Boss Came to Be",
    img: "https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/06/wd-vgs-blog-3.jpg.webp",
    desc: "It’s unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value. The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <ModeProvider>
      <CartProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CartProvider>
    </ModeProvider>
  </ProductProvider>
);
