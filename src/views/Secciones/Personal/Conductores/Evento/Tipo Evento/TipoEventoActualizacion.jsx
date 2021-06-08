import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
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
export default function TipoEventoActualizacion() {
  const classes = useStyles();

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
            Datos Conductor
          </Typography>
        <Grid container justify="center">
            <Grid
              item
              md={12}
              xs={12}
              className={classes.espaciado}
              justify="center"
            >
                <TextField
                id="evento"
                label="Evento"
                fullWidth
                defaultValue=""
                variant="outlined"
              />{/*
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Evento</InputLabel>
                <Select
                  labelId="evento"
                  id="evento"
                  value={evento}
                  onChange={handleChangeEvento}
                  label="Evento"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={10}>dx1234</MenuItem>
                  <MenuItem value={20}>dx2452</MenuItem>
                  <MenuItem value={30}>dx6234</MenuItem>
                </Select>
              </FormControl>*/}
            </Grid>

          </Grid>
        </Paper>
      
        <Button
            fullWidth
            className={classes.espaciado}
            variant="contained"
            color="primary"
          >
            Grabar Ingreso
          </Button>
      </Grid>
    </div>
  );
}
