import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dosen from "./pages/dosen/Dosen";
import AddDosen from "./pages/dosen/AddDosen";
import EditDosen from "./pages/dosen/EditDosen";
import AddMataKuliah from "./pages/matakuliah/AddMataKuliah";
import Penelitian from "./pages/penelitian/Penelitian";
import AddPenelitian from "./pages/penelitian/AddPenelitian";
import EditPenelitian from "./pages/penelitian/EditPenelitian";
import MataKuliah from "./pages/matakuliah/MataKuliah";
import EditMataKuliah from "./pages/matakuliah/EditMataKuliah";
import Pkm from "./pages/pkm/Pkm";
import AddPkm from "./pages/pkm/AddPkm";
import EditPkm from "./pages/pkm/EditPkm";
import Dashboard from "./pages/dashboard/Dashboard";
import Pendidikan from "./pages/pendidikan/pendidikan";
import AddPendidikan from "./pages/pendidikan/AddPendidikan";
import EditPendidikan from "./pages/pendidikan/EditPendidikan";

import ProtectedRoute from "../ProtectedRoute";
import AdminProtectedRoute from "../AdminProtectedRoute";
import ListPenelitianDosen from "./pages/penelitian/ListPenelitianDosen";
import ListPkm from "./pages/pkm/ListPkm";
import DaftarMataKuliahDosen from "./pages/matakuliah/MataKuliahDosen";


import ProfilDosen from "./pages/main/ProfilDosen";
import NavbarMain from "./components/main/NavbarMain";
import ListDosen from "./pages/main/ListDosen";
import DetailPenelitian from "./pages/main/DetailPenelitian";
import PendidikanDosen from "./pages/pendidikan/PendidikanDosen";
import AddPenelitianByAdmin from "./pages/penelitian/AddPenelitianByAdmin";
import AddPkmbyAdmin from "./pages/pkm/AddPkmbyAdmin";
import AddMataKuliahByAdmin from "./pages/matakuliah/AddMataKuliahByAdmin";



function App() {
  return (

    <Router>
      <Routes>
        
        <Route path="/" element={<ListDosen />} />
        <Route path="/home" element={<ListDosen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<ProfilDosen />} />
        <Route path="/detail_penelitian/:id" element={<DetailPenelitian />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dosen" element={<ProtectedRoute><Dosen /></ProtectedRoute>} />
        <Route path="/dosen/insert" element={<ProtectedRoute><AddDosen /></ProtectedRoute>} />
        <Route path="/dosen/edit/:id" element={<ProtectedRoute><EditDosen /></ProtectedRoute>} />
        <Route path='/matakuliah' element={<ProtectedRoute><MataKuliah /></ProtectedRoute>} />
        <Route path="/matakuliah/:id" element={<ProtectedRoute><DaftarMataKuliahDosen /></ProtectedRoute>} />
        <Route path="/matakuliah/insert" element={<ProtectedRoute><AddMataKuliah /></ProtectedRoute>} />
        <Route path="/matakuliah/edit/:id" element={<ProtectedRoute><EditMataKuliah /></ProtectedRoute>} />
        <Route path="/matakuliah/admin/insert" element={<ProtectedRoute><AddMataKuliahByAdmin /></ProtectedRoute>} />
        <Route path="/penelitian" element={<ProtectedRoute><Penelitian /></ProtectedRoute>} />
        <Route path="/penelitian/:id" element={<ProtectedRoute><ListPenelitianDosen /></ProtectedRoute>} />
        <Route path="/penelitian/insert" element={<ProtectedRoute><AddPenelitian /></ProtectedRoute>} />
        <Route path="/penelitian/edit/:id" element={<ProtectedRoute><EditPenelitian /></ProtectedRoute>} />
        <Route path="/penelitian/admin/insert" element={<ProtectedRoute><AddPenelitianByAdmin /></ProtectedRoute>} />
        <Route path="/pkm" element={<ProtectedRoute><ListPkm /></ProtectedRoute>} />
        <Route path="/pkm/:id" element={<ProtectedRoute><Pkm /></ProtectedRoute>} />
        <Route path="/pkm/insert" element={<ProtectedRoute><AddPkm /></ProtectedRoute>} />
        <Route path="/pkm/edit/:id" element={<ProtectedRoute><EditPkm /></ProtectedRoute>} />
        <Route path="/pkm/admin/insert" element={<ProtectedRoute><AddPkmbyAdmin /></ProtectedRoute>} />
        <Route path="/pendidikan/" element={<ProtectedRoute><Pendidikan /></ProtectedRoute>} />
        <Route path="/pendidikan/:id" element={<ProtectedRoute><PendidikanDosen /></ProtectedRoute>} />
        <Route path="/pendidikan/insert" element={<ProtectedRoute><AddPendidikan /></ProtectedRoute>} />
        <Route path="/pendidikan/edit/:id" element={<ProtectedRoute><EditPendidikan /></ProtectedRoute>} />

           
      </Routes>
    </Router>
  );
}

export default App;