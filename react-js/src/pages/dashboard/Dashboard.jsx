import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import ListDosen from "../../components/dosen/ListDosen";
import Penelitian from "../../pages/penelitian/Penelitian";


function Dashboard() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
        <Penelitian />
        <Footer />
      </div>
    </div>
  ); 
}

export default Dashboard;
