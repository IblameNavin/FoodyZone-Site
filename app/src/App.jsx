import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from "./assets/logo.svg"
import "./App.css"
import SearchResult from './components/SearchResult/SearchResult'

export const BASE_URL = "http://localhost:9000"

const App = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [filteredData, setfilteredData] = useState()
    const [selectedBtn, setSelectedBtn] = useState("all")
    
    useEffect(() => {
      const fetchFoodData = async ()=>{
        setLoading(true)
        try{
          const response = await fetch(BASE_URL)
          const json = await response.json()
          setData(json)
          setfilteredData(json)
          setLoading(false)
        }
        catch(err){
          setError("Unable to fetch data")
        }
      }
      fetchFoodData()
    },[])

    const searchFood = (e) =>{
      const searchValue = e.target.value
      console.log(searchValue)

      if(searchValue == ""){
        setfilteredData(data)
      }
      const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()))
      setfilteredData(filter)
    }

    const filterFood = (type) =>{
      if(type === "all"){
        setfilteredData(data)
        setSelectedBtn("all")
        return
      }
      const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()))
      setfilteredData(filter)
      setSelectedBtn(type)
    } 
       

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    }
  ]
    
   


       
    if(error){
      return <div>{error}</div>
    }

    if(loading){
        return <div>loading...</div>
    }

    return (
      <>
        <Container>
          <TopSection>
            <div className="logo">
                <img src= {logo} alt="" />
            </div>

            <div className="search">
                <input onChange={searchFood} type="text" placeholder='Search Food' />
            </div>
          </TopSection>

          <FilterContainer>
            {filterBtns.map((value)=>(
              <Button key = {value.name} isselected = {selectedBtn === value.type} onClick={()=> filterFood(value.type)}
               >{value.name}</Button>
            ))}
           
          </FilterContainer>
        </Container>
        <SearchResult data = {filteredData } />
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

.search{
    input{
        background-color: transparent;
        border: 1px solid red;
        color: white;
        border-radius: 5px;
       height: 40px;
       font-size: 16px;
       padding: 0 10px;
    }
}
`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`

export const Button = styled.button`
    background-color: ${({isselected}) => (isselected? "gray": "#ff4343")};
    border-radius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
    cursor: pointer;
    &:hover{
      background-color: #641a1a;
    }

`
