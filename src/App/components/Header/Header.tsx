import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

interface HeaderProps {
    searchBarValue: string;
    onSearchChange: Function;
    categories: object
    activeCategory: string;
};

class Header extends Component<HeaderProps, {}> {
    render() {
        return (
            <header>
                <h1>Star Wars</h1>
                <SearchBar
                    onSearchChange={this.props.onSearchChange}
                    categories={this.props.categories}
                    activeCategory={this.props.activeCategory} />
                <br />
                <div>
                    The searchfield has value: {this.props.searchBarValue}
                </div>
            </header>
        );
    }
}

export default Header;
