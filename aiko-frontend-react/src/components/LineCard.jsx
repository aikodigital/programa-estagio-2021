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
          Linha:
          {' '}
          {prop.line.c}
        </Typography>
        <Divider />
        <Typography>
          Sentido:
          {' '}
          {prop.line.sl === 1 ? prop.line.lt0 : prop.line.lt1}
          {' / '}
          {prop.line.sl === 1 ? prop.line.lt1 : prop.line.lt0}
        </Typography>
        <Typography>
          Possui localização das paradas no mapa:
          {' '}
          {prop.line.stops.length ? 'SIM' : 'NÃO'}
        </Typography>
        <Typography>
          Quantidade de ônibus na linha:
          {' '}
          {prop.line.qv}
        </Typography>
        <Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Veículos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {prop.line.vs.length
                  ? (
                    prop.line.vs.map((vs) => (
                      <Card>
                        <CardContent>
                          <Typography>
                            Prefixo do veículo:
                            {' '}
                            {vs.p}
                          </Typography>
                          <Typography>
                            Acessível a deficientes:
                            {' '}
                            {vs.a ? 'SIM' : 'NÃO'}
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

        </Typography>
      </CardContent>
    </Card>
  );
};
