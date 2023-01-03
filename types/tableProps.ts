import { ColumnDefProps } from '../hooks';
import { CellContext, Table } from '@tanstack/react-table';
import { Entry } from './waitingList';

interface CellProps {
  column: {
    columnDef: ColumnDefProps
  },
  id: string;
  getContext: () => CellContext<Entry, any>;
}

interface TableListProps {
  handleRemoveEntry: (arg: string) => void;
  handleServiceEntry: (arg: string) => void;
  sortTable: Table<Entry>;
}


export type { CellProps, TableListProps }