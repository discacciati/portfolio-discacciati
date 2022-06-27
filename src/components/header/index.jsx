import React from "react";
import { Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import {Container, Box} from "./styles";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 250,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 10,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',  
    alignItems: 'center',
    justifyContent: 'center',
    color: '#947EB0',
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#f5f5f5',
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 2,
    width: 15,
    backgroundColor: '#947EB0',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
   
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
 

    return(
        <Container>
            <Box>
                <ImageButton
                    focusRipple
                    key={"AboutMe"}
                    style={{
                        width: "150px",
                        height: "200px",
                    }}
                >
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 3,
                            pt: 1,
                            pb: (theme) => `calc(${theme.spacing(1)} + 15px)`,
                            fontFamily: '',
                        }}
                        >
                            ABOUT ME
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>             
                        
                <ImageButton
                    focusRipple
                    key={"AboutMe"}
                    style={{
                        width: "160px",
                        height: "200px",
                    }}
                >
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 3,
                            pt: 1,
                            pb: (theme) => `calc(${theme.spacing(1)} + 15px)`,
                            fontFamily: '',
                        }}
                        >
                            TECHNOLOGIES
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>  

                <ImageButton
                    focusRipple
                    key={"AboutMe"}
                    style={{
                        width: "150px",
                        height: "200px",
                    }}
                >
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 3,
                            pt: 1,
                            pb: (theme) => `calc(${theme.spacing(1)} + 15px)`,
                            fontFamily: '',
                        }}
                        >
                            PROJECTS
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>  
            </Box>      
        </Container>
    )}
export default Header;