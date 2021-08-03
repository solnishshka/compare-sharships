import cns from 'classnames';
import type {FC} from 'react';
import {useSelector} from 'react-redux';

import {comparedStarshipsSelector} from '../../selectors/comparedStarships';

import {compareFieldsName} from './consts';
import {getAssignedStarships, makeColumn} from './utils';

import './Compare.scss';

const Compare: FC = () => {
    const starships = useSelector(comparedStarshipsSelector);

    return (
        <div className="compare">
            {makeColumn<string>(compareFieldsName, true)}
            <div className="compare__column">
                {Object.values(getAssignedStarships(starships)).map((item, idx) => (
                    <div className="compare__row" key={idx}>
                        <p 
                            className={cns(
                                "compare__text", 
                                typeof item[0] === 'number' && item[0] > item[1] && "compare__text_color_green",
                                typeof item[0] === 'number' && item[1] > item[0] && "compare__text_color_red",
                            )}
                        >
                            {item[0]}
                        </p>
                        <p 
                            className={cns(
                                "compare__text", 
                                typeof item[1] === 'number' && item[0] < item[1] && "compare__text_color_green",
                                typeof item[1] === 'number' && item[1] < item[0] && "compare__text_color_red",
                            )}
                        >
                            {item[1]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Compare;
