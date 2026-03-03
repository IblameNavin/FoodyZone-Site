import styled from 'styled-components'
import backgroundImg from "../../assets/bg.png"
import { Button, Container } from "../../App.jsx"

const SearchResult = ({ data }) => (
  <FoodCardContainer>
    <Container>
      <FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodCard key={name}>
            <div className="food_img">
              <img src={image} alt={name} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </Container>
  </FoodCardContainer>
)

export default SearchResult

const FoodCardContainer = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  min-height: calc(100vh - 210px);
`

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center; 
  padding-top: 80px;
`

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border-radius: 5px;
  display: flex;
  gap: 12px;
  padding: 8px;
  color: white;
  background: rgba(0,0,0,0.2); // subtle fallback

  .food_img img {
    width: 120px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    h3{ margin-top: 8px; font-size: 16px; font-weight: 500; }
    p{ margin-top: 4px; font-size: 14px; }
  }
`