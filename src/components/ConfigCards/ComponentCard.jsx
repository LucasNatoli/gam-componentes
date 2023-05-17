
import {
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
import { SaveCancelButtons } from './SaveCancelButtons'
export function ComponentCard() {
  return (
    <Card>
      <CardHeader title="Componente" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nombre del Componente" fullWidth variant='standard'></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant='standard'>
              <InputLabel id="demo-simple-select-label">Dosificación</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Dosificación"
              >
                <MenuItem value={10}>grs./lt.</MenuItem>
                <MenuItem value={20}>ml./lt.</MenuItem>
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

