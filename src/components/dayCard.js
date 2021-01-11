import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { isSameday } from "../util"
import {
  StyledCard,
  StyledCardContent,
  StyledDay,
  StyledNote,
  StyledDivider,
} from "./styled"

const DayCard = ({ dayObject, row }) => {
  const sameDay = isSameday(dayObject.day)
  return (
    <Grid item xs>
      <StyledCard
        background="transparent"
        borderRadius={0}
        square
        elevation={0}
      >
        {sameDay && (
          <StyledDivider orientation="vertical" variant="fullWidth" />
        )}
        <StyledCardContent square row={row}>
          <StyledDay>
            {dayObject.day.format("DD").toString()}
            {sameDay && (
              <Typography item variant="subtitle2" component="span">
                {dayObject.day.format("MMMM")}
              </Typography>
            )}
          </StyledDay>
          <StyledNote variant="body2" component="p">
            {dayObject.note}
          </StyledNote>
        </StyledCardContent>
      </StyledCard>
    </Grid>
  )
}

export default DayCard
