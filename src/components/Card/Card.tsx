import {FC, useState, useMemo} from 'react';
import {Card as VendorCard} from 'react-bootstrap';
import {useSelector} from 'react-redux';

import store from '../../store';
import {actions} from '../../reducers/comparedStarshipsReducer';
import {comparedStarshipsSelector} from '../../selectors/comparedStarships';

import Button from '../Button';
import Modal from '../Modal';
import StarshipInfo from '../SharshipInfo';

import type {StarshipEntity} from '../../types/starships';

import './Card.scss';

const Card: FC<{starship: StarshipEntity}> = ({starship}) => {
    const comparedStarships = useSelector(comparedStarshipsSelector);
    const [isOpenSharshipInfo, setIsOpenSharshipInfo] = useState(false);

    const handleToggleSharshipInfo = () => {
        setIsOpenSharshipInfo(!isOpenSharshipInfo);
    }

    const handleSelectStarship = () => {
        if (!isCompared && comparedStarships.length < 2) {
            store.dispatch(actions.setAddStarship(starship));
        } else {
            store.dispatch(actions.setRemoveStarship(starship.name));
        }
    }

    const isCompared = useMemo(() => comparedStarships.find(item => starship.name === item.name), [comparedStarships, starship.name]);

    return (
        <>
            <VendorCard border="secondary" bg="light" className="card">
                <VendorCard.Header className="card__title">{starship.name}</VendorCard.Header>
                <VendorCard.Body>
                    <p className="card__text">
                        Модель:&nbsp;
                        <span className="card__span">{starship.model}</span>
                    </p>
                    <p className="card__text">
                        Производитель:&nbsp;
                        <span className="card__span">{starship.manufacturer}</span>
                    </p>
                    <p className="card__text">
                        Стоимость:&nbsp;
                        <span className="card__span">{starship.costInCredits} кредитов</span>
                    </p>
                    <p className="card__text">
                        Максимальная скорость:&nbsp;
                        <span className="card__span">{starship.maxAtmospheringSpeed}</span>
                    </p>
                </VendorCard.Body>
                <VendorCard.Footer className="card__footer">
                    <Button variant="link" className="moreButton" onClick={handleToggleSharshipInfo}>Подробнее</Button>
                    <Button 
                        className="compareButton" 
                        onClick={handleSelectStarship} 
                        disabled={!isCompared && comparedStarships.length === 2}
                    >
                        {isCompared ? 'Удалить из сравнения' : 'Выбрать для сравнения'}
                    </Button>
                </VendorCard.Footer>
            </VendorCard>
            <Modal 
                isOpen={isOpenSharshipInfo} 
                handleToggleModal={handleToggleSharshipInfo}
            >
                <StarshipInfo starship={starship}/>
            </Modal>
        </>
    );
}

export default Card;
