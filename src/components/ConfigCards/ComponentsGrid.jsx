import { SpanishDatagrid} from '../Commons/SpanishDatagrid'
import { Database } from '../../Database';

export function ComponentsGrid() {
  const cols = [
    { field: 'name', headerName: 'Nombre', flex: 0.5 },
    { field: 'unit', headerName: 'Unidad', flex: 0.5 },
  ]
  
  return ( 
    <SpanishDatagrid
      autoHeight={true}
      columns={cols}
      rows={Database.components}
      density="compact"
      hideFooter
    />
    
   );
}

