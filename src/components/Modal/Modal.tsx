import {FC} from 'react';
import {Modal as VendorModal} from 'react-bootstrap';

import type {Props} from './types';

import './Modal.scss';

const Modal: FC<Props> = ({isOpen, handleToggleModal, className, children}) => {
    return (
        <VendorModal 
            show={isOpen}
            onHide={handleToggleModal}
            dialogClassName={className}
        >
            <VendorModal.Header className="modal__header" closeButton/>
            <VendorModal.Body className={"modal__body"}>
                {children}
            </VendorModal.Body>
        </VendorModal>
    );
}

export default Modal;
