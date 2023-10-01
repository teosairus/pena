// import { useState } from "react";
import Container from "@mui/material/Container";
import ContactMap from "../../widgets/ContactMap";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-map">
        <Container maxWidth="xl">
          <ContactMap />
        </Container>
      </div>
    </div>
  );
}
export default Contact;
