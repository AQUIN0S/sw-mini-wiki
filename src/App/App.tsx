import React, { Component, Fragment, ChangeEvent } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ApiInterface from './utility/ApiInterface';

interface AppState {
    searchField: string;
    categories: object;
    data: object;
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
        const categories = await ApiInterface.fetchCategories();
        const activeCategory = Object.keys(categories)[0];

        this.setState({
            categories: categories,
            activeCategory: activeCategory ? activeCategory : ''
        });

        // This loop doesn't work properly yet....
        for (let category in categories) {
            const categoryData = (await ApiInterface.fetchDataInCategory(category)) as object;
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    [category]: categoryData
                }
            }));
        }
    }

    componentDidUpdate() {
        console.log(this.state.categories);
        console.log(this.state.data);
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
                <Main />
            </Fragment>
        );
    }
}

export default App;
