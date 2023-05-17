
import { Grid, Paper, Typography } from "@mui/material";
import { SpanishDatagrid } from "../Commons/SpanishDatagrid";

const addedComponents = [
  { id: 1, name: 'Componente 1', date: '15/05/2023', added: 10, average: 11, suggested: 10 },
  { id: 2, name: 'Componente 2', date: '15/05/2023', added: 9.2, average: 9, suggested: 9.2 },
  { id: 3, name: 'Componente 3', date: '15/05/2023', added: 7, average: 7, suggested: 7 },
  { id: 4, name: 'Componente 2', date: '11/05/2023', added: 9.2, average: 8.9, suggested: 9.2 },
]

const addedComponents2 = [
  { id: 1, name: 'Componente 4', date: '13/05/2023', added: 17, average: 17, suggested: 17 },
  { id: 2, name: 'Componente 5', date: '13/05/2023', added: 9, average: 8.9, suggested: 8.9 },
  { id: 3, name: 'Componente 4', date: '10/05/2023', added: 17, average: 17, suggested: 17 },
  { id: 4, name: 'Componente 5', date: '10/05/2023', added: 9, average: 8.9, suggested: 8.9 },
]
const addedComponents3 = [
  { id: 1, name: 'Componente 1', date: '11/05/2023', added: 10, average: 40, suggested: 360 },
  { id: 2, name: 'Componente 6', date: '11/05/2023', added: 8, average: 32, suggested: 190 },
  { id: 3, name: 'Componente 3', date: '11/05/2023', added: 5, average: 30, suggested: 100 },
  { id: 4, name: 'Componente 7', date: '11/05/2023', added: 5, average: 30, suggested: 100 },
]
const cols = [
  { field: 'name', headerName: 'Componente', flex: 0.5 },
  { field: 'date', headerName: 'Fecha', flex: 0.3 },
  { field: 'added', headerName: 'Agregado', flex: 0.3, align: 'right', headerAlign: 'right' },
  { field: 'average', headerName: 'Promedio', flex: 0.3, align: 'right', headerAlign: 'right' },
  { field: 'suggested', headerName: 'Sugerido', flex: 0.3, align: 'right', headerAlign: 'right' },
]

export function AddedComponents() {
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Estación 1</Typography>
            <SpanishDatagrid
              autoHeight={true}
              columns={cols}
              rows={addedComponents}
              density="compact"
              hideFooter
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Estación 2</Typography>
            <SpanishDatagrid
              autoHeight={true}
              columns={cols}
              rows={addedComponents2}
              density="compact"
              hideFooter
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Estación 3</Typography>
            <SpanishDatagrid
              autoHeight={true}
              columns={cols}
              rows={addedComponents3}
              density="compact"
              hideFooter
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
