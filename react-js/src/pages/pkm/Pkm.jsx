import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import ListPkm from "../../components/pkm/ListPkm";
import Footer from "../../components/dashboard/Footer";

function Pkm(){

  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">

              <ListPkm/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
    
}

export default Pkm;
