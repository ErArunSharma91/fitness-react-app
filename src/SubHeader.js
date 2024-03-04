// SubHeader.js
import React from "react";
import Button from "@mui/material/Button";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="subheader">
      <div className="title">
        <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700 }}>
          Your
        </div>
        <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700 }}>
          Fitness Tracker
        </div>
      </div>
      <div style={{ display: "flex", marginRight: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          // onClick={onConnectedDevicesClick}
          style={{
            backgroundColor: "#FF6020",
            borderRadius: "30px",
            width: "251px",
            height: "60px",
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "DM Sans, sans-serif",
            textTransform: "capitalize",
            marginRight: "15px",
          }}
        >
          Connected Devices
        </Button>
        <Button
          variant="contained"
          color="primary"
          // onClick={onStatisticsClick}
          style={{
            backgroundColor: "#F2F2F2",
            borderRadius: "30px",
            width: "151px",
            height: "60px",
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "DM Sans, sans-serif",
            textTransform: "capitalize",
            color: "#000000",
          }}
        >
          Statistics
        </Button>
      </div>
    </div>
  );
};

export default SubHeader;
