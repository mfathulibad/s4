import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import DaftarMataKuliah from "../../components/matakuliah/DaftarMataKuliah";


function MataKuliah() {
    return (
      <div className="wrapper">
        <Sidebar />
  
        <div className="main">
          <Navbar />
          <DaftarMataKuliah />
          <Footer />
        </div>
      </div>
    );
  }


export default MataKuliah;