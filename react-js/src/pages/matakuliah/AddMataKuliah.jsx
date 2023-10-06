import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddMataKuliahComponent from "../../components/matakuliah/AddMataKuliahComponent";

function AddMataKuliah(){
    return (
        <>
          <div id="wrapper">
            <Sidebar />
    
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
    
                <div className="container-fluid">
    
                    <AddMataKuliahComponent/>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      );
    
}

export default AddMataKuliah;