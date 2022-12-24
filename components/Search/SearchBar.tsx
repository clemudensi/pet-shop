import * as Styled from 'components';
import { useSearchContext } from 'context';

export const Searchbar = () => {
  const { onChange, search, setSearch } = useSearchContext();

  const handleCancelSearch = () => {
    setSearch('')
  };

  return (
    <Styled.SearchContainer>
      <Styled.Input placeholder="Search for pet reservations" onChange={onChange} value={search} />
      <Styled.SearchCancelContainer>
        <Styled.CancelIcon width={16} height={16} hoverColor="red" onClick={handleCancelSearch} />
      </Styled.SearchCancelContainer>
    </Styled.SearchContainer>
  )
}