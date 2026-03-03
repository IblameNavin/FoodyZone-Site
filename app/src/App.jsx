import { useState } from 'react'
import styled from 'styled-components'
import logo from "./assets/logo.svg"
import "./App.css"
import SearchResult from './components/SearchResult/SearchResult'
import { foodData } from './data/fooddata'

const App = () => {
  const [data] = useState(foodData)
  const [filteredData, setFilteredData] = useState(foodData)
  const [selectedBtn, setSelectedBtn] = useState("all")

  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase()
    if (!searchValue) return setFilteredData(data)
    setFilteredData(data.filter(food => food.name.toLowerCase().includes(searchValue)))
  }

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data)
      setSelectedBtn("all")
      return
    }
    setFilteredData(data.filter(food => food.type.toLowerCase() === type))
    setSelectedBtn(type)
  }

  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ]

  return (
    <>
      <Container>
        <TopSection>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} type="text" placeholder="Search Food" />
          </div>
        </TopSection>

        <FilterContainer>
          {filterBtns.map(btn => (
            <Button
              key={btn.name}
              isselected={selectedBtn === btn.type}
              onClick={() => filterFood(btn.type)}
            >
              {btn.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  )
}

export default App

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const TopSection = styled.section`
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .search input {
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }
`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`

export const Button = styled.button`
  background-color: ${({isselected}) => (isselected ? "gray" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover { background-color: #641a1a; }
`