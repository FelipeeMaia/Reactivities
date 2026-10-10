import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

type Props = {
   openForm: () => void
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #731855 0%, #218aae 69%, #aaac20 89%)'
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Group fontSize="large" />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Reactivities
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit">Activities</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Box>
            <Box>
              <Button onClick={openForm} size="large" variant="contained" color="warning">Create activity</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar >
    </Box >
  )
}
