// import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./home.css";

function Home() {
  return (
    <Grid container className="home-container" spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="xl">Home</Container>
      </Grid>
    </Grid>
  );
}
export default Home;
