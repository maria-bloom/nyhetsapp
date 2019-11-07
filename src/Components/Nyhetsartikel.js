import React from 'react';


function Nyhetsartikel (props) {
    return (
        <div className="grid">
            <articles>
                <img src={props.artikellista.urlToImage} alt={props.artikellista.title} />
                <h2 className="rubriker">{props.artikellista.title}</h2>
                <p>{props.artikellista.description}</p>
                <a href={props.artikellista.url} target="">Läs mer..</a>
            </articles>
        </div>
    );
 }

export default Nyhetsartikel;