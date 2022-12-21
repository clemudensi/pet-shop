import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { waitingListApi } from 'request';
import { WaitingList } from 'types';

export const useGetWaitingList = (): UseQueryResult<WaitingList> => {
  return useQuery(['waiting-list'], async () => {
      return (await waitingListApi.get<WaitingList>('waiting-list.json')).data;
  });
};