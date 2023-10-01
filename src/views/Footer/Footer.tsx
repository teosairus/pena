// import { useState } from "react";
// import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <Container maxWidth="xl" className="footer-text">
        <span className="footer-text-alignment">
          Copyright &copy; Pena 2023 | Designed by Sairus
        </span>
      </Container>
    </footer>
  );
}
export default Footer;
