import React from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import LineCard from './LineCard';

const useStyles = makeStyles((theme) => ({
  info: {
    margin: '10px',
  },
  h: {
    color: theme.palette.primary.main,
  },
}));

export default (props) => {
  const prop = props;

  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.info}>
      <Grid container spacing={2}>
        <Grid container justify="center">
          <Divider />
          <h1 className={classes.h}>Informações das linhas</h1>
          <Divider />
        </Grid>
        {prop.selectLine.length
          ? (
            prop.selectLine.map((line) => (
              <Grid item xs={4}>
                <LineCard line={line} />
              </Grid>
            ))
          )
          : <Grid container justify="center"><h2 className={classes.h}>Selecione uma linha de Ônibus !!</h2></Grid>}
      </Grid>
    </Grid>
  );
};
