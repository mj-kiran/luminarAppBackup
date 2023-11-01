import React, {  useEffect, useState } from "react";
import "./Courses.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  NavDropdown,
  Row,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import CourseList from "./CourseList/CourseList";
import axios from "axios";
import {getCourses}from '../../Services/CourseServices'

function Courses() {
  const [coursemodal, setCoursemodal] = useState(false);
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    full_name: "",
    cochin: "",
    calicut: "",
    online_fees: "",
    offline_fees: "",
    modules: [{ mod_heading: "", topicName: "", syllabus: "" }],
  });


  
  useEffect(() => {
    getCourses().then((Courses) => {
      setCourses(Courses);
    });
    
    
  }, []);

  
  // sorting Ascending
  const handleSortAscending = () => {
    setSortAsc(true);
    sortCourses(true);
  };

  const handleSortDescending = () => {
    setSortAsc(false);
    sortCourses(false);
  };

  const sortCourses = (ascending) => {
    setCourses(
      [...courses].sort((a, b) => {
        const order = ascending ? 1 : -1;
        // return order * (a.id - b.id);
         return order * a.title.localeCompare(b.title);
      })
    );
  };

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
        { mod_heading: "", topicName: "", syllabus: "" },
      ],
    }));
  };

  // Form submit
 const handleFormSubmit = (event) => {
   if (event) {
     event.preventDefault();

     console.log("Form submitted with data:", formData);

     setFormData({
       title: "",
       description: "",
       duration: "",
       full_name: "",
       cochin: "",
       calicut: "",
       online_fees: "",
       offline_fees: "",
       modules: [{ mod_heading: "", topicName: "", syllabus: "" }],
     });

     // Close the modal
     setCoursemodal(false);
   }
 };


  return (
    <>
      <Container className="courses my-5">
        <Row>
          <div className="batches_header">
            {/* courses number */}
            <div className="courses_num">Courses ({courses.length})</div>

            {/* search  bar */}

            <div className="space_bar_wrapper">
              <div className="search_icon">
                <SearchIcon />
              </div>
              <div>
                <Form className="search_bar d-flex">
                  <Form.Control
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    type="search"
                    placeholder="Search for Course"
                    className="inputbox me-2"
                    aria-label="Search"
                  />
                </Form>
              </div>
            </div>
            {/* sort */}
            <div className="sort">
              <div className="sort_icon">
                <SortIcon />
              </div>
              <div className="nav_sort">
                <NavDropdown
                  className="sort_button"
                  id="nav-dropdown-dark-example"
                  title="Sort"
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={handleSortAscending}>
                    Ascending
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleSortDescending}>
                    Descending
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>

            {/* new course button */}

            <div className="new_course_button">
              <Button
                className="button_new_course"
                variant="primary"
                onClick={() => setCoursemodal(true)}
              >
                <span> + Create a Course</span>
              </Button>
              {/* add course modal */}

              <Modal
                size="lg"
                show={coursemodal}
                onHide={() => setCoursemodal(false)}
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
                        {/* add course name */}
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
                              name="title"
                              value={formData.title}
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
                              name="description"
                              value={formData.description}
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
                            <Card.Text className="ms-5">
                              Upload Thumbnail
                            </Card.Text>
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
                          <Form.Label sm="2">
                            Course Start Date(Cochin)
                          </Form.Label>
                          <div sm="10">
                            <Form.Control
                              className="modal_input"
                              type="date"
                              placeholder=""
                              name="cochin"
                              value={formData.cochin}
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
                          <Form.Label sm="2">
                            Course Start Date(Calicut)
                          </Form.Label>
                          <div sm="10">
                            <Form.Control
                              className="modal_input"
                              type="date"
                              placeholder=""
                              name="calicut"
                              value={formData.calicut}
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
                              name="duration"
                              value={formData.duration}
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
                              name="online_fees"
                              value={formData.online_fees}
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
                              name="offline_fees"
                              value={formData.offline_fees}
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
                                  name="mod_heading"
                                  value={module.mod_heading}
                                  onChange={(e) =>
                                    handleInputChange(e, moduleIndex)
                                  }
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
                                  onChange={(e) =>
                                    handleInputChange(e, moduleIndex)
                                  }
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
                                  onChange={(e) =>
                                    handleInputChange(e, moduleIndex)
                                  }
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
                      <Button
                        className="mod_add_button"
                        onClick={handleAddModule}
                      >
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
                      setCoursemodal(false);
                    }}
                  >
                    Create
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Row>

        {/* batches list */}

        <Row className="my-5">
          {courses
            ? courses
                .filter((item) => {
                  if (!search) {
                    return true; // Return all courses if search is empty
                  } else if (
                    item.title &&
                    item.title.toLowerCase().startsWith(search.toLowerCase())
                  ) {
                    return true;
                  }
                  return false; // Exclude courses that don't match the search
                })
                .map((course) => (
                  <Col lg={3} md={4} key={course.id}>
                    <CourseList item={course} />
                  </Col>
                ))
            : "error"}
        </Row>
      </Container>
    </>
  );
}

export default Courses;
