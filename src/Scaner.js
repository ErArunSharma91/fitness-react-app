import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Watch from "./Watch.png";
import "./Scaner.css";

export default function Scaner() {
  return (
    <>
      <Grid spacing={2} className="cardContainer">
        <Card className="card1"></Card>
        <Card className="card2"></Card>
        <Card className="card3">
          <CardContent>
            <Typography className="cardContentTitle">Smart Watch</Typography>
            <Typography className="cardContentSubTitle">Fire Boltt</Typography>
            <Typography className="cardContentDescription">
              Scan the device <br />
              QR to connect
            </Typography>
          </CardContent>

          <CardActions>
            <Button className="scanButton">Scan</Button>
          </CardActions>
        </Card>
        {/* <div style={{ zIndex: "1", marginLeft: "108px", marginTop: "21px" }}>
          <img src={Watch} alt="watch" maxWidth="322" height="322" />
        </div> */}
        <div className="watchImageContainer">
          <img src={Watch} alt="watch" style={{ width: "100%" }} />
        </div>
      </Grid>
    </>
  );
}
