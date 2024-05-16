import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeBlog,
  removeBlogFromDatabase,
} from "../../tools/action/blogAction";
import { useTranslation } from "react-i18next";
import slugify from "react-slugify";
const Dashboard = () => {
  const { t } = useTranslation();
  const blogs = useSelector((p) => p);
  const dispatch = useDispatch();
  return (
    <div className="container dashboard--section">
      <h1 className="text-center my-3">{t("account.2")}</h1>
      <div className="d-flex align-items-center justify-content-center my-4">
        <div className="col-9">
          <hr />
          <table class="table--shopping--list mb-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t("account.10")}</th>
                <th scope="col">{t("account.11")}</th>
                <th scope="col">{t("account.12")}</th>
                <th scope="col">{t("account.13")}</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item, c) => (
                <tr key={c}>
                  <th scope="row">{c + 1}</th>
                  <td>
                    <img src={item.img} alt={item.title} width={100} />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <Link to={`/dashboard/edit/${slugify(item.title)}`}>
                      <button className="btn btn-outline-warning">
                        {t("account.12")}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(removeBlogFromDatabase(item.id))}
                      className="btn btn-outline-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/dashboard/add" className="link">
            <button className="button">{t("account.14")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
