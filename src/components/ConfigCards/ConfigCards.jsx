import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ProductionLineCard } from './ProductionLineCard';
import { StationCard } from './StationCard';
import { ComponentCard } from './ComponentCard';
import { ComponentsGrid } from './ComponentsGrid';
import { ProductionLinesGrid } from './ProductionLinesGrid';
import { StationsGrid } from './StationsGrid';

export function ConfigCards() {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography variant='h5'>Tipos Base</Typography>
          <Typography variant='body1' sx={{ m: 1 }}>Dialogos para la carga de la configuración del sistema.</Typography>
        </Grid>

        <Grid item spacing={2} md={6} xs={12}>
          <ComponentsGrid />
        </Grid>
        <Grid item spacing={2} md={6} xs={12}>
          <ComponentCard />
        </Grid>

        <Grid item spacing={2} md={6} xs={12}>
          <ProductionLinesGrid />
        </Grid>
        <Grid item spacing={2} md={6} xs={12}>
          <ProductionLineCard />
        </Grid>

        <Grid item md={6} xs={12}>
          <StationsGrid />
        </Grid>
        <Grid item md={6} xs={12}>
          <StationCard />
        </Grid>
      </Grid>
    </Box >
  );
}
