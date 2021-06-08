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
export default function TarifaOtrosClientes() {
  const classes = useStyles();
  const [cliente, setCliente] = React.useState("");
  const [unidadMedida, setunidadMedida] = React.useState("");
  const handleChangeUnidadMedida = (event) => {
    setunidadMedida(event.target.value);
  };
  

  const handleChangeCliente = (event) => {
    setCliente(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Ingresar Tarifa
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Modificar Tarifa
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.espaciado}
          container
          direction="row"
          justify="center"
        >
          <Button fullWidth variant="contained" color="primary">
            Eliminar Tarifa
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
                xs={4}
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
              <InputLabel>Cliente</InputLabel>
              <Select
                labelId="Cliente"
                id="clinte"
                value={cliente}
                onChange={handleChangeCliente}
                label="Cliente"
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                {["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4"].map(
                  (item, index) => (
                    <MenuItem value={index + 1}>{item}</MenuItem>
                  )
                )}
              </Select>
            </FormControl>
              </Grid>
              <Grid
                item
                xs={4}
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
                  <InputLabel>Unidad de Medida</InputLabel>
                  <Select
                    labelId="Unidad de Medida"
                    id="unidadMedida"
                    value={unidadMedida}
                    onChange={handleChangeUnidadMedida}
                    label="Unidad de Medida"
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    {["Metro Ruma", "Metro Cúbico", "Tonelada"].map(
                      (item, index) => (
                        <MenuItem value={index + 1}>{item}</MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={4}
                className={classes.espaciado}
                container
                direction="row"
                justify="center"
              >
              <TextField
                  required
                  id="tarifa"
                  fullWidth
                  label="Tarifa"
                  variant="outlined"
                /></Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
