import {  styled, keyframes, Grid, Typography  } from "@mui/material";



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

  const StyledAbout = styled("div")(({theme}) =>({
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
  
  const AnimatedText = styled(Typography)<{ delay?: number}> (({delay = 0 }) => ({
    opacity: 0,
    animation: `${fadeSlideUp} 0.8s ease forwards`,
    animationDelay: `${delay}ms`
  }))

 
export default function About() {


  return (
    <StyledAbout> 
        <Grid container  display={"flex"} justifyContent={"center"} alignItems={"center"} margin={"5%"}>

          <Grid size={12}>
            <AnimatedText 
            color="primary.contrastText" 
            variant="h2" 
            textAlign={"center"}
            delay={200}
            sx={{opacity: 0.90}}
            >
              Matheus Souza
            </AnimatedText>
            </Grid>
            <AnimatedText 
            color="primary.contrastText" 
            variant="h6" 
            pb="10px"
            textAlign={"center"}
            delay={450}
            
            >
           Tenho 18 anos, gosto muito de ler, jogar esportes, videogames e relaxar, estou
           atualmente estudando na universidade estadual de Campinas, no curso analíse e Desenvolvimento
           de sistemas, possuo o técnico em Desenvolvimento de Sistemas pela ETEC de Praia Grande.
           Gosto muito da área de Desenvolvimento Backe-end e Analíse de Dados, aqui neste projeto vou deixar
           o acesso aos meus principais projetos nessas áreas, quero usar esse portfólio para documentar minha 
           evolução e praticar as minhas habilidades adquiridas no decorrer dos dois cursos.
            </AnimatedText>
           
  
        </Grid>
  
    

    </StyledAbout>    
  )
}

