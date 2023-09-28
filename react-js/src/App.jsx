import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dosen from "./pages/dosen/Dosen";
import AddDosen from "./pages/dosen/AddDosen";
import EditDosen from "./pages/dosen/EditDosen";
import AddMataKuliah from "./pages/matakuliah/AddMataKuliah";
import Penelitian from "./pages/penelitian/Penelitian";
import AddPenelitian from "./components/penelitian/AddPenelitianComponent";
import MataKuliah from "./pages/matakuliah/MataKuliah";
import EditMataKuliah from "./pages/matakuliah/EditMataKuliah";
import EditPenelitian from "./pages/penelitian/EditPenelitian";
import Pkm from "./pages/pkm/Pkm";
import AddPkm from "./pages/pkm/AddPkm";
import EditPkm from "./pages/pkm/EditPkm";
import ProtectedRoute from "../ProtectedRoute";
import AdminProtectedRoute from "../AdminProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dosen" element={<Dosen />} />
        <Route path="/dosen/insert" element={<AddDosen />} />
        <Route path="/dosen/edit/:id" element={<EditDosen />} />
        <Route path="/matakuliah" element={<MataKuliah />} />
        <Route path="/matakuliah/insert" element={<AddMataKuliah />} />
        <Route path="/matakuliah/edit/:id" element={<EditMataKuliah />} />
        <Route path="/penelitian" element={<Penelitian />} />
        <Route path="/penelitian/insert" element={<AddPenelitian />} />
        <Route path="/penelitian/edit/:id" element={<EditPenelitian />} />
        <Route path="/pkm" element={<Pkm />} />
        <Route path="/pkm/insert" element={<AddPkm />} />
        <Route path="/pkm/edit/:id" element={<EditPkm />} />
      </Routes>
    </Router>

    //--Protected--
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/login" element={<Login />} />

    //     <Route
    //       path="/dosen"
    //       element={
    //         <ProtectedRoute>
    //           <AdminProtectedRoute>
    //             <Dosen />
    //           </AdminProtectedRoute>
    //         </ProtectedRoute>
    //       }
    //     />

    //   </Routes>
    // </Router>
  );
}

export default App;
