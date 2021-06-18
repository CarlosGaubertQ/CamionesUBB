import "date-fns";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
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
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";
import Swal from "sweetalert2";
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
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [colorIngreso, setColorIngreso] = React.useState("secondary");
  const [colorModificacion, setColorModificacion] = React.useState("primary");
  const [colorEliminar, setColorEliminar] = React.useState("primary");
  const [switchCombo, setSwitchCombo] = React.useState(false);
  const [patente, setPatente] = React.useState("");
  const [camionesItem, setCamionesItem] = React.useState([]);
  const [actionButton, setActionButton] = React.useState("Guardar");
  const handleChangePatente = (event) => {
    setPatente(event.target.value);
    const datosCamion = camionesItem.find(camion => camion.PATENTE_CAMION === event.target.value)
    console.log(datosCamion)
    try {
      document.getElementById("modelo").value = datosCamion.MODELO_CAMION;
    document.getElementById("sigla").value = datosCamion.CODIGO_MANTENCION;
    document.getElementById("marcaCamion").value = datosCamion.MARCA_CAMION;
    document.getElementById("color").value = datosCamion.COLOR_CAMION;
    document.getElementById("aniofabricacion").value = datosCamion.ANO_FABRICACION_CAMION;
    document.getElementById("kmcompra").value = datosCamion.KILOMETRAJE_COMPRA_CAMION;
    setSelectedDate(new Date(datosCamion.FECHA_COMPRA_CAMION))
    document.getElementById("valorcompra").value = datosCamion.VALOR_COMPRA_CAMION;
    document.getElementById("cargaMaxima").value = datosCamion.CARGA_MAXIMA;
    document.getElementById("observacion").value = datosCamion.OBSERVACION_CAMION;
    document.getElementById("carter").value = datosCamion.CAPACIDAD_CARTER;
    document.getElementById("caja").value = datosCamion.CAPACIDAD_CAJA;
    document.getElementById("diferencial").value = datosCamion.CAPACIDAD_DIFERENCIAL;
    document.getElementById("cajacambio").value = datosCamion.TIPO_CAJA_CAMBIO;
    document.getElementById("tipoDiferencial").value = datosCamion.TIPO_DIFERENCIAL;
    document.getElementById("embrague").value = datosCamion.TIPO_EMBRIAGE;
    document.getElementById("suspencion").value = datosCamion.TIPO_SUSPENCION;
    document.getElementById("frenodemotor").value = datosCamion.MODELO_FRENO_MOTOR;
    document.getElementById("direccion").value = datosCamion.MODELO_DIRECCION;
    document.getElementById("inyeccion").value = datosCamion.MODELO_INYECCION;
    document.getElementById("sisElectrico").value = datosCamion.MODELO_SISTEMA_ELECTRICO;
    document.getElementById("motor").value = datosCamion.NRO_CAMION;
    document.getElementById("chasis").value = datosCamion.NRO_CHASIS;
    document.getElementById("ejes").value = datosCamion.NRO_EJES;
    } catch (error) {
      
    }
    

  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    

    cargarCamiones();
  }, []);
  const cargarCamiones = async () => {
    const { data } = await Axios.get("http://localhost:4000/api/camion/");
    setCamionesItem(data.data);
    return null;
  };  
  const onSubmit = (data, e) => {
    var mensajeDatosFaltantes = "";
    
    if (data.patente === undefined)
      mensajeDatosFaltantes += " - Falta ingresar patente de camión.<br>";
    if (data.modelo === undefined)
      mensajeDatosFaltantes += " - Falta ingresar modelo de camión.<br>";
    if (data.sigla === undefined)
      mensajeDatosFaltantes += " - Falta ingresar sigla de camión.<br>";
    if (data.marcaCamion === undefined)
      mensajeDatosFaltantes += " - Falta ingresar marca de camión.<br>";
    if (data.color === undefined)
      mensajeDatosFaltantes += " - Falta ingresar color de camión.<br>";
    if (data.aniofabricacion === undefined)
      mensajeDatosFaltantes += " - Falta ingresar Año de camión.<br>";
    if (data.kmcompra === undefined)
      mensajeDatosFaltantes += " - Falta ingresar año de camión.<br>";
    if (data.valorcompra === undefined)
      mensajeDatosFaltantes +=
        " - Falta ingresar valor de compra del camión.<br>";
    if (data.cargaMaxima === undefined)
      mensajeDatosFaltantes += " - Falta ingresar carga maxima de camión.<br>";
    if (data.observacion === undefined)
      mensajeDatosFaltantes += " - Falta ingresar observación de camión.<br>";
    if (data.carter === undefined)
      mensajeDatosFaltantes += " - Falta ingresar carter.<br>";
    if (data.caja === undefined)
      mensajeDatosFaltantes += " - Falta ingresar caja.<br>";
    if (data.diferencial === undefined)
      mensajeDatosFaltantes += " - Falta ingresar diferencial de camión.<br>";
    if (data.cajacambio === undefined)
      mensajeDatosFaltantes += " - Falta ingresar caja de camión.<br>";
    if (data.tipoDiferencial === undefined)
      mensajeDatosFaltantes += " - Falta ingresar tipo de diferencial.<br>";
    if (data.embrague === undefined)
      mensajeDatosFaltantes += " - Falta ingresar embrague.<br>";
    if (data.suspencion === undefined)
      mensajeDatosFaltantes += " - Falta ingresar suspencion.<br>";
    if (data.frenodemotor === undefined)
      mensajeDatosFaltantes += " - Falta ingresar freno de motor.<br>";
    if (data.direccion === undefined)
      mensajeDatosFaltantes += " - Falta ingresar direccion.<br>";
    if (data.inyeccion === undefined)
      mensajeDatosFaltantes += " - Falta ingresar inyeccion.<br>";
    if (data.sisElectrico === undefined)
      mensajeDatosFaltantes += " - Falta ingresar sistema electrico.<br>";
    if (data.motor === undefined)
      mensajeDatosFaltantes += " - Falta ingresar motor.<br>";
    if (data.chasis === undefined)
      mensajeDatosFaltantes += " - Falta ingresar chasis.<br>";
    if (data.ejes === undefined)
      mensajeDatosFaltantes += " - Falta ingresar ejes.<br>";

    switch (actionButton) {
      case "Guardar":
        if (mensajeDatosFaltantes.length > 0) {
          Swal.fire({
            icon: "warning",
            title: "Datos vacios.",
            html:
              "<div style='text-align: left;'>" +
              mensajeDatosFaltantes +
              "</div>",
            customClass: {
              popup: "format-pre",
            },
          });
        } else {
          //grabar
          Axios.post("http://localhost:4000/api/camion/", {
            PATENTE_CAMION: data.patente,
            MODELO_CAMION: data.modelo,
            CODIGO_MANTENCION: data.sigla,
            MARCA_CAMION: data.marcaCamion,
            COLOR_CAMION: data.color,
            ANO_FABRICACION_CAMION: data.aniofabricacion,
            KILOMETRAJE_COMPRA_CAMION: data.kmcompra,
            FECHA_COMPRA_CAMION: selectedDate,
            VALOR_COMPRA_CAMION: data.valorcompra,
            CARGA_MAXIMA: data.cargaMaxima,
            OBSERVACION_CAMION: data.observacion,
            CAPACIDAD_CARTER: data.carter,
            CAPACIDAD_CAJA: data.caja,
            CAPACIDAD_DIFERENCIAL: data.diferencial,
            TIPO_CAJA_CAMBIO: data.cajacambio,
            TIPO_DIFERENCIAL: data.tipoDiferencial,
            TIPO_EMBRIAGE: data.embrague,
            TIPO_SUSPENCION: data.suspencion,
            MODELO_FRENO_MOTOR: data.frenodemotor,
            MODELO_DIRECCION: data.direccion,
            MODELO_INYECCION: data.inyeccion,
            MODELO_SISTEMA_ELECTRICO: data.sisElectrico,
            NRO_CAMION: data.motor,
            NRO_CHASIS: data.chasis,
            NRO_EJES: data.ejes,
          })
            .then((response) => {
              console.log(response);
              if (response.status === 200) {
                Swal.fire({
                  title: "Camion creado",
                  text: response.data.message,
                  icon: "success",
                });
              }
              cargarCamiones()
              e.target.reset();
            })
            .catch((error) => {
              Swal.fire({
                title: "Error !",
                text: error.response.data.message,
                icon: "error",
              });
            });
        }
        break;
      case "Modificar":
        if (mensajeDatosFaltantes.length > 0) {
          Swal.fire({
            icon: "warning",
            title: "Datos vacios.",
            html:
              "<div style='text-align: left;'>" +
              mensajeDatosFaltantes +
              "</div>",
            customClass: {
              popup: "format-pre",
            },
          });
        } else {
          if(patente !== ""){
            Axios.put("http://localhost:4000/api/camion/" + patente, {
            PATENTE_CAMION: data.patente,
            MODELO_CAMION: data.modelo,
            CODIGO_MANTENCION: data.sigla,
            MARCA_CAMION: data.marcaCamion,
            COLOR_CAMION: data.color,
            ANO_FABRICACION_CAMION: data.aniofabricacion,
            KILOMETRAJE_COMPRA_CAMION: data.kmcompra,
            FECHA_COMPRA_CAMION: selectedDate,
            VALOR_COMPRA_CAMION: data.valorcompra,
            CARGA_MAXIMA: data.cargaMaxima,
            OBSERVACION_CAMION: data.observacion,
            CAPACIDAD_CARTER: data.carter,
            CAPACIDAD_CAJA: data.caja,
            CAPACIDAD_DIFERENCIAL: data.diferencial,
            TIPO_CAJA_CAMBIO: data.cajacambio,
            TIPO_DIFERENCIAL: data.tipoDiferencial,
            TIPO_EMBRIAGE: data.embrague,
            TIPO_SUSPENCION: data.suspencion,
            MODELO_FRENO_MOTOR: data.frenodemotor,
            MODELO_DIRECCION: data.direccion,
            MODELO_INYECCION: data.inyeccion,
            MODELO_SISTEMA_ELECTRICO: data.sisElectrico,
            NRO_CAMION: data.motor,
            NRO_CHASIS: data.chasis,
            NRO_EJES: data.ejes,
          })
            .then((response) => {
              if (response.status === 200) {
                Swal.fire({
                  title: "Camion modificado",
                  text: response.data.message,
                  icon: "success",
                });
              }
              
            })
            .catch((error) => {
              Swal.fire({
                title: "Cuidado !",
                text: "Ocurrio un error inesperado",
                icon: "warning",
              });
            });
              
          }else{
            Swal.fire({
              title: "Error !",
              text: "Debe seleccionar algun camión",
              icon: "error",
            });
          }
          
        }

        break;
      case "Eliminar":
        if(patente !== ""){
          Axios.delete("http://localhost:4000/api/camion/" + patente)
          .then((response) =>{
            Swal.fire({
              title: "Camion eliminado",
              text: response.data.message,
              icon: "success",
            });
            cargarCamiones()
            e.target.reset();
          })
          .catch((error) =>{
            Swal.fire({
              title: "Error !",
              text: "Debe seleccionar algun camión",
              icon: "error",
            });
          })
        }
        break;
      default:
        break;
    }
  };

  const switchColor = async (evt) => {
    switch (evt.target.innerText) {
      case "INGRESO":
        setColorIngreso("secondary");
        setColorModificacion("primary");
        setColorEliminar("primary");
        setSwitchCombo(false);
        document.getElementById("aBoton").innerHTML = "GRABAR INGRESO";
        setActionButton("Guardar");
        break;
      case "MODIFICACIÓN":
        setColorIngreso("primary");
        setColorModificacion("secondary");
        setColorEliminar("primary");
        setSwitchCombo(true);
        document.getElementById("aBoton").innerHTML = "MODIFICAR INGRESO";
        setActionButton("Modificar");
        break;
      case "ELIMINACIÓN":
        setColorIngreso("primary");
        setColorModificacion("primary");
        setColorEliminar("secondary");
        setSwitchCombo(true);
        document.getElementById("aBoton").innerHTML = "ELIMINAR INGRESO";
        setActionButton("Eliminar");
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid
            item
            xs={4}
            className={classes.espaciado}
            container
            direction="row"
            justify="center"
          >
            <Button
              variant="contained"
              onClick={switchColor}
              fullWidth
              color={colorIngreso}
            >
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
            <Button
              variant="contained"
              onClick={switchColor}
              fullWidth
              color={colorModificacion}
            >
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
            <Button
              variant="contained"
              onClick={switchColor}
              fullWidth
              color={colorEliminar}
            >
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
                {!switchCombo ? (
                  <TextField
                    id="patente"
                    name="patente"
                    {...register("patente", { required: false })}
                    fullWidth
                    label="Patente"
                    variant="outlined"
                  />
                ) : (
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel id="primerCamion">Camión 1</InputLabel>
                    <Select
                      labelId="primerCamion"
                      id="primerCamion"
                      value={patente}
                      onChange={handleChangePatente}
                      label="Camion 1"
                    >
                      <MenuItem value="">
                        <em></em>
                      </MenuItem>
                      {camionesItem
                        ? camionesItem.map((item, index) => {
                            return (
                              <MenuItem
                                key={item.PATENTE_CAMION}
                                value={item.PATENTE_CAMION}
                              >
                                {item.PATENTE_CAMION}
                              </MenuItem>
                            );
                          })
                        : null}
                    </Select>
                  </FormControl>
                )}

                <TextField
                  id="sigla"
                  {...register("sigla", { required: false })}
                  className={classes.espaciadoInput}
                  fullWidth
                  label="Sigla"
                  variant="outlined"
                />
                <TextField
                  id="color"
                  {...register("color", { required: false })}
                  className={classes.espaciadoInput}
                  fullWidth
                  label="Color"
                  variant="outlined"
                />
                <TextField
                  type="number"
                  id="kmcompra"
                  {...register("kmcompra", { required: false })}
                  className={classes.espaciadoInput}
                  fullWidth
                  label="Km. de compra"
                  variant="outlined"
                />
                <TextField
                  type="number"
                  id="valorcompra"
                  {...register("valorcompra", { required: false })}
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
                  id="modelo"
                  {...register("modelo", { required: false })}
                  fullWidth
                  label="Modelo"
                  variant="outlined"
                />
                <TextField
                  id="marcaCamion"
                  {...register("marcaCamion", { required: false })}
                  className={classes.espaciadoInput}
                  fullWidth
                  label="Marca"
                  variant="outlined"
                />
                <TextField
                  type="number"
                  id="aniofabricacion"
                  {...register("aniofabricacion", { required: false })}
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
                  type="number"
                  id="cargaMaxima"
                  {...register("cargaMaxima", { required: false })}
                  className={classes.espaciadoInput}
                  fullWidth
                  label="Carga Maxima (ton) "
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
                  id="observacion"
                  {...register("observacion", { required: false })}
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
                      type="number"
                      id="carter"
                      {...register("carter", { required: false })}
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
                      type="number"
                      id="caja"
                      {...register("caja", { required: false })}
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
                      type="number"
                      id="diferencial"
                      {...register("diferencial", { required: false })}
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
                    <Grid
                      item
                      xs={12}
                      container
                      direction="row"
                      justify="center"
                    >
                      <Grid
                        item
                        xs={6}
                        container
                        direction="row"
                        justify="center"
                      >
                        <TextField
                          id="cajacambio"
                          {...register("cajacambio", { required: false })}
                          label="Caja de Cambio"
                          variant="outlined"
                          fullWidth
                          className={classes.espaciadoInput}
                        />

                        <TextField
                          id="embrague"
                          {...register("embrague", { required: false })}
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
                          id="tipoDiferencial"
                          {...register("tipoDiferencial", { required: false })}
                          fullWidth
                          className={classes.espaciadoLeft}
                          label="Diferencial"
                          variant="outlined"
                        />
                        <TextField
                          id="suspencion"
                          {...register("suspencion", { required: false })}
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
                    <Grid
                      item
                      xs={12}
                      container
                      direction="row"
                      justify="center"
                    >
                      <Grid
                        item
                        xs={6}
                        container
                        direction="row"
                        justify="center"
                      >
                        <TextField
                          id="frenodemotor"
                          {...register("frenodemotor", { required: false })}
                          label="Freno de motor"
                          variant="outlined"
                          fullWidth
                          className={classes.espaciadoInput}
                        />

                        <TextField
                          id="inyeccion"
                          {...register("inyeccion", { required: false })}
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
                          id="direccion"
                          {...register("direccion", { required: false })}
                          fullWidth
                          className={classes.espaciadoLeft}
                          label="Dirección"
                          variant="outlined"
                        />
                        <TextField
                          id="sisElectrico"
                          {...register("sisElectrico", { required: false })}
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
                      id="motor"
                      {...register("motor", { required: false })}
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
                      id="chasis"
                      {...register("chasis", { required: false })}
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
                      type="number"
                      id="ejes"
                      {...register("ejes", { required: false })}
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
                <Button
                  type="submit"
                  id="aBoton"
                  label="Ejes"
                  variant="contained"
                  color="primary"
                >
                  Grabar ingreso
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </div>
  );
}
