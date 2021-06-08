import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
}));
export default function ConductoresActualizacion() {
  const classes = useStyles();
  const [selectedDateControlLicencia, setSelectedDateControlLicencia] = React.useState(new Date());
  const [selectedDateNacimiento, setSelectedDateNacimiento] = React.useState(new Date());
  const [selectedDateContrato, setSelectedDateContrato] = React.useState(new Date());

  const handleDateChangeContrato = (date) => {
    setSelectedDateContrato(date);
  };

  const handleDateChangeNacimiento = (date) => {
    setSelectedDateNacimiento(date);
  };
  
  const handleDateChangeControlLicencia = (date) => {
    setSelectedDateControlLicencia(date);
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} container direction="row" justify="center">
        <Paper elevation={10} className={classes.paper}>
          <Typography className={classes.titulo} variant="h6" noWrap>
            Orden de Trabajo
          </Typography>
          <Grid item container xs={12}>
            <Grid item container xs={4}>
              <TextField
                required
                id="rut"
                className={classes.espaciado}
                fullWidth
                label="Rut"
                variant="outlined"
              />
              <TextField
                required
                id="licenciaConducir"
                className={classes.espaciado}
                fullWidth
                label="Licencia de Conducir"
                variant="outlined"
              />
              <TextField
                required
                id="claseLicencia"
                className={classes.espaciado}
                fullWidth
                label="Clase Licencia"
                variant="outlined"
              />
              <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                <Grid  className={classes.espaciado} container justify="space-around">
                  <KeyboardDatePicker
                    id="fechaControlLicencia"
                    label="Fecha Control Licencia"
                    format="dd/MM/yyyy"
                    fullWidth
                    value={selectedDateControlLicencia}
                    onChange={handleDateChangeControlLicencia}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item container xs={4}>
              <TextField
                required
                id="primerNombre"
                className={classes.espaciado}
                fullWidth
                label="Primer Nombre"
                variant="outlined"
              />
              <TextField
                required
                id="segundoNombre"
                className={classes.espaciado}
                fullWidth
                label="Segundo Nombre"
                variant="outlined"
              />
              <TextField
                required
                id="apellidoPaterno"
                className={classes.espaciado}
                fullWidth
                label="Apellido Paterno"
                variant="outlined"
              />
              <TextField
                required
                id="apellidoMaterno"
                className={classes.espaciado}
                fullWidth
                label="Apellido Materno"
                variant="outlined"
              />
            </Grid>
            <Grid item container xs={4}>
              <TextField
                required
                id="direccion"
                className={classes.espaciado}
                fullWidth
                label="Dirección"
                variant="outlined"
              />
             <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                <Grid  className={classes.espaciado} container justify="space-around">
                  <KeyboardDatePicker
                    id="fechaNacimiento"
                    label="Fecha Nacimiento"
                    format="dd/MM/yyyy"
                    fullWidth
                    value={selectedDateNacimiento}
                    onChange={handleDateChangeNacimiento}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <TextField
                required
                id="telefono"
                className={classes.espaciado}
                fullWidth
                label="Teléfono"
                variant="outlined"
              />
              <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                <Grid  className={classes.espaciado} container justify="space-around">
                  <KeyboardDatePicker
                 
                    id="fechaContrato"
                    label="Fecha Contrato"
                    format="dd/MM/yyyy"
                    fullWidth
                    value={selectedDateContrato}
                    onChange={handleDateChangeContrato}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item container xs={12}>
                <FormControl
                    fullWidth
                    className={classes.espaciado}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="participacion"
                      endAdornment={
                        <InputAdornment position="end">%</InputAdornment>
                      }
                      inputProps={{
                        "aria-label": "Paticipación",
                      }}
                      labelWidth={0}
                    />
                    <FormHelperText id="outlined-weight-helper-text">
                        Paticipación
                    </FormHelperText>
                  </FormControl>
            </Grid>
            <Grid item container xs={12}>
            <TextField
                id="observacion"
                label="Observación"
                multiline
                className={classes.espaciado}
                rows={3}
                fullWidth
                defaultValue=""
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Paper>

        <Grid
          justify="center"
          container
          direction="row"
          className={classes.espaciado}
          item
          xs={12}
        >
          <Grid className={classes.espaciado} item xs={6}>
            <Button variant="contained" fullWidth color="primary">
              Grabar ingreso
            </Button>
          </Grid>
          
        </Grid>
      </Grid>
    </div>
  );
}
