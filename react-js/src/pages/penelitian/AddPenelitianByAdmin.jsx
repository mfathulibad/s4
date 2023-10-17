import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddPenelitianComponentByAdmin from "../../components/penelitian/AddPenelitianComponentByAdmin";

function AddPenelitianByAdmin() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
              <AddPenelitianComponentByAdmin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPenelitianByAdmin;
