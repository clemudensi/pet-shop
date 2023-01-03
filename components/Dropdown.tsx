import { ChangeEventHandler } from 'react';
import { Dropdown } from 'flowbite-react';
import { DropdownSelect } from './primitives';

interface DropdownProps {
  items: Array<string>;
  title: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}

export const DropdownItem = ({items, title, onChange, value}: DropdownProps) => {
  return (
    <>
      <DropdownSelect onChange={onChange} name="requestedService" value={value} data-testid="requestedService">
        <option>{''}</option>
        {
          items.map((list, index) =>
            <option key={index}>
              {list}
            </option>)
        }
      </DropdownSelect>
    </>
  )
}