import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
} from '@reduxjs/toolkit';

import { isServer } from '../utils/is-server';

import { State } from './types';
import counter from './ducks/counter/reducer';

const rootReducer = (history: History) =>
    combineReducers<State>({
        counter,
        router: connectRouter(history)
    });

export const createStore = (initialState = {}, url = '/') => {
    const preloadedState = !isServer ? window.__APP_STATE__ : initialState;

    if (!isServer) {
        delete window.__APP_STATE__;
    }

    const history = isServer
        ? createMemoryHistory({ initialEntries: [url] })
        : createBrowserHistory();

    const store = configureStore({
        reducer: rootReducer(history),
        preloadedState,
        middleware: getDefaultMiddleware().concat(routerMiddleware(history)),
        devTools: process.env.NODE_ENV !== 'production' && !isServer
    });

    return { store, history };
};
