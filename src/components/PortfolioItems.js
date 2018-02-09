import React from 'react';

const PortfolioItems = (props) => {
    return (
        <div>
            <h2>A thing I have done</h2>
            <p>This is item {props.match.params.id}</p>
        </div>
    );
};

export default PortfolioItems;