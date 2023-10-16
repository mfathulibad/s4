import NavbarMain from "../../components/main/NavbarMain";
import DosenCards from "../../components/main/DosenCards";
import axios from "axios";
import React, { useEffect, useState } from "react";


function ListDosen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8082/dosen");
        setData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <NavbarMain />
      <div className="container">
        <h1 className="text-center p-3 m-3" style={{ textTransform: "uppercase", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Daftar Dosen</h1>
        <div className="row">
          {data.map((dosen, index) => (
            <div className="col-3 mb-3 mt-3" key={index}>
                <DosenCards dosen={dosen} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListDosen;
