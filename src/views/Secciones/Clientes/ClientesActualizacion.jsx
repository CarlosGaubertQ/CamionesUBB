import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

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

export default function ClientesActualizacion() {
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
                id="rut"
                fullWidth
                label="Rut"
                variant="outlined"
              />

              <TextField
                required
                id="nombre"
                className={classes.espaciadoInput}
                fullWidth
                label="Nombre"
                variant="outlined"
              />
              <TextField
                required
                id="direccion"
                className={classes.espaciadoInput}
                fullWidth
                label="Direccion"
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
                id="girecliente"
                fullWidth
                label="Giro del Cliente"
                variant="outlined"
              />

              <TextField
                required
                id="telefono"
                className={classes.espaciadoInput}
                fullWidth
                label="Telefono"
                variant="outlined"
              />
              <TextField
                required
                id="fax"
                className={classes.espaciadoInput}
                fullWidth
                label="Fax"
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
          <Grid item xs={12} container direction="row" justify="center">
          <Button variant="contained" color="primary">
            Grabar ingreso
          </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
