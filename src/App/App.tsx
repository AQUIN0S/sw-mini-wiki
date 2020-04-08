import React, { Component, Fragment, ChangeEvent } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ApiInterface from './utility/ApiInterface';
import './App.css';

interface AppState {
    searchField: string;
    categories: object;
    data: {[key: string]: {[key: string]: string}[]};
    activeCategory: string;
}

class App extends Component<{}, AppState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            searchField: '',
            categories: {},
            data: {},
            activeCategory: ''
        };
    }

    async componentDidMount() {
        // dummy data
        const categories = {
            "people": "https://swapi.co/api/people/", 
            "planets": "https://swapi.co/api/planets/", 
            "films": "https://swapi.co/api/films/", 
            "species": "https://swapi.co/api/species/", 
            "vehicles": "https://swapi.co/api/vehicles/", 
            "starships": "https://swapi.co/api/starships/"
        };
        // const categories = await ApiInterface.fetchCategories();
        const activeCategory = Object.keys(categories)[0];

        this.setState({
            categories: categories,
            activeCategory: activeCategory ? activeCategory : '',
            // this is just a dummy line to set some initial data
            data: {"people": ApiInterface.fetchDummyDataInCategory()}
        });

        // // This loop has been SUCH a pain!!!!!!
        // for (let category in categories) {
        //     const categoryData = (await ApiInterface.fetchDataInCategory(category));
        //     this.setState(prevState => ({
        //         data: {
        //             ...prevState.data,
        //             [category]: categoryData
        //         }
        //     }));
        // }
    }

    onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            searchField: event.target.value
        });
    }

    selectActiveCategory = (event: React.MouseEvent<HTMLElement>): void => {
        this.setState({
            activeCategory: event.currentTarget.textContent
        });
    }

    render() {
        return (
            <Fragment>
                <Header
                    searchBarValue={this.state.searchField}
                    onSearchChange={this.onSearchChange}
                    categories={this.state.categories}
                    activeCategory={this.state.activeCategory}
                    selectActiveCategory={this.selectActiveCategory} />
                <Main
                    categoryData={this.state.data[this.state.activeCategory]} />
            </Fragment>
        );
    }
}

export default App;
