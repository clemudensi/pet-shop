import * as Styled from './styles';
import { Anchor } from 'components';

export const TableList = () => {
  return (
    <>
    <Styled.TableContainer>
    <Styled.Table>
      <Styled.Head>
      <Styled.HeadRow>
        <Styled.HeadData scope="col">
          Product name
        </Styled.HeadData>
        <Styled.HeadData scope="col">
          Color
        </Styled.HeadData>
        <Styled.HeadData scope="col">
          Category
        </Styled.HeadData>
        <Styled.HeadData scope="col">
          Price
        </Styled.HeadData>
        <Styled.HeadData scope="col">
          <span className="sr-only">Edit</span>
        </Styled.HeadData>
      </Styled.HeadRow>
      </Styled.Head>
      <Styled.TableBody>
      <Styled.RowData>
        <Styled.RowHeadData scope="row">
          {}
        </Styled.RowHeadData>
        <Styled.TableData>
          {}
        </Styled.TableData>
        <Styled.TableData>
          {}
        </Styled.TableData>
        <Styled.TableData>
          {}
        </Styled.TableData>
        <Styled.TableData className="text-right">
          <Anchor href="#">Change Status</Anchor>
        </Styled.TableData>
      </Styled.RowData>

      </Styled.TableBody>
    </Styled.Table>
    </Styled.TableContainer>
    </>
  )
}