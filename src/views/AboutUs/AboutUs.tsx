// import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./aboutUs.css";

function AboutUs() {
  return (
    <Grid container className="aboutUs-container" spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="xl">aboutUs</Container>
      </Grid>
    </Grid>
  );
}
export default AboutUs;
