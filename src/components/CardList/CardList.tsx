import {FC} from 'react';

import Card from '../Card';

import type {StarshipEntity} from '../../types/starships';

import './CardList.scss';

const CardList: FC<{starships: StarshipEntity[]}> = ({starships}) => {
    return (
       <ul className="cardList">
           {starships.map(starship => (
               <li key={starship.name}>
                   <Card starship={starship}/>
               </li>
           ))}
       </ul>
    );
}

export default CardList;
