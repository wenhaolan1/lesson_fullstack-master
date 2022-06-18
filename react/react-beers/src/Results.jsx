import React from "react";

const Results = ({beers}) => {
    return (
        <div>
            {beers.map(beer => <li key={beers.id}>
                {beer.title} - <img src={beer.pic}/>
            </li>)}
        </div>
    )
}

export default Results