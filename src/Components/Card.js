import * as React from 'react';
import '../Styles/card.css';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div style={{height: 100+'px'}}>
                    <p className="card-text">{props.description}</p>
                </div>
                
                <div style={{textAlign: 'center' }}>
                    <button className="btn bg-primary">Descargar</button>
                </div>
                
            </div>
        </div>
    );
};

export default Card;