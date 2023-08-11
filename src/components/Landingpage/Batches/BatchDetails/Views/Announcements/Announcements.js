import React, { useState } from "react";
import "./Announcements.css";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import AnnouncementList from "./AnnouncementList/AnnouncementList";

function Announcements() {
  const [announcement, setAnnouncement] = useState(false);
  return (
    <>
      <Container className="batches my-5">
        <Row>
          <Col lg={12}>
            <div className="announce_header">
              <div className="announ">Announcements</div>

              {/* search  bar */}

              {/* new student button */}

              <div className="new_batch_button">
                <Button
                  className="button_new_batch"
                  variant="primary"
                  onClick={() => setAnnouncement(true)}
                >
                  <span> Create Announcements</span>
                </Button>
                {/* add batch modal */}
                <Modal
                  show={announcement}
                  onHide={() => setAnnouncement(false)}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Make an Announcement
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <div className="announce_modal_body">
                        <div className="luminar_logo_area">
                          <img
                            className="luminar_logob"
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>Luminar Technolab</h6>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          className="announce_area"
                          as="textarea"
                          placeholder="Make an announcement"
                          rows={3}
                        />
                      </Form.Group>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      onClick={() => {
                        setAnnouncement(false);
                      }}
                    >
                      Post
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="my-3">
          <div className="space_bar_wrapper">
            <div className="search_icon">
              <SearchIcon className="search_i" />
            </div>
            <div>
              <Form className="search_bar d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search announcements"
                  className="inputbox me-2"
                  aria-label="Search"
                />
              </Form>
            </div>
          </div>
        </Row>
        <br />
        {/* Announce list */}
        <Row>
          <Col lg={12}>
            <AnnouncementList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Announcements;
