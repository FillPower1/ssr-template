import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { counter } from '@ducks/counter/selectors';
import { increment, decrement } from '@ducks/counter/actions';

const Header = styled.h1`
    color: gold;
`;

const App = () => {
    const dispatch = useDispatch();
    const value = useSelector(counter);

    return (
        <React.Fragment>
            <Header>App</Header>
            <div>{value}</div>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(increment())}>+1</button>
        </React.Fragment>
    );
};

export default App;
