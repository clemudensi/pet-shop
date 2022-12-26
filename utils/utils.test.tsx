import { sortByArrival, arrangeDataByEntry } from './index';
import { sortReservationByArrival, sortReservationByEntry } from '__fixtures__/reservations';
import entryReservation from 'public/waiting-list.json';
import '@testing-library/jest-dom'

describe('Sort Entries', () => {
  it('should return entries ordered by arrival date', () => {
    expect(sortByArrival(entryReservation.entries)).toEqual(sortReservationByArrival);
    expect(arrangeDataByEntry(entryReservation.entries)).toEqual(sortReservationByEntry);
  });
});
