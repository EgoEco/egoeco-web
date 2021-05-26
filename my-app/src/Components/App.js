import Router from './Router';
import GlobalStyles from './GlobalStyles';
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
        <>
            <Router/>
            <GlobalStyles />
        </>
    );
  }
}
export default App;
