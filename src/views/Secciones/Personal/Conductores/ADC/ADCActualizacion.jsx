import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";

import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    textAlign: "center",
    width: "100%",
    borderColor: "#430",
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
  espaciado: {
    padding: theme.spacing(1),
  },
  espaciado2: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function ADCActualizacion() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [patenteCamion, setPatenteCamion] = React.useState("");
  const [conductor, setConductor] = React.useState("");
  const handleChangeConductor = (event) => {
    setConductor(event.target.value);
  };
  const handleChangePatenteCamion = (event) => {
    setPatenteCamion(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid
          item
          md={6}
          xs={12}
          className={classes.espaciado}
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Asignar camión
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          className={classes.espaciado}
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Desasignar camión
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          className={classes.espaciado}
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Eliminar asignar
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          className={classes.espaciado}
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Eliminar desasignar
          </Button>
        </Grid>
        <Paper elevation={13} fullWidth className={classes.paper}>
          <TextField
            required
            id="codigoObra"
            className={classes.espaciado2}
            fullWidth
            label="Código de Obra"
            variant="outlined"
          />
          <TextField
            id="descripcion"
            label="Descripción"
            multiline
            className={classes.espaciado2}
            rows={3}
            fullWidth
            defaultValue=""
            variant="outlined"
          />
          <FormControl
            variant="outlined"
            fullWidth
            className={classes.espaciado2}
          >
            <InputLabel>Patente Camión</InputLabel>
            <Select
              labelId="Patente Camión"
              id="patenteCamion"
              value={patenteCamion}
              onChange={handleChangePatenteCamion}
              label="Patente Camión"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={10}>dx1234</MenuItem>
              <MenuItem value={20}>dx2452</MenuItem>
              <MenuItem value={30}>dx6234</MenuItem>
            </Select>
          </FormControl>
          <Grid container justify="center">
            <Grid
              item
              md={6}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Conductor</InputLabel>
                <Select
                  labelId="conductor"
                  id="conductor"
                  value={conductor}
                  onChange={handleChangeConductor}
                  label="Conductor"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={10}>dx1234</MenuItem>
                  <MenuItem value={20}>dx2452</MenuItem>
                  <MenuItem value={30}>dx6234</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
              <TextField
                id="nombre"
                disabled
                fullWidth
                defaultValue=""
                variant="outlined"
              />
            </Grid>
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              className={classes.espaciado}
              container
              justify="space-around"
            >
              <KeyboardDatePicker
                id="fechaNacimiento"
                label="Fecha Nacimiento"
                format="dd/MM/yyyy"
                fullWidth
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Button
            fullWidth
            className={classes.espaciado}
            variant="contained"
            color="primary"
          >
            Grabar asignar
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
