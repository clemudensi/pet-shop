import tw from 'twin.macro';

export const TableContainer = tw.div`
  overflow-x-auto relative shadow-md sm:rounded-lg
`;

export const Table = tw.table`
  w-full text-sm text-left 
  text-gray-500 dark:text-gray-400
`;

export const Head = tw.thead`
  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
`;

export const HeadRow = tw.tr``;

export const HeadData = tw.th`py-6 px-6`;

export const RowData = tw.tr`
  bg-white border-b dark:bg-gray-800 
  dark:border-gray-700 hover:bg-gray-50 
  dark:hover:bg-gray-600
`;

export const TableBody = tw.tbody``;

export const RowHeadData = tw.th`py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white`;
export const TableData = tw.td`py-4 px-6`;
