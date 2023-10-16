import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import EditPkmComponent from "../../components/pkm/EditPkmComponent";
import { useParams } from 'react-router-dom';

function EditPkm(){
    const { id } = useParams();
    return(

        <>
          <div id="wrapper">
            <Sidebar />
    
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
    
                <div className="container-fluid">
                <EditPkmComponent id={id}/>
                  
                </div>
              </div>
            </div>
          </div>
        </> 
        )
    
}

export default EditPkm;