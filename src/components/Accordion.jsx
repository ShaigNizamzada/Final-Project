import React from "react";
import { Collapse } from "antd";
const textOne = `
A seemingly elegant design can quickly begin to bloat with unexpected content or break under the weight of actual activity. Fake data can ensure a nice looking layout but it doesn’t reflect what a living, breathing application must endure. Real data does.
`;
const textTwo = `Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it’s about controlling hundreds of articles, product pages for web shops.
`;
const textThree = `If the copy becomes distracting in the design then you are doing something wrong or they are discussing copy changes. It might be a bit annoying but you could tell them that that discussion would be best suited for another time. At worst the discussion is at least working towards the final goal of your site where questions about lorem ipsum don’t.`;
const items = [
  {
    key: "1",
    label: "Why choose organic cotton fabrics and cerified factories?",
    children: <p>{textOne}</p>,
  },
  {
    key: "2",
    label: "How is your product packaged?",
    children: <p>{textTwo}</p>,
  },
  {
    key: "3",
    label: "What is the best size to buy for a baby shower gift?",
    children: <p>{textThree}</p>,
  },
];
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return <Collapse items={items} onChange={onChange} />;
};
export default App;
