import React from 'react';
import Card from './Card'; 
import './Treks.css';

function Treks({tours}) {
  return (
    <div>
        <div className='container'>
            <div>
                <h2 className='title'> Treks</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour}></Card>
                    } )
                }
            </div>
        </div>
    </div>
  )
}

export default Treks