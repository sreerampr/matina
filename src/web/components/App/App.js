import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import './app.css';
import Footer from '../Footer/Footer';
import styles from './styles';
import theme from './theme';

class App extends Component {
  state = {
    activeTab: 'gallery',
  }
  handleTabChange(value) {
    this.setState({ activeTab: value });
    this.props.history.push(`/${value}`);
  }
  render() {
    const { classes, children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div id="app" className={classes.app}>
          {children}
          <Footer handleTabChange={this.handleTabChange.bind(this)} activeTab={this.state.activeTab}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(App));