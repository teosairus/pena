// import { useState } from "react";
import Container from "@mui/material/Container";
import Team from "../../widgets/Team";
import "./aboutUs.css";
import Office from "../../widgets/Office";

function AboutUs() {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-team">
        <Container maxWidth="xl">
          <Team />
        </Container>
      </div>
      <div className="aboutUs-office">
        <Container maxWidth="xl">
          <Office />
        </Container>
      </div>
      <div className="aboutUs-team-full">
        <span>Our Lovely Team</span>
      </div>
    </div>
  );
}
export default AboutUs;
