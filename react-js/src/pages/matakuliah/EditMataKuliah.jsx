import EditMataKuliahComponent from "../../components/matakuliah/EditMataKuliahComponent"; // Import the correct component
import { useParams } from 'react-router-dom';

function EditMataKuliah() {
  const { id } = useParams();
  return <EditMataKuliahComponent id={id} />; // Render the correct component
}

export default EditMataKuliah;
