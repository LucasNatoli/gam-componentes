import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

export function RegisterButtons() {
  return (
    <Grid container >
      <Grid item xs={8}></Grid>
      <Grid item xs={4} >
        
          <Button fullWidth size="large" startIcon={<SendIcon/>}>Registrar</Button>
        
      </Grid>
    </Grid>
  );
}
