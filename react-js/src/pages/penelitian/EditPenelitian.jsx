import { useParams } from 'react-router-dom';
import EditPenelitianComponent from '../../components/penelitian/EditPenelitianComponent';

function EditPenelitian(){
    const { id } = useParams();
    return <EditPenelitianComponent id={id}/>
    
}

export default EditPenelitian;