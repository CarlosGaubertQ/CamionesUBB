import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: "center",
    width: "100%",
    borderColor: "#430",
  },
  espaciado: {
    margin: theme.spacing(1),
  },

  espaciadoLeft: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  select: {
    width: "80%",
  },
  formControl: {
    minWidth: "100%",
  },
  izqierda: {
    textAlign: "left",
  },
  titulo: {
    marginBottom: theme.spacing(3),
    textAlign: "left",
  },
  margen: {
    margin: theme.spacing(3),
  },
}));
export default function OtrosEmpleadosCostosIndirectos() {
  const classes = useStyles();
  const [selectedDateContrato, setSelectedDateContrato] = React.useState(
    new Date()
  );

  const handleDateChangeContrato = (date) => {
    setSelectedDateContrato(date);
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          md={3}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Ingreso
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Modificación
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Eliminación
          </Button>
        </Grid>
        <Paper elevation={10} fullWidth className={classes.paper}>
          <Typography className={classes.titulo} variant="h6" noWrap>
            Datos
          </Typography>
          <Grid item container xs={12}>
            <Grid item container xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid
                  className={classes.espaciado}
                  container
                  justify="space-around"
                >
                  <KeyboardDatePicker
                    id="mes"
                    label="Mes"
                    format="dd/MM/yyyy"
                    fullWidth
                    value={selectedDateContrato}
                    onChange={handleDateChangeContrato}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <TextField
                required
                id="costo"
                className={classes.espaciado}
                fullWidth
                label="Costo"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Paper>

        <Button
          fullWidth
          className={classes.espaciado}
          variant="contained"
          color="primary"
        >
          Grabar Ingreso
        </Button>
      </Grid>
    </div>
  );
}
