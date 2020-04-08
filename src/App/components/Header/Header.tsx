import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';

interface HeaderProps {
    searchBarValue: string;
    onSearchChange: Function;
    categories: object
    activeCategory: string;
    selectActiveCategory: Function;
};

const Header = (props: HeaderProps) => {
    return (
        <header>
            <h1>Star Wars</h1>
            <SearchBar
                onSearchChange={props.onSearchChange}
                categories={props.categories}
                activeCategory={props.activeCategory}
                selectActiveCategory={props.selectActiveCategory} />
            <br />
        </header>
    );
}

export default Header;
