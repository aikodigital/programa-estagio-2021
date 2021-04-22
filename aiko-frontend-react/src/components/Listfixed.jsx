import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { getStop } from '../apis/SPTrans';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

const clickLine = (value, index) => () => {
  if (value.selectLine.filter((val) => val.cl === value.lines[index].cl).length === 0) {
    const sincroStop = async () => {
      const req = await getStop(value.lines[index].cl);
      const merge = { ...value.lines[index], stops: req };
      value.setSelectLine(value.selectLine.concat(merge));
    };
    sincroStop();
  }
};

function renderRow(props) {
  const { data, index, style } = props;
  return (
    <ListItem button onClick={clickLine(data, index)} style={style} key={index}>
      <ListItemText primary={`${data.lines[index].c}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
};

export default function VirtualizedList(props) {
  const { quant } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FixedSizeList height={200} width={200} itemSize={46} itemCount={quant} itemData={props}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

VirtualizedList.propTypes = {
  quant: PropTypes.number.isRequired,
};
