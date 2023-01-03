import {
  render,
  fireEvent,
  screen,
  Matcher,
  MatcherOptions,
  waitFor,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PetShop } from './PetShop';
import { useGetWaitingList } from 'hooks';
import { SearchReservationProvider } from 'context';
import { WaitingList } from 'types';
import mockedWaitingList from 'public/waiting-list.json';
import { reservationInputs } from '__fixtures__';
import { filterByServiced, searchedResult } from 'utils';
import { ServicedEntry } from 'enums';

const mockedUseGetWaitingList = useGetWaitingList as jest.Mock<unknown>;

jest.mock('../hooks/useGetWaitingList', () => ({
  useGetWaitingList: jest.fn()
}));

beforeEach(() => {
  mockedUseGetWaitingList.mockImplementationOnce(() => ({data: []}));
  mockedUseGetWaitingList.mockImplementation(() => ({data: waitListResult.entries}));
});

afterEach(() => {
  mockedUseGetWaitingList.mockClear();
});

const queryClient = new QueryClient();

const waitListResult: WaitingList = mockedWaitingList;

let getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement,
  queryAllByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement[];

describe('<Petshop />', ()  => {
  beforeEach(() => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <SearchReservationProvider>
          <PetShop />
        </SearchReservationProvider>
      </QueryClientProvider>
    );

    getByTestId = component.getByTestId;
    queryAllByTestId = component.queryAllByTestId;
  });

  describe('Waiting list', () => {
    it('render all waiting list', async () => {
      expect(screen.getByText(/Pet Shop/i)).toBeInTheDocument();
      await waitFor(() => {
        expect(queryAllByTestId('reservation-list')).toHaveLength(waitListResult.entries.length)
      });
    });

    it('should add/remove reservation to list', async () => {
      await waitFor(() => {
        fireEvent.click(getByTestId('add-reservation'));

        for (const [key, value] of Object.entries(reservationInputs.input)) {
          const input = getByTestId(key);
          fireEvent.change(input, {target: {value}});
        }
        const select = getByTestId('requestedService');
        fireEvent.change(select, {target: {value: reservationInputs.selected.requestedService}});

        // add to list
        fireEvent.click(getByTestId('submit-reservation'));
        expect(queryAllByTestId('reservation-list')).toHaveLength(waitListResult.entries.length + 1);

        // remove from list
        fireEvent.click(queryAllByTestId('delete-reservation')[0]);
        fireEvent.click(getByTestId('remove-reservation'));
        expect(queryAllByTestId('reservation-list')).toHaveLength(waitListResult.entries.length);
      });
    });

    it('should mark as serviced/unserviced', async () => {
      await waitFor(() => {
        // marked as service
        fireEvent.click(queryAllByTestId('unserviced')[0]);
        expect(queryAllByTestId('serviced')).toHaveLength(
          filterByServiced(waitListResult.entries, ServicedEntry.SERVICED).length + 1
        );

        // mark as unserviced
        fireEvent.click(queryAllByTestId('serviced')[0]);
        expect(queryAllByTestId('unserviced')).toHaveLength(
          filterByServiced(waitListResult.entries, ServicedEntry.UNSERVICED).length
        );
      });
    });

    it('should return search result', async () => {
      const searchInput = getByTestId('search-input');
      const value = 'ob'

      await waitFor(() => {
        fireEvent.change(searchInput, {target: {value}});

        expect(queryAllByTestId('reservation-list')).toHaveLength(
          searchedResult(waitListResult.entries, value).length
        );
      });
    });

    it('should filter by service status', async () => {
      await waitFor(() => {
        fireEvent.click(getByTestId('filter-serviced'));
        expect(queryAllByTestId('reservation-list')).toHaveLength(
          filterByServiced(waitListResult.entries, ServicedEntry.SERVICED).length
        );

        fireEvent.click(getByTestId('filter-unserviced'));
        expect(queryAllByTestId('reservation-list')).toHaveLength(
          filterByServiced(waitListResult.entries, ServicedEntry.UNSERVICED).length
        );

        fireEvent.click(getByTestId('filter-all'));
        expect(queryAllByTestId('reservation-list')).toHaveLength(
          waitListResult.entries.length
        );
      });
    });
  });
});
