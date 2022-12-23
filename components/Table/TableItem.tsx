import { FC, useState } from 'react';
import { format } from 'date-fns'
import * as Styled from './styles';
import { Entry } from 'types';
import { CheckIcon, TrashIcon, DeleteDialog, ModalWrapper } from 'components';

interface TableListProps extends Entry {
  handleRemoveEntry: (arg: string) => void;
  handleServiceEntry: (arg: string) => void;
}

export const TableList: FC<TableListProps> = ({
  id,
  puppyName,
  owner,
  arrival,
  requestedService,
  serviced,
  handleRemoveEntry,
  handleServiceEntry,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Styled.RowData isServiced={serviced}>
        <Styled.RowHeadData scope="row">
          {puppyName}
        </Styled.RowHeadData>
        <Styled.TableData>
          {owner}
        </Styled.TableData>
        <Styled.TableData>
          {requestedService}
        </Styled.TableData>
        <Styled.TableData>
          {format(new Date(arrival), 'MMMM dd yyyy')}
        </Styled.TableData>
        <Styled.TableData className="flex text-right justify-evenly">
          {/*<PlusIcon width={16} height={16} hoverColor="green" />*/}
          <CheckIcon
            width={16} height={16}
            hoverColor="green"
            color={serviced ? 'green' : undefined}
            onClick={() => handleServiceEntry(id)}
          />
          <TrashIcon width={16} height={16} hoverColor="red" onClick={onClick} />
        </Styled.TableData>
      </Styled.RowData>
      <ModalWrapper isModalOpen={isModalOpen} onClick={onClick} onClose={onClose}>
        <DeleteDialog entryId={id} handleClose={onClose} handleDelete={handleRemoveEntry} puppyName={puppyName} />
      </ModalWrapper>
    </>
  )
}