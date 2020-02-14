import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

interface HeaderProps {
    searchBarValue: string;
    onSearchChange: Function;
};

class Header extends Component<HeaderProps, {}> {
    render() {
        return (
            <header>
                <h1>Star Wars</h1>
                <SearchBar onSearchChange={this.props.onSearchChange} />
                <div>
                    The searchfield has value: {this.props.searchBarValue}
                </div>
            </header>
        );
    }
}

export default Header;
