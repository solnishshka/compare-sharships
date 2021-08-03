import type {FC} from 'react';
import cns from 'classnames';

import type { Props } from './types';

import './Button.scss';

const Button: FC<Props> = ({disabled, children, className, variant = 'filled', size = 'lg', ...props}) => {
    return (
        <button 
            className={cns(className, "button", `button_size_${size}`, `button_variant_${variant}`)} 
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
