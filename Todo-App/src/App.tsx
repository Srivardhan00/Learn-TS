import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const App = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography>
              To-Do
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  )
}

export default App;