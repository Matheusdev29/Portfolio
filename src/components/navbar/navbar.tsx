import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


function Navbar() {
 const StyledBar = styled(Toolbar)(({theme})=> ({
    display:"flex",
    justifyContent:"space-evenly",
    backgroundColor: theme.palette.primary.dark
  }))

  return (
    <>
   
    <AppBar position="absolute">
        <StyledBar> 
         <MenuItem ><a href="#about">About</a></MenuItem>   
         <MenuItem>
             <a href="#project">
             Projects   </a>  
         </MenuItem>  
        </StyledBar> 
    </AppBar>
    </>
  )
}

export default Navbar
