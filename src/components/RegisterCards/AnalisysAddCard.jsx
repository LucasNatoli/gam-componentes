import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { RegisterButtons } from "./RegisterButtons";

export function AnalisysAddCard() {
  return (
    <Card>
      <CardHeader title="Análisis - Estacion 1" />
      <CardContent>
        <div style={{ paddingBottom: '2em' }}>
          <Typography variant="body2">Registra la cantidad analizada de cada Componente de esta Estación</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={4} textAlign={'right'}>
            <Typography>Componente 1 (ml/L)</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField type="number" variant="standard" fullWidth />
          </Grid>

          <Grid item xs={4} textAlign={'right'}>
            <Typography>Componente 2 (g/L)</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField type="number" variant="standard" fullWidth />
          </Grid>

          <Grid item xs={4} textAlign={'right'}>
            <Typography>Componente 3 (g/L)</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField type="number" variant="standard" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <RegisterButtons />
      </CardActions>
    </Card>
  );
}