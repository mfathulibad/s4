import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddPkmComponent from "../../components/pkm/AddPkmComponent";

function AddPkm(){
    return (
        <>
          <div id="wrapper">
            <Sidebar />
    
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
    
                <div className="container-fluid">
                    <AddPkmComponent/>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    
}

export default AddPkm;