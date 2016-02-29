import React from 'react';
import {render} from 'react-dom';
import linkState from 'react-link-state';
import shouldPureComponentUpdate from 'react-pure-render/function';

class App extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

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
