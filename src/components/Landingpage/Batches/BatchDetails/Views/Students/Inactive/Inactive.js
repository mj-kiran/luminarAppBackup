import { Avatar } from '@mui/material';
import React from 'react'
import { Button, Row } from 'react-bootstrap';
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Inactive() {
  return (
    <div>
      <Row className="students_list">
        <div className="student_info">
          <div className="student_avatar">
            <Avatar>A</Avatar>
          </div>
          <div className="student_name">
            <span>Anandhan</span>
          </div>
          <div className="student_mob">
            <span>919074834662</span>
          </div>
          <Button className="option_button">
            <MoreVertIcon />
          </Button>
        </div>
      </Row>
    </div>
  );
}

export default Inactive