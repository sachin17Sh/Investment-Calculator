import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/Userinput"
import Results from './Components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 7,
    duration: 10
  })
  const isUnputValid = userInput.duration>= 1. 
  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput=>{
      return{
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })

  }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!isUnputValid && <p className="center">Please enter Duration greater than zero</p>}
   { isUnputValid && <Results input={userInput}/> }
    </>
  )
}

export default App
