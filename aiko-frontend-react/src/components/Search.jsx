import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, Chip, Divider, Grid, makeStyles, TextField, Typography,
} from '@material-ui/core';
import { getAllLine, authentication } from '../apis/SPTrans';
import VirtualizedList from './Listfixed';
import StopCard from './StopCard';
import StopBus from '../img/StopBus.png';

const useStyles = makeStyles((theme) => ({
  list: {
    border: `2px solid ${theme.palette.primary.main}`,
    height: '220px',
    overflow: 'hidden',
  },
  chip: {
    marginLeft: '2px',
    marginTop: '2px',
  },
  stopinfo: {
    margin: '5px',
  },
  card: {
    background: theme.palette.secondary.main,
  },
  cardIcon: {
    width: '50px',
    height: '70px',
  },
}));

export default (props) => {
  const prop = props;

  const [lines, setLines] = useState();
  const [filterLine, setfilterLine] = useState([]);

  useEffect(() => {
    const execut = async () => {
      const reqLines = await getAllLine();
      if (reqLines.Message) {
        await authentication();
        execut();
      } else {
        reqLines.l.sort((value, next) => {
          if (value.c < next.c) {
            return -1;
          } if (value.c > next.c) {
            return 1;
          }
          return 0;
        });
        setLines(reqLines.l);
        setfilterLine(reqLines.l);
      }
    };
    execut();
  }, []);

  const [InputLine, setInputLine] = useState('');

  const eventInput = (event) => {
    setfilterLine(lines.filter((value) => value.c.includes(event.target.value)));
    setInputLine(event.target.value);
  };

  const handleDelete = (event) => () => (
    prop.setSelectLine(prop.selectLine.filter((value) => value.cl !== event))
  );

  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Grid container direction="column" alignItems="center" justify="center" className={classes.search} spacing={2}>
        <Grid item>
          <TextField
            value={InputLine}
            onChange={eventInput}
            label="Filtrar Linhas"
            variant="outlined"
          />
        </Grid>
        <Grid item style={{ maxWidth: '310px' }}>
          {prop.selectLine.map((value) => (
            <Chip
              className={classes.chip}
              key={value.cl}
              label={value.c}
              onDelete={handleDelete(value.cl)}
            />
          ))}
        </Grid>
        <Grid item className={classes.list}>
          <VirtualizedList
            quant={filterLine.length}
            lines={filterLine}
            selectLine={prop.selectLine}
            setSelectLine={prop.setSelectLine}
          />
        </Grid>
        <Grid item className={classes.stopinfo}>
          {prop.stopInfo.p
            ? <StopCard stop={prop.stopInfo} />
            : (
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2" color="primary">
                    Previsão de Chegada:
                  </Typography>
                  <Divider />
                  <Typography>
                    Após a escolha da linha, selecione uma parada
                  </Typography>
                  <Typography>
                    Clicando no ícone:
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={StopBus} alt="ícone de parada de ônibus" className={classes.cardIcon} />
                  </div>
                </CardContent>
              </Card>
            )}
        </Grid>
      </Grid>
    </Grid>
  );
};
