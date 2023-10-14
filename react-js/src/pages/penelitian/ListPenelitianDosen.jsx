import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import ListDosen from "../../components/dosen/ListDosen";
import ListPenelitianDosen from "../../components/penelitian/ListPenelitianDosen";

function penelitian(){
    return (
        <>
          <div id="wrapper">
            <Sidebar />
    
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
    
                <div className="container-fluid">
                <ListPenelitianDosen/>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default penelitian;