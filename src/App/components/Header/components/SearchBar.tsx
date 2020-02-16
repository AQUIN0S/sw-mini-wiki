import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
    onSearchChange: Function;
    activeCategory: string;
};

class SearchBar extends Component<SearchBarProps, {}> {
    render() {
        return (
            <div className="searchBar">
                <input type="text" name="search" id="search" placeholder="Search database" onChange={(
                    event: React.ChangeEvent<HTMLInputElement>
                ): void => this.props.onSearchChange(event)} />
                <div id="selector">
                    <div id="activeCategory">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
                <div className="options">
                    
                </div>
            </div>
        );
    }
}

export default SearchBar;