import React from "react"
import { Grid, Box } from "@material-ui/core"

const daysName = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
]

const DaysHeader = () => {
  return (
    <Grid container item>
      {daysName.map((day, index) => (
        <Grid item xs key={index}>
          <Box
            component="p"
            align="center"
            py={1}
            m={0}
            style={{ color: "#999" }}
          >
            {day}
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default DaysHeader
