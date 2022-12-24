import * as Styled from './styles';
import { FC } from 'react';

interface DeleteDialogProps {
  handleClose: () => void;
  handleDelete: () => void;
  entryId: string;
  puppyName?: string;
}

export const DeleteDialog: FC<DeleteDialogProps> = ({
  handleClose,
  handleDelete,
  puppyName,
}) => {
  return (
    <>
      <Styled.DialogContentSection>
        <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none"
             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <Styled.DialogTitle>
          Are you sure you want to delete this {puppyName} reservation?
        </Styled.DialogTitle>
        <Styled.DialogDeleteBtn data-modal-toggle="popup-modal" type="button" onClick={handleDelete}>
          Yes, I'm sure
        </Styled.DialogDeleteBtn>
        <Styled.DialogCancelBtn data-modal-toggle="popup-modal" type="button" onClick={handleClose}>
          No, cancel
        </Styled.DialogCancelBtn>
      </Styled.DialogContentSection>
    </>
  )
}