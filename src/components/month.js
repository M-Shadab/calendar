import React, { useState, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { getMonthDays } from "../util"
import DaysHeader from "./daysHeader"
import DayCard from "./dayCard"

const Month = ({ value }) => {
  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    const calendar = getMonthDays(value)
    setCalendar(calendar)
  }, [value])

  return (
    <>
      <DaysHeader />
      {calendar.map((week, rowIndex) => (
        <Grid container>
          {week.map((dayObject, index) => (
            <DayCard
              dayObject={dayObject}
              row={
                rowIndex % 2 === 0
                  ? index % 2 === 0
                    ? "even"
                    : "odd"
                  : index % 2 === 0
                  ? "odd"
                  : "even"
              }
            />
          ))}
        </Grid>
      ))}
    </>
  )
}

export default Month
