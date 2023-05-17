import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
export function SaveCancelButtons() {
  return (
    <Grid container justify="flex-end">
      <Grid item xs={0} sm={6}></Grid>
      <Grid item xs={12} sm={6} container spacing={2} justify="flex-end">
        <Grid item xs={6}>
          <Button fullWidth size="large" startIcon={<CancelIcon/>}>Cancelar</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth size="large" startIcon={<SendIcon/>}>Guardar</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
