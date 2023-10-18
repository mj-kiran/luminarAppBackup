import React, { useState } from "react";
import "./Students.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SecurityUpdateOutlinedIcon from "@mui/icons-material/SecurityUpdateOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Outlet, useNavigate } from "react-router-dom";

function Students() {
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);
  const [stShow, setStShow] = useState(false);
  const [activeLink, setActiveLink] = useState("active");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Container className="batches my-5">
        <Row>
          <Col lg={10}>
            <div className="student_header">
              <div className="stu">Students</div>

              {/* search  bar */}

              <div className="space_bar_wrapper">
                <div className="search_icon">
                  <SearchIcon />
                </div>
                <div>
                  <Form className="search_bar d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search Students"
                      className="inputbox me-2"
                      aria-label="Search"
                    />
                  </Form>
                </div>
              </div>

              {/* new student button */}

              <div className="new_batch_button">
                <Button
                  className="button_new_batch"
                  variant="primary"
                  onClick={() => setLgShow(true)}
                >
                  <span> Add Students</span>
                </Button>
                {/* add batch modal */}
              </div>
            </div>
          </Col>
        </Row>
        <br />
        {/* students list */}
        <Row>
          <Col lg={10}>
            <Card>
              <Card.Header className="students_header">
                <div className="stu_div">
                  <Button
                    onClick={() => {
                      handleLinkClick("active");
                      navigate("active");
                    }}
                    className={
                      activeLink === "active"
                        ? "stu_h_button active"
                        : "stu_h_button"
                    }
                  >
                    Active (10)
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    onClick={() => {
                      handleLinkClick("inactive");
                      navigate("inactive");
                    }}
                    className={
                      activeLink === "inactive"
                        ? "stu_h_button active"
                        : "stu_h_button"
                    }
                  >
                    Inactive (1)
                  </Button>
                   <Button
                    onClick={() => {
                      navigate("waitinglist");
                    }}
                    className="stu_h_button"
                  >
                    Waiting List ( )
                  </Button> 
                </div>
                <div className="add_student">
                  <Button className="join_req_button">
                    <span> See join Requests</span>
                  </Button>

                  {/* Add students first modal */}
                  <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="add_manually">
                      <Button
                        className="modal_c"
                        onClick={() => {
                          setLgShow(false);
                          setStShow(true);
                        }}
                      >
                        <AddCircleOutlineRoundedIcon className="modal_addcircle" />
                        <span>Add Students Manually</span>
                      </Button>
                    </Modal.Body>
                    <br />
                    <br />
                    <Modal.Body className="add_manually">
                      <Button className="modal_c">
                        <SecurityUpdateOutlinedIcon className="modal_addcircle" />
                        <span>Add Students From App downloads</span>
                      </Button>
                    </Modal.Body>
                    <br />
                    <br />
                    <Modal.Body className="add_manually">
                      <Button className="modal_c">
                        <CloudUploadOutlinedIcon className="modal_addcircle" />
                        <span>Upload csv files to add students</span>
                      </Button>
                    </Modal.Body>
                  </Modal>
                  {/* add studdents first modal end */}
                  {/* ------------------------------------------------------------------------- */}
                  {/* second modal */}
                  <Modal
                    size="xl"
                    show={stShow}
                    onHide={() => setStShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="">
                      <Form>
                        {/* modal first row */}
                        <Row>
                          <Col>
                            {/* add Students name */}
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Student Name </Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="Enter Student Name"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          <Col>
                            {/* add mobile number */}
                            <Form.Group
                              as={Col}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Mobile Number*</Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="Enter Student Number"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          <Col>
                            {/* add email */}
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Email</Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="Enter Student Email"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                        {/* ------------------------------------------------------------------------------ */}

                        {/* second row */}
                        <Row>
                          <Col>
                            {/* add parent name */}
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Parent Name </Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="Enter Parent Name"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          <Col>
                            {/* add mobile number */}
                            <Form.Group
                              as={Col}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Mobile Number*</Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="Enter Parent Number"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          <Col>
                            {/* add email */}
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Email</Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="Enter Parent Email"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>

                      <div className="modalD_thirdRow">
                        <div className="add_extra_student">
                          <Button className="add_e_button">
                            <div className="add_e">
                              <AddCircleOutlinedIcon />
                            </div>
                            <div> Add Another student</div>
                          </Button>
                        </div>
                      </div>

                      {/* ----------second modal 4th row------------------------ */}
                      <div className="modalD_fourthRow">
                        <div className="ma_field">
                          <span>* Mandatory Fields</span>
                        </div>
                      </div>
                      <br />
                      <br />
                      {/*----------- second modal bottom--------------- */}
                      <div className="modalD_bottom">
                        <div className="verify">
                          <Button
                            className="verify_button"
                            onClick={() => {
                              setStShow(false);
                            }}
                          >
                            <span>Verify</span>
                          </Button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>

                  {/* seond modal end */}
                </div>
              </Card.Header>
              <Card.Body>
                <Outlet />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Students;
