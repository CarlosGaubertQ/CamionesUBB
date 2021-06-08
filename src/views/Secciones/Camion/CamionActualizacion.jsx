import "date-fns";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    textAlign: "center",

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
}));

export default function CamionActualizacion() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
          <Grid item xs={12} container direction="row" justify="center">
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
              <TextField
                required
                id="color"
                className={classes.espaciadoInput}
                fullWidth
                label="Color"
                variant="outlined"
              />
              <TextField
                required
                id="kmcompra"
                className={classes.espaciadoInput}
                fullWidth
                label="Km. de compra"
                variant="outlined"
              />
              <TextField
                required
                id="valorcompra"
                className={classes.espaciadoInput}
                fullWidth
                label="Valor de compra"
                variant="outlined"
              />
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
              <TextField
                required
                id="kmcompra"
                className={classes.espaciadoInput}
                fullWidth
                label="Km. de compra"
                variant="outlined"
              />
              <TextField
                required
                id="valorcompra"
                className={classes.espaciadoInput}
                fullWidth
                label="Valor de compra"
                variant="outlined"
              />
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
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h6" noWrap>
            Configuracion del Camión
          </Typography>
          <Grid item xs={12} container direction="row" justify="center">
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Paper className={classes.paper}>
                <Typography variant="h6" noWrap>
                  Capacidad de Aceite
                </Typography>
                <FormControl
                  className={classes.espaciadoInput}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="carter"
                    endAdornment={
                      <InputAdornment position="end">Lts</InputAdornment>
                    }
                    labelWidth={0}
                  />
                  <FormHelperText>Carter</FormHelperText>
                </FormControl>

                <FormControl
                  className={classes.espaciadoLeft}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="caja"
                    className={classes.outlinedInput}
                    endAdornment={
                      <InputAdornment position="end">Lts</InputAdornment>
                    }
                    labelWidth={0}
                  />
                  <FormHelperText>Caja</FormHelperText>
                </FormControl>

                <FormControl
                  className={classes.espaciadoLeft}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="carter"
                    className={classes.outlinedInput}
                    endAdornment={
                      <InputAdornment position="end">Lts</InputAdornment>
                    }
                    labelWidth={0}
                  />
                  <FormHelperText>Diferencial</FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid
              container
              xs={12}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid
                container
                xs={6}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Paper className={classes.paper}>
                  <Typography variant="h6" noWrap>
                    Tipos
                  </Typography>
                  <Grid item xs={12} container direction="row" justify="center">
                    <Grid
                      item
                      xs={6}
                      container
                      direction="row"
                      justify="center"
                    >
                      <TextField
                        required
                        id="cajacambio"
                        label="Caja de Cambio"
                        variant="outlined"
                        fullWidth
                        className={classes.espaciadoInput}
                      />

                      <TextField
                        required
                        id="embrague"
                        fullWidth
                        className={classes.espaciadoInput}
                        label="Embrague"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      container
                      xs={6}
                      item
                      justify="center"
                      alignItems="center"
                    >
                      <TextField
                        required
                        id="diferencial"
                        fullWidth
                        className={classes.espaciadoLeft}
                        label="Diferencial"
                        variant="outlined"
                      />
                      <TextField
                        required
                        id="suspencion"
                        fullWidth
                        className={classes.espaciadoLeft}
                        label="Suspención"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid
                container
                xs={6}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Paper className={classes.paper}>
                  <Typography variant="h6" noWrap>
                    Modelos
                  </Typography>
                  <Grid item xs={12} container direction="row" justify="center">
                    <Grid
                      item
                      xs={6}
                      container
                      direction="row"
                      justify="center"
                    >
                      <TextField
                        required
                        id="frenodemotor"
                        label="Freno de motor"
                        variant="outlined"
                        fullWidth
                        className={classes.espaciadoInput}
                      />

                      <TextField
                        required
                        id="inyeccion"
                        fullWidth
                        className={classes.espaciadoInput}
                        label="Inyección"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      container
                      xs={6}
                      item
                      justify="center"
                      alignItems="center"
                    >
                      <TextField
                        required
                        id="direccion"
                        fullWidth
                        className={classes.espaciadoLeft}
                        label="Dirección"
                        variant="outlined"
                      />
                      <TextField
                        required
                        id="siselectrico"
                        fullWidth
                        className={classes.espaciadoLeft}
                        label="Sistema Eléctrico"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            direction=""
            justify="center"
            alignItems="center"
          >
            <Paper className={classes.paper}>
              <Typography variant="h6" noWrap>
                Numero de
              </Typography>
              <Grid
                container
                xs={12}
                direction=""
                justify="center"
                alignItems="center"
              >
                <Grid
                  container
                  xs={4}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    required
                    id="motor"
                    fullWidth
                    className={classes.espaciadoInput}
                    label="Motor"
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  container
                  xs={4}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    required
                    id="chasis"
                    fullWidth
                    className={classes.espaciadoLeft}
                    label="Chasis"
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  container
                  xs={4}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    required
                    id="ejes"
                    fullWidth
                    className={classes.espaciadoLeft}
                    label="Ejes"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Paper>
            <Grid
              container
              xs={12}
              className={classes.espaciadoLeft}
              direction="row"
              justify="center"
              alignItems="center"
            >
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
