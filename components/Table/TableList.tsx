import { FC, useState } from 'react';
import * as Styled from './styles';
import { Entry } from 'types';
import { CheckIcon, TrashIcon, DeleteDialog, ModalWrapper, TableBody } from 'components';
import { flexRender } from '@tanstack/react-table';
import { TableListProps, CellProps } from 'types';

export const TableList: FC<TableListProps> = ({
  handleRemoveEntry,
  handleServiceEntry,
  sortTable
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [entryItem, setEntryItem] = useState<Entry>({} as Entry);

  const onClick = (entry: Entry) => {
    setEntryItem(entry);
    setIsModalOpen(!isModalOpen);
  };


  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setIsModalOpen(!isModalOpen);
    handleRemoveEntry(entryItem.id)
  }

  return (
    <>
      {sortTable
        .getRowModel()
        .rows.slice(0, 10)
        .map(row => {
          const { original: {serviced, id} } = row;
          return (
            <TableBody key={row.id} data-testid="reservation-list">
              <Styled.RowData key={row.id} isServiced={serviced}>
                {row.getVisibleCells().map((cell: CellProps) => {
                  return (
                    <Styled.TableData key={cell.id} className={`${cell.column.columnDef?.className || ''}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Styled.TableData>
                  )
                })}
                <Styled.TableData className="flex text-right justify-evenly">
                  <CheckIcon
                    width={16} height={16}
                    hoverColor="green"
                    color={serviced ? 'green' : undefined}
                    onClick={() => handleServiceEntry(id)}
                    data-testid={`${serviced ? 'serviced' : 'unserviced'}`}
                  />
                  <TrashIcon
                    width={16} height={16}
                    hoverColor="red"
                    onClick={() => onClick(row.original)}
                    data-testid="delete-reservation"
                  />
                </Styled.TableData>
              </Styled.RowData>
            </TableBody>
          )
        })}
      <ModalWrapper isModalOpen={isModalOpen} onClose={onClose}>
        <DeleteDialog
          entryId={entryItem.id} handleClose={onClose}
          handleDelete={handleDelete} puppyName={entryItem.puppyName}
        />
      </ModalWrapper>
    </>
  )
}