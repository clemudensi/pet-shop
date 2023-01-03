import * as Styled from './styles';
import { DefaultButton, CenterItems, DropdownItem, GridCol2, GridSectionWrapper } from 'components';
import { ChangeEvent, FC, MouseEvent } from 'react';
import { APPOINTMENT_TYPE } from 'consts';

interface PetShopFormProps {
  handleOnchange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleAddReservation: (e: MouseEvent<HTMLButtonElement>) => void;
  entry: {
    firstName: string;
    lastName: string;
    puppyName: string;
    arrival: string;
    requestedService: string;
  };
}

export const PetShopForm: FC<PetShopFormProps> = ({ handleOnchange, handleAddReservation, entry }) => {
  return (
    <Styled.Form>
      <Styled.FormInputContainer>
        <Styled.FormInput
          name="firstName" type="text" required onChange={handleOnchange} value={entry.firstName}
          data-testid="firstName"
        />
        <Styled.FormInputLabel>First Name</Styled.FormInputLabel>
      </Styled.FormInputContainer>

      <Styled.FormInputContainer>
        <Styled.FormInput
          name="lastName" type="text" required onChange={handleOnchange} value={entry.lastName}
          data-testid="lastName"
        />
        <Styled.FormInputLabel>Last Name</Styled.FormInputLabel>
      </Styled.FormInputContainer>

      <Styled.FormInputContainer>
        <Styled.FormInput
          name="puppyName" type="text" required onChange={handleOnchange} value={entry.puppyName}
          data-testid="puppyName"
        />
        <Styled.FormInputLabel>Pet Name</Styled.FormInputLabel>
      </Styled.FormInputContainer>

      <GridCol2>
        <GridSectionWrapper>
          <Styled.FormInputContainer>
            <Styled.FormInput
              name="arrival" type="datetime-local" required onChange={handleOnchange} value={entry.arrival}
              data-testid="arrival"
            />
            <Styled.FormInputLabel>Date</Styled.FormInputLabel>
          </Styled.FormInputContainer>
        </GridSectionWrapper>

        <GridSectionWrapper>
          <Styled.FormInputContainer>
            <DropdownItem
              title="Appointment Type"
              items={APPOINTMENT_TYPE}
              onChange={handleOnchange}
              value={entry.requestedService}
            />
          </Styled.FormInputContainer>
        </GridSectionWrapper>
      </GridCol2>

      <CenterItems>
        <DefaultButton onClick={handleAddReservation} data-testid="submit-reservation">
          Add Reservation
        </DefaultButton>
      </CenterItems>
    </Styled.Form>
  )
}