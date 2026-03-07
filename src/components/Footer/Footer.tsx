import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material';


const StyledFooter = styled("div")(({theme}) => ({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  gap:"10px",
  backgroundColor: theme.palette.primary.dark

}))
export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6">
      <StyledFooter>
   
    <a href="https://github.com/Matheusdev29" >
     <GitHubIcon/>
    </a>
   
    <a href="https://www.linkedin.com/in/matheus-souza-281775277/" > 
      <LinkedInIcon/>
    </a>
  
    </StyledFooter>
    </footer>
  );
}