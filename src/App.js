import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar.js';
import Table from './components/Table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#24959e',
    },
    secondary: {
        main: '#87bc43',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ButtonAppBar />
        <Table />
      </MuiThemeProvider>
    );
  }
}

export default App;
