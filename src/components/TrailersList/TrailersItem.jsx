import React from "react";
import { Icon } from "../Icon/Icon";
import {
  Item,
  Image,
  InfoContainer,
  TitleWrapper,
  Title,
  PriceWrapper,
  FavoriteBtn,
  ReviewWrapper,
  Text,
  Description,
  DetailsList,
  DetailsItem,
  ShowMoreBtn,
  Wrapper,
} from "./TrailersItem.styled";

export const TrailersItem = (trailer) => {
  console.log(trailer.trailer.gallery[0]);
  return (
    <Item key={trailer.trailer._id}>
      <Image src={trailer.trailer.gallery[0]} alt={trailer.trailer.name} />
      <InfoContainer>
        <TitleWrapper>
          <Title>{trailer.trailer.name}</Title>
          <PriceWrapper>
            <p>€{trailer.trailer.price}</p>
            <FavoriteBtn>
              <Icon iconid={"icon-heart"} width={24} height={24} />
            </FavoriteBtn>
          </PriceWrapper>
        </TitleWrapper>
        <ReviewWrapper>
          <Wrapper>
            <Icon iconid={"icon-star-yellow"} width={16} height={16} />
            <Text>
              {trailer.trailer.rating}({trailer.trailer.reviews.length} Reviews)
            </Text>
          </Wrapper>
          <Wrapper>
            <Icon iconid={"icon-map-pin"} width={16} height={16} />
            <p>{trailer.trailer.location}</p>
          </Wrapper>
        </ReviewWrapper>
        <div>
          <Description>{trailer.trailer.description}</Description>
          <DetailsList>
            <DetailsItem>
              <Icon iconid={"icon-people"} width={18} height={13} />
              {trailer.trailer.adults} adults</DetailsItem>
            <DetailsItem>
            <Icon iconid={"icon-transmission"} width={18} height={13} />
              {trailer.trailer.transmission}</DetailsItem>
            <DetailsItem>
            <Icon iconid={"icon-petrol"} width={18} height={13} />
              {trailer.trailer.engine}</DetailsItem>
            {trailer.trailer.details.kitchen && (
              <DetailsItem>
                <Icon iconid={"icon-kitchen"} width={18} height={13} />
                Kitchen</DetailsItem>
            )}
            <DetailsItem>
            <Icon iconid={"icon-bed"} width={18} height={13} />
              {trailer.trailer.details.beds} beds</DetailsItem>
            {trailer.trailer.details.airConditioner && (
              <DetailsItem>
                <Icon iconid={"icon-ac"} width={18} height={13} />
                AC</DetailsItem>
            )}
          </DetailsList>
          <ShowMoreBtn type='button'>Show more</ShowMoreBtn>
        </div>
      </InfoContainer>
    </Item>
  );
};
