import EditPkmComponent from "../../components/pkm/EditPkmComponent";
import { useParams } from 'react-router-dom';

function EditPkm(){
    const { id } = useParams();
    return <EditPkmComponent id={id}/>
    
}

export default EditPkm;