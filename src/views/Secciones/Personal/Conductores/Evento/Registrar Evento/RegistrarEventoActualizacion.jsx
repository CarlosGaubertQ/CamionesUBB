import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
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
    padding: theme.spacing(1),
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
export default function RegistrarEventoActualizacion() {
  const classes = useStyles();
  const [conductor, setConductor] = React.useState("");
  const [evento, setEvento] = React.useState("");
  const [patente, setPatente] = React.useState("");
  const [quienPaga, setQuienPaga] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChangeQuienPaga = (event) => {
    setQuienPaga(event.target.value);
  };
  const handleChangePatente = (event) => {
    setPatente(event.target.value);
  };
  const handleChangeEvento = (event) => {
    setEvento(event.target.value);
  };
  const handleChangeConductor = (event) => {
    setConductor(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
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
          md={4}
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
          md={4}
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
            Datos Conductor
          </Typography>
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
            <Grid
              item
              md={6}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
              <TextField
                id="licenciaConducir"
                disabled
                fullWidth
                label="Licencia Conducir"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
              <TextField
                id="claseLicencia"
                disabled
                label="Clase Licencia"
                fullWidth
                defaultValue=""
                variant="outlined"
              />
            </Grid>

          </Grid>
        </Paper>
        <Paper elevation={10} fullWidth className={classes.paper}>
        <Typography className={classes.titulo} variant="h6" noWrap>
            Tipo Evento
          </Typography>
        <Grid container justify="center">
            <Grid
              item
              md={12}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Evento</InputLabel>
                <Select
                  labelId="conductor"
                  id="evento"
                  value={evento}
                  onChange={handleChangeEvento}
                  label="Evento"
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
           
          </Grid>
        </Paper>
        <Paper elevation={10} fullWidth className={classes.paper}>
        <Typography className={classes.titulo} variant="h6" noWrap>
            Datos Historial
          </Typography>
        <Grid container justify="center">
            <Grid
              item
              md={4}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Patente Camión</InputLabel>
                <Select
                  labelId="conductor"
                  id="evento"
                  value={patente}
                  onChange={handleChangePatente}
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
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
             <TextField
                required
                id="costoEvento"
                
                fullWidth
                label="Costo Evento"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
             <FormControl variant="outlined" fullWidth>
                <InputLabel>Quien Paga</InputLabel>
                <Select
                  labelId="quienPaga"
                  id="qienPaga"
                  value={quienPaga}
                  onChange={handleChangeQuienPaga}
                  label="Quien Paga"
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
              md={4}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              
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
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
             <TextField
                required
                id="horaEvento"
                fullWidth
                label="Hora Evento"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
             <TextField
                required
                id="fechaFinalizacion"
                fullWidth
                label="Fecha Finalización"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
             <TextField
                id="observacion"
                label="Oberservación"
                multiline
                className={classes.espaciadoInput}
                rows={3}
                fullWidth
                defaultValue=""
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
