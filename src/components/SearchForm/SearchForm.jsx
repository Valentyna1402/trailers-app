import { Icon } from "../Icon/Icon";
import {
  Form,
  TopWrapper,
  InputWrapper,
  Input,
  BottomWrapper,
  Text,
  FilterWrapper,
  FilterTitle,
  FilterList,
  FilterItem,
  Button
} from './SearchForm.styled'

export const SearchForm = () => {
  const vehicleEquipment = ['AC', 'Automatic', 'Kitchen', 'TV', 'Shower', 'WC'];
  const vehicleType = ['Van', 'Fully Integrated', 'Alcove']
  return (
    <Form>
      <TopWrapper>
        <Text>Location</Text>
        <InputWrapper>
          <Icon iconid={"icon-map-pin"} width={18} height={20} fill='var(--main-black-color)' />
          <Input placeholder="Kyiv, Ukraine" />
        </InputWrapper>
      </TopWrapper>
      <BottomWrapper>
        <Text>Filters</Text>
        <FilterWrapper>
          <FilterTitle>Vehicle equipment</FilterTitle>
          <FilterList>
            {vehicleEquipment.map(el => {
              return <FilterItem key={el}>{el}</FilterItem>
            })}
          </FilterList>
        </FilterWrapper>
        <FilterWrapper>
          <FilterTitle>Vehicle type</FilterTitle>
          <FilterList>
          {vehicleType.map(el => {
              return <FilterItem key={el}>{el}</FilterItem>
            })}
          </FilterList>
        </FilterWrapper>
      </BottomWrapper>
      <Button>Search</Button>
    </Form>
  );
};
