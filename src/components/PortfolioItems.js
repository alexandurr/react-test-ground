import React from 'react';

const PortfolioItems = (props) => {
    return (
        <div>
            <h2>Item {props.match.params.id}</h2>
            <p>This is item {props.match.params.id}</p>
        </div>
    );
};

export default PortfolioItems;