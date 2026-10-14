import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container, LinearProgress } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function NavBar() {
   const { uiStore } = useStore();

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" 
            sx={{
               backgroundImage: 'linear-gradient(135deg, #731855 0%, #218aae 69%, #aaac20 89%)',
               position: 'relative'
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
                     <MenuItemLink to='/counter'>Counter</MenuItemLink>
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
            <Observer>
               {() => uiStore.isLoading ? (
                  <LinearProgress
                     color="secondary"
                     sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 4
                     }}
                  />
               ) : null }
            </Observer>
         </AppBar >
      </Box >
   )
}
