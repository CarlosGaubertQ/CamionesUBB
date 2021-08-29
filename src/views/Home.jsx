import React, { useEffect } from 'react'
import MaterialDatatable from 'material-datatable'
import Axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    width: "100%",
    marginBottom: theme.spacing(3),
    borderColor: "#430",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {


  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  prueba: {
    width: '100%'
  }
}));


export default function SimpleCard() {
  const classes = useStyles();
  const [choferesItem, setChoferesItem] = React.useState([]);

  useEffect(() => {
    cargarChoferes();
  }, []);
  const cargarChoferes = async () => {
    const { data } = await Axios.get("http://localhost:4000/api/chofer/avisoLicencia/");
    setChoferesItem(data.data);
    return null;
  };

  const options = {
    filter: true,
    selectableRows: false,

    responsive: 'scroll',
    rowsPerPage: 10,
    textLabels: {
      body: {
        noMatch: "No se encontraron choferes",
        toolTip: "Sort",
      },
      pagination: {
        next: "Siguiente",
        previous: "Anterior",
        rowsPerPage: "Columnas por pagina:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        viewColumns: "Ver columnas",
        filterTable: "Filtrar tabla",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Reiniciar",
      },
      viewColumns: {
        title: "Mostrar columnas",
        titleAria: "Mostrar/Ocultar Columnas",
      },

    }

  };

  const columns = [

    {
      name: 'RUT',
      field: 'RUT_EMPLEADO',
    },
    {
      name: 'Nombre',
      field: 'NOMBRE_EMPLEADO',
    },
    {
      name: 'Apellido paterno',
      field: 'APELLIDO_EMPLEADO',
    },
    {
      name: 'Apellido materno',
      field: 'APELLIDO_EMPLEADO2',
    },
    {
      name: 'Control licencia',
      field: 'FECHA_CONTROL_LICENCIA',
    },

  ];
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="start"
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Revisar Controles de Licencia
          </Typography>

        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="start"
        ><MaterialDatatable

            title={"Fecha de vencimiento"}
            data={choferesItem}
            columns={columns}
            options={options}
          /></Grid>

      </Grid>
    </div>
  )
}