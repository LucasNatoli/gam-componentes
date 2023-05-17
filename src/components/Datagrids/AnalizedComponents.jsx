
import { Grid, Paper, Typography } from "@mui/material";
import { SpanishDatagrid } from "../Commons/SpanishDatagrid";

const analizedComponents = [
  { id: 1, name: 'Componente 1', date: '15/05/2023', reading: 10, average: 15, ideal: 10 },
  { id: 2, name: 'Componente 2', date: '15/05/2023', reading: 9.2, average: 9, ideal: 190 },
  { id: 3, name: 'Componente 3', date: '15/05/2023', reading: 9, average: 9, ideal: 100 },
  { id: 4, name: 'Componente 2', date: '11/05/2023', reading: 9, average: 8, ideal: 9.2 },
]

const analizedComponents2 = [
  { id: 1, name: 'Componente 4', date: '13/05/2023', reading: 10, average: 40, ideal: 360 },
  { id: 2, name: 'Componente 5', date: '13/05/2023', reading: 8, average: 32, ideal: 190 },
]
const analizedComponents3 = [
  { id: 1, name: 'Componente 1', date: '11/05/2023', reading: 10, average: 40, ideal: 360 },
  { id: 2, name: 'Componente 6', date: '11/05/2023', reading: 8, average: 32, ideal: 190 },
  { id: 3, name: 'Componente 3', date: '11/05/2023', reading: 5, average: 30, ideal: 100 },
  { id: 4, name: 'Componente 7', date: '11/05/2023', reading: 5, average: 30, ideal: 100 },
]
const cols = [
  { field: 'name', headerName: 'Componente', flex: 0.5 },
  { field: 'date', headerName: 'Fecha', flex: 0.3 },
  { field: 'reading', headerName: 'Lectura', flex: 0.3, align: 'right', headerAlign: 'right' },
  { field: 'average', headerName: 'Promedio', flex: 0.3, align: 'right', headerAlign: 'right' },
  { field: 'ideal', headerName: 'Ideal', flex: 0.3, align: 'right', headerAlign: 'right' },
]

export function AnalizedComponents() {
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Estación 1</Typography>
            <SpanishDatagrid
              autoHeight={true}
              columns={cols}
              rows={analizedComponents}
              density="compact"
              hideFooter
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Estación 2</Typography>
            <SpanishDatagrid
              autoHeight={true}
              columns={cols}
              rows={analizedComponents2}
              density="compact"
              hideFooter
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Estación 3</Typography>
            <SpanishDatagrid
              autoHeight={true}
              columns={cols}
              rows={analizedComponents3}
              density="compact"
              hideFooter
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
