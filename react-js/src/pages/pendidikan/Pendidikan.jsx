import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import ListPendidikan from "../../components/pendidikan/ListPendidikan";


function Pendidikan() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">

              <ListPendidikan/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pendidikan