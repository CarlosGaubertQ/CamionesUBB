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
import Box from "@material-ui/core/Box";
import Grow from '@material-ui/core/Grow';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTools} from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
  boton: {
    marginTop: theme.spacing(3),
  },
}));

export default function APMPModificacion() {
  const classes = useStyles();
  const [camion, setCamion] = React.useState("");
  const [checkedGrow, setCheckedGrow] = React.useState(true);

  const handleChangeGrow = () => {
    setCheckedGrow(checkedGrow)
    //setCheckedFade((prev) => !prev);
  };

  const handleChangeCamion = (event) => {
    setCamion(event.target.value);
  };
  return (
    <div className={classes.root}>
   
     
          <Grid container spacing={0}>
            <Grid item xs={12}>
            <Grow in={handleChangeGrow}   style={{ transformOrigin: '0 0 0' }}
            {...(checkedGrow ? { timeout: 1000 } : {})}>
              <Paper elevation={3} className={classes.paper}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Camión</InputLabel>
                  <Select
                    labelId="camion"
                    id="camion"
                    value={camion}
                    onChange={handleChangeCamion}
                    label="Camión"
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
                  id="programa"
                  label="Programa"
                  className={classes.espaciadoInput}
                  fullWidth
                  defaultValue=""
                  variant="outlined"
                />
                <Button
                  disabled
                  className={classes.boton}
                  variant="contained"
                  color="primary"
                >
                  Grabar nueva descripción
                </Button>
              </Paper>
              </Grow>
            </Grid>
            <Grid item xs={7}>
            <Grow in={handleChangeGrow}   style={{ transformOrigin: '0 0 0' }}
            {...(checkedGrow ? { timeout: 1500 } : {})}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" noWrap>
                  Modificación de Mantención
                </Typography>
                listado
                <Grid container>
                  <Grid item xs={6} spacing={1}>
                    <Box m={0.5}>
                      <TextField
                        id="elementoMod"
                        label="Elemento"
                        className={classes.espaciadoInput}
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        id="tipoMod"
                        label="Tipo"
                        className={classes.espaciadoInput}
                        fullWidth
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6} spacing={1}>
                    <Box m={0.5}>
                      <TextField
                        id="accionMod"
                        label="Acción"
                        className={classes.espaciadoInput}
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        id="kilometrajeMod"
                        label="Kilometraje Programa"
                        className={classes.espaciadoInput}
                        fullWidth
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Box m={0.5}>
                    <Button
                      disabled
                      className={classes.boton}
                      variant="contained"
                      fullWidth
                      color="primary"
                    >
                      Grabar modificación
                    </Button>
                  </Box>
                  <Box m={0.5}>
                    <Button
                      disabled
                      className={classes.boton}
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Eliminar elemento
                    </Button>
                  </Box>
                </Grid>
              </Paper>
              </Grow>
            </Grid>
            <Grid item xs={5}>
            <Grow in={handleChangeGrow}   style={{ transformOrigin: '0 0 0' }}
            {...(checkedGrow ? { timeout: 2500 } : {})}>
              <Paper elevation={3} className={classes.paper}>
              
                <Typography variant="h6" noWrap>
                <ListItemIcon className={classes.menuItemIcon}>
              <FontAwesomeIcon icon={faTools} size="xs" />
              </ListItemIcon>Ingreso Nueva Mantención
                </Typography>

                <TextField
                  id="elementoMod"
                  label="Elemento"
                  className={classes.espaciadoInput}
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  id="tipoMod"
                  label="Tipo"
                  className={classes.espaciadoInput}
                  fullWidth
                  variant="outlined"
                />

                <TextField
                  id="accionMod"
                  label="Acción"
                  className={classes.espaciadoInput}
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  id="kilometrajeMod"
                  label="Kilometraje Programa"
                  className={classes.espaciadoInput}
                  fullWidth
                  variant="outlined"
                />
                <Button
                      disabled
                      className={classes.boton}
                      variant="contained"
                      fullWidth
                      color="primary"
                    >
                      Grabar Ingreso
                    </Button>
              </Paper>
              </Grow>
            </Grid>
          </Grid>
        
      </div>

  );
}
