import React from 'react';


funktion Nyhetsartikel(props) {
    return (
        <articles>
            <img src={props.Nyhetsartikel.urlToImage} />
            <h2>{props.Nyhetsartikel.title}</h2>
            <p>{props.Nyhetsartikel.description}</p>
            <a>Läs mer..</a>
        </articles>
    );
 }

export default Nyhetsartikel;