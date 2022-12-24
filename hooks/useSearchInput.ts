import { ChangeEvent, useEffect, useState } from 'react';

const useDebounced = <T> (
    value: T,
    delay = 0
): T => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debounceValue;
};

const useSearchInput = () => {
    const [search, setSearch] = useState<string|undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    return { onChange, search, setSearch };
}

export { useDebounced, useSearchInput }