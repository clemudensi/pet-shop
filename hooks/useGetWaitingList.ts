import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { matchSorter } from 'match-sorter';
import { waitingListApi } from 'request';
import { Entry, WaitingList } from 'types';

export const useGetWaitingList = (search = ''): UseQueryResult<Entry[]> => {

  return useQuery(['waiting-list'], async () => {
    return (
      await waitingListApi.get<WaitingList>('waiting-list.json')
    ).data?.entries;
  });
};