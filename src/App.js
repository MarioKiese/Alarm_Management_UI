import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar.js';
import Table from './components/Table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationDrawer from './components/NavigationDrawer';

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
  constructor(props){
    super(props);
    this.state = {
      navDrawer: false,
    }
  }

  handleOpenDrawer = (open) => {
    this.setState({
      navDrawer: open,
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ButtonAppBar onOpenDrawer={this.handleOpenDrawer} />
        <Table />
        <NavigationDrawer navDrawer={this.state.navDrawer} onOpenDrawer={this.handleOpenDrawer} />
      </MuiThemeProvider>
    );
  }
}

export default App;
