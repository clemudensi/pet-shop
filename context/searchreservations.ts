import constate from 'constate';
import { useSearchInput } from 'hooks';

const [SearchReservationProvider, useSearchContext] = constate(useSearchInput);

export { SearchReservationProvider, useSearchContext };