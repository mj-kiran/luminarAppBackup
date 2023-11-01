import React, { useEffect, useState } from "react";
import "./Batches.css";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  NavDropdown,
  Row,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import Batchlist from "./Batchlist/Batchlist";
// import axios from "axios";
import { createBatch, getBatchlist } from "../../Services/BatchServices";
import { useParams } from "react-router-dom";

function Batches() {
  const [batchmodal, setBatchmodal] = useState(false);
  const [search, setSearch] = useState("");
  const [batches, setBatches] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const { courseId } = useParams();
  const [formData, setFormData] = useState({
    id: 0,
    batch_name: "",
    startdate: "",
    time: "",
    course: courseId,
  });

  useEffect(() => {
    getBatchlist().then((batchList) => {
      setBatches(batchList);
    });
   localStorage.removeItem("activeLink");
    // console.log(batches,"batchlist");
  }, []);
  // sorting Ascending
  const handleSortAscending = () => {
    setSortAsc(true);
    sortBatches(true);
  };

  const handleSortDescending = () => {
    setSortAsc(false);
    sortBatches(false);
  };

  const sortBatches = (ascending) => {
    setBatches(
      [...batches].sort((a, b) => {
        const order = ascending ? 1 : -1;
        return order * (a.id - b.id);
      })
    );
  };
  // create batch

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormSubmit = (event) => {
    //  console.log(event);
    //  event.preventDefault(); 

     createBatch(formData) 
       .then((response) => {
          console.log("Batch created:", response);
         setFormData({
           id: 0,
           batch_name: "",
           startdate: "",
           time: "",
           course: courseId,
         });
 setBatchmodal(false);
       })
       .catch((error) => {
        
         console.error("Error creating batch:", error);
       });
   };

  return (
    <>
      <Container className="batches my-5">
        <Row>
          <div className="batches_header">
            {/* batches number */}
            <div className="batches_num">
              BATCHES ({ batches &&batches.length !== 0 ? batches.length : "0"})
            </div>

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
                    placeholder="Search for Batches"
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
                  {/* <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item> */}
                </NavDropdown>
              </div>
            </div>

            {/* new batch button */}

            <div className="new_batch_button">
              <Button
                className="button_new_batch"
                variant="primary"
                onClick={() => setBatchmodal(true)}
              >
                <span> + Create Batch</span>
              </Button>
              {/* add batch modal */}

              <Modal
                size="lg"
                show={batchmodal}
                onHide={() => setBatchmodal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Create New Batch
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleFormSubmit}>
                    {/*  */}
                    <Row>
                      {/* modal first row */}
                      <Col lg={5} md={4}>
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
                              name="batch_name"
                              value={formData.batch_name}
                              onChange={handleInputChange}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col lg={1} md={1}></Col>
                      {/* add batch code */}

                      <Col lg={5} md={4}>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label sm="2">Time</Form.Label>
                          <div sm="10">
                            <Form.Control
                              className="modal_input"
                              type="text"
                              placeholder="11 am"
                              name="time"
                              value={formData.time}
                              onChange={handleInputChange}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={5} md={4}>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label sm="2">Batch Start Date</Form.Label>
                          <div sm="10">
                            <Form.Control
                              className="modal_input"
                              type="date"
                              name="startdate"
                              value={formData.startdate}
                              onChange={handleInputChange}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col lg={1} md={1}></Col>
                      {/* add coursecode */}

                      <Col lg={5} md={4}>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label sm="2">Course</Form.Label>
                          <div sm="10">
                            <Form.Control
                              className="modal_input"
                              as="select"
                              name="course"
                              value={formData.course}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Course</option>
                              <option value="1">Python</option>
                              <option value="2">Flutter</option>
                              <option value="3">Testing</option>
                              <option value="4">DATA SCIENCE</option>
                              <option value="5">MEA(R)N</option>
                              <option value="6">Asp.Net</option>
                              <option value="7">Java</option>
                            </Form.Control>
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
                    type="submit"
                    onClick={() => {
                      // // Clear form fields
                      // setFormData({
                      //   id: 0,
                      //   batch_name: "",
                      //   startdate: "",
                      //   time: "",
                      //   course: courseId,
                      // });
                      // createBatch(formData);
                      // console.log(formData);
                      //
                      handleFormSubmit();
                      setBatchmodal(false);
                    }}
                  >
                    Create Batch
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Row>

        {/* batches list */}

        <Row className="my-5">
          {batches
            ? batches
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.batch_name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => (
                  <Col key={item.id} lg={3} md={4}>
                    <Batchlist item={item} className="bactchlist" />
                  </Col>
                ))
            : "No Batches Available"}
        </Row>
      </Container>
    </>
  );
}

export default Batches;
