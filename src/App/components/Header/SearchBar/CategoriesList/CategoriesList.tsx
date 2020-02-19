import React, { Fragment } from 'react';

interface CategoriesListProps {
    categories: object;
    activeCategory: string;
};

const CategoriesList = (props: CategoriesListProps) => {
    const categoryNamesArray = Object.keys(props.categories).filter(key => key !== props.activeCategory);
    return (
        <Fragment>
            {categoryNamesArray.map(category => {
                return (
                    <div key={category} className="option">
                        {category}
                    </div>
                );
            })}
        </Fragment>
    );
};

export default CategoriesList;