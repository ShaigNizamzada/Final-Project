export const addBlog = ({ title, desc, img, date_day, date_month }) => ({
  type: "ADD_BLOG",
  blogdata: {
    id: crypto.randomUUID(),
    title,
    img,
    desc,
    date_day,
    date_month,
  },
});

export const removeBlog = ({ id }) => ({
  type: "REMOVE_BLOG",
  id,
});
