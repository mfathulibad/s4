import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import DaftarMataKuliahDosen from "../../components/matakuliah/DaftarMataKuliahDosen";

function MataKuliah(){

  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">

              <DaftarMataKuliahDosen/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
    
}

export default MataKuliah;
