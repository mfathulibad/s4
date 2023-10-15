import React, { useState } from "react";
import NavbarMain from "../../components/main/NavbarMain";
import { Nav, Tab } from "react-bootstrap";
import { useParams } from 'react-router-dom';

function ProfilDosen() {
  const { id } = useParams();
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
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Johnatan Smith
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
                          <p className="text-dark mb-0">Johnatan Smith</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">NIDN</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">0392847281</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Jurusan</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">
                            Teknik Komputer dan Informatika
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Jabatan Fungsional</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">Dosen Tetap</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-dark mb-0">
                            johnatannihh@jtk.ac.id
                          </p>
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
                        <Nav.Link eventKey="tab1">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tab3">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="tab1">
                        <div>Tab 1 content</div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab2">
                        <div>Tab 2 content</div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab3">
                        <div>Tab 3 content</div>
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
    </>
  );
}

export default ProfilDosen;
