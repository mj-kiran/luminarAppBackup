import React, { useState } from "react";
import "./Sidebar.css";
import { Button, Container } from "react-bootstrap";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CampaignIcon from "@mui/icons-material/Campaign";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { BiFilm } from "react-icons/bi";
import { RiLiveLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
function Navigations() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = ( link) => {
    
    setActiveLink(link);
  };
const navigate=useNavigate()
  return (
    <Container fluid>
      <div className="navigations_bar">
        <div className="button_row">
          <Button
            className={
              activeLink === "overview"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("overview");
              handleLinkClick("overview");
            }}
          >
            <div className="buttons_navigation">
              <FormatListBulletedIcon />
            </div>
            <span>Overview</span>
          </Button>

          <Button
            className={
              activeLink === "attendance"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("attendance");
              handleLinkClick("attendance");
            }}
          >
            <div className="buttons_navigation">
              <DateRangeIcon />
            </div>
            <span>Attendance</span>
          </Button>

          <Button
            className={
              activeLink === "students"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("students");
              handleLinkClick("students");
            }}
          >
            <div className="buttons_navigation">
              <PeopleOutlineIcon />
            </div>
            <span>Students</span>
          </Button>

          <Button
            className={
              activeLink === "assignments"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("assignments");
              handleLinkClick("assignments");
            }}
          >
            <div className="buttons_navigation">
              <BorderColorIcon />
            </div>
            <span>Assignments</span>
          </Button>

          <Button
            className={
              activeLink === "announcements"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("announcements");
              handleLinkClick("announcements");
            }}
          >
            <div className="buttons_navigation">
              <CampaignIcon />
            </div>
            <span>Announcements</span>
          </Button>
          <Button
            className={
              activeLink === "tests"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("tests");
              handleLinkClick("tests");
            }}
          >
            <div className="buttons_navigation">
              <WorkspacePremiumIcon />
            </div>
            <span>Tests</span>
          </Button>
          <Button
            className={
              activeLink === "videos"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("videos");
              handleLinkClick("videos");
            }}
          >
            <div className="buttons_navigation">
              <BiFilm className="react_icons" />
            </div>

            <span>Videos</span>
          </Button>
          <Button
            className={
              activeLink === "liveclasses"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("liveclasses");
              handleLinkClick("liveclasses");
            }}
          >
            <div className="buttons_navigation">
              <RiLiveLine className="react_icons" />
            </div>
            <span>Live Classes</span>
          </Button>
          <Button
            className={
              activeLink === "studymaterials"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("studymaterials");
              handleLinkClick("studymaterials");
            }}
          >
            <div className="buttons_navigation">
              <AutoStoriesIcon />
            </div>
            <span>Study materials</span>
          </Button>
          <Button
            className={
              activeLink === "settings"
                ? "sidenav_button active"
                : "sidenav_button"
            }
            onClick={() => {
              navigate("settings");
              handleLinkClick("settings");
            }}
            
          >
            <div className="buttons_navigation">
              <SettingsIcon />
            </div>
            <span>Settings</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Navigations;
