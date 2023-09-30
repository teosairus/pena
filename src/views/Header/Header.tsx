import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/logo.svg";

import "./header.css";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const navigate = useNavigate();
  const pages = ["Αρχικη", "Μαθηματα", "Σχετικα με μας", "Επικοινωνια"];

  const handleCloseNavMenu = (index: number) => {
    setAnchorElNav(null);
    if (index === 0) {
      navigate("/");
    }
    if (index === 1) {
      navigate("/courses");
    }
    if (index === 2) {
      navigate("/about-us");
    }
    if (index === 3) {
      navigate("/contact");
    }
  };

  //   const navigate = useNavigate();

  return (
    <AppBar position="static" className="header-container">
      <Container maxWidth="xl" sx={{ width: 1, height: 1 }}>
        <Toolbar disableGutters sx={{ width: 1, height: 1 }}>
          {/* Mobile */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              ml: 1,
              width: 1,
              height: 1,
            }}
            className="header-mobile-logo"
            onClick={() => navigate("/")}
          >
            <img className="header-logo" src={logo} alt="logo" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(index)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/*  Desktop View */}

          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            className="header-desktop-logo"
            onClick={() => navigate("/")}
          >
            <img className="header-logo" src={logo} alt="logo" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            className="header-desktop-navigation"
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(index)}
                sx={{ my: 2, display: "block" }}
                className="header-desktop-navigation-button"
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            className="header-desktop-menu"
          ></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
