import {FC} from 'react';
import {Spinner as VendorSpinner} from 'react-bootstrap';

import './Spinner.scss';

const Spinner: FC = () => {
    return (
        <div className="spinner">
            <VendorSpinner animation="border" variant="warning" />
        </div>
    );
}

export default Spinner;
