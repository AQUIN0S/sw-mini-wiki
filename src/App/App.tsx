import React, { Component, Fragment, ChangeEvent } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

interface AppState {
    searchField: string;
    data: object;
    activeCategory: string;
}

class App extends Component<{}, AppState> {

    apiRoot: URL = new URL("https://swapi.co/api/");

    onSearchChange = (event: ChangeEvent): void => {
        this.setState({
            searchField: (event.target as HTMLInputElement).value
        });
    }

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            searchField: '',
            data: {},
            activeCategory: ''
        };
    }

    render() {
        return (
            <Fragment>
                <Header searchBarValue={this.state.searchField} onSearchChange={this.onSearchChange} />
                <Main />
            </Fragment>
        );
    }
}

export default App;
