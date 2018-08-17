import React from 'react';
import Card from './Card';


const Cardlist = ({ Doctors }) => {
    return (
        <div className='container'>
        {
            Doctors.map((user, i) => {
                return(
                        <Card 
                        key={Doctors[i].id} 
                        id={Doctors[i].id} 
                        name={Doctors[i].name} 
                        date={Doctors[i].date}
                        companions={Doctors[i].companions}
                        src={Doctors[i].src}
                        />  
                );   
            })
        }
        </div>
    );
}

export default Cardlist;
