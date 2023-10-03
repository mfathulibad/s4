import ListPenelitian from "../../components/penelitian/ListPenelitian";
import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import ListDosen from "../../components/dosen/ListDosen";

function penelitian(){
    return (
      <div className="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">

              <div id="content">

              <div className="container-fluid">
                <ListPenelitian/>
              </div>
                
              </div>
        </div>
      </div>
    );
    
}

export default penelitian;