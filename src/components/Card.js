import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  backgound: #fff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.09), 0 5px 5px rgba(0,0,0,0.06);
  padding: 11px;
  margin-bottom: 25px;
`;

const CardImage = styled('img')`
  max-width: 80vmin;
  border-bottom: 1px solid #DCDCDC;
  margin-bottom: 10px;
`;

const CardName = styled('span')`
  font-size: 3vmin;;
  font-weight: bold;
`;

const CardPrice = styled('span')`
  font-size: 2.5vmin;;
`;

const Stars = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const InactiveStar = styled(`span`)`
  opacity: 0.5;
`;

export default ({ image, name, price, stars }) => (
  <CardWrapper>
    <CardImage alt="A Blue Flower" src={`/images/${image}-flower.png`} />
    <CardName>{name}</CardName>
    <CardPrice>${(Math.round(price * 100) / 100).toFixed(2)}</CardPrice>
    <Stars>
      {
        [1, 2, 3, 4, 5].map((star) => {
          if (star <= stars) {
            return <span>★</span>
          } else {
            return <InactiveStar>★</InactiveStar>
          }
        })
      }
    </Stars>
  </CardWrapper>
);