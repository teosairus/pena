// import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Team from "../../widgets/Team";
import "./aboutUs.css";
import Office from "../../widgets/Office";

function AboutUs() {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-team">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Team />
          </Grid>
        </Container>
      </div>
      <div className="aboutUs-office">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Office />
          </Grid>
        </Container>
      </div>
    </div>
  );
}
export default AboutUs;
