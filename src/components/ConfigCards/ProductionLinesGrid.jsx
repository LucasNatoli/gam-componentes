import { SpanishDatagrid} from '../Commons/SpanishDatagrid'
import { Database } from '../../Database';

export function ProductionLinesGrid() {
  const cols = [
    { field: 'name', headerName: 'Nombre', flex: 0.5 },
  ]
  
  return ( 
    <SpanishDatagrid
      autoHeight={true}
      columns={cols}
      rows={Database.productionLines}
      density="compact"
      hideFooter
    />
    
   );
}

