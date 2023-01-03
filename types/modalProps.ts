import { ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  isModalOpen: boolean;
  onClick?: (arg: string) => void;
  onClose: () => void;
  title?: string;
}

export type { ModalProps }