import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import DaftarMataKuliah from "../../components/matakuliah/DaftarMataKuliah";


function MataKuliah() {
    return (
      <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">

              <DaftarMataKuliah/>
              
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }


export default MataKuliah;