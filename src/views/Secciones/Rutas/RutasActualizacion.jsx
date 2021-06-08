import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    width: "100%",
    marginBottom: theme.spacing(3),
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    minWidth: "100%",
  },
}));

export default function RutasActualizacion() {
  const classes = useStyles();
  const [ruta, setRuta] = React.useState("");

  const handleChangeRuta = (event) => {
    setRuta(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={4}
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
          xs={4}
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
          xs={4}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Eliminación
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Paper elevation={13} fullWidth className={classes.paper}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.espaciado2}
                >
                  <InputLabel>Ruta</InputLabel>
                  <Select
                    labelId="Ruta"
                    id="ruta"
                    value={ruta}
                    onChange={handleChangeRuta}
                    label="Ruta"
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    {["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4"].map(
                      (item, index) => (
                        <MenuItem value={index + 1}>{item}</MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <TextField
                  required
                  id="origen"
                  fullWidth
                  label="Origen"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <TextField
                  required
                  id="seccion"
                  fullWidth
                  label="Sección"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <TextField
                  required
                  id="destino"
                  fullWidth
                  label="Destino"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <TextField
                  required
                  id="kmRipio"
                  fullWidth
                  type="number"
                  label="Km Ripio"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <TextField
                  required
                  id="kmTotal"
                  fullWidth
                  type="number"
                  label="Km Total"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Ruta desde-hasta</FormLabel>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="bosqueCancha"
                  >
                    <FormControlLabel
                      value="bosqueCancha"
                      control={<Radio color="secondary" />}
                      label="Bosque - Cancha de acopio"
                    />
                    <FormControlLabel
                      value="canchaCancha"
                      control={<Radio color="secondary" />}
                      label="Cancha de acopio - Cancha de acopio"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
                <TextField
                  id="observacion"
                  label="Observación"
                  multiline
                  rows={3}
                  fullWidth
                  defaultValue=""
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.espaciado}
              container
              direction="row"
              justify="center"
            >
              <Button fullWidth variant="contained" color="primary">
                Grabar Ingresos
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.espaciado}
              container
              direction="row"
              justify="center"
            >
              <Button fullWidth variant="contained" color="primary">
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
