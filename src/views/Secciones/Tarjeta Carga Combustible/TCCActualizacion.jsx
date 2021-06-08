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
import Typography from "@material-ui/core/Typography";
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
export default function TCCActualizacion() {
  const classes = useStyles();
  const [estado, setEstado] = React.useState("");
  const [conductor, setConductor] = React.useState("");

  const handleChangeConductor = (event) => {
    setConductor(event.target.value);
  };
  const handleChangeEstado = (event) => {
    setEstado(event.target.value);
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
            <Typography variant="h6" noWrap>
              Datos
            </Typography>
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
                <TextField
                  required
                  id="codigo"
                  fullWidth
                  label="Código"
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
                  id="tope"
                  fullWidth
                  label="Tope"
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
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Estado</InputLabel>
                  <Select
                    labelId="Estado"
                    id="ruta"
                    value={estado}
                    onChange={handleChangeEstado}
                    label="Estado"
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    {["Estado 1", "Estado 2", "Estado 3", "Estado 4"].map(
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
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Conductor</InputLabel>
                  <Select
                    labelId="Conductor"
                    id="conductor"
                    value={conductor}
                    onChange={handleChangeConductor}
                    label="Conductor"
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    {[
                      "Conductor 1",
                      "Conductor 2",
                      "Conductor 3",
                      "Conductor 4",
                    ].map((item, index) => (
                      <MenuItem value={index + 1}>{item}</MenuItem>
                    ))}
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
                  id="nombreConductor"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
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
            <Typography variant="h6" noWrap>
              Datos del conductor
            </Typography>
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
                <TextField
                  required
                  id="nombre"
                  fullWidth
                  label="Nombre"
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
                  id="telefono"
                  fullWidth
                  label="Teléfono"
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
                <TextField
                  required
                  id="direccion"
                  fullWidth
                  label="Dirección"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              container
              direction="row"
              justify="center"
            >
              <Button fullWidth variant="contained" color="primary">
                Grabar Ingreso
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
