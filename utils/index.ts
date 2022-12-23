import { Entry } from '../types';

export const generateUuid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

export const sortByArrival = (entries: Entry[]): Entry[] => {
  return entries.sort((a, b) => {
    const arrivalA = a.arrival.toLowerCase();
    const arrivalB = b.arrival.toLowerCase();
    if (arrivalA < arrivalB) {
      return -1;
    }
    if (arrivalA > arrivalB) {
      return 1;
    }

    return 0;
  })
};

export const arrangeDataByEntry = (entries: Entry[]): Entry[] => {
  const arrangedEntry: Entry[] = [];
  const firstEntry = entries.find(e => e.prevEntryId === null);
  firstEntry && arrangedEntry.push(firstEntry);

  const addEntry = (i: number, entries: Entry[]) => {
    if (i < entries.length - 1) {
      const lastItem = arrangedEntry[arrangedEntry.length - 1];
      const newEntry = entries.find(e => lastItem.nextEntryId === e.id) as Entry;
      arrangedEntry.push(newEntry);
      addEntry(i+1, entries)
    }
  }
  addEntry(0, entries);

  return arrangedEntry;
}