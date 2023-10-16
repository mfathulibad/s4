import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import ListPendidikanDosen from "../../components/pendidikan/ListPendidikanDosen";

function PendidikanDosen(){

  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">

              <ListPendidikanDosen/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
    
}

export default PendidikanDosen;
