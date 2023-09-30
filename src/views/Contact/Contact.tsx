// import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./contact.css";

function Contact() {
  return (
    <Grid container className="contact-container" spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="xl">contact</Container>
      </Grid>
    </Grid>
  );
}
export default Contact;
