import {FC} from 'react';
import Logo from '../Logo';
import './Header.scss';

const Header: FC= () => {
    return (
        <header className="header">
            <div className="header__content">
                <Logo/>
            </div>
        </header>
    );
}

export default Header;
