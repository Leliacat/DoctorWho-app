import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <section >
            
            <div className='callbox__text' >
                <span>Police Telephone</span>
                <span className="big">Free</span>
                <span>for use of</span>
                <span className="big">Public</span>
                <span className="empty">&nbsp;</span>
                <span className="small">Advice & assistance</span>  
                <span className="small"> obtainable immediatly</span>
                <span className="empty">&nbsp;</span>
                <span className="small">Officers & cars</span>
                <span className="small"> respond to all calls</span>
                <span className="empty">&nbsp;</span>
                <span className="big">Pull to Open</span>
                <input
                className='Searchbox'
                type='search'
                placeholder='call your favorite Doctor'
                onChange= {searchChange}
                />
            </div>
        </section>
        
    );
};

export default Searchbox