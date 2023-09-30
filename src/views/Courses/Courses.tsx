// import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import "./courses.css";

function Courses() {
  return (
    <Grid container className="courses-container" spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="xl">Courses</Container>
      </Grid>
    </Grid>
  );
}
export default Courses;
