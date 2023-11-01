import React, { useRef, useState } from "react";
import "./Videos.css";
import { Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import VideoList from "./VideoList/VideoList";
function Videos() {
  const [video, setVideo] = useState(false);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  return (
    <>
      <Container className="batches my-5">
        <Row>
          <Col lg={8}>
            <div className="announce_header">
              <div className="announ">Videos</div>

              {/* new videos button */}

              <div className="new_videos_button">
                <Button
                  className="button_new_videos"
                  variant="primary"
                  onClick={() => {
                    setVideo(!video);
                  }}
                >
                  <span> Add</span>
                </Button>
                {/* modal for adding videos */}
                <Modal
                  size="lg"
                  show={video}
                  onHide={() => setVideo(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Youtube Link
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      {/* add video title */}
                      <input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        ref={fileRef}
                        hidden
                        accept="image/*"
                      />
                      <Col xs={6} md={4}>
                        <Image
                          onClick={() => fileRef.current.click()}
                          src="https://blog.doographics.com/uploads/images/202106/image_750x_60be0aa236492.jpg"
                          thumbnail
                        />
                      </Col>
                      <Form.Group
                        // as={Col}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label sm="2">Title</Form.Label>
                        <div sm="10">
                          <Form.Control
                            className="modal_input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </Form.Group>
                      <Form.Group
                        // as={Col}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label sm="2">Description</Form.Label>
                        <div sm="10">
                          <Form.Control
                            className="modal_input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label sm="2">Link</Form.Label>
                        <div sm="10">
                          <Form.Control
                            className="modal_input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </Form.Group>
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
                              value=""
                              // onChange={handleInputChange}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer className="footer_button">
                    <Button variant="primary">Add Video</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="my-2">
          <Col lg={8}>
            <div className="video_secondRow">
              <div className="video_num">TOTAL (0)</div>
              <div className="space_bar_wrapper">
                <div className="search_icon">
                  <SearchIcon className="search_i" />
                </div>
                <div>
                  <Form className="search_bar d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search videos"
                      className="inputbox me-2"
                      aria-label="Search"
                    />
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        {/* Video list */}
        <Row>
          <Col lg={8}>
            <VideoList />
          </Col>
          <Col lg={4}>
            <Row>
              <span className="sortvideos">SORT BY</span>
              <div className="sort_div my-2">
                <Form className="my-2">
                  <div className="mb-3">
                    <Form.Check
                      label="Recently Added"
                      name="sortgroup"
                      type="radio"
                      id={1}
                    />
                    <Form.Check
                      label="Name"
                      name="sortgroup"
                      type="radio"
                      id={2}
                    />
                  </div>
                </Form>
              </div>
            </Row>
            <Row className="my-3">
              <span className="filter">FILTER BY</span>
              <div className="filter_div my-2">
                <Form className="my-2">
                  <div className="mb-3">
                    <Form.Check
                      label="Uncategorized"
                      name="filtergroup"
                      type="checkbox"
                      id={3}
                    />
                  </div>
                </Form>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Videos;
