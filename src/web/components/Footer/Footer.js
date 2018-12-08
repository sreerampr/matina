import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import FaceIcon from '@material-ui/icons/Face';
import WebIcon from '@material-ui/icons/Web';
import GamesIcon from '@material-ui/icons/Games';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: this.props.activeTab,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handleTabChange(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Gallery" value="gallery" icon={<PhotoLibraryIcon />} />
        <BottomNavigationAction label="Blog" value="blog" icon={<WebIcon />} />
        {/* <BottomNavigationAction label="Games" value="games" icon={<GamesIcon />} /> */}
        <BottomNavigationAction label="About me" value="about" icon={<FaceIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
