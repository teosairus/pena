// import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./notFound.css";

function NotFound() {
  return (
    <Grid container className="notFound-container" spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="xl">notFound</Container>
      </Grid>
    </Grid>
  );
}
export default NotFound;
