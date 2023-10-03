import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import DaftarMataKuliah from "../../components/matakuliah/DaftarMataKuliah";


function MataKuliah() {
    return (
      <div className="wrapper">
  
        <div className="main">
          <Navbar />
          <DaftarMataKuliah />
          <Footer />
        </div>
      </div>
    );
  }


export default MataKuliah;