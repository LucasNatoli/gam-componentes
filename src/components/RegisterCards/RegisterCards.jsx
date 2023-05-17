import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { StationAddCard } from './ComponentAddCard';
import { SurfaceAddCard } from './SurfaceAddCard';
import { AnalisysAddCard } from './AnalisysAddCard';
import { ProcessedSurface } from '../Datagrids/ProcessedSurface';
import { AddedComponents } from '../Datagrids/AddedComponents';
import { AnalizedComponents } from '../Datagrids/AnalizedComponents';

export function RegisterCards() {
  return (
    <Box sx={{ mt: 2 }}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Tarjetas de registro</Typography>
          <Typography variant='body1' sx={{ m: 1 }}>Dialogos que permiten ingresar datos de análisis a la app.</Typography>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          <Grid item md={5} xs={12}>
            <SurfaceAddCard />
          </Grid>
          <Grid item md={7} xs={12}>
            <ProcessedSurface />
          </Grid>
        </Grid>


        <Grid item xs={12}>
          <Typography variant='h5' sx={{ mt: 2 }}>Agregados</Typography>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          <Grid item md={7} xs={12}>
            <AddedComponents />
          </Grid>
          <Grid item md={5} xs={12}>
            <StationAddCard />
          </Grid>
        </Grid>


        <Grid item xs={12}>
          <Typography variant='h5' sx={{ mt: 2 }}>Analizados</Typography>
        </Grid>

        <Grid container item spacing={2} xs={12}>
          <Grid item md={6} xs={12}>
            <AnalisysAddCard />
          </Grid>
          <Grid item md={6} xs={12}>
            <AnalizedComponents />
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
}
