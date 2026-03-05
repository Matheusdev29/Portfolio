import {  styled, Grid, Container, Typography, Button,  } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Hero() {
  const StyledHero = styled("div")(({theme})=> ({
    backgroundColor: theme.palette.primary.main,
    height:"100vh",
    display:"flex",
    alignItems:"center"
  }))
  const StyledImg = styled("img")(({theme})=> ({
    width: "60%",
    borderRadius:"100%",
    border: `2px solid ${theme.palette.primary.contrastText}`
  }))
  return (
    <>
    <StyledHero >
      <Container>
        <Grid container  display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid size={6} >
            <StyledImg src={Avatar}/>
          </Grid>
          <Grid size={6}>
            <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>
              Matheus Souza
            </Typography>
            <Typography color="primary.contrastText" variant="h3" textAlign={"center"} pb={"10px"}>
              I'm Back-End Developer
            </Typography>
          
            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid size = {4} display={"flex"} justifyContent={"center"}>
                <Button color="secondary" variant="outlined" >
                  <DownloadIcon/>
                    <Typography>  Curriculum CV</Typography>
                </Button>
              </Grid>
              <Grid size={4} display={"flex"} justifyContent={"center"}>
                <Button color="secondary" variant="outlined">
                  <MailOutlineIcon/> 
                   <Typography>Contact me</ Typography>
                </Button>
              </Grid>
            </Grid>
            </Grid>
  
        </Grid>
      </Container>
    </StyledHero>
  </>
  )
}

export default Hero
