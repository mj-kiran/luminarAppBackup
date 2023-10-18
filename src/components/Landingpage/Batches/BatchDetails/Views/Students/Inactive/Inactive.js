import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import { Button, Row } from 'react-bootstrap';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

function Inactive() {
    const [option, setOption] = useState(false);

  return (
    <>
      <Row className="students_list">
        <div className="student_info">
          <div className="student_avatar">
            <Avatar>A</Avatar>
          </div>
          <div className="student_name">
            <span>Anandhan</span>
          </div>
          <div className="student_mob">
            <span>919876543210</span>
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
            <DownloadDoneIcon />
            &nbsp; Make active in batch
          </div>
        </div>
      )}
    </>
  );
}

export default Inactive