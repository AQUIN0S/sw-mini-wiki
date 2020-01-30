import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        );
    }
}

export default App;