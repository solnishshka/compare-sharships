import {FC, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {Pagination} from 'react-bootstrap';

import {useStarships} from '../../queries/starships';
import {actions} from '../../reducers/comparedStarshipsReducer';
import {comparedStarshipsSelector} from '../../selectors/comparedStarships';
import store from '../../store';

import Modal from '../Modal';
import Button from '../Button';
import CardList from '../CardList';
import FixedButton from '../FixedButton';
import Spinner from '../Spinner';
import Compare from '../Compare';

import './Starships.scss';

const Starships: FC = () => {
    const comparedStarships = useSelector(comparedStarshipsSelector);
    const [isCompareOpen, setIsCompareOpen] = useState(false);
    const [page, setPage] = useState(1);
    const {data, isLoading} = useStarships(page);

    const handleToggleCompare = () => {
        setIsCompareOpen(!isCompareOpen);
    }

    const handleReset = () => {
        store.dispatch(actions.setReset());
    }

    const content = useMemo(() => {
        if (!data) {
            if (isLoading) {
                return <Spinner/>;
            }
            return <div>Произошла ошибка. Попробуйте обновить страницу</div>;
        }
        return <CardList starships={data.starships}/>;
    }, [data, isLoading])

    let items = [];

    for (let number = 1; number <= 4; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    
    return (
        <>
            <section className="starships">
                <div className="starships__top">
                    <div>
                        <Button className="starships__button" onClick={handleToggleCompare} disabled={comparedStarships.length < 2}>
                            Сравнить
                        </Button>
                        <Button variant="bordered" onClick={handleReset}>
                            Очистить
                        </Button>
                    </div>
                    <p className="starships__count">Выбрано для сравнения: {comparedStarships.length ?? 0}</p>
                    <FixedButton/>
                </div>
                <Pagination>{items}</Pagination>
                {content}
            </section>
            <Modal className="starships__modal" isOpen={isCompareOpen} handleToggleModal={handleToggleCompare}>
                <Compare/>
            </Modal>
        </>
    );
}

export default Starships;
