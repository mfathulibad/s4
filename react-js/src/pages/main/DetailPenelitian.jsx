import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarMain from "../../components/main/NavbarMain";
import { useParams, Link } from "react-router-dom";

function DetailPenelitian() {
  const [penelitian, setPenelitian] = useState([]);
  const [author, setAuthor] = useState([]);
  const [key, setKey] = useState("tab1");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8082/penelitian/${id}`
        );
        setPenelitian(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchAuthor() {
      try {
        const response = await axios.get(
          `http://localhost:8082/riwayat_penelitian/authors/${id}`
        );
        setAuthor(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchAuthor();
    fetchData();
  }, []);

  return (
    <>
      <NavbarMain />
      <div className="container">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={{ pathname: `/home` }}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {penelitian.judul_penelitian}
                  </li>
                </ol>
              </nav>
            </div>

            <div className="row mx-5">
              <div className="col-6">
                <h3>Abstract</h3>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  bibendum in sem suscipit tristique. Donec non ex quis sem
                  bibendum imperdiet vel id mauris. Nunc ultricies, justo sit
                  amet consectetur eleifend, lacus urna vulputate mauris, vitae
                  hendrerit purus orci iaculis libero. Etiam eu diam lobortis
                  lectus aliquam vulputate. Fusce pretium egestas mi quis
                  vestibulum. Vivamus dolor lectus, cursus vitae augue id,
                  mattis vulputate nibh. Fusce eu neque risus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Integer
                  ultricies porta commodo.
                </p>
                <br />
                <p>
                  Curabitur vestibulum id dolor in mattis. Donec at leo et justo
                  fermentum cursus. Pellentesque varius, ligula nec imperdiet
                  finibus, est nisl feugiat nibh, in efficitur dui ante et
                  massa. Nullam id interdum diam. Maecenas quam sem, gravida vel
                  porttitor quis, tempor ut sapien. Vestibulum blandit ipsum
                  dolor, id pharetra justo dapibus vitae. Cras feugiat nunc non
                  nibh porta, et fermentum leo elementum. Mauris ac ex lorem.
                  Nullam consectetur a velit eget blandit. Nulla sit amet mauris
                  at nulla efficitur rutrum.
                </p>
              </div>
              <div className="col-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col-sm-4">
                            <p className="mb-0">Judul Penelitian</p>
                          </div>
                          <div className="col-sm-8">
                            <p className="text-dark mb-0">
                              {penelitian.judul_penelitian}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-4">
                            <p className="mb-0">Author</p>
                          </div>
                          <div className="col-sm-8">
                            <p className="text-dark mb-0">
                              {author.map((dosen, index) => (
                                <span key={index}>
                                  <Link to={"/profile/" + dosen.id_dosen} target="_blank">{dosen.nama_lengkap}</Link>
                                  {index !== author.length - 1 && ", "}
                                </span>
                              ))}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-4">
                            <p className="mb-0">Bidang Penelitian</p>
                          </div>
                          <div className="col-sm-8">
                            <p className="text-dark mb-0">
                              {penelitian.bidang_penelitian}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-4">
                            <p className="mb-0">Tanggal Penelitian</p>
                          </div>
                          <div className="col-sm-8">
                            <p className="text-dark mb-0">
                              {penelitian.tgl_penelitian}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-4">
                            <p className="mb-0">E-Journal</p>
                          </div>
                          <div className="col-sm-8">
                            <Link to={penelitian.url}>{penelitian.url}</Link>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-4">
                            <p className="mb-0">File PDF</p>
                          </div>
                          <div className="col-sm-8">
                            <p className="text-dark mb-0">
                              <td style={{ maxWidth: '200px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                <a href={`http://localhost:8082/penelitian/download-pdf/${penelitian.id_penelitian}`} target="_blank" rel="noopener noreferrer">{penelitian.path_pdf}</a>
                              </td>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPenelitian;
