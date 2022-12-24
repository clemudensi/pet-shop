import React, { FC } from 'react';
import {
  flexRender,
  Table
} from '@tanstack/react-table'
import * as Styled from './styles';
import { Entry } from '../../types';

export const TableWrapper: FC<{children: React.ReactNode, sortTable: Table<Entry> }> = ({
   children,
   sortTable
}) => {
  return (
    <Styled.TableContainer>
      <Styled.Table>
        <Styled.Head>
          {sortTable?.getHeaderGroups().map((headerGroup: { id: React.Key | null | undefined; headers: any[]; }) => (
            <Styled.HeadRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <Styled.HeadData key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </Styled.HeadData>
                )
              })}
              <Styled.HeadData scope="col">
                <span className="sr-only">Edit</span>
              </Styled.HeadData>
            </Styled.HeadRow>
          ))}
        </Styled.Head>
        {children}
      </Styled.Table>
    </Styled.TableContainer>
  )
}