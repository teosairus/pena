// import { useState } from "react";
import Grid from "@mui/material/Grid";

import "./office.css";

function Office() {
  return (
    <>
      <Grid item xs={12}>
        <h2>Ο χώρος μας</h2>
      </Grid>
      <Grid item xs={12} className="office-subtitle">
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
      <Grid className="office-image1" item xs={12} sm={6}></Grid>
      <Grid className="office-text" item xs={12} sm={6}>
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
      <Grid className="office-text" item xs={12} sm={6}>
        <span className="office-text-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
      </Grid>
      <Grid className="office-image2" item xs={12} sm={6}></Grid>

      {/* Photo 3 */}
      <Grid className="office-image3" item xs={12} sm={6}></Grid>
      <Grid className="office-text" item xs={12} sm={6}>
        <span className="office-text-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
      </Grid>
    </>
  );
}
export default Office;
