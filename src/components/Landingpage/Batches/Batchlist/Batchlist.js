import React from "react";
import "./Batchlist.css";
import { Button, Card } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
function Batchlist() {
  return (
    <>
      <Link to={"/batchdetails/:id"}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <span>CLT Flutter Jul23</span>
            </Card.Title>
            <Card.Text>
              <span> No Course</span>
            </Card.Text>
            <Card.Text>No subject</Card.Text>
            <div className="student_add_section my-3">
              <div>
                <Button className="add_student_button" variant="primary">
                  <span>
                    <AddIcon />
                  </span>
                </Button>
              </div>
              <div>
                <span>Add students</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default Batchlist;
