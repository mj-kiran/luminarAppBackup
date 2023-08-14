import React from "react";
import "./BatchDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
function Batchdetails() {
  return (
    <Container fluid className="batchdetails_view">
      <Row>
        <div className="batchdetails_view_page">
          <Col md={2} lg={2} xl={2} className="">
            <div className="sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col md={2} lg={1} xl={1}></Col>
          <Col md={8} lg={8} xl={8} className="">
            <div className="renderpages">
              <Outlet />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default Batchdetails;
