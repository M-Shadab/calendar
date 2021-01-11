import React, { useState } from "react"
import moment from "moment"
import { StyledContainer } from "./components/styled"
import Month from "./components/month"
import AppBar from "./components/appBar"

const App = () => {
  const [value, setValue] = useState(moment())

  return (
    <StyledContainer>
      <AppBar value={value} onChange={setValue} />
      <Month value={value} onChange={(val) => setValue(val)} />
    </StyledContainer>
  )
}

export default App
