import { RouterState } from 'connected-react-router';

import { CounterState } from './ducks/counter/reducer';

export interface State {
    readonly counter: CounterState;
    readonly router: RouterState;
}
