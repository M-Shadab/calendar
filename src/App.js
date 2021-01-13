import React, { useState } from "react"
import moment from "moment"
import { StyledContainer } from "./components/styled"
import Month from "./components/month"
import AppBar from "./components/appBar"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const App = () => {
  const [value, setValue] = useState(moment())
  const matches2k = useMediaQuery("(min-width:2048px)")
  const matches4k = useMediaQuery("(min-width:3840px)")

  return (
    <StyledContainer
      maxWidth={matches4k ? "40vw" : matches2k ? "70vw" : "90vw"}
    >
      <AppBar value={value} onChange={setValue} />
      <Month value={value} onChange={(val) => setValue(val)} />
    </StyledContainer>
  )
}

export default App
