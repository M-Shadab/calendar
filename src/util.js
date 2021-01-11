import moment from "moment"

export const isSameday = (day) => day.isSame(moment(), "day")

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const getMonthDays = (value) => {
  const startDay = value.clone().startOf("month").startOf("week")
  const endDay = value.clone().endOf("month").startOf("week")
  let day = startDay.clone().subtract("1", "day")

  const calendar = []

  while (day.isBefore(endDay, "day")) {
    const week = Array(7)
      .fill(0)
      .map((item, index) => {
        const randomNumber = getRandomInt(7)
        return {
          day: day.add("1", "day").clone(),
          note: randomNumber === index ? "note" : null,
        }
      })
    calendar.push(week)
  }
  return calendar
}
