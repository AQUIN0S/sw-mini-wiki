import React, { Component, Fragment, ChangeEvent } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

interface AppState {
    searchField: string;
    categories: object;
    data: object;
    activeCategory: string;
}

class App extends Component<{}, AppState> {

    apiRoot: string = "https://swapi.co/api/";

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            searchField: '',
            categories: {},
            data: {},
            activeCategory: ''
        };
    }

    componentDidMount() {
        let response = fetch(this.apiRoot)
            .then(response => response.json())
            .then(categories => {
                this.setState({ categories: categories });
            });
    }

    onSearchChange = (event: ChangeEvent): void => {
        this.setState({
            searchField: (event.target as HTMLInputElement).value
        });
    }

    render() {
        console.log(this.state.categories);
        return (
            <Fragment>
                <Header
                    searchBarValue={this.state.searchField}
                    onSearchChange={this.onSearchChange}
                    activeCategory={this.state.activeCategory} />
                <Main />
            </Fragment>
        );
    }
}

export default App;
