import React from 'react'
import './VideoList.css'
import { Card } from 'react-bootstrap';
import FolderIcon from "@mui/icons-material/Folder";

function VideoList() {
  return (
    <>
      <Card className="videos_list my-3">
        <Card.Body>
          <div className="videos_body">
            <div className="folder_div">
              <FolderIcon className="folder_icon" />
            </div>
            <div>
              <Card.Text>test1</Card.Text>
              <Card.Text>Luminar Technolab</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* -------------------------------- */}
      <Card className="videos_list my-3">
        <Card.Body>
          <div className="videos_body">
            <div className="folder_div">
              <FolderIcon className="folder_icon" />
            </div>
            <div>
              <Card.Text>test1</Card.Text>
              <Card.Text>Luminar Technolab</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* -------------------------------- */}
      <Card className="videos_list my-3">
        <Card.Body>
          <div className="videos_body">
            <div className="folder_div">
              <FolderIcon className="folder_icon" />
            </div>
            <div>
              <Card.Text>test1</Card.Text>
              <Card.Text>Luminar Technolab</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default VideoList