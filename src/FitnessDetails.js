import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Group from "./Group.png";
import "./FitnessDetals.css";

export default function FitnessDetails() {
  return (
    <>
      <Grid className="cardContainer">
        <Grid item>
          <Card className="card">
            <div className="cardContent">
              <CardMedia
                component="img"
                className="cardImage"
                image={Group}
                alt="Smart Watch"
              />
            </div>
            <CardContent>
              <Typography
                style={{
                  fontSize: "20px",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  marginTop: "12px",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                5,233
              </Typography>
              <Typography
                style={{
                  fontSize: "10px",
                  color: "#FF8250",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Steps
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <div style={{ marginLeft: "20px" }}>
            <Button className="caloriesButton">
              <span>Calories</span>
              <br />
              1200 Kcal
            </Button>
          </div>
          <div style={{ marginLeft: "20px", marginTop: "15px" }}>
            <Button className="waterButton">
              <span>Water</span>
              <br />
              1.8 Ltrs
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
