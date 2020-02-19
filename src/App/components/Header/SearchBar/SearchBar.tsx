import React, { Component, Fragment, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CategoriesList from './CategoriesList/CategoriesList';

interface SearchBarState {
    categoriesVisible: boolean;
};

interface SearchBarProps {
    onSearchChange: Function;
    categories: object;
    activeCategory: string;
};

class SearchBar extends Component<SearchBarProps, SearchBarState> {

    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            categoriesVisible: false
        };
    }

    toggleCategoriesVisible = (): void => {
        this.setState((prevState: SearchBarState) => {
            return { categoriesVisible: (prevState.categoriesVisible ? false : true) }
        });
    }

    render() {
        return (
            <div className="searchBar">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search database"
                    onChange={ (event: React.ChangeEvent<HTMLInputElement>): void => {
                        return this.props.onSearchChange(event)
                    } }
                />
                <div id="selector" onClick={this.toggleCategoriesVisible}>
                    {
                        this.state.categoriesVisible ? (
                            <Fragment>
                                <div id="activeCategory">
                                    <FontAwesomeIcon icon={faChevronDown} /> {this.props.activeCategory}
                                </div>
                                <div id="options">
                                    <CategoriesList activeCategory={this.props.activeCategory} categories={this.props.categories} />
                                </div>
                            </Fragment>
                        ) : (
                            <div id="activeCategory">
                                <FontAwesomeIcon icon={faChevronRight} /> {this.props.activeCategory}
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
    
};

export default SearchBar;