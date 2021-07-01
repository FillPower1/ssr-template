import { RouterState } from 'connected-react-router';

import { State } from './types';
import { initialState as counter } from './ducks/counter/reducer';

export const makeInitialState = (pathname = '/'): State => ({
    counter,
    router: {
        location: { pathname, search: '', hash: '', key: '' },
        action: 'POP'
    } as unknown as RouterState
});
