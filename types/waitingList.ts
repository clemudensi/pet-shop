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

interface WaitingListForm {
    input: {
        firstName: string;
        lastName: string;
        puppyName: string;
        arrival: string;
    }
    selected: {
        requestedService: string;
    }
}

export type { WaitingList, Entry, WaitingListForm };