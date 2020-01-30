import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <input type="text" name="search" id="search" placeholder="Search database" />
                <div id="selector">
                    <div id="activeCategory">
                        <FontAwesomeIcon
                            icon={faChevronRight}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;