import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Container, Box, Div } from "./styles";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ButtonA } from "./styles";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 100,
  width: 50,
  [theme.breakpoints.down("sm")]: {
    width: "90% !important", // Overrides inline-style
    height: 5,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "3px solid currentColor",
    },
  },
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#947EB0",
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 2,
  width: 10,
  backgroundColor: "#947EB0",
  position: "absolute",
  bottom: -2,
  left: "calc(60% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Header = ({ setAbout }) => {
  const history = useHistory();

  const handleClick = (event) => {
    if (event === "setAbout") {
      setAbout(true);
      history.push("/#about");
    }
    if (event === "setTech") {
      history.push("/#technologies");
    }
    if (event === "setProject") {
      history.push("/#projects");
    }
  };

  return (
    <Container>
      <Box>
        <Div></Div>
        <ButtonA href="#about">
          <ImageButton
            onClick={() => handleClick("setAbout")}
            focusRipple
            key={"AboutMe"}
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 2,
                  pt: 1,
                  pb: (theme) => `calc(${theme.spacing(1)} + 15px)`,
                  fontFamily: "",
                }}
              >
                ABOUT ME
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </ButtonA>
        <ButtonA href="#technologies">
          <ImageButton
            onClick={() => handleClick("setTech")}
            focusRipple
            key={"Technologies"}
            style={{
              width: "140px",
              height: "100px",
            }}
          >
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 3,
                  pt: 1,
                  pb: (theme) => `calc(${theme.spacing(1)} + 15px)`,
                  fontFamily: "",
                }}
              >
                TECHNOLOGIES
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </ButtonA>
        <ButtonA href="#projects">
          <ImageButton
            onClick={() => handleClick("setProject")}
            focusRipple
            key={"Projects"}
            style={{
              width: "140px",
              height: "100px",
            }}
          >
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 3,
                  pt: 1,
                  pb: (theme) => `calc(${theme.spacing(1)} + 15px)`,
                  fontFamily: "",
                }}
              >
                PROJECTS
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </ButtonA>
      </Box>
    </Container>
  );
};
export default Header;
