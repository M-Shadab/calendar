import React from "react"
import { ButtonGroup } from "@material-ui/core"
import { StyledButton, RoundedAppBar } from "./styled"
import Calendar from "../assets/svgs/calendar.svg"

const AppBar = ({ value, onChange }) => {
  return (
    <RoundedAppBar position="relative" elevation={0}>
      <ButtonGroup disableElevation variant="contained" border={0}>
        <StyledButton
          color="primary"
          startIcon={<img src={Calendar} alt="logo" />}
        >
          Today
        </StyledButton>
        <StyledButton
          variant="text"
          color="#999999"
          onClick={() => onChange(value.clone().subtract("1", "month"))}
        >
          {String.fromCharCode(171)}
        </StyledButton>
        <StyledButton
          variant="text"
          color="#999999"
          borderRadius={0}
          width="140px"
        >
          {value.format("MMMM")} {value.format("YYYY")}
        </StyledButton>
        <StyledButton
          variant="text"
          color="#999999"
          borderRadius={0}
          onClick={() => onChange(value.clone().add("1", "month"))}
        >
          {String.fromCharCode(187)}
        </StyledButton>
      </ButtonGroup>
    </RoundedAppBar>
  )
}

export default AppBar
