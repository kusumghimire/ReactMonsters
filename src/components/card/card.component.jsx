import React from 'react';

import './card.styles.css';

export const Card = props=>(
<div className='card-container'>
 <img src="https://robohash.org/1?set=set2" alt="monster"/>
 <h2>{props.monster.name}</h2>
 <p>{props.monster.email}</p>
</div>
);