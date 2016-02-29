import React from 'react';
import {render} from 'react-dom';
import linkState from 'react-link-state';

class App extends React.Component {
  state = {
    username: 'myworld'
  };

  render() {
    console.log(this.state);
    return <input type="text" valueLink={linkState(this, 'username')} />
  }
}

render(
  <App />,
  document.getElementById('mount')
);