import Container from '@mui/material/Container'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MenuAppBar, ConfigCards, RegisterCards } from './components';
import { Grid } from '@mui/material';

const appTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#f4f4f4"
    },
    text: {
      primary: '#040f18',
    },
  },
  typography: {
    fontFamily: ["Noto Sans JP", "IBM Plex Sans, Roboto"].join(",")
  },
  /*
  typography: {
    fontFamily: ["'Press Start 2P'", "Noto Sans JP, IBM Plex Sans, Roboto"].join(","),
    fontSize: '0.8em'
  }
  */
});


export default function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      <MenuAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ConfigCards />
          </Grid>
          <Grid item xs={12}>
            <RegisterCards />
          </Grid>
        </Grid>
      </Container>

    </ThemeProvider>
  )
}

