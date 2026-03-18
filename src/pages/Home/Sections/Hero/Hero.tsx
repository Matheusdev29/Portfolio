import {  styled, keyframes, Grid, Typography, Button,  } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const text = "matheussouza290108@gmail.com"

const copy = async () =>
{
  await navigator.clipboard.writeText(text);
  alert('texto copiado!');
}
const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
` 

  const StyledHero = styled("div")(({theme}) =>({
    backgroundColor: theme.palette.primary.dark,
    backgroundSize: "400% 400%",
    animation: `${gradientShift} 10s ease infinite`,    
    height:"100vh",
    display:"flex",
    alignItems:"center",
    overflow: "hidden",
    position: "relative",

    "&::before": {
    content: '""',
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(100,160,255,0.08) 0%, transparent 70%)",
    top: "-100px",
    right: "-100px",
    borderRadius: "50%",
    pointerEvents: "none",
  },
   "&::after": {
    content: '""',
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(80,220,180,0.06) 0%, transparent 70%)",
    bottom: "-80px",
    left: "5%",
    borderRadius: "50%",
    pointerEvents: "none",
  },
}))
  
const StyledImg = styled("img")(({theme})=> ({
    marginLeft: "5%",
    width: "60%",
    borderRadius:"100%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    animation:`${fadeIn} 0.8s ease forwards`
  }))

  const AnimatedText = styled(Typography)<{ delay?: number}> (({delay = 0 }) => ({
    opacity: 0,
    animation: `${fadeSlideUp} 0.8s ease forwards`,
    animationDelay: `${delay}ms`
  }))

  const AnimatedButton = styled("div")<{ delay?: number}> (({delay = 0 }) => ({
    opacity: 0,
    animation: `${fadeSlideUp} 0.8s ease forwards`,
    animationDelay: `${delay}ms`
  }))
function Hero() {
  return (
    <StyledHero> 
        <Grid container  display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid size={6} >
            <StyledImg src={Avatar}/>
          </Grid>
          <Grid size={6}>
            <AnimatedText 
            color="primary.contrastText" 
            variant="h2" 
            textAlign={"center"}
            delay={200}
            sx={{opacity: 0.90}}
            >
              Matheus Souza
            </AnimatedText>
            <AnimatedText 
            color="primary.contrastText" 
            variant="h3" 
            pb="10px"
            textAlign={"center"}
            delay={450}
            
            >
               I'm Back-End Developer
            </AnimatedText>
          
            <AnimatedButton delay={700}>
            <Grid container display={"flex"} justifyContent={"center"} gap={2} pt={2}>
              <Grid size = {4} display={"flex"} justifyContent={"center"}>
                <Button 
                color="secondary"
                variant="outlined"
                href="/curriculo.pdf"
                download="Matheus_Souza_CV.pdf"
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(255,255,255,0.15)",
                  },
                }}>
                  <DownloadIcon sx={{ mr: 1}}/>
                    <Typography>  Curriculum CV</Typography>
                </Button>
              </Grid>
              <Grid size={4} display={"flex"} justifyContent={"center"}>
                <Button 
                color="secondary"
                variant="outlined"
                onClick={copy}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(255,255,255,0.15)",
                  },
                }}>
                  <MailOutlineIcon sx={{ mr: 1}}/>
                    <Typography>  Contact me</Typography>
                </Button>
              </Grid>
             </Grid>
             </AnimatedButton>
            </Grid>
  
        </Grid>
  
    

    </StyledHero>    
  )
}

export default Hero
