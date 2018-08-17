import React from 'react';
import './Card.css';

const Card = ({ name, date, id, src, companions }) => {

    return (
            <div className="card " key={id}>
                <div className="card_side card_side--front">
                    <div className="card_picture">
                        <img className = "card_picture-img" src={src} alt={name}/>
                        &nbsp;
                    </div>
                    <h3 className="card_heading">
                        <span className="card_heading-span">{name}</span>
                    </h3>
                    <h4 className='card_date'>{date}</h4>
                </div>
                <div className="card_side card_side--back">
                    <div className="card_companions">
                        <div className="card_details">
                            <h3>companions</h3>
                            <ul>
                                {companions.map(element => <li key={element}>{element}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="card_cta">
                        <p className="card_warning">Join the Doctor</p>
                        <a href="" className="btn btn--white">Allons-y</a>
                    </div>
                </div>
            </div>
            
    )
};

export default Card;