import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import ListDosen from "../../components/dosen/ListDosen";


function Dosen() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
        <ListDosen />
        <Footer />
      </div>
    </div>
  );
}

export default Dosen;
