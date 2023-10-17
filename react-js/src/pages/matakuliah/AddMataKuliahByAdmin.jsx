import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddMataKuliahComponentByAdmin from "../../components/matakuliah/AddMataKuliahComponentByAdmin";

function AddMataKuliah(){
    return (
        <>
          <div id="wrapper">
            <Sidebar />
    
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
    
                <div className="container-fluid">
    
                    <AddMataKuliahComponentByAdmin/>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      );
    
}

export default AddMataKuliah;