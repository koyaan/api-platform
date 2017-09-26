import React, { Component } from 'react';
import { HydraAdmin } from '@api-platform/admin';

class App extends Component {
    render() {
        return <HydraAdmin entrypoint="http://localhost"/> // Replace with your own API entrypoint
    }
}

export default App;