import { ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  isModalOpen: boolean;
  onClick: () => void;
  onClose: () => void;
}

export type { ModalProps }