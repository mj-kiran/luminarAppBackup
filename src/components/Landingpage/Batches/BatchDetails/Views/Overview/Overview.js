import React, { useState } from "react";
import "./Overview.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TagIcon from "@mui/icons-material/Tag";
import AddIcon from "@mui/icons-material/Add";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Avatar } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SecurityUpdateOutlinedIcon from "@mui/icons-material/SecurityUpdateOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
function Overview() {
  const [batch, setBatch] = useState(false)
  const [faculty, setFaculty] = useState(false);
  const [student, setStudent] = useState(false);
  const [stShow, setStShow] = useState(false);
  return (
    <Container>
      <Row className="my-5">
        <Col lg={7} className="leftpart_timeline">
          <div className="left_part_firstrow">
            <div>
              <Card>
                <Card.Body>
                  <Card.Title className="demo_batch_title">
                    <span>Demo Batch</span>
                    <span>
                      <Button
                        onClick={() => {
                          setBatch(true);
                        }}
                        className="batch_edit_button"
                      >
                        Edit
                      </Button>
                      {/* start */}

                      {/* update batch modal */}

                      <Modal
                        size="lg"
                        show={batch}
                        onHide={() => setBatch(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-modal-sizes-title-lg">
                            Edit Batch
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Row>
                              {/* modal first row */}
                              <Col lg={4} md={4}>
                                {/* add batch name */}
                                <Form.Group
                                  // as={Col}
                                  className="mb-3"
                                  controlId="formPlaintextPassword"
                                >
                                  <Form.Label sm="2">Batch Name</Form.Label>
                                  <div sm="10">
                                    <Form.Control
                                      className="modal_input"
                                      type="text"
                                      placeholder="e.g.Physics Batch"
                                    />
                                  </div>
                                </Form.Group>
                              </Col>
                              <Col lg={1} md={1}></Col>
                              {/* add batch code */}

                              <Col lg={4} md={4}>
                                <Form.Group
                                  as={Col}
                                  className="mb-3"
                                  controlId="formPlaintextPassword"
                                >
                                  <Form.Label sm="2">Batch Code</Form.Label>
                                  <div sm="10">
                                    <Form.Control
                                      className="modal_input"
                                      type="text"
                                      placeholder="e.g.Phy123"
                                    />
                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={6} md={4}>
                                <Form.Group
                                  as={Row}
                                  className="mb-3"
                                  controlId="formPlaintextPassword"
                                >
                                  <Form.Label sm="2">
                                    Batch Start Date
                                  </Form.Label>
                                  <div sm="10">
                                    <Form.Control
                                      className="modal_input"
                                      type="date"
                                      placeholder="e.g.Phy123"
                                    />
                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            className="createBatch_button"
                            variant="primary"
                            onClick={() => setBatch(false)}
                          >
                            Save
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      {/* end */}

                      <Button className="batch_remove_button">
                        <MoreVertIcon />
                      </Button>
                    </span>
                  </Card.Title>

                  <div className="demo_Batch_firstRow my-3">
                    <div className="start_date_section">
                      <div className="start_date_icon">
                        <DateRangeIcon />
                      </div>
                      <div className="start_date-labels">
                        <div className="start_label_firstrow">
                          Batch Start Date
                        </div>
                        <div className="start_label_secondrow">2023/07/11</div>
                      </div>
                    </div>

                    <div className="start_date_section">
                      <div className="start_date_icon">
                        <TagIcon />
                      </div>
                      <div className="start_date-labels">
                        <div className="start_label_firstrow">Batch Code</div>
                        <div className="start_label_secondrow">Dbbe65</div>
                      </div>
                    </div>
                  </div>
                  {/* demo batch second row */}
                  <div className="demo_Batch_secondrow my-3">
                    <div className="start_date_section">
                      <div className="start_date_icon">
                        <DateRangeIcon />
                      </div>
                      <div className="start_date-labels">
                        <div className="start_label_firstrow">Course</div>
                        <div className="start_label_secondrow">
                          <Button className="add_course">Add Course</Button>
                        </div>
                      </div>
                    </div>

                    <div className="start_date_section">
                      <div className="start_date_icon">
                        <TagIcon />
                      </div>
                      <div className="start_date-labels">
                        <div className="start_label_firstrow">Category</div>
                        <div className="start_label_secondrow">No Category</div>
                      </div>
                    </div>
                  </div>
                  {/* third row */}
                  <div className="demo_Batch_secondrow my-3">
                    <div className="start_date_section">
                      <div className="start_date_icon">
                        <DateRangeIcon />
                      </div>
                      <div className="start_date-labels">
                        <div className="start_label_firstrow">Subject</div>
                        <div className="start_label_secondrow">
                          <Button className="add_course">Add Subject</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* timeline left part second row */}
          <div className="second_Row my-4">
            <div>
              <Card>
                <Card.Body>
                  <Card.Title className="demo_batch_timings">
                    <span>Batch Timings</span>
                    <div className="add_batch_timing">
                      <Button className="batch_timings_add_button">
                        <AddIcon />
                        <span> Add</span>
                      </Button>
                    </div>
                  </Card.Title>

                  <div className="demo_Batch_timings_firstRow my-3">
                    <div className="batch_days">
                      <div className="day_buttons">
                        <Button className="day_button">Sunday</Button>
                        <Button className="day_button">Monday</Button>
                        <Button className="day_button">Tuesday</Button>
                        <Button className="day_button">Wednesday</Button>
                        <Button className="day_button">Thursday</Button>
                        <Button className="day_button">Friday</Button>
                        <Button className="day_button">Saturday</Button>
                      </div>
                    </div>
                    <div className="timing_list">
                      <div>
                        <DateRangeIcon />
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* left part third row */}
          <div className="third_Row my-4">
            <Card>
              <Card.Header className="students_header">
                <span> Students (2)</span>
                <div className="add_student">
                  <Button
                    className="students_add_button"
                    onClick={() => setStudent(true)}
                  >
                    <AddIcon />
                    <span> Add</span>
                  </Button>

                  {/* Add students first modal */}
                  <Modal
                    size="lg"
                    show={student}
                    onHide={() => setStudent(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="add_manually">
                      <Button
                        className="modal_c"
                        onClick={() => {
                          setStudent(false);
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
                        {/* modal first row add Students detail */}
                        <Row>
                          {/* add Students name */}
                          <Col>
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
                          {/* add mobile number */}
                          <Col>
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

                          {/* add email */}

                          <Col>
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

                        {/*------------------------ second row-----------parent detail--------- */}
                        <Row>
                          {/* add parent name */}
                          <Col>
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
                          {/* add mobile number */}
                          <Col>
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
                          {/* add email */}
                          <Col>
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
                        {/* --------------------------------------------second modal 3rd row from here--------------------------------------- */}
                        <Row>
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
                        </Row>
                        {/* ----------second modal 4th row------------------------ */}

                        <Row>
                          <div className="ma_field">
                            <span>* Mandatory Fields</span>
                          </div>
                        </Row>
                        {/*----------- second modal bottom--------------- */}
                        <Row>
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
                        </Row>
                      </Form>
                    </Modal.Body>
                  </Modal>

                  {/* seond modal end */}
                </div>
              </Card.Header>
              <Card.Body>
                <Row className="students_list">
                  <div className="student_info">
                    <div className="student_avatar">
                      <Avatar>A</Avatar>
                    </div>
                    <div className="student_name">
                      <span>Anand C B</span>
                    </div>
                    <div className="student_mob">
                      <span>919074834662</span>
                    </div>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>
          {/* fourth_row */}
          <div className="fourth_Row my-4">
            <Card>
              <Card.Header className="faculity_header">
                <span> Faculty( )</span>
                <div className="add_faculty">
                  <Button onClick={() => {
                    setFaculty(true)
                  }} className="faculty_add_button">
                    <AddIcon />
                    <span> Add</span>
                  </Button>

                  {/* add faculty modal */}

                  <Modal
                    size="lg"
                    show={faculty}
                    onHide={() => setFaculty(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Add Faculty
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Row>
                          {/* modal first row */}
                          <Col lg={6} md={6}>
                            {/* add batch name */}
                            <Form.Group
                              // as={Col}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Faculty Name</Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="enter Faculty name"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          <Col lg={1} md={1}></Col>
                          {/* add batch code */}

                          <Col lg={4} md={4}>
                            <Form.Group
                              as={Col}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Mobile Number</Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="enter mobile number"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={6} md={4}>
                            <Form.Group
                              as={Row}
                              className="mb-3"
                              controlId="formPlaintextPassword"
                            >
                              <Form.Label sm="2">Faculty Email</Form.Label>
                              <div sm="10">
                                <Form.Control
                                  className="modal_input"
                                  type="text"
                                  placeholder="enter email"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className="createBatch_button"
                        variant="primary"
                        onClick={() => setFaculty(false)}
                      >
                        Add
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  {/* end */}
                </div>
              </Card.Header>
              <Card.Body>
                <Row className="faculty_list">
                  <div className="faculty_info">
                    <div className="faculty_avatar"></div>
                    <div className="faculty_name"></div>
                    <div className="faculty_mob"></div>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>

        {/* right part timeline */}
        <Col lg={5} className="rightpart_timeline">
          <div className="right_part_first_row">
            <Card>
              <Card.Header className="live_classes_card_header">
                Live Classes
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <span className="liveclass_text">
                    Now you can go live for your students & teach them anytime,
                    anywhere !
                  </span>
                </Card.Text>
                <Button variant="primary" className="Go_live_button">
                  GO LIVE NOW
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* right part second row */}

          <div className="right_part_second_row my-3">
            <Card>
              <Card.Header className="zoom_classes_card_header">
                <div className="zoom_app">
                  <Button className="zoomapp_button">
                    <span>
                      <VideocamIcon />
                    </span>
                  </Button>
                </div>
                <div>Zoom Classes</div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <span className="zoomclass_text">
                    Start your Zoom class and send notifications to students
                  </span>
                </Card.Text>
                <Button variant="primary" className="Start_class_button">
                  Start Class
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* right part third row */}
          <div className="right_part_third_row my-3">
            <Card>
              <Card.Header>
                <div className="announcement_card_header">
                  <div>Recent Announcements</div>
                  <div className="announce_button">
                    <Button className="create_announce_button">
                      <span>Create</span>
                    </Button>
                  </div>
                </div>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Overview;
