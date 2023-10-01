// import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./team.css";

function Team() {
  const people = [
    {
      name: "Michele Mille",
      jobTitle: "Owner | Teacher",
      fb: "https://google.gr",
      instagram: "https://google.gr",
      twitter: "https://google.gr",
      linkedIn: "https://google.gr",
    },
    {
      name: "Patricia Knott",
      jobTitle: "Owner | Teacher",
      fb: "https://google.gr",
      instagram: "https://google.gr",
      twitter: "https://google.gr",
      linkedIn: "https://google.gr",
    },
    {
      name: "Sofia Guerra",
      jobTitle: "Owner | Management",
      fb: "https://google.gr",
      instagram: "https://google.gr",
      twitter: "https://google.gr",
      linkedIn: "https://google.gr",
    },
    {
      name: "George Kjaer",
      jobTitle: "Teach",
      fb: "https://google.gr",
      instagram: "https://google.gr",
      twitter: "https://google.gr",
      linkedIn: "https://google.gr",
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <h2>Η ομάδα μας</h2>
      </Grid>
      <Grid xs={12} className="team-subtitle">
        <span className="team-subtitle-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus. Id diam maecenas ultricies
          mi eget mauris pharetra et. Praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Tincidunt arcu non sodales neque.
          Quisque sagittis purus sit amet.
        </span>
        <span className="team-subtitle-text">
          Id aliquet lectus proin nibh nisl. Risus pretium quam vulputate
          dignissim suspendisse. Commodo quis imperdiet massa tincidunt nunc
          pulvinar sapien et. Eget nunc scelerisque viverra mauris in aliquam
          sem fringilla. Tristique nulla aliquet enim tortor at auctor urna. Id
          neque aliquam vestibulum morbi. Aliquam id diam maecenas ultricies mi
          eget mauris pharetra et. Ut tristique et egestas quis ipsum
          suspendisse ultrices gravida.
        </span>
      </Grid>
      {people.map((person) => {
        return (
          <Grid key={person.name} xs={12} sm={6} md={6} lg={3}>
            <div className="team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                  alt={`${person.name}`}
                />
              </div>
              <div className="team-content">
                <h3 className="name">{person.name}</h3>
                <h4 className="title">{person.jobTitle}</h4>
              </div>
              <ul className="social">
                <li>
                  <a
                    href={person.fb}
                    aria-hidden="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href={person.instagram}
                    aria-hidden="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    href={person.twitter}
                    aria-hidden="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </li>

                <li>
                  <a
                    href={person.linkedIn}
                    className="fa fa-linkedin"
                    aria-hidden="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
export default Team;
