import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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

export default function ResultadoCamionXMes() {
  const classes = useStyles();
  const [camion, setCamion] = React.useState("");
  const [finalMes, setFinalMes] = React.useState("");
  const [InicioAnios, setInicioAnios] = React.useState([]);
  const [finalAnio, setFinalAnio] = React.useState("");

  const handleChangeFinalAnio = (event) => {
    setFinalAnio(event.target.value);
  };
  const handleChangeFinalMes = (event) => {
    setFinalMes(event.target.value);
  };
  const handleChangeCamion = (event) => {
    setCamion(event.target.value);
  };

  useEffect(() => {
    llamar();
    function llamar() {
      const year = new Date().getFullYear();
      const arreglo = [];
      for (let index = year; index >= 1997; index--) {
        arreglo.push(index);
      }
      setInicioAnios(arreglo);
    }
  }, []);
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Paper elevation={3} fullWidth className={classes.paper}>
          <Grid className={classes.espaciado} container justify="center">
            <Grid
              item
              xs={12}
              md={12}
              className={classes.espaciado}
              container
              direction="row"
              justify="start"
            >
              <Typography
                className={classes.titulo}
                variant="h5"
                component="h2"
              >
                Selecci??n de Datos
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className={classes.espaciado}
              container
              direction="row"
              justify="center"
            >
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    className={classes.titulo}
                    variant="h5"
                    component="h2"
                  >
                    Seleccione Cami??n
                  </Typography>

                  <Grid container justify="center">
                    <Grid
                      item
                      xs={12}
                      md={12}
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
                      <InputLabel>Cami??n</InputLabel>
                        <Select
                          id="camion"
                          value={camion}
                          onChange={handleChangeCamion} 
                          label="Cami??n"
                        >
                          <MenuItem value="">
                            <em></em>
                          </MenuItem>
                          <MenuItem value={1}>Camion 1</MenuItem>
                          <MenuItem value={2}>Camion 2</MenuItem>
                          <MenuItem value={3}>Camion 3</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className={classes.espaciado}
              container
              direction="row"
              justify="center"
            >
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    className={classes.titulo}
                    variant="h5"
                    component="h2"
                  >
                    Rango
                  </Typography>

                  <Grid container justify="center">
                    <Grid
                      item
                      xs={12}
                      md={12}
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
                        <InputLabel>Mes</InputLabel>
                        <Select
                          labelId="Inicio Mes"
                          id="camion"
                          value={finalMes}
                          onChange={handleChangeFinalMes}
                          label="Mes"
                        >
                          <MenuItem value="">
                            <em></em>
                          </MenuItem>
                          <MenuItem value={1}>Enero</MenuItem>
                          <MenuItem value={2}>Febrero</MenuItem>
                          <MenuItem value={3}>Marzo</MenuItem>
                          <MenuItem value={4}>Abril</MenuItem>
                          <MenuItem value={5}>Mayo</MenuItem>
                          <MenuItem value={6}>Junio</MenuItem>
                          <MenuItem value={7}>Julio</MenuItem>
                          <MenuItem value={8}>Agosto</MenuItem>
                          <MenuItem value={9}>Septiembre</MenuItem>
                          <MenuItem value={10}>Octubre</MenuItem>
                          <MenuItem value={11}>Noviembre</MenuItem>
                          <MenuItem value={12}>Diciembre</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
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
                        <InputLabel>A??o</InputLabel>
                        <Select
                          labelId="Inicio A??o"
                          id="inicioAnio"
                          value={finalAnio}
                          onChange={handleChangeFinalAnio}
                          label="A??o"
                        >
                          <MenuItem value="">
                            <em></em>
                          </MenuItem>
                          {InicioAnios ? (
                            InicioAnios.map((item) => (
                              <MenuItem value={item}>{item}</MenuItem>
                            ))
                          ) : (
                            <MenuItem value="">No existen elementos</MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
        <Grid
          item
          xs={12}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Grid
            item
            xs={12}
            className={classes.espaciado}
            container
            direction="row"
            justify="center"
          >
            <Button fullWidth variant="contained" color="primary">
              Ver Gr??fico
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
