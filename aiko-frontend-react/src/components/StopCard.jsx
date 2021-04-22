import React from 'react';
import {
  makeStyles, Card, CardContent, Typography, Divider,
  Accordion, AccordionSummary, AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
}));

export default (props) => {
  const prop = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2" color="secondary">
          Previsão de Chegada
        </Typography>
        <Typography>
          Nome da Parada:
          {' '}
          {prop.stop.p.np}
        </Typography>
        <Divider />
        <Typography>
          Linhas:
        </Typography>
        {prop.stop.p.l.map((line) => (
          <Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{line.c}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {line.vs.length
                    ? (
                      line.vs.map((vs) => (
                        <Card>
                          <CardContent>
                            <Typography>
                              Prefixo do veículo:
                              {' '}
                              {vs.p}
                            </Typography>
                            <Typography>
                              Horário de chegada:
                              {' '}
                              {vs.t}
                            </Typography>
                          </CardContent>
                          <Divider />
                        </Card>
                      ))
                    )
                    : 'Não possui veiculos'}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
