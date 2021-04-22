import React, { useState } from 'react';
import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import Map from './components/Maps';
import Search from './components/Search';
import Header from './components/Header';
import LineInfo from './components/LineInfo';

export default () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#55A1DD',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });

  const [selectLine, setSelectLine] = useState([]);
  const [stopInfo, setStopInfo] = useState({});
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Header />
        <Search
          selectLine={selectLine}
          setSelectLine={setSelectLine}
          stopInfo={stopInfo}
        />
        <Map selectLine={selectLine} setStopInfo={setStopInfo} />
        <LineInfo selectLine={selectLine} />
      </Grid>
    </ThemeProvider>
  );
};
