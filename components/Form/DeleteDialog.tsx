import * as Styled from './styles';
import { FC } from 'react';

interface DeleteDialogProps {
  handleClose: () => void;
  handleDelete: (arg: string) => void;
  entryId: string;
  puppyName?: string;
}

export const DeleteDialog: FC<DeleteDialogProps> = ({
  handleClose,
  handleDelete,
  entryId,
  puppyName,
}) => {
  return (
    <>
      {/*<Styled.DialogIconBtn type="button" data-modal-toggle="popup-modal">*/}
      {/*  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
      {/*       xmlns="http://www.w3.org/2000/svg">*/}
      {/*    <path fillRule="evenodd"*/}
      {/*          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
      {/*          clipRule="evenodd"></path>*/}
      {/*  </svg>*/}
      {/*  <span className="sr-only">Close modal</span>*/}
      {/*</Styled.DialogIconBtn>*/}
      <Styled.DialogContentSection>
        <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none"
             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <Styled.DialogTitle>
          Are you sure you want to delete this {puppyName} reservation?
        </Styled.DialogTitle>
        <Styled.DialogDeleteBtn data-modal-toggle="popup-modal" type="button" onClick={() => handleDelete(entryId)}>
          Yes, I'm sure
        </Styled.DialogDeleteBtn>
        <Styled.DialogCancelBtn data-modal-toggle="popup-modal" type="button" onClick={handleClose}>
          No, cancel
        </Styled.DialogCancelBtn>
      </Styled.DialogContentSection>
    </>
  )
}