// import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import "./contactMap.css";

function ContactMap() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <h2>Επικοινωνήστε μαζί μας</h2>
      </Grid>
      <Grid xs={12} className="contactMap-subtitle">
        <span className="contactMap-subtitle-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
        <span className="contactMap-subtitle-text">
          Id aliquet lectus proin nibh nisl. Risus pretium quam vulputate
          dignissim suspendisse. Commodo quis imperdiet massa tincidunt nunc
          pulvinar sapien et. Eget nunc scelerisque viverra mauris in aliquam
          sem fringilla. Tristique nulla aliquet enim tortor at auctor urna. Id
          neque aliquam vestibulum morbi. Aliquam id diam maecenas ultricies mi
          eget mauris pharetra et. Ut tristique et egestas quis ipsum
          suspendisse ultrices gravida.
        </span>
      </Grid>

      <Grid xs={12} sm={6}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.620633810319!2d22.409849477130305!3d40.79235363269098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1357cfea738daa49%3A0x98bafe38e2ab6300!2zUHJvamVjdCDOoM6tzr3OsQ!5e0!3m2!1sel!2sgr!4v1696111477198!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          title="pena-map"
          style={{ border: 0, minHeight: "400px" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </Grid>

      <Grid xs={12} sm={6}>
        <div>
          <h2 className="">ΒΡΕΙΤΕ ΜΑΣ</h2>
          <div className="contactMap-link-container">
            <PlaceIcon />
            <a
              className="contactMap-link"
              href="https://maps.app.goo.gl/QLm8dBsqc29g2ztGA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Καψαμπέλη 31, Γιαννιτσά 58100
            </a>
          </div>
          <div className="contactMap-link-container">
            <LocalPhoneIcon />
            <a
              className="contactMap-link"
              href="tel:+302382025493"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+30) 23820-25493
            </a>
          </div>
          <div className="contactMap-link-container">
            <EmailIcon />
            <a
              className="contactMap-link"
              href="mailto: penaproject@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              penaproject@gmail.com
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
export default ContactMap;
