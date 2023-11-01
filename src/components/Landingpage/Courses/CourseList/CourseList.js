import React, { useState } from "react";
import "./CourseList.css";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CourseList({ item }) {
  const [updateCoursemodal, setUpdatecoursemodal] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    startDateCochin: "",
    startDateCalicut: "",
    courseDuration: "",
    onlineFee: "",
    offlineFee: "",
    modules: [{ moduleName: "", topicName: "", syllabus: "" }],
  });
  const navigate = useNavigate();

  // create new Course

  const handleInputChange = (event, moduleIndex) => {
    const { name, value } = event.target;

    if (moduleIndex === undefined) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      const newModules = [...formData.modules];
      newModules[moduleIndex][name] = value;
      setFormData((prevData) => ({
        ...prevData,
        modules: newModules,
      }));
    }
  };

  // delete module
  const handleDeleteModule = (moduleIndex) => {
    const newModules = [...formData.modules];
    newModules.splice(moduleIndex, 1);
    setFormData((prevData) => ({
      ...prevData,
      modules: newModules,
    }));
  };
  // add module
  const handleAddModule = () => {
    setFormData((prevData) => ({
      ...prevData,
      modules: [
        ...prevData.modules,
        { moduleName: "", topicName: "", syllabus: "" },
      ],
    }));
  };

  // Form submit
  const handleFormSubmit = (event) => {
    if (event) {
      event.preventDefault();

      console.log("Form submitted with data:", formData);

      setFormData({
        courseName: "",
        courseDescription: "",
        startDateCochin: "",
        startDateCalicut: "",
        courseDuration: "",
        onlineFee: "",
        offlineFee: "",
        modules: [{ moduleName: "", topicName: "", syllabus: "" }],
      });

      // Close the modal
      setUpdatecoursemodal(false);
    }
  };
  return (
    <>
      {/* <Link to={`batches/:id`}> */}
      <Card className="my-3 p-3 rounded courselist">
        <Card.Body
          onClick={() => {
            navigate(`/courses/${item.id}/batches`);
          }}
        >
          <Card.Title>
            <span>{item.title}</span>
          </Card.Title>
          <Card.Text>
            <div className="subheading"> Next Batch</div>
          </Card.Text>
          <Card.Text>
            <span> Calicut :</span>
            <span> &nbsp; {item.calicut_date}</span>
          </Card.Text>
          <Card.Text>
            <span> Cochin :</span>
            <span> &nbsp;{item.cochin_date}</span>
          </Card.Text>
        </Card.Body>
        {/* -----------------update section----------------------- */}
        <Row>
          <Col lg={4} md={2} />
          <Col>
            <Button
              className="update_button"
              variant="primary"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setUpdatecoursemodal(true);
              }}
            >
              <span>
                Update &nbsp;
                <AddCircleIcon className="icon_update" />
              </span>
            </Button>
          </Col>
        </Row>
        {/*--------------------------------- update course modal--------------------------------------------- */}
        <Modal
          size="lg"
          show={updateCoursemodal}
          onHide={() => setUpdatecoursemodal(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Create New Course
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Row>
                {/* modal first row */}
                <Col lg={6} md={6}>
                  {/* update course name */}
                  <Form.Group
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label sm="2">Course Name</Form.Label>
                    <div sm="10">
                      <Form.Control
                        className="modal_input"
                        type="text"
                        placeholder=""
                        name="courseName"
                        value={formData.courseName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                  {/* add course description */}
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label sm="2">Course Description</Form.Label>
                    <div sm="10">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="modal_input"
                        type=""
                        placeholder=""
                        name="courseDescription"
                        value={formData.courseDescription}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={1} md={1}></Col>

                <Col lg={4} md={4}>
                  <Card className="thumbnail">
                    <Card.Body>
                      <Card.Img src="https://icon-library.com/images/thumbnail-icon/thumbnail-icon-13.jpg" />
                      <Card.Text className="ms-5">Upload Thumbnail</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <div className="subheadings">Next Batch</div>
              <br />
              <Row>
                <Col lg={6} md={4}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label sm="2">Course Start Date(Cochin)</Form.Label>
                    <div sm="10">
                      <Form.Control
                        className="modal_input"
                        type="date"
                        placeholder=""
                        name="startDateCochin"
                        value={formData.startDateCochin}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={6} md={4}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label sm="2">Course Start Date(Calicut)</Form.Label>
                    <div sm="10">
                      <Form.Control
                        className="modal_input"
                        type="date"
                        placeholder=""
                        name="startDateCalicut"
                        value={formData.startDateCalicut}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <Form.Group
                    // as={Col}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label sm="2">Course Duration</Form.Label>
                    <div sm="10">
                      <Form.Control
                        className="modal_input"
                        type="text"
                        placeholder=""
                        name="courseDuration"
                        value={formData.courseDuration}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group
                    // as={Col}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label sm="2">Online Fee</Form.Label>
                    <div sm="10">
                      <Form.Control
                        className="modal_input"
                        type="text"
                        placeholder=""
                        name="onlineFee"
                        value={formData.onlineFee}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group
                    // as={Col}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label sm="2">Offline Fee</Form.Label>
                    <div sm="10">
                      <Form.Control
                        className="modal_input"
                        type="text"
                        placeholder=""
                        name="offlineFee"
                        value={formData.offlineFee}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              {/*---------------------------------------------module section-------------------------------------------------------------  */}
              <div className="subheadings">Syllabus Details</div>
              <br />
              {formData.modules.map((module, moduleIndex) => (
                <div key={moduleIndex}>
                  <Row className="bg-grey">
                    <Col lg={6} md={6}>
                      {/* add Module name */}
                      <Form.Group
                        // as={Col}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label sm="2">Module Name</Form.Label>
                        <div sm="10">
                          <Form.Control
                            className="modal_input"
                            type="text"
                            placeholder=""
                            name="moduleName"
                            value={module.moduleName}
                            onChange={(e) => handleInputChange(e, moduleIndex)}
                          />
                        </div>
                      </Form.Group>
                      {/* add topic name */}
                      <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label sm="2">Topic Name</Form.Label>
                        <div sm="10">
                          <Form.Control
                            className="modal_input"
                            type="text"
                            placeholder=""
                            name="topicName"
                            value={module.topicName}
                            onChange={(e) => handleInputChange(e, moduleIndex)}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6}>
                      {/* syllabus */}
                      <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label sm="2">Syllabus</Form.Label>
                        <div sm="10">
                          <Form.Control
                            as="textarea"
                            rows={4}
                            className="modal_input"
                            type=""
                            placeholder=""
                            name="syllabus"
                            value={module.syllabus}
                            onChange={(e) => handleInputChange(e, moduleIndex)}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Row className="del_sec">
                      <Button
                        className="mod_del_button"
                        onClick={() => handleDeleteModule(moduleIndex)}
                      >
                        Delete
                      </Button>
                    </Row>
                  </Row>
                </div>
              ))}

              <br />
              <br />

              <Row className="add_sec">
                <Button className="mod_add_button" onClick={handleAddModule}>
                  Add New Module
                </Button>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer className="course_foot">
            <Button
              className="createCourse_button"
              variant="primary"
              onClick={() => {
                console.log(formData);
                setUpdatecoursemodal(false);
              }}
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
      {/* </Link> */}
    </>
  );
}

export default CourseList;
