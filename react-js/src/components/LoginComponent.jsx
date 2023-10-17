import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LoginComponent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle perubahan input dalam formulir
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle pengiriman formulir
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8082/user/login`,
        formData
      );

      if (response.data != "") {
        const idUser = response.data.id_user;

        Cookies.set("userRole", response.data.role, {
          expires: 1,
        });

        if (response.data.role == "dosen") {
          try {
            const response = await axios.get(
              "http://localhost:8082/user/" + idUser
            );
            Cookies.set("userAuth", response.data, {
              expires: 1,
            });
          } catch (error) {
            console.error("Error fetching data:", error);
          }

          alert("Login Berhasil (Dosen)!");

          navigate("/dosen");

        } else {
          alert("Login Berhasil (Admin)!");
          Cookies.set("userAuth", idUser, {
            expires: 1,
          });
          navigate("/dosen");
        }
      } else {
        alert("Invalid username or password!");
      }
    } catch (error) {
      console.error("Error login data:", error);
    }
  };

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back!</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          placeholder="Enter your Username"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your Password"
                        />
                      </div>
                      <div>
                        <div className="form-check align-items-center"></div>
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4" 
                        >
                          Sign in
                        </button>
                        <Link className="btn btn-danger btn-block" to="/" >Cancel</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginComponent;
