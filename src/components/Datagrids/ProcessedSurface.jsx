
import { Paper, Typography } from "@mui/material";
import { SpanishDatagrid } from "../Commons/SpanishDatagrid";

const processedSurfaces = [
  { id: 1, name: 'Linea 1', lastWeek: 10, lastMonth: 40, lastYear: 360, total: 1000 },
  { id: 2, name: 'Linea 2', lastWeek: 8, lastMonth: 32, lastYear: 190, total: 800 },
  { id: 3, name: 'Linea 3', lastWeek: 5, lastMonth: 30, lastYear: 100, total: 400 },
]

const cols = [
  { field: 'name', headerName: 'Línea', flex: 0.8 },
  { field: 'lastWeek', headerName: 'Ult. semana', flex: 0.3, align: 'right', headerAlign: 'right' },
  { field: 'lastMonth', headerName: 'Ult. mes', flex: 0.3, align: 'right', headerAlign: 'right' },
  { field: 'lastYear', headerName: 'Ult. año', flex: 0.3, align: 'right', headerAlign: 'right' },
  { field: 'total', headerName: 'Total', flex: 0.3, align: 'right', headerAlign: 'right' }
]

export function ProcessedSurface() {
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography variant={'h6'} sx={{mb:2}}>Superficie (dm2) procesados por Línea</Typography>
        <SpanishDatagrid
          columns={cols}
          rows={processedSurfaces}
          density="compact"
          hideFooter
        />
      </Paper>
    </>
  );
}
