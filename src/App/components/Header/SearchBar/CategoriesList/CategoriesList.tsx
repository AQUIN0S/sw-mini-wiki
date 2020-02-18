import React, { Fragment } from 'react';

interface CategoriesArrayProps {
    categories: object;
    activeCategory: string;
};

const CategoriesList = (props: CategoriesArrayProps) => {
    const categories = Object.keys(props.categories).filter(key => key !== props.activeCategory);
    return (
        <Fragment>
            {categories.map(category => {
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