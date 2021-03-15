import React from 'react';
import "./card_list_style.css";
import { Card } from '../card/card-c';

export const CardList = props => {
    return <div className = 'card-list'>
        {props.monsters.map(monster => (
            // inside card is props.children
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
};