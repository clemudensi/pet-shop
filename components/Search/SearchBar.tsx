import { Input } from 'components';
import { useSearchContext } from 'context';

export const Searchbar = () => {
  const { onChange } = useSearchContext();

  return (
    <>
      <Input placeholder="Search for pet reservations" onChange={onChange} />
    </>
  )
}