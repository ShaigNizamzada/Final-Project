import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeBlog } from "../../tools/action/blogAction";
const Dashboard = () => {
  const blogs = useSelector((p) => p);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 className="text-center my-3">Dashboard</h1>
      <div className="d-flex align-items-center justify-content-center my-4">
        <div className="col-9">
          <Link to="/dashboard/add">
            <button className="button">Add Blog</button>
          </Link>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Title</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
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
                    <button className="btn btn-outline-warning">Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(removeBlog({ id: item.id }))}
                      className="btn btn-outline-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
