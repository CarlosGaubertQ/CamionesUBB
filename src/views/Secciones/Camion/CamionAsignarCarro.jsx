import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import arrayMove from "array-move";
import Paper from "@material-ui/core/Paper";
import SortableList, { SortableItem } from "react-easy-sort";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    textAlign: "center",
    width: "100%",
    borderColor: "#430",
  },
  select: {
    width: "80%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "95%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function CamionAsignarCarro() {
  const classes = useStyles();
  const [items, setItems] = useState([
    { title: "maestro", description: "maestro" },
    { title: "Tarea 2", description: "Descripcion 2" },
    { title: "Tarea 3", description: "Descripcion 3" },
    { title: "Tarea 4", description: "Descripcion 4" },
    { title: "Tarea 5", description: "Descripcion 5" },
  ]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  return (
    <div>
      <Grid container>
        <Paper className={classes.paper}>
          <Grid item xs={12} container direction="row" justify="center">
            <Grid item xs={6} container direction="row" justify="center">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="primerCamion">Camión 1</InputLabel>
                <Select
                  labelId="primerCamion"
                  id="primerCamion"
                  value={age}
                  onChange={handleChange}
                  label="Camion 1"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={10}>dx1234</MenuItem>
                  <MenuItem value={20}>dx2452</MenuItem>
                  <MenuItem value={30}>dx6234</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} container direction="row" justify="center">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="primerCamion">Camión 2</InputLabel>
                <Select
                  labelId="primerCamion"
                  id="primerCamion"
                  value={age}
                  onChange={handleChange}
                  label="Camion 1"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={10}>dx1234</MenuItem>
                  <MenuItem value={20}>dx2452</MenuItem>
                  <MenuItem value={30}>dx6234</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        <Grid item xs={12} container justify="center">
          <Paper className={classes.paper}>
            <SortableList
              onSortEnd={onSortEnd}
              className="list"
              draggedItemClassName="dragged"
            >
              {items.map((item) => (
                <SortableItem key={item}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {item.description}
                      </Typography>

                      <br />
                    </CardContent>
                    <CardActions>
                      <Button size="small">Asignar a camión</Button>
                    </CardActions>
                  </Card>
                </SortableItem>
              ))}
            </SortableList>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
