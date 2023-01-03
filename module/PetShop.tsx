import {
  useState,
  ChangeEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
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
import { generateUuid, sortByArrival, arrangeDataByEntry, filterByServiced, searchedResult } from 'utils';
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
  const [temporaryStorage, setTemporaryStorage] = useState<Entry[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filterType, setFilterType] = useState<string>('');

  const { search } = useSearchContext();
  const inputDebounced = useDebounced(search, 700);
  const waitingList = useGetWaitingList(inputDebounced);

  const { data } = waitingList;
  const sortTable: Table<Entry> = petShopEntries && useSortTable(petShopEntries, sorting, setSorting);

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
      temporaryStorage[temporaryStorage?.length - 1],
    [temporaryStorage]
  );

  const handleAddReservation = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newUuid = generateUuid();

    const modifiedLastEntry = temporaryStorage.map(item => {
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
    setTemporaryStorage(modifiedLastEntry.concat(reservation));
    setFilterType(ServicedEntry.ALL);

    setEntry({
      firstName: '',
      lastName: '',
      puppyName: '',
      arrival: '',
      requestedService: '',
    });
  }, [petShopEntries, entry, temporaryStorage]);

  const handleRemoveEntry = (id: string) => {
    const entries = temporaryStorage.filter(e => e.id !== id);
    setTemporaryStorage(entries);
    setPetShopEntries(sortByArrival(entries));
  }

  const handleServiceEntry = useCallback((id: string) => {
    const servicedEntry = temporaryStorage.map(item => {
      if (item.id === id) {
        return {
          ...item,
          serviced: !item.serviced,
        };
      } else {
        return item;
      }
    });

    setTemporaryStorage(servicedEntry);
    setPetShopEntries(sortByArrival(servicedEntry));
  }, [temporaryStorage]);

  useEffect(() => {
    if (data) {
      setPetShopEntries(sortByArrival(data));
      setTemporaryStorage(arrangeDataByEntry(data));
    }
  }, [data]);

  useEffect(() => {
    setPetShopEntries(
      searchedResult(temporaryStorage, inputDebounced)
    )
  }, [inputDebounced]);

  const handleFilterReservation = (filterType: string) => {
    setFilterType(filterType);
    switch (filterType) {
      case ServicedEntry.ALL:
        setPetShopEntries(sortByArrival(temporaryStorage));
        break;
      case ServicedEntry.SERVICED:
        setPetShopEntries(sortByArrival(filterByServiced(temporaryStorage, ServicedEntry.SERVICED)));
        break;
      case ServicedEntry.UNSERVICED:
        setPetShopEntries(sortByArrival(filterByServiced(temporaryStorage, ServicedEntry.UNSERVICED)));
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
            Object.values(ServicedEntry).map(filter =>
              <FilterBtn
                key={filter}
                selected={filter === filterType}
                onClick={() => handleFilterReservation(filter)}
                data-testid={`filter-${filter}`}
                type="button">
                {filter}
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
            data-testid="add-reservation"
          />
        </CenterItems>
      </>
    </>
  )
};
