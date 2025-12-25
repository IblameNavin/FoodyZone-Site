import React from 'react'
import styled from 'styled-components'
import backgroundImg from "../../assets/bg.png"
import { BASE_URL, Button, Container } from "../../App.jsx"


const SearchResult = ({data}) => {
  return (
       <FoodCardContainer>
        <Container>
        <FoodCards>
          {data?.map(({name, image, text, price})=><FoodCard key={name}>
         <div className="food_img">
          <img src={BASE_URL + image } alt="" />
         </div>
         <div className="food_info">
          <div className="info">
            <h3>{name}</h3>
            <p>{text}</p>
          </div>
          <Button>${price.toFixed(2)}</Button>
         </div>
          </FoodCard>)}
        </FoodCards>
        </Container>
      </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
    background-image: url(${backgroundImg});
    background-size: cover;
    min-height: calc(100vh - 210px);

    
`

const FoodCards = styled.div`
      display: flex;
      flex-wrap: wrap;
      row-gap: 32px ;
      column-gap: 20px;
      justify-content: center;
      align-items: center; 
      padding-top: 80px;
`

const FoodCard = styled.div`
  width: 340px;
  height: 167px;

  border: 0.66px solid transparent;
  border-image-source: radial-gradient(
    80.69% 208.78% at 108.28% 112.58%,
    #eabfff 0%,
    rgba(135, 38, 183, 0) 100%
  );
  border-image-slice: 1;

  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );

  border-radius: 5px;
  display: flex;
  gap: 12px;
  padding: 10px;
  color: white;
  padding: 8px;

  .food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3{
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p{
      margin-top: 4px;
      font-size: 14px;
    }
  }
`;
