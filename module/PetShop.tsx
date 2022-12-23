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
  Container,
  PetShopForm,
  PlusIcon,
  TableList,
  TableWrapper,
  ModalWrapper,
} from 'components';
import { useGetWaitingList } from 'hooks';
import { Entry } from 'types';
import { generateUuid, sortByArrival, arrangeDataByEntry } from 'utils';

export const PetShop = () => {
  const [entry, setEntry] = useState({
    firstName: '',
    lastName: '',
    puppyName: '',
    arrival: '',
    requestedService: '',
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [petShopEntries, setPetShopEntries] = useState<Entry[]>([])
  const [arrangeEntries, setArrangeEntries] = useState<Entry[]>([])
  const waitingList = useGetWaitingList();
  const { data } = waitingList;

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

    const modifiedLastEntry = petShopEntries.map(item => {
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

    setEntry({
      firstName: '',
      lastName: '',
      puppyName: '',
      arrival: '',
      requestedService: '',
    });
  }, [petShopEntries, entry, arrangeEntries]);

  const handleRemoveEntry = (id: string) => {
    const entries = petShopEntries.filter(e => e.id !== id);
    setPetShopEntries(entries)
  }

  const handleServiceEntry = useCallback((id: string) => {
    const servicedEntry = petShopEntries.map(item => {
      if (item.id === id) {
        return {
          ...item,
          serviced: !item.serviced,
        };
      } else {
        return item;
      }
    });

    setPetShopEntries(servicedEntry);
  }, [petShopEntries]);

  useEffect(() => {
    if (data) {
      setPetShopEntries(data.entries);
      setArrangeEntries(arrangeDataByEntry(petShopEntries));
    }
  }, [data]);

  useEffect(() => {
    setArrangeEntries(arrangeDataByEntry(petShopEntries));
  }, [petShopEntries]);

  return (
    <>
      <Container width={'w-4/5'}>
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
        <TableWrapper>
          {
            petShopEntries && sortByArrival(petShopEntries).map(entry =>
              <TableList 
                {...entry} key={entry.id} 
                handleRemoveEntry={handleRemoveEntry}
                handleServiceEntry={handleServiceEntry}
              />
            )
          }
        </TableWrapper>
        <CenterItems padding="3rem">
          <PlusIcon width={72} height={72} hoverColor="green" color="#2563eb" onClick={onClick} />
        </CenterItems>
      </Container>
    </>
  )
};

