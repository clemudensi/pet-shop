import {
  useState,
  ChangeEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { matchSorter } from 'match-sorter';
import {
  CenterItems,
  PetShopForm,
  PlusIcon,
  TableList,
  TableWrapper,
  ModalWrapper,
  ContainerFlex,
  FilterBtn,
  H2Typography
} from 'components';
import { useGetWaitingList, useDebounced, useSortTable } from 'hooks';
import { Entry } from 'types';
import { generateUuid, sortByArrival, arrangeDataByEntry } from 'utils';
import { useSearchContext } from 'context';
import { Searchbar } from '../components/Search/SearchBar';
import { ServicedEntry } from '../enums';
import { Button } from 'flowbite-react';
import { SortingState, Table } from '@tanstack/react-table';

export const PetShop = () => {
  const [entry, setEntry] = useState({
    firstName: '',
    lastName: '',
    puppyName: '',
    arrival: '',
    requestedService: '',
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [petShopEntries, setPetShopEntries] = useState<Entry[]>([]);
  const [arrangeEntries, setArrangeEntries] = useState<Entry[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filterType, setFilterType] = useState<string>('');

  const { search } = useSearchContext();
  const inputDebounced = useDebounced(search, 700);
  const waitingList = useGetWaitingList(inputDebounced);

  const { data } = waitingList;

  const sortTable: Table<Entry> = petShopEntries && useSortTable(petShopEntries, sorting, setSorting)

  const handleOnchange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEntry(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const lastEntryItem = useMemo(() =>
      arrangeEntries[arrangeEntries?.length - 1],
    [arrangeEntries]
  );

  const handleAddReservation = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newUuid = generateUuid();

    const modifiedLastEntry = arrangeEntries.map(item => {
      if (item.id === lastEntryItem.id) {
        return {
          ...item,
          nextEntryId: newUuid,
        };
      } else {
        return item;
      }
    });

    const reservation: Entry = {
      id: newUuid,
      owner: `${entry.firstName} ${entry.lastName}`,
      puppyName: entry.puppyName,
      arrival: new Date(entry.arrival).toISOString(),
      requestedService: entry.requestedService,
      serviced: false,
      prevEntryId: lastEntryItem.id,
      nextEntryId: null,
    }

    setPetShopEntries(sortByArrival(modifiedLastEntry.concat(reservation)));
    setArrangeEntries(modifiedLastEntry.concat(reservation));
    setFilterType(ServicedEntry.ALL);

    setEntry({
      firstName: '',
      lastName: '',
      puppyName: '',
      arrival: '',
      requestedService: '',
    });
  }, [petShopEntries, entry, arrangeEntries]);

  const handleRemoveEntry = (id: string) => {
    const entries = arrangeEntries.filter(e => e.id !== id);
    setArrangeEntries(entries);
    setPetShopEntries(sortByArrival(entries));
  }

  const handleServiceEntry = useCallback((id: string) => {
    const servicedEntry = arrangeEntries.map(item => {
      if (item.id === id) {
        return {
          ...item,
          serviced: !item.serviced,
        };
      } else {
        return item;
      }
    });

    setArrangeEntries(servicedEntry);
    setPetShopEntries(sortByArrival(servicedEntry));
  }, [arrangeEntries]);

  useEffect(() => {
    if (data) {
      setPetShopEntries(sortByArrival(data));
      setArrangeEntries(arrangeDataByEntry(data));
    }
  }, [data]);

  useEffect(() => {
    setPetShopEntries(
      sortByArrival(matchSorter(
        arrangeEntries,
        inputDebounced,
        {keys: ['puppyName', 'owner', 'requestedService']}
      ))
    )
  }, [inputDebounced]);

  const handleFilterReservation = (filterType: string) => {
    setFilterType(filterType);
    switch (filterType) {
      case ServicedEntry.ALL:
        setPetShopEntries(sortByArrival(arrangeEntries));
        break;
      case ServicedEntry.SERVICED:
        setPetShopEntries(sortByArrival(arrangeEntries?.filter(e => e.serviced)));
        break;
      case ServicedEntry.UNSERVICED:
        setPetShopEntries(sortByArrival(arrangeEntries?.filter(e => !e.serviced)));
        break;
      default:
        return;
    }
  }

  return (
    <>
      <H2Typography>Pet Shop</H2Typography>
      <ContainerFlex>
        <Searchbar />
        <Button.Group>
          {
            Object.values(ServicedEntry).map(entry =>
              <FilterBtn
                key={entry}
                selected={entry === filterType}
                onClick={() => handleFilterReservation(entry)}
                type="button">
                {entry}
              </FilterBtn>
            )
          }
        </Button.Group>
      </ContainerFlex>
      <>
        <ModalWrapper
          onClose={onClose} 
          onClick={onClick} 
          isModalOpen={isModalOpen} 
          title="Add a Reservation"
        >
          <PetShopForm
            handleOnchange={handleOnchange}
            handleAddReservation={handleAddReservation}
            entry={entry}
          />
        </ModalWrapper>
        <TableWrapper sortTable={sortTable}>
          <TableList
            handleRemoveEntry={handleRemoveEntry}
            handleServiceEntry={handleServiceEntry}
            sortTable={sortTable}
          />
        </TableWrapper>
        <CenterItems padding="3rem">
          <PlusIcon
            width={52}
            height={52}
            hoverColor="green"
            color="#1f419f"
            onClick={onClick}
            transform={1.1}
          />
        </CenterItems>
      </>
    </>
  )
};
