import React from 'react';
import {Card} from '../cards/card.component'
import './card-list.style.css'
export const CardList = (props)=>(
  <div className="card-list">
    {props.monsters.map(monsters => (
      <Card key={monsters.id} monster={monsters}/>
    ))}
  </div>
);