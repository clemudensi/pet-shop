import { useMemo } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { Entry } from 'types';
import { format } from 'date-fns';

type OtherProps = {
  className?: string
}
export type ColumnDefProps = ColumnDef<Entry> & OtherProps;

export const useSortTable = (data: Entry[], sorting: SortingState, setSorting: OnChangeFn<SortingState>) => {

  const columns = useMemo<ColumnDefProps[]>(
    () => [
      {
        accessorFn: row => row.puppyName,
        id: 'puppyName',
        cell: info => info.getValue(),
        header: () => 'Pet Name',
        footer: props => props.column.id,
        className: 'font-semibold text-gray-900',
      },
      {
        accessorFn: row => row.owner,
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => 'Owner',
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.requestedService,
        id: 'requestedService',
        cell: info => info.getValue(),
        header: () => 'Requested Service',
        footer: props => props.column.id,
      }
      ,
      {
        accessorFn: row => row.arrival,
        id: 'arrival',
        cell: info => format(new Date(info.getValue() as Date), 'PPpp'),
        header: () => 'Arrival Date',
        footer: props => props.column.id,
      }
    ],
    []
  );

  return useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
}