import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function AdminProtectedRoute({ children }) {
  const userRole = Cookies.get("userRole");

  if (userRole != "admin") {
    // Pengguna belum login, arahkan ke halaman login
    alert("Unauthorized !")
    return <Navigate to="/home" />;
  }

  // Pengguna sudah login, izinkan akses ke halaman yang dilindungi
  return children;
}

export default AdminProtectedRoute;
