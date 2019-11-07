import React from 'react';


funktion Nyhetsartikel (props) {
    return (
        <div className="grid">
        <articles>
            <img src={props.Nyhetsartikel.urlToImage} />
            <h2 className="rubriker">{props.Nyhetsartikel.title}</h2>
            <p>{props.Nyhetsartikel.description}</p>
            <a href={props.minArtikel.url} target="">Läs mer..</a>
        </articles>
        </div>
    );
 }

export default Nyhetsartikel;