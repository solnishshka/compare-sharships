import {FC, memo} from 'react';

import Logo from '../Logo';

import './Footer.scss';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <Logo size="sm"/>
            <div>
                <p className="copyright">©solnishshka 2021</p>
                <div>
                    Icons made by&nbsp;
                    <a href="https://www.freepik.com" title="Freepik">Freepik</a> 
                    &nbsp;from&nbsp;
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
