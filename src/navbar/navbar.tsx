import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

function Navbar() {
 const StyledBar = styled(Toolbar)(()=> ({
    display:"flex",
    justifyContent:"space-evenly"
  }))
  return (
    <>
    <AppBar position="absolute">
        <StyledBar> 
         <MenuItem>About</MenuItem>   
         <MenuItem>Projects</MenuItem>   
        </StyledBar> 
    </AppBar>
    </>
  )
}

export default Navbar
