import React from 'react';
import EventWrapper from './components/EventWrapper/EventWrapper';
import { list } from "./list";
import {Container, MainTitle} from "./components/Global";

const App: React.FC = () => {
    return (
        <Container>
            <MainTitle>Hello TSX</MainTitle>
            <EventWrapper eventSoon={list.events} />
        </Container>
    );
};

export default App;
