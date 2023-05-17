
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  InputLabel,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Select
} from '@mui/material'
import { SaveCancelButtons } from './SaveCancelButtons';

export function StationCard() {
  return (
    <Card>
      <CardHeader title="Estación" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nombre de la Estación" fullWidth variant='standard'></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Volumen (L)" fullWidth type='number' variant='standard'></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant='standard'>
              <InputLabel id="demo-simple-select-label">Línea de Producción</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Línea"
              >
                <MenuItem value={10}>Línea 1</MenuItem>
                <MenuItem value={20}>Línea 2</MenuItem>
                <MenuItem value={30}>Línea 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <SaveCancelButtons />
      </CardActions>
    </Card>
  );
}

