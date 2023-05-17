import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { RegisterButtons } from "./RegisterButtons";
import { Grid, TextField, Typography } from "@mui/material";

export function SurfaceAddCard() {
  return (
    <Card>
      <CardHeader title="Sup. Procesada - Linea 1" />
      <CardContent>
        <div style={{ paddingBottom: '2em' }}>
          <Typography variant="body2">Registra la superficie en dm2 que proceso esta línea.</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={4} textAlign={'right'}>
            <Typography>dm2 Procesados:</Typography>
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