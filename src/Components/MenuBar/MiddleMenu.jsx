import React from "react";
import Link from "@material-ui/core/Link";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./MiddleMenu.css";

function MiddleImage(props) {
  return (
    <div className="CustomBreadCrumns">
      <div className="MiddleImgContainer">
        <Link href="/" className="HomeText">
          Home
        </Link>
        <ChevronRightIcon className="middleMenuIcon" />
        <span className="PathOfAbout">{props.currentPath}</span>
      </div>
    </div>
  );
}

export default MiddleImage;
