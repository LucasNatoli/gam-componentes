import { SpanishDatagrid } from '../Commons/SpanishDatagrid'
import { Database } from '../../Database';

export function StationsGrid() {
  const cols = [
    { field: 'name', headerName: 'Nombre', flex: 0.4 },
    {
      field: 'productionLine', headerName: 'Línea', flex: 0.4,
      valueGetter: (params) => {
        if (!params.value) {
          return params.value;
        }
        return Database.productionLines.filter(pl => {return pl.id === params.value})[0].name;
      },
    },
    { field: 'volumen', headerName: 'Vol. (L)', flex: 0.2}


  ]

  return (
    <SpanishDatagrid
      autoHeight={true}
      columns={cols}
      rows={Database.stations}
      density="compact"
      hideFooter
    />

  );
}

