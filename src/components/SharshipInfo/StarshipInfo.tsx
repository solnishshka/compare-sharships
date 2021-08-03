import type {FC} from 'react';

import type {StarshipEntity} from '../../types/starships';

import icon from '../../assets/images/plane_icon.svg'

import './StarshipInfo.scss';

const StarshipInfo: FC<{starship: StarshipEntity}> = ({starship}) => {
    return (
        <div className="starshipInfo">
            <div className="starshipInfo__row">
                <h2 className="starshipInfo__title">{starship.name}</h2>
                <img className="starshipInfo__icon" alt="icon" src={icon}/>
            </div>
            <p className="starshipInfo__text">
                Модель:&nbsp;
                <span className="starshipInfo__span">{starship.model}</span>
            </p>
            <p className="starshipInfo__text">
                Класс звездолета:&nbsp;
                <span className="starshipInfo__span">{starship.starshipClass}</span>
            </p>
            <p className="starshipInfo__text">
                Производитель:&nbsp;
                <span className="starshipInfo__span">{starship.manufacturer}</span>
            </p>
            <p className="starshipInfo__text">
                Стоимость:&nbsp;
                <span className="starshipInfo__span">{starship.costInCredits} кредитов</span>
            </p>
            <p className="starshipInfo__text">
                Длина:&nbsp;
                <span className="starshipInfo__span">{starship.length}</span>
            </p>
            <p className="starshipInfo__text">
                Максимальная скорость:&nbsp;
                <span className="starshipInfo__span">{starship.maxAtmospheringSpeed}</span>
            </p>
            <p className="starshipInfo__text">
                Экипаж:&nbsp;
                <span className="starshipInfo__span">{starship.crew}</span>
            </p>
            <p className="starshipInfo__text">
                Кол-во пассажиров:&nbsp;
                <span className="starshipInfo__span">{starship.passengers}</span>
            </p>
            <p className="starshipInfo__text">
                Грузоподъемность:&nbsp;
                <span className="starshipInfo__span">{starship.cargoCapacity}</span>
            </p>
            <p className="starshipInfo__text">
                MGLT:&nbsp;
                <span className="starshipInfo__span">{starship.MGLT}</span>
            </p>
            <p className="starshipInfo__text">
                Рейтинг гипердвигателя:&nbsp;
                <span className="starshipInfo__span">{starship.hyperdriveRating}</span>
            </p>
        </div>
    );
}

export default StarshipInfo;
