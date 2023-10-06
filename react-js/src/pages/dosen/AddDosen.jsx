import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddDosenComponent from "../../components/dosen/AddDosenComponent";

function AddDosen() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
              <AddDosenComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDosen;
