import { FilterButton } from "../FilterButton/FilterButton";
import { Icon } from "../Icon/Icon";
import {
  Form,
  TopWrapper,
  Label,
  InputWrapper,
  Input,
  BottomWrapper,
  Text,
  FilterWrapper,
  FilterTitle,
  FilterList,
  Button,
} from "./SearchForm.styled";

export const SearchForm = () => {
  return (
    <Form className="container">
      <TopWrapper>
        <Label htmlFor="adress">Location</Label>
        <InputWrapper>
          <Icon
            iconid={"icon-map-pin"}
            width={18}
            height={20}
            fill="var(--main-black-color)"
          />
          <Input placeholder="Kyiv, Ukraine" id="adress" />
        </InputWrapper>
      </TopWrapper>
      <BottomWrapper>
        <Text>Filters</Text>
        <FilterWrapper>
          <FilterTitle>Vehicle equipment</FilterTitle>
          <Icon iconid={"icon-underline"} width={360} height={2} />
          <FilterList>
            <FilterButton iconid={"icon-ac"} text="AC" />
            <FilterButton iconid={"icon-transmission"} text="Automatic" />
            <FilterButton iconid={"icon-kitchen"} text="Kitchen" />
            <FilterButton iconid={"icon-tv"} text="TV" />
            <FilterButton iconid={"icon-shower"} text="Shower/WC" />
          </FilterList>
        </FilterWrapper>
        <FilterWrapper>
          <FilterTitle>Vehicle type</FilterTitle>
          <Icon iconid={"icon-underline"} width={360} height={2} />
          <FilterList>
            <FilterButton
              iconid={"icon-van"}
              text="Van"
              width={40}
              height={28}
            />
            <FilterButton
              iconid={"icon-fully-integrated"}
              text="Fully Integrated"
              width={40}
              height={28}
            />
            <FilterButton
              iconid={"icon-alcove"}
              text="Alcove"
              width={40}
              height={28}
            />
          </FilterList>
        </FilterWrapper>
      </BottomWrapper>
      <Button>Search</Button>
    </Form>
  );
};
