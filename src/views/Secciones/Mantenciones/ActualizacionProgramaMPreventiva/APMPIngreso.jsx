import React from 'react'
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
    margin: theme.spacing(1),
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

export default function APMPIngreso() {
    const classes = useStyles();
    const [camion, setCamion] = React.useState("");
    const handleChangeCamion = (event) => {
        setCamion(event.target.value);
      };
    return (
        <div className={classes.root}>
        <Grid container>
          
        <Paper className={classes.paper}>
  
          <Grid item xs={12} container full direction="row" justify="center">
            <Grid
              item
              xs={6}
              container
              direction="row"
              justify="center"
            >
              <FormControl variant="outlined" fullWidth className={classes.espaciado}>
                <InputLabel>Patente Camión</InputLabel>
                <Select
                  labelId="patenteCamion"
                  id="patenteCamion"
                  value={camion}
                  onChange={handleChangeCamion}
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

              <TextField
                required
                id="descripcion"
                className={classes.espaciado}
                fullWidth
                label="Descripción programa"
                variant="outlined"
              />
              <TextField
                required
                id="elemento"
                className={classes.espaciado}
                fullWidth
                label="Elemento"
                variant="outlined"
              />
              
            </Grid>
            <Grid
              item
              xs={6}
              container
              direction="row"
              justify="center"
            >
          
              <TextField
                required
                id="tipo"
                className={classes.espaciado}
                fullWidth
                label="Tipo"
                variant="outlined"
              />

              <TextField
                required
                id="accion"
                className={classes.espaciado}
                fullWidth
                label="Acción"
                variant="outlined"
              />
                <TextField
                required
                id="kilometraje"
                className={classes.espaciado}
                fullWidth
                label="Kilometraje"
                variant="outlined"
              />
              
            </Grid>
          
          </Grid>
         
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h6" noWrap>
            Tabla de mantención preventiva
          </Typography>
          <Grid item xs={12} container full direction="row" justify="center">
            tabla
          </Grid>
          <Grid item xs={12} container direction="row" justify="center">
            <Grid item xs={4} container direction="row" justify="center">
              <Button disabled variant="contained" color="primary">
                  Otro elemento
              </Button>
              </Grid>
              <Grid item xs={4} container direction="row" justify="center">
              <Button disabled variant="contained" color="primary">
                  Graba programa
              </Button>
              </Grid>
              <Grid item xs={4} container direction="row" justify="center">
              <Button variant="contained" color="primary">
                  Cancelar
              </Button>
              </Grid>
          </Grid>
        </Paper>
        </Grid>
       
      </div>
    )
}
