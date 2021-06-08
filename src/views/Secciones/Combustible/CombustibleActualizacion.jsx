import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import clsx from "clsx";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(1),
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
    minWidth: "100%",
  },
}));

export default function CombustibleActualizacion() {
  const classes = useStyles();
  const [codigoTarjeta, setCodigoTarjeta] = React.useState("");
  const [patenteCamion, setPatenteCamion] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [tiCombus, setTiCombus] = React.useState("Petroleo");

  const handleChangeTiCombus = (event) => {
    setTiCombus(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChangeCod = (event) => {
    setCodigoTarjeta(event.target.value);
  };
  const handleChangePatente = (event) => {
    setPatenteCamion(event.target.value);
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
        <Paper fullWidth className={classes.paper}>
          <Typography variant="h6" noWrap>
            Datos
          </Typography>
          <Grid container className={classes.espaciado} spacing={3}>
            <Grid item xs={3}>
              <TextField
                id="numeroGuia"
                label="Numero Guia"
                fullWidth
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="numeroBoleta"
                label="Numero Boleta"
                fullWidth
                defaultValue=""
                variant="outlined"
              />
            </Grid>

            <Grid item xs={3}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Cod. Tarjeta</InputLabel>
                <Select
                  labelId="codigoTarjeta"
                  id="codigoTarjeta"
                  value={codigoTarjeta}
                  onChange={handleChangeCod}
                  label="Cod. Tarjeta"
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
            <Grid item xs={3}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Patente Camión</InputLabel>
                <Select
                  labelId="patenteCamion"
                  id="patenteCamion"
                  value={patenteCamion}
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
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                  <KeyboardDatePicker
                    margin="normal"
                    id="fecha"
                    label="Fecha"
                    format="dd/MM/yyyy"
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
          </Grid>
        </Paper>
        <Paper fullWidth className={classes.paper}>
          <Typography variant="h6" noWrap>
            Datos Generales
          </Typography>
          <Grid container className={classes.espaciado} spacing={3}>
            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel className={classes.espaciado} component="legend">
                  Tipo de Combustible
                </FormLabel>
                <RadioGroup value={tiCombus} onChange={handleChangeTiCombus}>
                  <FormControlLabel
                    value="Petroleo"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Bencina"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <OutlinedInput
                  id="odometro"
                  endAdornment={
                    <InputAdornment position="end">Kg</InputAdornment>
                  }
                  inputProps={{
                    "aria-label": "Odómetro",
                  }}
                  labelWidth={0}
                />
                <FormHelperText id="outlined-weight-helper-text">
                  Odómetro
                </FormHelperText>
              </FormControl>
              <TextField
                id="proovedor"
                label="Proovedor"
                className={classes.espaciadoInput}
                fullWidth
                defaultValue=""
                variant="outlined"
              />
              <TextField
                id="litrosDeCombustible"
                label="Litros de Combustible"
                className={classes.espaciadoInput}
                fullWidth
                variant="outlined"
              />
              <TextField
                id="montoDeCombustible"
                label="Mont de Combustible"
                className={classes.espaciadoInput}
                type="number"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid fullWidth item xs={12}>
              <Button variant="contained" color="primary">
                Grabar ingreso
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
