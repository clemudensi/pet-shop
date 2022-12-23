interface Entry {
    id: string;
    arrival: string;
    owner: string;
    puppyName: string;
    requestedService: string;
    serviced: boolean;
    prevEntryId: string | null;
    nextEntryId: string | null;
}

interface WaitingList {
    date: string;
    entries: Entry[];
}

export type { WaitingList, Entry };