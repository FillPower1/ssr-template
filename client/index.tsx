import { loadableReady } from '@loadable/component';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { createStore } from './store';
import App from './app';

const { store, history } = createStore();

loadableReady(() => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
});
