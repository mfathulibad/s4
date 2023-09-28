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

      const idUser = response.data.id_user;

      if (response.data != "") {
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
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input
          type="text"
          className="form-control"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <label className="form-label">Username</label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          className="form-control"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <label className="form-label">Password</label>
      </div>
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
}

export default LoginComponent;
