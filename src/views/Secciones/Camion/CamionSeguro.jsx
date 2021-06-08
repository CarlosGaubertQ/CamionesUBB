import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    paper: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(3),
      textAlign: 'center',
      width: '100%',
      borderColor: "#430",
    },
    espaciado:{
      
    },
    espaciadoInput:{
      marginTop: theme.spacing(3)
    },
    espaciadoLeft:{
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(3)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    },
    
}));

export default function CamionSeguro() {
    const classes = useStyles();
    const [patente, setPatente] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());


    const handleChange = (event) => {
        setPatente(event.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={4} container direction="row" justify="center">
                    <Button variant="contained"  color="primary">
                        Ingreso
                    </Button>
                </Grid >
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
                <Paper fullWidth className={classes.paper}> 
                    <Grid item xs={12} container direction="row" justify="center"> 
                        <Grid item xs={6} className={classes.espaciado} container direction="row" justify="center">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="primerCamion">Vehiculo</InputLabel>
                                <Select
                                labelId="vehiculo"
                                id="vehiculo"
                                value={patente}
                                onChange={handleChange}
                                label="Vehiculo"
                                >
                                <MenuItem value="">
                                    <em></em>
                                </MenuItem>
                                <MenuItem value={10}>dx1234</MenuItem>
                                <MenuItem value={20}>dx2452</MenuItem>
                                <MenuItem value={30}>dx6234</MenuItem>
                                </Select>
                            </FormControl>
                            
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                        
                                    <KeyboardDatePicker
                                    margin="normal"
                                    id="fechapago"
                                    className={classes.espaciadoInput}
                                    label="Fecha pago"
                                    format="dd/MM/yyyy"
                                    fullWidth
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <TextField
                                required
                                id="valorpago"
                                type='number'
                                className={classes.espaciadoInput}
                                fullWidth
                                label="Valor pago"
                                variant="outlined"
                            />
                            <Button fullWidth className={classes.espaciadoInput}  variant="contained" color="primary">
                                Grabar ingreso
                            </Button>
                        </Grid >
                    
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}
