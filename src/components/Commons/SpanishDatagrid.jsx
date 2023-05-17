import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DataGrid, esES } from "@mui/x-data-grid";

export function SpanishDatagrid(props) {
  const theme = createTheme(
    esES
  );

  return (
    <ThemeProvider theme={theme}>
      <DataGrid {...props} />
    </ThemeProvider>
  );
}

