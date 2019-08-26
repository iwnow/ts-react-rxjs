import React, { Component } from "react";

import LazyCounter from './counter';
import Di from './di';
import Rx from './rx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>I the App 😜...</p>
                <LazyCounter />
                <Di />
                <Rx />
            </div>
        )
    }
}

export default App;