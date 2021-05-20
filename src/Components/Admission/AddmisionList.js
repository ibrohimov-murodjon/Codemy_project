import React from "react";
import "./Admision.css";
import CheckIcon from "@material-ui/icons/Check";
const AdmissionList = () => {
  return (
    <div className="containerAdmission">
      <div className="blockAdd">
        <div className="admisionFlexBox">
          <div className="adminimg">
            <img src="/images/course_6.jpg" className="mediaImage" alt="" />
          </div>
          <div style={{ height: "100%" }}>
            <div className="addHeaderTit1 relAdd">
              <span className="title">College Requirements</span>

              <p className="addTit1" style={{ fontSize: "1.25rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                itaque dolore libero corrupti! Itaque, delectus?
              </p>

              <p className="addTit" style={{ fontSize: "1.25rem" }}>
                Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                odit placeat nesciunt, voluptatum totam facere.
              </p>
              <div className="addFlex">
                <CheckIcon style={{ color: "#51be78", fontSize: "1.4rem" }} />
                <p className="checkTitle">Accomplished Application Form</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "#51be78", fontSize: "1.4rem" }} />
                <p className="checkTitle">High School Report Card</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "#51be78", fontSize: "1.4rem" }} />
                <p className="checkTitle">High School Transcript</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "#51be78", fontSize: "1.4rem" }} />
                <p className="checkTitle">Certificate of Good Moral Characte</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "#51be78", fontSize: "1.4rem" }} />
                <p className="checkTitle">2×2 picture</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "#51be78", fontSize: "1.4rem" }} />
                <p className="checkTitle">1×1 picture</p>
              </div>
            </div>
          </div>
        </div>
        {/*     Second   Item    */}
        <div className="admisionFlexBox bits" style={{ paddingTop: "100px" }}>
          <div style={{ height: "100%" }}>
            <div className="addHeaderTit paddingRightAdd">
              <span className="title">Transferees</span>

              <p className="addTit1" style={{ fontSize: "1.22rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                itaque dolore libero corrupti! Itaque, delectus?
              </p>

              <p className="addTit" style={{ fontSize: "1.22rem" }}>
                Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                odit placeat nesciunt, voluptatum totam facere.
              </p>
              <div className="addFlex">
                <CheckIcon style={{ color: "green", fontSize: "1.4rem" }} />
                <p className="checkTitle">Accomplished Application Form</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "green", fontSize: "1.4rem" }} />
                <p className="checkTitle">High School Report Card</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "green", fontSize: "1.4rem" }} />
                <p className="checkTitle">High School Transcript</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "green", fontSize: "1.4rem" }} />
                <p className="checkTitle">Certificate of Good Moral Characte</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "green", fontSize: "1.4rem" }} />
                <p className="checkTitle">2×2 picture</p>
              </div>
              <div className="addFlex">
                <CheckIcon style={{ color: "#51be78", fontSize: "1.4rem" }} />
                <p className="checkTitle">1×1 picture</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/course_3.jpg" className="mediaIamge2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionList;
