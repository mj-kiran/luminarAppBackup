import './Active.css'
import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import { Button, Row } from 'react-bootstrap';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function Active() {
  const [option,setOption]=useState(false)
  return (
    <>
      <Row className="students_list">
        <div className="student_info">
          <div className="student_avatar">
            <Avatar>A</Avatar>
          </div>
          <div className="student_name">
            <span>Anand C B</span>
          </div>
          <div className="student_mob">
            <span>919074834662</span>
          </div>
          <Button
            className="option_button"
            onClick={() => {
              setOption(!option);
            }}
          >
            <MoreVertIcon />
          </Button>
        </div>
      </Row>
      {option && (
        <div className="options p-1">
          <div className="options_list p-1">
            <DeleteIcon /> &nbsp; Remove from batch
          </div>
          <div className="options_list p-1">
            <RemoveCircleOutlineIcon />
            &nbsp; Make inactive in batch
          </div>
        </div>
      )}
    </>
  );
}

export default Active