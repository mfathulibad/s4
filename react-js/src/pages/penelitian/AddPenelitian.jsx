import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddPenelitianComponent from "../../components/penelitian/AddPenelitianComponent";

function AddPenelitian() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
              <AddPenelitianComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPenelitian;
