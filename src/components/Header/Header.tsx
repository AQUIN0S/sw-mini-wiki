import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Star Wars</h1>
                <SearchBar />
            </header>
        );
    }
}

export default Header;