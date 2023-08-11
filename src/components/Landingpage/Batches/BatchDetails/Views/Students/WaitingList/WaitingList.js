import { Avatar } from "@mui/material";
import React from "react";
import { Button, Row } from "react-bootstrap";
import MoreVertIcon from "@mui/icons-material/MoreVert";



function WaitingList() {
  return (
    <div>
      <Row className="students_list">
        <div className="student_info">
          <div className="student_avatar">
            <Avatar>K</Avatar>
          </div>
          <div className="student_name">
            <span>Kiran</span>
          </div>
          <div className="student_mob">
            <span>918848321413</span>
          </div>
          <Button className="option_button">
            <MoreVertIcon />
          </Button>
        </div>
      </Row>
    </div>
  );
}

export default WaitingList
