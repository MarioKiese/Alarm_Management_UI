import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Default_Avatar from "../images/default_avatar.png";
import LoginIcon from "@material-ui/icons/PowerSettingsNew";
import ServerIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import AlarmHistoryIcon from "@material-ui/icons/History";
import { IconButton } from "@material-ui/core";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class SwipeableTemporaryDrawer extends React.Component {
  getIcon(description) {
    switch (description) {
      case "servers":
        return <ServerIcon />;
      case "alarmhistory":
        return <AlarmHistoryIcon />;
      case "settings":
        return <SettingsIcon />;
      default:
    }
  }

  handleToggleDrawerClick = () => {
    this.props.onOpenDrawer(false);
  };

  render() {
    const { classes } = this.props;

    const loginColor = this.props.login ? "secondary" : "primary";

    const userArea = (
      <ListItem>
        <ListItemIcon>
          <Avatar alt="Avatar" src={Default_Avatar} />
        </ListItemIcon>
        <ListItemText primary="Mr. Developer" />
        <IconButton onClick={this.props.onToggleLogin}>
          <LoginIcon color={loginColor} />
        </IconButton>
      </ListItem>
    );

    const sideList = (
      <div className={classes.list}>
        <List>
          {[
            { description: "Servers", id: "servers" },
            { description: "Alarm History", id: "alarmhistory" }
          ].map(({ description, id }, index) => (
            <ListItem button key={id}>
              <ListItemIcon>{this.getIcon(id)}</ListItemIcon>
              <ListItemText primary={description} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[{ description: "Settings", id: "settings" }].map(
            ({ description, id }, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{this.getIcon(id)}</ListItemIcon>
                <ListItemText primary={description} />
              </ListItem>
            )
          )}
        </List>
      </div>
    );

    return (
      <SwipeableDrawer
        open={this.props.navDrawer}
        onClose={this.handleToggleDrawerClick}
        onOpen={this.handleToggleDrawerClick}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleToggleDrawerClick}
          onKeyDown={this.handleToggleDrawerClick}
        >
          {userArea}
          {sideList}
        </div>
      </SwipeableDrawer>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
