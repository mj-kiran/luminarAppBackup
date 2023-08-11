import React, { useState } from "react";
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
// import { useDispatch } from "react-redux";

function Batches() {
  const [batch, setBatch] = useState(false);
  const [search, setSearch] = useState("");
  // const dispatch=useDispatch()
  return (
    <>
      <Container className="batches my-5">
        <Row>
          <div className="batches_header">
            {/* batches number */}
            <div className="batches_num">BATCHES(306)</div>

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
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>

            {/* new batch button */}

            <div className="new_batch_button">
              <Button
                className="button_new_batch"
                variant="primary"
                onClick={() => setBatch(true)}
              >
                <span> + Create Batch</span>
              </Button>
              {/* add batch modal */}

              <Modal
                size="lg"
                show={batch}
                onHide={() => setBatch(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Create New Batch
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
                          <Form.Label sm="2">Batch Start Date</Form.Label>
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
                    Create Batch
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Row>

        {/* batches list */}

        <Row className="my-5">
          <Batchlist />
        </Row>
      </Container>
    </>
  );
}

export default Batches;
