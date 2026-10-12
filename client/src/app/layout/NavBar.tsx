import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" sx={{
            backgroundImage: 'linear-gradient(135deg, #731855 0%, #218aae 69%, #aaac20 89%)'
         }}>
            <Container maxWidth='xl'>
               <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                     <Group fontSize="large" />
                     <Button component={NavLink} to='/' color="inherit" sx={{ textTransform: 'none' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                           Reactivities
                        </Typography>
                     </Button>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                     <MenuItemLink to='/activities'>Activities</MenuItemLink>
                     <MenuItemLink to='/createActivity'>Create Activity</MenuItemLink>
                  </Box>
                  <Box>
                     <Button
                        onClick={() => { }}
                        size="large"
                        variant="contained"
                        color="warning"
                     >User Menu</Button>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar >
      </Box >
   )
}
