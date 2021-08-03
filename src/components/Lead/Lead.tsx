import {FC} from 'react';

import './Lead.scss';

const Lead: FC = () => {
    return (
        <section className="lead">
            <div className="lead__content">
                <h1 className="lead__title">Сравни и выбери свой звездолет!</h1>
            </div>
        </section>
    );
}

export default Lead;
