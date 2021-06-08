import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
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
    marginTop: theme.spacing(3),
    textAlign: "center",
    width: "100%",
    borderColor: "#430",
  },
  espaciado: {
    padding: theme.spacing(3),
  },
  espaciadoInput: {
    marginTop: theme.spacing(3),
  },
  espaciadoLeft: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  select: {
    width: "80%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

export default function CarroActualizacion() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} container direction="row" justify="center">
          <Button variant="contained" color="primary">
            Ingreso
          </Button>
        </Grid>
        <Grid item xs={4} container direction="row" justify="center">
          <Button variant="contained" color="primary">
            Modificación
          </Button>
        </Grid>
        <Grid item xs={4} container direction="row" justify="center">
          <Button variant="contained" color="primary">
            Eliminación
          </Button>
        </Grid>
        <Paper className={classes.paper}>
          <Typography variant="h6" noWrap>
            Antecedentes Generales
          </Typography>
          <Grid item xs={12} container full direction="row" justify="center">
            <Grid
              item
              xs={6}
              className={classes.espaciado}
              container
              direction="row"
              justify="center"
            >
              <TextField
                required
                id="patente"
                fullWidth
                label="Patente"
                variant="outlined"
              />

              <TextField
                required
                id="sigla"
                className={classes.espaciadoInput}
                fullWidth
                label="Sigla"
                variant="outlined"
              />

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="primerCamion">Camión 1</InputLabel>
                <Select
                  labelId="primerCamion"
                  id="primerCamion"
                  value={age}
                  onChange={handleChange}
                  label="Camion 1"
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
              xs={6}
              className={classes.espaciado}
              container
              direction="row"
              justify="center"
            >
              <TextField
                required
                id="modelo"
                fullWidth
                label="Modelo"
                variant="outlined"
              />

              <TextField
                required
                id="aniofabricacion"
                className={classes.espaciadoInput}
                fullWidth
                label="Año fabricación"
                variant="outlined"
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="fechacompra"
                    className={classes.espaciadoInput}
                    label="Fecha compra"
                    format="MM/dd/yyyy"
                    fullWidth
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid
              item
              xs={12}
              className={classes.espaciado}
              container
              direction="row"
              justify="center"
            >
              <TextField
                id="outlined-multiline-static"
                label="Observación"
                multiline
                rows={6}
                fullWidth
                defaultValue=""
                variant="outlined"
              />
              
            </Grid>
          </Grid>
          <Button variant="contained" color="primary">
                Grabar ingreso
              </Button>
        </Paper>
      </Grid>
    </div>
  );
}
