import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddPkmComponentbyAdmin from "../../components/pkm/AddPkmComponentbyAdmin";

function AddPkm(){
    return (
        <>
          <div id="wrapper">
            <Sidebar />
    
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
    
                <div className="container-fluid">
                    <AddPkmComponentbyAdmin/>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    
}

export default AddPkm;