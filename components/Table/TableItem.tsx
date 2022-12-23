import { FC } from 'react';
import { format } from 'date-fns'
import * as Styled from './styles';
import { Entry } from 'types';
import { CheckIcon, TrashIcon } from 'components';

export const TableList: FC<Entry> = ({
 puppyName,
 owner,
 arrival,
 requestedService,
}) => {
  return (
    <Styled.RowData>
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
        <CheckIcon width={16} height={16} hoverColor="green" />
        <TrashIcon width={16} height={16} hoverColor="red" />
      </Styled.TableData>
    </Styled.RowData>
  )
}