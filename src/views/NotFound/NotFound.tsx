// import { useState } from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import il404 from "../../assets/images/404.svg";
import { Button } from "@mui/material";
import "./notFound.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound-container">
      <div className="notFound-test">
        <Container maxWidth="xl">
          <div className="notFound-img-container">
            <img className="notFound-img" src={il404} alt="404-not-found" />
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/");
              }}
            >
              ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default NotFound;
