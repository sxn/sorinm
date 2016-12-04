import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import configureStore from './store';

import Root from './component/composed/Root';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();
