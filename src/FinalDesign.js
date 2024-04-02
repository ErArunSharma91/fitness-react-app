import React from "react";
import arrow from "./arrow.png";
import profile from "./profile.png";
import Watch from "./Watch.png";
import "./Scaner.css";

export default function FinalDesign() {
  return (
    <>
      {/* <div class="container-sm">100% wide until small breakpoint</div>
      <div class="container-md">100% wide until medium breakpoint</div>
      <div class="container-lg">100% wide until large breakpoint</div>
      <div class="container-xl">100% wide until extra large breakpoint</div>
      <div class="container-xxl">
        100% wide until ext30ra extra large breakpoint
      </div> */}
      <div
        class="container text-center"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {/* Login and Back Button */}

        <div class="row" style={{ textAlign: "left" }}>
          <div class="col">
            <button
              type="button"
              class="btn  rounded-circle"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                width: "60px",
                height: "60px",
              }}
            >
              <img src={arrow} alt="Back" />
            </button>
          </div>
          <div class="col" style={{ textAlign: "right" }}>
            <button
              type="button"
              class="btn  rounded-circle"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                width: "60px",
                height: "60px",
              }}
            >
              <img
                src={profile}
                alt="Back"
                style={{ marginLeft: "-13px", marginTop: "-7px" }}
              />
            </button>
          </div>
        </div>

        {/* main title */}

        <div
          class="row"
          style={{
            textAlign: "left",
            marginTop: "25px",
          }}
        >
          <div class="col" style={{ fontSize: "36px", fontWeight: "bold" }}>
            Your <br />
            Fitness Tracker
          </div>
        </div>

        {/* connected Devices Buttons */}

        <div class="row" style={{ marginTop: "20px" }}>
          <div class="col-8" style={{ textAlign: "left" }}>
            <button
              type="button"
              class="btn btn-lg btn-block "
              style={{
                borderRadius: "30px",
                backgroundColor: "#FF6020",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Connected Devices
            </button>
            <br />
          </div>
          <div class="col-4" style={{ textAlign: "right" }}>
            <button
              type="button"
              class="btn  btn-lg btn-block"
              style={{
                borderRadius: "30px",
                backgroundColor: "#F2F2F2",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Statistics
            </button>
          </div>
        </div>
        {/* smart Watch Scaner */}
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            class="card"
            style={{
              marginTop: "25px",
              height: "255px",
              width: "368px",
              backgroundColor: "#FFE3D8",
              border: "none",
              borderRadius: "30px",
              top: 0, // Position the card at the top
              position: "absolute",
            }}
          ></div>
          <div
            class="card"
            style={{
              marginTop: "25px",
              height: "255px",
              width: "398px",
              backgroundColor: "#FFBFA6",
              border: "none",
              borderRadius: "30px",
              top: "20px",
              position: "absolute",
            }}
          ></div>

          <div
            class="card"
            style={{
              marginTop: "25px",
              height: "255px",
              width: "418px",
              backgroundColor: "#2F2F2F",
              border: "none",
              borderRadius: "30px",
              top: "40px",
              position: "absolute",
              textAlign: "left",
              boxShadow: "rgba(0, 0, 0, 0.9) 0px 47px 29px -13px",
            }}
          >
            <p
              class="card-text"
              style={{
                marginTop: "20px",
                color: "#FF8250",
                fontSize: "13px",
                fontWeight: "600",
                // marginLeft: "12px",
              }}
            >
              Smart Watch
            </p>
            <h5
              class="card-title"
              style={{
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: "-14px",
                // marginLeft: "12px",
              }}
            >
              Fire Boltt
            </h5>
            <p
              class="card-text"
              style={{
                fontSize: "10px",
                fontFamily: "DM Sans, sans-serif",
                color: "#FFFFFF",
                marginTop: "72px",
                // marginLeft: "12px",
              }}
            >
              Scan the device <br />
              QR to connect
            </p>
            <button
              type="button"
              class="btn btn-lg  "
              style={{
                borderRadius: "30px",
                backgroundColor: "#FF6020",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "600",
                width: "110px",
                height: "49px",
              }}
            >
              Scan
            </button>
          </div>

          <div className="image-container">
            <img src={Watch} alt="watch" />
          </div>
        </div>

        <div class="row" style={{ marginTop: "30px" }}>
          <div class="col">1 of 2</div>
          <div class="col">2 of 2</div>
        </div>
      </div>
    </>
  );
}
