import * as Styled from './styles';

export const PetShopForm = () => {
  return (
    <Styled.Form>
      <Styled.FormInputContainer>
        <Styled.FormInput name="firstName" type="text" required />
        <Styled.FormInputLabel>First Name</Styled.FormInputLabel>
      </Styled.FormInputContainer>
      <Styled.FormInputContainer>
        <Styled.FormInput name="lastName" type="text" required />
        <Styled.FormInputLabel>Last Name</Styled.FormInputLabel>
      </Styled.FormInputContainer>
      <Styled.FormInputContainer>
        <Styled.FormInput name="petName" type="text" required />
        <Styled.FormInputLabel>Pet Name</Styled.FormInputLabel>
      </Styled.FormInputContainer>
      <Styled.FormInputContainer>
        <Styled.FormInput name="arrivalDate" type="date" required />
        <Styled.FormInputLabel>Date</Styled.FormInputLabel>
      </Styled.FormInputContainer>
    </Styled.Form>
  )
}