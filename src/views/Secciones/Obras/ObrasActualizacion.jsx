import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
  espaciado: {},
  espaciadoInput: {
    marginTop: theme.spacing(3),
  },
  espaciadoLeft: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));
export default function ObrasActualizacion() {
  const classes = useStyles();

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
        <Paper elevation={13} fullWidth className={classes.paper}>
          <TextField
            required
            id="codigoObra"
            className={classes.espaciadoInput}
            fullWidth
            label="Código de Obra"
            variant="outlined"
          />
          <TextField
            id="descripcion"
            label="Descripción"
            multiline
            className={classes.espaciadoInput}
            rows={3}
            fullWidth
            defaultValue=""
            variant="outlined"
          />
        </Paper>
        <Grid item xs={12} container direction="row" justify="center">
          <Button
            fullWidth
            className={classes.espaciadoInput}
            variant="contained"
            color="primary"
          >
            Grabar ingreso
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
