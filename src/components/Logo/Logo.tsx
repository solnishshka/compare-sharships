import {FC} from 'react';
import cns from 'classnames';

import './Logo.scss';

import type { Props } from './types';

const Logo: FC<Props> = ({size = 'xl'}) => {
    return (
        <h3 className={cns("logo", `logo_size_${size}`)}>
            Starships
            <span className="logo__span">Compare</span>
        </h3>
    );
}

export default Logo;
