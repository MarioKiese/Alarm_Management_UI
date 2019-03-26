import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar.js";
import Table from "./components/Table";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import NavigationDrawer from "./components/NavigationDrawer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#22969e"
    },
    secondary: {
      main: "#87bc43"
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawer: false,
      login: true
    };
  }

  handleOpenDrawer = open => {
    this.setState({
      navDrawer: open
    });
  };

  handleLogin = () => {
    this.setState({
      login: !this.state.login
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ButtonAppBar onOpenDrawer={this.handleOpenDrawer} />
        <Table />
        <NavigationDrawer
          navDrawer={this.state.navDrawer}
          onToggleLogin={this.handleLogin}
          login={this.state.login}
          onOpenDrawer={this.handleOpenDrawer}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
