import {FC, memo, useState} from 'react';
import cns from 'classnames';

import Button from '../Button';

import './FixedButton.scss';

const FixedButton: FC = () => {
    const [visible, setVisible] = useState(false);

    const toggleFixedButton = () => {
        if (window.pageYOffset > 560) {
          setVisible(true);
        } else {
            setVisible(false)
        }
    }

    window.onscroll = toggleFixedButton;

    return <Button className={cns("fixedButton", visible && "fixedButton_visible")}>Сравнить</Button>
}

export default memo(FixedButton);