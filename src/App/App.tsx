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
        fetch(this.apiRoot)
            .then(response => response.json())
            .then(categories => {
                this.setState({
                    categories: categories,
                    activeCategory: categories[0] ? categories[0] : ''
                });
            });
    }

    onSearchChange = (event: ChangeEvent): void => {
        this.setState({
            searchField: (event.target as HTMLInputElement).value
        });
    }

    render() {
        console.log(this.state.categories);
        console.log(this.state.activeCategory);
        return (
            <Fragment>
                <Header
                    searchBarValue={this.state.searchField}
                    onSearchChange={this.onSearchChange}
                    categories={this.state.categories}
                    activeCategory={this.state.activeCategory} />
                <Main />
            </Fragment>
        );
    }
}

export default App;
