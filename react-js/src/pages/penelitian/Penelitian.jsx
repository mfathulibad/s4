import ListPenelitian from "../../components/penelitian/ListPenelitian";
import Footer from "../../components/dashboard/Footer";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

function penelitian(){
    return (
        <div className="wrapper">
          <Sidebar />
    
          <div className="main">
            <Navbar />
            <ListPenelitian/>
            <Footer />
          </div>
        </div>
    );
    
}

export default penelitian;