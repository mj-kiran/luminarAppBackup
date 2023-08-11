import React from "react";
import "./Videos.css";
import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import VideoList from "./VideoList/VideoList";
function Videos() {
  return (
    <>
      <Container className="batches my-5">
        <Row>
          <Col lg={8}>
            <div className="announce_header">
              <div className="announ">Videos</div>

              {/* new videos button */}

              <div className="new_videos_button">
                <Button className="button_new_videos" variant="primary">
                  <span> Add</span>
                </Button>
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
              <span className="sort">SORT BY</span>
              <div className="sort_div my-2">
                <Form className="my-2">
                  <div className="mb-3">
                    <Form.Check
                      label="Recently Added"
                      name="group1"
                      type="radio"
                      id={1}
                    />
                    <Form.Check
                      label="Name"
                      name="group1"
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
                      name="group1"
                      type="checkbox"
                      id={1}
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
