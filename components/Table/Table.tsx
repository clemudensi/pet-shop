import React, { FC } from 'react';
import * as Styled from './styles';

export const TableWrapper: FC<{children: React.ReactNode }> = ({
   children
}) => {
  return (
    <Styled.TableContainer>
      <Styled.Table>
        <Styled.Head>
          <Styled.HeadRow>
            <Styled.HeadData scope="col">
              Pet Name
            </Styled.HeadData>
            <Styled.HeadData scope="col">
              Owner name
            </Styled.HeadData>
            <Styled.HeadData scope="col">
              Request Service
            </Styled.HeadData>
            <Styled.HeadData scope="col">
              Arrival Date
            </Styled.HeadData>
            <Styled.HeadData scope="col">
              <span className="sr-only">Edit</span>
            </Styled.HeadData>
          </Styled.HeadRow>
        </Styled.Head>
        <Styled.TableBody>
          {children}
        </Styled.TableBody>
      </Styled.Table>
    </Styled.TableContainer>
  )
}