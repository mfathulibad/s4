import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import EditDosenComponent from "../../components/dosen/EditDosenComponent";
import { useParams } from 'react-router-dom';

function EditDosen(){
    const { id } = useParams();
    return(

    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
            <EditDosenComponent id={id}/>
              
            </div>
          </div>
        </div>
      </div>
    </> 
    )
    
}

export default EditDosen;