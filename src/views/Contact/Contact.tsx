// import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ContactMap from "../../widgets/ContactMap";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-map">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <ContactMap />
          </Grid>
        </Container>
      </div>
      {/* <div className="contact-office">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Office />
          </Grid>
        </Container>
      </div> */}
    </div>
  );
}
export default Contact;
