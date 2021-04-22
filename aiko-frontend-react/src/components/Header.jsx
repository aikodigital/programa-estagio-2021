import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import img from '../img/aiko.png';

const useStyles = makeStyles((theme) => ({
  GridImg: {
    margin: '10px',
  },
  img: {
    height: '5vh',
  },
  h3: {
    color: theme.palette.primary.main,
    margin: 0,
    padding: 0,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Grid container alineItems="center" className={classes.GridImg}>
      <img className={classes.img} src={img} alt="logo Aiko" />
      <h2 className={classes.h3}> - DASHBOARD</h2>
    </Grid>
  );
};
