// import { useState } from "react";
import Container from "@mui/material/Container";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

import "./home.css";

function Home() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalClass: "home-carousel-img",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      originalClass: "home-carousel-img",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      originalClass: "home-carousel-img",
    },
  ];

  console.log("test");
  return (
    <section className="home-container">
      <div className="home-carousel">
        <Container
          maxWidth="xl"
          sx={{ padding: "unset", paddingLeft: "none", paddingRight: "none" }}
        >
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showThumbnails={false}
            showPlayButton={false}
            showBullets={true}
            autoPlay
            slideInterval={5000}
            slideDuration={1000}
          />
        </Container>
      </div>
    </section>
  );
}
export default Home;
