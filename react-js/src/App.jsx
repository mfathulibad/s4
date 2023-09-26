import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import Dosen from './pages/dosen/Dosen';
import AddDosen from './pages/dosen/AddDosen';
import EditDosen from './pages/dosen/EditDosen';
import AddMataKuliah from './pages/matakuliah/AddMataKuliah';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/dosen" element = {<Dosen/>} />
          <Route path="/dosen/insert" element = {<AddDosen/>} />
          <Route path="/dosen/edit/:id" element = {<EditDosen/>} />
          <Route path="/matakuliah/insert" element = {<AddMataKuliah/>} />
        </Routes>
    </Router>
  )
}

export default App
