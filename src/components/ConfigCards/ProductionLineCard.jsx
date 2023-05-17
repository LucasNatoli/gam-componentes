
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@mui/material'
import { SaveCancelButtons } from './SaveCancelButtons';

export function ProductionLineCard() {
  return (
    <Card>
      <CardHeader title="Línea de Producción" />
      <CardContent>
        <TextField label="Nombre de la Linea" fullWidth variant='standard'></TextField>
      </CardContent>
      <CardActions>
        <SaveCancelButtons />
      </CardActions>
    </Card>
  );
}

