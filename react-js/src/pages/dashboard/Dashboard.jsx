import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

function Dashboard() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
      </div>
    </div>
  );
}

export default Dashboard;
