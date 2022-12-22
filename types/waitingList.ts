interface Entries {
    "id": string;
    "arrival": string;
    "owner": string;
    "puppyName": string;
    "requestedService": string;
    "serviced": boolean;
    "prevEntryId": unknown;
    "nextEntryId": string;
}

interface WaitingList {
    date: string;
    entries: Entries[];
}

export type { WaitingList, Entries };