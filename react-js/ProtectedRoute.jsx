import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children }) {
  const userAuth = Cookies.get("userAuth");

  if (!userAuth) {
    // Pengguna belum login, arahkan ke halaman login
    alert("Silahkan Login Terlebih Dahulu !")
    return <Navigate to="/login" />;
  }

  // Pengguna sudah login, izinkan akses ke halaman yang dilindungi
  return children;
}

export default ProtectedRoute;
