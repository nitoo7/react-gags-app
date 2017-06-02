import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore'
import Root from './containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore()
render(
  <Root store={store} />,
  document.getElementById('root')
)
