import { FC } from 'react';
import { Modal } from 'flowbite-react';
import { ModalProps } from 'types';

export const ModalWrapper: FC<ModalProps> = ({
  children,
  isModalOpen,
  onClose,
  title
}) => {
  return (
    <>
      <Modal
        show={isModalOpen}
        onClose={onClose}
      >
        <Modal.Header>
          {title}
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </>
  )
}