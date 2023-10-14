// import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import office1 from "../../assets/images/office1.jpg";
import office2 from "../../assets/images/office2.jpg";
import office3 from "../../assets/images/office3.jpg";
import "./office.css";

function Office() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <h2>Ο χώρος μας</h2>
      </Grid>
      <Grid xs={12} className="office-subtitle">
        <span className="office-subtitle-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
        <span className="office-subtitle-text">
          Id aliquet lectus proin nibh nisl. Risus pretium quam vulputate
          dignissim suspendisse. Commodo quis imperdiet massa tincidunt nunc
          pulvinar sapien et. Eget nunc scelerisque viverra mauris in aliquam
          sem fringilla. Tristique nulla aliquet enim tortor at auctor urna. Id
          neque aliquam vestibulum morbi. Aliquam id diam maecenas ultricies mi
          eget mauris pharetra et. Ut tristique et egestas quis ipsum
          suspendisse ultrices gravida.
        </span>
      </Grid>
      {/* Photo 1 */}
      <Grid className="office-image-container" xs={12} sm={6}>
        <img className="office-image" src={office1} alt="office-1" />
      </Grid>
      <Grid className="office-text" xs={12} sm={6}>
        <span className="office-text-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
      </Grid>
      {/* Photo2 */}
      <Grid
        className="office-container"
        xs={12}
        sx={{
          display: { xs: "flex", sm: "none" },
        }}
      >
        <img className="office-image" src={office2} alt="office-2a" />
      </Grid>
      <Grid className="office-text" xs={12} sm={6}>
        <span className="office-text-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
      </Grid>
      <Grid
        className="office-container"
        xs={12}
        sm={6}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <img className="office-image" src={office2} alt="office-2" />
      </Grid>

      {/* Photo 3 */}
      <Grid className="office-image-container" xs={12} sm={6}>
        <img className="office-image" src={office3} alt="office-3" />
      </Grid>
      <Grid className="office-text" xs={12} sm={6}>
        <span className="office-text-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
      </Grid>
    </Grid>
  );
}
export default Office;
