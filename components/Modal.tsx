import { FC } from 'react';
import { Modal } from 'flowbite-react';
import { ModalProps } from 'types';

export const ModalForm: FC<ModalProps> = ({ children, isModalOpen, onClick, onClose }) => {
  return (
    <>
      <Modal
        show={isModalOpen}
        onClose={onClose}
      >
        <Modal.Header>
          Add a Reservation
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </>
  )
}