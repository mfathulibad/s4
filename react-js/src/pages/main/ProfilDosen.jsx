import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarMain from "../../components/main/NavbarMain";
import { Nav, Tab } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { MDBDataTable, MDBDataTableV5 } from "mdbreact";

function ProfilDosen() {
  const [dosen, setDosen] = useState({});
  const [pkm, setPkm] = useState([]);
  const [penelitian, setPenelitian] = useState([]);
  const [pengajaran, setPengajaran] = useState([]);
  const [key, setKey] = useState("tab1");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8082/dosen/${id}`);
        setDosen(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchDataPkm() {
      try {
        const response = await axios.get(
          `http://localhost:8082/pkm/dosen/${id}`
        );
        setPkm(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchDataPenelitian() {
      try {
        const response = await axios.get(
          `http://localhost:8082/penelitian/dosen/${id}`
        );
        setPenelitian(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function fetchDataPengajaran() {
      try {
        const response = await axios.get(
          `http://localhost:8082/matakuliah/dosen/${id}`
        );

        const sortedData = response.data.sort((a, b) => {
          const semesterA = splitSemester(a.semester);
          const semesterB = splitSemester(b.semester);

          if (semesterA.Tahun !== semesterB.Tahun) {
            return semesterA.Tahun - semesterB.Tahun;
          }

          // Jika tahunnya sama, maka urutkan berdasarkan semester
          if (
            semesterA.Semester === "Ganjil" &&
            semesterB.Semester === "Genap"
          ) {
            return -1;
          }
          if (
            semesterA.Semester === "Genap" &&
            semesterB.Semester === "Ganjil"
          ) {
            return 1;
          }
          return 0;
        });
        setPengajaran(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataPengajaran();
    fetchDataPenelitian();
    fetchDataPkm();
    fetchData();
  }, []);

  const columnsPkm = [
    {
      label: "Judul Pengabdian",
      field: "judul_pengabdian",
      sort: "asc",
    },
    {
      label: "Bidang Pengabdian",
      field: "bidang_pengabdian",
      sort: "asc",
    },
    {
      label: "URL",
      field: "url",
      sort: "asc",
    },
  ];

  const rowsPkm = pkm.map((data) => {
    return {
      judul_pengabdian: data.judul_pengabdian,
      bidang_pengabdian: data.bidang_pengabdian,
      url: (
        <Link to={data.url} target="_blank" rel="noopener noreferrer">
          {data.url}
        </Link>
      ),
    };
  });

  const columnsPenelitian = [
    {
      label: "Judul Penelitian",
      field: "judul_penelitian",
      sort: "asc",
    },
  ];

  const rowsPenelitian = penelitian.map((data) => {
    return {
      judul_penelitian: (
        <Link
          to={"/detail_penelitian/" + data.id_penelitian}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.judul_penelitian}
        </Link>
      ),
    };
  });

  const columnsPengajaran = [
    {
      label: "Semester",
      field: "semester",
      sort: "asc",
    },
    {
      label: "Kode Mata Kuliah",
      field: "id_mata_kuliah",
      sort: "asc",
    },
    {
      label: "Nama Mata Kuliah",
      field: "nama_mata_kuliah",
      sort: "asc",
    },
    {
      label: "Kode Kelas",
      field: "kode_kelas",
      sort: "asc",
    },
    {
      label: "Perguruan Tinggi",
      field: "perguruan_tinggi",
      sort: "asc",
    },
  ];

  // Fungsi pemisah untuk memisahkan tahun dan semester
  const splitSemester = (semester) => {
    const parts = semester.split(" ");
    return {
      Tahun: parseInt(parts[0]),
      Semester: parts[1],
    };
  };

  const rowsPengajaran = pengajaran.map((data) => {
    return {
      semester: data.semester,
      id_mata_kuliah: data.id_mata_kuliah,
      bidang_pengabdian: data.bidang_pengabdian,
      nama_mata_kuliah: data.nama_mata_kuliah,
      kode_kelas: data.kode_kelas,
      perguruan_tinggi: data.perguruan_tinggi,
    };
  });

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
                    {dosen.nama_lengkap}
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row mx-5">
            <div className="col">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 d-flex justify-content-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        // style={{ width: 150 }}
                      />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Nama Lengkap</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">{dosen.nama_lengkap}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">NIDN</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">{dosen.nidn}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Jurusan</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">{dosen.jurusan}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Jabatan Fungsional</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">
                            {dosen.jabatan_fungsional}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">{dosen.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mx-5">
            <div className="col">
              <div className="card mb-4">
                <div className="card-body px-5">
                  <h5 className="text-dark mt-3 mb-4">Riwayat Pendidikan</h5>
                  <h5 className="text-dark">D4</h5>
                  <p className="text-dark">
                    Politeknik Negeri Bandung, Bandung - Indonesia
                    <br />
                    1985
                  </p>

                  <h5 className="text-dark">S2</h5>
                  <p className="text-dark">
                    ITB, Bandung - Indonesia
                    <br />
                    1991
                  </p>

                  <h5 className="text-dark">S3</h5>
                  <p className="text-dark">
                    Institute National Polytechnique de Grenoble, Grenoble -
                    Perancis
                    <br />
                    2004
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mx-5">
            <div className="col">
              <div className="card mb-4">
                <div className="card-body">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
                    <Nav variant="tabs" onSelect={(k) => setKey(k)}>
                      <Nav.Item>
                        <Nav.Link eventKey="tab1">Riwayat Pengajaran</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab2">Riwayat PKM</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab3">Riwayat Penelitian</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="tab1">
                        <div>
                          <MDBDataTable
                            data={{
                              columns: columnsPengajaran, // Kosongkan array columns agar label kolom tidak ditampilkan
                              rows: rowsPengajaran, // Masukkan data mentah ke dalam array rows
                            }}
                            searching={false}
                            entries={10}
                            entriesOptions={[10, 20, 50]}
                            noBottomColumns
                            // hover
                            displayEntries={false}
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab2">
                        <div
                          style={{ borderRadius: "10px", overflow: "hidden" }}
                        >
                          <MDBDataTable
                            data={{
                              columns: columnsPkm, // Kosongkan array columns agar label kolom tidak ditampilkan
                              rows: rowsPkm, // Masukkan data mentah ke dalam array rows
                            }}
                            searching={false}
                            entries={10}
                            entriesOptions={[10, 20, 50]}
                            noBottomColumns
                            // hover
                            displayEntries={false}
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab3">
                        <div
                          style={{ borderRadius: "10px", overflow: "hidden" }}
                        >
                          <MDBDataTable
                            data={{
                              columns: columnsPenelitian, // Kosongkan array columns agar label kolom tidak ditampilkan
                              rows: rowsPenelitian, // Masukkan data mentah ke dalam array rows
                            }}
                            searching={false}
                            entries={10}
                            entriesOptions={[10, 20, 50]}
                            noBottomColumns
                            hover
                            displayEntries={false}
                          />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  {/* ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="/js/table.js"></script>
    </>
  );
}

export default ProfilDosen;
