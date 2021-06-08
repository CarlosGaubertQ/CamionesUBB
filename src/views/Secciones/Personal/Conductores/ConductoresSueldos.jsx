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
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
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
export default function ConductoresSueldos() {
  const classes = useStyles();
  const [conductor, setConductor] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
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
            Datos
          </Typography>

          <Grid container item md={12} sm={12} justify="center">
            <Grid className={classes.espaciado} md={6} xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Empleado</InputLabel>
                <Select
                  labelId="conductor"
                  id="conductor"
                  value={conductor}
                  onChange={handleChangeConductor}
                  label="Empleado"
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
            <Grid className={classes.espaciado} md={6} xs={12}>
              <TextField
                id="nombre"
                disabled
                fullWidth
                defaultValue=""
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Divider className={classes.margen} />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              className={classes.espaciado}
              container
              justify="space-around"
            >
              <KeyboardDatePicker
                id="fechaPago"
                label="Fecha Pago"
                format="dd/MM/yyyy"
                fullWidth
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid className={classes.espaciado} xs={12}>
            <TextField
              required
              id="sueldoBruto"
              fullWidth
              label="Sueldo Bruto"
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.espaciado} xs={12}>
            <TextField
              required
              id="provisionDesahucio"
              fullWidth
              label="Provisión Desahucio"
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.espaciado} xs={12}>
            <TextField
              required
              id="provisionVacaciones"
              fullWidth
              label="Provisión Vacaciones"
              variant="outlined"
            />
          </Grid>

          <Grid className={classes.espaciado} xs={12}>
            <Button fullWidth variant="contained" color="primary">
              Grabar
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
